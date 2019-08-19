import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
export type CreateRegexMatchSetExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFDisallowedNameException
  | WAFLimitsExceededException;
