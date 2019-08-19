import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSnapshotAlreadyExistsFault } from "./DBSnapshotAlreadyExistsFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
export type DeleteDBInstanceExceptionsUnion =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | DBSnapshotAlreadyExistsFault
  | SnapshotQuotaExceededFault
  | InvalidDBClusterStateFault;
