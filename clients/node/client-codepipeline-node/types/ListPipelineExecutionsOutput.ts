import { _UnmarshalledPipelineExecutionSummary } from "./_PipelineExecutionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>ListPipelineExecutions</code> action.</p>
 */
export interface ListPipelineExecutionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of executions in the history of a pipeline.</p>
   */
  pipelineExecutionSummaries?: Array<_UnmarshalledPipelineExecutionSummary>;

  /**
   * <p>A token that can be used in the next <code>ListPipelineExecutions</code> call. To view all items in the list, continue to call this operation with each subsequent token until no more nextToken values are returned.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
