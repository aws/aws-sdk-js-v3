import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the specified queue previously received a <code>PurgeQueue</code> request within the last 60 seconds (the time it can take to delete the messages in the queue).</p>
 */
export interface PurgeQueueInProgress
  extends __ServiceException__<_PurgeQueueInProgressDetails> {
  name: "PurgeQueueInProgress";
}

export interface _PurgeQueueInProgressDetails {}
