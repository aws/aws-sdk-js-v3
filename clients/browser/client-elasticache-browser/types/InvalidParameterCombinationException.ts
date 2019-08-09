import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Two or more incompatible parameters were specified.</p>
 */
export interface InvalidParameterCombinationException
  extends __ServiceException__<_InvalidParameterCombinationExceptionDetails> {
  name: "InvalidParameterCombinationException";
}

export interface _InvalidParameterCombinationExceptionDetails {
  /**
   * <p>Two or more parameters that must not be used together were used together.</p>
   */
  message?: string;
}
