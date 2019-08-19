import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
export type DisassociateWebACLExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFInvalidParameterException
  | WAFNonexistentItemException;
