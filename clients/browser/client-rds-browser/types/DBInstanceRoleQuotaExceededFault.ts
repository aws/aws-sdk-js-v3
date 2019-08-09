import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't associate any more AWS Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 */
export interface DBInstanceRoleQuotaExceededFault
  extends __ServiceException__<_DBInstanceRoleQuotaExceededFaultDetails> {
  name: "DBInstanceRoleQuotaExceededFault";
}

export interface _DBInstanceRoleQuotaExceededFaultDetails {}
