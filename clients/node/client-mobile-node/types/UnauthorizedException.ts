import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Credentials of the caller are insufficient to authorize the request. </p>
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
