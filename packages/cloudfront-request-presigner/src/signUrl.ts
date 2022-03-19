import { buildQueryString } from "@aws-sdk/querystring-builder";
import { createSign } from "crypto";
import { readFileSync } from "fs";

interface CloudfrontSignInput {
  url: string;
  keyPairId: string;
  privateKey: string;
  dateLessThan: string;
  dateGreaterThan?: string;
  ipAddress?: string;
}

interface CloudfrontSignedCookiesOutput {
  "CloudFront-Key-Pair-Id": string;
  "CloudFront-Signature": string;
  "CloudFront-Expires"?: number;
  "CloudFront-Policy"?: string;
}

interface Policy {
  Statement: Array<{
    Resource: string;
    Condition: {
      DateLessThan: {
        "AWS:EpochTime": number;
      };
      IpAddress?: {
        "AWS:SourceIp": string;
      };
      DateGreaterThan?: {
        "AWS:EpochTime": number;
      };
    };
  }>;
}

interface BuildPolicyInput {
  resource: string;
  dateLessThan: Date;
  dateGreaterThan?: Date;
  ipAddress?: string;
}

function epochTime(date: Date): number {
  return date.getTime() / 1000;
}

function normalizeBase64(str: string): string {
  return str.replace(/\+/g, "-").replace(/=/g, "_").replace(/\//g, "~");
}

function buildPolicy(args: BuildPolicyInput): Policy {
  const policy: Policy = {
    Statement: [
      {
        Resource: args.resource,
        Condition: {
          DateLessThan: {
            "AWS:EpochTime": epochTime(args.dateLessThan),
          },
        },
      },
    ],
  };
  if (args.dateGreaterThan) {
    policy.Statement[0].Condition["DateGreaterThan"] = {
      "AWS:EpochTime": epochTime(args.dateGreaterThan),
    };
  }
  if (args.ipAddress) {
    const cidr = !args.ipAddress.endsWith("/32") ? `${args.ipAddress}/32` : args.ipAddress;
    policy.Statement[0].Condition["IpAddress"] = {
      "AWS:SourceIp": cidr,
    };
  }
  return policy;
}

function signData(data: string, privateKeyBuffer: Buffer): string {
  const sign = createSign("RSA-SHA1");
  sign.update(data);
  return sign.sign(privateKeyBuffer, "base64");
}

function parseDate(date?: string): Date | undefined {
  if (!date) {
    return undefined;
  }
  const parsedDate = new Date(date);
  return parsedDate instanceof Date ? parsedDate : undefined;
}

export function signUrl(args: CloudfrontSignInput): string {
  const dateLessThan = parseDate(args.dateLessThan);
  if (!dateLessThan) {
    throw new Error("dateLessThan argument is invalid");
  }
  const dateGreaterThan = parseDate(args.dateGreaterThan);
  const privateKeyBuffer = readFileSync(args.privateKey);
  const policy = JSON.stringify(
    buildPolicy({
      ...args,
      dateLessThan,
      dateGreaterThan,
      resource: args.url,
    })
  );
  const signature = signData(policy, privateKeyBuffer);
  const normalizedBase64Signature = normalizeBase64(signature);
  const queryParam = buildQueryString({
    Expires: String(epochTime(dateLessThan)),
    "Key-Pair-Id": args.keyPairId,
    Signature: normalizedBase64Signature,
  });
  return `${args.url}?${queryParam}`;
}

export function signCookies(args: CloudfrontSignInput): CloudfrontSignedCookiesOutput {
  const dateLessThan = parseDate(args.dateLessThan);
  if (!dateLessThan) {
    throw new Error("dateLessThan argument is invalid");
  }
  const dateGreaterThan = parseDate(args.dateGreaterThan);
  const usingACustomPolicy = dateGreaterThan || args.ipAddress;
  const privateKeyBuffer = readFileSync(args.privateKey);
  const policy = JSON.stringify(
    buildPolicy({
      ...args,
      dateLessThan,
      dateGreaterThan,
      resource: args.url,
    })
  );
  const signature = signData(policy, privateKeyBuffer);
  const normalizedBase64Signature = normalizeBase64(signature);
  return {
    "CloudFront-Key-Pair-Id": args.keyPairId,
    "CloudFront-Signature": normalizedBase64Signature,
    "CloudFront-Expires": !usingACustomPolicy ? epochTime(dateLessThan) : undefined,
    "CloudFront-Policy": usingACustomPolicy ? normalizeBase64(policy) : undefined,
  };
}
