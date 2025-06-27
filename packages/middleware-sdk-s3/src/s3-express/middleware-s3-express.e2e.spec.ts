import { GetObjectCommand, PutObjectCommand, S3, waitUntilBucketExists } from "@aws-sdk/client-s3";
import { STS } from "@aws-sdk/client-sts";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import http from "http";
import https from "https";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

const region = "us-east-1";
const zone = "use1-az6";
const suffix = `${zone}--x-s3`;

describe("s3 express CRUD test suite", () => {
  let s3: S3; // test subject.
  let controller: S3; // separate test-assistant client.
  let bucketName: string; // test bucket (temp)

  // call recorder
  let recorder: {
    calls: Record<string, Record<string, number>>;
    reset(): void;
  };

  const promises = [] as Promise<any>[];

  // number of objects to create/delete.
  const SCALE = 5;

  function reset() {
    promises.length = 0;
    recorder.reset();
  }

  let createRecorder: typeof recorder.calls;
  let readWriteDeleteRecorder: typeof recorder.calls;

  beforeAll(async () => {
    ({ s3, controller, bucketName, recorder } = await createClientAndRecorder());

    await s3.createBucket({
      Bucket: bucketName,
      CreateBucketConfiguration: {
        Location: { Type: "AvailabilityZone", Name: zone },
        Bucket: { Type: "Directory", DataRedundancy: "SingleAvailabilityZone" },
      },
    });

    // Wait for the bucket to exist
    await waitUntilBucketExists({ client: s3, maxWaitTime: 120 }, { Bucket: bucketName });

    createRecorder = JSON.parse(JSON.stringify(recorder.calls));
    reset();

    for (let i = 0; i < SCALE; ++i) {
      promises.push(
        s3.putObject({
          Bucket: bucketName,
          Key: String(i),
          Body: Buffer.from("abcd"),
        })
      );
    }

    await Promise.all(promises);

    for (let i = 0; i < SCALE; ++i) {
      promises.push(
        s3
          .getObject({
            Bucket: bucketName,
            Key: String(i),
          })
          .then((r) => r.Body?.transformToString())
      );
    }

    await Promise.all(promises);

    for (let i = 0; i < SCALE; ++i) {
      promises.push(
        s3.deleteObject({
          Bucket: bucketName,
          Key: String(i),
        })
      );
    }

    await Promise.all(promises);

    readWriteDeleteRecorder = JSON.parse(JSON.stringify(recorder.calls));
    reset();
  });

  afterAll(async () => {
    await emptyAndDeleteBucket(controller, bucketName);
  });

  it("can create a bucket", () => {
    expect(createRecorder).toEqual({
      "CreateBucketCommand (normal)": { [bucketName]: 1 },
      "HeadBucketCommand (s3 express)": { [bucketName]: 1 },
      "CreateSessionCommand (normal)": { [bucketName]: 1 },
    });
  });

  it("can read/write/delete from a bucket", () => {
    expect(readWriteDeleteRecorder).toEqual({
      "PutObjectCommand (s3 express)": { [bucketName]: SCALE },
      "GetObjectCommand (s3 express)": { [bucketName]: SCALE },
      "DeleteObjectCommand (s3 express)": { [bucketName]: SCALE },
    });
  });

  it("can presign get", async () => {
    await controller.putObject({
      Bucket: bucketName,
      Key: "0",
      Body: Buffer.from("abcd"),
    });
    const getObject = new GetObjectCommand({
      Bucket: bucketName,
      Key: "0",
    });
    const url = await getSignedUrl(controller, getObject, { expiresIn: 3600 });

    const { data } = await new Promise<{
      request: http.ClientRequest;
      data: string;
    }>((resolve, reject) => {
      const request = https
        .get(url, (response) => {
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            resolve({
              request,
              data,
            });
          });
        })
        .on("error", reject);
    });

    expect(data).toEqual("abcd");
  });

  it.skip("can presign put", async () => {
    const body = Buffer.from("abcd");
    const putObject = new PutObjectCommand({
      Bucket: bucketName,
      Key: "0",
      Body: body,
    });
    const url = await getSignedUrl(controller, putObject, { expiresIn: 3600 });

    const { request, data } = await new Promise<{ request: http.ClientRequest; data: string }>((resolve, reject) => {
      const request = https
        .request(
          url,
          {
            headers: {
              "content-length": 4,
            },
          },
          (response) => {
            let data = "";
            response.on("data", (chunk) => {
              data += chunk;
            });

            response.on("end", () => {
              resolve({
                request,
                data,
              });
            });
          }
        )
        .on("error", reject);

      request.write(body);
      request.end();
    });

    expect(data).toEqual("xyz");
  });
}, 30_000);

async function createClientAndRecorder() {
  const sts = new STS({ region });
  const accountId = (await sts.getCallerIdentity({})).Account;

  const bucketName = `${accountId}-js-test-bucket-${(Math.random() + 1).toString(36).substring(2)}--${suffix}`;

  const s3 = new S3({
    region,
  });

  const recorder = {
    reset() {
      this.calls = {};
    },
    calls: {} as Record<string, Record<string, number>>,
  };

  s3.middlewareStack.add(
    (next, context) => async (args) => {
      const continuation = next(args);

      let s3ExpressSuffix = " (normal)";
      if (context.s3ExpressIdentity) {
        s3ExpressSuffix = " (s3 express)";
      }

      const commandName = context.commandName + s3ExpressSuffix;
      const input = args.input as any;
      const commandRecorder = (recorder.calls[commandName] = recorder.calls[commandName] ?? {});
      commandRecorder[input["Bucket"] ?? "-"] |= 0;
      commandRecorder[input["Bucket"] ?? "-"]++;

      return continuation;
    },
    {
      step: "deserialize",
      override: true,
      name: "s3-express-recorder",
    }
  );

  return {
    s3,
    controller: new S3({ region: "us-east-1" }),
    bucketName,
    recorder,
  };
}

async function emptyAndDeleteBucket(s3: S3, bucketName: string) {
  const Bucket = bucketName;
  try {
    await s3.headBucket({ Bucket });
  } catch (e) {
    return;
  }

  const list = await s3.listObjectsV2({ Bucket }).catch((e) => {
    if (!String(e).includes("NoSuchBucket")) {
      throw e;
    }
    return {
      Contents: [],
    };
  });

  const promises = [] as Promise<any>[];
  for (const key of list.Contents ?? []) {
    promises.push(s3.deleteObject({ Bucket, Key: key.Key }));
  }
  await Promise.all(promises);

  try {
    return await s3.deleteBucket({ Bucket });
  } catch (e) {
    if (!String(e).includes("NoSuchBucket")) {
      throw e;
    }
  }
}
