import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified input parameter value is invalid.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * <p/>
   */
  message?: string;
}
