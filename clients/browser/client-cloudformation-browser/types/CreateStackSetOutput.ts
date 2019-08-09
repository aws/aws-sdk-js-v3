import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStackSetOutput shape
 */
export interface CreateStackSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the stack set that you're creating.</p>
   */
  StackSetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
