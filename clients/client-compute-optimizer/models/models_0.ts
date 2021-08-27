import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum Status {
  ACTIVE = "Active",
  FAILED = "Failed",
  INACTIVE = "Inactive",
  PENDING = "Pending",
}

/**
 * <p>Describes the enrollment status of an organization's member accounts in Compute Optimizer.</p>
 */
export interface AccountEnrollmentStatus {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId?: string;

  /**
   * <p>The account enrollment status.</p>
   */
  status?: Status | string;

  /**
   * <p>The reason for the account enrollment status.</p>
   *
   *         <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix epoch timestamp, in seconds, of when the account enrollment status was last
   *             updated.</p>
   */
  lastUpdatedTimestamp?: Date;
}

export namespace AccountEnrollmentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountEnrollmentStatus): any => ({
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
   * <p>The minimum size, or minimum number of instances, for the Auto Scaling
   *             group.</p>
   */
  minSize?: number;

  /**
   * <p>The maximum size, or maximum number of instances, for the Auto Scaling
   *             group.</p>
   */
  maxSize?: number;

  /**
   * <p>The instance type for the Auto Scaling group.</p>
   */
  instanceType?: string;
}

export namespace AutoScalingGroupConfiguration {
  /**
   * @internal
   */
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
  DISK_READ_BYTES_PER_SECOND = "DISK_READ_BYTES_PER_SECOND",
  DISK_READ_OPS_PER_SECOND = "DISK_READ_OPS_PER_SECOND",
  DISK_WRITE_BYTES_PER_SECOND = "DISK_WRITE_BYTES_PER_SECOND",
  DISK_WRITE_OPS_PER_SECOND = "DISK_WRITE_OPS_PER_SECOND",
  EBS_READ_BYTES_PER_SECOND = "EBS_READ_BYTES_PER_SECOND",
  EBS_READ_OPS_PER_SECOND = "EBS_READ_OPS_PER_SECOND",
  EBS_WRITE_BYTES_PER_SECOND = "EBS_WRITE_BYTES_PER_SECOND",
  EBS_WRITE_OPS_PER_SECOND = "EBS_WRITE_OPS_PER_SECOND",
  MEMORY = "Memory",
  NETWORK_IN_BYTES_PER_SECOND = "NETWORK_IN_BYTES_PER_SECOND",
  NETWORK_OUT_BYTES_PER_SECOND = "NETWORK_OUT_BYTES_PER_SECOND",
  NETWORK_PACKETS_IN_PER_SECOND = "NETWORK_PACKETS_IN_PER_SECOND",
  NETWORK_PACKETS_OUT_PER_SECOND = "NETWORK_PACKETS_OUT_PER_SECOND",
}

export enum MetricStatistic {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
}

/**
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2
 *             instance.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 */
export interface UtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *
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
   *                         the unified CloudWatch agent installed on them. For more information,
   *                         see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
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
   *             <li>
   *                 <p>
   *                   <code>DISK_READ_OPS_PER_SECOND</code> - The completed read operations from all
   *                     instance store volumes available to the instance in a specified period of
   *                     time.</p>
   *                 <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISK_WRITE_OPS_PER_SECOND</code> - The completed write operations from
   *                     all instance store volumes available to the instance in a specified period of
   *                     time.</p>
   *                 <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISK_READ_BYTES_PER_SECOND</code> - The bytes read from all instance
   *                     store volumes available to the instance. This metric is used to determine the
   *                     volume of the data the application reads from the disk of the instance. This can
   *                     be used to determine the speed of the application.</p>
   *                 <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISK_WRITE_BYTES_PER_SECOND</code> - The bytes written to all instance
   *                     store volumes available to the instance. This metric is used to determine the
   *                     volume of the data the application writes onto the disk of the instance. This
   *                     can be used to determine the speed of the application.</p>
   *                 <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NETWORK_IN_BYTES_PER_SECOND</code> - The number of bytes received by the
   *                     instance on all network interfaces. This metric identifies the volume of
   *                     incoming network traffic to a single instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NETWORK_OUT_BYTES_PER_SECOND</code> - The number of bytes sent out by
   *                     the instance on all network interfaces. This metric identifies the volume of
   *                     outgoing network traffic from a single instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NETWORK_PACKETS_IN_PER_SECOND</code> - The number of packets received by
   *                     the instance on all network interfaces. This metric identifies the volume of
   *                     incoming traffic in terms of the number of packets on a single instance.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NETWORK_PACKETS_OUT_PER_SECOND</code> - The number of packets sent out
   *                     by the instance on all network interfaces. This metric identifies the volume of
   *                     outgoing traffic in terms of the number of packets on a single instance.</p>
   *             </li>
   *          </ul>
   */
  name?: MetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   *
   *         <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *
   *
   *         <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

export namespace UtilizationMetric {
  /**
   * @internal
   */
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
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.</p>
   *
   *         <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The performance risk of the Auto Scaling group configuration
   *             recommendation.</p>
   *
   *         <p>Performance risk indicates the likelihood of the recommended instance type not meeting
   *             the resource needs of your workload. Compute Optimizer calculates an individual
   *             performance risk score for each specification of the recommended instance, including
   *             CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput,
   *             and network PPS.
   *             The performance
   *             risk of the recommended instance is calculated as the maximum performance risk score
   *             across the analyzed resource specifications.</p>
   *
   *         <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the Auto Scaling group recommendation option.</p>
   *
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace AutoScalingGroupRecommendationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendationOption): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Auto Scaling group recommendation.</p>
 */
export interface AutoScalingGroupRecommendation {
  /**
   * <p>The Amazon Web Services account ID of the Auto Scaling group.</p>
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
   * <p>The finding classification of the Auto Scaling group.</p>
   *
   *         <p>Findings for Auto Scaling groups include:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—An Auto Scaling group is considered not optimized when Compute Optimizer identifies a
   *                     recommendation that can provide better performance for your workload.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An Auto Scaling
   *                     group is considered optimized when Compute Optimizer determines that the group
   *                     is correctly provisioned to run your workload based on the chosen instance type.
   *                     For optimized resources, Compute Optimizer might recommend a new generation
   *                     instance type.</p>
   *             </li>
   *          </ul>
   */
  finding?: Finding | string;

  /**
   * <p>An array of objects that describe the utilization metrics of the Auto Scaling
   *             group.</p>
   */
  utilizationMetrics?: UtilizationMetric[];

  /**
   * <p>The number of days for which utilization metrics were analyzed for the Auto Scaling group.</p>
   */
  lookBackPeriodInDays?: number;

  /**
   * <p>An array of objects that describe the current configuration of the Auto Scaling
   *             group.</p>
   */
  currentConfiguration?: AutoScalingGroupConfiguration;

  /**
   * <p>An array of objects that describe the recommendation options for the Auto Scaling
   *             group.</p>
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[];

  /**
   * <p>The timestamp  of when the Auto Scaling group recommendation was last
   *             refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace AutoScalingGroupRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingGroupRecommendation): any => ({
    ...obj,
  });
}

export enum JobFilterName {
  JOB_STATUS = "JobStatus",
  RESOURCE_TYPE = "ResourceType",
}

/**
 * <p>Describes a filter that returns a more specific list of recommendation export jobs.
 *             Use this filter with the <a>DescribeRecommendationExportJobs</a>
 *             action.</p>
 *
 *         <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with
 *             the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 */
export interface JobFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type
   *             (for example, <code>Ec2Instance</code>).</p>
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
   *                     specify the <code>name</code> parameter as <code>ResourceType</code>. There is
   *                     no filter for EBS volumes because volume recommendations cannot be exported at
   *                     this time.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Queued</code>, <code>InProgress</code>, <code>Complete</code>,
   *                     or <code>Failed</code> if you specify the <code>name</code> parameter as
   *                         <code>JobStatus</code>.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace JobFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobFilter): any => ({
    ...obj,
  });
}

