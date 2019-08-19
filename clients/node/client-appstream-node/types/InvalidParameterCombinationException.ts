import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 */
export interface InvalidParameterCombinationException
  extends __ServiceException__<_InvalidParameterCombinationExceptionDetails> {
  name: "InvalidParameterCombinationException";
}

export interface _InvalidParameterCombinationExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
