import { NoSuchConfigRuleException } from "./NoSuchConfigRuleException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type DescribeConfigRuleEvaluationStatusExceptionsUnion =
  | NoSuchConfigRuleException
  | InvalidParameterValueException
  | InvalidNextTokenException;
