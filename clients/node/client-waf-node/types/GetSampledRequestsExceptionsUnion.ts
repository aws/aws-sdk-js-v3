import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
export type GetSampledRequestsExceptionsUnion =
  | WAFNonexistentItemException
  | WAFInternalErrorException;
