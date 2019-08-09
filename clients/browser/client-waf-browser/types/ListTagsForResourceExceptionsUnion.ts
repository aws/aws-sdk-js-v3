import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
export type ListTagsForResourceExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidParameterException
  | WAFNonexistentItemException
  | WAFBadRequestException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException;
