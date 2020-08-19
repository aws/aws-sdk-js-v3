import { ARN } from "@aws-sdk/util-arn-parser";

const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
export const DOT_PATTERN = /\./;
export const S3_HOSTNAME_PATTERN = /^(.+\.)?s3[.-]([a-z0-9-]+)\./;
const S3_US_EAST_1_ALTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;
const AWS_PARTITION_SUFFIX = "amazonaws.com";

export interface AccessPointArn extends ARN {
  accessPointName: string;
}

export interface BucketHostnameParams {
  baseHostname: string;
  bucketName: string;
  accelerateEndpoint?: boolean;
  dualstackEndpoint?: boolean;
  pathStyleEndpoint?: boolean;
  tlsCompatible?: boolean;
}

export interface ArnHostnameParams extends Omit<BucketHostnameParams, "bucketName"> {
  bucketName: ARN;
  clientSigningRegion?: string;
  clientPartition?: string;
  useArnRegion?: boolean;
}

export const isBucketNameOptions = (
  options: BucketHostnameParams | ArnHostnameParams
): options is BucketHostnameParams => typeof options.bucketName === "string";

export const getPseudoRegion = (region: string) => (isFipsRegion(region) ? region.replace(/fips-|-fips/, "") : region);

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export const isDnsCompatibleBucketName = (bucketName: string): boolean =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);

const getRegionalSuffix = (hostname: string): [string, string] => {
  const parts = hostname.match(S3_HOSTNAME_PATTERN)!;
  return [parts[2], hostname.replace(new RegExp(`^${parts[0]}`), "")];
};

export const getSuffix = (hostname: string): [string, string] =>
  S3_US_EAST_1_ALTNAME_PATTERN.test(hostname) ? ["us-east-1", AWS_PARTITION_SUFFIX] : getRegionalSuffix(hostname);

export const getSuffixForArnEndpoint = (hostname: string): [string, string] =>
  S3_US_EAST_1_ALTNAME_PATTERN.test(hostname)
    ? [hostname.replace(`.${AWS_PARTITION_SUFFIX}`, ""), AWS_PARTITION_SUFFIX]
    : getRegionalSuffix(hostname);

export const validateService = (service: string) => {
  if (service !== "s3") {
    throw new Error("Expect 's3' in access point ARN service component");
  }
};

export const validatePartition = (partition: string, options: { clientPartition: string }) => {
  if (partition !== options.clientPartition) {
    throw new Error(`Partition in ARN is incompatible, got "${partition}" but expected "${options.clientPartition}"`);
  }
};

export const validateRegion = (
  region: string,
  options: {
    useArnRegion?: boolean;
    clientRegion: string;
    clientSigningRegion: string;
  }
) => {
  if (region === "") {
    throw new Error("Access point ARN region is empty");
  }
  if (
    !options.useArnRegion &&
    !isEqualRegions(region, options.clientRegion) &&
    !isEqualRegions(region, options.clientSigningRegion)
  ) {
    throw new Error(`Region in ARN is incompatible, got ${region} but expected ${options.clientRegion}`);
  }
  if (options.useArnRegion && isFipsRegion(region)) {
    throw new Error("Access point endpoint does not support FIPS region");
  }
};

const isFipsRegion = (region: string) => region.startsWith("fips-") || region.endsWith("-fips");

const isEqualRegions = (regionA: string, regionB: string) =>
  regionA === regionB || getPseudoRegion(regionA) === regionB || regionA === getPseudoRegion(regionB);

export const validateAccountId = (accountId: string) => {
  if (!/[0-9]{12}/.exec(accountId)) {
    throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
  }
};

export const validateDNSHostLabel = (label: string, options: { tlsCompatible?: boolean } = { tlsCompatible: true }) => {
  // reference: https://tools.ietf.org/html/rfc3986#section-3.2.2
  if (
    label.length >= 64 ||
    !/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/.test(label) ||
    /(\d+\.){3}\d+/.test(label) ||
    /[.-]{2}/.test(label) ||
    (options?.tlsCompatible && DOT_PATTERN.test(label))
  ) {
    throw new Error(`Invalid DNS label ${label}`);
  }
};

export const getAccessPointName = (resource: string): string => {
  if (resource.indexOf("accesspoint:") !== 0 && resource.indexOf("accesspoint/") !== 0) {
    throw new Error("Access point ARN resource should begin with 'accesspoint/'");
  }
  const parsedResource = resource.split(resource["accesspoint".length]);
  if (parsedResource.length !== 2 || parsedResource[1] === "") {
    throw new Error("Access Point ARN should have one resource accesspoint/{accesspointname}");
  }
  return parsedResource[1];
};
