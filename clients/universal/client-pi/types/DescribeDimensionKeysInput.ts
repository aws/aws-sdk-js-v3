import { _DimensionGroup } from "./_DimensionGroup";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDimensionKeysInput shape
 */
export interface DescribeDimensionKeysInput {
  /**
   * <p>The AWS service for which Performance Insights will return metrics. The only valid value for <i>ServiceType</i> is: <code>RDS</code> </p>
   */
  ServiceType: "RDS" | string;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.</p> <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value - for example: <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code> </p>
   */
  Identifier: string;

  /**
   * <p>The date and time specifying the beginning of the requested time series data. You can't specify a <code>StartTime</code> that's earlier than 7 days ago. The value specified is <i>inclusive</i> - data points equal to or greater than <code>StartTime</code> will be returned.</p> <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The date and time specifying the end of the requested time series data. The value specified is <i>exclusive</i> - data points less than (but not equal to) <code>EndTime</code> will be returned.</p> <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>The name of a Performance Insights metric to be measured.</p> <p>Valid values for <code>Metric</code> are:</p> <ul> <li> <p> <code>db.load.avg</code> - a scaled representation of the number of active sessions for the database engine.</p> </li> <li> <p> <code>db.sampledload.avg</code> - the raw number of active sessions for the database engine.</p> </li> </ul>
   */
  Metric: string;

  /**
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:</p> <ul> <li> <p> <code>1</code> (one second)</p> </li> <li> <p> <code>60</code> (one minute)</p> </li> <li> <p> <code>300</code> (five minutes)</p> </li> <li> <p> <code>3600</code> (one hour)</p> </li> <li> <p> <code>86400</code> (twenty-four hours)</p> </li> </ul> <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy: _DimensionGroup;

  /**
   * <p>For each dimension specified in <code>GroupBy</code>, specify a secondary dimension to further subdivide the partition keys in the response.</p>
   */
  PartitionBy?: _DimensionGroup;

  /**
   * <p>One or more filters to apply in the request. Restrictions:</p> <ul> <li> <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> or <code>Partition</code> parameters.</p> </li> <li> <p>A single filter for any other dimension in this dimension group.</p> </li> </ul>
   */
  Filter?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a pagination token is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
