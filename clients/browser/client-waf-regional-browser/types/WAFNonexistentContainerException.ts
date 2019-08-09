import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because you tried to add an object to or delete an object from another object that doesn't exist. For example:</p> <ul> <li> <p>You tried to add a <code>Rule</code> to or delete a <code>Rule</code> from a <code>WebACL</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchSet</code> to or delete a <code>ByteMatchSet</code> from a <code>Rule</code> that doesn't exist.</p> </li> <li> <p>You tried to add an IP address to or delete an IP address from an <code>IPSet</code> that doesn't exist.</p> </li> <li> <p>You tried to add a <code>ByteMatchTuple</code> to or delete a <code>ByteMatchTuple</code> from a <code>ByteMatchSet</code> that doesn't exist.</p> </li> </ul>
 */
export interface WAFNonexistentContainerException
  extends __ServiceException__<_WAFNonexistentContainerExceptionDetails> {
  name: "WAFNonexistentContainerException";
}

export interface _WAFNonexistentContainerExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
