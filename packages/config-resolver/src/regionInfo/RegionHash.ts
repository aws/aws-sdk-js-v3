import { RegionInfo } from "@aws-sdk/types";

export type RegionHash = { [key: string]: Partial<Omit<RegionInfo, "partition" | "path">> };
