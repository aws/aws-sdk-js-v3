import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The caller has no permissions to operate on the resource involved in the API call.</p>
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
