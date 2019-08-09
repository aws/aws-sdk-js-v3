import { SnapshotCopyGrantNotFoundFault } from "./SnapshotCopyGrantNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeSnapshotCopyGrantsExceptionsUnion =
  | SnapshotCopyGrantNotFoundFault
  | InvalidTagFault;
