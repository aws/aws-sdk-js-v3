// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { PIServiceException as __BaseException } from "./PIServiceException";

/**
 * @public
 * @enum
 */
export const AcceptLanguage = {
  EN_US: "EN_US",
} as const;

/**
 * @public
 */
export type AcceptLanguage = (typeof AcceptLanguage)[keyof typeof AcceptLanguage];

/**
 * @public
 * <p>This data type helps to determine Performance Insights metric to render for the insight.</p>
 */
export interface PerformanceInsightsMetric {
  /**
   * @public
   * <p>The Performance Insights metric.</p>
   */
  Metric?: string;

  /**
   * @public
   * <p>The Performance Insights metric name.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>A dimension map that contains the dimensions for this partition.</p>
   */
  Dimensions?: Record<string, string>;

  /**
   * @public
   * <p>The value of the metric. For example, <code>9</code> for <code>db.load.avg</code>.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>List of data objects which provide details about source metrics.
 *             This field can be used to determine the PI metric to render
 *             for the insight. This data type also includes static values
 *             for the metrics for the Insight that were calculated and included
 *             in text and annotations on the DB load chart.</p>
 */
export interface Data {
  /**
   * @public
   * <p>This field determines the Performance Insights metric to render
   *             for the insight. The <code>name</code> field refers to a Performance Insights metric.
   *         </p>
   */
  PerformanceInsightsMetric?: PerformanceInsightsMetric;
}

/**
 * @public
 * @enum
 */
export const ContextType = {
  CAUSAL: "CAUSAL",
  CONTEXTUAL: "CONTEXTUAL",
} as const;

/**
 * @public
 */
export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * @public
 * <p>The list of recommendations for the insight.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The unique identifier for the recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The recommendation details to help resolve the performance issue. For example,
   *             <code>Investigate the following SQLs that contributed to 100% of the total DBLoad during that time period: sql-id</code>
   *          </p>
   */
  RecommendationDescription?: string;
}

/**
 * @public
 * @enum
 */
export const Severity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  DOCDB: "DOCDB",
  RDS: "RDS",
} as const;

/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * <p>Metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *             characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *             The string can only contain only the set of Unicode letters, digits,
   *             white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: <code>"^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$"</code>).</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256
   *             Unicode characters in length and can't be prefixed with <code>aws:</code> or <code>rds:</code>.
   *             The string can only contain only the set of Unicode letters, digits,
   *             white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Retrieves the details of the performance analysis report.</p>
 */
export interface AnalysisReportSummary {
  /**
   * @public
   * <p>The name of the analysis report.</p>
   */
  AnalysisReportId?: string;

  /**
   * @public
   * <p>The time you created the analysis report.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The start time of the analysis in the report.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the analysis in the report.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The status of the analysis report.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * @public
   * <p>List of all the tags added to the analysis report.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePerformanceAnalysisReportRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights will return metrics. Valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from
   *             this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value.
   *             For example, specify <code>db-ADECBTYHKTSAUMUZQYPDS2GW4A</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The start time defined for the analysis report.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end time defined for the analysis report.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The metadata assigned to the analysis report consisting of a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePerformanceAnalysisReportResponse {
  /**
   * @public
   * <p>A unique identifier for the created analysis report.</p>
   */
  AnalysisReportId?: string;
}

/**
 * @public
 * <p>The request failed due to an unknown error.</p>
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>One of the arguments provided is invalid for this request.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The user is not authorized to perform this request.</p>
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.</p>
 */
export interface DataPoint {
  /**
   * @public
   * <p>The time, in epoch format, associated with a particular <code>Value</code>.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The actual value associated with a particular <code>Timestamp</code>.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface DeletePerformanceAnalysisReportRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights will return metrics. Valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source.
   *             In the console, the identifier is shown as <i>ResourceID</i>. When you
   *             call <code>DescribeDBInstances</code>, the identifier is returned as <code>DbiResourceId</code>.</p>
   *          <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify
   *             <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the analysis report for deletion.</p>
   */
  AnalysisReportId: string | undefined;
}

