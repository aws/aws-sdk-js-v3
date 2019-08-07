import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Backup not found for the given BackupARN. </p>
 */
export interface BackupNotFoundException
  extends __ServiceException__<_BackupNotFoundExceptionDetails> {
  name: "BackupNotFoundException";
}

export interface _BackupNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
