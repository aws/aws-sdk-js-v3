import { InvalidScheduleFault } from "./InvalidScheduleFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { SnapshotScheduleUpdateInProgressFault } from "./SnapshotScheduleUpdateInProgressFault";
export type ModifySnapshotScheduleExceptionsUnion =
  | InvalidScheduleFault
  | SnapshotScheduleNotFoundFault
  | SnapshotScheduleUpdateInProgressFault;
