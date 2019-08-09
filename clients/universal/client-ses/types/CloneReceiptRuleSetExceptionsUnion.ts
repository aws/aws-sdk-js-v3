import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CloneReceiptRuleSetExceptionsUnion =
  | RuleSetDoesNotExistException
  | AlreadyExistsException
  | LimitExceededException;
