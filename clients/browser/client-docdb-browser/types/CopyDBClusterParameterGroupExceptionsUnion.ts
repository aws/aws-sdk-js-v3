import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBParameterGroupQuotaExceededFault } from "./DBParameterGroupQuotaExceededFault";
import { DBParameterGroupAlreadyExistsFault } from "./DBParameterGroupAlreadyExistsFault";
export type CopyDBClusterParameterGroupExceptionsUnion =
  | DBParameterGroupNotFoundFault
  | DBParameterGroupQuotaExceededFault
  | DBParameterGroupAlreadyExistsFault;
