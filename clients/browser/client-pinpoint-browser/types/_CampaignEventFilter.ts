import {
  _EventDimensions,
  _UnmarshalledEventDimensions
} from "./_EventDimensions";

/**
 * <p>Specifies the settings for events that cause a campaign to be sent.</p>
 */
export interface _CampaignEventFilter {
  /**
   * <p>The dimension settings of the event filter for the campaign.</p>
   */
  Dimensions: _EventDimensions;

  /**
   * <p>The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (<link  linkend="apps-application-id-events">Events</link> resource) occurs.</p>
   */
  FilterType: "SYSTEM" | "ENDPOINT" | string;
}

export interface _UnmarshalledCampaignEventFilter extends _CampaignEventFilter {
  /**
   * <p>The dimension settings of the event filter for the campaign.</p>
   */
  Dimensions: _UnmarshalledEventDimensions;
}
