import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Parameters were used together that cannot be used together.</p>
 */
export interface InvalidParameterCombinationException
  extends __ServiceException__<_InvalidParameterCombinationExceptionDetails> {
  name: "InvalidParameterCombinationException";
}

export interface _InvalidParameterCombinationExceptionDetails {
  /**
   * <p/>
   */
  message?: string;
}
