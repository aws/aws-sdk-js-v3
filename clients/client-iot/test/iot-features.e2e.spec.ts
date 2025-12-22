import { IoT } from "@aws-sdk/client-iot";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(IoT.name, () => {
  let client: IoT;

  beforeAll(async () => {
    client = new IoT({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully list policies", async () => {
      const result = await client.listPolicies({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.policies)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain invalid request exception for fake certificate ID", async () => {
      await expect(
        client.describeCertificate({
          certificateId: "fake_id",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidRequestException",
        })
      );
    });
  });
});
