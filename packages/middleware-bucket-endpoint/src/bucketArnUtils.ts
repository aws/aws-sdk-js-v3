import { ARN } from "@aws-sdk/util-arn-parser";

import { ArnHostnameParameters } from "./bucketHostname";

export interface AccessPointArn extends ARN {
  accessPointName: string;
}

interface RequestOptions {
  clientRegion: string;
  clientPartition: string;
  useArnRegion: boolean;
}

export const parseAccessPointArn = (arn: ARN, requestOptions: RequestOptions): AccessPointArn => {
  const { service, partition, accountId, region, resource } = arn;
  if (service !== "s3") {
    throw new Error("expect 's3' in access point ARN service component");
  }
  validateRegion(region, { ...requestOptions });
  validatePartition(partition, { ...requestOptions });
  validateAccountId(accountId);
  const [, accessPointName] = parseAccessPointResource(resource);
  validateDNSHostLabel(`${accessPointName}-${accountId}`);
  return {
    ...arn,
    accessPointName,
  };
};

const validatePartition = (partition: string, options: { clientPartition: string }) => {
  if (partition !== options.clientPartition) {
    throw new Error(`Partition in ARN is incompatible, got ${partition} but expected ${options.clientPartition}`);
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
  if (!options.useArnRegion && !isEqualRegions(region, options.clientRegion)) {
    throw new Error(`Region in ARN is incompatible, got ${region} but expected ${options.clientRegion}`);
  }
  if (options.useArnRegion && isFipsRegion(region)) {
    throw new Error("Region in ARN is a FIPS region");
  }
};

const isFipsRegion = (region: string) => region.startsWith("fips-") || region.endsWith("-fips");

const getPseudoRegion = (region: string) => region.replace(/fips-|-fips/, "");

const isEqualRegions = (regionA: string, regionB: string) =>
  regionA === regionB || getPseudoRegion(regionA) === regionB || regionA === getPseudoRegion(regionB);

const validateAccountId = (accountId: string) => {
  if (!/[0-9]{12}/.exec(accountId)) {
    throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
  }
};

const validateDNSHostLabel = (label: string) => {
  // reference: https://tools.ietf.org/html/rfc3986#section-3.2.2
  if (
    label.length >= 64 ||
    !/^[a-z0-9][a-z0-9.-]+[a-z0-9]$/.test(label) ||
    /(\d+\.){3}\d+/.test(label) ||
    /[.-]{2}/.test(label)
  ) {
    throw new Error(`Invalid DNS label ${label}.`);
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

export const populateAccessPointEndpoint = (
  arn: AccessPointArn,
  options: ArnHostnameParameters & { requestSuffix: string }
): string => {
  const { pathStyleEndpoint, dualstackEndpoint, accelerateEndpoint, tlsCompatible } = options;
  if (pathStyleEndpoint) {
    throw new Error("Path-style S3 endpoint is not supported when bucket is an Access Point ARN");
  }
  if (accelerateEndpoint) {
    throw new Error("Accelerate is not supported when bucket is an Access Point ARN");
  }
  if (!tlsCompatible) {
    throw new Error("Access Point can only be used with https");
  }
  const { accessPointName, accountId, region } = arn;
  return `${accessPointName}-${accountId}.s3-accesspoint${dualstackEndpoint ? ".dualstack" : ""}.${region}.${
    options.requestSuffix
  }`;
};
