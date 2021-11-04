import { RegionInfo } from "@aws-sdk/types";

import { getHostnameFromVariants } from "./getHostnameFromVariants";
import { getResolvedHostname } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { getResolvedSigningRegion } from "./getResolvedSigningRegion";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";

export interface GetRegionInfoOptions {
  useFipsEndpoint?: boolean;
  useDualstackEndpoint?: boolean;
  signingService: string;
  regionHash: RegionHash;
  partitionHash: PartitionHash;
}

export const getRegionInfo = (
  region: string,
  {
    useFipsEndpoint = false,
    useDualstackEndpoint = false,
    signingService,
    regionHash,
    partitionHash,
  }: GetRegionInfoOptions
): RegionInfo => {
  const partition = getResolvedPartition(region, { partitionHash });
  const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;

  const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
  const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
  const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
  const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });

  if (hostname === undefined) {
    throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
  }

  const signingRegion = getResolvedSigningRegion(hostname, {
    signingRegion: regionHash[resolvedRegion]?.signingRegion,
    regionRegex: partitionHash[partition].regionRegex,
    useFipsEndpoint,
  });

  return {
    partition,
    signingService,
    hostname,
    ...(signingRegion && { signingRegion }),
    ...(regionHash[resolvedRegion]?.signingService && {
      signingService: regionHash[resolvedRegion].signingService,
    }),
  };
};
