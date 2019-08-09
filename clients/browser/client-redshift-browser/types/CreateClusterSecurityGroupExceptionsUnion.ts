import { ClusterSecurityGroupAlreadyExistsFault } from "./ClusterSecurityGroupAlreadyExistsFault";
import { ClusterSecurityGroupQuotaExceededFault } from "./ClusterSecurityGroupQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateClusterSecurityGroupExceptionsUnion =
  | ClusterSecurityGroupAlreadyExistsFault
  | ClusterSecurityGroupQuotaExceededFault
  | TagLimitExceededFault
  | InvalidTagFault;
