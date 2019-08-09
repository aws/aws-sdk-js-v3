import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
export type DeleteRuleExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException
  | WAFReferencedItemException
  | WAFNonEmptyEntityException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException;
