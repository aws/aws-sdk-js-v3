import {
  AllocationStrategy,
  AsgType,
  AutoScalingConfiguration,
  ComputeOptimizer,
  ComputeOptimizerClient,
  ComputeOptimizerServiceException,
  CpuVendorArchitecture,
  Currency,
  CurrentPerformanceRisk,
  CustomizableMetricHeadroom,
  CustomizableMetricName,
  CustomizableMetricThreshold,
  DeleteRecommendationPreferencesCommand,
  DescribeRecommendationExportJobsCommand,
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
  ExportAutoScalingGroupRecommendationsCommand,
  ExportEBSVolumeRecommendationsCommand,
  ExportEC2InstanceRecommendationsCommand,
  ExportECSServiceRecommendationsCommand,
  ExportIdleRecommendationsCommand,
  ExportLambdaFunctionRecommendationsCommand,
  ExportLicenseRecommendationsCommand,
  ExportRDSDatabaseRecommendationsCommand,
  ExportableAutoScalingGroupField,
  ExportableECSServiceField,
  ExportableIdleField,
  ExportableInstanceField,
  ExportableLambdaFunctionField,
  ExportableLicenseField,
  ExportableRDSDBField,
  ExportableVolumeField,
  ExternalMetricStatusCode,
  ExternalMetricsSource,
  FileFormat,
  FilterName,
  Finding,
  FindingReasonCode,
  GetAutoScalingGroupRecommendationsCommand,
  GetEBSVolumeRecommendationsCommand,
  GetEC2InstanceRecommendationsCommand,
  GetEC2RecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationsCommand,
  GetEffectiveRecommendationPreferencesCommand,
  GetEnrollmentStatusCommand,
  GetEnrollmentStatusesForOrganizationCommand,
  GetIdleRecommendationsCommand,
  GetLambdaFunctionRecommendationsCommand,
  GetLicenseRecommendationsCommand,
  GetRDSDatabaseRecommendationProjectedMetricsCommand,
  GetRDSDatabaseRecommendationsCommand,
  GetRecommendationPreferencesCommand,
  GetRecommendationSummariesCommand,
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
  PutRecommendationPreferencesCommand,
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
  UpdateEnrollmentStatusCommand,
  paginateDescribeRecommendationExportJobs,
  paginateGetEnrollmentStatusesForOrganization,
  paginateGetLambdaFunctionRecommendations,
  paginateGetRecommendationPreferences,
  paginateGetRecommendationSummaries,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComputeOptimizerClient === "function")
