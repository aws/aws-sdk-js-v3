import { RuleNotFoundException } from "./RuleNotFoundException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type DeleteRuleExceptionsUnion =
  | RuleNotFoundException
  | OperationNotPermittedException;
