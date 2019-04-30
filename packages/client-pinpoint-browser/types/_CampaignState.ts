/**
 * State of the Campaign
 */
export interface _CampaignState {
  /**
   * The status of the campaign, or the status of a treatment that belongs to an A/B test campaign.
   *
   * Valid values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED
   */
  CampaignStatus?:
    | "SCHEDULED"
    | "EXECUTING"
    | "PENDING_NEXT_RUN"
    | "COMPLETED"
    | "PAUSED"
    | "DELETED"
    | string;
}

export type _UnmarshalledCampaignState = _CampaignState;
