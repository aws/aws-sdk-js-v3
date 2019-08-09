import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The input you provided is invalid.
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
