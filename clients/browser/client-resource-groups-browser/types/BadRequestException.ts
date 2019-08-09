import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request does not comply with validation rules that are defined for the request parameters.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
