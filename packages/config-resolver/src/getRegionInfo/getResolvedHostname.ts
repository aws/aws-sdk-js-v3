import { getResolvedPartition } from "./getResolvedPartition";
import { RegionInfoOptions } from "./types";

export const getResolvedHostName = (region: string, { regionHash, partitionHash }: RegionInfoOptions) =>
  regionHash[region]?.hostname ??
  partitionHash[getResolvedPartition(region, { partitionHash })].hostname.replace("{region}", region);
