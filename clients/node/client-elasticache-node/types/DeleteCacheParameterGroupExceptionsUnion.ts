import { InvalidCacheParameterGroupStateFault } from "./InvalidCacheParameterGroupStateFault";
import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteCacheParameterGroupExceptionsUnion =
  | InvalidCacheParameterGroupStateFault
  | CacheParameterGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
