import {
  _CampaignResponse,
  _UnmarshalledCampaignResponse
} from "./_CampaignResponse";

/**
 * List of available campaigns.
 */
export interface _CampaignsResponse {
  /**
   * A list of campaigns.
   */
  Item?: Array<_CampaignResponse> | Iterable<_CampaignResponse>;

  /**
   * The string that you use in a subsequent request to get the next page of results in a paginated response.
   */
  NextToken?: string;
}

export interface _UnmarshalledCampaignsResponse extends _CampaignsResponse {
  /**
   * A list of campaigns.
   */
  Item?: Array<_UnmarshalledCampaignResponse>;
}
