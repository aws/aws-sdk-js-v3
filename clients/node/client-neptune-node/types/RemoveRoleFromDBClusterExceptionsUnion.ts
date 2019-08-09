import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterRoleNotFoundFault } from "./DBClusterRoleNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
export type RemoveRoleFromDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | DBClusterRoleNotFoundFault
  | InvalidDBClusterStateFault;
