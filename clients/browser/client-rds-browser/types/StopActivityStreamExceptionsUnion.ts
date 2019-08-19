import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
export type StopActivityStreamExceptionsUnion =
  | InvalidDBInstanceStateFault
  | InvalidDBClusterStateFault
  | ResourceNotFoundFault
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault;
