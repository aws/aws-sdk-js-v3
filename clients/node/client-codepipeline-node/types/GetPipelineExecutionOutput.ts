import { _UnmarshalledPipelineExecution } from "./_PipelineExecution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>GetPipelineExecution</code> action.</p>
 */
export interface GetPipelineExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents information about the execution of a pipeline.</p>
   */
  pipelineExecution?: _UnmarshalledPipelineExecution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
