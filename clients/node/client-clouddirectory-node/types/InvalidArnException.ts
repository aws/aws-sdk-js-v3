import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided ARN value is not valid.</p>
 */
export interface InvalidArnException
  extends __ServiceException__<_InvalidArnExceptionDetails> {
  name: "InvalidArnException";
}

export interface _InvalidArnExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
