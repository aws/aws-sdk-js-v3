import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains too many query string parameters.</p>
 */
export interface TooManyQueryStringParameters
  extends __ServiceException__<_TooManyQueryStringParametersDetails> {
  name: "TooManyQueryStringParameters";
}

export interface _TooManyQueryStringParametersDetails {
  /**
   * _string shape
   */
  Message?: string;
}
