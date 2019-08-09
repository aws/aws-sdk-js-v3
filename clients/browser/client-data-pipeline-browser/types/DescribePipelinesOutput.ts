import { _UnmarshalledPipelineDescription } from "./_PipelineDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribePipelines.</p>
 */
export interface DescribePipelinesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of descriptions for the specified pipelines.</p>
   */
  pipelineDescriptionList: Array<_UnmarshalledPipelineDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
