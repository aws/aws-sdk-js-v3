import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListWebACLsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