/**
 * @public
 */
export interface DeletePerformanceAnalysisReportResponse {}

/**
 * @public
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the
 *         <code>db.sql</code> dimension group consists of the following dimensions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with
 *                         <code>pi-</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM
 *                         employees</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL
 *                 statements, only the first 500 bytes are returned.</p>
 *          </note>
 */
export interface DimensionGroup {
  /**
   * @public
   * <p>The name of the dimension group. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db</code> - The name of the database to which the client is connected. The following values are permitted:</p>
   *                <ul>
   *                   <li>
   *                      <p>Aurora PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Aurora MySQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS MySQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS MariaDB</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon DocumentDB</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.application</code> - The name of the application that is connected to the database. The following values are
   *                     permitted:</p>
   *                <ul>
   *                   <li>
   *                      <p>Aurora PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon DocumentDB</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host</code> - The host name of the connected client (all engines).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query</code> - The query that is currently running (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query_tokenized</code> - The digest query (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type</code> - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql</code> - The text of the SQL statement that is currently running (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized</code> - The SQL digest (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user</code> - The user logged in to the database (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event</code> - The event for which the database backend is waiting (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type</code> - The type of event for which the database backend is waiting (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_state</code> - The event for which the database backend is waiting (only Amazon DocumentDB).</p>
   *             </li>
   *          </ul>
   */
  Group: string | undefined;

  /**
   * @public
   * <p>A list of specific dimensions from a dimension group. If this parameter is not present,
   *             then it signifies that all of the dimensions in the group were requested, or are present in
   *             the response.</p>
   *          <p>Valid values for elements in the <code>Dimensions</code> array are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.application.name</code> - The name of the application that is connected to the database. Valid values are as follows: </p>
   *                <ul>
   *                   <li>
   *                      <p>Aurora PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon DocumentDB</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.id</code> - The host ID of the connected client (all engines).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.host.name</code> - The host name of the connected client (all engines).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.name</code> - The name of the database to which the client is connected. Valid values are as follows:</p>
   *                <ul>
   *                   <li>
   *                      <p>Aurora PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS PostgreSQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Aurora MySQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS MySQL</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon RDS MariaDB</p>
   *                   </li>
   *                   <li>
   *                      <p>Amazon DocumentDB</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.id</code> - The query ID generated by Performance Insights (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.db_id</code> - The query ID generated by the database (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.statement</code> - The text of the query that is being run (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.tokenized_id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.tokenized.id</code> - The query digest ID generated by Performance Insights (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.tokenized.db_id</code> - The query digest ID generated by Performance Insights (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.tokenized.statement</code> - The text of the query digest (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.session_type.name</code> - The type of the current session (only Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.id</code> - The hash of the full, non-tokenized SQL statement generated by Performance Insights (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with
   *                         <code>pi-</code> (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.statement</code> - The full text of the SQL statement that is running, as in <code>SELECT * FROM employees</code>
   *                     (all engines except Amazon DocumentDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.tokenized_id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights (all engines except Amazon DocumentDB). In the console,
   *                         <code>db.sql_tokenized.id</code> is called the Support ID because Amazon Web Services Support can look at this data to help you troubleshoot
   *                     database issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.db_id</code> - Either the native database ID used to refer to the SQL statement, or a synthetic ID such as
   *                         <code>pi-2372568224</code> that Performance Insights generates if the native database ID isn't available (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.statement</code> - The text of the SQL digest, as in <code>SELECT * FROM employees WHERE employee_id =
   *                         ?</code> (all engines except Amazon DocumentDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.id</code> - The ID of the user logged in to the database (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.user.name</code> - The name of the user logged in to the database (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.name</code> - The event for which the backend is waiting (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event.type</code> - The type of event for which the backend is waiting (all engines except Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_event_type.name</code> - The name of the event type for which the backend is waiting (all engines except
   *                     Amazon DocumentDB).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.wait_state.name</code> - The event for which the backend is waiting (only Amazon DocumentDB).</p>
   *             </li>
   *          </ul>
   */
  Dimensions?: string[];

