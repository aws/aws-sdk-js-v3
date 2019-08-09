import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
export type BacktrackDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault;
