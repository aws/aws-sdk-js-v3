import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a password reset is required.</p>
 */
export interface PasswordResetRequiredException
  extends __ServiceException__<_PasswordResetRequiredExceptionDetails> {
  name: "PasswordResetRequiredException";
}

export interface _PasswordResetRequiredExceptionDetails {
  /**
   * <p>The message returned when a password reset is required.</p>
   */
  message?: string;
}
