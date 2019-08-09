import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of an input parameter is bad or out-of-range.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {
  /**
   * <p/>
   */
  message?: string;
}
