import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
