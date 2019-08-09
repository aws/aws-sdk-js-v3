import { _BaseKpiResult, _UnmarshalledBaseKpiResult } from "./_BaseKpiResult";

/**
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
 */
export interface _ApplicationDateRangeKpiResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string;

  /**
   * <p>The last date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of valid values, see the <a href="developerguide.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: _BaseKpiResult;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the App Metrics resource. The App Metrics resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * <p>The first date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | string | number;
}

export interface _UnmarshalledApplicationDateRangeKpiResponse
  extends _ApplicationDateRangeKpiResponse {
  /**
   * <p>The last date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: _UnmarshalledBaseKpiResult;

  /**
   * <p>The first date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date;
}
