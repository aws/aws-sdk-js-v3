import {
  AccessDeniedException,
  AccessDeniedException$,
  Achievability$,
  AchievabilityStatus,
  ActorType,
  Assertion$,
  AssertionCreatedMetadata$,
  AssertionDeletedMetadata$,
  AssertionSource,
  AssertionUpdatedMetadata$,
  AssessmentCost$,
  AssessmentErrorCode,
  AssessmentSortField,
  AssessmentStatus,
  AssessmentStep,
  AssessmentSummary$,
  AssociatedSystem$,
  AvailabilitySlo$,
  ConflictException,
  ConflictException$,
  CostCurrency,
  CreateAssertion$,
  CreateAssertionCommand,
  CreateAssertionRequest$,
  CreateAssertionResponse$,
  CreateInputSource$,
  CreateInputSourceCommand,
  CreateInputSourceRequest$,
  CreateInputSourceResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  CreateReport$,
  CreateReportCommand,
  CreateReportRequest$,
  CreateReportResponse$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceFunction$,
  CreateServiceFunctionCommand,
  CreateServiceFunctionRequest$,
  CreateServiceFunctionResources$,
  CreateServiceFunctionResourcesCommand,
  CreateServiceFunctionResourcesRequest$,
  CreateServiceFunctionResourcesResponse$,
  CreateServiceFunctionResponse$,
  CreateServiceRequest$,
  CreateServiceResponse$,
  CreateSystem$,
  CreateSystemCommand,
  CreateSystemRequest$,
  CreateSystemResponse$,
  CreateUserJourney$,
  CreateUserJourneyCommand,
  CreateUserJourneyRequest$,
  CreateUserJourneyResponse$,
  CrossAccountRole$,
  DataRecoveryTargets$,
  DeleteAssertion$,
  DeleteAssertionCommand,
  DeleteAssertionRequest$,
  DeleteAssertionResponse$,
  DeleteInputSource$,
  DeleteInputSourceCommand,
  DeleteInputSourceRequest$,
  DeleteInputSourceResponse$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DeletePolicyResponse$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceFunction$,
  DeleteServiceFunctionCommand,
  DeleteServiceFunctionRequest$,
  DeleteServiceFunctionResources$,
  DeleteServiceFunctionResourcesCommand,
  DeleteServiceFunctionResourcesRequest$,
  DeleteServiceFunctionResourcesResponse$,
  DeleteServiceFunctionResponse$,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  DeleteSystem$,
  DeleteSystemCommand,
  DeleteSystemRequest$,
  DeleteSystemResponse$,
  DeleteUserJourney$,
  DeleteUserJourneyCommand,
  DeleteUserJourneyRequest$,
  DeleteUserJourneyResponse$,
  DependencyCriticality,
  DependencyDiscoveryConfig$,
  DependencyDiscoveryInput,
  DependencyDiscoveryStatus,
  DependencySummary$,
  DisasterRecoverySource$,
  EdgePropertySummary$,
  EffectivePolicyValues$,
  EksSource$,
  EventActor$,
  FailedReportOutput$,
  FailureCategory,
  Finding$,
  FindingSeverity,
  FindingStatus,
  FindingSummary$,
  GetFailureModeFinding$,
  GetFailureModeFindingCommand,
  GetFailureModeFindingRequest$,
  GetFailureModeFindingResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetService$,
  GetServiceCommand,
  GetServiceRequest$,
  GetServiceResponse$,
  GetSystem$,
  GetSystemCommand,
  GetSystemRequest$,
  GetSystemResponse$,
  GetUserJourney$,
  GetUserJourneyCommand,
  GetUserJourneyRequest$,
  GetUserJourneyResponse$,
  ImportApp$,
  ImportAppCommand,
  ImportAppRequest$,
  ImportAppResponse$,
  ImportPolicy$,
  ImportPolicyCommand,
  ImportPolicyRequest$,
  ImportPolicyResponse$,
  InfrastructureAndCodeRecommendation$,
  InputSource$,
  InputSourceSummary$,
  InputSourceType,
  InternalServerException,
  InternalServerException$,
  ListAssertions$,
  ListAssertionsCommand,
  ListAssertionsRequest$,
  ListAssertionsResponse$,
  ListDependencies$,
  ListDependenciesCommand,
  ListDependenciesRequest$,
  ListDependenciesResponse$,
  ListFailureModeAssessments$,
  ListFailureModeAssessmentsCommand,
  ListFailureModeAssessmentsRequest$,
  ListFailureModeAssessmentsResponse$,
  ListFailureModeFindings$,
  ListFailureModeFindingsCommand,
  ListFailureModeFindingsRequest$,
  ListFailureModeFindingsResponse$,
  ListInputSources$,
  ListInputSourcesCommand,
  ListInputSourcesRequest$,
  ListInputSourcesResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListReports$,
  ListReportsCommand,
  ListReportsRequest$,
  ListReportsResponse$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesRequest$,
  ListResourcesResponse$,
  ListServiceEvents$,
  ListServiceEventsCommand,
  ListServiceEventsRequest$,
  ListServiceEventsResponse$,
  ListServiceFunctions$,
  ListServiceFunctionsCommand,
  ListServiceFunctionsRequest$,
  ListServiceFunctionsResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListServiceTopologyEdges$,
  ListServiceTopologyEdgesCommand,
  ListServiceTopologyEdgesRequest$,
  ListServiceTopologyEdgesResponse$,
  ListSystemEvents$,
  ListSystemEventsCommand,
  ListSystemEventsRequest$,
  ListSystemEventsResponse$,
  ListSystems$,
  ListSystemsCommand,
  ListSystemsRequest$,
  ListSystemsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUserJourneys$,
  ListUserJourneysCommand,
  ListUserJourneysRequest$,
  ListUserJourneysResponse$,
  MultiAzDisasterRecoveryApproach,
  MultiAzTargets$,
  MultiRegionDisasterRecoveryApproach,
  MultiRegionTargets$,
  ObservabilityRecommendation$,
  paginateListAssertions,
  paginateListDependencies,
  paginateListFailureModeAssessments,
  paginateListFailureModeFindings,
  paginateListInputSources,
  paginateListPolicies,
  paginateListReports,
  paginateListResources,
  paginateListServiceEvents,
  paginateListServiceFunctions,
  paginateListServices,
  paginateListServiceTopologyEdges,
  paginateListSystemEvents,
  paginateListSystems,
  paginateListUserJourneys,
  PermissionModel$,
  Policy$,
  PolicyComponent,
  PolicySummary$,
  PolicyValueSource,
  QueryDataPoint$,
  QueryGranularity,
  QueryRange$,
  ReportGenerationErrorCode,
  ReportGenerationResult$,
  ReportGenerationStatus,
  ReportOutput$,
  ReportOutputConfiguration$,
  ReportType,
  Resiliencehubv2,
  Resiliencehubv2Client,
  Resiliencehubv2ServiceException,
  Resource$,
  ResourceConfiguration$,
  ResourceDiscoveryErrorCode,
  ResourceDiscoveryRunStatus,
  ResourceDiscoveryStatus$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  S3ReportOutput$,
  S3ReportOutputConfiguration$,
  Service$,
  ServiceAchievabilityUpdatedMetadata$,
  ServiceCreatedMetadata$,
  ServiceDeletedMetadata$,
  ServiceEvent$,
  ServiceEventDetails$,
  ServiceEventMetadata$,
  ServiceEventType,
  ServiceFunction$,
  ServiceFunctionCreatedMetadata$,
  ServiceFunctionCriticality,
  ServiceFunctionDeletedMetadata$,
  ServiceFunctionResourcesAddedMetadata$,
  ServiceFunctionResourcesRemovedMetadata$,
  ServiceFunctionSource,
  ServiceFunctionUpdatedMetadata$,
  ServiceInputSourcesUpdatedMetadata$,
  ServicePolicyAssociatedMetadata$,
  ServicePolicyDisassociatedMetadata$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceReference$,
  ServiceReferenceChanges$,
  ServiceReportConfiguration$,
  ServiceResource$,
  ServiceResourcesAssociatedMetadata$,
  ServiceResourcesDisassociatedMetadata$,
  ServiceSummary$,
  ServiceSystemAssociatedMetadata$,
  ServiceSystemDisassociatedMetadata$,
  ServiceTopologyEdgeSummary$,
  ServiceWorkflowUpdatedMetadata$,
  SloSource$,
  SortOrder,
  StartFailureModeAssessment$,
  StartFailureModeAssessmentCommand,
  StartFailureModeAssessmentRequest$,
  StartFailureModeAssessmentResponse$,
  StringChange$,
  System$,
  SystemCreatedMetadata$,
  SystemDeletedMetadata$,
  SystemEvent$,
  SystemEventDetails$,
  SystemEventMetadata$,
  SystemEventType,
  SystemPolicyAssociatedMetadata$,
  SystemPolicyDisassociatedMetadata$,
  SystemServiceAssociatedMetadata$,
  SystemServiceDisassociatedMetadata$,
  SystemSummary$,
  SystemUserJourneyCreatedMetadata$,
  SystemUserJourneyDeletedMetadata$,
  SystemUserJourneyUpdatedMetadata$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetSource$,
  TestingRecommendation$,
  ThrottlingException,
  ThrottlingException$,
  TopologyType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAssertion$,
  UpdateAssertionCommand,
  UpdateAssertionRequest$,
  UpdateAssertionResponse$,
  UpdateDependency$,
  UpdateDependencyCommand,
  UpdateDependencyRequest$,
  UpdateDependencyResponse$,
  UpdateFailureModeFinding$,
  UpdateFailureModeFindingCommand,
  UpdateFailureModeFindingRequest$,
  UpdateFailureModeFindingResponse$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyRequest$,
  UpdatePolicyResponse$,
  UpdateService$,
  UpdateServiceCommand,
  UpdateServiceFunction$,
  UpdateServiceFunctionCommand,
  UpdateServiceFunctionRequest$,
  UpdateServiceFunctionResponse$,
  UpdateServiceRequest$,
  UpdateServiceResponse$,
  UpdateSystem$,
  UpdateSystemCommand,
  UpdateSystemRequest$,
  UpdateSystemResponse$,
  UpdateUserJourney$,
  UpdateUserJourneyCommand,
  UpdateUserJourneyRequest$,
  UpdateUserJourneyResponse$,
  UserJourney$,
  UserJourneyChanges$,
  UserJourneySummary$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  waitForFailureModeAssessmentSuccess,
  waitForReportSucceeded,
  waitForServiceAssessmentCompleted,
  waitForServiceResourceDiscoveryCompleted,
  waitUntilFailureModeAssessmentSuccess,
  waitUntilReportSucceeded,
  waitUntilServiceAssessmentCompleted,
  waitUntilServiceResourceDiscoveryCompleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Resiliencehubv2Client === "function");
