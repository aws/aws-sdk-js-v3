import {
  AcceleratorCapabilities$,
  AcceleratorCountRange$,
  AcceleratorName,
  AcceleratorSelection$,
  AcceleratorTotalMemoryMiBRange$,
  AcceleratorType,
  AccessDeniedException,
  AccessDeniedException$,
  AcquiredLimit$,
  AssignedEnvironmentEnterSessionActionDefinition$,
  AssignedEnvironmentExitSessionActionDefinition$,
  AssignedSession$,
  AssignedSessionAction$,
  AssignedSessionActionDefinition$,
  AssignedSyncInputJobAttachmentsSessionActionDefinition$,
  AssignedTaskRunSessionActionDefinition$,
  AssociateMemberToFarm$,
  AssociateMemberToFarmCommand,
  AssociateMemberToFarmRequest$,
  AssociateMemberToFarmResponse$,
  AssociateMemberToFleet$,
  AssociateMemberToFleetCommand,
  AssociateMemberToFleetRequest$,
  AssociateMemberToFleetResponse$,
  AssociateMemberToJob$,
  AssociateMemberToJobCommand,
  AssociateMemberToJobRequest$,
  AssociateMemberToJobResponse$,
  AssociateMemberToQueue$,
  AssociateMemberToQueueCommand,
  AssociateMemberToQueueRequest$,
  AssociateMemberToQueueResponse$,
  AssumeFleetRoleForRead$,
  AssumeFleetRoleForReadCommand,
  AssumeFleetRoleForReadRequest$,
  AssumeFleetRoleForReadResponse$,
  AssumeFleetRoleForWorker$,
  AssumeFleetRoleForWorkerCommand,
  AssumeFleetRoleForWorkerRequest$,
  AssumeFleetRoleForWorkerResponse$,
  AssumeQueueRoleForRead$,
  AssumeQueueRoleForReadCommand,
  AssumeQueueRoleForReadRequest$,
  AssumeQueueRoleForReadResponse$,
  AssumeQueueRoleForUser$,
  AssumeQueueRoleForUserCommand,
  AssumeQueueRoleForUserRequest$,
  AssumeQueueRoleForUserResponse$,
  AssumeQueueRoleForWorker$,
  AssumeQueueRoleForWorkerCommand,
  AssumeQueueRoleForWorkerRequest$,
  AssumeQueueRoleForWorkerResponse$,
  Attachments$,
  AutoScalingMode,
  AutoScalingStatus,
  AwsCredentials$,
  BatchGetJobEntity$,
  BatchGetJobEntityCommand,
  BatchGetJobEntityRequest$,
  BatchGetJobEntityResponse$,
  BudgetActionToAdd$,
  BudgetActionToRemove$,
  BudgetActionType,
  BudgetSchedule$,
  BudgetStatus,
  BudgetSummary$,
  ComparisonOperator,
  CompletedStatus,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  ConsumedUsages$,
  CopyJobTemplate$,
  CopyJobTemplateCommand,
  CopyJobTemplateRequest$,
  CopyJobTemplateResponse$,
  CpuArchitectureType,
  CreateBudget$,
  CreateBudgetCommand,
  CreateBudgetRequest$,
  CreateBudgetResponse$,
  CreateFarm$,
  CreateFarmCommand,
  CreateFarmRequest$,
  CreateFarmResponse$,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetRequest$,
  CreateFleetResponse$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResponse$,
  CreateJobTargetTaskRunStatus,
  CreateLicenseEndpoint$,
  CreateLicenseEndpointCommand,
  CreateLicenseEndpointRequest$,
  CreateLicenseEndpointResponse$,
  CreateLimit$,
  CreateLimitCommand,
  CreateLimitRequest$,
  CreateLimitResponse$,
  CreateMonitor$,
  CreateMonitorCommand,
  CreateMonitorRequest$,
  CreateMonitorResponse$,
  CreateQueue$,
  CreateQueueCommand,
  CreateQueueEnvironment$,
  CreateQueueEnvironmentCommand,
  CreateQueueEnvironmentRequest$,
  CreateQueueEnvironmentResponse$,
  CreateQueueFleetAssociation$,
  CreateQueueFleetAssociationCommand,
  CreateQueueFleetAssociationRequest$,
  CreateQueueFleetAssociationResponse$,
  CreateQueueLimitAssociation$,
  CreateQueueLimitAssociationCommand,
  CreateQueueLimitAssociationRequest$,
  CreateQueueLimitAssociationResponse$,
  CreateQueueRequest$,
  CreateQueueResponse$,
  CreateStorageProfile$,
  CreateStorageProfileCommand,
  CreateStorageProfileRequest$,
  CreateStorageProfileResponse$,
  CreateWorker$,
  CreateWorkerCommand,
  CreateWorkerRequest$,
  CreateWorkerResponse$,
  CustomerManagedFleetConfiguration$,
  CustomerManagedFleetOperatingSystemFamily,
  CustomerManagedWorkerCapabilities$,
  DateTimeFilterExpression$,
  Deadline,
  DeadlineClient,
  DeadlinePrincipalType,
  DeadlineServiceException,
  DefaultQueueBudgetAction,
  DeleteBudget$,
  DeleteBudgetCommand,
  DeleteBudgetRequest$,
  DeleteBudgetResponse$,
  DeleteFarm$,
  DeleteFarmCommand,
  DeleteFarmRequest$,
  DeleteFarmResponse$,
  DeleteFleet$,
  DeleteFleetCommand,
  DeleteFleetRequest$,
  DeleteFleetResponse$,
  DeleteLicenseEndpoint$,
  DeleteLicenseEndpointCommand,
  DeleteLicenseEndpointRequest$,
  DeleteLicenseEndpointResponse$,
  DeleteLimit$,
  DeleteLimitCommand,
  DeleteLimitRequest$,
  DeleteLimitResponse$,
  DeleteMeteredProduct$,
  DeleteMeteredProductCommand,
  DeleteMeteredProductRequest$,
  DeleteMeteredProductResponse$,
  DeleteMonitor$,
  DeleteMonitorCommand,
  DeleteMonitorRequest$,
  DeleteMonitorResponse$,
  DeleteQueue$,
  DeleteQueueCommand,
  DeleteQueueEnvironment$,
  DeleteQueueEnvironmentCommand,
  DeleteQueueEnvironmentRequest$,
  DeleteQueueEnvironmentResponse$,
  DeleteQueueFleetAssociation$,
  DeleteQueueFleetAssociationCommand,
  DeleteQueueFleetAssociationRequest$,
  DeleteQueueFleetAssociationResponse$,
  DeleteQueueLimitAssociation$,
  DeleteQueueLimitAssociationCommand,
  DeleteQueueLimitAssociationRequest$,
  DeleteQueueLimitAssociationResponse$,
  DeleteQueueRequest$,
  DeleteQueueResponse$,
  DeleteStorageProfile$,
  DeleteStorageProfileCommand,
  DeleteStorageProfileRequest$,
  DeleteStorageProfileResponse$,
  DeleteWorker$,
  DeleteWorkerCommand,
  DeleteWorkerRequest$,
  DeleteWorkerResponse$,
  DependencyConsumerResolutionStatus,
  DependencyCounts$,
  DesiredWorkerStatus,
  DisassociateMemberFromFarm$,
  DisassociateMemberFromFarmCommand,
  DisassociateMemberFromFarmRequest$,
  DisassociateMemberFromFarmResponse$,
  DisassociateMemberFromFleet$,
  DisassociateMemberFromFleetCommand,
  DisassociateMemberFromFleetRequest$,
  DisassociateMemberFromFleetResponse$,
  DisassociateMemberFromJob$,
  DisassociateMemberFromJobCommand,
  DisassociateMemberFromJobRequest$,
  DisassociateMemberFromJobResponse$,
  DisassociateMemberFromQueue$,
  DisassociateMemberFromQueueCommand,
  DisassociateMemberFromQueueRequest$,
  DisassociateMemberFromQueueResponse$,
  Ec2EbsVolume$,
  Ec2MarketType,
  EnvironmentDetailsEntity$,
  EnvironmentDetailsError$,
  EnvironmentDetailsIdentifiers$,
  EnvironmentEnterSessionActionDefinition$,
  EnvironmentEnterSessionActionDefinitionSummary$,
  EnvironmentExitSessionActionDefinition$,
  EnvironmentExitSessionActionDefinitionSummary$,
  EnvironmentTemplateType,
  FarmMember$,
  FarmSummary$,
  FieldSortExpression$,
  FileSystemLocation$,
  FileSystemLocationType,
  FixedBudgetSchedule$,
  FleetAmountCapability$,
  FleetAttributeCapability$,
  FleetCapabilities$,
  FleetConfiguration$,
  FleetMember$,
  FleetStatus,
  FleetSummary$,
  GetBudget$,
  GetBudgetCommand,
  GetBudgetRequest$,
  GetBudgetResponse$,
  GetFarm$,
  GetFarmCommand,
  GetFarmRequest$,
  GetFarmResponse$,
  GetFleet$,
  GetFleetCommand,
  GetFleetRequest$,
  GetFleetResponse$,
  GetJob$,
  GetJobCommand,
  GetJobEntityError$,
  GetJobRequest$,
  GetJobResponse$,
  GetLicenseEndpoint$,
  GetLicenseEndpointCommand,
  GetLicenseEndpointRequest$,
  GetLicenseEndpointResponse$,
  GetLimit$,
  GetLimitCommand,
  GetLimitRequest$,
  GetLimitResponse$,
  GetMonitor$,
  GetMonitorCommand,
  GetMonitorRequest$,
  GetMonitorResponse$,
  GetQueue$,
  GetQueueCommand,
  GetQueueEnvironment$,
  GetQueueEnvironmentCommand,
  GetQueueEnvironmentRequest$,
  GetQueueEnvironmentResponse$,
  GetQueueFleetAssociation$,
  GetQueueFleetAssociationCommand,
  GetQueueFleetAssociationRequest$,
  GetQueueFleetAssociationResponse$,
  GetQueueLimitAssociation$,
  GetQueueLimitAssociationCommand,
  GetQueueLimitAssociationRequest$,
  GetQueueLimitAssociationResponse$,
  GetQueueRequest$,
  GetQueueResponse$,
  GetSession$,
  GetSessionAction$,
  GetSessionActionCommand,
  GetSessionActionRequest$,
  GetSessionActionResponse$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  GetSessionsStatisticsAggregation$,
  GetSessionsStatisticsAggregationCommand,
  GetSessionsStatisticsAggregationRequest$,
  GetSessionsStatisticsAggregationResponse$,
  GetStep$,
  GetStepCommand,
  GetStepRequest$,
  GetStepResponse$,
  GetStorageProfile$,
  GetStorageProfileCommand,
  GetStorageProfileForQueue$,
  GetStorageProfileForQueueCommand,
  GetStorageProfileForQueueRequest$,
  GetStorageProfileForQueueResponse$,
  GetStorageProfileRequest$,
  GetStorageProfileResponse$,
  GetTask$,
  GetTaskCommand,
  GetTaskRequest$,
  GetTaskResponse$,
  GetWorker$,
  GetWorkerCommand,
  GetWorkerRequest$,
  GetWorkerResponse$,
  HostConfiguration$,
  HostPropertiesRequest$,
  HostPropertiesResponse$,
  InternalServerErrorException,
  InternalServerErrorException$,
  IpAddresses$,
  JobAttachmentDetailsEntity$,
  JobAttachmentDetailsError$,
  JobAttachmentDetailsIdentifiers$,
  JobAttachmentSettings$,
  JobAttachmentsFileSystem,
  JobDetailsEntity$,
  JobDetailsError$,
  JobDetailsIdentifiers$,
  JobEntity$,
  JobEntityErrorCode,
  JobEntityIdentifiersUnion$,
  JobLifecycleStatus,
  JobMember$,
  JobParameter$,
  JobRunAsUser$,
  JobSearchSummary$,
  JobSummary$,
  JobTargetTaskRunStatus,
  JobTemplateType,
  LicenseEndpointStatus,
  LicenseEndpointSummary$,
  LimitSummary$,
  ListAvailableMeteredProducts$,
  ListAvailableMeteredProductsCommand,
  ListAvailableMeteredProductsRequest$,
  ListAvailableMeteredProductsResponse$,
  ListBudgets$,
  ListBudgetsCommand,
  ListBudgetsRequest$,
  ListBudgetsResponse$,
  ListFarmMembers$,
  ListFarmMembersCommand,
  ListFarmMembersRequest$,
  ListFarmMembersResponse$,
  ListFarms$,
  ListFarmsCommand,
  ListFarmsRequest$,
  ListFarmsResponse$,
  ListFleetMembers$,
  ListFleetMembersCommand,
  ListFleetMembersRequest$,
  ListFleetMembersResponse$,
  ListFleets$,
  ListFleetsCommand,
  ListFleetsRequest$,
  ListFleetsResponse$,
  ListJobMembers$,
  ListJobMembersCommand,
  ListJobMembersRequest$,
  ListJobMembersResponse$,
  ListJobParameterDefinitions$,
  ListJobParameterDefinitionsCommand,
  ListJobParameterDefinitionsRequest$,
  ListJobParameterDefinitionsResponse$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResponse$,
  ListLicenseEndpoints$,
  ListLicenseEndpointsCommand,
  ListLicenseEndpointsRequest$,
  ListLicenseEndpointsResponse$,
  ListLimits$,
  ListLimitsCommand,
  ListLimitsRequest$,
  ListLimitsResponse$,
  ListMeteredProducts$,
  ListMeteredProductsCommand,
  ListMeteredProductsRequest$,
  ListMeteredProductsResponse$,
  ListMonitors$,
  ListMonitorsCommand,
  ListMonitorsRequest$,
  ListMonitorsResponse$,
  ListQueueEnvironments$,
  ListQueueEnvironmentsCommand,
  ListQueueEnvironmentsRequest$,
  ListQueueEnvironmentsResponse$,
  ListQueueFleetAssociations$,
  ListQueueFleetAssociationsCommand,
  ListQueueFleetAssociationsRequest$,
  ListQueueFleetAssociationsResponse$,
  ListQueueLimitAssociations$,
  ListQueueLimitAssociationsCommand,
  ListQueueLimitAssociationsRequest$,
  ListQueueLimitAssociationsResponse$,
  ListQueueMembers$,
  ListQueueMembersCommand,
  ListQueueMembersRequest$,
  ListQueueMembersResponse$,
  ListQueues$,
  ListQueuesCommand,
  ListQueuesRequest$,
  ListQueuesResponse$,
  ListSessionActions$,
  ListSessionActionsCommand,
  ListSessionActionsRequest$,
  ListSessionActionsResponse$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsForWorker$,
  ListSessionsForWorkerCommand,
  ListSessionsForWorkerRequest$,
  ListSessionsForWorkerResponse$,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListStepConsumers$,
  ListStepConsumersCommand,
  ListStepConsumersRequest$,
  ListStepConsumersResponse$,
  ListStepDependencies$,
  ListStepDependenciesCommand,
  ListStepDependenciesRequest$,
  ListStepDependenciesResponse$,
  ListSteps$,
  ListStepsCommand,
  ListStepsRequest$,
  ListStepsResponse$,
  ListStorageProfiles$,
  ListStorageProfilesCommand,
  ListStorageProfilesForQueue$,
  ListStorageProfilesForQueueCommand,
  ListStorageProfilesForQueueRequest$,
  ListStorageProfilesForQueueResponse$,
  ListStorageProfilesRequest$,
  ListStorageProfilesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTasks$,
  ListTasksCommand,
  ListTasksRequest$,
  ListTasksResponse$,
  ListWorkers$,
  ListWorkersCommand,
  ListWorkersRequest$,
  ListWorkersResponse$,
  LogConfiguration$,
  LogicalOperator,
  ManifestProperties$,
  MembershipLevel,
  MemoryMiBRange$,
  MeteredProductSummary$,
  MonitorSummary$,
  ParameterFilterExpression$,
  ParameterSortExpression$,
  ParameterSpace$,
  PathFormat,
  PathMappingRule$,
  Period,
  PosixUser$,
  PutMeteredProduct$,
  PutMeteredProductCommand,
  PutMeteredProductRequest$,
  PutMeteredProductResponse$,
  QueueBlockedReason,
  QueueEnvironmentSummary$,
  QueueFleetAssociationStatus,
  QueueFleetAssociationSummary$,
  QueueLimitAssociationStatus,
  QueueLimitAssociationSummary$,
  QueueMember$,
  QueueStatus,
  QueueSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseBudgetAction$,
  RunAs,
  S3Location$,
  SearchFilterExpression$,
  SearchGroupedFilterExpressions$,
  SearchJobs$,
  SearchJobsCommand,
  SearchJobsRequest$,
  SearchJobsResponse$,
  SearchSortExpression$,
  SearchSteps$,
  SearchStepsCommand,
  SearchStepsRequest$,
  SearchStepsResponse$,
  SearchTasks$,
  SearchTasksCommand,
  SearchTasksRequest$,
  SearchTasksResponse$,
  SearchTermFilterExpression$,
  SearchTermMatchingType,
  SearchWorkers$,
  SearchWorkersCommand,
  SearchWorkersRequest$,
  SearchWorkersResponse$,
  ServiceManagedEc2FleetConfiguration$,
  ServiceManagedEc2InstanceCapabilities$,
  ServiceManagedEc2InstanceMarketOptions$,
  ServiceManagedFleetOperatingSystemFamily,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  SessionActionDefinition$,
  SessionActionDefinitionSummary$,
  SessionActionStatus,
  SessionActionSummary$,
  SessionLifecycleStatus,
  SessionLifecycleTargetStatus,
  SessionSummary$,
  SessionsStatisticsAggregationStatus,
  SessionsStatisticsResources$,
  SortOrder,
  StartSessionsStatisticsAggregation$,
  StartSessionsStatisticsAggregationCommand,
  StartSessionsStatisticsAggregationRequest$,
  StartSessionsStatisticsAggregationResponse$,
  Statistics$,
  Stats$,
  StepAmountCapability$,
  StepAttributeCapability$,
  StepConsumer$,
  StepDependency$,
  StepDetailsEntity$,
  StepDetailsError$,
  StepDetailsIdentifiers$,
  StepLifecycleStatus,
  StepParameter$,
  StepParameterType,
  StepRequiredCapabilities$,
  StepSearchSummary$,
  StepSummary$,
  StepTargetTaskRunStatus,
  StorageProfileOperatingSystemFamily,
  StorageProfileSummary$,
  StringFilterExpression$,
  SyncInputJobAttachmentsSessionActionDefinition$,
  SyncInputJobAttachmentsSessionActionDefinitionSummary$,
  TagPropagationMode,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskParameterValue$,
  TaskRunManifestPropertiesRequest$,
  TaskRunManifestPropertiesResponse$,
  TaskRunSessionActionDefinition$,
  TaskRunSessionActionDefinitionSummary$,
  TaskRunStatus,
  TaskSearchSummary$,
  TaskSummary$,
  TaskTargetRunStatus,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBudget$,
  UpdateBudgetCommand,
  UpdateBudgetRequest$,
  UpdateBudgetResponse$,
  UpdateFarm$,
  UpdateFarmCommand,
  UpdateFarmRequest$,
  UpdateFarmResponse$,
  UpdateFleet$,
  UpdateFleetCommand,
  UpdateFleetRequest$,
  UpdateFleetResponse$,
  UpdateJob$,
  UpdateJobCommand,
  UpdateJobLifecycleStatus,
  UpdateJobRequest$,
  UpdateJobResponse$,
  UpdateLimit$,
  UpdateLimitCommand,
  UpdateLimitRequest$,
  UpdateLimitResponse$,
  UpdateMonitor$,
  UpdateMonitorCommand,
  UpdateMonitorRequest$,
  UpdateMonitorResponse$,
  UpdateQueue$,
  UpdateQueueCommand,
  UpdateQueueEnvironment$,
  UpdateQueueEnvironmentCommand,
  UpdateQueueEnvironmentRequest$,
  UpdateQueueEnvironmentResponse$,
  UpdateQueueFleetAssociation$,
  UpdateQueueFleetAssociationCommand,
  UpdateQueueFleetAssociationRequest$,
  UpdateQueueFleetAssociationResponse$,
  UpdateQueueFleetAssociationStatus,
  UpdateQueueLimitAssociation$,
  UpdateQueueLimitAssociationCommand,
  UpdateQueueLimitAssociationRequest$,
  UpdateQueueLimitAssociationResponse$,
  UpdateQueueLimitAssociationStatus,
  UpdateQueueRequest$,
  UpdateQueueResponse$,
  UpdateSession$,
  UpdateSessionCommand,
  UpdateSessionRequest$,
  UpdateSessionResponse$,
  UpdateStep$,
  UpdateStepCommand,
  UpdateStepRequest$,
  UpdateStepResponse$,
  UpdateStorageProfile$,
  UpdateStorageProfileCommand,
  UpdateStorageProfileRequest$,
  UpdateStorageProfileResponse$,
  UpdateTask$,
  UpdateTaskCommand,
  UpdateTaskRequest$,
  UpdateTaskResponse$,
  UpdateWorker$,
  UpdateWorkerCommand,
  UpdateWorkerRequest$,
  UpdateWorkerResponse$,
  UpdateWorkerSchedule$,
  UpdateWorkerScheduleCommand,
  UpdateWorkerScheduleRequest$,
  UpdateWorkerScheduleResponse$,
  UpdatedSessionActionInfo$,
  UpdatedWorkerStatus,
  UsageGroupByField,
  UsageStatistic,
  UsageTrackingResource$,
  UsageType,
  UserJobsFirst$,
  VCpuCountRange$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcConfiguration$,
  WindowsUser$,
  WorkerAmountCapability$,
  WorkerAttributeCapability$,
  WorkerCapabilities$,
  WorkerSearchSummary$,
  WorkerSessionSummary$,
  WorkerStatus,
  WorkerSummary$,
  paginateGetSessionsStatisticsAggregation,
  paginateListAvailableMeteredProducts,
  paginateListBudgets,
  paginateListFarmMembers,
  paginateListFarms,
  paginateListFleetMembers,
  paginateListFleets,
  paginateListJobMembers,
  paginateListJobParameterDefinitions,
  paginateListJobs,
  paginateListLicenseEndpoints,
  paginateListLimits,
  paginateListMeteredProducts,
  paginateListMonitors,
  paginateListQueueEnvironments,
  paginateListQueueFleetAssociations,
  paginateListQueueLimitAssociations,
  paginateListQueueMembers,
  paginateListQueues,
  paginateListSessionActions,
  paginateListSessions,
  paginateListSessionsForWorker,
  paginateListStepConsumers,
  paginateListStepDependencies,
  paginateListSteps,
  paginateListStorageProfiles,
  paginateListStorageProfilesForQueue,
  paginateListTasks,
  paginateListWorkers,
  waitForFleetActive,
  waitForJobCreateComplete,
  waitForLicenseEndpointDeleted,
  waitForLicenseEndpointValid,
  waitForQueueFleetAssociationStopped,
  waitForQueueLimitAssociationStopped,
  waitForQueueScheduling,
  waitForQueueSchedulingBlocked,
  waitUntilFleetActive,
  waitUntilJobCreateComplete,
  waitUntilLicenseEndpointDeleted,
  waitUntilLicenseEndpointValid,
  waitUntilQueueFleetAssociationStopped,
  waitUntilQueueLimitAssociationStopped,
  waitUntilQueueScheduling,
  waitUntilQueueSchedulingBlocked,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DeadlineClient === "function");
