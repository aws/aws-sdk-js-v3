import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalid input was provided. </p>
 */
export interface IllegalArgumentException
  extends __ServiceException__<_IllegalArgumentExceptionDetails> {
  name: "IllegalArgumentException";
}

export interface _IllegalArgumentExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