  /**
   * @public
   * <p>The maximum number of items to fetch for this dimension group.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface DescribeDimensionKeysRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights will return metrics. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RDS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DOCDB</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from
   *             this data source.</p>
   *          <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value.
   *             For example, specify <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code>.
   *         </p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The date and time specifying the beginning of the requested time series data. You must specify a
   *             <code>StartTime</code> within the past 7 days. The value specified is <i>inclusive</i>,
   *             which means that data points equal to or greater than <code>StartTime</code> are returned.
   *         </p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.
   *         </p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The date and time specifying the end of the requested time series data. The value specified is
   *       <i>exclusive</i>, which means that data points less than (but not equal to) <code>EndTime</code> are
   *       returned.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - A scaled representation of the number of active sessions for the database engine. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine. </p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code>
   *             and <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than
   *             the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code>
   *             showing the scaled values, <code>db.sampledload.avg</code> showing the raw values, and
   *             <code>db.sampledload.avg</code> less than <code>db.load.avg</code>. For most use cases, you can
   *             query <code>db.load.avg</code> only.
   *         </p>
   */
  Metric: string | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as
   *             one second, or as long as one day (86400 seconds). Valid values are:
   *         </p>
   *          <ul>
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
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights chooses a value for you, with a
   *             goal of returning roughly 100-200 data points in the response.
   *         </p>
   */
  PeriodInSeconds?: number;

  /**
   * @public
   * <p>A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all
   *             dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return
   *             a limited number of values for a dimension. </p>
   */
  GroupBy: DimensionGroup | undefined;

  /**
   * @public
   * <p>Additional metrics for the top <code>N</code> dimension keys. If the specified dimension group in the <code>GroupBy</code> parameter is
   *                 <code>db.sql_tokenized</code>, you can specify per-SQL metrics to get the values for the top <code>N</code> SQL digests. The response
   *             syntax is as follows: <code>"AdditionalMetrics" : \{ "<i>string</i>" : "<i>string</i>" \}</code>. </p>
   */
  AdditionalMetrics?: string[];

  /**
   * @public
   * <p>For each dimension specified in <code>GroupBy</code>, specify a secondary dimension
   *             to further subdivide the partition keys in the response.
   *         </p>
   */
  PartitionBy?: DimensionGroup;

  /**
   * @public
   * <p>One or more filters to apply in the request. Restrictions:</p>
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
  Filter?: Record<string, string>;

  /**
   * @public
   * <p>The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a
   *             pagination token is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond
   *             the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object that includes the requested dimension key values and aggregated metric values
 *           within a dimension group.</p>
 */
export interface DimensionKeyDescription {
  /**
   * @public
   * <p>A map of name-value pairs for the dimensions in the group.</p>
   */
  Dimensions?: Record<string, string>;

  /**
   * @public
   * <p>The aggregated metric value for the dimensions, over the requested time range.</p>
   */
  Total?: number;

  /**
   * @public
   * <p>A map that contains the value for each additional metric.</p>
   */
  AdditionalMetrics?: Record<string, number>;

