import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB cluster can't be created because you have reached the maximum allowed quota of DB clusters.</p>
 */
export interface DBClusterQuotaExceededFault
  extends __ServiceException__<_DBClusterQuotaExceededFaultDetails> {
  name: "DBClusterQuotaExceededFault";
}

export interface _DBClusterQuotaExceededFaultDetails {}
