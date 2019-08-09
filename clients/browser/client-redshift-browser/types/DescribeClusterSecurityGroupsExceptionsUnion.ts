import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeClusterSecurityGroupsExceptionsUnion =
  | ClusterSecurityGroupNotFoundFault
  | InvalidTagFault;
