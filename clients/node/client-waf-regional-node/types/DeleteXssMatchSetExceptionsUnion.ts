import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
export type DeleteXssMatchSetExceptionsUnion =
  | WAFInternalErrorException
  | WAFInvalidAccountException
  | WAFNonexistentItemException
  | WAFReferencedItemException
  | WAFStaleDataException
  | WAFNonEmptyEntityException;
