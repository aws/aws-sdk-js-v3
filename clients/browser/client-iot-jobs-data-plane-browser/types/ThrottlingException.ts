import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * <p>The message associated with the exception.</p>
   */
  message?: string;

  /**
   * <p>The payload associated with the exception.</p>
   */
  payload?: Uint8Array;
}
