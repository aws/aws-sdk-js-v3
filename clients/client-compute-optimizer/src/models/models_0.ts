// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComputeOptimizerServiceException as __BaseException } from "./ComputeOptimizerServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "Active",
  FAILED: "Failed",
  INACTIVE: "Inactive",
  PENDING: "Pending",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Describes the enrollment status of an organization's member accounts in Compute Optimizer.</p>
 * @public
 */
export interface AccountEnrollmentStatus {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The account enrollment status.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The reason for the account enrollment status.</p>
   *          <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Unix epoch timestamp, in seconds, of when the account enrollment status was last
   *             updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const AllocationStrategy = {
  LOWEST_PRICE: "LowestPrice",
  PRIORITIZED: "Prioritized",
} as const;

/**
 * @public
 */
export type AllocationStrategy = (typeof AllocationStrategy)[keyof typeof AllocationStrategy];

/**
 * @public
 * @enum
 */
export const AsgType = {
  MIXED_INSTANCE_TYPE: "MixedInstanceTypes",
  SINGLE_INSTANCE_TYPE: "SingleInstanceType",
} as const;

/**
 * @public
 */
export type AsgType = (typeof AsgType)[keyof typeof AsgType];

/**
 * @public
 * @enum
 */
export const AutoScalingConfiguration = {
  TARGET_TRACKING_SCALING_CPU: "TargetTrackingScalingCpu",
  TARGET_TRACKING_SCALING_MEMORY: "TargetTrackingScalingMemory",
} as const;

/**
 * @public
 */
export type AutoScalingConfiguration = (typeof AutoScalingConfiguration)[keyof typeof AutoScalingConfiguration];

/**
 * <p>Describes the configuration of an EC2 Auto Scaling group.</p>
 * @public
 */
export interface AutoScalingGroupConfiguration {
  /**
   * <p>The desired capacity, or number of instances, for the EC2 Auto Scaling group.</p>
   * @public
   */
  desiredCapacity?: number | undefined;

  /**
   * <p>The minimum size, or minimum number of instances, for the EC2 Auto Scaling
   *             group.</p>
   * @public
   */
  minSize?: number | undefined;

  /**
   * <p>The maximum size, or maximum number of instances, for the EC2 Auto Scaling
   *             group.</p>
   * @public
   */
  maxSize?: number | undefined;

  /**
   * <p>The instance type for the EC2 Auto Scaling group.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>
   *             Describes the allocation strategy that the EC2 Auto Scaling group uses. This field is only available for EC2 Auto Scaling groups with mixed instance types.
   *         </p>
   * @public
   */
  allocationStrategy?: AllocationStrategy | undefined;

  /**
   * <p>
   *             Describes the projected percentage reduction in instance hours after adopting the recommended configuration. This field is only available for EC2 Auto Scaling groups with scaling policies.
   *         </p>
   * @public
   */
  estimatedInstanceHourReductionPercentage?: number | undefined;

  /**
   * <p>
   *             Describes whether the EC2 Auto Scaling group has a single instance type or a mixed instance type configuration.
   *         </p>
   * @public
   */
  type?: AsgType | undefined;

  /**
   * <p>
   *             List the instance types within an EC2 Auto Scaling group that has mixed instance types.
   *         </p>
   * @public
   */
  mixedInstanceTypes?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Currency = {
  CNY: "CNY",
  USD: "USD",
} as const;

/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * <p>
 *             An object that describes the estimated monthly savings  possible by adopting Compute Optimizer’s Auto Scaling group recommendations. This is based on the
 *             Savings Plans and Reserved Instances discounts.
 *         </p>
 * @public
 */
export interface AutoScalingGroupEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the GPU accelerators for the instance type.
 *         </p>
 * @public
 */
export interface Gpu {
  /**
   * <p>
   *             The number of GPUs for the instance type.
   *         </p>
   * @public
   */
  gpuCount?: number | undefined;

  /**
   * <p>
   *             The total size of the memory for the GPU accelerators for the instance type, in MiB.
   *         </p>
   * @public
   */
  gpuMemorySizeInMiB?: number | undefined;
}

/**
 * <p>
 *             Describes the GPU accelerator settings for the instance type.
 *         </p>
 * @public
 */
export interface GpuInfo {
  /**
   * <p>
   *             Describes the GPU accelerators for the instance type.
   *         </p>
   * @public
   */
  gpus?: Gpu[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrentPerformanceRisk = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  VERY_LOW: "VeryLow",
} as const;

/**
 * @public
 */
export type CurrentPerformanceRisk = (typeof CurrentPerformanceRisk)[keyof typeof CurrentPerformanceRisk];

/**
 * @public
 * @enum
 */
export const CpuVendorArchitecture = {
  AWS_ARM64: "AWS_ARM64",
  CURRENT: "CURRENT",
} as const;

/**
 * @public
 */
export type CpuVendorArchitecture = (typeof CpuVendorArchitecture)[keyof typeof CpuVendorArchitecture];

/**
 * @public
 * @enum
 */
export const EnhancedInfrastructureMetrics = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type EnhancedInfrastructureMetrics =
  (typeof EnhancedInfrastructureMetrics)[keyof typeof EnhancedInfrastructureMetrics];

/**
 * @public
 * @enum
 */
export const ExternalMetricsSource = {
  DATADOG: "Datadog",
  DYNATRACE: "Dynatrace",
  INSTANA: "Instana",
  NEWRELIC: "NewRelic",
} as const;

/**
 * @public
 */
export type ExternalMetricsSource = (typeof ExternalMetricsSource)[keyof typeof ExternalMetricsSource];

/**
 * <p> Describes the external metrics preferences for EC2 rightsizing recommendations.
 *         </p>
 * @public
 */
export interface ExternalMetricsPreference {
  /**
   * <p> Contains the source options for external metrics preferences. </p>
   * @public
   */
  source?: ExternalMetricsSource | undefined;
}

/**
 * @public
 * @enum
 */
export const InferredWorkloadTypesPreference = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;

/**
 * @public
 */
export type InferredWorkloadTypesPreference =
  (typeof InferredWorkloadTypesPreference)[keyof typeof InferredWorkloadTypesPreference];

/**
 * @public
 * @enum
 */
export const LookBackPeriodPreference = {
  DAYS_14: "DAYS_14",
  DAYS_32: "DAYS_32",
  DAYS_93: "DAYS_93",
} as const;

/**
 * @public
 */
export type LookBackPeriodPreference = (typeof LookBackPeriodPreference)[keyof typeof LookBackPeriodPreference];

/**
 * @public
 * @enum
 */
export const PreferredResourceName = {
  EC2_INSTANCE_TYPES: "Ec2InstanceTypes",
} as const;

/**
 * @public
 */
export type PreferredResourceName = (typeof PreferredResourceName)[keyof typeof PreferredResourceName];

/**
 * <p>
 *             Describes the effective preferred resources that Compute Optimizer considers as rightsizing recommendation candidates.
 *         </p>
 *          <note>
 *             <p>Compute Optimizer only supports Amazon EC2 instance types.</p>
 *          </note>
 * @public
 */
export interface EffectivePreferredResource {
  /**
   * <p>
   *             The name of the preferred resource list.
   *         </p>
   * @public
   */
  name?: PreferredResourceName | undefined;

  /**
   * <p>
   *             The list of preferred resource values that you want considered as rightsizing recommendation candidates.
   *         </p>
   * @public
   */
  includeList?: string[] | undefined;

  /**
   * <p>
   *             The expanded version of your preferred resource's include list.
   *         </p>
   * @public
   */
  effectiveIncludeList?: string[] | undefined;

  /**
   * <p>
   *             The list of preferred resources values that you want excluded from rightsizing recommendation candidates.
   *         </p>
   * @public
   */
  excludeList?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceSavingsEstimationModeSource = {
  COST_EXPLORER_RIGHTSIZING: "CostExplorerRightsizing",
  COST_OPTIMIZATION_HUB: "CostOptimizationHub",
  PUBLIC_PRICING: "PublicPricing",
} as const;

/**
 * @public
 */
export type InstanceSavingsEstimationModeSource =
  (typeof InstanceSavingsEstimationModeSource)[keyof typeof InstanceSavingsEstimationModeSource];

/**
 * <p>
 *             Describes the savings estimation mode used for calculating savings opportunity for Amazon EC2 instances.
 *         </p>
 * @public
 */
export interface InstanceSavingsEstimationMode {
  /**
   * <p>
   *             Describes the source for calculating the savings opportunity for Amazon EC2 instances.
   *         </p>
   * @public
   */
  source?: InstanceSavingsEstimationModeSource | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomizableMetricName = {
  CPU_UTILIZATION: "CpuUtilization",
  MEMORY_UTILIZATION: "MemoryUtilization",
} as const;

/**
 * @public
 */
export type CustomizableMetricName = (typeof CustomizableMetricName)[keyof typeof CustomizableMetricName];

/**
 * @public
 * @enum
 */
export const CustomizableMetricHeadroom = {
  PERCENT_0: "PERCENT_0",
  PERCENT_10: "PERCENT_10",
  PERCENT_20: "PERCENT_20",
  PERCENT_30: "PERCENT_30",
} as const;

/**
 * @public
 */
export type CustomizableMetricHeadroom = (typeof CustomizableMetricHeadroom)[keyof typeof CustomizableMetricHeadroom];

/**
 * @public
 * @enum
 */
export const CustomizableMetricThreshold = {
  P90: "P90",
  P95: "P95",
  P99_5: "P99_5",
} as const;

/**
 * @public
 */
export type CustomizableMetricThreshold =
  (typeof CustomizableMetricThreshold)[keyof typeof CustomizableMetricThreshold];

/**
 * <p>
 *             Defines the various metric parameters that can be customized, such as threshold and headroom.
 *         </p>
 * @public
 */
export interface CustomizableMetricParameters {
  /**
   * <p>
   *             The threshold value used for the specified metric parameter.
   *         </p>
   *          <note>
   *             <p>You can only specify the threshold value for CPU utilization.</p>
   *          </note>
   * @public
   */
  threshold?: CustomizableMetricThreshold | undefined;

  /**
   * <p>
   *             The headroom value in percentage used for the specified metric parameter.
   *         </p>
   *          <p>The following lists the valid values for CPU and memory utilization.</p>
   *          <ul>
   *             <li>
   *                <p>CPU utilization: <code>PERCENT_30 | PERCENT_20 | PERCENT_0</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Memory utilization: <code>PERCENT_30 | PERCENT_20 | PERCENT_10</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  headroom?: CustomizableMetricHeadroom | undefined;
}

/**
 * <p>
 *             The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom.
 *         </p>
 *          <note>
 *             <p>This preference is only available for the Amazon EC2 instance resource type.</p>
 *          </note>
 * @public
 */
export interface UtilizationPreference {
  /**
   * <p>
   *             The name of the resource utilization metric name to customize.
   *         </p>
   * @public
   */
  metricName?: CustomizableMetricName | undefined;

  /**
   * <p>
   *             The parameters to set when customizing the resource utilization thresholds.
   *         </p>
   * @public
   */
  metricParameters?: CustomizableMetricParameters | undefined;
}

/**
 * <p>Describes the effective recommendation preferences for a resource.</p>
 * @public
 */
export interface EffectiveRecommendationPreferences {
  /**
   * <p>Describes the CPU vendor and architecture for an instance or Auto Scaling group
   *             recommendations.</p>
   *          <p>For example, when you specify <code>AWS_ARM64</code> with:</p>
   *          <ul>
   *             <li>
   *                <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     returns recommendations that consist of Graviton instance types only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton instance type
   *                     recommendations only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     exports recommendations that consist of Graviton instance types only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;

  /**
   * <p>Describes the activation status of the enhanced infrastructure metrics
   *             preference.</p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh, and a status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * <p>Describes the activation status of the inferred workload types preference.</p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh. A status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.</p>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * <p> An object that describes the external metrics recommendation preference. </p>
   *          <p> If the preference is applied in the latest recommendation refresh, an object with a
   *             valid <code>source</code> value appears in the response. If the preference isn't applied
   *             to the recommendations already, then this object doesn't appear in the response. </p>
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * <p>
   *             The number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *         </p>
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * <p>
   *             The resource’s CPU and memory utilization preferences, such as threshold and headroom, that
   *             are used to generate rightsizing recommendations.
   *         </p>
   *          <note>
   *             <p>This preference is only available for the Amazon EC2 instance resource type.</p>
   *          </note>
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * <p>
   *             The resource type values that are considered as candidates when generating rightsizing recommendations.
   *         </p>
   * @public
   */
  preferredResources?: EffectivePreferredResource[] | undefined;

  /**
   * <p>
   *             Describes the savings estimation mode applied for calculating savings opportunity for a resource.
   *         </p>
   * @public
   */
  savingsEstimationMode?: InstanceSavingsEstimationMode | undefined;
}

/**
 * @public
 * @enum
 */
export const Finding = {
  NOT_OPTIMIZED: "NotOptimized",
  OPTIMIZED: "Optimized",
  OVER_PROVISIONED: "Overprovisioned",
  UNDER_PROVISIONED: "Underprovisioned",
} as const;

/**
 * @public
 */
export type Finding = (typeof Finding)[keyof typeof Finding];

/**
 * @public
 * @enum
 */
export const InferredWorkloadType = {
  AMAZON_EMR: "AmazonEmr",
  APACHE_CASSANDRA: "ApacheCassandra",
  APACHE_HADOOP: "ApacheHadoop",
  KAFKA: "Kafka",
  MEMCACHED: "Memcached",
  NGINX: "Nginx",
  POSTGRE_SQL: "PostgreSql",
  REDIS: "Redis",
  SQLSERVER: "SQLServer",
} as const;

/**
 * @public
 */
export type InferredWorkloadType = (typeof InferredWorkloadType)[keyof typeof InferredWorkloadType];

/**
 * @public
 * @enum
 */
export const MigrationEffort = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  VERY_LOW: "VeryLow",
} as const;

/**
 * @public
 */
export type MigrationEffort = (typeof MigrationEffort)[keyof typeof MigrationEffort];

/**
 * @public
 * @enum
 */
export const MetricName = {
  CPU: "Cpu",
  DISK_READ_BYTES_PER_SECOND: "DISK_READ_BYTES_PER_SECOND",
  DISK_READ_OPS_PER_SECOND: "DISK_READ_OPS_PER_SECOND",
  DISK_WRITE_BYTES_PER_SECOND: "DISK_WRITE_BYTES_PER_SECOND",
  DISK_WRITE_OPS_PER_SECOND: "DISK_WRITE_OPS_PER_SECOND",
  EBS_READ_BYTES_PER_SECOND: "EBS_READ_BYTES_PER_SECOND",
  EBS_READ_OPS_PER_SECOND: "EBS_READ_OPS_PER_SECOND",
  EBS_WRITE_BYTES_PER_SECOND: "EBS_WRITE_BYTES_PER_SECOND",
  EBS_WRITE_OPS_PER_SECOND: "EBS_WRITE_OPS_PER_SECOND",
  GPU_MEMORY_PERCENTAGE: "GPU_MEMORY_PERCENTAGE",
  GPU_PERCENTAGE: "GPU_PERCENTAGE",
  MEMORY: "Memory",
  NETWORK_IN_BYTES_PER_SECOND: "NETWORK_IN_BYTES_PER_SECOND",
  NETWORK_OUT_BYTES_PER_SECOND: "NETWORK_OUT_BYTES_PER_SECOND",
  NETWORK_PACKETS_IN_PER_SECOND: "NETWORK_PACKETS_IN_PER_SECOND",
  NETWORK_PACKETS_OUT_PER_SECOND: "NETWORK_PACKETS_OUT_PER_SECOND",
} as const;

/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
} as const;

/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2
 *             instance.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 * @public
 */
export interface UtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *          <p>The following utilization metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cpu</code> - The percentage of allocated EC2 compute units that are
   *                     currently in use on the instance. This metric identifies the processing power
   *                     required to run an application on the instance.</p>
   *                <p>Depending on the instance type, tools in your operating system can show a
   *                     lower percentage than CloudWatch when the instance is not allocated a full
   *                     processor core.</p>
   *                <p>Units: Percent</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> - The percentage of memory that is currently in use on the
   *                     instance. This metric identifies the amount of memory required to run an
   *                     application on the instance.</p>
   *                <p>Units: Percent</p>
   *                <note>
   *                   <p>The <code>Memory</code> metric is returned only for resources that have
   *                         the unified CloudWatch agent installed on them. For more information,
   *                         see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU</code> - The percentage of allocated GPUs that currently run on
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU_MEMORY</code> - The percentage of total GPU memory that currently runs on
   *                     the instance.</p>
   *                <note>
   *                   <p>The <code>GPU</code> and <code>GPU_MEMORY</code> metrics are only returned for resources
   *                         with the unified CloudWatch Agent installed on them. For more information, see
   *                         <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent">Enabling NVIDIA GPU
   *                             utilization with the CloudWatch Agent</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS_READ_OPS_PER_SECOND</code> - The completed read operations from all
   *                     EBS volumes attached to the instance in a specified period of time.</p>
   *                <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS_WRITE_OPS_PER_SECOND</code> - The completed write operations to all
   *                     EBS volumes attached to the instance in a specified period of time.</p>
   *                <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS_READ_BYTES_PER_SECOND</code> - The bytes read from all EBS volumes
   *                     attached to the instance in a specified period of time.</p>
   *                <p>Unit: Bytes</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EBS_WRITE_BYTES_PER_SECOND</code> - The bytes written to all EBS volumes
   *                     attached to the instance in a specified period of time.</p>
   *                <p>Unit: Bytes</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISK_READ_OPS_PER_SECOND</code> - The completed read operations from all
   *                     instance store volumes available to the instance in a specified period of
   *                     time.</p>
   *                <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISK_WRITE_OPS_PER_SECOND</code> - The completed write operations from
   *                     all instance store volumes available to the instance in a specified period of
   *                     time.</p>
   *                <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISK_READ_BYTES_PER_SECOND</code> - The bytes read from all instance
   *                     store volumes available to the instance. This metric is used to determine the
   *                     volume of the data the application reads from the disk of the instance. This can
   *                     be used to determine the speed of the application.</p>
   *                <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISK_WRITE_BYTES_PER_SECOND</code> - The bytes written to all instance
   *                     store volumes available to the instance. This metric is used to determine the
   *                     volume of the data the application writes onto the disk of the instance. This
   *                     can be used to determine the speed of the application.</p>
   *                <p>If there are no instance store volumes, either the value is <code>0</code> or
   *                     the metric is not reported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_IN_BYTES_PER_SECOND</code> - The number of bytes received by the
   *                     instance on all network interfaces. This metric identifies the volume of
   *                     incoming network traffic to a single instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_OUT_BYTES_PER_SECOND</code> - The number of bytes sent out by
   *                     the instance on all network interfaces. This metric identifies the volume of
   *                     outgoing network traffic from a single instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_PACKETS_IN_PER_SECOND</code> - The number of packets received by
   *                     the instance on all network interfaces. This metric identifies the volume of
   *                     incoming traffic in terms of the number of packets on a single instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NETWORK_PACKETS_OUT_PER_SECOND</code> - The number of packets sent out
   *                     by the instance on all network interfaces. This metric identifies the volume of
   *                     outgoing traffic in terms of the number of packets on a single instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: MetricName | undefined;

  /**
   * <p>The statistic of the utilization metric.</p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * <p>The value of the utilization metric.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Describes the estimated monthly savings amount possible, based on On-Demand instance
 *             pricing, by adopting Compute Optimizer recommendations for a given resource.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the
 *                     <i>Compute Optimizer User Guide</i>.</p>
 * @public
 */
export interface EstimatedMonthlySavings {
  /**
   * <p>The currency of the estimated monthly
   *             savings.</p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>The value of the estimated monthly savings.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Describes the savings opportunity for recommendations of a given resource type or for
 *             the recommendation option of an individual resource.</p>
 *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
 *             implementing a given Compute Optimizer recommendation.</p>
 *          <important>
 *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
 *                 activate <b>Receive Amazon EC2 resource
 *                     recommendations</b> in the Cost Explorer preferences page. That
 *                 creates a connection between Cost Explorer and Compute Optimizer. With this
 *                 connection, Cost Explorer generates savings estimates considering the price of
 *                 existing resources, the price of recommended resources, and historical usage data.
 *                 Estimated monthly savings reflects the projected dollar savings associated with each
 *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
 *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
 *                     Guide</i>.</p>
 *          </important>
 * @public
 */
export interface SavingsOpportunity {
  /**
   * <p>The estimated monthly savings possible as a percentage of monthly cost by adopting
   *                 Compute Optimizer recommendations for a given resource.</p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given
   *             resource. This is based on the On-Demand instance pricing..</p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for Auto Scaling group recommendations after applying the Savings Plans and Reserved Instances discounts.
 *         </p>
 *          <p>Savings opportunity represents the estimated monthly savings you can achieve by implementing Compute Optimizer recommendations.</p>
 * @public
 */
export interface AutoScalingGroupSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost after applying the Savings Plans and Reserved Instances discounts. This saving can be
   *             achieved by adopting Compute Optimizer’s Auto Scaling group recommendations.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Auto Scaling group recommendations. This is based on the
   *             Savings Plans and Reserved Instances pricing discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: AutoScalingGroupEstimatedMonthlySavings | undefined;
}

/**
 * <p>Describes a recommendation option for an Auto Scaling group.</p>
 * @public
 */
export interface AutoScalingGroupRecommendationOption {
  /**
   * <p>An array of objects that describe an Auto Scaling group configuration.</p>
   * @public
   */
  configuration?: AutoScalingGroupConfiguration | undefined;

  /**
   * <p>
   *             Describes the GPU accelerator settings for the recommended instance type of the Auto Scaling group.
   *         </p>
   * @public
   */
  instanceGpuInfo?: GpuInfo | undefined;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.</p>
   *          <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *          </note>
   * @public
   */
  projectedUtilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * <p>The performance risk of the Auto Scaling group configuration
   *             recommendation.</p>
   *          <p>Performance risk indicates the likelihood of the recommended instance type not meeting
   *             the resource needs of your workload. Compute Optimizer calculates an individual
   *             performance risk score for each specification of the recommended instance, including
   *             CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput,
   *             and network PPS.
   *             The performance
   *             risk of the recommended instance is calculated as the maximum performance risk score
   *             across the analyzed resource specifications.</p>
   *          <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * <p>The rank of the Auto Scaling group recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>An object that describes the savings opportunity for the Auto Scaling group
   *             recommendation option. Savings opportunity includes the estimated monthly savings amount
   *             and percentage.</p>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             An object that describes the savings opportunity for the Auto Scaling group recommendation option that includes Savings Plans and Reserved Instances discounts.
   *             Savings opportunity includes the estimated monthly savings and percentage.
   *         </p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: AutoScalingGroupSavingsOpportunityAfterDiscounts | undefined;

  /**
   * <p>The level of effort required to migrate from the current instance type to the
   *             recommended instance type.</p>
   *          <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the
   *             inferred workload type and an Amazon Web Services Graviton instance type is recommended.
   *             The migration effort is <code>Medium</code> if a workload type couldn't be inferred but
   *             an Amazon Web Services Graviton instance type is recommended. The migration effort is
   *                 <code>VeryLow</code> if both the current and recommended instance types are of the
   *             same CPU architecture.</p>
   * @public
   */
  migrationEffort?: MigrationEffort | undefined;
}

/**
 * <p>Describes an Auto Scaling group recommendation.</p>
 * @public
 */
export interface AutoScalingGroupRecommendation {
  /**
   * <p>The Amazon Web Services account ID of the Auto Scaling group.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   * @public
   */
  autoScalingGroupArn?: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   * @public
   */
  autoScalingGroupName?: string | undefined;

  /**
   * <p>The finding classification of the Auto Scaling group.</p>
   *          <p>Findings for Auto Scaling groups include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—An Auto Scaling group is considered not optimized when Compute Optimizer identifies a
   *                     recommendation that can provide better performance for your workload.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An Auto Scaling
   *                     group is considered optimized when Compute Optimizer determines that the group
   *                     is correctly provisioned to run your workload based on the chosen instance type.
   *                     For optimized resources, Compute Optimizer might recommend a new generation
   *                     instance type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  finding?: Finding | undefined;

  /**
   * <p>An array of objects that describe the utilization metrics of the Auto Scaling
   *             group.</p>
   * @public
   */
  utilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the Auto Scaling group.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>An array of objects that describe the current configuration of the Auto Scaling
   *             group.</p>
   * @public
   */
  currentConfiguration?: AutoScalingGroupConfiguration | undefined;

