import {
  AcceptResourceGroupingRecommendationsCommand,
  AddDraftAppVersionResourceMappingsCommand,
  AlarmType,
  AppAssessmentScheduleType,
  AppComplianceStatusType,
  AppDriftStatusType,
  AppStatusType,
  AssessmentInvoker,
  AssessmentStatus,
  BatchUpdateRecommendationStatusCommand,
  ComplianceStatus,
  ConditionOperatorType,
  ConfigRecommendationOptimizationType,
  CostFrequency,
  CreateAppCommand,
  CreateAppVersionAppComponentCommand,
  CreateAppVersionResourceCommand,
  CreateRecommendationTemplateCommand,
  CreateResiliencyPolicyCommand,
  DataLocationConstraint,
  DeleteAppAssessmentCommand,
  DeleteAppCommand,
  DeleteAppInputSourceCommand,
  DeleteAppVersionAppComponentCommand,
  DeleteAppVersionResourceCommand,
  DeleteRecommendationTemplateCommand,
  DeleteResiliencyPolicyCommand,
  DescribeAppAssessmentCommand,
  DescribeAppCommand,
  DescribeAppVersionAppComponentCommand,
  DescribeAppVersionCommand,
  DescribeAppVersionResourceCommand,
  DescribeAppVersionResourcesResolutionStatusCommand,
  DescribeAppVersionTemplateCommand,
  DescribeDraftAppVersionResourcesImportStatusCommand,
  DescribeMetricsExportCommand,
  DescribeResiliencyPolicyCommand,
  DescribeResourceGroupingRecommendationTaskCommand,
  DifferenceType,
  DisruptionType,
  DriftStatus,
  DriftType,
  EstimatedCostTier,
  EventType,
  ExcludeRecommendationReason,
  FieldAggregationType,
  GroupingRecommendationConfidenceLevel,
  GroupingRecommendationRejectionReason,
  GroupingRecommendationStatusType,
  HaArchitecture,
  ImportResourcesToDraftAppVersionCommand,
  ListAlarmRecommendationsCommand,
  ListAppAssessmentComplianceDriftsCommand,
  ListAppAssessmentResourceDriftsCommand,
  ListAppAssessmentsCommand,
  ListAppComponentCompliancesCommand,
  ListAppComponentRecommendationsCommand,
  ListAppInputSourcesCommand,
  ListAppVersionAppComponentsCommand,
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourcesCommand,
  ListAppVersionsCommand,
  ListAppsCommand,
  ListMetricsCommand,
  ListRecommendationTemplatesCommand,
  ListResiliencyPoliciesCommand,
  ListResourceGroupingRecommendationsCommand,
  ListSopRecommendationsCommand,
  ListSuggestedResiliencyPoliciesCommand,
  ListTagsForResourceCommand,
  ListTestRecommendationsCommand,
  ListUnsupportedAppVersionResourcesCommand,
  MetricsExportStatusType,
  PermissionModelType,
  PhysicalIdentifierType,
  PublishAppVersionCommand,
  PutDraftAppVersionTemplateCommand,
  RecommendationComplianceStatus,
  RecommendationStatus,
  RecommendationTemplateStatus,
  RejectResourceGroupingRecommendationsCommand,
  RemoveDraftAppVersionResourceMappingsCommand,
  RenderRecommendationType,
  Resiliencehub,
  ResiliencehubClient,
  ResiliencehubServiceException,
  ResiliencyPolicyTier,
  ResiliencyScoreType,
  ResolveAppVersionResourcesCommand,
  ResourceImportStatusType,
  ResourceImportStrategyType,
  ResourceMappingType,
  ResourceResolutionStatusType,
  ResourceSourceType,
  ResourcesGroupingRecGenStatusType,
  SopServiceType,
  StartAppAssessmentCommand,
  StartMetricsExportCommand,
  StartResourceGroupingRecommendationTaskCommand,
  TagResourceCommand,
  TemplateFormat,
  TestRisk,
  TestType,
  UntagResourceCommand,
  UpdateAppCommand,
  UpdateAppVersionAppComponentCommand,
  UpdateAppVersionCommand,
  UpdateAppVersionResourceCommand,
  UpdateResiliencyPolicyCommand,
  paginateListAlarmRecommendations,
  paginateListAppAssessmentComplianceDrifts,
  paginateListAppAssessmentResourceDrifts,
  paginateListAppAssessments,
  paginateListAppComponentCompliances,
  paginateListAppComponentRecommendations,
  paginateListAppInputSources,
  paginateListAppVersionAppComponents,
  paginateListAppVersionResourceMappings,
  paginateListAppVersionResources,
  paginateListAppVersions,
  paginateListApps,
  paginateListMetrics,
  paginateListRecommendationTemplates,
  paginateListResiliencyPolicies,
  paginateListResourceGroupingRecommendations,
  paginateListSopRecommendations,
  paginateListSuggestedResiliencyPolicies,
  paginateListTestRecommendations,
  paginateListUnsupportedAppVersionResources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResiliencehubClient === "function");