export interface DescribeRecommendationExportJobsRequest {
  /**
   * <p>The identification numbers of the export jobs to return.</p>
   *
   *         <p>An export job ID is returned when you create an export using the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions.</p>
   *
   *         <p>All export jobs created in the last seven days are returned if this parameter is
   *             omitted.</p>
   */
  jobIds?: string[];

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of export
   *             jobs.</p>
   */
  filters?: JobFilter[];

  /**
   * <p>The token to advance to the next page of export jobs.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of export jobs to return with a single request.</p>
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace DescribeRecommendationExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecommendationExportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
 *             object keys of a recommendations export file, and its associated metadata file.</p>
 */
export interface S3Destination {
  /**
   * <p>The name of the Amazon S3 bucket used as the destination of an export
   *             file.</p>
   */
  bucket?: string;

  /**
   * <p>The Amazon S3 bucket key of an export file.</p>
   *
   *         <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>
   */
  key?: string;

  /**
   * <p>The Amazon S3 bucket key of a metadata file.</p>
   *
   *         <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>
   */
  metadataKey?: string;
}

export namespace S3Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination of the recommendations export and metadata files.</p>
 */
export interface ExportDestination {
  /**
   * <p>An object that describes the destination Amazon Simple Storage Service (Amazon S3)
   *             bucket name and object keys of a recommendations export file, and its associated
   *             metadata file.</p>
   */
  s3?: S3Destination;
}

export namespace ExportDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportDestination): any => ({
    ...obj,
  });
}

export enum ResourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EBS_VOLUME = "EbsVolume",
  EC2_INSTANCE = "Ec2Instance",
  LAMBDA_FUNCTION = "LambdaFunction",
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
 *         <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your
 *             recommendation export jobs.</p>
 *
 *
 *         <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
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
  /**
   * @internal
   */
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
   *
   *         <p>This value is null when there are no more pages of export jobs to return.</p>
   */
  nextToken?: string;
}

export namespace DescribeRecommendationExportJobsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The value supplied for the input parameter is out of range or not valid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 */
export interface MissingAuthenticationToken extends __SmithyException, $MetadataBearer {
  name: "MissingAuthenticationToken";
  $fault: "client";
  message?: string;
}

export namespace MissingAuthenticationToken {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MissingAuthenticationToken): any => ({
    ...obj,
  });
}

/**
 * <p>The account is not opted in to Compute Optimizer.</p>
 */
export interface OptInRequiredException extends __SmithyException, $MetadataBearer {
  name: "OptInRequiredException";
  $fault: "client";
  message?: string;
}

export namespace OptInRequiredException {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkPacketsInPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkPacketsOutPerSecondMaximum",
}

export enum FileFormat {
  CSV = "Csv",
}

export enum FilterName {
  FINDING = "Finding",
  FINDING_REASON_CODES = "FindingReasonCodes",
  RECOMMENDATION_SOURCE_TYPE = "RecommendationSourceType",
}

/**
 * <p>Describes a filter that returns a more specific list of recommendations. Use this
 *             filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 *
 *         <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with
 *             the <a>DescribeRecommendationExportJobs</a> action.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (for example, <code>Underprovisioned</code>).</p>
   *
   *         <p>Specify <code>RecommendationSourceType</code> to return recommendations of a specific
   *             resource type (for example, <code>Ec2Instance</code>).</p>
   *
   *         <p>Specify <code>FindingReasonCodes</code> to return recommendations with a specific
   *             finding reason code (for example, <code>CPUUnderprovisioned</code>).</p>
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
   *                 <p>Specify <code>Optimized</code> or <code>NotOptimized</code> if you specify the
   *                         <code>name</code> parameter as <code>Finding</code> and you want to filter
   *                     results for Auto Scaling groups.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
   *                         <code>Optimized</code> if you specify the <code>name</code> parameter as
   *                         <code>Finding</code> and you want to filter results for EC2
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you
   *                     specify the <code>name</code> parameter as
   *                     <code>RecommendationSourceType</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify one of the following options if you specify the <code>name</code>
   *                     parameter as <code>FindingReasonCodes</code>:</p>
   *
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>CPUOverprovisioned</code>
   *                         </b> — The
   *                             instance’s CPU configuration can be sized down while still meeting the
   *                             performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>CPUUnderprovisioned</code>
   *                         </b> —
   *                             The instance’s CPU configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better CPU performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>MemoryOverprovisioned</code>
   *                         </b> —
   *                             The instance’s memory configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>MemoryUnderprovisioned</code>
   *                         </b> —
   *                             The instance’s memory configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better memory performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>EBSThroughputOverprovisioned</code>
   *                         </b> — The
   *                             instance’s EBS throughput configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>EBSThroughputUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s EBS throughput configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better EBS throughput performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>EBSIOPSOverprovisioned</code>
   *                         </b> —
   *                             The instance’s EBS IOPS configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>EBSIOPSUnderprovisioned</code>
   *                         </b>
   *                             — The instance’s EBS IOPS configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better EBS IOPS performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>NetworkBandwidthOverprovisioned</code>
   *                         </b> — The
   *                             instance’s network bandwidth configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>NetworkBandwidthUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s network bandwidth configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better network bandwidth performance. This finding reason
   *                             happens when the <code>NetworkIn</code> or <code>NetworkOut</code>
   *                             performance of an instance is impacted.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>NetworkPPSOverprovisioned</code>
   *                         </b> — The instance’s
   *                             network PPS (packets per second) configuration can be sized down while
   *                             still meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>NetworkPPSUnderprovisioned</code>
   *                         </b> — The instance’s
   *                             network PPS (packets per second) configuration doesn't meet the
   *                             performance requirements of your workload and there is an alternative
   *                             instance type that provides better network PPS performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>DiskIOPSOverprovisioned</code>
   *                         </b>
   *                             — The instance’s disk IOPS configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>DiskIOPSUnderprovisioned</code>
   *                         </b>
   *                             — The instance’s disk IOPS configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better disk IOPS performance.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>DiskThroughputOverprovisioned</code>
   *                         </b> — The
   *                             instance’s disk throughput configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <b>
   *                            <code>DiskThroughputUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s disk throughput configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better disk throughput performance.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export enum CpuVendorArchitecture {
  AWS_ARM64 = "AWS_ARM64",
  CURRENT = "CURRENT",
}

/**
 * <p>Describes preferences for recommendations.</p>
 */
