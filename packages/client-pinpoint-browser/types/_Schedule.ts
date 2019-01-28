import {_QuietTime, _UnmarshalledQuietTime} from './_QuietTime';

/**
 * Shcedule that defines when a campaign is run.
 */
export interface _Schedule {
    /**
     * The scheduled time that the campaign ends in ISO 8601 format.
     */
    EndTime?: string;

    /**
     * How often the campaign delivers messages.
     *
     * Valid values: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY
     */
    Frequency?: 'ONCE'|'HOURLY'|'DAILY'|'WEEKLY'|'MONTHLY'|string;

    /**
     * Indicates whether the campaign schedule takes effect according to each user's local time.
     */
    IsLocalTime?: boolean;

    /**
     * The time during which the campaign sends no messages.
     */
    QuietTime?: _QuietTime;

    /**
     * The scheduled time that the campaign begins in ISO 8601 format.
     */
    StartTime?: string;

    /**
     * The starting UTC offset for the schedule if the value for isLocalTime is true
     *
     * Valid values:
     * UTC
     * UTC+01
     * UTC+02
     * UTC+03
     * UTC+03:30
     * UTC+04
     * UTC+04:30
     * UTC+05
     * UTC+05:30
     * UTC+05:45
     * UTC+06
     * UTC+06:30
     * UTC+07
     * UTC+08
     * UTC+09
     * UTC+09:30
     * UTC+10
     * UTC+10:30
     * UTC+11
     * UTC+12
     * UTC+13
     * UTC-02
     * UTC-03
     * UTC-04
     * UTC-05
     * UTC-06
     * UTC-07
     * UTC-08
     * UTC-09
     * UTC-10
     * UTC-11
     */
    Timezone?: string;
}

export interface _UnmarshalledSchedule extends _Schedule {
    /**
     * The time during which the campaign sends no messages.
     */
    QuietTime?: _UnmarshalledQuietTime;
}