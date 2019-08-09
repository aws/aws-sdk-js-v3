import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 */
export interface InternalErrorException
  extends __ServiceException__<_InternalErrorExceptionDetails> {
  name: "InternalErrorException";
}

export interface _InternalErrorExceptionDetails {
  /**
   * <p>The message returned when Amazon Cognito throws an internal error exception.</p>
   */
  message?: string;
}
