import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception occurs when there is something wrong with user input.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * <p>The error code associated with the exception.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}
