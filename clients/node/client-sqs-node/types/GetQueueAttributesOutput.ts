import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of returned queue attributes.</p>
 */
export interface GetQueueAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of attributes to their respective values.</p>
   */
  Attributes?: {
    [key in
      | "All"
      | "Policy"
      | "VisibilityTimeout"
      | "MaximumMessageSize"
      | "MessageRetentionPeriod"
      | "ApproximateNumberOfMessages"
      | "ApproximateNumberOfMessagesNotVisible"
      | "CreatedTimestamp"
      | "LastModifiedTimestamp"
      | "QueueArn"
      | "ApproximateNumberOfMessagesDelayed"
      | "DelaySeconds"
      | "ReceiveMessageWaitTimeSeconds"
      | "RedrivePolicy"
      | "FifoQueue"
      | "ContentBasedDeduplication"
      | "KmsMasterKeyId"
      | "KmsDataKeyReusePeriodSeconds"
      | string]: string
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
