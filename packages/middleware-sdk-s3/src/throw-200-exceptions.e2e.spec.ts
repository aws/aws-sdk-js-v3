import { S3 } from "@aws-sdk/client-s3";
import { GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";

jest.setTimeout(100000);

describe("S3 throw 200 exceptions", () => {
  const config = {
    region: "us-west-2",
  };
  const s3 = new S3(config);
  const stsClient = new STS(config);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randId = alphabet[(Math.random() * alphabet.length) | 0] + alphabet[(Math.random() * alphabet.length) | 0];
  let Bucket: string;
  let callerID: GetCallerIdentityCommandOutput;

  beforeAll(async () => {
    callerID = await stsClient.getCallerIdentity({});
    Bucket = `${callerID.Account}-${randId}-s3-200s-e2e-test-empty-${config.region}-${(Date.now() / 1000) | 0}`;

    await s3.createBucket({
      Bucket,
    });
  });

  afterAll(async () => {
    const list = await s3.listObjectsV2({
      Bucket,
    });
    for (const item of list.Contents ?? []) {
      await s3.deleteObject({
        Bucket,
        Key: item.Key,
      });
    }

    await s3.deleteBucket({
      Bucket,
    });
    s3.destroy();
  });

  it("should split stream successfully for less than 3kb payload and greater than 3kb payload", async () => {
    for (let i = 0; i < 10; ++i) {
      await s3.listObjects({
        Bucket,
      });

      await s3.putObject({
        Bucket,
        Key: i + "long-text-".repeat(10),
        Body: "abcd",
      });
    }
  });
});
