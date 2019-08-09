import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 */
export interface LimitExceededFault
  extends __ServiceException__<_LimitExceededFaultDetails> {
  name: "LimitExceededFault";
}

export interface _LimitExceededFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
