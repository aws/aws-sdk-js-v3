import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The private CA is in a state during which a report or certificate cannot be generated.</p>
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
