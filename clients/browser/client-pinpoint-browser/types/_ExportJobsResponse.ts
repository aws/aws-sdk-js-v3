import {
  _ExportJobResponse,
  _UnmarshalledExportJobResponse
} from "./_ExportJobResponse";

/**
 * Export job list.
 */
export interface _ExportJobsResponse {
  /**
   * A list of export jobs for the application.
   */
  Item?: Array<_ExportJobResponse> | Iterable<_ExportJobResponse>;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   */
  NextToken?: string;
}

export interface _UnmarshalledExportJobsResponse extends _ExportJobsResponse {
  /**
   * A list of export jobs for the application.
   */
  Item?: Array<_UnmarshalledExportJobResponse>;
}
