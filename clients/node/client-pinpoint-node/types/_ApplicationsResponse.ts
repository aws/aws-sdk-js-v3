import {
  _ApplicationResponse,
  _UnmarshalledApplicationResponse
} from "./_ApplicationResponse";

/**
 * <p>Provides information about all of your applications.</p>
 */
export interface _ApplicationsResponse {
  /**
   * <p>An array of responses, one for each application that was returned.</p>
   */
  Item?: Array<_ApplicationResponse> | Iterable<_ApplicationResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledApplicationsResponse
  extends _ApplicationsResponse {
  /**
   * <p>An array of responses, one for each application that was returned.</p>
   */
  Item?: Array<_UnmarshalledApplicationResponse>;
}
