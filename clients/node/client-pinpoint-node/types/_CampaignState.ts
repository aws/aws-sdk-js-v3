/**
 * <p>Provides information about the status of a campaign.</p>
 */
export interface _CampaignState {
  /**
   * <p>The status of the campaign, or the status of a treatment that belongs to an A/B test campaign. If a campaign uses A/B testing, the campaign has a status of COMPLETED only when all campaign treatments have a status of COMPLETED.</p>
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
