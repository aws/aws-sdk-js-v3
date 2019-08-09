import { SnapshotScheduleAlreadyExistsFault } from "./SnapshotScheduleAlreadyExistsFault";
import { InvalidScheduleFault } from "./InvalidScheduleFault";
import { SnapshotScheduleQuotaExceededFault } from "./SnapshotScheduleQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { ScheduleDefinitionTypeUnsupportedFault } from "./ScheduleDefinitionTypeUnsupportedFault";
export type CreateSnapshotScheduleExceptionsUnion =
  | SnapshotScheduleAlreadyExistsFault
  | InvalidScheduleFault
  | SnapshotScheduleQuotaExceededFault
  | TagLimitExceededFault
  | ScheduleDefinitionTypeUnsupportedFault;
