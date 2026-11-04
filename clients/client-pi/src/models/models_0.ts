// smithy-typescript generated code
import type {
  AcceptLanguage,
  AnalysisStatus,
  ContextType,
  DetailStatus,
  FeatureStatus,
  FineGrainedAction,
  PeriodAlignment,
  ServiceType,
  Severity,
  TextFormat,
} from "./enums";

/**
 * This data type helps to determine Performance Insights metric to render for the insight.
 *
 * @public
 */
export interface PerformanceInsightsMetric {
  /**
   * The Performance Insights metric.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The Performance Insights metric name.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A dimension map that contains the dimensions for this partition.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * The filter for the Performance Insights metric.
   *
   * @public
   */
  Filter?: Record<string, string> | undefined;

  /**
   * The value of the metric. For example, `9` for `db.load.avg`.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * List of data objects which provide details about source metrics. This field can be used to determine the PI metric to render for the insight. This data type also includes static values for the metrics for the Insight that were calculated and included in text and annotations on the DB load chart.
 *
 * @public
 */
export interface Data {
  /**
   * This field determines the Performance Insights metric to render for the insight. The `name` field refers to a Performance Insights metric.
   *
   * @public
   */
  PerformanceInsightsMetric?: PerformanceInsightsMetric | undefined;
}

/**
 * The list of recommendations for the insight.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The unique identifier for the recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The recommendation details to help resolve the performance issue. For example, `Investigate the following SQLs that contributed to 100% of the total DBLoad during that time period: sql-id`
   *
   * @public
   */
  RecommendationDescription?: string | undefined;

  /**
   * Detailed information about the recommendation, including steps to resolve the performance issue.
   *
   * @public
   */
  RecommendationDetails?: string | undefined;
}

/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: `"^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$"`).
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p\{L\}\\p\{Z\}\\p\{N\}_.:/=+\\-@]*)$").
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Retrieves the details of the performance analysis report.
 *
 * @public
 */
export interface AnalysisReportSummary {
  /**
   * The name of the analysis report.
   *
   * @public
   */
  AnalysisReportId?: string | undefined;

  /**
   * The time you created the analysis report.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The start time of the analysis in the report.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the analysis in the report.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the analysis report.
   *
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * List of all the tags added to the analysis report.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePerformanceAnalysisReportRequest {
  /**
   * The Amazon Web Services service for which Performance Insights will return metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.
   *
   * To use an Amazon RDS instance as a data source, you specify its `DbiResourceId` value. For example, specify `db-ADECBTYHKTSAUMUZQYPDS2GW4A`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The start time defined for the analysis report.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time defined for the analysis report.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The metadata assigned to the analysis report consisting of a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePerformanceAnalysisReportResponse {
  /**
   * A unique identifier for the created analysis report.
   *
   * @public
   */
  AnalysisReportId?: string | undefined;
}

/**
 * A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
 *
 * @public
 */
export interface DataPoint {
  /**
   * The time, in epoch format, associated with a particular `Value`.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * The actual value associated with a particular `Timestamp`.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface DeletePerformanceAnalysisReportRequest {
  /**
   * The Amazon Web Services service for which Performance Insights will return metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The unique identifier of the analysis report for deletion.
   *
   * @public
   */
  AnalysisReportId: string | undefined;
}

/**
 * @public
 */
export interface DeletePerformanceAnalysisReportResponse {}

/**
 * A logical grouping of Performance Insights metrics for a related subject area. For example, the `db.sql` dimension group consists of the following dimensions:
 *
 * - `db.sql.id` - The hash of a running SQL statement, generated by Performance Insights.
 * - `db.sql.db_id` - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with `pi-`.
 * - `db.sql.statement` - The full text of the SQL statement that is running, for example, `SELECT * FROM employees`.
 * - `db.sql_tokenized.id` - The hash of the SQL digest generated by Performance Insights.
 *
 * > **Note:** Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.
 *
 * @public
 */
