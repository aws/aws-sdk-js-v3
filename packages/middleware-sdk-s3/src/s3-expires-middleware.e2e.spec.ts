import { setTestCredentials } from "@aws-sdk/aws-util-test";
import { S3 } from "@aws-sdk/client-s3";
import { GetCallerIdentityCommandOutput, STS } from "@aws-sdk/client-sts";
import { afterAll, beforeAll, describe, expect, test as it, vi } from "vitest";

describe("S3 Expires e2e test", () => {
  const s3 = new S3({
    region: "us-west-2",
    logger: {
      trace() {},
      debug() {},
      info() {},
      warn: vi.fn(),
      error() {},
    },
  });
  const stsClient = new STS({ region: "us-west-2" });

  let callerID = null as unknown as GetCallerIdentityCommandOutput;
  let Bucket: string;

  // random element limited to 2 letters to avoid concurrent IO, and
  // to limit bucket count to 676 if there is failure to delete them.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randId = alphabet[(Math.random() * alphabet.length) | 0] + alphabet[(Math.random() * alphabet.length) | 0];

  beforeAll(async () => {
    await setTestCredentials();
    callerID = await stsClient.getCallerIdentity({});
    Bucket = `${callerID.Account}-${randId}-s3-expires`;
    await s3.createBucket({
      Bucket,
    });
  });

  afterAll(async () => {
    await deleteBucket(s3, Bucket);
  });

  const staticDate = new Date(0);
  const dateString = "Thu, 01 Jan 1970 00:00:00 GMT";

  it("should parse Expires from response if it is valid date-time, and include ExpiresString", async () => {
    await s3.putObject({
      Bucket,
      Key: "good-expires",
      Expires: staticDate,
      Body: "good-expires",
    });

    const get = await s3.getObject({
      Bucket,
      Key: "good-expires",
    });
    await get.Body?.transformToByteArray(); // drain stream.

    expect(get.Expires?.getTime()).toEqual(staticDate.getTime());
    expect(get.ExpiresString).toEqual(dateString);
  });

  it("should fail with a non-blocking warning if Expires is not a valid date-time, and include the raw string in ExpiresString", async () => {
    await s3.putObject({
      Bucket,
      Key: "bad-expires",
      Expires: new Date("invalid date"),
      Body: "bad-expires",
    });

    const get = await s3.getObject({
      Bucket,
      Key: "bad-expires",
    });
    await get.Body?.transformToByteArray(); // drain stream.

    expect(get.Expires).toBeUndefined();
    expect(s3.config.logger.warn).toHaveBeenCalledWith(
      `AWS SDK Warning for S3Client::GetObjectCommand response parsing (undefined, NaN undefined NaN NaN:NaN:NaN GMT): TypeError: Invalid RFC-7231 date-time value`
    );
    expect(get.ExpiresString).toEqual("undefined, NaN undefined NaN NaN:NaN:NaN GMT");
  });
}, 25_000);

async function deleteBucket(s3: S3, bucketName: string) {
  const Bucket = bucketName;

  try {
    await s3.headBucket({
      Bucket,
    });
  } catch (e) {
    return;
  }

  const list = await s3
    .listObjects({
      Bucket,
    })
    .catch((e) => {
      if (!String(e).includes("NoSuchBucket")) {
        throw e;
      }
      return {
        Contents: [],
      };
    });

  const promises = [] as any[];
  for (const key of list.Contents ?? []) {
    promises.push(
      s3.deleteObject({
        Bucket,
        Key: key.Key,
      })
    );
  }
  await Promise.all(promises);

  try {
    return await s3.deleteBucket({
      Bucket,
    });
  } catch (e) {
    if (!String(e).includes("NoSuchBucket")) {
      throw e;
    }
  }
}
