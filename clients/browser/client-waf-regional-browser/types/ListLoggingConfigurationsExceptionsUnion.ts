import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
export type ListLoggingConfigurationsExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException
  | WAFInvalidParameterException;
