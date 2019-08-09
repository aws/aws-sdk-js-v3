import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleQuotaExceededFault
  extends __ServiceException__<_DBClusterRoleQuotaExceededFaultDetails> {
  name: "DBClusterRoleQuotaExceededFault";
}

export interface _DBClusterRoleQuotaExceededFaultDetails {}
