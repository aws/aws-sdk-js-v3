import {
  _EdgeStatistics,
  _UnmarshalledEdgeStatistics
} from "./_EdgeStatistics";
import {
  _HistogramEntry,
  _UnmarshalledHistogramEntry
} from "./_HistogramEntry";
import { _Alias, _UnmarshalledAlias } from "./_Alias";

/**
 * <p>Information about a connection between two services.</p>
 */
export interface _Edge {
  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date | string | number;

  /**
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: _EdgeStatistics;

  /**
   * <p>A histogram that maps the spread of client response times on an edge.</p>
   */
  ResponseTimeHistogram?: Array<_HistogramEntry> | Iterable<_HistogramEntry>;

  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Array<_Alias> | Iterable<_Alias>;
}

export interface _UnmarshalledEdge extends _Edge {
  /**
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date;

  /**
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: _UnmarshalledEdgeStatistics;

  /**
   * <p>A histogram that maps the spread of client response times on an edge.</p>
   */
  ResponseTimeHistogram?: Array<_UnmarshalledHistogramEntry>;

  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Array<_UnmarshalledAlias>;
}
