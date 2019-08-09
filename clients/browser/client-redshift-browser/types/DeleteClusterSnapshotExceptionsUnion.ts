import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
export type DeleteClusterSnapshotExceptionsUnion =
  | InvalidClusterSnapshotStateFault
  | ClusterSnapshotNotFoundFault;
