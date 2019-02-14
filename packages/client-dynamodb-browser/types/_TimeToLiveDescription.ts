/**
 * <p>The description of the Time to Live (TTL) status on the specified table. </p>
 */
export interface _TimeToLiveDescription {
    /**
     * <p> The Time to Live status for the table.</p>
     */
    TimeToLiveStatus?: 'ENABLING'|'DISABLING'|'ENABLED'|'DISABLED'|string;

    /**
     * <p> The name of the Time to Live attribute for items in the table.</p>
     */
    AttributeName?: string;
}

export type _UnmarshalledTimeToLiveDescription = _TimeToLiveDescription;