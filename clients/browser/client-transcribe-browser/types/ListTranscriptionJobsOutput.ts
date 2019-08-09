import { _UnmarshalledTranscriptionJobSummary } from "./_TranscriptionJobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTranscriptionJobsOutput shape
 */
export interface ListTranscriptionJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested status of the jobs returned.</p>
   */
  Status?: "IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>The <code>ListTranscriptionJobs</code> operation returns a page of jobs at a time. The maximum size of the page is set by the <code>MaxResults</code> parameter. If there are more jobs in the list than the page size, Amazon Transcribe returns the <code>NextPage</code> token. Include the token in the next request to the <code>ListTranscriptionJobs</code> operation to return in the next page of jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of objects containing summary information for a transcription job.</p>
   */
  TranscriptionJobSummaries?: Array<_UnmarshalledTranscriptionJobSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
