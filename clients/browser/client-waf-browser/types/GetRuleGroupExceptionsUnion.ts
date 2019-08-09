import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetRuleGroupExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException;
