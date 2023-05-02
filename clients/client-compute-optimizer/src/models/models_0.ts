// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ComputeOptimizerServiceException as __BaseException } from "./ComputeOptimizerServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * @public
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
   *          <p>For example, an account might show a status of <code>Pending</code> because member
   *             accounts of an organization require more time to be enrolled in the service.</p>
   */
  statusReason?: string;

  /**
   * <p>The Unix epoch timestamp, in seconds, of when the account enrollment status was last
   *             updated.</p>
   */
  lastUpdatedTimestamp?: Date;
}

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
 * @public
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
 * @public
 * <p> Describes the external metrics preferences for EC2 rightsizing recommendations.
 *         </p>
 */
export interface ExternalMetricsPreference {
  /**
   * <p> Contains the source options for external metrics preferences. </p>
   */
  source?: ExternalMetricsSource | string;
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
 * <p>Describes the effective recommendation preferences for a resource.</p>
 */
export interface EffectiveRecommendationPreferences {
  /**
   * <p>Describes the CPU vendor and architecture for an instance or Auto Scaling group
   *             recommendations.</p>
   *          <p>For example, when you specify <code>AWS_ARM64</code> with:</p>
   *          <ul>
   *             <li>
   *                <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     returns recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton2 instance type
   *                     recommendations only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     exports recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *          </ul>
   */
  cpuVendorArchitectures?: (CpuVendorArchitecture | string)[];

  /**
   * <p>Describes the activation status of the enhanced infrastructure metrics
   *             preference.</p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh, and a status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | string;

  /**
   * <p>Describes the activation status of the inferred workload types preference.</p>
   *          <p>A status of <code>Active</code> confirms that the preference is applied in the latest
   *             recommendation refresh. A status of <code>Inactive</code> confirms that it's not yet
   *             applied to recommendations.</p>
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | string;

  /**
   * <p> An object that describes the external metrics recommendation preference. </p>
   *          <p> If the preference is applied in the latest recommendation refresh, an object with a
   *             valid <code>source</code> value appears in the response. If the preference isn't applied
   *             to the recommendations already, then this object doesn't appear in the response. </p>
   */
  externalMetricsPreference?: ExternalMetricsPreference;
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
 * @public
 * <p>Describes a utilization metric of a resource, such as an Amazon EC2
 *             instance.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
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
   */
  name?: MetricName | string;

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
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
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
 * @public
 * <p>Describes the estimated monthly savings amount possible, based on On-Demand instance
 *             pricing, by adopting Compute Optimizer recommendations for a given resource.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/view-ec2-recommendations.html#ec2-savings-calculation">Estimated monthly savings and savings opportunities</a> in the
 *                     <i>Compute Optimizer User Guide</i>.</p>
 */
export interface EstimatedMonthlySavings {
  /**
   * <p>The currency of the estimated monthly
   *             savings.</p>
   */
  currency?: Currency | string;

  /**
   * <p>The value of the estimated monthly savings.</p>
   */
  value?: number;
}

/**
 * @public
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
 */
export interface SavingsOpportunity {
  /**
   * <p>The estimated monthly savings possible as a percentage of monthly cost by adopting
   *                 Compute Optimizer recommendations for a given resource.</p>
   */
  savingsOpportunityPercentage?: number;

  /**
   * <p>An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given
   *             resource. This is based on the On-Demand instance pricing..</p>
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings;
}

/**
 * @public
 * <p>Describes a recommendation option for an Auto Scaling group.</p>
 */
export interface AutoScalingGroupRecommendationOption {
  /**
   * <p>An array of objects that describe an Auto Scaling group configuration.</p>
   */
  configuration?: AutoScalingGroupConfiguration;

  /**
   * <p>An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.</p>
   *          <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *          </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

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
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the Auto Scaling group recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>An object that describes the savings opportunity for the Auto Scaling group
   *             recommendation option. Savings opportunity includes the estimated monthly savings amount
   *             and percentage.</p>
   */
  savingsOpportunity?: SavingsOpportunity;

  /**
   * <p>The level of effort required to migrate from the current instance type to the
   *             recommended instance type.</p>
   *          <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the
   *             inferred workload type and an Amazon Web Services Graviton instance type is recommended.
   *             The migration effort is <code>Medium</code> if a workload type couldn't be inferred but
   *             an Amazon Web Services Graviton instance type is recommended. The migration effort is
   *                 <code>VeryLow</code> if both the current and recommended instance types are of the
   *             same CPU architecture.</p>
   */
  migrationEffort?: MigrationEffort | string;
}

/**
 * @public
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
   * <p>The timestamp of when the Auto Scaling group recommendation was last
   *             generated.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The risk of the current Auto Scaling group not meeting the performance needs of
   *             its workloads. The higher the risk, the more likely the current Auto Scaling group
   *             configuration has insufficient capacity and cannot meet workload requirements.</p>
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | string;

  /**
   * <p>An object that describes the effective recommendation preferences for the Auto Scaling group.</p>
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;

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
   */
  inferredWorkloadTypes?: (InferredWorkloadType | string)[];
}

/**
 * @public
 * @enum
 */
export const RecommendationPreferenceName = {
  ENHANCED_INFRASTRUCTURE_METRICS: "EnhancedInfrastructureMetrics",
  EXTERNAL_METRICS_PREFERENCE: "ExternalMetricsPreference",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
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
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EbsVolume",
  EC2_INSTANCE: "Ec2Instance",
  ECS_SERVICE: "EcsService",
  LAMBDA_FUNCTION: "LambdaFunction",
  NOT_APPLICABLE: "NotApplicable",
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
 * @public
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
   */
  name?: ScopeName | string;

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
   */
  value?: string;
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
   *          <note>
   *             <p>The valid values for this parameter are <code>Ec2Instance</code> and
   *                     <code>AutoScalingGroup</code>.</p>
   *          </note>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>An object that describes the scope of the recommendation preference to delete.</p>
   *          <p>You can delete recommendation preferences that are created at the organization level
   *             (for management accounts of an organization only), account level, and resource level.
   *             For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  scope?: Scope;

  /**
   * <p>The name of the recommendation preference to delete.</p>
   */
  recommendationPreferenceNames: (RecommendationPreferenceName | string)[] | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationPreferencesResponse {}

/**
 * @public
 * <p>An internal error has occurred. Try your call again.</p>
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
 * @public
 * <p>The value supplied for the input parameter is out of range or not valid.</p>
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
 * @public
 * <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
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
 * @public
 * <p>The account is not opted in to Compute Optimizer.</p>
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
 * @public
 * <p>A resource that is required for the action doesn't exist.</p>
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
 * @public
 * <p>The request has failed due to a temporary failure of the server.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
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
 * @public
 * <p>Describes a filter that returns a more specific list of recommendation export jobs.
 *             Use this filter with the <a>DescribeRecommendationExportJobs</a>
 *             action.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>Filter</code> with
 *             the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 */
export interface JobFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>ResourceType</code> to return export jobs of a specific resource type
   *             (for example, <code>Ec2Instance</code>).</p>
   *          <p>Specify <code>JobStatus</code> to return export jobs with a specific status (e.g,
   *                 <code>Complete</code>).</p>
   */
  name?: JobFilterName | string;

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
   */
  values?: string[];
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
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
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
   *          <p>The key uniquely identifies the object, or export file, in the S3 bucket.</p>
   */
  key?: string;

  /**
   * <p>The Amazon S3 bucket key of a metadata file.</p>
   *          <p>The key uniquely identifies the object, or metadata file, in the S3 bucket.</p>
   */
  metadataKey?: string;
}

/**
 * @public
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
 * @public
 * <p>Describes a recommendation export job.</p>
 *          <p>Use the <a>DescribeRecommendationExportJobs</a> action to view your
 *             recommendation export jobs.</p>
 *          <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
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

/**
 * @public
 */
export interface DescribeRecommendationExportJobsResponse {
  /**
   * <p>An array of objects that describe recommendation export jobs.</p>
   */
  recommendationExportJobs?: RecommendationExportJob[];

