import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter name is not valid.</p>
 */
export interface ParameterPatternMismatchException
  extends __ServiceException__<_ParameterPatternMismatchExceptionDetails> {
  name: "ParameterPatternMismatchException";
}

export interface _ParameterPatternMismatchExceptionDetails {
  /**
   * <p>The parameter name is not valid.</p>
   */
  message?: string;
}
