// smithy-typescript generated code
import type {
  AllocationStrategy,
  AsgType,
  AutoScalingConfiguration,
  CpuVendorArchitecture,
  Currency,
  CurrentPerformanceRisk,
  CustomizableMetricHeadroom,
  CustomizableMetricName,
  CustomizableMetricThreshold,
  Dimension,
  EBSFilterName,
  EBSFinding,
  EBSMetricName,
  EBSSavingsEstimationModeSource,
  ECSSavingsEstimationModeSource,
  ECSServiceLaunchType,
  ECSServiceMetricName,
  ECSServiceMetricStatistic,
  ECSServiceRecommendationFilterName,
  ECSServiceRecommendationFinding,
  ECSServiceRecommendationFindingReasonCode,
  EnhancedInfrastructureMetrics,
  EnrollmentFilterName,
  ExportableAutoScalingGroupField,
  ExportableECSServiceField,
  ExportableIdleField,
  ExportableInstanceField,
  ExportableLambdaFunctionField,
  ExportableLicenseField,
  ExportableRDSDBField,
  ExportableVolumeField,
  ExternalMetricsSource,
  ExternalMetricStatusCode,
  FileFormat,
  FilterName,
  Finding,
  FindingReasonCode,
  Idle,
  IdleFinding,
  IdleMetricName,
  IdleRecommendationFilterName,
  IdleRecommendationResourceType,
  InferredWorkloadType,
  InferredWorkloadTypesPreference,
  InstanceIdle,
  InstanceRecommendationFindingReasonCode,
  InstanceSavingsEstimationModeSource,
  InstanceState,
  JobFilterName,
  JobStatus,
  LambdaFunctionMemoryMetricName,
  LambdaFunctionMemoryMetricStatistic,
  LambdaFunctionMetricName,
  LambdaFunctionMetricStatistic,
  LambdaFunctionRecommendationFilterName,
  LambdaFunctionRecommendationFinding,
  LambdaFunctionRecommendationFindingReasonCode,
  LambdaSavingsEstimationModeSource,
  LicenseEdition,
  LicenseFinding,
  LicenseFindingReasonCode,
  LicenseModel,
  LicenseName,
  LicenseRecommendationFilterName,
  LookBackPeriodPreference,
  MetricName,
  MetricSourceProvider,
  MetricStatistic,
  MigrationEffort,
  Order,
  PlatformDifference,
  PreferredResourceName,
  RDSCurrentInstancePerformanceRisk,
  RDSDBMetricName,
  RDSDBMetricStatistic,
  RDSDBRecommendationFilterName,
  RDSEstimatedMonthlyVolumeIOPsCostVariation,
  RDSInstanceFinding,
  RDSInstanceFindingReasonCode,
  RDSSavingsEstimationModeSource,
  RDSStorageFinding,
  RDSStorageFindingReasonCode,
  RecommendationPreferenceName,
  RecommendationSourceType,
  ResourceType,
  SavingsEstimationMode,
  ScopeName,
  Status,
} from "./enums";

/**
 * Describes the enrollment status of an organization's member accounts in Compute Optimizer.
 *
 * @public
 */
export interface AccountEnrollmentStatus {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The account enrollment status.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The reason for the account enrollment status.
   *
   * For example, an account might show a status of `Pending` because member accounts of an organization require more time to be enrolled in the service.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Unix epoch timestamp, in seconds, of when the account enrollment status was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * Describes the configuration of an EC2 Auto Scaling group.
 *
 * @public
 */
export interface AutoScalingGroupConfiguration {
  /**
   * The desired capacity, or number of instances, for the EC2 Auto Scaling group.
   *
   * @public
   */
  desiredCapacity?: number | undefined;

  /**
   * The minimum size, or minimum number of instances, for the EC2 Auto Scaling group.
   *
   * @public
   */
  minSize?: number | undefined;

  /**
   * The maximum size, or maximum number of instances, for the EC2 Auto Scaling group.
   *
   * @public
   */
  maxSize?: number | undefined;

  /**
   * The instance type for the EC2 Auto Scaling group.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Describes the allocation strategy that the EC2 Auto Scaling group uses. This field is only available for EC2 Auto Scaling groups with mixed instance types.
   *
   * @public
   */
  allocationStrategy?: AllocationStrategy | undefined;

  /**
   * Describes the projected percentage reduction in instance hours after adopting the recommended configuration. This field is only available for EC2 Auto Scaling groups with scaling policies.
   *
   * @public
   */
  estimatedInstanceHourReductionPercentage?: number | undefined;

  /**
   * Describes whether the EC2 Auto Scaling group has a single instance type or a mixed instance type configuration.
   *
   * @public
   */
  type?: AsgType | undefined;

  /**
   * List the instance types within an EC2 Auto Scaling group that has mixed instance types.
   *
   * @public
   */
  mixedInstanceTypes?: string[] | undefined;
}

/**
 * An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Auto Scaling group recommendations. This is based on the Savings Plans and Reserved Instances discounts.
 *
 * @public
 */
export interface AutoScalingGroupEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the GPU accelerators for the instance type.
 *
 * @public
 */
export interface Gpu {
  /**
   * The number of GPUs for the instance type.
   *
   * @public
   */
  gpuCount?: number | undefined;

  /**
   * The total size of the memory for the GPU accelerators for the instance type, in MiB.
   *
   * @public
   */
  gpuMemorySizeInMiB?: number | undefined;
}

/**
 * Describes the GPU accelerator settings for the instance type.
 *
 * @public
 */
export interface GpuInfo {
  /**
   * Describes the GPU accelerators for the instance type.
   *
   * @public
   */
  gpus?: Gpu[] | undefined;
}

/**
 * Describes the external metrics preferences for EC2 rightsizing recommendations.
 *
 * @public
 */
export interface ExternalMetricsPreference {
  /**
   * Contains the source options for external metrics preferences.
   *
   * @public
   */
  source?: ExternalMetricsSource | undefined;
}

/**
 * Describes the effective preferred resources that Compute Optimizer considers as rightsizing recommendation candidates.
 *
 * > **Note:** Compute Optimizer only supports Amazon EC2 instance types.
 *
 * @public
 */
export interface EffectivePreferredResource {
  /**
   * The name of the preferred resource list.
   *
   * @public
   */
  name?: PreferredResourceName | undefined;

  /**
   * The list of preferred resource values that you want considered as rightsizing recommendation candidates.
   *
   * @public
   */
  includeList?: string[] | undefined;

  /**
   * The expanded version of your preferred resource's include list.
   *
   * @public
   */
  effectiveIncludeList?: string[] | undefined;

  /**
   * The list of preferred resources values that you want excluded from rightsizing recommendation candidates.
   *
   * @public
   */
  excludeList?: string[] | undefined;
}

/**
 * Describes the savings estimation mode used for calculating savings opportunity for Amazon EC2 instances.
 *
 * @public
 */
export interface InstanceSavingsEstimationMode {
  /**
   * Describes the source for calculating the savings opportunity for Amazon EC2 instances.
   *
   * @public
   */
  source?: InstanceSavingsEstimationModeSource | undefined;
}

/**
 * Defines the various metric parameters that can be customized, such as threshold and headroom.
 *
 * @public
 */
export interface CustomizableMetricParameters {
  /**
   * The threshold value used for the specified metric parameter.
   *
   * > **Note:** You can only specify the threshold value for CPU utilization.
   *
   * @public
   */
  threshold?: CustomizableMetricThreshold | undefined;

  /**
   * The headroom value in percentage used for the specified metric parameter.
   *
   * The following lists the valid values for CPU and memory utilization.
   *
   * - CPU utilization: `PERCENT_30 | PERCENT_20 | PERCENT_0`
   * - Memory utilization: `PERCENT_30 | PERCENT_20 | PERCENT_10`
   *
   * @public
   */
  headroom?: CustomizableMetricHeadroom | undefined;
}

/**
 * The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom.
 *
 * > **Note:** This preference is only available for the Amazon EC2 instance resource type.
 *
 * @public
 */
export interface UtilizationPreference {
  /**
   * The name of the resource utilization metric name to customize.
   *
   * @public
   */
  metricName?: CustomizableMetricName | undefined;

  /**
   * The parameters to set when customizing the resource utilization thresholds.
   *
   * @public
   */
  metricParameters?: CustomizableMetricParameters | undefined;
}

/**
 * Describes the effective recommendation preferences for a resource.
 *
 * @public
 */
export interface EffectiveRecommendationPreferences {
  /**
   * Describes the CPU vendor and architecture for an instance or Auto Scaling group recommendations.
   *
   * For example, when you specify `AWS_ARM64` with:
   *
   * - A GetEC2InstanceRecommendations or GetAutoScalingGroupRecommendations request, Compute Optimizer returns recommendations that consist of Graviton instance types only.
   * - A GetEC2RecommendationProjectedMetrics request, Compute Optimizer returns projected utilization metrics for Graviton instance type recommendations only.
   * - A ExportEC2InstanceRecommendations or ExportAutoScalingGroupRecommendations request, Compute Optimizer exports recommendations that consist of Graviton instance types only.
   *
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;

  /**
   * Describes the activation status of the enhanced infrastructure metrics preference.
   *
   * A status of `Active` confirms that the preference is applied in the latest recommendation refresh, and a status of `Inactive` confirms that it's not yet applied to recommendations.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * Describes the activation status of the inferred workload types preference.
   *
   * A status of `Active` confirms that the preference is applied in the latest recommendation refresh. A status of `Inactive` confirms that it's not yet applied to recommendations.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * An object that describes the external metrics recommendation preference.
   *
   * If the preference is applied in the latest recommendation refresh, an object with a valid `source` value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response.
   *
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * The number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * The resource’s CPU and memory utilization preferences, such as threshold and headroom, that are used to generate rightsizing recommendations.
   *
   * > **Note:** This preference is only available for the Amazon EC2 instance resource type.
   *
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * The resource type values that are considered as candidates when generating rightsizing recommendations.
   *
   * @public
   */
  preferredResources?: EffectivePreferredResource[] | undefined;

  /**
   * Describes the savings estimation mode applied for calculating savings opportunity for a resource.
   *
   * @public
   */
  savingsEstimationMode?: InstanceSavingsEstimationMode | undefined;
}

/**
 * Describes a utilization metric of a resource, such as an Amazon EC2 instance.
 *
 * Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.
 *
 * @public
 */
export interface UtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * The following utilization metrics are available:
   *
   * - `Cpu` - The percentage of allocated EC2 compute units that are currently in use on the instance. This metric identifies the processing power required to run an application on the instance.
   *
   *   Depending on the instance type, tools in your operating system can show a lower percentage than CloudWatch when the instance is not allocated a full processor core.
   *
   *   Units: Percent
   * - `Memory` - The percentage of memory that is currently in use on the instance. This metric identifies the amount of memory required to run an application on the instance.
   *
   *   Units: Percent
   *
   *   > **Note:** The `Memory` metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent).
   * - `GPU` - The percentage of allocated GPUs that currently run on the instance.
   * - `GPU_MEMORY` - The percentage of total GPU memory that currently runs on the instance.
   *
   *   > **Note:** The `GPU` and `GPU_MEMORY` metrics are only returned for resources with the unified CloudWatch Agent installed on them. For more information, see [Enabling NVIDIA GPU utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent).
   * - `EBS_READ_OPS_PER_SECOND` - The completed read operations from all EBS volumes attached to the instance in a specified period of time.
   *
   *   Unit: Count
   * - `EBS_WRITE_OPS_PER_SECOND` - The completed write operations to all EBS volumes attached to the instance in a specified period of time.
   *
   *   Unit: Count
   * - `EBS_READ_BYTES_PER_SECOND` - The bytes read from all EBS volumes attached to the instance in a specified period of time.
   *
   *   Unit: Bytes
   * - `EBS_WRITE_BYTES_PER_SECOND` - The bytes written to all EBS volumes attached to the instance in a specified period of time.
   *
   *   Unit: Bytes
   * - `DISK_READ_OPS_PER_SECOND` - The completed read operations from all instance store volumes available to the instance in a specified period of time.
   *
   *   If there are no instance store volumes, either the value is `0` or the metric is not reported.
   * - `DISK_WRITE_OPS_PER_SECOND` - The completed write operations from all instance store volumes available to the instance in a specified period of time.
   *
   *   If there are no instance store volumes, either the value is `0` or the metric is not reported.
   * - `DISK_READ_BYTES_PER_SECOND` - The bytes read from all instance store volumes available to the instance. This metric is used to determine the volume of the data the application reads from the disk of the instance. This can be used to determine the speed of the application.
   *
   *   If there are no instance store volumes, either the value is `0` or the metric is not reported.
   * - `DISK_WRITE_BYTES_PER_SECOND` - The bytes written to all instance store volumes available to the instance. This metric is used to determine the volume of the data the application writes onto the disk of the instance. This can be used to determine the speed of the application.
   *
   *   If there are no instance store volumes, either the value is `0` or the metric is not reported.
   * - `NETWORK_IN_BYTES_PER_SECOND` - The number of bytes received by the instance on all network interfaces. This metric identifies the volume of incoming network traffic to a single instance.
   * - `NETWORK_OUT_BYTES_PER_SECOND` - The number of bytes sent out by the instance on all network interfaces. This metric identifies the volume of outgoing network traffic from a single instance.
   * - `NETWORK_PACKETS_IN_PER_SECOND` - The number of packets received by the instance on all network interfaces. This metric identifies the volume of incoming traffic in terms of the number of packets on a single instance.
   * - `NETWORK_PACKETS_OUT_PER_SECOND` - The number of packets sent out by the instance on all network interfaces. This metric identifies the volume of outgoing traffic in terms of the number of packets on a single instance.
   *
   * @public
   */
  name?: MetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the estimated monthly savings amount possible, based on On-Demand instance pricing, by adopting Compute Optimizer recommendations for a given resource.
 *
 * For more information, see [Estimated monthly savings and savings opportunities](https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation) in the *Compute Optimizer User Guide*.
 *
 * @public
 */
export interface EstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
 *
 * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
 *
 * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
 *
 * @public
 */
export interface SavingsOpportunity {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer recommendations for a given resource.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given resource. This is based on the On-Demand instance pricing..
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * Describes the savings opportunity for Auto Scaling group recommendations after applying the Savings Plans and Reserved Instances discounts.
 *
 * Savings opportunity represents the estimated monthly savings you can achieve by implementing Compute Optimizer recommendations.
 *
 * @public
 */
export interface AutoScalingGroupSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost after applying the Savings Plans and Reserved Instances discounts. This saving can be achieved by adopting Compute Optimizer’s Auto Scaling group recommendations.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Auto Scaling group recommendations. This is based on the Savings Plans and Reserved Instances pricing discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: AutoScalingGroupEstimatedMonthlySavings | undefined;
}

/**
 * Describes a recommendation option for an Auto Scaling group.
 *
 * @public
 */
export interface AutoScalingGroupRecommendationOption {
  /**
   * An array of objects that describe an Auto Scaling group configuration.
   *
   * @public
   */
  configuration?: AutoScalingGroupConfiguration | undefined;

