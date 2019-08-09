import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because you tried to delete an object that isn't empty. For example:</p> <ul> <li> <p>You tried to delete a <code>WebACL</code> that still contains one or more <code>Rule</code> objects.</p> </li> <li> <p>You tried to delete a <code>Rule</code> that still contains one or more <code>ByteMatchSet</code> objects or other predicates.</p> </li> <li> <p>You tried to delete a <code>ByteMatchSet</code> that contains one or more <code>ByteMatchTuple</code> objects.</p> </li> <li> <p>You tried to delete an <code>IPSet</code> that references one or more IP addresses.</p> </li> </ul>
 */
export interface WAFNonEmptyEntityException
  extends __ServiceException__<_WAFNonEmptyEntityExceptionDetails> {
  name: "WAFNonEmptyEntityException";
}

export interface _WAFNonEmptyEntityExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
