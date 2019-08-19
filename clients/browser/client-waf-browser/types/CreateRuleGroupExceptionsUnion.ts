import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { WAFBadRequestException } from "./WAFBadRequestException";
export type CreateRuleGroupExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFDisallowedNameException
  | WAFLimitsExceededException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException
  | WAFBadRequestException;
