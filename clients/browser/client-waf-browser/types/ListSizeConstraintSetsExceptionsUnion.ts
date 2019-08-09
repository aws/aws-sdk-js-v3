import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListSizeConstraintSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
