import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type ModifyCacheParameterGroupExceptionsUnion =
  | CacheParameterGroupNotFoundFault
  | InvalidCacheParameterGroupStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
