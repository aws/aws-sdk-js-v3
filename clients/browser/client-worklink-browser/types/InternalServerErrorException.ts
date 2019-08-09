import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
