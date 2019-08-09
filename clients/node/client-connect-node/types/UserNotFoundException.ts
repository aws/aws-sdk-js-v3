import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 */
export interface UserNotFoundException
  extends __ServiceException__<_UserNotFoundExceptionDetails> {
  name: "UserNotFoundException";
}

export interface _UserNotFoundExceptionDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
