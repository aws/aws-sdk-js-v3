import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 */
export interface UnsupportedOperationException
  extends __ServiceException__<_UnsupportedOperationExceptionDetails> {
  name: "UnsupportedOperationException";
}

export interface _UnsupportedOperationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
