import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartActivityStreamOutput shape
 */
export interface StartActivityStreamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS KMS key identifier for encryption of messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: "stopped" | "starting" | "started" | "stopping" | string;

  /**
   * <p>The mode of the database activity stream.</p>
   */
  Mode?: "sync" | "async" | string;

  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible, regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
