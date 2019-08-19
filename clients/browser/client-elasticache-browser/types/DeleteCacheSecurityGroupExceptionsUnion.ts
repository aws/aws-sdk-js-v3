import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteCacheSecurityGroupExceptionsUnion =
  | InvalidCacheSecurityGroupStateFault
  | CacheSecurityGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
