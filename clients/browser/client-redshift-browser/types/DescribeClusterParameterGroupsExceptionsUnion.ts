import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeClusterParameterGroupsExceptionsUnion =
  | ClusterParameterGroupNotFoundFault
  | InvalidTagFault;
