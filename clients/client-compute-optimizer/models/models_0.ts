import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
}

/**
 * <p>Describes the configuration of an Auto Scaling group.</p>
 */
export interface AutoScalingGroupConfiguration {
  /**
   * <p>The desired capacity, or number of instances, for the Auto Scaling group.</p>
   */
  desiredCapacity?: number;

  /**
   * <p>The minimum size, or minimum number of instances, for the Auto Scaling group.</p>
   */
  minSize?: number;

  /**
   * <p>The maximum size, or maximum number of instances, for the Auto Scaling group.</p>
   */
  maxSize?: number;

  /**
   * <p>The instance type for the Auto Scaling group.</p>
   */
  instanceType?: string;
}

export namespace AutoScalingGroupConfiguration {
  export const filterSensitiveLog = (obj: AutoScalingGroupConfiguration): any => ({
    ...obj,
  });
}

export enum Finding {
  NOT_OPTIMIZED = "NotOptimized",
  OPTIMIZED = "Optimized",
  OVER_PROVISIONED = "Overprovisioned",
  UNDER_PROVISIONED = "Underprovisioned",
}

export enum MetricName {
  CPU = "Cpu",
  EBS_READ_BYTES_PER_SECOND = "EBS_READ_BYTES_PER_SECOND",
  EBS_READ_OPS_PER_SECOND = "EBS_READ_OPS_PER_SECOND",
  EBS_WRITE_BYTES_PER_SECOND = "EBS_WRITE_BYTES_PER_SECOND",
  EBS_WRITE_OPS_PER_SECOND = "EBS_WRITE_OPS_PER_SECOND",
  MEMORY = "Memory",
}

export enum MetricStatistic {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
}

/**
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 */
export interface UtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *         <p>The following utilization metrics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Cpu</code> - The percentage of allocated EC2 compute units that are
   *                     currently in use on the instance. This metric identifies the processing power
   *                     required to run an application on the instance.</p>
   *                 <p>Depending on the instance type, tools in your operating system can show a
   *                     lower percentage than CloudWatch when the instance is not allocated a full
   *                     processor core.</p>
   *                 <p>Units: Percent</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Memory</code> - The percentage of memory that is currently in use on the
   *                     instance. This metric identifies the amount of memory required to run an
   *                     application on the instance.</p>
   *                 <p>Units: Percent</p>
   *                 <note>
   *                     <p>The <code>Memory</code> metric is returned only for resources that have
   *                         the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EBS_READ_OPS_PER_SECOND</code> - The completed read operations from all
   *                     EBS volumes attached to the instance in a specified period of time.</p>
   *                 <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EBS_WRITE_OPS_PER_SECOND</code> - The completed write operations to all
   *                     EBS volumes attached to the instance in a specified period of time.</p>
   *                 <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EBS_READ_BYTES_PER_SECOND</code> - The bytes read from all EBS volumes
   *                     attached to the instance in a specified period of time.</p>
   *                 <p>Unit: Bytes</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EBS_WRITE_BYTES_PER_SECOND</code> - The bytes written to all EBS volumes
   *                     attached to the instance in a specified period of time.</p>
   *                 <p>Unit: Bytes</p>
   *             </li>
   *          </ul>
   */
  name?: MetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   *         <p>The following statistics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Average</code> - This is the value of Sum / SampleCount during the
   *                     specified period, or the average value observed during the specified
   *                     period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period.
   *                     Use this value to determine high volumes of activity for your
   *                     application.</p>
   *             </li>
   *          </ul>
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
}

/**
 * <p>Describes a recommendation option for an Auto Scaling group.</p>
 */
export interface AutoScalingGroupRecommendationOption {
  /**
   * <p>An array of objects that describe an Auto Scaling group configuration.</p>
   */
  configuration?: AutoScalingGroupConfiguration;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group
   *             recommendation option.</p>
   *
   *         <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed on them. For
   *                 more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The performance risk of the Auto Scaling group configuration recommendation.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;

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
}

/**
 * <p>Describes an Auto Scaling group recommendation.</p>
 */
export interface AutoScalingGroupRecommendation {
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
   *                     optimized resources, Compute Optimizer might recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   */
  finding?: Finding | string;

