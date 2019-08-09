import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFServiceLinkedRoleErrorException } from "./WAFServiceLinkedRoleErrorException";
export type PutLoggingConfigurationExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException
  | WAFStaleDataException
  | WAFServiceLinkedRoleErrorException;
