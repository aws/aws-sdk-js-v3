import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
