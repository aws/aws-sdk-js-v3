import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
export type CreateDBClusterSnapshotExceptionsUnion =
  | DBClusterSnapshotAlreadyExistsFault
  | InvalidDBClusterStateFault
  | DBClusterNotFoundFault
  | SnapshotQuotaExceededFault
  | InvalidDBClusterSnapshotStateFault;
