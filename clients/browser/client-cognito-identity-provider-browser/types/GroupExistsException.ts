import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when Amazon Cognito encounters a group that already exists in the user pool.</p>
 */
export interface GroupExistsException
  extends __ServiceException__<_GroupExistsExceptionDetails> {
  name: "GroupExistsException";
}

export interface _GroupExistsExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