export interface RecommendationPreferences {
  /**
   * <p>Specifies the CPU vendor and architecture for Amazon EC2 instance and Auto Scaling group recommendations.</p>
   *
   *         <p>For example, when you specify <code>AWS_ARM64</code> with:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     returns recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *             <li>
   *                 <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton2 instance type
   *                     recommendations only.</p>
   *             </li>
   *             <li>
   *                 <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     exports recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *          </ul>
   */
  cpuVendorArchitectures?: (CpuVendorArchitecture | string)[];
}

export namespace RecommendationPreferences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationPreferences): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
 *             key prefix for a recommendations export job.</p>
 *
 *         <p>You must create the destination Amazon S3 bucket for your recommendations
 *             export before you create the export job. Compute Optimizer does not create the S3 bucket
 *             for you. After you create the S3 bucket, ensure that it has the required permission
 *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
 *             an object prefix when you create the export job, you must include the object prefix in
 *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
 *                     <i>Compute Optimizer User Guide</i>.</p>
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of the Amazon S3 bucket to use as the destination for an export
   *             job.</p>
   */
  bucket?: string;

  /**
   * <p>The Amazon S3 bucket prefix for an export job.</p>
   */
  keyPrefix?: string;
}

export namespace S3DestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfig): any => ({
    ...obj,
  });
}

export interface ExportAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Auto Scaling group
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Auto Scaling group recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  fieldsToExport?: (ExportableAutoScalingGroupField | string)[];

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket
   *             name and key prefix for the export job.</p>
   *
   *         <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy  to allow Compute Optimizer to write the export file to it. If you plan to
   *             specify an object prefix when you create the export job, you must include the object
   *             prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *
   *         <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *
   *         <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An object to specify the preferences for the Auto Scaling group recommendations
   *             to export.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

export namespace ExportAutoScalingGroupRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *
   *         <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportAutoScalingGroupRecommendationsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum ExportableVolumeField {
  ACCOUNT_ID = "AccountId",
  CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS = "CurrentConfigurationVolumeBaselineIOPS",
  CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT = "CurrentConfigurationVolumeBaselineThroughput",
  CURRENT_CONFIGURATION_VOLUME_BURST_IOPS = "CurrentConfigurationVolumeBurstIOPS",
  CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT = "CurrentConfigurationVolumeBurstThroughput",
  CURRENT_CONFIGURATION_VOLUME_SIZE = "CurrentConfigurationVolumeSize",
  CURRENT_CONFIGURATION_VOLUME_TYPE = "CurrentConfigurationVolumeType",
  CURRENT_MONTHLY_PRICE = "CurrentMonthlyPrice",
  FINDING = "Finding",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_IOPS = "RecommendationOptionsConfigurationVolumeBaselineIOPS",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT = "RecommendationOptionsConfigurationVolumeBaselineThroughput",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS = "RecommendationOptionsConfigurationVolumeBurstIOPS",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT = "RecommendationOptionsConfigurationVolumeBurstThroughput",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_SIZE = "RecommendationOptionsConfigurationVolumeSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_TYPE = "RecommendationOptionsConfigurationVolumeType",
  RECOMMENDATION_OPTIONS_MONTHLY_PRICE = "RecommendationOptionsMonthlyPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK = "RecommendationOptionsPerformanceRisk",
  UTILIZATION_METRICS_VOLUME_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsVolumeWriteOpsPerSecondMaximum",
  VOLUME_ARN = "VolumeArn",
}

export enum EBSFilterName {
  FINDING = "Finding",
}

/**
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store
 *                 (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p>
 *
 *         <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 */
export interface EBSFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (for example, <code>NotOptimized</code>).</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EBSFilter): any => ({
    ...obj,
  });
}

export interface ExportEBSVolumeRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Amazon EBS
   *             volume recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Amazon EBS volume recommendations.</p>
   */
  filters?: EBSFilter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  fieldsToExport?: (ExportableVolumeField | string)[];

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *
   *         <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *
   *         <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *
   *         <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace ExportEBSVolumeRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportEBSVolumeRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportEBSVolumeRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *
   *         <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportEBSVolumeRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportEBSVolumeRecommendationsResponse): any => ({
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
  Finding_Reason_Codes = "FindingReasonCodes",
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
  RECOMMENDATION_OPTIONS_PLATFORM_DIFFERENCES = "RecommendationOptionsPlatformDifferences",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM = "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE = "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE = "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS = "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM = "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsDiskWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM = "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkPacketsInPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM = "UtilizationMetricsNetworkPacketsOutPerSecondMaximum",
}

export interface ExportEC2InstanceRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export instance
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of instance
   *             recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  fieldsToExport?: (ExportableInstanceField | string)[];

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket
   *             name and key prefix for the export job.</p>
   *
   *         <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy policy to allow Compute Optimizer to write the export file to it. If you plan to
   *             specify an object prefix when you create the export job, you must include the object
   *             prefix in the  that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *
   *         <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to export.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

export namespace ExportEC2InstanceRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportEC2InstanceRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *
   *         <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportEC2InstanceRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportEC2InstanceRecommendationsResponse): any => ({
    ...obj,
  });
}

export enum ExportableLambdaFunctionField {
  ACCOUNT_ID = "AccountId",
  CURRENT_CONFIGURATION_MEMORY_SIZE = "CurrentConfigurationMemorySize",
  CURRENT_CONFIGURATION_TIMEOUT = "CurrentConfigurationTimeout",
  CURRENT_COST_AVERAGE = "CurrentCostAverage",
  CURRENT_COST_TOTAL = "CurrentCostTotal",
  FINDING = "Finding",
  FINDING_REASON_CODES = "FindingReasonCodes",
  FUNCTION_ARN = "FunctionArn",
  FUNCTION_VERSION = "FunctionVersion",
  LAST_REFRESH_TIMESTAMP = "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS = "LookbackPeriodInDays",
  NUMBER_OF_INVOCATIONS = "NumberOfInvocations",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MEMORY_SIZE = "RecommendationOptionsConfigurationMemorySize",
  RECOMMENDATION_OPTIONS_COST_HIGH = "RecommendationOptionsCostHigh",
  RECOMMENDATION_OPTIONS_COST_LOW = "RecommendationOptionsCostLow",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED = "RecommendationOptionsProjectedUtilizationMetricsDurationExpected",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND = "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND = "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound",
  UTILIZATION_METRICS_DURATION_AVERAGE = "UtilizationMetricsDurationAverage",
  UTILIZATION_METRICS_DURATION_MAXIMUM = "UtilizationMetricsDurationMaximum",
  UTILIZATION_METRICS_MEMORY_AVERAGE = "UtilizationMetricsMemoryAverage",
  UTILIZATION_METRICS_MEMORY_MAXIMUM = "UtilizationMetricsMemoryMaximum",
}

