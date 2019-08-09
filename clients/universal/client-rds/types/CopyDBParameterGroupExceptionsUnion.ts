import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
export type CopyDBParameterGroupExceptionsUnion =
  | DBParameterGroupNotFoundFault
  | DBParameterGroupAlreadyExistsFault
  | DBParameterGroupQuotaExceededFault;
