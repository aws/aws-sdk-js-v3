import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
export type RevokeClusterSecurityGroupIngressExceptionsUnion =
  | ClusterSecurityGroupNotFoundFault
  | AuthorizationNotFoundFault
  | InvalidClusterSecurityGroupStateFault;
