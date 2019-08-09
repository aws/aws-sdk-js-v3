import { _UnmarshalledPipeline } from "./_Pipeline";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribePipelineOutput shape
 */
export interface DescribePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A "Pipeline" object that contains information about the pipeline.</p>
   */
  pipeline?: _UnmarshalledPipeline;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
