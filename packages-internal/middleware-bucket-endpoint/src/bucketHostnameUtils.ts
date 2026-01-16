import { ARN } from "@aws-sdk/util-arn-parser";

/**
 * @deprecated unused as of EndpointsV2.
 */
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
/**
 * @deprecated unused as of EndpointsV2.
 */
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
/**
 * @deprecated unused as of EndpointsV2.
 */
const DOTS_PATTERN = /\.\./;

/**
 * @deprecated unused as of EndpointsV2.
 */
export const DOT_PATTERN = /\./;
/**
 * @deprecated unused as of EndpointsV2.
 */
export const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;

/**
 * @deprecated unused as of EndpointsV2.
 */
const S3_US_EAST_1_ALTNAME_PATTERN = /^s3(-external-1)?\.amazonaws\.com$/;

/**
 * @deprecated unused as of EndpointsV2.
 */
const AWS_PARTITION_SUFFIX = "amazonaws.com";

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export interface AccessPointArn extends ARN {
  accessPointName: string;
}

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export interface BucketHostnameParams {
  isCustomEndpoint?: boolean;
  baseHostname: string;
  bucketName: string;
  clientRegion: string;
  accelerateEndpoint?: boolean;
  dualstackEndpoint?: boolean;
  fipsEndpoint?: boolean;
  pathStyleEndpoint?: boolean;
  tlsCompatible?: boolean;
}

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export interface ArnHostnameParams extends Omit<BucketHostnameParams, "bucketName"> {
  bucketName: ARN;
  clientSigningRegion?: string;
  clientPartition?: string;
  useArnRegion?: boolean;
  disableMultiregionAccessPoints?: boolean;
}

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const isBucketNameOptions = (
  options: BucketHostnameParams | ArnHostnameParams
): options is BucketHostnameParams => typeof options.bucketName === "string";

/**
 * Determines whether a given string is DNS compliant per the rules outlined by
 * S3. Length, capitaization, and leading dot restrictions are enforced by the
 * DOMAIN_PATTERN regular expression.
 * @internal
 *
 * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
 *
 * @deprecated unused as of EndpointsV2.
 */
