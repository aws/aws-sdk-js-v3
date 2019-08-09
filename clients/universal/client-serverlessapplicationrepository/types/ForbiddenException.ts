import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The client is not authenticated.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * <p>403</p>
   */
  ErrorCode?: string;

  /**
   * <p>The client is not authenticated.</p>
   */
  Message?: string;
}