  /**
   * <p>An array of objects that describe the utilization metrics of the Auto Scaling group.</p>
   */
  utilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The number of days for which utilization metrics were analyzed for the Auto Scaling
   *             group.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>An array of objects that describe the current configuration of the Auto Scaling group.</p>
   */
  currentConfiguration?: AutoScalingGroupConfiguration;

  /**
   * <p>An array of objects that describe the recommendation options for the Auto Scaling
   *             group.</p>
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  /**
   * <p>The time stamp of when the Auto Scaling group recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace AutoScalingGroupRecommendation {
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendation): any => ({
    ...obj,
  });
}

export enum JobFilterName {
  JOB_STATUS = "JobStatus",
  RESOURCE_TYPE = "ResourceType",
}

/**
 * <p>Describes a filter that returns a more specific list of recommendation export
 *             jobs.</p>
 *
 *         <p>This filter is used with the <code>DescribeRecommendationExportJobs</code>
 *             action.</p>
 */
export interface JobFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type
   *             (e.g., <code>Ec2Instance</code>).</p>
   *
   *         <p>Specify <code>JobStatus</code> to return export jobs with a specific status (e.g,
   *                 <code>Complete</code>).</p>
   */
  name?: JobFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *
   *         <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you
   *                     specified the <code>name</code> parameter as <code>ResourceType</code>. There is
   *                     no filter for EBS volumes because volume recommendations cannot be exported at
   *                     this time.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Queued</code>, <code>InProgress</code>, <code>Complete</code>,
   *                     or <code>Failed</code> if you specified the <code>name</code> parameter as
   *                         <code>JobStatus</code>.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace JobFilter {
  export const filterSensitiveLog = (obj: JobFilter): any => ({
    ...obj,
  });
}

export interface DescribeRecommendationExportJobsRequest {
  /**
   * <p>The identification numbers of the export jobs to return.</p>
   *
   *         <p>An export job ID is returned when you create an export using the
   *                 <code>ExportAutoScalingGroupRecommendations</code> or
   *                 <code>ExportEC2InstanceRecommendations</code> actions.</p>
   *
   *         <p>All export jobs created in the last seven days are returned if this parameter is
   *             omitted.</p>
   */
  jobIds?: string[];

  /**
   * <p>An array of objects that describe a filter to return a more specific list of export
   *             jobs.</p>
   */
  filters?: JobFilter[];

  /**
   * <p>The token to advance to the next page of export jobs.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of export jobs to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace DescribeRecommendationExportJobsRequest {
  export const filterSensitiveLog = (obj: DescribeRecommendationExportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a
 *             recommendations export file, and its associated metadata file.</p>
 */
export interface S3Destination {
  /**
   * <p>The name of the Amazon S3 bucket used as the destination of an export file.</p>
   */
  bucket?: string;

  /**
   * <p>The Amazon S3 bucket key of an export file.</p>
   *         <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>
   */
  key?: string;

  /**
   * <p>The Amazon S3 bucket key of a metadata file.</p>
   *         <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>
   */
  metadataKey?: string;
}

export namespace S3Destination {
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination of the recommendations export and metadata files.</p>
 */
export interface ExportDestination {
  /**
   * <p>An object that describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys
   *             of a recommendations export file, and its associated metadata file.</p>
   */
  s3?: S3Destination;
}

export namespace ExportDestination {
  export const filterSensitiveLog = (obj: ExportDestination): any => ({
    ...obj,
  });
}

export enum ResourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EC2_INSTANCE = "Ec2Instance",
}

export enum JobStatus {
  COMPLETE = "Complete",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  QUEUED = "Queued",
}

/**
 * <p>Describes a recommendation export job.</p>
 *
 *
 *         <p>Use the <code>DescribeRecommendationExportJobs</code> action to view your
 *             recommendation export jobs.</p>
 *
 *
 *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
 *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
 *             recommendations.</p>
 */
export interface RecommendationExportJob {
  /**
   * <p>The identification number of the export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination of the export file.</p>
   */
  destination?: ExportDestination;

  /**
   * <p>The resource type of the exported recommendations.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The status of the export job.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>The timestamp of when the export job was created.</p>
   */
  creationTimestamp?: Date;

  /**
   * <p>The timestamp of when the export job was last updated.</p>
   */
  lastUpdatedTimestamp?: Date;

