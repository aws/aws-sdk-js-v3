import { RegionInfoOptions } from "./types";

export const getResolvedPartition = (region: string, { partitionHash }: Omit<RegionInfoOptions, "regionHash">) =>
  Object.keys(partitionHash).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";
