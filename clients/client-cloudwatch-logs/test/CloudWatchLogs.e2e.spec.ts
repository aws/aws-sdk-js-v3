import { CloudWatchLogs } from "@aws-sdk/client-cloudwatch-logs";
import { GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";
import { describe, expect, test as it } from "vitest";

describe(
  CloudWatchLogs.name,
  {
    timeout: 120_000,
    retry: 4,
  },
  () => {
    const cwlDefault = new CloudWatchLogs({
      region: "us-west-2",
    });

    it("should be able to use an event stream to tail logs", async () => {
      const sts = new STS({ region: "us-west-2" });
      const id: GetCallerIdentityCommandOutput = await sts.getCallerIdentity();
      const accountId = id.Account;

      for (const cwl of [cwlDefault]) {
        const testLogGroupName = `/jsv3-e2e-${accountId}`;

        let logGroups = await cwl.listLogGroups({
          logGroupNamePattern: `^${testLogGroupName}`,
          limit: 1,
        });

        if (!logGroups.logGroups?.length) {
          await cwl.createLogGroup({
            logGroupName: testLogGroupName,
          });
          logGroups = await cwl.listLogGroups({
            logGroupNamePattern: `^${testLogGroupName}`,
            limit: 1,
          });
        }

        const groupArn = logGroups.logGroups?.[0]?.logGroupArn;

        if (groupArn) {
          const liveTail = await cwl.startLiveTail({
            logGroupIdentifiers: [groupArn],
          });

          let pagesRead = 0;

          for await (const page of liveTail.responseStream ?? []) {
            pagesRead += 1;

            if (pagesRead === 1) {
              expect(page.sessionStart?.requestId).toBeTypeOf("string");
              expect(page.sessionStart?.sessionId).toBeTypeOf("string");
              expect(page.sessionStart?.logGroupIdentifiers).toEqual([groupArn]);
            } else if (pagesRead === 2) {
              expect(page.sessionUpdate?.sessionMetadata).toMatchObject({
                sampled: expect.any(Boolean),
              });
            } else if (pagesRead > 2) {
              break;
            }
          }

          cwl.destroy();
        }
      }
    });
  }
);
