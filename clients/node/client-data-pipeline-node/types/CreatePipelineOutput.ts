import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreatePipeline.</p>
 */
export interface CreatePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID that AWS Data Pipeline assigns the newly created pipeline. For example, <code>df-06372391ZG65EXAMPLE</code>.</p>
   */
  pipelineId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
