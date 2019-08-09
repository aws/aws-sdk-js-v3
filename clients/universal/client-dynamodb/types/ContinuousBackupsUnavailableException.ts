import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Backups have not yet been enabled for this table.</p>
 */
export interface ContinuousBackupsUnavailableException
  extends __ServiceException__<_ContinuousBackupsUnavailableExceptionDetails> {
  name: "ContinuousBackupsUnavailableException";
}

export interface _ContinuousBackupsUnavailableExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
