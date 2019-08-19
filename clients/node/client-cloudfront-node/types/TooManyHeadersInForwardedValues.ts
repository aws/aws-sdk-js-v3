import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains too many headers in forwarded values.</p>
 */
export interface TooManyHeadersInForwardedValues
  extends __ServiceException__<_TooManyHeadersInForwardedValuesDetails> {
  name: "TooManyHeadersInForwardedValues";
}

export interface _TooManyHeadersInForwardedValuesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
