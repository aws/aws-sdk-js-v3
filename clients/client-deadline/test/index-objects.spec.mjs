import {
  AcceleratorName,
  AcceleratorType,
  AccessDeniedException,
  AssociateMemberToFarmCommand,
  AssociateMemberToFleetCommand,
  AssociateMemberToJobCommand,
  AssociateMemberToQueueCommand,
  AssumeFleetRoleForReadCommand,
  AssumeFleetRoleForWorkerCommand,
  AssumeQueueRoleForReadCommand,
  AssumeQueueRoleForUserCommand,
  AssumeQueueRoleForWorkerCommand,
  AutoScalingMode,
  AutoScalingStatus,
  BatchGetJobEntityCommand,
  BudgetActionType,
  BudgetStatus,
  ComparisonOperator,
  CompletedStatus,
  ConflictException,
  ConflictExceptionReason,
  CopyJobTemplateCommand,
  CpuArchitectureType,
  CreateBudgetCommand,
  CreateFarmCommand,
  CreateFleetCommand,
  CreateJobCommand,
  CreateJobTargetTaskRunStatus,
  CreateLicenseEndpointCommand,
  CreateLimitCommand,
  CreateMonitorCommand,
  CreateQueueCommand,
  CreateQueueEnvironmentCommand,
  CreateQueueFleetAssociationCommand,
  CreateQueueLimitAssociationCommand,
  CreateStorageProfileCommand,
  CreateWorkerCommand,
  CustomerManagedFleetOperatingSystemFamily,
  Deadline,
  DeadlineClient,
  DeadlinePrincipalType,
  DeadlineServiceException,
  DefaultQueueBudgetAction,
  DeleteBudgetCommand,
  DeleteFarmCommand,
  DeleteFleetCommand,
  DeleteLicenseEndpointCommand,
  DeleteLimitCommand,
  DeleteMeteredProductCommand,
  DeleteMonitorCommand,
  DeleteQueueCommand,
  DeleteQueueEnvironmentCommand,
  DeleteQueueFleetAssociationCommand,
  DeleteQueueLimitAssociationCommand,
  DeleteStorageProfileCommand,
  DeleteWorkerCommand,
  DependencyConsumerResolutionStatus,
  DesiredWorkerStatus,
  DisassociateMemberFromFarmCommand,
  DisassociateMemberFromFleetCommand,
  DisassociateMemberFromJobCommand,
  DisassociateMemberFromQueueCommand,
  Ec2MarketType,
  EnvironmentTemplateType,
  FileSystemLocationType,
  FleetStatus,
  GetBudgetCommand,
  GetFarmCommand,
  GetFleetCommand,
  GetJobCommand,
  GetLicenseEndpointCommand,
  GetLimitCommand,
  GetMonitorCommand,
  GetQueueCommand,
  GetQueueEnvironmentCommand,
  GetQueueFleetAssociationCommand,
  GetQueueLimitAssociationCommand,
  GetSessionActionCommand,
  GetSessionCommand,
  GetSessionsStatisticsAggregationCommand,
  GetStepCommand,
  GetStorageProfileCommand,
  GetStorageProfileForQueueCommand,
  GetTaskCommand,
  GetWorkerCommand,
  InternalServerErrorException,
  JobAttachmentsFileSystem,
  JobEntityErrorCode,
  JobLifecycleStatus,
  JobTargetTaskRunStatus,
  JobTemplateType,
  LicenseEndpointStatus,
  ListAvailableMeteredProductsCommand,
  ListBudgetsCommand,
  ListFarmMembersCommand,
  ListFarmsCommand,
  ListFleetMembersCommand,
  ListFleetsCommand,
  ListJobMembersCommand,
  ListJobParameterDefinitionsCommand,
  ListJobsCommand,
  ListLicenseEndpointsCommand,
  ListLimitsCommand,
  ListMeteredProductsCommand,
  ListMonitorsCommand,
  ListQueueEnvironmentsCommand,
  ListQueueFleetAssociationsCommand,
  ListQueueLimitAssociationsCommand,
  ListQueueMembersCommand,
  ListQueuesCommand,
  ListSessionActionsCommand,
  ListSessionsCommand,
  ListSessionsForWorkerCommand,
  ListStepConsumersCommand,
  ListStepDependenciesCommand,
  ListStepsCommand,
  ListStorageProfilesCommand,
  ListStorageProfilesForQueueCommand,
  ListTagsForResourceCommand,
  ListTasksCommand,
  ListWorkersCommand,
  LogicalOperator,
  MembershipLevel,
  PathFormat,
  Period,
  PutMeteredProductCommand,
  QueueBlockedReason,
  QueueFleetAssociationStatus,
  QueueLimitAssociationStatus,
  QueueStatus,
  ResourceNotFoundException,
  RunAs,
  SearchJobsCommand,
  SearchStepsCommand,
  SearchTasksCommand,
  SearchTermMatchingType,
  SearchWorkersCommand,
  ServiceManagedFleetOperatingSystemFamily,
  ServiceQuotaExceededException,
  ServiceQuotaExceededExceptionReason,
  SessionActionStatus,
  SessionLifecycleStatus,
  SessionLifecycleTargetStatus,
  SessionsStatisticsAggregationStatus,
  SortOrder,
  StartSessionsStatisticsAggregationCommand,
  StepLifecycleStatus,
  StepParameterType,
  StepTargetTaskRunStatus,
  StorageProfileOperatingSystemFamily,
  TagPropagationMode,
  TagResourceCommand,
  TaskRunStatus,
  TaskTargetRunStatus,
  ThrottlingException,
  UntagResourceCommand,
  UpdateBudgetCommand,
  UpdateFarmCommand,
  UpdateFleetCommand,
  UpdateJobCommand,
  UpdateJobLifecycleStatus,
  UpdateLimitCommand,
  UpdateMonitorCommand,
  UpdateQueueCommand,
  UpdateQueueEnvironmentCommand,
  UpdateQueueFleetAssociationCommand,
  UpdateQueueFleetAssociationStatus,
  UpdateQueueLimitAssociationCommand,
  UpdateQueueLimitAssociationStatus,
  UpdateSessionCommand,
  UpdateStepCommand,
  UpdateStorageProfileCommand,
  UpdateTaskCommand,
  UpdateWorkerCommand,
  UpdateWorkerScheduleCommand,
  UpdatedWorkerStatus,
  UsageGroupByField,
  UsageStatistic,
  UsageType,
  ValidationException,
  ValidationExceptionReason,
  WorkerStatus,
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
assert(typeof AssociateMemberToFleetCommand === "function");
assert(typeof AssociateMemberToJobCommand === "function");
assert(typeof AssociateMemberToQueueCommand === "function");
assert(typeof AssumeFleetRoleForReadCommand === "function");
assert(typeof AssumeFleetRoleForWorkerCommand === "function");
assert(typeof AssumeQueueRoleForReadCommand === "function");
assert(typeof AssumeQueueRoleForUserCommand === "function");
assert(typeof AssumeQueueRoleForWorkerCommand === "function");
assert(typeof BatchGetJobEntityCommand === "function");
assert(typeof CopyJobTemplateCommand === "function");
assert(typeof CreateBudgetCommand === "function");
assert(typeof CreateFarmCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateLicenseEndpointCommand === "function");
assert(typeof CreateLimitCommand === "function");
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateQueueCommand === "function");
assert(typeof CreateQueueEnvironmentCommand === "function");
assert(typeof CreateQueueFleetAssociationCommand === "function");
assert(typeof CreateQueueLimitAssociationCommand === "function");
assert(typeof CreateStorageProfileCommand === "function");
assert(typeof CreateWorkerCommand === "function");
assert(typeof DeleteBudgetCommand === "function");
assert(typeof DeleteFarmCommand === "function");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteLicenseEndpointCommand === "function");
assert(typeof DeleteLimitCommand === "function");
assert(typeof DeleteMeteredProductCommand === "function");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteQueueCommand === "function");
assert(typeof DeleteQueueEnvironmentCommand === "function");
assert(typeof DeleteQueueFleetAssociationCommand === "function");
assert(typeof DeleteQueueLimitAssociationCommand === "function");
assert(typeof DeleteStorageProfileCommand === "function");
assert(typeof DeleteWorkerCommand === "function");
assert(typeof DisassociateMemberFromFarmCommand === "function");
assert(typeof DisassociateMemberFromFleetCommand === "function");
assert(typeof DisassociateMemberFromJobCommand === "function");
assert(typeof DisassociateMemberFromQueueCommand === "function");
assert(typeof GetBudgetCommand === "function");
assert(typeof GetFarmCommand === "function");
assert(typeof GetFleetCommand === "function");
assert(typeof GetJobCommand === "function");
assert(typeof GetLicenseEndpointCommand === "function");
assert(typeof GetLimitCommand === "function");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetQueueCommand === "function");
assert(typeof GetQueueEnvironmentCommand === "function");
assert(typeof GetQueueFleetAssociationCommand === "function");
assert(typeof GetQueueLimitAssociationCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSessionActionCommand === "function");
assert(typeof GetSessionsStatisticsAggregationCommand === "function");
assert(typeof GetStepCommand === "function");
assert(typeof GetStorageProfileCommand === "function");
assert(typeof GetStorageProfileForQueueCommand === "function");
assert(typeof GetTaskCommand === "function");
assert(typeof GetWorkerCommand === "function");
assert(typeof ListAvailableMeteredProductsCommand === "function");
assert(typeof ListBudgetsCommand === "function");
assert(typeof ListFarmMembersCommand === "function");
assert(typeof ListFarmsCommand === "function");
assert(typeof ListFleetMembersCommand === "function");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListJobMembersCommand === "function");
assert(typeof ListJobParameterDefinitionsCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListLicenseEndpointsCommand === "function");
assert(typeof ListLimitsCommand === "function");
assert(typeof ListMeteredProductsCommand === "function");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListQueueEnvironmentsCommand === "function");
assert(typeof ListQueueFleetAssociationsCommand === "function");
assert(typeof ListQueueLimitAssociationsCommand === "function");
assert(typeof ListQueueMembersCommand === "function");
assert(typeof ListQueuesCommand === "function");
assert(typeof ListSessionActionsCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessionsForWorkerCommand === "function");
assert(typeof ListStepConsumersCommand === "function");
assert(typeof ListStepDependenciesCommand === "function");
assert(typeof ListStepsCommand === "function");
assert(typeof ListStorageProfilesCommand === "function");
assert(typeof ListStorageProfilesForQueueCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTasksCommand === "function");
assert(typeof ListWorkersCommand === "function");
assert(typeof PutMeteredProductCommand === "function");
assert(typeof SearchJobsCommand === "function");
assert(typeof SearchStepsCommand === "function");
assert(typeof SearchTasksCommand === "function");
assert(typeof SearchWorkersCommand === "function");
assert(typeof StartSessionsStatisticsAggregationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBudgetCommand === "function");
assert(typeof UpdateFarmCommand === "function");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateJobCommand === "function");
assert(typeof UpdateLimitCommand === "function");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateQueueCommand === "function");
assert(typeof UpdateQueueEnvironmentCommand === "function");
assert(typeof UpdateQueueFleetAssociationCommand === "function");
assert(typeof UpdateQueueLimitAssociationCommand === "function");
assert(typeof UpdateSessionCommand === "function");
assert(typeof UpdateStepCommand === "function");
assert(typeof UpdateStorageProfileCommand === "function");
assert(typeof UpdateTaskCommand === "function");
assert(typeof UpdateWorkerCommand === "function");
assert(typeof UpdateWorkerScheduleCommand === "function");
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
assert(ConflictException.prototype instanceof DeadlineServiceException);
assert(InternalServerErrorException.prototype instanceof DeadlineServiceException);
assert(ResourceNotFoundException.prototype instanceof DeadlineServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DeadlineServiceException);
assert(ThrottlingException.prototype instanceof DeadlineServiceException);
assert(ValidationException.prototype instanceof DeadlineServiceException);
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
