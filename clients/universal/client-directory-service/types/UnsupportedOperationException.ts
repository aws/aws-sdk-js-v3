import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation is not supported.</p>
 */
export interface UnsupportedOperationException
  extends __ServiceException__<_UnsupportedOperationExceptionDetails> {
  name: "UnsupportedOperationException";
}

export interface _UnsupportedOperationExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
