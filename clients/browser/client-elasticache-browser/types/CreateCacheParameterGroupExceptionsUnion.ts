import { CacheParameterGroupQuotaExceededFault } from "./CacheParameterGroupQuotaExceededFault";
import { CacheParameterGroupAlreadyExistsFault } from "./CacheParameterGroupAlreadyExistsFault";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateCacheParameterGroupExceptionsUnion =
  | CacheParameterGroupQuotaExceededFault
  | CacheParameterGroupAlreadyExistsFault
  | InvalidCacheParameterGroupStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
