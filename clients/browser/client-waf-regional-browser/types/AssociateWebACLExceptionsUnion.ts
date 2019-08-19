import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFUnavailableEntityException } from "./WAFUnavailableEntityException";
export type AssociateWebACLExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFUnavailableEntityException;
