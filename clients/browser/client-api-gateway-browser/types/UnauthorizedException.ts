import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is denied because the caller has insufficient permissions.</p>
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
