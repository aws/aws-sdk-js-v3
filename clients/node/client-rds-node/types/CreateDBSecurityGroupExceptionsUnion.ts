import { DBSecurityGroupAlreadyExistsFault } from "./DBSecurityGroupAlreadyExistsFault";
import { DBSecurityGroupQuotaExceededFault } from "./DBSecurityGroupQuotaExceededFault";
import { DBSecurityGroupNotSupportedFault } from "./DBSecurityGroupNotSupportedFault";
export type CreateDBSecurityGroupExceptionsUnion =
  | DBSecurityGroupAlreadyExistsFault
  | DBSecurityGroupQuotaExceededFault
  | DBSecurityGroupNotSupportedFault;
