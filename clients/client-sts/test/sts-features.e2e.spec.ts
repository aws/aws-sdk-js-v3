import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { STS } from "@aws-sdk/client-sts";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Security Token Service Features", () => {
  let client: STS;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new STS({ region });
  });

  describe("Get caller identity", () => {
    it("should return caller identity with Account, Arn, and UserId", async () => {
      const result = await client.getCallerIdentity({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(typeof result.Account).toBe("string");
      expect(typeof result.Arn).toBe("string");
      expect(typeof result.UserId).toBe("string");
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid session token duration", async () => {
      await expect(
        client.getSessionToken({
          DurationSeconds: 60,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
        })
      );
    });
  });
});
