import {
  _MessageConfiguration,
  _UnmarshalledMessageConfiguration
} from "./_MessageConfiguration";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";
import { _CampaignState, _UnmarshalledCampaignState } from "./_CampaignState";

/**
 * Treatment resource
 */
export interface _TreatmentResource {
  /**
   * The unique treatment ID.
   */
  Id?: string;

  /**
   * The message configuration settings.
   */
  MessageConfiguration?: _MessageConfiguration;

  /**
   * The campaign schedule.
   */
  Schedule?: _Schedule;

  /**
   * The allocated percentage of users for this treatment.
   */
  SizePercent?: number;

  /**
   * The treatment status.
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
}

export interface _UnmarshalledTreatmentResource extends _TreatmentResource {
  /**
   * The message configuration settings.
   */
  MessageConfiguration?: _UnmarshalledMessageConfiguration;

  /**
   * The campaign schedule.
   */
  Schedule?: _UnmarshalledSchedule;

  /**
   * The treatment status.
   */
  State?: _UnmarshalledCampaignState;
}
