import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
export type ResetClusterParameterGroupExceptionsUnion =
  | InvalidClusterParameterGroupStateFault
  | ClusterParameterGroupNotFoundFault;
