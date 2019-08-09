import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 */
export interface BackupNotFound
  extends __ServiceException__<_BackupNotFoundDetails> {
  name: "BackupNotFound";
}

export interface _BackupNotFoundDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
