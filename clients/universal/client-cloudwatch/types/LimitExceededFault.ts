import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for alarms for this customer has already been reached.</p>
 */
export interface LimitExceededFault
  extends __ServiceException__<_LimitExceededFaultDetails> {
  name: "LimitExceededFault";
}

export interface _LimitExceededFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
