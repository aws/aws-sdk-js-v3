import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
export type CreateDBClusterParameterGroupExceptionsUnion =
  | DBParameterGroupQuotaExceededFault
  | DBParameterGroupAlreadyExistsFault;
