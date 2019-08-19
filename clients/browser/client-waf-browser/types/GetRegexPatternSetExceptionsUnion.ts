import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetRegexPatternSetExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException;
