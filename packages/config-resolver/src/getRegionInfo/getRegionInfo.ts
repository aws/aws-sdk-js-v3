import { getResolvedHostname, GetResolvedHostnameOptions } from "./getResolvedHostname";
import { getResolvedPartition, GetResolvedPartitionOptions } from "./getResolvedPartition";

export interface GetRegionInfoOptions extends GetResolvedHostnameOptions, GetResolvedPartitionOptions {
  /**
   * The name to be used while signing the service request.
   */
  signingService: string;
}

export const getRegionInfo = (region: string, { signingService, regionHash, partitionHash }: GetRegionInfoOptions) => ({
  signingService,
  hostname: getResolvedHostname(region, { regionHash, partitionHash }),
  partition: getResolvedPartition(region, { partitionHash }),
  ...(regionHash[region]?.signingRegion && {
    signingRegion: regionHash[region].signingRegion,
  }),
  ...(regionHash[region]?.signingService && {
    signingService: regionHash[region].signingService,
  }),
});
