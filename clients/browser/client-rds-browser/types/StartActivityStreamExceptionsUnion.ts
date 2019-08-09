import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type StartActivityStreamExceptionsUnion =
  | InvalidDBInstanceStateFault
  | InvalidDBClusterStateFault
  | ResourceNotFoundFault
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | KMSKeyNotAccessibleFault;
