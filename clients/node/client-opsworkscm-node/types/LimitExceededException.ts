import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit of servers or backups has been reached. </p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>Error or informational message that the maximum allowed number of servers or backups has been exceeded. </p>
   */
  Message?: string;
}
