// smithy-typescript generated code
import type {
  AccountScope,
  AnalysisStatus,
  AnalysisType,
  AnomalyFeedbackType,
  AnomalySubscriptionFrequency,
  ApproximationDimension,
  Context,
  CostAllocationTagBackfillStatus,
  CostAllocationTagStatus,
  CostAllocationTagType,
  CostCategoryInheritedValueDimensionName,
  CostCategoryRuleType,
  CostCategoryRuleVersion,
  CostCategorySplitChargeMethod,
  CostCategorySplitChargeRuleParameterType,
  CostCategoryStatus,
  CostCategoryStatusComponent,
  Dimension,
  ErrorCode,
  FindingReasonCode,
  GenerationStatus,
  Granularity,
  GroupDefinitionType,
  LookbackPeriodInDays,
  MatchOption,
  Metric,
  MonitorDimension,
  MonitorType,
  NumericOperator,
  OfferingClass,
  PaymentOption,
  PlatformDifference,
  RecommendationTarget,
  RightsizingType,
  SavingsPlansDataType,
  SortOrder,
  SubscriberStatus,
  SubscriberType,
  SupportedSavingsPlansType,
  TermInYears,
} from "./enums";

/**
 * Contains the hourly metrics for the given recommendation over the lookback period.
 *
 * @public
 */
export interface RecommendationDetailHourlyMetrics {
  /**
   * The period of time that you want the usage and costs for.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The remaining On-Demand cost estimated to not be covered by the recommended Savings Plan, over the length of the lookback period.
   *
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * The current amount of Savings Plans eligible usage that the Savings Plan covered.
   *
   * @public
   */
  CurrentCoverage?: string | undefined;

  /**
   * The estimated coverage amount based on the recommended Savings Plan.
   *
   * @public
   */
  EstimatedCoverage?: string | undefined;

  /**
   * The estimated utilization for the recommended Savings Plan.
   *
   * @public
   */
  EstimatedNewCommitmentUtilization?: string | undefined;
}

/**
 * Details about the Savings Plans purchase analysis.
 *
 * @public
 */
export interface SavingsPlansPurchaseAnalysisDetails {
  /**
   * The currency code used for the analysis.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The lookback period in hours that's used to generate the analysis.
   *
   * @public
   */
  LookbackPeriodInHours?: string | undefined;

  /**
   * The average value of hourly coverage over the lookback period.
   *
   * @public
   */
  CurrentAverageCoverage?: string | undefined;

  /**
   * The average value of hourly On-Demand spend over the lookback period.
   *
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * The highest value of hourly On-Demand spend over the lookback period.
   *
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * The lowest value of hourly On-Demand spend over the lookback period.
   *
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * The current total On-Demand spend over the lookback period.
   *
   * @public
   */
  CurrentOnDemandSpend?: string | undefined;

  /**
   * The existing hourly commitment for the Savings Plan type.
   *
   * @public
   */
  ExistingHourlyCommitment?: string | undefined;

  /**
   * The recommended or custom hourly commitment.
   *
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * The estimated coverage of the Savings Plan.
   *
   * @public
   */
  EstimatedAverageCoverage?: string | undefined;

  /**
   * The estimated utilization of the Savings Plan.
   *
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * The estimated monthly savings amount based on the Savings Plan.
   *
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * The remaining On-Demand cost estimated to not be covered by the Savings Plan over the length of the lookback period.
   *
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * The estimated On-Demand cost you expect with no additional commitment based on your usage of the selected time period and the Savings Plan you own.
   *
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * The estimated return on investment that's based on the Savings Plan and estimated savings. This is calculated as estimatedSavingsAmount/estimatedSPCost*100.
   *
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * The estimated savings amount that's based on the Savings Plan over the length of the lookback period.
   *
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * The estimated savings percentage relative to the total cost over the cost calculation lookback period.
   *
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * The estimated cost of the Savings Plan over the length of the lookback period.
   *
   * @public
   */
  EstimatedCommitmentCost?: string | undefined;

  /**
   * The date and time of the last hour that went into the analysis.
   *
   * @public
   */
  LatestUsageTimestamp?: string | undefined;

  /**
   * The upfront cost of the Savings Plan based on the selected payment option.
   *
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * Additional metadata that might be applicable to the commitment.
   *
   * @public
   */
  AdditionalMetadata?: string | undefined;

  /**
   * The related hourly cost, coverage, and utilization metrics over the lookback period.
   *
   * @public
   */
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[] | undefined;
}

/**
 * Details about the analysis.
 *
 * @public
 */
export interface AnalysisDetails {
  /**
   * Details about the Savings Plans purchase analysis.
   *
   * @public
   */
  SavingsPlansPurchaseAnalysisDetails?: SavingsPlansPurchaseAnalysisDetails | undefined;
}

/**
 * The time period of the request.
 *
 * @public
 */
export interface DateInterval {
  /**
   * The beginning of the time period. The start date is inclusive. For example, if `start` is `2017-01-01`, Amazon Web Services retrieves cost and usage data starting at `2017-01-01` up to the end date. The start date must be equal to or no later than the current date to avoid a validation error.
   *
   * @public
   */
  Start: string | undefined;

  /**
   * The end of the time period. The end date is exclusive. For example, if `end` is `2017-05-01`, Amazon Web Services retrieves cost and usage data from the start date up to, but not including, `2017-05-01`.
   *
   * @public
   */
  End: string | undefined;
}

/**
 * The Savings Plans commitment details.
 *
 * @public
 */
export interface SavingsPlans {
  /**
   * The payment option for the Savings Plans commitment.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The Savings Plans type.
   *
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * The Region associated with the Savings Plans commitment.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The instance family of the Savings Plans commitment.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The term that you want the Savings Plans commitment for.
   *
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * The Savings Plans commitment.
   *
   * @public
   */
  SavingsPlansCommitment?: number | undefined;

  /**
   * The unique ID that's used to distinguish Savings Plans commitments from one another.
   *
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * The configuration for the Savings Plans purchase analysis.
 *
 * @public
 */
export interface SavingsPlansPurchaseAnalysisConfiguration {
  /**
   * The account scope that you want your analysis for.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * The account that the analysis is for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The type of analysis.
   *
   * @public
   */
  AnalysisType: AnalysisType | undefined;

  /**
   * Savings Plans to include in the analysis.
   *
   * @public
   */
  SavingsPlansToAdd: SavingsPlans[] | undefined;

  /**
   * Savings Plans to exclude from the analysis.
   *
   * @public
   */
  SavingsPlansToExclude?: string[] | undefined;

  /**
   * The time period associated with the analysis.
   *
   * @public
   */
  LookBackTimePeriod: DateInterval | undefined;

  /**
   * Specifies the target Savings Plans coverage as a percentage from `10` to `100`. This field is required when `AnalysisType` is `TARGET_AVERAGE_COVERAGE`. It defines the target average hourly coverage that the recommended Savings Plans commitment should achieve over the lookback period.
   *
   * @public
   */
  SavingsPlansTargetCoverage?: number | undefined;
}

/**
 * The configuration for the commitment purchase analysis.
 *
 * @public
 */
export interface CommitmentPurchaseAnalysisConfiguration {
  /**
   * The configuration for the Savings Plans purchase analysis.
   *
   * @public
   */
  SavingsPlansPurchaseAnalysisConfiguration?: SavingsPlansPurchaseAnalysisConfiguration | undefined;
}

/**
 * A summary of the analysis.
 *
 * @public
 */
export interface AnalysisSummary {
  /**
   * The estimated time for when the analysis will complete.
   *
   * @public
   */
  EstimatedCompletionTime?: string | undefined;

  /**
   * The completion time of the analysis.
   *
   * @public
   */
  AnalysisCompletionTime?: string | undefined;

  /**
   * The start time of the analysis.
   *
   * @public
   */
  AnalysisStartedTime?: string | undefined;

  /**
   * The status of the analysis.
   *
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * The error code used for the analysis.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The analysis ID that's associated with the commitment purchase analysis.
   *
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * The configuration for the commitment purchase analysis.
   *
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration?: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * Quantifies the anomaly. The higher score means that it's more anomalous.
 *
 * @public
 */
export interface AnomalyScore {
  /**
   * The maximum score that's observed during the `AnomalyDateInterval`.
   *
   * @public
   */
  MaxScore: number | undefined;

  /**
   * The last observed score.
   *
   * @public
   */
  CurrentScore: number | undefined;
}

/**
 * The dollar value of the anomaly.
 *
 * @public
 */
export interface Impact {
  /**
   * The maximum dollar value that's observed for an anomaly.
   *
   * @public
   */
  MaxImpact: number | undefined;

  /**
   * The cumulative dollar difference between the total actual spend and total expected spend. It is calculated as `TotalActualSpend - TotalExpectedSpend`.
   *
   * @public
   */
  TotalImpact?: number | undefined;

  /**
   * The cumulative dollar amount that was actually spent during the anomaly.
   *
   * @public
   */
  TotalActualSpend?: number | undefined;

  /**
   * The cumulative dollar amount that was expected to be spent during the anomaly. It is calculated using advanced machine learning models to determine the typical spending pattern based on historical data for a customer.
   *
   * @public
   */
  TotalExpectedSpend?: number | undefined;

  /**
   * The cumulative percentage difference between the total actual spend and total expected spend. It is calculated as `(TotalImpact / TotalExpectedSpend) * 100`. When `TotalExpectedSpend` is zero, this field is omitted. Expected spend can be zero in situations such as when you start to use a service for the first time.
   *
   * @public
   */
  TotalImpactPercentage?: number | undefined;
}

/**
 * The dollar value of the root cause.
 *
 * @public
 */
export interface RootCauseImpact {
  /**
   * The dollar amount that this root cause contributed to the anomaly's TotalImpact.
   *
   * @public
   */
  Contribution: number | undefined;
}

/**
 * The combination of Amazon Web Services service, linked account, linked account name, Region, and usage type where a cost anomaly is observed, along with the dollar and percentage amount of the anomaly impact. The linked account name will only be available when the account name can be identified.
 *
 * @public
 */
export interface RootCause {
  /**
   * The Amazon Web Services service name that's associated with the cost anomaly.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The Amazon Web Services Region that's associated with the cost anomaly.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The member account value that's associated with the cost anomaly.
   *
   * @public
   */
  LinkedAccount?: string | undefined;

  /**
   * The member account name value that's associated with the cost anomaly.
   *
   * @public
   */
  LinkedAccountName?: string | undefined;

  /**
   * The `UsageType` value that's associated with the cost anomaly.
   *
   * @public
   */
  UsageType?: string | undefined;

  /**
   * The dollar impact for the root cause.
   *
   * @public
   */
  Impact?: RootCauseImpact | undefined;
}

/**
 * An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.
 *
 * @public
 */
export interface Anomaly {
  /**
   * The unique identifier for the anomaly.
   *
   * @public
   */
  AnomalyId: string | undefined;

  /**
   * The first day the anomaly is detected.
   *
   * @public
   */
  AnomalyStartDate?: string | undefined;

  /**
   * The last day the anomaly is detected.
   *
   * @public
   */
  AnomalyEndDate?: string | undefined;

  /**
   * The dimension for the anomaly (for example, an Amazon Web Services service in a service monitor).
   *
   * @public
   */
  DimensionValue?: string | undefined;

  /**
   * The list of identified root causes for the anomaly.
   *
   * @public
   */
  RootCauses?: RootCause[] | undefined;

  /**
   * The latest and maximum score for the anomaly.
   *
   * @public
   */
  AnomalyScore: AnomalyScore | undefined;

  /**
   * The dollar impact for the anomaly.
   *
   * @public
   */
  Impact: Impact | undefined;

  /**
   * The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly.
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * The feedback value.
   *
   * @public
   */
  Feedback?: AnomalyFeedbackType | undefined;
}

/**
 * The time period for an anomaly.
 *
 * @public
 */
export interface AnomalyDateInterval {
  /**
   * The first date an anomaly was observed.
   *
   * @public
   */
  StartDate: string | undefined;

  /**
   * The last date an anomaly was observed.
   *
   * @public
   */
  EndDate?: string | undefined;
}

/**
 * The Cost Categories values used for filtering the costs.
 *
 * If `Values` and `Key` are not specified, the `ABSENT` `MatchOption` is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.
 *
 * If `Values` is provided and `Key` isn't specified, the `ABSENT` `MatchOption` is applied to the Cost Categories `Key` only. That is, it filters on resources without the given Cost Categories key.
 *
 * @public
 */
export interface CostCategoryValues {
  /**
   * The unique name of the cost category.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The specific value of the cost category.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for `MatchOptions` is `EQUALS` and `CASE_SENSITIVE`.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The metadata that you can use to filter and group your results. You can use `GetDimensionValues` to find specific values.
 *
 * @public
 */
export interface DimensionValues {
  /**
   * The names of the metadata types that you can use to filter and group your results. For example, `AZ` returns a list of Availability Zones.
   *
   * Not all dimensions are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * `LINKED_ACCOUNT_NAME` and `SERVICE_CODE` can only be used in [CostCategoryRule](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html).
   *
   * `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE` can only be used in [AnomalySubscriptions](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html).
   *
   * Use `PRODUCT_ATTRIBUTE` only as the `Dimension` in `GetDimensionValues`. To filter or group by product attributes, use the `ProductAttributes` field of `Expression` or the `PRODUCT_ATTRIBUTE` group type.
   *
   * @public
   */
  Key?: Dimension | undefined;

  /**
   * The metadata values that you can use to filter and group your results. You can use `GetDimensionValues` to find specific values.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results.
   *
   * `MatchOptions` is only applicable for actions related to cost category and Anomaly Subscriptions. Refer to the documentation for each specific API to see what is supported.
   *
   * The default values for `MatchOptions` are `EQUALS` and `CASE_SENSITIVE`.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The product attribute values that you can use to filter the costs of supported services. Currently, Amazon Bedrock is the only supported service.
 *
 * The following product attribute keys are available for each supported service:
 *
 * - Amazon Bedrock
 *
 *   - `provider` - The model provider, such as `Anthropic`, `Cohere`, or `OpenAI`.
 *   - `model` - The model, such as `Claude Sonnet 5` or `Claude Haiku 4.5`.
 *   - `inferenceType` - The type of inference usage, such as `Input tokens` or `Output tokens`.
 *   - `feature` - The feature that was used, such as `On-demand Inference` or `Reranker`.
 *
 * The following operations support product attributes: `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories`.
 *
 * Product attribute data is available for time periods that start on or after September 1, 2026. Requests for earlier time periods that use product attributes fail with a `DataUnavailableException`.
 *
 * The `SERVICE` filter rules for product attributes depend on the operation:
 *
 * - `GetCostAndUsage` and `GetCostAndUsageWithResources` - Optional.
 * - `GetDimensionValues` - Required when the filter includes `ProductAttributes`, for any `Dimension`. Otherwise, optional.
 * - `GetTags` and `GetCostCategories` - Required when the filter includes `ProductAttributes`.
 *
 * A `SERVICE` filter must contain only supported services, or the request fails with a `ValidationException`. Service names are matched exactly. To list them, use `GetDimensionValues` with `Dimension` set to `SERVICE` and the same `TimePeriod`, for example with `SearchString` set to `Bedrock`.
 *
 * The costs of a supported service can appear under multiple service names. When the `SERVICE` filter is optional, omit it so that your results include all of those costs.
 *
 * For example, the following `Expression` filters for the costs of one model: `\{ "ProductAttributes": \{ "Key": "model", "Values": [ "Claude Sonnet 5" ], "MatchOptions": [ "EQUALS" ] \} \}`
 *
 * @public
 */
export interface ProductAttributeValues {
  /**
   * The name of the product attribute, such as `model`. The keys that are available depend on the service. For the keys of each supported service, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *
   * Keys are case-sensitive. A key that doesn't exist doesn't return an error: `EQUALS` matches no costs, and `ABSENT` matches all costs of supported services.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The specific values of the product attribute, such as `Claude Sonnet 5` for the `model` key. Values are matched exactly, including case. To list the values of a key, use `GetDimensionValues` with `Dimension` set to `PRODUCT_ATTRIBUTE` and `DimensionKey` set to the key.
   *
   * To match costs that have no value for the key, set `MatchOptions` to `ABSENT` and omit `Values`. Otherwise, `Values` is required.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results. Valid values:
   *
   * - `EQUALS` - Matches the values that you specify.
   * - `ABSENT` - Matches costs that have no value for the key. Omit `Values`.
   * - `CASE_SENSITIVE` - Use only with `EQUALS`. Values are always matched case-sensitively.
   *
   * Default values are `EQUALS` and `CASE_SENSITIVE`.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The values that are available for a tag.
 *
 * If `Values` and `Key` aren't specified, the `ABSENT` `MatchOption` is applied to all tags. That is, it's filtered on resources with no tags.
 *
 * If `Key` is provided and `Values` isn't specified, the `ABSENT` `MatchOption` is applied to the tag `Key` only. That is, it's filtered on resources without the given tag key.
 *
 * @public
 */
export interface TagValues {
  /**
   * The key for the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The specific value of the tag.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The match options that you can use to filter your results. `MatchOptions` is only applicable for actions related to cost category. The default values for `MatchOptions` are `EQUALS` and `CASE_SENSITIVE`.
   *
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * The recipient of `AnomalySubscription` notifications.
 *
 * @public
 */
export interface Subscriber {
  /**
   * The email address or SNS Amazon Resource Name (ARN). This depends on the `Type`.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * The notification delivery channel.
   *
   * @public
   */
  Type?: SubscriberType | undefined;

