import { STS } from "@aws-sdk/client-sts";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(STS.name, () => {
  let client: STS;

  beforeAll(async () => {
    client = new STS({ region: "us-west-2" });
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
