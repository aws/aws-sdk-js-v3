import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.</p>
 */
export interface DataPoint {
  __type?: "DataPoint";
  /**
   * <p>The time, in epoch format, associated with a particular <code>Value</code>.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The actual value associated with a particular <code>Timestamp</code>.</p>
   */
  Value: number | undefined;
}

export namespace DataPoint {
  export const filterSensitiveLog = (obj: DataPoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataPoint => __isa(o, "DataPoint");
}

export interface DescribeDimensionKeysRequest {
  __type?: "DescribeDimensionKeysRequest";
  /**
   * <p>The date and time specifying the end of the requested time series data. The value
   *       specified is <i>exclusive</i> - data points less than (but not equal to)
   *         <code>EndTime</code> will be returned.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for
   *         <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>One or more filters to apply in the request.  Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> or
   *           <code>Partition</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>A single filter for any other dimension in this dimension group.</p>
   *             </li>
   *          </ul>
   */
  Filter?: { [key: string]: string };

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must
   *       specify a valid dimension group. Performance Insights will return all of the dimensions within that group,
   *       unless you provide the names of specific dimensions within that group. You can also request
   *       that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy: DimensionGroup | undefined;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its
   *         <code>DbiResourceId</code> value - for example:
   *       <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>
   *          </p>
   */
  Identifier: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.
   *       If more items exist than the specified <code>MaxRecords</code> value, a pagination
   *       token is included in the response so that the remaining
   *       results can be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   */
  Metric: string | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>For each dimension specified in
   *       <code>GroupBy</code>, specify a secondary dimension to further subdivide the partition keys in the response.</p>
   */
  PartitionBy?: DimensionGroup;

  /**
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as
   *       one second, or as long as one day (86400 seconds).  Valid values are:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> (one second)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>60</code> (one minute)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>300</code> (five minutes)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3600</code> (one hour)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>86400</code> (twenty-four hours)</p>
   *             </li>
   *          </ul>
   *
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for
   *       you, with a goal of returning roughly 100-200 data points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * <p>The AWS service for which Performance Insights will return metrics. The only valid value for
   *         <i>ServiceType</i> is: <code>RDS</code>
   *          </p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * <p>The date and time specifying the beginning of the requested time series data.
   *       You can't specify a <code>StartTime</code> that's earlier than 7 days ago.  The value
   *       specified is <i>inclusive</i> - data points equal to or greater than
   *         <code>StartTime</code> will be returned.</p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for
   *         <code>EndTime</code>.</p>
   */
  StartTime: Date | undefined;
}

export namespace DescribeDimensionKeysRequest {
  export const filterSensitiveLog = (
    obj: DescribeDimensionKeysRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDimensionKeysRequest =>
    __isa(o, "DescribeDimensionKeysRequest");
}

export interface DescribeDimensionKeysResponse {
  __type?: "DescribeDimensionKeysResponse";
  /**
   * <p>The end time for the returned dimension keys, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than
   *       or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>The start time for the returned dimension keys, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or
   *       equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>The dimension keys that were requested.</p>
   */
  Keys?: DimensionKeyDescription[];

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>If <code>PartitionBy</code> was present in the request, <code>PartitionKeys</code> contains the breakdown of dimension keys by the specified partitions.</p>
   */
  PartitionKeys?: ResponsePartitionKey[];
}

export namespace DescribeDimensionKeysResponse {
  export const filterSensitiveLog = (
    obj: DescribeDimensionKeysResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDimensionKeysResponse =>
    __isa(o, "DescribeDimensionKeysResponse");
}

/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the
 *         <code>db.sql</code> dimension group consists of the following dimensions:
 *         <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and
 *         <code>db.sql.tokenized_id</code>.</p>
 */
export interface DimensionGroup {
  __type?: "DimensionGroup";
  /**
   * <p>A list of specific dimensions from a dimension group. If this parameter is not present,
   *       then it signifies that all of the dimensions in the group were requested, or are present in
   *       the response.</p>
   *          <p>Valid values for elements in the <code>Dimensions</code> array are:</p>
   *          <ul>
   *             <li>
   *                <p>db.user.id</p>
   *             </li>
   *             <li>
   *                <p>db.user.name</p>
   *             </li>
   *             <li>
   *                <p>db.host.id</p>
   *             </li>
   *             <li>
   *                <p>db.host.name</p>
   *             </li>
   *             <li>
   *                <p>db.sql.id</p>
   *             </li>
   *             <li>
   *                <p>db.sql.db_id</p>
   *             </li>
   *             <li>
   *                <p>db.sql.statement</p>
   *             </li>
   *             <li>
   *                <p>db.sql.tokenized_id</p>
   *             </li>
   *             <li>
   *                <p>db.sql_tokenized.id</p>
   *             </li>
   *             <li>
   *                <p>db.sql_tokenized.db_id</p>
   *             </li>
   *             <li>
   *                <p>db.sql_tokenized.statement</p>
   *             </li>
   *             <li>
   *                <p>db.wait_event.name</p>
   *             </li>
   *             <li>
   *                <p>db.wait_event.type</p>
   *             </li>
   *             <li>
   *                <p>db.wait_event_type.name</p>
   *             </li>
   *          </ul>
   */
  Dimensions?: string[];

