import { getHostnameTemplate, GetHostnameTemplateOptions } from "./getHostnameTemplate";
import { GetResolvedPartitionOptions } from "./getResolvedPartition";
import { RegionHash } from "./RegionHash";

export interface GetResolvedHostnameOptions extends GetHostnameTemplateOptions, GetResolvedPartitionOptions {
  /**
   * The hash of region with the information specific to that region.
   * The information can include hostname, signingService and signingRegion.
   */
  regionHash: RegionHash;
}

export const getResolvedHostname = (
  region: string,
  { signingService, regionHash, partitionHash }: GetResolvedHostnameOptions
) =>
  regionHash[region]?.hostname ??
  getHostnameTemplate(region, { signingService, partitionHash }).replace("{region}", region);
