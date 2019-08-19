import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetLoggingConfigurationExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException;
