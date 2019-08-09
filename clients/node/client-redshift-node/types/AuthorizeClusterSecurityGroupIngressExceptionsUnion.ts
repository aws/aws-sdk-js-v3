import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
export type AuthorizeClusterSecurityGroupIngressExceptionsUnion =
  | ClusterSecurityGroupNotFoundFault
  | InvalidClusterSecurityGroupStateFault
  | AuthorizationAlreadyExistsFault
  | AuthorizationQuotaExceededFault;
