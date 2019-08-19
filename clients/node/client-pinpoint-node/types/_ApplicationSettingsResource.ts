import { _CampaignHook, _UnmarshalledCampaignHook } from "./_CampaignHook";
import {
  _CampaignLimits,
  _UnmarshalledCampaignLimits
} from "./_CampaignLimits";
import { _QuietTime, _UnmarshalledQuietTime } from "./_QuietTime";

/**
 * <p>Provides information about an application, including the default settings for an application.</p>
 */
export interface _ApplicationSettingsResource {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string;

  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application.</p>
   */
  CampaignHook?: _CampaignHook;

  /**
   * <p>The date and time, in ISO 8601 format, when the application's settings were last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The default sending limits for campaigns in the application.</p>
   */
  Limits?: _CampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.</p>
   */
  QuietTime?: _QuietTime;
}

export interface _UnmarshalledApplicationSettingsResource
  extends _ApplicationSettingsResource {
  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application.</p>
   */
  CampaignHook?: _UnmarshalledCampaignHook;

  /**
   * <p>The default sending limits for campaigns in the application.</p>
   */
  Limits?: _UnmarshalledCampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.</p>
   */
  QuietTime?: _UnmarshalledQuietTime;
}
