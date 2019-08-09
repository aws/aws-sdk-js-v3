import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
export type DescribeValidDBInstanceModificationsExceptionsUnion =
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault;