export enum LambdaFunctionRecommendationFilterName {
  FINDING = "Finding",
  FINDING_REASON_CODE = "FindingReasonCode",
}

/**
 * <p>Describes a filter that returns a more specific list of Lambda
 *             function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p>
 *
 *         <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 */
export interface LambdaFunctionRecommendationFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (for example, <code>NotOptimized</code>).</p>
   *
   *         <p>Specify <code>FindingReasonCode</code> to return recommendations with a specific
   *             finding reason code (for example, <code>MemoryUnderprovisioned</code>).</p>
   */
  name?: LambdaFunctionRecommendationFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *
   *         <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Specify <code>Optimized</code>, <code>NotOptimized</code>, or
   *                         <code>Unavailable</code> if you specify the <code>name</code> parameter as
   *                         <code>Finding</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Specify <code>MemoryOverprovisioned</code>,
   *                         <code>MemoryUnderprovisioned</code>, <code>InsufficientData</code>, or
   *                         <code>Inconclusive</code> if you specify the <code>name</code> parameter as
   *                         <code>FindingReasonCode</code>.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

export namespace LambdaFunctionRecommendationFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionRecommendationFilter): any => ({
    ...obj,
  });
}

export interface ExportLambdaFunctionRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Lambda
   *             function recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *
   *         <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *
   *         <p>You can specify multiple account IDs per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Lambda function recommendations.</p>
   */
  filters?: LambdaFunctionRecommendationFilter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   */
  fieldsToExport?: (ExportableLambdaFunctionField | string)[];

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *
   *         <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *
   *         <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *
   *         <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *
   *         <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *
   *         <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *
   *         <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace ExportLambdaFunctionRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportLambdaFunctionRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ExportLambdaFunctionRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *
   *         <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   */
  s3Destination?: S3Destination;
}

export namespace ExportLambdaFunctionRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportLambdaFunctionRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The ID of the Amazon Web Services account for which to return Auto Scaling group
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return Auto Scaling group
   *             recommendations.</p>
   *
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return
   *             recommendations.</p>
   */
  autoScalingGroupArns?: string[];

  /**
   * <p>The token to advance to the next page of Auto Scaling group
   *             recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of Auto Scaling group recommendations to return with a single
   *             request.</p>
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of Auto Scaling group recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>An object to specify the preferences for the Auto Scaling group recommendations
   *             to return in the response.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

export namespace GetAutoScalingGroupRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an error experienced when getting recommendations.</p>
 *
 *         <p>For example, an error is returned if you request recommendations for an unsupported
 *                 Auto Scaling group, or if you request recommendations for an instance of an
 *             unsupported instance family.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommendationError): any => ({
    ...obj,
  });
}

export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of Auto Scaling group
   *             recommendations.</p>
   *
   *         <p>This value is null when there are no more pages of Auto Scaling group
   *             recommendations to return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe Auto Scaling group recommendations.</p>
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *
   *         <p>For example, an error is returned if you request recommendations for an unsupported
   *                 Auto Scaling group.</p>
   */
  errors?: GetRecommendationError[];
}

