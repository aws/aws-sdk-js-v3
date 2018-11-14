import {_ErrorStatistics, _UnmarshalledErrorStatistics} from './_ErrorStatistics';
import {_FaultStatistics, _UnmarshalledFaultStatistics} from './_FaultStatistics';

/**
 * _EdgeStatistics shape
 */
export interface _EdgeStatistics {
    /**
     * _NullableLong shape
     */
    OkCount?: number;

    /**
     * _ErrorStatistics shape
     */
    ErrorStatistics?: _ErrorStatistics;

    /**
     * _FaultStatistics shape
     */
    FaultStatistics?: _FaultStatistics;

    /**
     * _NullableLong shape
     */
    TotalCount?: number;

    /**
     * _NullableDouble shape
     */
    TotalResponseTime?: number;
}

export interface _UnmarshalledEdgeStatistics extends _EdgeStatistics {
    /**
     * _ErrorStatistics shape
     */
    ErrorStatistics?: _UnmarshalledErrorStatistics;

    /**
     * _FaultStatistics shape
     */
    FaultStatistics?: _UnmarshalledFaultStatistics;
}