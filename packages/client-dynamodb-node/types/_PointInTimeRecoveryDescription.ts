/**
 * <p>The description of the point in time settings applied to the table.</p>
 */
export interface _PointInTimeRecoveryDescription {
    /**
     * <p>The current state of point in time recovery:</p> <ul> <li> <p> <code>ENABLING</code> - Point in time recovery is being enabled.</p> </li> <li> <p> <code>ENABLED</code> - Point in time recovery is enabled.</p> </li> <li> <p> <code>DISABLED</code> - Point in time recovery is disabled.</p> </li> </ul>
     */
    PointInTimeRecoveryStatus?: 'ENABLED'|'DISABLED'|string;

    /**
     * <p>Specifies the earliest point in time you can restore your table to. It You can restore your table to any point in time during the last 35 days. </p>
     */
    EarliestRestorableDateTime?: Date|string|number;

    /**
     * <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. </p>
     */
    LatestRestorableDateTime?: Date|string|number;
}

export interface _UnmarshalledPointInTimeRecoveryDescription extends _PointInTimeRecoveryDescription {
    /**
     * <p>Specifies the earliest point in time you can restore your table to. It You can restore your table to any point in time during the last 35 days. </p>
     */
    EarliestRestorableDateTime?: Date;

    /**
     * <p> <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. </p>
     */
    LatestRestorableDateTime?: Date;
}