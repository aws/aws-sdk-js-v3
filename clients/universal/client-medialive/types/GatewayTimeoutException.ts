import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Placeholder documentation for GatewayTimeoutException
 */
export interface GatewayTimeoutException
  extends __ServiceException__<_GatewayTimeoutExceptionDetails> {
  name: "GatewayTimeoutException";
}

export interface _GatewayTimeoutExceptionDetails {
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}
