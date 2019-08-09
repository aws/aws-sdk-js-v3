import { RuleDoesNotExistException } from "./RuleDoesNotExistException";
import { RuleSetDoesNotExistException } from "./RuleSetDoesNotExistException";
export type DescribeReceiptRuleExceptionsUnion =
  | RuleDoesNotExistException
  | RuleSetDoesNotExistException;
