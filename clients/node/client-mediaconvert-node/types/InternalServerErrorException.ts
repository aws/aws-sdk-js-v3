import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The service encountered an unexpected condition and can't fulfill your request.
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
