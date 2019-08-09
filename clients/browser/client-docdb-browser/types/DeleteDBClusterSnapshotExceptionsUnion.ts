import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
export type DeleteDBClusterSnapshotExceptionsUnion =
  | InvalidDBClusterSnapshotStateFault
  | DBClusterSnapshotNotFoundFault;
