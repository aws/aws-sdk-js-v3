import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { BatchModifyClusterSnapshotsLimitExceededFault } from "./BatchModifyClusterSnapshotsLimitExceededFault";
export type BatchModifyClusterSnapshotsExceptionsUnion =
  | InvalidRetentionPeriodFault
  | BatchModifyClusterSnapshotsLimitExceededFault;
