import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveFlowOutputOutput shape
 */
export interface RemoveFlowOutputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that is associated with the output you removed.
   */
  FlowArn?: string;

  /**
   * The ARN of the output that was removed.
   */
  OutputArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
