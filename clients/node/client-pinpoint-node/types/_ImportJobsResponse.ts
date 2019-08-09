import {
  _ImportJobResponse,
  _UnmarshalledImportJobResponse
} from "./_ImportJobResponse";

/**
 * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
 */
export interface _ImportJobsResponse {
  /**
   * <p>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</p>
   */
  Item: Array<_ImportJobResponse> | Iterable<_ImportJobResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledImportJobsResponse extends _ImportJobsResponse {
  /**
   * <p>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</p>
   */
  Item: Array<_UnmarshalledImportJobResponse>;
}