  /**
   * @public
   * <p>If <code>PartitionBy</code> was specified, <code>PartitionKeys</code> contains the dimensions that were.</p>
   */
  Partitions?: number[];
}

/**
 * @public
 * <p>If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code>
 *       request, the dimensions are returned in an array. Each element in the array specifies one
 *       dimension. </p>
 */
export interface ResponsePartitionKey {
  /**
   * @public
   * <p>A dimension map that contains the dimensions for this partition.</p>
   */
  Dimensions: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionKeysResponse {
  /**
   * @public
   * <p>The start time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>).
   *             <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>. </p>
   */
  AlignedStartTime?: Date;

  /**
   * @public
   * <p>The end time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>).
   *             <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>. </p>
   */
  AlignedEndTime?: Date;

  /**
   * @public
   * <p>If <code>PartitionBy</code> was present in the request, <code>PartitionKeys</code> contains the breakdown of dimension keys by the
   *             specified partitions. </p>
   */
  PartitionKeys?: ResponsePartitionKey[];

  /**
   * @public
   * <p>The dimension keys that were requested.</p>
   */
  Keys?: DimensionKeyDescription[];

  /**
   * @public
   * <p>A pagination token that indicates the response didn’t return all available records because <code>MaxRecords</code> was specified in the
   *             previous request. To get the remaining records, specify <code>NextToken</code> in a separate request with this value. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const DetailStatus = {
  AVAILABLE: "AVAILABLE",
  PROCESSING: "PROCESSING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type DetailStatus = (typeof DetailStatus)[keyof typeof DetailStatus];

/**
 * @public
 * <p>The information about a dimension.</p>
 */
export interface DimensionDetail {
  /**
   * @public
   * <p>The identifier of a dimension.</p>
   */
  Identifier?: string;
}

/**
 * @public
 * <p>Information about dimensions within a dimension group.</p>
 */
export interface DimensionGroupDetail {
  /**
   * @public
   * <p>The name of the dimension group.</p>
   */
  Group?: string;

  /**
   * @public
   * <p>The dimensions within a dimension group.</p>
   */
  Dimensions?: DimensionDetail[];
}

/**
 * @public
 * <p>An object that describes the details for a specified dimension.</p>
 */
export interface DimensionKeyDetail {
  /**
   * @public
   * <p>The value of the dimension detail data. Depending on the return status, this value is either the
   *           full or truncated SQL query for the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.query.statement</code> (Amazon DocumentDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.statement</code> (Amazon RDS and Aurora)</p>
   *             </li>
   *          </ul>
   */
  Value?: string;

  /**
   * @public
   * <p>The full name of the dimension. The full name includes the group name and key name. The following values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.query.statement</code> (Amazon DocumentDB)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.statement</code> (Amazon RDS and Aurora)</p>
   *             </li>
   *          </ul>
   */
  Dimension?: string;

  /**
   * @public
   * <p>The status of the dimension detail data. Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The dimension detail data is ready to be retrieved.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROCESSING</code> - The dimension detail data isn't ready to be retrieved because more processing time is required. If the
   *                     requested detail data has the status <code>PROCESSING</code>, Performance Insights returns the truncated query.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNAVAILABLE</code> - The dimension detail data could not be collected successfully.</p>
   *             </li>
   *          </ul>
   */
  Status?: DetailStatus | string;
}

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  DISABLED_PENDING_REBOOT: "DISABLED_PENDING_REBOOT",
  ENABLED: "ENABLED",
  ENABLED_PENDING_REBOOT: "ENABLED_PENDING_REBOOT",
  UNKNOWN: "UNKNOWN",
  UNSUPPORTED: "UNSUPPORTED",
} as const;

/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * <p>The metadata for a feature. For example, the metadata might indicate that a feature is
 *           turned on or off on a specific DB instance.</p>
 */
export interface FeatureMetadata {
  /**
   * @public
   * <p>The status of the feature on the DB instance. Possible values include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - The feature is enabled on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> - The feature is disabled on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSUPPORTED</code> - The feature isn't supported on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED_PENDING_REBOOT</code> - The feature is enabled on the instance but requires a reboot to take effect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED_PENDING_REBOOT</code> - The feature is disabled on the instance but requires a reboot to take effect.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> - The feature status couldn't be determined.</p>
   *             </li>
   *          </ul>
   */
  Status?: FeatureStatus | string;
}

/**
 * @public
 */
export interface GetDimensionKeyDetailsRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns data. The only valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>The ID for a data source from which to gather dimension data. This ID must be immutable and
   *           unique within an Amazon Web Services Region. When a DB instance is the data source, specify its
   *           <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.
   *       </p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The name of the dimension group. Performance Insights searches the specified group for the dimension group ID. The following group name values are
   *             valid:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.query</code> (Amazon DocumentDB only)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql</code> (Amazon RDS and Aurora only)</p>
   *             </li>
   *          </ul>
   */
  Group: string | undefined;

