import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventBusOutput shape
 */
export interface DescribeEventBusOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the event bus. Currently, this is always <code>default</code>.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that enables the external account to send events to your account.</p>
   */
  Policy?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
