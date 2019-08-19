import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
export type PromoteReadReplicaDBClusterExceptionsUnion =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault;
