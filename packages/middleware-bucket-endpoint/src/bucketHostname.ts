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
  validateArnEndpointOptions,
  validateDNSHostLabel,
  validateNoDualstack,
  validateNoFIPS,
  validateOutpostService,
  validatePartition,
  validateRegion,
  validateS3Service,
  validateService,
} from "./bucketHostnameUtils";

export interface BucketHostname {
  hostname: string;
  bucketEndpoint: boolean;
  signingRegion?: string;
  signingService?: string;
}

export const bucketHostname = (options: BucketHostnameParams | ArnHostnameParams): BucketHostname => {
  const { baseHostname } = options;
  if (!S3_HOSTNAME_PATTERN.test(baseHostname)) {
    return {
      bucketEndpoint: false,
      hostname: baseHostname,
    };
  }
  return isBucketNameOptions(options)
    ? // Construct endpoint when bucketName is a string referring to a bucket name
      getEndpointFromBucketName(options)
    : // Construct endpoint when bucketName is an ARN referring to an S3 resource like Access Point
      getEndpointFromArn(options);
};

const getEndpointFromArn = (options: ArnHostnameParams): BucketHostname => {
  // Infer client region and hostname suffix from hostname from endpoints.json, like `s3.us-west-2.amazonaws.com`
  const [clientRegion, hostnameSuffix] = getSuffixForArnEndpoint(options.baseHostname);
  const {
    pathStyleEndpoint,
    dualstackEndpoint = false,
    accelerateEndpoint = false,
    tlsCompatible = true,
    useArnRegion,
    bucketName,
    clientPartition = "aws",
    clientSigningRegion = clientRegion,
  } = options;

  validateArnEndpointOptions({ pathStyleEndpoint, accelerateEndpoint, tlsCompatible });

  // Validate and parse the ARN supplied as a bucket name
  const { service, partition, accountId, region, resource } = bucketName;
  validateService(service);
  validatePartition(partition, { clientPartition });
  validateAccountId(accountId);
  validateRegion(region, { useArnRegion, clientRegion, clientSigningRegion });
  const { accesspointName, outpostId } = getArnResources(resource);
  validateDNSHostLabel(`${accesspointName}-${accountId}`, { tlsCompatible });

  const endpointRegion = useArnRegion ? region : clientRegion;
  const signingRegion = useArnRegion ? region : clientSigningRegion;
  if (outpostId) {
    // if this is an Outpost ARN
    validateOutpostService(service);
    validateDNSHostLabel(outpostId, { tlsCompatible });
    validateNoDualstack(dualstackEndpoint);
    validateNoFIPS(endpointRegion);
    return {
      bucketEndpoint: true,
      hostname: `${accesspointName}-${accountId}.${outpostId}.s3-outposts.${endpointRegion}.${hostnameSuffix}`,
      signingRegion,
      signingService: "s3-outposts",
    };
  }
  // construct endpoint from Accesspoint ARN
  validateS3Service(service);
  return {
    bucketEndpoint: true,
    hostname: `${accesspointName}-${accountId}.s3-accesspoint${
      dualstackEndpoint ? ".dualstack" : ""
    }.${endpointRegion}.${hostnameSuffix}`,
    signingRegion,
  };
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
