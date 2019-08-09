import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { InvalidClusterSnapshotScheduleStateFault } from "./InvalidClusterSnapshotScheduleStateFault";
export type ModifyClusterSnapshotScheduleExceptionsUnion =
  | ClusterNotFoundFault
  | SnapshotScheduleNotFoundFault
  | InvalidClusterSnapshotScheduleStateFault;
