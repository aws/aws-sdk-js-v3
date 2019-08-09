import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error occurred while processing the request.</p>
 */
export interface BaseException
  extends __ServiceException__<_BaseExceptionDetails> {
  name: "BaseException";
}

export interface _BaseExceptionDetails {
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}