  /**
   * <p>The token to use to advance to the next page of export jobs.</p>
   *          <p>This value is null when there are no more pages of export jobs to return.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ExportableAutoScalingGroupField = {
  ACCOUNT_ID: "AccountId",
  AUTO_SCALING_GROUP_ARN: "AutoScalingGroupArn",
  AUTO_SCALING_GROUP_NAME: "AutoScalingGroupName",
  CURRENT_CONFIGURATION_DESIRED_CAPACITY: "CurrentConfigurationDesiredCapacity",
  CURRENT_CONFIGURATION_INSTANCE_TYPE: "CurrentConfigurationInstanceType",
  CURRENT_CONFIGURATION_MAX_SIZE: "CurrentConfigurationMaxSize",
  CURRENT_CONFIGURATION_MIN_SIZE: "CurrentConfigurationMinSize",
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
  FINDING: "Finding",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONFIGURATION_DESIRED_CAPACITY: "RecommendationOptionsConfigurationDesiredCapacity",
  RECOMMENDATION_OPTIONS_CONFIGURATION_INSTANCE_TYPE: "RecommendationOptionsConfigurationInstanceType",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MAX_SIZE: "RecommendationOptionsConfigurationMaxSize",
  RECOMMENDATION_OPTIONS_CONFIGURATION_MIN_SIZE: "RecommendationOptionsConfigurationMinSize",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_MIGRATION_EFFORT: "RecommendationOptionsMigrationEffort",
  RECOMMENDATION_OPTIONS_NETWORK: "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE: "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
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
 * @public
 * <p>Describes a filter that returns a more specific list of recommendations. Use this
 *             filter with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action,
 *                 <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, and <code>JobFilter</code> with
 *             the <a>DescribeRecommendationExportJobs</a> action.</p>
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
   */
  name?: FilterName | string;

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
   */
  values?: string[];
}

/**
 * @public
 * <p>Describes the recommendation preferences to return in the response of a <a>GetAutoScalingGroupRecommendations</a>, <a>GetEC2InstanceRecommendations</a>, and <a>GetEC2RecommendationProjectedMetrics</a> request.</p>
 */
export interface RecommendationPreferences {
  /**
   * <p>Specifies the CPU vendor and architecture for Amazon EC2 instance and Auto Scaling group recommendations.</p>
   *          <p>For example, when you specify <code>AWS_ARM64</code> with:</p>
   *          <ul>
   *             <li>
   *                <p>A <a>GetEC2InstanceRecommendations</a> or <a>GetAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     returns recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>GetEC2RecommendationProjectedMetrics</a> request, Compute Optimizer returns projected utilization metrics for Graviton2 instance type
   *                     recommendations only.</p>
   *             </li>
   *             <li>
   *                <p>A <a>ExportEC2InstanceRecommendations</a> or <a>ExportAutoScalingGroupRecommendations</a> request, Compute Optimizer
   *                     exports recommendations that consist of Graviton2 instance types only.</p>
   *             </li>
   *          </ul>
   */
  cpuVendorArchitectures?: (CpuVendorArchitecture | string)[];
}

/**
 * @public
 * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
 *             key prefix for a recommendations export job.</p>
 *          <p>You must create the destination Amazon S3 bucket for your recommendations
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
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy to allow Compute Optimizer to write the export file to it. If you plan to specify
   *             an object prefix when you create the export job, you must include the object prefix in
   *             the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

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
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An object to specify the preferences for the Auto Scaling group recommendations
   *             to export.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

/**
 * @public
 */
export interface ExportAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   */
  s3Destination?: S3Destination;
}

/**
 * @public
 * <p>The request exceeds a limit of the service.</p>
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
  CURRENT_CONFIGURATION_VOLUME_BASELINE_IOPS: "CurrentConfigurationVolumeBaselineIOPS",
  CURRENT_CONFIGURATION_VOLUME_BASELINE_THROUGHPUT: "CurrentConfigurationVolumeBaselineThroughput",
  CURRENT_CONFIGURATION_VOLUME_BURST_IOPS: "CurrentConfigurationVolumeBurstIOPS",
  CURRENT_CONFIGURATION_VOLUME_BURST_THROUGHPUT: "CurrentConfigurationVolumeBurstThroughput",
  CURRENT_CONFIGURATION_VOLUME_SIZE: "CurrentConfigurationVolumeSize",
  CURRENT_CONFIGURATION_VOLUME_TYPE: "CurrentConfigurationVolumeType",
  CURRENT_MONTHLY_PRICE: "CurrentMonthlyPrice",
  CURRENT_PERFORMANCE_RISK: "CurrentPerformanceRisk",
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
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_MONTHLY_PRICE: "RecommendationOptionsMonthlyPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
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
 * @public
 * <p>Describes a filter that returns a more specific list of Amazon Elastic Block Store
 *                 (Amazon EBS) volume recommendations. Use this filter with the <a>GetEBSVolumeRecommendations</a> action.</p>
 *          <p>You can use <code>LambdaFunctionRecommendationFilter</code> with the <a>GetLambdaFunctionRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
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
   */
  name?: EBSFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values are <code>Optimized</code>, or <code>NotOptimized</code>.</p>
   */
  values?: string[];
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
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
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
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

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
   */
  includeMemberAccounts?: boolean;
}

