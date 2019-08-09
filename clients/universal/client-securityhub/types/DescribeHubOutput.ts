import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeHubOutput shape
 */
export interface DescribeHubOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the Hub resource retrieved.</p>
   */
  HubArn?: string;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   */
  SubscribedAt?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
