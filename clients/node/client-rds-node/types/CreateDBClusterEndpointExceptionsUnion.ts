import { DBClusterEndpointQuotaExceededFault } from "./DBClusterEndpointQuotaExceededFault";
import { DBClusterEndpointAlreadyExistsFault } from "./DBClusterEndpointAlreadyExistsFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
export type CreateDBClusterEndpointExceptionsUnion =
  | DBClusterEndpointQuotaExceededFault
  | DBClusterEndpointAlreadyExistsFault
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault;
