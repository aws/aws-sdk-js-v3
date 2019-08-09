import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client failed authentication. Clients should not retry such requests.</p>
 */
export interface UnauthorizedException
  extends __ServiceException__<_UnauthorizedExceptionDetails> {
  name: "UnauthorizedException";
}

export interface _UnauthorizedExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
