import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Returns information about an error.
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}