/**
 * @public
 */
export interface ExportEBSVolumeRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   */
  s3Destination?: S3Destination;
}

/**
 * @public
 * @enum
 */
export const ExportableInstanceField = {
  ACCOUNT_ID: "AccountId",
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
  FINDING: "Finding",
  Finding_Reason_Codes: "FindingReasonCodes",
  INFERRED_WORKLOAD_TYPES: "InferredWorkloadTypes",
  INSTANCE_ARN: "InstanceArn",
  INSTANCE_NAME: "InstanceName",
  INSTANCE_STATE: "InstanceState",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_ARN: "RecommendationsSourcesRecommendationSourceArn",
  RECOMMENDATIONS_SOURCES_RECOMMENDATION_SOURCE_TYPE: "RecommendationsSourcesRecommendationSourceType",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_INSTANCE_TYPE: "RecommendationOptionsInstanceType",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_MIGRATION_EFFORT: "RecommendationOptionsMigrationEffort",
  RECOMMENDATION_OPTIONS_NETWORK: "RecommendationOptionsNetwork",
  RECOMMENDATION_OPTIONS_ON_DEMAND_PRICE: "RecommendationOptionsOnDemandPrice",
  RECOMMENDATION_OPTIONS_PERFORMANCE_RISK: "RecommendationOptionsPerformanceRisk",
  RECOMMENDATION_OPTIONS_PLATFORM_DIFFERENCES: "RecommendationOptionsPlatformDifferences",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
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
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
   *             export before you create the export job. Compute Optimizer does not create the S3 bucket
   *             for you. After you create the S3 bucket, ensure that it has the required permissions
   *             policy to allow Compute Optimizer to write the export file to it.
   *             If you plan to
   *             specify an object prefix when you create the export job, you must include the object
   *             prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the
   *                     <i>Compute Optimizer User Guide</i>.</p>
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>The format of the export file.</p>
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

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
   */
  includeMemberAccounts?: boolean;

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to export.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
}

/**
 * @public
 */
export interface ExportEC2InstanceRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>An object that describes the destination Amazon S3 bucket of a recommendations
   *             export file.</p>
   */
  s3Destination?: S3Destination;
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
  FINDING: "Finding",
  FINDING_REASON_CODES: "FindingReasonCodes",
  LAST_REFRESH_TIMESTAMP: "LastRefreshTimestamp",
  LAUNCH_TYPE: "LaunchType",
  LOOKBACK_PERIOD_IN_DAYS: "LookbackPeriodInDays",
  RECOMMENDATION_OPTIONS_CONTAINER_RECOMMENDATIONS: "RecommendationOptionsContainerRecommendations",
  RECOMMENDATION_OPTIONS_CPU: "RecommendationOptionsCpu",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_CURRENCY: "RecommendationOptionsEstimatedMonthlySavingsCurrency",
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_MEMORY: "RecommendationOptionsMemory",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_CPU_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsCpuMaximum",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_MEMORY_MAXIMUM:
    "RecommendationOptionsProjectedUtilizationMetricsMemoryMaximum",
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
 * @public
 * <p>
 *             Describes a filter that returns a more specific list of Amazon ECS service
 *             recommendations. Use this filter with the <a>GetECSServiceRecommendations</a> action.
 *         </p>
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
   */
  name?: ECSServiceRecommendationFilterName | string;

  /**
   * <p>
   *             The value of the filter.
   *         </p>
   *          <p>The valid values for this parameter are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as <code>Finding</code>, specify
   *                     <code>Optimized</code>, <code>NotOptimized</code>, or <code>Unavailable</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify the <code>name</code> parameter as <code>FindingReasonCode</code>, specify
   *                     <code>CPUUnderprovisioned</code>, <code>CPUOverprovisioned</code>,
   *                     <code>MemoryUnderprovisioned</code>, or <code>MemoryOverprovisioned</code>.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
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
   */
  accountIds?: string[];

  /**
   * <p>
   *             An array of objects to specify a filter that exports a more specific set
   *             of Amazon ECS service recommendations.
   *         </p>
   */
  filters?: ECSServiceRecommendationFilter[];

  /**
   * <p>The recommendations data to include in the export file. For more information about the
   *             fields that can be exported, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html#exported-files">Exported files</a> in the <i>Compute Optimizer User
   *                     Guide</i>.</p>
   */
  fieldsToExport?: (ExportableECSServiceField | string)[];

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
   */
  s3DestinationConfig: S3DestinationConfig | undefined;

  /**
   * <p>
   *             The format of the export file.
   *         </p>
   *          <p>The CSV file is the only export file format currently supported.</p>
   */
  fileFormat?: FileFormat | string;

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
   */
  includeMemberAccounts?: boolean;
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
   */
  jobId?: string;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   */
  s3Destination?: S3Destination;
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
  RECOMMENDATION_OPTIONS_ESTIMATED_MONTHLY_SAVINGS_VALUE: "RecommendationOptionsEstimatedMonthlySavingsValue",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_EXPECTED:
    "RecommendationOptionsProjectedUtilizationMetricsDurationExpected",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_LOWER_BOUND:
    "RecommendationOptionsProjectedUtilizationMetricsDurationLowerBound",
  RECOMMENDATION_OPTIONS_PROJECTED_UTILIZATION_METRICS_DURATION_UPPER_BOUND:
    "RecommendationOptionsProjectedUtilizationMetricsDurationUpperBound",
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
 * @public
 * <p>Describes a filter that returns a more specific list of Lambda
 *             function recommendations. Use this filter with the <a>GetLambdaFunctionRecommendations</a> action.</p>
 *          <p>You can use <code>EBSFilter</code> with the <a>GetEBSVolumeRecommendations</a> action, <code>JobFilter</code> with the
 *                 <a>DescribeRecommendationExportJobs</a> action, and <code>Filter</code>
 *             with the <a>GetAutoScalingGroupRecommendations</a> and <a>GetEC2InstanceRecommendations</a> actions.</p>
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
   */
  name?: LambdaFunctionRecommendationFilterName | string;

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
   */
  values?: string[];
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
   *          <p>You must create the destination Amazon S3 bucket for your recommendations
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
   *          <p>The only export file format currently supported is <code>Csv</code>.</p>
   */
  fileFormat?: FileFormat | string;

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
   */
  includeMemberAccounts?: boolean;
}

