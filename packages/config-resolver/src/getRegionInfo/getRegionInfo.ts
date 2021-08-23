import { getResolvedHostName } from "./getResolvedHostname";
import { getResolvedPartition } from "./getResolvedPartition";
import { RegionInfoOptions } from "./types";

export const getRegionInfo = (region: string, { regionHash, partitionHash }: RegionInfoOptions) => ({
  signingService: "s3",
  hostname: getResolvedHostName(region, { regionHash, partitionHash }),
  partition: getResolvedPartition(region, { partitionHash }),
  ...(regionHash[region]?.signingRegion && {
    signingRegion: regionHash[region].signingRegion,
  }),
  ...(regionHash[region]?.signingService && {
    signingService: regionHash[region].signingService,
  }),
});
