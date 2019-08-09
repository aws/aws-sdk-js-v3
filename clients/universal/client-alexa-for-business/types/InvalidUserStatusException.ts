import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The attempt to update a user is invalid due to the user's current status.</p>
 */
export interface InvalidUserStatusException
  extends __ServiceException__<_InvalidUserStatusExceptionDetails> {
  name: "InvalidUserStatusException";
}

export interface _InvalidUserStatusExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
