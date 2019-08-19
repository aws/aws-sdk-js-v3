import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export interface UserDoesNotExistException
  extends __ServiceException__<_UserDoesNotExistExceptionDetails> {
  name: "UserDoesNotExistException";
}

export interface _UserDoesNotExistExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