assert(typeof Resiliencehubv2 === "function");
// commands
assert(typeof CreateAssertionCommand === "function");
assert(typeof CreateAssertion$ === "object");
assert(typeof CreateInputSourceCommand === "function");
assert(typeof CreateInputSource$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreateReportCommand === "function");
assert(typeof CreateReport$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof CreateServiceFunctionCommand === "function");
assert(typeof CreateServiceFunction$ === "object");
assert(typeof CreateServiceFunctionResourcesCommand === "function");
assert(typeof CreateServiceFunctionResources$ === "object");
assert(typeof CreateSystemCommand === "function");
assert(typeof CreateSystem$ === "object");
assert(typeof CreateUserJourneyCommand === "function");
assert(typeof CreateUserJourney$ === "object");
assert(typeof DeleteAssertionCommand === "function");
assert(typeof DeleteAssertion$ === "object");
assert(typeof DeleteInputSourceCommand === "function");
assert(typeof DeleteInputSource$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof DeleteServiceFunctionCommand === "function");
assert(typeof DeleteServiceFunction$ === "object");
assert(typeof DeleteServiceFunctionResourcesCommand === "function");
assert(typeof DeleteServiceFunctionResources$ === "object");
assert(typeof DeleteSystemCommand === "function");
assert(typeof DeleteSystem$ === "object");
assert(typeof DeleteUserJourneyCommand === "function");
assert(typeof DeleteUserJourney$ === "object");
assert(typeof GetFailureModeFindingCommand === "function");
assert(typeof GetFailureModeFinding$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetSystemCommand === "function");
assert(typeof GetSystem$ === "object");
assert(typeof GetUserJourneyCommand === "function");
assert(typeof GetUserJourney$ === "object");
assert(typeof ImportAppCommand === "function");
assert(typeof ImportApp$ === "object");
assert(typeof ImportPolicyCommand === "function");
assert(typeof ImportPolicy$ === "object");
assert(typeof ListAssertionsCommand === "function");
assert(typeof ListAssertions$ === "object");
assert(typeof ListDependenciesCommand === "function");
assert(typeof ListDependencies$ === "object");
assert(typeof ListFailureModeAssessmentsCommand === "function");
assert(typeof ListFailureModeAssessments$ === "object");
assert(typeof ListFailureModeFindingsCommand === "function");
assert(typeof ListFailureModeFindings$ === "object");
assert(typeof ListInputSourcesCommand === "function");
assert(typeof ListInputSources$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListReportsCommand === "function");
assert(typeof ListReports$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof ListServiceEventsCommand === "function");
assert(typeof ListServiceEvents$ === "object");
assert(typeof ListServiceFunctionsCommand === "function");
assert(typeof ListServiceFunctions$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListServiceTopologyEdgesCommand === "function");
assert(typeof ListServiceTopologyEdges$ === "object");
assert(typeof ListSystemEventsCommand === "function");
assert(typeof ListSystemEvents$ === "object");
assert(typeof ListSystemsCommand === "function");
assert(typeof ListSystems$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUserJourneysCommand === "function");
assert(typeof ListUserJourneys$ === "object");
assert(typeof StartFailureModeAssessmentCommand === "function");
assert(typeof StartFailureModeAssessment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAssertionCommand === "function");
assert(typeof UpdateAssertion$ === "object");
assert(typeof UpdateDependencyCommand === "function");
assert(typeof UpdateDependency$ === "object");
assert(typeof UpdateFailureModeFindingCommand === "function");
assert(typeof UpdateFailureModeFinding$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdateServiceCommand === "function");
assert(typeof UpdateService$ === "object");
assert(typeof UpdateServiceFunctionCommand === "function");
assert(typeof UpdateServiceFunction$ === "object");
assert(typeof UpdateSystemCommand === "function");
assert(typeof UpdateSystem$ === "object");
assert(typeof UpdateUserJourneyCommand === "function");
assert(typeof UpdateUserJourney$ === "object");
// structural schemas
assert(typeof Achievability$ === "object");
assert(typeof Assertion$ === "object");
assert(typeof AssertionCreatedMetadata$ === "object");
assert(typeof AssertionDeletedMetadata$ === "object");
assert(typeof AssertionUpdatedMetadata$ === "object");
assert(typeof AssessmentCost$ === "object");
assert(typeof AssessmentSummary$ === "object");
assert(typeof AssociatedSystem$ === "object");
assert(typeof AvailabilitySlo$ === "object");
assert(typeof CreateAssertionRequest$ === "object");
assert(typeof CreateAssertionResponse$ === "object");
assert(typeof CreateInputSourceRequest$ === "object");
assert(typeof CreateInputSourceResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof CreateReportRequest$ === "object");
assert(typeof CreateReportResponse$ === "object");
assert(typeof CreateServiceFunctionRequest$ === "object");
assert(typeof CreateServiceFunctionResourcesRequest$ === "object");
assert(typeof CreateServiceFunctionResourcesResponse$ === "object");
assert(typeof CreateServiceFunctionResponse$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof CreateSystemRequest$ === "object");
assert(typeof CreateSystemResponse$ === "object");
assert(typeof CreateUserJourneyRequest$ === "object");
assert(typeof CreateUserJourneyResponse$ === "object");
assert(typeof CrossAccountRole$ === "object");
assert(typeof DataRecoveryTargets$ === "object");
assert(typeof DeleteAssertionRequest$ === "object");
assert(typeof DeleteAssertionResponse$ === "object");
assert(typeof DeleteInputSourceRequest$ === "object");
assert(typeof DeleteInputSourceResponse$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeletePolicyResponse$ === "object");
assert(typeof DeleteServiceFunctionRequest$ === "object");
assert(typeof DeleteServiceFunctionResourcesRequest$ === "object");
assert(typeof DeleteServiceFunctionResourcesResponse$ === "object");
assert(typeof DeleteServiceFunctionResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof DeleteSystemRequest$ === "object");
assert(typeof DeleteSystemResponse$ === "object");
assert(typeof DeleteUserJourneyRequest$ === "object");
assert(typeof DeleteUserJourneyResponse$ === "object");
assert(typeof DependencyDiscoveryConfig$ === "object");
assert(typeof DependencySummary$ === "object");
assert(typeof DisasterRecoverySource$ === "object");
assert(typeof EdgePropertySummary$ === "object");
assert(typeof EffectivePolicyValues$ === "object");
assert(typeof EksSource$ === "object");
assert(typeof EventActor$ === "object");
assert(typeof FailedReportOutput$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof GetFailureModeFindingRequest$ === "object");
assert(typeof GetFailureModeFindingResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetServiceRequest$ === "object");
assert(typeof GetServiceResponse$ === "object");
assert(typeof GetSystemRequest$ === "object");
assert(typeof GetSystemResponse$ === "object");
assert(typeof GetUserJourneyRequest$ === "object");
assert(typeof GetUserJourneyResponse$ === "object");
assert(typeof ImportAppRequest$ === "object");
assert(typeof ImportAppResponse$ === "object");
assert(typeof ImportPolicyRequest$ === "object");
assert(typeof ImportPolicyResponse$ === "object");
assert(typeof InfrastructureAndCodeRecommendation$ === "object");
assert(typeof InputSource$ === "object");
assert(typeof InputSourceSummary$ === "object");
assert(typeof ListAssertionsRequest$ === "object");
assert(typeof ListAssertionsResponse$ === "object");
assert(typeof ListDependenciesRequest$ === "object");
assert(typeof ListDependenciesResponse$ === "object");
assert(typeof ListFailureModeAssessmentsRequest$ === "object");
assert(typeof ListFailureModeAssessmentsResponse$ === "object");
assert(typeof ListFailureModeFindingsRequest$ === "object");
assert(typeof ListFailureModeFindingsResponse$ === "object");
assert(typeof ListInputSourcesRequest$ === "object");
assert(typeof ListInputSourcesResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListReportsRequest$ === "object");
assert(typeof ListReportsResponse$ === "object");
assert(typeof ListResourcesRequest$ === "object");
assert(typeof ListResourcesResponse$ === "object");
assert(typeof ListServiceEventsRequest$ === "object");
assert(typeof ListServiceEventsResponse$ === "object");
assert(typeof ListServiceFunctionsRequest$ === "object");
assert(typeof ListServiceFunctionsResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListServiceTopologyEdgesRequest$ === "object");
assert(typeof ListServiceTopologyEdgesResponse$ === "object");
assert(typeof ListSystemEventsRequest$ === "object");
assert(typeof ListSystemEventsResponse$ === "object");
assert(typeof ListSystemsRequest$ === "object");
assert(typeof ListSystemsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUserJourneysRequest$ === "object");
assert(typeof ListUserJourneysResponse$ === "object");
assert(typeof MultiAzTargets$ === "object");
assert(typeof MultiRegionTargets$ === "object");
assert(typeof ObservabilityRecommendation$ === "object");
assert(typeof PermissionModel$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicySummary$ === "object");
assert(typeof QueryDataPoint$ === "object");
assert(typeof QueryRange$ === "object");
assert(typeof ReportGenerationResult$ === "object");
assert(typeof ReportOutput$ === "object");
assert(typeof ReportOutputConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceConfiguration$ === "object");
assert(typeof ResourceDiscoveryStatus$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof S3ReportOutput$ === "object");
assert(typeof S3ReportOutputConfiguration$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceAchievabilityUpdatedMetadata$ === "object");
assert(typeof ServiceCreatedMetadata$ === "object");
assert(typeof ServiceDeletedMetadata$ === "object");
assert(typeof ServiceEvent$ === "object");
assert(typeof ServiceEventDetails$ === "object");
assert(typeof ServiceEventMetadata$ === "object");
assert(typeof ServiceFunction$ === "object");
assert(typeof ServiceFunctionCreatedMetadata$ === "object");
assert(typeof ServiceFunctionDeletedMetadata$ === "object");
assert(typeof ServiceFunctionResourcesAddedMetadata$ === "object");
assert(typeof ServiceFunctionResourcesRemovedMetadata$ === "object");
assert(typeof ServiceFunctionUpdatedMetadata$ === "object");
assert(typeof ServiceInputSourcesUpdatedMetadata$ === "object");
assert(typeof ServicePolicyAssociatedMetadata$ === "object");
assert(typeof ServicePolicyDisassociatedMetadata$ === "object");
assert(typeof ServiceReference$ === "object");
assert(typeof ServiceReferenceChanges$ === "object");
assert(typeof ServiceReportConfiguration$ === "object");
assert(typeof ServiceResource$ === "object");
assert(typeof ServiceResourcesAssociatedMetadata$ === "object");
assert(typeof ServiceResourcesDisassociatedMetadata$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof ServiceSystemAssociatedMetadata$ === "object");
assert(typeof ServiceSystemDisassociatedMetadata$ === "object");
assert(typeof ServiceTopologyEdgeSummary$ === "object");
assert(typeof ServiceWorkflowUpdatedMetadata$ === "object");
assert(typeof SloSource$ === "object");
assert(typeof StartFailureModeAssessmentRequest$ === "object");
assert(typeof StartFailureModeAssessmentResponse$ === "object");
assert(typeof StringChange$ === "object");
assert(typeof System$ === "object");
assert(typeof SystemCreatedMetadata$ === "object");
assert(typeof SystemDeletedMetadata$ === "object");
assert(typeof SystemEvent$ === "object");
assert(typeof SystemEventDetails$ === "object");
assert(typeof SystemEventMetadata$ === "object");
assert(typeof SystemPolicyAssociatedMetadata$ === "object");
assert(typeof SystemPolicyDisassociatedMetadata$ === "object");
assert(typeof SystemServiceAssociatedMetadata$ === "object");
assert(typeof SystemServiceDisassociatedMetadata$ === "object");
assert(typeof SystemSummary$ === "object");
assert(typeof SystemUserJourneyCreatedMetadata$ === "object");
assert(typeof SystemUserJourneyDeletedMetadata$ === "object");
assert(typeof SystemUserJourneyUpdatedMetadata$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetSource$ === "object");
assert(typeof TestingRecommendation$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAssertionRequest$ === "object");
assert(typeof UpdateAssertionResponse$ === "object");
assert(typeof UpdateDependencyRequest$ === "object");
assert(typeof UpdateDependencyResponse$ === "object");
assert(typeof UpdateFailureModeFindingRequest$ === "object");
assert(typeof UpdateFailureModeFindingResponse$ === "object");
assert(typeof UpdatePolicyRequest$ === "object");
assert(typeof UpdatePolicyResponse$ === "object");
assert(typeof UpdateServiceFunctionRequest$ === "object");
assert(typeof UpdateServiceFunctionResponse$ === "object");
assert(typeof UpdateServiceRequest$ === "object");
assert(typeof UpdateServiceResponse$ === "object");
assert(typeof UpdateSystemRequest$ === "object");
assert(typeof UpdateSystemResponse$ === "object");
assert(typeof UpdateUserJourneyRequest$ === "object");
assert(typeof UpdateUserJourneyResponse$ === "object");
assert(typeof UserJourney$ === "object");
assert(typeof UserJourneyChanges$ === "object");
assert(typeof UserJourneySummary$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AchievabilityStatus === "object");
assert(typeof ActorType === "object");
assert(typeof AssertionSource === "object");
assert(typeof AssessmentErrorCode === "object");
assert(typeof AssessmentSortField === "object");
assert(typeof AssessmentStatus === "object");
assert(typeof AssessmentStep === "object");
assert(typeof CostCurrency === "object");
assert(typeof DependencyCriticality === "object");
assert(typeof DependencyDiscoveryInput === "object");
assert(typeof DependencyDiscoveryStatus === "object");
assert(typeof FailureCategory === "object");
assert(typeof FindingSeverity === "object");
assert(typeof FindingStatus === "object");
assert(typeof InputSourceType === "object");
assert(typeof MultiAzDisasterRecoveryApproach === "object");
assert(typeof MultiRegionDisasterRecoveryApproach === "object");
assert(typeof PolicyComponent === "object");
assert(typeof PolicyValueSource === "object");
assert(typeof QueryGranularity === "object");
assert(typeof ReportGenerationErrorCode === "object");
assert(typeof ReportGenerationStatus === "object");
assert(typeof ReportType === "object");
assert(typeof ResourceDiscoveryErrorCode === "object");
assert(typeof ResourceDiscoveryRunStatus === "object");
assert(typeof ServiceEventType === "object");
assert(typeof ServiceFunctionCriticality === "object");
assert(typeof ServiceFunctionSource === "object");
assert(typeof SortOrder === "object");
assert(typeof SystemEventType === "object");
assert(typeof TopologyType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Resiliencehubv2ServiceException);
assert(typeof ValidationException$ === "object");
assert(Resiliencehubv2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFailureModeAssessmentSuccess === "function");
assert(typeof waitForReportSucceeded === "function");
assert(typeof waitForServiceAssessmentCompleted === "function");
assert(typeof waitForServiceResourceDiscoveryCompleted === "function");
assert(typeof waitUntilFailureModeAssessmentSuccess === "function");
assert(typeof waitUntilReportSucceeded === "function");
assert(typeof waitUntilServiceAssessmentCompleted === "function");
assert(typeof waitUntilServiceResourceDiscoveryCompleted === "function");
// paginators
assert(typeof paginateListAssertions === "function");
assert(typeof paginateListDependencies === "function");
assert(typeof paginateListFailureModeAssessments === "function");
assert(typeof paginateListFailureModeFindings === "function");
assert(typeof paginateListInputSources === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListReports === "function");
assert(typeof paginateListResources === "function");
assert(typeof paginateListServiceEvents === "function");
assert(typeof paginateListServiceFunctions === "function");
assert(typeof paginateListServiceTopologyEdges === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListSystemEvents === "function");
assert(typeof paginateListSystems === "function");
assert(typeof paginateListUserJourneys === "function");
console.log(`Resiliencehubv2 index test passed.`);
