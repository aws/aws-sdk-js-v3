import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The delete inventory option specified is not valid. Verify the option and try again.</p>
 */
export interface InvalidOptionException
  extends __ServiceException__<_InvalidOptionExceptionDetails> {
  name: "InvalidOptionException";
}

export interface _InvalidOptionExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
