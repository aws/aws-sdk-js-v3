import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { StorageGateway } from "@aws-sdk/client-storage-gateway";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Storage Gateway Features", () => {
  let client: StorageGateway;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new StorageGateway({ region });
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
