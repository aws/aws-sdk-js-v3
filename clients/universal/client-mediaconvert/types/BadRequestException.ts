import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The service can't process your request because of a problem in the request. Please check your request form and syntax.
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