  /**
   * Describes the GPU accelerator settings for the recommended instance type of the Auto Scaling group.
   *
   * @public
   */
  instanceGpuInfo?: GpuInfo | undefined;

  /**
   * An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.
   *
   * > **Note:** The `Cpu` and `Memory` metrics are the only projected utilization metrics returned. Additionally, the `Memory` metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent).
   *
   * @public
   */
  projectedUtilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * The performance risk of the Auto Scaling group configuration recommendation.
   *
   * Performance risk indicates the likelihood of the recommended instance type not meeting the resource needs of your workload. Compute Optimizer calculates an individual performance risk score for each specification of the recommended instance, including CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput, and network PPS. The performance risk of the recommended instance is calculated as the maximum performance risk score across the analyzed resource specifications.
   *
   * The value ranges from `0` - `4`, with `0` meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.
   *
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * The rank of the Auto Scaling group recommendation option.
   *
   * The top recommendation option is ranked as `1`.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * An object that describes the savings opportunity for the Auto Scaling group recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * An object that describes the savings opportunity for the Auto Scaling group recommendation option that includes Savings Plans and Reserved Instances discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: AutoScalingGroupSavingsOpportunityAfterDiscounts | undefined;

  /**
   * The level of effort required to migrate from the current instance type to the recommended instance type.
   *
   * For example, the migration effort is `Low` if Amazon EMR is the inferred workload type and an Amazon Web Services Graviton instance type is recommended. The migration effort is `Medium` if a workload type couldn't be inferred but an Amazon Web Services Graviton instance type is recommended. The migration effort is `VeryLow` if both the current and recommended instance types are of the same CPU architecture.
   *
   * @public
   */
  migrationEffort?: MigrationEffort | undefined;
}

/**
 * Describes an Auto Scaling group recommendation.
 *
 * @public
 */
export interface AutoScalingGroupRecommendation {
  /**
   * The Amazon Web Services account ID of the Auto Scaling group.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Auto Scaling group.
   *
   * @public
   */
  autoScalingGroupArn?: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  autoScalingGroupName?: string | undefined;

  /**
   * The finding classification of the Auto Scaling group.
   *
   * Findings for Auto Scaling groups include:
   *
   * - **`NotOptimized`** —An Auto Scaling group is considered not optimized when Compute Optimizer identifies a recommendation that can provide better performance for your workload.
   * - **`Optimized`** —An Auto Scaling group is considered optimized when Compute Optimizer determines that the group is correctly provisioned to run your workload based on the chosen instance type. For optimized resources, Compute Optimizer might recommend a new generation instance type.
   *
   * @public
   */
  finding?: Finding | undefined;

  /**
   * An array of objects that describe the utilization metrics of the Auto Scaling group.
   *
   * @public
   */
  utilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for the Auto Scaling group.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * An array of objects that describe the current configuration of the Auto Scaling group.
   *
   * @public
   */
  currentConfiguration?: AutoScalingGroupConfiguration | undefined;

  /**
   * Describes the GPU accelerator settings for the current instance type of the Auto Scaling group.
   *
   * @public
   */
  currentInstanceGpuInfo?: GpuInfo | undefined;

  /**
   * An array of objects that describe the recommendation options for the Auto Scaling group.
   *
   * @public
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[] | undefined;

  /**
   * The timestamp of when the Auto Scaling group recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The risk of the current Auto Scaling group not meeting the performance needs of its workloads. The higher the risk, the more likely the current Auto Scaling group configuration has insufficient capacity and cannot meet workload requirements.
   *
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * An object that describes the effective recommendation preferences for the Auto Scaling group.
   *
   * @public
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences | undefined;

  /**
   * The applications that might be running on the instances in the Auto Scaling group as inferred by Compute Optimizer.
   *
   * Compute Optimizer can infer if one of the following applications might be running on the instances:
   *
   * - `AmazonEmr` - Infers that Amazon EMR might be running on the instances.
   * - `ApacheCassandra` - Infers that Apache Cassandra might be running on the instances.
   * - `ApacheHadoop` - Infers that Apache Hadoop might be running on the instances.
   * - `Memcached` - Infers that Memcached might be running on the instances.
   * - `NGINX` - Infers that NGINX might be running on the instances.
   * - `PostgreSql` - Infers that PostgreSQL might be running on the instances.
   * - `Redis` - Infers that Redis might be running on the instances.
   * - `Kafka` - Infers that Kafka might be running on the instance.
   * - `SQLServer` - Infers that SQLServer might be running on the instance.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;
}

/**
 * Describes the scope of a recommendation preference.
 *
 * Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
 *
 * > **Note:** You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of `ResourceArn` and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.
 *
 * @public
 */
export interface Scope {
  /**
   * The name of the scope.
   *
   * The following scopes are possible:
   *
   * - `Organization` - Specifies that the recommendation preference applies at the organization level, for all member accounts of an organization.
   * - `AccountId` - Specifies that the recommendation preference applies at the account level, for all resources of a given resource type in an account.
   * - `ResourceArn` - Specifies that the recommendation preference applies at the individual resource level.
   *
   * @public
   */
  name?: ScopeName | undefined;

