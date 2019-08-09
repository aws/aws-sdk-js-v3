import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
export type CreateDBParameterGroupExceptionsUnion =
  | DBParameterGroupQuotaExceededFault
  | DBParameterGroupAlreadyExistsFault;
