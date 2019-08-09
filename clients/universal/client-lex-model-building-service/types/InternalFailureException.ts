import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal Amazon Lex error occurred. Try your request again.</p>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
