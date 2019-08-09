import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The minimum protocol version specified is not valid.</p>
 */
export interface InvalidMinimumProtocolVersion
  extends __ServiceException__<_InvalidMinimumProtocolVersionDetails> {
  name: "InvalidMinimumProtocolVersion";
}

export interface _InvalidMinimumProtocolVersionDetails {
  /**
   * _string shape
   */
  Message?: string;
}
