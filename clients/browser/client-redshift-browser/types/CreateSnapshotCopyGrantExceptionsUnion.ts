import { SnapshotCopyGrantAlreadyExistsFault } from "./SnapshotCopyGrantAlreadyExistsFault";
import { SnapshotCopyGrantQuotaExceededFault } from "./SnapshotCopyGrantQuotaExceededFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
export type CreateSnapshotCopyGrantExceptionsUnion =
  | SnapshotCopyGrantAlreadyExistsFault
  | SnapshotCopyGrantQuotaExceededFault
  | LimitExceededFault
  | TagLimitExceededFault
  | InvalidTagFault
  | DependentServiceRequestThrottlingFault;