/**
 * @public
 */
export interface ExportLambdaFunctionRecommendationsResponse {
  /**
   * <p>The identification number of the export job.</p>
   *          <p>Use the <a>DescribeRecommendationExportJobs</a> action, and specify the job
   *             ID to view the status of an export job.</p>
   */
  jobId?: string;

  /**
   * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and
   *             object keys of a recommendations export file, and its associated metadata file.</p>
   */
  s3Destination?: S3Destination;
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
   *          <p>To retrieve the remaining results, make another request with the returned
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

/**
 * @public
 * <p>Describes an error experienced when getting recommendations.</p>
 *          <p>For example, an error is returned if you request recommendations for an unsupported
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

/**
 * @public
 */
export interface GetAutoScalingGroupRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of Auto Scaling group
   *             recommendations.</p>
   *          <p>This value is null when there are no more pages of Auto Scaling group
   *             recommendations to return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe Auto Scaling group recommendations.</p>
   */
  autoScalingGroupRecommendations?: AutoScalingGroupRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an unsupported
   *                 Auto Scaling group.</p>
   */
  errors?: GetRecommendationError[];
}

/**
 * @public
 */
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
   *          <p>To retrieve the remaining results, make another request with the returned
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
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return volume recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];
}

/**
 * @public
 * <p>Describes the configuration of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 */
export interface VolumeConfiguration {
  /**
   * <p>The volume type.</p>
   *          <p>This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> or
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

  /**
   * <p>
   *             Contains the image used to boot the instance during launch.
   *         </p>
   */
  rootVolume?: boolean;
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
 * @public
 * <p>
 *             A list of tag key and value pairs that you define.
 *         </p>
 */
export interface Tag {
  /**
   * <p>
   *             One part of a key-value pair that makes up a tag. A key is a general
   *             label that acts like a category for more specific tag values.
   *         </p>
   */
  key?: string;

  /**
   * <p>
   *             One part of a key-value pair that make up a tag. A value acts as a descriptor
   *             within a tag category (key). The value can be empty or null.
   *         </p>
   */
  value?: string;
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
 * @public
 * <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS)
 *             volume.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
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
   */
  name?: EBSMetricName | string;

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
   */
  statistic?: MetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

/**
 * @public
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
   *          <p>Performance risk is the likelihood of the recommended volume type meeting the
   *             performance requirement of your workload.</p>
   *          <p>The value ranges from <code>0</code> - <code>4</code>, with <code>0</code> meaning
   *             that the recommended resource is predicted to always provide enough hardware capability.
   *             The higher the performance risk is, the more likely you should validate whether the
   *             recommendation will meet the performance requirements of your workload before migrating
   *             your resource.</p>
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the volume recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>An object that describes the savings opportunity for the EBS volume recommendation
   *             option. Savings opportunity includes the estimated monthly savings amount and
   *             percentage.</p>
   */
  savingsOpportunity?: SavingsOpportunity;
}

/**
 * @public
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
   * <p>The timestamp of when the volume recommendation was last generated.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The risk of the current EBS volume not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current EBS volume doesn't have sufficient
   *             capacity.</p>
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | string;

  /**
   * <p>
   *             A list of tags assigned to your Amazon EBS volume recommendations.
   *         </p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface GetEBSVolumeRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of volume recommendations.</p>
   *          <p>This value is null when there are no more pages of volume recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe volume recommendations.</p>
   */
  volumeRecommendations?: VolumeRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an unsupported
   *             volume.</p>
   */
  errors?: GetRecommendationError[];
}

/**
 * @public
 */
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
   *          <p>To retrieve the remaining results, make another request with the returned
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
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return instance recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
   */
  accountIds?: string[];

  /**
   * <p>An object to specify the preferences for the Amazon EC2 instance
   *             recommendations to return in the response.</p>
   */
  recommendationPreferences?: RecommendationPreferences;
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
 * @public
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
   *          <note>
   *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
   *                 utilization metrics returned. Additionally, the <code>Memory</code> metric is
   *                 returned only for resources that have the unified CloudWatch agent installed
   *                 on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                     Utilization with the CloudWatch Agent</a>.</p>
   *          </note>
   */
  projectedUtilizationMetrics?: UtilizationMetric[];

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
   */
  platformDifferences?: (PlatformDifference | string)[];

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
   */
  performanceRisk?: number;

  /**
   * <p>The rank of the instance recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   */
  rank?: number;

  /**
   * <p>An object that describes the savings opportunity for the instance recommendation
   *             option. Savings opportunity includes the estimated monthly savings amount and
   *             percentage.</p>
   */
  savingsOpportunity?: SavingsOpportunity;

  /**
   * <p>The level of effort required to migrate from the current instance type to the
   *             recommended instance type.</p>
   *          <p>For example, the migration effort is <code>Low</code> if Amazon EMR is the
   *             inferred workload type and an Amazon Web Services Graviton instance type is recommended.
   *             The migration effort is <code>Medium</code> if a workload type couldn't be inferred but
   *             an Amazon Web Services Graviton instance type is recommended. The migration effort is
   *                 <code>VeryLow</code> if both the current and recommended instance types are of the
   *             same CPU architecture.</p>
   */
  migrationEffort?: MigrationEffort | string;
}