assert(typeof ComputeOptimizer === "function")
// commands
assert(typeof DeleteRecommendationPreferencesCommand === "function")
assert(typeof DescribeRecommendationExportJobsCommand === "function")
assert(typeof ExportAutoScalingGroupRecommendationsCommand === "function")
assert(typeof ExportEBSVolumeRecommendationsCommand === "function")
assert(typeof ExportEC2InstanceRecommendationsCommand === "function")
assert(typeof ExportECSServiceRecommendationsCommand === "function")
assert(typeof ExportIdleRecommendationsCommand === "function")
assert(typeof ExportLambdaFunctionRecommendationsCommand === "function")
assert(typeof ExportLicenseRecommendationsCommand === "function")
assert(typeof ExportRDSDatabaseRecommendationsCommand === "function")
assert(typeof GetAutoScalingGroupRecommendationsCommand === "function")
assert(typeof GetEBSVolumeRecommendationsCommand === "function")
assert(typeof GetEC2InstanceRecommendationsCommand === "function")
assert(typeof GetEC2RecommendationProjectedMetricsCommand === "function")
assert(typeof GetECSServiceRecommendationProjectedMetricsCommand === "function")
assert(typeof GetECSServiceRecommendationsCommand === "function")
assert(typeof GetEffectiveRecommendationPreferencesCommand === "function")
assert(typeof GetEnrollmentStatusCommand === "function")
assert(typeof GetEnrollmentStatusesForOrganizationCommand === "function")
assert(typeof GetIdleRecommendationsCommand === "function")
assert(typeof GetLambdaFunctionRecommendationsCommand === "function")
assert(typeof GetLicenseRecommendationsCommand === "function")
assert(typeof GetRDSDatabaseRecommendationProjectedMetricsCommand === "function")
assert(typeof GetRDSDatabaseRecommendationsCommand === "function")
assert(typeof GetRecommendationPreferencesCommand === "function")
assert(typeof GetRecommendationSummariesCommand === "function")
assert(typeof PutRecommendationPreferencesCommand === "function")
assert(typeof UpdateEnrollmentStatusCommand === "function")
// enums
assert(typeof AllocationStrategy === "object");
assert(typeof AsgType === "object");
assert(typeof AutoScalingConfiguration === "object");
assert(typeof CpuVendorArchitecture === "object");
assert(typeof Currency === "object");
assert(typeof CurrentPerformanceRisk === "object");
assert(typeof CustomizableMetricHeadroom === "object");
assert(typeof CustomizableMetricName === "object");
assert(typeof CustomizableMetricThreshold === "object");
assert(typeof Dimension === "object");
assert(typeof EBSFilterName === "object");
assert(typeof EBSFinding === "object");
assert(typeof EBSMetricName === "object");
assert(typeof EBSSavingsEstimationModeSource === "object");
assert(typeof ECSSavingsEstimationModeSource === "object");
assert(typeof ECSServiceLaunchType === "object");
assert(typeof ECSServiceMetricName === "object");
assert(typeof ECSServiceMetricStatistic === "object");
assert(typeof ECSServiceRecommendationFilterName === "object");
assert(typeof ECSServiceRecommendationFinding === "object");
assert(typeof ECSServiceRecommendationFindingReasonCode === "object");
assert(typeof EnhancedInfrastructureMetrics === "object");
assert(typeof EnrollmentFilterName === "object");
assert(typeof ExportableAutoScalingGroupField === "object");
assert(typeof ExportableECSServiceField === "object");
assert(typeof ExportableIdleField === "object");
assert(typeof ExportableInstanceField === "object");
assert(typeof ExportableLambdaFunctionField === "object");
assert(typeof ExportableLicenseField === "object");
assert(typeof ExportableRDSDBField === "object");
assert(typeof ExportableVolumeField === "object");
assert(typeof ExternalMetricsSource === "object");
assert(typeof ExternalMetricStatusCode === "object");
assert(typeof FileFormat === "object");
assert(typeof FilterName === "object");
assert(typeof Finding === "object");
assert(typeof FindingReasonCode === "object");
assert(typeof Idle === "object");
assert(typeof IdleFinding === "object");
assert(typeof IdleMetricName === "object");
assert(typeof IdleRecommendationFilterName === "object");
assert(typeof IdleRecommendationResourceType === "object");
assert(typeof InferredWorkloadType === "object");
assert(typeof InferredWorkloadTypesPreference === "object");
assert(typeof InstanceIdle === "object");
assert(typeof InstanceRecommendationFindingReasonCode === "object");
assert(typeof InstanceSavingsEstimationModeSource === "object");
assert(typeof InstanceState === "object");
assert(typeof JobFilterName === "object");
assert(typeof JobStatus === "object");
assert(typeof LambdaFunctionMemoryMetricName === "object");
assert(typeof LambdaFunctionMemoryMetricStatistic === "object");
assert(typeof LambdaFunctionMetricName === "object");
assert(typeof LambdaFunctionMetricStatistic === "object");
assert(typeof LambdaFunctionRecommendationFilterName === "object");
assert(typeof LambdaFunctionRecommendationFinding === "object");
assert(typeof LambdaFunctionRecommendationFindingReasonCode === "object");
assert(typeof LambdaSavingsEstimationModeSource === "object");
assert(typeof LicenseEdition === "object");
assert(typeof LicenseFinding === "object");
assert(typeof LicenseFindingReasonCode === "object");
assert(typeof LicenseModel === "object");
assert(typeof LicenseName === "object");
assert(typeof LicenseRecommendationFilterName === "object");
assert(typeof LookBackPeriodPreference === "object");
assert(typeof MetricName === "object");
assert(typeof MetricSourceProvider === "object");
assert(typeof MetricStatistic === "object");
assert(typeof MigrationEffort === "object");
assert(typeof Order === "object");
assert(typeof PlatformDifference === "object");
assert(typeof PreferredResourceName === "object");
assert(typeof RDSCurrentInstancePerformanceRisk === "object");
assert(typeof RDSDBMetricName === "object");
assert(typeof RDSDBMetricStatistic === "object");
assert(typeof RDSDBRecommendationFilterName === "object");
assert(typeof RDSEstimatedMonthlyVolumeIOPsCostVariation === "object");
assert(typeof RDSInstanceFinding === "object");
assert(typeof RDSInstanceFindingReasonCode === "object");
assert(typeof RDSSavingsEstimationModeSource === "object");
assert(typeof RDSStorageFinding === "object");
assert(typeof RDSStorageFindingReasonCode === "object");
assert(typeof RecommendationPreferenceName === "object");
assert(typeof RecommendationSourceType === "object");
assert(typeof ResourceType === "object");
assert(typeof SavingsEstimationMode === "object");
assert(typeof ScopeName === "object");
assert(typeof Status === "object");
// errors
assert(ComputeOptimizerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeRecommendationExportJobs === "function")
assert(typeof paginateGetEnrollmentStatusesForOrganization === "function")
assert(typeof paginateGetLambdaFunctionRecommendations === "function")
assert(typeof paginateGetRecommendationPreferences === "function")
assert(typeof paginateGetRecommendationSummaries === "function")
console.log(`ComputeOptimizer index test passed.`);
