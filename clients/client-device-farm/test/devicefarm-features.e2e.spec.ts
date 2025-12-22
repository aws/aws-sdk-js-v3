import { DeviceFarm } from "@aws-sdk/client-device-farm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(DeviceFarm.name, () => {
  let client: DeviceFarm;

  beforeAll(async () => {
    client = new DeviceFarm({ region: "us-west-2" });
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
