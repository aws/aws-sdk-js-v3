import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for this resource quota has been exceeded.</p>
 */
export interface ResourceQuotaExceededFault
  extends __ServiceException__<_ResourceQuotaExceededFaultDetails> {
  name: "ResourceQuotaExceededFault";
}

export interface _ResourceQuotaExceededFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
