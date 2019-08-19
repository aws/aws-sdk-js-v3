import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Exception thrown when a request contains unexpected data. </p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
