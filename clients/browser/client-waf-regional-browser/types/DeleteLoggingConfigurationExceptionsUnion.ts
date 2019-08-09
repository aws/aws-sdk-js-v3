import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
export type DeleteLoggingConfigurationExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException
  | WAFStaleDataException;
