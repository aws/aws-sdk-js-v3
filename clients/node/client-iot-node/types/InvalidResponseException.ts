import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The response is invalid.</p>
 */
export interface InvalidResponseException
  extends __ServiceException__<_InvalidResponseExceptionDetails> {
  name: "InvalidResponseException";
}

export interface _InvalidResponseExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
