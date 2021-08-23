import { RegionInfo } from "@aws-sdk/types";

import { getResolvedHostname, GetResolvedHostnameOptions, RegionHash } from "./getResolvedHostname";
import { getResolvedPartition, PartitionHash } from "./getResolvedPartition";

export { RegionHash, PartitionHash };

export interface GetRegionInfoOptions extends GetResolvedHostnameOptions {}

export const getRegionInfo = (
  region: string,
  { signingService, regionHash, partitionHash }: GetRegionInfoOptions
): RegionInfo => ({
  signingService,
  hostname: getResolvedHostname(region, { signingService, regionHash, partitionHash }),
  partition: getResolvedPartition(region, { partitionHash }),
  ...(regionHash[region]?.signingRegion && {
    signingRegion: regionHash[region].signingRegion,
  }),
  ...(regionHash[region]?.signingService && {
    signingService: regionHash[region].signingService,
  }),
});
