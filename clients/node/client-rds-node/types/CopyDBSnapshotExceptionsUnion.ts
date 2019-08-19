import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type CopyDBSnapshotExceptionsUnion =
  | DBSnapshotAlreadyExistsFault
  | DBSnapshotNotFoundFault
  | InvalidDBSnapshotStateFault
  | SnapshotQuotaExceededFault
  | KMSKeyNotAccessibleFault;
