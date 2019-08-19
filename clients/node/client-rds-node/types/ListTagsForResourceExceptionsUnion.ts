import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
export type ListTagsForResourceExceptionsUnion =
  | DBInstanceNotFoundFault
  | DBSnapshotNotFoundFault
  | DBClusterNotFoundFault;
