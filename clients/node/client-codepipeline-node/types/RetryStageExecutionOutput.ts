import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>RetryStageExecution</code> action.</p>
 */
export interface RetryStageExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the current workflow execution in the failed stage.</p>
   */
  pipelineExecutionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
