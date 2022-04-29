import { KinesisClient, ListStreamsCommand } from "../src/index";

describe("@aws-sdk/client-kinesis", () => {
  const client = new KinesisClient({});
  const ONE_SECOND = 1 * 1000;

  it(
    `${ListStreamsCommand.name} should succeed`,
    async () => {
      const { StreamNames } = await client.send(new ListStreamsCommand({}));
      expect(StreamNames).toBeInstanceOf(Array);
    },
    ONE_SECOND
  );
});
