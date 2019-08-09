import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for a <a>CreateStack</a> action.</p>
 */
export interface CreateStackOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
