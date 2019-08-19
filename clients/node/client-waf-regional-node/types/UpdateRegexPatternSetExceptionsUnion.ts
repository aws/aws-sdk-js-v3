import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidRegexPatternException } from "./WAFInvalidRegexPatternException";
export type UpdateRegexPatternSetExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFNonexistentContainerException
  | WAFInvalidOperationException
  | WAFInvalidAccountException
  | WAFInvalidRegexPatternException;
