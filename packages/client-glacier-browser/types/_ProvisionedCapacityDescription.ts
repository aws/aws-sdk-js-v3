/**
 * <p>The definition for a provisioned capacity unit.</p>
 */
export interface _ProvisionedCapacityDescription {
    /**
     * <p>The ID that identifies the provisioned capacity unit.</p>
     */
    CapacityId?: string;

    /**
     * <p>The date that the provisioned capacity unit was purchased, in Universal Coordinated Time (UTC).</p>
     */
    StartDate?: string;

    /**
     * <p>The date that the provisioned capacity unit expires, in Universal Coordinated Time (UTC).</p>
     */
    ExpirationDate?: string;
}

export type _UnmarshalledProvisionedCapacityDescription = _ProvisionedCapacityDescription;