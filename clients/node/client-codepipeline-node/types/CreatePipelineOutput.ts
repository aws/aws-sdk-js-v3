import { _UnmarshalledPipelineDeclaration } from "./_PipelineDeclaration";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>CreatePipeline</code> action.</p>
 */
export interface CreatePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline. </p>
   */
  pipeline?: _UnmarshalledPipelineDeclaration;

  /**
   * <p>Specifies the tags applied to the pipeline.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
