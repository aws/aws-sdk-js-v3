import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetRegexMatchSetExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException;
