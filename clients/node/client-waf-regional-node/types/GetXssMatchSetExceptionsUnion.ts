import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetXssMatchSetExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException;
