/**
 * _SamplingStatisticSummary shape
 */
export interface _SamplingStatisticSummary {
    /**
     * _String shape
     */
    RuleName?: string;

    /**
     * _Timestamp shape
     */
    Timestamp?: Date|string|number;

    /**
     * _Integer shape
     */
    RequestCount?: number;

    /**
     * _Integer shape
     */
    BorrowCount?: number;

    /**
     * _Integer shape
     */
    SampledCount?: number;
}

export interface _UnmarshalledSamplingStatisticSummary extends _SamplingStatisticSummary {
    /**
     * _Timestamp shape
     */
    Timestamp?: Date;
}