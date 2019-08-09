import { ValidationException } from "./ValidationException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
import { OversizedConfigurationItemException } from "./OversizedConfigurationItemException";
import { ResourceNotDiscoveredException } from "./ResourceNotDiscoveredException";
export type GetAggregateResourceConfigExceptionsUnion =
  | ValidationException
  | NoSuchConfigurationAggregatorException
  | OversizedConfigurationItemException
  | ResourceNotDiscoveredException;
