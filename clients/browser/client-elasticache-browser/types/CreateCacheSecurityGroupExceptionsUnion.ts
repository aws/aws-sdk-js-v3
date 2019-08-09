import { CacheSecurityGroupAlreadyExistsFault } from "./CacheSecurityGroupAlreadyExistsFault";
import { CacheSecurityGroupQuotaExceededFault } from "./CacheSecurityGroupQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CreateCacheSecurityGroupExceptionsUnion =
  | CacheSecurityGroupAlreadyExistsFault
  | CacheSecurityGroupQuotaExceededFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