assert(typeof Deadline === "function");
// commands
assert(typeof AssociateMemberToFarmCommand === "function");
assert(typeof AssociateMemberToFarm$ === "object");
assert(typeof AssociateMemberToFleetCommand === "function");
assert(typeof AssociateMemberToFleet$ === "object");
assert(typeof AssociateMemberToJobCommand === "function");
assert(typeof AssociateMemberToJob$ === "object");
assert(typeof AssociateMemberToQueueCommand === "function");
assert(typeof AssociateMemberToQueue$ === "object");
assert(typeof AssumeFleetRoleForReadCommand === "function");
assert(typeof AssumeFleetRoleForRead$ === "object");
assert(typeof AssumeFleetRoleForWorkerCommand === "function");
assert(typeof AssumeFleetRoleForWorker$ === "object");
assert(typeof AssumeQueueRoleForReadCommand === "function");
assert(typeof AssumeQueueRoleForRead$ === "object");
assert(typeof AssumeQueueRoleForUserCommand === "function");
assert(typeof AssumeQueueRoleForUser$ === "object");
assert(typeof AssumeQueueRoleForWorkerCommand === "function");
assert(typeof AssumeQueueRoleForWorker$ === "object");
assert(typeof BatchGetJobEntityCommand === "function");
assert(typeof BatchGetJobEntity$ === "object");
assert(typeof CopyJobTemplateCommand === "function");
assert(typeof CopyJobTemplate$ === "object");
assert(typeof CreateBudgetCommand === "function");
assert(typeof CreateBudget$ === "object");
assert(typeof CreateFarmCommand === "function");
assert(typeof CreateFarm$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateLicenseEndpointCommand === "function");
assert(typeof CreateLicenseEndpoint$ === "object");
assert(typeof CreateLimitCommand === "function");
assert(typeof CreateLimit$ === "object");
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateMonitor$ === "object");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueue$ === "object");
assert(typeof CreateQueueEnvironmentCommand === "function");
assert(typeof CreateQueueEnvironment$ === "object");
assert(typeof CreateQueueFleetAssociationCommand === "function");
assert(typeof CreateQueueFleetAssociation$ === "object");
assert(typeof CreateQueueLimitAssociationCommand === "function");
assert(typeof CreateQueueLimitAssociation$ === "object");
assert(typeof CreateStorageProfileCommand === "function");
assert(typeof CreateStorageProfile$ === "object");
assert(typeof CreateWorkerCommand === "function");
assert(typeof CreateWorker$ === "object");
assert(typeof DeleteBudgetCommand === "function");
assert(typeof DeleteBudget$ === "object");
assert(typeof DeleteFarmCommand === "function");
assert(typeof DeleteFarm$ === "object");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleet$ === "object");
assert(typeof DeleteLicenseEndpointCommand === "function");
assert(typeof DeleteLicenseEndpoint$ === "object");
assert(typeof DeleteLimitCommand === "function");
assert(typeof DeleteLimit$ === "object");
assert(typeof DeleteMeteredProductCommand === "function");
assert(typeof DeleteMeteredProduct$ === "object");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteMonitor$ === "object");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueue$ === "object");
assert(typeof DeleteQueueEnvironmentCommand === "function");
assert(typeof DeleteQueueEnvironment$ === "object");
assert(typeof DeleteQueueFleetAssociationCommand === "function");
assert(typeof DeleteQueueFleetAssociation$ === "object");
assert(typeof DeleteQueueLimitAssociationCommand === "function");
assert(typeof DeleteQueueLimitAssociation$ === "object");
assert(typeof DeleteStorageProfileCommand === "function");
assert(typeof DeleteStorageProfile$ === "object");
assert(typeof DeleteWorkerCommand === "function");
assert(typeof DeleteWorker$ === "object");
assert(typeof DisassociateMemberFromFarmCommand === "function");
assert(typeof DisassociateMemberFromFarm$ === "object");
assert(typeof DisassociateMemberFromFleetCommand === "function");
assert(typeof DisassociateMemberFromFleet$ === "object");
assert(typeof DisassociateMemberFromJobCommand === "function");
assert(typeof DisassociateMemberFromJob$ === "object");
assert(typeof DisassociateMemberFromQueueCommand === "function");
assert(typeof DisassociateMemberFromQueue$ === "object");
assert(typeof GetBudgetCommand === "function");
assert(typeof GetBudget$ === "object");
assert(typeof GetFarmCommand === "function");
assert(typeof GetFarm$ === "object");
assert(typeof GetFleetCommand === "function");
assert(typeof GetFleet$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetLicenseEndpointCommand === "function");
assert(typeof GetLicenseEndpoint$ === "object");
assert(typeof GetLimitCommand === "function");
assert(typeof GetLimit$ === "object");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetMonitor$ === "object");
assert(typeof GetQueueCommand === "function");
assert(typeof GetQueue$ === "object");
assert(typeof GetQueueEnvironmentCommand === "function");
assert(typeof GetQueueEnvironment$ === "object");
assert(typeof GetQueueFleetAssociationCommand === "function");
assert(typeof GetQueueFleetAssociation$ === "object");
assert(typeof GetQueueLimitAssociationCommand === "function");
assert(typeof GetQueueLimitAssociation$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof GetSessionActionCommand === "function");
assert(typeof GetSessionAction$ === "object");
assert(typeof GetSessionsStatisticsAggregationCommand === "function");
assert(typeof GetSessionsStatisticsAggregation$ === "object");
assert(typeof GetStepCommand === "function");
assert(typeof GetStep$ === "object");
assert(typeof GetStorageProfileCommand === "function");
assert(typeof GetStorageProfile$ === "object");
assert(typeof GetStorageProfileForQueueCommand === "function");
assert(typeof GetStorageProfileForQueue$ === "object");
assert(typeof GetTaskCommand === "function");
assert(typeof GetTask$ === "object");
assert(typeof GetWorkerCommand === "function");
assert(typeof GetWorker$ === "object");
assert(typeof ListAvailableMeteredProductsCommand === "function");
assert(typeof ListAvailableMeteredProducts$ === "object");
assert(typeof ListBudgetsCommand === "function");
assert(typeof ListBudgets$ === "object");
assert(typeof ListFarmMembersCommand === "function");
assert(typeof ListFarmMembers$ === "object");
assert(typeof ListFarmsCommand === "function");
assert(typeof ListFarms$ === "object");
assert(typeof ListFleetMembersCommand === "function");
assert(typeof ListFleetMembers$ === "object");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListFleets$ === "object");
assert(typeof ListJobMembersCommand === "function");
assert(typeof ListJobMembers$ === "object");
assert(typeof ListJobParameterDefinitionsCommand === "function");
assert(typeof ListJobParameterDefinitions$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListLicenseEndpointsCommand === "function");
assert(typeof ListLicenseEndpoints$ === "object");
assert(typeof ListLimitsCommand === "function");
assert(typeof ListLimits$ === "object");
assert(typeof ListMeteredProductsCommand === "function");
assert(typeof ListMeteredProducts$ === "object");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListMonitors$ === "object");
assert(typeof ListQueueEnvironmentsCommand === "function");
assert(typeof ListQueueEnvironments$ === "object");
assert(typeof ListQueueFleetAssociationsCommand === "function");
assert(typeof ListQueueFleetAssociations$ === "object");
assert(typeof ListQueueLimitAssociationsCommand === "function");
assert(typeof ListQueueLimitAssociations$ === "object");
assert(typeof ListQueueMembersCommand === "function");
assert(typeof ListQueueMembers$ === "object");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListQueues$ === "object");
assert(typeof ListSessionActionsCommand === "function");
assert(typeof ListSessionActions$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListSessionsForWorkerCommand === "function");
assert(typeof ListSessionsForWorker$ === "object");
assert(typeof ListStepConsumersCommand === "function");
assert(typeof ListStepConsumers$ === "object");
assert(typeof ListStepDependenciesCommand === "function");
assert(typeof ListStepDependencies$ === "object");
assert(typeof ListStepsCommand === "function");
assert(typeof ListSteps$ === "object");
assert(typeof ListStorageProfilesCommand === "function");
assert(typeof ListStorageProfiles$ === "object");
assert(typeof ListStorageProfilesForQueueCommand === "function");
assert(typeof ListStorageProfilesForQueue$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTasksCommand === "function");
assert(typeof ListTasks$ === "object");
assert(typeof ListWorkersCommand === "function");
assert(typeof ListWorkers$ === "object");
assert(typeof PutMeteredProductCommand === "function");
assert(typeof PutMeteredProduct$ === "object");
assert(typeof SearchJobsCommand === "function");
assert(typeof SearchJobs$ === "object");
assert(typeof SearchStepsCommand === "function");
assert(typeof SearchSteps$ === "object");
assert(typeof SearchTasksCommand === "function");
assert(typeof SearchTasks$ === "object");
assert(typeof SearchWorkersCommand === "function");
assert(typeof SearchWorkers$ === "object");
assert(typeof StartSessionsStatisticsAggregationCommand === "function");
assert(typeof StartSessionsStatisticsAggregation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBudgetCommand === "function");
assert(typeof UpdateBudget$ === "object");
assert(typeof UpdateFarmCommand === "function");
assert(typeof UpdateFarm$ === "object");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateFleet$ === "object");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateJob$ === "object");
assert(typeof UpdateLimitCommand === "function");
assert(typeof UpdateLimit$ === "object");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateMonitor$ === "object");
assert(typeof UpdateQueueCommand === "function");
assert(typeof UpdateQueue$ === "object");
assert(typeof UpdateQueueEnvironmentCommand === "function");
assert(typeof UpdateQueueEnvironment$ === "object");
assert(typeof UpdateQueueFleetAssociationCommand === "function");
assert(typeof UpdateQueueFleetAssociation$ === "object");
assert(typeof UpdateQueueLimitAssociationCommand === "function");
assert(typeof UpdateQueueLimitAssociation$ === "object");
assert(typeof UpdateSessionCommand === "function");
assert(typeof UpdateSession$ === "object");
assert(typeof UpdateStepCommand === "function");
assert(typeof UpdateStep$ === "object");
assert(typeof UpdateStorageProfileCommand === "function");
assert(typeof UpdateStorageProfile$ === "object");
assert(typeof UpdateTaskCommand === "function");
assert(typeof UpdateTask$ === "object");
assert(typeof UpdateWorkerCommand === "function");
assert(typeof UpdateWorker$ === "object");
assert(typeof UpdateWorkerScheduleCommand === "function");
assert(typeof UpdateWorkerSchedule$ === "object");
// structural schemas
assert(typeof AcceleratorCapabilities$ === "object");
assert(typeof AcceleratorCountRange$ === "object");
assert(typeof AcceleratorSelection$ === "object");
assert(typeof AcceleratorTotalMemoryMiBRange$ === "object");
assert(typeof AcquiredLimit$ === "object");
assert(typeof AssignedEnvironmentEnterSessionActionDefinition$ === "object");
assert(typeof AssignedEnvironmentExitSessionActionDefinition$ === "object");
assert(typeof AssignedSession$ === "object");
assert(typeof AssignedSessionAction$ === "object");
assert(typeof AssignedSessionActionDefinition$ === "object");
assert(typeof AssignedSyncInputJobAttachmentsSessionActionDefinition$ === "object");
assert(typeof AssignedTaskRunSessionActionDefinition$ === "object");
assert(typeof AssociateMemberToFarmRequest$ === "object");
assert(typeof AssociateMemberToFarmResponse$ === "object");
assert(typeof AssociateMemberToFleetRequest$ === "object");
assert(typeof AssociateMemberToFleetResponse$ === "object");
assert(typeof AssociateMemberToJobRequest$ === "object");
assert(typeof AssociateMemberToJobResponse$ === "object");
assert(typeof AssociateMemberToQueueRequest$ === "object");
assert(typeof AssociateMemberToQueueResponse$ === "object");
assert(typeof AssumeFleetRoleForReadRequest$ === "object");
assert(typeof AssumeFleetRoleForReadResponse$ === "object");
assert(typeof AssumeFleetRoleForWorkerRequest$ === "object");
assert(typeof AssumeFleetRoleForWorkerResponse$ === "object");
assert(typeof AssumeQueueRoleForReadRequest$ === "object");
assert(typeof AssumeQueueRoleForReadResponse$ === "object");
assert(typeof AssumeQueueRoleForUserRequest$ === "object");
assert(typeof AssumeQueueRoleForUserResponse$ === "object");
assert(typeof AssumeQueueRoleForWorkerRequest$ === "object");
assert(typeof AssumeQueueRoleForWorkerResponse$ === "object");
assert(typeof Attachments$ === "object");
assert(typeof AwsCredentials$ === "object");
assert(typeof BatchGetJobEntityRequest$ === "object");
assert(typeof BatchGetJobEntityResponse$ === "object");
assert(typeof BudgetActionToAdd$ === "object");
assert(typeof BudgetActionToRemove$ === "object");
assert(typeof BudgetSchedule$ === "object");
assert(typeof BudgetSummary$ === "object");
assert(typeof ConsumedUsages$ === "object");
assert(typeof CopyJobTemplateRequest$ === "object");
assert(typeof CopyJobTemplateResponse$ === "object");
assert(typeof CreateBudgetRequest$ === "object");
assert(typeof CreateBudgetResponse$ === "object");
assert(typeof CreateFarmRequest$ === "object");
assert(typeof CreateFarmResponse$ === "object");
assert(typeof CreateFleetRequest$ === "object");
assert(typeof CreateFleetResponse$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreateLicenseEndpointRequest$ === "object");
assert(typeof CreateLicenseEndpointResponse$ === "object");
assert(typeof CreateLimitRequest$ === "object");
assert(typeof CreateLimitResponse$ === "object");
assert(typeof CreateMonitorRequest$ === "object");
assert(typeof CreateMonitorResponse$ === "object");
assert(typeof CreateQueueEnvironmentRequest$ === "object");
assert(typeof CreateQueueEnvironmentResponse$ === "object");
assert(typeof CreateQueueFleetAssociationRequest$ === "object");
assert(typeof CreateQueueFleetAssociationResponse$ === "object");
assert(typeof CreateQueueLimitAssociationRequest$ === "object");
assert(typeof CreateQueueLimitAssociationResponse$ === "object");
assert(typeof CreateQueueRequest$ === "object");
assert(typeof CreateQueueResponse$ === "object");
assert(typeof CreateStorageProfileRequest$ === "object");
assert(typeof CreateStorageProfileResponse$ === "object");
assert(typeof CreateWorkerRequest$ === "object");
assert(typeof CreateWorkerResponse$ === "object");
assert(typeof CustomerManagedFleetConfiguration$ === "object");
assert(typeof CustomerManagedWorkerCapabilities$ === "object");
assert(typeof DateTimeFilterExpression$ === "object");
assert(typeof DeleteBudgetRequest$ === "object");
assert(typeof DeleteBudgetResponse$ === "object");
assert(typeof DeleteFarmRequest$ === "object");
assert(typeof DeleteFarmResponse$ === "object");
assert(typeof DeleteFleetRequest$ === "object");
assert(typeof DeleteFleetResponse$ === "object");
assert(typeof DeleteLicenseEndpointRequest$ === "object");
assert(typeof DeleteLicenseEndpointResponse$ === "object");
assert(typeof DeleteLimitRequest$ === "object");
assert(typeof DeleteLimitResponse$ === "object");
assert(typeof DeleteMeteredProductRequest$ === "object");
assert(typeof DeleteMeteredProductResponse$ === "object");
assert(typeof DeleteMonitorRequest$ === "object");
assert(typeof DeleteMonitorResponse$ === "object");
assert(typeof DeleteQueueEnvironmentRequest$ === "object");
assert(typeof DeleteQueueEnvironmentResponse$ === "object");
assert(typeof DeleteQueueFleetAssociationRequest$ === "object");
assert(typeof DeleteQueueFleetAssociationResponse$ === "object");
assert(typeof DeleteQueueLimitAssociationRequest$ === "object");
assert(typeof DeleteQueueLimitAssociationResponse$ === "object");
assert(typeof DeleteQueueRequest$ === "object");
assert(typeof DeleteQueueResponse$ === "object");
assert(typeof DeleteStorageProfileRequest$ === "object");
assert(typeof DeleteStorageProfileResponse$ === "object");
assert(typeof DeleteWorkerRequest$ === "object");
assert(typeof DeleteWorkerResponse$ === "object");
assert(typeof DependencyCounts$ === "object");
assert(typeof DisassociateMemberFromFarmRequest$ === "object");
assert(typeof DisassociateMemberFromFarmResponse$ === "object");
assert(typeof DisassociateMemberFromFleetRequest$ === "object");
assert(typeof DisassociateMemberFromFleetResponse$ === "object");
assert(typeof DisassociateMemberFromJobRequest$ === "object");
assert(typeof DisassociateMemberFromJobResponse$ === "object");
assert(typeof DisassociateMemberFromQueueRequest$ === "object");
assert(typeof DisassociateMemberFromQueueResponse$ === "object");
assert(typeof Ec2EbsVolume$ === "object");
assert(typeof EnvironmentDetailsEntity$ === "object");
assert(typeof EnvironmentDetailsError$ === "object");
assert(typeof EnvironmentDetailsIdentifiers$ === "object");
assert(typeof EnvironmentEnterSessionActionDefinition$ === "object");
assert(typeof EnvironmentEnterSessionActionDefinitionSummary$ === "object");
assert(typeof EnvironmentExitSessionActionDefinition$ === "object");
assert(typeof EnvironmentExitSessionActionDefinitionSummary$ === "object");
assert(typeof FarmMember$ === "object");
assert(typeof FarmSummary$ === "object");
assert(typeof FieldSortExpression$ === "object");
assert(typeof FileSystemLocation$ === "object");
assert(typeof FixedBudgetSchedule$ === "object");
assert(typeof FleetAmountCapability$ === "object");
assert(typeof FleetAttributeCapability$ === "object");
assert(typeof FleetCapabilities$ === "object");
assert(typeof FleetConfiguration$ === "object");
assert(typeof FleetMember$ === "object");
assert(typeof FleetSummary$ === "object");
assert(typeof GetBudgetRequest$ === "object");
assert(typeof GetBudgetResponse$ === "object");
assert(typeof GetFarmRequest$ === "object");
assert(typeof GetFarmResponse$ === "object");
assert(typeof GetFleetRequest$ === "object");
assert(typeof GetFleetResponse$ === "object");
assert(typeof GetJobEntityError$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResponse$ === "object");
assert(typeof GetLicenseEndpointRequest$ === "object");
assert(typeof GetLicenseEndpointResponse$ === "object");
assert(typeof GetLimitRequest$ === "object");
assert(typeof GetLimitResponse$ === "object");
assert(typeof GetMonitorRequest$ === "object");
assert(typeof GetMonitorResponse$ === "object");
assert(typeof GetQueueEnvironmentRequest$ === "object");
assert(typeof GetQueueEnvironmentResponse$ === "object");
assert(typeof GetQueueFleetAssociationRequest$ === "object");
assert(typeof GetQueueFleetAssociationResponse$ === "object");
assert(typeof GetQueueLimitAssociationRequest$ === "object");
assert(typeof GetQueueLimitAssociationResponse$ === "object");
assert(typeof GetQueueRequest$ === "object");
assert(typeof GetQueueResponse$ === "object");
assert(typeof GetSessionActionRequest$ === "object");
assert(typeof GetSessionActionResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GetSessionsStatisticsAggregationRequest$ === "object");
assert(typeof GetSessionsStatisticsAggregationResponse$ === "object");
assert(typeof GetStepRequest$ === "object");
assert(typeof GetStepResponse$ === "object");
assert(typeof GetStorageProfileForQueueRequest$ === "object");
assert(typeof GetStorageProfileForQueueResponse$ === "object");
assert(typeof GetStorageProfileRequest$ === "object");
assert(typeof GetStorageProfileResponse$ === "object");
assert(typeof GetTaskRequest$ === "object");
assert(typeof GetTaskResponse$ === "object");
assert(typeof GetWorkerRequest$ === "object");
assert(typeof GetWorkerResponse$ === "object");
assert(typeof HostConfiguration$ === "object");
assert(typeof HostPropertiesRequest$ === "object");
assert(typeof HostPropertiesResponse$ === "object");
assert(typeof IpAddresses$ === "object");
assert(typeof JobAttachmentDetailsEntity$ === "object");
assert(typeof JobAttachmentDetailsError$ === "object");
assert(typeof JobAttachmentDetailsIdentifiers$ === "object");
assert(typeof JobAttachmentSettings$ === "object");
assert(typeof JobDetailsEntity$ === "object");
assert(typeof JobDetailsError$ === "object");
assert(typeof JobDetailsIdentifiers$ === "object");
assert(typeof JobEntity$ === "object");
assert(typeof JobEntityIdentifiersUnion$ === "object");
assert(typeof JobMember$ === "object");
assert(typeof JobParameter$ === "object");
assert(typeof JobRunAsUser$ === "object");
assert(typeof JobSearchSummary$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof LicenseEndpointSummary$ === "object");
assert(typeof LimitSummary$ === "object");
assert(typeof ListAvailableMeteredProductsRequest$ === "object");
assert(typeof ListAvailableMeteredProductsResponse$ === "object");
assert(typeof ListBudgetsRequest$ === "object");
assert(typeof ListBudgetsResponse$ === "object");
assert(typeof ListFarmMembersRequest$ === "object");
assert(typeof ListFarmMembersResponse$ === "object");
assert(typeof ListFarmsRequest$ === "object");
assert(typeof ListFarmsResponse$ === "object");
assert(typeof ListFleetMembersRequest$ === "object");
assert(typeof ListFleetMembersResponse$ === "object");
assert(typeof ListFleetsRequest$ === "object");
assert(typeof ListFleetsResponse$ === "object");
assert(typeof ListJobMembersRequest$ === "object");
assert(typeof ListJobMembersResponse$ === "object");
assert(typeof ListJobParameterDefinitionsRequest$ === "object");
assert(typeof ListJobParameterDefinitionsResponse$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResponse$ === "object");
assert(typeof ListLicenseEndpointsRequest$ === "object");
assert(typeof ListLicenseEndpointsResponse$ === "object");
assert(typeof ListLimitsRequest$ === "object");
assert(typeof ListLimitsResponse$ === "object");
assert(typeof ListMeteredProductsRequest$ === "object");
assert(typeof ListMeteredProductsResponse$ === "object");
assert(typeof ListMonitorsRequest$ === "object");
assert(typeof ListMonitorsResponse$ === "object");
assert(typeof ListQueueEnvironmentsRequest$ === "object");
assert(typeof ListQueueEnvironmentsResponse$ === "object");
assert(typeof ListQueueFleetAssociationsRequest$ === "object");
assert(typeof ListQueueFleetAssociationsResponse$ === "object");
assert(typeof ListQueueLimitAssociationsRequest$ === "object");
assert(typeof ListQueueLimitAssociationsResponse$ === "object");
assert(typeof ListQueueMembersRequest$ === "object");
assert(typeof ListQueueMembersResponse$ === "object");
assert(typeof ListQueuesRequest$ === "object");
assert(typeof ListQueuesResponse$ === "object");
assert(typeof ListSessionActionsRequest$ === "object");
assert(typeof ListSessionActionsResponse$ === "object");
assert(typeof ListSessionsForWorkerRequest$ === "object");
assert(typeof ListSessionsForWorkerResponse$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListStepConsumersRequest$ === "object");
assert(typeof ListStepConsumersResponse$ === "object");
assert(typeof ListStepDependenciesRequest$ === "object");
assert(typeof ListStepDependenciesResponse$ === "object");
assert(typeof ListStepsRequest$ === "object");
assert(typeof ListStepsResponse$ === "object");
assert(typeof ListStorageProfilesForQueueRequest$ === "object");
assert(typeof ListStorageProfilesForQueueResponse$ === "object");
assert(typeof ListStorageProfilesRequest$ === "object");
assert(typeof ListStorageProfilesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTasksRequest$ === "object");
assert(typeof ListTasksResponse$ === "object");
assert(typeof ListWorkersRequest$ === "object");
assert(typeof ListWorkersResponse$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof ManifestProperties$ === "object");
assert(typeof MemoryMiBRange$ === "object");
assert(typeof MeteredProductSummary$ === "object");
assert(typeof MonitorSummary$ === "object");
assert(typeof ParameterFilterExpression$ === "object");
assert(typeof ParameterSortExpression$ === "object");
assert(typeof ParameterSpace$ === "object");
assert(typeof PathMappingRule$ === "object");
assert(typeof PosixUser$ === "object");
assert(typeof PutMeteredProductRequest$ === "object");
assert(typeof PutMeteredProductResponse$ === "object");
assert(typeof QueueEnvironmentSummary$ === "object");
assert(typeof QueueFleetAssociationSummary$ === "object");
assert(typeof QueueLimitAssociationSummary$ === "object");
assert(typeof QueueMember$ === "object");
assert(typeof QueueSummary$ === "object");
assert(typeof ResponseBudgetAction$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SearchFilterExpression$ === "object");
assert(typeof SearchGroupedFilterExpressions$ === "object");
assert(typeof SearchJobsRequest$ === "object");
assert(typeof SearchJobsResponse$ === "object");
assert(typeof SearchSortExpression$ === "object");
assert(typeof SearchStepsRequest$ === "object");
assert(typeof SearchStepsResponse$ === "object");
assert(typeof SearchTasksRequest$ === "object");
assert(typeof SearchTasksResponse$ === "object");
assert(typeof SearchTermFilterExpression$ === "object");
assert(typeof SearchWorkersRequest$ === "object");
assert(typeof SearchWorkersResponse$ === "object");
assert(typeof ServiceManagedEc2FleetConfiguration$ === "object");
assert(typeof ServiceManagedEc2InstanceCapabilities$ === "object");
assert(typeof ServiceManagedEc2InstanceMarketOptions$ === "object");
assert(typeof SessionActionDefinition$ === "object");
assert(typeof SessionActionDefinitionSummary$ === "object");
assert(typeof SessionActionSummary$ === "object");
assert(typeof SessionsStatisticsResources$ === "object");
assert(typeof SessionSummary$ === "object");
assert(typeof StartSessionsStatisticsAggregationRequest$ === "object");
assert(typeof StartSessionsStatisticsAggregationResponse$ === "object");
assert(typeof Statistics$ === "object");
assert(typeof Stats$ === "object");
assert(typeof StepAmountCapability$ === "object");
assert(typeof StepAttributeCapability$ === "object");
assert(typeof StepConsumer$ === "object");
assert(typeof StepDependency$ === "object");
assert(typeof StepDetailsEntity$ === "object");
assert(typeof StepDetailsError$ === "object");
assert(typeof StepDetailsIdentifiers$ === "object");
assert(typeof StepParameter$ === "object");
assert(typeof StepRequiredCapabilities$ === "object");
assert(typeof StepSearchSummary$ === "object");
assert(typeof StepSummary$ === "object");
assert(typeof StorageProfileSummary$ === "object");
assert(typeof StringFilterExpression$ === "object");
assert(typeof SyncInputJobAttachmentsSessionActionDefinition$ === "object");
assert(typeof SyncInputJobAttachmentsSessionActionDefinitionSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskParameterValue$ === "object");
assert(typeof TaskRunManifestPropertiesRequest$ === "object");
assert(typeof TaskRunManifestPropertiesResponse$ === "object");
assert(typeof TaskRunSessionActionDefinition$ === "object");
assert(typeof TaskRunSessionActionDefinitionSummary$ === "object");
assert(typeof TaskSearchSummary$ === "object");
assert(typeof TaskSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBudgetRequest$ === "object");
assert(typeof UpdateBudgetResponse$ === "object");
assert(typeof UpdatedSessionActionInfo$ === "object");
assert(typeof UpdateFarmRequest$ === "object");
assert(typeof UpdateFarmResponse$ === "object");
assert(typeof UpdateFleetRequest$ === "object");
assert(typeof UpdateFleetResponse$ === "object");
assert(typeof UpdateJobRequest$ === "object");
assert(typeof UpdateJobResponse$ === "object");
assert(typeof UpdateLimitRequest$ === "object");
assert(typeof UpdateLimitResponse$ === "object");
assert(typeof UpdateMonitorRequest$ === "object");
assert(typeof UpdateMonitorResponse$ === "object");
assert(typeof UpdateQueueEnvironmentRequest$ === "object");
assert(typeof UpdateQueueEnvironmentResponse$ === "object");
assert(typeof UpdateQueueFleetAssociationRequest$ === "object");
assert(typeof UpdateQueueFleetAssociationResponse$ === "object");
assert(typeof UpdateQueueLimitAssociationRequest$ === "object");
assert(typeof UpdateQueueLimitAssociationResponse$ === "object");
assert(typeof UpdateQueueRequest$ === "object");
assert(typeof UpdateQueueResponse$ === "object");
assert(typeof UpdateSessionRequest$ === "object");
assert(typeof UpdateSessionResponse$ === "object");
assert(typeof UpdateStepRequest$ === "object");
assert(typeof UpdateStepResponse$ === "object");
assert(typeof UpdateStorageProfileRequest$ === "object");
assert(typeof UpdateStorageProfileResponse$ === "object");
assert(typeof UpdateTaskRequest$ === "object");
assert(typeof UpdateTaskResponse$ === "object");
assert(typeof UpdateWorkerRequest$ === "object");
assert(typeof UpdateWorkerResponse$ === "object");
assert(typeof UpdateWorkerScheduleRequest$ === "object");
assert(typeof UpdateWorkerScheduleResponse$ === "object");
assert(typeof UsageTrackingResource$ === "object");
assert(typeof UserJobsFirst$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VCpuCountRange$ === "object");
assert(typeof VpcConfiguration$ === "object");
assert(typeof WindowsUser$ === "object");
assert(typeof WorkerAmountCapability$ === "object");
assert(typeof WorkerAttributeCapability$ === "object");
assert(typeof WorkerCapabilities$ === "object");
assert(typeof WorkerSearchSummary$ === "object");
assert(typeof WorkerSessionSummary$ === "object");
assert(typeof WorkerSummary$ === "object");
// enums
assert(typeof AcceleratorName === "object");
assert(typeof AcceleratorType === "object");
assert(typeof AutoScalingMode === "object");
assert(typeof AutoScalingStatus === "object");
assert(typeof BudgetActionType === "object");
assert(typeof BudgetStatus === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof CompletedStatus === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof CpuArchitectureType === "object");
assert(typeof CreateJobTargetTaskRunStatus === "object");
assert(typeof CustomerManagedFleetOperatingSystemFamily === "object");
assert(typeof DeadlinePrincipalType === "object");
assert(typeof DefaultQueueBudgetAction === "object");
assert(typeof DependencyConsumerResolutionStatus === "object");
assert(typeof DesiredWorkerStatus === "object");
assert(typeof Ec2MarketType === "object");
assert(typeof EnvironmentTemplateType === "object");
assert(typeof FileSystemLocationType === "object");
assert(typeof FleetStatus === "object");
assert(typeof JobAttachmentsFileSystem === "object");
assert(typeof JobEntityErrorCode === "object");
assert(typeof JobLifecycleStatus === "object");
assert(typeof JobTargetTaskRunStatus === "object");
assert(typeof JobTemplateType === "object");
assert(typeof LicenseEndpointStatus === "object");
assert(typeof LogicalOperator === "object");
assert(typeof MembershipLevel === "object");
assert(typeof PathFormat === "object");
assert(typeof Period === "object");
assert(typeof QueueBlockedReason === "object");
assert(typeof QueueFleetAssociationStatus === "object");
assert(typeof QueueLimitAssociationStatus === "object");
assert(typeof QueueStatus === "object");
assert(typeof RunAs === "object");
assert(typeof SearchTermMatchingType === "object");
assert(typeof ServiceManagedFleetOperatingSystemFamily === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof SessionActionStatus === "object");
assert(typeof SessionLifecycleStatus === "object");
assert(typeof SessionLifecycleTargetStatus === "object");
assert(typeof SessionsStatisticsAggregationStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof StepLifecycleStatus === "object");
assert(typeof StepParameterType === "object");
assert(typeof StepTargetTaskRunStatus === "object");
assert(typeof StorageProfileOperatingSystemFamily === "object");
assert(typeof TagPropagationMode === "object");
assert(typeof TaskRunStatus === "object");
assert(typeof TaskTargetRunStatus === "object");
assert(typeof UpdatedWorkerStatus === "object");
assert(typeof UpdateJobLifecycleStatus === "object");
assert(typeof UpdateQueueFleetAssociationStatus === "object");
assert(typeof UpdateQueueLimitAssociationStatus === "object");
assert(typeof UsageGroupByField === "object");
assert(typeof UsageStatistic === "object");
assert(typeof UsageType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkerStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof DeadlineServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DeadlineServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerErrorException.prototype instanceof DeadlineServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DeadlineServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DeadlineServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DeadlineServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DeadlineServiceException);
assert(typeof ValidationException$ === "object");
assert(DeadlineServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFleetActive === "function");
assert(typeof waitForJobCreateComplete === "function");
assert(typeof waitForLicenseEndpointDeleted === "function");
assert(typeof waitForLicenseEndpointValid === "function");
assert(typeof waitForQueueFleetAssociationStopped === "function");
assert(typeof waitForQueueLimitAssociationStopped === "function");
assert(typeof waitForQueueScheduling === "function");
assert(typeof waitForQueueSchedulingBlocked === "function");
assert(typeof waitUntilFleetActive === "function");
assert(typeof waitUntilJobCreateComplete === "function");
assert(typeof waitUntilLicenseEndpointDeleted === "function");
assert(typeof waitUntilLicenseEndpointValid === "function");
assert(typeof waitUntilQueueFleetAssociationStopped === "function");
assert(typeof waitUntilQueueLimitAssociationStopped === "function");
assert(typeof waitUntilQueueScheduling === "function");
assert(typeof waitUntilQueueSchedulingBlocked === "function");
// paginators
assert(typeof paginateGetSessionsStatisticsAggregation === "function");
assert(typeof paginateListAvailableMeteredProducts === "function");
assert(typeof paginateListBudgets === "function");
assert(typeof paginateListFarmMembers === "function");
assert(typeof paginateListFarms === "function");
assert(typeof paginateListFleetMembers === "function");
assert(typeof paginateListFleets === "function");
assert(typeof paginateListJobMembers === "function");
assert(typeof paginateListJobParameterDefinitions === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListLicenseEndpoints === "function");
assert(typeof paginateListLimits === "function");
assert(typeof paginateListMeteredProducts === "function");
assert(typeof paginateListMonitors === "function");
assert(typeof paginateListQueueEnvironments === "function");
assert(typeof paginateListQueueFleetAssociations === "function");
assert(typeof paginateListQueueLimitAssociations === "function");
assert(typeof paginateListQueueMembers === "function");
assert(typeof paginateListQueues === "function");
assert(typeof paginateListSessionActions === "function");
assert(typeof paginateListSessions === "function");
assert(typeof paginateListSessionsForWorker === "function");
assert(typeof paginateListStepConsumers === "function");
assert(typeof paginateListStepDependencies === "function");
assert(typeof paginateListSteps === "function");
assert(typeof paginateListStorageProfiles === "function");
assert(typeof paginateListStorageProfilesForQueue === "function");
assert(typeof paginateListTasks === "function");
assert(typeof paginateListWorkers === "function");
console.log(`Deadline index test passed.`);
