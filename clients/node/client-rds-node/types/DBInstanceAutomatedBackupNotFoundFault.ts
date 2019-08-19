import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No automated backup for this DB instance was found.</p>
 */
export interface DBInstanceAutomatedBackupNotFoundFault
  extends __ServiceException__<_DBInstanceAutomatedBackupNotFoundFaultDetails> {
  name: "DBInstanceAutomatedBackupNotFoundFault";
}

export interface _DBInstanceAutomatedBackupNotFoundFaultDetails {}