/**
 * @public
 * @enum
 */
export const RecommendationSourceType = {
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EbsVolume",
  EC2_INSTANCE: "Ec2Instance",
  ECS_SERVICE: "EcsService",
  LAMBDA_FUNCTION: "LambdaFunction",
} as const;

/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

/**
 * @public
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

/**
 * @public
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
   */
  finding?: Finding | string;

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
   * <p>The timestamp of when the instance recommendation was last generated.</p>
   */
  lastRefreshTimestamp?: Date;

  /**
   * <p>The risk of the current instance not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current instance cannot meet the performance
   *             requirements of its workload.</p>
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | string;

  /**
   * <p>An object that describes the effective recommendation preferences for the
   *             instance.</p>
   */
  effectiveRecommendationPreferences?: EffectiveRecommendationPreferences;

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
   */
  inferredWorkloadTypes?: (InferredWorkloadType | string)[];

  /**
   * <p>
   *             The state of the instance when the recommendation was generated.
   *         </p>
   */
  instanceState?: InstanceState | string;

  /**
   * <p>
   *             A list of tags assigned to your Amazon EC2 instance recommendations.
   *         </p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface GetEC2InstanceRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of instance recommendations.</p>
   *          <p>This value is null when there are no more pages of instance recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe instance recommendations.</p>
   */
  instanceRecommendations?: InstanceRecommendation[];

  /**
   * <p>An array of objects that describe errors of the request.</p>
   *          <p>For example, an error is returned if you request recommendations for an instance of an
   *             unsupported instance family.</p>
   */
  errors?: GetRecommendationError[];
}

/**
 * @public
 */
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

/**
 * @public
 * <p>Describes a projected utilization metric of a recommendation option, such as an
 *                 Amazon EC2 instance. This represents the projected utilization of a
 *             recommendation option had you used that resource during the analyzed period.</p>
 *          <p>Compare the utilization metric data of your resource against its projected utilization
 *             metric data to determine the performance difference between your current resource and
 *             the recommended option.</p>
 *          <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *          </note>
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
   *                <p>Units: Percent</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Memory</code> - The percentage of memory that would be in use on the
   *                     recommendation option had you used that resource during the analyzed period.
   *                     This metric identifies the amount of memory required to run an application on
   *                     the recommendation option.</p>
   *                <p>Units: Percent</p>
   *                <note>
   *                   <p>The <code>Memory</code> metric is returned only for resources that have
   *                         the unified CloudWatch agent installed on them. For more information,
   *                         see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
   *                             Utilization with the CloudWatch Agent</a>.</p>
   *                </note>
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

/**
 * @public
 * <p>Describes a projected utilization metric of a recommendation option.</p>
 *          <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run the <a>GetEC2RecommendationProjectedMetrics</a> action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                     CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory Utilization with the CloudWatch Agent</a>.</p>
 *          </note>
 */
export interface RecommendedOptionProjectedMetric {
  /**
   * <p>The recommended instance type.</p>
   */
  recommendedInstanceType?: string;

  /**
   * <p>The rank of the recommendation option projected metric.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
   *          <p>The projected metric rank correlates to the recommendation option rank. For example,
   *             the projected metric ranked as <code>1</code> is related to the recommendation option
   *             that is also ranked as <code>1</code> in the same response.</p>
   */
  rank?: number;

  /**
   * <p>An array of objects that describe a projected utilization metric.</p>
   */
  projectedMetrics?: ProjectedMetric[];
}

/**
 * @public
 */
export interface GetEC2RecommendationProjectedMetricsResponse {
  /**
   * <p>An array of objects that describes projected metrics.</p>
   */
  recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetric[];
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
   */
  serviceArn: string | undefined;

  /**
   * <p>
   *             The statistic of the projected metrics.
   *         </p>
   */
  stat: MetricStatistic | string | undefined;

  /**
   * <p>
   *             The granularity, in seconds, of the projected metrics data points.
   *         </p>
   */
  period: number | undefined;

  /**
   * <p>
   *             The timestamp of the first projected metrics data point to return.
   *         </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The timestamp of the last projected metrics data point to return.
   *         </p>
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
 * @public
 * <p>
 *             Describes the projected metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the metric data of your service against its projected metric data.</p>
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
   */
  name?: ECSServiceMetricName | string;

  /**
   * <p>
   *             The timestamps of the projected metric.
   *         </p>
   */
  timestamps?: Date[];

  /**
   * <p>
   *             The upper bound values for the projected metric.
   *         </p>
   */
  upperBoundValues?: number[];

  /**
   * <p>
   *             The lower bound values for the projected metric.
   *         </p>
   */
  lowerBoundValues?: number[];
}

/**
 * @public
 * <p>
 *             Describes the projected metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the metric data of your service against its projected metric data.</p>
 */
export interface ECSServiceRecommendedOptionProjectedMetric {
  /**
   * <p>
   *             The recommended CPU size for the Amazon ECS service.
   *         </p>
   */
  recommendedCpuUnits?: number;

  /**
   * <p>
   *             The recommended memory size for the Amazon ECS service.
   *         </p>
   */
  recommendedMemorySize?: number;

  /**
   * <p>
   *             An array of objects that describe the projected metric.
   *         </p>
   */
  projectedMetrics?: ECSServiceProjectedMetric[];
}

/**
 * @public
 */
export interface GetECSServiceRecommendationProjectedMetricsResponse {
  /**
   * <p>
   *             An array of objects that describes the projected metrics.
   *         </p>
   */
  recommendedOptionProjectedMetrics?: ECSServiceRecommendedOptionProjectedMetric[];
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
   */
  serviceArns?: string[];

  /**
   * <p>
   *             The token to advance to the next page of Amazon ECS service recommendations.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             The maximum number of Amazon ECS service recommendations to return with a single request.
   *         </p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *             <code>nextToken</code> value.</p>
   */
  maxResults?: number;

