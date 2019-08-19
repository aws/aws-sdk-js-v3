import { _UnmarshalledPipeline } from "./_Pipeline";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 */
export interface UpdatePipelineStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the pipeline.</p>
   */
  Pipeline?: _UnmarshalledPipeline;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
