import { _UnmarshalledPipeline } from "./_Pipeline";
import { _UnmarshalledWarning } from "./_Warning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>ReadPipelineResponse</code> structure.</p>
 */
export interface ReadPipelineOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A section of the response body that provides information about the pipeline.</p>
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
