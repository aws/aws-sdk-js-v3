import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
export type DeleteRuleGroupExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFNonexistentItemException
  | WAFReferencedItemException
  | WAFNonEmptyEntityException
  | WAFInvalidOperationException
  | WAFTagOperationException
  | WAFTagOperationInternalErrorException;
