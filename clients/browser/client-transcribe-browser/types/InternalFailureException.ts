import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was an internal error. Check the error message and try your request again.</p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
