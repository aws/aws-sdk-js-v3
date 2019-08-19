import {
  _TreatmentResource,
  _UnmarshalledTreatmentResource
} from "./_TreatmentResource";
import { _CampaignState, _UnmarshalledCampaignState } from "./_CampaignState";
import { _CampaignHook, _UnmarshalledCampaignHook } from "./_CampaignHook";
import {
  _CampaignLimits,
  _UnmarshalledCampaignLimits
} from "./_CampaignLimits";
import {
  _MessageConfiguration,
  _UnmarshalledMessageConfiguration
} from "./_MessageConfiguration";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";

/**
 * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
 */
export interface _CampaignResponse {
  /**
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   */
  AdditionalTreatments?:
    | Array<_TreatmentResource>
    | Iterable<_TreatmentResource>;

  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  Arn: string;

  /**
   * <p>The date, ISO 8601 format, when the campaign was created.</p>
   */
  CreationDate: string;

  /**
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment, to support A/B testing.</p>
   */
  DefaultState?: _CampaignState;

  /**
   * <p>The custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign.</p>
   */
  Hook?: _CampaignHook;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  Id: string;

  /**
   * <p>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was last modified.</p>
   */
  LastModifiedDate: string;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: _CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: _MessageConfiguration;

  /**
   * <p>The name of the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: _Schedule;

  /**
   * <p>The unique identifier for the segment that's associated with the campaign.</p>
   */
  SegmentId: string;

  /**
   * <p>The version number of the segment that's associated with the campaign.</p>
   */
  SegmentVersion: number;

  /**
   * <p>The current status of the campaign.</p>
   */
  State?: _CampaignState;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The custom description of a variation of the campaign that's used for A/B testing.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of a variation of the campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * <p>The version number of the campaign.</p>
   */
  Version?: number;
}

export interface _UnmarshalledCampaignResponse extends _CampaignResponse {
  /**
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   */
  AdditionalTreatments?: Array<_UnmarshalledTreatmentResource>;

  /**
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment, to support A/B testing.</p>
   */
  DefaultState?: _UnmarshalledCampaignState;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign.</p>
   */
  Hook?: _UnmarshalledCampaignHook;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: _UnmarshalledCampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: _UnmarshalledMessageConfiguration;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: _UnmarshalledSchedule;

  /**
   * <p>The current status of the campaign.</p>
   */
  State?: _UnmarshalledCampaignState;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}
