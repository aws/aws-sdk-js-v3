import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Thrown when a user is not authorized to access the requested resource.</p>
 */
export interface NotAuthorizedException
  extends __ServiceException__<_NotAuthorizedExceptionDetails> {
  name: "NotAuthorizedException";
}

export interface _NotAuthorizedExceptionDetails {
  /**
   * <p>The message returned by a NotAuthorizedException</p>
   */
  message?: string;
}
