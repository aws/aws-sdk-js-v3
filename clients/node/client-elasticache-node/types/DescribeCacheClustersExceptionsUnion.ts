import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeCacheClustersExceptionsUnion =
  | CacheClusterNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
