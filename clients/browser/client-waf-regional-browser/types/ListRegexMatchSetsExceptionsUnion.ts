import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListRegexMatchSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
