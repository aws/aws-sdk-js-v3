import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ConfigService } from "@aws-sdk/client-config-service";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Config Features", () => {
  let client: ConfigService;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ConfigService({ region });
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
