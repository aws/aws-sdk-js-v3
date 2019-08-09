import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
export type RevokeDBSecurityGroupIngressExceptionsUnion =
  | DBSecurityGroupNotFoundFault
  | AuthorizationNotFoundFault
  | InvalidDBSecurityGroupStateFault;
