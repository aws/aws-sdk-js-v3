import { _UnmarshalledJobSummary } from "./_JobSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Maximum number of records to list in a single response. </p>
 */
export interface ListJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Result structure for list job result request. </p>
   */
  jobSummaries: Array<_UnmarshalledJobSummary>;

  /**
   * <p> Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
