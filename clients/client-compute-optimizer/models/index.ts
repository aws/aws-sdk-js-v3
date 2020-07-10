import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

/**
 * <p>Describes the configuration of an Auto Scaling group.</p>
 */
export interface AutoScalingGroupConfiguration {
  __type?: "AutoScalingGroupConfiguration";
  /**
   * <p>The desired capacity, or number of instances, for the Auto Scaling group.</p>
   */
  desiredCapacity?: number;

  /**
   * <p>The instance type for the Auto Scaling group.</p>
   */
  instanceType?: string;

  /**
   * <p>The maximum size, or maximum number of instances, for the Auto Scaling group.</p>
   */
  maxSize?: number;

  /**
   * <p>The minimum size, or minimum number of instances, for the Auto Scaling group.</p>
   */
  minSize?: number;
}

export namespace AutoScalingGroupConfiguration {
  export const filterSensitiveLog = (obj: AutoScalingGroupConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupConfiguration => __isa(o, "AutoScalingGroupConfiguration");
}

/**
 * <p>Describes an Auto Scaling group recommendation.</p>
 */
export interface AutoScalingGroupRecommendation {
  __type?: "AutoScalingGroupRecommendation";
  /**
   * <p>The AWS account ID of the Auto Scaling group.</p>
   */
  accountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   */
  autoScalingGroupArn?: string;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  autoScalingGroupName?: string;

  /**
   * <p>An array of objects that describe the current configuration of the Auto Scaling group.</p>
   */
  currentConfiguration?: AutoScalingGroupConfiguration;

  /**
   * <p>The finding classification for the Auto Scaling group.</p>
   *         <p>Findings for Auto Scaling groups include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—An Auto Scaling group is
   *                     considered not optimized when AWS Compute Optimizer identifies a recommendation that can
   *                     provide better performance for your workload.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An Auto Scaling group is
   *                     considered optimized when Compute Optimizer determines that the group is correctly
   *                     provisioned to run your workload based on the chosen instance type. For
   *                     optimized resources, Compute Optimizer might recommend a new generation instance
   *                     type.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>The values that are returned might be <code>NOT_OPTIMIZED</code> or
   *                     <code>OPTIMIZED</code>.</p>
   *         </note>
   */
  finding?: Finding | string;

  /**
   * <p>The time stamp of when the Auto Scaling group recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the Auto Scaling
   *             group.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>An array of objects that describe the recommendation options for the Auto Scaling
   *             group.</p>
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  /**
   * <p>An array of objects that describe the utilization metrics of the Auto Scaling group.</p>
   */
  utilizationMetrics?: UtilizationMetric[];
}

export namespace AutoScalingGroupRecommendation {
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupRecommendation => __isa(o, "AutoScalingGroupRecommendation");
}

/**
 * <p>Describes a recommendation option for an Auto Scaling group.</p>
 */
export interface AutoScalingGroupRecommendationOption {
  __type?: "AutoScalingGroupRecommendationOption";
  /**
   * <p>An array of objects that describe an Auto Scaling group configuration.</p>
   */
  configuration?: AutoScalingGroupConfiguration;

  /**
   * <p>The performance risk of the Auto Scaling group configuration recommendation.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group
   *             recommendation option.</p>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The rank of the Auto Scaling group recommendation option.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace AutoScalingGroupRecommendationOption {
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendationOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AutoScalingGroupRecommendationOption =>
    __isa(o, "AutoScalingGroupRecommendationOption");
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter.</p>
   *         <p>Specify <code>Finding</code> to filter the results to a specific findings
   *             classification.</p>
   *         <p>Specify <code>RecommendationSourceType</code> to filter the results to a specific
   *             resource type.</p>
   */
  name?: FilterName | string;

