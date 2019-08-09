import { ServiceUpdateNotFoundFault } from "./ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DescribeServiceUpdatesExceptionsUnion =
  | ServiceUpdateNotFoundFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
