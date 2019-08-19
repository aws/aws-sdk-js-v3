import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are insufficient privileges to make the call.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * <p>The error message returned by this <code>ForbiddenException</code> error.</p>
   */
  message?: string;
}
