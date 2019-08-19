import { _UnmarshalledTransformJobSummary } from "./_TransformJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTransformJobsOutput shape
 */
export interface ListTransformJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>TransformJobSummary</code> objects.</p>
   */
  TransformJobSummaries: Array<_UnmarshalledTransformJobSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of transform jobs, use it in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
