import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterRoleAlreadyExistsFault } from "./DBClusterRoleAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterRoleQuotaExceededFault } from "./DBClusterRoleQuotaExceededFault";
export type AddRoleToDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | DBClusterRoleAlreadyExistsFault
  | InvalidDBClusterStateFault
  | DBClusterRoleQuotaExceededFault;