  /**
   * <p>
   *             An array of objects to specify a filter that returns a more specific list of Amazon ECS service recommendations.
   *         </p>
   */
  filters?: ECSServiceRecommendationFilter[];

  /**
   * <p>
   *             Return the Amazon ECS service recommendations to the specified Amazon Web Services account IDs.
   *         </p>
   *          <p>If your account is the management account or the delegated administrator
   *             of an organization, use this parameter to return the Amazon ECS service recommendations to specific
   *             member accounts.</p>
   *          <p>You can only specify one account ID per request.</p>
   */
  accountIds?: string[];
}

/**
 * @public
 * <p>
 *             The memory size configurations of a container.
 *         </p>
 */
export interface MemorySizeConfiguration {
  /**
   * <p>
   *             The amount of memory in the container.
   *         </p>
   */
  memory?: number;

  /**
   * <p>
   *             The limit of memory reserve for the container.
   *         </p>
   */
  memoryReservation?: number;
}

/**
 * @public
 * <p>
 *             Describes the container configurations within the tasks of your Amazon ECS service.
 *         </p>
 */
export interface ContainerConfiguration {
  /**
   * <p>
   *             The name of the container.
   *         </p>
   */
  containerName?: string;

  /**
   * <p>
   *             The memory size configurations for the container.
   *         </p>
   */
  memorySizeConfiguration?: MemorySizeConfiguration;

  /**
   * <p>
   *             The number of CPU units reserved for the container.
   *         </p>
   */
  cpu?: number;
}

/**
 * @public
 * <p>
 *             The Amazon ECS service configurations used for recommendations.
 *         </p>
 */
export interface ServiceConfiguration {
  /**
   * <p>
   *             The amount of memory used by the tasks in the Amazon ECS service.
   *         </p>
   */
  memory?: number;

  /**
   * <p>
   *             The number of CPU units used by the tasks in the Amazon ECS service.
   *         </p>
   */
  cpu?: number;

  /**
   * <p>
   *             The container configurations within a task of an Amazon ECS service.
   *         </p>
   */
  containerConfigurations?: ContainerConfiguration[];

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
   */
  autoScalingConfiguration?: AutoScalingConfiguration | string;

  /**
   * <p>
   *             The task definition ARN used by the tasks in the Amazon ECS service.
   *         </p>
   */
  taskDefinitionArn?: string;
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
 * @public
 * <p>
 *             The CPU and memory recommendations for a container within the tasks of your Amazon ECS service.
 *         </p>
 */
export interface ContainerRecommendation {
  /**
   * <p>
   *             The name of the container.
   *         </p>
   */
  containerName?: string;

  /**
   * <p>
   *             The recommended memory size configurations for the container.
   *         </p>
   */
  memorySizeConfiguration?: MemorySizeConfiguration;

  /**
   * <p>
   *             The recommended number of CPU units reserved for the container.
   *         </p>
   */
  cpu?: number;
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
 * @public
 * <p>
 *             Describes the projected utilization metrics of an Amazon ECS service recommendation option.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the utilization metric data of your service against its projected utilization metric data.</p>
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
   */
  name?: ECSServiceMetricName | string;

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
   */
  statistic?: ECSServiceMetricStatistic | string;

  /**
   * <p>
   *             The lower bound values for the projected utilization metrics.
   *         </p>
   */
  lowerBoundValue?: number;

  /**
   * <p>
   *             The upper bound values for the projected utilization metrics.
   *         </p>
   */
  upperBoundValue?: number;
}

/**
 * @public
 * <p>
 *             Describes the recommendation options for an Amazon ECS service.
 *         </p>
 */
export interface ECSServiceRecommendationOption {
  /**
   * <p>
   *             The memory size of the Amazon ECS service recommendation option.
   *         </p>
   */
  memory?: number;

  /**
   * <p>
   *             The CPU size of the Amazon ECS service recommendation option.
   *         </p>
   */
  cpu?: number;

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
   */
  savingsOpportunity?: SavingsOpportunity;

  /**
   * <p>
   *             An array of objects that describe the projected utilization metrics of the Amazon ECS service recommendation option.
   *         </p>
   */
  projectedUtilizationMetrics?: ECSServiceProjectedUtilizationMetric[];

  /**
   * <p>
   *             The CPU and memory size recommendations for the containers within the task of your Amazon ECS service.
   *         </p>
   */
  containerRecommendations?: ContainerRecommendation[];
}

/**
 * @public
 * <p>
 *             Describes the utilization metric of an Amazon ECS service.
 *         </p>
 *          <p>To determine the performance difference between your current Amazon ECS service and the recommended option,
 *             compare the utilization metric data of your service against its projected utilization metric data.</p>
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
   */
  name?: ECSServiceMetricName | string;

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
   */
  statistic?: ECSServiceMetricStatistic | string;

  /**
   * <p>
   *             The value of the utilization metric.
   *         </p>
   */
  value?: number;
}

