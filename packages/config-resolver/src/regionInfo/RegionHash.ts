import { RegionInfo } from "@aws-sdk/types";

/**
 * The hash of region with the information specific to that region.
 * The information can include hostname, signingService and signingRegion.
 */
export type RegionHash = { [key: string]: Partial<Omit<RegionInfo, "partition" | "path">> };
