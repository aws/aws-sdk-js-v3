import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListIPSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
