import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
export type AddTagsToResourceExceptionsUnion =
  | DBInstanceNotFoundFault
  | DBSnapshotNotFoundFault
  | DBClusterNotFoundFault;
