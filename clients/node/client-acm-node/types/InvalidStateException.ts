import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing has reached an invalid state.</p>
 */
export interface InvalidStateException
  extends __ServiceException__<_InvalidStateExceptionDetails> {
  name: "InvalidStateException";
}

export interface _InvalidStateExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
