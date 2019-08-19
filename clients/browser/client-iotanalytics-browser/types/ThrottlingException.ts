import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