export interface DimensionGroup {
  /**
   * The name of the dimension group. Valid values are as follows:
   *
   * - `db` - The name of the database to which the client is connected. The following values are permitted:
   *
   *   - Aurora PostgreSQL
   *   - Amazon RDS PostgreSQL
   *   - Aurora MySQL
   *   - Amazon RDS MySQL
   *   - Amazon RDS MariaDB
   *   - Amazon DocumentDB
   * - `db.application` - The name of the application that is connected to the database. The following values are permitted:
   *
   *   - Aurora PostgreSQL
   *   - Amazon RDS PostgreSQL
   *   - Amazon DocumentDB
   * - `db.blocking_sql` - The SQL queries blocking the most DB load.
   * - `db.blocking_session` - The sessions blocking the most DB load.
   * - `db.blocking_object` - The object resources acquired by other sessions that are blocking the most DB load.
   * - `db.host` - The host name of the connected client (all engines).
   * - `db.plans` - The execution plans for the query (only Aurora PostgreSQL).
   * - `db.query` - The query that is currently running (only Amazon DocumentDB).
   * - `db.query_tokenized` - The digest query (only Amazon DocumentDB).
   * - `db.session_type` - The type of the current session (only Aurora PostgreSQL and RDS PostgreSQL).
   * - `db.sql` - The text of the SQL statement that is currently running (all engines except Amazon DocumentDB).
   * - `db.sql_tokenized` - The SQL digest (all engines except Amazon DocumentDB).
   * - `db.user` - The user logged in to the database (all engines except Amazon DocumentDB).
   * - `db.wait_event` - The event for which the database backend is waiting (all engines except Amazon DocumentDB).
   * - `db.wait_event_type` - The type of event for which the database backend is waiting (all engines except Amazon DocumentDB).
   * - `db.wait_state` - The event for which the database backend is waiting (only Amazon DocumentDB).
   *
   * @public
   */
  Group: string | undefined;

  /**
   * A list of specific dimensions from a dimension group. If this parameter is not present, then it signifies that all of the dimensions in the group were requested, or are present in the response.
   *
   * Valid values for elements in the `Dimensions` array are:
   *
   * - `db.application.name` - The name of the application that is connected to the database. Valid values are as follows:
   *
   *   - Aurora PostgreSQL
   *   - Amazon RDS PostgreSQL
   *   - Amazon DocumentDB
   * - `db.blocking_sql.id` - The ID for each of the SQL queries blocking the most DB load.
   * - `db.blocking_sql.sql` - The SQL text for each of the SQL queries blocking the most DB load.
   * - `db.blocking_session.id` - The ID for each of the sessions blocking the most DB load.
   * - `db.blocking_object.id` - The ID for each of the object resources acquired by other sessions that are blocking the most DB load.
   * - `db.blocking_object.type` - The object type for each of the object resources acquired by other sessions that are blocking the most DB load.
   * - `db.blocking_object.value` - The value for each of the object resources acquired by other sessions that are blocking the most DB load.
   * - `db.host.id` - The host ID of the connected client (all engines).
   * - `db.host.name` - The host name of the connected client (all engines).
   * - `db.name` - The name of the database to which the client is connected. Valid values are as follows:
   *
   *   - Aurora PostgreSQL
   *   - Amazon RDS PostgreSQL
   *   - Aurora MySQL
   *   - Amazon RDS MySQL
   *   - Amazon RDS MariaDB
   *   - Amazon DocumentDB
   * - `db.query.id` - The query ID generated by Performance Insights (only Amazon DocumentDB).
   * - `db.query.db_id` - The query ID generated by the database (only Amazon DocumentDB).
   * - `db.query.statement` - The text of the query that is being run (only Amazon DocumentDB).
   * - `db.query.tokenized_id`
   * - `db.query.tokenized.id` - The query digest ID generated by Performance Insights (only Amazon DocumentDB).
   * - `db.query.tokenized.db_id` - The query digest ID generated by Performance Insights (only Amazon DocumentDB).
   * - `db.query.tokenized.statement` - The text of the query digest (only Amazon DocumentDB).
   * - `db.session_type.name` - The type of the current session (only Amazon DocumentDB).
   * - `db.sql.id` - The hash of the full, non-tokenized SQL statement generated by Performance Insights (all engines except Amazon DocumentDB).
   * - `db.sql.db_id` - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with `pi-` (all engines except Amazon DocumentDB).
   * - `db.sql.statement` - The full text of the SQL statement that is running, as in `SELECT * FROM employees` (all engines except Amazon DocumentDB)
   * - `db.sql.tokenized_id` - The hash of the SQL digest generated by Performance Insights (all engines except Amazon DocumentDB). The `db.sql.tokenized_id` dimension fetches the value of the `db.sql_tokenized.id` dimension. Amazon RDS returns `db.sql.tokenized_id` from the `db.sql` dimension group.
   * - `db.sql_tokenized.id` - The hash of the SQL digest generated by Performance Insights (all engines except Amazon DocumentDB). In the console, `db.sql_tokenized.id` is called the Support ID because Amazon Web Services Support can look at this data to help you troubleshoot database issues.
   * - `db.sql_tokenized.db_id` - Either the native database ID used to refer to the SQL statement, or a synthetic ID such as `pi-2372568224` that Performance Insights generates if the native database ID isn't available (all engines except Amazon DocumentDB).
   * - `db.sql_tokenized.statement` - The text of the SQL digest, as in `SELECT * FROM employees WHERE employee_id = ?` (all engines except Amazon DocumentDB)
   * - `db.user.id` - The ID of the user logged in to the database (all engines except Amazon DocumentDB).
   * - `db.user.name` - The name of the user logged in to the database (all engines except Amazon DocumentDB).
   * - `db.wait_event.name` - The event for which the backend is waiting (all engines except Amazon DocumentDB).
   * - `db.wait_event.type` - The type of event for which the backend is waiting (all engines except Amazon DocumentDB).
   * - `db.wait_event_type.name` - The name of the event type for which the backend is waiting (all engines except Amazon DocumentDB).
   * - `db.wait_state.name` - The event for which the backend is waiting (only Amazon DocumentDB).
   *
   * @public
   */
  Dimensions?: string[] | undefined;

