import {_EdgeStatistics, _UnmarshalledEdgeStatistics} from './_EdgeStatistics';
import {_HistogramEntry, _UnmarshalledHistogramEntry} from './_HistogramEntry';
import {_Alias, _UnmarshalledAlias} from './_Alias';

/**
 * _Edge shape
 */
export interface _Edge {
    /**
     * _NullableInteger shape
     */
    ReferenceId?: number;

    /**
     * _Timestamp shape
     */
    StartTime?: Date|string|number;

    /**
     * _Timestamp shape
     */
    EndTime?: Date|string|number;

    /**
     * _EdgeStatistics shape
     */
    SummaryStatistics?: _EdgeStatistics;

    /**
     * _Histogram shape
     */
    ResponseTimeHistogram?: Array<_HistogramEntry>|Iterable<_HistogramEntry>;

    /**
     * _AliasList shape
     */
    Aliases?: Array<_Alias>|Iterable<_Alias>;
}

export interface _UnmarshalledEdge extends _Edge {
    /**
     * _Timestamp shape
     */
    StartTime?: Date;

    /**
     * _Timestamp shape
     */
    EndTime?: Date;

    /**
     * _EdgeStatistics shape
     */
    SummaryStatistics?: _UnmarshalledEdgeStatistics;

    /**
     * _Histogram shape
     */
    ResponseTimeHistogram?: Array<_UnmarshalledHistogramEntry>;

    /**
     * _AliasList shape
     */
    Aliases?: Array<_UnmarshalledAlias>;
}