/**
 * @public
 * <p>
 *             Describes an Amazon ECS service recommendation.
 *         </p>
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
   */
  serviceArn?: string;

  /**
   * <p>
   *             The Amazon Web Services account ID of the Amazon ECS service.
   *         </p>
   */
  accountId?: string;

  /**
   * <p>
   *             The configuration of the current Amazon ECS service.
   *         </p>
   */
  currentServiceConfiguration?: ServiceConfiguration;

  /**
   * <p>
   *             An array of objects that describe the utilization metrics of the Amazon ECS service.
   *         </p>
   */
  utilizationMetrics?: ECSServiceUtilizationMetric[];

  /**
   * <p>
   *             The number of days the Amazon ECS service utilization metrics were analyzed.
   *         </p>
   */
  lookbackPeriodInDays?: number;

  /**
   * <p>
   *             The launch type the Amazon ECS service is using.
   *         </p>
   *          <note>
   *             <p>Compute Optimizer only supports the Fargate launch type.</p>
   *          </note>
   */
  launchType?: ECSServiceLaunchType | string;

  /**
   * <p>
   *             The timestamp of when the Amazon ECS service recommendation was last generated.
   *         </p>
   */
  lastRefreshTimestamp?: Date;

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
   */
  finding?: ECSServiceRecommendationFinding | string;

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
   */
  findingReasonCodes?: (ECSServiceRecommendationFindingReasonCode | string)[];

  /**
   * <p>
   *             An array of objects that describe the recommendation options for the Amazon ECS service.
   *         </p>
   */
  serviceRecommendationOptions?: ECSServiceRecommendationOption[];

  /**
   * <p>
   *             The risk of the current Amazon ECS service not meeting the performance needs of its workloads.
   *             The higher the risk, the more likely the current service can't meet the performance
   *             requirements of its workload.
   *         </p>
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | string;

  /**
   * <p>
   *             A list of tags assigned to your Amazon ECS service recommendations.
   *         </p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface GetECSServiceRecommendationsResponse {
  /**
   * <p>
   *             The token to advance to the next page of Amazon ECS service recommendations.
   *         </p>
   */
  nextToken?: string;

  /**
   * <p>
   *             An array of objects that describe the Amazon ECS service recommendations.
   *         </p>
   */
  ecsServiceRecommendations?: ECSServiceRecommendation[];

  /**
   * <p>
   *             An array of objects that describe errors of the request.
   *         </p>
   */
  errors?: GetRecommendationError[];
}

/**
 * @public
 */
export interface GetEffectiveRecommendationPreferencesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to confirm effective
   *             recommendation preferences. Only EC2 instance and Auto Scaling group ARNs are
   *             currently supported.</p>
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
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | string;

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
   */
  externalMetricsPreference?: ExternalMetricsPreference;
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
   */
  status?: Status | string;

  /**
   * <p>The reason for the enrollment status of the account.</p>
   *          <p>For example, an account might show a status of <code>Pending</code> because member
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
 * @public
 * <p>Describes a filter that returns a more specific list of account enrollment statuses.
 *             Use this filter with the <a>GetEnrollmentStatusesForOrganization</a>
 *             action.</p>
 */
export interface EnrollmentFilter {
  /**
   * <p>The name of the filter.</p>
   *          <p>Specify <code>Status</code> to return accounts with a specific enrollment status (for
   *             example, <code>Active</code>).</p>
   */
  name?: EnrollmentFilterName | string;

  /**
   * <p>The value of the filter.</p>
   *          <p>The valid values are <code>Active</code>, <code>Inactive</code>, <code>Pending</code>,
   *             and <code>Failed</code>.</p>
   */
  values?: string[];
}

