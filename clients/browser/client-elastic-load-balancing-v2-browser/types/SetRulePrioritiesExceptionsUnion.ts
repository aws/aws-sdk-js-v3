import { RuleNotFoundException } from "./RuleNotFoundException";
import { PriorityInUseException } from "./PriorityInUseException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type SetRulePrioritiesExceptionsUnion =
  | RuleNotFoundException
  | PriorityInUseException
  | OperationNotPermittedException;
