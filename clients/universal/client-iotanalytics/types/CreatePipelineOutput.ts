import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePipelineOutput shape
 */
export interface CreatePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;

  /**
   * <p>The ARN of the pipeline.</p>
   */
  pipelineArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