export namespace GetAutoScalingGroupRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAutoScalingGroupRecommendationsResponse): any => ({
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
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of volume
   *             recommendations.</p>
   */
  filters?: EBSFilter[];

  /**
   * <p>The ID of the Amazon Web Services account for which to return volume
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return volume recommendations.</p>
   *
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

export namespace GetEBSVolumeRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEBSVolumeRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the configuration of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 */
export interface VolumeConfiguration {
  /**
   * <p>The volume type.</p>
   *
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
  /**
   * @internal
   */
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
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 */
export interface EBSUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *
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
   *
   *         <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *
   *         <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

export namespace EBSUtilizationMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EBSUtilizationMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS)
 *             instance.</p>
 */
export interface VolumeRecommendationOption {
  /**
   * <p>An array of objects that describe a volume configuration.</p>
   */
  configuration?: VolumeConfiguration;

  /**
   * <p>The performance risk of the volume recommendation option.</p>
   *
   *         <p>Performance risk is the likelihood of the recommended volume type meeting the
   *             performance requirement of your workload.</p>
   *
   *         <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the volume recommendation option.</p>
   *
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace VolumeRecommendationOption {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services account ID of the volume.</p>
   */
  accountId?: string;

  /**
   * <p>An array of objects that describe the current configuration of the volume.</p>
   */
  currentConfiguration?: VolumeConfiguration;

  /**
   * <p>The finding classification of the volume.</p>
   *
   *         <p>Findings for volumes include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—A volume is
   *                     considered not optimized when Compute Optimizer identifies a recommendation
   *                     that can provide better performance for your workload.</p>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An volume is
   *                     considered optimized when Compute Optimizer determines that the volume is
   *                     correctly provisioned to run your workload based on the chosen volume type. For
   *                     optimized resources, Compute Optimizer might recommend a new generation volume
   *                     type.</p>
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
   * <p>The timestamp of when the volume recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace VolumeRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VolumeRecommendation): any => ({
    ...obj,
  });
}

export interface GetEBSVolumeRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of volume recommendations.</p>
   *
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
   *
   *         <p>For example, an error is returned if you request recommendations for an unsupported
   *             volume.</p>
   */
  errors?: GetRecommendationError[];
}

export namespace GetEBSVolumeRecommendationsResponse {
  /**
   * @internal
   */
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
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of instance
   *             recommendations.</p>
   */
  filters?: Filter[];

  /**
   * <p>The ID of the Amazon Web Services account for which to return instance
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return instance recommendations.</p>
   *
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to return in the response.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

export namespace GetEC2InstanceRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEC2InstanceRecommendationsRequest): any => ({
    ...obj,
  });
}

export enum InstanceRecommendationFindingReasonCode {
  CPU_OVER_PROVISIONED = "CPUOverprovisioned",
  CPU_UNDER_PROVISIONED = "CPUUnderprovisioned",
  DISK_IOPS_OVER_PROVISIONED = "DiskIOPSOverprovisioned",
  DISK_IOPS_UNDER_PROVISIONED = "DiskIOPSUnderprovisioned",
  DISK_THROUGHPUT_OVER_PROVISIONED = "DiskThroughputOverprovisioned",
  DISK_THROUGHPUT_UNDER_PROVISIONED = "DiskThroughputUnderprovisioned",
  EBS_IOPS_OVER_PROVISIONED = "EBSIOPSOverprovisioned",
  EBS_IOPS_UNDER_PROVISIONED = "EBSIOPSUnderprovisioned",
  EBS_THROUGHPUT_OVER_PROVISIONED = "EBSThroughputOverprovisioned",
  EBS_THROUGHPUT_UNDER_PROVISIONED = "EBSThroughputUnderprovisioned",
  MEMORY_OVER_PROVISIONED = "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED = "MemoryUnderprovisioned",
  NETWORK_BANDWIDTH_OVER_PROVISIONED = "NetworkBandwidthOverprovisioned",
  NETWORK_BANDWIDTH_UNDER_PROVISIONED = "NetworkBandwidthUnderprovisioned",
  NETWORK_PPS_OVER_PROVISIONED = "NetworkPPSOverprovisioned",
  NETWORK_PPS_UNDER_PROVISIONED = "NetworkPPSUnderprovisioned",
}

export enum PlatformDifference {
  ARCHITECTURE = "Architecture",
  HYPERVISOR = "Hypervisor",
  INSTANCE_STORE_AVAILABILITY = "InstanceStoreAvailability",
  NETWORK_INTERFACE = "NetworkInterface",
  STORAGE_INTERFACE = "StorageInterface",
  VIRTUALIZATION_TYPE = "VirtualizationType",
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
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *         </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

  /**
   * <p>Describes the configuration differences between the current instance and the
   *             recommended instance type. You should consider the configuration differences before
   *             migrating your workloads from the current instance to the recommended instance type. The
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html">Change the instance type guide for Linux</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-resize.html">Change the instance type
   *                 guide for Windows</a> provide general guidance for getting started with an
   *             instance migration.</p>
   *
   *         <p>Platform differences include:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Hypervisor</code>
   *                   </b> — The hypervisor of
   *                     the recommended instance type is different than that of the current instance.
   *                     For example, the recommended instance type uses a Nitro hypervisor and the
   *                     current instance uses a Xen hypervisor. The differences that you should consider
   *                     between these hypervisors are covered in the <a href="http://aws.amazon.com/ec2/faqs/#Nitro_Hypervisor">Nitro Hypervisor</a> section of the
   *                         Amazon EC2 frequently asked questions. For more information, see
   *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the <i>Amazon EC2
   *                         User Guide for Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#ec2-nitro-instances">Instances built on the Nitro System</a> in the <i>Amazon EC2
   *                         User Guide for Windows</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NetworkInterface</code>
   *                   </b> — The network
   *                     interface of the recommended instance type is different than that of the current
   *                     instance. For example, the recommended instance type supports enhanced
   *                     networking and the current instance might not. To enable enhanced networking for
   *                     the recommended instance type, you must install the Elastic Network Adapter
   *                     (ENA) driver or the Intel 82599 Virtual Function driver. For more information,
   *                     see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html">Enhanced networking
   *                         on Linux</a> in the <i>Amazon EC2 User Guide for
   *                     Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/enhanced-networking.html">Enhanced
   *                         networking on Windows</a> in the <i>Amazon EC2 User Guide for
   *                         Windows</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>StorageInterface</code>
   *                   </b> — The storage
   *                     interface of the recommended instance type is different than that of the current
   *                     instance. For example, the recommended instance type uses an NVMe storage
   *                     interface and the current instance does not. To access NVMe volumes for the
   *                     recommended instance type, you will need to install or upgrade the NVMe driver.
   *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nvme-ebs-volumes.html">Amazon EBS and NVMe on
   *                         Linux instances</a> in the <i>Amazon EC2 User Guide for
   *                         Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/nvme-ebs-volumes.html">Amazon EBS and NVMe
   *                         on Windows instances</a> in the <i>Amazon EC2 User Guide for
   *                         Windows</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>InstanceStoreAvailability</code>
   *                   </b> — The
   *                     recommended instance type does not support instance store volumes and the
   *                     current instance does. Before migrating, you might need to back up the data on
   *                     your instance store volumes if you want to preserve them. For more information,
   *                     see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/">How do I back up an instance store volume on my Amazon EC2 instance
   *                         to Amazon EBS?</a> in the <i>Amazon Web Services Premium
   *                         Support Knowledge Base</i>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2
   *                         instance store</a> in the <i>Amazon EC2 User Guide for
   *                         Linux</i>, or see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage">Networking and storage features</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/InstanceStorage.html">Amazon EC2
   *                         instance store</a> in the <i>Amazon EC2 User Guide for
   *                         Windows</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>VirtualizationType</code>
   *                   </b> — The
   *                     recommended instance type uses the hardware virtual machine (HVM) virtualization
   *                     type and the current instance uses the paravirtual (PV) virtualization type. For
   *                     more information about the differences between these virtualization types, see
   *                         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html">Linux AMI
   *                         virtualization types</a> in the <i>Amazon EC2 User Guide for
   *                         Linux</i>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/windows-ami-version-history.html#virtualization-types">Windows AMI virtualization types</a> in the <i>Amazon EC2 User
   *                         Guide for Windows</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Architecture</code>
   *                   </b> — The CPU
   *                     architecture between the recommended instance type and the current instance is
   *                     different. For example, the recommended instance type might use an x86 CPU
   *                     architecture and the current instance type might use a different one, such as
   *                     ARM. Before migrating, you should consider recompiling the software on your
   *                     instance for the new architecture. Alternatively, you might switch to an Amazon
   *                     Machine Image (AMI) that supports the new architecture. For more information
   *                     about the CPU architecture for each instance type, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>.</p>
   *             </li>
   *          </ul>
   */
  platformDifferences?: (PlatformDifference | string)[];

  /**
   * <p>The performance risk of the instance recommendation option.</p>
   *
   *         <p>Performance risk indicates the likelihood of the recommended instance type not meeting
   *             the resource needs of your workload. Compute Optimizer calculates an individual
   *             performance risk score for each specification of the recommended instance, including
   *             CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput,
   *             and network PPS.
   *             The performance
   *             risk of the recommended instance is calculated as the maximum performance risk score
   *             across the analyzed resource specifications.</p>
   *
   *         <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the instance recommendation option.</p>
   *
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;
}

export namespace InstanceRecommendationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceRecommendationOption): any => ({
    ...obj,
  });
}

export enum RecommendationSourceType {
  AUTO_SCALING_GROUP = "AutoScalingGroup",
  EBS_VOLUME = "EbsVolume",
  EC2_INSTANCE = "Ec2Instance",
  LAMBDA_FUNCTION = "LambdaFunction",
}

/**
 * <p>Describes the source of a recommendation, such as an Amazon EC2 instance or
 *                 Auto Scaling group.</p>
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
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services account ID of the instance.</p>
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
   * <p>The finding classification of the instance.</p>
   *
   *         <p>Findings for instances include:</p>
   *
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
   *                     not over provisioned. For optimized resources, Compute Optimizer might
   *                     recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   */
  finding?: Finding | string;

  /**
   * <p>The reason for the finding classification of the instance.</p>
   *
   *         <p>Finding reason codes for instances include:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>CPUOverprovisioned</code>
   *                   </b> — The
   *                     instance’s CPU configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                         <code>CPUUtilization</code> metric of the current instance during the
   *                     look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>CPUUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s CPU configuration doesn't meet the performance requirements of your
   *                     workload and there is an alternative instance type that provides better CPU
   *                     performance. This is identified by analyzing the <code>CPUUtilization</code>
   *                     metric of the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>MemoryOverprovisioned</code>
   *                   </b> — The
   *                     instance’s memory configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                     memory utilization metric of the current instance during the look-back
   *                     period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>MemoryUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s memory configuration doesn't meet the performance requirements of
   *                     your workload and there is an alternative instance type that provides better
   *                     memory performance. This is identified by analyzing the memory utilization
   *                     metric of the current instance during the look-back period.</p>
   *
   *                 <note>
   *                     <p>Memory utilization is analyzed only for resources that have the unified
   *                             CloudWatch agent installed on them. For more information, see
   *                             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling memory
   *                             utilization with the Amazon CloudWatch Agent</a> in the
   *                                 <i>Compute Optimizer User Guide</i>. On Linux
   *                         instances, Compute Optimizer analyses the <code>mem_used_percent</code>
   *                         metric in the <code>CWAgent</code> namespace, or the legacy
   *                             <code>MemoryUtilization</code> metric in the <code>System/Linux</code>
   *                         namespace. On Windows instances, Compute Optimizer analyses the <code>Memory
   *                             % Committed Bytes In Use</code> metric in the <code>CWAgent</code>
   *                         namespace.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>EBSThroughputOverprovisioned</code>
   *                   </b> —
   *                     The instance’s EBS throughput configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metrics
   *                     of EBS volumes attached to the current instance during the look-back
   *                     period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>EBSThroughputUnderprovisioned</code>
   *                   </b> —
   *                     The instance’s EBS throughput configuration doesn't meet the performance
   *                     requirements of your workload and there is an alternative instance type that
   *                     provides better EBS throughput performance. This is identified by analyzing the
   *                         <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metrics of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>EBSIOPSOverprovisioned</code>
   *                   </b> — The
   *                     instance’s EBS IOPS configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                         <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code> metric of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>EBSIOPSUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s EBS IOPS configuration doesn't meet the performance requirements of
   *                     your workload and there is an alternative instance type that provides better EBS
   *                     IOPS performance. This is identified by analyzing the
   *                         <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code> metric of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NetworkBandwidthOverprovisioned</code>
   *                   </b>
   *                     — The instance’s network bandwidth configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>NetworkIn</code> and <code>NetworkOut</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NetworkBandwidthUnderprovisioned</code>
   *                   </b>
   *                     — The instance’s network bandwidth configuration doesn't meet the performance
   *                     requirements of your workload and there is an alternative instance type that
   *                     provides better network bandwidth performance. This is identified by analyzing
   *                     the <code>NetworkIn</code> and <code>NetworkOut</code> metrics of the current
   *                     instance during the look-back period. This finding reason happens when the
   *                         <code>NetworkIn</code> or <code>NetworkOut</code> performance of an instance
   *                     is impacted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NetworkPPSOverprovisioned</code>
   *                   </b> — The
   *                     instance’s network PPS (packets per second) configuration can be sized down
   *                     while still meeting the performance requirements of your workload. This is
   *                     identified by analyzing the <code>NetworkPacketsIn</code> and
   *                         <code>NetworkPacketsIn</code> metrics of the current instance during the
   *                     look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NetworkPPSUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s network PPS (packets per second) configuration doesn't meet the
   *                     performance requirements of your workload and there is an alternative instance
   *                     type that provides better network PPS performance. This is identified by
   *                     analyzing the <code>NetworkPacketsIn</code> and <code>NetworkPacketsIn</code>
   *                     metrics of the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>DiskIOPSOverprovisioned</code>
   *                   </b> — The
   *                     instance’s disk IOPS configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                         <code>DiskReadOps</code> and <code>DiskWriteOps</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>DiskIOPSUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s disk IOPS configuration doesn't meet the performance requirements of
   *                     your workload and there is an alternative instance type that provides better
   *                     disk IOPS performance. This is identified by analyzing the
   *                         <code>DiskReadOps</code> and <code>DiskWriteOps</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>DiskThroughputOverprovisioned</code>
   *                   </b> —
   *                     The instance’s disk throughput configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>DiskReadBytes</code> and <code>DiskWriteBytes</code> metrics
   *                     of the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>DiskThroughputUnderprovisioned</code>
   *                   </b> —
   *                     The instance’s disk throughput configuration doesn't meet the performance
   *                     requirements of your workload and there is an alternative instance type that
   *                     provides better disk throughput performance. This is identified by analyzing the
   *                         <code>DiskReadBytes</code> and <code>DiskWriteBytes</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *          </ul>
   *
   *         <note>
   *             <p>For more information about instance metrics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html">List the
   *                     available CloudWatch metrics for your instances</a> in the
   *                         <i>Amazon Elastic Compute Cloud User Guide</i>. For more information
   *                 about EBS volume metrics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html">Amazon CloudWatch
   *                     metrics for Amazon EBS</a> in the <i>Amazon Elastic Compute Cloud
   *                     User Guide</i>.</p>
   *         </note>
   */
  findingReasonCodes?: (InstanceRecommendationFindingReasonCode | string)[];

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
   * <p>The timestamp of when the instance recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;
}

export namespace InstanceRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceRecommendation): any => ({
    ...obj,
  });
}

