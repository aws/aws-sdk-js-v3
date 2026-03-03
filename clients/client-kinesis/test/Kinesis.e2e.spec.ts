import { KinesisClient, ListStreamsCommand } from "@aws-sdk/client-kinesis";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-kinesis", () => {
  beforeAll(async () => {});

  const client = new KinesisClient({ region: "us-west-2", credentials: aws?.testCredentials });
  const ONE_SECOND = 1000;

  it(
    `${ListStreamsCommand.name} should succeed`,
    async () => {
      const { StreamNames } = await client.send(new ListStreamsCommand({}));
      expect(StreamNames).toBeInstanceOf(Array);
    },
    ONE_SECOND // prevent issue https://github.com/aws/aws-sdk-js-v3/issues/1206
  );
});
