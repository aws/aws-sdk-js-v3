import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
export type DescribeConfigurationAggregatorSourcesStatusExceptionsUnion =
  | InvalidParameterValueException
  | NoSuchConfigurationAggregatorException
  | InvalidNextTokenException
  | InvalidLimitException;
