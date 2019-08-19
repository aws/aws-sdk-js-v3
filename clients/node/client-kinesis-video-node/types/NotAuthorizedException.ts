import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller is not authorized to perform this operation.</p>
 */
export interface NotAuthorizedException
  extends __ServiceException__<_NotAuthorizedExceptionDetails> {
  name: "NotAuthorizedException";
}

export interface _NotAuthorizedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
