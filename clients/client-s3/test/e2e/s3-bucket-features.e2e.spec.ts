import { S3, waitUntilBucketExists, waitUntilBucketNotExists } from "@aws-sdk/client-s3";
import { type GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";
import { HttpRequest } from "@smithy/types";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("@aws-sdk/client-s3 - Working with Buckets", () => {
  const s3 = new S3({
    region: "us-west-2",
  });
  const s3East = new S3({
    region: "us-east-1",
    followRegionRedirects: true,
  });
  const s3PathStyle = new S3({
    region: "us-west-2",
    forcePathStyle: true,
  });
  const stsClient = new STS({
    region: "us-west-2",
  });

  function getBucketName(id: string, region = "us-west-2") {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const randId = Array.from({ length: 19 }, () => alphabet[(Math.random() * alphabet.length) | 0]).join("");

    console.log({
      Bucket: `${callerID.Account}-${randId}-${id}-${region}`,
    });

    return `${callerID.Account}-${randId}-${id}-${region}`;
  }

  let Bucket: string;
  let callerID: GetCallerIdentityCommandOutput;

  beforeAll(async () => {
    callerID = await stsClient.getCallerIdentity({});
    Bucket = getBucketName(`js-sdk-e2e`);
  });

  describe("CRUD buckets using classic endpoint", () => {
    let bucketEast: string | undefined;

    beforeAll(async () => {
      bucketEast = Bucket.replace("us-west-2", "us-east-1");
    });

    afterAll(async () => {
      await s3East.deleteBucket({
        Bucket: bucketEast,
      });
      await waitUntilBucketNotExists(
        {
          client: s3East,
          maxWaitTime: 60,
        },
        {
          Bucket: bucketEast,
        }
      );
    });

    it("should create and verify bucket in us-east-1", async () => {
      await s3East.createBucket({
        Bucket: bucketEast,
      });
      await waitUntilBucketExists(
        {
          client: s3East,
          maxWaitTime: 60,
        },
        {
          Bucket: bucketEast,
        }
      );
      await s3East.headBucket({ Bucket: bucketEast });
    });
  });

  describe("CRUD buckets using regional endpoint", () => {
    afterAll(async () => {
      await s3.deleteBucket({
        Bucket,
      });
      await waitUntilBucketNotExists(
        {
          client: s3,
          maxWaitTime: 60,
        },
        {
          Bucket,
        }
      );
    });
    it("should create and verify bucket in us-west-2", async () => {
      await s3.createBucket({
        Bucket,
      });
      await waitUntilBucketExists(
        {
          client: s3,
          maxWaitTime: 60,
        },
        {
          Bucket,
        }
      );
      await s3.headBucket({ Bucket });
    });
  });

  describe("Bucket CORS", () => {
    let corsBucket: string;

    beforeAll(async () => {
      corsBucket = getBucketName("cors");
    });

    afterAll(async () => {
      await s3.deleteBucket({
        Bucket: corsBucket,
      });
    });

    it("should configure and verify CORS settings", async () => {
      await s3.createBucket({
        Bucket: corsBucket,
      });
      await waitUntilBucketExists(
        {
          client: s3,
          maxWaitTime: 60,
        },
        {
          Bucket: corsBucket,
        }
      );

      await s3.putBucketCors({
        Bucket: corsBucket,
        CORSConfiguration: {
          CORSRules: [
            {
              AllowedMethods: ["DELETE", "POST", "PUT"],
              AllowedOrigins: ["http://example.com"],
              AllowedHeaders: ["*"],
              ExposeHeaders: ["x-amz-server-side-encryption"],
              MaxAgeSeconds: 5000,
            },
          ],
        },
      });
      const getBucketCors = await s3.getBucketCors({
        Bucket: corsBucket,
      });
      const corsConfig = getBucketCors.CORSRules?.[0];

      expect(corsConfig?.AllowedMethods).toContain("DELETE");
      expect(corsConfig?.AllowedMethods).toContain("POST");
      expect(corsConfig?.AllowedMethods).toContain("PUT");
      expect(corsConfig?.AllowedOrigins?.[0]).toBe("http://example.com");
      expect(corsConfig?.AllowedHeaders?.[0]).toBe("*");
      expect(corsConfig?.ExposeHeaders?.[0]).toBe("x-amz-server-side-encryption");
      expect(corsConfig?.MaxAgeSeconds).toBe(5000);
    });
  });

  describe("Bucket lifecycles", () => {
    let lifecycleBucket: string;

    beforeAll(async () => {
      lifecycleBucket = getBucketName("lifecyc");
    });

    afterAll(async () => {
      await s3.deleteBucket({
        Bucket: lifecycleBucket,
      });
    });

    it("should configure and verify lifecycle rules", async () => {
      await s3.createBucket({
        Bucket: lifecycleBucket,
      });
      await waitUntilBucketExists(
        {
          client: s3,
          maxWaitTime: 60,
        },
        {
          Bucket: lifecycleBucket,
        }
      );
      await s3.putBucketLifecycleConfiguration({
        Bucket: lifecycleBucket,
        LifecycleConfiguration: {
          Rules: [
            {
              Filter: {
                Prefix: "/",
              },
              Status: "Enabled",
              Transitions: [
                {
                  Days: 0,
                  StorageClass: "GLACIER",
                },
              ],
            },
          ],
        },
      });
      const lcConfig = await s3.getBucketLifecycleConfiguration({
        Bucket: lifecycleBucket,
      });

      expect(lcConfig?.Rules?.[0]?.Transitions?.[0]?.Days).toBe(0);
      expect(lcConfig?.Rules?.[0]?.Transitions?.[0]?.StorageClass).toBe("GLACIER");
    });
  });

  describe("Bucket Tagging", () => {
    let taggingBucket: string;

    beforeAll(async () => {
      taggingBucket = getBucketName("tagging");
    });

    afterAll(async () => {
      await s3.deleteBucket({
        Bucket: taggingBucket,
      });
    });

    it("should set and verify bucket tags", async () => {
      await s3.createBucket({
        Bucket: taggingBucket,
      });
      await s3.putBucketTagging({
        Bucket: taggingBucket,
        Tagging: {
          TagSet: [
            {
              Key: "KEY",
              Value: "VALUE",
            },
          ],
        },
      });
      const tags = await s3.getBucketTagging({
        Bucket: taggingBucket,
      });

      expect(tags.TagSet?.[0]).toEqual({
        Key: "KEY",
        Value: "VALUE",
      });
    });
  });

  describe("Access bucket following 307 redirects", () => {
    let locationConstrained: string;

    beforeAll(async () => {
      locationConstrained = getBucketName("loc-con", "eu-west-1");
    });

    afterAll(async () => {
      await s3East.deleteBucket({
        Bucket: locationConstrained,
      });
    });

    it("should handle bucket creation with location constraint", async () => {
      await s3East.createBucket({
        Bucket: locationConstrained,
        CreateBucketConfiguration: {
          LocationConstraint: "eu-west-1" as const,
        },
      });

      await waitUntilBucketExists(
        { client: s3East, maxWaitTime: 60 },
        {
          Bucket: locationConstrained,
        }
      );

      const headBucket = await s3East.headBucket({
        Bucket: locationConstrained,
      });
      expect(headBucket.BucketRegion).toEqual("eu-west-1");

      const bucketLocation = await s3.getBucketLocation({
        Bucket: locationConstrained,
      });
      expect(bucketLocation.LocationConstraint).toEqual("eu-west-1");
    });
  });

  describe("Working with bucket names containing dots", () => {
    let dottedName: string;

    beforeAll(async () => {
      dottedName = getBucketName("x.y.z");
    });

    afterAll(async () => {
      await s3.deleteBucket({
        Bucket: dottedName,
      });
    });

    it("should create bucket with DNS compatible dotted name", async () => {
      await s3.createBucket({
        Bucket: dottedName,
      });
      await waitUntilBucketExists(
        { client: s3, maxWaitTime: 60 },
        {
          Bucket: dottedName,
        }
      );
    });
  });

  describe("Operating on bucket using path style", () => {
    let pathStyle: string;

    beforeAll(async () => {
      pathStyle = getBucketName("path-style");
      s3PathStyle.middlewareStack.add(
        (next) => async (args) => {
          const request = args.request as HttpRequest;
          expect(request.path).toContain(pathStyle);
          expect(request.hostname).not.toContain(pathStyle);
          return next(args);
        },
        {
          step: "finalizeRequest",
          override: true,
          name: "assertionMiddleware",
        }
      );
    });

    afterAll(async () => {
      await s3PathStyle.deleteBucket({
        Bucket: pathStyle,
      });
    });

    it("should use path style addressing", async () => {
      await s3PathStyle.createBucket({
        Bucket: pathStyle,
      });

      await s3PathStyle.putObject({
        Bucket: pathStyle,
        Key: "hello",
        Body: "abc",
      });

      await s3PathStyle.deleteObject({
        Bucket: pathStyle,
        Key: "hello",
      });

      expect.assertions(6);
    });
  });
}, 60_000);
