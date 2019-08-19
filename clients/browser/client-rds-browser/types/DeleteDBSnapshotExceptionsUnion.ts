import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
export type DeleteDBSnapshotExceptionsUnion =
  | InvalidDBSnapshotStateFault
  | DBSnapshotNotFoundFault;
