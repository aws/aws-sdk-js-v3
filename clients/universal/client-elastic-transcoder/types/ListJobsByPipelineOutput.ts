import { _UnmarshalledJob } from "./_Job";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>ListJobsByPipelineResponse</code> structure.</p>
 */
export interface ListJobsByPipelineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>Job</code> objects that are in the specified pipeline.</p>
   */
  Jobs?: Array<_UnmarshalledJob>;

  /**
   * <p> A value that you use to access the second and subsequent pages of results, if any. When the jobs in the specified pipeline fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>. </p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
