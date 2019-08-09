import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
export type CreateSqlInjectionMatchSetExceptionsUnion =
  | WAFDisallowedNameException
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFInvalidParameterException
  | WAFStaleDataException
  | WAFLimitsExceededException;