  /**
   * <p>
   *             Describes the GPU accelerator settings for the current instance type of the Auto Scaling group.
   *         </p>
   * @public
   */
  currentInstanceGpuInfo?: GpuInfo | undefined;

  /**
   * <p>An array of objects that describe the recommendation options for the Auto Scaling
   *             group.</p>
   * @public
   */
  recommendationOptions?: AutoScalingGroupRecommendationOption[] | undefined;

  /**
   * <p>The timestamp of when the Auto Scaling group recommendation was last
   *             generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The risk of the current Auto Scaling group not meeting the performance needs of
   *             its workloads. The higher the risk, the more likely the current Auto Scaling group
   *             configuration has insufficient capacity and cannot meet workload requirements.</p>
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * <p>An object that describes the effective recommendation preferences for the Auto Scaling group.</p>
   * @public
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences | undefined;

  /**
   * <p>The applications that might be running on the instances in the Auto Scaling group
   *             as inferred by Compute Optimizer.</p>
   *          <p>Compute Optimizer can infer if one of the following applications might be running on
   *             the instances:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AmazonEmr</code> - Infers that Amazon EMR might be running on
   *                     the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheCassandra</code> - Infers that Apache Cassandra might be running
   *                     on the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheHadoop</code> - Infers that Apache Hadoop might be running on the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memcached</code> - Infers that Memcached might be running on the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NGINX</code> - Infers that NGINX might be running on the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PostgreSql</code> - Infers that PostgreSQL might be running on the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redis</code> - Infers that Redis might be running on the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Kafka</code> - Infers that Kafka might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SQLServer</code> - Infers that SQLServer might be running on the
   *                     instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationPreferenceName = {
  ENHANCED_INFRASTRUCTURE_METRICS: "EnhancedInfrastructureMetrics",
  EXTERNAL_METRICS_PREFERENCE: "ExternalMetricsPreference",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  LOOKBACK_PERIOD_PREFERENCE: "LookBackPeriodPreference",
  PREFERRED_RESOURCES: "PreferredResources",
  UTILIZATION_PREFERENCES: "UtilizationPreferences",
} as const;

/**
 * @public
 */
export type RecommendationPreferenceName =
  (typeof RecommendationPreferenceName)[keyof typeof RecommendationPreferenceName];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AURORA_DB_CLUSTER_STORAGE: "AuroraDBClusterStorage",
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EbsVolume",
  EC2_INSTANCE: "Ec2Instance",
  ECS_SERVICE: "EcsService",
  IDLE: "Idle",
  LAMBDA_FUNCTION: "LambdaFunction",
  LICENSE: "License",
  NOT_APPLICABLE: "NotApplicable",
  RDS_DB_INSTANCE: "RdsDBInstance",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ScopeName = {
  ACCOUNT_ID: "AccountId",
  ORGANIZATION: "Organization",
  RESOURCE_ARN: "ResourceArn",
} as const;

/**
 * @public
 */
export type ScopeName = (typeof ScopeName)[keyof typeof ScopeName];

/**
 * <p>Describes the scope of a recommendation preference.</p>
 *          <p>Recommendation preferences can be created at the organization level (for management
 *             accounts of an organization only), account level, and resource level. For more
 *             information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
 *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
 *                 Guide</i>.</p>
 *          <note>
 *             <p>You cannot create recommendation preferences for Auto Scaling groups at the
 *                 organization and account levels. You can create recommendation preferences for
 *                     Auto Scaling groups only at the resource level by specifying a scope name
 *                 of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon
 *                 Resource Name (ARN). This will configure the preference for all instances that are
 *                 part of the specified Auto Scaling group. You also cannot create recommendation
 *                 preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for
 *                 standalone instances.</p>
 *          </note>
 * @public
 */
export interface Scope {
  /**
   * <p>The name of the scope.</p>
   *          <p>The following scopes are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Organization</code> - Specifies that the recommendation preference
   *                     applies at the organization level, for all member accounts of an
   *                     organization.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountId</code> - Specifies that the recommendation preference applies
   *                     at the account level, for all resources of a given resource type in an
   *                     account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceArn</code> - Specifies that the recommendation preference
   *                     applies at the individual resource level.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: ScopeName | undefined;

  /**
   * <p>The value of the scope.</p>
   *          <p>If you specified the <code>name</code> of the scope as:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Organization</code> - The <code>value</code> must be
   *                         <code>ALL_ACCOUNTS</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AccountId</code> - The <code>value</code> must be a 12-digit Amazon Web Services account ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceArn</code> - The <code>value</code> must be the Amazon Resource
   *                     Name (ARN) of an EC2 instance or an Auto Scaling group.</p>
   *             </li>
   *          </ul>
   *          <p>Only EC2 instance and Auto Scaling group ARNs are currently supported.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationPreferencesRequest {
  /**
   * <p>The target resource type of the recommendation preference to delete.</p>
   *          <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances
   *             that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option
   *             encompasses only instances that are part of an Auto Scaling group.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>An object that describes the scope of the recommendation preference to delete.</p>
   *          <p>You can delete recommendation preferences that are created at the organization level
   *             (for management accounts of an organization only), account level, and resource level.
   *             For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The name of the recommendation preference to delete.</p>
   * @public
   */
  recommendationPreferenceNames: RecommendationPreferenceName[] | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationPreferencesResponse {}

/**
 * <p>An internal error has occurred. Try your call again.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The value supplied for the input parameter is out of range or not valid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 * @public
 */
export class MissingAuthenticationToken extends __BaseException {
  readonly name: "MissingAuthenticationToken" = "MissingAuthenticationToken";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingAuthenticationToken, __BaseException>) {
    super({
      name: "MissingAuthenticationToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingAuthenticationToken.prototype);
  }
}

/**
 * <p>The account is not opted in to Compute Optimizer.</p>
 * @public
 */
export class OptInRequiredException extends __BaseException {
  readonly name: "OptInRequiredException" = "OptInRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptInRequiredException, __BaseException>) {
    super({
      name: "OptInRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptInRequiredException.prototype);
  }
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const JobFilterName = {
  JOB_STATUS: "JobStatus",
  RESOURCE_TYPE: "ResourceType",
} as const;

/**
 * @public
 */
export type JobFilterName = (typeof JobFilterName)[keyof typeof JobFilterName];

/**
 * <p>Describes a filter that returns a more specific list of recommendation export jobs.
 *             Use this filter with the <a>DescribeRecommendationExportJobs</a>
 *             action.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with
 *             the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 * @public
 */
export interface JobFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type
   *             (for example, <code>Ec2Instance</code>).</p>
   *          <p>Specify <code>JobStatus</code> to return export jobs with a specific status (e.g,
   *                 <code>Complete</code>).</p>
   * @public
   */
  name?: JobFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter:</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you
   *                     specify the <code>name</code> parameter as <code>ResourceType</code>. There is
   *                     no filter for EBS volumes because volume recommendations cannot be exported at
   *                     this time.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>Queued</code>, <code>InProgress</code>, <code>Complete</code>,
   *                     or <code>Failed</code> if you specify the <code>name</code> parameter as
   *                         <code>JobStatus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationExportJobsRequest {
  /**
   * <p>The identification numbers of the export jobs to return.</p>
   *          <p>An export job ID is returned when you create an export using the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions.</p>
   *          <p>All export jobs created in the last seven days are returned if this parameter is
   *             omitted.</p>
   * @public
   */
  jobIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of export
   *             jobs.</p>
   * @public
   */
  filters?: JobFilter[] | undefined;

  /**
   * <p>The token to advance to the next page of export jobs.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of export jobs to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
 *             object keys of a recommendations export file, and its associated metadata file.</p>
 * @public
 */
export interface S3Destination {
  /**
   * <p>The name of the Amazon S3 bucket used as the destination of an export
   *             file.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The Amazon S3 bucket key of an export file.</p>
   *          <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The Amazon S3 bucket key of a metadata file.</p>
   *          <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>
   * @public
   */
  metadataKey?: string | undefined;
}

/**
 * <p>Describes the destination of the recommendations export and metadata files.</p>
 * @public
 */
export interface ExportDestination {
  /**
   * <p>An object that describes the destination Amazon Simple Storage Service (Amazon S3)
   *             bucket name and object keys of a recommendations export file, and its associated
   *             metadata file.</p>
   * @public
   */
  s3?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETE: "Complete",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  QUEUED: "Queued",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>Describes a recommendation export job.</p>
 *          <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your
 *             recommendation export jobs.</p>
 *          <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
 *             recommendations.</p>
 * @public
 */
export interface RecommendationExportJob {
  /**
   * <p>The identification number of the export job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>An object that describes the destination of the export file.</p>
   * @public
   */
  destination?: ExportDestination | undefined;

  /**
   * <p>The resource type of the exported recommendations.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The status of the export job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The timestamp of when the export job was created.</p>
   * @public
   */
  creationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp of when the export job was last updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The reason for an export job failure.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecommendationExportJobsResponse {
  /**
   * <p>An array of objects that describe recommendation export jobs.</p>
   * @public
   */
  recommendationExportJobs?: RecommendationExportJob[] | undefined;

  /**
   * <p>The token to use to advance to the next page of export jobs.</p>
   *          <p>This value is null when there are no more pages of export jobs to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableAutoScalingGroupField = {
  ACCOUNT_ID: "AccountId",
  AUTO_SCALING_GROUP_ARN: "AutoScalingGroupArn",
  AUTO_SCALING_GROUP_NAME: "AutoScalingGroupName",
  CURRENT_CONFIGURATION_ALLOCATION_STRATEGY: "CurrentConfigurationAllocationStrategy",
  CURRENT_CONFIGURATION_DESIRED_CAPACITY: "CurrentConfigurationDesiredCapacity",
  CURRENT_CONFIGURATION_INSTANCE_TYPE: "CurrentConfigurationInstanceType",
  CURRENT_CONFIGURATION_MAX_SIZE: "CurrentConfigurationMaxSize",
  CURRENT_CONFIGURATION_MIN_SIZE: "CurrentConfigurationMinSize",
  CURRENT_CONFIGURATION_MIXED_INSTANCE_TYPES: "CurrentConfigurationMixedInstanceTypes",
  CURRENT_CONFIGURATION_TYPE: "CurrentConfigurationType",
  CURRENT_INSTANCE_GPU_INFO: "CurrentInstanceGpuInfo",
  CURRENT_MEMORY: "CurrentMemory",
  CURRENT_NETWORK: "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE: "CurrentOnDemandPrice",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE: "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE: "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE: "CurrentStorage",
  CURRENT_VCPUS: "CurrentVCpus",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES:
    "EffectiveRecommendationPreferencesCpuVendorArchitectures",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS:
    "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_INFERRED_WORKLOAD_TYPES:
    "EffectiveRecommendationPreferencesInferredWorkloadTypes",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD: "EffectiveRecommendationPreferencesLookBackPeriod",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_PREFERRED_RESOURCES: "EffectiveRecommendationPreferencesPreferredResources",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  FINDING: "Finding",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_ALLOCATION_STRATEGY: "RecommendationOptionsConfigurationAllocationStrategy",
  RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY: "RecommendationOptionsConfigurationDesiredCapacity",
  RECOMMENDATION_OPTIONS_CONFIGURATION_ESTIMATED_INSTANCE_HOUR_REDUCTION_PERCENTAGE:
    "RecommendationOptionsConfigurationEstimatedInstanceHourReductionPercentage",
  RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE: "RecommendationOptionsConfigurationInstanceType",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE: "RecommendationOptionsConfigurationMaxSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE: "RecommendationOptionsConfigurationMinSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MIXED_INSTANCE_TYPES: "RecommendationOptionsConfigurationMixedInstanceTypes",
  RECOMMENDATION_OPTIONS_CONFIGURATION_TYPE: "RecommendationOptionsConfigurationType",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  RECOMMENDATION_OPTIONS_INSTANCE_GPU_INFO: "RecommendationOptionsInstanceGpuInfo",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_MIGRATION_EFFORT: "RecommendationOptionsMigrationEffort",
  RECOMMENDATION_OPTIONS_NETWORK: "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE: "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE:
    "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE:
    "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE: "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS: "RecommendationOptionsVcpus",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM: "UtilizationMetricsGpuMemoryPercentageMaximum",
  UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM: "UtilizationMetricsGpuPercentageMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkPacketsInPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkPacketsOutPerSecondMaximum",
} as const;

/**
 * @public
 */
export type ExportableAutoScalingGroupField =
  (typeof ExportableAutoScalingGroupField)[keyof typeof ExportableAutoScalingGroupField];

/**
 * @public
 * @enum
 */
export const FileFormat = {
  CSV: "Csv",
} as const;

/**
 * @public
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

/**
 * @public
 * @enum
 */
export const FilterName = {
  FINDING: "Finding",
  FINDING_REASON_CODES: "FindingReasonCodes",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  RECOMMENDATION_SOURCE_TYPE: "RecommendationSourceType",
} as const;

/**
 * @public
 */
export type FilterName = (typeof FilterName)[keyof typeof FilterName];

/**
 * <p>Describes a filter that returns a more specific list of recommendations. Use this
 *             filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with
 *             the <a>DescribeRecommendationExportJobs</a> action.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification. For example, <code>Underprovisioned</code>.</p>
   *          <p>Specify <code>RecommendationSourceType</code> to return recommendations of a specific
   *             resource type. For example, <code>Ec2Instance</code>.</p>
   *          <p>Specify <code>FindingReasonCodes</code> to return recommendations with a specific
   *             finding reason code. For example, <code>CPUUnderprovisioned</code>.</p>
   *          <p>Specify <code>InferredWorkloadTypes</code> to return recommendations of a specific
   *             inferred workload. For example, <code>Redis</code>.</p>
   *          <p>You can filter your EC2 instance recommendations by <code>tag:key</code> and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your recommendations. Use
   *             this filter to find all of your recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: FilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter and the resource type that you wish to filter results
   *             for:</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>Optimized</code> or <code>NotOptimized</code> if you specify the
   *                         <code>name</code> parameter as <code>Finding</code> and you want to filter
   *                     results for Auto Scaling groups.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>Underprovisioned</code>, <code>Overprovisioned</code>, or
   *                         <code>Optimized</code> if you specify the <code>name</code> parameter as
   *                         <code>Finding</code> and you want to filter results for EC2
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>Ec2Instance</code> or <code>AutoScalingGroup</code> if you
   *                     specify the <code>name</code> parameter as
   *                     <code>RecommendationSourceType</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify one of the following options if you specify the <code>name</code>
   *                     parameter as <code>FindingReasonCodes</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>CPUOverprovisioned</code>
   *                         </b> — The
   *                             instance’s CPU configuration can be sized down while still meeting the
   *                             performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>CPUUnderprovisioned</code>
   *                         </b> —
   *                             The instance’s CPU configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better CPU performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>MemoryOverprovisioned</code>
   *                         </b> —
   *                             The instance’s memory configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>MemoryUnderprovisioned</code>
   *                         </b> —
   *                             The instance’s memory configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better memory performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>EBSThroughputOverprovisioned</code>
   *                         </b> — The
   *                             instance’s EBS throughput configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>EBSThroughputUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s EBS throughput configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better EBS throughput performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>EBSIOPSOverprovisioned</code>
   *                         </b> —
   *                             The instance’s EBS IOPS configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>EBSIOPSUnderprovisioned</code>
   *                         </b>
   *                             — The instance’s EBS IOPS configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better EBS IOPS performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>NetworkBandwidthOverprovisioned</code>
   *                         </b> — The
   *                             instance’s network bandwidth configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>NetworkBandwidthUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s network bandwidth configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better network bandwidth performance. This finding reason
   *                             happens when the <code>NetworkIn</code> or <code>NetworkOut</code>
   *                             performance of an instance is impacted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>NetworkPPSOverprovisioned</code>
   *                         </b> — The instance’s
   *                             network PPS (packets per second) configuration can be sized down while
   *                             still meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>NetworkPPSUnderprovisioned</code>
   *                         </b> — The instance’s
   *                             network PPS (packets per second) configuration doesn't meet the
   *                             performance requirements of your workload and there is an alternative
   *                             instance type that provides better network PPS performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>DiskIOPSOverprovisioned</code>
   *                         </b>
   *                             — The instance’s disk IOPS configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>DiskIOPSUnderprovisioned</code>
   *                         </b>
   *                             — The instance’s disk IOPS configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better disk IOPS performance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>DiskThroughputOverprovisioned</code>
   *                         </b> — The
   *                             instance’s disk throughput configuration can be sized down while still
   *                             meeting the performance requirements of your workload.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>
   *                            <code>DiskThroughputUnderprovisioned</code>
   *                         </b> — The
   *                             instance’s disk throughput configuration doesn't meet the performance
   *                             requirements of your workload and there is an alternative instance type
   *                             that provides better disk throughput performance.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * <p>Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, <a>GetEC2RecommendationProjectedMetrics</a>, <a>GetRDSDatabaseRecommendations</a>, and <a>GetRDSDatabaseRecommendationProjectedMetrics</a> request.</p>
 * @public
 */
export interface RecommendationPreferences {
  /**
   * <p>Specifies the CPU vendor and architecture for Amazon EC2 instance and Auto Scaling group recommendations.</p>
   *          <p>For example, when you specify <code>AWS_ARM64</code> with:</p>
   *          <ul>
   *             <li>
   *                <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     returns recommendations that consist of Graviton instance types only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton instance type
   *                     recommendations only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     exports recommendations that consist of Graviton instance types only.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;
}

/**
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
 *             key prefix for a recommendations export job.</p>
 *          <p>You must create the destination Amazon S3 bucket for your recommendations
 *             export before you create the export job. Compute Optimizer does not create the S3 bucket
 *             for you. After you create the S3 bucket, ensure that it has the required permission
 *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
 *             an object prefix when you create the export job, you must include the object prefix in
 *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
 *                     <i>Compute Optimizer User Guide</i>.</p>
 * @public
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of the Amazon S3 bucket to use as the destination for an export
   *             job.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix for an export job.</p>
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * @public
 */
export interface ExportAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Auto Scaling group
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *          <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Auto Scaling group recommendations.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableAutoScalingGroupField[] | undefined;

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket
   *             name and key prefix for the export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *          <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *          <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * <p>An object to specify the preferences for the Auto Scaling group recommendations
   *             to export.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * <p>The request exceeds a limit of the service.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const ExportableVolumeField = {
  ACCOUNT_ID: "AccountId",
  CURRENT_CONFIGURATION_ROOT_VOLUME: "CurrentConfigurationRootVolume",
  CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS: "CurrentConfigurationVolumeBaselineIOPS",
  CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT: "CurrentConfigurationVolumeBaselineThroughput",
  CURRENT_CONFIGURATION_VOLUME_BURST_IOPS: "CurrentConfigurationVolumeBurstIOPS",
  CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT: "CurrentConfigurationVolumeBurstThroughput",
  CURRENT_CONFIGURATION_VOLUME_SIZE: "CurrentConfigurationVolumeSize",
  CURRENT_CONFIGURATION_VOLUME_TYPE: "CurrentConfigurationVolumeType",
  CURRENT_MONTHLY_PRICE: "CurrentMonthlyPrice",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  FINDING: "Finding",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_IOPS: "RecommendationOptionsConfigurationVolumeBaselineIOPS",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT:
    "RecommendationOptionsConfigurationVolumeBaselineThroughput",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_IOPS: "RecommendationOptionsConfigurationVolumeBurstIOPS",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_BURST_THROUGHPUT:
    "RecommendationOptionsConfigurationVolumeBurstThroughput",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_SIZE: "RecommendationOptionsConfigurationVolumeSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_VOLUME_TYPE: "RecommendationOptionsConfigurationVolumeType",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  RECOMMENDATION_OPTIONS_MONTHLY_PRICE: "RecommendationOptionsMonthlyPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  ROOT_VOLUME: "RootVolume",
  TAGS: "Tags",
  UTILIZATION_METRICS_VOLUME_READ_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_WRITE_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeWriteOpsPerSecondMaximum",
  VOLUME_ARN: "VolumeArn",
} as const;

/**
 * @public
 */
export type ExportableVolumeField = (typeof ExportableVolumeField)[keyof typeof ExportableVolumeField];

/**
 * @public
 * @enum
 */
export const EBSFilterName = {
  FINDING: "Finding",
} as const;

/**
 * @public
 */
export type EBSFilterName = (typeof EBSFilterName)[keyof typeof EBSFilterName];

/**
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store
 *                 (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p>
 *          <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 * @public
 */
export interface EBSFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (for example, <code>NotOptimized</code>).</p>
   *          <p>You can filter your Amazon EBS volume recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             Amazon EBS volume recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all Amazon EBS volume recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your Amazon EBS volume recommendations. Use
   *             this filter to find all of your Amazon EBS volume recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your Amazon EBS volume recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: EBSFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values are <code>Optimized</code>, or <code>NotOptimized</code>.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportEBSVolumeRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Amazon EBS
   *             volume recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *          <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Amazon EBS volume recommendations.</p>
   * @public
   */
  filters?: EBSFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableVolumeField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *          <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *          <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportEBSVolumeRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableInstanceField = {
  ACCOUNT_ID: "AccountId",
  CURRENT_INSTANCE_GPU_INFO: "CurrentInstanceGpuInfo",
  CURRENT_INSTANCE_TYPE: "CurrentInstanceType",
  CURRENT_MEMORY: "CurrentMemory",
  CURRENT_NETWORK: "CurrentNetwork",
  CURRENT_ON_DEMAND_PRICE: "CurrentOnDemandPrice",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
  CURRENT_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE: "CurrentStandardOneYearNoUpfrontReservedPrice",
  CURRENT_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE: "CurrentStandardThreeYearNoUpfrontReservedPrice",
  CURRENT_STORAGE: "CurrentStorage",
  CURRENT_VCPUS: "CurrentVCpus",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES:
    "EffectiveRecommendationPreferencesCpuVendorArchitectures",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS:
    "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_EXTERNAL_METRICS_SOURCE:
    "EffectiveRecommendationPreferencesExternalMetricsSource",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_INFERRED_WORKLOAD_TYPES:
    "EffectiveRecommendationPreferencesInferredWorkloadTypes",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD: "EffectiveRecommendationPreferencesLookBackPeriod",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_PREFERRED_RESOURCES: "EffectiveRecommendationPreferencesPreferredResources",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_UTILIZATION_PREFERENCES:
    "EffectiveRecommendationPreferencesUtilizationPreferences",
  EXTERNAL_METRIC_STATUS_CODE: "ExternalMetricStatusCode",
  EXTERNAL_METRIC_STATUS_REASON: "ExternalMetricStatusReason",
  FINDING: "Finding",
  Finding_Reason_Codes: "FindingReasonCodes",
  IDLE: "Idle",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  INSTANCE_ARN: "InstanceArn",
  INSTANCE_NAME: "InstanceName",
  INSTANCE_STATE: "InstanceState",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN: "RecommendationsSourcesRecommendationSourceArn",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE: "RecommendationsSourcesRecommendationSourceType",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  RECOMMENDATION_OPTIONS_INSTANCE_GPU_INFO: "RecommendationOptionsInstanceGpuInfo",
  RECOMMENDATION_OPTIONS_INSTANCE_TYPE: "RecommendationOptionsInstanceType",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_MIGRATION_EFFORT: "RecommendationOptionsMigrationEffort",
  RECOMMENDATION_OPTIONS_NETWORK: "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE: "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PLATFORM_DIFFERENCES: "RecommendationOptionsPlatformDifferences",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsGpuMemoryPercentageMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsGpuPercentageMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  RECOMMENDATION_OPTIONS_STANDARD_ONE_YEAR_NO_UPFRONT_RESERVED_PRICE:
    "RecommendationOptionsStandardOneYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STANDARD_THREE_YEAR_NO_UPFRONT_RESERVED_PRICE:
    "RecommendationOptionsStandardThreeYearNoUpfrontReservedPrice",
  RECOMMENDATION_OPTIONS_STORAGE: "RecommendationOptionsStorage",
  RECOMMENDATION_OPTIONS_VCPUS: "RecommendationOptionsVcpus",
  TAGS: "Tags",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DISK_READ_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_DISK_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsDiskWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsReadBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsWriteBytesPerSecondMaximum",
  UTILIZATION_METRICS_EBS_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsEbsWriteOpsPerSecondMaximum",
  UTILIZATION_METRICS_GPU_MEMORY_PERCENTAGE_MAXIMUM: "UtilizationMetricsGpuMemoryPercentageMaximum",
  UTILIZATION_METRICS_GPU_PERCENTAGE_MAXIMUM: "UtilizationMetricsGpuPercentageMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_IN_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkPacketsInPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_PACKETS_OUT_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkPacketsOutPerSecondMaximum",
} as const;

/**
 * @public
 */
export type ExportableInstanceField = (typeof ExportableInstanceField)[keyof typeof ExportableInstanceField];

/**
 * @public
 */
export interface ExportEC2InstanceRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export instance
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *          <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of instance
   *             recommendations.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableInstanceField[] | undefined;

  /**
   * <p>An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket
   *             name and key prefix for the export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy to allow Compute Optimizer to write the export file to it.
   *             If you plan to
   *             specify an object prefix when you create the export job, you must include the object
   *             prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *          <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to export.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportEC2InstanceRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableECSServiceField = {
  ACCOUNT_ID: "AccountId",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
  CURRENT_SERVICE_CONFIGURATION_AUTO_SCALING_CONFIGURATION: "CurrentServiceConfigurationAutoScalingConfiguration",
  CURRENT_SERVICE_CONFIGURATION_CPU: "CurrentServiceConfigurationCpu",
  CURRENT_SERVICE_CONFIGURATION_MEMORY: "CurrentServiceConfigurationMemory",
  CURRENT_SERVICE_CONFIGURATION_TASK_DEFINITION_ARN: "CurrentServiceConfigurationTaskDefinitionArn",
  CURRENT_SERVICE_CONTAINER_CONFIGURATIONS: "CurrentServiceContainerConfigurations",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  FINDING: "Finding",
  FINDING_REASON_CODES: "FindingReasonCodes",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LAUNCH_TYPE: "LaunchType",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONTAINER_RECOMMENDATIONS: "RecommendationOptionsContainerRecommendations",
  RECOMMENDATION_OPTIONS_CPU: "RecommendationOptionsCpu",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  SERVICE_ARN: "ServiceArn",
  TAGS: "Tags",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
} as const;

/**
 * @public
 */
export type ExportableECSServiceField = (typeof ExportableECSServiceField)[keyof typeof ExportableECSServiceField];

/**
 * @public
 * @enum
 */
export const ECSServiceRecommendationFilterName = {
  FINDING: "Finding",
  FINDING_REASON_CODE: "FindingReasonCode",
} as const;

/**
 * @public
 */
export type ECSServiceRecommendationFilterName =
  (typeof ECSServiceRecommendationFilterName)[keyof typeof ECSServiceRecommendationFilterName];

/**
 * <p>
 *             Describes a filter that returns a more specific list of Amazon ECS service
 *             recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.
 *         </p>
 * @public
 */
export interface ECSServiceRecommendationFilter {
  /**
   * <p>
   *             The name of the filter.
   *         </p>
   *          <p>
   *             Specify <code>Finding</code> to return recommendations with a specific finding classification.
   *         </p>
   *          <p>
   *             Specify <code>FindingReasonCode</code> to return recommendations with a specific finding reason code.
   *         </p>
   *          <p>You can filter your Amazon ECS service recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             Amazon ECS service recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all Amazon ECS service recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your Amazon ECS service recommendations. Use
   *             this filter to find all of your Amazon ECS service recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your Amazon ECS service recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: ECSServiceRecommendationFilterName | undefined;

  /**
   * <p>
   *             The value of the filter.
   *         </p>
   *          <p>The valid values for this parameter are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as <code>Finding</code>, specify
   *                     <code>Optimized</code>, <code>Underprovisioned</code>, or <code>Overprovisioned</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as <code>FindingReasonCode</code>, specify
   *                     <code>CPUUnderprovisioned</code>, <code>CPUOverprovisioned</code>,
   *                     <code>MemoryUnderprovisioned</code>, or <code>MemoryOverprovisioned</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportECSServiceRecommendationsRequest {
  /**
   * <p>
   *             The Amazon Web Services account IDs for the export Amazon ECS service recommendations.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to specify the member account you want to
   *             export recommendations to.</p>
   *          <p>This parameter can't be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>If this parameter or the include member accounts parameter is omitted,
   *             the recommendations for member accounts aren't included in the export.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that exports a more specific set
   *             of Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  filters?: ECSServiceRecommendationFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *                     Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableECSServiceField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>
   *             The format of the export file.
   *         </p>
   *          <p>The CSV file is the only export file format currently supported.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>If your account is the management account or the delegated administrator of an organization,
   *             this parameter indicates whether to include recommendations for resources in all member accounts of
   *             the organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *             Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *             <i>Compute Optimizer User Guide</i>.</p>
   *          <p>If this parameter is omitted, recommendations for member accounts of the
   *             organization aren't included in the export file.</p>
   *          <p>If this parameter or the account ID parameter is omitted, recommendations for
   *             member accounts aren't included in the export.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportECSServiceRecommendationsResponse {
  /**
   * <p>
   *             The identification number of the export job.
   *         </p>
   *          <p>To view the status of an export job, use the
   *             <a>DescribeRecommendationExportJobs</a> action and specify the job ID.
   *         </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableIdleField = {
  ACCOUNT_ID: "AccountId",
  FINDING: "Finding",
  FINDING_DESCRIPTION: "FindingDescription",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RESOURCE_ARN: "ResourceArn",
  RESOURCE_ID: "ResourceId",
  RESOURCE_TYPE: "ResourceType",
  SAVINGS_OPPORTUNITY: "SavingsOpportunity",
  SAVINGS_OPPORTUNITY_AFTER_DISCOUNT: "SavingsOpportunityAfterDiscount",
  TAGS: "Tags",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DATABASE_CONNECTIONS_MAXIMUM: "UtilizationMetricsDatabaseConnectionsMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_READ_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeReadIOPSMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_WRITE_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeWriteIOPSMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_READ_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeReadOpsPerSecondMaximum",
  UTILIZATION_METRICS_VOLUME_WRITE_OPS_PER_SECOND_MAXIMUM: "UtilizationMetricsVolumeWriteOpsPerSecondMaximum",
} as const;

/**
 * @public
 */
export type ExportableIdleField = (typeof ExportableIdleField)[keyof typeof ExportableIdleField];

/**
 * @public
 * @enum
 */
export const IdleRecommendationFilterName = {
  FINDING: "Finding",
  RESOURCE_TYPE: "ResourceType",
} as const;

/**
 * @public
 */
export type IdleRecommendationFilterName =
  (typeof IdleRecommendationFilterName)[keyof typeof IdleRecommendationFilterName];

/**
 * <p>Describes a filter that returns a more specific list of idle resource recommendations.</p>
 * @public
 */
export interface IdleRecommendationFilter {
  /**
   * <p>
   *             The name of the filter.
   *         </p>
   *          <p>
   *             Specify <code>Finding</code> to return recommendations with a specific finding classification.
   *         </p>
   *          <p>You can filter your idle resource recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             idle resource recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all idle resource service recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your idle resource recommendations. Use
   *             this filter to find all of your idle resource recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your idle resource service recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: IdleRecommendationFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportIdleRecommendationsRequest {
  /**
   * <p>
   *             The Amazon Web Services account IDs for the export idle resource recommendations.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to specify the member account you want to
   *             export recommendations to.</p>
   *          <p>This parameter can't be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>If this parameter or the include member accounts parameter is omitted,
   *             the recommendations for member accounts aren't included in the export.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of idle resource recommendations.</p>
   * @public
   */
  filters?: IdleRecommendationFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *                     Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableIdleField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file. The CSV file is the only export file format currently supported.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>If your account is the management account or the delegated administrator of an organization,
   *             this parameter indicates whether to include recommendations for resources in all member accounts of
   *             the organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *             Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *             <i>Compute Optimizer User Guide</i>.</p>
   *          <p>If this parameter is omitted, recommendations for member accounts of the
   *             organization aren't included in the export file.</p>
   *          <p>If this parameter or the account ID parameter is omitted, recommendations for
   *             member accounts aren't included in the export.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportIdleRecommendationsResponse {
  /**
   * <p>
   *             The identification number of the export job.
   *         </p>
   *          <p>To view the status of an export job, use the
   *             <a>DescribeRecommendationExportJobs</a> action and specify the job ID.
   *         </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableLambdaFunctionField = {
  ACCOUNT_ID: "AccountId",
  CURRENT_CONFIGURATION_MEMORY_SIZE: "CurrentConfigurationMemorySize",
  CURRENT_CONFIGURATION_TIMEOUT: "CurrentConfigurationTimeout",
  CURRENT_COST_AVERAGE: "CurrentCostAverage",
  CURRENT_COST_TOTAL: "CurrentCostTotal",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  FINDING: "Finding",
  FINDING_REASON_CODES: "FindingReasonCodes",
  FUNCTION_ARN: "FunctionArn",
  FUNCTION_VERSION: "FunctionVersion",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  NUMBER_OF_INVOCATIONS: "NumberOfInvocations",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MEMORY_SIZE: "RecommendationOptionsConfigurationMemorySize",
  RECOMMENDATION_OPTIONS_COST_HIGH: "RecommendationOptionsCostHigh",
  RECOMMENDATION_OPTIONS_COST_LOW: "RecommendationOptionsCostLow",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "RecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED:
    "RecommendationOptionsProjectedUtilizationMetricsDurationExpected",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND:
    "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND:
    "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "RecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  TAGS: "Tags",
  UTILIZATION_METRICS_DURATION_AVERAGE: "UtilizationMetricsDurationAverage",
  UTILIZATION_METRICS_DURATION_MAXIMUM: "UtilizationMetricsDurationMaximum",
  UTILIZATION_METRICS_MEMORY_AVERAGE: "UtilizationMetricsMemoryAverage",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
} as const;

/**
 * @public
 */
export type ExportableLambdaFunctionField =
  (typeof ExportableLambdaFunctionField)[keyof typeof ExportableLambdaFunctionField];

/**
 * @public
 * @enum
 */
export const LambdaFunctionRecommendationFilterName = {
  FINDING: "Finding",
  FINDING_REASON_CODE: "FindingReasonCode",
} as const;

/**
 * @public
 */
export type LambdaFunctionRecommendationFilterName =
  (typeof LambdaFunctionRecommendationFilterName)[keyof typeof LambdaFunctionRecommendationFilterName];

/**
 * <p>Describes a filter that returns a more specific list of Lambda
 *             function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 * @public
 */
export interface LambdaFunctionRecommendationFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification (for example, <code>NotOptimized</code>).</p>
   *          <p>Specify <code>FindingReasonCode</code> to return recommendations with a specific
   *             finding reason code (for example, <code>MemoryUnderprovisioned</code>).</p>
   *          <p>You can filter your Lambda function recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             Lambda function recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all Lambda function recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your Lambda function recommendations. Use
   *             this filter to find all of your Lambda function recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your Lambda function recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: LambdaFunctionRecommendationFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter:</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>Optimized</code>, <code>NotOptimized</code>, or
   *                         <code>Unavailable</code> if you specify the <code>name</code> parameter as
   *                         <code>Finding</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>MemoryOverprovisioned</code>,
   *                         <code>MemoryUnderprovisioned</code>, <code>InsufficientData</code>, or
   *                         <code>Inconclusive</code> if you specify the <code>name</code> parameter as
   *                         <code>FindingReasonCode</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLambdaFunctionRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export Lambda
   *             function recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *          <p>This parameter cannot be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the include member accounts parameter, is omitted.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that exports a more specific set of Lambda function recommendations.</p>
   * @public
   */
  filters?: LambdaFunctionRecommendationFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableLambdaFunctionField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *                 Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   *          <p>Recommendations for member accounts of the organization are not included in the export
   *             file if this parameter is omitted.</p>
   *          <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   *          <p>Recommendations for member accounts are not included in the export if this parameter,
   *             or the account IDs parameter, is omitted.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportLambdaFunctionRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableLicenseField = {
  ACCOUNT_ID: "AccountId",
  CURRENT_LICENSE_CONFIGURATION_INSTANCE_TYPE: "CurrentLicenseConfigurationInstanceType",
  CURRENT_LICENSE_CONFIGURATION_LICENSE_EDITION: "CurrentLicenseConfigurationLicenseEdition",
  CURRENT_LICENSE_CONFIGURATION_LICENSE_MODEL: "CurrentLicenseConfigurationLicenseModel",
  CURRENT_LICENSE_CONFIGURATION_LICENSE_NAME: "CurrentLicenseConfigurationLicenseName",
  CURRENT_LICENSE_CONFIGURATION_LICENSE_VERSION: "CurrentLicenseConfigurationLicenseVersion",
  CURRENT_LICENSE_CONFIGURATION_METRICS_SOURCE: "CurrentLicenseConfigurationMetricsSource",
  CURRENT_LICENSE_CONFIGURATION_NUMBER_OF_CORES: "CurrentLicenseConfigurationNumberOfCores",
  CURRENT_LICENSE_CONFIGURATION_OPERATING_SYSTEM: "CurrentLicenseConfigurationOperatingSystem",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LICENSE_FINDING: "Finding",
  LICENSE_FINDING_REASON_CODES: "FindingReasonCodes",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_LICENSE_EDITION: "RecommendationOptionsLicenseEdition",
  RECOMMENDATION_OPTIONS_LICENSE_MODEL: "RecommendationOptionsLicenseModel",
  RECOMMENDATION_OPTIONS_OPERATING_SYSTEM: "RecommendationOptionsOperatingSystem",
  RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE: "RecommendationOptionsSavingsOpportunityPercentage",
  RESOURCE_ARN: "ResourceArn",
  TAGS: "Tags",
} as const;

/**
 * @public
 */
export type ExportableLicenseField = (typeof ExportableLicenseField)[keyof typeof ExportableLicenseField];

/**
 * @public
 * @enum
 */
export const LicenseRecommendationFilterName = {
  LICENSE_FINDING: "Finding",
  LICENSE_FINDING_REASON_CODE: "FindingReasonCode",
  LICENSE_NAME: "LicenseName",
} as const;

/**
 * @public
 */
export type LicenseRecommendationFilterName =
  (typeof LicenseRecommendationFilterName)[keyof typeof LicenseRecommendationFilterName];

/**
 * <p>
 *             Describes a filter that returns a more specific list of license recommendations. Use this filter
 *             with the <code>GetLicenseRecommendation</code> action.
 *         </p>
 * @public
 */
export interface LicenseRecommendationFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Finding</code> to return recommendations with a specific finding
   *             classification.</p>
   *          <p>Specify <code>FindingReasonCode</code> to return recommendations with a specific
   *             finding reason code.</p>
   *          <p>You can filter your license recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             license recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all license recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your license recommendations. Use
   *             this filter to find all of your license recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your license recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: LicenseRecommendationFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values for this parameter are as follows, depending on what you specify for
   *             the <code>name</code> parameter:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as
   *                     <code>Finding</code>, then specify <code>Optimized</code>, <code>NotOptimized</code>, or
   *                     <code>InsufficentMetrics</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as
   *                     <code>FindingReasonCode</code>, then specify <code>Optimized</code>,
   *                     <code>LicenseOverprovisioned</code>, <code>InvalidCloudwatchApplicationInsights</code>, or
   *                     <code>CloudwatchApplicationInsightsError</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportLicenseRecommendationsRequest {
  /**
   * <p>The IDs of the Amazon Web Services accounts for which to export license
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to export recommendations.</p>
   *          <p>This parameter can't be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>If this parameter is omitted, recommendations
   *             for member accounts aren't included in the export.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that exports a more specific set of license recommendations.
   *         </p>
   * @public
   */
  filters?: LicenseRecommendationFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *                     Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableLicenseField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>A CSV file is the only export format currently supported.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>Indicates whether to include recommendations for resources in all member accounts of
   *             the organization if your account is the management account of an organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *             Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *             <i>Compute Optimizer User Guide</i>.</p>
   *          <p>If this parameter is omitted, recommendations for member accounts of the organization
   *             aren't included in the export file .</p>
   *          <p>This parameter cannot be specified together with the account IDs parameter. The
   *             parameters are mutually exclusive.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface ExportLicenseRecommendationsResponse {
  /**
   * <p>
   *             The identification number of the export job.
   *         </p>
   *          <p>To view the status of an export job, use the <a>DescribeRecommendationExportJobs</a>
   *             action and specify the job ID.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportableRDSDBField = {
  ACCOUNT_ID: "AccountId",
  CLUSTER_WRITER: "ClusterWriter",
  CURRENT_DB_INSTANCE_CLASS: "CurrentDBInstanceClass",
  CURRENT_INSTANCE_ON_DEMAND_HOURLY_PRICE: "CurrentInstanceOnDemandHourlyPrice",
  CURRENT_INSTANCE_PERFORMANCE_RISK: "CurrentInstancePerformanceRisk",
  CURRENT_STORAGE_CONFIGURATION_ALLOCATED_STORAGE: "CurrentStorageConfigurationAllocatedStorage",
  CURRENT_STORAGE_CONFIGURATION_IOPS: "CurrentStorageConfigurationIOPS",
  CURRENT_STORAGE_CONFIGURATION_MAX_ALLOCATED_STORAGE: "CurrentStorageConfigurationMaxAllocatedStorage",
  CURRENT_STORAGE_CONFIGURATION_STORAGE_THROUGHPUT: "CurrentStorageConfigurationStorageThroughput",
  CURRENT_STORAGE_CONFIGURATION_STORAGE_TYPE: "CurrentStorageConfigurationStorageType",
  CURRENT_STORAGE_ESTIMATED_CLUSTER_INSTANCE_ON_DEMAND_MONTHLY_COST:
    "CurrentStorageEstimatedClusterInstanceOnDemandMonthlyCost",
  CURRENT_STORAGE_ESTIMATED_CLUSTER_STORAGE_IO_ON_DEMAND_MONTHLY_COST:
    "CurrentStorageEstimatedClusterStorageIOOnDemandMonthlyCost",
  CURRENT_STORAGE_ESTIMATED_CLUSTER_STORAGE_ON_DEMAND_MONTHLY_COST:
    "CurrentStorageEstimatedClusterStorageOnDemandMonthlyCost",
  CURRENT_STORAGE_ESTIMATED_MONTHLY_VOLUME_IOPS_COST_VARIATION: "CurrentStorageEstimatedMonthlyVolumeIOPsCostVariation",
  CURRENT_STORAGE_ON_DEMAND_MONTHLY_PRICE: "CurrentStorageOnDemandMonthlyPrice",
  DB_CLUSTER_IDENTIFIER: "DBClusterIdentifier",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_CPU_VENDOR_ARCHITECTURES:
    "EffectiveRecommendationPreferencesCpuVendorArchitectures",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_ENHANCED_INFRASTRUCTURE_METRICS:
    "EffectiveRecommendationPreferencesEnhancedInfrastructureMetrics",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_LOOKBACK_PERIOD: "EffectiveRecommendationPreferencesLookBackPeriod",
  EFFECTIVE_RECOMMENDATION_PREFERENCES_SAVINGS_ESTIMATION_MODE:
    "EffectiveRecommendationPreferencesSavingsEstimationMode",
  ENGINE: "Engine",
  ENGINE_VERSION: "EngineVersion",
  IDLE: "Idle",
  INSTANCE_FINDING: "InstanceFinding",
  INSTANCE_FINDING_REASON_CODES: "InstanceFindingReasonCodes",
  INSTANCE_RECOMMENDATION_OPTIONS_DB_INSTANCE_CLASS: "InstanceRecommendationOptionsDBInstanceClass",
  INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY:
    "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrency",
  INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "InstanceRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE:
    "InstanceRecommendationOptionsEstimatedMonthlySavingsValue",
  INSTANCE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "InstanceRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  INSTANCE_RECOMMENDATION_OPTIONS_INSTANCE_ON_DEMAND_HOURLY_PRICE:
    "InstanceRecommendationOptionsInstanceOnDemandHourlyPrice",
  INSTANCE_RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "InstanceRecommendationOptionsPerformanceRisk",
  INSTANCE_RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "InstanceRecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  INSTANCE_RECOMMENDATION_OPTIONS_RANK: "InstanceRecommendationOptionsRank",
  INSTANCE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "InstanceRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  INSTANCE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE:
    "InstanceRecommendationOptionsSavingsOpportunityPercentage",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  MULTI_AZ_DB_INSTANCE: "MultiAZDBInstance",
  PROMOTION_TIER: "PromotionTier",
  RESOURCE_ARN: "ResourceArn",
  STORAGE_FINDING: "StorageFinding",
  STORAGE_FINDING_REASON_CODES: "StorageFindingReasonCodes",
  STORAGE_RECOMMENDATION_OPTIONS_ALLOCATED_STORAGE: "StorageRecommendationOptionsAllocatedStorage",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_INSTANCE_ON_DEMAND_MONTHLY_COST:
    "StorageRecommendationOptionsEstimatedClusterInstanceOnDemandMonthlyCost",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_STORAGE_IO_ON_DEMAND_MONTHLY_COST:
    "StorageRecommendationOptionsEstimatedClusterStorageIOOnDemandMonthlyCost",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_CLUSTER_STORAGE_ON_DEMAND_MONTHLY_COST:
    "StorageRecommendationOptionsEstimatedClusterStorageOnDemandMonthlyCost",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY:
    "StorageRecommendationOptionsEstimatedMonthlySavingsCurrency",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY_AFTER_DISCOUNTS:
    "StorageRecommendationOptionsEstimatedMonthlySavingsCurrencyAfterDiscounts",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE:
    "StorageRecommendationOptionsEstimatedMonthlySavingsValue",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE_AFTER_DISCOUNTS:
    "StorageRecommendationOptionsEstimatedMonthlySavingsValueAfterDiscounts",
  STORAGE_RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_VOLUME_IOPS_COST_VARIATION:
    "StorageRecommendationOptionsEstimatedMonthlyVolumeIOPsCostVariation",
  STORAGE_RECOMMENDATION_OPTIONS_IOPS: "StorageRecommendationOptionsIOPS",
  STORAGE_RECOMMENDATION_OPTIONS_MAX_ALLOCATED_STORAGE: "StorageRecommendationOptionsMaxAllocatedStorage",
  STORAGE_RECOMMENDATION_OPTIONS_ON_DEMAND_MONTHLY_PRICE: "StorageRecommendationOptionsOnDemandMonthlyPrice",
  STORAGE_RECOMMENDATION_OPTIONS_RANK: "StorageRecommendationOptionsRank",
  STORAGE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_AFTER_DISCOUNTS_PERCENTAGE:
    "StorageRecommendationOptionsSavingsOpportunityAfterDiscountsPercentage",
  STORAGE_RECOMMENDATION_OPTIONS_SAVINGS_OPPORTUNITY_PERCENTAGE:
    "StorageRecommendationOptionsSavingsOpportunityPercentage",
  STORAGE_RECOMMENDATION_OPTIONS_STORAGE_THROUGHPUT: "StorageRecommendationOptionsStorageThroughput",
  STORAGE_RECOMMENDATION_OPTIONS_STORAGE_TYPE: "StorageRecommendationOptionsStorageType",
  TAGS: "Tags",
  UTILIZATION_METRICS_AURORA_MEMORY_HEALTH_STATE_MAXIMUM: "UtilizationMetricsAuroraMemoryHealthStateMaximum",
  UTILIZATION_METRICS_AURORA_MEMORY_NUM_DECLINED_SQL_TOTAL_MAXIMUM:
    "UtilizationMetricsAuroraMemoryNumDeclinedSqlTotalMaximum",
  UTILIZATION_METRICS_AURORA_MEMORY_NUM_KILL_CONN_TOTAL_MAXIMUM:
    "UtilizationMetricsAuroraMemoryNumKillConnTotalMaximum",
  UTILIZATION_METRICS_AURORA_MEMORY_NUM_KILL_QUERY_TOTAL_MAXIMUM:
    "UtilizationMetricsAuroraMemoryNumKillQueryTotalMaximum",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DATABASE_CONNECTIONS_MAXIMUM: "UtilizationMetricsDatabaseConnectionsMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_READ_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeReadIOPSMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_READ_THROUGHPUT_MAXIMUM: "UtilizationMetricsEBSVolumeReadThroughputMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_STORAGE_SPACE_UTILIZATION_MAXIMUM:
    "UtilizationMetricsEBSVolumeStorageSpaceUtilizationMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_WRITE_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeWriteIOPSMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_WRITE_THROUGHPUT_MAXIMUM: "UtilizationMetricsEBSVolumeWriteThroughputMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_RECEIVE_THROUGHPUT_MAXIMUM: "UtilizationMetricsNetworkReceiveThroughputMaximum",
  UTILIZATION_METRICS_NETWORK_TRANSMIT_THROUGHPUT_MAXIMUM: "UtilizationMetricsNetworkTransmitThroughputMaximum",
  UTILIZATION_METRICS_READ_IOPS_EPHEMERAL_STORAGE_MAXIMUM: "UtilizationMetricsReadIOPSEphemeralStorageMaximum",
  UTILIZATION_METRICS_STORAGE_NETWORK_RECEIVE_THROUGHPUT_MAXIMUM:
    "UtilizationMetricsStorageNetworkReceiveThroughputMaximum",
  UTILIZATION_METRICS_STORAGE_NETWORK_TRANSMIT_THROUGHPUT_MAXIMUM:
    "UtilizationMetricsStorageNetworkTransmitThroughputMaximum",
  UTILIZATION_METRICS_VOLUME_BYTES_USED_AVERAGE: "UtilizationMetricsVolumeBytesUsedAverage",
  UTILIZATION_METRICS_VOLUME_READ_IOPS_AVERAGE: "UtilizationMetricsVolumeReadIOPsAverage",
  UTILIZATION_METRICS_VOLUME_WRITE_IOPS_AVERAGE: "UtilizationMetricsVolumeWriteIOPsAverage",
  UTILIZATION_METRICS_WRITE_IOPS_EPHEMERAL_STORAGE_MAXIMUM: "UtilizationMetricsWriteIOPSEphemeralStorageMaximum",
} as const;

/**
 * @public
 */
export type ExportableRDSDBField = (typeof ExportableRDSDBField)[keyof typeof ExportableRDSDBField];

/**
 * @public
 * @enum
 */
export const RDSDBRecommendationFilterName = {
  IDLE: "Idle",
  INSTANCE_FINDING: "InstanceFinding",
  INSTANCE_FINDING_REASON_CODE: "InstanceFindingReasonCode",
  STORAGE_FINDING: "StorageFinding",
  STORAGE_FINDING_REASON_CODE: "StorageFindingReasonCode",
} as const;

/**
 * @public
 */
export type RDSDBRecommendationFilterName =
  (typeof RDSDBRecommendationFilterName)[keyof typeof RDSDBRecommendationFilterName];

/**
 * <p>
 *             Describes a filter that returns a more specific list of DB instance
 *             recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.
 *         </p>
 * @public
 */
export interface RDSDBRecommendationFilter {
  /**
   * <p>
   *             The name of the filter.
   *         </p>
   *          <p>
   *             Specify <code>Finding</code> to return recommendations with a specific finding classification.
   *         </p>
   *          <p>You can filter your DB instance recommendations by <code>tag:key</code>
   *             and <code>tag-key</code> tags.</p>
   *          <p>A <code>tag:key</code> is a key and value combination of a tag assigned to your
   *             DB instance recommendations. Use the tag key in the filter name and the tag value
   *             as the filter value. For example, to find all DB instance recommendations that have
   *             a tag with the key of <code>Owner</code> and the value of <code>TeamA</code>,
   *             specify <code>tag:Owner</code> for the filter name and <code>TeamA</code> for the filter value.</p>
   *          <p>A <code>tag-key</code> is the key of a tag assigned to your DB instance recommendations. Use
   *             this filter to find all of your DB instance recommendations that have a tag with a
   *             specific key. This doesn’t consider the tag value. For example, you can find
   *             your DB instance recommendations with a tag key value of <code>Owner</code> or without any tag
   *             keys assigned.</p>
   * @public
   */
  name?: RDSDBRecommendationFilterName | undefined;

  /**
   * <p>
   *             The value of the filter.
   *         </p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ExportRDSDatabaseRecommendationsRequest {
  /**
   * <p>
   *             The Amazon Web Services account IDs for the export Amazon Aurora and RDS database recommendations.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to specify the member account you want to
   *             export recommendations to.</p>
   *          <p>This parameter can't be specified together with the include member accounts
   *             parameter. The parameters are mutually exclusive.</p>
   *          <p>If this parameter or the include member accounts parameter is omitted,
   *             the recommendations for member accounts aren't included in the export.</p>
   *          <p>You can specify multiple account IDs per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that exports a more specific set of
   *             Amazon Aurora and RDS recommendations.
   *         </p>
   * @public
   */
  filters?: RDSDBRecommendationFilter[] | undefined;

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *                     Guide</i>.</p>
   * @public
   */
  fieldsToExport?: ExportableRDSDBField[] | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             key prefix for a recommendations export job.</p>
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permission
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>
   *             The format of the export file.
   *         </p>
   *          <p>The CSV file is the only export file format currently supported.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;

  /**
   * <p>If your account is the management account or the delegated administrator of an organization,
   *             this parameter indicates whether to include recommendations for resources in all member accounts of
   *             the organization.</p>
   *          <p>The member accounts must also be opted in to Compute Optimizer, and trusted access for
   *             Compute Optimizer must be enabled in the organization account. For more information,
   *             see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html#trusted-service-access">Compute Optimizer and Amazon Web Services Organizations trusted access</a> in the
   *             <i>Compute Optimizer User Guide</i>.</p>
   *          <p>If this parameter is omitted, recommendations for member accounts of the
   *             organization aren't included in the export file.</p>
   *          <p>If this parameter or the account ID parameter is omitted, recommendations for
   *             member accounts aren't included in the export.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;

  /**
   * <p>Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, <a>GetEC2RecommendationProjectedMetrics</a>, <a>GetRDSDatabaseRecommendations</a>, and <a>GetRDSDatabaseRecommendationProjectedMetrics</a> request.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 */
export interface ExportRDSDatabaseRecommendationsResponse {
  /**
   * <p>
   *             The identification number of the export job.
   *         </p>
   *          <p>To view the status of an export job, use the
   *             <a>DescribeRecommendationExportJobs</a> action and specify the job ID.
   *         </p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   * @public
   */
  s3Destination?: S3Destination | undefined;
}

/**
 * @public
 */
export interface GetAutoScalingGroupRecommendationsRequest {
  /**
   * <p>The ID of the Amazon Web Services account for which to return Auto Scaling group
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return Auto Scaling group
   *             recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return
   *             recommendations.</p>
   * @public
   */
  autoScalingGroupArns?: string[] | undefined;

  /**
   * <p>The token to advance to the next page of Auto Scaling group
   *             recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Auto Scaling group recommendations to return with a single
   *             request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of Auto Scaling group recommendations.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>An object to specify the preferences for the Auto Scaling group recommendations
   *             to return in the response.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * <p>Describes an error experienced when getting recommendations.</p>
 *          <p>For example, an error is returned if you request recommendations for an unsupported
 *                 Auto Scaling group, or if you request recommendations for an instance of an
 *             unsupported instance family.</p>
 * @public
 */
export interface GetRecommendationError {
  /**
   * <p>The ID of the error.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The message, or reason, for the error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of Auto Scaling group
   *             recommendations.</p>
   *          <p>This value is null when there are no more pages of Auto Scaling group
   *             recommendations to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe Auto Scaling group recommendations.</p>
   * @public
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[] | undefined;

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an unsupported
   *                 Auto Scaling group.</p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEBSVolumeRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the volumes for which to return
   *             recommendations.</p>
   * @public
   */
  volumeArns?: string[] | undefined;

  /**
   * <p>The token to advance to the next page of volume recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of volume recommendations to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of volume
   *             recommendations.</p>
   * @public
   */
  filters?: EBSFilter[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for which to return volume
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return volume recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * <p>Describes the configuration of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 * @public
 */
export interface VolumeConfiguration {
  /**
   * <p>The volume type.</p>
   *          <p>The volume types can be the following:</p>
   *          <ul>
   *             <li>
   *                <p>General Purpose SSD <code>gp2</code> and <code>gp3</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS SSD <code>io1</code>, <code>io2</code>, and <code>io2 Block Express</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Throughput Optimized HDD <code>st1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Cold HDD <code>sc1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Magnetic volumes <code>standard</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  volumeType?: string | undefined;

  /**
   * <p>The size of the volume, in GiB.</p>
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * <p>The baseline IOPS of the volume.</p>
   * @public
   */
  volumeBaselineIOPS?: number | undefined;

  /**
   * <p>The burst IOPS of the volume.</p>
   * @public
   */
  volumeBurstIOPS?: number | undefined;

  /**
   * <p>The baseline throughput of the volume.</p>
   * @public
   */
  volumeBaselineThroughput?: number | undefined;

  /**
   * <p>The burst throughput of the volume.</p>
   * @public
   */
  volumeBurstThroughput?: number | undefined;

  /**
   * <p>
   *             Contains the image used to boot the instance during launch.
   *         </p>
   * @public
   */
  rootVolume?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const EBSSavingsEstimationModeSource = {
  COST_EXPLORER_RIGHTSIZING: "CostExplorerRightsizing",
  COST_OPTIMIZATION_HUB: "CostOptimizationHub",
  PUBLIC_PRICING: "PublicPricing",
} as const;

/**
 * @public
 */
export type EBSSavingsEstimationModeSource =
  (typeof EBSSavingsEstimationModeSource)[keyof typeof EBSSavingsEstimationModeSource];

/**
 * <p>
 *             Describes the savings estimation mode used for calculating savings opportunity for Amazon EBS volumes.
 *         </p>
 * @public
 */
export interface EBSSavingsEstimationMode {
  /**
   * <p>
   *             Describes the source for calculating the savings opportunity for Amazon EBS volumes.
   *         </p>
   * @public
   */
  source?: EBSSavingsEstimationModeSource | undefined;
}

/**
 * <p>
 *             Describes the effective recommendation preferences for Amazon EBS volumes.
 *         </p>
 * @public
 */
export interface EBSEffectiveRecommendationPreferences {
  /**
   * <p>
   *             Describes the savings estimation mode preference applied for calculating savings opportunity for Amazon EBS volumes.
   *         </p>
   * @public
   */
  savingsEstimationMode?: EBSSavingsEstimationMode | undefined;
}

/**
 * @public
 * @enum
 */
export const EBSFinding = {
  NOT_OPTIMIZED: "NotOptimized",
  OPTIMIZED: "Optimized",
} as const;

/**
 * @public
 */
export type EBSFinding = (typeof EBSFinding)[keyof typeof EBSFinding];

/**
 * <p>
 *             A list of tag key and value pairs that you define.
 *         </p>
 * @public
 */
export interface Tag {
  /**
   * <p>
   *             One part of a key-value pair that makes up a tag. A key is a general
   *             label that acts like a category for more specific tag values.
   *         </p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>
   *             One part of a key-value pair that make up a tag. A value acts as a descriptor
   *             within a tag category (key). The value can be empty or null.
   *         </p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EBSMetricName = {
  VOLUME_READ_BYTES_PER_SECOND: "VolumeReadBytesPerSecond",
  VOLUME_READ_OPS_PER_SECOND: "VolumeReadOpsPerSecond",
  VOLUME_WRITE_BYTES_PER_SECOND: "VolumeWriteBytesPerSecond",
  VOLUME_WRITE_OPS_PER_SECOND: "VolumeWriteOpsPerSecond",
} as const;

/**
 * @public
 */
export type EBSMetricName = (typeof EBSMetricName)[keyof typeof EBSMetricName];

/**
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 * @public
 */
export interface EBSUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *          <p>The following utilization metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VolumeReadOpsPerSecond</code> - The completed read operations per second
   *                     from the volume in a specified period of time.</p>
   *                <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeWriteOpsPerSecond</code> - The completed write operations per
   *                     second to the volume in a specified period of time.</p>
   *                <p>Unit: Count</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeReadBytesPerSecond</code> - The bytes read per second from the
   *                     volume in a specified period of time.</p>
   *                <p>Unit: Bytes</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VolumeWriteBytesPerSecond</code> - The bytes written to the volume in a
   *                     specified period of time.</p>
   *                <p>Unit: Bytes</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: EBSMetricName | undefined;

  /**
   * <p>The statistic of the utilization metric.</p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * <p>The value of the utilization metric.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EBS volume
 *             recommendations. This includes any applicable discounts.
 *         </p>
 * @public
 */
export interface EBSEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for Amazon EBS volume recommendations after applying specific discounts.
 *         </p>
 * @public
 */
export interface EBSSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost after applying the specific discounts.
   *             This saving can be achieved by adopting Compute Optimizer’s Amazon EBS volume recommendations.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s Amazon EBS volume
   *             recommendations. This saving includes any applicable discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: EBSEstimatedMonthlySavings | undefined;
}

/**
 * <p>Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS)
 *             instance.</p>
 * @public
 */
export interface VolumeRecommendationOption {
  /**
   * <p>An array of objects that describe a volume configuration.</p>
   * @public
   */
  configuration?: VolumeConfiguration | undefined;

  /**
   * <p>The performance risk of the volume recommendation option.</p>
   *          <p>Performance risk is the likelihood of the recommended volume type meeting the
   *             performance requirement of your workload.</p>
   *          <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * <p>The rank of the volume recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>An object that describes the savings opportunity for the EBS volume recommendation
   *             option. Savings opportunity includes the estimated monthly savings amount and
   *             percentage.</p>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             An object that describes the savings opportunity for the Amazon EBS volume recommendation option with specific discounts. Savings
   *             opportunity includes the estimated monthly savings  and percentage.
   *         </p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: EBSSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * <p>Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.</p>
 * @public
 */
export interface VolumeRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current volume.</p>
   * @public
   */
  volumeArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the volume.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An array of objects that describe the current configuration of the volume.</p>
   * @public
   */
  currentConfiguration?: VolumeConfiguration | undefined;

  /**
   * <p>The finding classification of the volume.</p>
   *          <p>Findings for volumes include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NotOptimized</code>
   *                   </b>—A volume is
   *                     considered not optimized when Compute Optimizer identifies a recommendation
   *                     that can provide better performance for your workload.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An volume is
   *                     considered optimized when Compute Optimizer determines that the volume is
   *                     correctly provisioned to run your workload based on the chosen volume type. For
   *                     optimized resources, Compute Optimizer might recommend a new generation volume
   *                     type.</p>
   *             </li>
   *          </ul>
   * @public
   */
  finding?: EBSFinding | undefined;

  /**
   * <p>An array of objects that describe the utilization metrics of the volume.</p>
   * @public
   */
  utilizationMetrics?: EBSUtilizationMetric[] | undefined;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the volume.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>An array of objects that describe the recommendation options for the volume.</p>
   * @public
   */
  volumeRecommendationOptions?: VolumeRecommendationOption[] | undefined;

  /**
   * <p>The timestamp of when the volume recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The risk of the current EBS volume not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current EBS volume doesn't have sufficient
   *             capacity.</p>
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * <p>
   *             Describes the effective recommendation preferences for Amazon EBS volume.
   *         </p>
   * @public
   */
  effectiveRecommendationPreferences?: EBSEffectiveRecommendationPreferences | undefined;

  /**
   * <p>
   *             A list of tags assigned to your Amazon EBS volume recommendations.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetEBSVolumeRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of volume recommendations.</p>
   *          <p>This value is null when there are no more pages of volume recommendations to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe volume recommendations.</p>
   * @public
   */
  volumeRecommendations?: VolumeRecommendation[] | undefined;

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an unsupported
   *             volume.</p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEC2InstanceRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return
   *             recommendations.</p>
   * @public
   */
  instanceArns?: string[] | undefined;

  /**
   * <p>The token to advance to the next page of instance recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of instance recommendations to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of instance
   *             recommendations.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for which to return instance
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return instance recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to return in the response.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 * @enum
 */
export const ExternalMetricStatusCode = {
  DATADOG_INTEGRATION_ERROR: "DATADOG_INTEGRATION_ERROR",
  DYNATRACE_INTEGRATION_ERROR: "DYNATRACE_INTEGRATION_ERROR",
  INSTANA_INTEGRATION_ERROR: "INSTANA_INTEGRATION_ERROR",
  INSUFFICIENT_DATADOG_METRICS: "INSUFFICIENT_DATADOG_METRICS",
  INSUFFICIENT_DYNATRACE_METRICS: "INSUFFICIENT_DYNATRACE_METRICS",
  INSUFFICIENT_INSTANA_METRICS: "INSUFFICIENT_INSTANA_METRICS",
  INSUFFICIENT_NEWRELIC_METRICS: "INSUFFICIENT_NEWRELIC_METRICS",
  INTEGRATION_SUCCESS: "INTEGRATION_SUCCESS",
  NEWRELIC_INTEGRATION_ERROR: "NEWRELIC_INTEGRATION_ERROR",
  NO_EXTERNAL_METRIC_SET: "NO_EXTERNAL_METRIC_SET",
} as const;

/**
 * @public
 */
export type ExternalMetricStatusCode = (typeof ExternalMetricStatusCode)[keyof typeof ExternalMetricStatusCode];

/**
 * <p>
 *             Describes Compute Optimizer's integration status with your chosen external metric provider. For example, Datadog.
 *         </p>
 * @public
 */
export interface ExternalMetricStatus {
  /**
   * <p>
   *             The status code for Compute Optimizer's integration with an external metrics provider.
   *         </p>
   * @public
   */
  statusCode?: ExternalMetricStatusCode | undefined;

  /**
   * <p>
   *             The reason for Compute Optimizer's integration status with your external metric provider.
   *         </p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceRecommendationFindingReasonCode = {
  CPU_OVER_PROVISIONED: "CPUOverprovisioned",
  CPU_UNDER_PROVISIONED: "CPUUnderprovisioned",
  DISK_IOPS_OVER_PROVISIONED: "DiskIOPSOverprovisioned",
  DISK_IOPS_UNDER_PROVISIONED: "DiskIOPSUnderprovisioned",
  DISK_THROUGHPUT_OVER_PROVISIONED: "DiskThroughputOverprovisioned",
  DISK_THROUGHPUT_UNDER_PROVISIONED: "DiskThroughputUnderprovisioned",
  EBS_IOPS_OVER_PROVISIONED: "EBSIOPSOverprovisioned",
  EBS_IOPS_UNDER_PROVISIONED: "EBSIOPSUnderprovisioned",
  EBS_THROUGHPUT_OVER_PROVISIONED: "EBSThroughputOverprovisioned",
  EBS_THROUGHPUT_UNDER_PROVISIONED: "EBSThroughputUnderprovisioned",
  GPU_MEMORY_OVER_PROVISIONED: "GPUMemoryOverprovisioned",
  GPU_MEMORY_UNDER_PROVISIONED: "GPUMemoryUnderprovisioned",
  GPU_OVER_PROVISIONED: "GPUOverprovisioned",
  GPU_UNDER_PROVISIONED: "GPUUnderprovisioned",
  MEMORY_OVER_PROVISIONED: "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED: "MemoryUnderprovisioned",
  NETWORK_BANDWIDTH_OVER_PROVISIONED: "NetworkBandwidthOverprovisioned",
  NETWORK_BANDWIDTH_UNDER_PROVISIONED: "NetworkBandwidthUnderprovisioned",
  NETWORK_PPS_OVER_PROVISIONED: "NetworkPPSOverprovisioned",
  NETWORK_PPS_UNDER_PROVISIONED: "NetworkPPSUnderprovisioned",
} as const;

/**
 * @public
 */
export type InstanceRecommendationFindingReasonCode =
  (typeof InstanceRecommendationFindingReasonCode)[keyof typeof InstanceRecommendationFindingReasonCode];

/**
 * @public
 * @enum
 */
export const InstanceIdle = {
  FALSE: "False",
  TRUE: "True",
} as const;

/**
 * @public
 */
export type InstanceIdle = (typeof InstanceIdle)[keyof typeof InstanceIdle];

/**
 * @public
 * @enum
 */
export const InstanceState = {
  PENDING: "pending",
  RUNNING: "running",
  SHUTTING_DOWN: "shutting-down",
  STOPPED: "stopped",
  STOPPING: "stopping",
  TERMINATED: "terminated",
} as const;

/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

/**
 * @public
 * @enum
 */
export const PlatformDifference = {
  ARCHITECTURE: "Architecture",
  HYPERVISOR: "Hypervisor",
  INSTANCE_STORE_AVAILABILITY: "InstanceStoreAvailability",
  NETWORK_INTERFACE: "NetworkInterface",
  STORAGE_INTERFACE: "StorageInterface",
  VIRTUALIZATION_TYPE: "VirtualizationType",
} as const;

/**
 * @public
 */
export type PlatformDifference = (typeof PlatformDifference)[keyof typeof PlatformDifference];

/**
 * <p>
 *             An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EC2 instance
 *             recommendations. This is based on the Savings Plans and Reserved Instances pricing discounts.
 *         </p>
 * @public
 */
export interface InstanceEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for instance recommendations after applying the Savings Plans and Reserved Instances discounts.
 *         </p>
 *          <p>Savings opportunity after discounts represents the estimated monthly savings you can achieve by
 *             implementing Compute Optimizer recommendations.</p>
 * @public
 */
export interface InstanceSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost after applying the Savings Plans and Reserved Instances discounts.
   *             This saving can be achieved by adopting Compute Optimizer’s EC2 instance recommendations.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             An object that describes the estimated monthly savings possible by adopting Compute Optimizer’s Amazon EC2 instance recommendations. This is
   *             based on pricing after applying the Savings Plans and Reserved Instances discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: InstanceEstimatedMonthlySavings | undefined;
}

/**
 * <p>Describes a recommendation option for an Amazon EC2 instance.</p>
 * @public
 */
export interface InstanceRecommendationOption {
  /**
   * <p>The instance type of the instance recommendation.</p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>
   *             Describes the GPU accelerator settings for the recommended instance type.
   *         </p>
   * @public
   */
  instanceGpuInfo?: GpuInfo | undefined;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the instance
   *             recommendation option.</p>
   *          <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *          </note>
   * @public
   */
  projectedUtilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * <p>Describes the configuration differences between the current instance and the
   *             recommended instance type. You should consider the configuration differences before
   *             migrating your workloads from the current instance to the recommended instance type. The
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html">Change the instance type guide for Linux</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-resize.html">Change the instance type
   *                 guide for Windows</a> provide general guidance for getting started with an
   *             instance migration.</p>
   *          <p>Platform differences include:</p>
   *          <ul>
   *             <li>
   *                <p>
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
   *                <p>
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
   *                <p>
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
   *                <p>
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
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>Architecture</code>
   *                   </b> — The CPU
   *                     architecture between the recommended instance type and the current instance is
   *                     different. For example, the recommended instance type might use an Arm CPU
   *                     architecture and the current instance type might use a different one, such as
   *                     x86. Before migrating, you should consider recompiling the software on your
   *                     instance for the new architecture. Alternatively, you might switch to an Amazon
   *                     Machine Image (AMI) that supports the new architecture. For more information
   *                     about the CPU architecture for each instance type, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  platformDifferences?: PlatformDifference[] | undefined;

  /**
   * <p>The performance risk of the instance recommendation option.</p>
   *          <p>Performance risk indicates the likelihood of the recommended instance type not meeting
   *             the resource needs of your workload. Compute Optimizer calculates an individual
   *             performance risk score for each specification of the recommended instance, including
   *             CPU, memory, EBS throughput, EBS IOPS, disk throughput, disk IOPS, network throughput,
   *             and network PPS.
   *             The performance
   *             risk of the recommended instance is calculated as the maximum performance risk score
   *             across the analyzed resource specifications.</p>
   *          <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * <p>The rank of the instance recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>An object that describes the savings opportunity for the instance recommendation
   *             option. Savings opportunity includes the estimated monthly savings amount and
   *             percentage.</p>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             An object that describes the savings opportunity for the instance recommendation option that includes Savings Plans and Reserved Instances
   *             discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *         </p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: InstanceSavingsOpportunityAfterDiscounts | undefined;

  /**
   * <p>The level of effort required to migrate from the current instance type to the
   *             recommended instance type.</p>
   *          <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the
   *             inferred workload type and an Amazon Web Services Graviton instance type is recommended.
   *             The migration effort is <code>Medium</code> if a workload type couldn't be inferred but
   *             an Amazon Web Services Graviton instance type is recommended. The migration effort is
   *                 <code>VeryLow</code> if both the current and recommended instance types are of the
   *             same CPU architecture.</p>
   * @public
   */
  migrationEffort?: MigrationEffort | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationSourceType = {
  AURORA_DB_CLUSTER_STORAGE: "AuroraDBClusterStorage",
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EbsVolume",
  EC2_INSTANCE: "Ec2Instance",
  ECS_SERVICE: "EcsService",
  LAMBDA_FUNCTION: "LambdaFunction",
  LICENSE: "License",
  RDS_DB_INSTANCE: "RdsDBInstance",
  RDS_DB_INSTANCE_STORAGE: "RdsDBInstanceStorage",
} as const;

/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

/**
 * <p>Describes the source of a recommendation, such as an Amazon EC2 instance or
 *                 Auto Scaling group.</p>
 * @public
 */
export interface RecommendationSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation source.</p>
   * @public
   */
  recommendationSourceArn?: string | undefined;

  /**
   * <p>The resource type of the recommendation source.</p>
   * @public
   */
  recommendationSourceType?: RecommendationSourceType | undefined;
}

/**
 * <p>Describes an Amazon EC2 instance recommendation.</p>
 * @public
 */
export interface InstanceRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current instance.</p>
   * @public
   */
  instanceArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the instance.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The name of the current instance.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The instance type of the current instance.</p>
   * @public
   */
  currentInstanceType?: string | undefined;

  /**
   * <p>The finding classification of the instance.</p>
   *          <p>Findings for instances include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Underprovisioned</code>
   *                   </b>—An instance is
   *                     considered under-provisioned when at least one specification of your instance,
   *                     such as CPU, memory, or network, does not meet the performance requirements of
   *                     your workload. Under-provisioned instances may lead to poor application
   *                     performance.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b>—An instance is
   *                     considered optimized when all specifications of your instance, such as CPU,
   *                     memory, and network, meet the performance requirements of your workload and is
   *                     not over provisioned. For optimized resources, Compute Optimizer might
   *                     recommend a new generation instance type.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The valid values in your API responses appear as OVER_PROVISIONED, UNDER_PROVISIONED, or OPTIMIZED.</p>
   *          </note>
   * @public
   */
  finding?: Finding | undefined;

  /**
   * <p>The reason for the finding classification of the instance.</p>
   *          <p>Finding reason codes for instances include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUOverprovisioned</code>
   *                   </b> — The
   *                     instance’s CPU configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                         <code>CPUUtilization</code> metric of the current instance during the
   *                     look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s CPU configuration doesn't meet the performance requirements of your
   *                     workload and there is an alternative instance type that provides better CPU
   *                     performance. This is identified by analyzing the <code>CPUUtilization</code>
   *                     metric of the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MemoryOverprovisioned</code>
   *                   </b> — The
   *                     instance’s memory configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                     memory utilization metric of the current instance during the look-back
   *                     period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MemoryUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s memory configuration doesn't meet the performance requirements of
   *                     your workload and there is an alternative instance type that provides better
   *                     memory performance. This is identified by analyzing the memory utilization
   *                     metric of the current instance during the look-back period.</p>
   *                <note>
   *                   <p>Memory utilization is analyzed only for resources that have the unified
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
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EBSThroughputOverprovisioned</code>
   *                   </b> —
   *                     The instance’s EBS throughput configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code> metrics
   *                     of EBS volumes attached to the current instance during the look-back
   *                     period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EBSThroughputUnderprovisioned</code>
   *                   </b> —
   *                     The instance’s EBS throughput configuration doesn't meet the performance
   *                     requirements of your workload and there is an alternative instance type that
   *                     provides better EBS throughput performance. This is identified by analyzing the
   *                     <code>VolumeReadBytes</code> and <code>VolumeWriteBytes</code> metrics of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EBSIOPSOverprovisioned</code>
   *                   </b> — The
   *                     instance’s EBS IOPS configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                     <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metric of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>EBSIOPSUnderprovisioned</code>
   *                   </b> — The
   *                     instance’s EBS IOPS configuration doesn't meet the performance requirements of
   *                     your workload and there is an alternative instance type that provides better EBS
   *                     IOPS performance. This is identified by analyzing the
   *                     <code>VolumeReadOps</code> and <code>VolumeWriteOps</code> metric of EBS
   *                     volumes attached to the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>NetworkBandwidthOverprovisioned</code>
   *                   </b>
   *                     — The instance’s network bandwidth configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>NetworkIn</code> and <code>NetworkOut</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *                <p>
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
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>DiskIOPSOverprovisioned</code>
   *                   </b> — The
   *                     instance’s disk IOPS configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                         <code>DiskReadOps</code> and <code>DiskWriteOps</code> metrics of the
   *                     current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>DiskThroughputOverprovisioned</code>
   *                   </b> —
   *                     The instance’s disk throughput configuration can be sized down while still
   *                     meeting the performance requirements of your workload. This is identified by
   *                     analyzing the <code>DiskReadBytes</code> and <code>DiskWriteBytes</code> metrics
   *                     of the current instance during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *          <note>
   *             <p>For more information about instance metrics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/viewing_metrics_with_cloudwatch.html">List the
   *                     available CloudWatch metrics for your instances</a> in the
   *                         <i>Amazon Elastic Compute Cloud User Guide</i>. For more information
   *                 about EBS volume metrics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html">Amazon CloudWatch
   *                     metrics for Amazon EBS</a> in the <i>Amazon Elastic Compute Cloud
   *                     User Guide</i>.</p>
   *          </note>
   * @public
   */
  findingReasonCodes?: InstanceRecommendationFindingReasonCode[] | undefined;

  /**
   * <p>An array of objects that describe the utilization metrics of the instance.</p>
   * @public
   */
  utilizationMetrics?: UtilizationMetric[] | undefined;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the
   *             instance.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>An array of objects that describe the recommendation options for the instance.</p>
   * @public
   */
  recommendationOptions?: InstanceRecommendationOption[] | undefined;

  /**
   * <p>An array of objects that describe the source resource of the recommendation.</p>
   * @public
   */
  recommendationSources?: RecommendationSource[] | undefined;

  /**
   * <p>The timestamp of when the instance recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The risk of the current instance not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current instance cannot meet the performance
   *             requirements of its workload.</p>
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * <p>An object that describes the effective recommendation preferences for the
   *             instance.</p>
   * @public
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences | undefined;

  /**
   * <p>The applications that might be running on the instance as inferred by Compute Optimizer.</p>
   *          <p>Compute Optimizer can infer if one of the following applications might be running on
   *             the instance:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AmazonEmr</code> - Infers that Amazon EMR might be running on
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheCassandra</code> - Infers that Apache Cassandra might be running
   *                     on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheHadoop</code> - Infers that Apache Hadoop might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memcached</code> - Infers that Memcached might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NGINX</code> - Infers that NGINX might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PostgreSql</code> - Infers that PostgreSQL might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redis</code> - Infers that Redis might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Kafka</code> - Infers that Kafka might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SQLServer</code> - Infers that SQLServer might be running on the
   *                     instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;

  /**
   * <p>
   *             The state of the instance when the recommendation was generated.
   *         </p>
   * @public
   */
  instanceState?: InstanceState | undefined;

  /**
   * <p>
   *             A list of tags assigned to your Amazon EC2 instance recommendations.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>
   *             An object that describes Compute Optimizer's integration status with your external metrics provider.
   *         </p>
   * @public
   */
  externalMetricStatus?: ExternalMetricStatus | undefined;

  /**
   * <p>
   *             Describes the GPU accelerator settings for the current instance type.
   *         </p>
   * @public
   */
  currentInstanceGpuInfo?: GpuInfo | undefined;

  /**
   * <p>
   *             Describes if an Amazon EC2 instance is idle.
   *         </p>
   * @public
   */
  idle?: InstanceIdle | undefined;
}

/**
 * @public
 */
export interface GetEC2InstanceRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *          <p>This value is null when there are no more pages of instance recommendations to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe instance recommendations.</p>
   * @public
   */
  instanceRecommendations?: InstanceRecommendation[] | undefined;

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEC2RecommendationProjectedMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the instances for which to return recommendation
   *             projected metrics.</p>
   * @public
   */
  instanceArn: string | undefined;

  /**
   * <p>The statistic of the projected metrics.</p>
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * <p>The granularity, in seconds, of the projected metrics data points.</p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>The timestamp of the first projected metrics data point to return.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The timestamp of the last projected metrics data point to return.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 recommendation
   *             projected metrics to return in the response.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * <p>Describes a projected utilization metric of a recommendation option, such as an
 *                 Amazon EC2 instance. This represents the projected utilization of a
 *             recommendation option had you used that resource during the analyzed period.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 *          <note>
 *             <p>The <code>Cpu</code>, <code>Memory</code>, <code>GPU</code>, and <code>GPU_MEMORY</code> metrics
 *                 are the only projected utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, these
 *                     metrics are only returned for resources with the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a> and
 *                     <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent">Enabling NVIDIA GPU
 *                         utilization with the CloudWatch Agent</a>.</p>
 *          </note>
 * @public
 */
export interface ProjectedMetric {
  /**
   * <p>The name of the projected utilization metric.</p>
   *          <p>The following projected utilization metrics are returned:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cpu</code> - The projected percentage of allocated EC2 compute units
   *                     that would be in use on the recommendation option had you used that resource
   *                     during the analyzed period. This metric identifies the processing power required
   *                     to run an application on the recommendation option.</p>
   *                <p>Depending on the instance type, tools in your operating system can show a
   *                     lower percentage than CloudWatch when the instance is not allocated a full
   *                     processor core.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> - The percentage of memory that would be in use on the
   *                     recommendation option had you used that resource during the analyzed period.
   *                     This metric identifies the amount of memory required to run an application on
   *                     the recommendation option.</p>
   *                <p>Units: Percent</p>
   *                <note>
   *                   <p>The <code>Memory</code> metric is only returned for resources with
   *                         the unified CloudWatch agent installed on them. For more information,
   *                         see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU</code> - The projected percentage of allocated GPUs if you adjust your
   *                     configurations to Compute Optimizer's recommendation option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GPU_MEMORY</code> - The projected percentage of total GPU memory if you adjust your
   *                     configurations to Compute Optimizer's recommendation option.</p>
   *                <note>
   *                   <p>The <code>GPU</code> and <code>GPU_MEMORY</code> metrics are only returned for resources
   *                         with the unified CloudWatch Agent installed on them. For more information, see
   *                         <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#nvidia-cw-agent">Enabling NVIDIA GPU
   *                             utilization with the CloudWatch Agent</a>.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  name?: MetricName | undefined;

  /**
   * <p>The timestamps of the projected utilization metric.</p>
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * <p>The values of the projected utilization metrics.</p>
   * @public
   */
  values?: number[] | undefined;
}

/**
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 *          <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *          </note>
 * @public
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * <p>The recommended instance type.</p>
   * @public
   */
  recommendedInstanceType?: string | undefined;

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   *          <p>The projected metric rank correlates to the recommendation option rank. For example,
   *             the projected metric ranked as <code>1</code> is related to the recommendation option
   *             that is also ranked as <code>1</code> in the same response.</p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>An array of objects that describe a projected utilization metric.</p>
   * @public
   */
  projectedMetrics?: ProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetEC2RecommendationProjectedMetricsResponse {
  /**
   * <p>An array of objects that describes projected metrics.</p>
   * @public
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationProjectedMetricsRequest {
  /**
   * <p>
   *             The ARN that identifies the Amazon ECS service.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code>
   *          </p>
   * @public
   */
  serviceArn: string | undefined;

  /**
   * <p>
   *             The statistic of the projected metrics.
   *         </p>
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * <p>
   *             The granularity, in seconds, of the projected metrics data points.
   *         </p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>
   *             The timestamp of the first projected metrics data point to return.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The timestamp of the last projected metrics data point to return.
   *         </p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ECSServiceMetricName = {
  CPU: "Cpu",
  MEMORY: "Memory",
} as const;

/**
 * @public
 */
export type ECSServiceMetricName = (typeof ECSServiceMetricName)[keyof typeof ECSServiceMetricName];

/**
 * <p>
 *             Describes the projected metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the metric data of your service against its projected metric data.</p>
 * @public
 */
export interface ECSServiceProjectedMetric {
  /**
   * <p>
   *             The name of the projected metric.
   *         </p>
   *          <p>The following metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cpu</code> — The percentage of allocated compute units
   *                     that are currently in use on the service tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> — The percentage of memory that's
   *                     currently in use on the service tasks.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * <p>
   *             The timestamps of the projected metric.
   *         </p>
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * <p>
   *             The upper bound values for the projected metric.
   *         </p>
   * @public
   */
  upperBoundValues?: number[] | undefined;

  /**
   * <p>
   *             The lower bound values for the projected metric.
   *         </p>
   * @public
   */
  lowerBoundValues?: number[] | undefined;
}

/**
 * <p>
 *             Describes the projected metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the metric data of your service against its projected metric data.</p>
 * @public
 */
export interface ECSServiceRecommendedOptionProjectedMetric {
  /**
   * <p>
   *             The recommended CPU size for the Amazon ECS service.
   *         </p>
   * @public
   */
  recommendedCpuUnits?: number | undefined;

  /**
   * <p>
   *             The recommended memory size for the Amazon ECS service.
   *         </p>
   * @public
   */
  recommendedMemorySize?: number | undefined;

  /**
   * <p>
   *             An array of objects that describe the projected metric.
   *         </p>
   * @public
   */
  projectedMetrics?: ECSServiceProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationProjectedMetricsResponse {
  /**
   * <p>
   *             An array of objects that describes the projected metrics.
   *         </p>
   * @public
   */
  recommendedOptionProjectedMetrics?: ECSServiceRecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationsRequest {
  /**
   * <p>
   *             The ARN that identifies the Amazon ECS service.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code>
   *          </p>
   * @public
   */
  serviceArns?: string[] | undefined;

  /**
   * <p>
   *             The token to advance to the next page of Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of Amazon ECS service recommendations to return with a single request.
   *         </p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *             <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that returns a more specific list of Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  filters?: ECSServiceRecommendationFilter[] | undefined;

  /**
   * <p>
   *             Return the Amazon ECS service recommendations to the specified Amazon Web Services account IDs.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to return the Amazon ECS service recommendations to specific
   *             member accounts.</p>
   *          <p>You can only specify one account ID per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * <p>
 *             The memory size configurations of a container.
 *         </p>
 * @public
 */
export interface MemorySizeConfiguration {
  /**
   * <p>
   *             The amount of memory in the container.
   *         </p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>
   *             The limit of memory reserve for the container.
   *         </p>
   * @public
   */
  memoryReservation?: number | undefined;
}

/**
 * <p>
 *             Describes the container configurations within the tasks of your Amazon ECS service.
 *         </p>
 * @public
 */
export interface ContainerConfiguration {
  /**
   * <p>
   *             The name of the container.
   *         </p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>
   *             The memory size configurations for the container.
   *         </p>
   * @public
   */
  memorySizeConfiguration?: MemorySizeConfiguration | undefined;

  /**
   * <p>
   *             The number of CPU units reserved for the container.
   *         </p>
   * @public
   */
  cpu?: number | undefined;
}

/**
 * <p>
 *             The Amazon ECS service configurations used for recommendations.
 *         </p>
 * @public
 */
export interface ServiceConfiguration {
  /**
   * <p>
   *             The amount of memory used by the tasks in the Amazon ECS service.
   *         </p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>
   *             The number of CPU units used by the tasks in the Amazon ECS service.
   *         </p>
   * @public
   */
  cpu?: number | undefined;

  /**
   * <p>
   *             The container configurations within a task of an Amazon ECS service.
   *         </p>
   * @public
   */
  containerConfigurations?: ContainerConfiguration[] | undefined;

  /**
   * <p>
   *             Describes the Auto Scaling configuration methods for an Amazon ECS service. This affects
   *             the generated recommendations. For example, if Auto Scaling is configured on a
   *             service’s CPU, then Compute Optimizer doesn’t generate CPU size recommendations.
   *         </p>
   *          <p>The Auto Scaling configuration methods include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TARGET_TRACKING_SCALING_CPU</code> — If the Amazon ECS service is configured
   *                     to use target scaling on CPU, Compute Optimizer doesn't generate CPU recommendations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TARGET_TRACKING_SCALING_MEMORY</code> — If the Amazon ECS service is configured
   *                     to use target scaling on memory, Compute Optimizer doesn't generate memory recommendations.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about step scaling and target scaling, see
   *             <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">
   *                 Step scaling policies for Application Auto Scaling</a> and
   *             <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">
   *                 Target tracking scaling policies for Application Auto Scaling</a> in the
   *             <i>Application Auto Scaling User Guide</i>.</p>
   * @public
   */
  autoScalingConfiguration?: AutoScalingConfiguration | undefined;

  /**
   * <p>
   *             The task definition ARN used by the tasks in the Amazon ECS service.
   *         </p>
   * @public
   */
  taskDefinitionArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ECSSavingsEstimationModeSource = {
  COST_EXPLORER_RIGHTSIZING: "CostExplorerRightsizing",
  COST_OPTIMIZATION_HUB: "CostOptimizationHub",
  PUBLIC_PRICING: "PublicPricing",
} as const;

/**
 * @public
 */
export type ECSSavingsEstimationModeSource =
  (typeof ECSSavingsEstimationModeSource)[keyof typeof ECSSavingsEstimationModeSource];

/**
 * <p>
 *             Describes the savings estimation mode used for calculating savings opportunity for Amazon ECS services.
 *         </p>
 * @public
 */
export interface ECSSavingsEstimationMode {
  /**
   * <p>
   *             Describes the source for calculating the savings opportunity for Amazon ECS services.
   *         </p>
   * @public
   */
  source?: ECSSavingsEstimationModeSource | undefined;
}

/**
 * <p>
 *             Describes the effective recommendation preferences for Amazon ECS services.
 *         </p>
 * @public
 */
export interface ECSEffectiveRecommendationPreferences {
  /**
   * <p>
   *             Describes the savings estimation mode preference applied for calculating savings opportunity for Amazon ECS services.
   *         </p>
   * @public
   */
  savingsEstimationMode?: ECSSavingsEstimationMode | undefined;
}

/**
 * @public
 * @enum
 */
export const ECSServiceRecommendationFinding = {
  OPTIMIZED: "Optimized",
  OVER_PROVISIONED: "Overprovisioned",
  UNDER_PROVISIONED: "Underprovisioned",
} as const;

/**
 * @public
 */
export type ECSServiceRecommendationFinding =
  (typeof ECSServiceRecommendationFinding)[keyof typeof ECSServiceRecommendationFinding];

/**
 * @public
 * @enum
 */
export const ECSServiceRecommendationFindingReasonCode = {
  CPU_OVER_PROVISIONED: "CPUOverprovisioned",
  CPU_UNDER_PROVISIONED: "CPUUnderprovisioned",
  MEMORY_OVER_PROVISIONED: "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED: "MemoryUnderprovisioned",
} as const;

/**
 * @public
 */
export type ECSServiceRecommendationFindingReasonCode =
  (typeof ECSServiceRecommendationFindingReasonCode)[keyof typeof ECSServiceRecommendationFindingReasonCode];

/**
 * @public
 * @enum
 */
export const ECSServiceLaunchType = {
  EC2: "EC2",
  FARGATE: "Fargate",
} as const;

/**
 * @public
 */
export type ECSServiceLaunchType = (typeof ECSServiceLaunchType)[keyof typeof ECSServiceLaunchType];

/**
 * <p>
 *             The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.
 *         </p>
 * @public
 */
export interface ContainerRecommendation {
  /**
   * <p>
   *             The name of the container.
   *         </p>
   * @public
   */
  containerName?: string | undefined;

  /**
   * <p>
   *             The recommended memory size configurations for the container.
   *         </p>
   * @public
   */
  memorySizeConfiguration?: MemorySizeConfiguration | undefined;

  /**
   * <p>
   *             The recommended number of CPU units reserved for the container.
   *         </p>
   * @public
   */
  cpu?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ECSServiceMetricStatistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
} as const;

/**
 * @public
 */
export type ECSServiceMetricStatistic = (typeof ECSServiceMetricStatistic)[keyof typeof ECSServiceMetricStatistic];

/**
 * <p>
 *             Describes the projected utilization metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the utilization metric data of your service against its projected utilization metric data.</p>
 * @public
 */
export interface ECSServiceProjectedUtilizationMetric {
  /**
   * <p>
   *             The name of the projected utilization metric.
   *         </p>
   *          <p>The following utilization metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cpu</code> — The percentage of allocated compute units
   *                     that are currently in use on the service tasks.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> — The percentage of memory that's
   *                     currently in use on the service tasks.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * <p>The statistic of the projected utilization metric.</p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *             <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *             <code>SampleCount</code> during the specified period. For more information, see
   *             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *                     Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: ECSServiceMetricStatistic | undefined;

  /**
   * <p>
   *             The lower bound values for the projected utilization metrics.
   *         </p>
   * @public
   */
  lowerBoundValue?: number | undefined;

  /**
   * <p>
   *             The upper bound values for the projected utilization metrics.
   *         </p>
   * @public
   */
  upperBoundValue?: number | undefined;
}

/**
 * <p>
 *             Describes the estimated monthly savings possible for Amazon ECS services by adopting Compute Optimizer recommendations.
 *             This is based on Amazon ECS service pricing after applying Savings Plans discounts.
 *         </p>
 * @public
 */
export interface ECSEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings for Amazon ECS services.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for Amazon ECS service recommendations after applying Savings Plans discounts.
 *         </p>
 *          <p>Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
 *             You can achieve this by implementing a given Compute Optimizer recommendation.</p>
 * @public
 */
export interface ECSSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s
   *             Amazon ECS service recommendations. This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             The estimated monthly savings possible by adopting Compute Optimizer’s Amazon ECS service recommendations.
   *             This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: ECSEstimatedMonthlySavings | undefined;
}

/**
 * <p>
 *             Describes the recommendation options for an Amazon ECS service.
 *         </p>
 * @public
 */
export interface ECSServiceRecommendationOption {
  /**
   * <p>
   *             The memory size of the Amazon ECS service recommendation option.
   *         </p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>
   *             The CPU size of the Amazon ECS service recommendation option.
   *         </p>
   * @public
   */
  cpu?: number | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             Describes the savings opportunity for Amazon ECS service recommendations or for the recommendation option.
   *         </p>
   *          <p>Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
   *             You can achieve this by implementing a given Compute Optimizer recommendation.</p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: ECSSavingsOpportunityAfterDiscounts | undefined;

  /**
   * <p>
   *             An array of objects that describe the projected utilization metrics of the Amazon ECS service recommendation option.
   *         </p>
   * @public
   */
  projectedUtilizationMetrics?: ECSServiceProjectedUtilizationMetric[] | undefined;

  /**
   * <p>
   *             The CPU and memory size recommendations for the containers within the task of your Amazon ECS service.
   *         </p>
   * @public
   */
  containerRecommendations?: ContainerRecommendation[] | undefined;
}

/**
 * <p>
 *             Describes the utilization metric of an Amazon ECS service.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the utilization metric data of your service against its projected utilization metric data.</p>
 * @public
 */
export interface ECSServiceUtilizationMetric {
  /**
   * <p>
   *             The name of the utilization metric.
   *         </p>
   *          <p>The following utilization metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Cpu</code> — The amount of CPU capacity that's used in the service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> — The amount of memory that's used in the service.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: ECSServiceMetricName | undefined;

  /**
   * <p>The statistic of the utilization metric.</p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *             <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *             <code>SampleCount</code> during the specified period. For more information, see
   *             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *                     Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: ECSServiceMetricStatistic | undefined;

  /**
   * <p>
   *             The value of the utilization metric.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes an Amazon ECS service recommendation.
 *         </p>
 * @public
 */
export interface ECSServiceRecommendation {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the current Amazon ECS service.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name</code>
   *          </p>
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services account ID of the Amazon ECS service.
   *         </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>
   *             The configuration of the current Amazon ECS service.
   *         </p>
   * @public
   */
  currentServiceConfiguration?: ServiceConfiguration | undefined;

  /**
   * <p>
   *             An array of objects that describe the utilization metrics of the Amazon ECS service.
   *         </p>
   * @public
   */
  utilizationMetrics?: ECSServiceUtilizationMetric[] | undefined;

  /**
   * <p>
   *             The number of days the Amazon ECS service utilization metrics were analyzed.
   *         </p>
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * <p>
   *             The launch type the Amazon ECS service is using.
   *         </p>
   *          <note>
   *             <p>Compute Optimizer only supports the Fargate launch type.</p>
   *          </note>
   * @public
   */
  launchType?: ECSServiceLaunchType | undefined;

  /**
   * <p>
   *             The timestamp of when the Amazon ECS service recommendation was last generated.
   *         </p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>
   *             The finding classification of an Amazon ECS service.
   *         </p>
   *          <p>Findings for Amazon ECS services include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Underprovisioned</code>
   *                   </b> —
   *                     When Compute Optimizer detects that there’s not enough memory or CPU, an Amazon ECS
   *                     service is considered under-provisioned. An under-provisioned service might
   *                     result in poor application performance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Overprovisioned</code>
   *                   </b> —
   *                     When Compute Optimizer detects that there’s excessive memory or CPU, an Amazon ECS
   *                     service is considered over-provisioned. An over-provisioned service might
   *                     result in additional infrastructure costs. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b> —
   *                     When both the CPU and memory of your Amazon ECS service meet the performance requirements
   *                     of your workload, the service is considered optimized.</p>
   *             </li>
   *          </ul>
   * @public
   */
  finding?: ECSServiceRecommendationFinding | undefined;

  /**
   * <p>
   *             The reason for the finding classification of an Amazon ECS service.
   *         </p>
   *          <p>Finding reason codes for Amazon ECS services include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUUnderprovisioned</code>
   *                   </b> —
   *                     The service CPU configuration can be sized up to enhance the performance of
   *                     your workload. This is identified by analyzing the <code>CPUUtilization</code> metric of the
   *                     current service during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>CPUOverprovisioned</code>
   *                   </b> —
   *                     The service CPU configuration can be sized down while still meeting the performance
   *                     requirements of your workload. This is identified by analyzing the <code>CPUUtilization</code>
   *                     metric of the current service during the look-back period. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MemoryUnderprovisioned</code>
   *                   </b> —
   *                     The service memory configuration  can be sized up to enhance the performance of
   *                     your workload. This is identified by analyzing the <code>MemoryUtilization</code> metric of the
   *                     current service during the look-back period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>MemoryOverprovisioned</code>
   *                   </b> —
   *                     The service memory configuration can be sized down while still meeting the
   *                     performance requirements of your workload. This is identified by analyzing the
   *                     <code>MemoryUtilization</code> metric of the current service during the look-back period.</p>
   *             </li>
   *          </ul>
   * @public
   */
  findingReasonCodes?: ECSServiceRecommendationFindingReasonCode[] | undefined;

  /**
   * <p>
   *             An array of objects that describe the recommendation options for the Amazon ECS service.
   *         </p>
   * @public
   */
  serviceRecommendationOptions?: ECSServiceRecommendationOption[] | undefined;

  /**
   * <p>
   *             The risk of the current Amazon ECS service not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current service can't meet the performance
   *             requirements of its workload.
   *         </p>
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * <p>
   *             Describes the effective recommendation preferences for Amazon ECS services.
   *         </p>
   * @public
   */
  effectiveRecommendationPreferences?: ECSEffectiveRecommendationPreferences | undefined;

  /**
   * <p>
   *             A list of tags assigned to your Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetECSServiceRecommendationsResponse {
  /**
   * <p>
   *             The token to advance to the next page of Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             An array of objects that describe the Amazon ECS service recommendations.
   *         </p>
   * @public
   */
  ecsServiceRecommendations?: ECSServiceRecommendation[] | undefined;

  /**
   * <p>
   *             An array of objects that describe errors of the request.
   *         </p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetEffectiveRecommendationPreferencesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to confirm effective
   *             recommendation preferences. Only EC2 instance and Auto Scaling group ARNs are
   *             currently supported.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetEffectiveRecommendationPreferencesResponse {
  /**
   * <p>The status of the enhanced infrastructure metrics recommendation preference. Considers
   *             all applicable preferences that you might have set at the resource, account, and
   *             organization level.</p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh, and a status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.</p>
   *          <p>To validate whether the preference is applied to your last generated set of
   *             recommendations, review the <code>effectiveRecommendationPreferences</code> value in the
   *             response of the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * <p>The provider of the external metrics recommendation preference. Considers all
   *             applicable preferences that you might have set at the account and organization
   *             level.</p>
   *          <p>If the preference is applied in the latest recommendation refresh, an object with a
   *             valid <code>source</code> value appears in the response. If the preference isn't applied
   *             to the recommendations already, then this object doesn't appear in the response.</p>
   *          <p>To validate whether the preference is applied to your last generated set of
   *             recommendations, review the <code>effectiveRecommendationPreferences</code> value in the
   *             response of the <a>GetEC2InstanceRecommendations</a> actions.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * <p>
   *             The number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *         </p>
   *          <p>To validate that the preference is applied to your last generated set of recommendations, review
   *             the <code>effectiveRecommendationPreferences</code> value in the response of the
   *             GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.</p>
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * <p>
   *             The resource’s CPU and memory utilization preferences, such as threshold and headroom,
   *             that were used to generate rightsizing recommendations. It considers all applicable preferences
   *             that you set at the resource, account, and organization level.
   *         </p>
   *          <p>To validate that the preference is applied to your last generated set of recommendations, review the
   *             <code>effectiveRecommendationPreferences</code> value in the response of the
   *             GetAutoScalingGroupRecommendations or GetEC2InstanceRecommendations actions.</p>
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * <p>
   *             The resource type values that are considered as candidates when generating rightsizing recommendations.
   *             This object resolves any wildcard expressions and returns the effective list of candidate resource type
   *             values. It also considers all applicable preferences that you set at the resource, account, and
   *             organization level.
   *         </p>
   *          <p>To validate that the preference is applied to your last generated set of recommendations, review the
   *             <code>effectiveRecommendationPreferences</code> value in the response of the GetAutoScalingGroupRecommendations
   *             or GetEC2InstanceRecommendations actions.</p>
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
   * <p>The enrollment status of the account.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The reason for the enrollment status of the account.</p>
   *          <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Confirms the enrollment status of member accounts of the organization, if the account
   *             is a management account of an organization.</p>
   * @public
   */
  memberAccountsEnrolled?: boolean | undefined;

  /**
   * <p>The Unix epoch timestamp, in seconds, of when the account enrollment status was last
   *             updated.</p>
   * @public
   */
  lastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The count of organization member accounts that are opted in to the service, if your
   *             account is an organization management account.</p>
   * @public
   */
  numberOfMemberAccountsOptedIn?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EnrollmentFilterName = {
  STATUS: "Status",
} as const;

/**
 * @public
 */
export type EnrollmentFilterName = (typeof EnrollmentFilterName)[keyof typeof EnrollmentFilterName];

/**
 * <p>Describes a filter that returns a more specific list of account enrollment statuses.
 *             Use this filter with the <a>GetEnrollmentStatusesForOrganization</a>
 *             action.</p>
 * @public
 */
export interface EnrollmentFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Status</code> to return accounts with a specific enrollment status (for
   *             example, <code>Active</code>).</p>
   * @public
   */
  name?: EnrollmentFilterName | undefined;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values are <code>Active</code>, <code>Inactive</code>, <code>Pending</code>,
   *             and <code>Failed</code>.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentStatusesForOrganizationRequest {
  /**
   * <p>An array of objects to specify a filter that returns a more specific list of account
   *             enrollment statuses.</p>
   * @public
   */
  filters?: EnrollmentFilter[] | undefined;

  /**
   * <p>The token to advance to the next page of account enrollment statuses.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of account enrollment statuses to return with a single request. You
   *             can specify up to 100 statuses to return with each request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEnrollmentStatusesForOrganizationResponse {
  /**
   * <p>An array of objects that describe the enrollment statuses of organization member
   *             accounts.</p>
   * @public
   */
  accountEnrollmentStatuses?: AccountEnrollmentStatus[] | undefined;

  /**
   * <p>The token to use to advance to the next page of account enrollment statuses.</p>
   *          <p>This value is null when there are no more pages of account enrollment statuses to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Dimension = {
  SAVINGS_VALUE: "SavingsValue",
  SAVINGS_VALUE_AFTER_DISCOUNT: "SavingsValueAfterDiscount",
} as const;

/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "Asc",
  DESC: "Desc",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * <p>Describes how the recommendations are ordered.</p>
 * @public
 */
export interface OrderBy {
  /**
   * <p>The dimension values to sort the recommendations.</p>
   * @public
   */
  dimension?: Dimension | undefined;

  /**
   * <p>The order to sort the recommendations.</p>
   * @public
   */
  order?: Order | undefined;
}

/**
 * @public
 */
export interface GetIdleRecommendationsRequest {
  /**
   * <p>The ARN that identifies the idle resource.</p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>The token to advance to the next page of idle resource recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of idle resource recommendations to return with a single request. </p>
   *          <p>To retrieve the remaining results,
   *             make another request with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of idle resource recommendations.</p>
   * @public
   */
  filters?: IdleRecommendationFilter[] | undefined;

  /**
   * <p>Return the idle resource recommendations to the specified Amazon Web Services account IDs.</p>
   *          <p>If your account is the management account
   *             or the delegated administrator of an organization, use this parameter to return the idle resource recommendations to
   *             specific member accounts.</p>
   *          <p>You can only specify one account ID per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The order to sort the idle resource recommendations.</p>
   * @public
   */
  orderBy?: OrderBy | undefined;
}

/**
 * @public
 * @enum
 */
export const IdleRecommendationResourceType = {
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EBSVolume",
  EC2_INSTANCE: "EC2Instance",
  ECS_SERVICE: "ECSService",
  RDS_DB_INSTANCE: "RDSDBInstance",
} as const;

/**
 * @public
 */
export type IdleRecommendationResourceType =
  (typeof IdleRecommendationResourceType)[keyof typeof IdleRecommendationResourceType];

/**
 * <p>Returns of list of resources that doesn't have idle recommendations.</p>
 * @public
 */
export interface IdleRecommendationError {
  /**
   * <p>The ID of the error.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The type of resource associated with the error.</p>
   * @public
   */
  resourceType?: IdleRecommendationResourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const IdleFinding = {
  IDLE: "Idle",
  UNATTACHED: "Unattached",
} as const;

/**
 * @public
 */
export type IdleFinding = (typeof IdleFinding)[keyof typeof IdleFinding];

/**
 * <p>Describes the estimated monthly savings possible for idle resources by adopting Compute Optimizer recommendations.</p>
 * @public
 */
export interface IdleEstimatedMonthlySavings {
  /**
   * <p>The currency of the estimated monthly savings.</p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>The value of the estimated monthly savings for Idle resources.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Describes the savings opportunity for idle resource recommendations.</p>
 * @public
 */
export interface IdleSavingsOpportunity {
  /**
   * <p>The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer's idle resource recommendations.</p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>The estimated monthly savings possible by adopting Compute Optimizer's idle resource recommendations.</p>
   * @public
   */
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings | undefined;
}

/**
 * <p>Describes the savings opportunity for idle resource recommendations after applying discounts.</p>
 *          <p>Savings opportunity represents the estimated monthly savings after applying discounts. You can achieve this by implementing a given Compute Optimizer recommendation.</p>
 * @public
 */
export interface IdleSavingsOpportunityAfterDiscounts {
  /**
   * <p>The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer's idle resource recommendations. This includes any applicable discounts.</p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>The estimated monthly savings possible by adopting Compute Optimizer's idle resource recommendations. This includes any applicable discounts.</p>
   * @public
   */
  estimatedMonthlySavings?: IdleEstimatedMonthlySavings | undefined;
}

/**
 * @public
 * @enum
 */
export const IdleMetricName = {
  CPU: "CPU",
  DATABASE_CONNECTIONS: "DatabaseConnections",
  EBS_VOLUME_READ_IOPS: "EBSVolumeReadIOPS",
  EBS_VOLUME_WRITE_IOPS: "EBSVolumeWriteIOPS",
  MEMORY: "Memory",
  NETWORK_IN_BYTES_PER_SECOND: "NetworkInBytesPerSecond",
  NETWORK_OUT_BYTES_PER_SECOND: "NetworkOutBytesPerSecond",
  VOLUME_READ_OPS_PER_SECOND: "VolumeReadOpsPerSecond",
  VOLUME_WRITE_OPS_PER_SECOND: "VolumeWriteOpsPerSecond",
} as const;

/**
 * @public
 */
export type IdleMetricName = (typeof IdleMetricName)[keyof typeof IdleMetricName];

/**
 * <p>Describes the utilization metric of an idle resource.</p>
 * @public
 */
export interface IdleUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   * @public
   */
  name?: IdleMetricName | undefined;

  /**
   * <p>
   *             The statistic of the utilization metric.
   *         </p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *             <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *             <code>SampleCount</code> during the specified period. For more information, see
   *             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *                     Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: MetricStatistic | undefined;

  /**
   * <p>The value of the utilization metric.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Describes an Idle resource recommendation.</p>
 * @public
 */
export interface IdleRecommendation {
  /**
   * <p>The ARN of the current idle resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of resource that is idle.</p>
   * @public
   */
  resourceType?: IdleRecommendationResourceType | undefined;

  /**
   * <p>The Amazon Web Services account ID of the idle resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The finding classification of an idle resource.</p>
   * @public
   */
  finding?: IdleFinding | undefined;

  /**
   * <p>A summary of the findings for the resource.</p>
   * @public
   */
  findingDescription?: string | undefined;

  /**
   * <p>The savings opportunity for the idle resource.</p>
   * @public
   */
  savingsOpportunity?: IdleSavingsOpportunity | undefined;

  /**
   * <p>The savings opportunity for the idle resource after any applying discounts.</p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: IdleSavingsOpportunityAfterDiscounts | undefined;

  /**
   * <p>An array of objects that describe the utilization metrics of the idle resource.</p>
   * @public
   */
  utilizationMetrics?: IdleUtilizationMetric[] | undefined;

  /**
   * <p>The number of days the idle resource utilization metrics were analyzed.</p>
   * @public
   */
  lookBackPeriodInDays?: number | undefined;

  /**
   * <p>The timestamp of when the idle resource recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>A list of tags assigned to your idle resource recommendations.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetIdleRecommendationsResponse {
  /**
   * <p>The token to advance to the next page of idle resource recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe the idle resource recommendations.</p>
   * @public
   */
  idleRecommendations?: IdleRecommendation[] | undefined;

  /**
   * <p>An array of objects that describe errors of the request.</p>
   * @public
   */
  errors?: IdleRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetLambdaFunctionRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the functions for which to return
   *             recommendations.</p>
   *          <p>You can specify a qualified or unqualified ARN. If you specify an unqualified ARN
   *             without a function version suffix, Compute Optimizer will return recommendations for the
   *             latest (<code>$LATEST</code>) version of the function. If you specify a qualified ARN
   *             with a version suffix, Compute Optimizer will return recommendations for the specified
   *             function version. For more information about using function versions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">Using
   *                 versions</a> in the <i>Lambda Developer
   *             Guide</i>.</p>
   * @public
   */
  functionArns?: string[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for which to return function
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return function recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>An array of objects to specify a filter that returns a more specific list of function
   *             recommendations.</p>
   * @public
   */
  filters?: LambdaFunctionRecommendationFilter[] | undefined;

  /**
   * <p>The token to advance to the next page of function recommendations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of function recommendations to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LambdaSavingsEstimationModeSource = {
  COST_EXPLORER_RIGHTSIZING: "CostExplorerRightsizing",
  COST_OPTIMIZATION_HUB: "CostOptimizationHub",
  PUBLIC_PRICING: "PublicPricing",
} as const;

/**
 * @public
 */
export type LambdaSavingsEstimationModeSource =
  (typeof LambdaSavingsEstimationModeSource)[keyof typeof LambdaSavingsEstimationModeSource];

/**
 * <p>
 *             Describes the savings estimation used for calculating savings opportunity for Lambda functions.
 *         </p>
 * @public
 */
export interface LambdaSavingsEstimationMode {
  /**
   * <p>
   *             Describes the source for calculation of savings opportunity for Lambda functions.
   *         </p>
   * @public
   */
  source?: LambdaSavingsEstimationModeSource | undefined;
}

/**
 * <p>
 *             Describes the effective recommendation preferences for Lambda functions.
 *         </p>
 * @public
 */
export interface LambdaEffectiveRecommendationPreferences {
  /**
   * <p>
   *             Describes the savings estimation mode applied for calculating savings opportunity for Lambda functions.
   *         </p>
   * @public
   */
  savingsEstimationMode?: LambdaSavingsEstimationMode | undefined;
}

/**
 * @public
 * @enum
 */
export const LambdaFunctionRecommendationFinding = {
  NOT_OPTIMIZED: "NotOptimized",
  OPTIMIZED: "Optimized",
  UNAVAILABLE: "Unavailable",
} as const;

/**
 * @public
 */
export type LambdaFunctionRecommendationFinding =
  (typeof LambdaFunctionRecommendationFinding)[keyof typeof LambdaFunctionRecommendationFinding];

/**
 * @public
 * @enum
 */
export const LambdaFunctionRecommendationFindingReasonCode = {
  INCONCLUSIVE: "Inconclusive",
  INSUFFICIENT_DATA: "InsufficientData",
  MEMORY_OVER_PROVISIONED: "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED: "MemoryUnderprovisioned",
} as const;

/**
 * @public
 */
export type LambdaFunctionRecommendationFindingReasonCode =
  (typeof LambdaFunctionRecommendationFindingReasonCode)[keyof typeof LambdaFunctionRecommendationFindingReasonCode];

/**
 * @public
 * @enum
 */
export const LambdaFunctionMemoryMetricName = {
  DURATION: "Duration",
} as const;

/**
 * @public
 */
export type LambdaFunctionMemoryMetricName =
  (typeof LambdaFunctionMemoryMetricName)[keyof typeof LambdaFunctionMemoryMetricName];

/**
 * @public
 * @enum
 */
export const LambdaFunctionMemoryMetricStatistic = {
  EXPECTED: "Expected",
  LOWER_BOUND: "LowerBound",
  UPPER_BOUND: "UpperBound",
} as const;

/**
 * @public
 */
export type LambdaFunctionMemoryMetricStatistic =
  (typeof LambdaFunctionMemoryMetricStatistic)[keyof typeof LambdaFunctionMemoryMetricStatistic];

/**
 * <p>Describes a projected utilization metric of an Lambda function
 *             recommendation option.</p>
 * @public
 */
export interface LambdaFunctionMemoryProjectedMetric {
  /**
   * <p>The name of the projected utilization metric.</p>
   * @public
   */
  name?: LambdaFunctionMemoryMetricName | undefined;

  /**
   * <p>The statistic of the projected utilization metric.</p>
   * @public
   */
  statistic?: LambdaFunctionMemoryMetricStatistic | undefined;

  /**
   * <p>The values of the projected utilization metrics.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the estimated monthly savings possible for Lambda functions by adopting Compute Optimizer recommendations. This is based
 *             on Lambda functions pricing after applying Savings Plans discounts.
 *         </p>
 * @public
 */
export interface LambdaEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for Lambda functions recommendations after applying Savings Plans discounts.
 *         </p>
 *          <p>Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
 *             You can achieve this by implementing a given Compute Optimizer recommendation.</p>
 * @public
 */
export interface LambdaSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s Lambda
   *             function recommendations. This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             The estimated monthly savings possible by adopting Compute Optimizer’s Lambda function recommendations. This
   *             includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: LambdaEstimatedMonthlySavings | undefined;
}

/**
 * <p>Describes a recommendation option for an Lambda function.</p>
 * @public
 */
export interface LambdaFunctionMemoryRecommendationOption {
  /**
   * <p>The rank of the function recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>The memory size, in MB, of the function recommendation option.</p>
   * @public
   */
  memorySize?: number | undefined;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the function
   *             recommendation option.</p>
   * @public
   */
  projectedUtilizationMetrics?: LambdaFunctionMemoryProjectedMetric[] | undefined;

  /**
   * <p>An object that describes the savings opportunity for the Lambda function
   *             recommendation option. Savings opportunity includes the estimated monthly savings amount
   *             and percentage.</p>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             An object that describes the savings opportunity for the Lambda recommendation option which includes Saving Plans
   *             discounts. Savings opportunity includes the estimated monthly savings and percentage.
   *         </p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: LambdaSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * @public
 * @enum
 */
export const LambdaFunctionMetricName = {
  DURATION: "Duration",
  MEMORY: "Memory",
} as const;

/**
 * @public
 */
export type LambdaFunctionMetricName = (typeof LambdaFunctionMetricName)[keyof typeof LambdaFunctionMetricName];

/**
 * @public
 * @enum
 */
export const LambdaFunctionMetricStatistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
} as const;

/**
 * @public
 */
export type LambdaFunctionMetricStatistic =
  (typeof LambdaFunctionMetricStatistic)[keyof typeof LambdaFunctionMetricStatistic];

/**
 * <p>Describes a utilization metric of an Lambda function.</p>
 * @public
 */
export interface LambdaFunctionUtilizationMetric {
  /**
   * <p>The name of the utilization metric.</p>
   *          <p>The following utilization metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Duration</code> - The amount of time that your function code spends
   *                     processing an event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> - The amount of memory used per invocation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: LambdaFunctionMetricName | undefined;

  /**
   * <p>The statistic of the utilization metric.</p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *                 <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *                 <code>SampleCount</code> during the specified period. For more information, see
   *                 <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *             Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: LambdaFunctionMetricStatistic | undefined;

  /**
   * <p>The value of the utilization metric.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>Describes an Lambda function recommendation.</p>
 * @public
 */
export interface LambdaFunctionRecommendation {
  /**
   * <p>The Amazon Resource Name (ARN) of the current function.</p>
   * @public
   */
  functionArn?: string | undefined;

  /**
   * <p>The version number of the current function.</p>
   * @public
   */
  functionVersion?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the function.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The amount of memory, in MB, that's allocated to the current function.</p>
   * @public
   */
  currentMemorySize?: number | undefined;

  /**
   * <p>The number of times your function code was applied during the look-back period.</p>
   * @public
   */
  numberOfInvocations?: number | undefined;

  /**
   * <p>An array of objects that describe the utilization metrics of the function.</p>
   * @public
   */
  utilizationMetrics?: LambdaFunctionUtilizationMetric[] | undefined;

  /**
   * <p>The number of days for which utilization metrics were analyzed for the
   *             function.</p>
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * <p>The timestamp of when the function recommendation was last generated.</p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>The finding classification of the function.</p>
   *          <p>Findings for functions include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>Optimized</code>
   *                   </b> — The function is
   *                     correctly provisioned to run your workload based on its current configuration
   *                     and its utilization history. This finding classification does not include
   *                     finding reason codes.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>Unavailable</code>
   *                   </b> — Compute Optimizer
   *                     was unable to generate a recommendation for the function. This could be because
   *                     the function has not accumulated sufficient metric data, or the function does
   *                     not qualify for a recommendation. This finding classification can include the
   *                         <code>InsufficientData</code> and <code>Inconclusive</code> finding reason
   *                     codes.</p>
   *                <note>
   *                   <p>Functions with a finding of unavailable are not returned unless you
   *                         specify the <code>filter</code> parameter with a value of
   *                             <code>Unavailable</code> in your
   *                             <code>GetLambdaFunctionRecommendations</code> request.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  finding?: LambdaFunctionRecommendationFinding | undefined;

  /**
   * <p>The reason for the finding classification of the function.</p>
   *          <note>
   *             <p>Functions that have a finding classification of <code>Optimized</code> don't have
   *                 a finding reason code.</p>
   *          </note>
   *          <p>Finding reason codes for functions include:</p>
   *          <ul>
   *             <li>
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>MemoryUnderprovisioned</code>
   *                   </b> — The
   *                     function is under-provisioned when its memory configuration doesn't meet the
   *                     performance requirements of the workload. An under-provisioned function might
   *                     lead to poor application performance. This finding reason code is part of the
   *                         <code>NotOptimized</code> finding classification.</p>
   *             </li>
   *             <li>
   *                <p>
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
   *                <p>
   *                   <b>
   *                      <code>Inconclusive</code>
   *                   </b> — The function does
   *                     not qualify for a recommendation because Compute Optimizer cannot generate a
   *                     recommendation with a high degree of confidence. This finding reason code is
   *                     part of the <code>Unavailable</code> finding classification.</p>
   *             </li>
   *          </ul>
   * @public
   */
  findingReasonCodes?: LambdaFunctionRecommendationFindingReasonCode[] | undefined;

  /**
   * <p>An array of objects that describe the memory configuration recommendation options for
   *             the function.</p>
   * @public
   */
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[] | undefined;

  /**
   * <p>The risk of the current Lambda function not meeting the performance needs
   *             of its workloads. The higher the risk, the more likely the current Lambda
   *             function requires more memory.</p>
   * @public
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | undefined;

  /**
   * <p>
   *             Describes the effective recommendation preferences for Lambda functions.
   *         </p>
   * @public
   */
  effectiveRecommendationPreferences?: LambdaEffectiveRecommendationPreferences | undefined;

  /**
   * <p>
   *             A list of tags assigned to your Lambda function recommendations.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetLambdaFunctionRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of function recommendations.</p>
   *          <p>This value is null when there are no more pages of function recommendations to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe function recommendations.</p>
   * @public
   */
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseRecommendationsRequest {
  /**
   * <p>
   *             The ARN that identifies the Amazon EC2 instance.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:ec2:region:aws_account_id:instance/instance-id</code>
   *          </p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>
   *             The token to advance to the next page of license recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             The maximum number of license recommendations to return with a single request.
   *         </p>
   *          <p>
   *             To retrieve the remaining results, make another request with the returned
   *             <code>nextToken</code> value.
   *         </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that returns a more specific list of license recommendations.
   *         </p>
   * @public
   */
  filters?: LicenseRecommendationFilter[] | undefined;

  /**
   * <p>The ID of the Amazon Web Services account for which to return license recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return license recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseEdition = {
  ENTERPRISE: "Enterprise",
  FREE: "Free",
  NO_LICENSE_EDITION_FOUND: "NoLicenseEditionFound",
  STANDARD: "Standard",
} as const;

/**
 * @public
 */
export type LicenseEdition = (typeof LicenseEdition)[keyof typeof LicenseEdition];

/**
 * @public
 * @enum
 */
export const LicenseModel = {
  BRING_YOUR_OWN_LICENSE: "BringYourOwnLicense",
  LICENSE_INCLUDED: "LicenseIncluded",
} as const;

/**
 * @public
 */
export type LicenseModel = (typeof LicenseModel)[keyof typeof LicenseModel];

/**
 * @public
 * @enum
 */
export const LicenseName = {
  SQLSERVER: "SQLServer",
} as const;

/**
 * @public
 */
export type LicenseName = (typeof LicenseName)[keyof typeof LicenseName];

/**
 * @public
 * @enum
 */
export const MetricSourceProvider = {
  CloudWatchAppInsights: "CloudWatchApplicationInsights",
} as const;

/**
 * @public
 */
export type MetricSourceProvider = (typeof MetricSourceProvider)[keyof typeof MetricSourceProvider];

/**
 * <p>
 *             The list of metric sources required to generate recommendations for commercial software licenses.
 *         </p>
 * @public
 */
export interface MetricSource {
  /**
   * <p>
   *             The name of the metric source provider.
   *         </p>
   * @public
   */
  provider?: MetricSourceProvider | undefined;

  /**
   * <p>
   *             The ARN of the metric source provider.
   *         </p>
   * @public
   */
  providerArn?: string | undefined;
}

/**
 * <p>
 *             Describes the configuration of a license for an Amazon EC2 instance.
 *         </p>
 * @public
 */
export interface LicenseConfiguration {
  /**
   * <p>
   *             The current number of cores associated with the instance.
   *         </p>
   * @public
   */
  numberOfCores?: number | undefined;

  /**
   * <p>
   *             The instance type used in the license.
   *         </p>
   * @public
   */
  instanceType?: string | undefined;

  /**
   * <p>
   *             The operating system of the instance.
   *         </p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>
   *             The edition of the license for the application that runs on the instance.
   *         </p>
   * @public
   */
  licenseEdition?: LicenseEdition | undefined;

  /**
   * <p>
   *             The name of the license for the application that runs on the instance.
   *         </p>
   * @public
   */
  licenseName?: LicenseName | undefined;

  /**
   * <p>
   *             The license type associated with the instance.
   *         </p>
   * @public
   */
  licenseModel?: LicenseModel | undefined;

  /**
   * <p>
   *             The version of the license for the application that runs on the instance.
   *         </p>
   * @public
   */
  licenseVersion?: string | undefined;

  /**
   * <p>
   *             The list of metric sources required to generate recommendations for commercial software licenses.
   *         </p>
   * @public
   */
  metricsSource?: MetricSource[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LicenseFinding = {
  INSUFFICIENT_METRICS: "InsufficientMetrics",
  NOT_OPTIMIZED: "NotOptimized",
  OPTIMIZED: "Optimized",
} as const;

/**
 * @public
 */
export type LicenseFinding = (typeof LicenseFinding)[keyof typeof LicenseFinding];

/**
 * @public
 * @enum
 */
export const LicenseFindingReasonCode = {
  CW_APP_INSIGHTS_DISABLED: "InvalidCloudWatchApplicationInsightsSetup",
  CW_APP_INSIGHTS_ERROR: "CloudWatchApplicationInsightsError",
  LICENSE_OVER_PROVISIONED: "LicenseOverprovisioned",
  OPTIMIZED: "Optimized",
} as const;

/**
 * @public
 */
export type LicenseFindingReasonCode = (typeof LicenseFindingReasonCode)[keyof typeof LicenseFindingReasonCode];

/**
 * <p>
 *             Describes the recommendation options for licenses.
 *         </p>
 * @public
 */
export interface LicenseRecommendationOption {
  /**
   * <p>
   *             The rank of the license recommendation option.
   *         </p>
   *          <p>
   *             The top recommendation option is ranked as <code>1</code>.
   *         </p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>
   *             The operating system of a license recommendation option.
   *         </p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>
   *             The recommended edition of the license for the application that runs on the instance.
   *         </p>
   * @public
   */
  licenseEdition?: LicenseEdition | undefined;

  /**
   * <p>
   *             The recommended license type associated with the instance.
   *         </p>
   * @public
   */
  licenseModel?: LicenseModel | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;
}

/**
 * <p>
 *             Describes a license recommendation for an EC2 instance.
 *         </p>
 * @public
 */
export interface LicenseRecommendation {
  /**
   * <p>
   *             The ARN that identifies the Amazon EC2 instance.
   *         </p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services account ID of the license.
   *         </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>
   *             An object that describes the current configuration of an instance that runs on a license.
   *         </p>
   * @public
   */
  currentLicenseConfiguration?: LicenseConfiguration | undefined;

  /**
   * <p>
   *             The number of days for which utilization metrics were analyzed for an instance that runs on a license.
   *         </p>
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * <p>
   *             The timestamp of when the license recommendation was last generated.
   *         </p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>
   *             The finding classification for an instance that runs on a license.
   *         </p>
   *          <p>Findings include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>InsufficentMetrics</code> — When Compute Optimizer detects that your CloudWatch
   *                         Application Insights isn't enabled or is enabled with insufficient permissions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotOptimized</code> — When Compute Optimizer detects that your EC2 infrastructure
   *                         isn't using any of the SQL server license features you're paying for, a license is considered
   *                         not optimized.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Optimized</code> — When Compute Optimizer detects that all specifications of your
   *                         license meet the performance requirements of your workload. </p>
   *             </li>
   *          </ul>
   * @public
   */
  finding?: LicenseFinding | undefined;

  /**
   * <p>
   *             The reason for the finding classification for an instance that runs on a license.
   *         </p>
   *          <p>Finding reason codes include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Optimized</code> — All specifications of your
   *                         license meet the performance requirements of your workload. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LicenseOverprovisioned</code> — A license is considered over-provisioned when your license can be
   *                         downgraded while still meeting the performance requirements of your workload.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidCloudwatchApplicationInsights</code> — CloudWatch
   *                         Application Insights isn't configured properly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CloudwatchApplicationInsightsError</code> — There is a CloudWatch
   *                         Application Insights error. </p>
   *             </li>
   *          </ul>
   * @public
   */
  findingReasonCodes?: LicenseFindingReasonCode[] | undefined;

  /**
   * <p>
   *             An array of objects that describe the license recommendation options.
   *         </p>
   * @public
   */
  licenseRecommendationOptions?: LicenseRecommendationOption[] | undefined;

  /**
   * <p>
   *             A list of tags assigned to an EC2 instance.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetLicenseRecommendationsResponse {
  /**
   * <p>
   *             The token to use to advance to the next page of license recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             An array of objects that describe license recommendations.
   *         </p>
   * @public
   */
  licenseRecommendations?: LicenseRecommendation[] | undefined;

  /**
   * <p>
   *             An array of objects that describe errors of the request.
   *         </p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationProjectedMetricsRequest {
  /**
   * <p>
   *             The ARN that identifies the Amazon Aurora or RDS database.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}</code>
   *          </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *             The statistic of the projected metrics.
   *         </p>
   * @public
   */
  stat: MetricStatistic | undefined;

  /**
   * <p>
   *             The granularity, in seconds, of the projected metrics data points.
   *         </p>
   * @public
   */
  period: number | undefined;

  /**
   * <p>
   *             The timestamp of the first projected metrics data point to return.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The timestamp of the last projected metrics data point to return.
   *         </p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, <a>GetEC2RecommendationProjectedMetrics</a>, <a>GetRDSDatabaseRecommendations</a>, and <a>GetRDSDatabaseRecommendationProjectedMetrics</a> request.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 * @enum
 */
export const RDSDBMetricName = {
  AURORA_MEMORY_HEALTH_STATE: "AuroraMemoryHealthState",
  AURORA_MEMORY_NUM_DECLINED_SQL: "AuroraMemoryNumDeclinedSql",
  AURORA_MEMORY_NUM_KILL_CONN_TOTAL: "AuroraMemoryNumKillConnTotal",
  AURORA_MEMORY_NUM_KILL_QUERY_TOTAL: "AuroraMemoryNumKillQueryTotal",
  CPU: "CPU",
  DATABASE_CONNECTIONS: "DatabaseConnections",
  EBS_VOLUME_READ_IOPS: "EBSVolumeReadIOPS",
  EBS_VOLUME_READ_THROUGHPUT: "EBSVolumeReadThroughput",
  EBS_VOLUME_STORAGE_SPACE_UTILIZATION: "EBSVolumeStorageSpaceUtilization",
  EBS_VOLUME_WRITE_IOPS: "EBSVolumeWriteIOPS",
  EBS_VOLUME_WRITE_THROUGHPUT: "EBSVolumeWriteThroughput",
  MEMORY: "Memory",
  NETWORK_RECEIVE_THROUGHPUT: "NetworkReceiveThroughput",
  NETWORK_TRANSMIT_THROUGHPUT: "NetworkTransmitThroughput",
  READ_IOPS_EPHEMERAL_STORAGE: "ReadIOPSEphemeralStorage",
  STORAGE_NETWORK_RECEIVE_THROUGHPUT: "StorageNetworkReceiveThroughput",
  STORAGE_NETWORK_TRANSMIT_THROUGHPUT: "StorageNetworkTransmitThroughput",
  VOLUME_BYTES_USED: "VolumeBytesUsed",
  VOLUME_READ_IOPS: "VolumeReadIOPs",
  VOLUME_WRITE_IOPS: "VolumeWriteIOPs",
  WRITE_IOPS_EPHEMERAL_STORAGE: "WriteIOPSEphemeralStorage",
} as const;

/**
 * @public
 */
export type RDSDBMetricName = (typeof RDSDBMetricName)[keyof typeof RDSDBMetricName];

/**
 * <p>
 *             Describes the projected metrics of an Amazon Aurora and RDS database recommendation option.
 *         </p>
 *          <p>
 *             To determine the performance difference between your current Amazon Aurora and RDS database
 *             and the recommended option, compare the metric data of your service against
 *             its projected metric data.
 *         </p>
 * @public
 */
export interface RDSDatabaseProjectedMetric {
  /**
   * <p>
   *             The name of the projected metric.
   *         </p>
   * @public
   */
  name?: RDSDBMetricName | undefined;

  /**
   * <p>
   *             The timestamps of the projected metric.
   *         </p>
   * @public
   */
  timestamps?: Date[] | undefined;

  /**
   * <p>
   *             The values for the projected metric.
   *         </p>
   * @public
   */
  values?: number[] | undefined;
}

/**
 * <p>
 *             Describes the projected metrics of an Amazon Aurora and RDS database recommendation option.
 *         </p>
 *          <p>
 *             To determine the performance difference between your current Amazon Aurora and RDS database and the recommended option, compare
 *             the metric data of your service against its projected metric data.
 *         </p>
 * @public
 */
export interface RDSDatabaseRecommendedOptionProjectedMetric {
  /**
   * <p>
   *             The recommended DB instance class for the Amazon Aurora or RDS database.
   *         </p>
   * @public
   */
  recommendedDBInstanceClass?: string | undefined;

  /**
   * <p>
   *             The rank identifier of the Amazon Aurora or RDS DB instance recommendation option.
   *         </p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>
   *             An array of objects that describe the projected metric.
   *         </p>
   * @public
   */
  projectedMetrics?: RDSDatabaseProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationProjectedMetricsResponse {
  /**
   * <p>
   *             An array of objects that describes the projected metrics.
   *         </p>
   * @public
   */
  recommendedOptionProjectedMetrics?: RDSDatabaseRecommendedOptionProjectedMetric[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationsRequest {
  /**
   * <p>
   *             The ARN that identifies the Amazon Aurora or RDS database.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}</code>
   *          </p>
   *          <p> The following is the format of a DB Cluster ARN: </p>
   *          <p>
   *             <code>arn:aws:rds:\{region\}:\{accountId\}:cluster:\{resourceName\}</code>
   *          </p>
   * @public
   */
  resourceArns?: string[] | undefined;

  /**
   * <p>
   *             The token to advance to the next page of Amazon Aurora and RDS database recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Aurora and RDS database recommendations to return with a single
   *             request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *             <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *             An array of objects to specify a filter that returns a more specific list of Amazon Aurora and RDS database recommendations.
   *         </p>
   * @public
   */
  filters?: RDSDBRecommendationFilter[] | undefined;

  /**
   * <p>
   *             Return the Amazon Aurora and RDS database recommendations to the specified Amazon Web Services account IDs.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to return the Amazon Aurora and RDS database recommendations to specific
   *             member accounts.</p>
   *          <p>You can only specify one account ID per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, <a>GetEC2RecommendationProjectedMetrics</a>, <a>GetRDSDatabaseRecommendations</a>, and <a>GetRDSDatabaseRecommendationProjectedMetrics</a> request.</p>
   * @public
   */
  recommendationPreferences?: RecommendationPreferences | undefined;
}

/**
 * @public
 * @enum
 */
export const RDSCurrentInstancePerformanceRisk = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  VERY_LOW: "VeryLow",
} as const;

/**
 * @public
 */
export type RDSCurrentInstancePerformanceRisk =
  (typeof RDSCurrentInstancePerformanceRisk)[keyof typeof RDSCurrentInstancePerformanceRisk];

/**
 * <p>
 *             The configuration of the recommended RDS storage.
 *         </p>
 * @public
 */
export interface DBStorageConfiguration {
  /**
   * <p>
   *             The type of DB storage.
   *         </p>
   * @public
   */
  storageType?: string | undefined;

  /**
   * <p>
   *             The size of the DB storage in gigabytes (GB).
   *         </p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>
   *             The provisioned IOPs of the DB storage.
   *         </p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>
   *             The maximum limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
   *         </p>
   * @public
   */
  maxAllocatedStorage?: number | undefined;

  /**
   * <p>
   *             The storage throughput of the DB storage.
   *         </p>
   * @public
   */
  storageThroughput?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RDSEstimatedMonthlyVolumeIOPsCostVariation = {
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
  NONE: "None",
} as const;

/**
 * @public
 */
export type RDSEstimatedMonthlyVolumeIOPsCostVariation =
  (typeof RDSEstimatedMonthlyVolumeIOPsCostVariation)[keyof typeof RDSEstimatedMonthlyVolumeIOPsCostVariation];

/**
 * @public
 * @enum
 */
export const RDSSavingsEstimationModeSource = {
  COST_EXPLORER_RIGHTSIZING: "CostExplorerRightsizing",
  COST_OPTIMIZATION_HUB: "CostOptimizationHub",
  PUBLIC_PRICING: "PublicPricing",
} as const;

/**
 * @public
 */
export type RDSSavingsEstimationModeSource =
  (typeof RDSSavingsEstimationModeSource)[keyof typeof RDSSavingsEstimationModeSource];

/**
 * <p>
 *             Describes the savings estimation mode used for calculating savings opportunity for DB instances.
 *         </p>
 * @public
 */
export interface RDSSavingsEstimationMode {
  /**
   * <p>
   *             Describes the source for calculating the savings opportunity for DB instances.
   *         </p>
   * @public
   */
  source?: RDSSavingsEstimationModeSource | undefined;
}

/**
 * <p>
 *             Describes the effective recommendation preferences for Amazon Aurora and RDS databases.
 *         </p>
 * @public
 */
export interface RDSEffectiveRecommendationPreferences {
  /**
   * <p>
   *             Describes the CPU vendor and architecture for DB instance recommendations.
   *         </p>
   * @public
   */
  cpuVendorArchitectures?: CpuVendorArchitecture[] | undefined;

  /**
   * <p>Describes the activation status of the enhanced infrastructure metrics
   *             preference.
   *         </p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh, and a status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.
   *         </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *             infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.
   *         </p>
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * <p>
   *             The number of days the utilization metrics of the DB instance are analyzed.
   *         </p>
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * <p>
   *             Describes the savings estimation mode preference applied for calculating savings opportunity for DB instances.
   *         </p>
   * @public
   */
  savingsEstimationMode?: RDSSavingsEstimationMode | undefined;
}

/**
 * @public
 * @enum
 */
export const Idle = {
  FALSE: "False",
  TRUE: "True",
} as const;

/**
 * @public
 */
export type Idle = (typeof Idle)[keyof typeof Idle];

/**
 * @public
 * @enum
 */
export const RDSInstanceFinding = {
  OPTIMIZED: "Optimized",
  OVER_PROVISIONED: "Overprovisioned",
  UNDER_PROVISIONED: "Underprovisioned",
} as const;

/**
 * @public
 */
export type RDSInstanceFinding = (typeof RDSInstanceFinding)[keyof typeof RDSInstanceFinding];

/**
 * @public
 * @enum
 */
export const RDSInstanceFindingReasonCode = {
  CPU_OVER_PROVISIONED: "CPUOverprovisioned",
  CPU_UNDER_PROVISIONED: "CPUUnderprovisioned",
  DB_CLUSTER_WRITER_UNDER_PROVISIONED: "DBClusterWriterUnderprovisioned",
  EBS_IOPS_OVER_PROVISIONED: "EBSIOPSOverprovisioned",
  EBS_IOPS_UNDER_PROVISIONED: "EBSIOPSUnderprovisioned",
  EBS_THROUGHPUT_OVER_PROVISIONED: "EBSThroughputOverprovisioned",
  EBS_THROUGHPUT_UNDER_PROVISIONED: "EBSThroughputUnderprovisioned",
  INSTANCE_STORAGE_READ_IOPS_UNDER_PROVISIONED: "InstanceStorageReadIOPSUnderprovisioned",
  INSTANCE_STORAGE_WRITE_IOPS_UNDER_PROVISIONED: "InstanceStorageWriteIOPSUnderprovisioned",
  MEMORY_UNDER_PROVISIONED: "MemoryUnderprovisioned",
  NETWORK_BANDWIDTH_OVER_PROVISIONED: "NetworkBandwidthOverprovisioned",
  NETWORK_BANDWIDTH_UNDER_PROVISIONED: "NetworkBandwidthUnderprovisioned",
  NEW_ENGINE_VERSION_AVAILABLE: "NewEngineVersionAvailable",
  NEW_GENERATION_DB_INSTANCE_CLASS_AVAILABLE: "NewGenerationDBInstanceClassAvailable",
} as const;

/**
 * @public
 */
export type RDSInstanceFindingReasonCode =
  (typeof RDSInstanceFindingReasonCode)[keyof typeof RDSInstanceFindingReasonCode];

/**
 * @public
 * @enum
 */
export const RDSDBMetricStatistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
  MINIMUM: "Minimum",
} as const;

/**
 * @public
 */
export type RDSDBMetricStatistic = (typeof RDSDBMetricStatistic)[keyof typeof RDSDBMetricStatistic];

/**
 * <p>
 *             Describes the utilization metric of an Amazon Aurora and RDS database.
 *         </p>
 *          <p>
 *             To determine the performance difference between your current DB instance and the recommended option,
 *             compare the utilization metric data of your service against its projected utilization metric data.
 *         </p>
 * @public
 */
export interface RDSDBUtilizationMetric {
  /**
   * <p>
   *             The name of the utilization metric.
   *         </p>
   * @public
   */
  name?: RDSDBMetricName | undefined;

  /**
   * <p>
   *             The statistic of the utilization metric.
   *         </p>
   *          <p>The Compute Optimizer API, Command Line Interface (CLI), and SDKs
   *             return utilization metrics using only the <code>Maximum</code> statistic, which is the
   *             highest value observed during the specified period.</p>
   *          <p>The Compute Optimizer console displays graphs for some utilization metrics using the
   *             <code>Average</code> statistic, which is the value of <code>Sum</code> /
   *             <code>SampleCount</code> during the specified period. For more information, see
   *             <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/viewing-recommendations.html">Viewing resource
   *                 recommendations</a> in the <i>Compute Optimizer User
   *                     Guide</i>. You can also get averaged utilization metric data for your resources
   *             using Amazon CloudWatch. For more information, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch
   *                 User Guide</a>.</p>
   * @public
   */
  statistic?: RDSDBMetricStatistic | undefined;

  /**
   * <p>
   *             The value of the utilization metric.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the estimated monthly savings possible for DB instances by adopting
 *             Compute Optimizer recommendations. This is based on DB instance pricing after applying
 *             Savings Plans discounts.
 *         </p>
 * @public
 */
export interface RDSInstanceEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings for DB instances.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for DB instance recommendations after applying Savings Plans discounts.
 *         </p>
 *          <p>
 *             Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
 *             You can achieve this by implementing a given Compute Optimizer recommendation.
 *         </p>
 * @public
 */
export interface RDSInstanceSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s
   *             DB instance recommendations. This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             The estimated monthly savings possible by adopting Compute Optimizer’s DB instance recommendations.
   *             This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: RDSInstanceEstimatedMonthlySavings | undefined;
}

/**
 * <p>
 *             Describes the recommendation options for a DB instance.
 *         </p>
 * @public
 */
export interface RDSDBInstanceRecommendationOption {
  /**
   * <p>
   *             Describes the DB instance class recommendation option for your Amazon Aurora or RDS database.
   *         </p>
   * @public
   */
  dbInstanceClass?: string | undefined;

  /**
   * <p>
   *             An array of objects that describe the projected utilization metrics of the DB instance recommendation option.
   *         </p>
   * @public
   */
  projectedUtilizationMetrics?: RDSDBUtilizationMetric[] | undefined;

  /**
   * <p>
   *             The performance risk of the DB instance recommendation option.
   *         </p>
   * @public
   */
  performanceRisk?: number | undefined;

  /**
   * <p>
   *             The rank identifier of the DB instance recommendation option.
   *         </p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             Describes the savings opportunity for Amazon Aurora and RDS database recommendations or for the recommendation option.
   *         </p>
   *          <p>Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
   *             You can achieve this by implementing a given Compute Optimizer recommendation.</p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: RDSInstanceSavingsOpportunityAfterDiscounts | undefined;
}

/**
 * @public
 * @enum
 */
export const RDSStorageFinding = {
  NOT_OPTIMIZED: "NotOptimized",
  OPTIMIZED: "Optimized",
  OVER_PROVISIONED: "Overprovisioned",
  UNDER_PROVISIONED: "Underprovisioned",
} as const;

/**
 * @public
 */
export type RDSStorageFinding = (typeof RDSStorageFinding)[keyof typeof RDSStorageFinding];

/**
 * @public
 * @enum
 */
export const RDSStorageFindingReasonCode = {
  DB_CLUSTER_STORAGE_OPTION_AVAILABLE: "DBClusterStorageOptionAvailable",
  DB_CLUSTER_STORAGE_SAVINGS_AVAILABLE: "DBClusterStorageSavingsAvailable",
  EBS_VOLUME_ALLOCATED_STORAGE_UNDER_PROVISIONED: "EBSVolumeAllocatedStorageUnderprovisioned",
  EBS_VOLUME_IOPS_OVER_PROVISIONED: "EBSVolumeIOPSOverprovisioned",
  EBS_VOLUME_THROUGHPUT_OVER_PROVISIONED: "EBSVolumeThroughputOverprovisioned",
  EBS_VOLUME_THROUGHPUT_UNDER_PROVISIONED: "EBSVolumeThroughputUnderprovisioned",
  NEW_GENERATION_STORAGE_TYPE_AVAILABLE: "NewGenerationStorageTypeAvailable",
} as const;

/**
 * @public
 */
export type RDSStorageFindingReasonCode =
  (typeof RDSStorageFindingReasonCode)[keyof typeof RDSStorageFindingReasonCode];

/**
 * <p>
 *             Describes the estimated monthly savings possible for DB instance storage by adopting Compute Optimizer
 *             recommendations. This is based on DB instance pricing after applying Savings Plans discounts.
 *         </p>
 * @public
 */
export interface RDSStorageEstimatedMonthlySavings {
  /**
   * <p>
   *             The currency of the estimated monthly savings.
   *         </p>
   * @public
   */
  currency?: Currency | undefined;

  /**
   * <p>
   *             The value of the estimated monthly savings for DB instance storage.
   *         </p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             Describes the savings opportunity for Amazon RDS storage recommendations after applying Savings Plans discounts.
 *         </p>
 *          <p>
 *             Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts.
 *             You can achieve this by implementing a given Compute Optimizer recommendation.
 *         </p>
 * @public
 */
export interface RDSStorageSavingsOpportunityAfterDiscounts {
  /**
   * <p>
   *             The estimated monthly savings possible as a percentage of monthly cost by adopting Compute Optimizer’s
   *             DB instance storage recommendations. This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  savingsOpportunityPercentage?: number | undefined;

  /**
   * <p>
   *             The estimated monthly savings possible by adopting Compute Optimizer’s DB instance storage recommendations. This includes any applicable Savings Plans discounts.
   *         </p>
   * @public
   */
  estimatedMonthlySavings?: RDSStorageEstimatedMonthlySavings | undefined;
}

/**
 * <p>
 *             Describes the recommendation options for DB storage.
 *         </p>
 * @public
 */
export interface RDSDBStorageRecommendationOption {
  /**
   * <p>
   *             The recommended storage configuration.
   *         </p>
   * @public
   */
  storageConfiguration?: DBStorageConfiguration | undefined;

  /**
   * <p>
   *             The rank identifier of the DB storage recommendation option.
   *         </p>
   * @public
   */
  rank?: number | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>
   *             Describes the savings opportunity for DB storage recommendations or for the recommendation option.
   *         </p>
   *          <p>
   *             Savings opportunity represents the estimated monthly savings after applying Savings Plans discounts. You can achieve
   *             this by implementing a given Compute Optimizer recommendation.
   *         </p>
   * @public
   */
  savingsOpportunityAfterDiscounts?: RDSStorageSavingsOpportunityAfterDiscounts | undefined;

  /**
   * <p>
   *             The projected level of variation in monthly I/O costs for the DB storage recommendation option.
   *         </p>
   * @public
   */
  estimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation | undefined;
}

/**
 * <p>
 *             Describes an Amazon Aurora and RDS database recommendation.
 *         </p>
 * @public
 */
export interface RDSDBRecommendation {
  /**
   * <p>
   *             The ARN of the current Amazon Aurora or RDS database.
   *         </p>
   *          <p>
   *             The following is the format of the ARN:
   *         </p>
   *          <p>
   *             <code>arn:aws:rds:\{region\}:\{accountId\}:db:\{resourceName\}</code>
   *          </p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>
   *             The Amazon Web Services account ID of the Amazon Aurora or RDS database.
   *         </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>
   *             The engine of the DB instance.
   *         </p>
   * @public
   */
  engine?: string | undefined;

  /**
   * <p>
   *             The database engine version.
   *         </p>
   * @public
   */
  engineVersion?: string | undefined;

  /**
   * <p>The promotion tier for the Aurora instance.</p>
   * @public
   */
  promotionTier?: number | undefined;

  /**
   * <p>
   *             The DB instance class of the current Aurora or RDS DB instance.
   *         </p>
   * @public
   */
  currentDBInstanceClass?: string | undefined;

  /**
   * <p>
   *             The configuration of the current DB storage.
   *         </p>
   * @public
   */
  currentStorageConfiguration?: DBStorageConfiguration | undefined;

  /**
   * <p>The identifier for DB cluster.</p>
   * @public
   */
  dbClusterIdentifier?: string | undefined;

  /**
   * <p>
   *             This indicates if the DB instance is idle or not.
   *         </p>
   * @public
   */
  idle?: Idle | undefined;

  /**
   * <p>
   *             The finding classification of an Amazon Aurora and RDS DB instance.
   *         </p>
   *          <p>For more information about finding classifications, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-rds-recommendations.html#rds-recommendations-findings">
   *             Finding classifications for Aurora and RDS databases</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  instanceFinding?: RDSInstanceFinding | undefined;

  /**
   * <p>
   *             The finding classification of Amazon RDS DB instance storage.
   *         </p>
   *          <p>For more information about finding classifications, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-rds-recommendations.html#rds-recommendations-findings">
   *             Finding classifications for Aurora and RDS databases</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  storageFinding?: RDSStorageFinding | undefined;

  /**
   * <p>
   *             The reason for the finding classification of a DB instance.
   *         </p>
   * @public
   */
  instanceFindingReasonCodes?: RDSInstanceFindingReasonCode[] | undefined;

  /**
   * <p>The performance risk for the current DB instance.</p>
   * @public
   */
  currentInstancePerformanceRisk?: RDSCurrentInstancePerformanceRisk | undefined;

  /**
   * <p>
   *             The level of variation in monthly I/O costs for the current DB storage configuration.
   *         </p>
   * @public
   */
  currentStorageEstimatedMonthlyVolumeIOPsCostVariation?: RDSEstimatedMonthlyVolumeIOPsCostVariation | undefined;

  /**
   * <p>
   *             The reason for the finding classification of RDS DB instance storage.
   *         </p>
   * @public
   */
  storageFindingReasonCodes?: RDSStorageFindingReasonCode[] | undefined;

  /**
   * <p>
   *             An array of objects that describe the recommendation options for the RDS DB instance.
   *         </p>
   * @public
   */
  instanceRecommendationOptions?: RDSDBInstanceRecommendationOption[] | undefined;

  /**
   * <p>
   *             An array of objects that describe the recommendation options for DB instance storage.
   *         </p>
   * @public
   */
  storageRecommendationOptions?: RDSDBStorageRecommendationOption[] | undefined;

  /**
   * <p>
   *             An array of objects that describe the utilization metrics of the DB instance.
   *         </p>
   * @public
   */
  utilizationMetrics?: RDSDBUtilizationMetric[] | undefined;

  /**
   * <p>
   *             Describes the effective recommendation preferences for DB instances.
   *         </p>
   * @public
   */
  effectiveRecommendationPreferences?: RDSEffectiveRecommendationPreferences | undefined;

  /**
   * <p>
   *             The number of days the DB instance utilization metrics were analyzed.
   *         </p>
   * @public
   */
  lookbackPeriodInDays?: number | undefined;

  /**
   * <p>
   *             The timestamp of when the DB instance recommendation was last generated.
   *         </p>
   * @public
   */
  lastRefreshTimestamp?: Date | undefined;

  /**
   * <p>
   *             A list of tags assigned to your DB instance recommendations.
   *         </p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetRDSDatabaseRecommendationsResponse {
  /**
   * <p>
   *             The token to advance to the next page of Amazon Aurora and RDS database recommendations.
   *         </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *             An array of objects that describe the Amazon Aurora and RDS database recommendations.
   *         </p>
   * @public
   */
  rdsDBRecommendations?: RDSDBRecommendation[] | undefined;

  /**
   * <p>
   *             An array of objects that describe errors of the request.
   *         </p>
   * @public
   */
  errors?: GetRecommendationError[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationPreferencesRequest {
  /**
   * <p>The target resource type of the recommendation preference for which to return
   *             preferences.</p>
   *          <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances
   *             that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option
   *             encompasses only instances that are part of an Auto Scaling group.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>An object that describes the scope of the recommendation preference to return.</p>
   *          <p>You can return recommendation preferences that are created at the organization level
   *             (for management accounts of an organization only), account level, and resource level.
   *             For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The token to advance to the next page of recommendation preferences.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of recommendation preferences to return with a single
   *             request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SavingsEstimationMode = {
  AFTER_DISCOUNTS: "AfterDiscounts",
  BEFORE_DISCOUNTS: "BeforeDiscounts",
} as const;

/**
 * @public
 */
export type SavingsEstimationMode = (typeof SavingsEstimationMode)[keyof typeof SavingsEstimationMode];

/**
 * <p>Describes a recommendation preference.</p>
 * @public
 */
export interface RecommendationPreferencesDetail {
  /**
   * <p>An object that describes the scope of the recommendation preference.</p>
   *          <p>Recommendation preferences can be created at the organization level (for management
   *             accounts of an organization only), account level, and resource level. For more
   *             information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The target resource type of the recommendation preference to create.</p>
   *          <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances
   *             that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option
   *             encompasses only instances that are part of an Auto Scaling group.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The status of the enhanced infrastructure metrics recommendation preference.</p>
   *          <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms
   *             that the preference is applied to the recommendations, and a status of
   *                 <code>Inactive</code> confirms that the preference isn't yet applied to
   *             recommendations.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * <p>The status of the inferred workload types recommendation preference.</p>
   *          <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms
   *             that the preference is applied to the recommendations, and a status of
   *                 <code>Inactive</code> confirms that the preference isn't yet applied to
   *             recommendations.</p>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * <p> An object that describes the external metrics recommendation preference. </p>
   *          <p> If the preference is applied in the latest recommendation refresh, an object with a
   *             valid <code>source</code> value appears in the response. If the preference isn't applied
   *             to the recommendations already, then this object doesn't appear in the response. </p>
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * <p>
   *             The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *             If the preference isn’t set, this object is null.
   *         </p>
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * <p>
   *             The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom.
   *             If the preference isn’t set, this object is null.
   *         </p>
   *          <note>
   *             <p>This preference is only available for the Amazon EC2 instance resource type.</p>
   *          </note>
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * <p>
   *             The preference to control which resource type values are considered when generating rightsizing recommendations.
   *             This object resolves any wildcard expressions and returns the effective list of candidate resource type values.
   *             If the preference isn’t set, this object is null.
   *         </p>
   * @public
   */
  preferredResources?: EffectivePreferredResource[] | undefined;

  /**
   * <p>
   *             Describes the savings estimation mode used for calculating savings opportunity.
   *         </p>
   *          <p>Only the account manager or delegated administrator of your organization can activate this preference.</p>
   * @public
   */
  savingsEstimationMode?: SavingsEstimationMode | undefined;
}

/**
 * @public
 */
export interface GetRecommendationPreferencesResponse {
  /**
   * <p>The token to use to advance to the next page of recommendation preferences.</p>
   *          <p>This value is null when there are no more pages of recommendation preferences to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that describe recommendation preferences.</p>
   * @public
   */
  recommendationPreferencesDetails?: RecommendationPreferencesDetail[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationSummariesRequest {
  /**
   * <p>The ID of the Amazon Web Services account for which to return recommendation
   *             summaries.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return recommendation summaries.</p>
   *          <p>Only one account ID can be specified per request.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of recommendation summaries to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes the performance risk ratings for a given resource type.</p>
 *          <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not
 *             meeting the performance needs of their workloads, while resources with a
 *                 <code>low</code> rating are performing well in their workloads.</p>
 * @public
 */
export interface CurrentPerformanceRiskRatings {
  /**
   * <p>A count of the applicable resource types with a high performance risk rating.</p>
   * @public
   */
  high?: number | undefined;

  /**
   * <p>A count of the applicable resource types with a medium performance risk rating.</p>
   * @public
   */
  medium?: number | undefined;

  /**
   * <p>A count of the applicable resource types with a low performance risk rating.</p>
   * @public
   */
  low?: number | undefined;

  /**
   * <p>A count of the applicable resource types with a very low performance risk
   *             rating.</p>
   * @public
   */
  veryLow?: number | undefined;
}

/**
 * <p>Describes the findings summary of the idle resources.</p>
 * @public
 */
export interface IdleSummary {
  /**
   * <p>The name of the finding group for the idle resources.</p>
   * @public
   */
  name?: IdleFinding | undefined;

  /**
   * <p>The count of idle resources in the finding group.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>
 *             The estimated monthly savings after you adjust the configurations of your instances running on the
 *             inferred workload types to the recommended configurations. If the <code>inferredWorkloadTypes</code>
 *             list contains multiple entries, then the savings are the sum of the monthly savings from instances
 *             that run the exact combination of the inferred workload types.
 *         </p>
 * @public
 */
export interface InferredWorkloadSaving {
  /**
   * <p>The applications that might be running on the instance as inferred by Compute Optimizer.</p>
   *          <p>Compute Optimizer can infer if one of the following applications might be running on
   *             the instance:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AmazonEmr</code> - Infers that Amazon EMR might be running on
   *                     the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheCassandra</code> - Infers that Apache Cassandra might be running
   *                     on the instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ApacheHadoop</code> - Infers that Apache Hadoop might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memcached</code> - Infers that Memcached might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NGINX</code> - Infers that NGINX might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PostgreSql</code> - Infers that PostgreSQL might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Redis</code> - Infers that Redis might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Kafka</code> - Infers that Kafka might be running on the
   *                     instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SQLServer</code> - Infers that SQLServer might be running on the
   *                     instance.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadType[] | undefined;

  /**
   * <p>An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given
   *             resource. This is based on the On-Demand instance pricing.</p>
   * @public
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings | undefined;
}

/**
 * @public
 * @enum
 */
export const FindingReasonCode = {
  MEMORY_OVER_PROVISIONED: "MemoryOverprovisioned",
  MEMORY_UNDER_PROVISIONED: "MemoryUnderprovisioned",
} as const;

/**
 * @public
 */
export type FindingReasonCode = (typeof FindingReasonCode)[keyof typeof FindingReasonCode];

/**
 * <p>A summary of a finding reason code.</p>
 * @public
 */
export interface ReasonCodeSummary {
  /**
   * <p>The name of the finding reason code.</p>
   * @public
   */
  name?: FindingReasonCode | undefined;

  /**
   * <p>The value of the finding reason code summary.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * <p>The summary of a recommendation.</p>
 * @public
 */
export interface Summary {
  /**
   * <p>The finding classification of the recommendation.</p>
   * @public
   */
  name?: Finding | undefined;

  /**
   * <p>The value of the recommendation summary.</p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p>An array of objects that summarize a finding reason code.</p>
   * @public
   */
  reasonCodeSummaries?: ReasonCodeSummary[] | undefined;
}

/**
 * <p>A summary of a recommendation.</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>An array of objects that describe a recommendation summary.</p>
   * @public
   */
  summaries?: Summary[] | undefined;

  /**
   * <p>
   *             Describes the findings summary of the idle resources.
   *         </p>
   * @public
   */
  idleSummaries?: IdleSummary[] | undefined;

  /**
   * <p>The resource type that the recommendation summary applies to.</p>
   * @public
   */
  recommendationResourceType?: RecommendationSourceType | undefined;

  /**
   * <p>The Amazon Web Services account ID of the recommendation summary.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that describes the savings opportunity for a given resource type. Savings
   *             opportunity includes the estimated monthly savings amount and percentage.</p>
   * @public
   */
  savingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  idleSavingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>Describes the savings opportunity for recommendations of a given resource type or for
   *             the recommendation option of an individual resource.</p>
   *          <p>Savings opportunity represents the estimated monthly savings you can achieve by
   *             implementing a given Compute Optimizer recommendation.</p>
   *          <important>
   *             <p>Savings opportunity data requires that you opt in to Cost Explorer, as well as
   *                 activate <b>Receive Amazon EC2 resource
   *                     recommendations</b> in the Cost Explorer preferences page. That
   *                 creates a connection between Cost Explorer and Compute Optimizer. With this
   *                 connection, Cost Explorer generates savings estimates considering the price of
   *                 existing resources, the price of recommended resources, and historical usage data.
   *                 Estimated monthly savings reflects the projected dollar savings associated with each
   *                 of the recommendations generated. For more information, see <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-enable.html">Enabling Cost Explorer</a> and <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html">Optimizing your cost
   *                     with Rightsizing Recommendations</a> in the <i>Cost Management User
   *                     Guide</i>.</p>
   *          </important>
   * @public
   */
  aggregatedSavingsOpportunity?: SavingsOpportunity | undefined;

  /**
   * <p>An object that describes the performance risk ratings for a given resource
   *             type.</p>
   * @public
   */
  currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings | undefined;

  /**
   * <p>
   *             An array of objects that describes the estimated monthly saving amounts for the instances running on the specified
   *             <code>inferredWorkloadTypes</code>. The array contains the top five savings opportunites for the instances that run
   *             inferred workload types.
   *         </p>
   * @public
   */
  inferredWorkloadSavings?: InferredWorkloadSaving[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationSummariesResponse {
  /**
   * <p>The token to use to advance to the next page of recommendation summaries.</p>
   *          <p>This value is null when there are no more pages of recommendation summaries to
   *             return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of objects that summarize a recommendation.</p>
   * @public
   */
  recommendationSummaries?: RecommendationSummary[] | undefined;
}

/**
 * <p>
 *             The preference to control which resource type values are considered when generating rightsizing recommendations.
 *             You can specify this preference as a combination of include and exclude lists. You must specify either an
 *             <code>includeList</code> or <code>excludeList</code>. If the preference is an empty set of resource type values,
 *             an error occurs. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/rightsizing-preferences.html">
 *                 Rightsizing recommendation preferences</a> in the <i>Compute Optimizer User
 *                     Guide</i>.
 *         </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This preference is only available for the Amazon EC2 instance and Auto Scaling group resource types.</p>
 *                </li>
 *                <li>
 *                   <p>Compute Optimizer only supports the customization of <code>Ec2InstanceTypes</code>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @public
 */
export interface PreferredResource {
  /**
   * <p>
   *             The type of preferred resource to customize.
   *         </p>
   *          <note>
   *             <p>Compute Optimizer only supports the customization of <code>Ec2InstanceTypes</code>.</p>
   *          </note>
   * @public
   */
  name?: PreferredResourceName | undefined;

  /**
   * <p>
   *             The preferred resource type values to include in the recommendation candidates. You can specify the exact resource type value,
   *             such as m5.large, or use wild card expressions, such as m5. If this isn’t specified, all supported resources are included by default.
   *             You can specify up to 1000 values in this list.
   *         </p>
   * @public
   */
  includeList?: string[] | undefined;

  /**
   * <p>
   *             The preferred resource type values to exclude from the recommendation candidates. If this isn’t specified, all supported
   *             resources are included by default. You can specify up to 1000 values in this list.
   *         </p>
   * @public
   */
  excludeList?: string[] | undefined;
}

/**
 * @public
 */
export interface PutRecommendationPreferencesRequest {
  /**
   * <p>The target resource type of the recommendation preference to create.</p>
   *          <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances
   *             that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option
   *             encompasses only instances that are part of an Auto Scaling group.</p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>An object that describes the scope of the recommendation preference to create.</p>
   *          <p>You can create recommendation preferences at the organization level (for management
   *             accounts of an organization only), account level, and resource level. For more
   *             information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   *          <note>
   *             <p>You cannot create recommendation preferences for Auto Scaling groups at the
   *                 organization and account levels. You can create recommendation preferences for
   *                     Auto Scaling groups only at the resource level by specifying a scope name
   *                 of <code>ResourceArn</code> and a scope value of the Auto Scaling group Amazon
   *                 Resource Name (ARN). This will configure the preference for all instances that are
   *                 part of the specified Auto Scaling group. You also cannot create recommendation
   *                 preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for
   *                 standalone instances.</p>
   *          </note>
   * @public
   */
  scope?: Scope | undefined;

  /**
   * <p>The status of the enhanced infrastructure metrics recommendation preference to create
   *             or update.</p>
   *          <p>Specify the <code>Active</code> status to activate the preference, or specify
   *                 <code>Inactive</code> to deactivate the preference.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   * @public
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | undefined;

  /**
   * <p>The status of the inferred workload types recommendation preference to create or
   *             update.</p>
   *          <note>
   *             <p>The inferred workload type feature is active by default. To deactivate it, create
   *                 a recommendation preference.</p>
   *          </note>
   *          <p>Specify the <code>Inactive</code> status to deactivate the feature, or specify
   *                 <code>Active</code> to activate it.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/inferred-workload-types.html">Inferred workload
   *                 types</a> in the <i>Compute Optimizer User Guide</i>.</p>
   * @public
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | undefined;

  /**
   * <p>The provider of the external metrics recommendation preference to create or
   *             update.</p>
   *          <p>Specify a valid provider in the <code>source</code> field to activate the preference.
   *             To delete this preference, see the <a>DeleteRecommendationPreferences</a>
   *             action.</p>
   *          <p>This preference can only be set for the <code>Ec2Instance</code> resource type.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/external-metrics-ingestion.html">External metrics
   *                 ingestion</a> in the <i>Compute Optimizer User
   *             Guide</i>.</p>
   * @public
   */
  externalMetricsPreference?: ExternalMetricsPreference | undefined;

  /**
   * <p>
   *             The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed.
   *             When this preference isn't specified, we use the default value <code>DAYS_14</code>.
   *         </p>
   *          <p>You can only set this preference for the Amazon EC2 instance and Auto Scaling group resource types.
   *             </p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Amazon EC2 instance lookback preferences can be set at the organization, account, and resource levels.</p>
   *                </li>
   *                <li>
   *                   <p>Auto Scaling group lookback preferences can only be set at the resource level.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  lookBackPeriod?: LookBackPeriodPreference | undefined;

  /**
   * <p>
   *             The preference to control the resource’s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom. When this
   *             preference isn't specified, we use the following default values.
   *         </p>
   *          <p>CPU utilization:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>P99_5</code> for threshold</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERCENT_20</code> for headroom</p>
   *             </li>
   *          </ul>
   *          <p>Memory utilization:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PERCENT_20</code> for headroom</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>You can only set CPU and memory utilization preferences for the Amazon EC2 instance resource type.</p>
   *                </li>
   *                <li>
   *                   <p>The threshold setting isn’t available for memory utilization.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  utilizationPreferences?: UtilizationPreference[] | undefined;

  /**
   * <p>
   *             The preference to control which resource type values are considered when generating rightsizing recommendations.
   *             You can specify this preference as a combination of include and exclude lists. You must specify either an
   *             <code>includeList</code> or <code>excludeList</code>. If the preference is an empty set of resource type values,
   *             an error occurs.
   *         </p>
   *          <note>
   *             <p>You can only set this preference for the Amazon EC2 instance and Auto Scaling group resource types.</p>
   *          </note>
   * @public
   */
  preferredResources?: PreferredResource[] | undefined;

  /**
   * <p>
   *             The status of the savings estimation mode preference to create or update.
   *         </p>
   *          <p>Specify the <code>AfterDiscounts</code> status to activate the preference, or specify <code>BeforeDiscounts</code> to deactivate the preference.</p>
   *          <p>Only the account manager or delegated administrator of your organization can activate this preference.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/savings-estimation-mode.html">
   *             Savings estimation mode</a> in the <i>Compute Optimizer User Guide</i>.</p>
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
   * <p>The new enrollment status of the account.</p>
   *          <p>The following status options are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Active</code> - Opts in your account to the Compute Optimizer service.
   *                         Compute Optimizer begins analyzing the configuration and utilization metrics
   *                     of your Amazon Web Services resources after you opt in. For more information, see
   *                         <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html">Metrics analyzed by Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Inactive</code> - Opts out your account from the Compute Optimizer
   *                     service. Your account's recommendations and related metrics data will be deleted
   *                     from Compute Optimizer after you opt out.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Pending</code> and <code>Failed</code> options cannot be used to update
   *                 the enrollment status of an account. They are returned in the response of a request
   *                 to update the enrollment status of an account.</p>
   *          </note>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the account is the
   *             management account of an organization.</p>
   * @public
   */
  includeMemberAccounts?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateEnrollmentStatusResponse {
  /**
   * <p>The enrollment status of the account.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The reason for the enrollment status of the account. For example, an account might
   *             show a status of <code>Pending</code> because member accounts of an organization require
   *             more time to be enrolled in the service.</p>
   * @public
   */
  statusReason?: string | undefined;
}
