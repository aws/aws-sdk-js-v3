import {
  _WriteTreatmentResource,
  _UnmarshalledWriteTreatmentResource
} from "./_WriteTreatmentResource";
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
 * <p>Specifies the configuration and other settings for a campaign.</p>
 */
export interface _WriteCampaignRequest {
  /**
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   */
  AdditionalTreatments?:
    | Array<_WriteTreatmentResource>
    | Iterable<_WriteTreatmentResource>;

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
   * <p>Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by setting this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: _CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: _MessageConfiguration;

  /**
   * <p>The custom name of the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: _Schedule;

  /**
   * <p>The unique identifier for the segment to associate with the campaign.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to associate with the campaign.</p>
   */
  SegmentVersion?: number;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The custom description of a variation of the campaign to use for A/B testing.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of a variation of the campaign to use for A/B testing.</p>
   */
  TreatmentName?: string;
}

export interface _UnmarshalledWriteCampaignRequest
  extends _WriteCampaignRequest {
  /**
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   */
  AdditionalTreatments?: Array<_UnmarshalledWriteTreatmentResource>;

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
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: { [key: string]: string };
}