  /**
   * @public
   * <p>The ID of the dimension group from which to retrieve dimension details. For dimension group <code>db.sql</code>, the group ID is
   *                 <code>db.sql.id</code>. The following group ID values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.sql.id</code> for dimension group <code>db.sql</code> (Aurora and RDS only)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query.id</code> for dimension group <code>db.query</code> (DocumentDB only)</p>
   *             </li>
   *          </ul>
   */
  GroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A list of dimensions to retrieve the detail data for within the given dimension group. If you don't specify this parameter, Performance Insights returns
   *             all dimension data within the specified dimension group. Specify dimension names for the following dimension groups:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.sql</code> - Specify either the full dimension name <code>db.sql.statement</code> or the short dimension name
   *                         <code>statement</code> (Aurora and RDS only).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.query</code> - Specify either the full dimension name <code>db.query.statement</code> or the short dimension name
   *                         <code>statement</code> (DocumentDB only).</p>
   *             </li>
   *          </ul>
   */
  RequestedDimensions?: string[];
}

/**
 * @public
 */
export interface GetDimensionKeyDetailsResponse {
  /**
   * @public
   * <p>The details for the requested dimensions.</p>
   */
  Dimensions?: DimensionKeyDetail[];
}

/**
 * @public
 * @enum
 */
export const TextFormat = {
  MARKDOWN: "MARKDOWN",
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;

/**
 * @public
 */
export type TextFormat = (typeof TextFormat)[keyof typeof TextFormat];

/**
 * @public
 */
export interface GetPerformanceAnalysisReportRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights will return metrics. Valid value is
   *             <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers
   *             metrics from this data source. In the console, the identifier is shown as
   *             <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is
   *             returned as <code>DbiResourceId</code>.</p>
   *          <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify
   *             <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>A unique identifier of the created analysis report. For example,
   *             <code>report-12345678901234567</code>
   *          </p>
   */
  AnalysisReportId: string | undefined;

  /**
   * @public
   * <p>Indicates the text format in the report. The options are <code>PLAIN_TEXT</code> or <code>MARKDOWN</code>. The default
   *             value is <code>plain text</code>.</p>
   */
  TextFormat?: TextFormat | string;

  /**
   * @public
   * <p>The text language in the report. The default language is <code>EN_US</code> (English).
   *         </p>
   */
  AcceptLanguage?: AcceptLanguage | string;
}

/**
 * @public
 */
export interface GetResourceMetadataRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region.
   *             Performance Insights gathers metrics from this data source. To use a DB instance as a data source,
   *             specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.
   *         </p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceMetadataResponse {
  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region.
   *
   *       Performance Insights gathers metrics from this data source. To use a DB instance as a data source,
   *             specify its <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.
   *         </p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>The metadata for different features. For example, the metadata might indicate that a feature is
   *             turned on or off on a specific DB instance.</p>
   */
  Features?: Record<string, FeatureMetadata>;
}

/**
 * @public
 * <p>A single query to be processed. You must provide the metric to query. If no other
 *       parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can
 *       request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only
 *           those data points that match your criteria (<code>Filter</code>).</p>
 */
export interface MetricQuery {
  /**
   * @public
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - A scaled representation of the number of active sessions for the
   *                     database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>The counter metrics listed in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS">Performance Insights
   *                         operating system counters</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and <code>db.sampledload.avg</code> are the same
   *             value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the
   *             scaled values, <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less than
   *                 <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only.</p>
   */
  Metric: string | undefined;

  /**
   * @public
   * <p>A specification for how to aggregate the data points from a query result. You must
   *       specify a valid dimension group.  Performance Insights will return all of the dimensions within that group,
   *       unless you provide the names of specific dimensions within that group. You can also request
   *       that Performance Insights return a limited number of values for a dimension.</p>
   */
  GroupBy?: DimensionGroup;