  /**
   * The maximum number of items to fetch for this dimension group.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionKeysRequest {
  /**
   * The Amazon Web Services service for which Performance Insights will return metrics. Valid values are as follows:
   *
   * - `RDS`
   * - `DOCDB`
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.
   *
   * To use an Amazon RDS instance as a data source, you specify its `DbiResourceId` value. For example, specify `db-FAIHNTYBKTGAUSUZQYPDS2GW4A`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The date and time specifying the beginning of the requested time series data. You must specify a `StartTime` within the past 7 days. The value specified is *inclusive*, which means that data points equal to or greater than `StartTime` are returned.
   *
   * The value for `StartTime` must be earlier than the value for `EndTime`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The date and time specifying the end of the requested time series data. The value specified is *exclusive*, which means that data points less than (but not equal to) `EndTime` are returned.
   *
   * The value for `EndTime` must be later than the value for `StartTime`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The name of a Performance Insights metric to be measured.
   *
   * Valid values for `Metric` are:
   *
   * - `db.load.avg` - A scaled representation of the number of active sessions for the database engine.
   * - `db.sampledload.avg` - The raw number of active sessions for the database engine.
   *
   * If the number of active sessions is less than an internal Performance Insights threshold, `db.load.avg` and `db.sampledload.avg` are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with `db.load.avg` showing the scaled values, `db.sampledload.avg` showing the raw values, and `db.sampledload.avg` less than `db.load.avg`. For most use cases, you can query `db.load.avg` only.
   *
   * @public
   */
  Metric: string | undefined;

  /**
   * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:
   *
   * - `1` (one second)
   * - `60` (one minute)
   * - `300` (five minutes)
   * - `3600` (one hour)
   * - `86400` (twenty-four hours)
   *
   * If you don't specify `PeriodInSeconds`, then Performance Insights chooses a value for you, with a goal of returning roughly 100-200 data points in the response.
   *
   * @public
   */
  PeriodInSeconds?: number | undefined;

  /**
   * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return a limited number of values for a dimension.
   *
   * @public
   */
  GroupBy: DimensionGroup | undefined;