  /**
   * <p>The reason for an export job failure.</p>
   */
  failureReason?: string;
}

export namespace RecommendationExportJob {
  export const filterSensitiveLog = (obj: RecommendationExportJob): any => ({
    ...obj,
  });
}

export interface DescribeRecommendationExportJobsResponse {
  /**
   * <p>An array of objects that describe recommendation export jobs.</p>
   */
  recommendationExportJobs?: RecommendationExportJob[];

  /**
   * <p>The token to use to advance to the next page of export jobs.</p>
   *         <p>This value is null when there are no more pages of export jobs to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeRecommendationExportJobsResponse {
  export const filterSensitiveLog = (obj: DescribeRecommendationExportJobsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal error has occurred. Try your call again.</p>
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
}

/**
 * <p>The account is not opted in to AWS Compute Optimizer.</p>
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
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
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
}

/**
 * <p>The request was denied due to request throttling.</p>
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
}

export enum ExportableAutoScalingGroupField {
  ACCOUNT_ID = "AccountId",
  AUTO_SCALING_GROUP_ARN = "AutoScalingGroupArn",
  AUTO_SCALING_GROUP_NAME = "AutoScalingGroupName",
  CURRENT_CONFIGURATION_DESIRED_CAPACITY = "CurrentConfigurationDesiredCapacity",
  CURRENT_CONFIGURATION_INSTANCE_TYPE = "CurrentConfigurationInstanceType",
  CURRENT_CONFIGURATION_MAX_SIZE = "CurrentConfigurationMaxSize",
  CURRENT_CONFIGURATION_MIN_SIZE = "CurrentConfigurationMinSize",
  CURRENT_MEMORY = "CurrentMemory",
  CURRENT_NETWORK = "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE = "CurrentOnDemandPrice",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE = "CurrentStorage",
  CURRENT_VCPUS = "CurrentVCpus",
  FINDING = "Finding",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY = "RecommendationOptionsConfigurationDesiredCapacity",
  RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE = "RecommendationOptionsConfigurationInstanceType",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE = "RecommendationOptionsConfigurationMaxSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE = "RecommendationOptionsConfigurationMinSize",
  RECOMMENDATION_OPTIONS_MEMORY = "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_NETWORK = "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE = "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE = "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS = "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM = "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
}

export enum FileFormat {
  CSV = "Csv",
}

export enum FilterName {
  FINDING = "Finding",
  RECOMMENDATION_SOURCE_TYPE = "RecommendationSourceType",
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations.</p>
 *
 *         <p>This filter is used with the <code>GetAutoScalingGroupRecommendations</code> and
 *                 <code>GetEC2InstanceRecommendations</code> actions.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (e.g., <code>Overprovisioned</code>).</p>
   *
   *         <p>Specify <code>RecommendationSourceType</code> to return recommendations of a specific
   *             resource type (e.g., <code>AutoScalingGroup</code>).</p>
   */
  name?: FilterName | string;

  /**
   * <p>The value of the filter.</p>
   *
   *         <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter and the resource type that you wish to filter results
   *             for:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Specify <code>Optimized</code> or <code>NotOptimized</code> if you specified
   *                     the <code>name</code> parameter as <code>Finding</code> and you want to filter
   *                     results for Auto Scaling groups.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
   *                         <code>Optimized</code> if you specified the <code>name</code> parameter as
   *                         <code>Finding</code> and you want to filter results for EC2
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you
   *                     specified the <code>name</code> parameter as
   *                         <code>RecommendationSourceType</code>.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a
 *             recommendations export job.</p>
 *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
 *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
 *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
 *             export file to it. If you plan to specify an object prefix when you create the export
 *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
 *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
 *             guide</i>.</p>
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of the Amazon S3 bucket to use as the destination for an export job.</p>
   */
  bucket?: string;

