import {
  _CampaignResponse,
  _UnmarshalledCampaignResponse
} from "./_CampaignResponse";

/**
 * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
 */
export interface _CampaignsResponse {
  /**
   * <p>An array of responses, one for each campaign that's associated with the application.</p>
   */
  Item: Array<_CampaignResponse> | Iterable<_CampaignResponse>;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

export interface _UnmarshalledCampaignsResponse extends _CampaignsResponse {
  /**
   * <p>An array of responses, one for each campaign that's associated with the application.</p>
   */
  Item: Array<_UnmarshalledCampaignResponse>;
}
