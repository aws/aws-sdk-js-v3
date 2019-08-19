import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * ForbiddenException shape
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * <p>403</p>
   */
  Code?: string;

  /**
   * <p>The 403 error message returned by the web server.</p>
   */
  Message?: string;
}
