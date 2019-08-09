import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request has not been applied because it lacks valid authentication credentials for the target resource.</p>
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