/**
 * @public
 */
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
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetEnrollmentStatusesForOrganizationResponse {
  /**
   * <p>An array of objects that describe the enrollment statuses of organization member
   *             accounts.</p>
   */
  accountEnrollmentStatuses?: AccountEnrollmentStatus[];

  /**
   * <p>The token to use to advance to the next page of account enrollment statuses.</p>
   *          <p>This value is null when there are no more pages of account enrollment statuses to
   *             return.</p>
   */
  nextToken?: string;
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
   */
  functionArns?: string[];

  /**
   * <p>The ID of the Amazon Web Services account for which to return function
   *             recommendations.</p>
   *          <p>If your account is the management account of an organization, use this parameter to
   *             specify the member account for which you want to return function recommendations.</p>
   *          <p>Only one account ID can be specified per request.</p>
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
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
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
 * @public
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

/**
 * @public
 * <p>Describes a recommendation option for an Lambda function.</p>
 */
export interface LambdaFunctionMemoryRecommendationOption {
  /**
   * <p>The rank of the function recommendation option.</p>
   *          <p>The top recommendation option is ranked as <code>1</code>.</p>
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

  /**
   * <p>An object that describes the savings opportunity for the Lambda function
   *             recommendation option. Savings opportunity includes the estimated monthly savings amount
   *             and percentage.</p>
   */
  savingsOpportunity?: SavingsOpportunity;
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
 * @public
 * <p>Describes a utilization metric of an Lambda function.</p>
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
   */
  name?: LambdaFunctionMetricName | string;

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
   */
  statistic?: LambdaFunctionMetricStatistic | string;

  /**
   * <p>The value of the utilization metric.</p>
   */
  value?: number;
}

/**
 * @public
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
   * <p>The timestamp of when the function recommendation was last generated.</p>
   */
  lastRefreshTimestamp?: Date;

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
   */
  finding?: LambdaFunctionRecommendationFinding | string;

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
   */
  findingReasonCodes?: (LambdaFunctionRecommendationFindingReasonCode | string)[];

  /**
   * <p>An array of objects that describe the memory configuration recommendation options for
   *             the function.</p>
   */
  memorySizeRecommendationOptions?: LambdaFunctionMemoryRecommendationOption[];

  /**
   * <p>The risk of the current Lambda function not meeting the performance needs
   *             of its workloads. The higher the risk, the more likely the current Lambda
   *             function requires more memory.</p>
   */
  currentPerformanceRisk?: CurrentPerformanceRisk | string;

  /**
   * <p>
   *             A list of tags assigned to your Lambda function recommendations.
   *         </p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface GetLambdaFunctionRecommendationsResponse {
  /**
   * <p>The token to use to advance to the next page of function recommendations.</p>
   *          <p>This value is null when there are no more pages of function recommendations to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe function recommendations.</p>
   */
  lambdaFunctionRecommendations?: LambdaFunctionRecommendation[];
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
   *          <note>
   *             <p>The valid values for this parameter are <code>Ec2Instance</code> and
   *                     <code>AutoScalingGroup</code>.</p>
   *          </note>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>An object that describes the scope of the recommendation preference to return.</p>
   *          <p>You can return recommendation preferences that are created at the organization level
   *             (for management accounts of an organization only), account level, and resource level.
   *             For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  scope?: Scope;

  /**
   * <p>The token to advance to the next page of recommendation preferences.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recommendation preferences to return with a single
   *             request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes a recommendation preference.</p>
 */
export interface RecommendationPreferencesDetail {
  /**
   * <p>An object that describes the scope of the recommendation preference.</p>
   *          <p>Recommendation preferences can be created at the organization level (for management
   *             accounts of an organization only), account level, and resource level. For more
   *             information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Activating
   *                 enhanced infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  scope?: Scope;

  /**
   * <p>The target resource type of the recommendation preference to create.</p>
   *          <p>The <code>Ec2Instance</code> option encompasses standalone instances and instances
   *             that are part of Auto Scaling groups. The <code>AutoScalingGroup</code> option
   *             encompasses only instances that are part of an Auto Scaling group.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The status of the enhanced infrastructure metrics recommendation preference.</p>
   *          <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms
   *             that the preference is applied to the recommendations, and a status of
   *                 <code>Inactive</code> confirms that the preference isn't yet applied to
   *             recommendations.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | string;

  /**
   * <p>The status of the inferred workload types recommendation preference.</p>
   *          <p>When the recommendations page is refreshed, a status of <code>Active</code> confirms
   *             that the preference is applied to the recommendations, and a status of
   *                 <code>Inactive</code> confirms that the preference isn't yet applied to
   *             recommendations.</p>
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | string;

  /**
   * <p> An object that describes the external metrics recommendation preference. </p>
   *          <p> If the preference is applied in the latest recommendation refresh, an object with a
   *             valid <code>source</code> value appears in the response. If the preference isn't applied
   *             to the recommendations already, then this object doesn't appear in the response. </p>
   */
  externalMetricsPreference?: ExternalMetricsPreference;
}

/**
 * @public
 */
export interface GetRecommendationPreferencesResponse {
  /**
   * <p>The token to use to advance to the next page of recommendation preferences.</p>
   *          <p>This value is null when there are no more pages of recommendation preferences to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that describe recommendation preferences.</p>
   */
  recommendationPreferencesDetails?: RecommendationPreferencesDetail[];
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
   */
  accountIds?: string[];

  /**
   * <p>The token to advance to the next page of recommendation summaries.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of recommendation summaries to return with a single request.</p>
   *          <p>To retrieve the remaining results, make another request with the returned
   *                 <code>nextToken</code> value.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes the performance risk ratings for a given resource type.</p>
 *          <p>Resources with a <code>high</code> or <code>medium</code> rating are at risk of not
 *             meeting the performance needs of their workloads, while resources with a
 *                 <code>low</code> rating are performing well in their workloads.</p>
 */
export interface CurrentPerformanceRiskRatings {
  /**
   * <p>A count of the applicable resource types with a high performance risk rating.</p>
   */
  high?: number;

  /**
   * <p>A count of the applicable resource types with a medium performance risk rating.</p>
   */
  medium?: number;

  /**
   * <p>A count of the applicable resource types with a low performance risk rating.</p>
   */
  low?: number;

  /**
   * <p>A count of the applicable resource types with a very low performance risk
   *             rating.</p>
   */
  veryLow?: number;
}

/**
 * @public
 * <p>
 *             The estimated monthly savings after you adjust the configurations of your instances running on the
 *             inferred workload types to the recommended configurations. If the <code>inferredWorkloadTypes</code>
 *             list contains multiple entries, then the savings are the sum of the monthly savings from instances
 *             that run the exact combination of the inferred workload types.
 *         </p>
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
   */
  inferredWorkloadTypes?: (InferredWorkloadType | string)[];

  /**
   * <p>An object that describes the estimated monthly savings amount possible by adopting Compute Optimizer recommendations for a given
   *             resource. This is based on the On-Demand instance pricing.</p>
   */
  estimatedMonthlySavings?: EstimatedMonthlySavings;
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
 * @public
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

/**
 * @public
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

/**
 * @public
 * <p>A summary of a recommendation.</p>
 */
export interface RecommendationSummary {
  /**
   * <p>An array of objects that describe a recommendation summary.</p>
   */
  summaries?: Summary[];

  /**
   * <p>The resource type that the recommendation summary applies to.</p>
   */
  recommendationResourceType?: RecommendationSourceType | string;

  /**
   * <p>The Amazon Web Services account ID of the recommendation summary.</p>
   */
  accountId?: string;

  /**
   * <p>An object that describes the savings opportunity for a given resource type. Savings
   *             opportunity includes the estimated monthly savings amount and percentage.</p>
   */
  savingsOpportunity?: SavingsOpportunity;

  /**
   * <p>An object that describes the performance risk ratings for a given resource
   *             type.</p>
   */
  currentPerformanceRiskRatings?: CurrentPerformanceRiskRatings;

  /**
   * <p>
   *             An array of objects that describes the estimated monthly saving amounts for the instances running on the specified
   *             <code>inferredWorkloadTypes</code>. The array contains the top three savings opportunites for the instances running
   *             inferred workload types.
   *         </p>
   */
  inferredWorkloadSavings?: InferredWorkloadSaving[];
}

/**
 * @public
 */
export interface GetRecommendationSummariesResponse {
  /**
   * <p>The token to use to advance to the next page of recommendation summaries.</p>
   *          <p>This value is null when there are no more pages of recommendation summaries to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that summarize a recommendation.</p>
   */
  recommendationSummaries?: RecommendationSummary[];
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
   *          <note>
   *             <p>The valid values for this parameter are <code>Ec2Instance</code> and
   *                     <code>AutoScalingGroup</code>.</p>
   *          </note>
   */
  resourceType: ResourceType | string | undefined;

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
   */
  scope?: Scope;

  /**
   * <p>The status of the enhanced infrastructure metrics recommendation preference to create
   *             or update.</p>
   *          <p>Specify the <code>Active</code> status to activate the preference, or specify
   *                 <code>Inactive</code> to deactivate the preference.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/enhanced-infrastructure-metrics.html">Enhanced
   *                 infrastructure metrics</a> in the <i>Compute Optimizer User
   *                 Guide</i>.</p>
   */
  enhancedInfrastructureMetrics?: EnhancedInfrastructureMetrics | string;

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
   */
  inferredWorkloadTypes?: InferredWorkloadTypesPreference | string;

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
   */
  externalMetricsPreference?: ExternalMetricsPreference;
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
   */
  status: Status | string | undefined;

  /**
   * <p>Indicates whether to enroll member accounts of the organization if the account is the
   *             management account of an organization.</p>
   */
  includeMemberAccounts?: boolean;
}

/**
 * @public
 */
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
