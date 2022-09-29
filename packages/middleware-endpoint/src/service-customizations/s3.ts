import { EndpointParameters } from "@aws-sdk/types";

export const resolveParamsForS3 = async (endpointParams: EndpointParameters) => {
  const bucket = (endpointParams?.Bucket as string) || "";

  if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1) {
    endpointParams.ForcePathStyle = true;
  }

  return endpointParams;
};

const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
export const DOT_PATTERN = /\./;
export const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 */
export const isDnsCompatibleBucketName = (bucketName: string): boolean =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
