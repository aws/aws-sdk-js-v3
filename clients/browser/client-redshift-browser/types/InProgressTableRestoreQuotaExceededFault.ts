import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your current table restore requests to complete before making a new request.</p>
 */
export interface InProgressTableRestoreQuotaExceededFault
  extends __ServiceException__<
    _InProgressTableRestoreQuotaExceededFaultDetails
  > {
  name: "InProgressTableRestoreQuotaExceededFault";
}

export interface _InProgressTableRestoreQuotaExceededFaultDetails {}
