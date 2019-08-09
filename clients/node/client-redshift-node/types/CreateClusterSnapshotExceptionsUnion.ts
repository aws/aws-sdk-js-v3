import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type CreateClusterSnapshotExceptionsUnion =
  | ClusterSnapshotAlreadyExistsFault
  | InvalidClusterStateFault
  | ClusterNotFoundFault
  | ClusterSnapshotQuotaExceededFault
  | TagLimitExceededFault
  | InvalidTagFault
  | InvalidRetentionPeriodFault;
