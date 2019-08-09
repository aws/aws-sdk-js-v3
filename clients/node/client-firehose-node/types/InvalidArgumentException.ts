import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified input parameter has a value that is not valid.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
