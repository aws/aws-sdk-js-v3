import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterEndpointStateFault } from "./InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "./DBClusterEndpointNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
export type ModifyDBClusterEndpointExceptionsUnion =
  | InvalidDBClusterStateFault
  | InvalidDBClusterEndpointStateFault
  | DBClusterEndpointNotFoundFault
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault;
