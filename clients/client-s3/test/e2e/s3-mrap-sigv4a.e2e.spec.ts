import {
  S3Client,
  CreateBucketCommand,
  HeadBucketCommand,
  ListObjectsV2Command,
  waitUntilBucketExists,
} from "@aws-sdk/client-s3";
import {
  S3ControlClient,
  CreateMultiRegionAccessPointCommand,
  DescribeMultiRegionAccessPointOperationCommand,
  GetMultiRegionAccessPointCommand,
  Region as S3ControlRegion,
} from "@aws-sdk/client-s3-control";
import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";

import "@smithy/signature-v4a";

const MRAP_NAME = "jsv3-e2e-mrap-sigv4a-min";
const BUCKET_PREFIX = "jsv3-e2e-mrap-sigv4a-min-";
const REGION_1 = "us-west-2";
const REGION_2 = "us-east-1";
const POLLING_DELAY_SECONDS = 10;
const OPERATION_TIMEOUT_MINUTES = 15;

describe("S3 MRAP SigV4a E2E Test", () => {
  let s3ControlClient: S3ControlClient;
  let accountId: string;
  let mrapArn: string | null = null;
  let bucket1Name: string;
  let bucket2Name: string;

  vi.setConfig({ hookTimeout: OPERATION_TIMEOUT_MINUTES * 60 * 1000 });

  const pollOperation = async (requestTokenArn: string): Promise<void> => {
    const deadline = Date.now() + OPERATION_TIMEOUT_MINUTES * 60 * 1000;
    while (Date.now() < deadline) {
      const { AsyncOperation } = await s3ControlClient.send(
        new DescribeMultiRegionAccessPointOperationCommand({ AccountId: accountId, RequestTokenARN: requestTokenArn })
      );
      if (AsyncOperation?.RequestStatus === "SUCCEEDED") return;
      if (AsyncOperation?.RequestStatus === "FAILED") throw new Error(`S3Control operation failed`);
      await new Promise((resolve) => setTimeout(resolve, POLLING_DELAY_SECONDS * 1000));
    }
    throw new Error("S3Control operation timed out.");
  };

  const ensureBucket = async (bucketName: string, region: string): Promise<void> => {
    const s3 = new S3Client({ region });
    try {
      await s3.send(new HeadBucketCommand({ Bucket: bucketName }));
    } catch (error: any) {
      if (error.name === "NotFound") {
        await s3.send(new CreateBucketCommand({ Bucket: bucketName }));
        await waitUntilBucketExists({ client: s3, maxWaitTime: 120 }, { Bucket: bucketName });
      } else {
        throw error;
      }
    } finally {
      s3.destroy();
    }
  };

  beforeAll(async () => {
    const stsClient = new STSClient({ region: REGION_1 });
    s3ControlClient = new S3ControlClient({ region: REGION_1 });
    try {
      const { Account } = await stsClient.send(new GetCallerIdentityCommand({}));
      if (!Account) throw new Error("Could not determine AWS Account ID.");
      accountId = Account;
    } finally {
      stsClient.destroy();
    }

    bucket1Name = `${BUCKET_PREFIX}${accountId}-${REGION_1}`;
    bucket2Name = `${BUCKET_PREFIX}${accountId}-${REGION_2}`;

    await ensureBucket(bucket1Name, REGION_1);
    await ensureBucket(bucket2Name, REGION_2);

    try {
      const { AccessPoint } = await s3ControlClient.send(
        new GetMultiRegionAccessPointCommand({ AccountId: accountId, Name: MRAP_NAME })
      );
      mrapArn = `arn:aws:s3::${accountId}:accesspoint/${AccessPoint?.Alias}`;
    } catch (error) {
      const createResponse = await s3ControlClient.send(
        new CreateMultiRegionAccessPointCommand({
          AccountId: accountId,
          Details: {
            Name: MRAP_NAME,
            Regions: [{ Bucket: bucket1Name }, { Bucket: bucket2Name }] as S3ControlRegion[],
            PublicAccessBlock: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          },
        })
      );
      if (!createResponse.RequestTokenARN) throw new Error("Create MRAP did not return token.");
      await pollOperation(createResponse.RequestTokenARN);
      const { AccessPoint } = await s3ControlClient.send(
        new GetMultiRegionAccessPointCommand({ AccountId: accountId, Name: MRAP_NAME })
      );
      mrapArn = `arn:aws:s3::${accountId}:accesspoint/${AccessPoint?.Alias}`;
    }
    if (!mrapArn) throw new Error("Failed to get MRAP ARN.");
  });

  afterAll(async () => {
    if (s3ControlClient) s3ControlClient.destroy();
  });

  it("should successfully ListObjectsV2 against MRAP using SigV4a", async () => {
    expect(mrapArn).toBeDefined();

    const s3SigV4aClient = new S3Client({ region: REGION_1 });

    try {
      const command = new ListObjectsV2Command({ Bucket: mrapArn! });
      const response = await s3SigV4aClient.send(command);

      expect(response.$metadata.httpStatusCode).toBe(200);
      expect(response.Contents ?? []).toBeInstanceOf(Array);
    } catch (error) {
      console.error("ListObjectsV2 against MRAP failed:", error);
      throw error;
    } finally {
      s3SigV4aClient.destroy();
    }
  });
});
