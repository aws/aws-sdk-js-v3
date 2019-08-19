import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
export type DeleteSizeConstraintSetExceptionsUnion =
  | WAFStaleDataException
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException
  | WAFReferencedItemException
  | WAFNonEmptyEntityException;
