/**
 * Activity definition
 */
export interface _ActivityResponse {
    /**
     * The ID of the application to which the campaign applies.
     */
    ApplicationId?: string;

    /**
     * The ID of the campaign to which the activity applies.
     */
    CampaignId?: string;

    /**
     * The actual time the activity was marked CANCELLED or COMPLETED. Provided in ISO 8601 format.
     */
    End?: string;

    /**
     * The unique activity ID.
     */
    Id?: string;

    /**
     * Indicates whether the activity succeeded.
     *
     * Valid values: SUCCESS, FAIL
     */
    Result?: string;

    /**
     * The scheduled start time for the activity in ISO 8601 format.
     */
    ScheduledStart?: string;

    /**
     * The actual start time of the activity in ISO 8601 format.
     */
    Start?: string;

    /**
     * The state of the activity.
     *
     * Valid values: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, COMPLETED
     */
    State?: string;

    /**
     * The total number of endpoints to which the campaign successfully delivered messages.
     */
    SuccessfulEndpointCount?: number;

    /**
     * The total number of timezones completed.
     */
    TimezonesCompletedCount?: number;

    /**
     * The total number of unique timezones present in the segment.
     */
    TimezonesTotalCount?: number;

    /**
     * The total number of endpoints to which the campaign attempts to deliver messages.
     */
    TotalEndpointCount?: number;

    /**
     * The ID of a variation of the campaign used for A/B testing.
     */
    TreatmentId?: string;
}

export type _UnmarshalledActivityResponse = _ActivityResponse;