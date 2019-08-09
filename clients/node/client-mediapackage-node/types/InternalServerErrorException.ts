import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * An unexpected error occurred.
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * ___string shape
   */
  Message?: string;
}
