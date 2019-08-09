import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type ResetCacheParameterGroupExceptionsUnion =
  | InvalidCacheParameterGroupStateFault
  | CacheParameterGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
