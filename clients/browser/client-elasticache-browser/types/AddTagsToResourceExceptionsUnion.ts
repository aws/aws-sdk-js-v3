import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { TagQuotaPerResourceExceeded } from "./TagQuotaPerResourceExceeded";
import { InvalidARNFault } from "./InvalidARNFault";
export type AddTagsToResourceExceptionsUnion =
  | CacheClusterNotFoundFault
  | SnapshotNotFoundFault
  | TagQuotaPerResourceExceeded
  | InvalidARNFault;
