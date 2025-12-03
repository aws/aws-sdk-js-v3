import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DeviceFarm } from "@aws-sdk/client-device-farm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Device Farm", () => {
  let client: DeviceFarm;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DeviceFarm({ region });
  });

  describe("Listing devices", () => {
    it("should successfully list devices", async () => {
      const result = await client.listDevices({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.devices)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain not found error for invalid device ARN", async () => {
      await expect(
        client.getDevice({
          arn: "arn:aws:devicefarm:us-west-2::device:00000000000000000000000000000000",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "NotFoundException",
        })
      );
    });
  });
});
