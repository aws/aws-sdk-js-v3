import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountEnrollmentStatus$,
  AllocationStrategy,
  AsgType,
  AutoScalingConfiguration,
  AutoScalingGroupConfiguration$,
  AutoScalingGroupEstimatedMonthlySavings$,
  AutoScalingGroupRecommendation$,
  AutoScalingGroupRecommendationOption$,
  AutoScalingGroupSavingsOpportunityAfterDiscounts$,
  ComputeOptimizer,
  ComputeOptimizerClient,
  ComputeOptimizerServiceException,
  ContainerConfiguration$,
  ContainerRecommendation$,
  CpuVendorArchitecture,
  Currency,
  CurrentPerformanceRisk,
  CurrentPerformanceRiskRatings$,
  CustomizableMetricHeadroom,
  CustomizableMetricName,
  CustomizableMetricParameters$,
  CustomizableMetricThreshold,
  DBStorageConfiguration$,
  DeleteRecommendationPreferences$,
  DeleteRecommendationPreferencesCommand,
  DeleteRecommendationPreferencesRequest$,
  DeleteRecommendationPreferencesResponse$,
  DescribeRecommendationExportJobs$,
  DescribeRecommendationExportJobsCommand,
  DescribeRecommendationExportJobsRequest$,
  DescribeRecommendationExportJobsResponse$,
  Dimension,
  EBSEffectiveRecommendationPreferences$,
  EBSEstimatedMonthlySavings$,
  EBSFilter$,
  EBSFilterName,
  EBSFinding,
  EBSMetricName,
  EBSSavingsEstimationMode$,
  EBSSavingsEstimationModeSource,
  EBSSavingsOpportunityAfterDiscounts$,
  EBSUtilizationMetric$,
  ECSEffectiveRecommendationPreferences$,
  ECSEstimatedMonthlySavings$,
  ECSSavingsEstimationMode$,
  ECSSavingsEstimationModeSource,
  ECSSavingsOpportunityAfterDiscounts$,
  ECSServiceLaunchType,
  ECSServiceMetricName,
  ECSServiceMetricStatistic,
  ECSServiceProjectedMetric$,
  ECSServiceProjectedUtilizationMetric$,
  ECSServiceRecommendation$,
  ECSServiceRecommendationFilter$,
  ECSServiceRecommendationFilterName,
  ECSServiceRecommendationFinding,
  ECSServiceRecommendationFindingReasonCode,
  ECSServiceRecommendationOption$,
  ECSServiceRecommendedOptionProjectedMetric$,
  ECSServiceUtilizationMetric$,
  EffectivePreferredResource$,
  EffectiveRecommendationPreferences$,
  EnhancedInfrastructureMetrics,
  EnrollmentFilter$,
  EnrollmentFilterName,
  EstimatedMonthlySavings$,
  ExportAutoScalingGroupRecommendations$,
  ExportAutoScalingGroupRecommendationsCommand,
  ExportAutoScalingGroupRecommendationsRequest$,
  ExportAutoScalingGroupRecommendationsResponse$,
  ExportDestination$,
  ExportEBSVolumeRecommendations$,
  ExportEBSVolumeRecommendationsCommand,
  ExportEBSVolumeRecommendationsRequest$,
  ExportEBSVolumeRecommendationsResponse$,
  ExportEC2InstanceRecommendations$,
  ExportEC2InstanceRecommendationsCommand,
  ExportEC2InstanceRecommendationsRequest$,
  ExportEC2InstanceRecommendationsResponse$,
  ExportECSServiceRecommendations$,
  ExportECSServiceRecommendationsCommand,
  ExportECSServiceRecommendationsRequest$,
  ExportECSServiceRecommendationsResponse$,
  ExportIdleRecommendations$,
  ExportIdleRecommendationsCommand,
  ExportIdleRecommendationsRequest$,
  ExportIdleRecommendationsResponse$,
  ExportLambdaFunctionRecommendations$,
  ExportLambdaFunctionRecommendationsCommand,
  ExportLambdaFunctionRecommendationsRequest$,
  ExportLambdaFunctionRecommendationsResponse$,
  ExportLicenseRecommendations$,
  ExportLicenseRecommendationsCommand,
  ExportLicenseRecommendationsRequest$,
  ExportLicenseRecommendationsResponse$,
  ExportRDSDatabaseRecommendations$,
  ExportRDSDatabaseRecommendationsCommand,
  ExportRDSDatabaseRecommendationsRequest$,
  ExportRDSDatabaseRecommendationsResponse$,
  ExportableAutoScalingGroupField,
  ExportableECSServiceField,
  ExportableIdleField,
  ExportableInstanceField,
  ExportableLambdaFunctionField,
  ExportableLicenseField,
  ExportableRDSDBField,
  ExportableVolumeField,
  ExternalMetricStatus$,
  ExternalMetricStatusCode,
  ExternalMetricsPreference$,
  ExternalMetricsSource,
  FileFormat,
  Filter$,
  FilterName,
  Finding,
  FindingReasonCode,
  GetAutoScalingGroupRecommendations$,
  GetAutoScalingGroupRecommendationsCommand,
  GetAutoScalingGroupRecommendationsRequest$,
  GetAutoScalingGroupRecommendationsResponse$,
  GetEBSVolumeRecommendations$,
  GetEBSVolumeRecommendationsCommand,
  GetEBSVolumeRecommendationsRequest$,
  GetEBSVolumeRecommendationsResponse$,
  GetEC2InstanceRecommendations$,
  GetEC2InstanceRecommendationsCommand,
  GetEC2InstanceRecommendationsRequest$,
  GetEC2InstanceRecommendationsResponse$,
  GetEC2RecommendationProjectedMetrics$,
  GetEC2RecommendationProjectedMetricsCommand,
  GetEC2RecommendationProjectedMetricsRequest$,
  GetEC2RecommendationProjectedMetricsResponse$,
  GetECSServiceRecommendationProjectedMetrics$,
  GetECSServiceRecommendationProjectedMetricsCommand,
  GetECSServiceRecommendationProjectedMetricsRequest$,
  GetECSServiceRecommendationProjectedMetricsResponse$,
  GetECSServiceRecommendations$,
  GetECSServiceRecommendationsCommand,
  GetECSServiceRecommendationsRequest$,
  GetECSServiceRecommendationsResponse$,
  GetEffectiveRecommendationPreferences$,
  GetEffectiveRecommendationPreferencesCommand,
  GetEffectiveRecommendationPreferencesRequest$,
  GetEffectiveRecommendationPreferencesResponse$,
  GetEnrollmentStatus$,
  GetEnrollmentStatusCommand,
  GetEnrollmentStatusRequest$,
  GetEnrollmentStatusResponse$,
  GetEnrollmentStatusesForOrganization$,
  GetEnrollmentStatusesForOrganizationCommand,
  GetEnrollmentStatusesForOrganizationRequest$,
  GetEnrollmentStatusesForOrganizationResponse$,
  GetIdleRecommendations$,
  GetIdleRecommendationsCommand,
  GetIdleRecommendationsRequest$,
  GetIdleRecommendationsResponse$,
  GetLambdaFunctionRecommendations$,
  GetLambdaFunctionRecommendationsCommand,
  GetLambdaFunctionRecommendationsRequest$,
  GetLambdaFunctionRecommendationsResponse$,
  GetLicenseRecommendations$,
  GetLicenseRecommendationsCommand,
  GetLicenseRecommendationsRequest$,
  GetLicenseRecommendationsResponse$,
  GetRDSDatabaseRecommendationProjectedMetrics$,
  GetRDSDatabaseRecommendationProjectedMetricsCommand,
  GetRDSDatabaseRecommendationProjectedMetricsRequest$,
  GetRDSDatabaseRecommendationProjectedMetricsResponse$,
  GetRDSDatabaseRecommendations$,
  GetRDSDatabaseRecommendationsCommand,
  GetRDSDatabaseRecommendationsRequest$,
  GetRDSDatabaseRecommendationsResponse$,
  GetRecommendationError$,
  GetRecommendationPreferences$,
  GetRecommendationPreferencesCommand,
  GetRecommendationPreferencesRequest$,
  GetRecommendationPreferencesResponse$,
  GetRecommendationSummaries$,
  GetRecommendationSummariesCommand,
  GetRecommendationSummariesRequest$,
  GetRecommendationSummariesResponse$,
  Gpu$,
  GpuInfo$,
  Idle,
  IdleEstimatedMonthlySavings$,
  IdleFinding,
  IdleMetricName,
  IdleRecommendation$,
  IdleRecommendationError$,
  IdleRecommendationFilter$,
  IdleRecommendationFilterName,
  IdleRecommendationResourceType,
  IdleSavingsOpportunity$,
  IdleSavingsOpportunityAfterDiscounts$,
  IdleSummary$,
  IdleUtilizationMetric$,
  InferredWorkloadSaving$,
  InferredWorkloadType,
  InferredWorkloadTypesPreference,
  InstanceEstimatedMonthlySavings$,
  InstanceIdle,
  InstanceRecommendation$,
  InstanceRecommendationFindingReasonCode,
  InstanceRecommendationOption$,
  InstanceSavingsEstimationMode$,
  InstanceSavingsEstimationModeSource,
  InstanceSavingsOpportunityAfterDiscounts$,
  InstanceState,
  InternalServerException,
  InternalServerException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  JobFilter$,
  JobFilterName,
  JobStatus,
  LambdaEffectiveRecommendationPreferences$,
  LambdaEstimatedMonthlySavings$,
  LambdaFunctionMemoryMetricName,
  LambdaFunctionMemoryMetricStatistic,
  LambdaFunctionMemoryProjectedMetric$,
  LambdaFunctionMemoryRecommendationOption$,
  LambdaFunctionMetricName,
  LambdaFunctionMetricStatistic,
  LambdaFunctionRecommendation$,
  LambdaFunctionRecommendationFilter$,
  LambdaFunctionRecommendationFilterName,
  LambdaFunctionRecommendationFinding,
  LambdaFunctionRecommendationFindingReasonCode,
  LambdaFunctionUtilizationMetric$,
  LambdaSavingsEstimationMode$,
  LambdaSavingsEstimationModeSource,
  LambdaSavingsOpportunityAfterDiscounts$,
  LicenseConfiguration$,
  LicenseEdition,
  LicenseFinding,
  LicenseFindingReasonCode,
  LicenseModel,
  LicenseName,
  LicenseRecommendation$,
  LicenseRecommendationFilter$,
  LicenseRecommendationFilterName,
  LicenseRecommendationOption$,
  LimitExceededException,
  LimitExceededException$,
  LookBackPeriodPreference,
  MemorySizeConfiguration$,
  MetricName,
  MetricSource$,
  MetricSourceProvider,
  MetricStatistic,
  MigrationEffort,
  MissingAuthenticationToken,
  MissingAuthenticationToken$,
  OptInRequiredException,
  OptInRequiredException$,
  Order,
  OrderBy$,
  PlatformDifference,
  PreferredResource$,
  PreferredResourceName,
  ProjectedMetric$,
  PutRecommendationPreferences$,
  PutRecommendationPreferencesCommand,
  PutRecommendationPreferencesRequest$,
  PutRecommendationPreferencesResponse$,
  RDSCurrentInstancePerformanceRisk,
  RDSDBInstanceRecommendationOption$,
  RDSDBMetricName,
  RDSDBMetricStatistic,
  RDSDBRecommendation$,
  RDSDBRecommendationFilter$,
  RDSDBRecommendationFilterName,
  RDSDBStorageRecommendationOption$,
  RDSDBUtilizationMetric$,
  RDSDatabaseProjectedMetric$,
  RDSDatabaseRecommendedOptionProjectedMetric$,
  RDSEffectiveRecommendationPreferences$,
  RDSEstimatedMonthlyVolumeIOPsCostVariation,
  RDSInstanceEstimatedMonthlySavings$,
  RDSInstanceFinding,
  RDSInstanceFindingReasonCode,
  RDSInstanceSavingsOpportunityAfterDiscounts$,
  RDSSavingsEstimationMode$,
  RDSSavingsEstimationModeSource,
  RDSStorageEstimatedMonthlySavings$,
  RDSStorageFinding,
  RDSStorageFindingReasonCode,
  RDSStorageSavingsOpportunityAfterDiscounts$,
  ReasonCodeSummary$,
  RecommendationExportJob$,
  RecommendationPreferenceName,
  RecommendationPreferences$,
  RecommendationPreferencesDetail$,
  RecommendationSource$,
  RecommendationSourceType,
  RecommendationSummary$,
  RecommendedOptionProjectedMetric$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  S3Destination$,
  S3DestinationConfig$,
  SavingsEstimationMode,
  SavingsOpportunity$,
  Scope$,
  ScopeName,
  ServiceConfiguration$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  Status,
  Summary$,
  Tag$,
  ThrottlingException,
  ThrottlingException$,
  UpdateEnrollmentStatus$,
  UpdateEnrollmentStatusCommand,
  UpdateEnrollmentStatusRequest$,
  UpdateEnrollmentStatusResponse$,
  UtilizationMetric$,
  UtilizationPreference$,
  VolumeConfiguration$,
  VolumeRecommendation$,
  VolumeRecommendationOption$,
  paginateDescribeRecommendationExportJobs,
  paginateGetEnrollmentStatusesForOrganization,
  paginateGetLambdaFunctionRecommendations,
  paginateGetRecommendationPreferences,
  paginateGetRecommendationSummaries,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ComputeOptimizerClient === "function");
