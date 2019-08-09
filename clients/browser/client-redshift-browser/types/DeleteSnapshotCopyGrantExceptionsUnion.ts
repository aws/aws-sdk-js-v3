import { InvalidSnapshotCopyGrantStateFault } from "./InvalidSnapshotCopyGrantStateFault";
import { SnapshotCopyGrantNotFoundFault } from "./SnapshotCopyGrantNotFoundFault";
export type DeleteSnapshotCopyGrantExceptionsUnion =
  | InvalidSnapshotCopyGrantStateFault
  | SnapshotCopyGrantNotFoundFault;
