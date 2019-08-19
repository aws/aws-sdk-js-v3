import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid restore time was specified. RestoreDateTime must be between EarliestRestorableDateTime and LatestRestorableDateTime.</p>
 */
export interface InvalidRestoreTimeException
  extends __ServiceException__<_InvalidRestoreTimeExceptionDetails> {
  name: "InvalidRestoreTimeException";
}

export interface _InvalidRestoreTimeExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