  /**
   * @public
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
  Filter?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const PeriodAlignment = {
  END_TIME: "END_TIME",
  START_TIME: "START_TIME",
} as const;

/**
 * @public
 */
export type PeriodAlignment = (typeof PeriodAlignment)[keyof typeof PeriodAlignment];

/**
 * @public
 */
export interface GetResourceMetricsRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RDS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DOCDB</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the
   *             console, the identifier is shown as <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is
   *             returned as <code>DbiResourceId</code>.</p>
   *          <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify
   *                 <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>An array of one or more queries to perform. Each query must specify a Performance Insights metric, and can optionally specify aggregation and filtering
   *             criteria.</p>
   */
  MetricQueries: MetricQuery[] | undefined;

  /**
   * @public
   * <p>The date and time specifying the beginning of the requested time series query range. You can't
   *             specify a <code>StartTime</code> that is earlier than 7 days ago. By default, Performance Insights has 7 days of
   *             retention, but you can extend this range up to 2 years. The value specified is
   *             <i>inclusive</i>. Thus, the command returns data points equal to or greater
   *             than <code>StartTime</code>.</p>
   *          <p>The value for <code>StartTime</code> must be earlier than the value for <code>EndTime</code>.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The date and time specifying the end of the requested time series query range. The value
   *             specified is <i>exclusive</i>. Thus, the command returns data points less than
   *             (but not equal to) <code>EndTime</code>.</p>
   *          <p>The value for <code>EndTime</code> must be later than the value for <code>StartTime</code>.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400
   *             seconds). Valid values are:</p>
   *          <ul>
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
   *          <p>If you don't specify <code>PeriodInSeconds</code>, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data
   *             points in the response.</p>
   */
  PeriodInSeconds?: number;

  /**
   * @public
   * <p>The maximum number of items to return in the response. If more items exist than the specified <code>MaxRecords</code> value, a
   *             pagination token is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond
   *             the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The returned timestamp which is the start or end time of the time periods. The default value is <code>END_TIME</code>.</p>
   */
  PeriodAlignment?: PeriodAlignment | string;
}

/**
 * @public
 * <p>An object describing a Performance Insights metric and one or more dimensions for that metric.</p>
 */
export interface ResponseResourceMetricKey {
  /**
   * @public
   * <p>The name of a Performance Insights metric to be measured.</p>
   *          <p>Valid values for <code>Metric</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db.load.avg</code> - A scaled representation of the number of active sessions for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sampledload.avg</code> - The raw number of active sessions for the database engine.</p>
   *             </li>
   *             <li>
   *                <p>The counter metrics listed in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS">Performance Insights
   *                         operating system counters</a> in the <i>Amazon Aurora User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>If the number of active sessions is less than an internal Performance Insights threshold, <code>db.load.avg</code> and
   *           <code>db.sampledload.avg</code> are the same value. If the number of active sessions is greater than the
   *           internal threshold, Performance Insights samples the active sessions, with <code>db.load.avg</code> showing the scaled values,
   *           <code>db.sampledload.avg</code> showing the raw values, and <code>db.sampledload.avg</code> less
   *           than <code>db.load.avg</code>. For most use cases, you can query <code>db.load.avg</code> only.
   *       </p>
   */
  Metric: string | undefined;

  /**
   * @public
   * <p>The valid dimensions for the metric.</p>
   */
  Dimensions?: Record<string, string>;
}

/**
 * @public
 * <p>A time-ordered series of data points, corresponding to a dimension of a Performance Insights
 *       metric.</p>
 */
export interface MetricKeyDataPoints {
  /**
   * @public
   * <p>The dimensions to which the data points apply.</p>
   */
  Key?: ResponseResourceMetricKey;

