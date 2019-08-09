import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is an error in the call or in a SQL statement.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * <p>The error message returned by this <code>BadRequestException</code> error.</p>
   */
  message?: string;
}
