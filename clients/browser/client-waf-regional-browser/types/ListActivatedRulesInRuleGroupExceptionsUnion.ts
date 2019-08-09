import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
export type ListActivatedRulesInRuleGroupExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException
  | WAFInvalidParameterException;
