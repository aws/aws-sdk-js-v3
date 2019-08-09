import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown when a user is not authorized to access the requested resource.
 */
export interface NotAuthorizedException
  extends __ServiceException__<_NotAuthorizedExceptionDetails> {
  name: "NotAuthorizedException";
}

export interface _NotAuthorizedExceptionDetails {
  /**
   * The message returned by a NotAuthorizedException.
   */
  message: string;
}
