import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
export type DeleteGlobalClusterExceptionsUnion =
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault;
