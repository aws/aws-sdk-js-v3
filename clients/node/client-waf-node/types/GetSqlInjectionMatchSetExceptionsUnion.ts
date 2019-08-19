import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetSqlInjectionMatchSetExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException;
