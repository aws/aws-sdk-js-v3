import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListSqlInjectionMatchSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
