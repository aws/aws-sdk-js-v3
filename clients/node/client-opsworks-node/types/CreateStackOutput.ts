import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>CreateStack</code> request.</p>
 */
export interface CreateStackOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The stack ID, which is an opaque string that you use to identify the stack when performing actions such as <code>DescribeStacks</code>.</p>
   */
  StackId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
