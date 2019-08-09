import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __ServiceException__<_UnsupportedOperationExceptionDetails> {
  name: "UnsupportedOperationException";
}

export interface _UnsupportedOperationExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
