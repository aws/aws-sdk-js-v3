import {
  _DimensionGroup,
  _UnmarshalledDimensionGroup
} from "./_DimensionGroup";

/**
 * <p>A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).</p>
 */
export interface _MetricQuery {
  /**
   * <p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - a scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - the raw number of active sessions for the database engine.</p> </li> </ul>
   */
  Metric: string;

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy?: _DimensionGroup;

  /**
   * <p>One or more filters to apply in the request. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>
   */
  Filter?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledMetricQuery extends _MetricQuery {
  /**
   * <p>A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy?: _UnmarshalledDimensionGroup;

  /**
   * <p>One or more filters to apply in the request. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>
   */
  Filter?: { [key: string]: string };
}
