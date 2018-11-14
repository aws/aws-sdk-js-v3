import {_Edge, _UnmarshalledEdge} from './_Edge';
import {_ServiceStatistics, _UnmarshalledServiceStatistics} from './_ServiceStatistics';
import {_HistogramEntry, _UnmarshalledHistogramEntry} from './_HistogramEntry';

/**
 * _Service shape
 */
export interface _Service {
    /**
     * _NullableInteger shape
     */
    ReferenceId?: number;

    /**
     * _String shape
     */
    Name?: string;

    /**
     * _ServiceNames shape
     */
    Names?: Array<string>|Iterable<string>;

    /**
     * _NullableBoolean shape
     */
    Root?: boolean;

    /**
     * _String shape
     */
    AccountId?: string;

    /**
     * _String shape
     */
    Type?: string;

    /**
     * _String shape
     */
    State?: string;

    /**
     * _Timestamp shape
     */
    StartTime?: Date|string|number;

    /**
     * _Timestamp shape
     */
    EndTime?: Date|string|number;

    /**
     * _EdgeList shape
     */
    Edges?: Array<_Edge>|Iterable<_Edge>;

    /**
     * _ServiceStatistics shape
     */
    SummaryStatistics?: _ServiceStatistics;

    /**
     * _Histogram shape
     */
    DurationHistogram?: Array<_HistogramEntry>|Iterable<_HistogramEntry>;

    /**
     * _Histogram shape
     */
    ResponseTimeHistogram?: Array<_HistogramEntry>|Iterable<_HistogramEntry>;
}

export interface _UnmarshalledService extends _Service {
    /**
     * _ServiceNames shape
     */
    Names?: Array<string>;

    /**
     * _Timestamp shape
     */
    StartTime?: Date;

    /**
     * _Timestamp shape
     */
    EndTime?: Date;

    /**
     * _EdgeList shape
     */
    Edges?: Array<_UnmarshalledEdge>;

    /**
     * _ServiceStatistics shape
     */
    SummaryStatistics?: _UnmarshalledServiceStatistics;

    /**
     * _Histogram shape
     */
    DurationHistogram?: Array<_UnmarshalledHistogramEntry>;

    /**
     * _Histogram shape
     */
    ResponseTimeHistogram?: Array<_UnmarshalledHistogramEntry>;
}