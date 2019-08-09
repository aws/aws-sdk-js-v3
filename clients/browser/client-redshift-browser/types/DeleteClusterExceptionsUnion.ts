import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type DeleteClusterExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | ClusterSnapshotAlreadyExistsFault
  | ClusterSnapshotQuotaExceededFault
  | InvalidRetentionPeriodFault;
