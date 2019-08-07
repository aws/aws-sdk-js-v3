import {
  _MessageConfiguration,
  _UnmarshalledMessageConfiguration
} from "./_MessageConfiguration";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";

/**
 * Used to create a campaign treatment.
 */
export interface _WriteTreatmentResource {
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
   * A custom description for the treatment.
   */
  TreatmentDescription?: string;

  /**
   * The custom name of a variation of the campaign used for A/B testing.
   */
  TreatmentName?: string;
}

export interface _UnmarshalledWriteTreatmentResource
  extends _WriteTreatmentResource {
  /**
   * The message configuration settings.
   */
  MessageConfiguration?: _UnmarshalledMessageConfiguration;

  /**
   * The campaign schedule.
   */
  Schedule?: _UnmarshalledSchedule;
}
