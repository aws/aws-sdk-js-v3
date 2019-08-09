import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
export type RebootDBInstanceExceptionsUnion =
  | InvalidDBInstanceStateFault
  | DBInstanceNotFoundFault;
