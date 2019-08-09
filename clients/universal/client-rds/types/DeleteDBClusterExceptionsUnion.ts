import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
export type DeleteDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | DBClusterSnapshotAlreadyExistsFault
  | SnapshotQuotaExceededFault
  | InvalidDBClusterSnapshotStateFault;