  /**
   * The value of the scope.
   *
   * If you specified the `name` of the scope as:
   *
   * - `Organization` - The `value` must be `ALL_ACCOUNTS`.
   * - `AccountId` - The `value` must be a 12-digit Amazon Web Services account ID.
   * - `ResourceArn` - The `value` must be the Amazon Resource Name (ARN) of an EC2 instance or an Auto Scaling group.
   *
   * Only EC2 instance and Auto Scaling group ARNs are currently supported.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationPreferencesRequest {
  /**
   * The target resource type of the recommendation preference to delete.
   *
   * The `Ec2Instance` option encompasses standalone instances and instances that are part of Auto Scaling groups. The `AutoScalingGroup` option encompasses only instances that are part of an Auto Scaling group.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * An object that describes the scope of the recommendation preference to delete.
   *
   * You can delete recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The name of the recommendation preference to delete.
   *
   * @public
   */
  recommendationPreferenceNames: RecommendationPreferenceName[] | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationPreferencesResponse {}

/**
 * Describes a filter that returns a more specific list of recommendation export jobs. Use this filter with the DescribeRecommendationExportJobs action.
 *
 * You can use `EBSFilter` with the GetEBSVolumeRecommendations action, `LambdaFunctionRecommendationFilter` with the GetLambdaFunctionRecommendations action, and `Filter` with the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions.
 *
 * @public
 */
export interface JobFilter {
  /**
   * The name of the filter.
   *
   * Specify `ResourceType` to return export jobs of a specific resource type (for example, `Ec2Instance`).
   *
   * Specify `JobStatus` to return export jobs with a specific status (e.g, `Complete`).
   *
   * @public
   */
  name?: JobFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values for this parameter are as follows, depending on what you specify for the `name` parameter:
   *
   * - Specify `Ec2Instance` or `AutoScalingGroup` if you specify the `name` parameter as `ResourceType`. There is no filter for EBS volumes because volume recommendations cannot be exported at this time.
   * - Specify `Queued`, `InProgress`, `Complete`, or `Failed` if you specify the `name` parameter as `JobStatus`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationExportJobsRequest {
  /**
   * The identification numbers of the export jobs to return.
   *
   * An export job ID is returned when you create an export using the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions.
   *
   * All export jobs created in the last seven days are returned if this parameter is omitted.
   *
   * @public
   */
  jobIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of export jobs.
   *
   * @public
   */
  filters?: JobFilter[] | undefined;

  /**
   * The token to advance to the next page of export jobs.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of export jobs to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
 *
 * @public
 */
export interface S3Destination {
  /**
   * The name of the Amazon S3 bucket used as the destination of an export file.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The Amazon S3 bucket key of an export file.
   *
   * The key uniquely identifies the object, or export file, in the S3 bucket.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The Amazon S3 bucket key of a metadata file.
   *
   * The key uniquely identifies the object, or metadata file, in the S3 bucket.
   *
   * @public
   */
  metadataKey?: string | undefined;
}

/**
 * Describes the destination of the recommendations export and metadata files.
 *
 * @public
 */
export interface ExportDestination {
  /**
   * An object that describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3?: S3Destination | undefined;
}

/**
 * Describes a recommendation export job.
 *
 * Use the DescribeRecommendationExportJobs action to view your recommendation export jobs.
 *
 * Use the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions to request an export of your recommendations.
 *
 * @public
 */
export interface RecommendationExportJob {
  /**
   * The identification number of the export job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * An object that describes the destination of the export file.
   *
   * @public
   */
  destination?: ExportDestination | undefined;

  /**
   * The resource type of the exported recommendations.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The status of the export job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The timestamp of when the export job was created.
   *
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * The timestamp of when the export job was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * The reason for an export job failure.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationExportJobsResponse {
  /**
   * An array of objects that describe recommendation export jobs.
   *
   * @public
   */
  recommendationExportJobs?: RecommendationExportJob[] | undefined;

  /**
   * The token to use to advance to the next page of export jobs.
   *
   * This value is null when there are no more pages of export jobs to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes a filter that returns a more specific list of recommendations. Use this filter with the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions.
 *
 * You can use `EBSFilter` with the GetEBSVolumeRecommendations action, `LambdaFunctionRecommendationFilter` with the GetLambdaFunctionRecommendations action, and `JobFilter` with the DescribeRecommendationExportJobs action.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification. For example, `Underprovisioned`.
   *
   * Specify `RecommendationSourceType` to return recommendations of a specific resource type. For example, `Ec2Instance`.
   *
   * Specify `FindingReasonCodes` to return recommendations with a specific finding reason code. For example, `CPUUnderprovisioned`.
   *
   * Specify `InferredWorkloadTypes` to return recommendations of a specific inferred workload. For example, `Redis`.
   *
   * You can filter your EC2 instance recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your recommendations. Use this filter to find all of your recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: FilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values for this parameter are as follows, depending on what you specify for the `name` parameter and the resource type that you wish to filter results for:
   *
   * - Specify `Optimized` or `NotOptimized` if you specify the `name` parameter as `Finding` and you want to filter results for Auto Scaling groups.
   * - Specify `Underprovisioned`, `Overprovisioned`, or `Optimized` if you specify the `name` parameter as `Finding` and you want to filter results for EC2 instances.
   * - Specify `Ec2Instance` or `AutoScalingGroup` if you specify the `name` parameter as `RecommendationSourceType`.
   * - Specify one of the following options if you specify the `name` parameter as `FindingReasonCodes`:
   *
   *   - **`CPUOverprovisioned`** — The instance’s CPU configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`CPUUnderprovisioned`** — The instance’s CPU configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better CPU performance.
   *   - **`MemoryOverprovisioned`** — The instance’s memory configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`MemoryUnderprovisioned`** — The instance’s memory configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better memory performance.
   *   - **`EBSThroughputOverprovisioned`** — The instance’s EBS throughput configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`EBSThroughputUnderprovisioned`** — The instance’s EBS throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS throughput performance.
   *   - **`EBSIOPSOverprovisioned`** — The instance’s EBS IOPS configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`EBSIOPSUnderprovisioned`** — The instance’s EBS IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS IOPS performance.
   *   - **`NetworkBandwidthOverprovisioned`** — The instance’s network bandwidth configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`NetworkBandwidthUnderprovisioned`** — The instance’s network bandwidth configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network bandwidth performance. This finding reason happens when the `NetworkIn` or `NetworkOut` performance of an instance is impacted.
   *   - **`NetworkPPSOverprovisioned`** — The instance’s network PPS (packets per second) configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`NetworkPPSUnderprovisioned`** — The instance’s network PPS (packets per second) configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network PPS performance.
   *   - **`DiskIOPSOverprovisioned`** — The instance’s disk IOPS configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`DiskIOPSUnderprovisioned`** — The instance’s disk IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk IOPS performance.
   *   - **`DiskThroughputOverprovisioned`** — The instance’s disk throughput configuration can be sized down while still meeting the performance requirements of your workload.
   *   - **`DiskThroughputUnderprovisioned`** — The instance’s disk throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk throughput performance.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request.
 *
 * @public
 */
export interface RecommendationPreferences {
  /**
   * Specifies the CPU vendor and architecture for Amazon EC2 instance and Auto Scaling group recommendations.
   *
   * For example, when you specify `AWS_ARM64` with:
   *
   * - A GetEC2InstanceRecommendations or GetAutoScalingGroupRecommendations request, Compute Optimizer returns recommendations that consist of Graviton instance types only.
   * - A GetEC2RecommendationProjectedMetrics request, Compute Optimizer returns projected utilization metrics for Graviton instance type recommendations only.
   * - A ExportEC2InstanceRecommendations or ExportAutoScalingGroupRecommendations request, Compute Optimizer exports recommendations that consist of Graviton instance types only.
   *
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;
}

/**
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
 *
 * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
 *
 * @public
 */
export interface S3DestinationConfig {
  /**
   * The name of the Amazon S3 bucket to use as the destination for an export job.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The Amazon S3 bucket prefix for an export job.
   *
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface ExportAutoScalingGroupRecommendationsRequest {
  /**
   * The IDs of the Amazon Web Services accounts for which to export Auto Scaling group recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.
   *
   * This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of Auto Scaling group recommendations.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableAutoScalingGroupField[] | undefined;

  /**
   * An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The only export file format currently supported is `Csv`.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.
   *
   * This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * An object to specify the preferences for the Auto Scaling group recommendations to export.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * Use the DescribeRecommendationExportJobs action, and specify the job ID to view the status of an export job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * An object that describes the destination Amazon S3 bucket of a recommendations export file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of Amazon Elastic Block Store (Amazon EBS) volume recommendations. Use this filter with the GetEBSVolumeRecommendations action.
 *
 * You can use `LambdaFunctionRecommendationFilter` with the GetLambdaFunctionRecommendations action, `JobFilter` with the DescribeRecommendationExportJobs action, and `Filter` with the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions.
 *
 * @public
 */
export interface EBSFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification (for example, `NotOptimized`).
   *
   * You can filter your Amazon EBS volume recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your Amazon EBS volume recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all Amazon EBS volume recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your Amazon EBS volume recommendations. Use this filter to find all of your Amazon EBS volume recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your Amazon EBS volume recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: EBSFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values are `Optimized`, or `NotOptimized`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportEBSVolumeRecommendationsRequest {
  /**
   * The IDs of the Amazon Web Services accounts for which to export Amazon EBS volume recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.
   *
   * This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of Amazon EBS volume recommendations.
   *
   * @public
   */
  filters?: EBSFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableVolumeField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The only export file format currently supported is `Csv`.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.
   *
   * This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportEBSVolumeRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * Use the DescribeRecommendationExportJobs action, and specify the job ID to view the status of an export job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 */
export interface ExportEC2InstanceRecommendationsRequest {
  /**
   * The IDs of the Amazon Web Services accounts for which to export instance recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.
   *
   * This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of instance recommendations.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableInstanceField[] | undefined;

  /**
   * An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The only export file format currently supported is `Csv`.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * An object to specify the preferences for the Amazon EC2 instance recommendations to export.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportEC2InstanceRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * Use the DescribeRecommendationExportJobs action, and specify the job ID to view the status of an export job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * An object that describes the destination Amazon S3 bucket of a recommendations export file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of Amazon ECS service recommendations. Use this filter with the GetECSServiceRecommendations action.
 *
 * @public
 */
export interface ECSServiceRecommendationFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification.
   *
   * Specify `FindingReasonCode` to return recommendations with a specific finding reason code.
   *
   * You can filter your Amazon ECS service recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your Amazon ECS service recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all Amazon ECS service recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your Amazon ECS service recommendations. Use this filter to find all of your Amazon ECS service recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your Amazon ECS service recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: ECSServiceRecommendationFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values for this parameter are as follows:
   *
   * - If you specify the `name` parameter as `Finding`, specify `Optimized`, `Underprovisioned`, or `Overprovisioned`.
   * - If you specify the `name` parameter as `FindingReasonCode`, specify `CPUUnderprovisioned`, `CPUOverprovisioned`, `MemoryUnderprovisioned`, or `MemoryOverprovisioned`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportECSServiceRecommendationsRequest {
  /**
   * The Amazon Web Services account IDs for the export Amazon ECS service recommendations.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to.
   *
   * This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of Amazon ECS service recommendations.
   *
   * @public
   */
  filters?: ECSServiceRecommendationFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableECSServiceField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The CSV file is the only export file format currently supported.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file.
   *
   * If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportECSServiceRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * To view the status of an export job, use the DescribeRecommendationExportJobs action and specify the job ID.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of idle resource recommendations.
 *
 * @public
 */
export interface IdleRecommendationFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification.
   *
   * You can filter your idle resource recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your idle resource recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all idle resource service recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your idle resource recommendations. Use this filter to find all of your idle resource recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your idle resource service recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: IdleRecommendationFilterName | undefined;

  /**
   * The value of the filter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportIdleRecommendationsRequest {
  /**
   * The Amazon Web Services account IDs for the export idle resource recommendations.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to.
   *
   * This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of idle resource recommendations.
   *
   * @public
   */
  filters?: IdleRecommendationFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableIdleField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file. The CSV file is the only export file format currently supported.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file.
   *
   * If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportIdleRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * To view the status of an export job, use the DescribeRecommendationExportJobs action and specify the job ID.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of Lambda function recommendations. Use this filter with the GetLambdaFunctionRecommendations action.
 *
 * You can use `EBSFilter` with the GetEBSVolumeRecommendations action, `JobFilter` with the DescribeRecommendationExportJobs action, and `Filter` with the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions.
 *
 * @public
 */
export interface LambdaFunctionRecommendationFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification (for example, `NotOptimized`).
   *
   * Specify `FindingReasonCode` to return recommendations with a specific finding reason code (for example, `MemoryUnderprovisioned`).
   *
   * You can filter your Lambda function recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your Lambda function recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all Lambda function recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your Lambda function recommendations. Use this filter to find all of your Lambda function recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your Lambda function recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: LambdaFunctionRecommendationFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values for this parameter are as follows, depending on what you specify for the `name` parameter:
   *
   * - Specify `Optimized`, `NotOptimized`, or `Unavailable` if you specify the `name` parameter as `Finding`.
   * - Specify `MemoryOverprovisioned`, `MemoryUnderprovisioned`, `InsufficientData`, or `Inconclusive` if you specify the `name` parameter as `FindingReasonCode`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLambdaFunctionRecommendationsRequest {
  /**
   * The IDs of the Amazon Web Services accounts for which to export Lambda function recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.
   *
   * This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of Lambda function recommendations.
   *
   * @public
   */
  filters?: LambdaFunctionRecommendationFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableLambdaFunctionField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The only export file format currently supported is `Csv`.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted.
   *
   * This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.
   *
   * Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportLambdaFunctionRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * Use the DescribeRecommendationExportJobs action, and specify the job ID to view the status of an export job.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of license recommendations. Use this filter with the `GetLicenseRecommendation` action.
 *
 * @public
 */
export interface LicenseRecommendationFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification.
   *
   * Specify `FindingReasonCode` to return recommendations with a specific finding reason code.
   *
   * You can filter your license recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your license recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all license recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your license recommendations. Use this filter to find all of your license recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your license recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: LicenseRecommendationFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values for this parameter are as follows, depending on what you specify for the `name` parameter:
   *
   * - If you specify the `name` parameter as `Finding`, then specify `Optimized`, `NotOptimized`, or `InsufficentMetrics`.
   * - If you specify the `name` parameter as `FindingReasonCode`, then specify `Optimized`, `LicenseOverprovisioned`, `InvalidCloudwatchApplicationInsights`, or `CloudwatchApplicationInsightsError`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLicenseRecommendationsRequest {
  /**
   * The IDs of the Amazon Web Services accounts for which to export license recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations.
   *
   * This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * If this parameter is omitted, recommendations for member accounts aren't included in the export.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of license recommendations.
   *
   * @public
   */
  filters?: LicenseRecommendationFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableLicenseField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * A CSV file is the only export format currently supported.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file .
   *
   * This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportLicenseRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * To view the status of an export job, use the DescribeRecommendationExportJobs action and specify the job ID.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * Describes a filter that returns a more specific list of DB instance recommendations. Use this filter with the GetECSServiceRecommendations action.
 *
 * @public
 */
export interface RDSDBRecommendationFilter {
  /**
   * The name of the filter.
   *
   * Specify `Finding` to return recommendations with a specific finding classification.
   *
   * You can filter your DB instance recommendations by `tag:key` and `tag-key` tags.
   *
   * A `tag:key` is a key and value combination of a tag assigned to your DB instance recommendations. Use the tag key in the filter name and the tag value as the filter value. For example, to find all DB instance recommendations that have a tag with the key of `Owner` and the value of `TeamA`, specify `tag:Owner` for the filter name and `TeamA` for the filter value.
   *
   * A `tag-key` is the key of a tag assigned to your DB instance recommendations. Use this filter to find all of your DB instance recommendations that have a tag with a specific key. This doesn’t consider the tag value. For example, you can find your DB instance recommendations with a tag key value of `Owner` or without any tag keys assigned.
   *
   * @public
   */
  name?: RDSDBRecommendationFilterName | undefined;

  /**
   * The value of the filter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportRDSDatabaseRecommendationsRequest {
  /**
   * The Amazon Web Services account IDs for the export Amazon Aurora and RDS database recommendations.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to.
   *
   * This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive.
   *
   * If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export.
   *
   * You can specify multiple account IDs per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that exports a more specific set of Amazon Aurora and RDS recommendations.
   *
   * @public
   */
  filters?: RDSDBRecommendationFilter[] | undefined;

  /**
   * The recommendations data to include in the export file. For more information about the fields that can be exported, see [Exported files](https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  fieldsToExport?: ExportableRDSDBField[] | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.
   *
   * You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see [Amazon S3 Bucket Policy for Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * The format of the export file.
   *
   * The CSV file is the only export file format currently supported.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization.
   *
   * The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see [Compute Optimizer and Amazon Web Services Organizations trusted access](https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access) in the *Compute Optimizer User Guide*.
   *
   * If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file.
   *
   * If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportRDSDatabaseRecommendationsResponse {
  /**
   * The identification number of the export job.
   *
   * To view the status of an export job, use the DescribeRecommendationExportJobs action and specify the job ID.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a recommendations export file, and its associated metadata file.
   *
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 */
export interface GetAutoScalingGroupRecommendationsRequest {
  /**
   * The ID of the Amazon Web Services account for which to return Auto Scaling group recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return Auto Scaling group recommendations.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return recommendations.
   *
   * @public
   */
  autoScalingGroupArns?: string[] | undefined;

  /**
   * The token to advance to the next page of Auto Scaling group recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Auto Scaling group recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of Auto Scaling group recommendations.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * An object to specify the preferences for the Auto Scaling group recommendations to return in the response.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * Describes an error experienced when getting recommendations.
 *
 * For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.
 *
 * @public
 */
export interface GetRecommendationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The message, or reason, for the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * The token to use to advance to the next page of Auto Scaling group recommendations.
   *
   * This value is null when there are no more pages of Auto Scaling group recommendations to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe Auto Scaling group recommendations.
   *
   * @public
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * For example, an error is returned if you request recommendations for an unsupported Auto Scaling group.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEBSVolumeRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the volumes for which to return recommendations.
   *
   * @public
   */
  volumeArns?: string[] | undefined;

  /**
   * The token to advance to the next page of volume recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of volume recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of volume recommendations.
   *
   * @public
   */
  filters?: EBSFilter[] | undefined;

  /**
   * The ID of the Amazon Web Services account for which to return volume recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return volume recommendations.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
 *
 * @public
 */
export interface VolumeConfiguration {
  /**
   * The volume type.
   *
   * The volume types can be the following:
   *
   * - General Purpose SSD `gp2` and `gp3`
   * - Provisioned IOPS SSD `io1`, `io2`, and `io2 Block Express`
   * - Throughput Optimized HDD `st1`
   * - Cold HDD `sc1`
   * - Magnetic volumes `standard`
   *
   * @public
   */
  volumeType?: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * The baseline IOPS of the volume.
   *
   * @public
   */
  volumeBaselineIOPS?: number | undefined;

  /**
   * The burst IOPS of the volume.
   *
   * @public
   */
  volumeBurstIOPS?: number | undefined;

  /**
   * The baseline throughput of the volume.
   *
   * @public
   */
  volumeBaselineThroughput?: number | undefined;

  /**
   * The burst throughput of the volume.
   *
   * @public
   */
  volumeBurstThroughput?: number | undefined;

  /**
   * Contains the image used to boot the instance during launch.
   *
   * @public
   */
  rootVolume?: boolean | undefined;
}

/**
 * Describes the savings estimation mode used for calculating savings opportunity for Amazon EBS volumes.
 *
 * @public
 */
export interface EBSSavingsEstimationMode {
  /**
   * Describes the source for calculating the savings opportunity for Amazon EBS volumes.
   *
   * @public
   */
  source?: EBSSavingsEstimationModeSource | undefined;
}

/**
 * Describes the effective recommendation preferences for Amazon EBS volumes.
 *
 * @public
 */
export interface EBSEffectiveRecommendationPreferences {
  /**
   * Describes the savings estimation mode preference applied for calculating savings opportunity for Amazon EBS volumes.
   *
   * @public
   */
  savingsEstimationMode?: EBSSavingsEstimationMode | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for the volume.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;
}

/**
 * A list of tag key and value pairs that you define.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.
 *
 * Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.
 *
 * @public
 */
export interface EBSUtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * The following utilization metrics are available:
   *
   * - `VolumeReadOpsPerSecond` - The completed read operations per second from the volume in a specified period of time.
   *
   *   Unit: Count
   * - `VolumeWriteOpsPerSecond` - The completed write operations per second to the volume in a specified period of time.
   *
   *   Unit: Count
   * - `VolumeReadBytesPerSecond` - The bytes read per second from the volume in a specified period of time.
   *
   *   Unit: Bytes
   * - `VolumeWriteBytesPerSecond` - The bytes written to the volume in a specified period of time.
   *
   *   Unit: Bytes
   * - `VolumeIOPSExceeded` - Indicates whether the volume's provisioned IOPS performance was exceeded in a specified period of time. A value of `1` means the provisioned IOPS were exceeded; a value of `0` means they were not.
   *
   *   Unit: None
   * - `VolumeThroughputExceeded` - Indicates whether the volume's provisioned throughput performance was exceeded in a specified period of time. A value of `1` means the provisioned throughput was exceeded; a value of `0` means it was not.
   *
   *   Unit: None
   *
   * @public
   */
  name?: EBSMetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EBS volume recommendations. This includes any applicable discounts.
 *
 * @public
 */
export interface EBSEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for Amazon EBS volume recommendations after applying specific discounts.
 *
 * @public
 */
export interface EBSSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost after applying the specific discounts. This saving can be achieved by adopting Compute Optimizer’s Amazon EBS volume recommendations.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s Amazon EBS volume recommendations. This saving includes any applicable discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: EBSEstimatedMonthlySavings | undefined;
}

/**
 * Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
 *
 * @public
 */
export interface VolumeRecommendationOption {
  /**
   * An array of objects that describe a volume configuration.
   *
   * @public
   */
  configuration?: VolumeConfiguration | undefined;

  /**
   * The performance risk of the volume recommendation option.
   *
   * Performance risk is the likelihood of the recommended volume type meeting the performance requirement of your workload.
   *
   * The value ranges from `0` - `4`, with `0` meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.
   *
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * The rank of the volume recommendation option.
   *
   * The top recommendation option is ranked as `1`.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * An object that describes the savings opportunity for the EBS volume recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * An object that describes the savings opportunity for the Amazon EBS volume recommendation option with specific discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: EBSSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
 *
 * @public
 */
export interface VolumeRecommendation {
  /**
   * The Amazon Resource Name (ARN) of the current volume.
   *
   * @public
   */
  volumeArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the volume.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An array of objects that describe the current configuration of the volume.
   *
   * @public
   */
  currentConfiguration?: VolumeConfiguration | undefined;

  /**
   * The finding classification of the volume.
   *
   * Findings for volumes include:
   *
   * - **`NotOptimized`** —A volume is considered not optimized when Compute Optimizer identifies a recommendation that can provide better performance for your workload.
   * - **`Optimized`** —An volume is considered optimized when Compute Optimizer determines that the volume is correctly provisioned to run your workload based on the chosen volume type. For optimized resources, Compute Optimizer might recommend a new generation volume type.
   *
   * @public
   */
  finding?: EBSFinding | undefined;

  /**
   * An array of objects that describe the utilization metrics of the volume.
   *
   * @public
   */
  utilizationMetrics?: EBSUtilizationMetric[] | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for the volume.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * An array of objects that describe the recommendation options for the volume.
   *
   * @public
   */
  volumeRecommendationOptions?: VolumeRecommendationOption[] | undefined;

  /**
   * The timestamp of when the volume recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The risk of the current EBS volume not meeting the performance needs of its workloads. The higher the risk, the more likely the current EBS volume doesn't have sufficient capacity.
   *
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * Describes the effective recommendation preferences for Amazon EBS volume.
   *
   * @public
   */
  effectiveRecommendationPreferences?: EBSEffectiveRecommendationPreferences | undefined;

  /**
   * A list of tags assigned to your Amazon EBS volume recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetEBSVolumeRecommendationsResponse {
  /**
   * The token to use to advance to the next page of volume recommendations.
   *
   * This value is null when there are no more pages of volume recommendations to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe volume recommendations.
   *
   * @public
   */
  volumeRecommendations?: VolumeRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * For example, an error is returned if you request recommendations for an unsupported volume.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEC2InstanceRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the instances for which to return recommendations.
   *
   * @public
   */
  instanceArns?: string[] | undefined;

  /**
   * The token to advance to the next page of instance recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of instance recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of instance recommendations.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The ID of the Amazon Web Services account for which to return instance recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return instance recommendations.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An object to specify the preferences for the Amazon EC2 instance recommendations to return in the response.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * Describes Compute Optimizer's integration status with your chosen external metric provider. For example, Datadog.
 *
 * @public
 */
export interface ExternalMetricStatus {
  /**
   * The status code for Compute Optimizer's integration with an external metrics provider.
   *
   * @public
   */
  statusCode?: ExternalMetricStatusCode | undefined;

  /**
   * The reason for Compute Optimizer's integration status with your external metric provider.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EC2 instance recommendations. This is based on the Savings Plans and Reserved Instances pricing discounts.
 *
 * @public
 */
export interface InstanceEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for instance recommendations after applying the Savings Plans and Reserved Instances discounts.
 *
 * Savings opportunity after discounts represents the estimated monthly savings you can achieve by implementing Compute Optimizer recommendations.
 *
 * @public
 */
export interface InstanceSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost after applying the Savings Plans and Reserved Instances discounts. This saving can be achieved by adopting Compute Optimizer’s EC2 instance recommendations.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EC2 instance recommendations. This is based on pricing after applying the Savings Plans and Reserved Instances discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: InstanceEstimatedMonthlySavings | undefined;
}

/**
 * Describes a recommendation option for an Amazon EC2 instance.
 *
 * @public
 */
export interface InstanceRecommendationOption {
  /**
   * The instance type of the instance recommendation.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * Describes the GPU accelerator settings for the recommended instance type.
   *
   * @public
   */
  instanceGpuInfo?: GpuInfo | undefined;

  /**
   * An array of objects that describe the projected utilization metrics of the instance recommendation option.
   *
   * > **Note:** The `Cpu` and `Memory` metrics are the only projected utilization metrics returned. Additionally, the `Memory` metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent).
   *
   * @public
   */
  projectedUtilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * Describes the configuration differences between the current instance and the recommended instance type. You should consider the configuration differences before migrating your workloads from the current instance to the recommended instance type. The [Change the instance type guide for Linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html) and [Change the instance type guide for Windows](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-resize.html) provide general guidance for getting started with an instance migration.
   *
   * Platform differences include:
   *
   * - **`Hypervisor`** — The hypervisor of the recommended instance type is different than that of the current instance. For example, the recommended instance type uses a Nitro hypervisor and the current instance uses a Xen hypervisor. The differences that you should consider between these hypervisors are covered in the [Nitro Hypervisor](http://aws.amazon.com/ec2/faqs/#Nitro_Hypervisor) section of the Amazon EC2 frequently asked questions. For more information, see [Instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances) in the *Amazon EC2 User Guide for Linux*, or [Instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#ec2-nitro-instances) in the *Amazon EC2 User Guide for Windows*.
   * - **`NetworkInterface`** — The network interface of the recommended instance type is different than that of the current instance. For example, the recommended instance type supports enhanced networking and the current instance might not. To enable enhanced networking for the recommended instance type, you must install the Elastic Network Adapter (ENA) driver or the Intel 82599 Virtual Function driver. For more information, see [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage) and [Enhanced networking on Linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/enhanced-networking.html) in the *Amazon EC2 User Guide for Linux*, or [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage) and [Enhanced networking on Windows](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/enhanced-networking.html) in the *Amazon EC2 User Guide for Windows*.
   * - **`StorageInterface`** — The storage interface of the recommended instance type is different than that of the current instance. For example, the recommended instance type uses an NVMe storage interface and the current instance does not. To access NVMe volumes for the recommended instance type, you will need to install or upgrade the NVMe driver. For more information, see [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage) and [Amazon EBS and NVMe on Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nvme-ebs-volumes.html) in the *Amazon EC2 User Guide for Linux*, or [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage) and [Amazon EBS and NVMe on Windows instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/nvme-ebs-volumes.html) in the *Amazon EC2 User Guide for Windows*.
   * - **`InstanceStoreAvailability`** — The recommended instance type does not support instance store volumes and the current instance does. Before migrating, you might need to back up the data on your instance store volumes if you want to preserve them. For more information, see [How do I back up an instance store volume on my Amazon EC2 instance to Amazon EBS?](https://aws.amazon.com/premiumsupport/knowledge-center/back-up-instance-store-ebs/) in the *Amazon Web Services Premium Support Knowledge Base*. For more information, see [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#instance-networking-storage) and [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide for Linux*, or see [Networking and storage features](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/instance-types.html#instance-networking-storage) and [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/InstanceStorage.html) in the *Amazon EC2 User Guide for Windows*.
   * - **`VirtualizationType`** — The recommended instance type uses the hardware virtual machine (HVM) virtualization type and the current instance uses the paravirtual (PV) virtualization type. For more information about the differences between these virtualization types, see [Linux AMI virtualization types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/virtualization_types.html) in the *Amazon EC2 User Guide for Linux*, or [Windows AMI virtualization types](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/windows-ami-version-history.html#virtualization-types) in the *Amazon EC2 User Guide for Windows*.
   * - **`Architecture`** — The CPU architecture between the recommended instance type and the current instance is different. For example, the recommended instance type might use an Arm CPU architecture and the current instance type might use a different one, such as x86. Before migrating, you should consider recompiling the software on your instance for the new architecture. Alternatively, you might switch to an Amazon Machine Image (AMI) that supports the new architecture. For more information about the CPU architecture for each instance type, see [Amazon EC2 Instance Types](http://aws.amazon.com/ec2/instance-types/).
   *
   * @public
   */
  platformDifferences?: PlatformDifference[] | undefined;

  /**
   * The performance risk of the instance recommendation option.
   *
   * Performance risk indicates the likelihood of the recommended instance type not meeting the resource needs of your workload. Compute Optimizer calculates an individual performance risk score for each specification of the recommended instance, including CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput, and network PPS. The performance risk of the recommended instance is calculated as the maximum performance risk score across the analyzed resource specifications.
   *
   * The value ranges from `0` - `4`, with `0` meaning that the recommended resource is predicted to always provide enough hardware capability. The higher the performance risk is, the more likely you should validate whether the recommendation will meet the performance requirements of your workload before migrating your resource.
   *
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * The rank of the instance recommendation option.
   *
   * The top recommendation option is ranked as `1`.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * An object that describes the savings opportunity for the instance recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * An object that describes the savings opportunity for the instance recommendation option that includes Savings Plans and Reserved Instances discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: InstanceSavingsOpportunityAfterDiscounts | undefined;

  /**
   * The level of effort required to migrate from the current instance type to the recommended instance type.
   *
   * For example, the migration effort is `Low` if Amazon EMR is the inferred workload type and an Amazon Web Services Graviton instance type is recommended. The migration effort is `Medium` if a workload type couldn't be inferred but an Amazon Web Services Graviton instance type is recommended. The migration effort is `VeryLow` if both the current and recommended instance types are of the same CPU architecture.
   *
   * @public
   */
  migrationEffort?: MigrationEffort | undefined;
}

/**
 * Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
 *
 * @public
 */
export interface RecommendationSource {
  /**
   * The Amazon Resource Name (ARN) of the recommendation source.
   *
   * @public
   */
  recommendationSourceArn?: string | undefined;

  /**
   * The resource type of the recommendation source.
   *
   * @public
   */
  recommendationSourceType?: RecommendationSourceType | undefined;
}

/**
 * Describes an Amazon EC2 instance recommendation.
 *
 * @public
 */
export interface InstanceRecommendation {
  /**
   * The Amazon Resource Name (ARN) of the current instance.
   *
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the instance.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The name of the current instance.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The instance type of the current instance.
   *
   * @public
   */
  currentInstanceType?: string | undefined;

  /**
   * The finding classification of the instance.
   *
   * Findings for instances include:
   *
   * - **`Underprovisioned`** —An instance is considered under-provisioned when at least one specification of your instance, such as CPU, memory, or network, does not meet the performance requirements of your workload. Under-provisioned instances may lead to poor application performance.
   * - **`Overprovisioned`** —An instance is considered over-provisioned when at least one specification of your instance, such as CPU, memory, or network, can be sized down while still meeting the performance requirements of your workload, and no specification is under-provisioned. Over-provisioned instances may lead to unnecessary infrastructure cost.
   * - **`Optimized`** —An instance is considered optimized when all specifications of your instance, such as CPU, memory, and network, meet the performance requirements of your workload and is not over provisioned. For optimized resources, Compute Optimizer might recommend a new generation instance type.
   *
   * > **Note:** The valid values in your API responses appear as OVER_PROVISIONED, UNDER_PROVISIONED, or OPTIMIZED.
   *
   * @public
   */
  finding?: Finding | undefined;

  /**
   * The reason for the finding classification of the instance.
   *
   * Finding reason codes for instances include:
   *
   * - **`CPUOverprovisioned`** — The instance’s CPU configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `CPUUtilization` metric of the current instance during the look-back period.
   * - **`CPUUnderprovisioned`** — The instance’s CPU configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better CPU performance. This is identified by analyzing the `CPUUtilization` metric of the current instance during the look-back period.
   * - **`MemoryOverprovisioned`** — The instance’s memory configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the memory utilization metric of the current instance during the look-back period.
   * - **`MemoryUnderprovisioned`** — The instance’s memory configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better memory performance. This is identified by analyzing the memory utilization metric of the current instance during the look-back period.
   *
   *   > **Note:** Memory utilization is analyzed only for resources that have the unified CloudWatch agent installed on them. For more information, see [Enabling memory utilization with the Amazon CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent) in the *Compute Optimizer User Guide*. On Linux instances, Compute Optimizer analyses the `mem_used_percent` metric in the `CWAgent` namespace, or the legacy `MemoryUtilization` metric in the `System/Linux` namespace. On Windows instances, Compute Optimizer analyses the `Memory % Committed Bytes In Use` metric in the `CWAgent` namespace.
   * - **`EBSThroughputOverprovisioned`** — The instance’s EBS throughput configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `VolumeReadBytes` and `VolumeWriteBytes` metrics of EBS volumes attached to the current instance during the look-back period.
   * - **`EBSThroughputUnderprovisioned`** — The instance’s EBS throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS throughput performance. This is identified by analyzing the `VolumeReadBytes` and `VolumeWriteBytes` metrics of EBS volumes attached to the current instance during the look-back period.
   * - **`EBSIOPSOverprovisioned`** — The instance’s EBS IOPS configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `VolumeReadOps` and `VolumeWriteOps` metric of EBS volumes attached to the current instance during the look-back period.
   * - **`EBSIOPSUnderprovisioned`** — The instance’s EBS IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better EBS IOPS performance. This is identified by analyzing the `VolumeReadOps` and `VolumeWriteOps` metric of EBS volumes attached to the current instance during the look-back period.
   * - **`NetworkBandwidthOverprovisioned`** — The instance’s network bandwidth configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `NetworkIn` and `NetworkOut` metrics of the current instance during the look-back period.
   * - **`NetworkBandwidthUnderprovisioned`** — The instance’s network bandwidth configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network bandwidth performance. This is identified by analyzing the `NetworkIn` and `NetworkOut` metrics of the current instance during the look-back period. This finding reason happens when the `NetworkIn` or `NetworkOut` performance of an instance is impacted.
   * - **`NetworkPPSOverprovisioned`** — The instance’s network PPS (packets per second) configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `NetworkPacketsIn` and `NetworkPacketsIn` metrics of the current instance during the look-back period.
   * - **`NetworkPPSUnderprovisioned`** — The instance’s network PPS (packets per second) configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better network PPS performance. This is identified by analyzing the `NetworkPacketsIn` and `NetworkPacketsIn` metrics of the current instance during the look-back period.
   * - **`DiskIOPSOverprovisioned`** — The instance’s disk IOPS configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `DiskReadOps` and `DiskWriteOps` metrics of the current instance during the look-back period.
   * - **`DiskIOPSUnderprovisioned`** — The instance’s disk IOPS configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk IOPS performance. This is identified by analyzing the `DiskReadOps` and `DiskWriteOps` metrics of the current instance during the look-back period.
   * - **`DiskThroughputOverprovisioned`** — The instance’s disk throughput configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `DiskReadBytes` and `DiskWriteBytes` metrics of the current instance during the look-back period.
   * - **`DiskThroughputUnderprovisioned`** — The instance’s disk throughput configuration doesn't meet the performance requirements of your workload and there is an alternative instance type that provides better disk throughput performance. This is identified by analyzing the `DiskReadBytes` and `DiskWriteBytes` metrics of the current instance during the look-back period.
   *
   * > **Note:** For more information about instance metrics, see [List the available CloudWatch metrics for your instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html) in the *Amazon Elastic Compute Cloud User Guide*. For more information about EBS volume metrics, see [Amazon CloudWatch metrics for Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html) in the *Amazon Elastic Compute Cloud User Guide*.
   *
   * @public
   */
  findingReasonCodes?: InstanceRecommendationFindingReasonCode[] | undefined;

  /**
   * An array of objects that describe the utilization metrics of the instance.
   *
   * @public
   */
  utilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for the instance.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * An array of objects that describe the recommendation options for the instance.
   *
   * @public
   */
  recommendationOptions?: InstanceRecommendationOption[] | undefined;

  /**
   * An array of objects that describe the source resource of the recommendation.
   *
   * @public
   */
  recommendationSources?: RecommendationSource[] | undefined;

  /**
   * The timestamp of when the instance recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The risk of the current instance not meeting the performance needs of its workloads. The higher the risk, the more likely the current instance cannot meet the performance requirements of its workload.
   *
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * An object that describes the effective recommendation preferences for the instance.
   *
   * @public
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences | undefined;

  /**
   * The applications that might be running on the instance as inferred by Compute Optimizer.
   *
   * Compute Optimizer can infer if one of the following applications might be running on the instance:
   *
   * - `AmazonEmr` - Infers that Amazon EMR might be running on the instance.
   * - `ApacheCassandra` - Infers that Apache Cassandra might be running on the instance.
   * - `ApacheHadoop` - Infers that Apache Hadoop might be running on the instance.
   * - `Memcached` - Infers that Memcached might be running on the instance.
   * - `NGINX` - Infers that NGINX might be running on the instance.
   * - `PostgreSql` - Infers that PostgreSQL might be running on the instance.
   * - `Redis` - Infers that Redis might be running on the instance.
   * - `Kafka` - Infers that Kafka might be running on the instance.
   * - `SQLServer` - Infers that SQLServer might be running on the instance.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;

  /**
   * The state of the instance when the recommendation was generated.
   *
   * @public
   */
  instanceState?: InstanceState | undefined;

  /**
   * A list of tags assigned to your Amazon EC2 instance recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An object that describes Compute Optimizer's integration status with your external metrics provider.
   *
   * @public
   */
  externalMetricStatus?: ExternalMetricStatus | undefined;

  /**
   * Describes the GPU accelerator settings for the current instance type.
   *
   * @public
   */
  currentInstanceGpuInfo?: GpuInfo | undefined;

  /**
   * Describes if an Amazon EC2 instance is idle.
   *
   * @public
   */
  idle?: InstanceIdle | undefined;
}

/**
 * @public
 */
export interface GetEC2InstanceRecommendationsResponse {
  /**
   * The token to use to advance to the next page of instance recommendations.
   *
   * This value is null when there are no more pages of instance recommendations to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe instance recommendations.
   *
   * @public
   */
  instanceRecommendations?: InstanceRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * For example, an error is returned if you request recommendations for an instance of an unsupported instance family.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEC2RecommendationProjectedMetricsRequest {
  /**
   * The Amazon Resource Name (ARN) of the instances for which to return recommendation projected metrics.
   *
   * @public
   */
  instanceArn: string | undefined;

  /**
   * The statistic of the projected metrics.
   *
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * The granularity, in seconds, of the projected metrics data points.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The timestamp of the first projected metrics data point to return.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp of the last projected metrics data point to return.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * An object to specify the preferences for the Amazon EC2 recommendation projected metrics to return in the response.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * Describes a projected utilization metric of a recommendation option, such as an Amazon EC2 instance. This represents the projected utilization of a recommendation option had you used that resource during the analyzed period.
 *
 * Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.
 *
 * > **Note:** The `Cpu`, `Memory`, `GPU`, and `GPU_MEMORY` metrics are the only projected utilization metrics returned when you run the GetEC2RecommendationProjectedMetrics action. Additionally, these metrics are only returned for resources with the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent) and [Enabling NVIDIA GPU utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent).
 *
 * @public
 */
export interface ProjectedMetric {
  /**
   * The name of the projected utilization metric.
   *
   * The following projected utilization metrics are returned:
   *
   * - `Cpu` - The projected percentage of allocated EC2 compute units that would be in use on the recommendation option had you used that resource during the analyzed period. This metric identifies the processing power required to run an application on the recommendation option.
   *
   *   Depending on the instance type, tools in your operating system can show a lower percentage than CloudWatch when the instance is not allocated a full processor core.
   * - `Memory` - The percentage of memory that would be in use on the recommendation option had you used that resource during the analyzed period. This metric identifies the amount of memory required to run an application on the recommendation option.
   *
   *   Units: Percent
   *
   *   > **Note:** The `Memory` metric is only returned for resources with the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent).
   * - `GPU` - The projected percentage of allocated GPUs if you adjust your configurations to Compute Optimizer's recommendation option.
   * - `GPU_MEMORY` - The projected percentage of total GPU memory if you adjust your configurations to Compute Optimizer's recommendation option.
   *
   *   > **Note:** The `GPU` and `GPU_MEMORY` metrics are only returned for resources with the unified CloudWatch Agent installed on them. For more information, see [Enabling NVIDIA GPU utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent).
   *
   * @public
   */
  name?: MetricName | undefined;

  /**
   * The timestamps of the projected utilization metric.
   *
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * The values of the projected utilization metrics.
   *
   * @public
   */
  values?: number[] | undefined;
}

/**
 * Describes a projected utilization metric of a recommendation option.
 *
 * > **Note:** The `Cpu` and `Memory` metrics are the only projected utilization metrics returned when you run the GetEC2RecommendationProjectedMetrics action. Additionally, the `Memory` metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see [Enabling Memory Utilization with the CloudWatch Agent](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent).
 *
 * @public
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * The recommended instance type.
   *
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * The rank of the recommendation option projected metric.
   *
   * The top recommendation option is ranked as `1`.
   *
   * The projected metric rank correlates to the recommendation option rank. For example, the projected metric ranked as `1` is related to the recommendation option that is also ranked as `1` in the same response.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * An array of objects that describe a projected utilization metric.
   *
   * @public
   */
  projectedMetrics?: ProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetEC2RecommendationProjectedMetricsResponse {
  /**
   * An array of objects that describes projected metrics.
   *
   * @public
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationProjectedMetricsRequest {
  /**
   * The ARN that identifies the Amazon ECS service.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name`
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The statistic of the projected metrics.
   *
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * The granularity, in seconds, of the projected metrics data points.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The timestamp of the first projected metrics data point to return.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp of the last projected metrics data point to return.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * Describes the projected metrics of an Amazon ECS service recommendation option.
 *
 * To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.
 *
 * @public
 */
export interface ECSServiceProjectedMetric {
  /**
   * The name of the projected metric.
   *
   * The following metrics are available:
   *
   * - `Cpu` — The percentage of allocated compute units that are currently in use on the service tasks.
   * - `Memory` — The percentage of memory that's currently in use on the service tasks.
   *
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * The timestamps of the projected metric.
   *
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * The upper bound values for the projected metric.
   *
   * @public
   */
  upperBoundValues?: number[] | undefined;

  /**
   * The lower bound values for the projected metric.
   *
   * @public
   */
  lowerBoundValues?: number[] | undefined;
}

/**
 * Describes the projected metrics of an Amazon ECS service recommendation option.
 *
 * To determine the performance difference between your current Amazon ECS service and the recommended option, compare the metric data of your service against its projected metric data.
 *
 * @public
 */
export interface ECSServiceRecommendedOptionProjectedMetric {
  /**
   * The recommended CPU size for the Amazon ECS service.
   *
   * @public
   */
  recommendedCpuUnits?: number | undefined;

  /**
   * The recommended memory size for the Amazon ECS service.
   *
   * @public
   */
  recommendedMemorySize?: number | undefined;

  /**
   * An array of objects that describe the projected metric.
   *
   * @public
   */
  projectedMetrics?: ECSServiceProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationProjectedMetricsResponse {
  /**
   * An array of objects that describes the projected metrics.
   *
   * @public
   */
  recommendedOptionProjectedMetrics?: ECSServiceRecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationsRequest {
  /**
   * The ARN that identifies the Amazon ECS service.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name`
   *
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * The token to advance to the next page of Amazon ECS service recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon ECS service recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of Amazon ECS service recommendations.
   *
   * @public
   */
  filters?: ECSServiceRecommendationFilter[] | undefined;

  /**
   * Return the Amazon ECS service recommendations to the specified Amazon Web Services account IDs.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to return the Amazon ECS service recommendations to specific member accounts.
   *
   * You can only specify one account ID per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * The memory size configurations of a container.
 *
 * @public
 */
export interface MemorySizeConfiguration {
  /**
   * The amount of memory in the container.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The limit of memory reserve for the container.
   *
   * @public
   */
  memoryReservation?: number | undefined;
}

/**
 * Describes the container configurations within the tasks of your Amazon ECS service.
 *
 * @public
 */
export interface ContainerConfiguration {
  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The memory size configurations for the container.
   *
   * @public
   */
  memorySizeConfiguration?: MemorySizeConfiguration | undefined;

  /**
   * The number of CPU units reserved for the container.
   *
   * @public
   */
  cpu?: number | undefined;
}

/**
 * The Amazon ECS service configurations used for recommendations.
 *
 * @public
 */
export interface ServiceConfiguration {
  /**
   * The amount of memory used by the tasks in the Amazon ECS service.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The number of CPU units used by the tasks in the Amazon ECS service.
   *
   * @public
   */
  cpu?: number | undefined;

  /**
   * The container configurations within a task of an Amazon ECS service.
   *
   * @public
   */
  containerConfigurations?: ContainerConfiguration[] | undefined;

  /**
   * Describes the Auto Scaling configuration methods for an Amazon ECS service. This affects the generated recommendations. For example, if Auto Scaling is configured on a service’s CPU, then Compute Optimizer doesn’t generate CPU size recommendations.
   *
   * The Auto Scaling configuration methods include:
   *
   * - `TARGET_TRACKING_SCALING_CPU` — If the Amazon ECS service is configured to use target scaling on CPU, Compute Optimizer doesn't generate CPU recommendations.
   * - `TARGET_TRACKING_SCALING_MEMORY` — If the Amazon ECS service is configured to use target scaling on memory, Compute Optimizer doesn't generate memory recommendations.
   *
   * For more information about step scaling and target scaling, see [Step scaling policies for Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) and [Target tracking scaling policies for Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) in the *Application Auto Scaling User Guide*.
   *
   * @public
   */
  autoScalingConfiguration?: AutoScalingConfiguration | undefined;

  /**
   * The task definition ARN used by the tasks in the Amazon ECS service.
   *
   * @public
   */
  taskDefinitionArn?: string | undefined;
}

/**
 * Describes the savings estimation mode used for calculating savings opportunity for Amazon ECS services.
 *
 * @public
 */
export interface ECSSavingsEstimationMode {
  /**
   * Describes the source for calculating the savings opportunity for Amazon ECS services.
   *
   * @public
   */
  source?: ECSSavingsEstimationModeSource | undefined;
}

/**
 * Describes the effective recommendation preferences for Amazon ECS services.
 *
 * @public
 */
export interface ECSEffectiveRecommendationPreferences {
  /**
   * Describes the savings estimation mode preference applied for calculating savings opportunity for Amazon ECS services.
   *
   * @public
   */
  savingsEstimationMode?: ECSSavingsEstimationMode | undefined;

  /**
   * The number of days the Amazon ECS service utilization metrics were analyzed.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;
}

/**
 * The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.
 *
 * @public
 */
export interface ContainerRecommendation {
  /**
   * The name of the container.
   *
   * @public
   */
  containerName?: string | undefined;

  /**
   * The recommended memory size configurations for the container.
   *
   * @public
   */
  memorySizeConfiguration?: MemorySizeConfiguration | undefined;

  /**
   * The recommended number of CPU units reserved for the container.
   *
   * @public
   */
  cpu?: number | undefined;
}

/**
 * Describes the projected utilization metrics of an Amazon ECS service recommendation option.
 *
 * To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.
 *
 * @public
 */
export interface ECSServiceProjectedUtilizationMetric {
  /**
   * The name of the projected utilization metric.
   *
   * The following utilization metrics are available:
   *
   * - `Cpu` — The percentage of allocated compute units that are currently in use on the service tasks.
   * - `Memory` — The percentage of memory that's currently in use on the service tasks.
   *
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * The statistic of the projected utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: ECSServiceMetricStatistic | undefined;

  /**
   * The lower bound values for the projected utilization metrics.
   *
   * @public
   */
  lowerBoundValue?: number | undefined;

  /**
   * The upper bound values for the projected utilization metrics.
   *
   * @public
   */
  upperBoundValue?: number | undefined;
}

/**
 * Describes the estimated monthly savings possible for Amazon ECS services by adopting Compute Optimizer recommendations. This is based on Amazon ECS service pricing after applying Savings Plans discounts.
 *
 * @public
 */
export interface ECSEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings for Amazon ECS services.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for Amazon ECS service recommendations after applying Savings Plans discounts.
 *
 * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
 *
 * @public
 */
export interface ECSSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s Amazon ECS service recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer’s Amazon ECS service recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: ECSEstimatedMonthlySavings | undefined;
}

/**
 * Describes the recommendation options for an Amazon ECS service.
 *
 * @public
 */
export interface ECSServiceRecommendationOption {
  /**
   * The memory size of the Amazon ECS service recommendation option.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The CPU size of the Amazon ECS service recommendation option.
   *
   * @public
   */
  cpu?: number | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * Describes the savings opportunity for Amazon ECS service recommendations or for the recommendation option.
   *
   * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: ECSSavingsOpportunityAfterDiscounts | undefined;

  /**
   * An array of objects that describe the projected utilization metrics of the Amazon ECS service recommendation option.
   *
   * @public
   */
  projectedUtilizationMetrics?: ECSServiceProjectedUtilizationMetric[] | undefined;

  /**
   * The CPU and memory size recommendations for the containers within the task of your Amazon ECS service.
   *
   * @public
   */
  containerRecommendations?: ContainerRecommendation[] | undefined;
}

/**
 * Describes the utilization metric of an Amazon ECS service.
 *
 * To determine the performance difference between your current Amazon ECS service and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.
 *
 * @public
 */
export interface ECSServiceUtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * The following utilization metrics are available:
   *
   * - `Cpu` — The amount of CPU capacity that's used in the service.
   * - `Memory` — The amount of memory that's used in the service.
   *
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: ECSServiceMetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes an Amazon ECS service recommendation.
 *
 * @public
 */
export interface ECSServiceRecommendation {
  /**
   * The Amazon Resource Name (ARN) of the current Amazon ECS service.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name`
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the Amazon ECS service.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The configuration of the current Amazon ECS service.
   *
   * @public
   */
  currentServiceConfiguration?: ServiceConfiguration | undefined;

  /**
   * An array of objects that describe the utilization metrics of the Amazon ECS service.
   *
   * @public
   */
  utilizationMetrics?: ECSServiceUtilizationMetric[] | undefined;

  /**
   * The number of days the Amazon ECS service utilization metrics were analyzed.
   *
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * The launch type the Amazon ECS service is using.
   *
   * > **Note:** Compute Optimizer only supports the Fargate launch type.
   *
   * @public
   */
  launchType?: ECSServiceLaunchType | undefined;

  /**
   * The timestamp of when the Amazon ECS service recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The finding classification of an Amazon ECS service.
   *
   * Findings for Amazon ECS services include:
   *
   * - **`Underprovisioned`** — When Compute Optimizer detects that there’s not enough memory or CPU, an Amazon ECS service is considered under-provisioned. An under-provisioned service might result in poor application performance.
   * - **`Overprovisioned`** — When Compute Optimizer detects that there’s excessive memory or CPU, an Amazon ECS service is considered over-provisioned. An over-provisioned service might result in additional infrastructure costs.
   * - **`Optimized`** — When both the CPU and memory of your Amazon ECS service meet the performance requirements of your workload, the service is considered optimized.
   *
   * @public
   */
  finding?: ECSServiceRecommendationFinding | undefined;

  /**
   * The reason for the finding classification of an Amazon ECS service.
   *
   * Finding reason codes for Amazon ECS services include:
   *
   * - **`CPUUnderprovisioned`** — The service CPU configuration can be sized up to enhance the performance of your workload. This is identified by analyzing the `CPUUtilization` metric of the current service during the look-back period.
   * - **`CPUOverprovisioned`** — The service CPU configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `CPUUtilization` metric of the current service during the look-back period.
   * - **`MemoryUnderprovisioned`** — The service memory configuration can be sized up to enhance the performance of your workload. This is identified by analyzing the `MemoryUtilization` metric of the current service during the look-back period.
   * - **`MemoryOverprovisioned`** — The service memory configuration can be sized down while still meeting the performance requirements of your workload. This is identified by analyzing the `MemoryUtilization` metric of the current service during the look-back period.
   *
   * @public
   */
  findingReasonCodes?: ECSServiceRecommendationFindingReasonCode[] | undefined;

  /**
   * An array of objects that describe the recommendation options for the Amazon ECS service.
   *
   * @public
   */
  serviceRecommendationOptions?: ECSServiceRecommendationOption[] | undefined;

  /**
   * The risk of the current Amazon ECS service not meeting the performance needs of its workloads. The higher the risk, the more likely the current service can't meet the performance requirements of its workload.
   *
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * Describes the effective recommendation preferences for Amazon ECS services.
   *
   * @public
   */
  effectiveRecommendationPreferences?: ECSEffectiveRecommendationPreferences | undefined;

  /**
   * A list of tags assigned to your Amazon ECS service recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationsResponse {
  /**
   * The token to advance to the next page of Amazon ECS service recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe the Amazon ECS service recommendations.
   *
   * @public
   */
  ecsServiceRecommendations?: ECSServiceRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEffectiveRecommendationPreferencesRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to confirm effective recommendation preferences. Only EC2 instance and Auto Scaling group ARNs are currently supported.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetEffectiveRecommendationPreferencesResponse {
  /**
   * The status of the enhanced infrastructure metrics recommendation preference. Considers all applicable preferences that you might have set at the resource, account, and organization level.
   *
   * A status of `Active` confirms that the preference is applied in the latest recommendation refresh, and a status of `Inactive` confirms that it's not yet applied to recommendations.
   *
   * To validate whether the preference is applied to your last generated set of recommendations, review the `effectiveRecommendationPreferences` value in the response of the GetAutoScalingGroupRecommendations and GetEC2InstanceRecommendations actions.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * The provider of the external metrics recommendation preference. Considers all applicable preferences that you might have set at the account and organization level.
   *
   * If the preference is applied in the latest recommendation refresh, an object with a valid `source` value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response.
   *
   * To validate whether the preference is applied to your last generated set of recommendations, review the `effectiveRecommendationPreferences` value in the response of the GetEC2InstanceRecommendations actions.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * The number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *
   * To validate that the preference is applied to your last generated set of recommendations, review the `effectiveRecommendationPreferences` value in the response of the GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEBSVolumeRecommendations, GetECSServiceRecommendations, or GetRDSDatabaseRecommendations actions.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * The resource’s CPU and memory utilization preferences, such as threshold and headroom, that were used to generate rightsizing recommendations. It considers all applicable preferences that you set at the resource, account, and organization level.
   *
   * To validate that the preference is applied to your last generated set of recommendations, review the `effectiveRecommendationPreferences` value in the response of the GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.
   *
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * The resource type values that are considered as candidates when generating rightsizing recommendations. This object resolves any wildcard expressions and returns the effective list of candidate resource type values. It also considers all applicable preferences that you set at the resource, account, and organization level.
   *
   * To validate that the preference is applied to your last generated set of recommendations, review the `effectiveRecommendationPreferences` value in the response of the GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.
   *
   * @public
   */
  preferredResources?: EffectivePreferredResource[] | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentStatusRequest {}

/**
 * @public
 */
export interface GetEnrollmentStatusResponse {
  /**
   * The enrollment status of the account.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The reason for the enrollment status of the account.
   *
   * For example, an account might show a status of `Pending` because member accounts of an organization require more time to be enrolled in the service.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Confirms the enrollment status of member accounts of the organization, if the account is a management account of an organization.
   *
   * @public
   */
  memberAccountsEnrolled?: boolean | undefined;

  /**
   * The Unix epoch timestamp, in seconds, of when the account enrollment status was last updated.
   *
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * The count of organization member accounts that are opted in to the service, if your account is an organization management account.
   *
   * @public
   */
  numberOfMemberAccountsOptedIn?: number | undefined;
}

/**
 * Describes a filter that returns a more specific list of account enrollment statuses. Use this filter with the GetEnrollmentStatusesForOrganization action.
 *
 * @public
 */
export interface EnrollmentFilter {
  /**
   * The name of the filter.
   *
   * Specify `Status` to return accounts with a specific enrollment status (for example, `Active`).
   *
   * @public
   */
  name?: EnrollmentFilterName | undefined;

  /**
   * The value of the filter.
   *
   * The valid values are `Active`, `Inactive`, `Pending`, and `Failed`.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentStatusesForOrganizationRequest {
  /**
   * An array of objects to specify a filter that returns a more specific list of account enrollment statuses.
   *
   * @public
   */
  filters?: EnrollmentFilter[] | undefined;

  /**
   * The token to advance to the next page of account enrollment statuses.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of account enrollment statuses to return with a single request. You can specify up to 100 statuses to return with each request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentStatusesForOrganizationResponse {
  /**
   * An array of objects that describe the enrollment statuses of organization member accounts.
   *
   * @public
   */
  accountEnrollmentStatuses?: AccountEnrollmentStatus[] | undefined;

  /**
   * The token to use to advance to the next page of account enrollment statuses.
   *
   * This value is null when there are no more pages of account enrollment statuses to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes how the recommendations are ordered.
 *
 * @public
 */
export interface OrderBy {
  /**
   * The dimension values to sort the recommendations.
   *
   * @public
   */
  dimension?: Dimension | undefined;

  /**
   * The order to sort the recommendations.
   *
   * @public
   */
  order?: Order | undefined;
}

/**
 * @public
 */
export interface GetIdleRecommendationsRequest {
  /**
   * The ARN that identifies the idle resource.
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The token to advance to the next page of idle resource recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of idle resource recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of idle resource recommendations.
   *
   * @public
   */
  filters?: IdleRecommendationFilter[] | undefined;

  /**
   * Return the idle resource recommendations to the specified Amazon Web Services account IDs.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to return the idle resource recommendations to specific member accounts.
   *
   * You can only specify one account ID per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The order to sort the idle resource recommendations.
   *
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * Returns of list of resources that doesn't have idle recommendations.
 *
 * @public
 */
export interface IdleRecommendationError {
  /**
   * The ID of the error.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The type of resource associated with the error.
   *
   * @public
   */
  resourceType?: IdleRecommendationResourceType | undefined;
}

/**
 * Describes the estimated monthly savings possible for idle resources by adopting Compute Optimizer recommendations.
 *
 * @public
 */
export interface IdleEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings for Idle resources.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for idle resource recommendations.
 *
 * @public
 */
export interface IdleSavingsOpportunity {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer's idle resource recommendations.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer's idle resource recommendations.
   *
   * @public
   */
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings | undefined;
}

/**
 * Describes the savings opportunity for idle resource recommendations after applying discounts.
 *
 * Savings opportunity represents the estimated monthly savings after applying discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
 *
 * @public
 */
export interface IdleSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer's idle resource recommendations. This includes any applicable discounts.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer's idle resource recommendations. This includes any applicable discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings | undefined;
}

/**
 * Describes the dimension of an idle resource utilization metric.
 *
 * @public
 */
export interface IdleDimension {
  /**
   * The name of the dimension key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * Describes the utilization metric of an idle resource.
 *
 * @public
 */
export interface IdleUtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * @public
   */
  name?: IdleMetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The dimensions of the utilization metric.
   *
   * @public
   */
  dimensions?: IdleDimension[] | undefined;
}

/**
 * Describes an Idle resource recommendation.
 *
 * @public
 */
export interface IdleRecommendation {
  /**
   * The ARN of the current idle resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The type of resource that is idle.
   *
   * @public
   */
  resourceType?: IdleRecommendationResourceType | undefined;

  /**
   * The Amazon Web Services account ID of the idle resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The finding classification of an idle resource.
   *
   * @public
   */
  finding?: IdleFinding | undefined;

  /**
   * A summary of the findings for the resource.
   *
   * @public
   */
  findingDescription?: string | undefined;

  /**
   * The savings opportunity for the idle resource.
   *
   * @public
   */
  savingsOpportunity?: IdleSavingsOpportunity | undefined;

  /**
   * The savings opportunity for the idle resource after any applying discounts.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: IdleSavingsOpportunityAfterDiscounts | undefined;

  /**
   * An array of objects that describe the utilization metrics of the idle resource.
   *
   * @public
   */
  utilizationMetrics?: IdleUtilizationMetric[] | undefined;

  /**
   * The number of days the idle resource utilization metrics were analyzed.
   *
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * The timestamp of when the idle resource recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * A list of tags assigned to your idle resource recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetIdleRecommendationsResponse {
  /**
   * The token to advance to the next page of idle resource recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe the idle resource recommendations.
   *
   * @public
   */
  idleRecommendations?: IdleRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * @public
   */
  errors?: IdleRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetLambdaFunctionRecommendationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the functions for which to return recommendations.
   *
   * You can specify a qualified or unqualified ARN. If you specify an unqualified ARN without a function version suffix, Compute Optimizer will return recommendations for the latest (`$LATEST`) version of the function. If you specify a qualified ARN with a version suffix, Compute Optimizer will return recommendations for the specified function version. For more information about using function versions, see [Using versions](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using) in the *Lambda Developer Guide*.
   *
   * @public
   */
  functionArns?: string[] | undefined;

  /**
   * The ID of the Amazon Web Services account for which to return function recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return function recommendations.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of function recommendations.
   *
   * @public
   */
  filters?: LambdaFunctionRecommendationFilter[] | undefined;

  /**
   * The token to advance to the next page of function recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of function recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the savings estimation used for calculating savings opportunity for Lambda functions.
 *
 * @public
 */
export interface LambdaSavingsEstimationMode {
  /**
   * Describes the source for calculation of savings opportunity for Lambda functions.
   *
   * @public
   */
  source?: LambdaSavingsEstimationModeSource | undefined;
}

/**
 * Describes the effective recommendation preferences for Lambda functions.
 *
 * @public
 */
export interface LambdaEffectiveRecommendationPreferences {
  /**
   * Describes the savings estimation mode applied for calculating savings opportunity for Lambda functions.
   *
   * @public
   */
  savingsEstimationMode?: LambdaSavingsEstimationMode | undefined;
}

/**
 * Describes a projected utilization metric of an Lambda function recommendation option.
 *
 * @public
 */
export interface LambdaFunctionMemoryProjectedMetric {
  /**
   * The name of the projected utilization metric.
   *
   * @public
   */
  name?: LambdaFunctionMemoryMetricName | undefined;

  /**
   * The statistic of the projected utilization metric.
   *
   * @public
   */
  statistic?: LambdaFunctionMemoryMetricStatistic | undefined;

  /**
   * The values of the projected utilization metrics.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the estimated monthly savings possible for Lambda functions by adopting Compute Optimizer recommendations. This is based on Lambda functions pricing after applying Savings Plans discounts.
 *
 * @public
 */
export interface LambdaEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for Lambda functions recommendations after applying Savings Plans discounts.
 *
 * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
 *
 * @public
 */
export interface LambdaSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s Lambda function recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer’s Lambda function recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: LambdaEstimatedMonthlySavings | undefined;
}

/**
 * Describes a recommendation option for an Lambda function.
 *
 * @public
 */
export interface LambdaFunctionMemoryRecommendationOption {
  /**
   * The rank of the function recommendation option.
   *
   * The top recommendation option is ranked as `1`.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * The memory size, in MB, of the function recommendation option.
   *
   * @public
   */
  memorySize?: number | undefined;

  /**
   * An array of objects that describe the projected utilization metrics of the function recommendation option.
   *
   * @public
   */
  projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[] | undefined;

  /**
   * An object that describes the savings opportunity for the Lambda function recommendation option. Savings opportunity includes the estimated monthly savings amount and percentage.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * An object that describes the savings opportunity for the Lambda recommendation option which includes Saving Plans discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: LambdaSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * Describes a utilization metric of an Lambda function.
 *
 * @public
 */
export interface LambdaFunctionUtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * The following utilization metrics are available:
   *
   * - `Duration` - The amount of time that your function code spends processing an event.
   * - `Memory` - The amount of memory used per invocation.
   *
   * @public
   */
  name?: LambdaFunctionMetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: LambdaFunctionMetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes an Lambda function recommendation.
 *
 * @public
 */
export interface LambdaFunctionRecommendation {
  /**
   * The Amazon Resource Name (ARN) of the current function.
   *
   * @public
   */
  functionArn?: string | undefined;

  /**
   * The version number of the current function.
   *
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * The Amazon Web Services account ID of the function.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The amount of memory, in MB, that's allocated to the current function.
   *
   * @public
   */
  currentMemorySize?: number | undefined;

  /**
   * The number of times your function code was applied during the look-back period.
   *
   * @public
   */
  numberOfInvocations?: number | undefined;

  /**
   * An array of objects that describe the utilization metrics of the function.
   *
   * @public
   */
  utilizationMetrics?: LambdaFunctionUtilizationMetric[] | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for the function.
   *
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * The timestamp of when the function recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The finding classification of the function.
   *
   * Findings for functions include:
   *
   * - **`Optimized`** — The function is correctly provisioned to run your workload based on its current configuration and its utilization history. This finding classification does not include finding reason codes.
   * - **`NotOptimized`** — The function is performing at a higher level (over-provisioned) or at a lower level (under-provisioned) than required for your workload because its current configuration is not optimal. Over-provisioned resources might lead to unnecessary infrastructure cost, and under-provisioned resources might lead to poor application performance. This finding classification can include the `MemoryUnderprovisioned` and `MemoryUnderprovisioned` finding reason codes.
   * - **`Unavailable`** — Compute Optimizer was unable to generate a recommendation for the function. This could be because the function has not accumulated sufficient metric data, or the function does not qualify for a recommendation. This finding classification can include the `InsufficientData` and `Inconclusive` finding reason codes.
   *
   *   > **Note:** Functions with a finding of unavailable are not returned unless you specify the `filter` parameter with a value of `Unavailable` in your `GetLambdaFunctionRecommendations` request.
   *
   * @public
   */
  finding?: LambdaFunctionRecommendationFinding | undefined;

  /**
   * The reason for the finding classification of the function.
   *
   * > **Note:** Functions that have a finding classification of `Optimized` don't have a finding reason code.
   *
   * Finding reason codes for functions include:
   *
   * - **`MemoryOverprovisioned`** — The function is over-provisioned when its memory configuration can be sized down while still meeting the performance requirements of your workload. An over-provisioned function might lead to unnecessary infrastructure cost. This finding reason code is part of the `NotOptimized` finding classification.
   * - **`MemoryUnderprovisioned`** — The function is under-provisioned when its memory configuration doesn't meet the performance requirements of the workload. An under-provisioned function might lead to poor application performance. This finding reason code is part of the `NotOptimized` finding classification.
   * - **`InsufficientData`** — The function does not have sufficient metric data for Compute Optimizer to generate a recommendation. For more information, see the [Supported resources and requirements](https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html) in the *Compute Optimizer User Guide*. This finding reason code is part of the `Unavailable` finding classification.
   * - **`Inconclusive`** — The function does not qualify for a recommendation because Compute Optimizer cannot generate a recommendation with a high degree of confidence. This finding reason code is part of the `Unavailable` finding classification.
   *
   * @public
   */
  findingReasonCodes?: LambdaFunctionRecommendationFindingReasonCode[] | undefined;

  /**
   * An array of objects that describe the memory configuration recommendation options for the function.
   *
   * @public
   */
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[] | undefined;

  /**
   * The risk of the current Lambda function not meeting the performance needs of its workloads. The higher the risk, the more likely the current Lambda function requires more memory.
   *
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * Describes the effective recommendation preferences for Lambda functions.
   *
   * @public
   */
  effectiveRecommendationPreferences?: LambdaEffectiveRecommendationPreferences | undefined;

  /**
   * A list of tags assigned to your Lambda function recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetLambdaFunctionRecommendationsResponse {
  /**
   * The token to use to advance to the next page of function recommendations.
   *
   * This value is null when there are no more pages of function recommendations to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe function recommendations.
   *
   * @public
   */
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseRecommendationsRequest {
  /**
   * The ARN that identifies the Amazon EC2 instance.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:ec2:region:aws_account_id:instance/instance-id`
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The token to advance to the next page of license recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of license recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of license recommendations.
   *
   * @public
   */
  filters?: LicenseRecommendationFilter[] | undefined;

  /**
   * The ID of the Amazon Web Services account for which to return license recommendations.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return license recommendations.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * The list of metric sources required to generate recommendations for commercial software licenses.
 *
 * @public
 */
export interface MetricSource {
  /**
   * The name of the metric source provider.
   *
   * @public
   */
  provider?: MetricSourceProvider | undefined;

  /**
   * The ARN of the metric source provider.
   *
   * @public
   */
  providerArn?: string | undefined;
}

/**
 * Describes the configuration of a license for an Amazon EC2 instance.
 *
 * @public
 */
export interface LicenseConfiguration {
  /**
   * The current number of cores associated with the instance.
   *
   * @public
   */
  numberOfCores?: number | undefined;

  /**
   * The instance type used in the license.
   *
   * @public
   */
  instanceType?: string | undefined;

  /**
   * The operating system of the instance.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * The edition of the license for the application that runs on the instance.
   *
   * @public
   */
  licenseEdition?: LicenseEdition | undefined;

  /**
   * The name of the license for the application that runs on the instance.
   *
   * @public
   */
  licenseName?: LicenseName | undefined;

  /**
   * The license type associated with the instance.
   *
   * @public
   */
  licenseModel?: LicenseModel | undefined;

  /**
   * The version of the license for the application that runs on the instance.
   *
   * @public
   */
  licenseVersion?: string | undefined;

  /**
   * The list of metric sources required to generate recommendations for commercial software licenses.
   *
   * @public
   */
  metricsSource?: MetricSource[] | undefined;
}

/**
 * Describes the recommendation options for licenses.
 *
 * @public
 */
export interface LicenseRecommendationOption {
  /**
   * The rank of the license recommendation option.
   *
   * The top recommendation option is ranked as `1`.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * The operating system of a license recommendation option.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * The recommended edition of the license for the application that runs on the instance.
   *
   * @public
   */
  licenseEdition?: LicenseEdition | undefined;

  /**
   * The recommended license type associated with the instance.
   *
   * @public
   */
  licenseModel?: LicenseModel | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;
}

/**
 * Describes a license recommendation for an EC2 instance.
 *
 * @public
 */
export interface LicenseRecommendation {
  /**
   * The ARN that identifies the Amazon EC2 instance.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the license.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that describes the current configuration of an instance that runs on a license.
   *
   * @public
   */
  currentLicenseConfiguration?: LicenseConfiguration | undefined;

  /**
   * The number of days for which utilization metrics were analyzed for an instance that runs on a license.
   *
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * The timestamp of when the license recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * The finding classification for an instance that runs on a license.
   *
   * Findings include:
   *
   * - `InsufficentMetrics` — When Compute Optimizer detects that your CloudWatch Application Insights isn't enabled or is enabled with insufficient permissions.
   * - `NotOptimized` — When Compute Optimizer detects that your EC2 infrastructure isn't using any of the SQL server license features you're paying for, a license is considered not optimized.
   * - `Optimized` — When Compute Optimizer detects that all specifications of your license meet the performance requirements of your workload.
   *
   * @public
   */
  finding?: LicenseFinding | undefined;

  /**
   * The reason for the finding classification for an instance that runs on a license.
   *
   * Finding reason codes include:
   *
   * - `Optimized` — All specifications of your license meet the performance requirements of your workload.
   * - `LicenseOverprovisioned` — A license is considered over-provisioned when your license can be downgraded while still meeting the performance requirements of your workload.
   * - `InvalidCloudwatchApplicationInsights` — CloudWatch Application Insights isn't configured properly.
   * - `CloudwatchApplicationInsightsError` — There is a CloudWatch Application Insights error.
   *
   * @public
   */
  findingReasonCodes?: LicenseFindingReasonCode[] | undefined;

  /**
   * An array of objects that describe the license recommendation options.
   *
   * @public
   */
  licenseRecommendationOptions?: LicenseRecommendationOption[] | undefined;

  /**
   * A list of tags assigned to an EC2 instance.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseRecommendationsResponse {
  /**
   * The token to use to advance to the next page of license recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe license recommendations.
   *
   * @public
   */
  licenseRecommendations?: LicenseRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationProjectedMetricsRequest {
  /**
   * The ARN that identifies the Amazon Aurora or RDS database.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}`
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The statistic of the projected metrics.
   *
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * The granularity, in seconds, of the projected metrics data points.
   *
   * @public
   */
  period: number | undefined;

  /**
   * The timestamp of the first projected metrics data point to return.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The timestamp of the last projected metrics data point to return.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * Describes the projected metrics of an Amazon Aurora and RDS database recommendation option.
 *
 * To determine the performance difference between your current Amazon Aurora and RDS database and the recommended option, compare the metric data of your service against its projected metric data.
 *
 * @public
 */
export interface RDSDatabaseProjectedMetric {
  /**
   * The name of the projected metric.
   *
   * @public
   */
  name?: RDSDBMetricName | undefined;

  /**
   * The timestamps of the projected metric.
   *
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * The values for the projected metric.
   *
   * @public
   */
  values?: number[] | undefined;
}

/**
 * Describes the projected metrics of an Amazon Aurora and RDS database recommendation option.
 *
 * To determine the performance difference between your current Amazon Aurora and RDS database and the recommended option, compare the metric data of your service against its projected metric data.
 *
 * @public
 */
export interface RDSDatabaseRecommendedOptionProjectedMetric {
  /**
   * The recommended DB instance class for the Amazon Aurora or RDS database.
   *
   * @public
   */
  recommendedDBInstanceClass?: string | undefined;

  /**
   * The rank identifier of the Amazon Aurora or RDS DB instance recommendation option.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * An array of objects that describe the projected metric.
   *
   * @public
   */
  projectedMetrics?: RDSDatabaseProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationProjectedMetricsResponse {
  /**
   * An array of objects that describes the projected metrics.
   *
   * @public
   */
  recommendedOptionProjectedMetrics?: RDSDatabaseRecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationsRequest {
  /**
   * The ARN that identifies the Amazon Aurora or RDS database.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}`
   *
   * The following is the format of a DB Cluster ARN:
   *
   * `arn:aws:rds:\{region\}:\{accountId\}:cluster:\{resourceName\}`
   *
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * The token to advance to the next page of Amazon Aurora and RDS database recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of Amazon Aurora and RDS database recommendations to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An array of objects to specify a filter that returns a more specific list of Amazon Aurora and RDS database recommendations.
   *
   * @public
   */
  filters?: RDSDBRecommendationFilter[] | undefined;

  /**
   * Return the Amazon Aurora and RDS database recommendations to the specified Amazon Web Services account IDs.
   *
   * If your account is the management account or the delegated administrator of an organization, use this parameter to return the Amazon Aurora and RDS database recommendations to specific member accounts.
   *
   * You can only specify one account ID per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request.
   *
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * The configuration of the recommended RDS storage.
 *
 * @public
 */
export interface DBStorageConfiguration {
  /**
   * The type of DB storage.
   *
   * @public
   */
  storageType?: string | undefined;

  /**
   * The size of the DB storage in gigabytes (GB).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The provisioned IOPs of the DB storage.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The maximum limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *
   * @public
   */
  maxAllocatedStorage?: number | undefined;

  /**
   * The storage throughput of the DB storage.
   *
   * @public
   */
  storageThroughput?: number | undefined;
}

/**
 * Describes the savings estimation mode used for calculating savings opportunity for DB instances.
 *
 * @public
 */
export interface RDSSavingsEstimationMode {
  /**
   * Describes the source for calculating the savings opportunity for DB instances.
   *
   * @public
   */
  source?: RDSSavingsEstimationModeSource | undefined;
}

/**
 * Describes the effective recommendation preferences for Amazon Aurora and RDS databases.
 *
 * @public
 */
export interface RDSEffectiveRecommendationPreferences {
  /**
   * Describes the CPU vendor and architecture for DB instance recommendations.
   *
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;

  /**
   * Describes the activation status of the enhanced infrastructure metrics preference.
   *
   * A status of `Active` confirms that the preference is applied in the latest recommendation refresh, and a status of `Inactive` confirms that it's not yet applied to recommendations.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * The number of days the utilization metrics of the DB instance are analyzed.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * Describes the savings estimation mode preference applied for calculating savings opportunity for DB instances.
   *
   * @public
   */
  savingsEstimationMode?: RDSSavingsEstimationMode | undefined;
}

/**
 * Describes the utilization metric of an Amazon Aurora and RDS database.
 *
 * To determine the performance difference between your current DB instance and the recommended option, compare the utilization metric data of your service against its projected utilization metric data.
 *
 * @public
 */
export interface RDSDBUtilizationMetric {
  /**
   * The name of the utilization metric.
   *
   * @public
   */
  name?: RDSDBMetricName | undefined;

  /**
   * The statistic of the utilization metric.
   *
   * The Compute Optimizer API, Command Line Interface (CLI), and SDKs return utilization metrics using only the `Maximum` statistic, which is the highest value observed during the specified period.
   *
   * The Compute Optimizer console displays graphs for some utilization metrics using the `Average` statistic, which is the value of `Sum` / `SampleCount` during the specified period. For more information, see [Viewing resource recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html) in the *Compute Optimizer User Guide*. You can also get averaged utilization metric data for your resources using Amazon CloudWatch. For more information, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
   *
   * @public
   */
  statistic?: RDSDBMetricStatistic | undefined;

  /**
   * The value of the utilization metric.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the estimated monthly savings possible for DB instances by adopting Compute Optimizer recommendations. This is based on DB instance pricing after applying Savings Plans discounts.
 *
 * @public
 */
export interface RDSInstanceEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings for DB instances.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for DB instance recommendations after applying Savings Plans discounts.
 *
 * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
 *
 * @public
 */
export interface RDSInstanceSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s DB instance recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer’s DB instance recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: RDSInstanceEstimatedMonthlySavings | undefined;
}

/**
 * Describes the recommendation options for a DB instance.
 *
 * @public
 */
export interface RDSDBInstanceRecommendationOption {
  /**
   * Describes the DB instance class recommendation option for your Amazon Aurora or RDS database.
   *
   * @public
   */
  dbInstanceClass?: string | undefined;

  /**
   * An array of objects that describe the projected utilization metrics of the DB instance recommendation option.
   *
   * @public
   */
  projectedUtilizationMetrics?: RDSDBUtilizationMetric[] | undefined;

  /**
   * The performance risk of the DB instance recommendation option.
   *
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * The rank identifier of the DB instance recommendation option.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * Describes the savings opportunity for Amazon Aurora and RDS database recommendations or for the recommendation option.
   *
   * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: RDSInstanceSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * Describes the estimated monthly savings possible for DB instance storage by adopting Compute Optimizer recommendations. This is based on DB instance pricing after applying Savings Plans discounts.
 *
 * @public
 */
export interface RDSStorageEstimatedMonthlySavings {
  /**
   * The currency of the estimated monthly savings.
   *
   * @public
   */
  currency?: Currency | undefined;

  /**
   * The value of the estimated monthly savings for DB instance storage.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * Describes the savings opportunity for Amazon RDS storage recommendations after applying Savings Plans discounts.
 *
 * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
 *
 * @public
 */
export interface RDSStorageSavingsOpportunityAfterDiscounts {
  /**
   * The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s DB instance storage recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * The estimated monthly savings possible by adopting Compute Optimizer’s DB instance storage recommendations. This includes any applicable Savings Plans discounts.
   *
   * @public
   */
  estimatedMonthlySavings?: RDSStorageEstimatedMonthlySavings | undefined;
}

/**
 * Describes the recommendation options for DB storage.
 *
 * @public
 */
export interface RDSDBStorageRecommendationOption {
  /**
   * The recommended storage configuration.
   *
   * @public
   */
  storageConfiguration?: DBStorageConfiguration | undefined;

  /**
   * The rank identifier of the DB storage recommendation option.
   *
   * @public
   */
  rank?: number | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * Describes the savings opportunity for DB storage recommendations or for the recommendation option.
   *
   * Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve this by implementing a given Compute Optimizer recommendation.
   *
   * @public
   */
  savingsOpportunityAfterDiscounts?: RDSStorageSavingsOpportunityAfterDiscounts | undefined;

  /**
   * The projected level of variation in monthly I/O costs for the DB storage recommendation option.
   *
   * @public
   */
  estimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation | undefined;
}

/**
 * Describes an Amazon Aurora and RDS database recommendation.
 *
 * @public
 */
export interface RDSDBRecommendation {
  /**
   * The ARN of the current Amazon Aurora or RDS database.
   *
   * The following is the format of the ARN:
   *
   * `arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}`
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the Amazon Aurora or RDS database.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The engine of the DB instance.
   *
   * @public
   */
  engine?: string | undefined;

  /**
   * The database engine version.
   *
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * The promotion tier for the Aurora instance.
   *
   * @public
   */
  promotionTier?: number | undefined;

  /**
   * The DB instance class of the current Aurora or RDS DB instance.
   *
   * @public
   */
  currentDBInstanceClass?: string | undefined;

  /**
   * The configuration of the current DB storage.
   *
   * @public
   */
  currentStorageConfiguration?: DBStorageConfiguration | undefined;

  /**
   * The identifier for DB cluster.
   *
   * @public
   */
  dbClusterIdentifier?: string | undefined;

  /**
   * This indicates if the DB instance is idle or not.
   *
   * @public
   */
  idle?: Idle | undefined;

  /**
   * The finding classification of an Amazon Aurora and RDS DB instance.
   *
   * For more information about finding classifications, see [Finding classifications for Aurora and RDS databases](https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-rds-recommendations.html#rds-recommendations-findings) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  instanceFinding?: RDSInstanceFinding | undefined;

  /**
   * The finding classification of Amazon RDS DB instance storage.
   *
   * For more information about finding classifications, see [Finding classifications for Aurora and RDS databases](https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-rds-recommendations.html#rds-recommendations-findings) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  storageFinding?: RDSStorageFinding | undefined;

  /**
   * The reason for the finding classification of a DB instance.
   *
   * @public
   */
  instanceFindingReasonCodes?: RDSInstanceFindingReasonCode[] | undefined;

  /**
   * The performance risk for the current DB instance.
   *
   * @public
   */
  currentInstancePerformanceRisk?: RDSCurrentInstancePerformanceRisk | undefined;

  /**
   * The level of variation in monthly I/O costs for the current DB storage configuration.
   *
   * @public
   */
  currentStorageEstimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation | undefined;

  /**
   * The reason for the finding classification of RDS DB instance storage.
   *
   * @public
   */
  storageFindingReasonCodes?: RDSStorageFindingReasonCode[] | undefined;

  /**
   * An array of objects that describe the recommendation options for the RDS DB instance.
   *
   * @public
   */
  instanceRecommendationOptions?: RDSDBInstanceRecommendationOption[] | undefined;

  /**
   * An array of objects that describe the recommendation options for DB instance storage.
   *
   * @public
   */
  storageRecommendationOptions?: RDSDBStorageRecommendationOption[] | undefined;

  /**
   * An array of objects that describe the utilization metrics of the DB instance.
   *
   * @public
   */
  utilizationMetrics?: RDSDBUtilizationMetric[] | undefined;

  /**
   * Describes the effective recommendation preferences for DB instances.
   *
   * @public
   */
  effectiveRecommendationPreferences?: RDSEffectiveRecommendationPreferences | undefined;

  /**
   * The number of days the DB instance utilization metrics were analyzed.
   *
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * The timestamp of when the DB instance recommendation was last generated.
   *
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * A list of tags assigned to your DB instance recommendations.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationsResponse {
  /**
   * The token to advance to the next page of Amazon Aurora and RDS database recommendations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe the Amazon Aurora and RDS database recommendations.
   *
   * @public
   */
  rdsDBRecommendations?: RDSDBRecommendation[] | undefined;

  /**
   * An array of objects that describe errors of the request.
   *
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationPreferencesRequest {
  /**
   * The target resource type of the recommendation preference for which to return preferences.
   *
   * The `Ec2Instance` option encompasses standalone instances and instances that are part of Auto Scaling groups. The `AutoScalingGroup` option encompasses only instances that are part of an Auto Scaling group.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * An object that describes the scope of the recommendation preference to return.
   *
   * You can return recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The token to advance to the next page of recommendation preferences.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of recommendation preferences to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes a recommendation preference.
 *
 * @public
 */
export interface RecommendationPreferencesDetail {
  /**
   * An object that describes the scope of the recommendation preference.
   *
   * Recommendation preferences can be created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The target resource type of the recommendation preference to create.
   *
   * The `Ec2Instance` option encompasses standalone instances and instances that are part of Auto Scaling groups. The `AutoScalingGroup` option encompasses only instances that are part of an Auto Scaling group.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The status of the enhanced infrastructure metrics recommendation preference.
   *
   * When the recommendations page is refreshed, a status of `Active` confirms that the preference is applied to the recommendations, and a status of `Inactive` confirms that the preference isn't yet applied to recommendations.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * The status of the inferred workload types recommendation preference.
   *
   * When the recommendations page is refreshed, a status of `Active` confirms that the preference is applied to the recommendations, and a status of `Inactive` confirms that the preference isn't yet applied to recommendations.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * An object that describes the external metrics recommendation preference.
   *
   * If the preference is applied in the latest recommendation refresh, an object with a valid `source` value appears in the response. If the preference isn't applied to the recommendations already, then this object doesn't appear in the response.
   *
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed. If the preference isn’t set, this object is null.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom. If the preference isn’t set, this object is null.
   *
   * > **Note:** This preference is only available for the Amazon EC2 instance resource type.
   *
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * The preference to control which resource type values are considered when generating rightsizing recommendations. This object resolves any wildcard expressions and returns the effective list of candidate resource type values. If the preference isn’t set, this object is null.
   *
   * @public
   */
  preferredResources?: EffectivePreferredResource[] | undefined;

  /**
   * Describes the savings estimation mode used for calculating savings opportunity.
   *
   * Only the account manager or delegated administrator of your organization can activate this preference.
   *
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;
}

/**
 * @public
 */
export interface GetRecommendationPreferencesResponse {
  /**
   * The token to use to advance to the next page of recommendation preferences.
   *
   * This value is null when there are no more pages of recommendation preferences to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that describe recommendation preferences.
   *
   * @public
   */
  recommendationPreferencesDetails?: RecommendationPreferencesDetail[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationSummariesRequest {
  /**
   * The ID of the Amazon Web Services account for which to return recommendation summaries.
   *
   * If your account is the management account of an organization, use this parameter to specify the member account for which you want to return recommendation summaries.
   *
   * Only one account ID can be specified per request.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The token to advance to the next page of recommendation summaries.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of recommendation summaries to return with a single request.
   *
   * To retrieve the remaining results, make another request with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes the performance risk ratings for a given resource type.
 *
 * Resources with a `high` or `medium` rating are at risk of not meeting the performance needs of their workloads, while resources with a `low` rating are performing well in their workloads.
 *
 * @public
 */
export interface CurrentPerformanceRiskRatings {
  /**
   * A count of the applicable resource types with a high performance risk rating.
   *
   * @public
   */
  high?: number | undefined;

  /**
   * A count of the applicable resource types with a medium performance risk rating.
   *
   * @public
   */
  medium?: number | undefined;

  /**
   * A count of the applicable resource types with a low performance risk rating.
   *
   * @public
   */
  low?: number | undefined;

  /**
   * A count of the applicable resource types with a very low performance risk rating.
   *
   * @public
   */
  veryLow?: number | undefined;
}

/**
 * Describes the findings summary of the idle resources.
 *
 * @public
 */
export interface IdleSummary {
  /**
   * The name of the finding group for the idle resources.
   *
   * @public
   */
  name?: IdleFinding | undefined;

  /**
   * The count of idle resources in the finding group.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * The estimated monthly savings after you adjust the configurations of your instances running on the inferred workload types to the recommended configurations. If the `inferredWorkloadTypes` list contains multiple entries, then the savings are the sum of the monthly savings from instances that run the exact combination of the inferred workload types.
 *
 * @public
 */
export interface InferredWorkloadSaving {
  /**
   * The applications that might be running on the instance as inferred by Compute Optimizer.
   *
   * Compute Optimizer can infer if one of the following applications might be running on the instance:
   *
   * - `AmazonEmr` - Infers that Amazon EMR might be running on the instance.
   * - `ApacheCassandra` - Infers that Apache Cassandra might be running on the instance.
   * - `ApacheHadoop` - Infers that Apache Hadoop might be running on the instance.
   * - `Memcached` - Infers that Memcached might be running on the instance.
   * - `NGINX` - Infers that NGINX might be running on the instance.
   * - `PostgreSql` - Infers that PostgreSQL might be running on the instance.
   * - `Redis` - Infers that Redis might be running on the instance.
   * - `Kafka` - Infers that Kafka might be running on the instance.
   * - `SQLServer` - Infers that SQLServer might be running on the instance.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;

  /**
   * An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given resource. This is based on the On-Demand instance pricing.
   *
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * A summary of a finding reason code.
 *
 * @public
 */
export interface ReasonCodeSummary {
  /**
   * The name of the finding reason code.
   *
   * @public
   */
  name?: FindingReasonCode | undefined;

  /**
   * The value of the finding reason code summary.
   *
   * @public
   */
  value?: number | undefined;
}

/**
 * The summary of a recommendation.
 *
 * @public
 */
export interface Summary {
  /**
   * The finding classification of the recommendation.
   *
   * @public
   */
  name?: Finding | undefined;

  /**
   * The value of the recommendation summary.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * An array of objects that summarize a finding reason code.
   *
   * @public
   */
  reasonCodeSummaries?: ReasonCodeSummary[] | undefined;
}

/**
 * A summary of a recommendation.
 *
 * @public
 */
export interface RecommendationSummary {
  /**
   * An array of objects that describe a recommendation summary.
   *
   * @public
   */
  summaries?: Summary[] | undefined;

  /**
   * Describes the findings summary of the idle resources.
   *
   * @public
   */
  idleSummaries?: IdleSummary[] | undefined;

  /**
   * The resource type that the recommendation summary applies to.
   *
   * @public
   */
  recommendationResourceType?: RecommendationSourceType | undefined;

  /**
   * The Amazon Web Services account ID of the recommendation summary.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that describes the savings opportunity for a given resource type. Savings opportunity includes the estimated monthly savings amount and percentage.
   *
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  idleSavingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * Describes the savings opportunity for recommendations of a given resource type or for the recommendation option of an individual resource.
   *
   * Savings opportunity represents the estimated monthly savings you can achieve by implementing a given Compute Optimizer recommendation.
   *
   * > **Important:** Savings opportunity data requires that you opt in to Cost Explorer, as well as activate **Receive Amazon EC2 resource recommendations** in the Cost Explorer preferences page. That creates a connection between Cost Explorer and Compute Optimizer. With this connection, Cost Explorer generates savings estimates considering the price of existing resources, the price of recommended resources, and historical usage data. Estimated monthly savings reflects the projected dollar savings associated with each of the recommendations generated. For more information, see [Enabling Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html) and [Optimizing your cost with Rightsizing Recommendations](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html) in the *Cost Management User Guide*.
   *
   * @public
   */
  aggregatedSavingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * An object that describes the performance risk ratings for a given resource type.
   *
   * @public
   */
  currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings | undefined;

  /**
   * An array of objects that describes the estimated monthly saving amounts for the instances running on the specified `inferredWorkloadTypes`. The array contains the top five savings opportunites for the instances that run inferred workload types.
   *
   * @public
   */
  inferredWorkloadSavings?: InferredWorkloadSaving[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationSummariesResponse {
  /**
   * The token to use to advance to the next page of recommendation summaries.
   *
   * This value is null when there are no more pages of recommendation summaries to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of objects that summarize a recommendation.
   *
   * @public
   */
  recommendationSummaries?: RecommendationSummary[] | undefined;
}

/**
 * The preference to control which resource type values are considered when generating rightsizing recommendations. You can specify this preference as a combination of include and exclude lists. You must specify either an `includeList` or `excludeList`. If the preference is an empty set of resource type values, an error occurs. For more information, see [Rightsizing recommendation preferences](https://docs.aws.amazon.com/compute-optimizer/latest/ug/rightsizing-preferences.html) in the *Compute Optimizer User Guide*.
 *
 * > **Note:**
 * >
 * > - This preference is only available for the Amazon EC2 instance and Auto Scaling group resource types.
 * > - Compute Optimizer only supports the customization of `Ec2InstanceTypes`.
 *
 * @public
 */
export interface PreferredResource {
  /**
   * The type of preferred resource to customize.
   *
   * > **Note:** Compute Optimizer only supports the customization of `Ec2InstanceTypes`.
   *
   * @public
   */
  name?: PreferredResourceName | undefined;

  /**
   * The preferred resource type values to include in the recommendation candidates. You can specify the exact resource type value, such as m5.large, or use wild card expressions, such as m5. If this isn’t specified, all supported resources are included by default. You can specify up to 1000 values in this list.
   *
   * @public
   */
  includeList?: string[] | undefined;

  /**
   * The preferred resource type values to exclude from the recommendation candidates. If this isn’t specified, all supported resources are included by default. You can specify up to 1000 values in this list.
   *
   * @public
   */
  excludeList?: string[] | undefined;
}

/**
 * @public
 */
export interface PutRecommendationPreferencesRequest {
  /**
   * The target resource type of the recommendation preference to create.
   *
   * The `Ec2Instance` option encompasses standalone instances and instances that are part of Auto Scaling groups. The `AutoScalingGroup` option encompasses only instances that are part of an Auto Scaling group.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * An object that describes the scope of the recommendation preference to create.
   *
   * You can create recommendation preferences at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see [Activating enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * > **Note:** You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of `ResourceArn` and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances.
   *
   * @public
   */
  scope?: Scope | undefined;

  /**
   * The status of the enhanced infrastructure metrics recommendation preference to create or update.
   *
   * Specify the `Active` status to activate the preference, or specify `Inactive` to deactivate the preference.
   *
   * For more information, see [Enhanced infrastructure metrics](https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * The status of the inferred workload types recommendation preference to create or update.
   *
   * > **Note:** The inferred workload type feature is active by default. To deactivate it, create a recommendation preference.
   *
   * Specify the `Inactive` status to deactivate the feature, or specify `Active` to activate it.
   *
   * For more information, see [Inferred workload types](https://docs.aws.amazon.com/compute-optimizer/latest/ug/inferred-workload-types.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * The provider of the external metrics recommendation preference to create or update.
   *
   * Specify a valid provider in the `source` field to activate the preference. To delete this preference, see the DeleteRecommendationPreferences action.
   *
   * This preference can only be set for the `Ec2Instance` resource type.
   *
   * For more information, see [External metrics ingestion](https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed. When this preference isn't specified, we use the default value `DAYS_14`.
   *
   * You can only set this preference for the Amazon EC2 instance, Auto Scaling group, Amazon EBS volume, Amazon ECS service on Fargate, Amazon RDS DB instance, and Aurora DB cluster storage resource types.
   *
   * > **Note:**
   * >
   * > - Lookback period preferences for Amazon EC2 instances, Amazon EBS volumes, Amazon ECS services, Amazon RDS DB instances, and Aurora DB cluster storage resource types can be set at the organization, account, and resource levels.
   * > - Auto Scaling group lookback preferences can only be set at the resource level.
   * > - Amazon EBS volume lookback preferences can be set at the organization, account, and resource levels.
   * > - Amazon ECS service on Fargate lookback preferences can be set at the organization, account, and resource levels.
   * > - Amazon RDS DB instance lookback preferences can be set at the organization, account, and resource levels.
   * > - Aurora DB cluster storage lookback preferences can be set at the organization, account, and resource levels.
   * > - Changing the lookback period for Amazon EBS volumes to 14 days does not affect the 32-day lookback period used to determine whether an Amazon EBS volume is unattached.
   *
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom. When this preference isn't specified, we use the following default values.
   *
   * CPU utilization:
   *
   * - `P99_5` for threshold
   * - `PERCENT_20` for headroom
   *
   * Memory utilization:
   *
   * - `PERCENT_20` for headroom
   *
   * > **Note:**
   * >
   * > - You can only set CPU and memory utilization preferences for the Amazon EC2 instance resource type.
   * > - The threshold setting isn’t available for memory utilization.
   *
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * The preference to control which resource type values are considered when generating rightsizing recommendations. You can specify this preference as a combination of include and exclude lists. You must specify either an `includeList` or `excludeList`. If the preference is an empty set of resource type values, an error occurs.
   *
   * > **Note:** You can only set this preference for the Amazon EC2 instance, Auto Scaling group, Amazon EBS volume, Amazon ECS service, Amazon RDS DB instance, and Aurora DB cluster storage resource types.
   *
   * @public
   */
  preferredResources?: PreferredResource[] | undefined;

  /**
   * The status of the savings estimation mode preference to create or update.
   *
   * Specify the `AfterDiscounts` status to activate the preference, or specify `BeforeDiscounts` to deactivate the preference.
   *
   * Only the account manager or delegated administrator of your organization can activate this preference.
   *
   * For more information, see [Savings estimation mode](https://docs.aws.amazon.com/compute-optimizer/latest/ug/savings-estimation-mode.html) in the *Compute Optimizer User Guide*.
   *
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;
}

/**
 * @public
 */
export interface PutRecommendationPreferencesResponse {}

/**
 * @public
 */
export interface UpdateEnrollmentStatusRequest {
  /**
   * The new enrollment status of the account.
   *
   * The following status options are available:
   *
   * - `Active` - Opts in your account to the Compute Optimizer service. Compute Optimizer begins analyzing the configuration and utilization metrics of your Amazon Web Services resources after you opt in. For more information, see [Metrics analyzed by Compute Optimizer](https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html) in the *Compute Optimizer User Guide*.
   * - `Inactive` - Opts out your account from the Compute Optimizer service. Your account's recommendations and related metrics data will be deleted from Compute Optimizer after you opt out.
   *
   * > **Note:** The `Pending` and `Failed` options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Indicates whether to enroll member accounts of the organization if the account is the management account of an organization.
   *
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * The enrollment status of the account.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The reason for the enrollment status of the account. For example, an account might show a status of `Pending` because member accounts of an organization require more time to be enrolled in the service.
   *
   * @public
   */
  statusReason?: string | undefined;
}
