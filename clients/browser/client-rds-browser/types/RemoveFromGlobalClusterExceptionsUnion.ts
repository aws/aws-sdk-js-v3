import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
export type RemoveFromGlobalClusterExceptionsUnion =
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault
  | DBClusterNotFoundFault;