assert(typeof Resiliencehub === "function");
// commands
assert(typeof AcceptResourceGroupingRecommendationsCommand === "function");
assert(typeof AddDraftAppVersionResourceMappingsCommand === "function");
assert(typeof BatchUpdateRecommendationStatusCommand === "function");
assert(typeof CreateAppCommand === "function");
assert(typeof CreateAppVersionAppComponentCommand === "function");
assert(typeof CreateAppVersionResourceCommand === "function");
assert(typeof CreateRecommendationTemplateCommand === "function");
assert(typeof CreateResiliencyPolicyCommand === "function");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteAppAssessmentCommand === "function");
assert(typeof DeleteAppInputSourceCommand === "function");
assert(typeof DeleteAppVersionAppComponentCommand === "function");
assert(typeof DeleteAppVersionResourceCommand === "function");
assert(typeof DeleteRecommendationTemplateCommand === "function");
assert(typeof DeleteResiliencyPolicyCommand === "function");
assert(typeof DescribeAppCommand === "function");
assert(typeof DescribeAppAssessmentCommand === "function");
assert(typeof DescribeAppVersionCommand === "function");
assert(typeof DescribeAppVersionAppComponentCommand === "function");
assert(typeof DescribeAppVersionResourceCommand === "function");
assert(typeof DescribeAppVersionResourcesResolutionStatusCommand === "function");
assert(typeof DescribeAppVersionTemplateCommand === "function");
assert(typeof DescribeDraftAppVersionResourcesImportStatusCommand === "function");
assert(typeof DescribeMetricsExportCommand === "function");
assert(typeof DescribeResiliencyPolicyCommand === "function");
assert(typeof DescribeResourceGroupingRecommendationTaskCommand === "function");
assert(typeof ImportResourcesToDraftAppVersionCommand === "function");
assert(typeof ListAlarmRecommendationsCommand === "function");
assert(typeof ListAppAssessmentComplianceDriftsCommand === "function");
assert(typeof ListAppAssessmentResourceDriftsCommand === "function");
assert(typeof ListAppAssessmentsCommand === "function");
assert(typeof ListAppComponentCompliancesCommand === "function");
assert(typeof ListAppComponentRecommendationsCommand === "function");
assert(typeof ListAppInputSourcesCommand === "function");
assert(typeof ListAppsCommand === "function");
assert(typeof ListAppVersionAppComponentsCommand === "function");
assert(typeof ListAppVersionResourceMappingsCommand === "function");
assert(typeof ListAppVersionResourcesCommand === "function");
assert(typeof ListAppVersionsCommand === "function");
assert(typeof ListMetricsCommand === "function");
assert(typeof ListRecommendationTemplatesCommand === "function");
assert(typeof ListResiliencyPoliciesCommand === "function");
assert(typeof ListResourceGroupingRecommendationsCommand === "function");
assert(typeof ListSopRecommendationsCommand === "function");
assert(typeof ListSuggestedResiliencyPoliciesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTestRecommendationsCommand === "function");
assert(typeof ListUnsupportedAppVersionResourcesCommand === "function");
assert(typeof PublishAppVersionCommand === "function");
assert(typeof PutDraftAppVersionTemplateCommand === "function");
assert(typeof RejectResourceGroupingRecommendationsCommand === "function");
assert(typeof RemoveDraftAppVersionResourceMappingsCommand === "function");
assert(typeof ResolveAppVersionResourcesCommand === "function");
assert(typeof StartAppAssessmentCommand === "function");
assert(typeof StartMetricsExportCommand === "function");
assert(typeof StartResourceGroupingRecommendationTaskCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAppCommand === "function");
assert(typeof UpdateAppVersionCommand === "function");
assert(typeof UpdateAppVersionAppComponentCommand === "function");
assert(typeof UpdateAppVersionResourceCommand === "function");
assert(typeof UpdateResiliencyPolicyCommand === "function");
// enums
assert(typeof AlarmType === "object");
assert(typeof AppAssessmentScheduleType === "object");
assert(typeof AppComplianceStatusType === "object");
assert(typeof AppDriftStatusType === "object");
assert(typeof AppStatusType === "object");
assert(typeof AssessmentInvoker === "object");
assert(typeof AssessmentStatus === "object");
assert(typeof ComplianceStatus === "object");
assert(typeof ConditionOperatorType === "object");
assert(typeof ConfigRecommendationOptimizationType === "object");
assert(typeof CostFrequency === "object");
assert(typeof DataLocationConstraint === "object");
assert(typeof DifferenceType === "object");
assert(typeof DisruptionType === "object");
assert(typeof DriftStatus === "object");
assert(typeof DriftType === "object");
assert(typeof EstimatedCostTier === "object");
assert(typeof EventType === "object");
assert(typeof ExcludeRecommendationReason === "object");
assert(typeof FieldAggregationType === "object");
assert(typeof GroupingRecommendationConfidenceLevel === "object");
assert(typeof GroupingRecommendationRejectionReason === "object");
assert(typeof GroupingRecommendationStatusType === "object");
assert(typeof HaArchitecture === "object");
assert(typeof MetricsExportStatusType === "object");
assert(typeof PermissionModelType === "object");
assert(typeof PhysicalIdentifierType === "object");
assert(typeof RecommendationComplianceStatus === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RecommendationTemplateStatus === "object");
assert(typeof RenderRecommendationType === "object");
assert(typeof ResiliencyPolicyTier === "object");
assert(typeof ResiliencyScoreType === "object");
assert(typeof ResourceImportStatusType === "object");
assert(typeof ResourceImportStrategyType === "object");
assert(typeof ResourceMappingType === "object");
assert(typeof ResourceResolutionStatusType === "object");
assert(typeof ResourcesGroupingRecGenStatusType === "object");
assert(typeof ResourceSourceType === "object");
assert(typeof SopServiceType === "object");
assert(typeof TemplateFormat === "object");
assert(typeof TestRisk === "object");
assert(typeof TestType === "object");
// errors
assert(ResiliencehubServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAlarmRecommendations === "function");
assert(typeof paginateListAppAssessmentComplianceDrifts === "function");
assert(typeof paginateListAppAssessmentResourceDrifts === "function");
assert(typeof paginateListAppAssessments === "function");
assert(typeof paginateListAppComponentCompliances === "function");
assert(typeof paginateListAppComponentRecommendations === "function");
assert(typeof paginateListAppInputSources === "function");
assert(typeof paginateListAppVersionAppComponents === "function");
assert(typeof paginateListAppVersionResourceMappings === "function");
assert(typeof paginateListAppVersionResources === "function");
assert(typeof paginateListAppVersions === "function");
assert(typeof paginateListApps === "function");
assert(typeof paginateListMetrics === "function");
assert(typeof paginateListRecommendationTemplates === "function");
assert(typeof paginateListResiliencyPolicies === "function");
assert(typeof paginateListResourceGroupingRecommendations === "function");
assert(typeof paginateListSopRecommendations === "function");
assert(typeof paginateListSuggestedResiliencyPolicies === "function");
assert(typeof paginateListTestRecommendations === "function");
assert(typeof paginateListUnsupportedAppVersionResources === "function");
console.log(`Resiliencehub index test passed.`);
