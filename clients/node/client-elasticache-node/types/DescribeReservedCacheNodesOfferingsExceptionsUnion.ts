import { ReservedCacheNodesOfferingNotFoundFault } from "./ReservedCacheNodesOfferingNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeReservedCacheNodesOfferingsExceptionsUnion =
  | ReservedCacheNodesOfferingNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
