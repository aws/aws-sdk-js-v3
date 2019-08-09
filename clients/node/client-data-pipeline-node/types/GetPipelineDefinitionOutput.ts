import { _UnmarshalledPipelineObject } from "./_PipelineObject";
import { _UnmarshalledParameterObject } from "./_ParameterObject";
import { _UnmarshalledParameterValue } from "./_ParameterValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of GetPipelineDefinition.</p>
 */
export interface GetPipelineDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The objects defined in the pipeline.</p>
   */
  pipelineObjects?: Array<_UnmarshalledPipelineObject>;

  /**
   * <p>The parameter objects used in the pipeline definition.</p>
   */
  parameterObjects?: Array<_UnmarshalledParameterObject>;

  /**
   * <p>The parameter values used in the pipeline definition.</p>
   */
  parameterValues?: Array<_UnmarshalledParameterValue>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
