import { CacheParameterGroupNotFoundFault } from "./CacheParameterGroupNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeCacheParametersExceptionsUnion =
  | CacheParameterGroupNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
