import { SQS } from "@aws-sdk/client-sqs";
import { AwsJson1_0Protocol, AwsQueryProtocol } from "@aws-sdk/core";
import { getHttpDebugLogPlugin } from "@aws-sdk/middleware-http-debug-log";
import { describe, expect, test as it } from "vitest";

describe(
  SQS.name,
  () => {
    const sqs = {
      query: new SQS({
        region: "us-west-2",
        protocol: AwsQueryProtocol,
      }),
      json: new SQS({
        region: "us-west-2",
        protocol: AwsJson1_0Protocol,
      }),
    };

    for (const client of Object.values(sqs)) {
      client.middlewareStack.use(getHttpDebugLogPlugin("line headers body formatted"));

      it(`can make requests with ${client.config.protocol.constructor.name}`, async () => {
        const queues = await client.listQueues();
        expect(queues.QueueUrls ?? []).toBeInstanceOf(Array);
      });
    }
  },
  60_000
);
