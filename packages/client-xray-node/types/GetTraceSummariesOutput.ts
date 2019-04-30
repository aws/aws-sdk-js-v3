import { _UnmarshalledTraceSummary } from "./_TraceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTraceSummariesOutput shape
 */
export interface GetTraceSummariesOutput {
  /**
   * <p>Trace IDs and metadata for traces that were found in the specified time frame.</p>
   */
  TraceSummaries?: Array<_UnmarshalledTraceSummary>;

  /**
   * <p>The start time of this page of results.</p>
   */
  ApproximateTime?: Date;

  /**
   * <p>The total number of traces processed, including traces that did not match the specified filter expression.</p>
   */
  TracesProcessedCount?: number;

  /**
   * <p>If the requested time frame contained more than one page of results, you can use this token to retrieve the next page. The first page contains the most most recent results, closest to the end of the time frame.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
