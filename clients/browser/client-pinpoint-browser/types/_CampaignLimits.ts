/**
 * Campaign Limits are used to limit the number of messages that can be sent to a single endpoint.
 */
export interface _CampaignLimits {
  /**
   * The maximum number of messages that each campaign can send to a single endpoint in a 24-hour period.
   */
  Daily?: number;

  /**
   * The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
   */
  MaximumDuration?: number;

  /**
   * The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
   */
  MessagesPerSecond?: number;

  /**
   * The maximum number of messages that an individual campaign can send to a single endpoint over the course of the campaign.
   */
  Total?: number;
}

export type _UnmarshalledCampaignLimits = _CampaignLimits;
