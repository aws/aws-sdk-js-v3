import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
export type ModifyGlobalClusterExceptionsUnion =
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault;
