import { SQS } from "@aws-sdk/client-sqs";
import { AwsJson1_0Protocol, AwsQueryProtocol } from "@aws-sdk/core/protocols";
import { describe, expect, test as it } from "vitest";

describe(
  SQS.name,
  () => {
    const sqs = {
      query: new SQS({
        region: "us-west-2",
        protocol: AwsQueryProtocol,
        credentials: aws?.testCredentials,
      }),
      json: new SQS({
        region: "us-west-2",
        protocol: AwsJson1_0Protocol,
        credentials: aws?.testCredentials,
      }),
    };

    for (const client of Object.values(sqs)) {
      it(`can make requests with ${client.config.protocol.constructor.name}`, async () => {
        const queues = await client.listQueues();
        expect(queues.QueueUrls ?? []).toBeInstanceOf(Array);
      });
    }
  },
  60_000
);
