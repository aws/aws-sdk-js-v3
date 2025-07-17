import { S3, waitUntilBucketExists, waitUntilBucketNotExists } from "@aws-sdk/client-s3";
import { type GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("@aws-sdk/client-s3 - Working with Buckets", () => {
  const config = {
    region: "us-west-2",
  };
  const s3 = new S3(config);
  const s3East = new S3({
    region: "us-east-1",
  });
  const stsClient = new STS(config);

  function getBucketName(id: string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randId = Array.from({ length: 6 }, () => alphabet[(Math.random() * alphabet.length) | 0]).join("");
    return `${callerID.Account}-${randId}-js-sdk-e2e-${config.region}-${(Date.now() / 1000) | 0}`;
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

  // describe("Bucket Tagging", () => {
  //   let s3Client: S3Client;
  //
  //   it("should set and verify bucket tags", async () => {
  //     const bucket = await createBucket(s3Client);
  //     await putBucketTag(s3Client, bucket, "KEY", "XXXXX");
  //     const tags = await getBucketTags(s3Client, bucket);
  //
  //     expect(tags[0]).toEqual({
  //       Key: "KEY",
  //       Value: "VALUE",
  //     });
  //   });
  // });

  // describe("Access bucket following 307 redirects", () => {
  //   let s3Client: S3Client;
  //
  //   it("should handle bucket creation with location constraint", async () => {
  //     s3Client = new S3Client({
  //       region: "us-east-1",
  //       signatureVersion: "s3",
  //     });
  //
  //     const bucket = await createBucketWithLocation(s3Client, "XXXXXXXXX");
  //     expect(await bucketExistsInRegion(s3Client, bucket, "XXXXXXXXX")).toBe(true);
  //     expect(await getBucketLocation(s3Client, bucket)).toBe("XXXXXXXXX");
  //     await deleteBucketInRegion(s3Client, bucket, "XXXXXXXXX");
  //   });
  // });
  //
  // describe("Working with bucket names containing dots", () => {
  //   let s3Client: S3Client;
  //
  //   it("should create bucket with DNS compatible dotted name", async () => {
  //     const bucket = await createBucketWithDottedName(s3Client);
  //     expect(await bucketExists(s3Client, bucket)).toBe(true);
  //     // await deleteBucket(s3Client, bucket);
  //     // expect(await bucketExists(s3Client, bucket)).toBe(false);
  //   });
  // });
  //
  // describe("Operating on bucket using path style", () => {
  //   let s3Client: S3Client;
  //
  //   it("should use path style addressing", async () => {
  //     s3Client = new S3Client({ forcePathStyle: true });
  //     const bucket = await createBucket(s3Client);
  //
  //     await putObject(s3Client, bucket, "hello", "abc");
  //     const obj = await getObject(s3Client, bucket, "hello");
  //
  //     expect(obj.request.path).toContain(bucket);
  //     expect(obj.request.hostname).not.toContain(bucket);
  //
  //     await deleteObject(s3Client, bucket, "hello");
  //   });
  // });

  // Known bug: https://github.com/aws/aws-sdk-js-v3/issues/1802
  /*
  describe('Follow 307 redirect on new buckets', () => {
    let s3Client: S3Client;

    it('should handle redirects with large objects', async () => {
      s3Client = new S3Client({
        region: 'us-east-1',
        signatureVersion: 's3'
      });

      const bucket = await createBucketWithLocation(s3Client, 'XXXXXXXXX');
      await putLargeObject(s3Client, bucket, 'largeobject');
      expect(await objectExists(s3Client, bucket, 'largeobject')).toBe(true);
      await deleteObject(s3Client, bucket, 'largeobject');
      await deleteBucket(s3Client, bucket);
    });
  });
  */
}, 60_000);
