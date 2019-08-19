import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidCacheSecurityGroupStateFault } from "./InvalidCacheSecurityGroupStateFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type AuthorizeCacheSecurityGroupIngressExceptionsUnion =
  | CacheSecurityGroupNotFoundFault
  | InvalidCacheSecurityGroupStateFault
  | AuthorizationAlreadyExistsFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
