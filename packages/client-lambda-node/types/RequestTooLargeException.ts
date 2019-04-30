import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see <a href="http://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
 */
export interface RequestTooLargeException
  extends __ServiceException__<_RequestTooLargeExceptionDetails> {
  name: "RequestTooLargeException";
}

export interface _RequestTooLargeExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  message?: string;
}
