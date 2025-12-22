import { ACM } from "@aws-sdk/client-acm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ACM.name, () => {
  let client: ACM;

  beforeAll(async () => {
    client = new ACM({ region: "us-west-2" });
  });

  describe("Making a request to ACM service", () => {
    it("should successfully list certificates", async () => {
      const result = await client.listCertificates({});

      expect(Array.isArray(result.CertificateSummaryList)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle ValidationException for invalid certificate ARN", async () => {
      await expect(
        client.describeCertificate({
          CertificateArn: "fake_arn",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
