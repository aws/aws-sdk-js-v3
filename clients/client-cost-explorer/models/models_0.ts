import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccountScope {
  LINKED = "LINKED",
  PAYER = "PAYER",
}

/**
 * <p> Quantifies the anomaly. The higher score means that it is more anomalous. </p>
 */
export interface AnomalyScore {
  /**
   * <p>
   *         The maximum score observed during the <code>AnomalyDateInterval</code>.
   *     </p>
   */
  MaxScore: number | undefined;

  /**
   * <p>
   *        The last observed score.
   *     </p>
   */
  CurrentScore: number | undefined;
}

export namespace AnomalyScore {
  export const filterSensitiveLog = (obj: AnomalyScore): any => ({
    ...obj,
  });
}

export enum AnomalyFeedbackType {
  NO = "NO",
  PLANNED_ACTIVITY = "PLANNED_ACTIVITY",
  YES = "YES",
}

/**
 * <p>
 *         The anomaly's dollar value.
 *     </p>
 */
export interface Impact {
  /**
   * <p>
   *         The maximum dollar value observed for an anomaly.
   *     </p>
   */
  MaxImpact: number | undefined;

  /**
   * <p>
   *         The cumulative dollar value observed for an anomaly.
   *     </p>
   */
  TotalImpact?: number;
}

export namespace Impact {
  export const filterSensitiveLog = (obj: Impact): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         The combination of AWS service, linked account, Region, and usage type where a cost anomaly is observed.
 *     </p>
 */
export interface RootCause {
  /**
   * <p>
   *         The AWS service name associated with the cost anomaly.
   *     </p>
   */
  Service?: string;

  /**
   * <p>
   *         The AWS Region associated with the cost anomaly.
   *     </p>
   */
  Region?: string;

  /**
   * <p>
   *         The linked account value associated with the cost anomaly.
   *     </p>
   */
  LinkedAccount?: string;

  /**
   * <p>
   *         The <code>UsageType</code> value associated with the cost anomaly.
   *     </p>
   */
  UsageType?: string;
}

export namespace RootCause {
  export const filterSensitiveLog = (obj: RootCause): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object.
 *     </p>
 */
export interface Anomaly {
  /**
   * <p>
   *         The unique identifier for the anomaly.
   *     </p>
   */
  AnomalyId: string | undefined;

  /**
   * <p>
   *         The first day the anomaly is detected.
   *     </p>
   */
  AnomalyStartDate?: string;

  /**
   * <p>
   *         The last day the anomaly is detected.
   *     </p>
   */
  AnomalyEndDate?: string;

  /**
   * <p>
   *         The dimension for the anomaly. For example, an AWS service in a service monitor.
   *     </p>
   */
  DimensionValue?: string;

  /**
   * <p>
   *         The list of identified root causes for the anomaly.
   *     </p>
   */
  RootCauses?: RootCause[];

  /**
   * <p>
   *         The latest and maximum score for the anomaly.
   *     </p>
   */
  AnomalyScore: AnomalyScore | undefined;

  /**
   * <p>
   *         The dollar impact for the anomaly.
   *     </p>
   */
  Impact: Impact | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the cost monitor that generated this anomaly. </p>
   */
  MonitorArn: string | undefined;

  /**
   * <p>
   *         The feedback value.
   *     </p>
   */
  Feedback?: AnomalyFeedbackType | string;
}

export namespace Anomaly {
  export const filterSensitiveLog = (obj: Anomaly): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         The time period for an anomaly.
 *     </p>
 */
export interface AnomalyDateInterval {
  /**
   * <p>
   *         The first date an anomaly was observed.
   *     </p>
   */
  StartDate: string | undefined;

  /**
   * <p>
   *         The last date an anomaly was observed.
   *     </p>
   */
  EndDate?: string;
}

export namespace AnomalyDateInterval {
  export const filterSensitiveLog = (obj: AnomalyDateInterval): any => ({
    ...obj,
  });
}

export enum MonitorDimension {
  SERVICE = "SERVICE",
}

export enum MatchOption {
  CASE_INSENSITIVE = "CASE_INSENSITIVE",
  CASE_SENSITIVE = "CASE_SENSITIVE",
  CONTAINS = "CONTAINS",
  ENDS_WITH = "ENDS_WITH",
  EQUALS = "EQUALS",
  STARTS_WITH = "STARTS_WITH",
}

/**
 * <p>The Cost Categories values used for filtering the costs.</p>
 */
export interface CostCategoryValues {
  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Key?: string;

  /**
   * <p>The specific value of the Cost Category.</p>
   */
  Values?: string[];

  /**
   * <p>
   *             The match options that you can use to filter your results. MatchOptions is only applicable for only applicable for actions related to cost category. The default values for <code>MatchOptions</code> is <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.
   *         </p>
   */
  MatchOptions?: (MatchOption | string)[];
}

export namespace CostCategoryValues {
  export const filterSensitiveLog = (obj: CostCategoryValues): any => ({
    ...obj,
  });
}

export enum Dimension {
  AZ = "AZ",
  BILLING_ENTITY = "BILLING_ENTITY",
  CACHE_ENGINE = "CACHE_ENGINE",
  DATABASE_ENGINE = "DATABASE_ENGINE",
  DEPLOYMENT_OPTION = "DEPLOYMENT_OPTION",
  INSTANCE_TYPE = "INSTANCE_TYPE",
  INSTANCE_TYPE_FAMILY = "INSTANCE_TYPE_FAMILY",
  LEGAL_ENTITY_NAME = "LEGAL_ENTITY_NAME",
  LINKED_ACCOUNT = "LINKED_ACCOUNT",
  LINKED_ACCOUNT_NAME = "LINKED_ACCOUNT_NAME",
  OPERATING_SYSTEM = "OPERATING_SYSTEM",
  OPERATION = "OPERATION",
  PAYMENT_OPTION = "PAYMENT_OPTION",
  PLATFORM = "PLATFORM",
  PURCHASE_TYPE = "PURCHASE_TYPE",
  RECORD_TYPE = "RECORD_TYPE",
  REGION = "REGION",
  RESERVATION_ID = "RESERVATION_ID",
  RESOURCE_ID = "RESOURCE_ID",
  RIGHTSIZING_TYPE = "RIGHTSIZING_TYPE",
  SAVINGS_PLANS_TYPE = "SAVINGS_PLANS_TYPE",
  SAVINGS_PLAN_ARN = "SAVINGS_PLAN_ARN",
  SCOPE = "SCOPE",
  SERVICE = "SERVICE",
  SERVICE_CODE = "SERVICE_CODE",
  SUBSCRIPTION_ID = "SUBSCRIPTION_ID",
  TENANCY = "TENANCY",
  USAGE_TYPE = "USAGE_TYPE",
  USAGE_TYPE_GROUP = "USAGE_TYPE_GROUP",
}

/**
 * <p>The metadata that you can use to filter and group your results. You can use
 *                 <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValues {
  /**
   * <p>The names of the metadata types that you can use to filter and group your results.
   *             For example, <code>AZ</code> returns a list of Availability Zones.</p>
   */
  Key?: Dimension | string;

  /**
   * <p>The metadata values that you can use to filter and group your results. You can use
   *                 <code>GetDimensionValues</code> to find specific values.</p>
   */
  Values?: string[];

  /**
   * <p>The match options that you can use to filter your results.
   *                 <code>MatchOptions</code> is only applicable for actions related to Cost Category.
   *             The default values for <code>MatchOptions</code> are <code>EQUALS</code> and
   *                 <code>CASE_SENSITIVE</code>.</p>
   */
  MatchOptions?: (MatchOption | string)[];
}

export namespace DimensionValues {
  export const filterSensitiveLog = (obj: DimensionValues): any => ({
    ...obj,
  });
}

/**
 * <p>The values that are available for a tag.</p>
 */
export interface TagValues {
  /**
   * <p>The key for the tag.</p>
   */
  Key?: string;

  /**
   * <p>The specific value of the tag.</p>
   */
  Values?: string[];

  /**
   * <p>The match options that you can use to filter your results.
   *                 <code>MatchOptions</code> is only applicable for actions related to Cost Category.
   *             The default values for <code>MatchOptions</code> are <code>EQUALS</code> and
   *                 <code>CASE_SENSITIVE</code>.</p>
   */
  MatchOptions?: (MatchOption | string)[];
}

export namespace TagValues {
  export const filterSensitiveLog = (obj: TagValues): any => ({
    ...obj,
  });
}

export enum MonitorType {
  CUSTOM = "CUSTOM",
  DIMENSIONAL = "DIMENSIONAL",
}

export enum AnomalySubscriptionFrequency {
  DAILY = "DAILY",
  IMMEDIATE = "IMMEDIATE",
  WEEKLY = "WEEKLY",
}

export enum SubscriberStatus {
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
}

export enum SubscriberType {
  EMAIL = "EMAIL",
  SNS = "SNS",
}

/**
 * <p>
 *         The recipient of <code>AnomalySubscription</code> notifications.
 *     </p>
 */
export interface Subscriber {
  /**
   * <p> The email address or SNS Amazon Resource Name (ARN), depending on the <code>Type</code>. </p>
   */
  Address?: string;

  /**
   * <p>
   *         The notification delivery channel.
   *     </p>
   */
  Type?: SubscriberType | string;

  /**
   * <p> Indicates if the subscriber accepts the notifications. </p>
   */
  Status?: SubscriberStatus | string;
}

export namespace Subscriber {
  export const filterSensitiveLog = (obj: Subscriber): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         The association between a monitor, threshold, and list of subscribers used to deliver notifications about anomalies detected by a monitor that exceeds a threshold. The content consists of the detailed metadata and the current status of the <code>AnomalySubscription</code> object.
 *     </p>
 */
export interface AnomalySubscription {
  /**
   * <p> The <code>AnomalySubscription</code> Amazon Resource Name (ARN). </p>
   */
  SubscriptionArn?: string;

  /**
   * <p>
   *         Your unique account identifier.
   *     </p>
   */
  AccountId?: string;

  /**
   * <p>
   *         A list of cost anomaly monitors.
   *     </p>
   */
  MonitorArnList: string[] | undefined;

  /**
   * <p>
   *         A list of subscribers to notify.
   *     </p>
   */
  Subscribers: Subscriber[] | undefined;

  /**
   * <p>
   *         The dollar value that triggers a notification if the threshold is exceeded.
   *     </p>
   */
  Threshold: number | undefined;

  /**
   * <p>
   *         The frequency at which anomaly reports are sent over email.
   *     </p>
   */
  Frequency: AnomalySubscriptionFrequency | string | undefined;

