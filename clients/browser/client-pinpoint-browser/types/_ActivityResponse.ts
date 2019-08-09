/**
 * <p>Provides information about an activity that was performed by a campaign.</p>
 */
export interface _ActivityResponse {
  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string;

  /**
   * <p>The unique identifier for the campaign that the activity applies to.</p>
   */
  CampaignId: string;

  /**
   * <p>The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.</p>
   */
  End?: string;

  /**
   * <p>The unique identifier for the activity.</p>
   */
  Id: string;

  /**
   * <p>Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.</p>
   */
  Result?: string;

  /**
   * <p>The scheduled start time, in ISO 8601 format, for the activity.</p>
   */
  ScheduledStart?: string;

  /**
   * <p>The actual start time, in ISO 8601 format, of the activity.</p>
   */
  Start?: string;

  /**
   * <p>The state of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.</p>
   */
  State?: string;

  /**
   * <p>The total number of endpoints that the campaign successfully delivered messages to.</p>
   */
  SuccessfulEndpointCount?: number;

  /**
   * <p>The total number of time zones that were completed.</p>
   */
  TimezonesCompletedCount?: number;

  /**
   * <p>The total number of unique time zones that are in the segment for the campaign.</p>
   */
  TimezonesTotalCount?: number;

  /**
   * <p>The total number of endpoints that the campaign attempted to deliver messages to.</p>
   */
  TotalEndpointCount?: number;

  /**
   * <p>The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentId?: string;
}

export type _UnmarshalledActivityResponse = _ActivityResponse;
