import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because you tried to delete an object that is still in use. For example:</p> <ul> <li> <p>You tried to delete a <code>ByteMatchSet</code> that is still referenced by a <code>Rule</code>.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that is still referenced by a <code>WebACL</code>.</p> </li> </ul>
 */
export interface WAFReferencedItemException
  extends __ServiceException__<_WAFReferencedItemExceptionDetails> {
  name: "WAFReferencedItemException";
}

export interface _WAFReferencedItemExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