export const isDnsCompatibleBucketName = (bucketName: string): boolean =>
  DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getRegionalSuffix = (hostname: string): [string, string] => {
  const parts = hostname.match(S3_HOSTNAME_PATTERN)!;
  return [parts[4], hostname.replace(new RegExp(`^${parts[0]}`), "")];
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const getSuffix = (hostname: string): [string, string] =>
  S3_US_EAST_1_ALTNAME_PATTERN.test(hostname) ? ["us-east-1", AWS_PARTITION_SUFFIX] : getRegionalSuffix(hostname);

/**
 * Infer region and hostname suffix from a complete hostname
 * @internal
 * @param hostname - Hostname
 * @returns [Region, Hostname suffix]
 *
 * @deprecated unused as of EndpointsV2.
 */
export const getSuffixForArnEndpoint = (hostname: string): [string, string] =>
  S3_US_EAST_1_ALTNAME_PATTERN.test(hostname)
    ? [hostname.replace(`.${AWS_PARTITION_SUFFIX}`, ""), AWS_PARTITION_SUFFIX]
    : getRegionalSuffix(hostname);

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const validateArnEndpointOptions = (options: {
  accelerateEndpoint?: boolean;
  tlsCompatible?: boolean;
  pathStyleEndpoint?: boolean;
}) => {
  if (options.pathStyleEndpoint) {
    throw new Error("Path-style S3 endpoint is not supported when bucket is an ARN");
  }
  if (options.accelerateEndpoint) {
    throw new Error("Accelerate endpoint is not supported when bucket is an ARN");
  }
  if (!options.tlsCompatible) {
    throw new Error("HTTPS is required when bucket is an ARN");
  }
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const validateService = (service: string) => {
  if (service !== "s3" && service !== "s3-outposts" && service !== "s3-object-lambda") {
    throw new Error("Expect 's3' or 's3-outposts' or 's3-object-lambda' in ARN service component");
  }
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const validateS3Service = (service: string) => {
  if (service !== "s3") {
    throw new Error("Expect 's3' in Accesspoint ARN service component");
  }
};

/**
 * @internal
 */
export const validateOutpostService = (service: string) => {
  if (service !== "s3-outposts") {
    throw new Error("Expect 's3-posts' in Outpost ARN service component");
  }
};

/**
 * Validate partition inferred from ARN is the same to `options.clientPartition`.
 * @internal
 */
export const validatePartition = (partition: string, options: { clientPartition: string }) => {
  if (partition !== options.clientPartition) {
    throw new Error(`Partition in ARN is incompatible, got "${partition}" but expected "${options.clientPartition}"`);
  }
};

/**
 * (Previous to deprecation)
 * validate region value inferred from ARN. If `options.useArnRegion` is set, it validates the region is not a FIPS
 * region. If `options.useArnRegion` is unset, it validates the region is equal to `options.clientRegion` or
 * `options.clientSigningRegion`.
 *
 * @internal
 *
 * @deprecated validation is deferred to the endpoint ruleset.
 */
export const validateRegion = (
  region: string,
  options: {
    useArnRegion?: boolean;
    allowFipsRegion?: boolean;
    clientRegion: string;
    clientSigningRegion: string;
    useFipsEndpoint: boolean;
  }
) => {};

/**
 * @deprecated unused as of EndpointsV2.
 */
export const validateRegionalClient = (region: string) => {
  if (["s3-external-1", "aws-global"].includes(region)) {
    throw new Error(`Client region ${region} is not regional`);
  }
};

/**
 * Validate an account ID
 * @internal
 */
export const validateAccountId = (accountId: string) => {
  if (!/[0-9]{12}/.exec(accountId)) {
    throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
  }
};

/**
 * Validate a host label according to https://tools.ietf.org/html/rfc3986#section-3.2.2
 * @internal
 * @deprecated unused as of EndpointsV2.
 */
export const validateDNSHostLabel = (label: string, options: { tlsCompatible?: boolean } = { tlsCompatible: true }) => {
  // reference: https://tools.ietf.org/html/rfc3986#section-3.2.2
  if (
    label.length >= 64 ||
    !/^[a-z0-9][a-z0-9.-]*[a-z0-9]$/.test(label) ||
    /(\d+\.){3}\d+/.test(label) ||
    /[.-]{2}/.test(label) ||
    (options?.tlsCompatible && DOT_PATTERN.test(label))
  ) {
    throw new Error(`Invalid DNS label ${label}`);
  }
};

/**
 * @deprecated unused as of EndpointsV2.
 */
export const validateCustomEndpoint = (options: {
  isCustomEndpoint?: boolean;
  dualstackEndpoint?: boolean;
  accelerateEndpoint?: boolean;
}) => {
  if (options.isCustomEndpoint) {
    if (options.dualstackEndpoint) throw new Error("Dualstack endpoint is not supported with custom endpoint");
    if (options.accelerateEndpoint) throw new Error("Accelerate endpoint is not supported with custom endpoint");
  }
};

/**
 * Validate and parse an Access Point ARN or Outposts ARN
 * @internal
 *
 * @param resource - The resource section of an ARN
 * @returns Access Point Name and optional Outpost ID.
 */
export const getArnResources = (
  resource: string
): {
  accesspointName: string;
  outpostId?: string;
} => {
  const delimiter = resource.includes(":") ? ":" : "/";
  const [resourceType, ...rest] = resource.split(delimiter);
  if (resourceType === "accesspoint") {
    // Parse accesspoint ARN
    if (rest.length !== 1 || rest[0] === "") {
      throw new Error(`Access Point ARN should have one resource accesspoint${delimiter}{accesspointname}`);
    }
    return { accesspointName: rest[0] };
  } else if (resourceType === "outpost") {
    // Parse outpost ARN
    if (!rest[0] || rest[1] !== "accesspoint" || !rest[2] || rest.length !== 3) {
      throw new Error(
        `Outpost ARN should have resource outpost${delimiter}{outpostId}${delimiter}accesspoint${delimiter}{accesspointName}`
      );
    }
    const [outpostId, _, accesspointName] = rest;
    return { outpostId, accesspointName };
  } else {
    throw new Error(`ARN resource should begin with 'accesspoint${delimiter}' or 'outpost${delimiter}'`);
  }
};

/**
 * (Prior to deprecation) Throw if dual stack configuration is set to true.
 * @internal
 *
 * @deprecated validation deferred to endpoints ruleset.
 */
export const validateNoDualstack = (dualstackEndpoint?: boolean) => {};

/**
 * Validate fips endpoint is not set up.
 * @internal
 * @deprecated unused as of EndpointsV2.
 */
export const validateNoFIPS = (useFipsEndpoint?: boolean) => {
  if (useFipsEndpoint) throw new Error(`FIPS region is not supported with Outpost.`);
};

/**
 * Validate the multi-region access point alias.
 * @internal
 * @deprecated unused as of EndpointsV2.
 */
export const validateMrapAlias = (name: string) => {
  try {
    name.split(".").forEach((label) => {
      validateDNSHostLabel(label);
    });
  } catch (e) {
    throw new Error(`"${name}" is not a DNS compatible name.`);
  }
};
