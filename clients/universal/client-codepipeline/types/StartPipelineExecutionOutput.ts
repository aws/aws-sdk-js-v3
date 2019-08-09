import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>StartPipelineExecution</code> action.</p>
 */
export interface StartPipelineExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique system-generated ID of the pipeline execution that was started.</p>
   */
  pipelineExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
