import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type RevokeCacheSecurityGroupIngressExceptionsUnion =
  | CacheSecurityGroupNotFoundFault
  | AuthorizationNotFoundFault
  | InvalidCacheSecurityGroupStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
