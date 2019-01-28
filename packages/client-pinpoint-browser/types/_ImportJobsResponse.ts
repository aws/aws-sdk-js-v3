import {_ImportJobResponse, _UnmarshalledImportJobResponse} from './_ImportJobResponse';

/**
 * Import job list.
 */
export interface _ImportJobsResponse {
    /**
     * A list of import jobs for the application.
     */
    Item?: Array<_ImportJobResponse>|Iterable<_ImportJobResponse>;

    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: string;
}

export interface _UnmarshalledImportJobsResponse extends _ImportJobsResponse {
    /**
     * A list of import jobs for the application.
     */
    Item?: Array<_UnmarshalledImportJobResponse>;
}