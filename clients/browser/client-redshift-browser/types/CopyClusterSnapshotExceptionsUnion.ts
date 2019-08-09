import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type CopyClusterSnapshotExceptionsUnion =
  | ClusterSnapshotAlreadyExistsFault
  | ClusterSnapshotNotFoundFault
  | InvalidClusterSnapshotStateFault
  | ClusterSnapshotQuotaExceededFault
  | InvalidRetentionPeriodFault;
