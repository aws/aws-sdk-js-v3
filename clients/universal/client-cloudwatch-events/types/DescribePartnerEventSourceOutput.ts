import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePartnerEventSourceOutput shape
 */
export interface DescribePartnerEventSourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