  /**
   * <p>The value of the filter.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>Finding</code>, and you're
   *             recommendations for an <i>instance</i>, then the valid values are
   *                 <code>Underprovisioned</code>, <code>Overprovisioned</code>,
   *                 <code>NotOptimized</code>, or <code>Optimized</code>.</p>
   *         <p>If you specify the <code>name</code> parameter as <code>Finding</code>, and you're
   *             recommendations for an <i>Auto Scaling group</i>, then the valid values are
   *                 <code>Optimized</code>, or <code>NotOptimized</code>.</p>
   *         <p>If you specify the <code>name</code> parameter as
   *                 <code>RecommendationSourceType</code>, then the valid values are
   *                 <code>EC2Instance</code>, or <code>AutoScalingGroup</code>.</p>
   */
  values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export enum FilterName {
  FINDING = "Finding",
  RECOMMENDATION_SOURCE_TYPE = "RecommendationSourceType",
}

export enum Finding {
  NOT_OPTIMIZED = "NotOptimized",
  OPTIMIZED = "Optimized",
  OVER_PROVISIONED = "Overprovisioned",
  UNDER_PROVISIONED = "Underprovisioned",
}

export interface GetAutoScalingGroupRecommendationsRequest {
  __type?: "GetAutoScalingGroupRecommendationsRequest";
  /**
   * <p>The AWS account IDs for which to return Auto Scaling group recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return
   *             recommendations.</p>
   */
  autoScalingGroupArns?: string[];

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of Auto Scaling
   *             group recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The maximum number of Auto Scaling group recommendations to return with a single call.</p>
   *         <p>To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to advance to the next page of Auto Scaling group recommendations.</p>
   */
  nextToken?: string;
}

export namespace GetAutoScalingGroupRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoScalingGroupRecommendationsRequest =>
    __isa(o, "GetAutoScalingGroupRecommendationsRequest");
}

export interface GetAutoScalingGroupRecommendationsResponse {
  __type?: "GetAutoScalingGroupRecommendationsResponse";
  /**
   * <p>An array of objects that describe Auto Scaling group recommendations.</p>
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an unsupported
   *             Auto Scaling group.</p>
   */
  errors?: GetRecommendationError[];

  /**
   * <p>The token to use to advance to the next page of Auto Scaling group recommendations.</p>
   *         <p>This value is null when there are no more pages of Auto Scaling group recommendations to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace GetAutoScalingGroupRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAutoScalingGroupRecommendationsResponse =>
    __isa(o, "GetAutoScalingGroupRecommendationsResponse");
}

export interface GetEC2InstanceRecommendationsRequest {
  __type?: "GetEC2InstanceRecommendationsRequest";
  /**
   * <p>The AWS account IDs for which to return instance recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of
   *             instance recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return
   *             recommendations.</p>
   */
  instanceArns?: string[];

  /**
   * <p>The maximum number of instance recommendations to return with a single call.</p>
   *         <p>To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to advance to the next page of instance recommendations.</p>
   */
  nextToken?: string;
}

export namespace GetEC2InstanceRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2InstanceRecommendationsRequest =>
    __isa(o, "GetEC2InstanceRecommendationsRequest");
}

export interface GetEC2InstanceRecommendationsResponse {
  __type?: "GetEC2InstanceRecommendationsResponse";
  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   */
  errors?: GetRecommendationError[];

  /**
   * <p>An array of objects that describe instance recommendations.</p>
   */
  instanceRecommendations?: InstanceRecommendation[];

  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *         <p>This value is null when there are no more pages of instance recommendations to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace GetEC2InstanceRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2InstanceRecommendationsResponse =>
    __isa(o, "GetEC2InstanceRecommendationsResponse");
}

export interface GetEC2RecommendationProjectedMetricsRequest {
  __type?: "GetEC2RecommendationProjectedMetricsRequest";
  /**
   * <p>The time stamp of the last projected metrics data point to return.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return recommendation
   *             projected metrics.</p>
   */
  instanceArn: string | undefined;

  /**
   * <p>The granularity, in seconds, of the projected metrics data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The time stamp of the first projected metrics data point to return.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The statistic of the projected metrics.</p>
   */
  stat: MetricStatistic | string | undefined;
}

export namespace GetEC2RecommendationProjectedMetricsRequest {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2RecommendationProjectedMetricsRequest =>
    __isa(o, "GetEC2RecommendationProjectedMetricsRequest");
}

