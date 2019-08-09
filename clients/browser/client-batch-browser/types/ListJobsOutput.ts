import { _UnmarshalledJobSummary } from "./_JobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListJobsOutput shape
 */
export interface ListJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of job summaries that match the request.</p>
   */
  jobSummaryList: Array<_UnmarshalledJobSummary>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListJobs</code> request. When the results of a <code>ListJobs</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
