import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An input parameter that is required is missing.</p>
 */
export interface MissingRequiredParameterException
  extends __ServiceException__<_MissingRequiredParameterExceptionDetails> {
  name: "MissingRequiredParameterException";
}

export interface _MissingRequiredParameterExceptionDetails {
  /**
   * <p/>
   */
  message?: string;
}