export interface GetEC2InstanceRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *
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
   *
   *         <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   */
  errors?: GetRecommendationError[];
}

export namespace GetEC2InstanceRecommendationsResponse {
  /**
   * @internal
   */
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
   * <p>The timestamp of the first projected metrics data point to return.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp of the last projected metrics data point to return.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 recommendation
   *             projected metrics to return in the response.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

export namespace GetEC2RecommendationProjectedMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a projected utilization metric of a recommendation option, such as an
 *                 Amazon EC2 instance. This represents the projected utilization of a
 *             recommendation option had you used that resource during the analyzed period.</p>
 *
 *         <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 */
export interface ProjectedMetric {
  /**
   * <p>The name of the projected utilization metric.</p>
   *
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
   *                         the unified CloudWatch agent installed on them. For more information,
   *                         see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                 </note>
   *             </li>
   *          </ul>
   */
  name?: MetricName | string;

  /**
   * <p>The timestamps of the projected utilization metric.</p>
   */
  timestamps?: Date[];

  /**
   * <p>The values of the projected utilization metrics.</p>
   */
  values?: number[];
}

export namespace ProjectedMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectedMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * <p>The recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   *
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendedOptionProjectedMetric): any => ({
    ...obj,
  });
}

export interface GetEC2RecommendationProjectedMetricsResponse {
  /**
   * <p>An array of objects that describes projected metrics.</p>
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
}

export namespace GetEC2RecommendationProjectedMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEC2RecommendationProjectedMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetEnrollmentStatusRequest {}

export namespace GetEnrollmentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnrollmentStatusRequest): any => ({
    ...obj,
  });
}

export interface GetEnrollmentStatusResponse {
  /**
   * <p>The enrollment status of the account.</p>
   */
  status?: Status | string;

