import { InvalidClusterSnapshotScheduleStateFault } from "./InvalidClusterSnapshotScheduleStateFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
export type DeleteSnapshotScheduleExceptionsUnion =
  | InvalidClusterSnapshotScheduleStateFault
  | SnapshotScheduleNotFoundFault;
