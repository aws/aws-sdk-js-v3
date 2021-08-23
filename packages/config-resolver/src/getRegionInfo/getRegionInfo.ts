import { getResolvedHostname, GetResolvedHostnameOptions } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";

export interface GetRegionInfoOptions extends GetResolvedHostnameOptions {}

export const getRegionInfo = (region: string, { signingService, regionHash, partitionHash }: GetRegionInfoOptions) => ({
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
