/**
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO queue.</p>
 */
export interface _SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

export type _UnmarshalledSqsParameters = _SqsParameters;
