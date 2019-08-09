import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { InProgressTableRestoreQuotaExceededFault } from "./InProgressTableRestoreQuotaExceededFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { InvalidTableRestoreArgumentFault } from "./InvalidTableRestoreArgumentFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
export type RestoreTableFromClusterSnapshotExceptionsUnion =
  | ClusterSnapshotNotFoundFault
  | InProgressTableRestoreQuotaExceededFault
  | InvalidClusterSnapshotStateFault
  | InvalidTableRestoreArgumentFault
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault;
