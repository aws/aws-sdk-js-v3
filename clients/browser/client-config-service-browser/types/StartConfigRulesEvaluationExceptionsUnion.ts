import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type StartConfigRulesEvaluationExceptionsUnion =
  | NoSuchConfigRuleException
  | LimitExceededException
  | ResourceInUseException
  | InvalidParameterValueException;
