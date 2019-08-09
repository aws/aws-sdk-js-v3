import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no limit to the number of daily on-demand backups that can be taken. </p> <p>Up to 50 simultaneous table operations are allowed per account. These operations include <code>CreateTable</code>, <code>UpdateTable</code>, <code>DeleteTable</code>,<code>UpdateTimeToLive</code>, <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p> <p>The only exception is when you are creating a table with one or more secondary indexes. You can have up to 25 such requests running at a time; however, if the table or index specifications are complex, DynamoDB might temporarily reduce the number of concurrent operations.</p> <p>There is a soft account limit of 256 tables.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>Too many operations for a given subscriber.</p>
   */
  message?: string;
}