  /**
   * Indicates if the subscriber accepts the notifications.
   *
   * @public
   */
  Status?: SubscriberStatus | undefined;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * > **Note:** Tagging is supported only for the following Cost Explorer resource types: [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html), [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html), [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html).
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The key that's associated with the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value that's associated with the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorResponse {
  /**
   * The unique identifier of your newly created cost anomaly detection monitor.
   *
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionResponse {
  /**
   * The unique identifier of your newly created cost anomaly subscription.
   *
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * When you create or update a cost category, you can define the `CostCategoryRule` rule type as `INHERITED_VALUE`. This rule type adds the flexibility to define a rule that dynamically inherits the cost category value from the dimension value that's defined by `CostCategoryInheritedValueDimension`. For example, suppose that you want to dynamically group costs that are based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.
 *
 * @public
 */
export interface CostCategoryInheritedValueDimension {
  /**
   * The name of the dimension that's used to group costs.
   *
   * If you specify `LINKED_ACCOUNT_NAME`, the cost category value is based on account name. If you specify `TAG`, the cost category value is based on the value of the specified tag key.
   *
   * @public
   */
  DimensionName?: CostCategoryInheritedValueDimensionName | undefined;

  /**
   * The key to extract cost category values.
   *
   * @public
   */
  DimensionKey?: string | undefined;
}

/**
 * The parameters for a split charge method.
 *
 * @public
 */
export interface CostCategorySplitChargeRuleParameter {
  /**
   * The parameter type.
   *
   * @public
   */
  Type: CostCategorySplitChargeRuleParameterType | undefined;

  /**
   * The parameter values.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Use the split charge rule to split the cost of one cost category value across several other target values.
 *
 * @public
 */
export interface CostCategorySplitChargeRule {
  /**
   * The cost category value that you want to split. That value can't be used as a source or a target in other split charge rules. To indicate uncategorized costs, you can use an empty string as the source.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The cost category values that you want to split costs across. These values can't be used as a source in other split charge rules.
   *
   * @public
   */
  Targets: string[] | undefined;

  /**
   * The method that's used to define how to split your source costs across your targets.
   *
   * `Proportional` - Allocates charges across your targets based on the proportional weighted cost of each target.
   *
   * `Fixed` - Allocates charges across your targets based on your defined allocation percentage.
   *
   * >`Even` - Allocates costs evenly across all targets.
   *
   * @public
   */
  Method: CostCategorySplitChargeMethod | undefined;

  /**
   * The parameters for a split charge method. This is only required for the `FIXED` method.
   *
   * @public
   */
  Parameters?: CostCategorySplitChargeRuleParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionResponse {
  /**
   * The unique identifier for your newly created cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * The cost category's effective start date. It can only be a billing start date (first day of the month).
   *
   * @public
   */
  EffectiveStart?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyMonitorRequest {
  /**
   * The unique identifier of the cost anomaly monitor that you want to delete.
   *
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyMonitorResponse {}

/**
 * @public
 */
export interface DeleteAnomalySubscriptionRequest {
  /**
   * The unique identifier of the cost anomaly subscription that you want to delete.
   *
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalySubscriptionResponse {}

/**
 * @public
 */
export interface DeleteCostCategoryDefinitionRequest {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCostCategoryDefinitionResponse {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * The effective end date of the cost category as a result of deleting it. No costs after this date is categorized by the deleted cost category.
   *
   * @public
   */
  EffectiveEnd?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionRequest {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * The date when the cost category was effective.
   *
   * @public
   */
  EffectiveOn?: string | undefined;
}

/**
 * The list of processing statuses for Cost Management products for a specific cost category.
 *
 * @public
 */
export interface CostCategoryProcessingStatus {
  /**
   * The Cost Management product name of the applied status.
   *
   * @public
   */
  Component?: CostCategoryStatusComponent | undefined;

  /**
   * The process status for a specific cost category.
   *
   * @public
   */
  Status?: CostCategoryStatus | undefined;
}

/**
 * Filters cost anomalies based on the total impact.
 *
 * @public
 */
export interface TotalImpactFilter {
  /**
   * The comparing value that's used in the filter.
   *
   * @public
   */
  NumericOperator: NumericOperator | undefined;

  /**
   * The lower bound dollar value that's used in the filter.
   *
   * @public
   */
  StartValue: number | undefined;

  /**
   * The upper bound dollar value that's used in the filter.
   *
   * @public
   */
  EndValue?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomaliesRequest {
  /**
   * Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon Resource Name (ARN).
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object will have an `AnomalyEndDate` in the specified time range.
   *
   * @public
   */
  DateInterval: AnomalyDateInterval | undefined;

  /**
   * Filters anomaly results by the feedback field on the anomaly object.
   *
   * @public
   */
  Feedback?: AnomalyFeedbackType | undefined;

  /**
   * Filters anomaly results by the total impact field on the anomaly object. For example, you can filter anomalies `GREATER_THAN 200.00` to retrieve anomalies, with an estimated dollar impact greater than 200.
   *
   * @public
   */
  TotalImpact?: TotalImpactFilter | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The number of entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomaliesResponse {
  /**
   * A list of cost anomalies.
   *
   * @public
   */
  Anomalies: Anomaly[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyMonitorsRequest {
  /**
   * A list of cost anomaly monitor ARNs.
   *
   * @public
   */
  MonitorArnList?: string[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The number of entries that a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsRequest {
  /**
   * A list of cost anomaly subscription ARNs.
   *
   * @public
   */
  SubscriptionArnList?: string[] | undefined;

  /**
   * Cost anomaly monitor ARNs.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The number of entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetApproximateUsageRecordsRequest {
  /**
   * How granular you want the data to be. You can enable data at hourly or daily granularity.
   *
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * The service metadata for the service or services you want to query. If not specified, all elements are returned.
   *
   * @public
   */
  Services?: string[] | undefined;

  /**
   * The service to evaluate for the usage records. You can choose resource-level data at daily granularity, or hourly granularity with or without resource-level data.
   *
   * @public
   */
  ApproximationDimension: ApproximationDimension | undefined;
}

/**
 * @public
 */
export interface GetApproximateUsageRecordsResponse {
  /**
   * The service metadata for the service or services in the response.
   *
   * @public
   */
  Services?: Record<string, number> | undefined;

  /**
   * The total number of usage records for all services in the services list.
   *
   * @public
   */
  TotalRecords?: number | undefined;

  /**
   * The lookback period that's used for the estimation.
   *
   * @public
   */
  LookbackPeriod?: DateInterval | undefined;
}

/**
 * @public
 */
export interface GetCommitmentPurchaseAnalysisRequest {
  /**
   * The analysis ID that's associated with the commitment purchase analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface GetCommitmentPurchaseAnalysisResponse {
  /**
   * The estimated time for when the analysis will complete.
   *
   * @public
   */
  EstimatedCompletionTime: string | undefined;

  /**
   * The completion time of the analysis.
   *
   * @public
   */
  AnalysisCompletionTime?: string | undefined;

  /**
   * The start time of the analysis.
   *
   * @public
   */
  AnalysisStartedTime: string | undefined;

  /**
   * The analysis ID that's associated with the commitment purchase analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * The status of the analysis.
   *
   * @public
   */
  AnalysisStatus: AnalysisStatus | undefined;

  /**
   * The error code used for the analysis.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * Details about the analysis.
   *
   * @public
   */
  AnalysisDetails?: AnalysisDetails | undefined;

  /**
   * The configuration for the commitment purchase analysis.
   *
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.
 *
 * @public
 */
export interface GroupDefinition {
  /**
   * The string that represents the type of group.
   *
   * @public
   */
  Type?: GroupDefinitionType | undefined;

  /**
   * The string that represents a key for a specified group.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The metadata of a specific type that you can use to filter and group your results. You can use `GetDimensionValues` to find specific values.
 *
 * @public
 */
export interface DimensionValuesWithAttributes {
  /**
   * The value of a dimension with a specific attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The attribute that applies to a specific `Dimension`.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * The aggregated value for a metric.
 *
 * @public
 */
export interface MetricValue {
  /**
   * The actual number that represents the metric.
   *
   * @public
   */
  Amount?: string | undefined;

  /**
   * The unit that the metric is given in.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * One level of grouped data in the results.
 *
 * @public
 */
export interface Group {
  /**
   * The keys that are included in this group.
   *
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * The metrics that are included in this group.
   *
   * @public
   */
  Metrics?: Record<string, MetricValue> | undefined;
}

/**
 * The result that's associated with a time period.
 *
 * @public
 */
export interface ResultByTime {
  /**
   * The time period that the result covers.
   *
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * The total amount of cost or usage accrued during the time period.
   *
   * @public
   */
  Total?: Record<string, MetricValue> | undefined;

  /**
   * The groups that this time period includes.
   *
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * Determines whether the result is estimated.
   *
   * @public
   */
  Estimated?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageResponse {
  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The groups that are specified by the `Filter` or `GroupBy` parameters in the request.
   *
   * @public
   */
  GroupDefinitions?: GroupDefinition[] | undefined;

  /**
   * The time period that's covered by the results in the response.
   *
   * @public
   */
  ResultsByTime?: ResultByTime[] | undefined;

  /**
   * The attributes that apply to a specific dimension value. For example, if the value is a linked account, the attribute is that account name.
   *
   * @public
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[] | undefined;
}

/**
 * Contains cost or usage metric values for comparing two time periods. Each value includes amounts for the baseline and comparison time periods, their difference, and the unit of measurement.
 *
 * @public
 */
export interface ComparisonMetricValue {
  /**
   * The numeric value for the baseline time period measurement.
   *
   * @public
   */
  BaselineTimePeriodAmount?: string | undefined;

  /**
   * The numeric value for the comparison time period measurement.
   *
   * @public
   */
  ComparisonTimePeriodAmount?: string | undefined;

  /**
   * The calculated difference between `ComparisonTimePeriodAmount` and `BaselineTimePeriodAmount`.
   *
   * @public
   */
  Difference?: string | undefined;

  /**
   * The unit of measurement applicable to all numeric values in this comparison.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesResponse {
  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The groups that are specified by the `Filter` or `GroupBy` parameters in the request.
   *
   * @public
   */
  GroupDefinitions?: GroupDefinition[] | undefined;

  /**
   * The time period that's covered by the results in the response.
   *
   * @public
   */
  ResultsByTime?: ResultByTime[] | undefined;

  /**
   * The attributes that apply to a specific dimension value. For example, if the value is a linked account, the attribute is that account name.
   *
   * @public
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[] | undefined;
}

/**
 * The details for how to sort the data.
 *
 * @public
 */
export interface SortDefinition {
  /**
   * The key that's used to sort the data.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The order that's used to sort the data.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface GetCostCategoriesResponse {
  /**
   * If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The names of the cost categories.
   *
   * @public
   */
  CostCategoryNames?: string[] | undefined;

  /**
   * The cost category values.
   *
   * If the `CostCategoryName` key isn't specified in the request, the `CostCategoryValues` fields aren't returned.
   *
   * @public
   */
  CostCategoryValues?: string[] | undefined;

  /**
   * The number of objects that are returned.
   *
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * The total number of objects.
   *
   * @public
   */
  TotalSize: number | undefined;
}

/**
 * Represents factors that contribute to cost variations between the baseline and comparison time periods, including the type of driver, an identifier of the driver, and associated metrics.
 *
 * @public
 */
export interface CostDriver {
  /**
   * The category or classification of the cost driver.
   *
   * Values include: BUNDLED_DISCOUNT, CREDIT, OUT_OF_CYCLE_CHARGE, REFUND, RECURRING_RESERVATION_FEE, RESERVATION_USAGE, RI_VOLUME_DISCOUNT, SAVINGS_PLAN_USAGE, SAVINGS_PLAN_RECURRING_FEE, SUPPORT_FEE, TAX, UPFRONT_RESERVATION_FEE, USAGE_CHANGE, COMMITMENT
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The specific identifier of the cost driver.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A mapping of metric names to their comparison values, measuring the impact of this cost driver.
   *
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;
}

/**
 * The forecast that's created for your query.
 *
 * @public
 */
export interface ForecastResult {
  /**
   * The period of time that the forecast covers.
   *
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * The mean value of the forecast.
   *
   * @public
   */
  MeanValue?: string | undefined;

  /**
   * The lower limit for the prediction interval.
   *
   * @public
   */
  PredictionIntervalLowerBound?: string | undefined;

  /**
   * The upper limit for the prediction interval.
   *
   * @public
   */
  PredictionIntervalUpperBound?: string | undefined;
}

/**
 * @public
 */
export interface GetCostForecastResponse {
  /**
   * How much you are forecasted to spend over the forecast period, in `USD`.
   *
   * @public
   */
  Total?: MetricValue | undefined;

  /**
   * The forecasts for your query, in order. For `DAILY` forecasts, this is a list of days. For `MONTHLY` forecasts, this is a list of months.
   *
   * @public
   */
  ForecastResultsByTime?: ForecastResult[] | undefined;
}

/**
 * @public
 */
export interface GetDimensionValuesResponse {
  /**
   * The filters that you used to filter your request. Some dimensions are available only for a specific context.
   *
   * If you set the context to `COST_AND_USAGE`, you can use the following dimensions for searching:
   *
   * - AZ - The Availability Zone. An example is `us-east-1a`.
   * - DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.
   * - INSTANCE_TYPE - The type of Amazon EC2 instance. An example is `m4.xlarge`.
   * - LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.
   * - OPERATION - The action performed. Examples include `RunInstance` and `CreateBucket`.
   * - PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.
   * - PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.
   * - SERVICE - The Amazon Web Services service such as Amazon DynamoDB.
   * - USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the `GetDimensionValues` operation includes a unit attribute. Examples include GB and Hrs.
   * - USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.
   * - RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.
   * - RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service. You can opt-in by enabling `Hourly` and `Resource Level Data` in Cost Management Console preferences.
   *
   * If you set the context to `RESERVATIONS`, you can use the following dimensions for searching:
   *
   * - AZ - The Availability Zone. An example is `us-east-1a`.
   * - CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.
   * - DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are `SingleAZ` and `MultiAZ`.
   * - INSTANCE_TYPE - The type of Amazon EC2 instance. An example is `m4.xlarge`.
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.
   * - REGION - The Amazon Web Services Region.
   * - SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.
   * - TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).
   * - TENANCY - The tenancy of a resource. Examples are shared or dedicated.
   *
   * If you set the context to `SAVINGS_PLANS`, you can use the following dimensions for searching:
   *
   * - SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)
   * - PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)
   * - REGION - The Amazon Web Services Region.
   * - INSTANCE_TYPE_FAMILY - The family of instances (For example, `m5`)
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan
   *
   * @public
   */
  DimensionValues: DimensionValuesWithAttributes[] | undefined;

  /**
   * The number of results that Amazon Web Services returned at one time.
   *
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * The total number of search results.
   *
   * @public
   */
  TotalSize: number | undefined;

  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * How much it costs to run an instance.
 *
 * @public
 */
export interface CoverageCost {
  /**
   * How much an On-Demand Instance costs.
   *
   * @public
   */
  OnDemandCost?: string | undefined;
}

/**
 * How long a running instance either used a reservation or was On-Demand.
 *
 * @public
 */
export interface CoverageHours {
  /**
   * The number of instance running hours that On-Demand Instances covered.
   *
   * @public
   */
  OnDemandHours?: string | undefined;

  /**
   * The number of instance running hours that reservations covered.
   *
   * @public
   */
  ReservedHours?: string | undefined;

  /**
   * The total instance usage, in hours.
   *
   * @public
   */
  TotalRunningHours?: string | undefined;

  /**
   * The percentage of instance hours that a reservation covered.
   *
   * @public
   */
  CoverageHoursPercentage?: string | undefined;
}

/**
 * The amount of instance usage, in normalized units. You can use normalized units to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose that you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. When you use normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.
 *
 * For more information, see [Modifying Reserved Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html) in the *Amazon Elastic Compute Cloud User Guide for Linux Instances*.
 *
 * @public
 */
export interface CoverageNormalizedUnits {
  /**
   * The number of normalized units that are covered by On-Demand Instances instead of a reservation.
   *
   * @public
   */
  OnDemandNormalizedUnits?: string | undefined;

  /**
   * The number of normalized units that a reservation covers.
   *
   * @public
   */
  ReservedNormalizedUnits?: string | undefined;

  /**
   * The total number of normalized units that you used.
   *
   * @public
   */
  TotalRunningNormalizedUnits?: string | undefined;

  /**
   * The percentage of your used instance normalized units that a reservation covers.
   *
   * @public
   */
  CoverageNormalizedUnitsPercentage?: string | undefined;
}

/**
 * The amount of instance usage that a reservation covered.
 *
 * @public
 */
export interface Coverage {
  /**
   * The amount of instance usage that the reservation covered, in hours.
   *
   * @public
   */
  CoverageHours?: CoverageHours | undefined;

  /**
   * The amount of instance usage that the reservation covered, in normalized units.
   *
   * @public
   */
  CoverageNormalizedUnits?: CoverageNormalizedUnits | undefined;

  /**
   * The amount of cost that the reservation covered.
   *
   * @public
   */
  CoverageCost?: CoverageCost | undefined;
}

/**
 * A group of reservations that share a set of attributes.
 *
 * @public
 */
export interface ReservationCoverageGroup {
  /**
   * The attributes for this group of reservations.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * How much instance usage this group of reservations covered.
   *
   * @public
   */
  Coverage?: Coverage | undefined;
}

/**
 * Reservation coverage for a specified period, in hours.
 *
 * @public
 */
export interface CoverageByTime {
  /**
   * The period that this coverage was used over.
   *
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * The groups of instances that the reservation covered.
   *
   * @public
   */
  Groups?: ReservationCoverageGroup[] | undefined;

  /**
   * The total reservation coverage, in hours.
   *
   * @public
   */
  Total?: Coverage | undefined;
}

/**
 * @public
 */
export interface GetReservationCoverageResponse {
  /**
   * The amount of time that your reservations covered.
   *
   * @public
   */
  CoveragesByTime: CoverageByTime[] | undefined;

  /**
   * The total amount of instance usage that a reservation covered.
   *
   * @public
   */
  Total?: Coverage | undefined;

  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for.
 *
 * @public
 */
export interface EC2Specification {
  /**
   * Indicates whether you want a recommendation for standard or convertible reservations.
   *
   * @public
   */
  OfferingClass?: OfferingClass | undefined;
}

/**
 * Hardware specifications for the service that you want recommendations for.
 *
 * @public
 */
export interface ServiceSpecification {
  /**
   * The Amazon EC2 hardware specifications that you want Amazon Web Services to provide recommendations for.
   *
   * @public
   */
  EC2Specification?: EC2Specification | undefined;
}

/**
 * Information about a recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.
 *
 * @public
 */
export interface ReservationPurchaseRecommendationMetadata {
  /**
   * The ID for the recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The timestamp for when Amazon Web Services made the recommendation.
   *
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * Additional metadata that might be applicable to the recommendation.
   *
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * Details about the Amazon EC2 reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface EC2InstanceDetails {
  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The Availability Zone of the recommended reservation.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * Determines whether the recommended reservation is dedicated or shared.
   *
   * @public
   */
  Tenancy?: string | undefined;

  /**
   * Determines whether the recommendation is for a current-generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * Details about the Amazon ElastiCache reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface ElastiCacheInstanceDetails {
  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The type of node that Amazon Web Services recommends.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The description of the recommended reservation.
   *
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * Details about the Amazon OpenSearch Service reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface ESInstanceDetails {
  /**
   * The class of instance that Amazon Web Services recommends.
   *
   * @public
   */
  InstanceClass?: string | undefined;

  /**
   * The size of instance that Amazon Web Services recommends.
   *
   * @public
   */
  InstanceSize?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Determines whether the recommendation is for a current-generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * Details about the MemoryDB reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface MemoryDBInstanceDetails {
  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The node type of the recommended reservation.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Determines whether the recommendation is for a current generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * Details about the Amazon RDS reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface RDSInstanceDetails {
  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The type of instance that Amazon Web Services recommends.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The database engine that the recommended reservation supports.
   *
   * @public
   */
  DatabaseEngine?: string | undefined;

  /**
   * The database edition that the recommended reservation supports.
   *
   * @public
   */
  DatabaseEdition?: string | undefined;

  /**
   * Determines whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.
   *
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * The license model that the recommended reservation supports.
   *
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * Determines whether the recommendation is for a current-generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;

  /**
   * Determines whether the recommendation is for a reservation for RDS Custom.
   *
   * @public
   */
  DeploymentModel?: string | undefined;
}

/**
 * Details about the Amazon Redshift reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface RedshiftInstanceDetails {
  /**
   * The instance family of the recommended reservation.
   *
   * @public
   */
  Family?: string | undefined;

  /**
   * The type of node that Amazon Web Services recommends.
   *
   * @public
   */
  NodeType?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Determines whether the recommendation is for a current-generation instance.
   *
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * Determines whether the recommended reservation is size flexible.
   *
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * Details about the reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface InstanceDetails {
  /**
   * The Amazon EC2 reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  EC2InstanceDetails?: EC2InstanceDetails | undefined;

  /**
   * The Amazon RDS reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  RDSInstanceDetails?: RDSInstanceDetails | undefined;

  /**
   * The Amazon Redshift reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  RedshiftInstanceDetails?: RedshiftInstanceDetails | undefined;

  /**
   * The ElastiCache reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails | undefined;

  /**
   * The Amazon OpenSearch Service reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  ESInstanceDetails?: ESInstanceDetails | undefined;

  /**
   * The MemoryDB reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  MemoryDBInstanceDetails?: MemoryDBInstanceDetails | undefined;
}

/**
 * The DynamoDB reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface DynamoDBCapacityDetails {
  /**
   * The capacity unit of the recommended reservation.
   *
   * @public
   */
  CapacityUnits?: string | undefined;

  /**
   * The Amazon Web Services Region of the recommended reservation.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Details about the reservations that Amazon Web Services recommends that you purchase.
 *
 * @public
 */
export interface ReservedCapacityDetails {
  /**
   * The DynamoDB reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  DynamoDBCapacityDetails?: DynamoDBCapacityDetails | undefined;
}

/**
 * Details about your recommended reservation purchase.
 *
 * @public
 */
export interface ReservationPurchaseRecommendationDetail {
  /**
   * The account that this Reserved Instance (RI) recommendation is for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Details about the reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  InstanceDetails?: InstanceDetails | undefined;

  /**
   * The number of instances that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  RecommendedNumberOfInstancesToPurchase?: string | undefined;

  /**
   * The number of normalized units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  RecommendedNormalizedUnitsToPurchase?: string | undefined;

  /**
   * The minimum number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MinimumNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * The minimum number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MinimumNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * The maximum number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MaximumNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * The maximum number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MaximumNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * The average number of instances that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  AverageNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * The average number of normalized units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  AverageNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * The average utilization of your instances. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  AverageUtilization?: string | undefined;

  /**
   * How long Amazon Web Services estimates that it takes for this instance to start saving you money, in months.
   *
   * @public
   */
  EstimatedBreakEvenInMonths?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to calculate the costs for this instance.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * How much Amazon Web Services estimates that this specific recommendation might save you in a month.
   *
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * How much Amazon Web Services estimates that this specific recommendation might save you in a month, as a percentage of your overall costs.
   *
   * @public
   */
  EstimatedMonthlySavingsPercentage?: string | undefined;

  /**
   * How much Amazon Web Services estimates that you spend on On-Demand Instances in a month.
   *
   * @public
   */
  EstimatedMonthlyOnDemandCost?: string | undefined;

  /**
   * How much Amazon Web Services estimates that you might spend for all usage during the specified historical period if you had a reservation.
   *
   * @public
   */
  EstimatedReservationCostForLookbackPeriod?: string | undefined;

  /**
   * How much purchasing this instance costs you upfront.
   *
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * How much purchasing this instance costs you on a monthly basis.
   *
   * @public
   */
  RecurringStandardMonthlyCost?: string | undefined;

  /**
   * Details about the reservations that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  ReservedCapacityDetails?: ReservedCapacityDetails | undefined;

  /**
   * The number of reserved capacity units that Amazon Web Services recommends that you purchase.
   *
   * @public
   */
  RecommendedNumberOfCapacityUnitsToPurchase?: string | undefined;

  /**
   * The minimum number of provisioned capacity units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MinimumNumberOfCapacityUnitsUsedPerHour?: string | undefined;

  /**
   * The maximum number of provisioned capacity units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  MaximumNumberOfCapacityUnitsUsedPerHour?: string | undefined;

  /**
   * The average number of provisioned capacity units that you used in an hour during the historical period. Amazon Web Services uses this to calculate your recommended reservation purchases.
   *
   * @public
   */
  AverageNumberOfCapacityUnitsUsedPerHour?: string | undefined;
}

/**
 * A summary about this recommendation, such as the currency code, the amount that Amazon Web Services estimates that you could save, and the total amount of reservation to purchase.
 *
 * @public
 */
export interface ReservationPurchaseRecommendationSummary {
  /**
   * The total amount that Amazon Web Services estimates that this recommendation could save you in a month.
   *
   * @public
   */
  TotalEstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * The total amount that Amazon Web Services estimates that this recommendation could save you in a month, as a percentage of your costs.
   *
   * @public
   */
  TotalEstimatedMonthlySavingsPercentage?: string | undefined;

  /**
   * The currency code used for this recommendation.
   *
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * A specific reservation that Amazon Web Services recommends for purchase.
 *
 * @public
 */
export interface ReservationPurchaseRecommendation {
  /**
   * The account scope that Amazon Web Services recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in Amazon Web Services Organizations.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * How many days of previous usage that Amazon Web Services considers when making this recommendation.
   *
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * The term of the reservation that you want recommendations for, in years.
   *
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * The payment option for the reservation (for example, `AllUpfront` or `NoUpfront`).
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * Hardware specifications for the service that you want recommendations for.
   *
   * @public
   */
  ServiceSpecification?: ServiceSpecification | undefined;

  /**
   * Details about the recommended purchases.
   *
   * @public
   */
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[] | undefined;

  /**
   * A summary about the recommended purchase.
   *
   * @public
   */
  RecommendationSummary?: ReservationPurchaseRecommendationSummary | undefined;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationResponse {
  /**
   * Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.
   *
   * @public
   */
  Metadata?: ReservationPurchaseRecommendationMetadata | undefined;

  /**
   * Recommendations for reservations to purchase.
   *
   * @public
   */
  Recommendations?: ReservationPurchaseRecommendation[] | undefined;

  /**
   * The pagination token for the next set of retrievable results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * The aggregated numbers for your reservation usage.
 *
 * @public
 */
export interface ReservationAggregates {
  /**
   * The percentage of reservation time that you used.
   *
   * @public
   */
  UtilizationPercentage?: string | undefined;

  /**
   * The percentage of Amazon EC2 reservation time that you used. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
   *
   * @public
   */
  UtilizationPercentageInUnits?: string | undefined;

  /**
   * How many reservation hours that you purchased.
   *
   * @public
   */
  PurchasedHours?: string | undefined;

  /**
   * The number of Amazon EC2 reservation hours that you purchased. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
   *
   * @public
   */
  PurchasedUnits?: string | undefined;

  /**
   * The total number of reservation hours that you used.
   *
   * @public
   */
  TotalActualHours?: string | undefined;

  /**
   * The total number of Amazon EC2 reservation hours that you used. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
   *
   * @public
   */
  TotalActualUnits?: string | undefined;

  /**
   * The number of reservation hours that you didn't use.
   *
   * @public
   */
  UnusedHours?: string | undefined;

  /**
   * The number of Amazon EC2 reservation hours that you didn't use. It's converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
   *
   * @public
   */
  UnusedUnits?: string | undefined;

  /**
   * How much your reservation costs if charged On-Demand rates.
   *
   * @public
   */
  OnDemandCostOfRIHoursUsed?: string | undefined;

  /**
   * How much you saved due to purchasing and utilizing reservation. Amazon Web Services calculates this by subtracting `TotalAmortizedFee` from `OnDemandCostOfRIHoursUsed`.
   *
   * @public
   */
  NetRISavings?: string | undefined;

  /**
   * How much you might save if you use your entire reservation.
   *
   * @public
   */
  TotalPotentialRISavings?: string | undefined;

  /**
   * The upfront cost of your reservation. It's amortized over the reservation period.
   *
   * @public
   */
  AmortizedUpfrontFee?: string | undefined;

  /**
   * The monthly cost of your reservation. It's amortized over the reservation period.
   *
   * @public
   */
  AmortizedRecurringFee?: string | undefined;

  /**
   * The total cost of your reservation. It's amortized over the reservation period.
   *
   * @public
   */
  TotalAmortizedFee?: string | undefined;

  /**
   * The cost of unused hours for your reservation.
   *
   * @public
   */
  RICostForUnusedHours?: string | undefined;

  /**
   * The realized savings because of purchasing and using a reservation.
   *
   * @public
   */
  RealizedSavings?: string | undefined;

  /**
   * The unrealized savings because of purchasing and using a reservation.
   *
   * @public
   */
  UnrealizedSavings?: string | undefined;
}

/**
 * A group of reservations that share a set of attributes.
 *
 * @public
 */
export interface ReservationUtilizationGroup {
  /**
   * The key for a specific reservation attribute.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of a specific reservation attribute.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The attributes for this group of reservations.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * How much you used this group of reservations.
   *
   * @public
   */
  Utilization?: ReservationAggregates | undefined;
}

/**
 * The amount of utilization, in hours.
 *
 * @public
 */
export interface UtilizationByTime {
  /**
   * The period of time that this utilization was used for.
   *
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * The groups that this utilization result uses.
   *
   * @public
   */
  Groups?: ReservationUtilizationGroup[] | undefined;

  /**
   * The total number of reservation hours that were used.
   *
   * @public
   */
  Total?: ReservationAggregates | undefined;
}

/**
 * @public
 */
export interface GetReservationUtilizationResponse {
  /**
   * The amount of time that you used your Reserved Instances (RIs).
   *
   * @public
   */
  UtilizationsByTime: UtilizationByTime[] | undefined;

  /**
   * The total amount of time that you used your Reserved Instances (RIs).
   *
   * @public
   */
  Total?: ReservationAggregates | undefined;

  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * You can use `RightsizingRecommendationConfiguration` to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or neither.
 *
 * @public
 */
export interface RightsizingRecommendationConfiguration {
  /**
   * The option to see recommendations within the same instance family or recommendations for instances across other families. The default value is `SAME_INSTANCE_FAMILY`.
   *
   * @public
   */
  RecommendationTarget: RecommendationTarget | undefined;

  /**
   * The option to consider RI or Savings Plans discount benefits in your savings calculation. The default value is `TRUE`.
   *
   * @public
   */
  BenefitsConsidered: boolean | undefined;
}

/**
 * Metadata for a recommendation set.
 *
 * @public
 */
export interface RightsizingRecommendationMetadata {
  /**
   * The ID for the recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The timestamp for when Amazon Web Services made the recommendation.
   *
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * The number of days of previous usage that Amazon Web Services considers when making the recommendation.
   *
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * Additional metadata that might be applicable to the recommendation.
   *
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * Details on the Amazon EC2 Resource.
 *
 * @public
 */
export interface EC2ResourceDetails {
  /**
   * The hourly public On-Demand rate for the instance type.
   *
   * @public
   */
  HourlyOnDemandRate?: string | undefined;

  /**
   * The type of Amazon Web Services instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The platform of the Amazon Web Services instance. The platform is the specific combination of operating system, license model, and software on an instance.
   *
   * @public
   */
  Platform?: string | undefined;

  /**
   * The Amazon Web Services Region of the instance.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The SKU of the product.
   *
   * @public
   */
  Sku?: string | undefined;

  /**
   * The memory capacity of the Amazon Web Services instance.
   *
   * @public
   */
  Memory?: string | undefined;

  /**
   * The network performance capacity of the Amazon Web Services instance.
   *
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * The disk storage of the Amazon Web Services instance. This doesn't include EBS storage.
   *
   * @public
   */
  Storage?: string | undefined;

  /**
   * The number of VCPU cores in the Amazon Web Services instance type.
   *
   * @public
   */
  Vcpu?: string | undefined;
}

/**
 * Details for the resource.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * Details for the Amazon EC2 resource.
   *
   * @public
   */
  EC2ResourceDetails?: EC2ResourceDetails | undefined;
}

/**
 * The field that contains a list of disk (local storage) metrics that are associated with the current instance.
 *
 * @public
 */
export interface DiskResourceUtilization {
  /**
   * The maximum number of read operations per second.
   *
   * @public
   */
  DiskReadOpsPerSecond?: string | undefined;

  /**
   * The maximum number of write operations per second.
   *
   * @public
   */
  DiskWriteOpsPerSecond?: string | undefined;

  /**
   * The maximum read throughput operations per second.
   *
   * @public
   */
  DiskReadBytesPerSecond?: string | undefined;

  /**
   * The maximum write throughput operations per second.
   *
   * @public
   */
  DiskWriteBytesPerSecond?: string | undefined;
}

/**
 * The EBS field that contains a list of EBS metrics that are associated with the current instance.
 *
 * @public
 */
export interface EBSResourceUtilization {
  /**
   * The maximum number of read operations per second.
   *
   * @public
   */
  EbsReadOpsPerSecond?: string | undefined;

  /**
   * The maximum number of write operations per second.
   *
   * @public
   */
  EbsWriteOpsPerSecond?: string | undefined;

  /**
   * The maximum size of read operations per second
   *
   * @public
   */
  EbsReadBytesPerSecond?: string | undefined;

  /**
   * The maximum size of write operations per second.
   *
   * @public
   */
  EbsWriteBytesPerSecond?: string | undefined;
}

/**
 * The network field that contains a list of network metrics that are associated with the current instance.
 *
 * @public
 */
export interface NetworkResourceUtilization {
  /**
   * The network inbound throughput utilization measured in Bytes per second (Bps).
   *
   * @public
   */
  NetworkInBytesPerSecond?: string | undefined;

  /**
   * The network outbound throughput utilization measured in Bytes per second (Bps).
   *
   * @public
   */
  NetworkOutBytesPerSecond?: string | undefined;

  /**
   * The network inbound packets that are measured in packets per second.
   *
   * @public
   */
  NetworkPacketsInPerSecond?: string | undefined;

  /**
   * The network outbound packets that are measured in packets per second.
   *
   * @public
   */
  NetworkPacketsOutPerSecond?: string | undefined;
}

/**
 * Utilization metrics for the instance.
 *
 * @public
 */
export interface EC2ResourceUtilization {
  /**
   * The maximum observed or expected CPU utilization of the instance.
   *
   * @public
   */
  MaxCpuUtilizationPercentage?: string | undefined;

  /**
   * The maximum observed or expected memory utilization of the instance.
   *
   * @public
   */
  MaxMemoryUtilizationPercentage?: string | undefined;

  /**
   * The maximum observed or expected storage utilization of the instance. This doesn't include EBS storage.
   *
   * @public
   */
  MaxStorageUtilizationPercentage?: string | undefined;

  /**
   * The EBS field that contains a list of EBS metrics that are associated with the current instance.
   *
   * @public
   */
  EBSResourceUtilization?: EBSResourceUtilization | undefined;

  /**
   * The field that contains a list of disk (local storage) metrics that are associated with the current instance.
   *
   * @public
   */
  DiskResourceUtilization?: DiskResourceUtilization | undefined;

  /**
   * The network field that contains a list of network metrics that are associated with the current instance.
   *
   * @public
   */
  NetworkResourceUtilization?: NetworkResourceUtilization | undefined;
}

/**
 * Resource utilization of current resource.
 *
 * @public
 */
export interface ResourceUtilization {
  /**
   * The utilization of current Amazon EC2 instance.
   *
   * @public
   */
  EC2ResourceUtilization?: EC2ResourceUtilization | undefined;
}

/**
 * Context about the current instance.
 *
 * @public
 */
export interface CurrentInstance {
  /**
   * Resource ID of the current instance.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name that you given an instance. This field shows as blank if you haven't given the instance a name.
   *
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * Cost allocation resource tags that are applied to the instance.
   *
   * @public
   */
  Tags?: TagValues[] | undefined;

  /**
   * Details about the resource and utilization.
   *
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;

  /**
   * Utilization information of the current instance during the lookback period.
   *
   * @public
   */
  ResourceUtilization?: ResourceUtilization | undefined;

  /**
   * The number of hours during the lookback period that's covered by reservations.
   *
   * @public
   */
  ReservationCoveredHoursInLookbackPeriod?: string | undefined;

  /**
   * The number of hours during the lookback period that's covered by Savings Plans.
   *
   * @public
   */
  SavingsPlansCoveredHoursInLookbackPeriod?: string | undefined;

  /**
   * The number of hours during the lookback period that's billed at On-Demand rates.
   *
   * @public
   */
  OnDemandHoursInLookbackPeriod?: string | undefined;

  /**
   * The total number of hours that the instance ran during the lookback period.
   *
   * @public
   */
  TotalRunningHoursInLookbackPeriod?: string | undefined;

  /**
   * The current On-Demand cost of operating this instance on a monthly basis.
   *
   * @public
   */
  MonthlyCost?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to calculate the costs for this instance.
   *
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * Details on recommended instance.
 *
 * @public
 */
export interface TargetInstance {
  /**
   * The expected cost to operate this instance type on a monthly basis.
   *
   * @public
   */
  EstimatedMonthlyCost?: string | undefined;

  /**
   * The estimated savings that result from modification, on a monthly basis.
   *
   * @public
   */
  EstimatedMonthlySavings?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to calculate the costs for this instance.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * Determines whether this recommendation is the defaulted Amazon Web Services recommendation.
   *
   * @public
   */
  DefaultTargetInstance?: boolean | undefined;

  /**
   * Details on the target instance type.
   *
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;

  /**
   * The expected utilization metrics for target instance type.
   *
   * @public
   */
  ExpectedResourceUtilization?: ResourceUtilization | undefined;

  /**
   * Explains the actions that you might need to take to successfully migrate your workloads from the current instance type to the recommended instance type.
   *
   * @public
   */
  PlatformDifferences?: PlatformDifference[] | undefined;
}

/**
 * Details for the modification recommendation.
 *
 * @public
 */
export interface ModifyRecommendationDetail {
  /**
   * Determines whether this instance type is the Amazon Web Services default recommendation.
   *
   * @public
   */
  TargetInstances?: TargetInstance[] | undefined;
}

/**
 * Details on termination recommendation.
 *
 * @public
 */
export interface TerminateRecommendationDetail {
  /**
   * The estimated savings that result from modification, on a monthly basis.
   *
   * @public
   */
  EstimatedMonthlySavings?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to calculate the costs for this instance.
   *
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * Recommendations to rightsize resources.
 *
 * @public
 */
export interface RightsizingRecommendation {
  /**
   * The account that this recommendation is for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * Context regarding the current instance.
   *
   * @public
   */
  CurrentInstance?: CurrentInstance | undefined;

  /**
   * A recommendation to either terminate or modify the resource.
   *
   * @public
   */
  RightsizingType?: RightsizingType | undefined;

  /**
   * The details for the modification recommendations.
   *
   * @public
   */
  ModifyRecommendationDetail?: ModifyRecommendationDetail | undefined;

  /**
   * The details for termination recommendations.
   *
   * @public
   */
  TerminateRecommendationDetail?: TerminateRecommendationDetail | undefined;

  /**
   * The list of possible reasons why the recommendation is generated, such as under- or over-utilization of specific metrics (for example, CPU, Memory, Network).
   *
   * @public
   */
  FindingReasonCodes?: FindingReasonCode[] | undefined;
}

/**
 * The summary of rightsizing recommendations
 *
 * @public
 */
export interface RightsizingRecommendationSummary {
  /**
   * The total number of instance recommendations.
   *
   * @public
   */
  TotalRecommendationCount?: string | undefined;

  /**
   * The estimated total savings resulting from modifications, on a monthly basis.
   *
   * @public
   */
  EstimatedTotalMonthlySavingsAmount?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to calculate the savings.
   *
   * @public
   */
  SavingsCurrencyCode?: string | undefined;

  /**
   * The savings percentage based on the recommended modifications. It's relative to the total On-Demand costs that are associated with these instances.
   *
   * @public
   */
  SavingsPercentage?: string | undefined;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationResponse {
  /**
   * Information regarding this specific recommendation set.
   *
   * @public
   */
  Metadata?: RightsizingRecommendationMetadata | undefined;

  /**
   * Summary of this recommendation set.
   *
   * @public
   */
  Summary?: RightsizingRecommendationSummary | undefined;

  /**
   * Recommendations to rightsize resources.
   *
   * @public
   */
  RightsizingRecommendations?: RightsizingRecommendation[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither.
   *
   * @public
   */
  Configuration?: RightsizingRecommendationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {
  /**
   * The ID that is associated with the Savings Plan recommendation.
   *
   * @public
   */
  RecommendationDetailId: string | undefined;
}

/**
 * The details and metrics for the given recommendation.
 *
 * @public
 */
export interface RecommendationDetailData {
  /**
   * The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * How many days of previous usage that Amazon Web Services considers when making this recommendation.
   *
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * The requested Savings Plan recommendation type.
   *
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * The term of the commitment in years.
   *
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * The payment option for the commitment (for example, All Upfront or No Upfront).
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The AccountID that the recommendation is generated for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to generate the recommendation and present potential savings.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The instance family of the recommended Savings Plan.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The region the recommendation is generated for.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The unique ID that's used to distinguish Savings Plans from one another.
   *
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * The period of time that you want the usage and costs for.
   *
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * The period of time that you want the usage and costs for.
   *
   * @public
   */
  LatestUsageTimestamp?: string | undefined;

  /**
   * The average value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * The estimated utilization of the recommended Savings Plan.
   *
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * The estimated monthly savings amount based on the recommended Savings Plan.
   *
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * The remaining On-Demand cost estimated to not be covered by the recommended Savings Plan, over the length of the lookback period.
   *
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * The estimated On-Demand costs you expect with no additional commitment, based on your usage of the selected time period and the Savings Plan you own.
   *
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * The estimated return on investment that's based on the recommended Savings Plan that you purchased. This is calculated as estimatedSavingsAmount/estimatedSPCost*100.
   *
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * The cost of the recommended Savings Plan over the length of the lookback period.
   *
   * @public
   */
  EstimatedSPCost?: string | undefined;

  /**
   * The estimated savings amount that's based on the recommended Savings Plan over the length of the lookback period.
   *
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.
   *
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * The existing hourly commitment for the Savings Plan type.
   *
   * @public
   */
  ExistingHourlyCommitment?: string | undefined;

  /**
   * The recommended hourly commitment level for the Savings Plan type and the configuration that's based on the usage during the lookback period.
   *
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * The upfront cost of the recommended Savings Plan, based on the selected payment option.
   *
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * The average value of hourly coverage over the lookback period.
   *
   * @public
   */
  CurrentAverageCoverage?: string | undefined;

  /**
   * The estimated coverage of the recommended Savings Plan.
   *
   * @public
   */
  EstimatedAverageCoverage?: string | undefined;

  /**
   * The related hourly cost, coverage, and utilization metrics over the lookback period.
   *
   * @public
   */
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[] | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
  /**
   * The ID that is associated with the Savings Plan recommendation.
   *
   * @public
   */
  RecommendationDetailId?: string | undefined;

  /**
   * Contains detailed information about a specific Savings Plan recommendation.
   *
   * @public
   */
  RecommendationDetailData?: RecommendationDetailData | undefined;
}

/**
 * Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.
 *
 * @public
 */
export interface SavingsPlansCoverageData {
  /**
   * The amount of your Amazon Web Services usage that's covered by a Savings Plans.
   *
   * @public
   */
  SpendCoveredBySavingsPlans?: string | undefined;

  /**
   * The cost of your Amazon Web Services usage at the public On-Demand rate.
   *
   * @public
   */
  OnDemandCost?: string | undefined;

  /**
   * The total cost of your Amazon Web Services usage, regardless of your purchase option.
   *
   * @public
   */
  TotalCost?: string | undefined;

  /**
   * The percentage of your existing Savings Plans covered usage, divided by all of your eligible Savings Plans usage in an account (or set of accounts).
   *
   * @public
   */
  CoveragePercentage?: string | undefined;
}

/**
 * The amount of Savings Plans eligible usage that's covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.
 *
 * @public
 */
export interface SavingsPlansCoverage {
  /**
   * The attribute that applies to a specific `Dimension`.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * The amount of Savings Plans eligible usage that the Savings Plans covered.
   *
   * @public
   */
  Coverage?: SavingsPlansCoverageData | undefined;

  /**
   * The time period of the request.
   *
   * @public
   */
  TimePeriod?: DateInterval | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageResponse {
  /**
   * The amount of spend that your Savings Plans covered.
   *
   * @public
   */
  SavingsPlansCoverages: SavingsPlansCoverage[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Metadata about your Savings Plans Purchase Recommendations.
 *
 * @public
 */
export interface SavingsPlansPurchaseRecommendationMetadata {
  /**
   * The unique identifier for the recommendation set.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The timestamp that shows when the recommendations were generated.
   *
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * Additional metadata that might be applicable to the recommendation.
   *
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * The attribute details on a specific Savings Plan.
 *
 * @public
 */
export interface SavingsPlansDetails {
  /**
   * A collection of Amazon Web Services resources in a geographic area. Each Amazon Web Services Region is isolated and independent of the other Regions.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * A group of instance types that Savings Plans applies to.
   *
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * The unique ID that's used to distinguish Savings Plans from one another.
   *
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * Details for your recommended Savings Plans.
 *
 * @public
 */
export interface SavingsPlansPurchaseRecommendationDetail {
  /**
   * Details for your recommended Savings Plans.
   *
   * @public
   */
  SavingsPlansDetails?: SavingsPlansDetails | undefined;

  /**
   * The `AccountID` the recommendation is generated for.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The upfront cost of the recommended Savings Plans, based on the selected payment option.
   *
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * The estimated return on investment that's based on the recommended Savings Plans that you purchased. This is calculated as `estimatedSavingsAmount`/ `estimatedSPCost`*100.
   *
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to generate the recommendations and present potential savings.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The cost of the recommended Savings Plans over the length of the lookback period.
   *
   * @public
   */
  EstimatedSPCost?: string | undefined;

  /**
   * The remaining On-Demand cost estimated to not be covered by the recommended Savings Plans, over the length of the lookback period.
   *
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * The estimated On-Demand costs you expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own.
   *
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * The estimated savings amount that's based on the recommended Savings Plans over the length of the lookback period.
   *
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.
   *
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * The recommended hourly commitment level for the Savings Plans type and the configuration that's based on the usage during the lookback period.
   *
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * The estimated utilization of the recommended Savings Plans.
   *
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * The estimated monthly savings amount based on the recommended Savings Plans.
   *
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * The average value of hourly On-Demand spend over the lookback period of the applicable usage type.
   *
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * Contains detailed information about a specific Savings Plan recommendation.
   *
   * @public
   */
  RecommendationDetailId?: string | undefined;
}

/**
 * Summary metrics for your Savings Plans Purchase Recommendations.
 *
 * @public
 */
export interface SavingsPlansPurchaseRecommendationSummary {
  /**
   * The estimated return on investment that's based on the recommended Savings Plans and estimated savings.
   *
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * The currency code that Amazon Web Services used to generate the recommendations and present potential savings.
   *
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * The estimated total cost of the usage after purchasing the recommended Savings Plans. This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand usage.
   *
   * @public
   */
  EstimatedTotalCost?: string | undefined;

  /**
   * The current total on demand spend of the applicable usage types over the lookback period.
   *
   * @public
   */
  CurrentOnDemandSpend?: string | undefined;

  /**
   * The estimated total savings over the lookback period, based on the purchase of the recommended Savings Plans.
   *
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * The aggregate number of Savings Plans recommendations that exist for your account.
   *
   * @public
   */
  TotalRecommendationCount?: string | undefined;

  /**
   * The recommended Savings Plans cost on a daily (24 hourly) basis.
   *
   * @public
   */
  DailyCommitmentToPurchase?: string | undefined;

  /**
   * The recommended hourly commitment that's based on the recommendation parameters.
   *
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * The estimated savings relative to the total cost of On-Demand usage, over the lookback period. This is calculated as `estimatedSavingsAmount`/ `CurrentOnDemandSpend`*100.
   *
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * The estimated monthly savings amount that's based on the recommended Savings Plans purchase.
   *
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * The estimated On-Demand costs you expect with no additional commitment. It's based on your usage of the selected time period and the Savings Plans you own.
   *
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;
}

/**
 * Contains your request parameters, Savings Plan Recommendations Summary, and Details.
 *
 * @public
 */
export interface SavingsPlansPurchaseRecommendation {
  /**
   * The account scope that you want your recommendations for. Amazon Web Services calculates recommendations that include the management account and member accounts if the value is set to `PAYER`. If the value is `LINKED`, recommendations are calculated for individual member accounts only.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * The requested Savings Plans recommendation type.
   *
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * The Savings Plans recommendation term in years. It's used to generate the recommendation.
   *
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * The payment option that's used to generate the recommendation.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The lookback period in days that's used to generate the recommendation.
   *
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * Details for the Savings Plans that we recommend that you purchase to cover existing Savings Plans eligible workloads.
   *
   * @public
   */
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[] | undefined;

  /**
   * Summary metrics for your Savings Plans Recommendations.
   *
   * @public
   */
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationResponse {
  /**
   * Information that regards this specific recommendation set.
   *
   * @public
   */
  Metadata?: SavingsPlansPurchaseRecommendationMetadata | undefined;

  /**
   * Contains your request parameters, Savings Plan Recommendations Summary, and Details.
   *
   * @public
   */
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation | undefined;

  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * The amortized amount of Savings Plans purchased in a specific account during a specific time interval.
 *
 * @public
 */
export interface SavingsPlansAmortizedCommitment {
  /**
   * The amortized amount of your Savings Plans commitment that was purchased with either a `Partial` or a `NoUpfront`.
   *
   * @public
   */
  AmortizedRecurringCommitment?: string | undefined;

  /**
   * The amortized amount of your Savings Plans commitment that was purchased with an `Upfront` or `PartialUpfront` Savings Plans.
   *
   * @public
   */
  AmortizedUpfrontCommitment?: string | undefined;

  /**
   * The total amortized amount of your Savings Plans commitment, regardless of your Savings Plans purchase method.
   *
   * @public
   */
  TotalAmortizedCommitment?: string | undefined;
}

/**
 * The amount of savings that you're accumulating, against the public On-Demand rate of the usage accrued in an account.
 *
 * @public
 */
export interface SavingsPlansSavings {
  /**
   * The savings amount that you're accumulating for the usage that's covered by a Savings Plans, when compared to the On-Demand equivalent of the same usage.
   *
   * @public
   */
  NetSavings?: string | undefined;

  /**
   * How much the amount that the usage would have cost if it was accrued at the On-Demand rate.
   *
   * @public
   */
  OnDemandCostEquivalent?: string | undefined;
}

/**
 * The measurement of how well you're using your existing Savings Plans.
 *
 * @public
 */
export interface SavingsPlansUtilization {
  /**
   * The total amount of Savings Plans commitment that's been purchased in an account (or set of accounts).
   *
   * @public
   */
  TotalCommitment?: string | undefined;

  /**
   * The amount of your Savings Plans commitment that was consumed from Savings Plans eligible usage in a specific period.
   *
   * @public
   */
  UsedCommitment?: string | undefined;

  /**
   * The amount of your Savings Plans commitment that wasn't consumed from Savings Plans eligible usage in a specific period.
   *
   * @public
   */
  UnusedCommitment?: string | undefined;

  /**
   * The amount of `UsedCommitment` divided by the `TotalCommitment` for your Savings Plans.
   *
   * @public
   */
  UtilizationPercentage?: string | undefined;
}

/**
 * The amount of Savings Plans utilization (in hours).
 *
 * @public
 */
export interface SavingsPlansUtilizationByTime {
  /**
   * The time period of the request.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
   *
   * @public
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * The amount that's saved by using existing Savings Plans. Savings returns both net savings from Savings Plans and also the `onDemandCostEquivalent` of the Savings Plans when considering the utilization rate.
   *
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.
   *
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * The aggregated utilization metrics for your Savings Plans usage.
 *
 * @public
 */
export interface SavingsPlansUtilizationAggregates {
  /**
   * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
   *
   * @public
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * The amount that's saved by using existing Savings Plans. Savings returns both net savings from Savings Plans and also the `onDemandCostEquivalent` of the Savings Plans when considering the utilization rate.
   *
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.
   *
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationResponse {
  /**
   * The amount of cost/commitment that you used your Savings Plans. You can use it to specify date ranges.
   *
   * @public
   */
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[] | undefined;

  /**
   * The total amount of cost/commitment that you used your Savings Plans, regardless of date ranges.
   *
   * @public
   */
  Total: SavingsPlansUtilizationAggregates | undefined;
}

/**
 * A single daily or monthly Savings Plans utilization rate and details for your account. A management account in an organization have access to member accounts. You can use `GetDimensionValues` to determine the possible dimension values.
 *
 * @public
 */
export interface SavingsPlansUtilizationDetail {
  /**
   * The unique Amazon Resource Name (ARN) for a particular Savings Plan.
   *
   * @public
   */
  SavingsPlanArn?: string | undefined;

  /**
   * The attribute that applies to a specific `Dimension`.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
   *
   * @public
   */
  Utilization?: SavingsPlansUtilization | undefined;

  /**
   * The amount saved by using existing Savings Plans. Savings returns both net savings from savings plans and also the `onDemandCostEquivalent` of the Savings Plans when considering the utilization rate.
   *
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * The total amortized commitment for a Savings Plans. Includes the sum of the upfront and recurring Savings Plans fees.
   *
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsResponse {
  /**
   * Retrieves a single daily or monthly Savings Plans utilization rate and details for your account.
   *
   * @public
   */
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[] | undefined;

  /**
   * The total Savings Plans utilization, regardless of time period.
   *
   * @public
   */
  Total?: SavingsPlansUtilizationAggregates | undefined;

  /**
   * The time period of the request.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * The token for the next set of retrievable results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The tags that match your request.
   *
   * @public
   */
  Tags: string[] | undefined;

  /**
   * The number of query results that Amazon Web Services returns at a time.
   *
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * The total number of query results.
   *
   * @public
   */
  TotalSize: number | undefined;
}

/**
 * @public
 */
export interface GetUsageForecastResponse {
  /**
   * How much you're forecasted to use over the forecast period.
   *
   * @public
   */
  Total?: MetricValue | undefined;

  /**
   * The forecasts for your query, in order. For `DAILY` forecasts, this is a list of days. For `MONTHLY` forecasts, this is a list of months.
   *
   * @public
   */
  ForecastResultsByTime?: ForecastResult[] | undefined;
}

/**
 * @public
 */
export interface ListCommitmentPurchaseAnalysesRequest {
  /**
   * The status of the analysis.
   *
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The number of analyses that you want returned in a single response object.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The analysis IDs associated with the commitment purchase analyses.
   *
   * @public
   */
  AnalysisIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCommitmentPurchaseAnalysesResponse {
  /**
   * The list of analyses.
   *
   * @public
   */
  AnalysisSummaryList?: AnalysisSummary[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagBackfillHistoryRequest {
  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that are returned for this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The cost allocation tag backfill request structure that contains metadata and details of a certain backfill.
 *
 * @public
 */
export interface CostAllocationTagBackfillRequest {
  /**
   * The date the backfill starts from.
   *
   * @public
   */
  BackfillFrom?: string | undefined;

  /**
   * The time when the backfill was requested.
   *
   * @public
   */
  RequestedAt?: string | undefined;

  /**
   * The backfill completion time.
   *
   * @public
   */
  CompletedAt?: string | undefined;

  /**
   * The status of the cost allocation tag backfill request.
   *
   * @public
   */
  BackfillStatus?: CostAllocationTagBackfillStatus | undefined;

  /**
   * The time when the backfill status was last updated.
   *
   * @public
   */
  LastUpdatedAt?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagBackfillHistoryResponse {
  /**
   * The list of historical cost allocation tag backfill requests.
   *
   * @public
   */
  BackfillRequests?: CostAllocationTagBackfillRequest[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagsRequest {
  /**
   * The status of cost allocation tag keys that are returned for this request.
   *
   * @public
   */
  Status?: CostAllocationTagStatus | undefined;

  /**
   * The list of cost allocation tag keys that are returned for this request.
   *
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * The type of `CostAllocationTag` object that are returned for this request. The `AWSGenerated` type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. The `UserDefined` type tags are tags that you define, create, and apply to resources.
   *
   * @public
   */
  Type?: CostAllocationTagType | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects that are returned for this request. By default, the request returns 100 results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The cost allocation tag structure. This includes detailed metadata for the `CostAllocationTag` object.
 *
 * @public
 */
export interface CostAllocationTag {
  /**
   * The key for the cost allocation tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * The type of cost allocation tag. You can use `AWSGenerated` or `UserDefined` type tags. `AWSGenerated` type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. `UserDefined` type tags are tags that you define, create, and apply to resources.
   *
   * @public
   */
  Type: CostAllocationTagType | undefined;

  /**
   * The status of a cost allocation tag.
   *
   * @public
   */
  Status: CostAllocationTagStatus | undefined;

  /**
   * The last date that the tag was either activated or deactivated.
   *
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * The last month that the tag was used on an Amazon Web Services resource.
   *
   * @public
   */
  LastUsedDate?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagsResponse {
  /**
   * A list of cost allocation tags that includes the detailed metadata for each one.
   *
   * @public
   */
  CostAllocationTags?: CostAllocationTag[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsRequest {
  /**
   * The date when the cost category was effective.
   *
   * @public
   */
  EffectiveOn?: string | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter cost category definitions that are supported by given resource types based on the latest version. If the filter is present, the result only includes Cost Categories that supports input resource type. If the filter isn't provided, no filtering is applied. The valid values are `billing:rispgroupsharing`, `billing:billingview`, and `billing:creditsharing`.
   *
   * @public
   */
  SupportedResourceTypes?: string[] | undefined;
}

/**
 * A reference to a cost category containing only enough information to identify the Cost Category.
 *
 * You can use this information to retrieve the full cost category information using `DescribeCostCategory`.
 *
 * @public
 */
export interface CostCategoryReference {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * The unique name of the cost category.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The cost category's effective start date.
   *
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * The cost category's effective end date.
   *
   * @public
   */
  EffectiveEnd?: string | undefined;

  /**
   * The number of rules that are associated with a specific cost category.
   *
   * @public
   */
  NumberOfRules?: number | undefined;

  /**
   * The list of processing statuses for Cost Management products for a specific cost category.
   *
   * @public
   */
  ProcessingStatus?: CostCategoryProcessingStatus[] | undefined;

  /**
   * A list of unique cost category values in a specific cost category.
   *
   * @public
   */
  Values?: string[] | undefined;

  /**
   * The default value for the cost category.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The resource types supported by a specific cost category.
   *
   * @public
   */
  SupportedResourceTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsResponse {
  /**
   * A reference to a cost category that contains enough information to identify the Cost Category.
   *
   * @public
   */
  CostCategoryReferences?: CostCategoryReference[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryResourceAssociationsRequest {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of entries a paginated response contains.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A reference to a cost category association that contains information on an associated resource.
 *
 * @public
 */
export interface CostCategoryResourceAssociation {
  /**
   * The unique identifier for an associated resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The unique name of the cost category.
   *
   * @public
   */
  CostCategoryName?: string | undefined;

  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryResourceAssociationsResponse {
  /**
   * A reference to a cost category association that contains information on an associated resource.
   *
   * @public
   */
  CostCategoryResourceAssociations?: CostCategoryResourceAssociation[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
  /**
   * The status of the recommendation generation.
   *
   * @public
   */
  GenerationStatus?: GenerationStatus | undefined;

  /**
   * The IDs for each specific recommendation.
   *
   * @public
   */
  RecommendationIds?: string[] | undefined;

  /**
   * The number of recommendations that you want returned in a single response object.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * The summary of the Savings Plans recommendation generation.
 *
 * @public
 */
export interface GenerationSummary {
  /**
   * Indicates the ID for this specific recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * Indicates whether the recommendation generation succeeded, is processing, or failed.
   *
   * @public
   */
  GenerationStatus?: GenerationStatus | undefined;

  /**
   * Indicates the start time of the recommendation generation.
   *
   * @public
   */
  GenerationStartedTime?: string | undefined;

  /**
   * Indicates the completion time of the recommendation generation.
   *
   * @public
   */
  GenerationCompletionTime?: string | undefined;

  /**
   * Indicates the estimated time for when the recommendation generation will complete.
   *
   * @public
   */
  EstimatedCompletionTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
  /**
   * The list of historical recommendation generations.
   *
   * @public
   */
  GenerationSummaryList?: GenerationSummary[] | undefined;

  /**
   * The token to retrieve the next set of results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see [ResourceTag](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html).
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tag key value pairs that are associated with the resource.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackRequest {
  /**
   * A cost anomaly ID.
   *
   * @public
   */
  AnomalyId: string | undefined;

  /**
   * Describes whether the cost anomaly was a planned activity or you considered it an anomaly.
   *
   * @public
   */
  Feedback: AnomalyFeedbackType | undefined;
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackResponse {
  /**
   * The ID of the modified cost anomaly.
   *
   * @public
   */
  AnomalyId: string | undefined;
}

/**
 * @public
 */
export interface StartCommitmentPurchaseAnalysisRequest {
  /**
   * The configuration for the commitment purchase analysis.
   *
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface StartCommitmentPurchaseAnalysisResponse {
  /**
   * The analysis ID that's associated with the commitment purchase analysis.
   *
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * The start time of the analysis.
   *
   * @public
   */
  AnalysisStartedTime: string | undefined;

  /**
   * The estimated time for when the analysis will complete.
   *
   * @public
   */
  EstimatedCompletionTime: string | undefined;
}

/**
 * @public
 */
export interface StartCostAllocationTagBackfillRequest {
  /**
   * The date you want the backfill to start from. The date can only be a first day of the month (a billing start date). Dates can't precede the previous twelve months, or in the future.
   *
   * @public
   */
  BackfillFrom: string | undefined;
}

/**
 * @public
 */
export interface StartCostAllocationTagBackfillResponse {
  /**
   * An object containing detailed metadata of your new backfill request.
   *
   * @public
   */
  BackfillRequest?: CostAllocationTagBackfillRequest | undefined;
}

/**
 * @public
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationRequest {}

/**
 * @public
 */
export interface StartSavingsPlansPurchaseRecommendationGenerationResponse {
  /**
   * The ID for this specific recommendation.
   *
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * The start time of the recommendation generation.
   *
   * @public
   */
  GenerationStartedTime?: string | undefined;

  /**
   * The estimated time for when the recommendation generation will complete.
   *
   * @public
   */
  EstimatedCompletionTime?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see [ResourceTag](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag key-value pairs to be added to the resource.
   *
   * Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *
   * - Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use
   * - The maximum length of a key is 128 characters
   * - The maximum length of a value is 256 characters
   * - Keys and values can only contain alphanumeric characters, spaces, and any of the following: `_.:/=+@-`
   * - Keys and values are case sensitive
   * - Keys and values are trimmed for any leading or trailing whitespaces
   * - Don’t use `aws:` as a prefix for your keys. This prefix is reserved for Amazon Web Services use
   *
   * @public
   */
  ResourceTags: ResourceTag[] | undefined;
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
   * The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see [ResourceTag](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tag keys associated with tags that need to be removed from the resource. If you specify a tag key that doesn't exist, it's ignored. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.
   *
   * @public
   */
  ResourceTagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAnomalyMonitorRequest {
  /**
   * Cost anomaly monitor Amazon Resource Names (ARNs).
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * The new name for the cost anomaly monitor.
   *
   * @public
   */
  MonitorName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyMonitorResponse {
  /**
   * A cost anomaly monitor ARN.
   *
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionResponse {
  /**
   * A cost anomaly subscription ARN.
   *
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * The cost allocation tag status. The status of a key can either be active or inactive.
 *
 * @public
 */
export interface CostAllocationTagStatusEntry {
  /**
   * The key for the cost allocation tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * The status of a cost allocation tag.
   *
   * @public
   */
  Status: CostAllocationTagStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusRequest {
  /**
   * The list of `CostAllocationTagStatusEntry` objects that are used to update cost allocation tags status for this request.
   *
   * @public
   */
  CostAllocationTagsStatus: CostAllocationTagStatusEntry[] | undefined;
}

/**
 * Gives a detailed description of the result of an action. It's on each cost allocation tag entry in the request.
 *
 * @public
 */
export interface UpdateCostAllocationTagsStatusError {
  /**
   * The key for the cost allocation tag.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * An error code representing why the action failed on this entry.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A message explaining why the action failed on this entry.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusResponse {
  /**
   * A list of `UpdateCostAllocationTagsStatusError` objects with error details about each cost allocation tag that can't be updated. If there's no failure, an empty array returns.
   *
   * @public
   */
  Errors?: UpdateCostAllocationTagsStatusError[] | undefined;
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionResponse {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * The cost category's effective start date. It can only be a billing start date (first day of the month).
   *
   * @public
   */
  EffectiveStart?: string | undefined;
}

/**
 * Use `Expression` to filter in various Cost Explorer APIs.
 *
 * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
 *
 * There are two patterns:
 *
 * - Simple dimension values.
 *
 *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
 *
 *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
 *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
 *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
 *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
 *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
 *
 *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
 *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
 *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
 *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
 *
 *     - For example, you can filter for linked account names that start with "a".
 *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
 * - Compound `Expression` types with logical operations.
 *
 *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
 *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
 *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
 *
 *   > **Note:**
 *   >
 *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
 *   >
 *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
 *
 * > **Note:**
 * >
 * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
 * >
 * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
 *
 * @public
 */
export interface Expression {
  /**
   * Return results that match either `Dimension` object.
   *
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * Return results that match both `Dimension` objects.
   *
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * Return results that don't match a `Dimension` object.
   *
   * @public
   */
  Not?: Expression | undefined;

  /**
   * The specific `Dimension` to use for `Expression`.
   *
   * @public
   */
  Dimensions?: DimensionValues | undefined;

  /**
   * The specific `Tag` to use for `Expression`.
   *
   * @public
   */
  Tags?: TagValues | undefined;

  /**
   * The filter that's based on `CostCategory` values.
   *
   * @public
   */
  CostCategories?: CostCategoryValues | undefined;

  /**
   * The filter that's based on `ProductAttributeValues`. Use it to filter the costs of supported services, such as Amazon Bedrock, by product attributes. The following operations support this filter: `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories`. For the supported services and keys, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *
   * @public
   */
  ProductAttributes?: ProductAttributeValues | undefined;
}

/**
 * This object continuously inspects your account's cost data for anomalies. It's based on `MonitorType` and `MonitorSpecification`. The content consists of detailed metadata and the current status of the monitor object.
 *
 * @public
 */
export interface AnomalyMonitor {
  /**
   * The Amazon Resource Name (ARN) value.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The date when the monitor was created.
   *
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * The date when the monitor was last updated.
   *
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * The date when the monitor last evaluated for anomalies.
   *
   * @public
   */
  LastEvaluatedDate?: string | undefined;

  /**
   * The type of the monitor.
   *
   * Set this to `DIMENSIONAL` for an Amazon Web Services managed monitor. Amazon Web Services managed monitors automatically track up to the top 5,000 values by cost within a dimension of your choosing. Each dimension value is evaluated independently. If you start incurring cost in a new value of your chosen dimension, it will automatically be analyzed by an Amazon Web Services managed monitor.
   *
   * Set this to `CUSTOM` for a customer managed monitor. Customer managed monitors let you select specific dimension values that get monitored in aggregate.
   *
   * For more information about monitor types, see [Monitor types](https://docs.aws.amazon.com/cost-management/latest/userguide/getting-started-ad.html#monitor-type-def) in the *Billing and Cost Management User Guide*.
   *
   * @public
   */
  MonitorType: MonitorType | undefined;

  /**
   * For customer managed monitors, do not specify this field.
   *
   * For Amazon Web Services managed monitors, this field controls which cost dimension is automatically analyzed by the monitor. For `TAG` and `COST_CATEGORY` dimensions, you must also specify MonitorSpecification to configure the specific tag or cost category key to analyze.
   *
   * @public
   */
  MonitorDimension?: MonitorDimension | undefined;

  /**
   * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object used to control what costs the monitor analyzes for anomalies.
   *
   * For Amazon Web Services managed monitors:
   *
   * - If MonitorDimension is `SERVICE` or `LINKED_ACCOUNT`, do not specify this field
   * - If MonitorDimension is `TAG`, set this field to `\{ "Tags": \{ "Key": "your tag key" \} \}`
   * - If MonitorDimension is `COST_CATEGORY`, set this field to `\{ "CostCategories": \{ "Key": "your cost category key" \} \}`
   *
   * For customer managed monitors:
   *
   * - To track linked accounts, set this field to `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT", "Values": [ "your list of up to 10 account IDs" ] \} \}`
   * - To track cost allocation tags, set this field to `\{ "Tags": \{ "Key": "your tag key", "Values": [ "your list of up to 10 tag values" ] \} \}`
   * - To track cost categories, set this field to`\{ "CostCategories": \{ "Key": "your cost category key", "Values": [ "your cost category value" ] \} \}`
   *
   * @public
   */
  MonitorSpecification?: Expression | undefined;

  /**
   * The value for evaluated dimensions.
   *
   * @public
   */
  DimensionalValueCount?: number | undefined;
}

/**
 * An `AnomalySubscription` resource (also referred to as an alert subscription) sends notifications about specific anomalies that meet an alerting criteria defined by you.
 *
 * You can specify the frequency of the alerts and the subscribers to notify.
 *
 * Anomaly subscriptions can be associated with one or more [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html) resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.
 *
 * Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the [`GetAnomalies`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html) API.
 *
 * @public
 */
export interface AnomalySubscription {
  /**
   * The `AnomalySubscription` Amazon Resource Name (ARN).
   *
   * @public
   */
  SubscriptionArn?: string | undefined;

  /**
   * Your unique account identifier.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * A list of cost anomaly monitors.
   *
   * @public
   */
  MonitorArnList: string[] | undefined;

  /**
   * A list of subscribers to notify.
   *
   * @public
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * (deprecated)
   *
   * An absolute dollar value that must be exceeded by the anomaly's total impact (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details) for an anomaly notification to be generated.
   *
   * This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.
   *
   * One of Threshold or ThresholdExpression is required for this resource. You cannot specify both.
   *
   * @deprecated Threshold has been deprecated in favor of ThresholdExpression.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * The frequency that anomaly notifications are sent. Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see [Creating an Amazon SNS topic for anomaly notifications](https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html).
   *
   * @public
   */
  Frequency: AnomalySubscriptionFrequency | undefined;

  /**
   * The name for the subscription.
   *
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE`, corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR`. The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
   *
   * One of Threshold or ThresholdExpression is required for this resource. You cannot specify both.
   *
   * The following are examples of valid ThresholdExpressions:
   *
   * - Absolute threshold: `\{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}`
   * - Percentage threshold: `\{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}`
   * - `AND` two thresholds together: `\{ "And": [ \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}`
   * - `OR` two thresholds together: `\{ "Or": [ \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}`
   *
   * @public
   */
  ThresholdExpression?: Expression | undefined;
}

/**
 * Represents a comparison of cost and usage metrics between two time periods.
 *
 * @public
 */
export interface CostAndUsageComparison {
  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  CostAndUsageSelector?: Expression | undefined;

  /**
   * A mapping of metric names to their comparison values.
   *
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;
}

/**
 * Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that cost category value.
 *
 * @public
 */
export interface CostCategoryRule {
  /**
   * The default value for the cost category.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object used to categorize costs. This supports dimensions, tags, and nested expressions. Currently the only dimensions supported are `LINKED_ACCOUNT`, `SERVICE_CODE`, `RECORD_TYPE`, `LINKED_ACCOUNT_NAME`, `REGION`, and `USAGE_TYPE`.
   *
   * `RECORD_TYPE` is a dimension used for Cost Explorer APIs, and is also supported for cost category expressions. This dimension uses different terms, depending on whether you're using the console or API/JSON editor. For a detailed comparison, see [Term Comparisons](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html#cost-categories-terms) in the *Billing and Cost Management User Guide*.
   *
   * @public
   */
  Rule?: Expression | undefined;

  /**
   * The value the line item is categorized as if the line item contains the matched dimension.
   *
   * @public
   */
  InheritedValue?: CostCategoryInheritedValueDimension | undefined;

  /**
   * You can define the `CostCategoryRule` rule type as either `REGULAR` or `INHERITED_VALUE`. The `INHERITED_VALUE` rule type adds the flexibility to define a rule that dynamically inherits the cost category value. This value is from the dimension value that's defined by `CostCategoryInheritedValueDimension`. For example, suppose that you want to costs to be dynamically grouped based on the value of a specific tag key. First, choose an inherited value rule type, and then choose the tag dimension and specify the tag key to use.
   *
   * @public
   */
  Type?: CostCategoryRuleType | undefined;
}

/**
 * Represents a collection of cost drivers and their associated metrics for cost comparison analysis.
 *
 * @public
 */
export interface CostComparisonDriver {
  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  CostSelector?: Expression | undefined;

  /**
   * A mapping of metric names to their comparison values.
   *
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;

  /**
   * An array of cost drivers, each representing a cost difference between the baseline and comparison time periods. Each entry also includes a metric delta (for example, usage change) that contributed to the cost variance, along with the identifier and type of change.
   *
   * @public
   */
  CostDrivers?: CostDriver[] | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageComparisonsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The reference time period for comparison. This time period serves as the baseline against which other cost and usage data will be compared. The interval must start and end on the first day of a month, with a duration of exactly one month.
   *
   * @public
   */
  BaselineTimePeriod: DateInterval | undefined;

  /**
   * The comparison time period for analysis. This time period's cost and usage data will be compared against the baseline time period. The interval must start and end on the first day of a month, with a duration of exactly one month.
   *
   * @public
   */
  ComparisonTimePeriod: DateInterval | undefined;

  /**
   * The cost and usage metric to compare. Valid values are `AmortizedCost`, `BlendedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `NormalizedUsageAmount`, `UnblendedCost`, and `UsageQuantity`.
   *
   * @public
   */
  MetricForComparison: string | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * You can group results using the attributes `DIMENSION`, `TAG`, and `COST_CATEGORY`.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The maximum number of results that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of paginated results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageRequest {
  /**
   * Sets the start date and end date for retrieving Amazon Web Services costs. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Sets the Amazon Web Services cost granularity to `MONTHLY` or `DAILY`, or `HOURLY`. If `Granularity` isn't set, the response object doesn't include the `Granularity`, either `MONTHLY` or `DAILY`, or `HOURLY`.
   *
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * Filters Amazon Web Services costs by different dimensions. For example, you can specify `SERVICE` and `LINKED_ACCOUNT` and get the costs that are associated with that account's usage of that service. You can nest `Expression` objects to define any combination of dimension filters. For more information, see [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html).
   *
   * Valid values for `MatchOptions` for `Dimensions` are `EQUALS` and `CASE_SENSITIVE`.
   *
   * Valid values for `MatchOptions` for `CostCategories`, `Tags`, and `ProductAttributes` are `EQUALS`, `ABSENT`, and `CASE_SENSITIVE`. Default values are `EQUALS` and `CASE_SENSITIVE`.
   *
   * You can filter by product attributes with or without grouping by them. If you filter or group by product attributes, the results include only the costs of supported services, and a `SERVICE` filter is optional. For more information, see [ProductAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *
   * If you include a `SERVICE` filter, it must apply to the whole request: combine it with other filters by using `And`, and include it in every branch of an `Or`. A `SERVICE` filter inside `Not` doesn't meet this requirement, and the request fails with a `ValidationException`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * Which metrics are returned in the query. For more information about blended and unblended rates, see [Why does the "blended" annotation appear on some line items in my bill?](http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/).
   *
   * Valid values are `AmortizedCost`, `BlendedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `NormalizedUsageAmount`, `UnblendedCost`, and `UsageQuantity`.
   *
   * > **Note:** If you return the `UsageQuantity` metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate `usageQuantity` across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours and GB). To get more meaningful `UsageQuantity` metrics, filter by `UsageType` or `UsageTypeGroups`.
   *
   * `Metrics` is required for `GetCostAndUsage` requests.
   *
   * @public
   */
  Metrics: string[] | undefined;

  /**
   * You can group Amazon Web Services costs using up to two different groups, either dimensions, tag keys, cost categories, product attributes, or any two group by types.
   *
   * Valid values for the `DIMENSION` type are `AZ`, `INSTANCE_TYPE`, `LEGAL_ENTITY_NAME`, `INVOICING_ENTITY`, `LINKED_ACCOUNT`, `OPERATION`, `PLATFORM`, `PURCHASE_TYPE`, `SERVICE`, `TENANCY`, `RECORD_TYPE`, and `USAGE_TYPE`.
   *
   * When you group by the `TAG` type and include a valid tag key, you get all tag values, including empty strings.
   *
   * To group by the `PRODUCT_ATTRIBUTE` type, set `Key` to a product attribute key, such as `model`. For the keys of each supported service, see [ProductAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html). The results include only the costs of supported services, and if you have no such costs, the response contains no groups.
   *
   * In the response, each group key has the format `key$value`, for example, `model$Claude Sonnet 5`. Costs that have no value for the key are in the group `key$`, for example, `model$`. Remove the `key$` prefix before you use a value in a `ProductAttributes` filter. Keys are case-sensitive: if you group by a key that doesn't exist, such as `Model`, all of your costs of supported services are in the group `Model$`.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesRequest {
  /**
   * Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Sets the Amazon Web Services cost granularity to `MONTHLY`, `DAILY`, or `HOURLY`. If `Granularity` isn't set, the response object doesn't include the `Granularity`, `MONTHLY`, `DAILY`, or `HOURLY`.
   *
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * Filters Amazon Web Services costs by different dimensions. For example, you can specify `SERVICE` and `LINKED_ACCOUNT` and get the costs that are associated with that account's usage of that service. You can nest `Expression` objects to define any combination of dimension filters. For more information, see [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html).
   *
   * The `GetCostAndUsageWithResources` operation requires that you either group by or filter by a `ResourceId`. It requires the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) `"SERVICE = Amazon Elastic Compute Cloud - Compute"` in the filter.
   *
   * Valid values for `MatchOptions` for `Dimensions` are `EQUALS` and `CASE_SENSITIVE`.
   *
   * Valid values for `MatchOptions` for `CostCategories`, `Tags`, and `ProductAttributes` are `EQUALS`, `ABSENT`, and `CASE_SENSITIVE`. Default values are `EQUALS` and `CASE_SENSITIVE`.
   *
   * If you filter or group by product attributes, the `SERVICE` filter rules are the same as for [GetCostAndUsage](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html).
   *
   * @public
   */
  Filter: Expression | undefined;

  /**
   * Which metrics are returned in the query. For more information about blended and unblended rates, see [Why does the "blended" annotation appear on some line items in my bill?](http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/).
   *
   * Valid values are `AmortizedCost`, `BlendedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `NormalizedUsageAmount`, `UnblendedCost`, and `UsageQuantity`.
   *
   * > **Note:** If you return the `UsageQuantity` metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate `usageQuantity` across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hour or GB). To get more meaningful `UsageQuantity` metrics, filter by `UsageType` or `UsageTypeGroups`.
   *
   * `Metrics` is required for `GetCostAndUsageWithResources` requests.
   *
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * You can group Amazon Web Services costs using up to two different groups: `DIMENSION`, `TAG`, `COST_CATEGORY`, and `PRODUCT_ATTRIBUTE`.
   *
   * `PRODUCT_ATTRIBUTE` groups work the same way as in [GetCostAndUsage](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetCostAndUsage.html). A `PRODUCT_ATTRIBUTE` group or a `ProductAttributes` filter doesn't meet the requirement to group by or filter by a `ResourceId`.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostCategoriesRequest {
  /**
   * The value that you want to search the filter values for.
   *
   * If you don't specify a `CostCategoryName`, `SearchString` is used to filter cost category names that match the `SearchString` pattern. If you specify a `CostCategoryName`, `SearchString` is used to filter cost category values that match the `SearchString` pattern.
   *
   * @public
   */
  SearchString?: string | undefined;

  /**
   * The time period of the request.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * The unique name of the cost category.
   *
   * @public
   */
  CostCategoryName?: string | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The value that you sort the data by.
   *
   * The key represents the cost and usage metrics. The following values are supported:
   *
   * - `BlendedCost`
   * - `UnblendedCost`
   * - `AmortizedCost`
   * - `NetAmortizedCost`
   * - `NetUnblendedCost`
   * - `UsageQuantity`
   * - `NormalizedUsageAmount`
   *
   * The supported key values for the `SortOrder` value are `ASCENDING` and `DESCENDING`.
   *
   * When you use the `SortBy` value, the `NextPageToken` and `SearchString` key values aren't supported.
   *
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * This field is only used when the `SortBy` value is provided in the request.
   *
   * The maximum number of objects that are returned for this request. If `MaxResults` isn't specified with the `SortBy` value, the request returns 1000 results as the default value for this parameter.
   *
   * For `GetCostCategories`, MaxResults has an upper quota of 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the NextPageToken from the previous call in your next request.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostComparisonDriversRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * The reference time period for comparison. This time period serves as the baseline against which other cost and usage data will be compared. The interval must start and end on the first day of a month, with a duration of exactly one month.
   *
   * @public
   */
  BaselineTimePeriod: DateInterval | undefined;

  /**
   * The comparison time period for analysis. This time period's cost and usage data will be compared against the baseline time period. The interval must start and end on the first day of a month, with a duration of exactly one month.
   *
   * @public
   */
  ComparisonTimePeriod: DateInterval | undefined;

  /**
   * The cost and usage metric to compare. Valid values are `AmortizedCost`, `BlendedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `NormalizedUsageAmount`, `UnblendedCost`, and `UsageQuantity`.
   *
   * @public
   */
  MetricForComparison: string | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * You can group results using the attributes `DIMENSION`, `TAG`, and `COST_CATEGORY`. Note that `SERVICE` and `USAGE_TYPE` dimensions are automatically included in the cost comparison drivers analysis.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The maximum number of results that are returned for the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of paginated results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostForecastRequest {
  /**
   * The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see [Why does the "blended" annotation appear on some line items in my bill?](http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/).
   *
   * Valid values for a `GetCostForecast` call are the following:
   *
   * - AMORTIZED_COST
   * - BLENDED_COST
   * - NET_AMORTIZED_COST
   * - NET_UNBLENDED_COST
   * - UNBLENDED_COST
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * How granular you want the forecast to be. You can get 3 months of `DAILY` forecasts or 18 months of `MONTHLY` forecasts.
   *
   * The `GetCostForecast` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * The filters that you want to use to filter your forecast. The `GetCostForecast` API supports filtering by the following dimensions:
   *
   * - `AZ`
   * - `INSTANCE_TYPE`
   * - `LINKED_ACCOUNT`
   * - `OPERATION`
   * - `PURCHASE_TYPE`
   * - `REGION`
   * - `SERVICE`
   * - `USAGE_TYPE`
   * - `USAGE_TYPE_GROUP`
   * - `RECORD_TYPE`
   * - `OPERATING_SYSTEM`
   * - `TENANCY`
   * - `SCOPE`
   * - `PLATFORM`
   * - `SUBSCRIPTION_ID`
   * - `LEGAL_ENTITY_NAME`
   * - `DEPLOYMENT_OPTION`
   * - `DATABASE_ENGINE`
   * - `INSTANCE_TYPE_FAMILY`
   * - `BILLING_ENTITY`
   * - `RESERVATION_ID`
   * - `SAVINGS_PLAN_ARN`
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.
   *
   * @public
   */
  PredictionIntervalLevel?: number | undefined;
}

/**
 * @public
 */
export interface GetDimensionValuesRequest {
  /**
   * The value that you want to search the filter values for.
   *
   * @public
   */
  SearchString?: string | undefined;

  /**
   * The start date and end date for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * The name of the dimension. Each `Dimension` is available for a different `Context`. For more information, see `Context`. `LINK_ACCOUNT_NAME` and `SERVICE_CODE` can only be used in [CostCategoryRule](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/AAPI_CostCategoryRule.html).
   *
   * `PRODUCT_ATTRIBUTE` returns the product attribute keys that are available for your costs of supported services, or the values of the key that you specify in `DimensionKey`. `PRODUCT_ATTRIBUTE` is supported only in the `COST_AND_USAGE` context.
   *
   * @public
   */
  Dimension: Dimension | undefined;

  /**
   * The product attribute key to return values for, such as `model`. If you omit `DimensionKey` or set it to an empty string, the response lists the product attribute keys that are available for your costs of supported services instead. For the supported services, see [ProductAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *
   * If you specify a key, the response lists the values of that key. If some of your costs have no value for the key, the response includes an empty-string value. Keys are case-sensitive, and a key that doesn't exist returns no values other than an empty string.
   *
   * You can specify `DimensionKey` only when `Dimension` is `PRODUCT_ATTRIBUTE`. If you also specify `SortBy`, `DimensionKey` is required. As a result, you can't list product attribute keys when you use `SortBy`.
   *
   * @public
   */
  DimensionKey?: string | undefined;

  /**
   * The context for the call to `GetDimensionValues`. This can be `RESERVATIONS` or `COST_AND_USAGE`. The default value is `COST_AND_USAGE`. If the context is set to `RESERVATIONS`, the resulting dimension values can be used in the `GetReservationUtilization` operation. If the context is set to `COST_AND_USAGE`, the resulting dimension values can be used in the `GetCostAndUsage` operation.
   *
   * If you set the context to `COST_AND_USAGE`, you can use the following dimensions for searching:
   *
   * - AZ - The Availability Zone. An example is `us-east-1a`.
   * - BILLING_ENTITY - The Amazon Web Services seller that your account is with. Possible values are the following:
   *
   *   - Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services services.
   *
   *   - AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting reseller for Amazon Web Services services in India.
   *
   *   - Amazon Web Services Marketplace: The entity that supports the sale of solutions that are built on Amazon Web Services by third-party software providers.
   * - CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.
   * - DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are `SingleAZ` and `MultiAZ`.
   * - DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.
   * - INSTANCE_TYPE - The type of Amazon EC2 instance. An example is `m4.xlarge`.
   * - INSTANCE_TYPE_FAMILY - A family of instance types optimized to fit different use cases. Examples are `Compute Optimized` (for example, `C4`, `C5`, `C6g`, and `C7g`), `Memory Optimization` (for example, `R4`, `R5n`, `R5b`, and `R6g`).
   * - INVOICING_ENTITY - The name of the entity that issues the Amazon Web Services invoice.
   * - LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.
   * - OPERATION - The action performed. Examples include `RunInstance` and `CreateBucket`.
   * - PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.
   * - PRODUCT_ATTRIBUTE - The product attributes of supported services, such as the model provider or the model for Amazon Bedrock.
   * - PURCHASE_TYPE - The reservation type of the purchase that this usage is related to. Examples include On-Demand Instances and Standard Reserved Instances.
   * - RESERVATION_ID - The unique identifier for an Amazon Web Services Reservation Instance.
   * - SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.
   * - SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute).
   * - SERVICE - The Amazon Web Services service such as Amazon DynamoDB.
   * - TENANCY - The tenancy of a resource. Examples are shared or dedicated.
   * - USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the `GetDimensionValues` operation includes a unit attribute. Examples include GB and Hrs.
   * - USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.
   * - REGION - The Amazon Web Services Region.
   * - RECORD_TYPE - The different types of charges such as Reserved Instance (RI) fees, usage costs, tax refunds, and credits.
   * - RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.
   *
   * If you set the context to `RESERVATIONS`, you can use the following dimensions for searching:
   *
   * - AZ - The Availability Zone. An example is `us-east-1a`.
   * - CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.
   * - DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are `SingleAZ` and `MultiAZ`.
   * - INSTANCE_TYPE - The type of Amazon EC2 instance. An example is `m4.xlarge`.
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.
   * - REGION - The Amazon Web Services Region.
   * - SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.
   * - TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).
   * - TENANCY - The tenancy of a resource. Examples are shared or dedicated.
   *
   * If you set the context to `SAVINGS_PLANS`, you can use the following dimensions for searching:
   *
   * - SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)
   * - PAYMENT_OPTION - The payment option for the given Savings Plans (for example, All Upfront)
   * - REGION - The Amazon Web Services Region.
   * - INSTANCE_TYPE_FAMILY - The family of instances (For example, `m5`)
   * - LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.
   * - SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.
   *
   * @public
   */
  Context?: Context | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The key represents cost and usage metrics. The following values are supported:
   *
   * - `BlendedCost`
   * - `UnblendedCost`
   * - `AmortizedCost`
   * - `NetAmortizedCost`
   * - `NetUnblendedCost`
   * - `UsageQuantity`
   * - `NormalizedUsageAmount`
   *
   * The supported values for the `SortOrder` key are `ASCENDING` or `DESCENDING`.
   *
   * When you specify a `SortBy` paramater, the context must be `COST_AND_USAGE`. Further, when using `SortBy`, `NextPageToken` and `SearchString` aren't supported.
   *
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.
   *
   * For `GetDimensionValues`, MaxResults has an upper limit of 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * You can use the following request parameters to query for how much of your instance usage a reservation covered.
 *
 * @public
 */
export interface GetReservationCoverageRequest {
  /**
   * The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * You can group the data by the following attributes:
   *
   * - AZ
   * - CACHE_ENGINE
   * - DATABASE_ENGINE
   * - DEPLOYMENT_OPTION
   * - INSTANCE_TYPE
   * - INVOICING_ENTITY
   * - LINKED_ACCOUNT
   * - OPERATING_SYSTEM
   * - PLATFORM
   * - REGION
   * - TENANCY
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The granularity of the Amazon Web Services cost data for the reservation. Valid values are `MONTHLY` and `DAILY`.
   *
   * If `GroupBy` is set, `Granularity` can't be set. If `Granularity` isn't set, the response object doesn't include `Granularity`, either `MONTHLY` or `DAILY`.
   *
   * The `GetReservationCoverage` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * Filters utilization data by dimensions. You can filter by the following dimensions:
   *
   * - AZ
   * - CACHE_ENGINE
   * - DATABASE_ENGINE
   * - DEPLOYMENT_OPTION
   * - INSTANCE_TYPE
   * - LINKED_ACCOUNT
   * - OPERATING_SYSTEM
   * - PLATFORM
   * - REGION
   * - SERVICE
   * - TAG
   * - TENANCY
   *
   * `GetReservationCoverage` uses the same [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object as the other operations, but only `AND` is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together.
   *
   * If you don't provide a `SERVICE` filter, Cost Explorer defaults to EC2.
   *
   * Cost category is also supported.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The measurement that you want your reservation coverage reported in.
   *
   * Valid values are `Hour`, `Unit`, and `Cost`. You can use multiple values in a request.
   *
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The value by which you want to sort the data.
   *
   * The following values are supported for `Key`:
   *
   * - `OnDemandCost`
   * - `CoverageHoursPercentage`
   * - `OnDemandHours`
   * - `ReservedHours`
   * - `TotalRunningHours`
   * - `CoverageNormalizedUnitsPercentage`
   * - `OnDemandNormalizedUnits`
   * - `ReservedNormalizedUnits`
   * - `TotalRunningNormalizedUnits`
   * - `Time`
   *
   * Supported values for `SortOrder` are `ASCENDING` or `DESCENDING`.
   *
   * @public
   */
  SortBy?: SortDefinition | undefined;

  /**
   * The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationRequest {
  /**
   * The account ID that's associated with the recommendation.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The specific service that you want recommendations for.
   *
   * @public
   */
  Service: string | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to `PAYER`. If the value is `LINKED`, recommendations are calculated for individual member accounts only.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * The number of previous days that you want Amazon Web Services to consider when it calculates your recommendations.
   *
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * The reservation term that you want recommendations for.
   *
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * The reservation purchase option that you want recommendations for.
   *
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.
   *
   * @public
   */
  ServiceSpecification?: ServiceSpecification | undefined;

  /**
   * The number of recommendations that you want returned in a single response object.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReservationUtilizationRequest {
  /**
   * Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Groups only by `SUBSCRIPTION_ID`. Metadata is included.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * If `GroupBy` is set, `Granularity` can't be set. If `Granularity` isn't set, the response object doesn't include `Granularity`, either `MONTHLY` or `DAILY`. If both `GroupBy` and `Granularity` aren't set, `GetReservationUtilization` defaults to `DAILY`.
   *
   * The `GetReservationUtilization` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * Filters utilization data by dimensions. You can filter by the following dimensions:
   *
   * - AZ
   * - CACHE_ENGINE
   * - DEPLOYMENT_OPTION
   * - INSTANCE_TYPE
   * - LINKED_ACCOUNT
   * - OPERATING_SYSTEM
   * - PLATFORM
   * - REGION
   * - SERVICE
   *
   *   > **Note:** If not specified, the `SERVICE` filter defaults to Amazon Elastic Compute Cloud - Compute. Supported values for `SERVICE` are Amazon Elastic Compute Cloud - Compute, Amazon Relational Database Service, Amazon ElastiCache, Amazon Redshift, and Amazon Elasticsearch Service. The value for the `SERVICE` filter should not exceed "1".
   * - SCOPE
   * - TENANCY
   *
   * `GetReservationUtilization` uses the same [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object as the other operations, but only `AND` is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The following values are supported for `Key`:
   *
   * - `UtilizationPercentage`
   * - `UtilizationPercentageInUnits`
   * - `PurchasedHours`
   * - `PurchasedUnits`
   * - `TotalActualHours`
   * - `TotalActualUnits`
   * - `UnusedHours`
   * - `UnusedUnits`
   * - `OnDemandCostOfRIHoursUsed`
   * - `NetRISavings`
   * - `TotalPotentialRISavings`
   * - `AmortizedUpfrontFee`
   * - `AmortizedRecurringFee`
   * - `TotalAmortizedFee`
   * - `RICostForUnusedHours`
   * - `RealizedSavings`
   * - `UnrealizedSavings`
   *
   * The supported values for `SortOrder` are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  SortBy?: SortDefinition | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationRequest {
  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither.
   *
   * @public
   */
  Configuration?: RightsizingRecommendationConfiguration | undefined;

  /**
   * The specific service that you want recommendations for. The only valid value for `GetRightsizingRecommendation` is "`AmazonEC2`".
   *
   * @public
   */
  Service: string | undefined;

  /**
   * The number of recommendations that you want returned in a single response object.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The pagination token that indicates the next set of results that you want to retrieve.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageRequest {
  /**
   * The time period that you want the usage and costs for. The `Start` date must be within 13 months. The `End` date must be after the `Start` date, and before the current date. Future dates can't be used as an `End` date.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * You can group the data using the attributes `INSTANCE_FAMILY`, `REGION`, or `SERVICE`.
   *
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * The granularity of the Amazon Web Services cost data for your Savings Plans. `Granularity` can't be set if `GroupBy` is set.
   *
   * The `GetSavingsPlansCoverage` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:
   *
   * - `LINKED_ACCOUNT`
   * - `REGION`
   * - `SERVICE`
   * - `INSTANCE_FAMILY`
   *
   * `GetSavingsPlansCoverage` uses the same [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object as the other operations, but only `AND` is supported among each dimension. If there are multiple values for a dimension, they are OR'd together.
   *
   * Cost category is also supported.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The measurement that you want your Savings Plans coverage reported in. The only valid value is `SpendCoveredBySavingsPlans`.
   *
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to be returned in a response. The default is `20`, with a minimum value of `1`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The following values are supported for `Key`:
   *
   * - `SpendCoveredBySavingsPlan`
   * - `OnDemandCost`
   * - `CoveragePercentage`
   * - `TotalCost`
   * - `InstanceFamily`
   * - `Region`
   * - `Service`
   *
   * The supported values for `SortOrder` are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationRequest {
  /**
   * The Savings Plans recommendation type that's requested.
   *
   * @public
   */
  SavingsPlansType: SupportedSavingsPlansType | undefined;

  /**
   * The savings plan recommendation term that's used to generate these recommendations.
   *
   * @public
   */
  TermInYears: TermInYears | undefined;

  /**
   * The payment option that's used to generate these recommendations.
   *
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to `PAYER`. If the value is `LINKED`, recommendations are calculated for individual member accounts only.
   *
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * The number of recommendations that you want returned in a single response object.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * The lookback period that's used to generate the recommendation.
   *
   * @public
   */
  LookbackPeriodInDays: LookbackPeriodInDays | undefined;

  /**
   * You can filter your recommendations by Account ID with the `LINKED_ACCOUNT` dimension. To filter your recommendations by Account ID, specify `Key` as `LINKED_ACCOUNT` and `Value` as the comma-separated Acount ID(s) that you want to see Savings Plans purchase recommendations for.
   *
   * For GetSavingsPlansPurchaseRecommendation, the `Filter` doesn't include `CostCategories` or `Tags`. It only includes `Dimensions`. With `Dimensions`, `Key` must be `LINKED_ACCOUNT` and `Value` can be a single Account ID or multiple comma-separated Account IDs that you want to see Savings Plans Purchase Recommendations for. `AND` and `OR` operators are not supported.
   *
   * @public
   */
  Filter?: Expression | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsRequest {
  /**
   * The time period that you want the usage and costs for. The `Start` date must be within 13 months. The `End` date must be after the `Start` date, and before the current date. Future dates can't be used as an `End` date.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:
   *
   * - `LINKED_ACCOUNT`
   * - `SAVINGS_PLAN_ARN`
   * - `REGION`
   * - `PAYMENT_OPTION`
   * - `INSTANCE_TYPE_FAMILY`
   *
   * `GetSavingsPlansUtilizationDetails` uses the same [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object as the other operations, but only `AND` is supported among each dimension.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The data type.
   *
   * @public
   */
  DataType?: SavingsPlansDataType[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to be returned in a response. The default is `20`, with a minimum value of `1`.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The following values are supported for `Key`:
   *
   * - `UtilizationPercentage`
   * - `TotalCommitment`
   * - `UsedCommitment`
   * - `UnusedCommitment`
   * - `NetSavings`
   * - `AmortizedRecurringCommitment`
   * - `AmortizedUpfrontCommitment`
   *
   * The supported values for `SortOrder` are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationRequest {
  /**
   * The time period that you want the usage and costs for. The `Start` date must be within 13 months. The `End` date must be after the `Start` date, and before the current date. Future dates can't be used as an `End` date.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * The granularity of the Amazon Web Services utillization data for your Savings Plans.
   *
   * The `GetSavingsPlansUtilization` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:
   *
   * - `LINKED_ACCOUNT`
   * - `SAVINGS_PLAN_ARN`
   * - `SAVINGS_PLANS_TYPE`
   * - `REGION`
   * - `PAYMENT_OPTION`
   * - `INSTANCE_TYPE_FAMILY`
   *
   * `GetSavingsPlansUtilization` uses the same [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object as the other operations, but only `AND` is supported among each dimension.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The following values are supported for `Key`:
   *
   * - `UtilizationPercentage`
   * - `TotalCommitment`
   * - `UsedCommitment`
   * - `UnusedCommitment`
   * - `NetSavings`
   *
   * The supported values for `SortOrder` are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * The value that you want to search for.
   *
   * @public
   */
  SearchString?: string | undefined;

  /**
   * The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * The key of the tag that you want to return values for.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * Use `Expression` to filter in various Cost Explorer APIs.
   *
   * Not all `Expression` types are supported in each API. Refer to the documentation for each specific API to see what is supported.
   *
   * There are two patterns:
   *
   * - Simple dimension values.
   *
   *   - There are four types of simple dimension values: `CostCategories`, `Tags`, `Dimensions`, and `ProductAttributes`.
   *
   *     - Specify the `CostCategories` field to define a filter that acts on Cost Categories.
   *     - Specify the `Tags` field to define a filter that acts on Cost Allocation Tags.
   *     - Specify the `Dimensions` field to define a filter that acts on the [`DimensionValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html).
   *     - Specify the `ProductAttributes` field to define a filter that acts on the product attributes of supported services, such as Amazon Bedrock. Only `GetCostAndUsage`, `GetCostAndUsageWithResources`, `GetDimensionValues` (in the `COST_AND_USAGE` context), `GetTags`, and `GetCostCategories` support `ProductAttributes`. For the supported services, keys and `SERVICE` filter rules, see [`ProductAttributeValues`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ProductAttributeValues.html).
   *   - For each filter type, you can set the dimension name and values for the filters that you plan to use.
   *
   *     - For example, you can filter for `REGION==us-east-1 OR REGION==us-west-1`. For `GetRightsizingRecommendation`, the Region is a full name (for example, `REGION==US East (N. Virginia)`.
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \} \}`
   *     - As shown in the previous example, lists of dimension values are combined with `OR` when applying the filter.
   *   - You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.
   *
   *     - For example, you can filter for linked account names that start with "a".
   *     - The corresponding `Expression` for this example is as follows: `\{ "Dimensions": \{ "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] \} \}`
   * - Compound `Expression` types with logical operations.
   *
   *   - You can use multiple `Expression` types and the logical operators `AND/OR/NOT` to create a list of one or more `Expression` objects. By doing this, you can filter by more advanced options.
   *   - For example, you can filter by `((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)`.
   *   - The corresponding `Expression` for this example is as follows: `\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key": "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{ "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}`
   *
   *   > **Note:**
   *   >
   *   > Because each `Expression` can have only one operator, the service returns an error if more than one is specified. The following example shows an `Expression` object that creates an error: `\{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] \} \}`
   *   >
   *   > The following is an example of the corresponding error message: `"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"`
   *
   * > **Note:**
   * >
   * > For the `GetRightsizingRecommendation` action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to `LINKED_ACCOUNT`, `REGION`, or `RIGHTSIZING_TYPE`.
   * >
   * > For the `GetReservationPurchaseRecommendation` action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to `LINKED_ACCOUNT`.
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The value that you want to sort the data by.
   *
   * The key represents cost and usage metrics. The following values are supported:
   *
   * - `BlendedCost`
   * - `UnblendedCost`
   * - `AmortizedCost`
   * - `NetAmortizedCost`
   * - `NetUnblendedCost`
   * - `UsageQuantity`
   * - `NormalizedUsageAmount`
   *
   * The supported values for `SortOrder` are `ASCENDING` and `DESCENDING`.
   *
   * When you use `SortBy`, `NextPageToken` and `SearchString` aren't supported.
   *
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.
   *
   * For `GetTags`, MaxResults has an upper quota of 1000.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageForecastRequest {
  /**
   * The start and end dates of the period that you want to retrieve usage forecast for. The start date is included in the period, but the end date isn't included in the period. For example, if `start` is `2017-01-01` and `end` is `2017-05-01`, then the cost and usage data is retrieved from `2017-01-01` up to and including `2017-04-30` but not including `2017-05-01`. The start date must be equal to or later than the current date to avoid a validation error.
   *
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * Which metric Cost Explorer uses to create your forecast.
   *
   * Valid values for a `GetUsageForecast` call are the following:
   *
   * - USAGE_QUANTITY
   * - NORMALIZED_USAGE_AMOUNT
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * How granular you want the forecast to be. You can get 3 months of `DAILY` forecasts or 18 months of `MONTHLY` forecasts.
   *
   * The `GetUsageForecast` operation supports only `DAILY` and `MONTHLY` granularities.
   *
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * The filters that you want to use to filter your forecast. The `GetUsageForecast` API supports filtering by the following dimensions:
   *
   * - `AZ`
   * - `INSTANCE_TYPE`
   * - `LINKED_ACCOUNT`
   * - `LINKED_ACCOUNT_NAME`
   * - `OPERATION`
   * - `PURCHASE_TYPE`
   * - `REGION`
   * - `SERVICE`
   * - `USAGE_TYPE`
   * - `USAGE_TYPE_GROUP`
   * - `RECORD_TYPE`
   * - `OPERATING_SYSTEM`
   * - `TENANCY`
   * - `SCOPE`
   * - `PLATFORM`
   * - `SUBSCRIPTION_ID`
   * - `LEGAL_ENTITY_NAME`
   * - `DEPLOYMENT_OPTION`
   * - `DATABASE_ENGINE`
   * - `INSTANCE_TYPE_FAMILY`
   * - `BILLING_ENTITY`
   * - `RESERVATION_ID`
   * - `SAVINGS_PLAN_ARN`
   *
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN is used to specify which particular billing view you want to interact with or retrieve information from when making API calls related to Amazon Web Services Billing and Cost Management features. The BillingViewArn can be retrieved by calling the ListBillingViews API.
   *
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * Amazon Web Services Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.
   *
   * @public
   */
  PredictionIntervalLevel?: number | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionRequest {
  /**
   * A cost anomaly subscription Amazon Resource Name (ARN).
   *
   * @public
   */
  SubscriptionArn: string | undefined;

  /**
   * (deprecated)
   *
   * The update to the threshold value for receiving notifications.
   *
   * This field has been deprecated. To update a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.
   *
   * You can specify either Threshold or ThresholdExpression, but not both.
   *
   * @deprecated Threshold has been deprecated in favor of ThresholdExpression.
   * @public
   */
  Threshold?: number | undefined;

  /**
   * The update to the frequency value that subscribers receive notifications.
   *
   * @public
   */
  Frequency?: AnomalySubscriptionFrequency | undefined;

  /**
   * A list of cost anomaly monitor ARNs.
   *
   * @public
   */
  MonitorArnList?: string[] | undefined;

  /**
   * The update to the subscriber list.
   *
   * @public
   */
  Subscribers?: Subscriber[] | undefined;

  /**
   * The new name of the subscription.
   *
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * The update to the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE`, corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR`. The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
   *
   * You can specify either Threshold or ThresholdExpression, but not both.
   *
   * The following are examples of valid ThresholdExpressions:
   *
   * - Absolute threshold: `\{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}`
   * - Percentage threshold: `\{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}`
   * - `AND` two thresholds together: `\{ "And": [ \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}`
   * - `OR` two thresholds together: `\{ "Or": [ \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}`
   *
   * @public
   */
  ThresholdExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorRequest {
  /**
   * The cost anomaly detection monitor object that you want to create.
   *
   * @public
   */
  AnomalyMonitor: AnomalyMonitor | undefined;

  /**
   * An optional list of tags to associate with the specified [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html). You can use resource tags to control access to your `monitor` using IAM policies.
   *
   * Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *
   * - Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use
   * - The maximum length of a key is 128 characters
   * - The maximum length of a value is 256 characters
   * - Keys and values can only contain alphanumeric characters, spaces, and any of the following: `_.:/=+@-`
   * - Keys and values are case sensitive
   * - Keys and values are trimmed for any leading or trailing whitespaces
   * - Don’t use `aws:` as a prefix for your keys. This prefix is reserved for Amazon Web Services use
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionRequest {
  /**
   * The cost anomaly subscription object that you want to create.
   *
   * @public
   */
  AnomalySubscription: AnomalySubscription | undefined;

  /**
   * An optional list of tags to associate with the specified [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html). You can use resource tags to control access to your `subscription` using IAM policies.
   *
   * Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *
   * - Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use
   * - The maximum length of a key is 128 characters
   * - The maximum length of a value is 256 characters
   * - Keys and values can only contain alphanumeric characters, spaces, and any of the following: `_.:/=+@-`
   * - Keys and values are case sensitive
   * - Keys and values are trimmed for any leading or trailing whitespaces
   * - Don’t use `aws:` as a prefix for your keys. This prefix is reserved for Amazon Web Services use
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * The structure of Cost Categories. This includes detailed metadata and the set of rules for the `CostCategory` object.
 *
 * @public
 */
export interface CostCategory {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * The effective start date of your cost category.
   *
   * @public
   */
  EffectiveStart: string | undefined;

  /**
   * The effective end date of your cost category.
   *
   * @public
   */
  EffectiveEnd?: string | undefined;

  /**
   * The unique name of the cost category.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The rule schema version in this particular cost category.
   *
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * The rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that cost category value.
   *
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * The split charge rules that are used to allocate your charges between your cost category values.
   *
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;

  /**
   * The list of processing statuses for Cost Management products for a specific cost category.
   *
   * @public
   */
  ProcessingStatus?: CostCategoryProcessingStatus[] | undefined;

  /**
   * The default value for the cost category.
   *
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionRequest {
  /**
   * The unique name of the cost category.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The cost category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.
   *
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * The rule schema version in this particular cost category.
   *
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * The cost category rules used to categorize costs. For more information, see [CostCategoryRule](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html).
   *
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * The default value for the cost category.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The split charge rules used to allocate your charges between your cost category values.
   *
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;

  /**
   * An optional list of tags to associate with the specified [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html). You can use resource tags to control access to your `cost category` using IAM policies.
   *
   * Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:
   *
   * - Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use
   * - The maximum length of a key is 128 characters
   * - The maximum length of a value is 256 characters
   * - Keys and values can only contain alphanumeric characters, spaces, and any of the following: `_.:/=+@-`
   * - Keys and values are case sensitive
   * - Keys and values are trimmed for any leading or trailing whitespaces
   * - Don’t use `aws:` as a prefix for your keys. This prefix is reserved for Amazon Web Services use
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface GetAnomalyMonitorsResponse {
  /**
   * A list of cost anomaly monitors that includes the detailed metadata for each monitor.
   *
   * @public
   */
  AnomalyMonitors: AnomalyMonitor[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsResponse {
  /**
   * A list of cost anomaly subscriptions that includes the detailed metadata for each one.
   *
   * @public
   */
  AnomalySubscriptions: AnomalySubscription[] | undefined;

  /**
   * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageComparisonsResponse {
  /**
   * An array of comparison results showing cost and usage metrics between `BaselineTimePeriod` and `ComparisonTimePeriod`.
   *
   * @public
   */
  CostAndUsageComparisons?: CostAndUsageComparison[] | undefined;

  /**
   * A summary of the total cost and usage, comparing amounts between `BaselineTimePeriod` and `ComparisonTimePeriod` and their differences. This total represents the aggregate total across all paginated results, if the response spans multiple pages.
   *
   * @public
   */
  TotalCostAndUsage?: Record<string, ComparisonMetricValue> | undefined;

  /**
   * The token to retrieve the next set of paginated results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostComparisonDriversResponse {
  /**
   * An array of comparison results showing factors that drive significant cost differences between `BaselineTimePeriod` and `ComparisonTimePeriod`.
   *
   * @public
   */
  CostComparisonDrivers?: CostComparisonDriver[] | undefined;

  /**
   * The token to retrieve the next set of paginated results.
   *
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionRequest {
  /**
   * The unique identifier for your cost category.
   *
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * The cost category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.
   *
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * The rule schema version in this particular cost category.
   *
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * The `Expression` object used to categorize costs. For more information, see [CostCategoryRule](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html).
   *
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * The default value for the cost category.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The split charge rules used to allocate your charges between your cost category values.
   *
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionResponse {
  /**
   * The structure of Cost Categories. This includes detailed metadata and the set of rules for the `CostCategory` object.
   *
   * @public
   */
  CostCategory?: CostCategory | undefined;
}
