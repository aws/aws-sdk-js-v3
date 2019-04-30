import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is another ongoing conflicting backup control plane operation on the table. The backups is either being created, deleted or restored to a table.</p>
 */
export interface BackupInUseException
  extends __ServiceException__<_BackupInUseExceptionDetails> {
  name: "BackupInUseException";
}

export interface _BackupInUseExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
