import {_ApplicationResponse, _UnmarshalledApplicationResponse} from './_ApplicationResponse';

/**
 * Get Applications Result.
 */
export interface _ApplicationsResponse {
    /**
     * List of applications returned in this page.
     */
    Item?: Array<_ApplicationResponse>|Iterable<_ApplicationResponse>;

    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: string;
}

export interface _UnmarshalledApplicationsResponse extends _ApplicationsResponse {
    /**
     * List of applications returned in this page.
     */
    Item?: Array<_UnmarshalledApplicationResponse>;
}