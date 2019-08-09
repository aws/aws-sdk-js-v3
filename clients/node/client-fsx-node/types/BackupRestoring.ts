import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't delete a backup while it's being used to restore a file system.</p>
 */
export interface BackupRestoring
  extends __ServiceException__<_BackupRestoringDetails> {
  name: "BackupRestoring";
}

export interface _BackupRestoringDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;

  /**
   * <p>The ID of a file system being restored from the backup.</p>
   */
  FileSystemId?: string;
}
