// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const QueueAttributeName = {
  All: "All",
  ApproximateNumberOfMessages: "ApproximateNumberOfMessages",
  ApproximateNumberOfMessagesDelayed: "ApproximateNumberOfMessagesDelayed",
  ApproximateNumberOfMessagesNotVisible: "ApproximateNumberOfMessagesNotVisible",
  ContentBasedDeduplication: "ContentBasedDeduplication",
  CreatedTimestamp: "CreatedTimestamp",
  DeduplicationScope: "DeduplicationScope",
  DelaySeconds: "DelaySeconds",
  FifoQueue: "FifoQueue",
  FifoThroughputLimit: "FifoThroughputLimit",
  KmsDataKeyReusePeriodSeconds: "KmsDataKeyReusePeriodSeconds",
  KmsMasterKeyId: "KmsMasterKeyId",
  LastModifiedTimestamp: "LastModifiedTimestamp",
  MaximumMessageSize: "MaximumMessageSize",
  MessageRetentionPeriod: "MessageRetentionPeriod",
  Policy: "Policy",
  QueueArn: "QueueArn",
  ReceiveMessageWaitTimeSeconds: "ReceiveMessageWaitTimeSeconds",
  RedriveAllowPolicy: "RedriveAllowPolicy",
  RedrivePolicy: "RedrivePolicy",
  SqsManagedSseEnabled: "SqsManagedSseEnabled",
  VisibilityTimeout: "VisibilityTimeout",
} as const;
/**
 * @public
 */
export type QueueAttributeName = (typeof QueueAttributeName)[keyof typeof QueueAttributeName];

/**
 * @public
 * @enum
 */
export const MessageSystemAttributeName = {
  AWSTraceHeader: "AWSTraceHeader",
  All: "All",
  ApproximateFirstReceiveTimestamp: "ApproximateFirstReceiveTimestamp",
  ApproximateReceiveCount: "ApproximateReceiveCount",
  DeadLetterQueueSourceArn: "DeadLetterQueueSourceArn",
  MessageDeduplicationId: "MessageDeduplicationId",
  MessageGroupId: "MessageGroupId",
  SenderId: "SenderId",
  SentTimestamp: "SentTimestamp",
  SequenceNumber: "SequenceNumber",
} as const;
/**
 * @public
 */
export type MessageSystemAttributeName = (typeof MessageSystemAttributeName)[keyof typeof MessageSystemAttributeName];

/**
 * @public
 * @enum
 */
export const MessageSystemAttributeNameForSends = {
  AWSTraceHeader: "AWSTraceHeader",
} as const;
/**
 * @public
 */
export type MessageSystemAttributeNameForSends =
  (typeof MessageSystemAttributeNameForSends)[keyof typeof MessageSystemAttributeNameForSends];
