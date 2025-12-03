import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ACM } from "@aws-sdk/client-acm";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-acm", () => {
  let client: ACM;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ACM({ region });
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
