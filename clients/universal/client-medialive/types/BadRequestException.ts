import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for BadRequestException
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
