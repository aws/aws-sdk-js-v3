import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidARNFault } from "./InvalidARNFault";
import { TagNotFoundFault } from "./TagNotFoundFault";
export type RemoveTagsFromResourceExceptionsUnion =
  | CacheClusterNotFoundFault
  | SnapshotNotFoundFault
  | InvalidARNFault
  | TagNotFoundFault;
