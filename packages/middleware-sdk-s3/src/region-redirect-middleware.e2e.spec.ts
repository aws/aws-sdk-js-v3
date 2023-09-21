import {
  CreateBucketCommand,
  DeleteBucketCommand,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { STS } from "@aws-sdk/client-sts";

const regionConfigs = [
  { region: "us-east-1", followRegionRedirects: true },
  { region: "us-west-2", followRegionRedirects: true },
  { region: "us-west-1", followRegionRedirects: true },
];

const s3Clients = regionConfigs.map((config) => new S3Client(config));

const testValue = "Hello S3 global client!";

async function testS3GlobalClient() {
  const stsClient = new STS({});

  const callerID = await stsClient.getCallerIdentity({});

  const bucketNames = regionConfigs.map((config) => `${callerID.Account}-redirect-testing-${config.region}`);
  await Promise.all(
    bucketNames.map((bucketName, index) => s3Clients[index].send(new CreateBucketCommand({ Bucket: bucketName })))
  );
  // Upload objects to each bucket
  for (const bucketName of bucketNames) {
    for (const s3Client of s3Clients) {
      const objKey = `object-from-${await s3Client.config.region()}-client`;
      await s3Client.send(new PutObjectCommand({ Bucket: bucketName, Key: objKey, Body: testValue }));
    }
  }

  // Fetch, assert, and delete objects
  for (const bucketName of bucketNames) {
    for (const s3Client of s3Clients) {
      const objKey = `object-from-${await s3Client.config.region()}-client`;
      const { Body } = await s3Client.send(new GetObjectCommand({ Bucket: bucketName, Key: objKey }));
      const data = await Body?.transformToString();
      expect(data).toEqual(testValue);
      await s3Client.send(new DeleteObjectCommand({ Bucket: bucketName, Key: objKey }));
    }
  }

  for (let i = 0; i < s3Clients.length; ++i) {
    s3Clients[i].send(new DeleteBucketCommand({ Bucket: bucketNames[(i + 1) % bucketNames.length] }));
  }
}

describe("S3 Global Client Test", () => {
  it("Can perform all operations cross-regionally by following region redirect", async () => {
    await testS3GlobalClient();
  }, 50000);
});
