import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudFront } from "@aws-sdk/client-cloudfront";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-cloudfront", () => {
  let client: CloudFront;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudFront({ region });
  }, 60_000);

  describe("List distributions", () => {
    it("should return distribution list with quantity property", async () => {
      const result = await client.listDistributions({});

      expect(typeof result.DistributionList?.Quantity).toBe("number");
    });
  });

  describe("Create a distribution", () => {
    it("should handle NoSuchOrigin error for invalid origin", async () => {
      const uniqueRef = `aws-js-sdk-${Date.now()}-${process.pid}-${Math.random().toString(36).substr(2, 9)}`;
      const distributionConfig = {
        CallerReference: uniqueRef,
        Aliases: {
          Quantity: 0,
        },
        DefaultRootObject: "",
        Origins: {
          Items: [
            {
              Id: "InvalidOrigin",
              DomainName: "example.com",
              CustomOriginConfig: {
                HTTPPort: 80,
                HTTPSPort: 443,
                OriginProtocolPolicy: "match-viewer" as const,
              },
            },
          ],
          Quantity: 1,
        },
        DefaultCacheBehavior: {
          TargetOriginId: "NonExistentOrigin",
          ForwardedValues: {
            QueryString: false,
            Cookies: {
              Forward: "all" as const,
            },
          },
          TrustedSigners: {
            Items: [],
            Enabled: false,
            Quantity: 0,
          },
          ViewerProtocolPolicy: "allow-all" as const,
          MinTTL: 0,
        },
        CacheBehaviors: {
          Items: [],
          Quantity: 0,
        },
        Comment: "",
        Logging: {
          Enabled: false,
          Bucket: "invalidbucket.s3.amazonaws.com",
          Prefix: "prefix",
          IncludeCookies: false,
        },
        PriceClass: "PriceClass_All" as const,
        Enabled: false,
      };

      await expect(
        client.createDistribution({
          DistributionConfig: distributionConfig,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "NoSuchOrigin",
          $metadata: expect.objectContaining({
            httpStatusCode: 404,
          }),
        })
      );
    });
  });

  describe("Error handling", () => {
    it("should handle InvalidArgument for empty name prefix", async () => {
      const distributionConfig = {
        CallerReference: "",
        Aliases: {
          Quantity: 0,
        },
        DefaultRootObject: "",
        Origins: {
          Items: [
            {
              Id: "origin",
              DomainName: "example.com",
              CustomOriginConfig: {
                HTTPPort: 80,
                HTTPSPort: 443,
                OriginProtocolPolicy: "match-viewer" as const,
              },
            },
          ],
          Quantity: 1,
        },
        DefaultCacheBehavior: {
          TargetOriginId: "origin",
          ForwardedValues: {
            QueryString: false,
            Cookies: {
              Forward: "all" as const,
            },
          },
          TrustedSigners: {
            Items: [],
            Enabled: false,
            Quantity: 0,
          },
          ViewerProtocolPolicy: "allow-all" as const,
          MinTTL: 0,
        },
        CacheBehaviors: {
          Items: [],
          Quantity: 0,
        },
        Comment: "",
        Logging: {
          Enabled: false,
          Bucket: "invalidbucket.s3.amazonaws.com",
          Prefix: "prefix",
          IncludeCookies: false,
        },
        PriceClass: "PriceClass_All" as const,
        Enabled: false,
      };

      await expect(
        client.createDistribution({
          DistributionConfig: distributionConfig,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidArgument",
        })
      );
    });
  });
}, 60_000);
