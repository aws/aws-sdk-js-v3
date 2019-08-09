import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeClusterSnapshotsExceptionsUnion =
  | ClusterNotFoundFault
  | ClusterSnapshotNotFoundFault
  | InvalidTagFault;
