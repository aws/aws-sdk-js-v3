import { DBClusterSnapshotAlreadyExistsFault } from "./DBClusterSnapshotAlreadyExistsFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type CopyDBClusterSnapshotExceptionsUnion =
  | DBClusterSnapshotAlreadyExistsFault
  | DBClusterSnapshotNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBClusterSnapshotStateFault
  | SnapshotQuotaExceededFault
  | KMSKeyNotAccessibleFault;
