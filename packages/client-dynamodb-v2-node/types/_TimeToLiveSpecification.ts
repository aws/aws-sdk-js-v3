/**
 * <p>Represents the settings used to enable or disable Time to Live for the specified table.</p>
 */
export interface _TimeToLiveSpecification {
    /**
     * <p>Indicates whether Time To Live is to be enabled (true) or disabled (false) on the table.</p>
     */
    Enabled: boolean;

    /**
     * <p>The name of the Time to Live attribute used to store the expiration time for items in the table.</p>
     */
    AttributeName: string;
}

export type _UnmarshalledTimeToLiveSpecification = _TimeToLiveSpecification;