  /**
   * @public
   * <p>An array of timestamp-value pairs, representing measurements over a period of time.</p>
   */
  DataPoints?: DataPoint[];
}

/**
 * @public
 */
export interface GetResourceMetricsResponse {
  /**
   * @public
   * <p>The start time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>).
   *                 <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * @public
   * <p>The end time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>).
   *                 <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the
   *             console, the identifier is shown as <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is
   *             returned as <code>DbiResourceId</code>.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>An array of metric results, where each array element contains all of the data points for a
   *           particular dimension.</p>
   */
  MetricList?: MetricKeyDataPoints[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *           the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailableResourceDimensionsRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers
   *             metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its
   *                 <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VWZ</code>. </p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The types of metrics for which to retrieve dimensions. Valid values include <code>db.load</code>.</p>
   */
  Metrics: string[] | undefined;

  /**
   * @public
   * <p>The maximum number of items to return in the response. If more items exist than the specified
   *             <code>MaxRecords</code> value, a pagination token is included in the response so that the remaining
   *             results can be retrieved.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *             the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The available dimension information for a metric type.</p>
 */
export interface MetricDimensionGroups {
  /**
   * @public
   * <p>The metric type to which the dimension information belongs.</p>
   */
  Metric?: string;

  /**
   * @public
   * <p>The available dimension groups for a metric type.</p>
   */
  Groups?: DimensionGroupDetail[];
}

/**
 * @public
 */
export interface ListAvailableResourceDimensionsResponse {
  /**
   * @public
   * <p>The dimension information returned for requested metric types.</p>
   */
  MetricDimensions?: MetricDimensionGroups[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *             the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAvailableResourceMetricsRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers
   *             metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its
   *                 <code>DbiResourceId</code> value. For example, specify <code>db-ABCDEFGHIJKLMNOPQRSTU1VWZ</code>. </p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The types of metrics to return in the response. Valid values in the array include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>os</code> (OS counter metrics) - All engines</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db</code> (DB load metrics) - All engines except for Amazon DocumentDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql.stats</code> (per-SQL metrics) - All engines except for Amazon DocumentDB</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db.sql_tokenized.stats</code> (per-SQL digest metrics) - All engines except for Amazon DocumentDB</p>
   *             </li>
   *          </ul>
   */
  MetricTypes: string[] | undefined;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request. If this parameter is specified,
   *           the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return. If the <code>MaxRecords</code> value is less than the number
   *             of existing items, the response includes a pagination token. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>An object that contains the full name, description, and unit of a metric.
 *       </p>
 */
export interface ResponseResourceMetric {
  /**
   * @public
   * <p>The full name of the metric.</p>
   */
  Metric?: string;

  /**
   * @public
   * <p>The description of the metric.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

/**
 * @public
 */
export interface ListAvailableResourceMetricsResponse {
  /**
   * @public
   * <p>An array of metrics available to query. Each array element contains the full name,
   *             description, and unit of the metric.
   *         </p>
   */
  Metrics?: ResponseResourceMetric[];

  /**
   * @public
   * <p>A pagination token that indicates the response didn’t return all available records because <code>MaxRecords</code> was specified in the
   *             previous request. To get the remaining records, specify <code>NextToken</code> in a separate request with this value. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportsRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics. Valid value is
   *             <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the
   *             console, the identifier is shown as <i>ResourceID</i>. When you call <code>DescribeDBInstances</code>, the identifier is
   *             returned as <code>DbiResourceId</code>.</p>
   *          <p>To use a DB instance as a data source, specify its <code>DbiResourceId</code> value. For example, specify
   *             <code>db-ABCDEFGHIJKLMNOPQRSTU1VW2X</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes only records beyond
   *             the token, up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return in the response. If more items exist than the specified <code>MaxResults</code> value, a
   *             pagination token is included in the response so that the remaining results can be retrieved. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specifies whether or not to include the list of tags in the response.</p>
   */
  ListTags?: boolean;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportsResponse {
  /**
   * @public
   * <p>List of reports including the report identifier, start and end time, creation time,
   *             and status.</p>
   */
  AnalysisReports?: AnalysisReportSummary[];

  /**
   * @public
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes only records beyond the token,
   *             up to the value specified by <code>MaxResults</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>Lists all the tags for the Amazon RDS Performance Insights resource. This value is an
   *             Amazon Resource Name (ARN). For information about creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Web Services service for which Performance Insights returns metrics. Valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is <code>RDS</code>.</p>
   */
  ServiceType: ServiceType | string | undefined;

  /**
   * @public
   * <p>The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The metadata assigned to an Amazon RDS Performance Insights resource consisting of a key-value pair.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Retrieves the list of performance issues which are identified.</p>
 */
export interface Insight {
  /**
   * @public
   * <p>The unique identifier for the insight. For example, <code>insight-12345678901234567</code>.</p>
   */
  InsightId: string | undefined;

  /**
   * @public
   * <p>The type of insight. For example, <code>HighDBLoad</code>, <code>HighCPU</code>, or <code>DominatingSQLs</code>.</p>
   */
  InsightType?: string;

  /**
   * @public
   * <p>Indicates if the insight is causal or correlated insight.</p>
   */
  Context?: ContextType | string;

  /**
   * @public
   * <p>The start time of the insight. For example, <code>2018-10-30T00:00:00Z</code>.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the insight. For example, <code>2018-10-30T00:00:00Z</code>.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The severity of the insight. The values are: <code>Low</code>, <code>Medium</code>, or <code>High</code>.</p>
   */
  Severity?: Severity | string;

  /**
   * @public
   * <p>List of supporting insights that provide additional factors for the insight.</p>
   */
  SupportingInsights?: Insight[];

  /**
   * @public
   * <p>Description of the insight. For example:
   *             <code>A high severity Insight found between 02:00 to 02:30,
   *                 where there was an unusually high DB load 600x above baseline.
   *                 Likely performance impact</code>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>List of recommendations for the insight.
   *             For example, <code>Investigate the following SQLs that contributed
   *                 to 100% of the total DBLoad during that time period: sql-id</code>.</p>
   */
  Recommendations?: Recommendation[];

  /**
   * @public
   * <p>List of data objects containing metrics and references from the time range while generating the insight.</p>
   */
  InsightData?: Data[];

  /**
   * @public
   * <p>
   *             Metric names and values from the timeframe
   *             used as baseline to generate the insight.</p>
   */
  BaselineData?: Data[];
}

/**
 * @public
 * <p>Retrieves the summary of the performance analysis report created for a time period.</p>
 */
export interface AnalysisReport {
  /**
   * @public
   * <p>The name of the analysis report.</p>
   */
  AnalysisReportId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the analysis report.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RDS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DOCDB</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ServiceType?: ServiceType | string;

  /**
   * @public
   * <p>The time you created the analysis report.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The analysis start time in the report.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The analysis end time in the report.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The status of the created analysis report.</p>
   */
  Status?: AnalysisStatus | string;

  /**
   * @public
   * <p>The list of identified insights in the analysis report.</p>
   */
  Insights?: Insight[];
}

/**
 * @public
 */
export interface GetPerformanceAnalysisReportResponse {
  /**
   * @public
   * <p>The summary of the performance analysis report created for a time period.</p>
   */
  AnalysisReport?: AnalysisReport;
}

/**
 * @internal
 */
export const RecommendationFilterSensitiveLog = (obj: Recommendation): any => ({
  ...obj,
  ...(obj.RecommendationDescription && { RecommendationDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InsightFilterSensitiveLog = (obj: Insight): any => ({
  ...obj,
  ...(obj.SupportingInsights && {
    SupportingInsights: obj.SupportingInsights.map((item) => InsightFilterSensitiveLog(item)),
  }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Recommendations && {
    Recommendations: obj.Recommendations.map((item) => RecommendationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AnalysisReportFilterSensitiveLog = (obj: AnalysisReport): any => ({
  ...obj,
  ...(obj.Insights && { Insights: obj.Insights.map((item) => InsightFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetPerformanceAnalysisReportResponseFilterSensitiveLog = (
  obj: GetPerformanceAnalysisReportResponse
): any => ({
  ...obj,
  ...(obj.AnalysisReport && { AnalysisReport: AnalysisReportFilterSensitiveLog(obj.AnalysisReport) }),
});