export interface GetEC2RecommendationProjectedMetricsResponse {
  __type?: "GetEC2RecommendationProjectedMetricsResponse";
  /**
   * <p>An array of objects that describe a projected metrics.</p>
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}

export namespace GetEC2RecommendationProjectedMetricsResponse {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEC2RecommendationProjectedMetricsResponse =>
    __isa(o, "GetEC2RecommendationProjectedMetricsResponse");
}

export interface GetEnrollmentStatusRequest {
  __type?: "GetEnrollmentStatusRequest";
}

export namespace GetEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnrollmentStatusRequest => __isa(o, "GetEnrollmentStatusRequest");
}

export interface GetEnrollmentStatusResponse {
  __type?: "GetEnrollmentStatusResponse";
  /**
   * <p>Confirms the enrollment status of member accounts within the organization, if the
   *             account is a master account of an organization.</p>
   */
  memberAccountsEnrolled?: boolean;

  /**
   * <p>The enrollment status of the account.</p>
   */
  status?: Status | string;

  /**
   * <p>The reason for the enrollment status of the account.</p>
   *         <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   */
  statusReason?: string;
}

export namespace GetEnrollmentStatusResponse {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEnrollmentStatusResponse => __isa(o, "GetEnrollmentStatusResponse");
}

/**
 * <p>Describes an error experienced when getting recommendations.</p>
 *         <p>For example, an error is returned if you request recommendations for an unsupported
 *             Auto Scaling group, or if you request recommendations for an instance of an unsupported instance
 *             family.</p>
 */
export interface GetRecommendationError {
  __type?: "GetRecommendationError";
  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The ID of the error.</p>
   */
  identifier?: string;

  /**
   * <p>The message, or reason, for the error.</p>
   */
  message?: string;
}

export namespace GetRecommendationError {
  export const filterSensitiveLog = (obj: GetRecommendationError): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationError => __isa(o, "GetRecommendationError");
}

export interface GetRecommendationSummariesRequest {
  __type?: "GetRecommendationSummariesRequest";
  /**
   * <p>The AWS account IDs for which to return recommendation summaries.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The maximum number of recommendation summaries to return with a single call.</p>
   *         <p>To retrieve the remaining results, make another call with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   */
  nextToken?: string;
}

export namespace GetRecommendationSummariesRequest {
  export const filterSensitiveLog = (obj: GetRecommendationSummariesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationSummariesRequest => __isa(o, "GetRecommendationSummariesRequest");
}

export interface GetRecommendationSummariesResponse {
  __type?: "GetRecommendationSummariesResponse";
  /**
   * <p>The token to use to advance to the next page of recommendation summaries.</p>
   *         <p>This value is null when there are no more pages of recommendation summaries to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that summarize a recommendation.</p>
   */
  recommendationSummaries?: RecommendationSummary[];
}

export namespace GetRecommendationSummariesResponse {
  export const filterSensitiveLog = (obj: GetRecommendationSummariesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetRecommendationSummariesResponse =>
    __isa(o, "GetRecommendationSummariesResponse");
}

/**
 * <p>Describes an Amazon EC2 instance recommendation.</p>
 */
export interface InstanceRecommendation {
  __type?: "InstanceRecommendation";
  /**
   * <p>The AWS account ID of the instance recommendation.</p>
   */
  accountId?: string;

  /**
   * <p>The instance type of the current instance.</p>
   */
  currentInstanceType?: string;

