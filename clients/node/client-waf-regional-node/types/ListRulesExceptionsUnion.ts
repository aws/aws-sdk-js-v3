import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListRulesExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
