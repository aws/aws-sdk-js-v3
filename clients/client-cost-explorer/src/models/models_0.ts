// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostExplorerServiceException as __BaseException } from "./CostExplorerServiceException";

/**
 * @public
 * @enum
 */
export const AccountScope = {
  LINKED: "LINKED",
  PAYER: "PAYER",
} as const;

/**
 * @public
 */
export type AccountScope = (typeof AccountScope)[keyof typeof AccountScope];

/**
 * @public
 * <p>Quantifies the anomaly. The higher score means that it's more anomalous. </p>
 */
export interface AnomalyScore {
  /**
   * @public
   * <p>The maximum score that's observed during the <code>AnomalyDateInterval</code>. </p>
   */
  MaxScore: number | undefined;

  /**
   * @public
   * <p>The last observed score. </p>
   */
  CurrentScore: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AnomalyFeedbackType = {
  NO: "NO",
  PLANNED_ACTIVITY: "PLANNED_ACTIVITY",
  YES: "YES",
} as const;

/**
 * @public
 */
export type AnomalyFeedbackType = (typeof AnomalyFeedbackType)[keyof typeof AnomalyFeedbackType];

/**
 * @public
 * <p>The dollar value of the anomaly. </p>
 */
export interface Impact {
  /**
   * @public
   * <p>The maximum dollar value that's observed for an anomaly.</p>
   */
  MaxImpact: number | undefined;

  /**
   * @public
   * <p>The cumulative dollar difference between the total actual spend and total expected
   *             spend. It is calculated as <code>TotalActualSpend - TotalExpectedSpend</code>.</p>
   */
  TotalImpact?: number;

  /**
   * @public
   * <p>The cumulative dollar amount that was actually spent during the anomaly.</p>
   */
  TotalActualSpend?: number;

  /**
   * @public
   * <p>The cumulative dollar amount that was expected to be spent during the anomaly. It is
   *             calculated using advanced machine learning models to determine the typical spending
   *             pattern based on historical data for a customer.</p>
   */
  TotalExpectedSpend?: number;

  /**
   * @public
   * <p>The cumulative percentage difference between the total actual spend and total expected
   *             spend. It is calculated as <code>(TotalImpact / TotalExpectedSpend) * 100</code>. When
   *                 <code>TotalExpectedSpend</code> is zero, this field is omitted. Expected spend can
   *             be zero in situations such as when you start to use a service for the first time.</p>
   */
  TotalImpactPercentage?: number;
}

/**
 * @public
 * <p>The combination of Amazon Web Service, linked account, linked account name,
 *             Region, and usage type where a cost anomaly is observed. The linked account name will
 *             only be available when the account name can be identified.</p>
 */
export interface RootCause {
  /**
   * @public
   * <p>The Amazon Web Service name that's associated with the cost anomaly. </p>
   */
  Service?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region that's associated with the cost anomaly. </p>
   */
  Region?: string;

  /**
   * @public
   * <p>The member account value that's associated with the cost anomaly. </p>
   */
  LinkedAccount?: string;

  /**
   * @public
   * <p>The <code>UsageType</code> value that's associated with the cost anomaly. </p>
   */
  UsageType?: string;

  /**
   * @public
   * <p>The member account name value that's associated with the cost anomaly.</p>
   */
  LinkedAccountName?: string;
}

/**
 * @public
 * <p>An unusual cost pattern. This consists of the detailed metadata and the current status
 *             of the anomaly object. </p>
 */
export interface Anomaly {
  /**
   * @public
   * <p>The unique identifier for the anomaly. </p>
   */
  AnomalyId: string | undefined;

  /**
   * @public
   * <p>The first day the anomaly is detected. </p>
   */
  AnomalyStartDate?: string;

  /**
   * @public
   * <p>The last day the anomaly is detected. </p>
   */
  AnomalyEndDate?: string;

  /**
   * @public
   * <p>The dimension for the anomaly (for example, an Amazon Web Service in a service
   *             monitor). </p>
   */
  DimensionValue?: string;

  /**
   * @public
   * <p>The list of identified root causes for the anomaly. </p>
   */
  RootCauses?: RootCause[];

  /**
   * @public
   * <p>The latest and maximum score for the anomaly. </p>
   */
  AnomalyScore: AnomalyScore | undefined;

  /**
   * @public
   * <p>The dollar impact for the anomaly. </p>
   */
  Impact: Impact | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly.
   *         </p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
   * <p>The feedback value. </p>
   */
  Feedback?: AnomalyFeedbackType;
}

/**
 * @public
 * <p>The time period for an anomaly. </p>
 */
export interface AnomalyDateInterval {
  /**
   * @public
   * <p>The first date an anomaly was observed. </p>
   */
  StartDate: string | undefined;

