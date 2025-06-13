import { ARN } from "@aws-sdk/util-arn-parser";

import {
  ArnHostnameParams,
  BucketHostnameParams,
  DOT_PATTERN,
  getArnResources,
  getSuffix,
  getSuffixForArnEndpoint,
  isBucketNameOptions,
  isDnsCompatibleBucketName,
  validateAccountId,
  validateArnEndpointOptions,
  validateCustomEndpoint,
  validateDNSHostLabel,
  validateMrapAlias,
  validateNoFIPS,
  validateOutpostService,
  validatePartition,
  validateRegionalClient,
  validateS3Service,
  validateService,
} from "./bucketHostnameUtils";

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export interface BucketHostname {
  hostname: string;
  bucketEndpoint: boolean;
  signingRegion?: string;
  signingService?: string;
}

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
export const bucketHostname = (options: BucketHostnameParams | ArnHostnameParams): BucketHostname => {
  validateCustomEndpoint(options);
  return isBucketNameOptions(options)
    ? // Construct endpoint when bucketName is a string referring to a bucket name
      getEndpointFromBucketName(options)
    : // Construct endpoint when bucketName is an ARN referring to an S3 resource like Access Point
      getEndpointFromArn(options);
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromBucketName = ({
  accelerateEndpoint = false,
  clientRegion: region,
  baseHostname,
  bucketName,
  dualstackEndpoint = false,
  fipsEndpoint = false,
  pathStyleEndpoint = false,
  tlsCompatible = true,
  isCustomEndpoint = false,
}: BucketHostnameParams): BucketHostname => {
  const [clientRegion, hostnameSuffix] = isCustomEndpoint ? [region, baseHostname] : getSuffix(baseHostname);
  if (pathStyleEndpoint || !isDnsCompatibleBucketName(bucketName) || (tlsCompatible && DOT_PATTERN.test(bucketName))) {
    return {
      bucketEndpoint: false,
      hostname: dualstackEndpoint ? `s3.dualstack.${clientRegion}.${hostnameSuffix}` : baseHostname,
    };
  }

  if (accelerateEndpoint) {
    baseHostname = `s3-accelerate${dualstackEndpoint ? ".dualstack" : ""}.${hostnameSuffix}`;
  } else if (dualstackEndpoint) {
    baseHostname = `s3.dualstack.${clientRegion}.${hostnameSuffix}`;
  }

  return {
    bucketEndpoint: true,
    hostname: `${bucketName}.${baseHostname}`,
  };
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromArn = (options: ArnHostnameParams): BucketHostname => {
  const { isCustomEndpoint, baseHostname, clientRegion } = options;
  const hostnameSuffix = isCustomEndpoint ? baseHostname : getSuffixForArnEndpoint(baseHostname)[1];

  const {
    pathStyleEndpoint,
    accelerateEndpoint = false,
    fipsEndpoint = false,
    tlsCompatible = true,
    bucketName,
    clientPartition = "aws",
  } = options;

  validateArnEndpointOptions({ pathStyleEndpoint, accelerateEndpoint, tlsCompatible });

  // Validate and parse the ARN supplied as a bucket name
  const { service, partition, accountId, region, resource } = bucketName;
  validateService(service);
  validatePartition(partition, { clientPartition });
  validateAccountId(accountId);
  const { accesspointName, outpostId } = getArnResources(resource);
  if (service === "s3-object-lambda") {
    return getEndpointFromObjectLambdaArn({ ...options, tlsCompatible, bucketName, accesspointName, hostnameSuffix });
  }
  if (region === "") {
    return getEndpointFromMRAPArn({ ...options, clientRegion, mrapAlias: accesspointName, hostnameSuffix });
  }
  if (outpostId) {
    return getEndpointFromOutpostArn({ ...options, clientRegion, outpostId, accesspointName, hostnameSuffix });
  }
  return getEndpointFromAccessPointArn({ ...options, clientRegion, accesspointName, hostnameSuffix });
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromObjectLambdaArn = ({
  dualstackEndpoint = false,
  fipsEndpoint = false,
  tlsCompatible = true,
  useArnRegion,
  clientRegion,
  clientSigningRegion = clientRegion,
  accesspointName,
  bucketName,
  hostnameSuffix,
}: ArnHostnameParams & {
  accesspointName: string;
  bucketName: ARN;
  hostnameSuffix: string;
}): BucketHostname => {
  const { accountId, region, service } = bucketName;
  validateRegionalClient(clientRegion);
  const DNSHostLabel = `${accesspointName}-${accountId}`;
  validateDNSHostLabel(DNSHostLabel, { tlsCompatible });

  const endpointRegion = useArnRegion ? region : clientRegion;
  const signingRegion = useArnRegion ? region : clientSigningRegion;

  return {
    bucketEndpoint: true,
    hostname: `${DNSHostLabel}.${service}${fipsEndpoint ? "-fips" : ""}.${endpointRegion}.${hostnameSuffix}`,
    signingRegion,
    signingService: service,
  };
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromMRAPArn = ({
  disableMultiregionAccessPoints,
  dualstackEndpoint = false,
  isCustomEndpoint,
  mrapAlias,
  hostnameSuffix,
}: ArnHostnameParams & { mrapAlias: string; hostnameSuffix: string }): BucketHostname => {
  // If this is a multi-regional access point, and not explicitly opted out.
  if (disableMultiregionAccessPoints === true) {
    throw new Error("SDK is attempting to use a MRAP ARN. Please enable to feature.");
  }
  validateMrapAlias(mrapAlias);
  return {
    bucketEndpoint: true,
    hostname: `${mrapAlias}${isCustomEndpoint ? "" : `.accesspoint.s3-global`}.${hostnameSuffix}`,
    signingRegion: "*",
  };
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromOutpostArn = ({
  useArnRegion,
  clientRegion,
  clientSigningRegion = clientRegion,
  bucketName,
  outpostId,
  dualstackEndpoint = false,
  fipsEndpoint = false,
  tlsCompatible = true,
  accesspointName,
  isCustomEndpoint,
  hostnameSuffix,
}: ArnHostnameParams & { outpostId: string; accesspointName: string; hostnameSuffix: string }): BucketHostname => {
  // if this is an Outpost ARN
  validateRegionalClient(clientRegion);
  const DNSHostLabel = `${accesspointName}-${bucketName.accountId}`;
  validateDNSHostLabel(DNSHostLabel, { tlsCompatible });
  const endpointRegion = useArnRegion ? bucketName.region : clientRegion;
  const signingRegion = useArnRegion ? bucketName.region : clientSigningRegion;
  validateOutpostService(bucketName.service);
  validateDNSHostLabel(outpostId, { tlsCompatible });
  validateNoFIPS(fipsEndpoint);
  const hostnamePrefix = `${DNSHostLabel}.${outpostId}`;
  return {
    bucketEndpoint: true,
    hostname: `${hostnamePrefix}${isCustomEndpoint ? "" : `.s3-outposts.${endpointRegion}`}.${hostnameSuffix}`,
    signingRegion,
    signingService: "s3-outposts",
  };
};

/**
 * @deprecated unused as of EndpointsV2.
 * @internal
 */
const getEndpointFromAccessPointArn = ({
  useArnRegion,
  clientRegion,
  clientSigningRegion = clientRegion,
  bucketName,
  dualstackEndpoint = false,
  fipsEndpoint = false,
  tlsCompatible = true,
  accesspointName,
  isCustomEndpoint,
  hostnameSuffix,
}: ArnHostnameParams & { accesspointName: string; hostnameSuffix: string }): BucketHostname => {
  // construct endpoint from Accesspoint ARN
  validateRegionalClient(clientRegion);
  const hostnamePrefix = `${accesspointName}-${bucketName.accountId}`;
  validateDNSHostLabel(hostnamePrefix, { tlsCompatible });
  const endpointRegion = useArnRegion ? bucketName.region : clientRegion;
  const signingRegion = useArnRegion ? bucketName.region : clientSigningRegion;
  validateS3Service(bucketName.service);
  return {
    bucketEndpoint: true,
    hostname: `${hostnamePrefix}${
      isCustomEndpoint
        ? ""
        : `.s3-accesspoint${fipsEndpoint ? "-fips" : ""}${dualstackEndpoint ? ".dualstack" : ""}.${endpointRegion}`
    }.${hostnameSuffix}`,
    signingRegion,
  };
};
