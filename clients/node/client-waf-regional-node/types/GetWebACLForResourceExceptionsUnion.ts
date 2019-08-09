import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFUnavailableEntityException } from "./WAFUnavailableEntityException";
export type GetWebACLForResourceExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException
  | WAFInvalidParameterException
  | WAFUnavailableEntityException;