  /**
   * <p>
   *         The name for the subscription.
   *     </p>
   */
  SubscriptionName: string | undefined;
}

export namespace AnomalySubscription {
  export const filterSensitiveLog = (obj: AnomalySubscription): any => ({
    ...obj,
  });
}

export interface CreateAnomalyMonitorResponse {
  /**
   * <p> The unique identifier of your newly created cost anomaly detection monitor.</p>
   */
  MonitorArn: string | undefined;
}

export namespace CreateAnomalyMonitorResponse {
  export const filterSensitiveLog = (obj: CreateAnomalyMonitorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You made too many calls in a short period of time. Try again later.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateAnomalySubscriptionRequest {
  /**
   * <p>
   *       The cost anomaly subscription object that you want to create.
   *     </p>
   */
  AnomalySubscription: AnomalySubscription | undefined;
}

export namespace CreateAnomalySubscriptionRequest {
  export const filterSensitiveLog = (obj: CreateAnomalySubscriptionRequest): any => ({
    ...obj,
  });
}

export interface CreateAnomalySubscriptionResponse {
  /**
   * <p>
   *       The unique identifier of your newly created cost anomaly subscription.
   *     </p>
   */
  SubscriptionArn: string | undefined;
}

export namespace CreateAnomalySubscriptionResponse {
  export const filterSensitiveLog = (obj: CreateAnomalySubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The cost anomaly monitor does not exist for the account.
 *         </p>
 */
export interface UnknownMonitorException extends __SmithyException, $MetadataBearer {
  name: "UnknownMonitorException";
  $fault: "client";
  Message?: string;
}

export namespace UnknownMonitorException {
  export const filterSensitiveLog = (obj: UnknownMonitorException): any => ({
    ...obj,
  });
}

export enum CostCategoryRuleVersion {
  CostCategoryExpressionV1 = "CostCategoryExpression.v1",
}

export interface CreateCostCategoryDefinitionResponse {
  /**
   * <p>
   *       The unique identifier for your newly created Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The Cost Category's effective start date.
   *     </p>
   */
  EffectiveStart?: string;
}

export namespace CreateCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (obj: CreateCostCategoryDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p> You've reached the limit on the number of resources you can create, or exceeded the
 *             size of an individual resource. </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyMonitorRequest {
  /**
   * <p> The unique identifier of the cost anomaly monitor that you want to delete. </p>
   */
  MonitorArn: string | undefined;
}

export namespace DeleteAnomalyMonitorRequest {
  export const filterSensitiveLog = (obj: DeleteAnomalyMonitorRequest): any => ({
    ...obj,
  });
}

export interface DeleteAnomalyMonitorResponse {}

export namespace DeleteAnomalyMonitorResponse {
  export const filterSensitiveLog = (obj: DeleteAnomalyMonitorResponse): any => ({
    ...obj,
  });
}

export interface DeleteAnomalySubscriptionRequest {
  /**
   * <p> The unique identifier of the cost anomaly subscription that you want to delete. </p>
   */
  SubscriptionArn: string | undefined;
}

export namespace DeleteAnomalySubscriptionRequest {
  export const filterSensitiveLog = (obj: DeleteAnomalySubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteAnomalySubscriptionResponse {}

export namespace DeleteAnomalySubscriptionResponse {
  export const filterSensitiveLog = (obj: DeleteAnomalySubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The cost anomaly subscription does not exist for the account.
 *         </p>
 */
export interface UnknownSubscriptionException extends __SmithyException, $MetadataBearer {
  name: "UnknownSubscriptionException";
  $fault: "client";
  Message?: string;
}

export namespace UnknownSubscriptionException {
  export const filterSensitiveLog = (obj: UnknownSubscriptionException): any => ({
    ...obj,
  });
}

export interface DeleteCostCategoryDefinitionRequest {
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn: string | undefined;
}

export namespace DeleteCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (obj: DeleteCostCategoryDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteCostCategoryDefinitionResponse {
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The effective end date of the Cost Category as a result of deleting it. No costs after this date will be categorized by the deleted Cost Category.
   *     </p>
   */
  EffectiveEnd?: string;
}

export namespace DeleteCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (obj: DeleteCostCategoryDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The specified ARN in the request doesn't exist.
 *         </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeCostCategoryDefinitionRequest {
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>
   *       The date when the Cost Category was effective.
   *     </p>
   */
  EffectiveOn?: string;
}

export namespace DescribeCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (obj: DescribeCostCategoryDefinitionRequest): any => ({
    ...obj,
  });
}

export enum CostCategoryStatusComponent {
  COST_EXPLORER = "COST_EXPLORER",
}

export enum CostCategoryStatus {
  APPLIED = "APPLIED",
  PROCESSING = "PROCESSING",
}

/**
 * <p>
 *             The list of processing statuses for Cost Management products for a specific cost category.
 *         </p>
 */
export interface CostCategoryProcessingStatus {
  /**
   * <p>
   *             The Cost Management product name of the applied status.
   *         </p>
   */
  Component?: CostCategoryStatusComponent | string;

  /**
   * <p>
   *             The process status for a specific cost category.
   *         </p>
   */
  Status?: CostCategoryStatus | string;
}

export namespace CostCategoryProcessingStatus {
  export const filterSensitiveLog = (obj: CostCategoryProcessingStatus): any => ({
    ...obj,
  });
}

export enum NumericOperator {
  BETWEEN = "BETWEEN",
  EQUAL = "EQUAL",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
}

/**
 * <p> Filters cost anomalies based on the total impact. </p>
 */
export interface TotalImpactFilter {
  /**
   * <p>
   *         The comparing value used in the filter.
   *     </p>
   */
  NumericOperator: NumericOperator | string | undefined;

  /**
   * <p>
   *         The lower bound dollar value used in the filter.
   *     </p>
   */
  StartValue: number | undefined;

  /**
   * <p> The upper bound dollar value used in the filter. </p>
   */
  EndValue?: number;
}

export namespace TotalImpactFilter {
  export const filterSensitiveLog = (obj: TotalImpactFilter): any => ({
    ...obj,
  });
}

export interface GetAnomaliesRequest {
  /**
   * <p>Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon
   *       Resource Name (ARN). </p>
   */
  MonitorArn?: string;

  /**
   * <p>Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object
   *       will have an <code>AnomalyEndDate</code> in the specified time range. </p>
   */
  DateInterval: AnomalyDateInterval | undefined;

  /**
   * <p>Filters anomaly results by the feedback field on the anomaly object. </p>
   */
  Feedback?: AnomalyFeedbackType | string;

  /**
   * <p>Filters anomaly results by the total impact field on the anomaly object. For example, you
   *       can filter anomalies <code>GREATER_THAN 200.00</code> to retrieve anomalies, with an estimated
   *       dollar impact greater than 200. </p>
   */
  TotalImpact?: TotalImpactFilter;

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;

  /**
   * <p>
   *       The number of entries a paginated response contains.
   *     </p>
   */
  MaxResults?: number;
}

export namespace GetAnomaliesRequest {
  export const filterSensitiveLog = (obj: GetAnomaliesRequest): any => ({
    ...obj,
  });
}

export interface GetAnomaliesResponse {
  /**
   * <p>
   *       A list of cost anomalies.
   *     </p>
   */
  Anomalies: Anomaly[] | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;
}

export namespace GetAnomaliesResponse {
  export const filterSensitiveLog = (obj: GetAnomaliesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface GetAnomalyMonitorsRequest {
  /**
   * <p>
   *       A list of cost anomaly monitor ARNs.
   *     </p>
   */
  MonitorArnList?: string[];

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;

  /**
   * <p>
   *       The number of entries a paginated response contains.
   *     </p>
   */
  MaxResults?: number;
}

export namespace GetAnomalyMonitorsRequest {
  export const filterSensitiveLog = (obj: GetAnomalyMonitorsRequest): any => ({
    ...obj,
  });
}

export interface GetAnomalySubscriptionsRequest {
  /**
   * <p>
   *       A list of cost anomaly subscription ARNs.
   *     </p>
   */
  SubscriptionArnList?: string[];

  /**
   * <p>
   *       Cost anomaly monitor ARNs.
   *     </p>
   */
  MonitorArn?: string;

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;

  /**
   * <p>
   *       The number of entries a paginated response contains.
   *     </p>
   */
  MaxResults?: number;
}

export namespace GetAnomalySubscriptionsRequest {
  export const filterSensitiveLog = (obj: GetAnomalySubscriptionsRequest): any => ({
    ...obj,
  });
}

export interface GetAnomalySubscriptionsResponse {
  /**
   * <p>
   *       A list of cost anomaly subscriptions that includes the detailed metadata for each one.
   *     </p>
   */
  AnomalySubscriptions: AnomalySubscription[] | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;
}

export namespace GetAnomalySubscriptionsResponse {
  export const filterSensitiveLog = (obj: GetAnomalySubscriptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The requested report expired. Update the date interval and try again.</p>
 */
export interface BillExpirationException extends __SmithyException, $MetadataBearer {
  name: "BillExpirationException";
  $fault: "client";
  Message?: string;
}

export namespace BillExpirationException {
  export const filterSensitiveLog = (obj: BillExpirationException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested data is unavailable.</p>
 */
export interface DataUnavailableException extends __SmithyException, $MetadataBearer {
  name: "DataUnavailableException";
  $fault: "client";
  Message?: string;
}

export namespace DataUnavailableException {
  export const filterSensitiveLog = (obj: DataUnavailableException): any => ({
    ...obj,
  });
}

export enum Granularity {
  DAILY = "DAILY",
  HOURLY = "HOURLY",
  MONTHLY = "MONTHLY",
}

export enum GroupDefinitionType {
  COST_CATEGORY = "COST_CATEGORY",
  DIMENSION = "DIMENSION",
  TAG = "TAG",
}

/**
 * <p>Represents a group when you specify a group by criteria or in the response to a
 *             query with a specific grouping.</p>
 */
export interface GroupDefinition {
  /**
   * <p>The string that represents the type of group.</p>
   */
  Type?: GroupDefinitionType | string;

  /**
   * <p>The string that represents a key for a specified group.</p>
   */
  Key?: string;
}

export namespace GroupDefinition {
  export const filterSensitiveLog = (obj: GroupDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The time period that you want the usage and costs for.
 *         </p>
 */
export interface DateInterval {
  /**
   * <p>The beginning of the time period that you want the usage and costs for. The start
   *             date is inclusive. For example, if <code>start</code> is <code>2017-01-01</code>, AWS
   *             retrieves cost and usage data starting at <code>2017-01-01</code> up to the end
   *             date.</p>
   */
  Start: string | undefined;

  /**
   * <p>The end of the time period that you want the usage and costs for. The end date is
   *             exclusive. For example, if <code>end</code> is <code>2017-05-01</code>, AWS retrieves
   *             cost and usage data from the start date up to, but not including,
   *                 <code>2017-05-01</code>.</p>
   */
  End: string | undefined;
}

export namespace DateInterval {
  export const filterSensitiveLog = (obj: DateInterval): any => ({
    ...obj,
  });
}

/**
 * <p>The aggregated value for a metric.</p>
 */
export interface MetricValue {
  /**
   * <p>The actual number that represents the metric.</p>
   */
  Amount?: string;

  /**
   * <p>The unit that the metric is given in.</p>
   */
  Unit?: string;
}

export namespace MetricValue {
  export const filterSensitiveLog = (obj: MetricValue): any => ({
    ...obj,
  });
}

/**
 * <p>One level of grouped data in the results.</p>
 */
export interface Group {
  /**
   * <p>The keys that are included in this group.</p>
   */
  Keys?: string[];

  /**
   * <p>The metrics that are included in this group.</p>
   */
  Metrics?: { [key: string]: MetricValue };
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

/**
 * <p>The result that is associated with a time period.</p>
 */
export interface ResultByTime {
  /**
   * <p>The time period that the result covers.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The total amount of cost or usage accrued during the time period.</p>
   */
  Total?: { [key: string]: MetricValue };

  /**
   * <p>The groups that this time period includes.</p>
   */
  Groups?: Group[];

  /**
   * <p>Whether
   *             the result is estimated.</p>
   */
  Estimated?: boolean;
}

export namespace ResultByTime {
  export const filterSensitiveLog = (obj: ResultByTime): any => ({
    ...obj,
  });
}

export interface GetCostAndUsageResponse {
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code> parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * <p>The time period that is covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];
}

export namespace GetCostAndUsageResponse {
  export const filterSensitiveLog = (obj: GetCostAndUsageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
 */
export interface RequestChangedException extends __SmithyException, $MetadataBearer {
  name: "RequestChangedException";
  $fault: "client";
  Message?: string;
}

export namespace RequestChangedException {
  export const filterSensitiveLog = (obj: RequestChangedException): any => ({
    ...obj,
  });
}

export interface GetCostAndUsageWithResourcesResponse {
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The groups that are specified by the <code>Filter</code> or <code>GroupBy</code>
   *       parameters in the request.</p>
   */
  GroupDefinitions?: GroupDefinition[];

  /**
   * <p>The time period that is covered by the results in the response.</p>
   */
  ResultsByTime?: ResultByTime[];
}

export namespace GetCostAndUsageWithResourcesResponse {
  export const filterSensitiveLog = (obj: GetCostAndUsageWithResourcesResponse): any => ({
    ...obj,
  });
}

export enum Metric {
  AMORTIZED_COST = "AMORTIZED_COST",
  BLENDED_COST = "BLENDED_COST",
  NET_AMORTIZED_COST = "NET_AMORTIZED_COST",
  NET_UNBLENDED_COST = "NET_UNBLENDED_COST",
  NORMALIZED_USAGE_AMOUNT = "NORMALIZED_USAGE_AMOUNT",
  UNBLENDED_COST = "UNBLENDED_COST",
  USAGE_QUANTITY = "USAGE_QUANTITY",
}

/**
 * <p>The forecast created for your query.</p>
 */
export interface ForecastResult {
  /**
   * <p>The period of time that the forecast covers.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The mean value of the forecast.</p>
   */
  MeanValue?: string;

  /**
   * <p>The lower limit for the prediction interval. </p>
   */
  PredictionIntervalLowerBound?: string;

  /**
   * <p>The upper limit for the prediction interval. </p>
   */
  PredictionIntervalUpperBound?: string;
}

export namespace ForecastResult {
  export const filterSensitiveLog = (obj: ForecastResult): any => ({
    ...obj,
  });
}

export interface GetCostForecastResponse {
  /**
   * <p>How much you are forecasted to spend over the forecast period, in <code>USD</code>.</p>
   */
  Total?: MetricValue;

  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts,
   * 			this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];
}

export namespace GetCostForecastResponse {
  export const filterSensitiveLog = (obj: GetCostForecastResponse): any => ({
    ...obj,
  });
}

export enum Context {
  COST_AND_USAGE = "COST_AND_USAGE",
  RESERVATIONS = "RESERVATIONS",
  SAVINGS_PLANS = "SAVINGS_PLANS",
}

export interface GetDimensionValuesRequest {
  /**
   * <p>The value that you want to search the filter values for.</p>
   */
  SearchString?: string;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The name of the dimension. Each <code>Dimension</code> is available for a different <code>Context</code>.
   * 			For more information, see <code>Context</code>.
   *
   * 		</p>
   */
  Dimension: Dimension | string | undefined;

  /**
   * <p>The context for the call to <code>GetDimensionValues</code>. This can be <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>.
   * 			The default value is <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the resulting dimension values
   * 			can be used in the <code>GetReservationUtilization</code> operation. If the context is set to <code>COST_AND_USAGE</code>,
   * 			the resulting dimension values can be used in the <code>GetCostAndUsage</code> operation.</p>
   * 		       <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *            dimensions for searching:</p>
   *            <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand
   *                Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The AWS service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation
   *            includes a unit attribute. Examples include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this
   *                operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *            dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p>
   *             </li>
   *          </ul>
   */
  Context?: Context | string;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetDimensionValuesRequest {
  export const filterSensitiveLog = (obj: GetDimensionValuesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The metadata of a specific type that you can use to filter and group your results.
 *             You can use <code>GetDimensionValues</code> to find specific values.</p>
 */
export interface DimensionValuesWithAttributes {
  /**
   * <p>The value of a dimension with a specific attribute.</p>
   */
  Value?: string;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace DimensionValuesWithAttributes {
  export const filterSensitiveLog = (obj: DimensionValuesWithAttributes): any => ({
    ...obj,
  });
}

export interface GetDimensionValuesResponse {
  /**
   * <p>The filters that you used to filter your request. Some dimensions are available only for a specific context.</p>
   * 		       <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following
   *            dimensions for searching:</p>
   *            <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand
   *                Instances and Standard Reserved Instances.</p>
   *             </li>
   *             <li>
   *                <p>SERVICE - The AWS service such as Amazon DynamoDB.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation
   *            includes a unit attribute. Examples include GB and Hrs.</p>
   *             </li>
   *             <li>
   *                <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this
   *                operation includes a unit attribute.</p>
   *             </li>
   *             <li>
   *                <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p>
   *             </li>
   *             <li>
   *                <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>RESERVATIONS</code>, you can use the following
   *            dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p>
   *             </li>
   *             <li>
   *                <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p>
   *             </li>
   *             <li>
   *                <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p>
   *             </li>
   *             <li>
   *                <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p>
   *             </li>
   *          </ul>
   *          <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p>
   *          <ul>
   *             <li>
   *                <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p>
   *             </li>
   *             <li>
   *                <p>PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)</p>
   *             </li>
   *             <li>
   *                <p>REGION - The AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p>
   *             </li>
   *             <li>
   *                <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value
   *                field contains the AWS ID of the member account.</p>
   *             </li>
   *             <li>
   *                <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan</p>
   *             </li>
   *          </ul>
   */
  DimensionValues: DimensionValuesWithAttributes[] | undefined;

  /**
   * <p>The number of results that AWS returned at one time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of search results.</p>
   */
  TotalSize: number | undefined;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetDimensionValuesResponse {
  export const filterSensitiveLog = (obj: GetDimensionValuesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>How much it costs to run an instance.</p>
 */
export interface CoverageCost {
  /**
   * <p>How much an On-Demand Instance costs.</p>
   */
  OnDemandCost?: string;
}

export namespace CoverageCost {
  export const filterSensitiveLog = (obj: CoverageCost): any => ({
    ...obj,
  });
}

/**
 * <p>How long a running instance either used a reservation or was On-Demand.</p>
 */
export interface CoverageHours {
  /**
   * <p>The number of instance running hours that On-Demand Instances covered.</p>
   */
  OnDemandHours?: string;

  /**
   * <p>The number of instance running hours that reservations covered.</p>
   */
  ReservedHours?: string;

  /**
   * <p>The total instance usage, in hours.</p>
   */
  TotalRunningHours?: string;

  /**
   * <p>The percentage of instance hours that a reservation covered.</p>
   */
  CoverageHoursPercentage?: string;
}

export namespace CoverageHours {
  export const filterSensitiveLog = (obj: CoverageHours): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of instance usage, in normalized units. Normalized units enable you to
 *             see your EC2 usage for multiple sizes of instances in a uniform way. For example,
 *             suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for
 *             the same amount of time, the 2xlarge instance uses twice as much of your reservation as
 *             the xlarge instance, even though both instances show only one instance-hour. Using
 *             normalized units instead of instance-hours, the xlarge instance used 8 normalized units,
 *             and the 2xlarge instance used 16 normalized units.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for
 *                 Linux Instances</i>.</p>
 */
export interface CoverageNormalizedUnits {
  /**
   * <p>The number of normalized units that are covered by On-Demand Instances instead of a
   *             reservation.</p>
   */
  OnDemandNormalizedUnits?: string;

  /**
   * <p>The number of normalized units that a reservation covers.</p>
   */
  ReservedNormalizedUnits?: string;

  /**
   * <p>The total number of normalized units that you used.</p>
   */
  TotalRunningNormalizedUnits?: string;

  /**
   * <p>The percentage of your used instance normalized units that a reservation
   *             covers.</p>
   */
  CoverageNormalizedUnitsPercentage?: string;
}

export namespace CoverageNormalizedUnits {
  export const filterSensitiveLog = (obj: CoverageNormalizedUnits): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of instance usage that a reservation covered.</p>
 */
export interface Coverage {
  /**
   * <p>The amount of instance usage that the reservation covered, in hours.</p>
   */
  CoverageHours?: CoverageHours;

  /**
   * <p>The amount of instance usage that the reservation covered, in normalized
   *             units.</p>
   */
  CoverageNormalizedUnits?: CoverageNormalizedUnits;

  /**
   * <p>The amount of cost that the reservation covered.</p>
   */
  CoverageCost?: CoverageCost;
}

export namespace Coverage {
  export const filterSensitiveLog = (obj: Coverage): any => ({
    ...obj,
  });
}

/**
 * <p>A
 *             group of reservations that share a set of attributes.</p>
 */
export interface ReservationCoverageGroup {
  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>How much instance usage this group of reservations covered.</p>
   */
  Coverage?: Coverage;
}

export namespace ReservationCoverageGroup {
  export const filterSensitiveLog = (obj: ReservationCoverageGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Reservation
 *             coverage for a specified period, in
 *             hours.</p>
 */
export interface CoverageByTime {
  /**
   * <p>The period that this coverage was used over.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The groups of instances that the reservation covered.</p>
   */
  Groups?: ReservationCoverageGroup[];

  /**
   * <p>The total reservation coverage, in hours.</p>
   */
  Total?: Coverage;
}

export namespace CoverageByTime {
  export const filterSensitiveLog = (obj: CoverageByTime): any => ({
    ...obj,
  });
}

export interface GetReservationCoverageResponse {
  /**
   * <p>The amount of time that your reservations covered.</p>
   */
  CoveragesByTime: CoverageByTime[] | undefined;

  /**
   * <p>The total amount of instance usage that a reservation covered.</p>
   */
  Total?: Coverage;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationCoverageResponse {
  export const filterSensitiveLog = (obj: GetReservationCoverageResponse): any => ({
    ...obj,
  });
}

export enum LookbackPeriodInDays {
  SEVEN_DAYS = "SEVEN_DAYS",
  SIXTY_DAYS = "SIXTY_DAYS",
  THIRTY_DAYS = "THIRTY_DAYS",
}

export enum PaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  HEAVY_UTILIZATION = "HEAVY_UTILIZATION",
  LIGHT_UTILIZATION = "LIGHT_UTILIZATION",
  MEDIUM_UTILIZATION = "MEDIUM_UTILIZATION",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

export enum OfferingClass {
  CONVERTIBLE = "CONVERTIBLE",
  STANDARD = "STANDARD",
}

/**
 * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations
 *             for.</p>
 */
export interface EC2Specification {
  /**
   * <p>Whether you want a recommendation for standard or convertible
   *             reservations.</p>
   */
  OfferingClass?: OfferingClass | string;
}

export namespace EC2Specification {
  export const filterSensitiveLog = (obj: EC2Specification): any => ({
    ...obj,
  });
}

/**
 * <p>Hardware specifications for the service that you want recommendations
 *             for.</p>
 */
export interface ServiceSpecification {
  /**
   * <p>The Amazon EC2 hardware specifications that you want AWS to provide recommendations
   *             for.</p>
   */
  EC2Specification?: EC2Specification;
}

export namespace ServiceSpecification {
  export const filterSensitiveLog = (obj: ServiceSpecification): any => ({
    ...obj,
  });
}

export enum TermInYears {
  ONE_YEAR = "ONE_YEAR",
  THREE_YEARS = "THREE_YEARS",
}

export interface GetReservationPurchaseRecommendationRequest {
  /**
   * <p>The account ID that is associated with the recommendation. </p>
   */
  AccountId?: string;

  /**
   * <p>The specific service that you want recommendations for.</p>
   */
  Service: string | undefined;

  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>The number of previous days that you want AWS to consider when it calculates your recommendations.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>The reservation term that you want recommendations for.</p>
   */
  TermInYears?: TermInYears | string;

  /**
   * <p>The reservation purchase option that you want recommendations for.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationPurchaseRecommendationRequest {
  export const filterSensitiveLog = (obj: GetReservationPurchaseRecommendationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about this specific recommendation, such as the timestamp for when AWS
 *             made a specific recommendation.</p>
 */
export interface ReservationPurchaseRecommendationMetadata {
  /**
   * <p>The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * <p>The timestamp for when AWS made this recommendation.</p>
   */
  GenerationTimestamp?: string;
}

export namespace ReservationPurchaseRecommendationMetadata {
  export const filterSensitiveLog = (obj: ReservationPurchaseRecommendationMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Amazon EC2 instances that AWS recommends that you purchase.</p>
 */
export interface EC2InstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of instance that AWS recommends.</p>
   */
  InstanceType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>The Availability Zone of the recommended reservation.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The platform of the recommended reservation. The platform is the specific
   *             combination of operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p>Whether the recommended reservation is dedicated or shared.</p>
   */
  Tenancy?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace EC2InstanceDetails {
  export const filterSensitiveLog = (obj: EC2InstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Amazon ElastiCache instances that AWS recommends that you
 *             purchase.</p>
 */
export interface ElastiCacheInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of node that AWS recommends.</p>
   */
  NodeType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>The description of the recommended reservation.</p>
   */
  ProductDescription?: string;

  /**
   * <p>Whether the recommendation is for a current generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace ElastiCacheInstanceDetails {
  export const filterSensitiveLog = (obj: ElastiCacheInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Amazon ES instances that AWS recommends that you
 *             purchase.</p>
 */
export interface ESInstanceDetails {
  /**
   * <p>The class of instance that AWS recommends.</p>
   */
  InstanceClass?: string;

  /**
   * <p>The size of instance that AWS recommends.</p>
   */
  InstanceSize?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace ESInstanceDetails {
  export const filterSensitiveLog = (obj: ESInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Amazon RDS instances that AWS recommends that you
 *             purchase.</p>
 */
export interface RDSInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of instance that AWS recommends.</p>
   */
  InstanceType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>The database engine that the recommended reservation supports.</p>
   */
  DatabaseEngine?: string;

  /**
   * <p>The database edition that the recommended reservation supports.</p>
   */
  DatabaseEdition?: string;

  /**
   * <p>Whether the recommendation is for a reservation in a single Availability Zone or a
   *             reservation with a backup in a second Availability Zone.</p>
   */
  DeploymentOption?: string;

  /**
   * <p>The license model that the recommended reservation supports.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance. </p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace RDSInstanceDetails {
  export const filterSensitiveLog = (obj: RDSInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the Amazon Redshift instances that AWS recommends that you
 *             purchase.</p>
 */
export interface RedshiftInstanceDetails {
  /**
   * <p>The instance family of the recommended reservation.</p>
   */
  Family?: string;

  /**
   * <p>The type of node that AWS recommends.</p>
   */
  NodeType?: string;

  /**
   * <p>The AWS Region of the recommended reservation.</p>
   */
  Region?: string;

  /**
   * <p>Whether the recommendation is for a current-generation instance.</p>
   */
  CurrentGeneration?: boolean;

  /**
   * <p>Whether the recommended reservation is size flexible.</p>
   */
  SizeFlexEligible?: boolean;
}

export namespace RedshiftInstanceDetails {
  export const filterSensitiveLog = (obj: RedshiftInstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the instances that AWS recommends that you purchase.</p>
 */
export interface InstanceDetails {
  /**
   * <p>The Amazon EC2 instances that AWS recommends that you purchase.</p>
   */
  EC2InstanceDetails?: EC2InstanceDetails;

  /**
   * <p>The Amazon RDS instances that AWS recommends that you purchase.</p>
   */
  RDSInstanceDetails?: RDSInstanceDetails;

  /**
   * <p>The Amazon Redshift instances that AWS recommends that you purchase.</p>
   */
  RedshiftInstanceDetails?: RedshiftInstanceDetails;

  /**
   * <p>The ElastiCache instances that AWS recommends that you purchase.</p>
   */
  ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;

  /**
   * <p>The Amazon ES instances that AWS recommends that you purchase.</p>
   */
  ESInstanceDetails?: ESInstanceDetails;
}

export namespace InstanceDetails {
  export const filterSensitiveLog = (obj: InstanceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details about your recommended reservation purchase.</p>
 */
export interface ReservationPurchaseRecommendationDetail {
  /**
   * <p>The account that this RI recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p>Details about the instances that AWS recommends that you purchase.</p>
   */
  InstanceDetails?: InstanceDetails;

  /**
   * <p>The number of instances that AWS recommends that you purchase.</p>
   */
  RecommendedNumberOfInstancesToPurchase?: string;

  /**
   * <p>The number of normalized units that AWS recommends that you purchase.</p>
   */
  RecommendedNormalizedUnitsToPurchase?: string;

  /**
   * <p>The minimum number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MinimumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The minimum number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MinimumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The maximum number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  MaximumNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The maximum number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  MaximumNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The average number of instances that you used in an hour during the historical
   *             period. AWS uses this to calculate your recommended reservation purchases.</p>
   */
  AverageNumberOfInstancesUsedPerHour?: string;

  /**
   * <p>The average number of normalized units that you used in an hour during the
   *             historical period. AWS uses this to calculate your recommended reservation
   *             purchases.</p>
   */
  AverageNormalizedUnitsUsedPerHour?: string;

  /**
   * <p>The average utilization of your instances. AWS uses this to calculate your
   *             recommended reservation purchases.</p>
   */
  AverageUtilization?: string;

  /**
   * <p>How long AWS estimates that it takes for this instance to start saving you money,
   *             in months.</p>
   */
  EstimatedBreakEvenInMonths?: string;

  /**
   * <p>The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a
   *             month.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>How much AWS estimates that this specific recommendation could save you in a month,
   *             as a percentage of your overall costs.</p>
   */
  EstimatedMonthlySavingsPercentage?: string;

  /**
   * <p>How much AWS estimates that you spend on On-Demand Instances in a month.</p>
   */
  EstimatedMonthlyOnDemandCost?: string;

  /**
   * <p>How much AWS estimates that you would have spent for all usage during the specified
   *             historical period if you had
   *             a
   *             reservation.</p>
   */
  EstimatedReservationCostForLookbackPeriod?: string;

  /**
   * <p>How much purchasing this instance costs you upfront.</p>
   */
  UpfrontCost?: string;

  /**
   * <p>How much purchasing this instance costs you on a monthly basis.</p>
   */
  RecurringStandardMonthlyCost?: string;
}

export namespace ReservationPurchaseRecommendationDetail {
  export const filterSensitiveLog = (obj: ReservationPurchaseRecommendationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A summary about this recommendation, such as the currency code, the amount that AWS
 *             estimates that you could save, and the total amount of reservation to
 *             purchase.</p>
 */
export interface ReservationPurchaseRecommendationSummary {
  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a
   *             month.</p>
   */
  TotalEstimatedMonthlySavingsAmount?: string;

  /**
   * <p>The total amount that AWS estimates that this recommendation could save you in a
   *             month, as a percentage of your costs.</p>
   */
  TotalEstimatedMonthlySavingsPercentage?: string;

  /**
   * <p>The currency code used for this recommendation.</p>
   */
  CurrencyCode?: string;
}

export namespace ReservationPurchaseRecommendationSummary {
  export const filterSensitiveLog = (obj: ReservationPurchaseRecommendationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A specific reservation that AWS recommends for purchase.</p>
 */
export interface ReservationPurchaseRecommendation {
  /**
   * <p>The account scope that AWS recommends that you purchase this instance for. For
   *             example, you can purchase this reservation for an entire organization in AWS
   *             Organizations.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>How many days of previous usage that AWS considers when making this
   *             recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>The term of the reservation that you want recommendations for, in years.</p>
   */
  TermInYears?: TermInYears | string;

  /**
   * <p>The payment option for the reservation. For example, <code>AllUpfront</code> or
   *                 <code>NoUpfront</code>.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>Hardware specifications for the service that you want recommendations
   *             for.</p>
   */
  ServiceSpecification?: ServiceSpecification;

  /**
   * <p>Details about the recommended purchases.</p>
   */
  RecommendationDetails?: ReservationPurchaseRecommendationDetail[];

  /**
   * <p>A summary about the recommended purchase.</p>
   */
  RecommendationSummary?: ReservationPurchaseRecommendationSummary;
}

export namespace ReservationPurchaseRecommendation {
  export const filterSensitiveLog = (obj: ReservationPurchaseRecommendation): any => ({
    ...obj,
  });
}

export interface GetReservationPurchaseRecommendationResponse {
  /**
   * <p>Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.</p>
   */
  Metadata?: ReservationPurchaseRecommendationMetadata;

  /**
   * <p>Recommendations for reservations to purchase.</p>
   */
  Recommendations?: ReservationPurchaseRecommendation[];

  /**
   * <p>The pagination token for the next set of retrievable results.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationPurchaseRecommendationResponse {
  export const filterSensitiveLog = (obj: GetReservationPurchaseRecommendationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The aggregated numbers for your reservation usage.</p>
 */
export interface ReservationAggregates {
  /**
   * <p>The percentage of reservation time that you used.</p>
   */
  UtilizationPercentage?: string;

  /**
   * <p>The percentage of Amazon EC2 reservation time that you used, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  UtilizationPercentageInUnits?: string;

  /**
   * <p>How many reservation hours that you purchased.</p>
   */
  PurchasedHours?: string;

  /**
   * <p>How many Amazon EC2 reservation hours that you purchased, converted to normalized units.
   *             Normalized units are available only for Amazon EC2 usage after November 11, 2017.</p>
   */
  PurchasedUnits?: string;

  /**
   * <p>The total number of reservation hours that you used.</p>
   */
  TotalActualHours?: string;

  /**
   * <p>The total number of Amazon EC2 reservation hours that you used, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  TotalActualUnits?: string;

  /**
   * <p>The number of reservation hours that you didn't use.</p>
   */
  UnusedHours?: string;

  /**
   * <p>The number of Amazon EC2 reservation hours that you didn't use, converted to normalized
   *             units. Normalized units are available only for Amazon EC2 usage after November 11,
   *             2017.</p>
   */
  UnusedUnits?: string;

  /**
   * <p>How much your reservation would cost if charged On-Demand rates.</p>
   */
  OnDemandCostOfRIHoursUsed?: string;

  /**
   * <p>How much you saved due to purchasing and utilizing reservation. AWS calculates this
   *             by subtracting <code>TotalAmortizedFee</code> from
   *                 <code>OnDemandCostOfRIHoursUsed</code>.</p>
   */
  NetRISavings?: string;

  /**
   * <p>How much you could save if you use your entire reservation.</p>
   */
  TotalPotentialRISavings?: string;

  /**
   * <p>The upfront cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  AmortizedUpfrontFee?: string;

  /**
   * <p>The monthly cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  AmortizedRecurringFee?: string;

  /**
   * <p>The total cost of your reservation, amortized over the reservation
   *             period.</p>
   */
  TotalAmortizedFee?: string;
}

export namespace ReservationAggregates {
  export const filterSensitiveLog = (obj: ReservationAggregates): any => ({
    ...obj,
  });
}

/**
 * <p>A group of reservations that share a set of attributes.</p>
 */
export interface ReservationUtilizationGroup {
  /**
   * <p>The key for a specific reservation attribute.</p>
   */
  Key?: string;

  /**
   * <p>The value of a specific reservation attribute.</p>
   */
  Value?: string;

  /**
   * <p>The attributes for this group of reservations.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>How much you used this group of reservations.</p>
   */
  Utilization?: ReservationAggregates;
}

export namespace ReservationUtilizationGroup {
  export const filterSensitiveLog = (obj: ReservationUtilizationGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of utilization, in hours.</p>
 */
export interface UtilizationByTime {
  /**
   * <p>The period of time that this utilization was used for.</p>
   */
  TimePeriod?: DateInterval;

  /**
   * <p>The groups that this utilization result uses.</p>
   */
  Groups?: ReservationUtilizationGroup[];

  /**
   * <p>The total number of reservation hours that were used.</p>
   */
  Total?: ReservationAggregates;
}

export namespace UtilizationByTime {
  export const filterSensitiveLog = (obj: UtilizationByTime): any => ({
    ...obj,
  });
}

export interface GetReservationUtilizationResponse {
  /**
   * <p>The amount of time that you used your RIs.</p>
   */
  UtilizationsByTime: UtilizationByTime[] | undefined;

  /**
   * <p>The total amount of time that you used your RIs.</p>
   */
  Total?: ReservationAggregates;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationUtilizationResponse {
  export const filterSensitiveLog = (obj: GetReservationUtilizationResponse): any => ({
    ...obj,
  });
}

export enum RecommendationTarget {
  CROSS_INSTANCE_FAMILY = "CROSS_INSTANCE_FAMILY",
  SAME_INSTANCE_FAMILY = "SAME_INSTANCE_FAMILY",
}

/**
 * <p> Enables you to customize recommendations across two attributes. You can choose to view
 *             recommendations for instances within the same instance families or across different instance
 *             families. You can also choose to view your estimated savings associated with recommendations
 *             with consideration of existing Savings Plans or RI benefits, or
 *             neither. </p>
 */
export interface RightsizingRecommendationConfiguration {
  /**
   * <p>
   *             The option to see recommendations within the same instance family, or recommendations for instances across other families. The default value is <code>SAME_INSTANCE_FAMILY</code>.
   *         </p>
   */
  RecommendationTarget: RecommendationTarget | string | undefined;

  /**
   * <p>
   *             The option to consider RI or Savings Plans discount benefits in your savings calculation. The default value is <code>TRUE</code>.
   *         </p>
   */
  BenefitsConsidered: boolean | undefined;
}

export namespace RightsizingRecommendationConfiguration {
  export const filterSensitiveLog = (obj: RightsizingRecommendationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata for this recommendation set.</p>
 */
export interface RightsizingRecommendationMetadata {
  /**
   * <p> The ID for this specific recommendation.</p>
   */
  RecommendationId?: string;

  /**
   * <p> The timestamp for when AWS made this recommendation.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p> How many days of previous usage that AWS considers when making this
   *             recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;
}

export namespace RightsizingRecommendationMetadata {
  export const filterSensitiveLog = (obj: RightsizingRecommendationMetadata): any => ({
    ...obj,
  });
}

/**
 * <p> Details on the Amazon EC2 Resource.</p>
 */
export interface EC2ResourceDetails {
  /**
   * <p> Hourly public On-Demand rate for the instance type.</p>
   */
  HourlyOnDemandRate?: string;

  /**
   * <p> The type of AWS instance.</p>
   */
  InstanceType?: string;

  /**
   * <p> The platform of the AWS instance. The platform is the specific combination of
   *             operating system, license model, and software on an instance.</p>
   */
  Platform?: string;

  /**
   * <p> The AWS Region of the instance.</p>
   */
  Region?: string;

  /**
   * <p> The SKU of the product.</p>
   */
  Sku?: string;

  /**
   * <p> Memory capacity of the AWS instance.</p>
   */
  Memory?: string;

  /**
   * <p> Network performance capacity of the AWS instance.</p>
   */
  NetworkPerformance?: string;

  /**
   * <p> The disk storage of the AWS instance (not EBS storage).</p>
   */
  Storage?: string;

  /**
   * <p> Number of VCPU cores in the AWS instance type.</p>
   */
  Vcpu?: string;
}

export namespace EC2ResourceDetails {
  export const filterSensitiveLog = (obj: EC2ResourceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details on the resource.</p>
 */
export interface ResourceDetails {
  /**
   * <p>Details on the Amazon EC2 resource.</p>
   */
  EC2ResourceDetails?: EC2ResourceDetails;
}

export namespace ResourceDetails {
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The EBS field that contains a list of EBS metrics associated with the current instance.
 *         </p>
 */
export interface EBSResourceUtilization {
  /**
   * <p>
   *             The maximum number of read operations per second.
   *         </p>
   */
  EbsReadOpsPerSecond?: string;

  /**
   * <p>
   *             The maximum number of write operations per second.
   *         </p>
   */
  EbsWriteOpsPerSecond?: string;

  /**
   * <p>
   *             The maximum size of read operations per second
   *         </p>
   */
  EbsReadBytesPerSecond?: string;

  /**
   * <p>
   *             The maximum size of write operations per second.
   *         </p>
   */
  EbsWriteBytesPerSecond?: string;
}

export namespace EBSResourceUtilization {
  export const filterSensitiveLog = (obj: EBSResourceUtilization): any => ({
    ...obj,
  });
}

/**
 * <p> Utilization metrics of the instance.  </p>
 */
export interface EC2ResourceUtilization {
  /**
   * <p> Maximum observed or expected CPU utilization of the instance.</p>
   */
  MaxCpuUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected memory utilization of the instance.</p>
   */
  MaxMemoryUtilizationPercentage?: string;

  /**
   * <p> Maximum observed or expected storage utilization of the instance (does not measure EBS storage).</p>
   */
  MaxStorageUtilizationPercentage?: string;

  /**
   * <p>
   *             The EBS field that contains a list of EBS metrics associated with the current instance.
   *         </p>
   */
  EBSResourceUtilization?: EBSResourceUtilization;
}

export namespace EC2ResourceUtilization {
  export const filterSensitiveLog = (obj: EC2ResourceUtilization): any => ({
    ...obj,
  });
}

/**
 * <p>Resource utilization of current resource.  </p>
 */
export interface ResourceUtilization {
  /**
   * <p>Utilization of current Amazon EC2 instance. </p>
   */
  EC2ResourceUtilization?: EC2ResourceUtilization;
}

export namespace ResourceUtilization {
  export const filterSensitiveLog = (obj: ResourceUtilization): any => ({
    ...obj,
  });
}

/**
 * <p>Context about the current instance.</p>
 */
export interface CurrentInstance {
  /**
   * <p>Resource ID of the current instance.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name you've given an instance. This field will show as blank if you haven't given the instance a name.</p>
   */
  InstanceName?: string;

  /**
   * <p>Cost allocation resource tags applied to the instance.</p>
   */
  Tags?: TagValues[];

  /**
   * <p> Details about the resource and utilization.</p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p> Utilization information of the current instance during the lookback period.</p>
   */
  ResourceUtilization?: ResourceUtilization;

  /**
   * <p> Number of hours during the lookback period covered by reservations.</p>
   */
  ReservationCoveredHoursInLookbackPeriod?: string;

  /**
   * <p>Number of hours during the lookback period covered by Savings Plans.</p>
   */
  SavingsPlansCoveredHoursInLookbackPeriod?: string;

  /**
   * <p> Number of hours during the lookback period billed at On-Demand rates.</p>
   */
  OnDemandHoursInLookbackPeriod?: string;

  /**
   * <p> The total number of hours the instance ran during the lookback period.</p>
   */
  TotalRunningHoursInLookbackPeriod?: string;

  /**
   * <p> Current On-Demand cost of operating this instance on a monthly basis.</p>
   */
  MonthlyCost?: string;

  /**
   * <p> The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;
}

export namespace CurrentInstance {
  export const filterSensitiveLog = (obj: CurrentInstance): any => ({
    ...obj,
  });
}

/**
 * <p> Details on recommended instance.</p>
 */
export interface TargetInstance {
  /**
   * <p> Expected cost to operate this instance type on a monthly basis.</p>
   */
  EstimatedMonthlyCost?: string;

  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * <p> The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p> Indicates whether this recommendation is the defaulted AWS recommendation.</p>
   */
  DefaultTargetInstance?: boolean;

  /**
   * <p> Details on the target instance type.  </p>
   */
  ResourceDetails?: ResourceDetails;

  /**
   * <p> Expected utilization metrics for target instance type.</p>
   */
  ExpectedResourceUtilization?: ResourceUtilization;
}

export namespace TargetInstance {
  export const filterSensitiveLog = (obj: TargetInstance): any => ({
    ...obj,
  });
}

/**
 * <p> Details on the modification recommendation.</p>
 */
export interface ModifyRecommendationDetail {
  /**
   * <p>Identifies whether this instance type is the AWS default recommendation.</p>
   */
  TargetInstances?: TargetInstance[];
}

export namespace ModifyRecommendationDetail {
  export const filterSensitiveLog = (obj: ModifyRecommendationDetail): any => ({
    ...obj,
  });
}

export enum RightsizingType {
  MODIFY = "MODIFY",
  TERMINATE = "TERMINATE",
}

/**
 * <p> Details on termination recommendation.  </p>
 */
export interface TerminateRecommendationDetail {
  /**
   * <p> Estimated savings resulting from modification, on a monthly basis.</p>
   */
  EstimatedMonthlySavings?: string;

  /**
   * <p> The currency code that AWS used to calculate the costs for this instance.</p>
   */
  CurrencyCode?: string;
}

export namespace TerminateRecommendationDetail {
  export const filterSensitiveLog = (obj: TerminateRecommendationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Recommendations to rightsize resources.</p>
 */
export interface RightsizingRecommendation {
  /**
   * <p>The account that this recommendation is for.</p>
   */
  AccountId?: string;

  /**
   * <p> Context regarding the current instance.</p>
   */
  CurrentInstance?: CurrentInstance;

  /**
   * <p>Recommendation to either terminate or modify the resource.</p>
   */
  RightsizingType?: RightsizingType | string;

  /**
   * <p> Details for modification recommendations.  </p>
   */
  ModifyRecommendationDetail?: ModifyRecommendationDetail;

  /**
   * <p>Details for termination recommendations.</p>
   */
  TerminateRecommendationDetail?: TerminateRecommendationDetail;
}

export namespace RightsizingRecommendation {
  export const filterSensitiveLog = (obj: RightsizingRecommendation): any => ({
    ...obj,
  });
}

/**
 * <p> Summary of rightsizing recommendations  </p>
 */
export interface RightsizingRecommendationSummary {
  /**
   * <p> Total number of instance recommendations.</p>
   */
  TotalRecommendationCount?: string;

  /**
   * <p> Estimated total savings resulting from modifications, on a monthly basis.</p>
   */
  EstimatedTotalMonthlySavingsAmount?: string;

  /**
   * <p> The currency code that AWS used to calculate the savings.</p>
   */
  SavingsCurrencyCode?: string;

  /**
   * <p> Savings percentage based on the recommended modifications, relative to the total
   *             On-Demand
   *             costs associated with these instances.</p>
   */
  SavingsPercentage?: string;
}

export namespace RightsizingRecommendationSummary {
  export const filterSensitiveLog = (obj: RightsizingRecommendationSummary): any => ({
    ...obj,
  });
}

export interface GetRightsizingRecommendationResponse {
  /**
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: RightsizingRecommendationMetadata;

  /**
   * <p>Summary of this recommendation set.</p>
   */
  Summary?: RightsizingRecommendationSummary;

  /**
   * <p>Recommendations to rightsize resources.</p>
   */
  RightsizingRecommendations?: RightsizingRecommendation[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  NextPageToken?: string;

  /**
   * <p> Enables you to customize recommendations across two attributes. You can choose to view
   *       recommendations for instances within the same instance families or across different instance
   *       families. You can also choose to view your estimated savings associated with recommendations
   *       with consideration of existing Savings Plans or RI benefits, or
   *       neither. </p>
   */
  Configuration?: RightsizingRecommendationConfiguration;
}

export namespace GetRightsizingRecommendationResponse {
  export const filterSensitiveLog = (obj: GetRightsizingRecommendationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.</p>
 */
export interface SavingsPlansCoverageData {
  /**
   * <p>The amount of your AWS usage that is covered by a Savings Plans.</p>
   */
  SpendCoveredBySavingsPlans?: string;

  /**
   * <p>The cost of your AWS usage at the public On-Demand rate.</p>
   */
  OnDemandCost?: string;

  /**
   * <p>The total cost of your AWS usage, regardless of your purchase option.</p>
   */
  TotalCost?: string;

  /**
   * <p>The percentage of your existing Savings Plans covered usage, divided by all of your
   *             eligible Savings Plans usage in an account(or set of accounts).</p>
   */
  CoveragePercentage?: string;
}

export namespace SavingsPlansCoverageData {
  export const filterSensitiveLog = (obj: SavingsPlansCoverageData): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.</p>
 */
export interface SavingsPlansCoverage {
  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The amount of Savings Plans eligible usage that the Savings Plans covered.</p>
   */
  Coverage?: SavingsPlansCoverageData;

  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod?: DateInterval;
}

export namespace SavingsPlansCoverage {
  export const filterSensitiveLog = (obj: SavingsPlansCoverage): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansCoverageResponse {
  /**
   * <p>The amount of spend that your Savings Plans covered.</p>
   */
  SavingsPlansCoverages: SavingsPlansCoverage[] | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;
}

export namespace GetSavingsPlansCoverageResponse {
  export const filterSensitiveLog = (obj: GetSavingsPlansCoverageResponse): any => ({
    ...obj,
  });
}

export enum SupportedSavingsPlansType {
  COMPUTE_SP = "COMPUTE_SP",
  EC2_INSTANCE_SP = "EC2_INSTANCE_SP",
}

/**
 * <p>Metadata about your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationMetadata {
  /**
   * <p>The unique identifier for the recommendation set.</p>
   */
  RecommendationId?: string;

  /**
   * <p>The timestamp showing when the recommendations were generated.</p>
   */
  GenerationTimestamp?: string;

  /**
   * <p>Additional metadata that may be applicable to the recommendation.</p>
   */
  AdditionalMetadata?: string;
}

export namespace SavingsPlansPurchaseRecommendationMetadata {
  export const filterSensitiveLog = (obj: SavingsPlansPurchaseRecommendationMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Attribute details on a specific Savings Plan.</p>
 */
export interface SavingsPlansDetails {
  /**
   * <p>A collection of AWS resources in a geographic area. Each AWS Region is isolated and independent of the other Regions.</p>
   */
  Region?: string;

  /**
   * <p>A group of instance types that Savings Plans applies to.</p>
   */
  InstanceFamily?: string;

  /**
   * <p>The unique ID used to distinguish Savings Plans from one another.</p>
   */
  OfferingId?: string;
}

export namespace SavingsPlansDetails {
  export const filterSensitiveLog = (obj: SavingsPlansDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for your recommended Savings Plans.</p>
 */
export interface SavingsPlansPurchaseRecommendationDetail {
  /**
   * <p>Details for your recommended Savings Plans.</p>
   */
  SavingsPlansDetails?: SavingsPlansDetails;

  /**
   * <p>The <code>AccountID</code> the recommendation is generated for.</p>
   */
  AccountId?: string;

  /**
   * <p>The upfront cost of the recommended Savings Plans, based on the selected payment option.</p>
   */
  UpfrontCost?: string;

  /**
   * <p>The estimated return on investment based on the recommended Savings Plans purchased. This is calculated as <code>estimatedSavingsAmount</code>/ <code>estimatedSPCost</code>*100.</p>
   */
  EstimatedROI?: string;

  /**
   * <p>The currency code AWS used to generate the recommendations and present potential
   *             savings.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The cost of the recommended Savings Plans over the length of the lookback period.</p>
   */
  EstimatedSPCost?: string;

  /**
   * <p>The remaining On-Demand cost estimated to not be covered by the recommended Savings Plans, over the length of the lookback period.</p>
   */
  EstimatedOnDemandCost?: string;

  /**
   * <p>
   *             The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own.
   *         </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;

  /**
   * <p>The estimated savings amount based on the recommended Savings Plans over the length of the lookback period.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * <p>The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * <p>The recommended hourly commitment level for the Savings Plans type, and configuration based on the usage during the lookback period.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * <p>The estimated utilization of the recommended Savings Plans.</p>
   */
  EstimatedAverageUtilization?: string;

  /**
   * <p>The estimated monthly savings amount, based on the recommended Savings Plans.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentMinimumHourlyOnDemandSpend?: string;

  /**
   * <p>The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentMaximumHourlyOnDemandSpend?: string;

  /**
   * <p>The average value of hourly On-Demand spend over the lookback period of the applicable usage type.</p>
   */
  CurrentAverageHourlyOnDemandSpend?: string;
}

export namespace SavingsPlansPurchaseRecommendationDetail {
  export const filterSensitiveLog = (obj: SavingsPlansPurchaseRecommendationDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Summary metrics for your Savings Plans Purchase Recommendations.</p>
 */
export interface SavingsPlansPurchaseRecommendationSummary {
  /**
   * <p>The estimated return on investment based on the recommended Savings Plans and estimated savings.</p>
   */
  EstimatedROI?: string;

  /**
   * <p>The currency code AWS used to generate the recommendations and present potential
   *             savings.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The estimated total cost of the usage after purchasing the recommended Savings Plans. This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand usage.</p>
   */
  EstimatedTotalCost?: string;

  /**
   * <p>The current total on demand spend of the applicable usage types over the lookback period.</p>
   */
  CurrentOnDemandSpend?: string;

  /**
   * <p>The estimated total savings over the lookback period, based on the purchase of the recommended Savings Plans.</p>
   */
  EstimatedSavingsAmount?: string;

  /**
   * <p>The aggregate number of Savings Plans recommendations that exist for your account.</p>
   */
  TotalRecommendationCount?: string;

  /**
   * <p>The recommended Savings Plans cost on a daily (24 hourly) basis.</p>
   */
  DailyCommitmentToPurchase?: string;

  /**
   * <p>The recommended hourly commitment based on the recommendation parameters.</p>
   */
  HourlyCommitmentToPurchase?: string;

  /**
   * <p>The estimated savings relative to the total cost of On-Demand usage, over the lookback period. This is calculated as <code>estimatedSavingsAmount</code>/ <code>CurrentOnDemandSpend</code>*100.</p>
   */
  EstimatedSavingsPercentage?: string;

  /**
   * <p>The estimated monthly savings amount, based on the recommended Savings Plans purchase.</p>
   */
  EstimatedMonthlySavingsAmount?: string;

  /**
   * <p>
   *             The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own.
   *         </p>
   */
  EstimatedOnDemandCostWithCurrentCommitment?: string;
}

export namespace SavingsPlansPurchaseRecommendationSummary {
  export const filterSensitiveLog = (obj: SavingsPlansPurchaseRecommendationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains your request parameters, Savings Plan Recommendations Summary, and Details.</p>
 */
export interface SavingsPlansPurchaseRecommendation {
  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>The requested Savings Plans recommendation type.</p>
   */
  SavingsPlansType?: SupportedSavingsPlansType | string;

  /**
   * <p>The Savings Plans recommendation term in years, used to generate the recommendation.</p>
   */
  TermInYears?: TermInYears | string;

  /**
   * <p>The payment option used to generate the recommendation.</p>
   */
  PaymentOption?: PaymentOption | string;

  /**
   * <p>The lookback period in days, used to generate the recommendation.</p>
   */
  LookbackPeriodInDays?: LookbackPeriodInDays | string;

  /**
   * <p>Details for the Savings Plans we recommend that you purchase to cover existing Savings
   *             Plans eligible workloads.</p>
   */
  SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetail[];

  /**
   * <p>Summary metrics for your Savings Plans Recommendations. </p>
   */
  SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
}

export namespace SavingsPlansPurchaseRecommendation {
  export const filterSensitiveLog = (obj: SavingsPlansPurchaseRecommendation): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansPurchaseRecommendationResponse {
  /**
   * <p>Information regarding this specific recommendation set.</p>
   */
  Metadata?: SavingsPlansPurchaseRecommendationMetadata;

  /**
   * <p>Contains your request parameters, Savings Plan Recommendations Summary, and Details.</p>
   */
  SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetSavingsPlansPurchaseRecommendationResponse {
  export const filterSensitiveLog = (obj: GetSavingsPlansPurchaseRecommendationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The amortized amount of Savings Plans purchased in a specific account during a specific time interval.</p>
 */
export interface SavingsPlansAmortizedCommitment {
  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with either a <code>Partial</code> or a <code>NoUpfront</code>.</p>
   */
  AmortizedRecurringCommitment?: string;

  /**
   * <p>The amortized amount of your Savings Plans commitment that was purchased with an <code>Upfront</code> or <code>PartialUpfront</code> Savings Plans.</p>
   */
  AmortizedUpfrontCommitment?: string;

  /**
   * <p>The total amortized amount of your Savings Plans commitment, regardless of your Savings Plans purchase method. </p>
   */
  TotalAmortizedCommitment?: string;
}

export namespace SavingsPlansAmortizedCommitment {
  export const filterSensitiveLog = (obj: SavingsPlansAmortizedCommitment): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account.</p>
 */
export interface SavingsPlansSavings {
  /**
   * <p>The savings amount that you are accumulating for the usage that is covered by a Savings Plans, when compared to the On-Demand equivalent of the same usage.</p>
   */
  NetSavings?: string;

  /**
   * <p>How much the amount that the usage would have cost if it was
   *             accrued
   *             at the On-Demand rate.</p>
   */
  OnDemandCostEquivalent?: string;
}

export namespace SavingsPlansSavings {
  export const filterSensitiveLog = (obj: SavingsPlansSavings): any => ({
    ...obj,
  });
}

/**
 * <p>The measurement of how well you are using your existing Savings Plans.</p>
 */
export interface SavingsPlansUtilization {
  /**
   * <p>The total amount of Savings Plans commitment that's been purchased in an account (or set of accounts).</p>
   */
  TotalCommitment?: string;

  /**
   * <p>The amount of your Savings Plans commitment that was consumed from Savings Plans eligible usage in a specific period.</p>
   */
  UsedCommitment?: string;

  /**
   * <p>The amount of your Savings Plans commitment that was not consumed from Savings Plans eligible usage in a specific period.</p>
   */
  UnusedCommitment?: string;

  /**
   * <p>The amount of <code>UsedCommitment</code> divided by the <code>TotalCommitment</code> for your Savings Plans.</p>
   */
  UtilizationPercentage?: string;
}

export namespace SavingsPlansUtilization {
  export const filterSensitiveLog = (obj: SavingsPlansUtilization): any => ({
    ...obj,
  });
}

/**
 * <p>The amount of Savings Plans utilization, in hours.</p>
 */
export interface SavingsPlansUtilizationByTime {
  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export namespace SavingsPlansUtilizationByTime {
  export const filterSensitiveLog = (obj: SavingsPlansUtilizationByTime): any => ({
    ...obj,
  });
}

/**
 * <p>The aggregated utilization metrics for your Savings Plans usage.</p>
 */
export interface SavingsPlansUtilizationAggregates {
  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization: SavingsPlansUtilization | undefined;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans, as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export namespace SavingsPlansUtilizationAggregates {
  export const filterSensitiveLog = (obj: SavingsPlansUtilizationAggregates): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansUtilizationResponse {
  /**
   * <p>The amount of cost/commitment you used your Savings Plans. This allows you to specify date ranges.</p>
   */
  SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationByTime[];

  /**
   * <p>The total amount of cost/commitment that you used your Savings Plans, regardless of date ranges.</p>
   */
  Total: SavingsPlansUtilizationAggregates | undefined;
}

export namespace GetSavingsPlansUtilizationResponse {
  export const filterSensitiveLog = (obj: GetSavingsPlansUtilizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A single daily or monthly Savings Plans utilization rate, and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values. </p>
 */
export interface SavingsPlansUtilizationDetail {
  /**
   * <p>The unique Amazon Resource Name (ARN) for a particular Savings Plan.</p>
   */
  SavingsPlanArn?: string;

  /**
   * <p>The attribute that applies to a specific <code>Dimension</code>.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.</p>
   */
  Utilization?: SavingsPlansUtilization;

  /**
   * <p>The amount saved by using existing Savings Plans. Savings returns both net savings from savings plans as well as the <code>onDemandCostEquivalent</code> of the Savings Plans when considering the utilization rate.</p>
   */
  Savings?: SavingsPlansSavings;

  /**
   * <p>The total amortized commitment for a Savings Plans. Includes the sum of the upfront and recurring Savings Plans fees.</p>
   */
  AmortizedCommitment?: SavingsPlansAmortizedCommitment;
}

export namespace SavingsPlansUtilizationDetail {
  export const filterSensitiveLog = (obj: SavingsPlansUtilizationDetail): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansUtilizationDetailsResponse {
  /**
   * <p>Retrieves a single daily or monthly Savings Plans utilization rate and details for your account.</p>
   */
  SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetail[] | undefined;

  /**
   * <p>The total Savings Plans utilization, regardless of time period.</p>
   */
  Total?: SavingsPlansUtilizationAggregates;

  /**
   * <p>The time period that you want the usage and costs for.
   *         </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;
}

export namespace GetSavingsPlansUtilizationDetailsResponse {
  export const filterSensitiveLog = (obj: GetSavingsPlansUtilizationDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetTagsRequest {
  /**
   * <p>The value that you want to search for.</p>
   */
  SearchString?: string;

  /**
   * <p>The start and end dates for retrieving the dimension values. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The key of the tag that you want to return values for.</p>
   */
  TagKey?: string;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

export interface GetTagsResponse {
  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The tags that match your request.</p>
   */
  Tags: string[] | undefined;

  /**
   * <p>The number of query results that AWS returns at a time.</p>
   */
  ReturnSize: number | undefined;

  /**
   * <p>The total number of query results.</p>
   */
  TotalSize: number | undefined;
}

export namespace GetTagsResponse {
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj,
  });
}

export interface GetUsageForecastResponse {
  /**
   * <p>How much you're forecasted to use over the forecast period.</p>
   */
  Total?: MetricValue;

  /**
   * <p>The forecasts for your query, in order. For <code>DAILY</code> forecasts, this is a list of days. For <code>MONTHLY</code> forecasts,
   * 			this is a list of months.</p>
   */
  ForecastResultsByTime?: ForecastResult[];
}

export namespace GetUsageForecastResponse {
  export const filterSensitiveLog = (obj: GetUsageForecastResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Cost Explorer was unable to identify the usage unit. Provide <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units, for example: <code>hours</code>.</p>
 */
export interface UnresolvableUsageUnitException extends __SmithyException, $MetadataBearer {
  name: "UnresolvableUsageUnitException";
  $fault: "client";
  Message?: string;
}

export namespace UnresolvableUsageUnitException {
  export const filterSensitiveLog = (obj: UnresolvableUsageUnitException): any => ({
    ...obj,
  });
}

export interface ListCostCategoryDefinitionsRequest {
  /**
   * <p>
   *       The date when the Cost Category was effective.
   *     </p>
   */
  EffectiveOn?: string;

  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextToken?: string;

  /**
   * <p> The number of entries a paginated response contains. </p>
   */
  MaxResults?: number;
}

export namespace ListCostCategoryDefinitionsRequest {
  export const filterSensitiveLog = (obj: ListCostCategoryDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p>
 *         <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>
 */
export interface CostCategoryReference {
  /**
   * <p>
   *             The unique identifier for your Cost Category.
   *         </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name?: string;

  /**
   * <p>
   *             The Cost Category's effective start date.</p>
   */
  EffectiveStart?: string;

  /**
   * <p>
   *             The Cost Category's effective end date.</p>
   */
  EffectiveEnd?: string;

  /**
   * <p>
   *             The number of rules associated with a specific Cost Category.
   *         </p>
   */
  NumberOfRules?: number;

  /**
   * <p>
   *             The list of processing statuses for Cost Management products for a specific cost category.
   *         </p>
   */
  ProcessingStatus?: CostCategoryProcessingStatus[];

  /**
   * <p>
   *             A list of unique cost category values in a specific cost category.
   *         </p>
   */
  Values?: string[];
}

export namespace CostCategoryReference {
  export const filterSensitiveLog = (obj: CostCategoryReference): any => ({
    ...obj,
  });
}

export interface ListCostCategoryDefinitionsResponse {
  /**
   * <p>
   *       A reference to a Cost Category containing enough information to identify the Cost Category.
   *     </p>
   */
  CostCategoryReferences?: CostCategoryReference[];

  /**
   * <p>
   *       The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextToken?: string;
}

export namespace ListCostCategoryDefinitionsResponse {
  export const filterSensitiveLog = (obj: ListCostCategoryDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ProvideAnomalyFeedbackRequest {
  /**
   * <p>
   *       A cost anomaly ID.
   *     </p>
   */
  AnomalyId: string | undefined;

  /**
   * <p>Describes whether the cost anomaly was a planned activity or you considered it an anomaly. </p>
   */
  Feedback: AnomalyFeedbackType | string | undefined;
}

export namespace ProvideAnomalyFeedbackRequest {
  export const filterSensitiveLog = (obj: ProvideAnomalyFeedbackRequest): any => ({
    ...obj,
  });
}

export interface ProvideAnomalyFeedbackResponse {
  /**
   * <p>
   *       The ID of the modified cost anomaly.
   *     </p>
   */
  AnomalyId: string | undefined;
}

export namespace ProvideAnomalyFeedbackResponse {
  export const filterSensitiveLog = (obj: ProvideAnomalyFeedbackResponse): any => ({
    ...obj,
  });
}

export interface UpdateAnomalyMonitorRequest {
  /**
   * <p> Cost anomaly monitor Amazon Resource Names (ARNs). </p>
   */
  MonitorArn: string | undefined;

  /**
   * <p>
   *       The new name for the cost anomaly monitor.
   *     </p>
   */
  MonitorName?: string;
}

export namespace UpdateAnomalyMonitorRequest {
  export const filterSensitiveLog = (obj: UpdateAnomalyMonitorRequest): any => ({
    ...obj,
  });
}

export interface UpdateAnomalyMonitorResponse {
  /**
   * <p>
   *       A cost anomaly monitor ARN.
   *     </p>
   */
  MonitorArn: string | undefined;
}

export namespace UpdateAnomalyMonitorResponse {
  export const filterSensitiveLog = (obj: UpdateAnomalyMonitorResponse): any => ({
    ...obj,
  });
}

export interface UpdateAnomalySubscriptionRequest {
  /**
   * <p> A cost anomaly subscription Amazon Resource Name (ARN). </p>
   */
  SubscriptionArn: string | undefined;

  /**
   * <p>
   *       The update to the threshold value for receiving notifications.
   *     </p>
   */
  Threshold?: number;

  /**
   * <p>
   *       The update to the frequency value at which subscribers will receive notifications.
   *     </p>
   */
  Frequency?: AnomalySubscriptionFrequency | string;

  /**
   * <p>
   *       A list of cost anomaly subscription ARNs.
   *     </p>
   */
  MonitorArnList?: string[];

  /**
   * <p>
   *       The update to the subscriber list.
   *     </p>
   */
  Subscribers?: Subscriber[];

  /**
   * <p>
   *       The subscription's new name.
   *     </p>
   */
  SubscriptionName?: string;
}

export namespace UpdateAnomalySubscriptionRequest {
  export const filterSensitiveLog = (obj: UpdateAnomalySubscriptionRequest): any => ({
    ...obj,
  });
}

export interface UpdateAnomalySubscriptionResponse {
  /**
   * <p>
   *       A cost anomaly subscription ARN.
   *     </p>
   */
  SubscriptionArn: string | undefined;
}

export namespace UpdateAnomalySubscriptionResponse {
  export const filterSensitiveLog = (obj: UpdateAnomalySubscriptionResponse): any => ({
    ...obj,
  });
}

export interface UpdateCostCategoryDefinitionResponse {
  /**
   * <p>
   *       The unique identifier for your Cost Category.
   *     </p>
   */
  CostCategoryArn?: string;

  /**
   * <p>
   *       The Cost Category's effective start date.
   *     </p>
   */
  EffectiveStart?: string;
}

export namespace UpdateCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (obj: UpdateCostCategoryDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p>
 *         <ul>
 *             <li>
 *                 <p>Simple dimension values - You can set the dimension name and values for the
 *                     filters that you plan to use. For example, you can filter for
 *                     <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>. The
 *                         <code>Expression</code> example looks like:</p>
 *                 <p>
 *                   <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1",
 *                         “us-west-1” ] } }</code>
 *                 </p>
 *                 <p>The list of dimension values are OR'd together to retrieve cost or usage
 *                     data. You can create <code>Expression</code> and <code>DimensionValues</code>
 *                     objects using either <code>with*</code> methods or <code>set*</code> methods in
 *                     multiple lines. </p>
 *             </li>
 *             <li>
 *                 <p>Compound dimension values with logical operations - You can use multiple
 *                         <code>Expression</code> types and the logical operators
 *                         <code>AND/OR/NOT</code> to create a list of one or more
 *                         <code>Expression</code> objects. This allows you to filter on more advanced
 *                     options. For example, you can filter on <code>((REGION == us-east-1 OR
 *                         REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
 *                         DataTransfer)</code>. The <code>Expression</code> for that looks like
 *                     this:</p>
 *                 <p>
 *                   <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION",
 *                         "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName",
 *                         "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE",
 *                         "Values": ["DataTransfer"] }}} ] } </code>
 *                </p>
 *                 <note>
 *                     <p>Because each <code>Expression</code> can have only one operator, the
 *                         service returns an error if more than one is specified. The following
 *                         example shows an <code>Expression</code> object that creates an
 *                         error.</p>
 *                 </note>
 *                 <p>
 *                     <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE",
 *                         "Values": [ "DataTransfer" ] } } </code>
 *                </p>
 *             </li>
 *          </ul>
 *         <note>
 *             <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not
 *                 supported. OR is not supported between different dimensions, or dimensions and tags.
 *                 NOT operators aren't supported.
 *                 Dimensions
 *                 are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
 *                     <code>RIGHTSIZING_TYPE</code>.</p>
 *          </note>
 */
export interface Expression {
  /**
   * <p>Return results that match either <code>Dimension</code> object.</p>
   */
  Or?: Expression[];

  /**
   * <p>Return results that match both <code>Dimension</code> objects.</p>
   */
  And?: Expression[];

  /**
   * <p>Return results that don't match a <code>Dimension</code> object.</p>
   */
  Not?: Expression;

  /**
   * <p>The specific <code>Dimension</code> to use for <code>Expression</code>.</p>
   */
  Dimensions?: DimensionValues;

  /**
   * <p>The specific <code>Tag</code> to use for <code>Expression</code>.</p>
   */
  Tags?: TagValues;

  /**
   * <p>The filter based on <code>CostCategory</code> values.</p>
   */
  CostCategories?: CostCategoryValues;
}

export namespace Expression {
  export const filterSensitiveLog = (obj: Expression): any => ({
    ...obj,
  });
}

/**
 * <p> This object continuously inspects your account's cost data for anomalies, based on
 *                 <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists
 *             of detailed metadata and the current status of the monitor object. </p>
 */
export interface AnomalyMonitor {
  /**
   * <p> The Amazon Resource Name (ARN) value. </p>
   */
  MonitorArn?: string;

  /**
   * <p>
   *         The name of the monitor.
   *     </p>
   */
  MonitorName: string | undefined;

  /**
   * <p>
   *         The date when the monitor was created.
   *     </p>
   */
  CreationDate?: string;

  /**
   * <p>
   *         The date when the monitor was last updated.
   *     </p>
   */
  LastUpdatedDate?: string;

  /**
   * <p>
   *         The date when the monitor last evaluated for anomalies.
   *     </p>
   */
  LastEvaluatedDate?: string;

  /**
   * <p>
   *         The possible type values.
   *     </p>
   */
  MonitorType: MonitorType | string | undefined;

  /**
   * <p>
   *         The dimensions to evaluate.
   *     </p>
   */
  MonitorDimension?: MonitorDimension | string;

  /**
   * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p>
   *         <ul>
   *             <li>
   *                 <p>Simple dimension values - You can set the dimension name and values for the
   *                     filters that you plan to use. For example, you can filter for
   *                     <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>. The
   *                         <code>Expression</code> example looks like:</p>
   *                 <p>
   *                   <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1",
   *                         “us-west-1” ] } }</code>
   *                 </p>
   *                 <p>The list of dimension values are OR'd together to retrieve cost or usage
   *                     data. You can create <code>Expression</code> and <code>DimensionValues</code>
   *                     objects using either <code>with*</code> methods or <code>set*</code> methods in
   *                     multiple lines. </p>
   *             </li>
   *             <li>
   *                 <p>Compound dimension values with logical operations - You can use multiple
   *                         <code>Expression</code> types and the logical operators
   *                         <code>AND/OR/NOT</code> to create a list of one or more
   *                         <code>Expression</code> objects. This allows you to filter on more advanced
   *                     options. For example, you can filter on <code>((REGION == us-east-1 OR
   *                         REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                         DataTransfer)</code>. The <code>Expression</code> for that looks like
   *                     this:</p>
   *                 <p>
   *                   <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION",
   *                         "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName",
   *                         "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE",
   *                         "Values": ["DataTransfer"] }}} ] } </code>
   *                </p>
   *                 <note>
   *                     <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an
   *                         error.</p>
   *                 </note>
   *                 <p>
   *                     <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE",
   *                         "Values": [ "DataTransfer" ] } } </code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not
   *                 supported. OR is not supported between different dimensions, or dimensions and tags.
   *                 NOT operators aren't supported.
   *                 Dimensions
   *                 are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *          </note>
   */
  MonitorSpecification?: Expression;

  /**
   * <p>
   *         The value for evaluated dimensions.
   *     </p>
   */
  DimensionalValueCount?: number;
}

export namespace AnomalyMonitor {
  export const filterSensitiveLog = (obj: AnomalyMonitor): any => ({
    ...obj,
  });
}

/**
 * <p>Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.</p>
 */
export interface CostCategoryRule {
  /**
   * <p>The value a line item will be categorized as, if it matches the rule.</p>
   */
  Value: string | undefined;

  /**
   * <p>An <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>
   *             object used to categorize costs. This supports dimensions, tags, and nested expressions.
   *             Currently the only dimensions supported are <code>LINKED_ACCOUNT</code>,
   *                 <code>SERVICE_CODE</code>, <code>RECORD_TYPE</code>, and
   *                 <code>LINKED_ACCOUNT_NAME</code>.</p>
   *         <p>Root level <code>OR</code> is not supported. We recommend that you create a separate
   *             rule instead.</p>
   *
   *         <p>
   *             <code>RECORD_TYPE</code> is a dimension used for Cost Explorer APIs, and is also
   *             supported for Cost Category expressions. This dimension uses different terms, depending
   *             on whether you're using the console or API/JSON editor. For a detailed comparison, see
   *             <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html#cost-categories-terms">Term Comparisons</a> in the <i>AWS Billing and Cost Management User
   *                 Guide</i>.</p>
   */
  Rule: Expression | undefined;
}

export namespace CostCategoryRule {
  export const filterSensitiveLog = (obj: CostCategoryRule): any => ({
    ...obj,
  });
}

export interface GetCostAndUsageRequest {
  /**
   * <p>Sets the start and end dates for retrieving AWS costs. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Sets the AWS cost granularity to <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set,
   * 	    the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters AWS costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code>
   * 			and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects
   * 			to define any combination of dimension filters. For more information, see
   * 			<a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   */
  Filter?: Expression;

  /**
   * <p>Which metrics are returned in the query. For more information about blended and unblended rates, see
   * 			<a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   * 				appear on some line items in my bill?</a>. </p>
   * 		       <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>,
   * 			<code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p>
   * 		       <note>
   * 			         <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without
   * 				taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2,
   * 				the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units
   * 				(for example, hours vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or
   * 				<code>UsageTypeGroups</code>. </p>
   * 		       </note>
   * 		       <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>
   */
  Metrics: string[] | undefined;

  /**
   * <p>You can group AWS costs using up to two different groups, either dimensions, tag keys,
   *       cost categories, or any two group by types.</p>
   * 		       <p>When you group by tag key, you get all tag values, including empty strings.</p>
   * 		       <p>Valid values are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>LINKED_ACCOUNT</code>,
   * 			<code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TAGS</code>,
   * 		  <code>TENANCY</code>, <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetCostAndUsageRequest {
  export const filterSensitiveLog = (obj: GetCostAndUsageRequest): any => ({
    ...obj,
  });
}

export interface GetCostAndUsageWithResourcesRequest {
  /**
   * <p>Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Sets the AWS cost granularity to <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. If
   * 	    <code>Granularity</code> isn't set, the response object doesn't include the
   * 	    <code>Granularity</code>, <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. </p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters Amazon Web Services costs by different dimensions. For example, you can specify
   *       <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated
   *       with that account's usage of that service. You can nest <code>Expression</code> objects to
   *       define any combination of dimension filters. For more information, see <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>. </p>
   *          <p>The <code>GetCostAndUsageWithResources</code> operation requires that you either group by or filter by a
   *       <code>ResourceId</code>. It requires the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a>
   *             <code>"SERVICE = Amazon Elastic Compute Cloud - Compute"</code> in the filter.</p>
   */
  Filter: Expression | undefined;

  /**
   * <p>Which metrics are returned in the query. For more information about blended and
   *       unblended rates, see <a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does
   *         the "blended" annotation appear on some line items in my bill?</a>. </p>
   *          <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>,
   *       <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>,
   *       <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and
   *       <code>UsageQuantity</code>. </p>
   *          <note>
   *             <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage
   *         numbers without taking the units into account. For example, if you aggregate
   *         <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because
   *         Amazon EC2 compute hours and data transfer are measured in different units (for example, hours
   *         vs. GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by
   *         <code>UsageType</code> or <code>UsageTypeGroups</code>. </p>
   *          </note>
   *          <p>
   *             <code>Metrics</code> is required for <code>GetCostAndUsageWithResources</code> requests.</p>
   */
  Metrics?: string[];

  /**
   * <p>You can group Amazon Web Services costs using up to two different groups: <code>DIMENSION</code>, <code>TAG</code>, <code>COST_CATEGORY</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetCostAndUsageWithResourcesRequest {
  export const filterSensitiveLog = (obj: GetCostAndUsageWithResourcesRequest): any => ({
    ...obj,
  });
}

export interface GetCostForecastRequest {
  /**
   * <p>The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see
   * 			<a href="http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/">Why does the "blended" annotation
   * 				appear on some line items in my bill?</a>. </p>
   * 		       <p>Valid values for a <code>GetCostForecast</code> call are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>AMORTIZED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>BLENDED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>NET_AMORTIZED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>NET_UNBLENDED_COST</p>
   * 			         </li>
   *             <li>
   * 				           <p>UNBLENDED_COST</p>
   * 			         </li>
   *          </ul>
   */
  Metric: Metric | string | undefined;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   * 		       <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | string | undefined;

  /**
   * <p>The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.</p>
   */
  Filter?: Expression;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean
   * 			by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value
   * 			falling in the prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;
}

export namespace GetCostForecastRequest {
  export const filterSensitiveLog = (obj: GetCostForecastRequest): any => ({
    ...obj,
  });
}

/**
 * <p>You can use the following request parameters to query for how much of your instance usage a reservation covered.</p>
 */
export interface GetReservationCoverageRequest {
  /**
   * <p>The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data
   * 			for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>You can group the data by the following attributes:</p>
   * 		       <ul>
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
   *                <p>TENANCY</p>
   *             </li>
   *          </ul>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The granularity of the AWS cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p>
   * 		       <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set,
   * 			the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p>
   * 		       <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters utilization data by dimensions. You can filter by the following dimensions:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>GetReservationCoverage</code> uses the same
   * 			<a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   * 			as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep.
   * 			If there are multiple values for a dimension, they are OR'd together.</p>
   * 		       <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p>
   * 	        <p>Cost category is also supported.</p>
   */
  Filter?: Expression;

  /**
   * <p>The measurement that you want your reservation coverage reported in.</p>
   * 		       <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use multiple values in a request.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationCoverageRequest {
  export const filterSensitiveLog = (obj: GetReservationCoverageRequest): any => ({
    ...obj,
  });
}

export interface GetReservationUtilizationRequest {
  /**
   * <p>Sets the start and end dates for retrieving RI utilization. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   *             retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. </p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set,
   * 			the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.
   * 			If both <code>GroupBy</code> and <code>Granularity</code> aren't set, <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p>
   * 		       <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters utilization data by dimensions. You can filter by the following dimensions:</p>
   * 		       <ul>
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
   * 		       <p>
   *             <code>GetReservationUtilization</code> uses the same
   * 			<a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   * 			as the other operations, but only <code>AND</code> is supported among each dimension, and nesting is supported up to
   * 			only one level deep. If there are multiple values for a dimension, they are OR'd together.</p>
   */
  Filter?: Expression;

  /**
   * <p>The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;
}

export namespace GetReservationUtilizationRequest {
  export const filterSensitiveLog = (obj: GetReservationUtilizationRequest): any => ({
    ...obj,
  });
}

export interface GetRightsizingRecommendationRequest {
  /**
   * <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p>
   *         <ul>
   *             <li>
   *                 <p>Simple dimension values - You can set the dimension name and values for the
   *                     filters that you plan to use. For example, you can filter for
   *                     <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>. The
   *                         <code>Expression</code> example looks like:</p>
   *                 <p>
   *                   <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1",
   *                         “us-west-1” ] } }</code>
   *                 </p>
   *                 <p>The list of dimension values are OR'd together to retrieve cost or usage
   *                     data. You can create <code>Expression</code> and <code>DimensionValues</code>
   *                     objects using either <code>with*</code> methods or <code>set*</code> methods in
   *                     multiple lines. </p>
   *             </li>
   *             <li>
   *                 <p>Compound dimension values with logical operations - You can use multiple
   *                         <code>Expression</code> types and the logical operators
   *                         <code>AND/OR/NOT</code> to create a list of one or more
   *                         <code>Expression</code> objects. This allows you to filter on more advanced
   *                     options. For example, you can filter on <code>((REGION == us-east-1 OR
   *                         REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE !=
   *                         DataTransfer)</code>. The <code>Expression</code> for that looks like
   *                     this:</p>
   *                 <p>
   *                   <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION",
   *                         "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName",
   *                         "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE",
   *                         "Values": ["DataTransfer"] }}} ] } </code>
   *                </p>
   *                 <note>
   *                     <p>Because each <code>Expression</code> can have only one operator, the
   *                         service returns an error if more than one is specified. The following
   *                         example shows an <code>Expression</code> object that creates an
   *                         error.</p>
   *                 </note>
   *                 <p>
   *                     <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE",
   *                         "Values": [ "DataTransfer" ] } } </code>
   *                </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not
   *                 supported. OR is not supported between different dimensions, or dimensions and tags.
   *                 NOT operators aren't supported.
   *                 Dimensions
   *                 are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or
   *                     <code>RIGHTSIZING_TYPE</code>.</p>
   *          </note>
   */
  Filter?: Expression;

  /**
   * <p> Enables you to customize recommendations across two attributes. You can choose to view
   *       recommendations for instances within the same instance families or across different instance
   *       families. You can also choose to view your estimated savings associated with recommendations
   *       with consideration of existing Savings Plans or RI benefits, or
   *       neither. </p>
   */
  Configuration?: RightsizingRecommendationConfiguration;

  /**
   * <p>The specific service that you want recommendations for. The only valid value for <code>GetRightsizingRecommendation</code> is
   *     	"<code>AmazonEC2</code>".</p>
   */
  Service: string | undefined;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The pagination token that indicates the next set of results that you want to retrieve.</p>
   */
  NextPageToken?: string;
}

export namespace GetRightsizingRecommendationRequest {
  export const filterSensitiveLog = (obj: GetRightsizingRecommendationRequest): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansCoverageRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>You can group the data using the attributes <code>INSTANCE_FAMILY</code>, <code>REGION</code>, or <code>SERVICE</code>.</p>
   */
  GroupBy?: GroupDefinition[];

  /**
   * <p>The granularity of the Amazon Web Services cost data for your Savings Plans. <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p>
   * 	        <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:</p>
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
   *             <code>GetSavingsPlansCoverage</code> uses the same
   *       <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension. If there are multiple values for a dimension, they are OR'd together.</p>
   *          <p>Cost category is also supported.</p>
   */
  Filter?: Expression;

  /**
   * <p>The measurement that you want your Savings Plans coverage reported in. The only valid value is <code>SpendCoveredBySavingsPlans</code>.</p>
   */
  Metrics?: string[];

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;
}

export namespace GetSavingsPlansCoverageRequest {
  export const filterSensitiveLog = (obj: GetSavingsPlansCoverageRequest): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansPurchaseRecommendationRequest {
  /**
   * <p>The Savings Plans recommendation type requested.</p>
   */
  SavingsPlansType: SupportedSavingsPlansType | string | undefined;

  /**
   * <p>The savings plan recommendation term used to
   *       generate these
   *       recommendations.</p>
   */
  TermInYears: TermInYears | string | undefined;

  /**
   * <p>The payment option used to generate these recommendations.</p>
   */
  PaymentOption: PaymentOption | string | undefined;

  /**
   * <p>The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.</p>
   */
  AccountScope?: AccountScope | string;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * <p>The number of recommendations that you want returned in a single response object.</p>
   */
  PageSize?: number;

  /**
   * <p>The lookback period used to generate the recommendation.</p>
   */
  LookbackPeriodInDays: LookbackPeriodInDays | string | undefined;

  /**
   * <p>You can filter your recommendations by Account ID with the <code>LINKED_ACCOUNT</code>
   *       dimension. To filter your recommendations by Account ID, specify <code>Key</code> as
   *         <code>LINKED_ACCOUNT</code> and <code>Value</code> as the comma-separated Acount ID(s) for
   *       which you want to see Savings Plans purchase recommendations.</p>
   *          <p>For GetSavingsPlansPurchaseRecommendation, the <code>Filter</code> does not include
   *         <code>CostCategories</code> or <code>Tags</code>. It only includes <code>Dimensions</code>.
   *       With <code>Dimensions</code>, <code>Key</code> must be <code>LINKED_ACCOUNT</code> and
   *         <code>Value</code> can be a single Account ID or multiple comma-separated Account IDs for
   *       which you want to see Savings Plans Purchase Recommendations. <code>AND</code> and
   *         <code>OR</code> operators are not supported.</p>
   */
  Filter?: Expression;
}

export namespace GetSavingsPlansPurchaseRecommendationRequest {
  export const filterSensitiveLog = (obj: GetSavingsPlansPurchaseRecommendationRequest): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansUtilizationDetailsRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions.  You can filter data with the following dimensions:</p>
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
   *             <code>GetSavingsPlansUtilizationDetails</code> uses the same
   *       <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   */
  Filter?: Expression;

  /**
   * <p>The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.</p>
   */
  MaxResults?: number;
}

export namespace GetSavingsPlansUtilizationDetailsRequest {
  export const filterSensitiveLog = (obj: GetSavingsPlansUtilizationDetailsRequest): any => ({
    ...obj,
  });
}

export interface GetSavingsPlansUtilizationRequest {
  /**
   * <p>The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>The granularity of the Amazon Web Services utillization data for your Savings Plans.</p>
   * 	        <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity?: Granularity | string;

  /**
   * <p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions.  You can filter data with the following dimensions:</p>
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
   *             <code>GetSavingsPlansUtilization</code> uses the same
   *       <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html">Expression</a> object
   *       as the other operations, but only <code>AND</code> is supported among each dimension.</p>
   */
  Filter?: Expression;
}

export namespace GetSavingsPlansUtilizationRequest {
  export const filterSensitiveLog = (obj: GetSavingsPlansUtilizationRequest): any => ({
    ...obj,
  });
}

export interface GetUsageForecastRequest {
  /**
   * <p>The start and end dates of the period that you want to retrieve usage forecast for. The start date is inclusive,  but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is
   * 		  retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. The start date must be equal to or later than the current date to avoid a validation error.</p>
   */
  TimePeriod: DateInterval | undefined;

  /**
   * <p>Which metric Cost Explorer uses to create your forecast.</p>
   * 		       <p>Valid values for a <code>GetUsageForecast</code> call are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>USAGE_QUANTITY</p>
   * 			         </li>
   *             <li>
   * 				           <p>NORMALIZED_USAGE_AMOUNT</p>
   * 			         </li>
   *          </ul>
   */
  Metric: Metric | string | undefined;

  /**
   * <p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p>
   * 		       <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>
   */
  Granularity: Granularity | string | undefined;

  /**
   * <p>The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.</p>
   */
  Filter?: Expression;

  /**
   * <p>Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean
   * 			by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value
   * 			falling in the prediction interval. Higher confidence levels result in wider prediction intervals.</p>
   */
  PredictionIntervalLevel?: number;
}

export namespace GetUsageForecastRequest {
  export const filterSensitiveLog = (obj: GetUsageForecastRequest): any => ({
    ...obj,
  });
}

export interface CreateAnomalyMonitorRequest {
  /**
   * <p> The cost anomaly detection monitor object that you want to create.</p>
   */
  AnomalyMonitor: AnomalyMonitor | undefined;
}

export namespace CreateAnomalyMonitorRequest {
  export const filterSensitiveLog = (obj: CreateAnomalyMonitorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.</p>
 */
export interface CostCategory {
  /**
   * <p>
   *             The unique identifier for your Cost Category.
   *         </p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>
   *             The Cost Category's effective start date.</p>
   */
  EffectiveStart: string | undefined;

  /**
   * <p>
   *             The Cost Category's effective end date.</p>
   */
  EffectiveEnd?: string;

  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>
   *             Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
   *         </p>
   */
  Rules: CostCategoryRule[] | undefined;

  /**
   * <p>
   *             The list of processing statuses for Cost Management products for a specific cost category.
   *         </p>
   */
  ProcessingStatus?: CostCategoryProcessingStatus[];
}

export namespace CostCategory {
  export const filterSensitiveLog = (obj: CostCategory): any => ({
    ...obj,
  });
}

export interface CreateCostCategoryDefinitionRequest {
  /**
   * <p>The unique name of the Cost Category.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>The Cost Category rules used to categorize costs. For more information, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule</a>.</p>
   */
  Rules: CostCategoryRule[] | undefined;
}

export namespace CreateCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (obj: CreateCostCategoryDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetAnomalyMonitorsResponse {
  /**
   * <p>
   *       A list of cost anomaly monitors that includes the detailed metadata for each monitor.
   *     </p>
   */
  AnomalyMonitors: AnomalyMonitor[] | undefined;

  /**
   * <p>
   *       The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
   *     </p>
   */
  NextPageToken?: string;
}

export namespace GetAnomalyMonitorsResponse {
  export const filterSensitiveLog = (obj: GetAnomalyMonitorsResponse): any => ({
    ...obj,
  });
}

export interface UpdateCostCategoryDefinitionRequest {
  /**
   * <p>The unique identifier for your Cost Category.</p>
   */
  CostCategoryArn: string | undefined;

  /**
   * <p>The rule schema version in this particular Cost Category.</p>
   */
  RuleVersion: CostCategoryRuleVersion | string | undefined;

  /**
   * <p>The <code>Expression</code> object used to categorize costs. For more information, see
   *         <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html">CostCategoryRule </a>. </p>
   */
  Rules: CostCategoryRule[] | undefined;
}

export namespace UpdateCostCategoryDefinitionRequest {
  export const filterSensitiveLog = (obj: UpdateCostCategoryDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DescribeCostCategoryDefinitionResponse {
  /**
   * <p>The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.</p>
   */
  CostCategory?: CostCategory;
}

export namespace DescribeCostCategoryDefinitionResponse {
  export const filterSensitiveLog = (obj: DescribeCostCategoryDefinitionResponse): any => ({
    ...obj,
  });
}
