import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a user is not found.</p>
 */
export interface UserNotFoundException
  extends __ServiceException__<_UserNotFoundExceptionDetails> {
  name: "UserNotFoundException";
}

export interface _UserNotFoundExceptionDetails {
  /**
   * <p>The message returned when a user is not found.</p>
   */
  message?: string;
}
