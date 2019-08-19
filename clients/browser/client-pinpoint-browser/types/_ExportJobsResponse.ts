import {
  _ExportJobResponse,
  _UnmarshalledExportJobResponse
} from "./_ExportJobResponse";

/**
 * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
 */
export interface _ExportJobsResponse {
  /**
   * <p>An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).</p>
   */
  Item: Array<_ExportJobResponse> | Iterable<_ExportJobResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledExportJobsResponse extends _ExportJobsResponse {
  /**
   * <p>An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).</p>
   */
  Item: Array<_UnmarshalledExportJobResponse>;
}
