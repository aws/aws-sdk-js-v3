import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>TTL order specified in the response body is not valid.</p>
 */
export interface InvalidTTLOrder
  extends __ServiceException__<_InvalidTTLOrderDetails> {
  name: "InvalidTTLOrder";
}

export interface _InvalidTTLOrderDetails {
  /**
   * _string shape
   */
  Message?: string;
}
