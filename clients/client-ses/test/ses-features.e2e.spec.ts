import { SES } from "@aws-sdk/client-ses";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(SES.name, () => {
  let client: SES;

  beforeAll(async () => {
    client = new SES({ region: "us-west-2" });
  });

  describe("Check quota", () => {
    it("should return quota with SentLast24Hours and MaxSendRate", async () => {
      const result = await client.getSendQuota({});

      expect(result.SentLast24Hours).toBeDefined();
      expect(typeof result.SentLast24Hours).toBe("number");
      expect(result.MaxSendRate).toBeDefined();
      expect(typeof result.MaxSendRate).toBe("number");
    });
  });

  describe("Verify email", () => {
    it("should return 200 status code for email verification request", async () => {
      const result = await client.verifyEmailIdentity({
        EmailAddress: "foo@example.com",
      });

      expect(result.$metadata?.httpStatusCode).toBe(200);
    });
  });

  describe("Rescue SES InvalidParameterValue", () => {
    it("should get InvalidParameterValue error for invalid email address", async () => {
      try {
        await client.verifyEmailIdentity({
          EmailAddress: "abc123",
        });
        expect.fail("Expected InvalidParameterValue error was not thrown");
      } catch (error: any) {
        expect(error.name).toBe("InvalidParameterValue");
        expect(error.message).toContain("Invalid email address<abc123>.");
      }
    });
  });
});
