import {
  Application$,
  ApplicationState,
  ApplicationSummary$,
  Architecture,
  AutoStartConfig$,
  AutoStopConfig$,
  CancelJobRun$,
  CancelJobRunCommand,
  CancelJobRunRequest$,
  CancelJobRunResponse$,
  CloudWatchLoggingConfiguration$,
  Configuration$,
  ConfigurationOverrides$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  EMRServerless,
  EMRServerlessClient,
  EMRServerlessServiceException,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetDashboardForJobRun$,
  GetDashboardForJobRunCommand,
  GetDashboardForJobRunRequest$,
  GetDashboardForJobRunResponse$,
  GetJobRun$,
  GetJobRunCommand,
  GetJobRunRequest$,
  GetJobRunResponse$,
  Hive$,
  IdentityCenterConfiguration$,
  IdentityCenterConfigurationInput$,
  ImageConfiguration$,
  ImageConfigurationInput$,
  InitialCapacityConfig$,
  InteractiveConfiguration$,
  InternalServerException,
  InternalServerException$,
  JobDriver$,
  JobLevelCostAllocationConfiguration$,
  JobRun$,
  JobRunAttemptSummary$,
  JobRunExecutionIamPolicy$,
  JobRunMode,
  JobRunState,
  JobRunSummary$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListJobRunAttempts$,
  ListJobRunAttemptsCommand,
  ListJobRunAttemptsRequest$,
  ListJobRunAttemptsResponse$,
  ListJobRuns$,
  ListJobRunsCommand,
  ListJobRunsRequest$,
  ListJobRunsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedPersistenceMonitoringConfiguration$,
  MaximumAllowedResources$,
  MonitoringConfiguration$,
  NetworkConfiguration$,
  paginateListApplications,
  paginateListJobRunAttempts,
  paginateListJobRuns,
  PrometheusMonitoringConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUtilization$,
  RetryPolicy$,
  S3MonitoringConfiguration$,
  SchedulerConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SparkSubmit$,
  StartApplication$,
  StartApplicationCommand,
  StartApplicationRequest$,
  StartApplicationResponse$,
  StartJobRun$,
  StartJobRunCommand,
  StartJobRunRequest$,
  StartJobRunResponse$,
  StopApplication$,
  StopApplicationCommand,
  StopApplicationRequest$,
  StopApplicationResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TotalResourceUtilization$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  ValidationException,
  ValidationException$,
  WorkerResourceConfig$,
  WorkerTypeSpecification$,
  WorkerTypeSpecificationInput$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EMRServerlessClient === "function");
assert(typeof EMRServerless === "function");
// commands
assert(typeof CancelJobRunCommand === "function");
assert(typeof CancelJobRun$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetDashboardForJobRunCommand === "function");
assert(typeof GetDashboardForJobRun$ === "object");
assert(typeof GetJobRunCommand === "function");
assert(typeof GetJobRun$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListJobRunAttemptsCommand === "function");
assert(typeof ListJobRunAttempts$ === "object");
assert(typeof ListJobRunsCommand === "function");
assert(typeof ListJobRuns$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartApplication$ === "object");
assert(typeof StartJobRunCommand === "function");
assert(typeof StartJobRun$ === "object");
assert(typeof StopApplicationCommand === "function");
assert(typeof StopApplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
// structural schemas
assert(typeof Application$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof AutoStartConfig$ === "object");
assert(typeof AutoStopConfig$ === "object");
assert(typeof CancelJobRunRequest$ === "object");
assert(typeof CancelJobRunResponse$ === "object");
assert(typeof CloudWatchLoggingConfiguration$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof ConfigurationOverrides$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetDashboardForJobRunRequest$ === "object");
assert(typeof GetDashboardForJobRunResponse$ === "object");
assert(typeof GetJobRunRequest$ === "object");
assert(typeof GetJobRunResponse$ === "object");
assert(typeof Hive$ === "object");
assert(typeof IdentityCenterConfiguration$ === "object");
assert(typeof IdentityCenterConfigurationInput$ === "object");
assert(typeof ImageConfiguration$ === "object");
assert(typeof ImageConfigurationInput$ === "object");
assert(typeof InitialCapacityConfig$ === "object");
assert(typeof InteractiveConfiguration$ === "object");
assert(typeof JobDriver$ === "object");
assert(typeof JobLevelCostAllocationConfiguration$ === "object");
assert(typeof JobRun$ === "object");
assert(typeof JobRunAttemptSummary$ === "object");
assert(typeof JobRunExecutionIamPolicy$ === "object");
assert(typeof JobRunSummary$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListJobRunAttemptsRequest$ === "object");
assert(typeof ListJobRunAttemptsResponse$ === "object");
assert(typeof ListJobRunsRequest$ === "object");
assert(typeof ListJobRunsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedPersistenceMonitoringConfiguration$ === "object");
assert(typeof MaximumAllowedResources$ === "object");
assert(typeof MonitoringConfiguration$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof PrometheusMonitoringConfiguration$ === "object");
assert(typeof ResourceUtilization$ === "object");
assert(typeof RetryPolicy$ === "object");
assert(typeof S3MonitoringConfiguration$ === "object");
assert(typeof SchedulerConfiguration$ === "object");
assert(typeof SparkSubmit$ === "object");
assert(typeof StartApplicationRequest$ === "object");
assert(typeof StartApplicationResponse$ === "object");
assert(typeof StartJobRunRequest$ === "object");
assert(typeof StartJobRunResponse$ === "object");
assert(typeof StopApplicationRequest$ === "object");
assert(typeof StopApplicationResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TotalResourceUtilization$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof WorkerResourceConfig$ === "object");
assert(typeof WorkerTypeSpecification$ === "object");
assert(typeof WorkerTypeSpecificationInput$ === "object");
// enums
assert(typeof ApplicationState === "object");
assert(typeof Architecture === "object");
assert(typeof JobRunMode === "object");
assert(typeof JobRunState === "object");
// errors
assert(ConflictException.prototype instanceof EMRServerlessServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof EMRServerlessServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EMRServerlessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof EMRServerlessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof EMRServerlessServiceException);
assert(typeof ValidationException$ === "object");
assert(EMRServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListJobRunAttempts === "function");
assert(typeof paginateListJobRuns === "function");
console.log(`EMRServerless index test passed.`);
