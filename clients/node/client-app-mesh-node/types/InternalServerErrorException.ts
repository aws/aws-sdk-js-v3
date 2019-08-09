import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
