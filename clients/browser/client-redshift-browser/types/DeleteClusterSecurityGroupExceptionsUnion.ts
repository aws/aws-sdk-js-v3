import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
export type DeleteClusterSecurityGroupExceptionsUnion =
  | InvalidClusterSecurityGroupStateFault
  | ClusterSecurityGroupNotFoundFault;
