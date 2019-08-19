import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
export type ModifyClusterIamRolesExceptionsUnion =
  | InvalidClusterStateFault
  | ClusterNotFoundFault;
