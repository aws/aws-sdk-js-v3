import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
export type CreateDBSnapshotExceptionsUnion =
  | DBSnapshotAlreadyExistsFault
  | InvalidDBInstanceStateFault
  | DBInstanceNotFoundFault
  | SnapshotQuotaExceededFault;
