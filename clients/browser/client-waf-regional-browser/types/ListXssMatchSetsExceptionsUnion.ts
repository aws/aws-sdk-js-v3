import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListXssMatchSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
