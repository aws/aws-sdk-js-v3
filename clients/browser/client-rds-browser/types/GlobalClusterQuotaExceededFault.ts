import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GlobalClusterQuotaExceededFault
  extends __ServiceException__<_GlobalClusterQuotaExceededFaultDetails> {
  name: "GlobalClusterQuotaExceededFault";
}

export interface _GlobalClusterQuotaExceededFaultDetails {}
