import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
export type RebootClusterExceptionsUnion =
  | InvalidClusterStateFault
  | ClusterNotFoundFault;