  /**
   * <p>The finding classification for the instance.</p>
   *         <p>Findings for instances include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Underprovisioned</code>
   *                   </b>—An instance is
   *                     considered under-provisioned when at least one specification of your instance,
   *                     such as CPU, memory, or network, does not meet the performance requirements of
   *                     your workload. Under-provisioned instances may lead to poor application
   *                     performance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Overprovisioned</code>
   *                   </b>—An instance is
   *                     considered over-provisioned when at least one specification of your instance,
   *                     such as CPU, memory, or network, can be sized down while still meeting the
   *                     performance requirements of your workload, and no specification is
   *                     under-provisioned. Over-provisioned instances may lead to unnecessary
   *                     infrastructure cost.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An instance is
   *                     considered optimized when all specifications of your instance, such as CPU,
   *                     memory, and network, meet the performance requirements of your workload and is
   *                     not over provisioned. An optimized instance runs your workloads with optimal
   *                     performance and infrastructure cost. For optimized resources, AWS Compute Optimizer might
   *                     recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>The values that are returned might be <code>UNDER_PROVISIONED</code>,
   *                     <code>OVER_PROVISIONED</code>, or <code>OPTIMIZED</code>.</p>
   *         </note>
   */
  finding?: Finding | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the current instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>The name of the current instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The time stamp of when the instance recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the
   *             instance.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>An array of objects that describe the recommendation options for the instance.</p>
   */
  recommendationOptions?: InstanceRecommendationOption[];

  /**
   * <p>An array of objects that describe the source resource of the recommendation.</p>
   */
  recommendationSources?: RecommendationSource[];

  /**
   * <p>An array of objects that describe the utilization metrics of the instance.</p>
   */
  utilizationMetrics?: UtilizationMetric[];
}

export namespace InstanceRecommendation {
  export const filterSensitiveLog = (obj: InstanceRecommendation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceRecommendation => __isa(o, "InstanceRecommendation");
}

/**
 * <p>Describes a recommendation option for an Amazon EC2 instance.</p>
 */
export interface InstanceRecommendationOption {
  __type?: "InstanceRecommendationOption";
  /**
   * <p>The instance type of the instance recommendation.</p>
   */
  instanceType?: string;

  /**
   * <p>The performance risk of the instance recommendation option.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the instance
   *             recommendation option.</p>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The rank of the instance recommendation option.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace InstanceRecommendationOption {
  export const filterSensitiveLog = (obj: InstanceRecommendationOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InstanceRecommendationOption => __isa(o, "InstanceRecommendationOption");
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *             failure.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidParameterValueException => __isa(o, "InvalidParameterValueException");
}

export enum MetricName {
  CPU = "Cpu",
  MEMORY = "Memory",
}

export enum MetricStatistic {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
}

/**
 * <p>The request must contain either a valid (registered) AWS access key ID or X.509
 *             certificate.</p>
 */
export interface MissingAuthenticationToken extends __SmithyException, $MetadataBearer {
  name: "MissingAuthenticationToken";
  $fault: "client";
  message?: string;
}

export namespace MissingAuthenticationToken {
  export const filterSensitiveLog = (obj: MissingAuthenticationToken): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MissingAuthenticationToken => __isa(o, "MissingAuthenticationToken");
}

/**
 * <p>You must opt in to the service to perform this action.</p>
 */
export interface OptInRequiredException extends __SmithyException, $MetadataBearer {
  name: "OptInRequiredException";
  $fault: "client";
  message?: string;
}

export namespace OptInRequiredException {
  export const filterSensitiveLog = (obj: OptInRequiredException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OptInRequiredException => __isa(o, "OptInRequiredException");
}

/**
 * <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2
 *             instance.</p>
 */
export interface ProjectedMetric {
  __type?: "ProjectedMetric";
  /**
   * <p>The name of the projected utilization metric.</p>
   *         <note>
   *             <p>Memory metrics are only returned for resources that have the unified CloudWatch agent
   *                 installed on them. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  name?: MetricName | string;

  /**
   * <p>The time stamps of the projected utilization metric.</p>
   */
  timestamps?: Date[];

  /**
   * <p>The values of the projected utilization metrics.</p>
   */
  values?: number[];
}

export namespace ProjectedMetric {
  export const filterSensitiveLog = (obj: ProjectedMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectedMetric => __isa(o, "ProjectedMetric");
}

/**
 * <p>Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling
 *             group.</p>
 */
export interface RecommendationSource {
  __type?: "RecommendationSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation source.</p>
   */
  recommendationSourceArn?: string;

