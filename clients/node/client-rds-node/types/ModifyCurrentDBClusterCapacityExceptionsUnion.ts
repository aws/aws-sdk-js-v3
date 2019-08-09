import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBClusterCapacityFault } from "./InvalidDBClusterCapacityFault";
export type ModifyCurrentDBClusterCapacityExceptionsUnion =
  | DBClusterNotFoundFault
  | InvalidDBClusterStateFault
  | InvalidDBClusterCapacityFault;
