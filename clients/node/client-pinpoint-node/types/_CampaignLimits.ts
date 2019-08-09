/**
 * <p>Specifies limits on the messages that a campaign can send.</p>
 */
export interface _CampaignLimits {
  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. The maximum value is 100.</p>
   */
  Daily?: number;

  /**
   * <p>The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.</p>
   */
  MaximumDuration?: number;

  /**
   * <p>The maximum number of messages that a campaign can send each second. The minimum value is 50. The maximum value is 20,000.</p>
   */
  MessagesPerSecond?: number;

  /**
   * <p>The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. The maximum value is 100.</p>
   */
  Total?: number;
}

export type _UnmarshalledCampaignLimits = _CampaignLimits;
