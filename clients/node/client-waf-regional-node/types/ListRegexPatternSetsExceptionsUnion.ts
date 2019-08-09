import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListRegexPatternSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
