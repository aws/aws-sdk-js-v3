import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
export type AuthorizeDBSecurityGroupIngressExceptionsUnion =
  | DBSecurityGroupNotFoundFault
  | InvalidDBSecurityGroupStateFault
  | AuthorizationAlreadyExistsFault
  | AuthorizationQuotaExceededFault;
