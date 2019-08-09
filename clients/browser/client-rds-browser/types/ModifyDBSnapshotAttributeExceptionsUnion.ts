import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { SharedSnapshotQuotaExceededFault } from "./SharedSnapshotQuotaExceededFault";
export type ModifyDBSnapshotAttributeExceptionsUnion =
  | DBSnapshotNotFoundFault
  | InvalidDBSnapshotStateFault
  | SharedSnapshotQuotaExceededFault;
