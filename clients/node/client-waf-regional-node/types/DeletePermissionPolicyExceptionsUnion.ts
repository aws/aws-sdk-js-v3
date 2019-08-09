import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type DeletePermissionPolicyExceptionsUnion =
  | WAFInternalErrorException
  | WAFStaleDataException
  | WAFNonexistentItemException;
