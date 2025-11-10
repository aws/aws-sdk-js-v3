import { CloudWatchLogs } from "@aws-sdk/client-cloudwatch-logs";
import { AwsJson1_1Protocol, AwsSmithyRpcV2CborProtocol } from "@aws-sdk/core/protocols";
import type { IncomingMessage } from "node:http";
import { describe, expect, test as it } from "vitest";

describe(
  CloudWatchLogs.name,
  () => {
    const cwlDefault = new CloudWatchLogs({
      region: "us-west-2",
      protocol: new AwsJson1_1Protocol({
        defaultNamespace: "com.amazonaws.cloudwatchlogs",
        serviceTarget: "Logs_20140328",
        awsQueryCompatible: false,
      }),
    });
    const cwlCustom = new CloudWatchLogs({
      region: "us-west-2",
      protocol: new AwsSmithyRpcV2CborProtocol({ defaultNamespace: "com.amazonaws.cloudwatchlogs" }),
    });

    it("should be able to make requests with runtime protocol selection", async () => {
      for (const cwl of [cwlDefault, cwlCustom]) {
        const logGroups = await cwl.listLogGroups();

        expect(logGroups).toMatchObject({
          $metadata: {
            httpStatusCode: 200,
          },
          logGroups: expect.any(Array),
        });
        expect(logGroups.nextToken ?? "").toBeTypeOf("string");
      }
    });

    it("should be able to use an event stream to tail logs", async () => {
      for (const cwl of [cwlDefault, cwlCustom]) {
        const logGroups = await cwl.listLogGroups({
          limit: 1,
        });

        const groupArn = logGroups.logGroups?.[0].logGroupArn;

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
  },
  120_000
);
