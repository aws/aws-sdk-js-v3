import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListRateBasedRulesExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
