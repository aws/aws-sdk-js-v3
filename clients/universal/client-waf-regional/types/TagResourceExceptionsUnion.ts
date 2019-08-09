import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
export type TagResourceExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFNonexistentItemException
  | WAFBadRequestException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException;
