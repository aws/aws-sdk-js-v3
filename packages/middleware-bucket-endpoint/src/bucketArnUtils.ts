import { ARN } from "@aws-sdk/util-arn-parser";

export interface AccessPointArn extends ARN {
  accessPointName: string;
}

interface RequestOptions {
  clientRegion: string;
  requestSuffix: string;
  useArnRegion: boolean;
}

export const parseAccessPointArn = (arn: ARN, requestOptions: RequestOptions): AccessPointArn => {
  const { service, partition, accountId, region, resource } = arn;
  if (service !== "s3") {
    throw new Error("expect 's3' in access point ARN service component");
  }
  validateRegion(region, { ...requestOptions });
  validateAccountId(accountId);
  const [, accessPointName] = parseAccessPointResource(resource);
  return {
    ...arn,
    accessPointName,
  };
};

const validatePartition = (partition: string, options: { requestSuffix: string }) => {
  if (options.requestSuffix) {
  }
};

const validateRegion = (
  region: string,
  options: {
    useArnRegion: boolean;
    clientRegion: string;
  }
) => {
  if (region === "") {
    throw new Error("Access point ARN region is empty");
  }
  if (isFipsPseudoRegion(options.clientRegion) && !options.useArnRegion) {
  }
};

const isFipsPseudoRegion = (region: string) => region.startsWith("fips-") || region.endsWith("-fips");

const validateAccountId = (accountId: string) => {
  if (!/[0-9]{12}/.exec(accountId)) {
    throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
  }
};

const parseAccessPointResource = (resource: string): [string, string] => {
  if (resource.indexOf("accesspoint:") !== 0 && resource.indexOf("accesspoint/") !== 0) {
    throw new Error("Access point ARN resource should begin with 'accesspoint/'");
  }
  const parsedResource = resource.split(resource["accesspoint".length]);
  if (parsedResource.length !== 2) {
    throw new Error("Access Point ARN should have one resource accesspoint/{accesspointname}");
  }
  return parsedResource as [string, string];
};

//TODO: The SDK must validate that populated {accesspoint-name}-{account-id} endpoint prefix results in a RFC 3986 Host label.
