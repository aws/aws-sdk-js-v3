import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { SharedSnapshotQuotaExceededFault } from "./SharedSnapshotQuotaExceededFault";
export type ModifyDBClusterSnapshotAttributeExceptionsUnion =
  | DBClusterSnapshotNotFoundFault
  | InvalidDBClusterSnapshotStateFault
  | SharedSnapshotQuotaExceededFault;