  /**
   * @public
   * <p>The last date an anomaly was observed. </p>
   */
  EndDate?: string;
}

/**
 * @public
 * @enum
 */
export const MonitorDimension = {
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type MonitorDimension = (typeof MonitorDimension)[keyof typeof MonitorDimension];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  ABSENT: "ABSENT",
  CASE_INSENSITIVE: "CASE_INSENSITIVE",
  CASE_SENSITIVE: "CASE_SENSITIVE",
  CONTAINS: "CONTAINS",
  ENDS_WITH: "ENDS_WITH",
  EQUALS: "EQUALS",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * @public
 * <p>The Cost Categories values used for filtering the costs.</p>
 *          <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on
 *             resources that aren't mapped to any Cost Categories.</p>
 *          <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the
 *                 <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That
 *             is, it filters on resources without the given Cost Categories key.</p>
 */
export interface CostCategoryValues {
  /**
   * @public
   * <p>The unique name of the Cost Category.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The specific value of the Cost Category.</p>
   */
  Values?: string[];

  /**
   * @public
   * <p>The match options that you can use to filter your results. MatchOptions is only
   *             applicable for actions related to cost category. The default values for
   *                 <code>MatchOptions</code> is <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.
   *         </p>
   */
  MatchOptions?: MatchOption[];
}

/**
 * @public
 * @enum
 */
export const Dimension = {
  AGREEMENT_END_DATE_TIME_AFTER: "AGREEMENT_END_DATE_TIME_AFTER",
  AGREEMENT_END_DATE_TIME_BEFORE: "AGREEMENT_END_DATE_TIME_BEFORE",
  ANOMALY_TOTAL_IMPACT_ABSOLUTE: "ANOMALY_TOTAL_IMPACT_ABSOLUTE",
  ANOMALY_TOTAL_IMPACT_PERCENTAGE: "ANOMALY_TOTAL_IMPACT_PERCENTAGE",
  AZ: "AZ",
  BILLING_ENTITY: "BILLING_ENTITY",
  CACHE_ENGINE: "CACHE_ENGINE",
  DATABASE_ENGINE: "DATABASE_ENGINE",
  DEPLOYMENT_OPTION: "DEPLOYMENT_OPTION",
  INSTANCE_TYPE: "INSTANCE_TYPE",
  INSTANCE_TYPE_FAMILY: "INSTANCE_TYPE_FAMILY",
  INVOICING_ENTITY: "INVOICING_ENTITY",
  LEGAL_ENTITY_NAME: "LEGAL_ENTITY_NAME",
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
  LINKED_ACCOUNT_NAME: "LINKED_ACCOUNT_NAME",
  OPERATING_SYSTEM: "OPERATING_SYSTEM",
  OPERATION: "OPERATION",
  PAYMENT_OPTION: "PAYMENT_OPTION",
  PLATFORM: "PLATFORM",
  PURCHASE_TYPE: "PURCHASE_TYPE",
  RECORD_TYPE: "RECORD_TYPE",
  REGION: "REGION",
  RESERVATION_ID: "RESERVATION_ID",
  RESOURCE_ID: "RESOURCE_ID",
  RIGHTSIZING_TYPE: "RIGHTSIZING_TYPE",
  SAVINGS_PLANS_TYPE: "SAVINGS_PLANS_TYPE",
  SAVINGS_PLAN_ARN: "SAVINGS_PLAN_ARN",
  SCOPE: "SCOPE",
  SERVICE: "SERVICE",
  SERVICE_CODE: "SERVICE_CODE",
  SUBSCRIPTION_ID: "SUBSCRIPTION_ID",
  TENANCY: "TENANCY",
  USAGE_TYPE: "USAGE_TYPE",
  USAGE_TYPE_GROUP: "USAGE_TYPE_GROUP",
} as const;

/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * <p>The metadata that you can use to filter and group your results. You can use
 *                 <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValues {
  /**
   * @public
   * <p>The names of the metadata types that you can use to filter and group your results. For
   *             example, <code>AZ</code> returns a list of Availability Zones.</p>
   *          <p>Not all dimensions are supported in each API. Refer to the documentation for each
   *             specific API to see what is supported.</p>
   *          <p>
   *             <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in
   *                 <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p>
   *          <p>
   *             <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and
   *                 <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html">AnomalySubscriptions</a>.</p>
   */
  Key?: Dimension;

  /**
   * @public
   * <p>The metadata values that you can use to filter and group your results. You can use
   *                 <code>GetDimensionValues</code> to find specific values.</p>
   */
  Values?: string[];

  /**
   * @public
   * <p>The match options that you can use to filter your results.</p>
   *          <p>
   *             <code>MatchOptions</code> is only applicable for actions related to Cost Category and
   *             Anomaly Subscriptions. Refer to the documentation for each specific API to see what is
   *             supported.</p>
   *          <p>The default values for <code>MatchOptions</code> are <code>EQUALS</code> and
   *                 <code>CASE_SENSITIVE</code>.</p>
   */
  MatchOptions?: MatchOption[];
}

/**
 * @public
 * <p>The values that are available for a tag.</p>
 *          <p>If <code>Values</code> and <code>Key</code> aren't specified, the <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to all tags. That is, it's filtered on resources
 *             with no tags.</p>
 *          <p>If <code>Key</code> is provided and <code>Values</code> isn't specified, the
 *                 <code>ABSENT</code>
 *             <code>MatchOption</code> is applied to the tag <code>Key</code> only. That is, it's
 *             filtered on resources without the given tag key.</p>
 */
export interface TagValues {
  /**
   * @public
   * <p>The key for the tag.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The specific value of the tag.</p>
   */
  Values?: string[];

  /**
   * @public
   * <p>The match options that you can use to filter your results. <code>MatchOptions</code>
   *             is only applicable for actions related to Cost Category. The default values for
   *                 <code>MatchOptions</code> are <code>EQUALS</code> and
   *             <code>CASE_SENSITIVE</code>.</p>
   */
  MatchOptions?: MatchOption[];
}

/**
 * @public
 * @enum
 */
export const MonitorType = {
  CUSTOM: "CUSTOM",
  DIMENSIONAL: "DIMENSIONAL",
} as const;

/**
 * @public
 */
export type MonitorType = (typeof MonitorType)[keyof typeof MonitorType];

/**
 * @public
 * @enum
 */
export const AnomalySubscriptionFrequency = {
  DAILY: "DAILY",
  IMMEDIATE: "IMMEDIATE",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type AnomalySubscriptionFrequency =
  (typeof AnomalySubscriptionFrequency)[keyof typeof AnomalySubscriptionFrequency];

/**
 * @public
 * @enum
 */
export const SubscriberStatus = {
  CONFIRMED: "CONFIRMED",
  DECLINED: "DECLINED",
} as const;

/**
 * @public
 */
export type SubscriberStatus = (typeof SubscriberStatus)[keyof typeof SubscriberStatus];

/**
 * @public
 * @enum
 */
export const SubscriberType = {
  EMAIL: "EMAIL",
  SNS: "SNS",
} as const;

/**
 * @public
 */
export type SubscriberType = (typeof SubscriberType)[keyof typeof SubscriberType];

/**
 * @public
 * <p>The recipient of <code>AnomalySubscription</code> notifications. </p>
 */
export interface Subscriber {
  /**
   * @public
   * <p>The email address or SNS Amazon Resource Name (ARN). This depends on the
   *                 <code>Type</code>. </p>
   */
  Address?: string;

  /**
   * @public
   * <p>The notification delivery channel. </p>
   */
  Type?: SubscriberType;

  /**
   * @public
   * <p>Indicates if the subscriber accepts the notifications. </p>
   */
  Status?: SubscriberStatus;
}

/**
 * @public
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
 */
export interface ResourceTag {
  /**
   * @public
   * <p>The key that's associated with the tag. </p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value that's associated with the tag. </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorResponse {
  /**
   * @public
   * <p>The unique identifier of your newly created cost anomaly detection monitor.</p>
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 * <p>You made too many calls in a short period of time. Try again later.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionResponse {
  /**
   * @public
   * <p>The unique identifier of your newly created cost anomaly subscription. </p>
   */
  SubscriptionArn: string | undefined;
}

/**
 * @public
 * <p>The cost anomaly monitor does not exist for the account. </p>
 */
export class UnknownMonitorException extends __BaseException {
  readonly name: "UnknownMonitorException" = "UnknownMonitorException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownMonitorException, __BaseException>) {
    super({
      name: "UnknownMonitorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownMonitorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const CostCategoryInheritedValueDimensionName = {
  LINKED_ACCOUNT_NAME: "LINKED_ACCOUNT_NAME",
  TAG: "TAG",
} as const;

/**
 * @public
 */
export type CostCategoryInheritedValueDimensionName =
  (typeof CostCategoryInheritedValueDimensionName)[keyof typeof CostCategoryInheritedValueDimensionName];

/**
 * @public
 * <p>When you create or update a cost category, you can define the
 *                 <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule
 *             type adds the flexibility to define a rule that dynamically inherits the cost category
 *             value from the dimension value that's defined by
 *                 <code>CostCategoryInheritedValueDimension</code>. For example, suppose that you want
 *             to dynamically group costs that are based on the value of a specific tag key. First,
 *             choose an inherited value rule type, and then choose the tag dimension and specify the
 *             tag key to use.</p>
 */
export interface CostCategoryInheritedValueDimension {
  /**
   * @public
   * <p>The name of the dimension that's used to group costs.</p>
   *          <p>If you specify <code>LINKED_ACCOUNT_NAME</code>, the cost category value is based on
   *             account name. If you specify <code>TAG</code>, the cost category value is based on the
   *             value of the specified tag key.</p>
   */
  DimensionName?: CostCategoryInheritedValueDimensionName;

  /**
   * @public
   * <p>The key to extract cost category values.</p>
   */
  DimensionKey?: string;
}

/**
 * @public
 * @enum
 */
export const CostCategoryRuleType = {
  INHERITED_VALUE: "INHERITED_VALUE",
  REGULAR: "REGULAR",
} as const;

/**
 * @public
 */
export type CostCategoryRuleType = (typeof CostCategoryRuleType)[keyof typeof CostCategoryRuleType];

/**
 * @public
 * @enum
 */
export const CostCategoryRuleVersion = {
  CostCategoryExpressionV1: "CostCategoryExpression.v1",
} as const;

/**
 * @public
 */
export type CostCategoryRuleVersion = (typeof CostCategoryRuleVersion)[keyof typeof CostCategoryRuleVersion];

/**
 * @public
 * @enum
 */
export const CostCategorySplitChargeMethod = {
  EVEN: "EVEN",
  FIXED: "FIXED",
  PROPORTIONAL: "PROPORTIONAL",
} as const;

/**
 * @public
 */
export type CostCategorySplitChargeMethod =
  (typeof CostCategorySplitChargeMethod)[keyof typeof CostCategorySplitChargeMethod];

/**
 * @public
 * @enum
 */
export const CostCategorySplitChargeRuleParameterType = {
  ALLOCATION_PERCENTAGES: "ALLOCATION_PERCENTAGES",
} as const;

/**
 * @public
 */
export type CostCategorySplitChargeRuleParameterType =
  (typeof CostCategorySplitChargeRuleParameterType)[keyof typeof CostCategorySplitChargeRuleParameterType];

/**
 * @public
 * <p>The parameters for a split charge method. </p>
 */
export interface CostCategorySplitChargeRuleParameter {
  /**
   * @public
   * <p>The parameter type. </p>
   */
  Type: CostCategorySplitChargeRuleParameterType | undefined;

  /**
   * @public
   * <p>The parameter values. </p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>Use the split charge rule to split the cost of one Cost Category value across several
 *             other target values. </p>
 */
export interface CostCategorySplitChargeRule {
  /**
   * @public
   * <p>The Cost Category value that you want to split. That value can't be used as a source
   *             or a target in other split charge rules. To indicate uncategorized costs, you can use an
   *             empty string as the source.</p>
   */
  Source: string | undefined;

  /**
   * @public
   * <p>The Cost Category values that you want to split costs across. These values can't be
   *             used as a source in other split charge rules. </p>
   */
  Targets: string[] | undefined;

  /**
   * @public
   * <p>The method that's used to define how to split your source costs across your targets. </p>
   *          <p>
   *             <code>Proportional</code> - Allocates charges across your targets based on the
   *             proportional weighted cost of each target.</p>
   *          <p>
   *             <code>Fixed</code> - Allocates charges across your targets based on your defined
   *             allocation percentage.</p>
   *          <p>><code>Even</code> - Allocates costs evenly across all targets.</p>
   */
  Method: CostCategorySplitChargeMethod | undefined;

  /**
   * @public
   * <p>The parameters for a split charge method. This is only required for the
   *                 <code>FIXED</code> method. </p>
   */
  Parameters?: CostCategorySplitChargeRuleParameter[];
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionResponse {
  /**
   * @public
   * <p>The unique identifier for your newly created Cost Category. </p>
   */
  CostCategoryArn?: string;

  /**
   * @public
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month).</p>
   */
  EffectiveStart?: string;
}

/**
 * @public
 * <p> You've reached the limit on the number of resources you can create, or exceeded the
 *             size of an individual resource. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteAnomalyMonitorRequest {
  /**
   * @public
   * <p>The unique identifier of the cost anomaly monitor that you want to delete. </p>
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
   * @public
   * <p>The unique identifier of the cost anomaly subscription that you want to delete. </p>
   */
  SubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalySubscriptionResponse {}

/**
 * @public
 * <p>The cost anomaly subscription does not exist for the account. </p>
 */
export class UnknownSubscriptionException extends __BaseException {
  readonly name: "UnknownSubscriptionException" = "UnknownSubscriptionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownSubscriptionException, __BaseException>) {
    super({
      name: "UnknownSubscriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownSubscriptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCostCategoryDefinitionRequest {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCostCategoryDefinitionResponse {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn?: string;

  /**
   * @public
   * <p>The effective end date of the Cost Category as a result of deleting it. No costs after
   *       this date is categorized by the deleted Cost Category. </p>
   */
  EffectiveEnd?: string;
}

/**
 * @public
 * <p> The specified ARN in the request doesn't exist. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionRequest {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * @public
   * <p>The date when the Cost Category was effective. </p>
   */
  EffectiveOn?: string;
}

/**
 * @public
 * @enum
 */
export const CostCategoryStatusComponent = {
  COST_EXPLORER: "COST_EXPLORER",
} as const;

/**
 * @public
 */
export type CostCategoryStatusComponent =
  (typeof CostCategoryStatusComponent)[keyof typeof CostCategoryStatusComponent];

/**
 * @public
 * @enum
 */
export const CostCategoryStatus = {
  APPLIED: "APPLIED",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type CostCategoryStatus = (typeof CostCategoryStatus)[keyof typeof CostCategoryStatus];

/**
 * @public
 * <p>The list of processing statuses for Cost Management products for a specific cost
 *             category. </p>
 */
export interface CostCategoryProcessingStatus {
  /**
   * @public
   * <p>The Cost Management product name of the applied status. </p>
   */
  Component?: CostCategoryStatusComponent;

  /**
   * @public
   * <p>The process status for a specific cost category. </p>
   */
  Status?: CostCategoryStatus;
}

/**
 * @public
 * @enum
 */
export const NumericOperator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;

/**
 * @public
 */
export type NumericOperator = (typeof NumericOperator)[keyof typeof NumericOperator];

/**
 * @public
 * <p>Filters cost anomalies based on the total impact. </p>
 */
export interface TotalImpactFilter {
  /**
   * @public
   * <p>The comparing value that's used in the filter. </p>
   */
  NumericOperator: NumericOperator | undefined;

  /**
   * @public
   * <p>The lower bound dollar value that's used in the filter. </p>
   */
  StartValue: number | undefined;

  /**
   * @public
   * <p>The upper bound dollar value that's used in the filter. </p>
   */
  EndValue?: number;
}

/**
 * @public
 */
export interface GetAnomaliesRequest {
  /**
   * @public
   * <p>Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon
   *       Resource Name (ARN). </p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object
   *       will have an <code>AnomalyEndDate</code> in the specified time range. </p>
   */
  DateInterval: AnomalyDateInterval | undefined;

  /**
   * @public
   * <p>Filters anomaly results by the feedback field on the anomaly object. </p>
   */
  Feedback?: AnomalyFeedbackType;

  /**
   * @public
   * <p>Filters anomaly results by the total impact field on the anomaly object. For example, you
   *       can filter anomalies <code>GREATER_THAN 200.00</code> to retrieve anomalies, with an estimated
   *       dollar impact greater than 200. </p>
   */
  TotalImpact?: TotalImpactFilter;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The number of entries a paginated response contains. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetAnomaliesResponse {
  /**
   * @public
   * <p>A list of cost anomalies. </p>
   */
  Anomalies: Anomaly[] | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetAnomalyMonitorsRequest {
  /**
   * @public
   * <p>A list of cost anomaly monitor ARNs. </p>
   */
  MonitorArnList?: string[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The number of entries that a paginated response contains. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsRequest {
  /**
   * @public
   * <p>A list of cost anomaly subscription ARNs. </p>
   */
  SubscriptionArnList?: string[];

  /**
   * @public
   * <p>Cost anomaly monitor ARNs. </p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The number of entries a paginated response contains. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The requested report expired. Update the date interval and try again.</p>
 */
export class BillExpirationException extends __BaseException {
  readonly name: "BillExpirationException" = "BillExpirationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BillExpirationException, __BaseException>) {
    super({
      name: "BillExpirationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BillExpirationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The requested data is unavailable.</p>
 */
export class DataUnavailableException extends __BaseException {
  readonly name: "DataUnavailableException" = "DataUnavailableException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataUnavailableException, __BaseException>) {
    super({
      name: "DataUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Granularity = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
} as const;

/**
 * @public
 */
export type Granularity = (typeof Granularity)[keyof typeof Granularity];

/**
 * @public
 * @enum
 */
export const GroupDefinitionType = {
  COST_CATEGORY: "COST_CATEGORY",
  DIMENSION: "DIMENSION",
  TAG: "TAG",
} as const;

/**
 * @public
 */
export type GroupDefinitionType = (typeof GroupDefinitionType)[keyof typeof GroupDefinitionType];

/**
 * @public
 * <p>Represents a group when you specify a group by criteria or in the response to a query
 *             with a specific grouping.</p>
 */
export interface GroupDefinition {
  /**
   * @public
   * <p>The string that represents the type of group.</p>
   */
  Type?: GroupDefinitionType;

  /**
   * @public
   * <p>The string that represents a key for a specified group.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>The time period of the request. </p>
 */
export interface DateInterval {
  /**
   * @public
   * <p>The beginning of the time period. The start date is inclusive. For example, if
   *                 <code>start</code> is <code>2017-01-01</code>, Amazon Web Services retrieves cost and
   *             usage data starting at <code>2017-01-01</code> up to the end date. The start date must
   *             be equal to or no later than the current date to avoid a validation error.</p>
   */
  Start: string | undefined;

  /**
   * @public
   * <p>The end of the time period. The end date is exclusive. For example, if
   *                 <code>end</code> is <code>2017-05-01</code>, Amazon Web Services retrieves cost and
   *             usage data from the start date up to, but not including, <code>2017-05-01</code>.</p>
   */
  End: string | undefined;
}

/**
 * @public
 * <p>The metadata of a specific type that you can use to filter and group your results. You
 *             can use <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValuesWithAttributes {
  /**
   * @public
   * <p>The value of a dimension with a specific attribute.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * @public
 * <p>The aggregated value for a metric.</p>
 */
export interface MetricValue {
  /**
   * @public
   * <p>The actual number that represents the metric.</p>
   */
  Amount?: string;

  /**
   * @public
   * <p>The unit that the metric is given in.</p>
   */
  Unit?: string;
}

/**
 * @public
 * <p>One level of grouped data in the results.</p>
 */
export interface Group {
  /**
   * @public
   * <p>The keys that are included in this group.</p>
   */
  Keys?: string[];

  /**
   * @public
   * <p>The metrics that are included in this group.</p>
   */
  Metrics?: Record<string, MetricValue>;
}

/**
 * @public
 * <p>The result that's associated with a time period.</p>
 */
export interface ResultByTime {
  /**
   * @public
   * <p>The time period that the result covers.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * @public
   * <p>The total amount of cost or usage accrued during the time period.</p>
   */
  Total?: Record<string, MetricValue>;

  /**
   * @public
   * <p>The groups that this time period includes.</p>
   */
  Groups?: Group[];

  /**
   * @public
   * <p>Determines whether the result is estimated.</p>
   */
  Estimated?: boolean;
}

/**
 * @public
 */
export interface GetCostAndUsageResponse {
  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * @public
   * <p>The time period that's covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];

  /**
   * @public
   * <p>The attributes that apply to a specific dimension value. For example, if the value is a
   *       linked account, the attribute is that account name.</p>
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[];
}

/**
 * @public
 * <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
 */
export class RequestChangedException extends __BaseException {
  readonly name: "RequestChangedException" = "RequestChangedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestChangedException, __BaseException>) {
    super({
      name: "RequestChangedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestChangedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesResponse {
  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * @public
   * <p>The time period that's covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];

  /**
   * @public
   * <p>The attributes that apply to a specific dimension value. For example, if the value is a
   *       linked account, the attribute is that account name.</p>
   */
  DimensionValueAttributes?: DimensionValuesWithAttributes[];
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>The details for how to sort the data.</p>
 */
export interface SortDefinition {
  /**
   * @public
   * <p>The key that's used to sort the data.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The order that's used to sort the data.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface GetCostCategoriesResponse {
  /**
   * @public
   * <p>If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of
   *       objects, provide the marker from the prior call in your next request.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The names of the Cost Categories.</p>
   */
  CostCategoryNames?: string[];

  /**
   * @public
   * <p>The Cost Category values.</p>
   *          <p>If the <code>CostCategoryName</code> key isn't specified in the request, the
   *         <code>CostCategoryValues</code> fields aren't returned. </p>
   */
  CostCategoryValues?: string[];

  /**
   * @public
   * <p>The number of objects that are returned.</p>
   */
  ReturnSize: number | undefined;

  /**
   * @public
   * <p>The total number of objects.</p>
   */
  TotalSize: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Metric = {
  AMORTIZED_COST: "AMORTIZED_COST",
  BLENDED_COST: "BLENDED_COST",
  NET_AMORTIZED_COST: "NET_AMORTIZED_COST",
  NET_UNBLENDED_COST: "NET_UNBLENDED_COST",
  NORMALIZED_USAGE_AMOUNT: "NORMALIZED_USAGE_AMOUNT",
  UNBLENDED_COST: "UNBLENDED_COST",
  USAGE_QUANTITY: "USAGE_QUANTITY",
} as const;

/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * <p>The forecast that's created for your query.</p>
 */
export interface ForecastResult {
  /**
   * @public
   * <p>The period of time that the forecast covers.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * @public
   * <p>The mean value of the forecast.</p>
   */
  MeanValue?: string;

  /**
   * @public
   * <p>The lower limit for the prediction interval. </p>
   */
  PredictionIntervalLowerBound?: string;

  /**
   * @public
   * <p>The upper limit for the prediction interval. </p>
   */
  PredictionIntervalUpperBound?: string;
}

/**
 * @public
 */
export interface GetCostForecastResponse {
  /**
   * @public
   * <p>How much you are forecasted to spend over the forecast period, in <code>USD</code>.</p>
   */
  Total?: MetricValue;

  /**
   * @public
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list
   *       of days. For <code>MONTHLY</code> forecasts, this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];
}

/**
 * @public
 * @enum
 */
export const Context = {
  COST_AND_USAGE: "COST_AND_USAGE",
  RESERVATIONS: "RESERVATIONS",
  SAVINGS_PLANS: "SAVINGS_PLANS",
} as const;

/**
 * @public
 */
export type Context = (typeof Context)[keyof typeof Context];

/**
 * @public
 */
export interface GetDimensionValuesResponse {
  /**
   * @public
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
   */
  DimensionValues: DimensionValuesWithAttributes[] | undefined;

  /**
   * @public
   * <p>The number of results that Amazon Web Services returned at one time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * @public
   * <p>The total number of search results.</p>
   */
  TotalSize: number | undefined;

  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>How much it costs to run an instance.</p>
 */
export interface CoverageCost {
  /**
   * @public
   * <p>How much an On-Demand Instance costs.</p>
   */
  OnDemandCost?: string;
}

/**
 * @public
 * <p>How long a running instance either used a reservation or was On-Demand.</p>
 */
export interface CoverageHours {
  /**
   * @public
   * <p>The number of instance running hours that On-Demand Instances covered.</p>
   */
  OnDemandHours?: string;

  /**
   * @public
   * <p>The number of instance running hours that reservations covered.</p>
   */
  ReservedHours?: string;

  /**
   * @public
   * <p>The total instance usage, in hours.</p>
   */
  TotalRunningHours?: string;

  /**
   * @public
   * <p>The percentage of instance hours that a reservation covered.</p>
   */
  CoverageHoursPercentage?: string;
}

/**
 * @public
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
 */
export interface CoverageNormalizedUnits {
  /**
   * @public
   * <p>The number of normalized units that are covered by On-Demand Instances instead of a
   *             reservation.</p>
   */
  OnDemandNormalizedUnits?: string;

  /**
   * @public
   * <p>The number of normalized units that a reservation covers.</p>
   */
  ReservedNormalizedUnits?: string;

  /**
   * @public
   * <p>The total number of normalized units that you used.</p>
   */
  TotalRunningNormalizedUnits?: string;

  /**
   * @public
   * <p>The percentage of your used instance normalized units that a reservation
   *             covers.</p>
   */
  CoverageNormalizedUnitsPercentage?: string;
}

/**
 * @public
 * <p>The amount of instance usage that a reservation covered.</p>
 */
export interface Coverage {
  /**
   * @public
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   */
  CoverageHours?: CoverageHours;

  /**
   * @public
   * <p>The amount of instance usage that the reservation covered, in normalized units.</p>
   */
  CoverageNormalizedUnits?: CoverageNormalizedUnits;

  /**
   * @public
   * <p>The amount of cost that the reservation covered.</p>
   */
  CoverageCost?: CoverageCost;
}

/**
 * @public
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface ReservationCoverageGroup {
  /**
   * @public
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>How much instance usage this group of reservations covered.</p>
   */
  Coverage?: Coverage;
}

/**
 * @public
 * <p>Reservation coverage for a specified period, in hours.</p>
 */
export interface CoverageByTime {
  /**
   * @public
   * <p>The period that this coverage was used over.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * @public
   * <p>The groups of instances that the reservation covered.</p>
   */
  Groups?: ReservationCoverageGroup[];

  /**
   * @public
   * <p>The total reservation coverage, in hours.</p>
   */
  Total?: Coverage;
}

/**
 * @public
 */
export interface GetReservationCoverageResponse {
  /**
   * @public
   * <p>The amount of time that your reservations covered.</p>
   */
  CoveragesByTime: CoverageByTime[] | undefined;

  /**
   * @public
   * <p>The total amount of instance usage that a reservation covered.</p>
   */
  Total?: Coverage;

  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * @enum
 */
export const LookbackPeriodInDays = {
  SEVEN_DAYS: "SEVEN_DAYS",
  SIXTY_DAYS: "SIXTY_DAYS",
  THIRTY_DAYS: "THIRTY_DAYS",
} as const;

/**
 * @public
 */
export type LookbackPeriodInDays = (typeof LookbackPeriodInDays)[keyof typeof LookbackPeriodInDays];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  HEAVY_UTILIZATION: "HEAVY_UTILIZATION",
  LIGHT_UTILIZATION: "LIGHT_UTILIZATION",
  MEDIUM_UTILIZATION: "MEDIUM_UTILIZATION",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;

/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const OfferingClass = {
  CONVERTIBLE: "CONVERTIBLE",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type OfferingClass = (typeof OfferingClass)[keyof typeof OfferingClass];

/**
 * @public
 * <p>The Amazon EC2 hardware specifications that you want Amazon Web Services to provide
 *             recommendations for.</p>
 */
export interface EC2Specification {
  /**
   * @public
   * <p>Indicates whether you want a recommendation for standard or convertible
   *             reservations.</p>
   */
  OfferingClass?: OfferingClass;
}

/**
 * @public
 * <p>Hardware specifications for the service that you want recommendations for.</p>
 */
export interface ServiceSpecification {
  /**
   * @public
   * <p>The Amazon EC2 hardware specifications that you want Amazon Web Services to provide
   *             recommendations for.</p>
   */
  EC2Specification?: EC2Specification;
}

/**
 * @public
 * @enum
 */
export const TermInYears = {
  ONE_YEAR: "ONE_YEAR",
  THREE_YEARS: "THREE_YEARS",
} as const;

/**
 * @public
 */
export type TermInYears = (typeof TermInYears)[keyof typeof TermInYears];

/**
 * @public
 * <p>Information about this specific recommendation, such as the timestamp for when Amazon Web Services made a specific recommendation.</p>
 */
export interface ReservationPurchaseRecommendationMetadata {
  /**
   * @public
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The timestamp for when Amazon Web Services made this recommendation.</p>
   */
  GenerationTimestamp?: string;
}

/**
 * @public
 * <p>Details about the Amazon EC2 instances that Amazon Web Services recommends that you
 *             purchase.</p>
 */
export interface EC2InstanceDetails {
  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The Availability Zone of the recommended reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The platform of the recommended reservation. The platform is the specific combination
   *             of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>Determines whether the recommended reservation is dedicated or shared.</p>
   */
  Tenancy?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Determines whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

/**
 * @public
 * <p>Details about the Amazon ElastiCache instances that Amazon Web Services recommends that
 *             you purchase.</p>
 */
export interface ElastiCacheInstanceDetails {
  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>The type of node that Amazon Web Services recommends.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The description of the recommended reservation.</p>
   */
  ProductDescription?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Determines whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

/**
 * @public
 * <p>Details about the Amazon OpenSearch Service instances that Amazon Web Services recommends
 *             that you purchase.</p>
 */
export interface ESInstanceDetails {
  /**
   * @public
   * <p>The class of instance that Amazon Web Services recommends.</p>
   */
  InstanceClass?: string;

  /**
   * @public
   * <p>The size of instance that Amazon Web Services recommends.</p>
   */
  InstanceSize?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Determines whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

/**
 * @public
 * <p>Details about the Amazon RDS instances that Amazon Web Services recommends that you
 *             purchase.</p>
 */
export interface RDSInstanceDetails {
  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>The type of instance that Amazon Web Services recommends.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The database engine that the recommended reservation supports.</p>
   */
  DatabaseEngine?: string;

  /**
   * @public
   * <p>The database edition that the recommended reservation supports.</p>
   */
  DatabaseEdition?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a reservation in a single Availability
   *             Zone or a reservation with a backup in a second Availability Zone.</p>
   */
  DeploymentOption?: string;

  /**
   * @public
   * <p>The license model that the recommended reservation supports.</p>
   */
  LicenseModel?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Determines whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

/**
 * @public
 * <p>Details about the Amazon Redshift instances that Amazon Web Services recommends that
 *             you purchase.</p>
 */
export interface RedshiftInstanceDetails {
  /**
   * @public
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * @public
   * <p>The type of node that Amazon Web Services recommends.</p>
   */
  NodeType?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>Determines whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * @public
   * <p>Determines whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

/**
 * @public
 * <p>Details about the instances that Amazon Web Services recommends that you
 *             purchase.</p>
 */
export interface InstanceDetails {
  /**
   * @public
   * <p>The Amazon EC2 instances that Amazon Web Services recommends that you purchase.</p>
   */
  EC2InstanceDetails?: EC2InstanceDetails;

  /**
   * @public
   * <p>The Amazon RDS instances that Amazon Web Services recommends that you purchase.</p>
   */
  RDSInstanceDetails?: RDSInstanceDetails;

  /**
   * @public
   * <p>The Amazon Redshift instances that Amazon Web Services recommends that you
   *             purchase.</p>
   */
  RedshiftInstanceDetails?: RedshiftInstanceDetails;

  /**
   * @public
   * <p>The ElastiCache instances that Amazon Web Services recommends that you purchase.</p>
   */
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;

  /**
   * @public
   * <p>The Amazon OpenSearch Service instances that Amazon Web Services recommends that you
   *             purchase.</p>
   */
  ESInstanceDetails?: ESInstanceDetails;
}

/**
 * @public
 * <p>Details about your recommended reservation purchase.</p>
 */
export interface ReservationPurchaseRecommendationDetail {
  /**
   * @public
   * <p>The account that this Reserved Instance (RI) recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Details about the instances that Amazon Web Services recommends that you
   *             purchase.</p>
   */
  InstanceDetails?: InstanceDetails;

  /**
   * @public
   * <p>The number of instances that Amazon Web Services recommends that you purchase.</p>
   */
  RecommendedNumberOfInstancesToPurchase?: string;

  /**
   * @public
   * <p>The number of normalized units that Amazon Web Services recommends that you
   *             purchase.</p>
   */
  RecommendedNormalizedUnitsToPurchase?: string;

  /**
   * @public
   * <p>The minimum number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MinimumNumberOfInstancesUsedPerHour?: string;

  /**
   * @public
   * <p>The minimum number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MinimumNormalizedUnitsUsedPerHour?: string;

  /**
   * @public
   * <p>The maximum number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MaximumNumberOfInstancesUsedPerHour?: string;

  /**
   * @public
   * <p>The maximum number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MaximumNormalizedUnitsUsedPerHour?: string;

  /**
   * @public
   * <p>The average number of instances that you used in an hour during the historical period.
   *                 Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  AverageNumberOfInstancesUsedPerHour?: string;

  /**
   * @public
   * <p>The average number of normalized units that you used in an hour during the historical
   *             period. Amazon Web Services uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  AverageNormalizedUnitsUsedPerHour?: string;

  /**
   * @public
   * <p>The average utilization of your instances. Amazon Web Services uses this to calculate
   *             your recommended reservation purchases.</p>
   */
  AverageUtilization?: string;

  /**
   * @public
   * <p>How long Amazon Web Services estimates that it takes for this instance to start saving
   *             you money, in months.</p>
   */
  EstimatedBreakEvenInMonths?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>How much Amazon Web Services estimates that this specific recommendation might save you
   *             in a month.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>How much Amazon Web Services estimates that this specific recommendation might save you
   *             in a month, as a percentage of your overall costs.</p>
   */
  EstimatedMonthlySavingsPercentage?: string;

  /**
   * @public
   * <p>How much Amazon Web Services estimates that you spend on On-Demand Instances in a
   *             month.</p>
   */
  EstimatedMonthlyOnDemandCost?: string;

  /**
   * @public
   * <p>How much Amazon Web Services estimates that you might spend for all usage during the
   *             specified historical period if you had a reservation.</p>
   */
  EstimatedReservationCostForLookbackPeriod?: string;

  /**
   * @public
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  UpfrontCost?: string;

  /**
   * @public
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   */
  RecurringStandardMonthlyCost?: string;
}

/**
 * @public
 * <p>A summary about this recommendation, such as the currency code, the amount that
 *                 Amazon Web Services estimates that you could save, and the total amount of
 *             reservation to purchase.</p>
 */
export interface ReservationPurchaseRecommendationSummary {
  /**
   * @public
   * <p>The total amount that Amazon Web Services estimates that this recommendation could save
   *             you in a month.</p>
   */
  TotalEstimatedMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>The total amount that Amazon Web Services estimates that this recommendation could save
   *             you in a month, as a percentage of your costs.</p>
   */
  TotalEstimatedMonthlySavingsPercentage?: string;

  /**
   * @public
   * <p>The currency code used for this recommendation.</p>
   */
  CurrencyCode?: string;
}

/**
 * @public
 * <p>A specific reservation that Amazon Web Services recommends for purchase.</p>
 */
export interface ReservationPurchaseRecommendation {
  /**
   * @public
   * <p>The account scope that Amazon Web Services recommends that you purchase this instance
   *             for. For example, you can purchase this reservation for an entire organization in
   *                 Amazon Web Services Organizations.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>How many days of previous usage that Amazon Web Services considers when making this
   *             recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays;

  /**
   * @public
   * <p>The term of the reservation that you want recommendations for, in years.</p>
   */
  TermInYears?: TermInYears;

  /**
   * @public
   * <p>The payment option for the reservation (for example, <code>AllUpfront</code> or
   *                 <code>NoUpfront</code>).</p>
   */
  PaymentOption?: PaymentOption;

  /**
   * @public
   * <p>Hardware specifications for the service that you want recommendations for.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * @public
   * <p>Details about the recommended purchases.</p>
   */
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[];

  /**
   * @public
   * <p>A summary about the recommended purchase.</p>
   */
  RecommendationSummary?: ReservationPurchaseRecommendationSummary;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationResponse {
  /**
   * @public
   * <p>Information about this specific recommendation call, such as the time stamp for when
   *       Cost Explorer generated this recommendation.</p>
   */
  Metadata?: ReservationPurchaseRecommendationMetadata;

  /**
   * @public
   * <p>Recommendations for reservations to purchase.</p>
   */
  Recommendations?: ReservationPurchaseRecommendation[];

  /**
   * @public
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>The aggregated numbers for your reservation usage.</p>
 */
export interface ReservationAggregates {
  /**
   * @public
   * <p>The percentage of reservation time that you used.</p>
   */
  UtilizationPercentage?: string;

  /**
   * @public
   * <p>The percentage of Amazon EC2 reservation time that you used. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   */
  UtilizationPercentageInUnits?: string;

  /**
   * @public
   * <p>How many reservation hours that you purchased.</p>
   */
  PurchasedHours?: string;

  /**
   * @public
   * <p>The number of Amazon EC2 reservation hours that you purchased. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   */
  PurchasedUnits?: string;

  /**
   * @public
   * <p>The total number of reservation hours that you used.</p>
   */
  TotalActualHours?: string;

  /**
   * @public
   * <p>The total number of Amazon EC2 reservation hours that you used. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   */
  TotalActualUnits?: string;

  /**
   * @public
   * <p>The number of reservation hours that you didn't use.</p>
   */
  UnusedHours?: string;

  /**
   * @public
   * <p>The number of Amazon EC2 reservation hours that you didn't use. It's converted to
   *             normalized units. Normalized units are available only for Amazon EC2 usage after
   *             November 11, 2017.</p>
   */
  UnusedUnits?: string;

  /**
   * @public
   * <p>How much your reservation costs if charged On-Demand rates.</p>
   */
  OnDemandCostOfRIHoursUsed?: string;

  /**
   * @public
   * <p>How much you saved due to purchasing and utilizing reservation. Amazon Web Services
   *             calculates this by subtracting <code>TotalAmortizedFee</code> from
   *                 <code>OnDemandCostOfRIHoursUsed</code>.</p>
   */
  NetRISavings?: string;

  /**
   * @public
   * <p>How much you might save if you use your entire reservation.</p>
   */
  TotalPotentialRISavings?: string;

  /**
   * @public
   * <p>The upfront cost of your reservation. It's amortized over the reservation
   *             period.</p>
   */
  AmortizedUpfrontFee?: string;

  /**
   * @public
   * <p>The monthly cost of your reservation. It's amortized over the reservation
   *             period.</p>
   */
  AmortizedRecurringFee?: string;

  /**
   * @public
   * <p>The total cost of your reservation. It's amortized over the reservation period.</p>
   */
  TotalAmortizedFee?: string;

  /**
   * @public
   * <p>The cost of unused hours for your reservation.</p>
   */
  RICostForUnusedHours?: string;

  /**
   * @public
   * <p>The realized savings because of purchasing and using a reservation.</p>
   */
  RealizedSavings?: string;

  /**
   * @public
   * <p>The unrealized savings because of purchasing and using a reservation.</p>
   */
  UnrealizedSavings?: string;
}

/**
 * @public
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface ReservationUtilizationGroup {
  /**
   * @public
   * <p>The key for a specific reservation attribute.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value of a specific reservation attribute.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>How much you used this group of reservations.</p>
   */
  Utilization?: ReservationAggregates;
}

/**
 * @public
 * <p>The amount of utilization, in hours.</p>
 */
export interface UtilizationByTime {
  /**
   * @public
   * <p>The period of time that this utilization was used for.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * @public
   * <p>The groups that this utilization result uses.</p>
   */
  Groups?: ReservationUtilizationGroup[];

  /**
   * @public
   * <p>The total number of reservation hours that were used.</p>
   */
  Total?: ReservationAggregates;
}

/**
 * @public
 */
export interface GetReservationUtilizationResponse {
  /**
   * @public
   * <p>The amount of time that you used your Reserved Instances (RIs).</p>
   */
  UtilizationsByTime: UtilizationByTime[] | undefined;

  /**
   * @public
   * <p>The total amount of time that you used your Reserved Instances (RIs).</p>
   */
  Total?: ReservationAggregates;

  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * @enum
 */
export const RecommendationTarget = {
  CROSS_INSTANCE_FAMILY: "CROSS_INSTANCE_FAMILY",
  SAME_INSTANCE_FAMILY: "SAME_INSTANCE_FAMILY",
} as const;

/**
 * @public
 */
export type RecommendationTarget = (typeof RecommendationTarget)[keyof typeof RecommendationTarget];

/**
 * @public
 * <p>You can use <code>RightsizingRecommendationConfiguration</code> to customize
 *             recommendations across two attributes. You can choose to view recommendations for
 *             instances within the same instance families or across different instance families. You
 *             can also choose to view your estimated savings that are associated with recommendations
 *             with consideration of existing Savings Plans or Reserved Instance (RI) benefits, or
 *             neither. </p>
 */
export interface RightsizingRecommendationConfiguration {
  /**
   * @public
   * <p>The option to see recommendations within the same instance family or recommendations
   *             for instances across other families. The default value is
   *                 <code>SAME_INSTANCE_FAMILY</code>. </p>
   */
  RecommendationTarget: RecommendationTarget | undefined;

  /**
   * @public
   * <p>The option to consider RI or Savings Plans discount benefits in your savings
   *             calculation. The default value is <code>TRUE</code>. </p>
   */
  BenefitsConsidered: boolean | undefined;
}

/**
 * @public
 * <p>Metadata for this recommendation set.</p>
 */
export interface RightsizingRecommendationMetadata {
  /**
   * @public
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The timestamp for when Amazon Web Services made this recommendation.</p>
   */
  GenerationTimestamp?: string;

  /**
   * @public
   * <p>The number of days of previous usage that Amazon Web Services considers when making
   *             this recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays;

  /**
   * @public
   * <p>Additional metadata that might be applicable to the recommendation.</p>
   */
  AdditionalMetadata?: string;
}

/**
 * @public
 * <p>Details on the Amazon EC2 Resource.</p>
 */
export interface EC2ResourceDetails {
  /**
   * @public
   * <p>The hourly public On-Demand rate for the instance type.</p>
   */
  HourlyOnDemandRate?: string;

  /**
   * @public
   * <p>The type of Amazon Web Services instance.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The platform of the Amazon Web Services instance. The platform is the specific
   *             combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region of the instance.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The SKU of the product.</p>
   */
  Sku?: string;

  /**
   * @public
   * <p>The memory capacity of the Amazon Web Services instance.</p>
   */
  Memory?: string;

  /**
   * @public
   * <p>The network performance capacity of the Amazon Web Services instance.</p>
   */
  NetworkPerformance?: string;

  /**
   * @public
   * <p>The disk storage of the Amazon Web Services instance. This doesn't include EBS
   *             storage.</p>
   */
  Storage?: string;

  /**
   * @public
   * <p>The number of VCPU cores in the Amazon Web Services instance type.</p>
   */
  Vcpu?: string;
}

/**
 * @public
 * <p>Details for the resource.</p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>Details for the Amazon EC2 resource.</p>
   */
  EC2ResourceDetails?: EC2ResourceDetails;
}

/**
 * @public
 * <p>The field that contains a list of disk (local storage) metrics that are associated
 *             with the current instance. </p>
 */
export interface DiskResourceUtilization {
  /**
   * @public
   * <p>The maximum number of read operations per second. </p>
   */
  DiskReadOpsPerSecond?: string;

  /**
   * @public
   * <p>The maximum number of write operations per second. </p>
   */
  DiskWriteOpsPerSecond?: string;

  /**
   * @public
   * <p>The maximum read throughput operations per second. </p>
   */
  DiskReadBytesPerSecond?: string;

  /**
   * @public
   * <p>The maximum write throughput operations per second. </p>
   */
  DiskWriteBytesPerSecond?: string;
}

/**
 * @public
 * <p>The EBS field that contains a list of EBS metrics that are associated with the current
 *             instance. </p>
 */
export interface EBSResourceUtilization {
  /**
   * @public
   * <p>The maximum number of read operations per second. </p>
   */
  EbsReadOpsPerSecond?: string;

  /**
   * @public
   * <p>The maximum number of write operations per second. </p>
   */
  EbsWriteOpsPerSecond?: string;

  /**
   * @public
   * <p>The maximum size of read operations per second </p>
   */
  EbsReadBytesPerSecond?: string;

  /**
   * @public
   * <p>The maximum size of write operations per second. </p>
   */
  EbsWriteBytesPerSecond?: string;
}

/**
 * @public
 * <p>The network field that contains a list of network metrics that are associated with the
 *             current instance. </p>
 */
export interface NetworkResourceUtilization {
  /**
   * @public
   * <p>The network inbound throughput utilization measured in Bytes per second (Bps). </p>
   */
  NetworkInBytesPerSecond?: string;

  /**
   * @public
   * <p>The network outbound throughput utilization measured in Bytes per second (Bps).
   *         </p>
   */
  NetworkOutBytesPerSecond?: string;

  /**
   * @public
   * <p>The network inbound packets that are measured in packets per second. </p>
   */
  NetworkPacketsInPerSecond?: string;

  /**
   * @public
   * <p>The network outbound packets that are measured in packets per second. </p>
   */
  NetworkPacketsOutPerSecond?: string;
}

/**
 * @public
 * <p>Utilization metrics for the instance. </p>
 */
export interface EC2ResourceUtilization {
  /**
   * @public
   * <p>The maximum observed or expected CPU utilization of the instance.</p>
   */
  MaxCpuUtilizationPercentage?: string;

  /**
   * @public
   * <p>The maximum observed or expected memory utilization of the instance.</p>
   */
  MaxMemoryUtilizationPercentage?: string;

  /**
   * @public
   * <p>The maximum observed or expected storage utilization of the instance. This doesn't
   *             include EBS storage.</p>
   */
  MaxStorageUtilizationPercentage?: string;

  /**
   * @public
   * <p>The EBS field that contains a list of EBS metrics that are associated with the current
   *             instance. </p>
   */
  EBSResourceUtilization?: EBSResourceUtilization;

  /**
   * @public
   * <p>The field that contains a list of disk (local storage) metrics that are associated
   *             with the current instance. </p>
   */
  DiskResourceUtilization?: DiskResourceUtilization;

  /**
   * @public
   * <p>The network field that contains a list of network metrics that are associated with the
   *             current instance. </p>
   */
  NetworkResourceUtilization?: NetworkResourceUtilization;
}

/**
 * @public
 * <p>Resource utilization of current resource. </p>
 */
export interface ResourceUtilization {
  /**
   * @public
   * <p>The utilization of current Amazon EC2 instance. </p>
   */
  EC2ResourceUtilization?: EC2ResourceUtilization;
}

/**
 * @public
 * <p>Context about the current instance.</p>
 */
export interface CurrentInstance {
  /**
   * @public
   * <p>Resource ID of the current instance.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The name that you given an instance. This field shows as blank if you haven't given
   *             the instance a name.</p>
   */
  InstanceName?: string;

  /**
   * @public
   * <p>Cost allocation resource tags that are applied to the instance.</p>
   */
  Tags?: TagValues[];

  /**
   * @public
   * <p>Details about the resource and utilization.</p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>Utilization information of the current instance during the lookback period.</p>
   */
  ResourceUtilization?: ResourceUtilization;

  /**
   * @public
   * <p>The number of hours during the lookback period that's covered by reservations.</p>
   */
  ReservationCoveredHoursInLookbackPeriod?: string;

  /**
   * @public
   * <p>The number of hours during the lookback period that's covered by Savings Plans.</p>
   */
  SavingsPlansCoveredHoursInLookbackPeriod?: string;

  /**
   * @public
   * <p>The number of hours during the lookback period that's billed at On-Demand
   *             rates.</p>
   */
  OnDemandHoursInLookbackPeriod?: string;

  /**
   * @public
   * <p>The total number of hours that the instance ran during the lookback period.</p>
   */
  TotalRunningHoursInLookbackPeriod?: string;

  /**
   * @public
   * <p>The current On-Demand cost of operating this instance on a monthly basis.</p>
   */
  MonthlyCost?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   */
  CurrencyCode?: string;
}

/**
 * @public
 * @enum
 */
export const FindingReasonCode = {
  CPU_OVER_PROVISIONED: "CPU_OVER_PROVISIONED",
  CPU_UNDER_PROVISIONED: "CPU_UNDER_PROVISIONED",
  DISK_IOPS_OVER_PROVISIONED: "DISK_IOPS_OVER_PROVISIONED",
  DISK_IOPS_UNDER_PROVISIONED: "DISK_IOPS_UNDER_PROVISIONED",
  DISK_THROUGHPUT_OVER_PROVISIONED: "DISK_THROUGHPUT_OVER_PROVISIONED",
  DISK_THROUGHPUT_UNDER_PROVISIONED: "DISK_THROUGHPUT_UNDER_PROVISIONED",
  EBS_IOPS_OVER_PROVISIONED: "EBS_IOPS_OVER_PROVISIONED",
  EBS_IOPS_UNDER_PROVISIONED: "EBS_IOPS_UNDER_PROVISIONED",
  EBS_THROUGHPUT_OVER_PROVISIONED: "EBS_THROUGHPUT_OVER_PROVISIONED",
  EBS_THROUGHPUT_UNDER_PROVISIONED: "EBS_THROUGHPUT_UNDER_PROVISIONED",
  MEMORY_OVER_PROVISIONED: "MEMORY_OVER_PROVISIONED",
  MEMORY_UNDER_PROVISIONED: "MEMORY_UNDER_PROVISIONED",
  NETWORK_BANDWIDTH_OVER_PROVISIONED: "NETWORK_BANDWIDTH_OVER_PROVISIONED",
  NETWORK_BANDWIDTH_UNDER_PROVISIONED: "NETWORK_BANDWIDTH_UNDER_PROVISIONED",
  NETWORK_PPS_OVER_PROVISIONED: "NETWORK_PPS_OVER_PROVISIONED",
  NETWORK_PPS_UNDER_PROVISIONED: "NETWORK_PPS_UNDER_PROVISIONED",
} as const;

/**
 * @public
 */
export type FindingReasonCode = (typeof FindingReasonCode)[keyof typeof FindingReasonCode];

/**
 * @public
 * @enum
 */
export const PlatformDifference = {
  HYPERVISOR: "HYPERVISOR",
  INSTANCE_STORE_AVAILABILITY: "INSTANCE_STORE_AVAILABILITY",
  NETWORK_INTERFACE: "NETWORK_INTERFACE",
  STORAGE_INTERFACE: "STORAGE_INTERFACE",
  VIRTUALIZATION_TYPE: "VIRTUALIZATION_TYPE",
} as const;

/**
 * @public
 */
export type PlatformDifference = (typeof PlatformDifference)[keyof typeof PlatformDifference];

/**
 * @public
 * <p>Details on recommended instance.</p>
 */
export interface TargetInstance {
  /**
   * @public
   * <p>The expected cost to operate this instance type on a monthly basis.</p>
   */
  EstimatedMonthlyCost?: string;

  /**
   * @public
   * <p>The estimated savings that result from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>Determines whether this recommendation is the defaulted Amazon Web Services
   *             recommendation.</p>
   */
  DefaultTargetInstance?: boolean;

  /**
   * @public
   * <p>Details on the target instance type. </p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * @public
   * <p>The expected utilization metrics for target instance type.</p>
   */
  ExpectedResourceUtilization?: ResourceUtilization;

  /**
   * @public
   * <p>Explains the actions that you might need to take to successfully migrate your
   *             workloads from the current instance type to the recommended instance type. </p>
   */
  PlatformDifferences?: PlatformDifference[];
}

/**
 * @public
 * <p>Details for the modification recommendation.</p>
 */
export interface ModifyRecommendationDetail {
  /**
   * @public
   * <p>Determines whether this instance type is the Amazon Web Services default
   *             recommendation.</p>
   */
  TargetInstances?: TargetInstance[];
}

/**
 * @public
 * @enum
 */
export const RightsizingType = {
  MODIFY: "MODIFY",
  TERMINATE: "TERMINATE",
} as const;

/**
 * @public
 */
export type RightsizingType = (typeof RightsizingType)[keyof typeof RightsizingType];

/**
 * @public
 * <p>Details on termination recommendation. </p>
 */
export interface TerminateRecommendationDetail {
  /**
   * @public
   * <p>The estimated savings that result from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to calculate the costs for this
   *             instance.</p>
   */
  CurrencyCode?: string;
}

/**
 * @public
 * <p>Recommendations to rightsize resources.</p>
 */
export interface RightsizingRecommendation {
  /**
   * @public
   * <p>The account that this recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Context
   *             regarding the current instance.</p>
   */
  CurrentInstance?: CurrentInstance;

  /**
   * @public
   * <p>A recommendation to either terminate or modify the resource.</p>
   */
  RightsizingType?: RightsizingType;

  /**
   * @public
   * <p>The details for the modification recommendations. </p>
   */
  ModifyRecommendationDetail?: ModifyRecommendationDetail;

  /**
   * @public
   * <p>The details for termination recommendations.</p>
   */
  TerminateRecommendationDetail?: TerminateRecommendationDetail;

  /**
   * @public
   * <p>The list of possible reasons why the recommendation is generated, such as under- or
   *             over-utilization of specific metrics (for example, CPU, Memory, Network). </p>
   */
  FindingReasonCodes?: FindingReasonCode[];
}

/**
 * @public
 * <p>The summary of rightsizing recommendations </p>
 */
export interface RightsizingRecommendationSummary {
  /**
   * @public
   * <p>The total number of instance recommendations.</p>
   */
  TotalRecommendationCount?: string;

  /**
   * @public
   * <p>The estimated total savings resulting from modifications, on a monthly basis.</p>
   */
  EstimatedTotalMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to calculate the savings.</p>
   */
  SavingsCurrencyCode?: string;

  /**
   * @public
   * <p> The savings percentage based on the recommended modifications. It's relative to the
   *             total On-Demand costs that are associated with these instances.</p>
   */
  SavingsPercentage?: string;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationResponse {
  /**
   * @public
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: RightsizingRecommendationMetadata;

  /**
   * @public
   * <p>Summary of this recommendation set.</p>
   */
  Summary?: RightsizingRecommendationSummary;

  /**
   * @public
   * <p>Recommendations to rightsize resources.</p>
   */
  RightsizingRecommendations?: RightsizingRecommendation[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>You can use Configuration to customize recommendations across two attributes. You can
   *       choose to view recommendations for instances within the same instance families or across
   *       different instance families. You can also choose to view your estimated savings that are
   *       associated with recommendations with consideration of existing Savings Plans or RI benefits,
   *       or neither. </p>
   */
  Configuration?: RightsizingRecommendationConfiguration;
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsRequest {
  /**
   * @public
   * <p>The ID that is associated with the Savings Plan recommendation.</p>
   */
  RecommendationDetailId: string | undefined;
}

/**
 * @public
 * <p>Contains the hourly metrics for the given recommendation over the lookback period.
 *         </p>
 */
export interface RecommendationDetailHourlyMetrics {
  /**
   * @public
   * <p>The period of time that you want the usage and costs for.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plan, over the length of the lookback period.</p>
   */
  EstimatedOnDemandCost?: string;

  /**
   * @public
   * <p>The current amount of Savings Plans eligible usage that the Savings Plan
   *             covered.</p>
   */
  CurrentCoverage?: string;

  /**
   * @public
   * <p>The estimated coverage amount based on the recommended Savings Plan.</p>
   */
  EstimatedCoverage?: string;

  /**
   * @public
   * <p>The estimated utilization for the recommended Savings Plan.</p>
   */
  EstimatedNewCommitmentUtilization?: string;
}

/**
 * @public
 * @enum
 */
export const SupportedSavingsPlansType = {
  COMPUTE_SP: "COMPUTE_SP",
  EC2_INSTANCE_SP: "EC2_INSTANCE_SP",
  SAGEMAKER_SP: "SAGEMAKER_SP",
} as const;

/**
 * @public
 */
export type SupportedSavingsPlansType = (typeof SupportedSavingsPlansType)[keyof typeof SupportedSavingsPlansType];

/**
 * @public
 * <p>The details and metrics for the given recommendation.</p>
 */
export interface RecommendationDetailData {
  /**
   * @public
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *             calculates recommendations including the management account and member accounts if the
   *             value is set to PAYER. If the value is LINKED, recommendations are calculated for
   *             individual member accounts only.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>How many days of previous usage that Amazon Web Services considers when making this
   *             recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays;

  /**
   * @public
   * <p>The requested Savings Plan recommendation type.</p>
   */
  SavingsPlansType?: SupportedSavingsPlansType;

  /**
   * @public
   * <p>The term of the commitment in years.</p>
   */
  TermInYears?: TermInYears;

  /**
   * @public
   * <p>The payment option for the commitment (for example, All Upfront or No Upfront).</p>
   */
  PaymentOption?: PaymentOption;

  /**
   * @public
   * <p>The AccountID that the recommendation is generated for.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to generate the recommendation and
   *             present potential savings.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The instance family of the recommended Savings Plan.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The region the recommendation is generated for.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The unique ID that's used to distinguish Savings Plans from one another.</p>
   */
  OfferingId?: string;

  /**
   * @public
   * <p>The period of time that you want the usage and costs for.</p>
   */
  GenerationTimestamp?: string;

  /**
   * @public
   * <p>The period of time that you want the usage and costs for.</p>
   */
  LatestUsageTimestamp?: string;

  /**
   * @public
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentAverageHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentMaximumHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentMinimumHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>The estimated utilization of the recommended Savings Plan.</p>
   */
  EstimatedAverageUtilization?: string;

  /**
   * @public
   * <p>The estimated monthly savings amount based on the recommended Savings Plan.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plan, over the length of the lookback period.</p>
   */
  EstimatedOnDemandCost?: string;

  /**
   * @public
   * <p>The estimated On-Demand costs you expect with no additional commitment, based on your
   *             usage of the selected time period and the Savings Plan you own.</p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;

  /**
   * @public
   * <p>The estimated return on investment that's based on the recommended Savings Plan that
   *             you purchased. This is calculated as estimatedSavingsAmount/estimatedSPCost*100.</p>
   */
  EstimatedROI?: string;

  /**
   * @public
   * <p>The cost of the recommended Savings Plan over the length of the lookback
   *             period.</p>
   */
  EstimatedSPCost?: string;

  /**
   * @public
   * <p>The estimated savings amount that's based on the recommended Savings Plan over the
   *             length of the lookback period.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * @public
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand
   *             usage over the lookback period.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * @public
   * <p>The existing hourly commitment for the Savings Plan type.</p>
   */
  ExistingHourlyCommitment?: string;

  /**
   * @public
   * <p>The recommended hourly commitment level for the Savings Plan type and the
   *             configuration that's based on the usage during the lookback period.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * @public
   * <p>The upfront cost of the recommended Savings Plan, based on the selected payment
   *             option.</p>
   */
  UpfrontCost?: string;

  /**
   * @public
   * <p>The average value of hourly coverage over the lookback period.</p>
   */
  CurrentAverageCoverage?: string;

  /**
   * @public
   * <p>The estimated coverage of the recommended Savings Plan.</p>
   */
  EstimatedAverageCoverage?: string;

  /**
   * @public
   * <p>The related hourly cost, coverage, and utilization metrics over the lookback
   *             period.</p>
   */
  MetricsOverLookbackPeriod?: RecommendationDetailHourlyMetrics[];
}

/**
 * @public
 */
export interface GetSavingsPlanPurchaseRecommendationDetailsResponse {
  /**
   * @public
   * <p>The ID that is associated with the Savings Plan recommendation.</p>
   */
  RecommendationDetailId?: string;

  /**
   * @public
   * <p>Contains detailed information about a specific Savings Plan recommendation.</p>
   */
  RecommendationDetailData?: RecommendationDetailData;
}

/**
 * @public
 * <p>Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and
 *             total Savings Plans costs for an account.</p>
 */
export interface SavingsPlansCoverageData {
  /**
   * @public
   * <p>The amount of your Amazon Web Services usage that's covered by a Savings Plans.</p>
   */
  SpendCoveredBySavingsPlans?: string;

  /**
   * @public
   * <p>The cost of your Amazon Web Services usage at the public On-Demand rate.</p>
   */
  OnDemandCost?: string;

  /**
   * @public
   * <p>The total cost of your Amazon Web Services usage, regardless of your purchase
   *             option.</p>
   */
  TotalCost?: string;

  /**
   * @public
   * <p>The percentage of your existing Savings Plans covered usage, divided by all of your
   *             eligible Savings Plans usage in an account (or set of accounts).</p>
   */
  CoveragePercentage?: string;
}

/**
 * @public
 * <p>The amount of Savings Plans eligible usage that's covered by Savings Plans. All
 *             calculations consider the On-Demand equivalent of your Savings Plans usage.</p>
 */
export interface SavingsPlansCoverage {
  /**
   * @public
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The amount of Savings Plans eligible usage that the Savings Plans covered.</p>
   */
  Coverage?: SavingsPlansCoverageData;

  /**
   * @public
   * <p>The time period of the request. </p>
   */
  TimePeriod?: DateInterval;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageResponse {
  /**
   * @public
   * <p>The amount of spend that your Savings Plans covered.</p>
   */
  SavingsPlansCoverages: SavingsPlansCoverage[] | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Metadata about your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationMetadata {
  /**
   * @public
   * <p>The unique identifier for the recommendation set.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The timestamp that shows when the recommendations were generated.</p>
   */
  GenerationTimestamp?: string;

  /**
   * @public
   * <p>Additional metadata that might be applicable to the recommendation.</p>
   */
  AdditionalMetadata?: string;
}

/**
 * @public
 * <p>The attribute details on a specific Savings Plan.</p>
 */
export interface SavingsPlansDetails {
  /**
   * @public
   * <p>A collection of Amazon Web Services resources in a geographic area. Each Amazon Web Services Region is isolated and independent of the other Regions.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>A group of instance types that Savings Plans applies to.</p>
   */
  InstanceFamily?: string;

  /**
   * @public
   * <p>The unique ID that's used to distinguish Savings Plans from one another.</p>
   */
  OfferingId?: string;
}

/**
 * @public
 * <p>Details for your recommended Savings Plans.</p>
 */
export interface SavingsPlansPurchaseRecommendationDetail {
  /**
   * @public
   * <p>Details for your recommended Savings Plans.</p>
   */
  SavingsPlansDetails?: SavingsPlansDetails;

  /**
   * @public
   * <p>The <code>AccountID</code> the recommendation is generated for.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The upfront cost of the recommended Savings Plans, based on the selected payment
   *             option.</p>
   */
  UpfrontCost?: string;

  /**
   * @public
   * <p>The estimated return on investment that's based on the recommended Savings Plans that
   *             you purchased. This is calculated as <code>estimatedSavingsAmount</code>/
   *                 <code>estimatedSPCost</code>*100.</p>
   */
  EstimatedROI?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to generate the recommendations and
   *             present potential savings.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The cost of the recommended Savings Plans over the length of the lookback
   *             period.</p>
   */
  EstimatedSPCost?: string;

  /**
   * @public
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings
   *             Plans, over the length of the lookback period.</p>
   */
  EstimatedOnDemandCost?: string;

  /**
   * @public
   * <p> The estimated On-Demand costs you expect with no additional commitment, based on your
   *             usage of the selected time period and the Savings Plans you own. </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;

  /**
   * @public
   * <p>The estimated savings amount that's based on the recommended Savings Plans over the
   *             length of the lookback period.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * @public
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand
   *             usage over the lookback period.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * @public
   * <p>The recommended hourly commitment level for the Savings Plans type and the
   *             configuration that's based on the usage during the lookback period.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * @public
   * <p>The estimated utilization of the recommended Savings Plans.</p>
   */
  EstimatedAverageUtilization?: string;

  /**
   * @public
   * <p>The estimated monthly savings amount based on the recommended Savings Plans.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentMinimumHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentMaximumHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable
   *             usage type.</p>
   */
  CurrentAverageHourlyOnDemandSpend?: string;

  /**
   * @public
   * <p>Contains detailed information about a specific Savings Plan recommendation.</p>
   */
  RecommendationDetailId?: string;
}

/**
 * @public
 * <p>Summary metrics for your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationSummary {
  /**
   * @public
   * <p>The estimated return on investment that's based on the recommended Savings Plans and
   *             estimated savings.</p>
   */
  EstimatedROI?: string;

  /**
   * @public
   * <p>The currency code that Amazon Web Services used to generate the recommendations and
   *             present potential savings.</p>
   */
  CurrencyCode?: string;

  /**
   * @public
   * <p>The estimated total cost of the usage after purchasing the recommended Savings Plans.
   *             This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand
   *             usage.</p>
   */
  EstimatedTotalCost?: string;

  /**
   * @public
   * <p>The current total on demand spend of the applicable usage types over the lookback
   *             period.</p>
   */
  CurrentOnDemandSpend?: string;

  /**
   * @public
   * <p>The estimated total savings over the lookback period, based on the purchase of the
   *             recommended Savings Plans.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * @public
   * <p>The aggregate number of Savings Plans recommendations that exist for your
   *             account.</p>
   */
  TotalRecommendationCount?: string;

  /**
   * @public
   * <p>The recommended Savings Plans cost on a daily (24 hourly) basis.</p>
   */
  DailyCommitmentToPurchase?: string;

  /**
   * @public
   * <p>The recommended hourly commitment that's based on the recommendation
   *             parameters.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * @public
   * <p>The estimated savings relative to the total cost of On-Demand usage, over the lookback
   *             period. This is calculated as <code>estimatedSavingsAmount</code>/
   *                 <code>CurrentOnDemandSpend</code>*100.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * @public
   * <p>The estimated monthly savings amount that's based on the recommended Savings Plans
   *             purchase.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * @public
   * <p>The estimated On-Demand costs you expect with no additional commitment. It's based on
   *             your usage of the selected time period and the Savings Plans you own. </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;
}

/**
 * @public
 * <p>Contains your request parameters, Savings Plan Recommendations Summary, and
 *             Details.</p>
 */
export interface SavingsPlansPurchaseRecommendation {
  /**
   * @public
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *             calculates recommendations that include the management account and member accounts if
   *             the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>,
   *             recommendations are calculated for individual member accounts only.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>The requested Savings Plans recommendation type.</p>
   */
  SavingsPlansType?: SupportedSavingsPlansType;

  /**
   * @public
   * <p>The Savings Plans recommendation term in years. It's used to generate the
   *             recommendation.</p>
   */
  TermInYears?: TermInYears;

  /**
   * @public
   * <p>The payment option that's used to generate the recommendation.</p>
   */
  PaymentOption?: PaymentOption;

  /**
   * @public
   * <p>The lookback period in days that's used to generate the recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays;

  /**
   * @public
   * <p>Details for the Savings Plans that we recommend that you purchase to cover existing
   *             Savings Plans eligible workloads.</p>
   */
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[];

  /**
   * @public
   * <p>Summary metrics for your Savings Plans Recommendations. </p>
   */
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationResponse {
  /**
   * @public
   * <p>Information that regards this specific recommendation set.</p>
   */
  Metadata?: SavingsPlansPurchaseRecommendationMetadata;

  /**
   * @public
   * <p>Contains your request parameters, Savings Plan Recommendations Summary, and
   *       Details.</p>
   */
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;

  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>The amortized amount of Savings Plans purchased in a specific account during a
 *             specific time interval.</p>
 */
export interface SavingsPlansAmortizedCommitment {
  /**
   * @public
   * <p>The amortized amount of your Savings Plans commitment that was purchased with either a
   *                 <code>Partial</code> or a <code>NoUpfront</code>.</p>
   */
  AmortizedRecurringCommitment?: string;

  /**
   * @public
   * <p>The amortized amount of your Savings Plans commitment that was purchased with an
   *                 <code>Upfront</code> or <code>PartialUpfront</code> Savings Plans.</p>
   */
  AmortizedUpfrontCommitment?: string;

  /**
   * @public
   * <p>The total amortized amount of your Savings Plans commitment, regardless of your
   *             Savings Plans purchase method. </p>
   */
  TotalAmortizedCommitment?: string;
}

/**
 * @public
 * <p>The amount of savings that you're accumulating, against the public On-Demand rate of
 *             the usage accrued in an account.</p>
 */
export interface SavingsPlansSavings {
  /**
   * @public
   * <p>The savings amount that you're accumulating for the usage that's covered by a Savings
   *             Plans, when compared to the On-Demand equivalent of the same usage.</p>
   */
  NetSavings?: string;

  /**
   * @public
   * <p>How much the amount that the usage would have cost if it was accrued at the On-Demand
   *             rate.</p>
   */
  OnDemandCostEquivalent?: string;
}

/**
 * @public
 * <p>The measurement of how well you're using your existing Savings Plans.</p>
 */
export interface SavingsPlansUtilization {
  /**
   * @public
   * <p>The total amount of Savings Plans commitment that's been purchased in an account (or
   *             set of accounts).</p>
   */
  TotalCommitment?: string;

  /**
   * @public
   * <p>The amount of your Savings Plans commitment that was consumed from Savings Plans
   *             eligible usage in a specific period.</p>
   */
  UsedCommitment?: string;

  /**
   * @public
   * <p>The amount of your Savings Plans commitment that wasn't consumed from Savings Plans
   *             eligible usage in a specific period.</p>
   */
  UnusedCommitment?: string;

  /**
   * @public
   * <p>The amount of <code>UsedCommitment</code> divided by the <code>TotalCommitment</code>
   *             for your Savings Plans.</p>
   */
  UtilizationPercentage?: string;
}

/**
 * @public
 * <p>The amount of Savings Plans utilization (in hours).</p>
 */
export interface SavingsPlansUtilizationByTime {
  /**
   * @public
   * <p>The time period of the request. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * @public
   * <p>The amount that's saved by using existing Savings Plans. Savings returns both net
   *             savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the
   *             Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * @public
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the
   *             upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

/**
 * @public
 * <p>The aggregated utilization metrics for your Savings Plans usage.</p>
 */
export interface SavingsPlansUtilizationAggregates {
  /**
   * @public
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * @public
   * <p>The amount that's saved by using existing Savings Plans. Savings returns both net
   *             savings from Savings Plans and also the <code>onDemandCostEquivalent</code> of the
   *             Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * @public
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the
   *             upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationResponse {
  /**
   * @public
   * <p>The amount of cost/commitment that you used your Savings Plans. You can use it to specify
   *       date ranges.</p>
   */
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[];

  /**
   * @public
   * <p>The total amount of cost/commitment that you used your Savings Plans, regardless of date
   *       ranges.</p>
   */
  Total: SavingsPlansUtilizationAggregates | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsPlansDataType = {
  AMORTIZED_COMMITMENT: "AMORTIZED_COMMITMENT",
  ATTRIBUTES: "ATTRIBUTES",
  SAVINGS: "SAVINGS",
  UTILIZATION: "UTILIZATION",
} as const;

/**
 * @public
 */
export type SavingsPlansDataType = (typeof SavingsPlansDataType)[keyof typeof SavingsPlansDataType];

/**
 * @public
 * <p>A single daily or monthly Savings Plans utilization rate and details for your account.
 *             A management account in an organization have access to member accounts. You can use
 *                 <code>GetDimensionValues</code> to determine the possible dimension values. </p>
 */
export interface SavingsPlansUtilizationDetail {
  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) for a particular Savings Plan.</p>
   */
  SavingsPlanArn?: string;

  /**
   * @public
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads
   *             that are Savings Plans eligible.</p>
   */
  Utilization?: SavingsPlansUtilization;

  /**
   * @public
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings
   *             from savings plans and also the <code>onDemandCostEquivalent</code> of the Savings Plans
   *             when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * @public
   * <p>The total amortized commitment for a Savings Plans. Includes the sum of the upfront
   *             and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsResponse {
  /**
   * @public
   * <p>Retrieves a single daily or monthly Savings Plans utilization rate and details for your
   *       account.</p>
   */
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[] | undefined;

  /**
   * @public
   * <p>The total Savings Plans utilization, regardless of time period.</p>
   */
  Total?: SavingsPlansUtilizationAggregates;

  /**
   * @public
   * <p>The time period of the request. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * @public
   * <p>The token for the next set of retrievable results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The tags that match your request.</p>
   */
  Tags: string[] | undefined;

  /**
   * @public
   * <p>The number of query results that Amazon Web Services returns at a time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * @public
   * <p>The total number of query results.</p>
   */
  TotalSize: number | undefined;
}

/**
 * @public
 */
export interface GetUsageForecastResponse {
  /**
   * @public
   * <p>How much you're forecasted to use over the forecast period.</p>
   */
  Total?: MetricValue;

  /**
   * @public
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a
   *       list of days. For <code>MONTHLY</code> forecasts, this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];
}

/**
 * @public
 * <p>Cost Explorer was unable to identify the usage unit. Provide
 *                 <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units,
 *             for example: <code>hours</code>.</p>
 */
export class UnresolvableUsageUnitException extends __BaseException {
  readonly name: "UnresolvableUsageUnitException" = "UnresolvableUsageUnitException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnresolvableUsageUnitException, __BaseException>) {
    super({
      name: "UnresolvableUsageUnitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnresolvableUsageUnitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const CostAllocationTagStatus = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type CostAllocationTagStatus = (typeof CostAllocationTagStatus)[keyof typeof CostAllocationTagStatus];

/**
 * @public
 * @enum
 */
export const CostAllocationTagType = {
  AWS_GENERATED: "AWSGenerated",
  USER_DEFINED: "UserDefined",
} as const;

/**
 * @public
 */
export type CostAllocationTagType = (typeof CostAllocationTagType)[keyof typeof CostAllocationTagType];

/**
 * @public
 */
export interface ListCostAllocationTagsRequest {
  /**
   * @public
   * <p>The status of cost allocation tag keys that are returned for this request. </p>
   */
  Status?: CostAllocationTagStatus;

  /**
   * @public
   * <p>The list of cost allocation tag keys that are returned for this request. </p>
   */
  TagKeys?: string[];

  /**
   * @public
   * <p>The type of <code>CostAllocationTag</code> object that are returned for this request. The
   *         <code>AWSGenerated</code> type tags are tags that Amazon Web Services defines and applies to
   *       support Amazon Web Services resources for cost allocation purposes. The
   *         <code>UserDefined</code> type tags are tags that you define, create, and apply to resources.
   *     </p>
   */
  Type?: CostAllocationTagType;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that are returned for this request. By default, the request
   *       returns 100 results. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The cost allocation tag structure. This includes detailed metadata for the
 *                 <code>CostAllocationTag</code> object. </p>
 */
export interface CostAllocationTag {
  /**
   * @public
   * <p>The key for the cost allocation tag. </p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>The type of cost allocation tag. You can use <code>AWSGenerated</code> or
   *                 <code>UserDefined</code> type tags. <code>AWSGenerated</code> type tags are tags
   *             that Amazon Web Services defines and applies to support Amazon Web Services resources for
   *             cost allocation purposes. <code>UserDefined</code> type tags are tags that you define,
   *             create, and apply to resources. </p>
   */
  Type: CostAllocationTagType | undefined;

  /**
   * @public
   * <p>The status of a cost allocation tag. </p>
   */
  Status: CostAllocationTagStatus | undefined;

  /**
   * @public
   * <p>The last date that the tag was either activated or deactivated.</p>
   */
  LastUpdatedDate?: string;

  /**
   * @public
   * <p>The last month that the tag was used on an Amazon Web Services resource.</p>
   */
  LastUsedDate?: string;
}

/**
 * @public
 */
export interface ListCostAllocationTagsResponse {
  /**
   * @public
   * <p>A list of cost allocation tags that includes the detailed metadata for each one. </p>
   */
  CostAllocationTags?: CostAllocationTag[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsRequest {
  /**
   * @public
   * <p>The date when the Cost Category was effective. </p>
   */
  EffectiveOn?: string;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of entries a paginated response contains. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A reference to a Cost Category containing only enough information to identify the Cost
 *             Category.</p>
 *          <p>You can use this information to retrieve the full Cost Category information using
 *                 <code>DescribeCostCategory</code>.</p>
 */
export interface CostCategoryReference {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn?: string;

  /**
   * @public
   * <p>The unique name of the Cost Category.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Cost Category's effective start date.</p>
   */
  EffectiveStart?: string;

  /**
   * @public
   * <p>The Cost Category's effective end date.</p>
   */
  EffectiveEnd?: string;

  /**
   * @public
   * <p>The number of rules that are associated with a specific Cost Category. </p>
   */
  NumberOfRules?: number;

  /**
   * @public
   * <p>The list of processing statuses for Cost Management products for a specific cost
   *             category. </p>
   */
  ProcessingStatus?: CostCategoryProcessingStatus[];

  /**
   * @public
   * <p>A list of unique cost category values in a specific cost category. </p>
   */
  Values?: string[];

  /**
   * @public
   * <p>The
   *             default value for the cost category.</p>
   */
  DefaultValue?: string;
}

/**
 * @public
 */
export interface ListCostCategoryDefinitionsResponse {
  /**
   * @public
   * <p>A reference to a Cost Category that contains enough information to identify the Cost
   *       Category. </p>
   */
  CostCategoryReferences?: CostCategoryReference[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const GenerationStatus = {
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type GenerationStatus = (typeof GenerationStatus)[keyof typeof GenerationStatus];

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationRequest {
  /**
   * @public
   * <p>The status of the recommendation generation.</p>
   */
  GenerationStatus?: GenerationStatus;

  /**
   * @public
   * <p>The IDs for each specific recommendation.</p>
   */
  RecommendationIds?: string[];

  /**
   * @public
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>The summary of the Savings Plans recommendation generation.</p>
 */
export interface GenerationSummary {
  /**
   * @public
   * <p>Indicates the ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>Indicates whether the recommendation generation succeeded, is processing, or
   *             failed.</p>
   */
  GenerationStatus?: GenerationStatus;

  /**
   * @public
   * <p>Indicates the start time of the recommendation generation.</p>
   */
  GenerationStartedTime?: string;

  /**
   * @public
   * <p>Indicates the completion time of the recommendation generation.</p>
   */
  GenerationCompletionTime?: string;

  /**
   * @public
   * <p>Indicates the estimated time for when the recommendation generation will
   *             complete.</p>
   */
  EstimatedCompletionTime?: string;
}

/**
 * @public
 */
export interface ListSavingsPlansPurchaseRecommendationGenerationResponse {
  /**
   * @public
   * <p>The list of historical recommendation generations.</p>
   */
  GenerationSummaryList?: GenerationSummary[];

  /**
   * @public
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tag key value pairs that are associated with the resource. </p>
   */
  ResourceTags?: ResourceTag[];
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackRequest {
  /**
   * @public
   * <p>A cost anomaly ID. </p>
   */
  AnomalyId: string | undefined;

  /**
   * @public
   * <p>Describes whether the cost anomaly was a planned activity or you considered it an anomaly.
   *     </p>
   */
  Feedback: AnomalyFeedbackType | undefined;
}

/**
 * @public
 */
export interface ProvideAnomalyFeedbackResponse {
  /**
   * @public
   * <p>The ID of the modified cost anomaly. </p>
   */
  AnomalyId: string | undefined;
}

/**
 * @public
 * <p>A request to generate a recommendation is already in progress.</p>
 */
export class GenerationExistsException extends __BaseException {
  readonly name: "GenerationExistsException" = "GenerationExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GenerationExistsException, __BaseException>) {
    super({
      name: "GenerationExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GenerationExistsException.prototype);
    this.Message = opts.Message;
  }
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
   * @public
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * @public
   * <p>The start time of the recommendation generation.</p>
   */
  GenerationStartedTime?: string;

  /**
   * @public
   * <p>The estimated time for when the recommendation generation will complete.</p>
   */
  EstimatedCompletionTime?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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
   */
  ResourceTags: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>Can occur if you specify a number of tags for a resource greater than the maximum 50
 *             user tags per resource.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html">ResourceTag</a>.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tag keys associated with tags that need to be removed from the resource. If you
   *       specify a tag key that doesn't exist, it's ignored. Although the maximum number of array
   *       members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.
   *     </p>
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
   * @public
   * <p>Cost anomaly monitor Amazon Resource Names (ARNs). </p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
   * <p>The new name for the cost anomaly monitor. </p>
   */
  MonitorName?: string;
}

/**
 * @public
 */
export interface UpdateAnomalyMonitorResponse {
  /**
   * @public
   * <p>A cost anomaly monitor ARN. </p>
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionResponse {
  /**
   * @public
   * <p>A cost anomaly subscription ARN. </p>
   */
  SubscriptionArn: string | undefined;
}

/**
 * @public
 * <p>The cost allocation tag status. The status of a key can either be active or inactive.
 *         </p>
 */
export interface CostAllocationTagStatusEntry {
  /**
   * @public
   * <p>The key for the cost allocation tag. </p>
   */
  TagKey: string | undefined;

  /**
   * @public
   * <p>The status of a cost allocation tag. </p>
   */
  Status: CostAllocationTagStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusRequest {
  /**
   * @public
   * <p>The list of <code>CostAllocationTagStatusEntry</code> objects that are used to update cost
   *       allocation tags status for this request. </p>
   */
  CostAllocationTagsStatus: CostAllocationTagStatusEntry[] | undefined;
}

/**
 * @public
 * <p>Gives a detailed description of the result of an action. It's on each cost allocation
 *             tag entry in the request. </p>
 */
export interface UpdateCostAllocationTagsStatusError {
  /**
   * @public
   * <p>The key for the cost allocation tag. </p>
   */
  TagKey?: string;

  /**
   * @public
   * <p>An error code representing why the action failed on this entry. </p>
   */
  Code?: string;

  /**
   * @public
   * <p>A message explaining why the action failed on this entry. </p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface UpdateCostAllocationTagsStatusResponse {
  /**
   * @public
   * <p>A list of <code>UpdateCostAllocationTagsStatusError</code> objects with error details
   *       about each cost allocation tag that can't be updated. If there's no failure, an empty array
   *       returns. </p>
   */
  Errors?: UpdateCostAllocationTagsStatusError[];
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionResponse {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn?: string;

  /**
   * @public
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month).</p>
   */
  EffectiveStart?: string;
}

/**
 * @public
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
 */
export interface Expression {
  /**
   * @public
   * <p>Return results that match either <code>Dimension</code> object.</p>
   */
  Or?: Expression[];

  /**
   * @public
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   */
  And?: Expression[];

  /**
   * @public
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   */
  Not?: Expression;

  /**
   * @public
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   */
  Dimensions?: DimensionValues;

  /**
   * @public
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   */
  Tags?: TagValues;

  /**
   * @public
   * <p>The filter that's based on <code>CostCategory</code> values.</p>
   */
  CostCategories?: CostCategoryValues;
}

/**
 * @public
 * <p>This object continuously inspects your account's cost data for anomalies. It's based
 *             on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists
 *             of detailed metadata and the current status of the monitor object. </p>
 */
export interface AnomalyMonitor {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) value. </p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>The name of the monitor. </p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The date when the monitor was created. </p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The date when the monitor was last updated. </p>
   */
  LastUpdatedDate?: string;

  /**
   * @public
   * <p>The date when the monitor last evaluated for anomalies. </p>
   */
  LastEvaluatedDate?: string;

  /**
   * @public
   * <p>The possible type values. </p>
   */
  MonitorType: MonitorType | undefined;

  /**
   * @public
   * <p>The dimensions to evaluate. </p>
   */
  MonitorDimension?: MonitorDimension;

  /**
   * @public
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
   */
  MonitorSpecification?: Expression;

  /**
   * @public
   * <p>The value for evaluated dimensions. </p>
   */
  DimensionalValueCount?: number;
}

/**
 * @public
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
 */
export interface AnomalySubscription {
  /**
   * @public
   * <p>The <code>AnomalySubscription</code> Amazon Resource Name (ARN). </p>
   */
  SubscriptionArn?: string;

  /**
   * @public
   * <p>Your unique account identifier. </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>A list of cost anomaly monitors. </p>
   */
  MonitorArnList: string[] | undefined;

  /**
   * @public
   * <p>A list of subscribers to notify. </p>
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>(deprecated)</p>
   *          <p>An absolute dollar value that must be exceeded by the anomaly's total impact (see
   *                 <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html">Impact</a> for
   *             more details) for an anomaly notification to be generated.</p>
   *          <p>This field has been deprecated. To specify a threshold, use ThresholdExpression.
   *             Continued use of Threshold will be treated as shorthand syntax for a
   *             ThresholdExpression.</p>
   *          <p>One of Threshold or ThresholdExpression is required for this resource. You cannot
   *             specify both.</p>
   */
  Threshold?: number;

  /**
   * @public
   * <p>The frequency that anomaly notifications are sent. Notifications are sent either over
   *             email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more
   *             information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html">Creating an Amazon SNS topic for
   *                 anomaly notifications</a>.</p>
   */
  Frequency: AnomalySubscriptionFrequency | undefined;

  /**
   * @public
   * <p>The name for the subscription. </p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
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
   */
  ThresholdExpression?: Expression;
}

/**
 * @public
 * <p>Rules are processed in order. If there are multiple rules that match the line item,
 *             then the first rule to match is used to determine that Cost Category value.</p>
 */
export interface CostCategoryRule {
  /**
   * @public
   * <p>The
   *             default value for the cost category.</p>
   */
  Value?: string;

  /**
   * @public
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
   */
  Rule?: Expression;

  /**
   * @public
   * <p>The value the line item is categorized as if the line item contains the matched
   *             dimension.</p>
   */
  InheritedValue?: CostCategoryInheritedValueDimension;

  /**
   * @public
   * <p>You can define the <code>CostCategoryRule</code> rule type as either
   *                 <code>REGULAR</code> or <code>INHERITED_VALUE</code>. The
   *                 <code>INHERITED_VALUE</code> rule type adds the flexibility to define a rule that
   *             dynamically inherits the cost category value. This value is from the dimension value
   *             that's defined by <code>CostCategoryInheritedValueDimension</code>. For example, suppose
   *             that you want to costs to be dynamically grouped based on the value of a specific tag
   *             key. First, choose an inherited value rule type, and then choose the tag dimension and
   *             specify the tag key to use.</p>
   */
  Type?: CostCategoryRuleType;
}

/**
 * @public
 */
export interface GetCostAndUsageRequest {
  /**
   * @public
   * <p>Sets the start date and end date for retrieving Amazon Web Services costs. The start
   *       date is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>Sets the Amazon Web Services cost granularity to <code>MONTHLY</code> or
   *         <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the
   *       response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or
   *         <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity: Granularity | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  Metrics: string[] | undefined;

  /**
   * @public
   * <p>You can group Amazon Web Services costs using up to two different groups, either
   *       dimensions, tag keys, cost categories, or any two group by types.</p>
   *          <p>Valid values for the <code>DIMENSION</code> type are <code>AZ</code>,
   *         <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>INVOICING_ENTITY</code>,
   *         <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>,
   *         <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TENANCY</code>,
   *         <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p>
   *          <p>When you group by the <code>TAG</code> type and include a valid tag key, you get all
   *       tag values, including empty strings.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetCostAndUsageWithResourcesRequest {
  /**
   * @public
   * <p>Sets the start and end dates for retrieving Amazon Web Services costs. The range must
   *       be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date
   *       is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>Sets the Amazon Web Services cost granularity to <code>MONTHLY</code>,
   *         <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the
   *       response object doesn't include the <code>Granularity</code>, <code>MONTHLY</code>,
   *         <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity: Granularity | undefined;

  /**
   * @public
   * <p>Filters Amazon Web Services costs by different dimensions. For example, you can specify
   *         <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated
   *       with that account's usage of that service. You can nest <code>Expression</code> objects to
   *       define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   *          <p>The <code>GetCostAndUsageWithResources</code> operation requires that you either group
   *       by or filter by a <code>ResourceId</code>. It requires the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>
   *             <code>"SERVICE = Amazon Elastic Compute Cloud - Compute"</code> in the filter.</p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are
   *         <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>
   *          <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and
   *         <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and
   *         <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and
   *         <code>CASE_SENSITIVE</code>.</p>
   */
  Filter: Expression | undefined;

  /**
   * @public
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
   */
  Metrics?: string[];

  /**
   * @public
   * <p>You can group Amazon Web Services costs using up to two different groups:
   *         <code>DIMENSION</code>, <code>TAG</code>, <code>COST_CATEGORY</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetCostCategoriesRequest {
  /**
   * @public
   * <p>The value that you want to search the filter values for.</p>
   *          <p>If you don't specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to
   *       filter Cost Category names that match the <code>SearchString</code> pattern. If you specify a
   *         <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category
   *       values that match the <code>SearchString</code> pattern.</p>
   */
  SearchString?: string;

  /**
   * @public
   * <p>The time period of the request. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>The unique name of the Cost Category.</p>
   */
  CostCategoryName?: string;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  SortBy?: SortDefinition[];

  /**
   * @public
   * <p>This field is only used when the <code>SortBy</code> value is provided in the
   *       request.</p>
   *          <p>The maximum number of objects that are returned for this request. If
   *         <code>MaxResults</code> isn't specified with the <code>SortBy</code> value, the request
   *       returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetCostCategories</code>, MaxResults has an upper quota of 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of
   *       objects, provide the NextPageToken from the previous call in your next request.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetCostForecastRequest {
  /**
   * @public
   * <p>The period of time that you want the forecast to cover. The start date must be equal to or
   *       no later than the current date to avoid a validation error.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
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
   */
  Metric: Metric | undefined;

  /**
   * @public
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code>
   *       forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   *          <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a
   *       prediction interval around the mean by specifying a confidence level. The higher the
   *       confidence level, the more confident Cost Explorer is about the actual value falling in the
   *       prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;
}

/**
 * @public
 */
export interface GetDimensionValuesRequest {
  /**
   * @public
   * <p>The value that you want to search the filter values for.</p>
   */
  SearchString?: string;

  /**
   * @public
   * <p>The start date and end date for retrieving the dimension values. The start date is
   *       inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>The name of the dimension. Each <code>Dimension</code> is available for a different
   *         <code>Context</code>. For more information, see <code>Context</code>.
   *         <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/AAPI_CostCategoryRule.html">CostCategoryRule</a>. </p>
   */
  Dimension: Dimension | undefined;

  /**
   * @public
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
   *                <p>- Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services.</p>
   *                <p>- AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting
   *           reseller for Amazon Web Services in India.</p>
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
   */
  Context?: Context;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  SortBy?: SortDefinition[];

  /**
   * @public
   * <p>This field is only used when SortBy is provided in the request. The maximum number of
   *       objects that are returned for this request. If MaxResults isn't specified with SortBy, the
   *       request returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetDimensionValues</code>, MaxResults has an upper limit of 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 * <p>You can use the following request parameters to query for how much of your instance
 *       usage a reservation covered.</p>
 */
export interface GetReservationCoverageRequest {
  /**
   * @public
   * <p>The start and end dates of the period that you want to retrieve data about reservation
   *       coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the
   *       current month. The start date is inclusive, but the end date is exclusive. For example, if
   *         <code>start</code> is <code>2017-01-01</code> and <code>end</code> is
   *         <code>2017-05-01</code>, then the cost and usage data is retrieved from
   *         <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including
   *         <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
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
   */
  GroupBy?: GroupDefinition[];

  /**
   * @public
   * <p>The granularity of the Amazon Web Services cost data for the reservation. Valid values
   *       are <code>MONTHLY</code> and <code>DAILY</code>.</p>
   *          <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If
   *         <code>Granularity</code> isn't set, the response object doesn't include
   *         <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p>
   *          <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>The measurement that you want your reservation coverage reported in.</p>
   *          <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use
   *       multiple values in a request.</p>
   */
  Metrics?: string[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
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
   */
  SortBy?: SortDefinition;

  /**
   * @public
   * <p>The maximum number of objects that you returned for this request. If more objects are
   *       available, in the response, Amazon Web Services provides a NextPageToken value that you can use
   *       in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetReservationPurchaseRecommendationRequest {
  /**
   * @public
   * <p>The account ID that's associated with the recommendation. </p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The specific service that you want recommendations for.</p>
   */
  Service: string | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>The account scope that you want your recommendations for. Amazon Web Services
   *       calculates recommendations including the management account and member accounts if the value
   *       is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are
   *       calculated for individual member accounts only.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>The number of previous days that you want Amazon Web Services to consider when it
   *       calculates your recommendations.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays;

  /**
   * @public
   * <p>The reservation term that you want recommendations for.</p>
   */
  TermInYears?: TermInYears;

  /**
   * @public
   * <p>The reservation purchase option that you want recommendations for.</p>
   */
  PaymentOption?: PaymentOption;

  /**
   * @public
   * <p>The hardware specifications for the service instances that you want recommendations
   *       for, such as standard or convertible Amazon EC2 instances.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * @public
   * <p>The number of recommendations that you want returned in a single response
   *       object.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to
   *       retrieve.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetReservationUtilizationRequest {
  /**
   * @public
   * <p>Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The
   *       start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * @public
   * <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If
   *         <code>Granularity</code> isn't set, the response object doesn't include
   *         <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. If both
   *         <code>GroupBy</code> and <code>Granularity</code> aren't set,
   *         <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p>
   *          <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  SortBy?: SortDefinition;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The maximum number of objects that you returned for this request. If more objects are
   *       available, in the response, Amazon Web Services provides a NextPageToken value that you can use
   *       in a subsequent call to get the next batch of objects.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetRightsizingRecommendationRequest {
  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>You can use Configuration to customize recommendations across two attributes. You can
   *       choose to view recommendations for instances within the same instance families or across
   *       different instance families. You can also choose to view your estimated savings that are
   *       associated with recommendations with consideration of existing Savings Plans or RI benefits,
   *       or neither. </p>
   */
  Configuration?: RightsizingRecommendationConfiguration;

  /**
   * @public
   * <p>The specific service that you want recommendations for. The only valid value for
   *         <code>GetRightsizingRecommendation</code> is "<code>AmazonEC2</code>".</p>
   */
  Service: string | undefined;

  /**
   * @public
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results that you want to
   *       retrieve.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetSavingsPlansCoverageRequest {
  /**
   * @public
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>You can group the data using the attributes <code>INSTANCE_FAMILY</code>,
   *         <code>REGION</code>, or <code>SERVICE</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * @public
   * <p>The granularity of the Amazon Web Services cost data for your Savings Plans.
   *         <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p>
   *          <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>The measurement that you want your Savings Plans coverage reported in. The only valid
   *       value is <code>SpendCoveredBySavingsPlans</code>.</p>
   */
  Metrics?: string[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a
   *       minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  SortBy?: SortDefinition;
}

/**
 * @public
 */
export interface GetSavingsPlansPurchaseRecommendationRequest {
  /**
   * @public
   * <p>The Savings Plans recommendation type that's requested.</p>
   */
  SavingsPlansType: SupportedSavingsPlansType | undefined;

  /**
   * @public
   * <p>The savings plan recommendation term that's used to generate these recommendations.</p>
   */
  TermInYears: TermInYears | undefined;

  /**
   * @public
   * <p>The payment option that's used to generate these recommendations.</p>
   */
  PaymentOption: PaymentOption | undefined;

  /**
   * @public
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates
   *       recommendations including the management account and member accounts if the value is set to
   *         <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for
   *       individual member accounts only.</p>
   */
  AccountScope?: AccountScope;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * @public
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The lookback period that's used to generate the recommendation.</p>
   */
  LookbackPeriodInDays: LookbackPeriodInDays | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationDetailsRequest {
  /**
   * @public
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>The data type.</p>
   */
  DataType?: SavingsPlansDataType[];

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a
   *       minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  SortBy?: SortDefinition;
}

/**
 * @public
 */
export interface GetSavingsPlansUtilizationRequest {
  /**
   * @public
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be
   *       within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and
   *       before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>The granularity of the Amazon Web Services utillization data for your Savings
   *       Plans.</p>
   *          <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  SortBy?: SortDefinition;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * @public
   * <p>The value that you want to search for.</p>
   */
  SearchString?: string;

  /**
   * @public
   * <p>The start and end dates for retrieving the dimension values. The start date is
   *       inclusive, but the end date is exclusive. For example, if <code>start</code> is
   *         <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and
   *       usage data is retrieved from <code>2017-01-01</code> up to and including
   *         <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
   * <p>The key of the tag that you want to return values for.</p>
   */
  TagKey?: string;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
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
   */
  SortBy?: SortDefinition[];

  /**
   * @public
   * <p>This field is only used when SortBy is provided in the request. The maximum number of
   *       objects that are returned for this request. If MaxResults isn't specified with SortBy, the
   *       request returns 1000 results as the default value for this parameter.</p>
   *          <p>For <code>GetTags</code>, MaxResults has an upper quota of 1000.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token
   *       when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetUsageForecastRequest {
  /**
   * @public
   * <p>The start and end dates of the period that you want to retrieve usage forecast for. The
   *       start date is included in the period, but the end date isn't included in the period. For
   *       example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is
   *         <code>2017-05-01</code>, then the cost and usage data is retrieved from
   *         <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including
   *         <code>2017-05-01</code>. The start date must be equal to or later than the current date to
   *       avoid a validation error.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * @public
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
   */
  Metric: Metric | undefined;

  /**
   * @public
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code>
   *       forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   *          <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and
   *         <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | undefined;

  /**
   * @public
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
   */
  Filter?: Expression;

  /**
   * @public
   * <p>Amazon Web Services Cost Explorer always returns the mean forecast as a single point.
   *       You can request a prediction interval around the mean by specifying a confidence level. The
   *       higher the confidence level, the more confident Cost Explorer is about the actual value
   *       falling in the prediction interval. Higher confidence levels result in wider prediction
   *       intervals.</p>
   */
  PredictionIntervalLevel?: number;
}

/**
 * @public
 */
export interface UpdateAnomalySubscriptionRequest {
  /**
   * @public
   * <p>A cost anomaly subscription Amazon Resource Name (ARN). </p>
   */
  SubscriptionArn: string | undefined;

  /**
   * @public
   * @deprecated
   *
   * <p>(deprecated)</p>
   *          <p>The update to the threshold value for receiving notifications. </p>
   *          <p>This field has been deprecated. To update a threshold, use ThresholdExpression. Continued
   *       use of Threshold will be treated as shorthand syntax for a ThresholdExpression.</p>
   *          <p>You can specify either Threshold or ThresholdExpression, but not both.</p>
   */
  Threshold?: number;

  /**
   * @public
   * <p>The update to the frequency value that subscribers receive notifications. </p>
   */
  Frequency?: AnomalySubscriptionFrequency;

  /**
   * @public
   * <p>A list of cost anomaly monitor ARNs. </p>
   */
  MonitorArnList?: string[];

  /**
   * @public
   * <p>The update to the subscriber list. </p>
   */
  Subscribers?: Subscriber[];

  /**
   * @public
   * <p>The new name of the subscription. </p>
   */
  SubscriptionName?: string;

  /**
   * @public
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
   */
  ThresholdExpression?: Expression;
}

/**
 * @public
 */
export interface CreateAnomalyMonitorRequest {
  /**
   * @public
   * <p>The cost anomaly detection monitor object that you want to create.</p>
   */
  AnomalyMonitor: AnomalyMonitor | undefined;

  /**
   * @public
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
   */
  ResourceTags?: ResourceTag[];
}

/**
 * @public
 */
export interface CreateAnomalySubscriptionRequest {
  /**
   * @public
   * <p>The cost anomaly subscription object that you want to create. </p>
   */
  AnomalySubscription: AnomalySubscription | undefined;

  /**
   * @public
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
   */
  ResourceTags?: ResourceTag[];
}

/**
 * @public
 * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules
 *             for the <code>CostCategory</code> object.</p>
 */
export interface CostCategory {
  /**
   * @public
   * <p>The unique identifier for your Cost Category. </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * @public
   * <p>The effective start date of your Cost Category.</p>
   */
  EffectiveStart: string | undefined;

  /**
   * @public
   * <p>The effective end date of your Cost Category.</p>
   */
  EffectiveEnd?: string;

  /**
   * @public
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * @public
   * <p>The rules are processed in order. If there are multiple rules that match the line
   *             item, then the first rule to match is used to determine that Cost Category value.
   *         </p>
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * @public
   * <p> The split charge rules that are used to allocate your charges between your Cost
   *             Category values. </p>
   */
  SplitChargeRules?: CostCategorySplitChargeRule[];

  /**
   * @public
   * <p>The list of processing statuses for Cost Management products for a specific cost
   *             category. </p>
   */
  ProcessingStatus?: CostCategoryProcessingStatus[];

  /**
   * @public
   * <p>The
   *             default value for the cost category.</p>
   */
  DefaultValue?: string;
}

/**
 * @public
 */
export interface CreateCostCategoryDefinitionRequest {
  /**
   * @public
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.</p>
   */
  EffectiveStart?: string;

  /**
   * @public
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * @public
   * <p>The Cost Category rules used to categorize costs. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p>
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * @public
   * <p>The
   *             default value for the cost category.</p>
   */
  DefaultValue?: string;

  /**
   * @public
   * <p> The split charge rules used to allocate your charges between your Cost Category values.
   *     </p>
   */
  SplitChargeRules?: CostCategorySplitChargeRule[];

  /**
   * @public
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
   */
  ResourceTags?: ResourceTag[];
}

/**
 * @public
 */
export interface GetAnomalyMonitorsResponse {
  /**
   * @public
   * <p>A list of cost anomaly monitors that includes the detailed metadata for each monitor.
   *     </p>
   */
  AnomalyMonitors: AnomalyMonitor[] | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface GetAnomalySubscriptionsResponse {
  /**
   * @public
   * <p>A list of cost anomaly subscriptions that includes the detailed metadata for each one.
   *     </p>
   */
  AnomalySubscriptions: AnomalySubscription[] | undefined;

  /**
   * @public
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when
   *       the response from a previous call has more results than the maximum page size. </p>
   */
  NextPageToken?: string;
}

/**
 * @public
 */
export interface UpdateCostCategoryDefinitionRequest {
  /**
   * @public
   * <p>The unique identifier for your Cost Category.</p>
   */
  CostCategoryArn: string | undefined;

  /**
   * @public
   * <p>The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.</p>
   */
  EffectiveStart?: string;

  /**
   * @public
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | undefined;

  /**
   * @public
   * <p>The <code>Expression</code> object used to categorize costs. For more information, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule
   *       </a>. </p>
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * @public
   * <p>The
   *             default value for the cost category.</p>
   */
  DefaultValue?: string;

  /**
   * @public
   * <p> The split charge rules used to allocate your charges between your Cost Category values.
   *     </p>
   */
  SplitChargeRules?: CostCategorySplitChargeRule[];
}

/**
 * @public
 */
export interface DescribeCostCategoryDefinitionResponse {
  /**
   * @public
   * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules
   *             for the <code>CostCategory</code> object.</p>
   */
  CostCategory?: CostCategory;
}
