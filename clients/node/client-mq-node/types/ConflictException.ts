import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Returns information about an error.
 */
export interface ConflictException
  extends __ServiceException__<_ConflictExceptionDetails> {
  name: "ConflictException";
}

export interface _ConflictExceptionDetails {
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}
