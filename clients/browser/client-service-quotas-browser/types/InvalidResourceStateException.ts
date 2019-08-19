import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalid input was provided for the . </p>
 */
export interface InvalidResourceStateException
  extends __ServiceException__<_InvalidResourceStateExceptionDetails> {
  name: "InvalidResourceStateException";
}

export interface _InvalidResourceStateExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
