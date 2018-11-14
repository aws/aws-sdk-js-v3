/**
 * _SamplingTargetDocument shape
 */
export interface _SamplingTargetDocument {
    /**
     * _String shape
     */
    RuleName?: string;

    /**
     * _Double shape
     */
    FixedRate?: number;

    /**
     * _NullableInteger shape
     */
    ReservoirQuota?: number;

    /**
     * _Timestamp shape
     */
    ReservoirQuotaTTL?: Date|string|number;

    /**
     * _NullableInteger shape
     */
    Interval?: number;
}

export interface _UnmarshalledSamplingTargetDocument extends _SamplingTargetDocument {
    /**
     * _Timestamp shape
     */
    ReservoirQuotaTTL?: Date;
}