import { getHostnameTemplate } from "./getHostnameTemplate";
import { PartitionHash } from "./PartitionHash";
import { RegionHash } from "./RegionHash";

export interface GetResolvedHostnameOptions {
  signingService: string;
  regionHash: RegionHash;
  partitionHash: PartitionHash;
}

export const getResolvedHostname = (
  region: string,
  { signingService, regionHash, partitionHash }: GetResolvedHostnameOptions
) =>
  regionHash[region]?.hostname ??
  getHostnameTemplate(region, { signingService, partitionHash }).replace("{region}", region);