  /**
   * <p>The name of the dimension group.  Valid values are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.user</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Group: string | undefined;

  /**
   * <p>The maximum number of items to fetch for this dimension group.</p>
   */
  Limit?: number;
}

export namespace DimensionGroup {
  export const filterSensitiveLog = (obj: DimensionGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is DimensionGroup =>
    __isa(o, "DimensionGroup");
}

/**
 * <p>An array of descriptions and aggregated values for
 *       each dimension within a dimension group.</p>
 */
export interface DimensionKeyDescription {
  __type?: "DimensionKeyDescription";
  /**
   * <p>A map of name-value pairs for the dimensions in the group.</p>
   */
  Dimensions?: { [key: string]: string };

  /**
   * <p>If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.</p>
   */
  Partitions?: number[];

  /**
   * <p>The aggregated metric value for the dimension(s), over the requested time range.</p>
   */
  Total?: number;
}

export namespace DimensionKeyDescription {
  export const filterSensitiveLog = (obj: DimensionKeyDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is DimensionKeyDescription =>
    __isa(o, "DimensionKeyDescription");
}

export interface GetResourceMetricsRequest {
  __type?: "GetResourceMetricsRequest";
  /**
   * <p>The date and time specifiying the end of the requested time series data.  The value specified is
   *       <i>exclusive</i> - data points less than (but not equal to) <code>EndTime</code> will be returned.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its
   *         <code>DbiResourceId</code> value - for example:
   *       <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>
   *          </p>
   */
  Identifier: string | undefined;

  /**
   * <p>The maximum number of items to return in the response.
   *       If more items exist than the specified <code>MaxRecords</code> value, a pagination
   *       token is included in the response so that the remaining
   *       results can be retrieved.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>An array of one or more queries to perform. Each query must specify a Performance Insights metric, and
   *       can optionally specify aggregation and filtering criteria.</p>
   */
  MetricQueries: MetricQuery[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as
   *       one second, or as long as one day (86400 seconds).  Valid values are:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>1</code> (one second)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>60</code> (one minute)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>300</code> (five minutes)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>3600</code> (one hour)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>86400</code> (twenty-four hours)</p>
   *             </li>
   *          </ul>
   *
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for
   *       you, with a goal of returning roughly 100-200 data points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * <p>The AWS service for which Performance Insights will return metrics. The only valid value for
   *         <i>ServiceType</i> is: <code>RDS</code>
   *          </p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * <p>The date and time specifying the beginning of the requested time series data. You can't
   *       specify a <code>StartTime</code> that's earlier than 7 days ago. The value specified is
   *         <i>inclusive</i> - data points equal to or greater than <code>StartTime</code>
   *       will be returned.</p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.</p>
   */
  StartTime: Date | undefined;
}

export namespace GetResourceMetricsRequest {
  export const filterSensitiveLog = (obj: GetResourceMetricsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourceMetricsRequest =>
    __isa(o, "GetResourceMetricsRequest");
}

export interface GetResourceMetricsResponse {
  __type?: "GetResourceMetricsResponse";
  /**
   * <p>The end time for the returned metrics, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than
   *       or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>The start time for the returned metrics, after alignment to a granular boundary (as
   *       specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or
   *       equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from
   *       this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its
   *       <code>DbiResourceId</code> value - for example:
   *       <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>
   *          </p>
   */
  Identifier?: string;