  /**
   * Additional metrics for the top `N` dimension keys. If the specified dimension group in the `GroupBy` parameter is `db.sql_tokenized`, you can specify per-SQL metrics to get the values for the top `N` SQL digests. The response syntax is as follows: `"AdditionalMetrics" : \{ "string" : "string" \}`.
   *
   * The only supported statistic function is `.avg`.
   *
   * @public
   */
  AdditionalMetrics?: string[] | undefined;

  /**
   * For each dimension specified in `GroupBy`, specify a secondary dimension to further subdivide the partition keys in the response.
   *
   * @public
   */
  PartitionBy?: DimensionGroup | undefined;

  /**
   * One or more filters to apply in the request. Restrictions:
   *
   * - Any number of filters by the same dimension, as specified in the `GroupBy` or `Partition` parameters.
   * - A single filter for any other dimension in this dimension group.
   *
   * > **Note:** The `db.sql.db_id` filter isn't available for RDS for SQL Server DB instances.
   *
   * @public
   */
  Filter?: Record<string, string> | undefined;

  /**
   * The maximum number of items to return in the response. If more items exist than the specified `MaxRecords` value, a pagination token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that includes the requested dimension key values and aggregated metric values within a dimension group.
 *
 * @public
 */
export interface DimensionKeyDescription {
  /**
   * A map of name-value pairs for the dimensions in the group.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * The aggregated metric value for the dimensions, over the requested time range.
   *
   * @public
   */
  Total?: number | undefined;

  /**
   * A map that contains the value for each additional metric.
   *
   * @public
   */
  AdditionalMetrics?: Record<string, number> | undefined;

