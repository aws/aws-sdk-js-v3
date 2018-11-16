/**
 * _SamplingStatisticsDocument shape
 */
export interface _SamplingStatisticsDocument {
    /**
     * _RuleName shape
     */
    RuleName: string;

    /**
     * _ClientID shape
     */
    ClientID: string;

    /**
     * _Timestamp shape
     */
    Timestamp: Date|string|number;

    /**
     * _RequestCount shape
     */
    RequestCount: number;

    /**
     * _SampledCount shape
     */
    SampledCount: number;

    /**
     * _BorrowCount shape
     */
    BorrowCount?: number;
}

export interface _UnmarshalledSamplingStatisticsDocument extends _SamplingStatisticsDocument {
    /**
     * _Timestamp shape
     */
    Timestamp: Date;
}