assert(typeof ComputeOptimizer === "function");
// commands
assert(typeof DeleteRecommendationPreferencesCommand === "function");
assert(typeof DeleteRecommendationPreferences$ === "object");
assert(typeof DescribeRecommendationExportJobsCommand === "function");
assert(typeof DescribeRecommendationExportJobs$ === "object");
assert(typeof ExportAutoScalingGroupRecommendationsCommand === "function");
assert(typeof ExportAutoScalingGroupRecommendations$ === "object");
assert(typeof ExportEBSVolumeRecommendationsCommand === "function");
assert(typeof ExportEBSVolumeRecommendations$ === "object");
assert(typeof ExportEC2InstanceRecommendationsCommand === "function");
assert(typeof ExportEC2InstanceRecommendations$ === "object");
assert(typeof ExportECSServiceRecommendationsCommand === "function");
assert(typeof ExportECSServiceRecommendations$ === "object");
assert(typeof ExportIdleRecommendationsCommand === "function");
assert(typeof ExportIdleRecommendations$ === "object");
assert(typeof ExportLambdaFunctionRecommendationsCommand === "function");
assert(typeof ExportLambdaFunctionRecommendations$ === "object");
assert(typeof ExportLicenseRecommendationsCommand === "function");
assert(typeof ExportLicenseRecommendations$ === "object");
assert(typeof ExportRDSDatabaseRecommendationsCommand === "function");
assert(typeof ExportRDSDatabaseRecommendations$ === "object");
assert(typeof GetAutoScalingGroupRecommendationsCommand === "function");
assert(typeof GetAutoScalingGroupRecommendations$ === "object");
assert(typeof GetEBSVolumeRecommendationsCommand === "function");
assert(typeof GetEBSVolumeRecommendations$ === "object");
assert(typeof GetEC2InstanceRecommendationsCommand === "function");
assert(typeof GetEC2InstanceRecommendations$ === "object");
assert(typeof GetEC2RecommendationProjectedMetricsCommand === "function");
assert(typeof GetEC2RecommendationProjectedMetrics$ === "object");
assert(typeof GetECSServiceRecommendationProjectedMetricsCommand === "function");
assert(typeof GetECSServiceRecommendationProjectedMetrics$ === "object");
assert(typeof GetECSServiceRecommendationsCommand === "function");
assert(typeof GetECSServiceRecommendations$ === "object");
assert(typeof GetEffectiveRecommendationPreferencesCommand === "function");
assert(typeof GetEffectiveRecommendationPreferences$ === "object");
assert(typeof GetEnrollmentStatusCommand === "function");
assert(typeof GetEnrollmentStatus$ === "object");
assert(typeof GetEnrollmentStatusesForOrganizationCommand === "function");
assert(typeof GetEnrollmentStatusesForOrganization$ === "object");
assert(typeof GetIdleRecommendationsCommand === "function");
assert(typeof GetIdleRecommendations$ === "object");
assert(typeof GetLambdaFunctionRecommendationsCommand === "function");
assert(typeof GetLambdaFunctionRecommendations$ === "object");
assert(typeof GetLicenseRecommendationsCommand === "function");
assert(typeof GetLicenseRecommendations$ === "object");
assert(typeof GetRDSDatabaseRecommendationProjectedMetricsCommand === "function");
assert(typeof GetRDSDatabaseRecommendationProjectedMetrics$ === "object");
assert(typeof GetRDSDatabaseRecommendationsCommand === "function");
assert(typeof GetRDSDatabaseRecommendations$ === "object");
assert(typeof GetRecommendationPreferencesCommand === "function");
assert(typeof GetRecommendationPreferences$ === "object");
assert(typeof GetRecommendationSummariesCommand === "function");
assert(typeof GetRecommendationSummaries$ === "object");
assert(typeof PutRecommendationPreferencesCommand === "function");
assert(typeof PutRecommendationPreferences$ === "object");
assert(typeof UpdateEnrollmentStatusCommand === "function");
assert(typeof UpdateEnrollmentStatus$ === "object");
// structural schemas
assert(typeof AccountEnrollmentStatus$ === "object");
assert(typeof AutoScalingGroupConfiguration$ === "object");
assert(typeof AutoScalingGroupEstimatedMonthlySavings$ === "object");
assert(typeof AutoScalingGroupRecommendation$ === "object");
assert(typeof AutoScalingGroupRecommendationOption$ === "object");
assert(typeof AutoScalingGroupSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof ContainerConfiguration$ === "object");
assert(typeof ContainerRecommendation$ === "object");
assert(typeof CurrentPerformanceRiskRatings$ === "object");
assert(typeof CustomizableMetricParameters$ === "object");
assert(typeof DBStorageConfiguration$ === "object");
assert(typeof DeleteRecommendationPreferencesRequest$ === "object");
assert(typeof DeleteRecommendationPreferencesResponse$ === "object");
assert(typeof DescribeRecommendationExportJobsRequest$ === "object");
assert(typeof DescribeRecommendationExportJobsResponse$ === "object");
assert(typeof EBSEffectiveRecommendationPreferences$ === "object");
assert(typeof EBSEstimatedMonthlySavings$ === "object");
assert(typeof EBSFilter$ === "object");
assert(typeof EBSSavingsEstimationMode$ === "object");
assert(typeof EBSSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof EBSUtilizationMetric$ === "object");
assert(typeof ECSEffectiveRecommendationPreferences$ === "object");
assert(typeof ECSEstimatedMonthlySavings$ === "object");
assert(typeof ECSSavingsEstimationMode$ === "object");
assert(typeof ECSSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof ECSServiceProjectedMetric$ === "object");
assert(typeof ECSServiceProjectedUtilizationMetric$ === "object");
assert(typeof ECSServiceRecommendation$ === "object");
assert(typeof ECSServiceRecommendationFilter$ === "object");
assert(typeof ECSServiceRecommendationOption$ === "object");
assert(typeof ECSServiceRecommendedOptionProjectedMetric$ === "object");
assert(typeof ECSServiceUtilizationMetric$ === "object");
assert(typeof EffectivePreferredResource$ === "object");
assert(typeof EffectiveRecommendationPreferences$ === "object");
assert(typeof EnrollmentFilter$ === "object");
assert(typeof EstimatedMonthlySavings$ === "object");
assert(typeof ExportAutoScalingGroupRecommendationsRequest$ === "object");
assert(typeof ExportAutoScalingGroupRecommendationsResponse$ === "object");
assert(typeof ExportDestination$ === "object");
assert(typeof ExportEBSVolumeRecommendationsRequest$ === "object");
assert(typeof ExportEBSVolumeRecommendationsResponse$ === "object");
assert(typeof ExportEC2InstanceRecommendationsRequest$ === "object");
assert(typeof ExportEC2InstanceRecommendationsResponse$ === "object");
assert(typeof ExportECSServiceRecommendationsRequest$ === "object");
assert(typeof ExportECSServiceRecommendationsResponse$ === "object");
assert(typeof ExportIdleRecommendationsRequest$ === "object");
assert(typeof ExportIdleRecommendationsResponse$ === "object");
assert(typeof ExportLambdaFunctionRecommendationsRequest$ === "object");
assert(typeof ExportLambdaFunctionRecommendationsResponse$ === "object");
assert(typeof ExportLicenseRecommendationsRequest$ === "object");
assert(typeof ExportLicenseRecommendationsResponse$ === "object");
assert(typeof ExportRDSDatabaseRecommendationsRequest$ === "object");
assert(typeof ExportRDSDatabaseRecommendationsResponse$ === "object");
assert(typeof ExternalMetricsPreference$ === "object");
assert(typeof ExternalMetricStatus$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetAutoScalingGroupRecommendationsRequest$ === "object");
assert(typeof GetAutoScalingGroupRecommendationsResponse$ === "object");
assert(typeof GetEBSVolumeRecommendationsRequest$ === "object");
assert(typeof GetEBSVolumeRecommendationsResponse$ === "object");
assert(typeof GetEC2InstanceRecommendationsRequest$ === "object");
assert(typeof GetEC2InstanceRecommendationsResponse$ === "object");
assert(typeof GetEC2RecommendationProjectedMetricsRequest$ === "object");
assert(typeof GetEC2RecommendationProjectedMetricsResponse$ === "object");
assert(typeof GetECSServiceRecommendationProjectedMetricsRequest$ === "object");
assert(typeof GetECSServiceRecommendationProjectedMetricsResponse$ === "object");
assert(typeof GetECSServiceRecommendationsRequest$ === "object");
assert(typeof GetECSServiceRecommendationsResponse$ === "object");
assert(typeof GetEffectiveRecommendationPreferencesRequest$ === "object");
assert(typeof GetEffectiveRecommendationPreferencesResponse$ === "object");
assert(typeof GetEnrollmentStatusesForOrganizationRequest$ === "object");
assert(typeof GetEnrollmentStatusesForOrganizationResponse$ === "object");
assert(typeof GetEnrollmentStatusRequest$ === "object");
assert(typeof GetEnrollmentStatusResponse$ === "object");
assert(typeof GetIdleRecommendationsRequest$ === "object");
assert(typeof GetIdleRecommendationsResponse$ === "object");
assert(typeof GetLambdaFunctionRecommendationsRequest$ === "object");
assert(typeof GetLambdaFunctionRecommendationsResponse$ === "object");
assert(typeof GetLicenseRecommendationsRequest$ === "object");
assert(typeof GetLicenseRecommendationsResponse$ === "object");
assert(typeof GetRDSDatabaseRecommendationProjectedMetricsRequest$ === "object");
assert(typeof GetRDSDatabaseRecommendationProjectedMetricsResponse$ === "object");
assert(typeof GetRDSDatabaseRecommendationsRequest$ === "object");
assert(typeof GetRDSDatabaseRecommendationsResponse$ === "object");
assert(typeof GetRecommendationError$ === "object");
assert(typeof GetRecommendationPreferencesRequest$ === "object");
assert(typeof GetRecommendationPreferencesResponse$ === "object");
assert(typeof GetRecommendationSummariesRequest$ === "object");
assert(typeof GetRecommendationSummariesResponse$ === "object");
assert(typeof Gpu$ === "object");
assert(typeof GpuInfo$ === "object");
assert(typeof IdleEstimatedMonthlySavings$ === "object");
assert(typeof IdleRecommendation$ === "object");
assert(typeof IdleRecommendationError$ === "object");
assert(typeof IdleRecommendationFilter$ === "object");
assert(typeof IdleSavingsOpportunity$ === "object");
assert(typeof IdleSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof IdleSummary$ === "object");
assert(typeof IdleUtilizationMetric$ === "object");
assert(typeof InferredWorkloadSaving$ === "object");
assert(typeof InstanceEstimatedMonthlySavings$ === "object");
assert(typeof InstanceRecommendation$ === "object");
assert(typeof InstanceRecommendationOption$ === "object");
assert(typeof InstanceSavingsEstimationMode$ === "object");
assert(typeof InstanceSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof JobFilter$ === "object");
assert(typeof LambdaEffectiveRecommendationPreferences$ === "object");
assert(typeof LambdaEstimatedMonthlySavings$ === "object");
assert(typeof LambdaFunctionMemoryProjectedMetric$ === "object");
assert(typeof LambdaFunctionMemoryRecommendationOption$ === "object");
assert(typeof LambdaFunctionRecommendation$ === "object");
assert(typeof LambdaFunctionRecommendationFilter$ === "object");
assert(typeof LambdaFunctionUtilizationMetric$ === "object");
assert(typeof LambdaSavingsEstimationMode$ === "object");
assert(typeof LambdaSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof LicenseConfiguration$ === "object");
assert(typeof LicenseRecommendation$ === "object");
assert(typeof LicenseRecommendationFilter$ === "object");
assert(typeof LicenseRecommendationOption$ === "object");
assert(typeof MemorySizeConfiguration$ === "object");
assert(typeof MetricSource$ === "object");
assert(typeof OrderBy$ === "object");
assert(typeof PreferredResource$ === "object");
assert(typeof ProjectedMetric$ === "object");
assert(typeof PutRecommendationPreferencesRequest$ === "object");
assert(typeof PutRecommendationPreferencesResponse$ === "object");
assert(typeof RDSDatabaseProjectedMetric$ === "object");
assert(typeof RDSDatabaseRecommendedOptionProjectedMetric$ === "object");
assert(typeof RDSDBInstanceRecommendationOption$ === "object");
assert(typeof RDSDBRecommendation$ === "object");
assert(typeof RDSDBRecommendationFilter$ === "object");
assert(typeof RDSDBStorageRecommendationOption$ === "object");
assert(typeof RDSDBUtilizationMetric$ === "object");
assert(typeof RDSEffectiveRecommendationPreferences$ === "object");
assert(typeof RDSInstanceEstimatedMonthlySavings$ === "object");
assert(typeof RDSInstanceSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof RDSSavingsEstimationMode$ === "object");
assert(typeof RDSStorageEstimatedMonthlySavings$ === "object");
assert(typeof RDSStorageSavingsOpportunityAfterDiscounts$ === "object");
assert(typeof ReasonCodeSummary$ === "object");
assert(typeof RecommendationExportJob$ === "object");
assert(typeof RecommendationPreferences$ === "object");
assert(typeof RecommendationPreferencesDetail$ === "object");
assert(typeof RecommendationSource$ === "object");
assert(typeof RecommendationSummary$ === "object");
assert(typeof RecommendedOptionProjectedMetric$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3DestinationConfig$ === "object");
assert(typeof SavingsOpportunity$ === "object");
assert(typeof Scope$ === "object");
assert(typeof ServiceConfiguration$ === "object");
assert(typeof Summary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UpdateEnrollmentStatusRequest$ === "object");
assert(typeof UpdateEnrollmentStatusResponse$ === "object");
assert(typeof UtilizationMetric$ === "object");
assert(typeof UtilizationPreference$ === "object");
assert(typeof VolumeConfiguration$ === "object");
assert(typeof VolumeRecommendation$ === "object");
assert(typeof VolumeRecommendationOption$ === "object");
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
assert(AccessDeniedException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(LimitExceededException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MissingAuthenticationToken.prototype instanceof ComputeOptimizerServiceException);
assert(typeof MissingAuthenticationToken$ === "object");
assert(OptInRequiredException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof OptInRequiredException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof ComputeOptimizerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ComputeOptimizerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeRecommendationExportJobs === "function");
assert(typeof paginateGetEnrollmentStatusesForOrganization === "function");
assert(typeof paginateGetLambdaFunctionRecommendations === "function");
assert(typeof paginateGetRecommendationPreferences === "function");
assert(typeof paginateGetRecommendationSummaries === "function");
console.log(`ComputeOptimizer index test passed.`);
