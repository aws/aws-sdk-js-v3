import { ReservedCacheNodeNotFoundFault } from "./ReservedCacheNodeNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeReservedCacheNodesExceptionsUnion =
  | ReservedCacheNodeNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
