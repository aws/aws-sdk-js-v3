import { CacheSecurityGroupNotFoundFault } from "./CacheSecurityGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeCacheSecurityGroupsExceptionsUnion =
  | CacheSecurityGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
