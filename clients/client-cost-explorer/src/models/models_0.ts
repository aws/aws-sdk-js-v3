// smithy-typescript generated code
import {
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
 * <p>Contains the hourly metrics for the given recommendation over the lookback period.
 *         </p>
 * @public
 */
export interface RecommendationDetailHourlyMetrics {
  /**
   * <p>The period of time that you want the usage and costs for.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plan, over the length of the lookback period.</p>
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * <p>The current amount of Savings Plans eligible usage that the Savings Plan
   *             covered.</p>
   * @public
   */
  CurrentCoverage?: string | undefined;

  /**
   * <p>The estimated coverage amount based on the recommended Savings Plan.</p>
   * @public
   */
  EstimatedCoverage?: string | undefined;

  /**
   * <p>The estimated utilization for the recommended Savings Plan.</p>
   * @public
   */
  EstimatedNewCommitmentUtilization?: string | undefined;
}

/**
 * <p>Details about the Savings Plans purchase analysis.</p>
 * @public
 */
export interface SavingsPlansPurchaseAnalysisDetails {
  /**
   * <p>The currency code used for the analysis.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The lookback period in hours that's used to generate the analysis.</p>
   * @public
   */
  LookbackPeriodInHours?: string | undefined;

  /**
   * <p>The average value of hourly coverage over the lookback period.</p>
   * @public
   */
  CurrentAverageCoverage?: string | undefined;

  /**
   * <p>The average value of hourly On-Demand spend over the lookback period.</p>
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The highest value of hourly On-Demand spend over the lookback period.</p>
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The lowest value of hourly On-Demand spend over the lookback period.</p>
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The current total On-Demand spend over the lookback period.</p>
   * @public
   */
  CurrentOnDemandSpend?: string | undefined;

  /**
   * <p>The existing hourly commitment for the Savings Plan type.</p>
   * @public
   */
  ExistingHourlyCommitment?: string | undefined;

  /**
   * <p>The recommended or custom hourly commitment.</p>
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * <p>The estimated coverage of the Savings Plan.</p>
   * @public
   */
  EstimatedAverageCoverage?: string | undefined;

  /**
   * <p>The estimated utilization of the Savings Plan.</p>
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * <p>The estimated monthly savings amount based on the Savings Plan.</p>
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the Savings Plan over the
   *             length of the lookback period.</p>
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * <p>The estimated On-Demand cost you expect with no additional commitment based on your
   *             usage of the selected time period and the Savings Plan you own.</p>
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * <p>The estimated return on investment that's based on the Savings Plan and estimated
   *             savings. This is calculated as estimatedSavingsAmount/estimatedSPCost*100.</p>
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * <p>The estimated savings amount that's based on the Savings Plan over the length of the
   *             lookback period.</p>
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * <p>The estimated savings percentage relative to the total cost over the cost calculation
   *             lookback period.</p>
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * <p>The estimated cost of the Savings Plan over the length of the lookback period.</p>
   * @public
   */
  EstimatedCommitmentCost?: string | undefined;

  /**
   * <p>The date and time of the last hour that went into the analysis.</p>
   * @public
   */
  LatestUsageTimestamp?: string | undefined;

  /**
   * <p>The upfront cost of the Savings Plan based on the selected payment option.</p>
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * <p>Additional metadata that might be applicable to the commitment.</p>
   * @public
   */
  AdditionalMetadata?: string | undefined;

  /**
   * <p>The related hourly cost, coverage, and utilization metrics over the lookback
   *             period.</p>
   * @public
   */
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[] | undefined;
}

/**
 * <p>Details about the analysis.</p>
 * @public
 */
export interface AnalysisDetails {
  /**
   * <p>Details about the Savings Plans purchase analysis.</p>
   * @public
   */
  SavingsPlansPurchaseAnalysisDetails?: SavingsPlansPurchaseAnalysisDetails | undefined;
}

/**
 * <p>The time period of the request. </p>
 * @public
 */
export interface DateInterval {
  /**
   * <p>The beginning of the time period. The start date is inclusive. For example, if
   *                 <code>start</code> is <code>2017-01-01</code>, Amazon Web Services retrieves cost and
   *             usage data starting at <code>2017-01-01</code> up to the end date. The start date must
   *             be equal to or no later than the current date to avoid a validation error.</p>
   * @public
   */
  Start: string | undefined;

  /**
   * <p>The end of the time period. The end date is exclusive. For example, if
   *                 <code>end</code> is <code>2017-05-01</code>, Amazon Web Services retrieves cost and
   *             usage data from the start date up to, but not including, <code>2017-05-01</code>.</p>
   * @public
   */
  End: string | undefined;
}

/**
 * <p>The Savings Plans commitment details.</p>
 * @public
 */
export interface SavingsPlans {
  /**
   * <p>The payment option for the Savings Plans commitment.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The Savings Plans type.</p>
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * <p>The Region associated with the Savings Plans commitment.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The instance family of the Savings Plans commitment.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The term that you want the Savings Plans commitment for.</p>
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * <p>The Savings Plans commitment.</p>
   * @public
   */
  SavingsPlansCommitment?: number | undefined;

  /**
   * <p>The unique ID that's used to distinguish Savings Plans commitments from one
   *             another.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * <p>The configuration for the Savings Plans purchase analysis.</p>
 * @public
 */
export interface SavingsPlansPurchaseAnalysisConfiguration {
  /**
   * <p>The account scope that you want your analysis for.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>The account that the analysis is for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The type of analysis.</p>
   * @public
   */
  AnalysisType: AnalysisType | undefined;

  /**
   * <p>Savings Plans to include in the analysis.</p>
   * @public
   */
  SavingsPlansToAdd: SavingsPlans[] | undefined;

  /**
   * <p>Savings Plans to exclude from the analysis.</p>
   * @public
   */
  SavingsPlansToExclude?: string[] | undefined;

  /**
   * <p>The time period associated with the analysis.</p>
   * @public
   */
  LookBackTimePeriod: DateInterval | undefined;
}

/**
 * <p>The configuration for the commitment purchase analysis.</p>
 * @public
 */
export interface CommitmentPurchaseAnalysisConfiguration {
  /**
   * <p>The configuration for the Savings Plans purchase analysis.</p>
   * @public
   */
  SavingsPlansPurchaseAnalysisConfiguration?: SavingsPlansPurchaseAnalysisConfiguration | undefined;
}

/**
 * <p>A summary of the analysis.</p>
 * @public
 */
export interface AnalysisSummary {
  /**
   * <p>The estimated time for when the analysis will complete.</p>
   * @public
   */
  EstimatedCompletionTime?: string | undefined;

  /**
   * <p>The completion time of the analysis.</p>
   * @public
   */
  AnalysisCompletionTime?: string | undefined;

  /**
   * <p>The start time of the analysis.</p>
   * @public
   */
  AnalysisStartedTime?: string | undefined;

  /**
   * <p>The status of the analysis.</p>
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * <p>The error code used for the analysis.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The analysis ID that's associated with the commitment purchase analysis.</p>
   * @public
   */
  AnalysisId?: string | undefined;

  /**
   * <p>The configuration for the commitment purchase analysis.</p>
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration?: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * <p>Quantifies the anomaly. The higher score means that it's more anomalous. </p>
 * @public
 */
export interface AnomalyScore {
  /**
   * <p>The maximum score that's observed during the <code>AnomalyDateInterval</code>. </p>
   * @public
   */
  MaxScore: number | undefined;

  /**
   * <p>The last observed score. </p>
   * @public
   */
  CurrentScore: number | undefined;
}

/**
 * <p>The dollar value of the anomaly. </p>
 * @public
 */
export interface Impact {
  /**
   * <p>The maximum dollar value that's observed for an anomaly.</p>
   * @public
   */
  MaxImpact: number | undefined;

  /**
   * <p>The cumulative dollar difference between the total actual spend and total expected
   *             spend. It is calculated as <code>TotalActualSpend - TotalExpectedSpend</code>.</p>
   * @public
   */
  TotalImpact?: number | undefined;

  /**
   * <p>The cumulative dollar amount that was actually spent during the anomaly.</p>
   * @public
   */
  TotalActualSpend?: number | undefined;

  /**
   * <p>The cumulative dollar amount that was expected to be spent during the anomaly. It is
   *             calculated using advanced machine learning models to determine the typical spending
   *             pattern based on historical data for a customer.</p>
   * @public
   */
  TotalExpectedSpend?: number | undefined;

  /**
   * <p>The cumulative percentage difference between the total actual spend and total expected
   *             spend. It is calculated as <code>(TotalImpact / TotalExpectedSpend) * 100</code>. When
   *                 <code>TotalExpectedSpend</code> is zero, this field is omitted. Expected spend can
   *             be zero in situations such as when you start to use a service for the first time.</p>
   * @public
   */
  TotalImpactPercentage?: number | undefined;
}

/**
 * <p>The dollar value of the root cause.</p>
 * @public
 */
export interface RootCauseImpact {
  /**
   * <p>The dollar amount that this root cause contributed to the anomaly's
   *             TotalImpact.</p>
   * @public
   */
  Contribution: number | undefined;
}

/**
 * <p>The combination of Amazon Web Services service, linked account, linked account name,
 *             Region, and usage type where a cost anomaly is observed, along with the dollar and
 *             percentage amount of the anomaly impact. The linked account name will only be available
 *             when the account name can be identified.</p>
 * @public
 */
export interface RootCause {
  /**
   * <p>The Amazon Web Services service name that's associated with the cost anomaly. </p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The Amazon Web Services Region that's associated with the cost anomaly. </p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The member account value that's associated with the cost anomaly. </p>
   * @public
   */
  LinkedAccount?: string | undefined;

  /**
   * <p>The member account name value that's associated with the cost anomaly.</p>
   * @public
   */
  LinkedAccountName?: string | undefined;

  /**
   * <p>The <code>UsageType</code> value that's associated with the cost anomaly. </p>
   * @public
   */
  UsageType?: string | undefined;

  /**
   * <p>The dollar impact for the root cause.</p>
   * @public
   */
  Impact?: RootCauseImpact | undefined;
}

/**
 * <p>An unusual cost pattern. This consists of the detailed metadata and the current status
 *             of the anomaly object. </p>
 * @public
 */
export interface Anomaly {
  /**
   * <p>The unique identifier for the anomaly. </p>
   * @public
   */
  AnomalyId: string | undefined;

  /**
   * <p>The first day the anomaly is detected. </p>
   * @public
   */
  AnomalyStartDate?: string | undefined;

  /**
   * <p>The last day the anomaly is detected. </p>
   * @public
   */
  AnomalyEndDate?: string | undefined;

  /**
   * <p>The dimension for the anomaly (for example, an Amazon Web Services service in a service
   *             monitor). </p>
   * @public
   */
  DimensionValue?: string | undefined;

  /**
   * <p>The list of identified root causes for the anomaly. </p>
   * @public
   */
  RootCauses?: RootCause[] | undefined;

  /**
   * <p>The latest and maximum score for the anomaly. </p>
   * @public
   */
  AnomalyScore: AnomalyScore | undefined;

  /**
   * <p>The dollar impact for the anomaly. </p>
   * @public
   */
  Impact: Impact | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly.
   *         </p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>The feedback value. </p>
   * @public
   */
  Feedback?: AnomalyFeedbackType | undefined;
}

/**
 * <p>The time period for an anomaly. </p>
 * @public
 */
export interface AnomalyDateInterval {
  /**
   * <p>The first date an anomaly was observed. </p>
   * @public
   */
  StartDate: string | undefined;

  /**
   * <p>The last date an anomaly was observed. </p>
   * @public
   */
  EndDate?: string | undefined;
}

/**
 * <p>The Cost Categories values used for filtering the costs.</p>
 *          <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on
 *             resources that aren't mapped to any Cost Categories.</p>
 *          <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the
 *                 <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That
 *             is, it filters on resources without the given Cost Categories key.</p>
 * @public
 */
export interface CostCategoryValues {
  /**
   * <p>The unique name of the Cost Category.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The specific value of the Cost Category.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. MatchOptions is only
   *             applicable for actions related to cost category. The default values for
   *                 <code>MatchOptions</code> is <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.
   *         </p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>The metadata that you can use to filter and group your results. You can use
 *                 <code>GetDimensionValues</code> to find specific values.</p>
 * @public
 */
export interface DimensionValues {
  /**
   * <p>The names of the metadata types that you can use to filter and group your results. For
   *             example, <code>AZ</code> returns a list of Availability Zones.</p>
   *          <p>Not all dimensions are supported in each API. Refer to the documentation for each
   *             specific API to see what is supported.</p>
   *          <p>
   *             <code>LINKED_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in
   *                 <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p>
   *          <p>
   *             <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and
   *                 <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html">AnomalySubscriptions</a>.</p>
   * @public
   */
  Key?: Dimension | undefined;

  /**
   * <p>The metadata values that you can use to filter and group your results. You can use
   *                 <code>GetDimensionValues</code> to find specific values.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results.</p>
   *          <p>
   *             <code>MatchOptions</code> is only applicable for actions related to Cost Category and
   *             Anomaly Subscriptions. Refer to the documentation for each specific API to see what is
   *             supported.</p>
   *          <p>The default values for <code>MatchOptions</code> are <code>EQUALS</code> and
   *                 <code>CASE_SENSITIVE</code>.</p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>The values that are available for a tag.</p>
 *          <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources
 *             with no tags.</p>
 *          <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the
 *                 <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's
 *             filtered on resources without the given tag key.</p>
 * @public
 */
export interface TagValues {
  /**
   * <p>The key for the tag.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The specific value of the tag.</p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The match options that you can use to filter your results. <code>MatchOptions</code>
   *             is only applicable for actions related to Cost Category. The default values for
   *                 <code>MatchOptions</code> are <code>EQUALS</code> and
   *             <code>CASE_SENSITIVE</code>.</p>
   * @public
   */
  MatchOptions?: MatchOption[] | undefined;
}

/**
 * <p>The recipient of <code>AnomalySubscription</code> notifications. </p>
 * @public
 */
export interface Subscriber {
  /**
   * <p>The email address or SNS Amazon Resource Name (ARN). This depends on the
   *                 <code>Type</code>. </p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The notification delivery channel. </p>
   * @public
   */
  Type?: SubscriberType | undefined;

  /**
   * <p>Indicates if the subscriber accepts the notifications. </p>
   * @public
   */
  Status?: SubscriberStatus | undefined;
}

/**
 * <p>The tag structure that contains a tag key and value. </p>
 *          <note>
 *             <p>Tagging is supported only for the following Cost Explorer resource types:
 *                     <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html">
 *                   <code>AnomalyMonitor</code>
 *                </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html">
 *                   <code>AnomalySubscription</code>
 *                </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html">
 *                   <code>CostCategory</code>
 *                </a>.</p>
 *          </note>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The key that's associated with the tag. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value that's associated with the tag. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorResponse {
  /**
   * <p>The unique identifier of your newly created cost anomaly detection monitor.</p>
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionResponse {
  /**
   * <p>The unique identifier of your newly created cost anomaly subscription. </p>
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * <p>When you create or update a cost category, you can define the
 *                 <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule
 *             type adds the flexibility to define a rule that dynamically inherits the cost category
 *             value from the dimension value that's defined by
 *                 <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want
 *             to dynamically group costs that are based on the value of a specific tag key. First,
 *             choose an inherited value rule type, and then choose the tag dimension and specify the
 *             tag key to use.</p>
 * @public
 */
export interface CostCategoryInheritedValueDimension {
  /**
   * <p>The name of the dimension that's used to group costs.</p>
   *          <p>If you specify <code>LINKED_ACCOUNT_NAME</code>, the cost category value is based on
   *             account name. If you specify <code>TAG</code>, the cost category value is based on the
   *             value of the specified tag key.</p>
   * @public
   */
  DimensionName?: CostCategoryInheritedValueDimensionName | undefined;

  /**
   * <p>The key to extract cost category values.</p>
   * @public
   */
  DimensionKey?: string | undefined;
}

/**
 * <p>The parameters for a split charge method. </p>
 * @public
 */
export interface CostCategorySplitChargeRuleParameter {
  /**
   * <p>The parameter type. </p>
   * @public
   */
  Type: CostCategorySplitChargeRuleParameterType | undefined;

  /**
   * <p>The parameter values. </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Use the split charge rule to split the cost of one Cost Category value across several
 *             other target values. </p>
 * @public
 */
export interface CostCategorySplitChargeRule {
  /**
   * <p>The Cost Category value that you want to split. That value can't be used as a source
   *             or a target in other split charge rules. To indicate uncategorized costs, you can use an
   *             empty string as the source.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The Cost Category values that you want to split costs across. These values can't be
   *             used as a source in other split charge rules. </p>
   * @public
   */
  Targets: string[] | undefined;

  /**
   * <p>The method that's used to define how to split your source costs across your targets. </p>
   *          <p>
   *             <code>Proportional</code> - Allocates charges across your targets based on the
   *             proportional weighted cost of each target.</p>
   *          <p>
   *             <code>Fixed</code> - Allocates charges across your targets based on your defined
   *             allocation percentage.</p>
   *          <p>><code>Even</code> - Allocates costs evenly across all targets.</p>
   * @public
   */
  Method: CostCategorySplitChargeMethod | undefined;

  /**
   * <p>The parameters for a split charge method. This is only required for the
   *                 <code>FIXED</code> method. </p>
   * @public
   */
  Parameters?: CostCategorySplitChargeRuleParameter[] | undefined;
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionResponse {
  /**
   * <p>The unique identifier for your newly created Cost Category. </p>
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month).</p>
   * @public
   */
  EffectiveStart?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyMonitorRequest {
  /**
   * <p>The unique identifier of the cost anomaly monitor that you want to delete. </p>
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
   * <p>The unique identifier of the cost anomaly subscription that you want to delete. </p>
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
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCostCategoryDefinitionResponse {
  /**
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * <p>The effective end date of the Cost Category as a result of deleting it. No costs after
   *       this date is categorized by the deleted Cost Category. </p>
   * @public
   */
  EffectiveEnd?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionRequest {
  /**
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>The date when the Cost Category was effective. </p>
   * @public
   */
  EffectiveOn?: string | undefined;
}

/**
 * <p>The list of processing statuses for Cost Management products for a specific cost
 *             category. </p>
 * @public
 */
export interface CostCategoryProcessingStatus {
  /**
   * <p>The Cost Management product name of the applied status. </p>
   * @public
   */
  Component?: CostCategoryStatusComponent | undefined;

  /**
   * <p>The process status for a specific cost category. </p>
   * @public
   */
  Status?: CostCategoryStatus | undefined;
}

/**
 * <p>Filters cost anomalies based on the total impact. </p>
 * @public
 */
export interface TotalImpactFilter {
  /**
   * <p>The comparing value that's used in the filter. </p>
   * @public
   */
  NumericOperator: NumericOperator | undefined;

  /**
   * <p>The lower bound dollar value that's used in the filter. </p>
   * @public
   */
  StartValue: number | undefined;

  /**
   * <p>The upper bound dollar value that's used in the filter. </p>
   * @public
   */
  EndValue?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomaliesRequest {
  /**
   * <p>Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon
   *       Resource Name (ARN). </p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object
   *       will have an <code>AnomalyEndDate</code> in the specified time range. </p>
   * @public
   */
  DateInterval: AnomalyDateInterval | undefined;

  /**
   * <p>Filters anomaly results by the feedback field on the anomaly object. </p>
   * @public
   */
  Feedback?: AnomalyFeedbackType | undefined;

  /**
   * <p>Filters anomaly results by the total impact field on the anomaly object. For example, you
   *       can filter anomalies <code>GREATER_THAN 200.00</code> to retrieve anomalies, with an estimated
   *       dollar impact greater than 200. </p>
   * @public
   */
  TotalImpact?: TotalImpactFilter | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The number of entries a paginated response contains. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomaliesResponse {
  /**
   * <p>A list of cost anomalies. </p>
   * @public
   */
  Anomalies: Anomaly[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalyMonitorsRequest {
  /**
   * <p>A list of cost anomaly monitor ARNs. </p>
   * @public
   */
  MonitorArnList?: string[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The number of entries that a paginated response contains. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsRequest {
  /**
   * <p>A list of cost anomaly subscription ARNs. </p>
   * @public
   */
  SubscriptionArnList?: string[] | undefined;

  /**
   * <p>Cost anomaly monitor ARNs. </p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The number of entries a paginated response contains. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetApproximateUsageRecordsRequest {
  /**
   * <p>How granular you want the data to be. You can enable data at hourly or daily
   *       granularity.</p>
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * <p>The service metadata for the service or services you want to query. If not specified, all
   *       elements are returned.</p>
   * @public
   */
  Services?: string[] | undefined;

  /**
   * <p>The service to evaluate for the usage records. You can choose resource-level data at daily
   *       granularity, or hourly granularity with or without resource-level data.</p>
   * @public
   */
  ApproximationDimension: ApproximationDimension | undefined;
}

/**
 * @public
 */
export interface GetApproximateUsageRecordsResponse {
  /**
   * <p>The service metadata for the service or services in the response.</p>
   * @public
   */
  Services?: Record<string, number> | undefined;

  /**
   * <p>The total number of usage records for all services in the services list.</p>
   * @public
   */
  TotalRecords?: number | undefined;

  /**
   * <p>The lookback period that's used for the estimation.</p>
   * @public
   */
  LookbackPeriod?: DateInterval | undefined;
}

/**
 * @public
 */
export interface GetCommitmentPurchaseAnalysisRequest {
  /**
   * <p>The analysis ID that's associated with the commitment purchase analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;
}

/**
 * @public
 */
export interface GetCommitmentPurchaseAnalysisResponse {
  /**
   * <p>The estimated time for when the analysis will complete.</p>
   * @public
   */
  EstimatedCompletionTime: string | undefined;

  /**
   * <p>The completion time of the analysis.</p>
   * @public
   */
  AnalysisCompletionTime?: string | undefined;

  /**
   * <p>The start time of the analysis.</p>
   * @public
   */
  AnalysisStartedTime: string | undefined;

  /**
   * <p>The analysis ID that's associated with the commitment purchase analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>The status of the analysis.</p>
   * @public
   */
  AnalysisStatus: AnalysisStatus | undefined;

  /**
   * <p>The error code used for the analysis.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>Details about the analysis.</p>
   * @public
   */
  AnalysisDetails?: AnalysisDetails | undefined;

  /**
   * <p>The configuration for the commitment purchase analysis.</p>
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * <p>Represents a group when you specify a group by criteria or in the response to a query
 *             with a specific grouping.</p>
 * @public
 */
export interface GroupDefinition {
  /**
   * <p>The string that represents the type of group.</p>
   * @public
   */
  Type?: GroupDefinitionType | undefined;

  /**
   * <p>The string that represents a key for a specified group.</p>
   * @public
   */
  Key?: string | undefined;
}

/**
 * <p>The metadata of a specific type that you can use to filter and group your results. You
 *             can use <code>GetDimensionValues</code> to find specific values.</p>
 * @public
 */
export interface DimensionValuesWithAttributes {
  /**
   * <p>The value of a dimension with a specific attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * <p>The aggregated value for a metric.</p>
 * @public
 */
export interface MetricValue {
  /**
   * <p>The actual number that represents the metric.</p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p>The unit that the metric is given in.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>One level of grouped data in the results.</p>
 * @public
 */
export interface Group {
  /**
   * <p>The keys that are included in this group.</p>
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * <p>The metrics that are included in this group.</p>
   * @public
   */
  Metrics?: Record<string, MetricValue> | undefined;
}

/**
 * <p>The result that's associated with a time period.</p>
 * @public
 */
export interface ResultByTime {
  /**
   * <p>The time period that the result covers.</p>
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * <p>The total amount of cost or usage accrued during the time period.</p>
   * @public
   */
  Total?: Record<string, MetricValue> | undefined;

  /**
   * <p>The groups that this time period includes.</p>
   * @public
   */
  Groups?: Group[] | undefined;

  /**
   * <p>Determines whether the result is estimated.</p>
   * @public
   */
  Estimated?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageResponse {
  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   * @public
   */
  GroupDefinitions?: GroupDefinition[] | undefined;

  /**
   * <p>The time period that's covered by the results in the response.</p>
   * @public
   */
  ResultsByTime?: ResultByTime[] | undefined;

  /**
   * <p>The attributes that apply to a specific dimension value. For example, if the value is a
   *       linked account, the attribute is that account name.</p>
   * @public
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[] | undefined;
}

/**
 * <p>Contains cost or usage metric values for comparing two time periods. Each value
 *             includes amounts for the baseline and comparison time periods, their difference, and the
 *             unit of measurement.</p>
 * @public
 */
export interface ComparisonMetricValue {
  /**
   * <p>The numeric value for the baseline time period measurement.</p>
   * @public
   */
  BaselineTimePeriodAmount?: string | undefined;

  /**
   * <p>The numeric value for the comparison time period measurement.</p>
   * @public
   */
  ComparisonTimePeriodAmount?: string | undefined;

  /**
   * <p>The calculated difference between <code>ComparisonTimePeriodAmount</code> and
   *                 <code>BaselineTimePeriodAmount</code>.</p>
   * @public
   */
  Difference?: string | undefined;

  /**
   * <p>The unit of measurement applicable to all numeric values in this comparison.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesResponse {
  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   * @public
   */
  GroupDefinitions?: GroupDefinition[] | undefined;

  /**
   * <p>The time period that's covered by the results in the response.</p>
   * @public
   */
  ResultsByTime?: ResultByTime[] | undefined;

  /**
   * <p>The attributes that apply to a specific dimension value. For example, if the value is a
   *       linked account, the attribute is that account name.</p>
   * @public
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[] | undefined;
}

/**
 * <p>The details for how to sort the data.</p>
 * @public
 */
export interface SortDefinition {
  /**
   * <p>The key that's used to sort the data.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The order that's used to sort the data.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface GetCostCategoriesResponse {
  /**
   * <p>If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of
   *       objects, provide the marker from the prior call in your next request.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The names of the Cost Categories.</p>
   * @public
   */
  CostCategoryNames?: string[] | undefined;

  /**
   * <p>The Cost Category values.</p>
   *          <p>If the <code>CostCategoryName</code> key isn't specified in the request, the
   *         <code>CostCategoryValues</code> fields aren't returned. </p>
   * @public
   */
  CostCategoryValues?: string[] | undefined;

  /**
   * <p>The number of objects that are returned.</p>
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of objects.</p>
   * @public
   */
  TotalSize: number | undefined;
}

/**
 * <p>Represents factors that contribute to cost variations between the baseline and
 *             comparison time periods, including the type of driver, an identifier of the driver, and
 *             associated metrics.</p>
 * @public
 */
export interface CostDriver {
  /**
   * <p>The category or classification of the cost driver.</p>
   *          <p>Values include: BUNDLED_DISCOUNT, CREDIT, OUT_OF_CYCLE_CHARGE, REFUND,
   *             RECURRING_RESERVATION_FEE, RESERVATION_USAGE, RI_VOLUME_DISCOUNT, SAVINGS_PLAN_USAGE,
   *             SAVINGS_PLAN_RECURRING_FEE, SUPPORT_FEE, TAX, UPFRONT_RESERVATION_FEE, USAGE_CHANGE,
   *             COMMITMENT</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The specific identifier of the cost driver.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A mapping of metric names to their comparison values, measuring the impact of this
   *             cost driver.</p>
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;
}

/**
 * <p>The forecast that's created for your query.</p>
 * @public
 */
export interface ForecastResult {
  /**
   * <p>The period of time that the forecast covers.</p>
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * <p>The mean value of the forecast.</p>
   * @public
   */
  MeanValue?: string | undefined;

  /**
   * <p>The lower limit for the prediction interval. </p>
   * @public
   */
  PredictionIntervalLowerBound?: string | undefined;

  /**
   * <p>The upper limit for the prediction interval. </p>
   * @public
   */
  PredictionIntervalUpperBound?: string | undefined;
}

/**
 * @public
 */
export interface GetCostForecastResponse {
  /**
   * <p>How much you are forecasted to spend over the forecast period, in <code>USD</code>.</p>
   * @public
   */
  Total?: MetricValue | undefined;

  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list
   *       of days. For <code>MONTHLY</code> forecasts, this is a list of months.</p>
   * @public
   */
  ForecastResultsByTime?: ForecastResult[] | undefined;
}

/**
 * @public
 */
export interface GetDimensionValuesResponse {
  /**
   * <p>The filters that you used to filter your request. Some dimensions are available only
   *       for a specific context.</p>
   *          <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are
   *           Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is
   *             <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services
   *           services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and
   *             <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is
   *           related. Examples include On-Demand Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The Amazon Web Services service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response
   *           for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples
   *           include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2:
   *           CloudWatch – Alarms. The response for this operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax
   *           refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in
   *           feature only available for last 14 days for EC2-Compute Service. You can opt-in by
   *           enabling <code>Hourly</code> and <code>Resource Level Data</code> in Cost Management Console preferences.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments.
   *           Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is
   *             <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are
   *           regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance
   *           (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All
   *           Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example,
   *           <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p>
   *             </li>
   *          </ul>
   * @public
   */
  DimensionValues: DimensionValuesWithAttributes[] | undefined;

  /**
   * <p>The number of results that Amazon Web Services returned at one time.</p>
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of search results.</p>
   * @public
   */
  TotalSize: number | undefined;

  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>How much it costs to run an instance.</p>
 * @public
 */
export interface CoverageCost {
  /**
   * <p>How much an On-Demand Instance costs.</p>
   * @public
   */
  OnDemandCost?: string | undefined;
}

/**
 * <p>How long a running instance either used a reservation or was On-Demand.</p>
 * @public
 */
export interface CoverageHours {
  /**
   * <p>The number of instance running hours that On-Demand Instances covered.</p>
   * @public
   */
  OnDemandHours?: string | undefined;

  /**
   * <p>The number of instance running hours that reservations covered.</p>
   * @public
   */
  ReservedHours?: string | undefined;

  /**
   * <p>The total instance usage, in hours.</p>
   * @public
   */
  TotalRunningHours?: string | undefined;

  /**
   * <p>The percentage of instance hours that a reservation covered.</p>
   * @public
   */
  CoverageHoursPercentage?: string | undefined;
}

/**
 * <p>The amount of instance usage, in normalized units. You can use normalized units to see
 *             your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose
 *             that you run an xlarge instance and a 2xlarge instance. If you run both instances for
 *             the same amount of time, the 2xlarge instance uses twice as much of your reservation as
 *             the xlarge instance, even though both instances show only one instance-hour. When you
 *             use normalized units instead of instance-hours, the xlarge instance used 8 normalized
 *             units, and the 2xlarge instance used 16 normalized units.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide for Linux
 *             Instances</i>.</p>
 * @public
 */
export interface CoverageNormalizedUnits {
  /**
   * <p>The number of normalized units that are covered by On-Demand Instances instead of a
   *             reservation.</p>
   * @public
   */
  OnDemandNormalizedUnits?: string | undefined;

  /**
   * <p>The number of normalized units that a reservation covers.</p>
   * @public
   */
  ReservedNormalizedUnits?: string | undefined;

  /**
   * <p>The total number of normalized units that you used.</p>
   * @public
   */
  TotalRunningNormalizedUnits?: string | undefined;

  /**
   * <p>The percentage of your used instance normalized units that a reservation
   *             covers.</p>
   * @public
   */
  CoverageNormalizedUnitsPercentage?: string | undefined;
}

/**
 * <p>The amount of instance usage that a reservation covered.</p>
 * @public
 */
export interface Coverage {
  /**
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   * @public
   */
  CoverageHours?: CoverageHours | undefined;

  /**
   * <p>The amount of instance usage that the reservation covered, in normalized units.</p>
   * @public
   */
  CoverageNormalizedUnits?: CoverageNormalizedUnits | undefined;

  /**
   * <p>The amount of cost that the reservation covered.</p>
   * @public
   */
  CoverageCost?: CoverageCost | undefined;
}

/**
 * <p>A group of reservations that share a set of attributes.</p>
 * @public
 */
export interface ReservationCoverageGroup {
  /**
   * <p>The attributes for this group of reservations.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>How much instance usage this group of reservations covered.</p>
   * @public
   */
  Coverage?: Coverage | undefined;
}

/**
 * <p>Reservation coverage for a specified period, in hours.</p>
 * @public
 */
export interface CoverageByTime {
  /**
   * <p>The period that this coverage was used over.</p>
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * <p>The groups of instances that the reservation covered.</p>
   * @public
   */
  Groups?: ReservationCoverageGroup[] | undefined;

  /**
   * <p>The total reservation coverage, in hours.</p>
   * @public
   */
  Total?: Coverage | undefined;
}

/**
 * @public
 */
export interface GetReservationCoverageResponse {
  /**
   * <p>The amount of time that your reservations covered.</p>
   * @public
   */
  CoveragesByTime: CoverageByTime[] | undefined;

  /**
   * <p>The total amount of instance usage that a reservation covered.</p>
   * @public
   */
  Total?: Coverage | undefined;

  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The Amazon EC2 hardware specifications that you want Amazon Web Services to provide
 *             recommendations for.</p>
 * @public
 */
export interface EC2Specification {
  /**
   * <p>Indicates whether you want a recommendation for standard or convertible
   *             reservations.</p>
   * @public
   */
  OfferingClass?: OfferingClass | undefined;
}

/**
 * <p>Hardware specifications for the service that you want recommendations for.</p>
 * @public
 */
export interface ServiceSpecification {
  /**
   * <p>The Amazon EC2 hardware specifications that you want Amazon Web Services to provide
   *             recommendations for.</p>
   * @public
   */
  EC2Specification?: EC2Specification | undefined;
}

/**
 * <p>Information about a recommendation, such as the timestamp for when Amazon Web Services
 *             made a specific recommendation.</p>
 * @public
 */
export interface ReservationPurchaseRecommendationMetadata {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The timestamp for when Amazon Web Services made the recommendation.</p>
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * <p>Additional metadata that might be applicable to the recommendation.</p>
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * <p>Details about the Amazon EC2 reservations that Amazon Web Services recommends that you
 *             purchase.</p>
 * @public
 */
export interface EC2InstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The Availability Zone of the recommended reservation.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific combination
   *             of operating system, license model, and software on an instance.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>Determines whether the recommended reservation is dedicated or shared.</p>
   * @public
   */
  Tenancy?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current-generation instance. </p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the Amazon ElastiCache reservations that Amazon Web Services recommends
 *             that you purchase.</p>
 * @public
 */
export interface ElastiCacheInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The type of node that Amazon Web Services recommends.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The description of the recommended reservation.</p>
   * @public
   */
  ProductDescription?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the Amazon OpenSearch Service reservations that Amazon Web Services
 *             recommends that you purchase.</p>
 * @public
 */
export interface ESInstanceDetails {
  /**
   * <p>The class of instance that Amazon Web Services recommends.</p>
   * @public
   */
  InstanceClass?: string | undefined;

  /**
   * <p>The size of instance that Amazon Web Services recommends.</p>
   * @public
   */
  InstanceSize?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current-generation instance.</p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the MemoryDB reservations that Amazon Web Services recommends that you
 *             purchase.</p>
 * @public
 */
export interface MemoryDBInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The node type of the recommended reservation.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the Amazon RDS reservations that Amazon Web Services recommends that you
 *             purchase.</p>
 * @public
 */
export interface RDSInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The type of instance that Amazon Web Services recommends.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The database engine that the recommended reservation supports.</p>
   * @public
   */
  DatabaseEngine?: string | undefined;

  /**
   * <p>The database edition that the recommended reservation supports.</p>
   * @public
   */
  DatabaseEdition?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a reservation in a single Availability
   *             Zone or a reservation with a backup in a second Availability Zone.</p>
   * @public
   */
  DeploymentOption?: string | undefined;

  /**
   * <p>The license model that the recommended reservation supports.</p>
   * @public
   */
  LicenseModel?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current-generation instance. </p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the Amazon Redshift reservations that Amazon Web Services recommends that
 *             you purchase.</p>
 * @public
 */
export interface RedshiftInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   * @public
   */
  Family?: string | undefined;

  /**
   * <p>The type of node that Amazon Web Services recommends.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Determines whether the recommendation is for a current-generation instance.</p>
   * @public
   */
  CurrentGeneration?: boolean | undefined;

  /**
   * <p>Determines whether the recommended reservation is size flexible.</p>
   * @public
   */
  SizeFlexEligible?: boolean | undefined;
}

/**
 * <p>Details about the reservations that Amazon Web Services recommends that you
 *             purchase.</p>
 * @public
 */
export interface InstanceDetails {
  /**
   * <p>The Amazon EC2 reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  EC2InstanceDetails?: EC2InstanceDetails | undefined;

  /**
   * <p>The Amazon RDS reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  RDSInstanceDetails?: RDSInstanceDetails | undefined;

  /**
   * <p>The Amazon Redshift reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  RedshiftInstanceDetails?: RedshiftInstanceDetails | undefined;

  /**
   * <p>The ElastiCache reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails | undefined;

  /**
   * <p>The Amazon OpenSearch Service reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  ESInstanceDetails?: ESInstanceDetails | undefined;

  /**
   * <p>The MemoryDB reservations that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  MemoryDBInstanceDetails?: MemoryDBInstanceDetails | undefined;
}

/**
 * <p>The DynamoDB reservations that Amazon Web Services recommends that you purchase.</p>
 * @public
 */
export interface DynamoDBCapacityDetails {
  /**
   * <p>The capacity unit of the recommended reservation.</p>
   * @public
   */
  CapacityUnits?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Details about the reservations that Amazon Web Services recommends that you
 *
 *             purchase.</p>
 * @public
 */
export interface ReservedCapacityDetails {
  /**
   * <p>The DynamoDB reservations that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  DynamoDBCapacityDetails?: DynamoDBCapacityDetails | undefined;
}

/**
 * <p>Details about your recommended reservation purchase.</p>
 * @public
 */
export interface ReservationPurchaseRecommendationDetail {
  /**
   * <p>The account that this Reserved Instance (RI) recommendation is for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Details about the reservations that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  InstanceDetails?: InstanceDetails | undefined;

  /**
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   * @public
   */
  RecommendedNumberOfInstancesToPurchase?: string | undefined;

  /**
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *             purchase.</p>
   * @public
   */
  RecommendedNormalizedUnitsToPurchase?: string | undefined;

  /**
   * <p>The minimum number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  MinimumNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * <p>The minimum number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  MinimumNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * <p>The maximum number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  MaximumNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * <p>The maximum number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  MaximumNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * <p>The average number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  AverageNumberOfInstancesUsedPerHour?: string | undefined;

  /**
   * <p>The average number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   * @public
   */
  AverageNormalizedUnitsUsedPerHour?: string | undefined;

  /**
   * <p>The average utilization of your instances. Amazon Web Services uses this to calculate
   *             your recommended reservation purchases.</p>
   * @public
   */
  AverageUtilization?: string | undefined;

  /**
   * <p>How long Amazon Web Services estimates that it takes for this instance to start saving
   *             you money, in months.</p>
   * @public
   */
  EstimatedBreakEvenInMonths?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>How much Amazon Web Services estimates that this specific recommendation might save you
   *             in a month.</p>
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>How much Amazon Web Services estimates that this specific recommendation might save you
   *             in a month, as a percentage of your overall costs.</p>
   * @public
   */
  EstimatedMonthlySavingsPercentage?: string | undefined;

  /**
   * <p>How much Amazon Web Services estimates that you spend on On-Demand Instances in a
   *             month.</p>
   * @public
   */
  EstimatedMonthlyOnDemandCost?: string | undefined;

  /**
   * <p>How much Amazon Web Services estimates that you might spend for all usage during the
   *             specified historical period if you had a reservation.</p>
   * @public
   */
  EstimatedReservationCostForLookbackPeriod?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   * @public
   */
  RecurringStandardMonthlyCost?: string | undefined;

  /**
   * <p>Details about the reservations that Amazon Web Services recommends that you
   *
   *             purchase.</p>
   * @public
   */
  ReservedCapacityDetails?: ReservedCapacityDetails | undefined;

  /**
   * <p>The number of reserved capacity units that Amazon Web Services recommends that you
   *
   *             purchase.</p>
   * @public
   */
  RecommendedNumberOfCapacityUnitsToPurchase?: string | undefined;

  /**
   * <p>The minimum number of provisioned capacity units that you used in an hour during the
   *
   *             historical period. Amazon Web Services uses this to calculate your recommended
   *
   *             reservation purchases.</p>
   * @public
   */
  MinimumNumberOfCapacityUnitsUsedPerHour?: string | undefined;

  /**
   * <p>The maximum number of provisioned capacity units that you used in an hour during the
   *
   *             historical period. Amazon Web Services uses this to calculate your recommended
   *
   *             reservation purchases.</p>
   * @public
   */
  MaximumNumberOfCapacityUnitsUsedPerHour?: string | undefined;

  /**
   * <p>The average number of provisioned capacity units that you used in an hour during the
   *
   *             historical period. Amazon Web Services uses this to calculate your recommended
   *
   *             reservation purchases.</p>
   * @public
   */
  AverageNumberOfCapacityUnitsUsedPerHour?: string | undefined;
}

/**
 * <p>A summary about this recommendation, such as the currency code, the amount that
 *                 Amazon Web Services estimates that you could save, and the total amount of
 *             reservation to purchase.</p>
 * @public
 */
export interface ReservationPurchaseRecommendationSummary {
  /**
   * <p>The total amount that Amazon Web Services estimates that this recommendation could save
   *             you in a month.</p>
   * @public
   */
  TotalEstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The total amount that Amazon Web Services estimates that this recommendation could save
   *             you in a month, as a percentage of your costs.</p>
   * @public
   */
  TotalEstimatedMonthlySavingsPercentage?: string | undefined;

  /**
   * <p>The currency code used for this recommendation.</p>
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * <p>A specific reservation that Amazon Web Services recommends for purchase.</p>
 * @public
 */
export interface ReservationPurchaseRecommendation {
  /**
   * <p>The account scope that Amazon Web Services recommends that you purchase this instance
   *             for. For example, you can purchase this reservation for an entire organization in
   *                 Amazon Web Services Organizations.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>How many days of previous usage that Amazon Web Services considers when making this
   *             recommendation.</p>
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * <p>The term of the reservation that you want recommendations for, in years.</p>
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * <p>The payment option for the reservation (for example, <code>AllUpfront</code> or
   *                 <code>NoUpfront</code>).</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>Hardware specifications for the service that you want recommendations for.</p>
   * @public
   */
  ServiceSpecification?: ServiceSpecification | undefined;

  /**
   * <p>Details about the recommended purchases.</p>
   * @public
   */
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[] | undefined;

  /**
   * <p>A summary about the recommended purchase.</p>
   * @public
   */
  RecommendationSummary?: ReservationPurchaseRecommendationSummary | undefined;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationResponse {
  /**
   * <p>Information about this specific recommendation call, such as the time stamp for when
   *       Cost Explorer generated this recommendation.</p>
   * @public
   */
  Metadata?: ReservationPurchaseRecommendationMetadata | undefined;

  /**
   * <p>Recommendations for reservations to purchase.</p>
   * @public
   */
  Recommendations?: ReservationPurchaseRecommendation[] | undefined;

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The aggregated numbers for your reservation usage.</p>
 * @public
 */
export interface ReservationAggregates {
  /**
   * <p>The percentage of reservation time that you used.</p>
   * @public
   */
  UtilizationPercentage?: string | undefined;

  /**
   * <p>The percentage of Amazon EC2 reservation time that you used. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   * @public
   */
  UtilizationPercentageInUnits?: string | undefined;

  /**
   * <p>How many reservation hours that you purchased.</p>
   * @public
   */
  PurchasedHours?: string | undefined;

  /**
   * <p>The number of Amazon EC2 reservation hours that you purchased. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   * @public
   */
  PurchasedUnits?: string | undefined;

  /**
   * <p>The total number of reservation hours that you used.</p>
   * @public
   */
  TotalActualHours?: string | undefined;

  /**
   * <p>The total number of Amazon EC2 reservation hours that you used. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   * @public
   */
  TotalActualUnits?: string | undefined;

  /**
   * <p>The number of reservation hours that you didn't use.</p>
   * @public
   */
  UnusedHours?: string | undefined;

  /**
   * <p>The number of Amazon EC2 reservation hours that you didn't use. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   * @public
   */
  UnusedUnits?: string | undefined;

  /**
   * <p>How much your reservation costs if charged On-Demand rates.</p>
   * @public
   */
  OnDemandCostOfRIHoursUsed?: string | undefined;

  /**
   * <p>How much you saved due to purchasing and utilizing reservation. Amazon Web Services
   *             calculates this by subtracting <code>TotalAmortizedFee</code> from
   *                 <code>OnDemandCostOfRIHoursUsed</code>.</p>
   * @public
   */
  NetRISavings?: string | undefined;

  /**
   * <p>How much you might save if you use your entire reservation.</p>
   * @public
   */
  TotalPotentialRISavings?: string | undefined;

  /**
   * <p>The upfront cost of your reservation. It's amortized over the reservation
   *             period.</p>
   * @public
   */
  AmortizedUpfrontFee?: string | undefined;

  /**
   * <p>The monthly cost of your reservation. It's amortized over the reservation
   *             period.</p>
   * @public
   */
  AmortizedRecurringFee?: string | undefined;

  /**
   * <p>The total cost of your reservation. It's amortized over the reservation period.</p>
   * @public
   */
  TotalAmortizedFee?: string | undefined;

  /**
   * <p>The cost of unused hours for your reservation.</p>
   * @public
   */
  RICostForUnusedHours?: string | undefined;

  /**
   * <p>The realized savings because of purchasing and using a reservation.</p>
   * @public
   */
  RealizedSavings?: string | undefined;

  /**
   * <p>The unrealized savings because of purchasing and using a reservation.</p>
   * @public
   */
  UnrealizedSavings?: string | undefined;
}

/**
 * <p>A group of reservations that share a set of attributes.</p>
 * @public
 */
export interface ReservationUtilizationGroup {
  /**
   * <p>The key for a specific reservation attribute.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value of a specific reservation attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The attributes for this group of reservations.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>How much you used this group of reservations.</p>
   * @public
   */
  Utilization?: ReservationAggregates | undefined;
}

/**
 * <p>The amount of utilization, in hours.</p>
 * @public
 */
export interface UtilizationByTime {
  /**
   * <p>The period of time that this utilization was used for.</p>
   * @public
   */
  TimePeriod?: DateInterval | undefined;

  /**
   * <p>The groups that this utilization result uses.</p>
   * @public
   */
  Groups?: ReservationUtilizationGroup[] | undefined;

  /**
   * <p>The total number of reservation hours that were used.</p>
   * @public
   */
  Total?: ReservationAggregates | undefined;
}

/**
 * @public
 */
export interface GetReservationUtilizationResponse {
  /**
   * <p>The amount of time that you used your Reserved Instances (RIs).</p>
   * @public
   */
  UtilizationsByTime: UtilizationByTime[] | undefined;

  /**
   * <p>The total amount of time that you used your Reserved Instances (RIs).</p>
   * @public
   */
  Total?: ReservationAggregates | undefined;

  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>You can use <code>RightsizingRecommendationConfiguration</code> to customize
 *             recommendations across two attributes. You can choose to view recommendations for
 *             instances within the same instance families or across different instance families. You
 *             can also choose to view your estimated savings that are associated with recommendations
 *             with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or
 *             neither. </p>
 * @public
 */
export interface RightsizingRecommendationConfiguration {
  /**
   * <p>The option to see recommendations within the same instance family or recommendations
   *             for instances across other families. The default value is
   *                 <code>SAME_INSTANCE_FAMILY</code>. </p>
   * @public
   */
  RecommendationTarget: RecommendationTarget | undefined;

  /**
   * <p>The option to consider RI or Savings Plans discount benefits in your savings
   *             calculation. The default value is <code>TRUE</code>. </p>
   * @public
   */
  BenefitsConsidered: boolean | undefined;
}

/**
 * <p>Metadata for a recommendation set.</p>
 * @public
 */
export interface RightsizingRecommendationMetadata {
  /**
   * <p>The ID for the recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The timestamp for when Amazon Web Services made the recommendation.</p>
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * <p>The number of days of previous usage that Amazon Web Services considers when making the
   *             recommendation.</p>
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * <p>Additional metadata that might be applicable to the recommendation.</p>
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * <p>Details on the Amazon EC2 Resource.</p>
 * @public
 */
export interface EC2ResourceDetails {
  /**
   * <p>The hourly public On-Demand rate for the instance type.</p>
   * @public
   */
  HourlyOnDemandRate?: string | undefined;

  /**
   * <p>The type of Amazon Web Services instance.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The platform of the Amazon Web Services instance. The platform is the specific
   *             combination of operating system, license model, and software on an instance.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The Amazon Web Services Region of the instance.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The SKU of the product.</p>
   * @public
   */
  Sku?: string | undefined;

  /**
   * <p>The memory capacity of the Amazon Web Services instance.</p>
   * @public
   */
  Memory?: string | undefined;

  /**
   * <p>The network performance capacity of the Amazon Web Services instance.</p>
   * @public
   */
  NetworkPerformance?: string | undefined;

  /**
   * <p>The disk storage of the Amazon Web Services instance. This doesn't include EBS
   *             storage.</p>
   * @public
   */
  Storage?: string | undefined;

  /**
   * <p>The number of VCPU cores in the Amazon Web Services instance type.</p>
   * @public
   */
  Vcpu?: string | undefined;
}

/**
 * <p>Details for the resource.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>Details for the Amazon EC2 resource.</p>
   * @public
   */
  EC2ResourceDetails?: EC2ResourceDetails | undefined;
}

/**
 * <p>The field that contains a list of disk (local storage) metrics that are associated
 *             with the current instance. </p>
 * @public
 */
export interface DiskResourceUtilization {
  /**
   * <p>The maximum number of read operations per second. </p>
   * @public
   */
  DiskReadOpsPerSecond?: string | undefined;

  /**
   * <p>The maximum number of write operations per second. </p>
   * @public
   */
  DiskWriteOpsPerSecond?: string | undefined;

  /**
   * <p>The maximum read throughput operations per second. </p>
   * @public
   */
  DiskReadBytesPerSecond?: string | undefined;

  /**
   * <p>The maximum write throughput operations per second. </p>
   * @public
   */
  DiskWriteBytesPerSecond?: string | undefined;
}

/**
 * <p>The EBS field that contains a list of EBS metrics that are associated with the current
 *             instance. </p>
 * @public
 */
export interface EBSResourceUtilization {
  /**
   * <p>The maximum number of read operations per second. </p>
   * @public
   */
  EbsReadOpsPerSecond?: string | undefined;

  /**
   * <p>The maximum number of write operations per second. </p>
   * @public
   */
  EbsWriteOpsPerSecond?: string | undefined;

  /**
   * <p>The maximum size of read operations per second </p>
   * @public
   */
  EbsReadBytesPerSecond?: string | undefined;

  /**
   * <p>The maximum size of write operations per second. </p>
   * @public
   */
  EbsWriteBytesPerSecond?: string | undefined;
}

/**
 * <p>The network field that contains a list of network metrics that are associated with the
 *             current instance. </p>
 * @public
 */
export interface NetworkResourceUtilization {
  /**
   * <p>The network inbound throughput utilization measured in Bytes per second (Bps). </p>
   * @public
   */
  NetworkInBytesPerSecond?: string | undefined;

  /**
   * <p>The network outbound throughput utilization measured in Bytes per second (Bps).
   *         </p>
   * @public
   */
  NetworkOutBytesPerSecond?: string | undefined;

  /**
   * <p>The network inbound packets that are measured in packets per second. </p>
   * @public
   */
  NetworkPacketsInPerSecond?: string | undefined;

  /**
   * <p>The network outbound packets that are measured in packets per second. </p>
   * @public
   */
  NetworkPacketsOutPerSecond?: string | undefined;
}

/**
 * <p>Utilization metrics for the instance. </p>
 * @public
 */
export interface EC2ResourceUtilization {
  /**
   * <p>The maximum observed or expected CPU utilization of the instance.</p>
   * @public
   */
  MaxCpuUtilizationPercentage?: string | undefined;

  /**
   * <p>The maximum observed or expected memory utilization of the instance.</p>
   * @public
   */
  MaxMemoryUtilizationPercentage?: string | undefined;

  /**
   * <p>The maximum observed or expected storage utilization of the instance. This doesn't
   *             include EBS storage.</p>
   * @public
   */
  MaxStorageUtilizationPercentage?: string | undefined;

  /**
   * <p>The EBS field that contains a list of EBS metrics that are associated with the current
   *             instance. </p>
   * @public
   */
  EBSResourceUtilization?: EBSResourceUtilization | undefined;

  /**
   * <p>The field that contains a list of disk (local storage) metrics that are associated
   *             with the current instance. </p>
   * @public
   */
  DiskResourceUtilization?: DiskResourceUtilization | undefined;

  /**
   * <p>The network field that contains a list of network metrics that are associated with the
   *             current instance. </p>
   * @public
   */
  NetworkResourceUtilization?: NetworkResourceUtilization | undefined;
}

/**
 * <p>Resource utilization of current resource. </p>
 * @public
 */
export interface ResourceUtilization {
  /**
   * <p>The utilization of current Amazon EC2 instance. </p>
   * @public
   */
  EC2ResourceUtilization?: EC2ResourceUtilization | undefined;
}

/**
 * <p>Context about the current instance.</p>
 * @public
 */
export interface CurrentInstance {
  /**
   * <p>Resource ID of the current instance.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The name that you given an instance. This field shows as blank if you haven't given
   *             the instance a name.</p>
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * <p>Cost allocation resource tags that are applied to the instance.</p>
   * @public
   */
  Tags?: TagValues[] | undefined;

  /**
   * <p>Details about the resource and utilization.</p>
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>Utilization information of the current instance during the lookback period.</p>
   * @public
   */
  ResourceUtilization?: ResourceUtilization | undefined;

  /**
   * <p>The number of hours during the lookback period that's covered by reservations.</p>
   * @public
   */
  ReservationCoveredHoursInLookbackPeriod?: string | undefined;

  /**
   * <p>The number of hours during the lookback period that's covered by Savings Plans.</p>
   * @public
   */
  SavingsPlansCoveredHoursInLookbackPeriod?: string | undefined;

  /**
   * <p>The number of hours during the lookback period that's billed at On-Demand
   *             rates.</p>
   * @public
   */
  OnDemandHoursInLookbackPeriod?: string | undefined;

  /**
   * <p>The total number of hours that the instance ran during the lookback period.</p>
   * @public
   */
  TotalRunningHoursInLookbackPeriod?: string | undefined;

  /**
   * <p>The current On-Demand cost of operating this instance on a monthly basis.</p>
   * @public
   */
  MonthlyCost?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * <p>Details on recommended instance.</p>
 * @public
 */
export interface TargetInstance {
  /**
   * <p>The expected cost to operate this instance type on a monthly basis.</p>
   * @public
   */
  EstimatedMonthlyCost?: string | undefined;

  /**
   * <p>The estimated savings that result from modification, on a monthly basis.</p>
   * @public
   */
  EstimatedMonthlySavings?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>Determines whether this recommendation is the defaulted Amazon Web Services
   *             recommendation.</p>
   * @public
   */
  DefaultTargetInstance?: boolean | undefined;

  /**
   * <p>Details on the target instance type. </p>
   * @public
   */
  ResourceDetails?: ResourceDetails | undefined;

  /**
   * <p>The expected utilization metrics for target instance type.</p>
   * @public
   */
  ExpectedResourceUtilization?: ResourceUtilization | undefined;

  /**
   * <p>Explains the actions that you might need to take to successfully migrate your
   *             workloads from the current instance type to the recommended instance type. </p>
   * @public
   */
  PlatformDifferences?: PlatformDifference[] | undefined;
}

/**
 * <p>Details for the modification recommendation.</p>
 * @public
 */
export interface ModifyRecommendationDetail {
  /**
   * <p>Determines whether this instance type is the Amazon Web Services default
   *             recommendation.</p>
   * @public
   */
  TargetInstances?: TargetInstance[] | undefined;
}

/**
 * <p>Details on termination recommendation. </p>
 * @public
 */
export interface TerminateRecommendationDetail {
  /**
   * <p>The estimated savings that result from modification, on a monthly basis.</p>
   * @public
   */
  EstimatedMonthlySavings?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   * @public
   */
  CurrencyCode?: string | undefined;
}

/**
 * <p>Recommendations to rightsize resources.</p>
 * @public
 */
export interface RightsizingRecommendation {
  /**
   * <p>The account that this recommendation is for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Context
   *             regarding the current instance.</p>
   * @public
   */
  CurrentInstance?: CurrentInstance | undefined;

  /**
   * <p>A recommendation to either terminate or modify the resource.</p>
   * @public
   */
  RightsizingType?: RightsizingType | undefined;

  /**
   * <p>The details for the modification recommendations. </p>
   * @public
   */
  ModifyRecommendationDetail?: ModifyRecommendationDetail | undefined;

  /**
   * <p>The details for termination recommendations.</p>
   * @public
   */
  TerminateRecommendationDetail?: TerminateRecommendationDetail | undefined;

  /**
   * <p>The list of possible reasons why the recommendation is generated, such as under- or
   *             over-utilization of specific metrics (for example, CPU, Memory, Network). </p>
   * @public
   */
  FindingReasonCodes?: FindingReasonCode[] | undefined;
}

/**
 * <p>The summary of rightsizing recommendations </p>
 * @public
 */
export interface RightsizingRecommendationSummary {
  /**
   * <p>The total number of instance recommendations.</p>
   * @public
   */
  TotalRecommendationCount?: string | undefined;

  /**
   * <p>The estimated total savings resulting from modifications, on a monthly basis.</p>
   * @public
   */
  EstimatedTotalMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to calculate the savings.</p>
   * @public
   */
  SavingsCurrencyCode?: string | undefined;

  /**
   * <p> The savings percentage based on the recommended modifications. It's relative to the
   *             total On-Demand costs that are associated with these instances.</p>
   * @public
   */
  SavingsPercentage?: string | undefined;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationResponse {
  /**
   * <p>Information regarding this specific recommendation set.</p>
   * @public
   */
  Metadata?: RightsizingRecommendationMetadata | undefined;

  /**
   * <p>Summary of this recommendation set.</p>
   * @public
   */
  Summary?: RightsizingRecommendationSummary | undefined;

  /**
   * <p>Recommendations to rightsize resources.</p>
   * @public
   */
  RightsizingRecommendations?: RightsizingRecommendation[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>You can use Configuration to customize recommendations across two attributes. You can
   *       choose to view recommendations for instances within the same instance families or across
   *       different instance families. You can also choose to view your estimated savings that are
   *       associated with recommendations with consideration of existing Savings Plans or RI benefits,
   *       or neither. </p>
   * @public
   */
  Configuration?: RightsizingRecommendationConfiguration | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {
  /**
   * <p>The ID that is associated with the Savings Plan recommendation.</p>
   * @public
   */
  RecommendationDetailId: string | undefined;
}

/**
 * <p>The details and metrics for the given recommendation.</p>
 * @public
 */
export interface RecommendationDetailData {
  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *             calculates recommendations including the management account and member accounts if the
   *             value is set to PAYER. If the value is LINKED, recommendations are calculated for
   *             individual member accounts only.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>How many days of previous usage that Amazon Web Services considers when making this
   *             recommendation.</p>
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * <p>The requested Savings Plan recommendation type.</p>
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * <p>The term of the commitment in years.</p>
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * <p>The payment option for the commitment (for example, All Upfront or No Upfront).</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The AccountID that the recommendation is generated for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to generate the recommendation and
   *             present potential savings.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The instance family of the recommended Savings Plan.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The region the recommendation is generated for.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The unique ID that's used to distinguish Savings Plans from one another.</p>
   * @public
   */
  OfferingId?: string | undefined;

  /**
   * <p>The period of time that you want the usage and costs for.</p>
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * <p>The period of time that you want the usage and costs for.</p>
   * @public
   */
  LatestUsageTimestamp?: string | undefined;

  /**
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The estimated utilization of the recommended Savings Plan.</p>
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * <p>The estimated monthly savings amount based on the recommended Savings Plan.</p>
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plan, over the length of the lookback period.</p>
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * <p>The estimated On-Demand costs you expect with no additional commitment, based on your
   *             usage of the selected time period and the Savings Plan you own.</p>
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * <p>The estimated return on investment that's based on the recommended Savings Plan that
   *             you purchased. This is calculated as estimatedSavingsAmount/estimatedSPCost*100.</p>
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * <p>The cost of the recommended Savings Plan over the length of the lookback
   *             period.</p>
   * @public
   */
  EstimatedSPCost?: string | undefined;

  /**
   * <p>The estimated savings amount that's based on the recommended Savings Plan over the
   *             length of the lookback period.</p>
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand
   *             usage over the lookback period.</p>
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * <p>The existing hourly commitment for the Savings Plan type.</p>
   * @public
   */
  ExistingHourlyCommitment?: string | undefined;

  /**
   * <p>The recommended hourly commitment level for the Savings Plan type and the
   *             configuration that's based on the usage during the lookback period.</p>
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * <p>The upfront cost of the recommended Savings Plan, based on the selected payment
   *             option.</p>
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * <p>The average value of hourly coverage over the lookback period.</p>
   * @public
   */
  CurrentAverageCoverage?: string | undefined;

  /**
   * <p>The estimated coverage of the recommended Savings Plan.</p>
   * @public
   */
  EstimatedAverageCoverage?: string | undefined;

  /**
   * <p>The related hourly cost, coverage, and utilization metrics over the lookback
   *             period.</p>
   * @public
   */
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[] | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
  /**
   * <p>The ID that is associated with the Savings Plan recommendation.</p>
   * @public
   */
  RecommendationDetailId?: string | undefined;

  /**
   * <p>Contains detailed information about a specific Savings Plan recommendation.</p>
   * @public
   */
  RecommendationDetailData?: RecommendationDetailData | undefined;
}

/**
 * <p>Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and
 *             total Savings Plans costs for an account.</p>
 * @public
 */
export interface SavingsPlansCoverageData {
  /**
   * <p>The amount of your Amazon Web Services usage that's covered by a Savings Plans.</p>
   * @public
   */
  SpendCoveredBySavingsPlans?: string | undefined;

  /**
   * <p>The cost of your Amazon Web Services usage at the public On-Demand rate.</p>
   * @public
   */
  OnDemandCost?: string | undefined;

  /**
   * <p>The total cost of your Amazon Web Services usage, regardless of your purchase
   *             option.</p>
   * @public
   */
  TotalCost?: string | undefined;

  /**
   * <p>The percentage of your existing Savings Plans covered usage, divided by all of your
   *             eligible Savings Plans usage in an account (or set of accounts).</p>
   * @public
   */
  CoveragePercentage?: string | undefined;
}

/**
 * <p>The amount of Savings Plans eligible usage that's covered by Savings Plans. All
 *             calculations consider the On-Demand equivalent of your Savings Plans usage.</p>
 * @public
 */
export interface SavingsPlansCoverage {
  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The amount of Savings Plans eligible usage that the Savings Plans covered.</p>
   * @public
   */
  Coverage?: SavingsPlansCoverageData | undefined;

  /**
   * <p>The time period of the request. </p>
   * @public
   */
  TimePeriod?: DateInterval | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageResponse {
  /**
   * <p>The amount of spend that your Savings Plans covered.</p>
   * @public
   */
  SavingsPlansCoverages: SavingsPlansCoverage[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Metadata about your Savings Plans Purchase Recommendations.</p>
 * @public
 */
export interface SavingsPlansPurchaseRecommendationMetadata {
  /**
   * <p>The unique identifier for the recommendation set.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The timestamp that shows when the recommendations were generated.</p>
   * @public
   */
  GenerationTimestamp?: string | undefined;

  /**
   * <p>Additional metadata that might be applicable to the recommendation.</p>
   * @public
   */
  AdditionalMetadata?: string | undefined;
}

/**
 * <p>The attribute details on a specific Savings Plan.</p>
 * @public
 */
export interface SavingsPlansDetails {
  /**
   * <p>A collection of Amazon Web Services resources in a geographic area. Each Amazon Web Services Region is isolated and independent of the other Regions.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>A group of instance types that Savings Plans applies to.</p>
   * @public
   */
  InstanceFamily?: string | undefined;

  /**
   * <p>The unique ID that's used to distinguish Savings Plans from one another.</p>
   * @public
   */
  OfferingId?: string | undefined;
}

/**
 * <p>Details for your recommended Savings Plans.</p>
 * @public
 */
export interface SavingsPlansPurchaseRecommendationDetail {
  /**
   * <p>Details for your recommended Savings Plans.</p>
   * @public
   */
  SavingsPlansDetails?: SavingsPlansDetails | undefined;

  /**
   * <p>The <code>AccountID</code> the recommendation is generated for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The upfront cost of the recommended Savings Plans, based on the selected payment
   *             option.</p>
   * @public
   */
  UpfrontCost?: string | undefined;

  /**
   * <p>The estimated return on investment that's based on the recommended Savings Plans that
   *             you purchased. This is calculated as <code>estimatedSavingsAmount</code>/
   *                 <code>estimatedSPCost</code>*100.</p>
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to generate the recommendations and
   *             present potential savings.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The cost of the recommended Savings Plans over the length of the lookback
   *             period.</p>
   * @public
   */
  EstimatedSPCost?: string | undefined;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plans, over the length of the lookback period.</p>
   * @public
   */
  EstimatedOnDemandCost?: string | undefined;

  /**
   * <p> The estimated On-Demand costs you expect with no additional commitment, based on your
   *             usage of the selected time period and the Savings Plans you own. </p>
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;

  /**
   * <p>The estimated savings amount that's based on the recommended Savings Plans over the
   *             length of the lookback period.</p>
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand
   *             usage over the lookback period.</p>
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * <p>The recommended hourly commitment level for the Savings Plans type and the
   *             configuration that's based on the usage during the lookback period.</p>
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * <p>The estimated utilization of the recommended Savings Plans.</p>
   * @public
   */
  EstimatedAverageUtilization?: string | undefined;

  /**
   * <p>The estimated monthly savings amount based on the recommended Savings Plans.</p>
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentMinimumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentMaximumHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   * @public
   */
  CurrentAverageHourlyOnDemandSpend?: string | undefined;

  /**
   * <p>Contains detailed information about a specific Savings Plan recommendation.</p>
   * @public
   */
  RecommendationDetailId?: string | undefined;
}

/**
 * <p>Summary metrics for your Savings Plans Purchase Recommendations.</p>
 * @public
 */
export interface SavingsPlansPurchaseRecommendationSummary {
  /**
   * <p>The estimated return on investment that's based on the recommended Savings Plans and
   *             estimated savings.</p>
   * @public
   */
  EstimatedROI?: string | undefined;

  /**
   * <p>The currency code that Amazon Web Services used to generate the recommendations and
   *             present potential savings.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The estimated total cost of the usage after purchasing the recommended Savings Plans.
   *             This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand
   *             usage.</p>
   * @public
   */
  EstimatedTotalCost?: string | undefined;

  /**
   * <p>The current total on demand spend of the applicable usage types over the lookback
   *             period.</p>
   * @public
   */
  CurrentOnDemandSpend?: string | undefined;

  /**
   * <p>The estimated total savings over the lookback period, based on the purchase of the
   *             recommended Savings Plans.</p>
   * @public
   */
  EstimatedSavingsAmount?: string | undefined;

  /**
   * <p>The aggregate number of Savings Plans recommendations that exist for your
   *             account.</p>
   * @public
   */
  TotalRecommendationCount?: string | undefined;

  /**
   * <p>The recommended Savings Plans cost on a daily (24 hourly) basis.</p>
   * @public
   */
  DailyCommitmentToPurchase?: string | undefined;

  /**
   * <p>The recommended hourly commitment that's based on the recommendation
   *             parameters.</p>
   * @public
   */
  HourlyCommitmentToPurchase?: string | undefined;

  /**
   * <p>The estimated savings relative to the total cost of On-Demand usage, over the lookback
   *             period. This is calculated as <code>estimatedSavingsAmount</code>/
   *                 <code>CurrentOnDemandSpend</code>*100.</p>
   * @public
   */
  EstimatedSavingsPercentage?: string | undefined;

  /**
   * <p>The estimated monthly savings amount that's based on the recommended Savings Plans
   *             purchase.</p>
   * @public
   */
  EstimatedMonthlySavingsAmount?: string | undefined;

  /**
   * <p>The estimated On-Demand costs you expect with no additional commitment. It's based on
   *             your usage of the selected time period and the Savings Plans you own. </p>
   * @public
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string | undefined;
}

/**
 * <p>Contains your request parameters, Savings Plan Recommendations Summary, and
 *             Details.</p>
 * @public
 */
export interface SavingsPlansPurchaseRecommendation {
  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *             calculates recommendations that include the management account and member accounts if
   *             the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>,
   *             recommendations are calculated for individual member accounts only.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>The requested Savings Plans recommendation type.</p>
   * @public
   */
  SavingsPlansType?: SupportedSavingsPlansType | undefined;

  /**
   * <p>The Savings Plans recommendation term in years. It's used to generate the
   *             recommendation.</p>
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * <p>The payment option that's used to generate the recommendation.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The lookback period in days that's used to generate the recommendation.</p>
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * <p>Details for the Savings Plans that we recommend that you purchase to cover existing
   *             Savings Plans eligible workloads.</p>
   * @public
   */
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[] | undefined;

  /**
   * <p>Summary metrics for your Savings Plans Recommendations. </p>
   * @public
   */
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationResponse {
  /**
   * <p>Information that regards this specific recommendation set.</p>
   * @public
   */
  Metadata?: SavingsPlansPurchaseRecommendationMetadata | undefined;

  /**
   * <p>Contains your request parameters, Savings Plan Recommendations Summary, and
   *       Details.</p>
   * @public
   */
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation | undefined;

  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The amortized amount of Savings Plans purchased in a specific account during a
 *             specific time interval.</p>
 * @public
 */
export interface SavingsPlansAmortizedCommitment {
  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with either a
   *                 <code>Partial</code> or a <code>NoUpfront</code>.</p>
   * @public
   */
  AmortizedRecurringCommitment?: string | undefined;

  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with an
   *                 <code>Upfront</code> or <code>PartialUpfront</code> Savings Plans.</p>
   * @public
   */
  AmortizedUpfrontCommitment?: string | undefined;

  /**
   * <p>The total amortized amount of your Savings Plans commitment, regardless of your
   *             Savings Plans purchase method. </p>
   * @public
   */
  TotalAmortizedCommitment?: string | undefined;
}

/**
 * <p>The amount of savings that you're accumulating, against the public On-Demand rate of
 *             the usage accrued in an account.</p>
 * @public
 */
export interface SavingsPlansSavings {
  /**
   * <p>The savings amount that you're accumulating for the usage that's covered by a Savings
   *             Plans, when compared to the On-Demand equivalent of the same usage.</p>
   * @public
   */
  NetSavings?: string | undefined;

  /**
   * <p>How much the amount that the usage would have cost if it was accrued at the On-Demand
   *             rate.</p>
   * @public
   */
  OnDemandCostEquivalent?: string | undefined;
}

/**
 * <p>The measurement of how well you're using your existing Savings Plans.</p>
 * @public
 */
export interface SavingsPlansUtilization {
  /**
   * <p>The total amount of Savings Plans commitment that's been purchased in an account (or
   *             set of accounts).</p>
   * @public
   */
  TotalCommitment?: string | undefined;

  /**
   * <p>The amount of your Savings Plans commitment that was consumed from Savings Plans
   *             eligible usage in a specific period.</p>
   * @public
   */
  UsedCommitment?: string | undefined;

  /**
   * <p>The amount of your Savings Plans commitment that wasn't consumed from Savings Plans
   *             eligible usage in a specific period.</p>
   * @public
   */
  UnusedCommitment?: string | undefined;

  /**
   * <p>The amount of <code>UsedCommitment</code> divided by the <code>TotalCommitment</code>
   *             for your Savings Plans.</p>
   * @public
   */
  UtilizationPercentage?: string | undefined;
}

/**
 * <p>The amount of Savings Plans utilization (in hours).</p>
 * @public
 */
export interface SavingsPlansUtilizationByTime {
  /**
   * <p>The time period of the request. </p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   * @public
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * <p>The amount that's saved by using existing Savings Plans. Savings returns both net
   *             savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the
   *             Savings Plans when considering the utilization rate.</p>
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the
   *             upfront and recurring Savings Plans fees.</p>
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * <p>The aggregated utilization metrics for your Savings Plans usage.</p>
 * @public
 */
export interface SavingsPlansUtilizationAggregates {
  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   * @public
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * <p>The amount that's saved by using existing Savings Plans. Savings returns both net
   *             savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the
   *             Savings Plans when considering the utilization rate.</p>
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the
   *             upfront and recurring Savings Plans fees.</p>
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationResponse {
  /**
   * <p>The amount of cost/commitment that you used your Savings Plans. You can use it to specify
   *       date ranges.</p>
   * @public
   */
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[] | undefined;

  /**
   * <p>The total amount of cost/commitment that you used your Savings Plans, regardless of date
   *       ranges.</p>
   * @public
   */
  Total: SavingsPlansUtilizationAggregates | undefined;
}

/**
 * <p>A single daily or monthly Savings Plans utilization rate and details for your account.
 *             A management account in an organization have access to member accounts. You can use
 *                 <code>GetDimensionValues</code> to determine the possible dimension values. </p>
 * @public
 */
export interface SavingsPlansUtilizationDetail {
  /**
   * <p>The unique Amazon Resource Name (ARN) for a particular Savings Plan.</p>
   * @public
   */
  SavingsPlanArn?: string | undefined;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   * @public
   */
  Utilization?: SavingsPlansUtilization | undefined;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings
   *             from savings plans and also the <code>onDemandCostEquivalent</code> of the Savings Plans
   *             when considering the utilization rate.</p>
   * @public
   */
  Savings?: SavingsPlansSavings | undefined;

  /**
   * <p>The total amortized commitment for a Savings Plans. Includes the sum of the upfront
   *             and recurring Savings Plans fees.</p>
   * @public
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsResponse {
  /**
   * <p>Retrieves a single daily or monthly Savings Plans utilization rate and details for your
   *       account.</p>
   * @public
   */
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[] | undefined;

  /**
   * <p>The total Savings Plans utilization, regardless of time period.</p>
   * @public
   */
  Total?: SavingsPlansUtilizationAggregates | undefined;

  /**
   * <p>The time period of the request. </p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The tags that match your request.</p>
   * @public
   */
  Tags: string[] | undefined;

  /**
   * <p>The number of query results that Amazon Web Services returns at a time.</p>
   * @public
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of query results.</p>
   * @public
   */
  TotalSize: number | undefined;
}

/**
 * @public
 */
export interface GetUsageForecastResponse {
  /**
   * <p>How much you're forecasted to use over the forecast period.</p>
   * @public
   */
  Total?: MetricValue | undefined;

  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a
   *       list of days. For <code>MONTHLY</code> forecasts, this is a list of months.</p>
   * @public
   */
  ForecastResultsByTime?: ForecastResult[] | undefined;
}

/**
 * @public
 */
export interface ListCommitmentPurchaseAnalysesRequest {
  /**
   * <p>The status of the analysis.</p>
   * @public
   */
  AnalysisStatus?: AnalysisStatus | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The number of analyses that you want returned in a single response object.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The analysis IDs associated with the commitment purchase analyses.</p>
   * @public
   */
  AnalysisIds?: string[] | undefined;
}

/**
 * @public
 */
export interface ListCommitmentPurchaseAnalysesResponse {
  /**
   * <p>The list of analyses.</p>
   * @public
   */
  AnalysisSummaryList?: AnalysisSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagBackfillHistoryRequest {
  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *       The maximum number of objects that are returned for this request.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>
 *             The cost allocation tag backfill request structure that contains metadata and details of a certain backfill.</p>
 * @public
 */
export interface CostAllocationTagBackfillRequest {
  /**
   * <p>
   *             The date the backfill starts from.
   *         </p>
   * @public
   */
  BackfillFrom?: string | undefined;

  /**
   * <p>
   *             The time when the backfill was requested.
   *         </p>
   * @public
   */
  RequestedAt?: string | undefined;

  /**
   * <p>
   *             The backfill completion time.
   *         </p>
   * @public
   */
  CompletedAt?: string | undefined;

  /**
   * <p>
   *             The status of the cost allocation tag backfill request.
   *         </p>
   * @public
   */
  BackfillStatus?: CostAllocationTagBackfillStatus | undefined;

  /**
   * <p>
   *             The time when the backfill status was last updated.
   *         </p>
   * @public
   */
  LastUpdatedAt?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagBackfillHistoryResponse {
  /**
   * <p>
   *       The list of historical cost allocation tag backfill requests.
   *     </p>
   * @public
   */
  BackfillRequests?: CostAllocationTagBackfillRequest[] | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagsRequest {
  /**
   * <p>The status of cost allocation tag keys that are returned for this request. </p>
   * @public
   */
  Status?: CostAllocationTagStatus | undefined;

  /**
   * <p>The list of cost allocation tag keys that are returned for this request. </p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>The type of <code>CostAllocationTag</code> object that are returned for this request. The
   *         <code>AWSGenerated</code> type tags are tags that Amazon Web Services defines and applies to
   *       support Amazon Web Services resources for cost allocation purposes. The
   *         <code>UserDefined</code> type tags are tags that you define, create, and apply to resources.
   *     </p>
   * @public
   */
  Type?: CostAllocationTagType | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects that are returned for this request. By default, the request
   *       returns 100 results. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The cost allocation tag structure. This includes detailed metadata for the
 *                 <code>CostAllocationTag</code> object. </p>
 * @public
 */
export interface CostAllocationTag {
  /**
   * <p>The key for the cost allocation tag. </p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The type of cost allocation tag. You can use <code>AWSGenerated</code> or
   *                 <code>UserDefined</code> type tags. <code>AWSGenerated</code> type tags are tags
   *             that Amazon Web Services defines and applies to support Amazon Web Services resources for
   *             cost allocation purposes. <code>UserDefined</code> type tags are tags that you define,
   *             create, and apply to resources. </p>
   * @public
   */
  Type: CostAllocationTagType | undefined;

  /**
   * <p>The status of a cost allocation tag. </p>
   * @public
   */
  Status: CostAllocationTagStatus | undefined;

  /**
   * <p>The last date that the tag was either activated or deactivated.</p>
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * <p>The last month that the tag was used on an Amazon Web Services resource.</p>
   * @public
   */
  LastUsedDate?: string | undefined;
}

/**
 * @public
 */
export interface ListCostAllocationTagsResponse {
  /**
   * <p>A list of cost allocation tags that includes the detailed metadata for each one. </p>
   * @public
   */
  CostAllocationTags?: CostAllocationTag[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsRequest {
  /**
   * <p>The date when the Cost Category was effective. </p>
   * @public
   */
  EffectiveOn?: string | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of entries a paginated response contains. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A reference to a Cost Category containing only enough information to identify the Cost
 *             Category.</p>
 *          <p>You can use this information to retrieve the full Cost Category information using
 *                 <code>DescribeCostCategory</code>.</p>
 * @public
 */
export interface CostCategoryReference {
  /**
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * <p>The unique name of the Cost Category.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Cost Category's effective start date.</p>
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * <p>The Cost Category's effective end date.</p>
   * @public
   */
  EffectiveEnd?: string | undefined;

  /**
   * <p>The number of rules that are associated with a specific Cost Category. </p>
   * @public
   */
  NumberOfRules?: number | undefined;

  /**
   * <p>The list of processing statuses for Cost Management products for a specific cost
   *             category. </p>
   * @public
   */
  ProcessingStatus?: CostCategoryProcessingStatus[] | undefined;

  /**
   * <p>A list of unique cost category values in a specific cost category. </p>
   * @public
   */
  Values?: string[] | undefined;

  /**
   * <p>The
   *             default value for the cost category.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsResponse {
  /**
   * <p>A reference to a Cost Category that contains enough information to identify the Cost
   *       Category. </p>
   * @public
   */
  CostCategoryReferences?: CostCategoryReference[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
  /**
   * <p>The status of the recommendation generation.</p>
   * @public
   */
  GenerationStatus?: GenerationStatus | undefined;

  /**
   * <p>The IDs for each specific recommendation.</p>
   * @public
   */
  RecommendationIds?: string[] | undefined;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>The summary of the Savings Plans recommendation generation.</p>
 * @public
 */
export interface GenerationSummary {
  /**
   * <p>Indicates the ID for this specific recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>Indicates whether the recommendation generation succeeded, is processing, or
   *             failed.</p>
   * @public
   */
  GenerationStatus?: GenerationStatus | undefined;

  /**
   * <p>Indicates the start time of the recommendation generation.</p>
   * @public
   */
  GenerationStartedTime?: string | undefined;

  /**
   * <p>Indicates the completion time of the recommendation generation.</p>
   * @public
   */
  GenerationCompletionTime?: string | undefined;

  /**
   * <p>Indicates the estimated time for when the recommendation generation will
   *             complete.</p>
   * @public
   */
  EstimatedCompletionTime?: string | undefined;
}

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
  /**
   * <p>The list of historical recommendation generations.</p>
   * @public
   */
  GenerationSummaryList?: GenerationSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tag key value pairs that are associated with the resource. </p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackRequest {
  /**
   * <p>A cost anomaly ID. </p>
   * @public
   */
  AnomalyId: string | undefined;

  /**
   * <p>Describes whether the cost anomaly was a planned activity or you considered it an anomaly.
   *     </p>
   * @public
   */
  Feedback: AnomalyFeedbackType | undefined;
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackResponse {
  /**
   * <p>The ID of the modified cost anomaly. </p>
   * @public
   */
  AnomalyId: string | undefined;
}

/**
 * @public
 */
export interface StartCommitmentPurchaseAnalysisRequest {
  /**
   * <p>The configuration for the commitment purchase analysis.</p>
   * @public
   */
  CommitmentPurchaseAnalysisConfiguration: CommitmentPurchaseAnalysisConfiguration | undefined;
}

/**
 * @public
 */
export interface StartCommitmentPurchaseAnalysisResponse {
  /**
   * <p>The analysis ID that's associated with the commitment purchase analysis.</p>
   * @public
   */
  AnalysisId: string | undefined;

  /**
   * <p>The start time of the analysis.</p>
   * @public
   */
  AnalysisStartedTime: string | undefined;

  /**
   * <p>The estimated time for when the analysis will complete.</p>
   * @public
   */
  EstimatedCompletionTime: string | undefined;
}

/**
 * @public
 */
export interface StartCostAllocationTagBackfillRequest {
  /**
   * <p>
   *       The date you want the backfill to start from. The date can only be a first day of the month (a billing start date). Dates can't precede the previous twelve months, or in the future.</p>
   * @public
   */
  BackfillFrom: string | undefined;
}

/**
 * @public
 */
export interface StartCostAllocationTagBackfillResponse {
  /**
   * <p>
   *       An object containing detailed metadata of your new backfill request.
   *     </p>
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
   * <p>The ID for this specific recommendation.</p>
   * @public
   */
  RecommendationId?: string | undefined;

  /**
   * <p>The start time of the recommendation generation.</p>
   * @public
   */
  GenerationStartedTime?: string | undefined;

  /**
   * <p>The estimated time for when the recommendation generation will complete.</p>
   * @public
   */
  EstimatedCompletionTime?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p> A list of tag key-value pairs to be added to the resource.</p>
   *          <p>Each tag consists of a key and a value, and each key must be unique for the resource. The
   *       following restrictions apply to resource tags:</p>
   *          <ul>
   *             <li>
   *                <p>Although the maximum number of array members is 200, you can assign a maximum of 50
   *           user-tags to one resource. The remaining are reserved for Amazon Web Services use</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a key is 128 characters</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a value is 256 characters</p>
   *             </li>
   *             <li>
   *                <p>Keys and values can only contain alphanumeric characters, spaces, and any of the
   *           following: <code>_.:/=+@-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Keys and values are case sensitive</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are trimmed for any leading or trailing whitespaces</p>
   *             </li>
   *             <li>
   *                <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for
   *             Amazon Web Services use</p>
   *             </li>
   *          </ul>
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
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tag keys associated with tags that need to be removed from the resource. If you
   *       specify a tag key that doesn't exist, it's ignored. Although the maximum number of array
   *       members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.
   *     </p>
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
   * <p>Cost anomaly monitor Amazon Resource Names (ARNs). </p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>The new name for the cost anomaly monitor. </p>
   * @public
   */
  MonitorName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalyMonitorResponse {
  /**
   * <p>A cost anomaly monitor ARN. </p>
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionResponse {
  /**
   * <p>A cost anomaly subscription ARN. </p>
   * @public
   */
  SubscriptionArn: string | undefined;
}

/**
 * <p>The cost allocation tag status. The status of a key can either be active or inactive.
 *         </p>
 * @public
 */
export interface CostAllocationTagStatusEntry {
  /**
   * <p>The key for the cost allocation tag. </p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The status of a cost allocation tag. </p>
   * @public
   */
  Status: CostAllocationTagStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusRequest {
  /**
   * <p>The list of <code>CostAllocationTagStatusEntry</code> objects that are used to update cost
   *       allocation tags status for this request. </p>
   * @public
   */
  CostAllocationTagsStatus: CostAllocationTagStatusEntry[] | undefined;
}

/**
 * <p>Gives a detailed description of the result of an action. It's on each cost allocation
 *             tag entry in the request. </p>
 * @public
 */
export interface UpdateCostAllocationTagsStatusError {
  /**
   * <p>The key for the cost allocation tag. </p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>An error code representing why the action failed on this entry. </p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A message explaining why the action failed on this entry. </p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusResponse {
  /**
   * <p>A list of <code>UpdateCostAllocationTagsStatusError</code> objects with error details
   *       about each cost allocation tag that can't be updated. If there's no failure, an empty array
   *       returns. </p>
   * @public
   */
  Errors?: UpdateCostAllocationTagsStatusError[] | undefined;
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionResponse {
  /**
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn?: string | undefined;

  /**
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month).</p>
   * @public
   */
  EffectiveStart?: string | undefined;
}

/**
 * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
 *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
 *             documentation for each specific API to see what is supported.</p>
 *          <p>There are two patterns:</p>
 *          <ul>
 *             <li>
 *                <p>Simple dimension values.</p>
 *                <ul>
 *                   <li>
 *                      <p>There are three types of simple dimension values:
 *                                 <code>CostCategories</code>, <code>Tags</code>, and
 *                                 <code>Dimensions</code>.</p>
 *                      <ul>
 *                         <li>
 *                            <p>Specify the <code>CostCategories</code> field to define a
 *                                     filter that acts on Cost Categories.</p>
 *                         </li>
 *                         <li>
 *                            <p>Specify the <code>Tags</code> field to define a filter that
 *                                     acts on Cost Allocation Tags.</p>
 *                         </li>
 *                         <li>
 *                            <p>Specify the <code>Dimensions</code> field to define a filter
 *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
 *                                  <code>DimensionValues</code>
 *                               </a>.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>For each filter type, you can set the dimension name and values for
 *                             the filters that you plan to use.</p>
 *                      <ul>
 *                         <li>
 *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
 *                                         REGION==us-west-1</code>. For
 *                                         <code>GetRightsizingRecommendation</code>, the Region is a
 *                                     full name (for example, <code>REGION==US East (N.
 *                                         Virginia)</code>.</p>
 *                         </li>
 *                         <li>
 *                            <p>The corresponding <code>Expression</code> for this example is
 *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
 *                                         "us-east-1", "us-west-1" ] \} \}</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>As shown in the previous example, lists of dimension values
 *                                     are combined with <code>OR</code> when applying the
 *                                     filter.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>You can also set different match options to further control how the
 *                             filter behaves. Not all APIs support match options. Refer to the
 *                             documentation for each specific API to see what is supported.</p>
 *                      <ul>
 *                         <li>
 *                            <p>For example, you can filter for linked account names that
 *                                     start with "a".</p>
 *                         </li>
 *                         <li>
 *                            <p>The corresponding <code>Expression</code> for this example is
 *                                     as follows: <code>\{ "Dimensions": \{ "Key":
 *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
 *                                         "Values": [ "a" ] \} \}</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Compound <code>Expression</code> types with logical operations.</p>
 *                <ul>
 *                   <li>
 *                      <p>You can use multiple <code>Expression</code> types and the logical
 *                             operators <code>AND/OR/NOT</code> to create a list of one or more
 *                                 <code>Expression</code> objects. By doing this, you can filter by
 *                             more advanced options.</p>
 *                   </li>
 *                   <li>
 *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
 *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
 *                                 DataTransfer)</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>The corresponding <code>Expression</code> for this example is as
 *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
 *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
 *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
 *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
 *                             </code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <note>
 *                   <p>Because each <code>Expression</code> can have only one operator, the
 *                         service returns an error if more than one is specified. The following
 *                         example shows an <code>Expression</code> object that creates an error:
 *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
 *                             [ "DataTransfer" ] \} \} </code>
 *                   </p>
 *                   <p>The following is an example of the corresponding error message:
 *                             <code>"Expression has more than one roots. Only one root operator is
 *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
 *                             CostCategories"</code>
 *                   </p>
 *                </note>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
 *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
 *                 and tags. NOT operators aren't supported. Dimensions are also limited to
 *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
 *                     <code>RIGHTSIZING_TYPE</code>.</p>
 *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
 *                 supported. AND and OR aren't supported. Dimensions are limited to
 *                     <code>LINKED_ACCOUNT</code>.</p>
 *          </note>
 * @public
 */
export interface Expression {
  /**
   * <p>Return results that match either <code>Dimension</code> object.</p>
   * @public
   */
  Or?: Expression[] | undefined;

  /**
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   * @public
   */
  And?: Expression[] | undefined;

  /**
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   * @public
   */
  Not?: Expression | undefined;

  /**
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   * @public
   */
  Dimensions?: DimensionValues | undefined;

  /**
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   * @public
   */
  Tags?: TagValues | undefined;

  /**
   * <p>The filter that's based on <code>CostCategory</code> values.</p>
   * @public
   */
  CostCategories?: CostCategoryValues | undefined;
}

/**
 * <p>This object continuously inspects your account's cost data for anomalies. It's based
 *             on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists
 *             of detailed metadata and the current status of the monitor object. </p>
 * @public
 */
export interface AnomalyMonitor {
  /**
   * <p>The Amazon Resource Name (ARN) value. </p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The date when the monitor was created. </p>
   * @public
   */
  CreationDate?: string | undefined;

  /**
   * <p>The date when the monitor was last updated. </p>
   * @public
   */
  LastUpdatedDate?: string | undefined;

  /**
   * <p>The date when the monitor last evaluated for anomalies. </p>
   * @public
   */
  LastEvaluatedDate?: string | undefined;

  /**
   * <p>The possible type values. </p>
   * @public
   */
  MonitorType: MonitorType | undefined;

  /**
   * <p>The dimensions to evaluate. </p>
   * @public
   */
  MonitorDimension?: MonitorDimension | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  MonitorSpecification?: Expression | undefined;

  /**
   * <p>The value for evaluated dimensions. </p>
   * @public
   */
  DimensionalValueCount?: number | undefined;
}

/**
 * <p>An <code>AnomalySubscription</code> resource (also referred to as an alert
 *             subscription) sends notifications about specific anomalies that meet an alerting
 *             criteria defined by you.</p>
 *          <p>You can specify the frequency of the alerts and the subscribers to notify.</p>
 *          <p>Anomaly subscriptions can be associated with one or more <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html">
 *                <code>AnomalyMonitor</code>
 *             </a>  resources, and they only send
 *             notifications about anomalies detected by those associated monitors. You can also
 *             configure a threshold to further control which anomalies are included in the
 *             notifications.</p>
 *          <p>Anomalies that don’t exceed the chosen threshold and therefore don’t trigger
 *             notifications from an anomaly subscription will still be available on the console and
 *             from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html">
 *                <code>GetAnomalies</code>
 *             </a> API.</p>
 * @public
 */
export interface AnomalySubscription {
  /**
   * <p>The <code>AnomalySubscription</code> Amazon Resource Name (ARN). </p>
   * @public
   */
  SubscriptionArn?: string | undefined;

  /**
   * <p>Your unique account identifier. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>A list of cost anomaly monitors. </p>
   * @public
   */
  MonitorArnList: string[] | undefined;

  /**
   * <p>A list of subscribers to notify. </p>
   * @public
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * <p>(deprecated)</p>
   *          <p>An absolute dollar value that must be exceeded by the anomaly's total impact (see
   *                 <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html">Impact</a> for
   *             more details) for an anomaly notification to be generated.</p>
   *          <p>This field has been deprecated. To specify a threshold, use ThresholdExpression.
   *             Continued use of Threshold will be treated as shorthand syntax for a
   *             ThresholdExpression.</p>
   *          <p>One of Threshold or ThresholdExpression is required for this resource. You cannot
   *             specify both.</p>
   *
   * @deprecated Threshold has been deprecated in favor of ThresholdExpression
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>The frequency that anomaly notifications are sent. Notifications are sent either over
   *             email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more
   *             information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html">Creating an Amazon SNS topic for
   *                 anomaly notifications</a>.</p>
   * @public
   */
  Frequency: AnomalySubscriptionFrequency | undefined;

  /**
   * <p>The name for the subscription. </p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>
   *             object used to specify the anomalies that you want to generate alerts for. This supports
   *             dimensions and nested expressions. The supported dimensions are
   *                 <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and
   *                 <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code>, corresponding to an anomaly’s
   *             TotalImpact and TotalImpactPercentage, respectively (see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html">Impact</a> for
   *             more details). The supported nested expression types are <code>AND</code> and
   *                 <code>OR</code>. The match option <code>GREATER_THAN_OR_EQUAL</code> is required.
   *             Values must be numbers between 0 and 10,000,000,000 in string format.</p>
   *          <p>One of Threshold or ThresholdExpression is required for this resource. You cannot
   *             specify both.</p>
   *          <p>The following are examples of valid ThresholdExpressions:</p>
   *          <ul>
   *             <li>
   *                <p>Absolute threshold: <code>\{ "Dimensions": \{ "Key":
   *                         "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL"
   *                         ], "Values": [ "100" ] \} \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Percentage threshold: <code>\{ "Dimensions": \{ "Key":
   *                         "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL"
   *                         ], "Values": [ "100" ] \} \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AND</code> two thresholds together: <code>\{ "And": [ \{ "Dimensions": \{
   *                         "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [
   *                         "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key":
   *                         "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL"
   *                         ], "Values": [ "100" ] \} \} ] \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OR</code> two thresholds together: <code>\{ "Or": [ \{ "Dimensions": \{
   *                         "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [
   *                         "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}, \{ "Dimensions": \{ "Key":
   *                         "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL"
   *                         ], "Values": [ "100" ] \} \} ] \}</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ThresholdExpression?: Expression | undefined;
}

/**
 * <p>Represents a comparison of cost and usage metrics between two time periods.</p>
 * @public
 */
export interface CostAndUsageComparison {
  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  CostAndUsageSelector?: Expression | undefined;

  /**
   * <p>A mapping of metric names to their comparison values.</p>
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;
}

/**
 * <p>Rules are processed in order. If there are multiple rules that match the line item,
 *             then the first rule to match is used to determine that Cost Category value.</p>
 * @public
 */
export interface CostCategoryRule {
  /**
   * <p>The
   *             default value for the cost category.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>
   *             object used to categorize costs. This supports dimensions, tags, and nested expressions.
   *             Currently the only dimensions supported are <code>LINKED_ACCOUNT</code>,
   *
   *             <code>SERVICE_CODE</code>, <code>RECORD_TYPE</code>, <code>LINKED_ACCOUNT_NAME</code>, <code>REGION</code>, and <code>USAGE_TYPE</code>.</p>
   *          <p>
   *             <code>RECORD_TYPE</code> is a dimension used for Cost Explorer APIs, and is also
   *             supported for Cost Category expressions. This dimension uses different terms, depending
   *             on whether you're using the console or API/JSON editor. For a detailed comparison, see
   *                 <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html#cost-categories-terms">Term Comparisons</a> in the <i>Billing and Cost Management User
   *                 Guide</i>.</p>
   * @public
   */
  Rule?: Expression | undefined;

  /**
   * <p>The value the line item is categorized as if the line item contains the matched
   *             dimension.</p>
   * @public
   */
  InheritedValue?: CostCategoryInheritedValueDimension | undefined;

  /**
   * <p>You can define the <code>CostCategoryRule</code> rule type as either
   *                 <code>REGULAR</code> or <code>INHERITED_VALUE</code>. The
   *                 <code>INHERITED_VALUE</code> rule type adds the flexibility to define a rule that
   *             dynamically inherits the cost category value. This value is from the dimension value
   *             that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose
   *             that you want to costs to be dynamically grouped based on the value of a specific tag
   *             key. First, choose an inherited value rule type, and then choose the tag dimension and
   *             specify the tag key to use.</p>
   * @public
   */
  Type?: CostCategoryRuleType | undefined;
}

/**
 * <p>Represents a collection of cost drivers and their associated metrics for cost
 *             comparison analysis.</p>
 * @public
 */
export interface CostComparisonDriver {
  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  CostSelector?: Expression | undefined;

  /**
   * <p>A mapping of metric names to their comparison values.</p>
   * @public
   */
  Metrics?: Record<string, ComparisonMetricValue> | undefined;

  /**
   * <p>An array of cost drivers, each representing a cost difference between the baseline and
   *             comparison time periods. Each entry also includes a metric delta (for example, usage
   *             change) that contributed to the cost variance, along with the identifier and type of
   *             change.</p>
   * @public
   */
  CostDrivers?: CostDriver[] | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageComparisonsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The reference time period for comparison. This time period serves as the baseline against
   *       which other cost and usage data will be compared. The interval must start and end on the first
   *       day of a month, with a duration of exactly one month.</p>
   * @public
   */
  BaselineTimePeriod: DateInterval | undefined;

  /**
   * <p>The comparison time period for analysis. This time period's cost and usage data will be
   *       compared against the baseline time period. The interval must start and end on the first day of
   *       a month, with a duration of exactly one month.</p>
   * @public
   */
  ComparisonTimePeriod: DateInterval | undefined;

  /**
   * <p>The cost and usage metric to compare. Valid values are <code>AmortizedCost</code>,
   *         <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *         <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *         <code>UsageQuantity</code>.</p>
   * @public
   */
  MetricForComparison: string | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>You can group results using the attributes <code>DIMENSION</code>, <code>TAG</code>, and
   *         <code>COST_CATEGORY</code>. </p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The maximum number of results that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of paginated results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageRequest {
  /**
   * <p>Sets the start date and end date for retrieving Amazon Web Services costs. The start
   *       date is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Sets the Amazon Web Services cost granularity to <code>MONTHLY</code> or
   *         <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the
   *       response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or
   *         <code>DAILY</code>, or <code>HOURLY</code>. </p>
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * <p>Filters Amazon Web Services costs by different dimensions. For example, you can specify
   *         <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated
   *       with that account's usage of that service. You can nest <code>Expression</code> objects to
   *       define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are
   *         <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and
   *         <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and
   *         <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and
   *         <code>CASE_SENSITIVE</code>.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>Which metrics are returned in the query. For more information about blended and
   *       unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   *         appear on some line items in my bill?</a>. </p>
   *          <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>,
   *         <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *         <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *         <code>UsageQuantity</code>. </p>
   *          <note>
   *             <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage
   *         numbers without taking into account the units. For example, if you aggregate
   *           <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because
   *         Amazon EC2 compute hours and data transfer are measured in different units (for example,
   *         hours and GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by
   *           <code>UsageType</code> or <code>UsageTypeGroups</code>. </p>
   *          </note>
   *          <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>
   * @public
   */
  Metrics: string[] | undefined;

  /**
   * <p>You can group Amazon Web Services costs using up to two different groups, either
   *       dimensions, tag keys, cost categories, or any two group by types.</p>
   *          <p>Valid values for the <code>DIMENSION</code> type are <code>AZ</code>,
   *         <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>INVOICING_ENTITY</code>,
   *         <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>,
   *         <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TENANCY</code>,
   *         <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p>
   *          <p>When you group by the <code>TAG</code> type and include a valid tag key, you get all
   *       tag values, including empty strings.</p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesRequest {
  /**
   * <p>Sets the start and end dates for retrieving Amazon Web Services costs. The range must
   *       be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date
   *       is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Sets the Amazon Web Services cost granularity to <code>MONTHLY</code>,
   *         <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the
   *       response object doesn't include the <code>Granularity</code>, <code>MONTHLY</code>,
   *         <code>DAILY</code>, or <code>HOURLY</code>. </p>
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * <p>Filters Amazon Web Services costs by different dimensions. For example, you can specify
   *         <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated
   *       with that account's usage of that service. You can nest <code>Expression</code> objects to
   *       define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are
   *         <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and
   *         <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and
   *         <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and
   *         <code>CASE_SENSITIVE</code>.</p>
   * @public
   */
  Filter: Expression | undefined;

  /**
   * <p>Which metrics are returned in the query. For more information about blended and
   *       unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   *         appear on some line items in my bill?</a>. </p>
   *          <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>,
   *         <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *         <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *         <code>UsageQuantity</code>. </p>
   *          <note>
   *             <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage
   *         numbers without taking the units into account. For example, if you aggregate
   *           <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because
   *         Amazon EC2 compute hours and data transfer are measured in different units (for example,
   *         hour or GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by
   *           <code>UsageType</code> or <code>UsageTypeGroups</code>. </p>
   *          </note>
   *          <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsageWithResources</code>
   *       requests.</p>
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * <p>You can group Amazon Web Services costs using up to two different groups:
   *         <code>DIMENSION</code>, <code>TAG</code>, <code>COST_CATEGORY</code>.</p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostCategoriesRequest {
  /**
   * <p>The value that you want to search the filter values for.</p>
   *          <p>If you don't specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to
   *       filter Cost Category names that match the <code>SearchString</code> pattern. If you specify a
   *         <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category
   *       values that match the <code>SearchString</code> pattern.</p>
   * @public
   */
  SearchString?: string | undefined;

  /**
   * <p>The time period of the request. </p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The unique name of the Cost Category.</p>
   * @public
   */
  CostCategoryName?: string | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The value that you sort the data by.</p>
   *          <p>The key represents the cost and usage metrics. The following values are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BlendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetAmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetUnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsageQuantity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NormalizedUsageAmount</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported key values for the <code>SortOrder</code> value are <code>ASCENDING</code>
   *       and <code>DESCENDING</code>.</p>
   *          <p>When you use the <code>SortBy</code> value, the <code>NextPageToken</code> and
   *         <code>SearchString</code> key values aren't supported.</p>
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>This field is only used when the <code>SortBy</code> value is provided in the
   *       request.</p>
   *          <p>The maximum number of objects that are returned for this request. If
   *         <code>MaxResults</code> isn't specified with the <code>SortBy</code> value, the request
   *       returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetCostCategories</code>, MaxResults has an upper quota of 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of
   *       objects, provide the NextPageToken from the previous call in your next request.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostComparisonDriversRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>The reference time period for comparison. This time period serves as the baseline against
   *       which other cost and usage data will be compared. The interval must start and end on the first
   *       day of a month, with a duration of exactly one month.</p>
   * @public
   */
  BaselineTimePeriod: DateInterval | undefined;

  /**
   * <p>The comparison time period for analysis. This time period's cost and usage data will be
   *       compared against the baseline time period. The interval must start and end on the first day of
   *       a month, with a duration of exactly one month.</p>
   * @public
   */
  ComparisonTimePeriod: DateInterval | undefined;

  /**
   * <p>The cost and usage metric to compare. Valid values are <code>AmortizedCost</code>,
   *         <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *         <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *         <code>UsageQuantity</code>.</p>
   * @public
   */
  MetricForComparison: string | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>You can group results using the attributes <code>DIMENSION</code>, <code>TAG</code>, and
   *         <code>COST_CATEGORY</code>. Note that <code>SERVICE</code> and <code>USAGE_TYPE</code>
   *       dimensions are automatically included in the cost comparison drivers analysis.</p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The maximum number of results that are returned for the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of paginated results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostForecastRequest {
  /**
   * <p>The period of time that you want the forecast to cover. The start date must be equal to or
   *       no later than the current date to avoid a validation error.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast. For more information about
   *       blended and unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   *         appear on some line items in my bill?</a>. </p>
   *          <p>Valid values for a <code>GetCostForecast</code> call are the following:</p>
   *          <ul>
   *             <li>
   *                <p>AMORTIZED_COST</p>
   *             </li>
   *             <li>
   *                <p>BLENDED_COST</p>
   *             </li>
   *             <li>
   *                <p>NET_AMORTIZED_COST</p>
   *             </li>
   *             <li>
   *                <p>NET_UNBLENDED_COST</p>
   *             </li>
   *             <li>
   *                <p>UNBLENDED_COST</p>
   *             </li>
   *          </ul>
   * @public
   */
  Metric: Metric | undefined;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code>
   *       forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   *          <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * <p>The filters that you want to use to filter your forecast. The
   *         <code>GetCostForecast</code> API supports filtering by the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AZ</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PURCHASE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USAGE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USAGE_TYPE_GROUP</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECORD_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATING_SYSTEM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TENANCY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCOPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLATFORM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBSCRIPTION_ID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGAL_ENTITY_NAME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPLOYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATABASE_ENGINE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BILLING_ENTITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESERVATION_ID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a
   *       prediction interval around the mean by specifying a confidence level. The higher the
   *       confidence level, the more confident Cost Explorer is about the actual value falling in the
   *       prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   * @public
   */
  PredictionIntervalLevel?: number | undefined;
}

/**
 * @public
 */
export interface GetDimensionValuesRequest {
  /**
   * <p>The value that you want to search the filter values for.</p>
   * @public
   */
  SearchString?: string | undefined;

  /**
   * <p>The start date and end date for retrieving the dimension values. The start date is
   *       inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The name of the dimension. Each <code>Dimension</code> is available for a different
   *         <code>Context</code>. For more information, see <code>Context</code>.
   *         <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/AAPI_CostCategoryRule.html">CostCategoryRule</a>. </p>
   * @public
   */
  Dimension: Dimension | undefined;

  /**
   * <p>The context for the call to <code>GetDimensionValues</code>. This can be
   *         <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>. The default value is
   *         <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the
   *       resulting dimension values can be used in the <code>GetReservationUtilization</code>
   *       operation. If the context is set to <code>COST_AND_USAGE</code>, the resulting dimension
   *       values can be used in the <code>GetCostAndUsage</code> operation.</p>
   *          <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>BILLING_ENTITY - The Amazon Web Services seller that your account is with. Possible
   *           values are the following:</p>
   *                <p>- Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services services.</p>
   *                <p>- AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting
   *           reseller for Amazon Web Services services in India.</p>
   *                <p>- Amazon Web Services Marketplace: The entity that supports the sale of solutions that are built on
   *             Amazon Web Services by third-party software providers.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments.
   *           Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are
   *           Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is
   *             <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - A family of instance types optimized to fit different use
   *           cases. Examples are <code>Compute Optimized</code> (for example, <code>C4</code>,
   *             <code>C5</code>, <code>C6g</code>, and <code>C7g</code>), <code>Memory
   *             Optimization</code> (for example, <code>R4</code>, <code>R5n</code>, <code>R5b</code>,
   *           and <code>R6g</code>).</p>
   *             </li>
   *             <li>
   *                <p>INVOICING_ENTITY - The name of the entity that issues the Amazon Web Services
   *           invoice.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services
   *           services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and
   *             <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase that this usage is related to.
   *           Examples include On-Demand Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>RESERVATION_ID - The unique identifier for an Amazon Web Services Reservation
   *           Instance.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute).</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The Amazon Web Services service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response
   *           for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples
   *           include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2:
   *           CloudWatch – Alarms. The response for this operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as Reserved Instance (RI) fees,
   *           usage costs, tax refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in
   *           feature only available for last 14 days for EC2-Compute Service.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments.
   *           Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is
   *             <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or
   *           Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are
   *           regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance
   *           (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following
   *       dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - The payment option for the given Savings Plans (for example, All
   *           Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The Amazon Web Services Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example,
   *           <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name
   *           of the member account. The value field contains the Amazon Web Services ID of the member
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Context?: Context | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The key represents cost and usage metrics. The following values are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BlendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetAmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetUnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsageQuantity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NormalizedUsageAmount</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for the <code>SortOrder</code> key are <code>ASCENDING</code> or
   *         <code>DESCENDING</code>.</p>
   *          <p>When you specify a <code>SortBy</code> paramater, the context must be
   *         <code>COST_AND_USAGE</code>. Further, when using <code>SortBy</code>,
   *         <code>NextPageToken</code> and <code>SearchString</code> aren't supported.</p>
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>This field is only used when SortBy is provided in the request. The maximum number of
   *       objects that are returned for this request. If MaxResults isn't specified with SortBy, the
   *       request returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetDimensionValues</code>, MaxResults has an upper limit of 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * <p>You can use the following request parameters to query for how much of your instance
 *       usage a reservation covered.</p>
 * @public
 */
export interface GetReservationCoverageRequest {
  /**
   * <p>The start and end dates of the period that you want to retrieve data about reservation
   *       coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the
   *       current month. The start date is inclusive, but the end date is exclusive. For example, if
   *         <code>start</code> is <code>2017-01-01</code> and <code>end</code> is
   *         <code>2017-05-01</code>, then the cost and usage data is retrieved from
   *         <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including
   *         <code>2017-05-01</code>. </p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>You can group the data by the following attributes:</p>
   *          <ul>
   *             <li>
   *                <p>AZ</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>INVOICING_ENTITY</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM</p>
   *             </li>
   *             <li>
   *                <p>REGION</p>
   *             </li>
   *             <li>
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The granularity of the Amazon Web Services cost data for the reservation. Valid values
   *       are <code>MONTHLY</code> and <code>DAILY</code>.</p>
   *          <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If
   *         <code>Granularity</code> isn't set, the response object doesn't include
   *         <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p>
   *          <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * <p>Filters utilization data by dimensions. You can filter by the following
   *       dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>AZ</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM</p>
   *             </li>
   *             <li>
   *                <p>REGION</p>
   *             </li>
   *             <li>
   *                <p>SERVICE</p>
   *             </li>
   *             <li>
   *                <p>TAG</p>
   *             </li>
   *             <li>
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetReservationCoverage</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension. You can
   *       nest only one level deep. If there are multiple values for a dimension, they are OR'd
   *       together.</p>
   *          <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to
   *       EC2.</p>
   *          <p>Cost category is also supported.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The measurement that you want your reservation coverage reported in.</p>
   *          <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use
   *       multiple values in a request.</p>
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The value by which you want to sort the data.</p>
   *          <p>The following values are supported for <code>Key</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OnDemandCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CoverageHoursPercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OnDemandHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReservedHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalRunningHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CoverageNormalizedUnitsPercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OnDemandNormalizedUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReservedNormalizedUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalRunningNormalizedUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Time</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Supported values for <code>SortOrder</code> are <code>ASCENDING</code> or
   *         <code>DESCENDING</code>.</p>
   * @public
   */
  SortBy?: SortDefinition | undefined;

  /**
   * <p>The maximum number of objects that you returned for this request. If more objects are
   *       available, in the response, Amazon Web Services provides a NextPageToken value that you can use
   *       in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationRequest {
  /**
   * <p>The account ID that's associated with the recommendation. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The specific service that you want recommendations for.</p>
   * @public
   */
  Service: string | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *       calculates recommendations including the management account and member accounts if the value
   *       is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are
   *       calculated for individual member accounts only.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>The number of previous days that you want Amazon Web Services to consider when it
   *       calculates your recommendations.</p>
   * @public
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | undefined;

  /**
   * <p>The reservation term that you want recommendations for.</p>
   * @public
   */
  TermInYears?: TermInYears | undefined;

  /**
   * <p>The reservation purchase option that you want recommendations for.</p>
   * @public
   */
  PaymentOption?: PaymentOption | undefined;

  /**
   * <p>The hardware specifications for the service instances that you want recommendations
   *       for, such as standard or convertible Amazon EC2 instances.</p>
   * @public
   */
  ServiceSpecification?: ServiceSpecification | undefined;

  /**
   * <p>The number of recommendations that you want returned in a single response
   *       object.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to
   *       retrieve.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetReservationUtilizationRequest {
  /**
   * <p>Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The
   *       start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.</p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If
   *         <code>Granularity</code> isn't set, the response object doesn't include
   *         <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. If both
   *         <code>GroupBy</code> and <code>Granularity</code> aren't set,
   *         <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p>
   *          <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * <p>Filters utilization data by dimensions. You can filter by the following
   *       dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>AZ</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM</p>
   *             </li>
   *             <li>
   *                <p>REGION</p>
   *             </li>
   *             <li>
   *                <p>SERVICE</p>
   *                <note>
   *                   <p>If  not specified, the <code>SERVICE</code> filter defaults to Amazon Elastic
   *             Compute Cloud - Compute. Supported values for <code>SERVICE</code> are Amazon Elastic
   *             Compute Cloud - Compute, Amazon Relational Database Service, Amazon ElastiCache, Amazon
   *             Redshift, and Amazon Elasticsearch Service. The value for the <code>SERVICE</code>
   *             filter should not exceed "1".</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>SCOPE</p>
   *             </li>
   *             <li>
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetReservationUtilization</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension, and
   *       nesting is supported up to only one level deep. If there are multiple values for a dimension,
   *       they are OR'd together.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The following values are supported for <code>Key</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UtilizationPercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UtilizationPercentageInUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PurchasedHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PurchasedUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalActualHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalActualUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnusedHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnusedUnits</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OnDemandCostOfRIHoursUsed</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetRISavings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalPotentialRISavings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedUpfrontFee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedRecurringFee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalAmortizedFee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RICostForUnusedHours</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RealizedSavings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnrealizedSavings</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and
   *         <code>DESCENDING</code>.</p>
   * @public
   */
  SortBy?: SortDefinition | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The maximum number of objects that you returned for this request. If more objects are
   *       available, in the response, Amazon Web Services provides a NextPageToken value that you can use
   *       in a subsequent call to get the next batch of objects.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationRequest {
  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>You can use Configuration to customize recommendations across two attributes. You can
   *       choose to view recommendations for instances within the same instance families or across
   *       different instance families. You can also choose to view your estimated savings that are
   *       associated with recommendations with consideration of existing Savings Plans or RI benefits,
   *       or neither. </p>
   * @public
   */
  Configuration?: RightsizingRecommendationConfiguration | undefined;

  /**
   * <p>The specific service that you want recommendations for. The only valid value for
   *         <code>GetRightsizingRecommendation</code> is "<code>AmazonEC2</code>".</p>
   * @public
   */
  Service: string | undefined;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The pagination token that indicates the next set of results that you want to
   *       retrieve.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>You can group the data using the attributes <code>INSTANCE_FAMILY</code>,
   *         <code>REGION</code>, or <code>SERVICE</code>.</p>
   * @public
   */
  GroupBy?: GroupDefinition[] | undefined;

  /**
   * <p>The granularity of the Amazon Web Services cost data for your Savings Plans.
   *         <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p>
   *          <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * <p>Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans
   *       usage with the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetSavingsPlansCoverage</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension. If there
   *       are multiple values for a dimension, they are OR'd together.</p>
   *          <p>Cost category is also supported.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The measurement that you want your Savings Plans coverage reported in. The only valid
   *       value is <code>SpendCoveredBySavingsPlans</code>.</p>
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a
   *       minimum value of <code>1</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The following values are supported for <code>Key</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SpendCoveredBySavingsPlan</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OnDemandCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CoveragePercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceFamily</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Region</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Service</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and
   *         <code>DESCENDING</code>.</p>
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationRequest {
  /**
   * <p>The Savings Plans recommendation type that's requested.</p>
   * @public
   */
  SavingsPlansType: SupportedSavingsPlansType | undefined;

  /**
   * <p>The savings plan recommendation term that's used to generate these recommendations.</p>
   * @public
   */
  TermInYears: TermInYears | undefined;

  /**
   * <p>The payment option that's used to generate these recommendations.</p>
   * @public
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates
   *       recommendations including the management account and member accounts if the value is set to
   *         <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for
   *       individual member accounts only.</p>
   * @public
   */
  AccountScope?: AccountScope | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   * @public
   */
  PageSize?: number | undefined;

  /**
   * <p>The lookback period that's used to generate the recommendation.</p>
   * @public
   */
  LookbackPeriodInDays: LookbackPeriodInDays | undefined;

  /**
   * <p>You can filter your recommendations by Account ID with the <code>LINKED_ACCOUNT</code>
   *       dimension. To filter your recommendations by Account ID, specify <code>Key</code> as
   *         <code>LINKED_ACCOUNT</code> and <code>Value</code> as the comma-separated Acount ID(s) that
   *       you want to see Savings Plans purchase recommendations for.</p>
   *          <p>For GetSavingsPlansPurchaseRecommendation, the <code>Filter</code> doesn't include
   *         <code>CostCategories</code> or <code>Tags</code>. It only includes <code>Dimensions</code>.
   *       With <code>Dimensions</code>, <code>Key</code> must be <code>LINKED_ACCOUNT</code> and
   *         <code>Value</code> can be a single Account ID or multiple comma-separated Account IDs that
   *       you want to see Savings Plans Purchase Recommendations for. <code>AND</code> and
   *         <code>OR</code> operators are not supported.</p>
   * @public
   */
  Filter?: Expression | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You
   *       can filter data with the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetSavingsPlansUtilizationDetails</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The data type.</p>
   * @public
   */
  DataType?: SavingsPlansDataType[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a
   *       minimum value of <code>1</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The following values are supported for <code>Key</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UtilizationPercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsedCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnusedCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetSavings</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedRecurringCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedUpfrontCommitment</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and
   *         <code>DESCENDING</code>.</p>
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The granularity of the Amazon Web Services utillization data for your Savings
   *       Plans.</p>
   *          <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity?: Granularity | undefined;

  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You
   *       can filter data with the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLANS_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PAYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>GetSavingsPlansUtilization</code> uses the same <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The following values are supported for <code>Key</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UtilizationPercentage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TotalCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsedCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnusedCommitment</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetSavings</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and
   *         <code>DESCENDING</code>.</p>
   * @public
   */
  SortBy?: SortDefinition | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The value that you want to search for.</p>
   * @public
   */
  SearchString?: string | undefined;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is
   *       inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The key of the tag that you want to return values for.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p>
   *          <p>Not all <code>Expression</code> types are supported in each API. Refer to the
   *             documentation for each specific API to see what is supported.</p>
   *          <p>There are two patterns:</p>
   *          <ul>
   *             <li>
   *                <p>Simple dimension values.</p>
   *                <ul>
   *                   <li>
   *                      <p>There are three types of simple dimension values:
   *                                 <code>CostCategories</code>, <code>Tags</code>, and
   *                                 <code>Dimensions</code>.</p>
   *                      <ul>
   *                         <li>
   *                            <p>Specify the <code>CostCategories</code> field to define a
   *                                     filter that acts on Cost Categories.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Tags</code> field to define a filter that
   *                                     acts on Cost Allocation Tags.</p>
   *                         </li>
   *                         <li>
   *                            <p>Specify the <code>Dimensions</code> field to define a filter
   *                                     that acts on the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html">
   *                                  <code>DimensionValues</code>
   *                               </a>.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>For each filter type, you can set the dimension name and values for
   *                             the filters that you plan to use.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for <code>REGION==us-east-1 OR
   *                                         REGION==us-west-1</code>. For
   *                                         <code>GetRightsizingRecommendation</code>, the Region is a
   *                                     full name (for example, <code>REGION==US East (N.
   *                                         Virginia)</code>.</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key": "REGION", "Values": [
   *                                         "us-east-1", "us-west-1" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                         <li>
   *                            <p>As shown in the previous example, lists of dimension values
   *                                     are combined with <code>OR</code> when applying the
   *                                     filter.</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>You can also set different match options to further control how the
   *                             filter behaves. Not all APIs support match options. Refer to the
   *                             documentation for each specific API to see what is supported.</p>
   *                      <ul>
   *                         <li>
   *                            <p>For example, you can filter for linked account names that
   *                                     start with "a".</p>
   *                         </li>
   *                         <li>
   *                            <p>The corresponding <code>Expression</code> for this example is
   *                                     as follows: <code>\{ "Dimensions": \{ "Key":
   *                                         "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ],
   *                                         "Values": [ "a" ] \} \}</code>
   *                            </p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Compound <code>Expression</code> types with logical operations.</p>
   *                <ul>
   *                   <li>
   *                      <p>You can use multiple <code>Expression</code> types and the logical
   *                             operators <code>AND/OR/NOT</code> to create a list of one or more
   *                                 <code>Expression</code> objects. By doing this, you can filter by
   *                             more advanced options.</p>
   *                   </li>
   *                   <li>
   *                      <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION
   *                                 == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                                 DataTransfer)</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>The corresponding <code>Expression</code> for this example is as
   *                             follows: <code>\{ "And": [ \{"Or": [ \{"Dimensions": \{ "Key": "REGION",
   *                                 "Values": [ "us-east-1", "us-west-1" ] \}\}, \{"Tags": \{ "Key":
   *                                 "TagName", "Values": ["Value1"] \} \} ]\}, \{"Not": \{"Dimensions": \{
   *                                 "Key": "USAGE_TYPE", "Values": ["DataTransfer"] \}\}\} ] \}
   *                             </code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <note>
   *                   <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an error:
   *                             <code> \{ "And": [ ... ], "Dimensions": \{ "Key": "USAGE_TYPE", "Values":
   *                             [ "DataTransfer" ] \} \} </code>
   *                   </p>
   *                   <p>The following is an example of the corresponding error message:
   *                             <code>"Expression has more than one roots. Only one root operator is
   *                             allowed for each expression: And, Or, Not, Dimensions, Tags,
   *                             CostCategories"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and
   *                 NOT isn't supported. OR isn't supported between different dimensions, or dimensions
   *                 and tags. NOT operators aren't supported. Dimensions are also limited to
   *                     <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *             <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is
   *                 supported. AND and OR aren't supported. Dimensions are limited to
   *                     <code>LINKED_ACCOUNT</code>.</p>
   *          </note>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The value that you want to sort the data by.</p>
   *          <p>The key represents cost and usage metrics. The following values are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BlendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetAmortizedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NetUnblendedCost</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UsageQuantity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NormalizedUsageAmount</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and
   *         <code>DESCENDING</code>.</p>
   *          <p>When you use <code>SortBy</code>, <code>NextPageToken</code> and <code>SearchString</code>
   *       aren't supported.</p>
   * @public
   */
  SortBy?: SortDefinition[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>This field is only used when SortBy is provided in the request. The maximum number of
   *       objects that are returned for this request. If MaxResults isn't specified with SortBy, the
   *       request returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetTags</code>, MaxResults has an upper quota of 1000.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUsageForecastRequest {
  /**
   * <p>The start and end dates of the period that you want to retrieve usage forecast for. The
   *       start date is included in the period, but the end date isn't included in the period. For
   *       example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is
   *         <code>2017-05-01</code>, then the cost and usage data is retrieved from
   *         <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including
   *         <code>2017-05-01</code>. The start date must be equal to or later than the current date to
   *       avoid a validation error.</p>
   * @public
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast.</p>
   *          <p>Valid values for a <code>GetUsageForecast</code> call are the following:</p>
   *          <ul>
   *             <li>
   *                <p>USAGE_QUANTITY</p>
   *             </li>
   *             <li>
   *                <p>NORMALIZED_USAGE_AMOUNT</p>
   *             </li>
   *          </ul>
   * @public
   */
  Metric: Metric | undefined;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code>
   *       forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   *          <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   * @public
   */
  Granularity: Granularity | undefined;

  /**
   * <p>The filters that you want to use to filter your forecast. The
   *         <code>GetUsageForecast</code> API supports filtering by the following dimensions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AZ</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LINKED_ACCOUNT_NAME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PURCHASE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REGION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USAGE_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USAGE_TYPE_GROUP</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECORD_TYPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPERATING_SYSTEM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TENANCY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SCOPE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLATFORM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBSCRIPTION_ID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGAL_ENTITY_NAME</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPLOYMENT_OPTION</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DATABASE_ENGINE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_TYPE_FAMILY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BILLING_ENTITY</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESERVATION_ID</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAVINGS_PLAN_ARN</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Filter?: Expression | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a specific billing view. The ARN
   *       is used to specify which particular billing view you want to interact with or retrieve
   *       information from when making API calls related to Amazon Web Services Billing and Cost
   *       Management features. The BillingViewArn can be retrieved by calling the ListBillingViews
   *       API.</p>
   * @public
   */
  BillingViewArn?: string | undefined;

  /**
   * <p>Amazon Web Services Cost Explorer always returns the mean forecast as a single point.
   *       You can request a prediction interval around the mean by specifying a confidence level. The
   *       higher the confidence level, the more confident Cost Explorer is about the actual value
   *       falling in the prediction interval. Higher confidence levels result in wider prediction
   *       intervals.</p>
   * @public
   */
  PredictionIntervalLevel?: number | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionRequest {
  /**
   * <p>A cost anomaly subscription Amazon Resource Name (ARN). </p>
   * @public
   */
  SubscriptionArn: string | undefined;

  /**
   * <p>(deprecated)</p>
   *          <p>The update to the threshold value for receiving notifications. </p>
   *          <p>This field has been deprecated. To update a threshold, use ThresholdExpression. Continued
   *       use of Threshold will be treated as shorthand syntax for a ThresholdExpression.</p>
   *          <p>You can specify either Threshold or ThresholdExpression, but not both.</p>
   *
   * @deprecated Threshold has been deprecated in favor of ThresholdExpression
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>The update to the frequency value that subscribers receive notifications. </p>
   * @public
   */
  Frequency?: AnomalySubscriptionFrequency | undefined;

  /**
   * <p>A list of cost anomaly monitor ARNs. </p>
   * @public
   */
  MonitorArnList?: string[] | undefined;

  /**
   * <p>The update to the subscriber list. </p>
   * @public
   */
  Subscribers?: Subscriber[] | undefined;

  /**
   * <p>The new name of the subscription. </p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>The update to the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       used to specify the anomalies that you want to generate alerts for. This supports dimensions
   *       and nested expressions. The supported dimensions are
   *         <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code>,
   *       corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html">Impact</a> for more details). The supported nested expression types are
   *         <code>AND</code> and <code>OR</code>. The match option <code>GREATER_THAN_OR_EQUAL</code> is
   *       required. Values must be numbers between 0 and 10,000,000,000 in string format.</p>
   *          <p>You can specify either Threshold or ThresholdExpression, but not both.</p>
   *          <p>The following are examples of valid ThresholdExpressions:</p>
   *          <ul>
   *             <li>
   *                <p>Absolute threshold: <code>\{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE",
   *             "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Percentage threshold: <code>\{ "Dimensions": \{ "Key":
   *             "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ],
   *             "Values": [ "100" ] \} \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AND</code> two thresholds together: <code>\{ "And": [ \{ "Dimensions": \{ "Key":
   *             "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values":
   *             [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
   *             "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OR</code> two thresholds together: <code>\{ "Or": [ \{ "Dimensions": \{ "Key":
   *             "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values":
   *             [ "100" ] \} \}, \{ "Dimensions": \{ "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
   *             "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] \} \} ] \}</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ThresholdExpression?: Expression | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorRequest {
  /**
   * <p>The cost anomaly detection monitor object that you want to create.</p>
   * @public
   */
  AnomalyMonitor: AnomalyMonitor | undefined;

  /**
   * <p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html">
   *                <code>AnomalyMonitor</code>
   *             </a>. You can use resource tags to control access to your
   *         <code>monitor</code> using IAM policies.</p>
   *          <p>Each tag consists of a key and a value, and each key must be unique for the resource. The
   *       following restrictions apply to resource tags:</p>
   *          <ul>
   *             <li>
   *                <p>Although the maximum number of array members is 200, you can assign a maximum of 50
   *           user-tags to one resource. The remaining are reserved for Amazon Web Services use</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a key is 128 characters</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a value is 256 characters</p>
   *             </li>
   *             <li>
   *                <p>Keys and values can only contain alphanumeric characters, spaces, and any of the
   *           following: <code>_.:/=+@-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Keys and values are case sensitive</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are trimmed for any leading or trailing whitespaces</p>
   *             </li>
   *             <li>
   *                <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for
   *             Amazon Web Services use</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionRequest {
  /**
   * <p>The cost anomaly subscription object that you want to create. </p>
   * @public
   */
  AnomalySubscription: AnomalySubscription | undefined;

  /**
   * <p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html">
   *                <code>AnomalySubscription</code>
   *             </a>. You can use resource tags to control access to
   *       your <code>subscription</code> using IAM policies.</p>
   *          <p>Each tag consists of a key and a value, and each key must be unique for the resource. The
   *       following restrictions apply to resource tags:</p>
   *          <ul>
   *             <li>
   *                <p>Although the maximum number of array members is 200, you can assign a maximum of 50
   *           user-tags to one resource. The remaining are reserved for Amazon Web Services use</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a key is 128 characters</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a value is 256 characters</p>
   *             </li>
   *             <li>
   *                <p>Keys and values can only contain alphanumeric characters, spaces, and any of the
   *           following: <code>_.:/=+@-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Keys and values are case sensitive</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are trimmed for any leading or trailing whitespaces</p>
   *             </li>
   *             <li>
   *                <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for
   *             Amazon Web Services use</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules
 *             for the <code>CostCategory</code> object.</p>
 * @public
 */
export interface CostCategory {
  /**
   * <p>The unique identifier for your Cost Category. </p>
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>The effective start date of your Cost Category.</p>
   * @public
   */
  EffectiveStart: string | undefined;

  /**
   * <p>The effective end date of your Cost Category.</p>
   * @public
   */
  EffectiveEnd?: string | undefined;

  /**
   * <p>The unique name of the Cost Category.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * <p>The rules are processed in order. If there are multiple rules that match the line
   *             item, then the first rule to match is used to determine that Cost Category value.
   *         </p>
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * <p> The split charge rules that are used to allocate your charges between your Cost
   *             Category values. </p>
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;

  /**
   * <p>The list of processing statuses for Cost Management products for a specific cost
   *             category. </p>
   * @public
   */
  ProcessingStatus?: CostCategoryProcessingStatus[] | undefined;

  /**
   * <p>The
   *             default value for the cost category.</p>
   * @public
   */
  DefaultValue?: string | undefined;
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionRequest {
  /**
   * <p>The unique name of the Cost Category.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.</p>
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * <p>The Cost Category rules used to categorize costs. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p>
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * <p>The
   *             default value for the cost category.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p> The split charge rules used to allocate your charges between your Cost Category values.
   *     </p>
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;

  /**
   * <p>An optional list of tags to associate with the specified <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html">
   *                <code>CostCategory</code>
   *             </a>. You can use resource tags to control access to your
   *         <code>cost category</code> using IAM policies.</p>
   *          <p>Each tag consists of a key and a value, and each key must be unique for the resource. The
   *       following restrictions apply to resource tags:</p>
   *          <ul>
   *             <li>
   *                <p>Although the maximum number of array members is 200, you can assign a maximum of 50
   *           user-tags to one resource. The remaining are reserved for Amazon Web Services use</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a key is 128 characters</p>
   *             </li>
   *             <li>
   *                <p>The maximum length of a value is 256 characters</p>
   *             </li>
   *             <li>
   *                <p>Keys and values can only contain alphanumeric characters, spaces, and any of the
   *           following: <code>_.:/=+@-</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Keys and values are case sensitive</p>
   *             </li>
   *             <li>
   *                <p>Keys and values are trimmed for any leading or trailing whitespaces</p>
   *             </li>
   *             <li>
   *                <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for
   *             Amazon Web Services use</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface GetAnomalyMonitorsResponse {
  /**
   * <p>A list of cost anomaly monitors that includes the detailed metadata for each monitor.
   *     </p>
   * @public
   */
  AnomalyMonitors: AnomalyMonitor[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsResponse {
  /**
   * <p>A list of cost anomaly subscriptions that includes the detailed metadata for each one.
   *     </p>
   * @public
   */
  AnomalySubscriptions: AnomalySubscription[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostAndUsageComparisonsResponse {
  /**
   * <p>An array of comparison results showing cost and usage metrics between
   *         <code>BaselineTimePeriod</code> and <code>ComparisonTimePeriod</code>.</p>
   * @public
   */
  CostAndUsageComparisons?: CostAndUsageComparison[] | undefined;

  /**
   * <p>A summary of the total cost and usage, comparing amounts between
   *         <code>BaselineTimePeriod</code> and <code>ComparisonTimePeriod</code> and their differences.
   *       This total represents the aggregate total across all paginated results, if the response spans
   *       multiple pages.</p>
   * @public
   */
  TotalCostAndUsage?: Record<string, ComparisonMetricValue> | undefined;

  /**
   * <p>The token to retrieve the next set of paginated results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCostComparisonDriversResponse {
  /**
   * <p>An array of comparison results showing factors that drive significant cost differences
   *       between <code>BaselineTimePeriod</code> and <code>ComparisonTimePeriod</code>.</p>
   * @public
   */
  CostComparisonDrivers?: CostComparisonDriver[] | undefined;

  /**
   * <p>The token to retrieve the next set of paginated results.</p>
   * @public
   */
  NextPageToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionRequest {
  /**
   * <p>The unique identifier for your Cost Category.</p>
   * @public
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.</p>
   * @public
   */
  EffectiveStart?: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   * @public
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * <p>The <code>Expression</code> object used to categorize costs. For more information, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule
   *       </a>. </p>
   * @public
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * <p>The
   *             default value for the cost category.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p> The split charge rules used to allocate your charges between your Cost Category values.
   *     </p>
   * @public
   */
  SplitChargeRules?: CostCategorySplitChargeRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionResponse {
  /**
   * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules
   *             for the <code>CostCategory</code> object.</p>
   * @public
   */
  CostCategory?: CostCategory | undefined;
}
