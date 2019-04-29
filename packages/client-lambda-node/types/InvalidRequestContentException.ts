import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request body could not be parsed as JSON.</p>
 */
export interface InvalidRequestContentException
  extends __ServiceException__<_InvalidRequestContentExceptionDetails> {
  name: "InvalidRequestContentException";
}

export interface _InvalidRequestContentExceptionDetails {
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}
