import { _UnmarshalledPipeline } from "./_Pipeline";
import { _UnmarshalledWarning } from "./_Warning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
 */
export interface UpdatePipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The pipeline updated by this <code>UpdatePipelineResponse</code> call.</p>
   */
  Pipeline?: _UnmarshalledPipeline;

  /**
   * <p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>
   */
  Warnings?: Array<_UnmarshalledWarning>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
