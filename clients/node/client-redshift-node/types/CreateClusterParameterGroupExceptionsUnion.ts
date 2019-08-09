import { ClusterParameterGroupQuotaExceededFault } from "./ClusterParameterGroupQuotaExceededFault";
import { ClusterParameterGroupAlreadyExistsFault } from "./ClusterParameterGroupAlreadyExistsFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateClusterParameterGroupExceptionsUnion =
  | ClusterParameterGroupQuotaExceededFault
  | ClusterParameterGroupAlreadyExistsFault
  | TagLimitExceededFault
  | InvalidTagFault;
