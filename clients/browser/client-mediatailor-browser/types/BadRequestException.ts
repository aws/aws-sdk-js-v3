import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalid request parameters.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
