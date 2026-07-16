// smithy-typescript generated code
import type {
  Dimension,
  EmissionsType,
  EmissionsUnit,
  TimeGranularity,
  WaterAllocationType,
  WaterAllocationUnit,
} from "./enums";

/**
 * <p>Filters environmental impact values by specific dimension values.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>Filters environmental impact values by specific dimension values.</p>
   * @public
   */
  Dimensions?: Partial<Record<Dimension, string[]>> | undefined;
}

/**
 * <p> Contains configuration for the fiscal year granularities (e.g., <code>YEARLY_FISCAL</code>, <code>QUARTERLY_FISCAL</code>. </p>
 * @public
 */
export interface GranularityConfiguration {
  /**
   * <p> The month (1-12) when the fiscal year begins. Used for <code>YEARLY_FISCAL</code> and <code>QUARTERLY_FISCAL</code> granularity. Defaults to 1 (January). </p>
   * @public
   */
  FiscalYearStartMonth?: number | undefined;
}

/**
 * <p>Represents a duration of time defined by start and end timestamps.</p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>The start (inclusive) of the time period. ISO-8601 formatted timestamp, for example: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> </p>
   * @public
   */
  Start: Date | undefined;

  /**
   * <p>The end (exclusive) of the time period. ISO-8601 formatted timestamp, for example: <code>YYYY-MM-DDThh:mm:ss.sssZ</code> </p>
   * @public
   */
  End: Date | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsRequest {
  /**
   * <p> The date range for fetching estimated carbon emissions. The range must include the start date of a month for that month's data to be included in the response. </p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated carbon emissions.</p>
   * @public
   */
  GroupBy?: Dimension[] | undefined;

  /**
   * <p> The criteria for filtering estimated carbon emissions. To determine which dimensions are available to be filtered by, you can first call <a>GetEstimatedCarbonEmissionsDimensionValues</a> </p>
   * @public
   */
  FilterBy?: FilterExpression | undefined;

  /**
   * <p>The emission types to include in the results. If absent, returns <code>TOTAL_LBM_CARBON_EMISSIONS</code> and <code>TOTAL_MBM_CARBON_EMISSIONS</code> emissions types. </p>
   * @public
   */
  EmissionsTypes?: EmissionsType[] | undefined;

  /**
   * <p> The time granularity for the results. If absent, uses <code>MONTHLY</code> time granularity. The smallest supported granularity for carbon emissions is <code>MONTHLY</code>. </p> <p> If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting <code>2025-04-01T00:00:00Z</code> to <code>2026-04-01T00:00:00Z</code> with <code>YEARLY_CALENDAR</code> granularity will return the last 9 months for 2025 and the first 3 months of 2026. </p>
   * @public
   */
  Granularity?: TimeGranularity | undefined;

  /**
   * <p>Configuration for fiscal year calculations when using <code>YEARLY_FISCAL</code> or <code>QUARTERLY_FISCAL</code> granularity. </p>
   * @public
   */
  GranularityConfiguration?: GranularityConfiguration | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a carbon emissions quantity with its value and unit of measurement.</p>
 * @public
 */
export interface Emissions {
  /**
   * <p>The numeric value of the emissions quantity.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The unit of measurement for the emissions value.</p>
   * @public
   */
  Unit: EmissionsUnit | undefined;
}

/**
 * <p>Contains estimated carbon emissions data for a specific time period and dimension grouping.</p>
 * @public
 */
export interface EstimatedCarbonEmissions {
  /**
   * <p>The reporting period for emission values.</p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions used to group emissions values.</p>
   * @public
   */
  DimensionsValues: Partial<Record<Dimension, string>> | undefined;

  /**
   * <p>The semantic version-formatted string that indicates the methodology version used to calculate the emission values. </p> <note> <p> The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different <code>ModelVersion</code> values. To track the evolution of the methodology and compare emission values from previous versions, we recommend creating a <a href="https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html">Data Export</a>. </p> </note>
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * <p>The emissions values for the requested emissions types.</p>
   * @public
   */
  EmissionsValues: Partial<Record<EmissionsType, Emissions>> | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsResponse {
  /**
   * <p>The result of the requested inputs.</p>
   * @public
   */
  Results: EstimatedCarbonEmissions[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesRequest {
  /**
   * <p> The date range for fetching the dimension values. The range must include the start date of a month for that month's dimensions to be included in the response. </p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated carbon emissions.</p>
   * @public
   */
  Dimensions: Dimension[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a dimension and its corresponding value.</p>
 * @public
 */
export interface DimensionEntry {
  /**
   * <p>The dimension type that categorizes this entry.</p>
   * @public
   */
  Dimension: Dimension | undefined;

  /**
   * <p> The value for the specified dimension. Valid values vary based on the dimension type (e.g., <code>us-east-1</code> for the <code>REGION</code> dimension, <code>AmazonEC2</code> for the <code>SERVICE</code> dimension). </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesResponse {
  /**
   * <p>The list of possible dimensions over which the emissions data is aggregated.</p>
   * @public
   */
  Results?: DimensionEntry[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationRequest {
  /**
   * <p> The date range for fetching estimated water allocation. The range must include the start date of a year for that year's data to be included in the response. </p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated water allocation.</p>
   * @public
   */
  GroupBy?: Dimension[] | undefined;

  /**
   * <p> The criteria for filtering estimated water allocation. To determine which dimensions are available to be filtered by, you can first call <a>GetEstimatedWaterAllocationDimensionValues</a> </p>
   * @public
   */
  FilterBy?: FilterExpression | undefined;

  /**
   * <p>The allocation types to include in the results. If absent, returns <code>TOTAL_WATER_WITHDRAWALS</code> allocation types. </p>
   * @public
   */
  AllocationTypes?: WaterAllocationType[] | undefined;

  /**
   * <p>The time granularity for the results. Only <code>YEARLY_CALENDAR</code> time granularity is currently supported for water allocation. Defaults to <code>YEARLY_CALENDAR</code> if absent.</p> <p> If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting <code>2025-04-01T00:00:00Z</code> to <code>2026-04-01T00:00:00Z</code> with <code>YEARLY_CALENDAR</code> will return all the data for 2026 only. </p>
   * @public
   */
  Granularity?: TimeGranularity | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a water allocation quantity with its value and unit of measurement.</p>
 * @public
 */
export interface WaterAllocation {
  /**
   * <p>The numeric value of the allocation quantity.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The unit of measurement for the allocation value.</p>
   * @public
   */
  Unit: WaterAllocationUnit | undefined;
}

/**
 * <p>Contains estimated water allocation data for a specific time period and dimension grouping.</p>
 * @public
 */
export interface EstimatedWaterAllocation {
  /**
   * <p>The reporting period for water allocation values.</p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions used to group water allocation values.</p>
   * @public
   */
  DimensionsValues: Partial<Record<Dimension, string>> | undefined;

  /**
   * <p>The semantic version-formatted string that indicates the methodology version used to calculate the water allocation values. </p> <note> <p> The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different <code>ModelVersion</code> values. </p> </note>
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * <p>The allocation values for the requested water allocation types.</p>
   * @public
   */
  AllocationValues: Partial<Record<WaterAllocationType, WaterAllocation>> | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationResponse {
  /**
   * <p>The result of the requested inputs.</p>
   * @public
   */
  Results: EstimatedWaterAllocation[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationDimensionValuesRequest {
  /**
   * <p> The date range for fetching the dimension values. The range must include the start date of a year for that year's data to be included in the response. </p>
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * <p>The dimensions available for grouping estimated water allocation.</p>
   * @public
   */
  Dimensions: Dimension[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Default is 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationDimensionValuesResponse {
  /**
   * <p>The list of possible dimensions over which the allocation data is aggregated.</p>
   * @public
   */
  Results: DimensionEntry[] | undefined;

  /**
   * <p>The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;
}
