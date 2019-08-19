import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidPermissionPolicyException } from "./WAFInvalidPermissionPolicyException";
export type PutPermissionPolicyExceptionsUnion =
  | WAFInternalErrorException
  | WAFStaleDataException
  | WAFNonexistentItemException
  | WAFInvalidPermissionPolicyException;
