import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException
  extends __ServiceException__<_IndexNotReadyExceptionDetails> {
  name: "IndexNotReadyException";
}

export interface _IndexNotReadyExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
