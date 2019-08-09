import {
  _MessageConfiguration,
  _UnmarshalledMessageConfiguration
} from "./_MessageConfiguration";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";

/**
 * <p>Specifies the settings for a campaign treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
 */
export interface _WriteTreatmentResource {
  /**
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: _MessageConfiguration;

  /**
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: _Schedule;

  /**
   * <p>The allocated percentage of users (segment members) to send the treatment to.</p>
   */
  SizePercent: number;

  /**
   * <p>The custom description of the treatment.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of the treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentName?: string;
}

export interface _UnmarshalledWriteTreatmentResource
  extends _WriteTreatmentResource {
  /**
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: _UnmarshalledMessageConfiguration;

  /**
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: _UnmarshalledSchedule;
}
