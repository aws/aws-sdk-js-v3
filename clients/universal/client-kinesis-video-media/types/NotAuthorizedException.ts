import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.</p>
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
