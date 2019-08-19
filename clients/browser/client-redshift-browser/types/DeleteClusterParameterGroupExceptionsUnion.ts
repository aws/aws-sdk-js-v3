import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
export type DeleteClusterParameterGroupExceptionsUnion =
  | InvalidClusterParameterGroupStateFault
  | ClusterParameterGroupNotFoundFault;
