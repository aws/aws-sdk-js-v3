import {_ActivityResponse, _UnmarshalledActivityResponse} from './_ActivityResponse';

/**
 * Activities for campaign.
 */
export interface _ActivitiesResponse {
    /**
     * List of campaign activities
     */
    Item?: Array<_ActivityResponse>|Iterable<_ActivityResponse>;

    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: string;
}

export interface _UnmarshalledActivitiesResponse extends _ActivitiesResponse {
    /**
     * List of campaign activities
     */
    Item?: Array<_UnmarshalledActivityResponse>;
}