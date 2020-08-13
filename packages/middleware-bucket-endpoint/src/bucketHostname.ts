import { ARN } from "@aws-sdk/util-arn-parser/src";

import { parseAccessPointArn } from "./bucketArnUtils";
import { populateAccessPointEndpoint } from "./bucketArnUtils";

const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3[.-]([a-z0-9-]+)\./;
const S3_US_EAST_1_ALTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;
const AWS_PARTITION_SUFFIX = "amazonaws.com";

export interface BucketHostnameParameters {
  baseHostname: string;
  bucketName: string;
  accelerateEndpoint?: boolean;
  dualstackEndpoint?: boolean;
  pathStyleEndpoint?: boolean;
  tlsCompatible?: boolean;
}

export interface ArnHostnameParameters extends Omit<BucketHostnameParameters, "bucketName"> {
  bucketName: ARN;
  clientRegion: string;
  useArnRegion: boolean;
  clientPartition?: string;
}

const isBucketNameOptions = (
  options: BucketHostnameParameters | ArnHostnameParameters
): options is BucketHostnameParameters => typeof options.bucketName === "string";

export interface BucketHostname {
  hostname: string;
  bucketEndpoint: boolean;
}

export const bucketHostname = (options: BucketHostnameParameters | ArnHostnameParameters): BucketHostname => {
  if (isBucketNameOptions(options)) {
    // Construct endpoint when bucketName is a string referring to a bucket name
    return getEndpointFromBucketName(options);
  } else {
    // Construct endpoint when bucketName is an ARN referring to an S3 resource like Access Point
    const accessPointArn = parseAccessPointArn(options.bucketName, { ...options, clientPartition: "aws" });
    const [, requestSuffix] = partitionSuffix(options.baseHostname);
    return {
      bucketEndpoint: true,
      hostname: populateAccessPointEndpoint(accessPointArn, { ...options, requestSuffix }),
    };
  }
};

const getEndpointFromBucketName = ({
  accelerateEndpoint = false,
  baseHostname,
  bucketName,
  dualstackEndpoint = false,
  pathStyleEndpoint = false,
  tlsCompatible = true,
}: BucketHostnameParameters): BucketHostname => {
  if (!S3_HOSTNAME_PATTERN.test(baseHostname)) {
    return {
      bucketEndpoint: false,
      hostname: baseHostname,
    };
  }

  const [region, hostnameSuffix] = S3_US_EAST_1_ALTNAME_PATTERN.test(baseHostname)
    ? ["us-east-1", AWS_PARTITION_SUFFIX]
    : partitionSuffix(baseHostname);

  if (pathStyleEndpoint || !isDnsCompatibleBucketName(bucketName) || (tlsCompatible && DOT_PATTERN.test(bucketName))) {
    return {
      bucketEndpoint: false,
      hostname: dualstackEndpoint ? `s3.dualstack.${region}.${hostnameSuffix}` : baseHostname,
    };
  }

  if (accelerateEndpoint) {
    baseHostname = `s3-accelerate${dualstackEndpoint ? ".dualstack" : ""}.${hostnameSuffix}`;
  } else if (dualstackEndpoint) {
    baseHostname = `s3.dualstack.${region}.${hostnameSuffix}`;
  }

  return {
    bucketEndpoint: true,
    hostname: `${bucketName}.${baseHostname}`,
  };
};

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
const isDnsCompatibleBucketName = (bucketName: string): boolean =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);

const partitionSuffix = (hostname: string): [string, string] => {
  const parts = hostname.match(S3_HOSTNAME_PATTERN)!;
  return [parts[2], hostname.replace(new RegExp(`^${parts[0]}`), "")];
};
