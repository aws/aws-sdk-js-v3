import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type ModifyClusterSnapshotExceptionsUnion =
  | InvalidClusterSnapshotStateFault
  | ClusterSnapshotNotFoundFault
  | InvalidRetentionPeriodFault;
