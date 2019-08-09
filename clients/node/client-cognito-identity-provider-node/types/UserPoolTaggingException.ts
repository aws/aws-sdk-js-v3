import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a user pool tag cannot be set or updated.</p>
 */
export interface UserPoolTaggingException
  extends __ServiceException__<_UserPoolTaggingExceptionDetails> {
  name: "UserPoolTaggingException";
}

export interface _UserPoolTaggingExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