  /**
   * If `PartitionBy` was specified, `PartitionKeys` contains the dimensions that were.
   *
   * @public
   */
  Partitions?: number[] | undefined;
}

/**
 * If `PartitionBy` was specified in a `DescribeDimensionKeys` request, the dimensions are returned in an array. Each element in the array specifies one dimension.
 *
 * @public
 */
export interface ResponsePartitionKey {
  /**
   * A dimension map that contains the dimensions for this partition.
   *
   * @public
   */
  Dimensions: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionKeysResponse {
  /**
   * The start time for the returned dimension keys, after alignment to a granular boundary (as specified by `PeriodInSeconds`). `AlignedStartTime` will be less than or equal to the value of the user-specified `StartTime`.
   *
   * @public
   */
  AlignedStartTime?: Date | undefined;

  /**
   * The end time for the returned dimension keys, after alignment to a granular boundary (as specified by `PeriodInSeconds`). `AlignedEndTime` will be greater than or equal to the value of the user-specified `Endtime`.
   *
   * @public
   */
  AlignedEndTime?: Date | undefined;

  /**
   * If `PartitionBy` was present in the request, `PartitionKeys` contains the breakdown of dimension keys by the specified partitions.
   *
   * @public
   */
  PartitionKeys?: ResponsePartitionKey[] | undefined;

  /**
   * The dimension keys that were requested.
   *
   * @public
   */
  Keys?: DimensionKeyDescription[] | undefined;

  /**
   * A pagination token that indicates the response didn’t return all available records because `MaxRecords` was specified in the previous request. To get the remaining records, specify `NextToken` in a separate request with this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The information about a dimension.
 *
 * @public
 */
export interface DimensionDetail {
  /**
   * The identifier of a dimension.
   *
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * Information about dimensions within a dimension group.
 *
 * @public
 */
export interface DimensionGroupDetail {
  /**
   * The name of the dimension group.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The dimensions within a dimension group.
   *
   * @public
   */
  Dimensions?: DimensionDetail[] | undefined;
}

/**
 * An object that describes the details for a specified dimension.
 *
 * @public
 */
export interface DimensionKeyDetail {
  /**
   * The value of the dimension detail data. Depending on the return status, this value is either the full or truncated SQL query for the following dimensions:
   *
   * - `db.query.statement` (Amazon DocumentDB)
   * - `db.sql.statement` (Amazon RDS and Aurora)
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The full name of the dimension. The full name includes the group name and key name. The following values are valid:
   *
   * - `db.query.statement` (Amazon DocumentDB)
   * - `db.sql.statement` (Amazon RDS and Aurora)
   *
   * @public
   */
  Dimension?: string | undefined;

  /**
   * The status of the dimension detail data. Possible values include the following:
   *
   * - `AVAILABLE` - The dimension detail data is ready to be retrieved.
   * - `PROCESSING` - The dimension detail data isn't ready to be retrieved because more processing time is required. If the requested detail data has the status `PROCESSING`, Performance Insights returns the truncated query.
   * - `UNAVAILABLE` - The dimension detail data could not be collected successfully.
   *
   * @public
   */
  Status?: DetailStatus | undefined;
}

/**
 * The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
 *
 * @public
 */
export interface FeatureMetadata {
  /**
   * The status of the feature on the DB instance. Possible values include the following:
   *
   * - `ENABLED` - The feature is enabled on the instance.
   * - `DISABLED` - The feature is disabled on the instance.
   * - `UNSUPPORTED` - The feature isn't supported on the instance.
   * - `ENABLED_PENDING_REBOOT` - The feature is enabled on the instance but requires a reboot to take effect.
   * - `DISABLED_PENDING_REBOOT` - The feature is disabled on the instance but requires a reboot to take effect.
   * - `UNKNOWN` - The feature status couldn't be determined.
   *
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * @public
 */
export interface GetDimensionKeyDetailsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns data. The only valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * The ID for a data source from which to gather dimension data. This ID must be immutable and unique within an Amazon Web Services Region. When a DB instance is the data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the dimension group. Performance Insights searches the specified group for the dimension group ID. The following group name values are valid:
   *
   * - `db.execution_plan` (Amazon RDS and Aurora only)
   * - `db.lock_snapshot` (Aurora only)
   * - `db.query` (Amazon DocumentDB only)
   * - `db.sql` (Amazon RDS and Aurora only)
   *
   * @public
   */
  Group: string | undefined;

  /**
   * The ID of the dimension group from which to retrieve dimension details. For dimension group `db.sql`, the group ID is `db.sql.id`. The following group ID values are valid:
   *
   * - `db.execution_plan.id` for dimension group `db.execution_plan` (Aurora and RDS only)
   * - `db.sql.id` for dimension group `db.sql` (Aurora and RDS only)
   * - `db.query.id` for dimension group `db.query` (DocumentDB only)
   * - For the dimension group `db.lock_snapshot`, the `GroupIdentifier` is the epoch timestamp when Performance Insights captured the snapshot, in seconds. You can retrieve this value with the `GetResourceMetrics` operation for a 1 second period.
   *
   * @public
   */
  GroupIdentifier: string | undefined;

  /**
   * A list of dimensions to retrieve the detail data for within the given dimension group. If you don't specify this parameter, Performance Insights returns all dimension data within the specified dimension group. Specify dimension names for the following dimension groups:
   *
   * - `db.execution_plan` - Specify the dimension name `db.execution_plan.raw_plan` or the short dimension name `raw_plan` (Amazon RDS and Aurora only)
   * - `db.lock_snapshot` - Specify the dimension name `db.lock_snapshot.lock_trees` or the short dimension name `lock_trees`. (Aurora only)
   * - `db.sql` - Specify either the full dimension name `db.sql.statement` or the short dimension name `statement` (Aurora and RDS only).
   * - `db.query` - Specify either the full dimension name `db.query.statement` or the short dimension name `statement` (DocumentDB only).
   *
   * @public
   */
  RequestedDimensions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDimensionKeyDetailsResponse {
  /**
   * The details for the requested dimensions.
   *
   * @public
   */
  Dimensions?: DimensionKeyDetail[] | undefined;
}

/**
 * @public
 */
export interface GetPerformanceAnalysisReportRequest {
  /**
   * The Amazon Web Services service for which Performance Insights will return metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique identifier of the created analysis report. For example, `report-12345678901234567`
   *
   * @public
   */
  AnalysisReportId: string | undefined;

  /**
   * Indicates the text format in the report. The options are `PLAIN_TEXT` or `MARKDOWN`. The default value is `plain text`.
   *
   * @public
   */
  TextFormat?: TextFormat | undefined;

  /**
   * The text language in the report. The default language is `EN_US` (English).
   *
   * @public
   */
  AcceptLanguage?: AcceptLanguage | undefined;
}

/**
 * @public
 */
export interface GetResourceMetadataRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourceMetadataResponse {
  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
   *
   * @public
   */
  Features?: Record<string, FeatureMetadata> | undefined;
}

/**
 * A single query to be processed. You must provide the metric to query and append an aggregate function to the metric. For example, to find the average for the metric `db.load` you must use `db.load.avg`. Valid values for aggregate functions include `.avg`, `.min`, `.max`, and `.sum`. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (`GroupBy`), and return only those data points that match your criteria (`Filter`).
 *
 * @public
 */
export interface MetricQuery {
  /**
   * The name of a Performance Insights metric to be measured.
   *
   * Valid values for `Metric` are:
   *
   * - `db.load.avg` - A scaled representation of the number of active sessions for the database engine.
   * - `db.sampledload.avg` - The raw number of active sessions for the database engine.
   * - The counter metrics listed in [Performance Insights operating system counters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS) in the *Amazon Aurora User Guide*.
   * - The counter metrics listed in [Performance Insights operating system counters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS) in the *Amazon RDS User Guide*.
   *
   * If the number of active sessions is less than an internal Performance Insights threshold, `db.load.avg` and `db.sampledload.avg` are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with `db.load.avg` showing the scaled values, `db.sampledload.avg` showing the raw values, and `db.sampledload.avg` less than `db.load.avg`. For most use cases, you can query `db.load.avg` only.
   *
   * @public
   */
  Metric: string | undefined;

  /**
   * A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights will return all of the dimensions within that group, unless you provide the names of specific dimensions within that group. You can also request that Performance Insights return a limited number of values for a dimension.
   *
   * @public
   */
  GroupBy?: DimensionGroup | undefined;

  /**
   * One or more filters to apply in the request. Restrictions:
   *
   * - Any number of filters by the same dimension, as specified in the `GroupBy` parameter.
   * - A single filter for any other dimension in this dimension group.
   *
   * > **Note:** The `db.sql.db_id` filter isn't available for RDS for SQL Server DB instances.
   *
   * @public
   */
  Filter?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetResourceMetricsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:
   *
   * - `RDS`
   * - `DOCDB`
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An array of one or more queries to perform. Each query must specify a Performance Insights metric and specify an aggregate function, and you can provide filtering criteria. You must append the aggregate function to the metric. For example, to find the average for the metric `db.load` you must use `db.load.avg`. Valid values for aggregate functions include `.avg`, `.min`, `.max`, and `.sum`.
   *
   * @public
   */
  MetricQueries: MetricQuery[] | undefined;

  /**
   * The date and time specifying the beginning of the requested time series query range. You can't specify a `StartTime` that is earlier than 7 days ago. By default, Performance Insights has 7 days of retention, but you can extend this range up to 2 years. The value specified is *inclusive*. Thus, the command returns data points equal to or greater than `StartTime`.
   *
   * The value for `StartTime` must be earlier than the value for `EndTime`.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The date and time specifying the end of the requested time series query range. The value specified is *exclusive*. Thus, the command returns data points less than (but not equal to) `EndTime`.
   *
   * The value for `EndTime` must be later than the value for `StartTime`.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:
   *
   * - `1` (one second)
   * - `60` (one minute)
   * - `300` (five minutes)
   * - `3600` (one hour)
   * - `86400` (twenty-four hours)
   *
   * If you don't specify `PeriodInSeconds`, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.
   *
   * @public
   */
  PeriodInSeconds?: number | undefined;

  /**
   * The maximum number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The returned timestamp which is the start or end time of the time periods. The default value is `END_TIME`.
   *
   * @public
   */
  PeriodAlignment?: PeriodAlignment | undefined;
}

/**
 * An object describing a Performance Insights metric and one or more dimensions for that metric.
 *
 * @public
 */
export interface ResponseResourceMetricKey {
  /**
   * The name of a Performance Insights metric to be measured.
   *
   * Valid values for `Metric` are:
   *
   * - `db.load.avg` - A scaled representation of the number of active sessions for the database engine.
   * - `db.sampledload.avg` - The raw number of active sessions for the database engine.
   * - The counter metrics listed in [Performance Insights operating system counters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS) in the *Amazon Aurora User Guide*.
   * - The counter metrics listed in [Performance Insights operating system counters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights_Counters.html#USER_PerfInsights_Counters.OS) in the *Amazon RDS User Guide*.
   *
   * If the number of active sessions is less than an internal Performance Insights threshold, `db.load.avg` and `db.sampledload.avg` are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with `db.load.avg` showing the scaled values, `db.sampledload.avg` showing the raw values, and `db.sampledload.avg` less than `db.load.avg`. For most use cases, you can query `db.load.avg` only.
   *
   * @public
   */
  Metric: string | undefined;

  /**
   * The valid dimensions for the metric.
   *
   * @public
   */
  Dimensions?: Record<string, string> | undefined;
}

/**
 * A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
 *
 * @public
 */
export interface MetricKeyDataPoints {
  /**
   * The dimensions to which the data points apply.
   *
   * @public
   */
  Key?: ResponseResourceMetricKey | undefined;

  /**
   * An array of timestamp-value pairs, representing measurements over a period of time.
   *
   * @public
   */
  DataPoints?: DataPoint[] | undefined;
}

/**
 * @public
 */
export interface GetResourceMetricsResponse {
  /**
   * The start time for the returned metrics, after alignment to a granular boundary (as specified by `PeriodInSeconds`). `AlignedStartTime` will be less than or equal to the value of the user-specified `StartTime`.
   *
   * @public
   */
  AlignedStartTime?: Date | undefined;

  /**
   * The end time for the returned metrics, after alignment to a granular boundary (as specified by `PeriodInSeconds`). `AlignedEndTime` will be greater than or equal to the value of the user-specified `Endtime`.
   *
   * @public
   */
  AlignedEndTime?: Date | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * An array of metric results, where each array element contains all of the data points for a particular dimension.
   *
   * @public
   */
  MetricList?: MetricKeyDataPoints[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableResourceDimensionsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VWZ`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The types of metrics for which to retrieve dimensions. Valid values include `db.load`.
   *
   * @public
   */
  Metrics: string[] | undefined;

  /**
   * The maximum number of items to return in the response. If more items exist than the specified `MaxRecords` value, a pagination token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The actions to discover the dimensions you are authorized to access. If you specify multiple actions, then the response will contain the dimensions common for all the actions.
   *
   * When you don't specify this request parameter or provide an empty list, the response contains all the available dimensions for the target database engine whether or not you are authorized to access them.
   *
   * @public
   */
  AuthorizedActions?: FineGrainedAction[] | undefined;
}

/**
 * The available dimension information for a metric type.
 *
 * @public
 */
export interface MetricDimensionGroups {
  /**
   * The metric type to which the dimension information belongs.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The available dimension groups for a metric type.
   *
   * @public
   */
  Groups?: DimensionGroupDetail[] | undefined;
}

/**
 * @public
 */
export interface ListAvailableResourceDimensionsResponse {
  /**
   * The dimension information returned for requested metric types.
   *
   * @public
   */
  MetricDimensions?: MetricDimensionGroups[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableResourceMetricsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VWZ`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The types of metrics to return in the response. Valid values in the array include the following:
   *
   * - `os` (OS counter metrics) - All engines
   * - `db` (DB load metrics) - All engines except for Amazon DocumentDB
   * - `db.sql.stats` (per-SQL metrics) - All engines except for Amazon DocumentDB
   * - `db.sql_tokenized.stats` (per-SQL digest metrics) - All engines except for Amazon DocumentDB
   *
   * @public
   */
  MetricTypes: string[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxRecords`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return. If the `MaxRecords` value is less than the number of existing items, the response includes a pagination token.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object that contains the full name, description, and unit of a metric.
 *
 * @public
 */
export interface ResponseResourceMetric {
  /**
   * The full name of the metric.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The description of the metric.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unit of the metric.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableResourceMetricsResponse {
  /**
   * An array of metrics available to query. Each array element contains the full name, description, and unit of the metric.
   *
   * @public
   */
  Metrics?: ResponseResourceMetric[] | undefined;

  /**
   * A pagination token that indicates the response didn’t return all available records because `MaxRecords` was specified in the previous request. To get the remaining records, specify `NextToken` in a separate request with this value.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportRecommendationsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A unique identifier of the created analysis report. For example, `report-12345678901234567`
   *
   * @public
   */
  AnalysisReportId: string | undefined;

  /**
   * A list of recommendation identifiers to filter the results.
   *
   * @public
   */
  RecommendationIds?: string[] | undefined;

  /**
   * The maximum number of items to return in the response. If more items exist than the specified `MaxResults` value, a pagination token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportRecommendationsResponse {
  /**
   * The list of recommendations for the analysis report.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportsRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as *ResourceID*. When you call `DescribeDBInstances`, the identifier is returned as `DbiResourceId`.
   *
   * To use a DB instance as a data source, specify its `DbiResourceId` value. For example, specify `db-ABCDEFGHIJKLMNOPQRSTU1VW2X`.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return in the response. If more items exist than the specified `MaxResults` value, a pagination token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies whether or not to include the list of tags in the response.
   *
   * @public
   */
  ListTags?: boolean | undefined;
}

/**
 * @public
 */
export interface ListPerformanceAnalysisReportsResponse {
  /**
   * List of reports including the report identifier, start and end time, creation time, and status.
   *
   * @public
   */
  AnalysisReports?: AnalysisReportSummary[] | undefined;

  /**
   * An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by `MaxResults`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * Lists all the tags for the Amazon RDS Performance Insights resource. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Web Services service for which Performance Insights returns metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   *
   * @public
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
   * List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is `RDS`.
   *
   * @public
   */
  ServiceType: ServiceType | undefined;

  /**
   * The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see [Constructing an RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing).
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The metadata assigned to an Amazon RDS Performance Insights resource consisting of a key-value pair.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Retrieves the list of performance issues which are identified.
 *
 * @public
 */
export interface Insight {
  /**
   * The unique identifier for the insight. For example, `insight-12345678901234567`.
   *
   * @public
   */
  InsightId: string | undefined;

  /**
   * The type of insight. For example, `HighDBLoad`, `HighCPU`, or `DominatingSQLs`.
   *
   * @public
   */
  InsightType?: string | undefined;

  /**
   * Indicates if the insight is causal or correlated insight.
   *
   * @public
   */
  Context?: ContextType | undefined;

  /**
   * The start time of the insight. For example, `2018-10-30T00:00:00Z`.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the insight. For example, `2018-10-30T00:00:00Z`.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The severity of the insight. The values are: `Low`, `Medium`, or `High`.
   *
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * List of supporting insights that provide additional factors for the insight.
   *
   * @public
   */
  SupportingInsights?: Insight[] | undefined;

  /**
   * Description of the insight. For example: `A high severity Insight found between 02:00 to 02:30, where there was an unusually high DB load 600x above baseline. Likely performance impact`.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * List of recommendations for the insight. For example, `Investigate the following SQLs that contributed to 100% of the total DBLoad during that time period: sql-id`.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * List of data objects containing metrics and references from the time range while generating the insight.
   *
   * @public
   */
  InsightData?: Data[] | undefined;

  /**
   * Metric names and values from the timeframe used as baseline to generate the insight.
   *
   * @public
   */
  BaselineData?: Data[] | undefined;
}

/**
 * Retrieves the summary of the performance analysis report created for a time period.
 *
 * @public
 */
export interface AnalysisReport {
  /**
   * The name of the analysis report.
   *
   * @public
   */
  AnalysisReportId: string | undefined;

  /**
   * The unique identifier of the analysis report.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:
   *
   * - `RDS`
   * - `DOCDB`
   *
   * @public
   */
  ServiceType?: ServiceType | undefined;

  /**
   * The time you created the analysis report.
   *
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * The analysis start time in the report.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The analysis end time in the report.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the created analysis report.
   *
   * @public
   */
  Status?: AnalysisStatus | undefined;

  /**
   * The list of identified insights in the analysis report.
   *
   * @public
   */
  Insights?: Insight[] | undefined;
}

/**
 * @public
 */
export interface GetPerformanceAnalysisReportResponse {
  /**
   * The summary of the performance analysis report created for a time period.
   *
   * @public
   */
  AnalysisReport?: AnalysisReport | undefined;
}