  /**
   * <p>The resource type of the recommendation source.</p>
   */
  recommendationSourceType?: RecommendationSourceType | string;
}

export namespace RecommendationSource {
  export const filterSensitiveLog = (obj: RecommendationSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationSource => __isa(o, "RecommendationSource");
}

export enum RecommendationSourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EC2_INSTANCE = "Ec2Instance",
}

/**
 * <p>A summary of a recommendation.</p>
 */
export interface RecommendationSummary {
  __type?: "RecommendationSummary";
  /**
   * <p>The AWS account ID of the recommendation summary.</p>
   */
  accountId?: string;

  /**
   * <p>The resource type of the recommendation.</p>
   */
  recommendationResourceType?: RecommendationSourceType | string;

  /**
   * <p>An array of objects that describe a recommendation summary.</p>
   */
  summaries?: Summary[];
}

export namespace RecommendationSummary {
  export const filterSensitiveLog = (obj: RecommendationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendationSummary => __isa(o, "RecommendationSummary");
}

/**
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 */
export interface RecommendedOptionProjectedMetric {
  __type?: "RecommendedOptionProjectedMetric";
  /**
   * <p>An array of objects that describe a projected utilization metric.</p>
   */
  projectedMetrics?: ProjectedMetric[];

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   *         <p>The projected metric rank correlates to the recommendation option rank. For example,
   *             the projected metric ranked as <code>1</code> is related to the recommendation option
   *             that is also ranked as <code>1</code> in the same response.</p>
   */
  rank?: number;

  /**
   * <p>The recommended instance type.</p>
   */
  recommendedInstanceType?: string;
}

export namespace RecommendedOptionProjectedMetric {
  export const filterSensitiveLog = (obj: RecommendedOptionProjectedMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RecommendedOptionProjectedMetric => __isa(o, "RecommendedOptionProjectedMetric");
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export enum Status {
  ACTIVE = "Active",
  FAILED = "Failed",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}

/**
 * <p>The summary of a recommendation.</p>
 */
export interface Summary {
  __type?: "Summary";
  /**
   * <p>The finding classification of the recommendation.</p>
   */
  name?: Finding | string;

  /**
   * <p>The value of the recommendation summary.</p>
   */
  value?: number;
}

export namespace Summary {
  export const filterSensitiveLog = (obj: Summary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Summary => __isa(o, "Summary");
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
}

export interface UpdateEnrollmentStatusRequest {
  __type?: "UpdateEnrollmentStatusRequest";
  /**
   * <p>Indicates whether to enroll member accounts within the organization, if the account is
   *             a master account of an organization.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>The new enrollment status of the account.</p>
   *         <p>Accepted options are <code>Active</code> or <code>Inactive</code>. You will get an
   *             error if <code>Pending</code> or <code>Failed</code> are specified.</p>
   */
  status: Status | string | undefined;
}

export namespace UpdateEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEnrollmentStatusRequest => __isa(o, "UpdateEnrollmentStatusRequest");
}

export interface UpdateEnrollmentStatusResponse {
  __type?: "UpdateEnrollmentStatusResponse";
  /**
   * <p>The enrollment status of the account.</p>
   */
  status?: Status | string;

  /**
   * <p>The reason for the enrollment status of the account. For example, an account might
   *             show a status of <code>Pending</code> because member accounts of an organization require
   *             more time to be enrolled in the service.</p>
   */
  statusReason?: string;
}

export namespace UpdateEnrollmentStatusResponse {
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEnrollmentStatusResponse => __isa(o, "UpdateEnrollmentStatusResponse");
}

/**
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p>
 */
export interface UtilizationMetric {
  __type?: "UtilizationMetric";
  /**
   * <p>The name of the utilization metric.</p>
   *         <note>
   *             <p>Memory metrics are only returned for resources that have the unified CloudWatch agent
   *                 installed on them. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  name?: MetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

export namespace UtilizationMetric {
  export const filterSensitiveLog = (obj: UtilizationMetric): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UtilizationMetric => __isa(o, "UtilizationMetric");
}
