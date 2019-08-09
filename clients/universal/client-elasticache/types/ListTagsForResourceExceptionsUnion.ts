import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
export type ListTagsForResourceExceptionsUnion =
  | CacheClusterNotFoundFault
  | SnapshotNotFoundFault
  | InvalidARNFault;
