import { InvalidDBClusterEndpointStateFault } from "./InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "./DBClusterEndpointNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
export type DeleteDBClusterEndpointExceptionsUnion =
  | InvalidDBClusterEndpointStateFault
  | DBClusterEndpointNotFoundFault
  | InvalidDBClusterStateFault;
