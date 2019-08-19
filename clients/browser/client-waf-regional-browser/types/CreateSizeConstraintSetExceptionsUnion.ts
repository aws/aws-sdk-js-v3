import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
export type CreateSizeConstraintSetExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFDisallowedNameException
  | WAFInvalidParameterException
  | WAFLimitsExceededException;
