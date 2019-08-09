import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request contains too many origin custom headers.</p>
 */
export interface TooManyOriginCustomHeaders
  extends __ServiceException__<_TooManyOriginCustomHeadersDetails> {
  name: "TooManyOriginCustomHeaders";
}

export interface _TooManyOriginCustomHeadersDetails {
  /**
   * _string shape
   */
  Message?: string;
}
