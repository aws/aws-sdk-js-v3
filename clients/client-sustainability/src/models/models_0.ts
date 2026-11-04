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
 * Filters environmental impact values by specific dimension values.
 *
 * @public
 */
export interface FilterExpression {
  /**
   * Filters environmental impact values by specific dimension values.
   *
   * @public
   */
  Dimensions?: Partial<Record<Dimension, string[]>> | undefined;
}

/**
 * Contains configuration for the fiscal year granularities (e.g., `YEARLY_FISCAL`, `QUARTERLY_FISCAL`.
 *
 * @public
 */
export interface GranularityConfiguration {
  /**
   * The month (1-12) when the fiscal year begins. Used for `YEARLY_FISCAL` and `QUARTERLY_FISCAL` granularity. Defaults to 1 (January).
   *
   * @public
   */
  FiscalYearStartMonth?: number | undefined;
}

/**
 * Represents a duration of time defined by start and end timestamps.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The start (inclusive) of the time period. ISO-8601 formatted timestamp, for example: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  Start: Date | undefined;

  /**
   * The end (exclusive) of the time period. ISO-8601 formatted timestamp, for example: `YYYY-MM-DDThh:mm:ss.sssZ`
   *
   * @public
   */
  End: Date | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsRequest {
  /**
   * The date range for fetching estimated carbon emissions. The range must include the start date of a month for that month's data to be included in the response.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions available for grouping estimated carbon emissions.
   *
   * @public
   */
  GroupBy?: Dimension[] | undefined;

  /**
   * The criteria for filtering estimated carbon emissions. To determine which dimensions are available to be filtered by, you can first call GetEstimatedCarbonEmissionsDimensionValues
   *
   * @public
   */
  FilterBy?: FilterExpression | undefined;

  /**
   * The emission types to include in the results. If absent, returns `TOTAL_LBM_CARBON_EMISSIONS` and `TOTAL_MBM_CARBON_EMISSIONS` emissions types.
   *
   * @public
   */
  EmissionsTypes?: EmissionsType[] | undefined;

  /**
   * The time granularity for the results. If absent, uses `MONTHLY` time granularity. The smallest supported granularity for carbon emissions is `MONTHLY`.
   *
   * If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting `2025-04-01T00:00:00Z` to `2026-04-01T00:00:00Z` with `YEARLY_CALENDAR` granularity will return the last 9 months for 2025 and the first 3 months of 2026.
   *
   * @public
   */
  Granularity?: TimeGranularity | undefined;

  /**
   * Configuration for fiscal year calculations when using `YEARLY_FISCAL` or `QUARTERLY_FISCAL` granularity.
   *
   * @public
   */
  GranularityConfiguration?: GranularityConfiguration | undefined;

  /**
   * The maximum number of results to return in a single call. Default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a carbon emissions quantity with its value and unit of measurement.
 *
 * @public
 */
export interface Emissions {
  /**
   * The numeric value of the emissions quantity.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The unit of measurement for the emissions value.
   *
   * @public
   */
  Unit: EmissionsUnit | undefined;
}

/**
 * Contains estimated carbon emissions data for a specific time period and dimension grouping.
 *
 * @public
 */
export interface EstimatedCarbonEmissions {
  /**
   * The reporting period for emission values.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions used to group emissions values.
   *
   * @public
   */
  DimensionsValues: Partial<Record<Dimension, string>> | undefined;

  /**
   * The semantic version-formatted string that indicates the methodology version used to calculate the emission values.
   *
   * > **Note:** The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different `ModelVersion` values. To track the evolution of the methodology and compare emission values from previous versions, we recommend creating a [Data Export](https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html).
   *
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * The emissions values for the requested emissions types.
   *
   * @public
   */
  EmissionsValues: Partial<Record<EmissionsType, Emissions>> | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsResponse {
  /**
   * The result of the requested inputs.
   *
   * @public
   */
  Results: EstimatedCarbonEmissions[] | undefined;

  /**
   * The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesRequest {
  /**
   * The date range for fetching the dimension values. The range must include the start date of a month for that month's dimensions to be included in the response.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions available for grouping estimated carbon emissions.
   *
   * @public
   */
  Dimensions: Dimension[] | undefined;

  /**
   * The maximum number of results to return in a single call. Default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a dimension and its corresponding value.
 *
 * @public
 */
export interface DimensionEntry {
  /**
   * The dimension type that categorizes this entry.
   *
   * @public
   */
  Dimension: Dimension | undefined;

  /**
   * The value for the specified dimension. Valid values vary based on the dimension type (e.g., `us-east-1` for the `REGION` dimension, `AmazonEC2` for the `SERVICE` dimension).
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesResponse {
  /**
   * The list of possible dimensions over which the emissions data is aggregated.
   *
   * @public
   */
  Results?: DimensionEntry[] | undefined;

  /**
   * The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationRequest {
  /**
   * The date range for fetching estimated water allocation. The range must include the start date of a year for that year's data to be included in the response.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions available for grouping estimated water allocation.
   *
   * @public
   */
  GroupBy?: Dimension[] | undefined;

  /**
   * The criteria for filtering estimated water allocation. To determine which dimensions are available to be filtered by, you can first call GetEstimatedWaterAllocationDimensionValues
   *
   * @public
   */
  FilterBy?: FilterExpression | undefined;

  /**
   * The allocation types to include in the results. If absent, returns `TOTAL_WATER_WITHDRAWALS` allocation types.
   *
   * @public
   */
  AllocationTypes?: WaterAllocationType[] | undefined;

  /**
   * The time granularity for the results. Only `YEARLY_CALENDAR` time granularity is currently supported for water allocation. Defaults to `YEARLY_CALENDAR` if absent.
   *
   * If requesting partial time periods, data will be returned based on the smallest supported granularity. For example, requesting `2025-04-01T00:00:00Z` to `2026-04-01T00:00:00Z` with `YEARLY_CALENDAR` will return all the data for 2026 only.
   *
   * @public
   */
  Granularity?: TimeGranularity | undefined;

  /**
   * The maximum number of results to return in a single call. Default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a water allocation quantity with its value and unit of measurement.
 *
 * @public
 */
export interface WaterAllocation {
  /**
   * The numeric value of the allocation quantity.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The unit of measurement for the allocation value.
   *
   * @public
   */
  Unit: WaterAllocationUnit | undefined;
}

/**
 * Contains estimated water allocation data for a specific time period and dimension grouping.
 *
 * @public
 */
export interface EstimatedWaterAllocation {
  /**
   * The reporting period for water allocation values.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions used to group water allocation values.
   *
   * @public
   */
  DimensionsValues: Partial<Record<Dimension, string>> | undefined;

  /**
   * The semantic version-formatted string that indicates the methodology version used to calculate the water allocation values.
   *
   * > **Note:** The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different `ModelVersion` values.
   *
   * @public
   */
  ModelVersion: string | undefined;

  /**
   * The allocation values for the requested water allocation types.
   *
   * @public
   */
  AllocationValues: Partial<Record<WaterAllocationType, WaterAllocation>> | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationResponse {
  /**
   * The result of the requested inputs.
   *
   * @public
   */
  Results: EstimatedWaterAllocation[] | undefined;

  /**
   * The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationDimensionValuesRequest {
  /**
   * The date range for fetching the dimension values. The range must include the start date of a year for that year's data to be included in the response.
   *
   * @public
   */
  TimePeriod: TimePeriod | undefined;

  /**
   * The dimensions available for grouping estimated water allocation.
   *
   * @public
   */
  Dimensions: Dimension[] | undefined;

  /**
   * The maximum number of results to return in a single call. Default is 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetEstimatedWaterAllocationDimensionValuesResponse {
  /**
   * The list of possible dimensions over which the allocation data is aggregated.
   *
   * @public
   */
  Results: DimensionEntry[] | undefined;

  /**
   * The pagination token indicating there are additional pages available. You can use the token in a following request to fetch the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}
