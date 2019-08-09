import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified input parameter value is not valid.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