  /**
   * <p>The reason for the enrollment status of the account.</p>
   *
   *         <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   */
  statusReason?: string;

  /**
   * <p>Confirms the enrollment status of member accounts of the organization, if the account
   *             is a management account of an organization.</p>
   */
  memberAccountsEnrolled?: boolean;

  /**
   * <p>The Unix epoch timestamp, in seconds, of when the account enrollment status was last
   *             updated.</p>
   */
  lastUpdatedTimestamp?: Date;

  /**
   * <p>The count of organization member accounts that are opted in to the service, if your
   *             account is an organization management account.</p>
   */
  numberOfMemberAccountsOptedIn?: number;
}

export namespace GetEnrollmentStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnrollmentStatusResponse): any => ({
    ...obj,
  });
}

export enum EnrollmentFilterName {
  STATUS = "Status",
}

/**
 * <p>Describes a filter that returns a more specific list of account enrollment statuses.
 *             Use this filter with the <a>GetEnrollmentStatusesForOrganization</a>
 *             action.</p>
 */
export interface EnrollmentFilter {
  /**
   * <p>The name of the filter.</p>
   *
   *         <p>Specify <code>Status</code> to return accounts with a specific enrollment status (for
   *             example, <code>Active</code>).</p>
   */
  name?: EnrollmentFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *
   *         <p>The valid values are <code>Active</code>, <code>Inactive</code>, <code>Pending</code>,
   *             and <code>Failed</code>.</p>
   */
  values?: string[];
}

export namespace EnrollmentFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnrollmentFilter): any => ({
    ...obj,
  });
}

export interface GetEnrollmentStatusesForOrganizationRequest {
  /**
   * <p>An array of objects to specify a filter that returns a more specific list of account
   *             enrollment statuses.</p>
   */
  filters?: EnrollmentFilter[];

  /**
   * <p>The token to advance to the next page of account enrollment statuses.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of account enrollment statuses to return with a single request. You
   *             can specify up to 100 statuses to return with each request.</p>
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace GetEnrollmentStatusesForOrganizationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnrollmentStatusesForOrganizationRequest): any => ({
    ...obj,
  });
}

export interface GetEnrollmentStatusesForOrganizationResponse {
  /**
   * <p>An array of objects that describe the enrollment statuses of organization member
   *             accounts.</p>
   */
  accountEnrollmentStatuses?: AccountEnrollmentStatus[];

  /**
   * <p>The token to use to advance to the next page of account enrollment statuses.</p>
   *
   *         <p>This value is null when there are no more pages of account enrollment statuses to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace GetEnrollmentStatusesForOrganizationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnrollmentStatusesForOrganizationResponse): any => ({
    ...obj,
  });
}

export interface GetLambdaFunctionRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the functions for which to return
   *             recommendations.</p>
   *
   *         <p>You can specify a qualified or unqualified ARN. If you specify an unqualified ARN
   *             without a function version suffix, Compute Optimizer will return recommendations for the
   *             latest (<code>$LATEST</code>) version of the function. If you specify a qualified ARN
   *             with a version suffix, Compute Optimizer will return recommendations for the specified
   *             function version. For more information about using function versions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">Using
   *                 versions</a> in the <i>Lambda Developer
   *             Guide</i>.</p>
   */
  functionArns?: string[];

  /**
   * <p>The ID of the Amazon Web Services account for which to return function
   *             recommendations.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return function recommendations.</p>
   *
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of function
   *             recommendations.</p>
   */
  filters?: LambdaFunctionRecommendationFilter[];

  /**
   * <p>The token to advance to the next page of function recommendations.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of function recommendations to return with a single request.</p>
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace GetLambdaFunctionRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLambdaFunctionRecommendationsRequest): any => ({
    ...obj,
  });
}

export enum LambdaFunctionRecommendationFinding {
  NOT_OPTIMIZED = "NotOptimized",
  OPTIMIZED = "Optimized",
  UNAVAILABLE = "Unavailable",
}

export enum LambdaFunctionRecommendationFindingReasonCode {
  INCONCLUSIVE = "Inconclusive",
  INSUFFICIENT_DATA = "InsufficientData",
  MEMORY_OVER_PROVISIONED = "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED = "MemoryUnderprovisioned",
}

export enum LambdaFunctionMemoryMetricName {
  DURATION = "Duration",
}

export enum LambdaFunctionMemoryMetricStatistic {
  EXPECTED = "Expected",
  LOWER_BOUND = "LowerBound",
  UPPER_BOUND = "UpperBound",
}

/**
 * <p>Describes a projected utilization metric of an Lambda function
 *             recommendation option.</p>
 */
export interface LambdaFunctionMemoryProjectedMetric {
  /**
   * <p>The name of the projected utilization metric.</p>
   */
  name?: LambdaFunctionMemoryMetricName | string;

  /**
   * <p>The statistic of the projected utilization metric.</p>
   */
  statistic?: LambdaFunctionMemoryMetricStatistic | string;

  /**
   * <p>The values of the projected utilization metrics.</p>
   */
  value?: number;
}

export namespace LambdaFunctionMemoryProjectedMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionMemoryProjectedMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a recommendation option for an Lambda function.</p>
 */
export interface LambdaFunctionMemoryRecommendationOption {
  /**
   * <p>The rank of the function recommendation option.</p>
   *
   *         <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>The memory size, in MB, of the function recommendation option.</p>
   */
  memorySize?: number;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the function
   *             recommendation option.</p>
   */
  projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[];
}

export namespace LambdaFunctionMemoryRecommendationOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionMemoryRecommendationOption): any => ({
    ...obj,
  });
}

export enum LambdaFunctionMetricName {
  DURATION = "Duration",
  MEMORY = "Memory",
}

export enum LambdaFunctionMetricStatistic {
  AVERAGE = "Average",
  MAXIMUM = "Maximum",
}

/**
 * <p>Describes a utilization metric of an Lambda function.</p>
 */
export interface LambdaFunctionUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *
   *         <p>The following utilization metrics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Duration</code> - The amount of time that your function code spends
   *                     processing an event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Memory</code> - The amount of memory used per invocation.</p>
   *             </li>
   *          </ul>
   */
  name?: LambdaFunctionMetricName | string;

  /**
   * <p>The statistic of the utilization metric.</p>
   *
   *         <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *
   *         <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   */
  statistic?: LambdaFunctionMetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

export namespace LambdaFunctionUtilizationMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionUtilizationMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Lambda function recommendation.</p>
 */
