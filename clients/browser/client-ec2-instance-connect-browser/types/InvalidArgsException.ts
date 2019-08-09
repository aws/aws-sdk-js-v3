import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that you provided bad input. Ensure you have a valid instance ID, the correct zone, and a valid SSH public key.</p>
 */
export interface InvalidArgsException
  extends __ServiceException__<_InvalidArgsExceptionDetails> {
  name: "InvalidArgsException";
}

export interface _InvalidArgsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
