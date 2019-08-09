import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
