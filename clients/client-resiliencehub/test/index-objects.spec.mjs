import {
  AcceptGroupingRecommendationEntry$,
  AcceptResourceGroupingRecommendations$,
  AcceptResourceGroupingRecommendationsCommand,
  AcceptResourceGroupingRecommendationsRequest$,
  AcceptResourceGroupingRecommendationsResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AddDraftAppVersionResourceMappings$,
  AddDraftAppVersionResourceMappingsCommand,
  AddDraftAppVersionResourceMappingsRequest$,
  AddDraftAppVersionResourceMappingsResponse$,
  Alarm$,
  AlarmRecommendation$,
  AlarmType,
  App$,
  AppAssessment$,
  AppAssessmentScheduleType,
  AppAssessmentSummary$,
  AppComplianceStatusType,
  AppComponent$,
  AppComponentCompliance$,
  AppDriftStatusType,
  AppInputSource$,
  AppStatusType,
  AppSummary$,
  AppVersionSummary$,
  AssessmentInvoker,
  AssessmentRiskRecommendation$,
  AssessmentStatus,
  AssessmentSummary$,
  BatchUpdateRecommendationStatus$,
  BatchUpdateRecommendationStatusCommand,
  BatchUpdateRecommendationStatusFailedEntry$,
  BatchUpdateRecommendationStatusRequest$,
  BatchUpdateRecommendationStatusResponse$,
  BatchUpdateRecommendationStatusSuccessfulEntry$,
  ComplianceDrift$,
  ComplianceStatus,
  ComponentRecommendation$,
  Condition$,
  ConditionOperatorType,
  ConfigRecommendation$,
  ConfigRecommendationOptimizationType,
  ConflictException,
  ConflictException$,
  Cost$,
  CostFrequency,
  CreateApp$,
  CreateAppCommand,
  CreateAppRequest$,
  CreateAppResponse$,
  CreateAppVersionAppComponent$,
  CreateAppVersionAppComponentCommand,
  CreateAppVersionAppComponentRequest$,
  CreateAppVersionAppComponentResponse$,
  CreateAppVersionResource$,
  CreateAppVersionResourceCommand,
  CreateAppVersionResourceRequest$,
  CreateAppVersionResourceResponse$,
  CreateRecommendationTemplate$,
  CreateRecommendationTemplateCommand,
  CreateRecommendationTemplateRequest$,
  CreateRecommendationTemplateResponse$,
  CreateResiliencyPolicy$,
  CreateResiliencyPolicyCommand,
  CreateResiliencyPolicyRequest$,
  CreateResiliencyPolicyResponse$,
  DataLocationConstraint,
  DeleteApp$,
  DeleteAppAssessment$,
  DeleteAppAssessmentCommand,
  DeleteAppAssessmentRequest$,
  DeleteAppAssessmentResponse$,
  DeleteAppCommand,
  DeleteAppInputSource$,
  DeleteAppInputSourceCommand,
  DeleteAppInputSourceRequest$,
  DeleteAppInputSourceResponse$,
  DeleteAppRequest$,
  DeleteAppResponse$,
  DeleteAppVersionAppComponent$,
  DeleteAppVersionAppComponentCommand,
  DeleteAppVersionAppComponentRequest$,
  DeleteAppVersionAppComponentResponse$,
  DeleteAppVersionResource$,
  DeleteAppVersionResourceCommand,
  DeleteAppVersionResourceRequest$,
  DeleteAppVersionResourceResponse$,
  DeleteRecommendationTemplate$,
  DeleteRecommendationTemplateCommand,
  DeleteRecommendationTemplateRequest$,
  DeleteRecommendationTemplateResponse$,
  DeleteResiliencyPolicy$,
  DeleteResiliencyPolicyCommand,
  DeleteResiliencyPolicyRequest$,
  DeleteResiliencyPolicyResponse$,
  DescribeApp$,
  DescribeAppAssessment$,
  DescribeAppAssessmentCommand,
  DescribeAppAssessmentRequest$,
  DescribeAppAssessmentResponse$,
  DescribeAppCommand,
  DescribeAppRequest$,
  DescribeAppResponse$,
  DescribeAppVersion$,
  DescribeAppVersionAppComponent$,
  DescribeAppVersionAppComponentCommand,
  DescribeAppVersionAppComponentRequest$,
  DescribeAppVersionAppComponentResponse$,
  DescribeAppVersionCommand,
  DescribeAppVersionRequest$,
  DescribeAppVersionResource$,
  DescribeAppVersionResourceCommand,
  DescribeAppVersionResourceRequest$,
  DescribeAppVersionResourceResponse$,
  DescribeAppVersionResourcesResolutionStatus$,
  DescribeAppVersionResourcesResolutionStatusCommand,
  DescribeAppVersionResourcesResolutionStatusRequest$,
  DescribeAppVersionResourcesResolutionStatusResponse$,
  DescribeAppVersionResponse$,
  DescribeAppVersionTemplate$,
  DescribeAppVersionTemplateCommand,
  DescribeAppVersionTemplateRequest$,
  DescribeAppVersionTemplateResponse$,
  DescribeDraftAppVersionResourcesImportStatus$,
  DescribeDraftAppVersionResourcesImportStatusCommand,
  DescribeDraftAppVersionResourcesImportStatusRequest$,
  DescribeDraftAppVersionResourcesImportStatusResponse$,
  DescribeMetricsExport$,
  DescribeMetricsExportCommand,
  DescribeMetricsExportRequest$,
  DescribeMetricsExportResponse$,
  DescribeResiliencyPolicy$,
  DescribeResiliencyPolicyCommand,
  DescribeResiliencyPolicyRequest$,
  DescribeResiliencyPolicyResponse$,
  DescribeResourceGroupingRecommendationTask$,
  DescribeResourceGroupingRecommendationTaskCommand,
  DescribeResourceGroupingRecommendationTaskRequest$,
  DescribeResourceGroupingRecommendationTaskResponse$,
  DifferenceType,
  DisruptionCompliance$,
  DisruptionType,
  DriftStatus,
  DriftType,
  EksSource$,
  EksSourceClusterNamespace$,
  ErrorDetail$,
  EstimatedCostTier,
  EventSubscription$,
  EventType,
  ExcludeRecommendationReason,
  Experiment$,
  FailedGroupingRecommendationEntry$,
  FailurePolicy$,
  Field$,
  FieldAggregationType,
  GroupingAppComponent$,
  GroupingRecommendation$,
  GroupingRecommendationConfidenceLevel,
  GroupingRecommendationRejectionReason,
  GroupingRecommendationStatusType,
  GroupingResource$,
  HaArchitecture,
  ImportResourcesToDraftAppVersion$,
  ImportResourcesToDraftAppVersionCommand,
  ImportResourcesToDraftAppVersionRequest$,
  ImportResourcesToDraftAppVersionResponse$,
  InternalServerException,
  InternalServerException$,
  ListAlarmRecommendations$,
  ListAlarmRecommendationsCommand,
  ListAlarmRecommendationsRequest$,
  ListAlarmRecommendationsResponse$,
  ListAppAssessmentComplianceDrifts$,
  ListAppAssessmentComplianceDriftsCommand,
  ListAppAssessmentComplianceDriftsRequest$,
  ListAppAssessmentComplianceDriftsResponse$,
  ListAppAssessmentResourceDrifts$,
  ListAppAssessmentResourceDriftsCommand,
  ListAppAssessmentResourceDriftsRequest$,
  ListAppAssessmentResourceDriftsResponse$,
  ListAppAssessments$,
  ListAppAssessmentsCommand,
  ListAppAssessmentsRequest$,
  ListAppAssessmentsResponse$,
  ListAppComponentCompliances$,
  ListAppComponentCompliancesCommand,
  ListAppComponentCompliancesRequest$,
  ListAppComponentCompliancesResponse$,
  ListAppComponentRecommendations$,
  ListAppComponentRecommendationsCommand,
  ListAppComponentRecommendationsRequest$,
  ListAppComponentRecommendationsResponse$,
  ListAppInputSources$,
  ListAppInputSourcesCommand,
  ListAppInputSourcesRequest$,
  ListAppInputSourcesResponse$,
  ListApps$,
  ListAppsCommand,
  ListAppsRequest$,
  ListAppsResponse$,
  ListAppVersionAppComponents$,
  ListAppVersionAppComponentsCommand,
  ListAppVersionAppComponentsRequest$,
  ListAppVersionAppComponentsResponse$,
  ListAppVersionResourceMappings$,
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourceMappingsRequest$,
  ListAppVersionResourceMappingsResponse$,
  ListAppVersionResources$,
  ListAppVersionResourcesCommand,
  ListAppVersionResourcesRequest$,
  ListAppVersionResourcesResponse$,
  ListAppVersions$,
  ListAppVersionsCommand,
  ListAppVersionsRequest$,
  ListAppVersionsResponse$,
  ListMetrics$,
  ListMetricsCommand,
  ListMetricsRequest$,
  ListMetricsResponse$,
  ListRecommendationTemplates$,
  ListRecommendationTemplatesCommand,
  ListRecommendationTemplatesRequest$,
  ListRecommendationTemplatesResponse$,
  ListResiliencyPolicies$,
  ListResiliencyPoliciesCommand,
  ListResiliencyPoliciesRequest$,
  ListResiliencyPoliciesResponse$,
  ListResourceGroupingRecommendations$,
  ListResourceGroupingRecommendationsCommand,
  ListResourceGroupingRecommendationsRequest$,
  ListResourceGroupingRecommendationsResponse$,
  ListSopRecommendations$,
  ListSopRecommendationsCommand,
  ListSopRecommendationsRequest$,
  ListSopRecommendationsResponse$,
  ListSuggestedResiliencyPolicies$,
  ListSuggestedResiliencyPoliciesCommand,
  ListSuggestedResiliencyPoliciesRequest$,
  ListSuggestedResiliencyPoliciesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTestRecommendations$,
  ListTestRecommendationsCommand,
  ListTestRecommendationsRequest$,
  ListTestRecommendationsResponse$,
  ListUnsupportedAppVersionResources$,
  ListUnsupportedAppVersionResourcesCommand,
  ListUnsupportedAppVersionResourcesRequest$,
  ListUnsupportedAppVersionResourcesResponse$,
  LogicalResourceId$,
  MetricsExportStatusType,
  paginateListAlarmRecommendations,
  paginateListAppAssessmentComplianceDrifts,
  paginateListAppAssessmentResourceDrifts,
  paginateListAppAssessments,
  paginateListAppComponentCompliances,
  paginateListAppComponentRecommendations,
  paginateListAppInputSources,
  paginateListApps,
  paginateListAppVersionAppComponents,
  paginateListAppVersionResourceMappings,
  paginateListAppVersionResources,
  paginateListAppVersions,
  paginateListMetrics,
  paginateListRecommendationTemplates,
  paginateListResiliencyPolicies,
  paginateListResourceGroupingRecommendations,
  paginateListSopRecommendations,
  paginateListSuggestedResiliencyPolicies,
  paginateListTestRecommendations,
  paginateListUnsupportedAppVersionResources,
  PermissionModel$,
  PermissionModelType,
  PhysicalIdentifierType,
  PhysicalResource$,
  PhysicalResourceId$,
  PublishAppVersion$,
  PublishAppVersionCommand,
  PublishAppVersionRequest$,
  PublishAppVersionResponse$,
  PutDraftAppVersionTemplate$,
  PutDraftAppVersionTemplateCommand,
  PutDraftAppVersionTemplateRequest$,
  PutDraftAppVersionTemplateResponse$,
  RecommendationComplianceStatus,
  RecommendationDisruptionCompliance$,
  RecommendationItem$,
  RecommendationStatus,
  RecommendationTemplate$,
  RecommendationTemplateStatus,
  RejectGroupingRecommendationEntry$,
  RejectResourceGroupingRecommendations$,
  RejectResourceGroupingRecommendationsCommand,
  RejectResourceGroupingRecommendationsRequest$,
  RejectResourceGroupingRecommendationsResponse$,
  RemoveDraftAppVersionResourceMappings$,
  RemoveDraftAppVersionResourceMappingsCommand,
  RemoveDraftAppVersionResourceMappingsRequest$,
  RemoveDraftAppVersionResourceMappingsResponse$,
  RenderRecommendationType,
  Resiliencehub,
  ResiliencehubClient,
  ResiliencehubServiceException,
  ResiliencyPolicy$,
  ResiliencyPolicyTier,
  ResiliencyScore$,
  ResiliencyScoreType,
  ResolveAppVersionResources$,
  ResolveAppVersionResourcesCommand,
  ResolveAppVersionResourcesRequest$,
  ResolveAppVersionResourcesResponse$,
  ResourceDrift$,
  ResourceError$,
  ResourceErrorsDetails$,
  ResourceIdentifier$,
  ResourceImportStatusType,
  ResourceImportStrategyType,
  ResourceMapping$,
  ResourceMappingType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceResolutionStatusType,
  ResourcesGroupingRecGenStatusType,
  ResourceSourceType,
  S3Location$,
  ScoringComponentResiliencyScore$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SopRecommendation$,
  SopServiceType,
  Sort$,
  StartAppAssessment$,
  StartAppAssessmentCommand,
  StartAppAssessmentRequest$,
  StartAppAssessmentResponse$,
  StartMetricsExport$,
  StartMetricsExportCommand,
  StartMetricsExportRequest$,
  StartMetricsExportResponse$,
  StartResourceGroupingRecommendationTask$,
  StartResourceGroupingRecommendationTaskCommand,
  StartResourceGroupingRecommendationTaskRequest$,
  StartResourceGroupingRecommendationTaskResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TemplateFormat,
  TerraformSource$,
  TestRecommendation$,
  TestRisk,
  TestType,
  ThrottlingException,
  ThrottlingException$,
  UnsupportedResource$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApp$,
  UpdateAppCommand,
  UpdateAppRequest$,
  UpdateAppResponse$,
  UpdateAppVersion$,
  UpdateAppVersionAppComponent$,
  UpdateAppVersionAppComponentCommand,
  UpdateAppVersionAppComponentRequest$,
  UpdateAppVersionAppComponentResponse$,
  UpdateAppVersionCommand,
  UpdateAppVersionRequest$,
  UpdateAppVersionResource$,
  UpdateAppVersionResourceCommand,
  UpdateAppVersionResourceRequest$,
  UpdateAppVersionResourceResponse$,
  UpdateAppVersionResponse$,
  UpdateRecommendationStatusItem$,
  UpdateRecommendationStatusRequestEntry$,
  UpdateResiliencyPolicy$,
  UpdateResiliencyPolicyCommand,
  UpdateResiliencyPolicyRequest$,
  UpdateResiliencyPolicyResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ResiliencehubClient === "function");
