import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 */
export interface DBClusterEndpointQuotaExceededFault
  extends __ServiceException__<_DBClusterEndpointQuotaExceededFaultDetails> {
  name: "DBClusterEndpointQuotaExceededFault";
}

export interface _DBClusterEndpointQuotaExceededFaultDetails {}
