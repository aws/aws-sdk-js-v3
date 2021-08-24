import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname, GetResolvedHostnameOptions, RegionHash } from "./getResolvedHostname";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

export { RegionHash, PartitionHash };

export interface GetRegionInfoOptions extends GetResolvedHostnameOptions {}

export const getRegionInfo = (
  region: string,
  { signingService, regionHash, partitionHash }: GetRegionInfoOptions
): RegionInfo => {
  const partition = getResolvedPartition(region, { partitionHash });
  const resolvedRegion = partitionHash[partition]?.endpoint ?? region;
  return {
    partition,
    signingService,
    hostname: getResolvedHostname(resolvedRegion, { signingService, regionHash, partitionHash }),
    ...(regionHash[resolvedRegion]?.signingRegion && {
      signingRegion: regionHash[resolvedRegion].signingRegion,
    }),
    ...(regionHash[resolvedRegion]?.signingService && {
      signingService: regionHash[resolvedRegion].signingService,
    }),
  };
};
