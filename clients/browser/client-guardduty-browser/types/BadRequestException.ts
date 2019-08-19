import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Bad request exception object.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The error type.</p>
   */
  Type?: string;
}
