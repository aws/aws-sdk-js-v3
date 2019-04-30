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
 * Campaign definition
 */
export interface _CampaignResponse {
  /**
   * Treatments that are defined in addition to the default treatment.
   */
  AdditionalTreatments?:
    | Array<_TreatmentResource>
    | Iterable<_TreatmentResource>;

  /**
   * The ID of the application to which the campaign applies.
   */
  ApplicationId?: string;

  /**
   * The date the campaign was created in ISO 8601 format.
   */
  CreationDate?: string;

  /**
   * The status of the campaign's default treatment. Only present for A/B test campaigns.
   */
  DefaultState?: _CampaignState;

  /**
   * A description of the campaign.
   */
  Description?: string;

  /**
   * The allocated percentage of end users who will not receive messages from this campaign.
   */
  HoldoutPercent?: number;

  /**
   * Campaign hook information.
   */
  Hook?: _CampaignHook;

  /**
   * The unique campaign ID.
   */
  Id?: string;

  /**
   * Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false.
   */
  IsPaused?: boolean;

  /**
   * The date the campaign was last updated in ISO 8601 format.
   */
  LastModifiedDate?: string;

  /**
   * The campaign limits settings.
   */
  Limits?: _CampaignLimits;

  /**
   * The message configuration settings.
   */
  MessageConfiguration?: _MessageConfiguration;

  /**
   * The custom name of the campaign.
   */
  Name?: string;

  /**
   * The campaign schedule.
   */
  Schedule?: _Schedule;

  /**
   * The ID of the segment to which the campaign sends messages.
   */
  SegmentId?: string;

  /**
   * The version of the segment to which the campaign sends messages.
   */
  SegmentVersion?: number;

  /**
   * The campaign status.
   *
   * An A/B test campaign will have a status of COMPLETED only when all treatments have a status of COMPLETED.
   */
  State?: _CampaignState;

  /**
   * A custom description for the treatment.
   */
  TreatmentDescription?: string;

  /**
   * The custom name of a variation of the campaign used for A/B testing.
   */
  TreatmentName?: string;

  /**
   * The campaign version number.
   */
  Version?: number;
}

export interface _UnmarshalledCampaignResponse extends _CampaignResponse {
  /**
   * Treatments that are defined in addition to the default treatment.
   */
  AdditionalTreatments?: Array<_UnmarshalledTreatmentResource>;

  /**
   * The status of the campaign's default treatment. Only present for A/B test campaigns.
   */
  DefaultState?: _UnmarshalledCampaignState;

  /**
   * Campaign hook information.
   */
  Hook?: _UnmarshalledCampaignHook;

  /**
   * The campaign limits settings.
   */
  Limits?: _UnmarshalledCampaignLimits;

  /**
   * The message configuration settings.
   */
  MessageConfiguration?: _UnmarshalledMessageConfiguration;

  /**
   * The campaign schedule.
   */
  Schedule?: _UnmarshalledSchedule;

  /**
   * The campaign status.
   *
   * An A/B test campaign will have a status of COMPLETED only when all treatments have a status of COMPLETED.
   */
  State?: _UnmarshalledCampaignState;
}
