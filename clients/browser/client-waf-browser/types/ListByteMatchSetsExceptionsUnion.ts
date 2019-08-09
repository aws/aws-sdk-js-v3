import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListByteMatchSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
