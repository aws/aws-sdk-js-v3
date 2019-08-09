import { _UnmarshalledPipelineDeclaration } from "./_PipelineDeclaration";
import { _UnmarshalledPipelineMetadata } from "./_PipelineMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>GetPipeline</code> action.</p>
 */
export interface GetPipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the structure of actions and stages to be performed in the pipeline. </p>
   */
  pipeline?: _UnmarshalledPipelineDeclaration;

  /**
   * <p>Represents the pipeline metadata information returned as part of the output of a <code>GetPipeline</code> action.</p>
   */
  metadata?: _UnmarshalledPipelineMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
