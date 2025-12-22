import { ConfigService } from "@aws-sdk/client-config-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ConfigService.name, () => {
  let client: ConfigService;

  beforeAll(async () => {
    client = new ConfigService({ region: "us-west-2" });
  });

  describe("Listing delivery channels", () => {
    it("should successfully describe delivery channels", async () => {
      const result = await client.describeDeliveryChannels({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.DeliveryChannels)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid parameters", async () => {
      await expect(
        client.putDeliveryChannel({
          DeliveryChannel: { name: "" },
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
