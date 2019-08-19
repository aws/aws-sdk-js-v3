import {
  _EdgeStatistics,
  _UnmarshalledEdgeStatistics
} from "./_EdgeStatistics";
import {
  _ServiceStatistics,
  _UnmarshalledServiceStatistics
} from "./_ServiceStatistics";
import {
  _HistogramEntry,
  _UnmarshalledHistogramEntry
} from "./_HistogramEntry";

/**
 * <p>A list of TimeSeriesStatistic structures.</p>
 */
export interface _TimeSeriesServiceStatistics {
  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: _EdgeStatistics;

  /**
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: _ServiceStatistics;

  /**
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: Array<_HistogramEntry> | Iterable<_HistogramEntry>;
}

export interface _UnmarshalledTimeSeriesServiceStatistics
  extends _TimeSeriesServiceStatistics {
  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date;

  /**
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: _UnmarshalledEdgeStatistics;

  /**
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: _UnmarshalledServiceStatistics;

  /**
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: Array<_UnmarshalledHistogramEntry>;
}
