import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a directory.</p>
 */
export interface SnapshotLimitExceededException
  extends __ServiceException__<_SnapshotLimitExceededExceptionDetails> {
  name: "SnapshotLimitExceededException";
}

export interface _SnapshotLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
