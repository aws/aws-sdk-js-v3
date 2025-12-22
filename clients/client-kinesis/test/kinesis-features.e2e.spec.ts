import { Kinesis } from "@aws-sdk/client-kinesis";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(Kinesis.name, () => {
  let client: Kinesis;

  beforeAll(async () => {
    client = new Kinesis({ region: "us-west-2" });
  });

  describe("Error handling", () => {
    it("should contain resource not found error for non-existent stream", async () => {
      await expect(
        client.describeStream({
          StreamName: "non-existent-stream",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
