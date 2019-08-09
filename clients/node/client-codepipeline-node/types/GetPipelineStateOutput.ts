import { _UnmarshalledStageState } from "./_StageState";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>GetPipelineState</code> action.</p>
 */
export interface GetPipelineStateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the pipeline for which you want to get the state.</p>
   */
  pipelineName?: string;

  /**
   * <p>The version number of the pipeline.</p> <note> <p>A newly-created pipeline is always assigned a version number of <code>1</code>.</p> </note>
   */
  pipelineVersion?: number;

  /**
   * <p>A list of the pipeline stage output information, including stage name, state, most recent run details, whether the stage is disabled, and other data.</p>
   */
  stageStates?: Array<_UnmarshalledStageState>;

  /**
   * <p>The date and time the pipeline was created, in timestamp format.</p>
   */
  created?: Date;

  /**
   * <p>The date and time the pipeline was last updated, in timestamp format.</p>
   */
  updated?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
