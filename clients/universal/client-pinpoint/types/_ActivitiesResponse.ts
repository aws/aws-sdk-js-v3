import {
  _ActivityResponse,
  _UnmarshalledActivityResponse
} from "./_ActivityResponse";

/**
 * <p>Provides information about the activities that were performed by a campaign.</p>
 */
export interface _ActivitiesResponse {
  /**
   * <p>An array of responses, one for each activity that was performed by the campaign.</p>
   */
  Item: Array<_ActivityResponse> | Iterable<_ActivityResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledActivitiesResponse extends _ActivitiesResponse {
  /**
   * <p>An array of responses, one for each activity that was performed by the campaign.</p>
   */
  Item: Array<_UnmarshalledActivityResponse>;
}