  /**
   * <p>The Amazon S3 bucket prefix for an export job.</p>
   */
  keyPrefix?: string;
}

export namespace S3DestinationConfig {
  export const filterSensitiveLog = (obj: S3DestinationConfig): any => ({
    ...obj,
  });
}

export interface ExportAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The IDs of the AWS accounts for which to export Auto Scaling group recommendations.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to export recommendations.</p>
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects that describe a filter to export a more specific set of Auto Scaling group
   *             recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.</p>
   */
  fieldsToExport?: (ExportableAutoScalingGroupField | string)[];

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for
   *             the export job.</p>
   *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
   *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
   *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
   *             export file to it. If you plan to specify an object prefix when you create the export
   *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
   *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
   *             guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *         <p>The member accounts must also be opted in to Compute Optimizer.</p>
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *         <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace ExportAutoScalingGroupRecommendationsRequest {
  export const filterSensitiveLog = (obj: ExportAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *         <p>Use the <code>DescribeRecommendationExportJobs</code> action, and specify the job ID
   *             to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations export
   *             file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportAutoScalingGroupRecommendationsResponse {
  export const filterSensitiveLog = (obj: ExportAutoScalingGroupRecommendationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds a limit of the service.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum ExportableInstanceField {
  ACCOUNT_ID = "AccountId",
  CURRENT_INSTANCE_TYPE = "CurrentInstanceType",
  CURRENT_MEMORY = "CurrentMemory",
  CURRENT_NETWORK = "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE = "CurrentOnDemandPrice",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE = "CurrentStorage",
  CURRENT_VCPUS = "CurrentVCpus",
  FINDING = "Finding",
  INSTANCE_ARN = "InstanceArn",
  INSTANCE_NAME = "InstanceName",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN = "RecommendationsSourcesRecommendationSourceArn",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE = "RecommendationsSourcesRecommendationSourceType",
  RECOMMENDATION_OPTIONS_INSTANCE_TYPE = "RecommendationOptionsInstanceType",
  RECOMMENDATION_OPTIONS_MEMORY = "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_NETWORK = "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE = "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE = "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS = "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM = "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
}

export interface ExportEC2InstanceRecommendationsRequest {
  /**
   * <p>The IDs of the AWS accounts for which to export instance recommendations.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to export recommendations.</p>
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects that describe a filter to export a more specific set of instance
   *             recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User Guide</i>.</p>
   */
  fieldsToExport?: (ExportableInstanceField | string)[];

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for
   *             the export job.</p>
   *         <p>You must create the destination Amazon S3 bucket for your recommendations export before you
   *             create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the
   *             S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the
   *             export file to it. If you plan to specify an object prefix when you create the export
   *             job, you must include the object prefix in the policy that you add to the S3 bucket. For
   *             more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer user
   *             guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *         <p>The member accounts must also be opted in to Compute Optimizer.</p>
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace ExportEC2InstanceRecommendationsRequest {
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportEC2InstanceRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *         <p>Use the <code>DescribeRecommendationExportJobs</code> action, and specify the job ID
   *             to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations export
   *             file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportEC2InstanceRecommendationsResponse {
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The IDs of the AWS accounts for which to return Auto Scaling group recommendations.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to return Auto Scaling group
   *             recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return
   *             recommendations.</p>
   */
  autoScalingGroupArns?: string[];

  /**
   * <p>The token to advance to the next page of Auto Scaling group recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of Auto Scaling group recommendations to return with a single
   *             request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of Auto Scaling
   *             group recommendations.</p>
   */
  filters?: Filter[];
}

export namespace GetAutoScalingGroupRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error experienced when getting recommendations.</p>
 *         <p>For example, an error is returned if you request recommendations for an unsupported
 *             Auto Scaling group, or if you request recommendations for an instance of an unsupported instance
 *             family.</p>
 */
export interface GetRecommendationError {
  /**
   * <p>The ID of the error.</p>
   */
  identifier?: string;

  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The message, or reason, for the error.</p>
   */
  message?: string;
}

export namespace GetRecommendationError {
  export const filterSensitiveLog = (obj: GetRecommendationError): any => ({
    ...obj,
  });
}

export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of Auto Scaling group recommendations.</p>
   *         <p>This value is null when there are no more pages of Auto Scaling group recommendations to
   *             return.</p>
   */
  nextToken?: string;

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
}

export namespace GetAutoScalingGroupRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsResponse): any => ({
    ...obj,
  });
}

export enum EBSFilterName {
  FINDING = "Finding",
}

/**
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume
 *             recommendations.</p>
 *
 *         <p>This filter is used with the <code>GetEBSVolumeRecommendations</code> action.</p>
 */
export interface EBSFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (e.g., <code>Optimized</code>).</p>
   */
  name?: EBSFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *
   *         <p>The valid values are <code>Optimized</code>, or <code>NotOptimized</code>.</p>
   */
  values?: string[];
}

export namespace EBSFilter {
  export const filterSensitiveLog = (obj: EBSFilter): any => ({
    ...obj,
  });
}

export interface GetEBSVolumeRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the volumes for which to return
   *             recommendations.</p>
   */
  volumeArns?: string[];

  /**
   * <p>The token to advance to the next page of volume recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of volume recommendations to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of volume
   *             recommendations.</p>
   */
  filters?: EBSFilter[];

  /**
   * <p>The IDs of the AWS accounts for which to return volume recommendations.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to return volume recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

export namespace GetEBSVolumeRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetEBSVolumeRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.</p>
 */
export interface VolumeConfiguration {
  /**
   * <p>The volume type.</p>
   *         <p>This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> or
   *                 <code>io2</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized
   *             HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic
   *             volumes.</p>
   */
  volumeType?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  volumeSize?: number;

  /**
   * <p>The baseline IOPS of the volume.</p>
   */
  volumeBaselineIOPS?: number;

  /**
   * <p>The burst IOPS of the volume.</p>
   */
  volumeBurstIOPS?: number;

  /**
   * <p>The baseline throughput of the volume.</p>
   */
  volumeBaselineThroughput?: number;

  /**
   * <p>The burst throughput of the volume.</p>
   */
  volumeBurstThroughput?: number;
}

export namespace VolumeConfiguration {
  export const filterSensitiveLog = (obj: VolumeConfiguration): any => ({
    ...obj,
  });
}

export enum EBSFinding {
  NOT_OPTIMIZED = "NotOptimized",
  OPTIMIZED = "Optimized",
}

export enum EBSMetricName {
  VOLUME_READ_BYTES_PER_SECOND = "VolumeReadBytesPerSecond",
  VOLUME_READ_OPS_PER_SECOND = "VolumeReadOpsPerSecond",
  VOLUME_WRITE_BYTES_PER_SECOND = "VolumeWriteBytesPerSecond",
  VOLUME_WRITE_OPS_PER_SECOND = "VolumeWriteOpsPerSecond",
}

/**
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 */
export interface EBSUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *         <p>The following utilization metrics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>VolumeReadOpsPerSecond</code> - The completed read operations per second
   *                     from the volume in a specified period of time.</p>
   *                 <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VolumeWriteOpsPerSecond</code> - The completed write operations per
   *                     second to the volume in a specified period of time.</p>
   *                 <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VolumeReadBytesPerSecond</code> - The bytes read per second from the
   *                     volume in a specified period of time.</p>
   *                 <p>Unit: Bytes</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>VolumeWriteBytesPerSecond</code> - The bytes written to the volume in a
   *                     specified period of time.</p>
   *                 <p>Unit: Bytes</p>
   *             </li>
   *          </ul>
   */
  name?: EBSMetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   *         <p>The following statistics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Average</code> - This is the value of Sum / SampleCount during the
   *                     specified period, or the average value observed during the specified
   *                     period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Maximum</code> - The highest value observed during the specified period.
   *                     Use this value to determine high volumes of activity for your
   *                     application.</p>
   *             </li>
   *          </ul>
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

export namespace EBSUtilizationMetric {
  export const filterSensitiveLog = (obj: EBSUtilizationMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.</p>
 */
export interface VolumeRecommendationOption {
  /**
   * <p>An array of objects that describe a volume configuration.</p>
   */
  configuration?: VolumeConfiguration;

  /**
   * <p>The performance risk of the volume recommendation option.</p>
   *         <p>Performance risk is the likelihood of the recommended volume type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the volume recommendation option.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace VolumeRecommendationOption {
  export const filterSensitiveLog = (obj: VolumeRecommendationOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.</p>
 */
export interface VolumeRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current volume.</p>
   */
  volumeArn?: string;

  /**
   * <p>The AWS account ID of the volume.</p>
   */
  accountId?: string;

  /**
   * <p>An array of objects that describe the current configuration of the volume.</p>
   */
  currentConfiguration?: VolumeConfiguration;

  /**
   * <p>The finding classification for the volume.</p>
   *         <p>Findings for volumes include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—A volume is
   *                     considered not optimized when AWS Compute Optimizer identifies a recommendation that can
   *                     provide better performance for your workload.</p>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An volume is
   *                     considered optimized when Compute Optimizer determines that the volume is correctly
   *                     provisioned to run your workload based on the chosen volume type. For optimized
   *                     resources, Compute Optimizer might recommend a new generation volume type.</p>
   *
   *             </li>
   *          </ul>
   */
  finding?: EBSFinding | string;

  /**
   * <p>An array of objects that describe the utilization metrics of the volume.</p>
   */
  utilizationMetrics?: EBSUtilizationMetric[];

  /**
   * <p>The number of days for which utilization metrics were analyzed for the volume.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>An array of objects that describe the recommendation options for the volume.</p>
   */
  volumeRecommendationOptions?: VolumeRecommendationOption[];

  /**
   * <p>The time stamp of when the volume recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace VolumeRecommendation {
  export const filterSensitiveLog = (obj: VolumeRecommendation): any => ({
    ...obj,
  });
}

export interface GetEBSVolumeRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of volume recommendations.</p>
   *         <p>This value is null when there are no more pages of volume recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe volume recommendations.</p>
   */
  volumeRecommendations?: VolumeRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an unsupported
   *             volume.</p>
   */
  errors?: GetRecommendationError[];
}

export namespace GetEBSVolumeRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetEBSVolumeRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetEC2InstanceRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return
   *             recommendations.</p>
   */
  instanceArns?: string[];

  /**
   * <p>The token to advance to the next page of instance recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of instance recommendations to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects that describe a filter that returns a more specific list of
   *             instance recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The IDs of the AWS accounts for which to return instance recommendations.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to return instance
   *             recommendations.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

export namespace GetEC2InstanceRecommendationsRequest {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recommendation option for an Amazon EC2 instance.</p>
 */
export interface InstanceRecommendationOption {
  /**
   * <p>The instance type of the instance recommendation.</p>
   */
  instanceType?: string;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the instance
   *             recommendation option.</p>
   *
   *         <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed on them. For
   *                 more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The performance risk of the instance recommendation option.</p>
   *         <p>Performance risk is the likelihood of the recommended instance type not meeting the
   *             performance requirement of your workload.</p>
   *         <p>The lowest performance risk is categorized as <code>0</code>, and the highest as
   *                 <code>5</code>.</p>
   */
  performanceRisk?: number;

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
}

export enum RecommendationSourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EBS_VOLUME = "EbsVolume",
  EC2_INSTANCE = "Ec2Instance",
}

/**
 * <p>Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling
 *             group.</p>
 */
export interface RecommendationSource {
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
}

/**
 * <p>Describes an Amazon EC2 instance recommendation.</p>
 */
export interface InstanceRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>The AWS account ID of the instance.</p>
   */
  accountId?: string;

  /**
   * <p>The name of the current instance.</p>
   */
  instanceName?: string;

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
   */
  finding?: Finding | string;

  /**
   * <p>An array of objects that describe the utilization metrics of the instance.</p>
   */
  utilizationMetrics?: UtilizationMetric[];

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
   * <p>The time stamp of when the instance recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace InstanceRecommendation {
  export const filterSensitiveLog = (obj: InstanceRecommendation): any => ({
    ...obj,
  });
}

export interface GetEC2InstanceRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *         <p>This value is null when there are no more pages of instance recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe instance recommendations.</p>
   */
  instanceRecommendations?: InstanceRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *         <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   */
  errors?: GetRecommendationError[];
}

export namespace GetEC2InstanceRecommendationsResponse {
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetEC2RecommendationProjectedMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return recommendation
   *             projected metrics.</p>
   */
  instanceArn: string | undefined;

  /**
   * <p>The statistic of the projected metrics.</p>
   */
  stat: MetricStatistic | string | undefined;

  /**
   * <p>The granularity, in seconds, of the projected metrics data points.</p>
   */
  period: number | undefined;

  /**
   * <p>The time stamp of the first projected metrics data point to return.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The time stamp of the last projected metrics data point to return.</p>
   */
  endTime: Date | undefined;
}

export namespace GetEC2RecommendationProjectedMetricsRequest {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a projected utilization metric of a recommendation option, such as an Amazon EC2
 *             instance. This represents the projected utilization of a recommendation option had you
 *             used that resource during the analyzed period.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the
 *                     <code>GetEC2RecommendationProjectedMetrics</code> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                 CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
 *                     Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 */
export interface ProjectedMetric {
  /**
   * <p>The name of the projected utilization metric.</p>
   *         <p>The following projected utilization metrics are returned:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Cpu</code> - The projected percentage of allocated EC2 compute units
   *                     that would be in use on the recommendation option had you used that resource
   *                     during the analyzed period. This metric identifies the processing power required
   *                     to run an application on the recommendation option.</p>
   *                 <p>Depending on the instance type, tools in your operating system can show a
   *                     lower percentage than CloudWatch when the instance is not allocated a full
   *                     processor core.</p>
   *                 <p>Units: Percent</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Memory</code> - The percentage of memory that would be in use on the
   *                     recommendation option had you used that resource during the analyzed period.
   *                     This metric identifies the amount of memory required to run an application on
   *                     the recommendation option.</p>
   *                 <p>Units: Percent</p>
   *                 <note>
   *                     <p>The <code>Memory</code> metric is returned only for resources that have
   *                         the unified CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                 </note>
   *             </li>
   *          </ul>
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
}

/**
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the
 *                     <code>GetEC2RecommendationProjectedMetrics</code> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                 CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
 *                     Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * <p>The recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   *         <p>The projected metric rank correlates to the recommendation option rank. For example,
   *             the projected metric ranked as <code>1</code> is related to the recommendation option
   *             that is also ranked as <code>1</code> in the same response.</p>
   */
  rank?: number;

  /**
   * <p>An array of objects that describe a projected utilization metric.</p>
   */
  projectedMetrics?: ProjectedMetric[];
}

export namespace RecommendedOptionProjectedMetric {
  export const filterSensitiveLog = (obj: RecommendedOptionProjectedMetric): any => ({
    ...obj,
  });
}

export interface GetEC2RecommendationProjectedMetricsResponse {
  /**
   * <p>An array of objects that describe a projected metrics.</p>
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}

export namespace GetEC2RecommendationProjectedMetricsResponse {
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetEnrollmentStatusRequest {}

export namespace GetEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusRequest): any => ({
    ...obj,
  });
}

export enum Status {
  ACTIVE = "Active",
  FAILED = "Failed",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}

export interface GetEnrollmentStatusResponse {
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

  /**
   * <p>Confirms the enrollment status of member accounts within the organization, if the
   *             account is a management account of an organization.</p>
   */
  memberAccountsEnrolled?: boolean;
}

export namespace GetEnrollmentStatusResponse {
  export const filterSensitiveLog = (obj: GetEnrollmentStatusResponse): any => ({
    ...obj,
  });
}

export interface GetRecommendationSummariesRequest {
  /**
   * <p>The IDs of the AWS accounts for which to return recommendation summaries.</p>
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member accounts for which you want to return recommendation
   *             summaries.</p>
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recommendation summaries to return with a single request.</p>
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>NextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace GetRecommendationSummariesRequest {
  export const filterSensitiveLog = (obj: GetRecommendationSummariesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a recommendation.</p>
 */
export interface Summary {
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
}

/**
 * <p>A summary of a recommendation.</p>
 */
export interface RecommendationSummary {
  /**
   * <p>An array of objects that describe a recommendation summary.</p>
   */
  summaries?: Summary[];

  /**
   * <p>The resource type of the recommendation.</p>
   */
  recommendationResourceType?: RecommendationSourceType | string;

  /**
   * <p>The AWS account ID of the recommendation summary.</p>
   */
  accountId?: string;
}

export namespace RecommendationSummary {
  export const filterSensitiveLog = (obj: RecommendationSummary): any => ({
    ...obj,
  });
}

export interface GetRecommendationSummariesResponse {
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
}

export interface UpdateEnrollmentStatusRequest {
  /**
   * <p>The new enrollment status of the account.</p>
   *         <p>Accepted options are <code>Active</code> or <code>Inactive</code>. You will get an
   *             error if <code>Pending</code> or <code>Failed</code> are specified.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the your account is
   *             the management account of an organization.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace UpdateEnrollmentStatusRequest {
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateEnrollmentStatusResponse {
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
}
