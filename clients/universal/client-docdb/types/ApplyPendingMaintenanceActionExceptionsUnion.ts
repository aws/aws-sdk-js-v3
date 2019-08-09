import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
export type ApplyPendingMaintenanceActionExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBInstanceStateFault;
