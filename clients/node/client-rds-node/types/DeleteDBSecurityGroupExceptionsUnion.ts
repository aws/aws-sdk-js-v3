import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
export type DeleteDBSecurityGroupExceptionsUnion =
  | InvalidDBSecurityGroupStateFault
  | DBSecurityGroupNotFoundFault;
