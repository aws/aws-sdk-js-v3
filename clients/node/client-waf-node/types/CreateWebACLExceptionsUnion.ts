import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "./WAFBadRequestException";
export type CreateWebACLExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFDisallowedNameException
  | WAFInvalidParameterException
  | WAFLimitsExceededException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | WAFBadRequestException;
