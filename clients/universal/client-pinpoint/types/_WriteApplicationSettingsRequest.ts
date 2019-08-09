import { _CampaignHook, _UnmarshalledCampaignHook } from "./_CampaignHook";
import {
  _CampaignLimits,
  _UnmarshalledCampaignLimits
} from "./_CampaignLimits";
import { _QuietTime, _UnmarshalledQuietTime } from "./_QuietTime";

/**
 * <p>Specifies the default settings for an application.</p>
 */
export interface _WriteApplicationSettingsRequest {
  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application. To override these settings for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom Lambda function settings for the campaign.</p>
   */
  CampaignHook?: _CampaignHook;

  /**
   * <p>Specifies whether to enable application-related alarms in Amazon CloudWatch.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The default sending limits for campaigns in the application. To override these limits for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom limits for the campaign.</p>
   */
  Limits?: _CampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define a custom quiet time for the campaign.</p>
   */
  QuietTime?: _QuietTime;
}

export interface _UnmarshalledWriteApplicationSettingsRequest
  extends _WriteApplicationSettingsRequest {
  /**
   * <p>The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application. To override these settings for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom Lambda function settings for the campaign.</p>
   */
  CampaignHook?: _UnmarshalledCampaignHook;

  /**
   * <p>The default sending limits for campaigns in the application. To override these limits for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define custom limits for the campaign.</p>
   */
  Limits?: _UnmarshalledCampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource to define a custom quiet time for the campaign.</p>
   */
  QuietTime?: _UnmarshalledQuietTime;
}