  /**
   * <p>An array of metric results,, where each array element contains all of the data points for a particular dimension.</p>
   */
  MetricList?: MetricKeyDataPoints[];

  /**
   * <p>An optional pagination token provided by a previous request. If
   *       this parameter is specified, the response includes only records beyond the token, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

export namespace GetResourceMetricsResponse {
  export const filterSensitiveLog = (obj: GetResourceMetricsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourceMetricsResponse =>
    __isa(o, "GetResourceMetricsResponse");
}

/**
 * <p>The request failed due to an unknown error.</p>
 */
export interface InternalServiceError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceError {
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServiceError =>
    __isa(o, "InternalServiceError");
}

/**
 * <p>One of the arguments provided is invalid for this request.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgumentException =>
    __isa(o, "InvalidArgumentException");
}

/**
 * <p>A time-ordered series of data points, correpsonding to a dimension of a Performance Insights
 *       metric.</p>
 */
export interface MetricKeyDataPoints {
  __type?: "MetricKeyDataPoints";
  /**
   * <p>An array of timestamp-value pairs, representing measurements over a period of time.</p>
   */
  DataPoints?: DataPoint[];

  /**
   * <p>The dimension(s) to which the data points apply.</p>
   */
  Key?: ResponseResourceMetricKey;
}

export namespace MetricKeyDataPoints {
  export const filterSensitiveLog = (obj: MetricKeyDataPoints): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricKeyDataPoints =>
    __isa(o, "MetricKeyDataPoints");
}

/**
 * <p>A single query to be processed. You must provide the metric to query. If no other
 *       parameters are specified, Performance Insights returns all of the data points for that metric. You can
 *       optionally request that the data points be aggregated by dimension group (
 *       <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).</p>
 */
export interface MetricQuery {
  __type?: "MetricQuery";
  /**
   * <p>One or more filters to apply in the request.  Restrictions:</p>
   *          <ul>
   *             <li>
   *                <p>Any number of filters by the same dimension, as specified in the <code>GroupBy</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>A single filter for any other dimension in this dimension group.</p>
   *             </li>
   *          </ul>
   */
  Filter?: { [key: string]: string };

  /**
   * <p>A specification for how to aggregate the data points from a query result. You must
   *       specify a valid dimension group.  Performance Insights will return all of the dimensions within that group,
   *       unless you provide the names of specific dimensions within that group. You can also request
   *       that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy?: DimensionGroup;

  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   */
  Metric: string | undefined;
}

export namespace MetricQuery {
  export const filterSensitiveLog = (obj: MetricQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricQuery => __isa(o, "MetricQuery");
}

/**
 * <p>The user is not authorized to perform this request.</p>
 */
export interface NotAuthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotAuthorizedException =>
    __isa(o, "NotAuthorizedException");
}

/**
 * <p>If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code>
 *       request, the dimensions are returned in an array. Each element in the array specifies one
 *       dimension. </p>
 */
export interface ResponsePartitionKey {
  __type?: "ResponsePartitionKey";
  /**
   * <p>A dimension map that contains the dimension(s) for this partition.</p>
   */
  Dimensions: { [key: string]: string } | undefined;
}

export namespace ResponsePartitionKey {
  export const filterSensitiveLog = (obj: ResponsePartitionKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponsePartitionKey =>
    __isa(o, "ResponsePartitionKey");
}

/**
 * <p>An object describing a Performance Insights metric and one or more dimensions for that metric.</p>
 */
export interface ResponseResourceMetricKey {
  __type?: "ResponseResourceMetricKey";
  /**
   * <p>The valid dimensions for the metric.</p>
   */
  Dimensions?: { [key: string]: string };

  /**
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - a scaled representation of the number of active sessions
   *           for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - the raw number of active sessions for the
   *           database engine.</p>
   *             </li>
   *          </ul>
   */
  Metric: string | undefined;
}

export namespace ResponseResourceMetricKey {
  export const filterSensitiveLog = (obj: ResponseResourceMetricKey): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponseResourceMetricKey =>
    __isa(o, "ResponseResourceMetricKey");
}

export enum ServiceType {
  RDS = "RDS"
}
