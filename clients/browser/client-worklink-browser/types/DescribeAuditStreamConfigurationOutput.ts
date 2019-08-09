import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAuditStreamConfigurationOutput shape
 */
export interface DescribeAuditStreamConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the Amazon Kinesis data stream that will receive the audit events.</p>
   */
  AuditStreamArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
