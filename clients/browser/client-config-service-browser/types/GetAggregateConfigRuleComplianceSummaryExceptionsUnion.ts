import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoSuchConfigurationAggregatorException } from "./NoSuchConfigurationAggregatorException";
export type GetAggregateConfigRuleComplianceSummaryExceptionsUnion =
  | ValidationException
  | InvalidLimitException
  | InvalidNextTokenException
  | NoSuchConfigurationAggregatorException;
