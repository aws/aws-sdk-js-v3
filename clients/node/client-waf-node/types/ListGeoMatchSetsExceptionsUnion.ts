import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type ListGeoMatchSetsExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException;
