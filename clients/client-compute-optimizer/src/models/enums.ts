// smithy-typescript generated code
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
  UTILIZATION_METRICS_ACTIVE_CONNECTION_COUNT_MAXIMUM: "UtilizationMetricsActiveConnectionCountMaximum",
  UTILIZATION_METRICS_CPU_MAXIMUM: "UtilizationMetricsCpuMaximum",
  UTILIZATION_METRICS_DATABASE_CONNECTIONS_MAXIMUM: "UtilizationMetricsDatabaseConnectionsMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_READ_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeReadIOPSMaximum",
  UTILIZATION_METRICS_EBS_VOLUME_WRITE_IOPS_MAXIMUM: "UtilizationMetricsEBSVolumeWriteIOPSMaximum",
  UTILIZATION_METRICS_MEMORY_MAXIMUM: "UtilizationMetricsMemoryMaximum",
  UTILIZATION_METRICS_NETWORK_IN_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkInBytesPerSecondMaximum",
  UTILIZATION_METRICS_NETWORK_OUT_BYTES_PER_SECOND_MAXIMUM: "UtilizationMetricsNetworkOutBytesPerSecondMaximum",
  UTILIZATION_METRICS_PACKETS_IN_FROM_DESTINATION_MAXIMUM: "UtilizationMetricsPacketsInFromDestinationMaximum",
  UTILIZATION_METRICS_PACKETS_IN_FROM_SOURCE_MAXIMUM: "UtilizationMetricsPacketsInFromSourceMaximum",
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
  NAT_GATEWAY: "NatGateway",
  RDS_DB_INSTANCE: "RdsDBInstance",
  RDS_DB_INSTANCE_STORAGE: "RdsDBInstanceStorage",
} as const;
/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

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
 * @public
 * @enum
 */
export const IdleRecommendationResourceType = {
  AUTO_SCALING_GROUP: "AutoScalingGroup",
  EBS_VOLUME: "EBSVolume",
  EC2_INSTANCE: "EC2Instance",
  ECS_SERVICE: "ECSService",
  NAT_GATEWAY: "NatGateway",
  RDS_DB_INSTANCE: "RDSDBInstance",
} as const;
/**
 * @public
 */
export type IdleRecommendationResourceType =
  (typeof IdleRecommendationResourceType)[keyof typeof IdleRecommendationResourceType];

/**
 * @public
 * @enum
 */
export const IdleFinding = {
  IDLE: "Idle",
  UNATTACHED: "Unattached",
  UNUSED: "Unused",
} as const;
/**
 * @public
 */
export type IdleFinding = (typeof IdleFinding)[keyof typeof IdleFinding];

/**
 * @public
 * @enum
 */
export const IdleMetricName = {
  ACTIVE_CONNECTION_COUNT: "ActiveConnectionCount",
  CPU: "CPU",
  DATABASE_CONNECTIONS: "DatabaseConnections",
  EBS_VOLUME_READ_IOPS: "EBSVolumeReadIOPS",
  EBS_VOLUME_WRITE_IOPS: "EBSVolumeWriteIOPS",
  MEMORY: "Memory",
  NETWORK_IN_BYTES_PER_SECOND: "NetworkInBytesPerSecond",
  NETWORK_OUT_BYTES_PER_SECOND: "NetworkOutBytesPerSecond",
  PACKETS_IN_FROM_DESTINATION: "PacketsInFromDestination",
  PACKETS_IN_FROM_SOURCE: "PacketsInFromSource",
  VOLUME_READ_OPS_PER_SECOND: "VolumeReadOpsPerSecond",
  VOLUME_WRITE_OPS_PER_SECOND: "VolumeWriteOpsPerSecond",
} as const;
/**
 * @public
 */
export type IdleMetricName = (typeof IdleMetricName)[keyof typeof IdleMetricName];

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
