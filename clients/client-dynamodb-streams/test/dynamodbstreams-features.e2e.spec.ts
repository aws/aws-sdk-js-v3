import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DynamoDBStreams.name, () => {
  let client: DynamoDBStreams;

  beforeAll(async () => {
    client = new DynamoDBStreams({ region: "us-west-2" });
  });

  describe("Listing streams", () => {
    it("should successfully list streams", async () => {
      const result = await client.listStreams({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Streams)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid stream ARN", async () => {
      await expect(
        client.describeStream({
          StreamArn: "fake-stream",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
