import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user is not authorized to perform this request.</p>
 */
export interface NotAuthorizedException
  extends __ServiceException__<_NotAuthorizedExceptionDetails> {
  name: "NotAuthorizedException";
}

export interface _NotAuthorizedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
