import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopActivityStreamOutput shape
 */
export interface StopActivityStreamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: "stopped" | "starting" | "started" | "stopping" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
