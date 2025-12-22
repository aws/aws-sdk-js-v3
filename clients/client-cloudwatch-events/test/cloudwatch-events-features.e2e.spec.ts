import { CloudWatchEvents } from "@aws-sdk/client-cloudwatch-events";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CloudWatchEvents.name, () => {
  let client: CloudWatchEvents;

  beforeAll(async () => {
    client = new CloudWatchEvents({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully list rules and return Rules as a list", async () => {
      const result = await client.listRules({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Rules)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle ResourceNotFoundException for fake rule", async () => {
      await expect(client.describeRule({ Name: "fake_rule" })).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
