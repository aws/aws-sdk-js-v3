import { buildQueryString } from "@aws-sdk/querystring-builder";
import { createSign } from "crypto";
import { readFileSync } from "fs";

interface PolicyDates {
  dateLessThan: number;
  dateGreaterThan?: number;
}

interface CloudfrontSignInput {
  url: string;
  keyPairId: string;
  privateKey: string;
  dateLessThan: string;
  ipAddress?: string;
  dateGreaterThan?: string;
}

interface SignInput extends Pick<CloudfrontSignInput, "url" | "keyPairId" | "privateKey">, PolicyDates {}

interface SignOutput {
  policy: string;
  signature: string;
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

interface BuildPolicyInput extends PolicyDates, Pick<CloudfrontSignInput, "ipAddress"> {
  resource: string;
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
            "AWS:EpochTime": args.dateLessThan,
          },
        },
      },
    ],
  };
  if (args.dateGreaterThan) {
    policy.Statement[0].Condition["DateGreaterThan"] = {
      "AWS:EpochTime": args.dateGreaterThan,
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

function parseDate(date?: string): number | undefined {
  if (!date) {
    return undefined;
  }
  const parsedDate = new Date(date);
  return parsedDate instanceof Date ? epochTime(parsedDate) : undefined;
}

function parseDateWindow(expiration: string, start?: string): PolicyDates {
  const dateLessThan = parseDate(expiration);
  if (!dateLessThan) {
    throw new Error("dateLessThan is invalid. Ensure a valid date string is provided.");
  }
  return {
    dateLessThan,
    dateGreaterThan: parseDate(start),
  };
}

function sign(args: SignInput): SignOutput {
  const privateKeyBuffer = readFileSync(args.privateKey);
  const policy = JSON.stringify(
    buildPolicy({
      ...args,
      resource: args.url,
    })
  );
  const signature = signData(policy, privateKeyBuffer);
  const normalizedBase64Signature = normalizeBase64(signature);
  return {
    policy,
    signature: normalizedBase64Signature,
  };
}

export function signUrl(args: CloudfrontSignInput): string {
  const { dateLessThan, dateGreaterThan } = parseDateWindow(args.dateLessThan, args.dateGreaterThan);
  const { signature } = sign({
    ...args,
    dateLessThan,
    dateGreaterThan,
  });
  const queryParam = buildQueryString({
    Expires: String(dateLessThan),
    "Key-Pair-Id": args.keyPairId,
    Signature: signature,
  });
  return `${args.url}?${queryParam}`;
}

export function signCookies(args: CloudfrontSignInput): CloudfrontSignedCookiesOutput {
  const { dateLessThan, dateGreaterThan } = parseDateWindow(args.dateLessThan, args.dateGreaterThan);
  const { signature, policy } = sign({
    ...args,
    dateLessThan,
    dateGreaterThan,
  });
  const usingACustomPolicy = dateGreaterThan || args.ipAddress;
  return {
    "CloudFront-Key-Pair-Id": args.keyPairId,
    "CloudFront-Signature": signature,
    "CloudFront-Expires": !usingACustomPolicy ? dateLessThan : undefined,
    "CloudFront-Policy": usingACustomPolicy ? normalizeBase64(policy) : undefined,
  };
}
