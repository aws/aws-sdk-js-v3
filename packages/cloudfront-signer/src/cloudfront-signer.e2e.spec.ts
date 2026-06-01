import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudFront } from "@aws-sdk/client-cloudfront";
import { S3 } from "@aws-sdk/client-s3";
import { STS } from "@aws-sdk/client-sts";
import { createPublicKey, generateKeyPairSync } from "node:crypto";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getSignedUrl } from "./index";

const RESOURCE_PREFIX = "aws-sdk-js-cf-signer-e2e";
const REGION = "us-west-2";
const OBJECT_KEY = "test-object.txt";
const OBJECT_BODY = "cloudfront-signer e2e test content";

describe("@aws-sdk/cloudfront-signer e2e", () => {
  let domain: string;
  let keyPairId: string;
  let privateKey: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    const cf = new CloudFront({ region: REGION });
    const s3 = new S3({ region: REGION });
    const sts = new STS({ region: REGION });

    // Derive account-regional namespace bucket name
    const { Account } = await sts.getCallerIdentity({});
    const BUCKET = `${RESOURCE_PREFIX}-${Account}-${REGION}-an`;

    // Create bucket in account regional namespace if it doesn't exist
    try {
      await s3.headBucket({ Bucket: BUCKET });
    } catch (e: any) {
      if (e.name === "NotFound" || e.$metadata?.httpStatusCode === 404) {
        await s3.createBucket({
          Bucket: BUCKET,
          BucketNamespace: "account-regional",
          CreateBucketConfiguration: { LocationConstraint: REGION },
        });
      } else {
        throw e;
      }
    }

    // Bucket policy is set during distribution creation (scoped to distribution ARN).
    // On subsequent runs the policy is already in place.

    // Generate or retrieve RSA key pair for CloudFront signing.
    // The key is stored in S3 so subsequent runs reuse the same key
    // that matches the CloudFront public key. This key can only be used
    // to sign URLs for this test distribution.
    const privateKeyS3Key = `${RESOURCE_PREFIX}-private-key.pem`;
    let publicKeyPem: string;

    try {
      const existing = await s3.getObject({ Bucket: BUCKET, Key: privateKeyS3Key });
      privateKey = (await existing.Body!.transformToString()) as string;
      publicKeyPem = createPublicKey(privateKey).export({ type: "spki", format: "pem" }) as string;
    } catch (e: any) {
      if (e.name === "NoSuchKey") {
        const keyPair = generateKeyPairSync("rsa", {
          modulusLength: 2048,
          publicKeyEncoding: { type: "spki", format: "pem" },
          privateKeyEncoding: { type: "pkcs1", format: "pem" },
        });
        privateKey = keyPair.privateKey as string;
        publicKeyPem = keyPair.publicKey as string;
        try {
          // Conditional write: only succeeds if the key doesn't already exist.
          // Prevents race conditions when multiple runs start concurrently.
          await s3.putObject({
            Bucket: BUCKET,
            Key: privateKeyS3Key,
            Body: privateKey,
            ContentType: "text/plain",
            IfNoneMatch: "*",
          });
        } catch (putErr: any) {
          if (putErr.$metadata?.httpStatusCode === 412) {
            // Another run wrote the key first — read theirs.
            const winner = await s3.getObject({ Bucket: BUCKET, Key: privateKeyS3Key });
            privateKey = (await winner.Body!.transformToString()) as string;
            publicKeyPem = createPublicKey(privateKey).export({ type: "spki", format: "pem" }) as string;
          } else {
            throw putErr;
          }
        }
      } else {
        throw e;
      }
    }

    // Upload test object to S3
    await s3.putObject({
      Bucket: BUCKET,
      Key: OBJECT_KEY,
      Body: OBJECT_BODY,
      ContentType: "text/plain",
    });

    // Create or reuse CloudFront public key
    const publicKeyName = `${RESOURCE_PREFIX}-public-key`;
    let publicKeyId: string;
    try {
      const result = await cf.createPublicKey({
        PublicKeyConfig: {
          CallerReference: publicKeyName,
          Name: publicKeyName,
          EncodedKey: publicKeyPem,
        },
      });
      publicKeyId = result.PublicKey!.Id!;
    } catch (e: any) {
      if (e.name === "PublicKeyAlreadyExists") {
        const list = await cf.listPublicKeys({});
        const existing = list.PublicKeyList?.Items?.find((k) => k.Name === publicKeyName);
        if (!existing) {
          throw new Error("Public key exists but not found in list");
        }
        publicKeyId = existing.Id!;
      } else {
        throw e;
      }
    }

    // Create or reuse key group
    const keyGroupName = `${RESOURCE_PREFIX}-key-group`;
    let keyGroupId: string;
    try {
      const result = await cf.createKeyGroup({
        KeyGroupConfig: {
          Name: keyGroupName,
          Items: [publicKeyId],
        },
      });
      keyGroupId = result.KeyGroup!.Id!;
    } catch (e: any) {
      if (e.name === "KeyGroupAlreadyExists") {
        const list = await cf.listKeyGroups({});
        const existing = list.KeyGroupList?.Items?.find((k) => k.KeyGroup?.KeyGroupConfig?.Name === keyGroupName);
        if (!existing) {
          throw new Error("Key group exists but not found in list");
        }
        keyGroupId = existing.KeyGroup!.Id!;
      } else {
        throw e;
      }
    }

    keyPairId = publicKeyId;

    // Create or reuse distribution
    const distributionComment = RESOURCE_PREFIX;
    const distributions = await cf.listDistributions({});
    const existingDist = distributions.DistributionList?.Items?.find((d) => d.Comment === distributionComment);

    if (existingDist) {
      domain = existingDist.DomainName!;
    } else {
      // Create Origin Access Control for S3
      const oacName = `${RESOURCE_PREFIX}-oac`;
      let oacId: string;
      try {
        const oacResult = await cf.createOriginAccessControl({
          OriginAccessControlConfig: {
            Name: oacName,
            SigningProtocol: "sigv4",
            SigningBehavior: "always",
            OriginAccessControlOriginType: "s3",
          },
        });
        oacId = oacResult.OriginAccessControl!.Id!;
      } catch (e: any) {
        if (e.name === "OriginAccessControlAlreadyExists") {
          const list = await cf.listOriginAccessControls({});
          const existing = list.OriginAccessControlList?.Items?.find((o) => o.Name === oacName);
          if (!existing) {
            throw new Error("OAC exists but not found in list");
          }
          oacId = existing.Id!;
        } else {
          throw e;
        }
      }

      const result = await cf.createDistribution({
        DistributionConfig: {
          CallerReference: `${RESOURCE_PREFIX}-${Date.now()}`,
          Comment: distributionComment,
          Enabled: true,
          Origins: {
            Quantity: 1,
            Items: [
              {
                Id: "S3Origin",
                DomainName: `${BUCKET}.s3.${REGION}.amazonaws.com`,
                OriginAccessControlId: oacId,
                S3OriginConfig: { OriginAccessIdentity: "" },
              },
            ],
          },
          DefaultCacheBehavior: {
            TargetOriginId: "S3Origin",
            ViewerProtocolPolicy: "https-only",
            TrustedKeyGroups: {
              Enabled: true,
              Quantity: 1,
              Items: [keyGroupId],
            },
            ForwardedValues: { QueryString: false, Cookies: { Forward: "none" } },
            MinTTL: 0,
          },
          DefaultRootObject: "",
        },
      });
      domain = result.Distribution!.DomainName!;
      const distributionId = result.Distribution!.Id!;
      const distributionArn = result.Distribution!.ARN!;

      // Set bucket policy to allow this distribution to read via OAC
      const bucketPolicy = JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "AllowCloudFrontOAC",
            Effect: "Allow",
            Principal: { Service: "cloudfront.amazonaws.com" },
            Action: "s3:GetObject",
            Resource: `arn:aws:s3:::${BUCKET}/*`,
            Condition: { StringEquals: { "AWS:SourceArn": distributionArn } },
          },
        ],
      });
      await s3.putBucketPolicy({ Bucket: BUCKET, Policy: bucketPolicy });

      // Wait for distribution to deploy
      let status = "InProgress";
      while (status === "InProgress") {
        console.log(`[${new Date().toISOString()}] Waiting for distribution to deploy (status: ${status})...`);
        await new Promise((r) => setTimeout(r, 30_000));
        const check = await cf.getDistribution({ Id: distributionId });
        status = check.Distribution!.Status!;
      }
      console.log(`[${new Date().toISOString()}] Distribution deployed (status: ${status}).`);
    }
  }, 600_000);

  it("should access private content with SHA1-signed URL (default)", async () => {
    const signedUrl = getSignedUrl({
      url: `https://${domain}/${OBJECT_KEY}`,
      keyPairId,
      privateKey,
      dateLessThan: new Date(Date.now() + 60_000).toISOString(),
    });

    const response = await fetch(signedUrl);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe(OBJECT_BODY);
  });

  it("should access private content with SHA256-signed URL", async () => {
    const signedUrl = getSignedUrl({
      url: `https://${domain}/${OBJECT_KEY}`,
      keyPairId,
      privateKey,
      dateLessThan: new Date(Date.now() + 60_000).toISOString(),
      algorithm: "SHA256",
    });

    expect(signedUrl).toContain("Hash-Algorithm=SHA256");
    const response = await fetch(signedUrl);
    expect(response.status).toBe(200);
    expect(await response.text()).toBe(OBJECT_BODY);
  });

  it("should reject expired SHA256-signed URL", async () => {
    const signedUrl = getSignedUrl({
      url: `https://${domain}/${OBJECT_KEY}`,
      keyPairId,
      privateKey,
      dateLessThan: "2020-01-01",
      algorithm: "SHA256",
    });

    const response = await fetch(signedUrl);
    expect(response.status).toBe(403);
  });
}, 660_000);
