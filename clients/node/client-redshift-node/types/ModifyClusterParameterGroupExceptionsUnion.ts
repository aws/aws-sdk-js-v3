import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { InvalidClusterParameterGroupStateFault } from "./InvalidClusterParameterGroupStateFault";
export type ModifyClusterParameterGroupExceptionsUnion =
  | ClusterParameterGroupNotFoundFault
  | InvalidClusterParameterGroupStateFault;
