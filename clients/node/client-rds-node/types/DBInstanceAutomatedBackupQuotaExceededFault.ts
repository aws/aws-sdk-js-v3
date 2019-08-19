import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for retained automated backups was exceeded. This prevents you from retaining any additional automated backups. The retained automated backups quota is the same as your DB Instance quota.</p>
 */
export interface DBInstanceAutomatedBackupQuotaExceededFault
  extends __ServiceException__<
    _DBInstanceAutomatedBackupQuotaExceededFaultDetails
  > {
  name: "DBInstanceAutomatedBackupQuotaExceededFault";
}

export interface _DBInstanceAutomatedBackupQuotaExceededFaultDetails {}
