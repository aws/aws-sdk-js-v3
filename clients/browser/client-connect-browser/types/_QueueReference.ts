/**
 * <p>A QueueReference object that contains the the QueueId and ARN for the queue resource for which metrics are returned.</p>
 */
export interface _QueueReference {
  /**
   * <p>The ID of the queue associated with the metrics returned.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of queue.</p>
   */
  Arn?: string;
}

export type _UnmarshalledQueueReference = _QueueReference;
