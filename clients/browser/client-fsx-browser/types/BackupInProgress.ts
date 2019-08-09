import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Another backup is already under way. Wait for completion before initiating additional backups of this file system.</p>
 */
export interface BackupInProgress
  extends __ServiceException__<_BackupInProgressDetails> {
  name: "BackupInProgress";
}

export interface _BackupInProgressDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
