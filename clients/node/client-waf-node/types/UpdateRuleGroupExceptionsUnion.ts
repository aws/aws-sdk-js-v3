import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
export type UpdateRuleGroupExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFNonexistentContainerException
  | WAFNonexistentItemException
  | WAFInvalidOperationException
  | WAFLimitsExceededException
  | WAFInvalidParameterException;
