import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeClusterSubnetGroupsExceptionsUnion =
  | ClusterSubnetGroupNotFoundFault
  | InvalidTagFault;
