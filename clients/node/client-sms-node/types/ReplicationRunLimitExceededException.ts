import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the number of on-demand replication runs you can request in a 24-hour period.</p>
 */
export interface ReplicationRunLimitExceededException
  extends __ServiceException__<_ReplicationRunLimitExceededExceptionDetails> {
  name: "ReplicationRunLimitExceededException";
}

export interface _ReplicationRunLimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