assert(typeof Resiliencehub === "function");
// commands
assert(typeof AcceptResourceGroupingRecommendationsCommand === "function");
assert(typeof AcceptResourceGroupingRecommendations$ === "object");
assert(typeof AddDraftAppVersionResourceMappingsCommand === "function");
assert(typeof AddDraftAppVersionResourceMappings$ === "object");
assert(typeof BatchUpdateRecommendationStatusCommand === "function");
assert(typeof BatchUpdateRecommendationStatus$ === "object");
assert(typeof CreateAppCommand === "function");
assert(typeof CreateApp$ === "object");
assert(typeof CreateAppVersionAppComponentCommand === "function");
assert(typeof CreateAppVersionAppComponent$ === "object");
assert(typeof CreateAppVersionResourceCommand === "function");
assert(typeof CreateAppVersionResource$ === "object");
assert(typeof CreateRecommendationTemplateCommand === "function");
assert(typeof CreateRecommendationTemplate$ === "object");
assert(typeof CreateResiliencyPolicyCommand === "function");
assert(typeof CreateResiliencyPolicy$ === "object");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteApp$ === "object");
assert(typeof DeleteAppAssessmentCommand === "function");
assert(typeof DeleteAppAssessment$ === "object");
assert(typeof DeleteAppInputSourceCommand === "function");
assert(typeof DeleteAppInputSource$ === "object");
assert(typeof DeleteAppVersionAppComponentCommand === "function");
assert(typeof DeleteAppVersionAppComponent$ === "object");
assert(typeof DeleteAppVersionResourceCommand === "function");
assert(typeof DeleteAppVersionResource$ === "object");
assert(typeof DeleteRecommendationTemplateCommand === "function");
assert(typeof DeleteRecommendationTemplate$ === "object");
assert(typeof DeleteResiliencyPolicyCommand === "function");
assert(typeof DeleteResiliencyPolicy$ === "object");
assert(typeof DescribeAppCommand === "function");
assert(typeof DescribeApp$ === "object");
assert(typeof DescribeAppAssessmentCommand === "function");
assert(typeof DescribeAppAssessment$ === "object");
assert(typeof DescribeAppVersionCommand === "function");
assert(typeof DescribeAppVersion$ === "object");
assert(typeof DescribeAppVersionAppComponentCommand === "function");
assert(typeof DescribeAppVersionAppComponent$ === "object");
assert(typeof DescribeAppVersionResourceCommand === "function");
assert(typeof DescribeAppVersionResource$ === "object");
assert(typeof DescribeAppVersionResourcesResolutionStatusCommand === "function");
assert(typeof DescribeAppVersionResourcesResolutionStatus$ === "object");
assert(typeof DescribeAppVersionTemplateCommand === "function");
assert(typeof DescribeAppVersionTemplate$ === "object");
assert(typeof DescribeDraftAppVersionResourcesImportStatusCommand === "function");
assert(typeof DescribeDraftAppVersionResourcesImportStatus$ === "object");
assert(typeof DescribeMetricsExportCommand === "function");
assert(typeof DescribeMetricsExport$ === "object");
assert(typeof DescribeResiliencyPolicyCommand === "function");
assert(typeof DescribeResiliencyPolicy$ === "object");
assert(typeof DescribeResourceGroupingRecommendationTaskCommand === "function");
assert(typeof DescribeResourceGroupingRecommendationTask$ === "object");
assert(typeof ImportResourcesToDraftAppVersionCommand === "function");
assert(typeof ImportResourcesToDraftAppVersion$ === "object");
assert(typeof ListAlarmRecommendationsCommand === "function");
assert(typeof ListAlarmRecommendations$ === "object");
assert(typeof ListAppAssessmentComplianceDriftsCommand === "function");
assert(typeof ListAppAssessmentComplianceDrifts$ === "object");
assert(typeof ListAppAssessmentResourceDriftsCommand === "function");
assert(typeof ListAppAssessmentResourceDrifts$ === "object");
assert(typeof ListAppAssessmentsCommand === "function");
assert(typeof ListAppAssessments$ === "object");
assert(typeof ListAppComponentCompliancesCommand === "function");
assert(typeof ListAppComponentCompliances$ === "object");
assert(typeof ListAppComponentRecommendationsCommand === "function");
assert(typeof ListAppComponentRecommendations$ === "object");
assert(typeof ListAppInputSourcesCommand === "function");
assert(typeof ListAppInputSources$ === "object");
assert(typeof ListAppsCommand === "function");
assert(typeof ListApps$ === "object");
assert(typeof ListAppVersionAppComponentsCommand === "function");
assert(typeof ListAppVersionAppComponents$ === "object");
assert(typeof ListAppVersionResourceMappingsCommand === "function");
assert(typeof ListAppVersionResourceMappings$ === "object");
assert(typeof ListAppVersionResourcesCommand === "function");
assert(typeof ListAppVersionResources$ === "object");
assert(typeof ListAppVersionsCommand === "function");
assert(typeof ListAppVersions$ === "object");
assert(typeof ListMetricsCommand === "function");
assert(typeof ListMetrics$ === "object");
assert(typeof ListRecommendationTemplatesCommand === "function");
assert(typeof ListRecommendationTemplates$ === "object");
assert(typeof ListResiliencyPoliciesCommand === "function");
assert(typeof ListResiliencyPolicies$ === "object");
assert(typeof ListResourceGroupingRecommendationsCommand === "function");
assert(typeof ListResourceGroupingRecommendations$ === "object");
assert(typeof ListSopRecommendationsCommand === "function");
assert(typeof ListSopRecommendations$ === "object");
assert(typeof ListSuggestedResiliencyPoliciesCommand === "function");
assert(typeof ListSuggestedResiliencyPolicies$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTestRecommendationsCommand === "function");
assert(typeof ListTestRecommendations$ === "object");
assert(typeof ListUnsupportedAppVersionResourcesCommand === "function");
assert(typeof ListUnsupportedAppVersionResources$ === "object");
assert(typeof PublishAppVersionCommand === "function");
assert(typeof PublishAppVersion$ === "object");
assert(typeof PutDraftAppVersionTemplateCommand === "function");
assert(typeof PutDraftAppVersionTemplate$ === "object");
assert(typeof RejectResourceGroupingRecommendationsCommand === "function");
assert(typeof RejectResourceGroupingRecommendations$ === "object");
assert(typeof RemoveDraftAppVersionResourceMappingsCommand === "function");
assert(typeof RemoveDraftAppVersionResourceMappings$ === "object");
assert(typeof ResolveAppVersionResourcesCommand === "function");
assert(typeof ResolveAppVersionResources$ === "object");
assert(typeof StartAppAssessmentCommand === "function");
assert(typeof StartAppAssessment$ === "object");
assert(typeof StartMetricsExportCommand === "function");
assert(typeof StartMetricsExport$ === "object");
assert(typeof StartResourceGroupingRecommendationTaskCommand === "function");
assert(typeof StartResourceGroupingRecommendationTask$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppCommand === "function");
assert(typeof UpdateApp$ === "object");
assert(typeof UpdateAppVersionCommand === "function");
assert(typeof UpdateAppVersion$ === "object");
assert(typeof UpdateAppVersionAppComponentCommand === "function");
assert(typeof UpdateAppVersionAppComponent$ === "object");
assert(typeof UpdateAppVersionResourceCommand === "function");
assert(typeof UpdateAppVersionResource$ === "object");
assert(typeof UpdateResiliencyPolicyCommand === "function");
assert(typeof UpdateResiliencyPolicy$ === "object");
// structural schemas
assert(typeof AcceptGroupingRecommendationEntry$ === "object");
assert(typeof AcceptResourceGroupingRecommendationsRequest$ === "object");
assert(typeof AcceptResourceGroupingRecommendationsResponse$ === "object");
assert(typeof AddDraftAppVersionResourceMappingsRequest$ === "object");
assert(typeof AddDraftAppVersionResourceMappingsResponse$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmRecommendation$ === "object");
assert(typeof App$ === "object");
assert(typeof AppAssessment$ === "object");
assert(typeof AppAssessmentSummary$ === "object");
assert(typeof AppComponent$ === "object");
assert(typeof AppComponentCompliance$ === "object");
assert(typeof AppInputSource$ === "object");
assert(typeof AppSummary$ === "object");
assert(typeof AppVersionSummary$ === "object");
assert(typeof AssessmentRiskRecommendation$ === "object");
assert(typeof AssessmentSummary$ === "object");
assert(typeof BatchUpdateRecommendationStatusFailedEntry$ === "object");
assert(typeof BatchUpdateRecommendationStatusRequest$ === "object");
assert(typeof BatchUpdateRecommendationStatusResponse$ === "object");
assert(typeof BatchUpdateRecommendationStatusSuccessfulEntry$ === "object");
assert(typeof ComplianceDrift$ === "object");
assert(typeof ComponentRecommendation$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConfigRecommendation$ === "object");
assert(typeof Cost$ === "object");
assert(typeof CreateAppRequest$ === "object");
assert(typeof CreateAppResponse$ === "object");
assert(typeof CreateAppVersionAppComponentRequest$ === "object");
assert(typeof CreateAppVersionAppComponentResponse$ === "object");
assert(typeof CreateAppVersionResourceRequest$ === "object");
assert(typeof CreateAppVersionResourceResponse$ === "object");
assert(typeof CreateRecommendationTemplateRequest$ === "object");
assert(typeof CreateRecommendationTemplateResponse$ === "object");
assert(typeof CreateResiliencyPolicyRequest$ === "object");
assert(typeof CreateResiliencyPolicyResponse$ === "object");
assert(typeof DeleteAppAssessmentRequest$ === "object");
assert(typeof DeleteAppAssessmentResponse$ === "object");
assert(typeof DeleteAppInputSourceRequest$ === "object");
assert(typeof DeleteAppInputSourceResponse$ === "object");
assert(typeof DeleteAppRequest$ === "object");
assert(typeof DeleteAppResponse$ === "object");
assert(typeof DeleteAppVersionAppComponentRequest$ === "object");
assert(typeof DeleteAppVersionAppComponentResponse$ === "object");
assert(typeof DeleteAppVersionResourceRequest$ === "object");
assert(typeof DeleteAppVersionResourceResponse$ === "object");
assert(typeof DeleteRecommendationTemplateRequest$ === "object");
assert(typeof DeleteRecommendationTemplateResponse$ === "object");
assert(typeof DeleteResiliencyPolicyRequest$ === "object");
assert(typeof DeleteResiliencyPolicyResponse$ === "object");
assert(typeof DescribeAppAssessmentRequest$ === "object");
assert(typeof DescribeAppAssessmentResponse$ === "object");
assert(typeof DescribeAppRequest$ === "object");
assert(typeof DescribeAppResponse$ === "object");
assert(typeof DescribeAppVersionAppComponentRequest$ === "object");
assert(typeof DescribeAppVersionAppComponentResponse$ === "object");
assert(typeof DescribeAppVersionRequest$ === "object");
assert(typeof DescribeAppVersionResourceRequest$ === "object");
assert(typeof DescribeAppVersionResourceResponse$ === "object");
assert(typeof DescribeAppVersionResourcesResolutionStatusRequest$ === "object");
assert(typeof DescribeAppVersionResourcesResolutionStatusResponse$ === "object");
assert(typeof DescribeAppVersionResponse$ === "object");
assert(typeof DescribeAppVersionTemplateRequest$ === "object");
assert(typeof DescribeAppVersionTemplateResponse$ === "object");
assert(typeof DescribeDraftAppVersionResourcesImportStatusRequest$ === "object");
assert(typeof DescribeDraftAppVersionResourcesImportStatusResponse$ === "object");
assert(typeof DescribeMetricsExportRequest$ === "object");
assert(typeof DescribeMetricsExportResponse$ === "object");
assert(typeof DescribeResiliencyPolicyRequest$ === "object");
assert(typeof DescribeResiliencyPolicyResponse$ === "object");
assert(typeof DescribeResourceGroupingRecommendationTaskRequest$ === "object");
assert(typeof DescribeResourceGroupingRecommendationTaskResponse$ === "object");
assert(typeof DisruptionCompliance$ === "object");
assert(typeof EksSource$ === "object");
assert(typeof EksSourceClusterNamespace$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof Experiment$ === "object");
assert(typeof FailedGroupingRecommendationEntry$ === "object");
assert(typeof FailurePolicy$ === "object");
assert(typeof Field$ === "object");
assert(typeof GroupingAppComponent$ === "object");
assert(typeof GroupingRecommendation$ === "object");
assert(typeof GroupingResource$ === "object");
assert(typeof ImportResourcesToDraftAppVersionRequest$ === "object");
assert(typeof ImportResourcesToDraftAppVersionResponse$ === "object");
assert(typeof ListAlarmRecommendationsRequest$ === "object");
assert(typeof ListAlarmRecommendationsResponse$ === "object");
assert(typeof ListAppAssessmentComplianceDriftsRequest$ === "object");
assert(typeof ListAppAssessmentComplianceDriftsResponse$ === "object");
assert(typeof ListAppAssessmentResourceDriftsRequest$ === "object");
assert(typeof ListAppAssessmentResourceDriftsResponse$ === "object");
assert(typeof ListAppAssessmentsRequest$ === "object");
assert(typeof ListAppAssessmentsResponse$ === "object");
assert(typeof ListAppComponentCompliancesRequest$ === "object");
assert(typeof ListAppComponentCompliancesResponse$ === "object");
assert(typeof ListAppComponentRecommendationsRequest$ === "object");
assert(typeof ListAppComponentRecommendationsResponse$ === "object");
assert(typeof ListAppInputSourcesRequest$ === "object");
assert(typeof ListAppInputSourcesResponse$ === "object");
assert(typeof ListAppsRequest$ === "object");
assert(typeof ListAppsResponse$ === "object");
assert(typeof ListAppVersionAppComponentsRequest$ === "object");
assert(typeof ListAppVersionAppComponentsResponse$ === "object");
assert(typeof ListAppVersionResourceMappingsRequest$ === "object");
assert(typeof ListAppVersionResourceMappingsResponse$ === "object");
assert(typeof ListAppVersionResourcesRequest$ === "object");
assert(typeof ListAppVersionResourcesResponse$ === "object");
assert(typeof ListAppVersionsRequest$ === "object");
assert(typeof ListAppVersionsResponse$ === "object");
assert(typeof ListMetricsRequest$ === "object");
assert(typeof ListMetricsResponse$ === "object");
assert(typeof ListRecommendationTemplatesRequest$ === "object");
assert(typeof ListRecommendationTemplatesResponse$ === "object");
assert(typeof ListResiliencyPoliciesRequest$ === "object");
assert(typeof ListResiliencyPoliciesResponse$ === "object");
assert(typeof ListResourceGroupingRecommendationsRequest$ === "object");
assert(typeof ListResourceGroupingRecommendationsResponse$ === "object");
assert(typeof ListSopRecommendationsRequest$ === "object");
assert(typeof ListSopRecommendationsResponse$ === "object");
assert(typeof ListSuggestedResiliencyPoliciesRequest$ === "object");
assert(typeof ListSuggestedResiliencyPoliciesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTestRecommendationsRequest$ === "object");
assert(typeof ListTestRecommendationsResponse$ === "object");
assert(typeof ListUnsupportedAppVersionResourcesRequest$ === "object");
assert(typeof ListUnsupportedAppVersionResourcesResponse$ === "object");
assert(typeof LogicalResourceId$ === "object");
assert(typeof PermissionModel$ === "object");
assert(typeof PhysicalResource$ === "object");
assert(typeof PhysicalResourceId$ === "object");
assert(typeof PublishAppVersionRequest$ === "object");
assert(typeof PublishAppVersionResponse$ === "object");
assert(typeof PutDraftAppVersionTemplateRequest$ === "object");
assert(typeof PutDraftAppVersionTemplateResponse$ === "object");
assert(typeof RecommendationDisruptionCompliance$ === "object");
assert(typeof RecommendationItem$ === "object");
assert(typeof RecommendationTemplate$ === "object");
assert(typeof RejectGroupingRecommendationEntry$ === "object");
assert(typeof RejectResourceGroupingRecommendationsRequest$ === "object");
assert(typeof RejectResourceGroupingRecommendationsResponse$ === "object");
assert(typeof RemoveDraftAppVersionResourceMappingsRequest$ === "object");
assert(typeof RemoveDraftAppVersionResourceMappingsResponse$ === "object");
assert(typeof ResiliencyPolicy$ === "object");
assert(typeof ResiliencyScore$ === "object");
assert(typeof ResolveAppVersionResourcesRequest$ === "object");
assert(typeof ResolveAppVersionResourcesResponse$ === "object");
assert(typeof ResourceDrift$ === "object");
assert(typeof ResourceError$ === "object");
assert(typeof ResourceErrorsDetails$ === "object");
assert(typeof ResourceIdentifier$ === "object");
assert(typeof ResourceMapping$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof ScoringComponentResiliencyScore$ === "object");
assert(typeof SopRecommendation$ === "object");
assert(typeof Sort$ === "object");
assert(typeof StartAppAssessmentRequest$ === "object");
assert(typeof StartAppAssessmentResponse$ === "object");
assert(typeof StartMetricsExportRequest$ === "object");
assert(typeof StartMetricsExportResponse$ === "object");
assert(typeof StartResourceGroupingRecommendationTaskRequest$ === "object");
assert(typeof StartResourceGroupingRecommendationTaskResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TerraformSource$ === "object");
assert(typeof TestRecommendation$ === "object");
assert(typeof UnsupportedResource$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAppRequest$ === "object");
assert(typeof UpdateAppResponse$ === "object");
assert(typeof UpdateAppVersionAppComponentRequest$ === "object");
assert(typeof UpdateAppVersionAppComponentResponse$ === "object");
assert(typeof UpdateAppVersionRequest$ === "object");
assert(typeof UpdateAppVersionResourceRequest$ === "object");
assert(typeof UpdateAppVersionResourceResponse$ === "object");
assert(typeof UpdateAppVersionResponse$ === "object");
assert(typeof UpdateRecommendationStatusItem$ === "object");
assert(typeof UpdateRecommendationStatusRequestEntry$ === "object");
assert(typeof UpdateResiliencyPolicyRequest$ === "object");
assert(typeof UpdateResiliencyPolicyResponse$ === "object");
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
assert(AccessDeniedException.prototype instanceof ResiliencehubServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ResiliencehubServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ResiliencehubServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ResiliencehubServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ResiliencehubServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ResiliencehubServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ResiliencehubServiceException);
assert(typeof ValidationException$ === "object");
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
