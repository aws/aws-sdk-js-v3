import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
export type GetChangeTokenStatusExceptionsUnion =
  | WAFNonexistentItemException
  | WAFInternalErrorException;
