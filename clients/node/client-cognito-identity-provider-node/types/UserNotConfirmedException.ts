import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a user is not confirmed successfully.</p>
 */
export interface UserNotConfirmedException
  extends __ServiceException__<_UserNotConfirmedExceptionDetails> {
  name: "UserNotConfirmedException";
}

export interface _UserNotConfirmedExceptionDetails {
  /**
   * <p>The message returned when a user is not confirmed successfully.</p>
   */
  message?: string;
}
