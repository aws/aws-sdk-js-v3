import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBInstanceRoleNotFoundFault } from "./DBInstanceRoleNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
export type RemoveRoleFromDBInstanceExceptionsUnion =
  | DBInstanceNotFoundFault
  | DBInstanceRoleNotFoundFault
  | InvalidDBInstanceStateFault;
