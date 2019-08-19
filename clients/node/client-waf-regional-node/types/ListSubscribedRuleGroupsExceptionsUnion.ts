import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
export type ListSubscribedRuleGroupsExceptionsUnion =
  | WAFNonexistentItemException
  | WAFInternalErrorException;
