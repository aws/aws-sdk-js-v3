import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
export type UpdateRegexMatchSetExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFDisallowedNameException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFNonexistentContainerException
  | WAFInvalidOperationException
  | WAFInvalidAccountException;
