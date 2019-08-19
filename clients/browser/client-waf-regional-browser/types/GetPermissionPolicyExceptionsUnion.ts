import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type GetPermissionPolicyExceptionsUnion =
  | WAFInternalErrorException
  | WAFNonexistentItemException;
