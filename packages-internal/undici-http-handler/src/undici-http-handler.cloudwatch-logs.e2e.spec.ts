import { CloudWatchLogs } from "@aws-sdk/client-cloudwatch-logs";
import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { UndiciHttpHandler } from "./index";

describe("CloudWatchLogs", () => {
  const logGroupName = `/test/undici-http-handler/${randomUUID()}`;
  const logStreamName = "test-stream";
  const client = new CloudWatchLogs({ requestHandler: new UndiciHttpHandler() });
  let logGroupArn: string;

  beforeAll(async () => {
    await client.createLogGroup({ logGroupName });
    await client.createLogStream({ logGroupName, logStreamName });

    const { logGroups } = await client.describeLogGroups({
      logGroupNamePrefix: logGroupName,
    });
    // The ARN from describeLogGroups ends with ":*", which startLiveTail doesn't accept.
    logGroupArn = logGroups![0].arn!.replace(/:?\*$/, "");
  });

  afterAll(async () => {
    await client.deleteLogStream({ logGroupName, logStreamName }).catch(() => {});
    await client.deleteLogGroup({ logGroupName }).catch(() => {});
    client.destroy();
  });

  it("startLiveTail", { timeout: 60_000 }, async () => {
    expect.assertions(4);
    const testMessage = "test message";

    const response = await client.startLiveTail({
      logGroupIdentifiers: [logGroupArn],
    });

    expect(response.$metadata.httpStatusCode).toBe(200);
    expect(response.responseStream).toBeDefined();

    // Put log events AFTER starting the live tail so they appear in the stream
    const putEventsPromise = async () => {
      // Wait for the live tail session to establish before putting events
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await client.putLogEvents({
        logGroupName,
        logStreamName,
        logEvents: [{ timestamp: Date.now(), message: testMessage }],
      });
    };

    const consumeStreamPromise = async () => {
      for await (const event of response.responseStream!) {
        if (event.sessionStart) {
          expect(event.sessionStart.logGroupIdentifiers).toContain(logGroupArn);
        }
        if (event.sessionUpdate) {
          const messages = event.sessionUpdate.sessionResults?.map((r) => r.message) ?? [];
          if (messages.includes(testMessage)) {
            expect(messages).toContain(testMessage);
            break;
          }
        }
      }
    };

    await Promise.all([putEventsPromise(), consumeStreamPromise()]);
  });
});
