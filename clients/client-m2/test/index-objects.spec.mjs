import {
  AccessDeniedException,
  ApplicationDeploymentLifecycle,
  ApplicationLifecycle,
  ApplicationVersionLifecycle,
  BatchJobExecutionStatus,
  BatchJobType,
  CancelBatchJobExecutionCommand,
  ConflictException,
  CreateApplicationCommand,
  CreateDataSetExportTaskCommand,
  CreateDataSetImportTaskCommand,
  CreateDeploymentCommand,
  CreateEnvironmentCommand,
  DataSetTaskLifecycle,
  DeleteApplicationCommand,
  DeleteApplicationFromEnvironmentCommand,
  DeleteEnvironmentCommand,
  DeploymentLifecycle,
  EngineType,
  EnvironmentLifecycle,
  ExecutionTimeoutException,
  GetApplicationCommand,
  GetApplicationVersionCommand,
  GetBatchJobExecutionCommand,
  GetDataSetDetailsCommand,
  GetDataSetExportTaskCommand,
  GetDataSetImportTaskCommand,
  GetDeploymentCommand,
  GetEnvironmentCommand,
  GetSignedBluinsightsUrlCommand,
  InternalServerException,
  ListApplicationVersionsCommand,
  ListApplicationsCommand,
  ListBatchJobDefinitionsCommand,
  ListBatchJobExecutionsCommand,
  ListBatchJobRestartPointsCommand,
  ListDataSetExportHistoryCommand,
  ListDataSetImportHistoryCommand,
  ListDataSetsCommand,
  ListDeploymentsCommand,
  ListEngineVersionsCommand,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  M2,
  M2Client,
  M2ServiceException,
  NetworkType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  StartApplicationCommand,
  StartBatchJobCommand,
  StopApplicationCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateEnvironmentCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListApplicationVersions,
  paginateListApplications,
  paginateListBatchJobDefinitions,
  paginateListBatchJobExecutions,
  paginateListDataSetExportHistory,
  paginateListDataSetImportHistory,
  paginateListDataSets,
  paginateListDeployments,
  paginateListEngineVersions,
  paginateListEnvironments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof M2Client === "function");
assert(typeof M2 === "function");
// commands
assert(typeof CancelBatchJobExecutionCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateDataSetExportTaskCommand === "function");
assert(typeof CreateDataSetImportTaskCommand === "function");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplicationFromEnvironmentCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplicationVersionCommand === "function");
assert(typeof GetBatchJobExecutionCommand === "function");
assert(typeof GetDataSetDetailsCommand === "function");
assert(typeof GetDataSetExportTaskCommand === "function");
assert(typeof GetDataSetImportTaskCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetSignedBluinsightsUrlCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplicationVersionsCommand === "function");
assert(typeof ListBatchJobDefinitionsCommand === "function");
assert(typeof ListBatchJobExecutionsCommand === "function");
assert(typeof ListBatchJobRestartPointsCommand === "function");
assert(typeof ListDataSetExportHistoryCommand === "function");
assert(typeof ListDataSetImportHistoryCommand === "function");
assert(typeof ListDataSetsCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListEngineVersionsCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartBatchJobCommand === "function");
assert(typeof StopApplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
// enums
assert(typeof ApplicationDeploymentLifecycle === "object");
assert(typeof ApplicationLifecycle === "object");
assert(typeof ApplicationVersionLifecycle === "object");
assert(typeof BatchJobExecutionStatus === "object");
assert(typeof BatchJobType === "object");
assert(typeof DataSetTaskLifecycle === "object");
assert(typeof DeploymentLifecycle === "object");
assert(typeof EngineType === "object");
assert(typeof EnvironmentLifecycle === "object");
assert(typeof NetworkType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof M2ServiceException);
assert(ConflictException.prototype instanceof M2ServiceException);
assert(ExecutionTimeoutException.prototype instanceof M2ServiceException);
assert(InternalServerException.prototype instanceof M2ServiceException);
assert(ResourceNotFoundException.prototype instanceof M2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof M2ServiceException);
assert(ServiceUnavailableException.prototype instanceof M2ServiceException);
assert(ThrottlingException.prototype instanceof M2ServiceException);
assert(ValidationException.prototype instanceof M2ServiceException);
assert(M2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationVersions === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListBatchJobDefinitions === "function");
assert(typeof paginateListBatchJobExecutions === "function");
assert(typeof paginateListDataSetExportHistory === "function");
assert(typeof paginateListDataSetImportHistory === "function");
assert(typeof paginateListDataSets === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListEngineVersions === "function");
assert(typeof paginateListEnvironments === "function");
console.log(`M2 index test passed.`);
