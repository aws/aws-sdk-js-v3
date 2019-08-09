import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 */
export interface DBClusterQuotaExceededFault
  extends __ServiceException__<_DBClusterQuotaExceededFaultDetails> {
  name: "DBClusterQuotaExceededFault";
}

export interface _DBClusterQuotaExceededFaultDetails {}
