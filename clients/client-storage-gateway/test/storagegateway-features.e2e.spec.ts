import { StorageGateway } from "@aws-sdk/client-storage-gateway";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(StorageGateway.name, () => {
  let client: StorageGateway;

  beforeAll(async () => {
    client = new StorageGateway({ region: "us-west-2" });
  });

  describe("Listing Gateways", () => {
    it("should successfully list gateways", async () => {
      const result = await client.listGateways({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Gateways)).toBe(true);
    });
  });

  describe("Activating a Gateway", () => {
    it("should get InvalidGatewayRequestException with 400 status when trying to activate", async () => {
      await expect(
        client.activateGateway({
          ActivationKey: "INVALIDKEY",
          GatewayName: `aws-sdk-js-${Date.now()}`,
          GatewayTimezone: "GMT-5:00",
          GatewayRegion: "us-east-1",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidGatewayRequestException",
          $metadata: expect.objectContaining({
            httpStatusCode: 400,
          }),
        })
      );
    });
  });
});
