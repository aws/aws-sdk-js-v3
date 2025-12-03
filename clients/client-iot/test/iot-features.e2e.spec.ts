import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { IoT } from "@aws-sdk/client-iot";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS IoT Features", () => {
  let client: IoT;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new IoT({ region });
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
