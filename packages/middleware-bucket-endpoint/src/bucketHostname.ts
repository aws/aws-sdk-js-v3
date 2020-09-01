import {
  ArnHostnameParams,
  BucketHostnameParams,
  DOT_PATTERN,
  getArnResources,
  getSuffix,
  getSuffixForArnEndpoint,
  isBucketNameOptions,
  isDnsCompatibleBucketName,
  S3_HOSTNAME_PATTERN,
  validateAccountId,
  validateDNSHostLabel,
  validatePartition,
  validateRegion,
  validateService,
} from "./bucketHostnameUtils";

export interface BucketHostname {
  hostname: string;
  bucketEndpoint: boolean;
}

export const bucketHostname = (options: BucketHostnameParams | ArnHostnameParams): BucketHostname => {
  const { baseHostname } = options;
  if (!S3_HOSTNAME_PATTERN.test(baseHostname)) {
    return {
      bucketEndpoint: false,
      hostname: baseHostname,
    };
  }
  if (isBucketNameOptions(options)) {
    // Construct endpoint when bucketName is a string referring to a bucket name
    return getEndpointFromBucketName(options);
  } else {
    // Construct endpoint when bucketName is an ARN referring to an S3 resource like Access Point
    return {
      bucketEndpoint: true,
      hostname: getEndpointFromAccessPoint(options),
    };
  }
};

const getEndpointFromAccessPoint = (options: ArnHostnameParams): string => {
  // Infer client region and hostname suffix from hostname from endpoints.json, like `s3.us-west-2.amazonaws.com`
  const [clientRegion, hostnameSuffix] = getSuffixForArnEndpoint(options.baseHostname);
  const {
    pathStyleEndpoint,
    dualstackEndpoint,
    accelerateEndpoint,
    tlsCompatible = true,
    useArnRegion,
    bucketName,
    clientPartition = "aws",
    clientSigningRegion = clientRegion,
  } = options;

  if (pathStyleEndpoint) {
    throw new Error("Path-style S3 endpoint is not supported when bucket is an Access Point ARN");
  }
  if (accelerateEndpoint) {
    throw new Error("Accelerate is not supported when bucket is an Access Point ARN");
  }
  if (!tlsCompatible) {
    throw new Error("Access Point can only be used with https");
  }
  // Validate and parse the ARN supplied as a bucket name
  const { service, partition, accountId, region, resource } = bucketName;
  validateService(service);
  validateRegion(region, { useArnRegion, clientRegion, clientSigningRegion });
  validatePartition(partition, { clientPartition });
  validateAccountId(accountId);

  const { accesspointName, outpostId } = getArnResources(resource);
  validateDNSHostLabel(`${accesspointName}-${accountId}`, { tlsCompatible });
  const endpointRegion = useArnRegion ? region : clientRegion;
  return outpostId
    ? `${accesspointName}-${accountId}.${outpostId}.s3-outposts.${endpointRegion}.${hostnameSuffix}`
    : `${accesspointName}-${accountId}.s3-accesspoint${
        dualstackEndpoint ? ".dualstack" : ""
      }.${endpointRegion}.${hostnameSuffix}`;
};

const getEndpointFromBucketName = ({
  accelerateEndpoint = false,
  baseHostname,
  bucketName,
  dualstackEndpoint = false,
  pathStyleEndpoint = false,
  tlsCompatible = true,
}: BucketHostnameParams): BucketHostname => {
  const [clientRegion, hostnameSuffix] = getSuffix(baseHostname);
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