export interface LambdaFunctionRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current function.</p>
   */
  functionArn?: string;

  /**
   * <p>The version number of the current function.</p>
   */
  functionVersion?: string;

  /**
   * <p>The Amazon Web Services account ID of the function.</p>
   */
  accountId?: string;

  /**
   * <p>The amount of memory, in MB, that's allocated to the current function.</p>
   */
  currentMemorySize?: number;

  /**
   * <p>The number of times your function code was applied during the look-back period.</p>
   */
  numberOfInvocations?: number;

  /**
   * <p>An array of objects that describe the utilization metrics of the function.</p>
   */
  utilizationMetrics?: LambdaFunctionUtilizationMetric[];

  /**
   * <p>The number of days for which utilization metrics were analyzed for the
   *             function.</p>
   */
  lookbackPeriodInDays?: number;

  /**
   * <p>The timestamp of when the function recommendation was last refreshed.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The finding classification of the function.</p>
   *
   *         <p>Findings for functions include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b> — The function is
   *                     correctly provisioned to run your workload based on its current configuration
   *                     and its utilization history. This finding classification does not include
   *                     finding reason codes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b> — The function is
   *                     performing at a higher level (over-provisioned) or at a lower level
   *                     (under-provisioned) than required for your workload because its current
   *                     configuration is not optimal. Over-provisioned resources might lead to
   *                     unnecessary infrastructure cost, and under-provisioned resources might lead to
   *                     poor application performance. This finding classification can include the
   *                         <code>MemoryUnderprovisioned</code> and <code>MemoryUnderprovisioned</code>
   *                     finding reason codes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Unavailable</code>
   *                   </b> — Compute Optimizer
   *                     was unable to generate a recommendation for the function. This could be because
   *                     the function has not accumulated sufficient metric data, or the function does
   *                     not qualify for a recommendation. This finding classification can include the
   *                         <code>InsufficientData</code> and <code>Inconclusive</code> finding reason
   *                     codes.</p>
   *                 <note>
   *                     <p>Functions with a finding of unavailable are not returned unless you
   *                         specify the <code>filter</code> parameter with a value of
   *                             <code>Unavailable</code> in your
   *                             <code>GetLambdaFunctionRecommendations</code> request.</p>
   *                 </note>
   *             </li>
   *          </ul>
   */
  finding?: LambdaFunctionRecommendationFinding | string;

  /**
   * <p>The reason for the finding classification of the function.</p>
   *         <note>
   *             <p>Functions that have a finding classification of <code>Optimized</code> don't have
   *                 a finding reason code.</p>
   *         </note>
   *         <p>Finding reason codes for functions include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>MemoryOverprovisioned</code>
   *                   </b> — The
   *                     function is over-provisioned when its memory configuration can be sized down
   *                     while still meeting the performance requirements of your workload. An
   *                     over-provisioned function might lead to unnecessary infrastructure cost. This
   *                     finding reason code is part of the <code>NotOptimized</code> finding
   *                     classification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>MemoryUnderprovisioned</code>
   *                   </b> — The
   *                     function is under-provisioned when its memory configuration doesn't meet the
   *                     performance requirements of the workload. An under-provisioned function might
   *                     lead to poor application performance. This finding reason code is part of the
   *                         <code>NotOptimized</code> finding classification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>InsufficientData</code>
   *                   </b> — The function
   *                     does not have sufficient metric data for Compute Optimizer to generate a
   *                     recommendation. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
   *                         requirements</a> in the <i>Compute Optimizer User
   *                         Guide</i>. This finding reason code is part of the
   *                         <code>Unavailable</code> finding classification.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>Inconclusive</code>
   *                   </b> — The function does
   *                     not qualify for a recommendation because Compute Optimizer cannot generate a
   *                     recommendation with a high degree of confidence. This finding reason code is
   *                     part of the <code>Unavailable</code> finding classification.</p>
   *             </li>
   *          </ul>
   */
  findingReasonCodes?: (LambdaFunctionRecommendationFindingReasonCode | string)[];

  /**
   * <p>An array of objects that describe the memory configuration recommendation options for
   *             the function.</p>
   */
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[];
}

export namespace LambdaFunctionRecommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaFunctionRecommendation): any => ({
    ...obj,
  });
}

export interface GetLambdaFunctionRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of function recommendations.</p>
   *
   *         <p>This value is null when there are no more pages of function recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe function recommendations.</p>
   */
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[];
}

export namespace GetLambdaFunctionRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLambdaFunctionRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface GetRecommendationSummariesRequest {
  /**
   * <p>The ID of the Amazon Web Services account for which to return recommendation
   *             summaries.</p>
   *
   *         <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return recommendation summaries.</p>
   *
   *         <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recommendation summaries to return with a single request.</p>
   *
   *         <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

export namespace GetRecommendationSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommendationSummariesRequest): any => ({
    ...obj,
  });
}

export enum FindingReasonCode {
  MEMORY_OVER_PROVISIONED = "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED = "MemoryUnderprovisioned",
}

/**
 * <p>A summary of a finding reason code.</p>
 */
export interface ReasonCodeSummary {
  /**
   * <p>The name of the finding reason code.</p>
   */
  name?: FindingReasonCode | string;

  /**
   * <p>The value of the finding reason code summary.</p>
   */
  value?: number;
}

export namespace ReasonCodeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReasonCodeSummary): any => ({
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

  /**
   * <p>An array of objects that summarize a finding reason code.</p>
   */
  reasonCodeSummaries?: ReasonCodeSummary[];
}

export namespace Summary {
  /**
   * @internal
   */
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
   * <p>The Amazon Web Services account ID of the recommendation summary.</p>
   */
  accountId?: string;
}

export namespace RecommendationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationSummary): any => ({
    ...obj,
  });
}

export interface GetRecommendationSummariesResponse {
  /**
   * <p>The token to use to advance to the next page of recommendation summaries.</p>
   *
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommendationSummariesResponse): any => ({
    ...obj,
  });
}

export interface UpdateEnrollmentStatusRequest {
  /**
   * <p>The new enrollment status of the account.</p>
   *
   *         <p>The following status options are available:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Active</code> - Opts in your account to the Compute Optimizer service.
   *                         Compute Optimizer begins analyzing the configuration and utilization metrics
   *                     of your Amazon Web Services resources after you opt in. For more information, see
   *                         <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html">Metrics analyzed by Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Inactive</code> - Opts out your account from the Compute Optimizer
   *                     service. Your account's recommendations and related metrics data will be deleted
   *                     from Compute Optimizer after you opt out.</p>
   *             </li>
   *          </ul>
   *
   *         <note>
   *             <p>The <code>Pending</code> and <code>Failed</code> options cannot be used to update
   *                 the enrollment status of an account. They are returned in the response of a request
   *                 to update the enrollment status of an account.</p>
   *         </note>
   */
  status: Status | string | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the account is the
   *             management account of an organization.</p>
   */
  includeMemberAccounts?: boolean;
}

export namespace UpdateEnrollmentStatusRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEnrollmentStatusResponse): any => ({
    ...obj,
  });
}
