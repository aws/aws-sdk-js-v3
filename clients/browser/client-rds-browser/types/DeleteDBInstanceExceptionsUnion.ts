import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBInstanceAutomatedBackupQuotaExceededFault } from "./DBInstanceAutomatedBackupQuotaExceededFault";
export type DeleteDBInstanceExceptionsUnion =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | DBSnapshotAlreadyExistsFault
  | SnapshotQuotaExceededFault
  | InvalidDBClusterStateFault
  | DBInstanceAutomatedBackupQuotaExceededFault;
