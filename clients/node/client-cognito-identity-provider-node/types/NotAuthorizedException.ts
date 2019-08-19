import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a user is not authorized.</p>
 */
export interface NotAuthorizedException
  extends __ServiceException__<_NotAuthorizedExceptionDetails> {
  name: "NotAuthorizedException";
}

export interface _NotAuthorizedExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service returns a not authorized exception.</p>
   */
  message?: string;
}
