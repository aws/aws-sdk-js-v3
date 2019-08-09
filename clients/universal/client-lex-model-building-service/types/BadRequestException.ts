import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
