import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error occurred while processing the request.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
