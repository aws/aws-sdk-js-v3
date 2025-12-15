import {
  AccessDeniedException,
  AccessDeniedException$,
  AlternateKey$,
  ApplicationDeploymentLifecycle,
  ApplicationLifecycle,
  ApplicationSummary$,
  ApplicationVersionLifecycle,
  ApplicationVersionSummary$,
  BatchJobDefinition$,
  BatchJobExecutionStatus,
  BatchJobExecutionSummary$,
  BatchJobIdentifier$,
  BatchJobType,
  CancelBatchJobExecution$,
  CancelBatchJobExecutionCommand,
  CancelBatchJobExecutionRequest$,
  CancelBatchJobExecutionResponse$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateDataSetExportTask$,
  CreateDataSetExportTaskCommand,
  CreateDataSetExportTaskRequest$,
  CreateDataSetExportTaskResponse$,
  CreateDataSetImportTask$,
  CreateDataSetImportTaskCommand,
  CreateDataSetImportTaskRequest$,
  CreateDataSetImportTaskResponse$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDeploymentResponse$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  DataSet$,
  DataSetExportConfig$,
  DataSetExportItem$,
  DataSetExportSummary$,
  DataSetExportTask$,
  DataSetImportConfig$,
  DataSetImportItem$,
  DataSetImportSummary$,
  DataSetImportTask$,
  DataSetSummary$,
  DataSetTaskLifecycle,
  DatasetDetailOrgAttributes$,
  DatasetOrgAttributes$,
  Definition$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationFromEnvironment$,
  DeleteApplicationFromEnvironmentCommand,
  DeleteApplicationFromEnvironmentRequest$,
  DeleteApplicationFromEnvironmentResponse$,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResponse$,
  DeployedVersionSummary$,
  DeploymentLifecycle,
  DeploymentSummary$,
  EfsStorageConfiguration$,
  EngineType,
  EngineVersionsSummary$,
  EnvironmentLifecycle,
  EnvironmentSummary$,
  ExecutionTimeoutException,
  ExecutionTimeoutException$,
  ExternalLocation$,
  FileBatchJobDefinition$,
  FileBatchJobIdentifier$,
  FsxStorageConfiguration$,
  GdgAttributes$,
  GdgDetailAttributes$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetApplicationVersion$,
  GetApplicationVersionCommand,
  GetApplicationVersionRequest$,
  GetApplicationVersionResponse$,
  GetBatchJobExecution$,
  GetBatchJobExecutionCommand,
  GetBatchJobExecutionRequest$,
  GetBatchJobExecutionResponse$,
  GetDataSetDetails$,
  GetDataSetDetailsCommand,
  GetDataSetDetailsRequest$,
  GetDataSetDetailsResponse$,
  GetDataSetExportTask$,
  GetDataSetExportTaskCommand,
  GetDataSetExportTaskRequest$,
  GetDataSetExportTaskResponse$,
  GetDataSetImportTask$,
  GetDataSetImportTaskCommand,
  GetDataSetImportTaskRequest$,
  GetDataSetImportTaskResponse$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentRequest$,
  GetDeploymentResponse$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  GetSignedBluinsightsUrl$,
  GetSignedBluinsightsUrlCommand,
  GetSignedBluinsightsUrlResponse$,
  HighAvailabilityConfig$,
  InternalServerException,
  InternalServerException$,
  JobIdentifier$,
  JobStep$,
  JobStepRestartMarker$,
  ListApplicationVersions$,
  ListApplicationVersionsCommand,
  ListApplicationVersionsRequest$,
  ListApplicationVersionsResponse$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListBatchJobDefinitions$,
  ListBatchJobDefinitionsCommand,
  ListBatchJobDefinitionsRequest$,
  ListBatchJobDefinitionsResponse$,
  ListBatchJobExecutions$,
  ListBatchJobExecutionsCommand,
  ListBatchJobExecutionsRequest$,
  ListBatchJobExecutionsResponse$,
  ListBatchJobRestartPoints$,
  ListBatchJobRestartPointsCommand,
  ListBatchJobRestartPointsRequest$,
  ListBatchJobRestartPointsResponse$,
  ListDataSetExportHistory$,
  ListDataSetExportHistoryCommand,
  ListDataSetExportHistoryRequest$,
  ListDataSetExportHistoryResponse$,
  ListDataSetImportHistory$,
  ListDataSetImportHistoryCommand,
  ListDataSetImportHistoryRequest$,
  ListDataSetImportHistoryResponse$,
  ListDataSets$,
  ListDataSetsCommand,
  ListDataSetsRequest$,
  ListDataSetsResponse$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsRequest$,
  ListDeploymentsResponse$,
  ListEngineVersions$,
  ListEngineVersionsCommand,
  ListEngineVersionsRequest$,
  ListEngineVersionsResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogGroupSummary$,
  M2,
  M2Client,
  M2ServiceException,
  MaintenanceSchedule$,
  NetworkType,
  PendingMaintenance$,
  PoAttributes$,
  PoDetailAttributes$,
  PrimaryKey$,
  PsAttributes$,
  PsDetailAttributes$,
  RecordLength$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestartBatchJobIdentifier$,
  S3BatchJobIdentifier$,
  ScriptBatchJobDefinition$,
  ScriptBatchJobIdentifier$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartApplication$,
  StartApplicationCommand,
  StartApplicationRequest$,
  StartApplicationResponse$,
  StartBatchJob$,
  StartBatchJobCommand,
  StartBatchJobRequest$,
  StartBatchJobResponse$,
  StopApplication$,
  StopApplicationCommand,
  StopApplicationRequest$,
  StopApplicationResponse$,
  StorageConfiguration$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentRequest$,
  UpdateEnvironmentResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VsamAttributes$,
  VsamDetailAttributes$,
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
assert(typeof CancelBatchJobExecution$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateDataSetExportTaskCommand === "function");
assert(typeof CreateDataSetExportTask$ === "object");
assert(typeof CreateDataSetImportTaskCommand === "function");
assert(typeof CreateDataSetImportTask$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteApplicationFromEnvironmentCommand === "function");
assert(typeof DeleteApplicationFromEnvironment$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetApplicationVersionCommand === "function");
assert(typeof GetApplicationVersion$ === "object");
assert(typeof GetBatchJobExecutionCommand === "function");
assert(typeof GetBatchJobExecution$ === "object");
assert(typeof GetDataSetDetailsCommand === "function");
assert(typeof GetDataSetDetails$ === "object");
assert(typeof GetDataSetExportTaskCommand === "function");
assert(typeof GetDataSetExportTask$ === "object");
assert(typeof GetDataSetImportTaskCommand === "function");
assert(typeof GetDataSetImportTask$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetSignedBluinsightsUrlCommand === "function");
assert(typeof GetSignedBluinsightsUrl$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListApplicationVersionsCommand === "function");
assert(typeof ListApplicationVersions$ === "object");
assert(typeof ListBatchJobDefinitionsCommand === "function");
assert(typeof ListBatchJobDefinitions$ === "object");
assert(typeof ListBatchJobExecutionsCommand === "function");
assert(typeof ListBatchJobExecutions$ === "object");
assert(typeof ListBatchJobRestartPointsCommand === "function");
assert(typeof ListBatchJobRestartPoints$ === "object");
assert(typeof ListDataSetExportHistoryCommand === "function");
assert(typeof ListDataSetExportHistory$ === "object");
assert(typeof ListDataSetImportHistoryCommand === "function");
assert(typeof ListDataSetImportHistory$ === "object");
assert(typeof ListDataSetsCommand === "function");
assert(typeof ListDataSets$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListEngineVersionsCommand === "function");
assert(typeof ListEngineVersions$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartApplicationCommand === "function");
assert(typeof StartApplication$ === "object");
assert(typeof StartBatchJobCommand === "function");
assert(typeof StartBatchJob$ === "object");
assert(typeof StopApplicationCommand === "function");
assert(typeof StopApplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
// structural schemas
assert(typeof AlternateKey$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof ApplicationVersionSummary$ === "object");
assert(typeof BatchJobDefinition$ === "object");
assert(typeof BatchJobExecutionSummary$ === "object");
assert(typeof BatchJobIdentifier$ === "object");
assert(typeof CancelBatchJobExecutionRequest$ === "object");
assert(typeof CancelBatchJobExecutionResponse$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateDataSetExportTaskRequest$ === "object");
assert(typeof CreateDataSetExportTaskResponse$ === "object");
assert(typeof CreateDataSetImportTaskRequest$ === "object");
assert(typeof CreateDataSetImportTaskResponse$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDeploymentResponse$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof DataSet$ === "object");
assert(typeof DatasetDetailOrgAttributes$ === "object");
assert(typeof DataSetExportConfig$ === "object");
assert(typeof DataSetExportItem$ === "object");
assert(typeof DataSetExportSummary$ === "object");
assert(typeof DataSetExportTask$ === "object");
assert(typeof DataSetImportConfig$ === "object");
assert(typeof DataSetImportItem$ === "object");
assert(typeof DataSetImportSummary$ === "object");
assert(typeof DataSetImportTask$ === "object");
assert(typeof DatasetOrgAttributes$ === "object");
assert(typeof DataSetSummary$ === "object");
assert(typeof Definition$ === "object");
assert(typeof DeleteApplicationFromEnvironmentRequest$ === "object");
assert(typeof DeleteApplicationFromEnvironmentResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DeployedVersionSummary$ === "object");
assert(typeof DeploymentSummary$ === "object");
assert(typeof EfsStorageConfiguration$ === "object");
assert(typeof EngineVersionsSummary$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof ExternalLocation$ === "object");
assert(typeof FileBatchJobDefinition$ === "object");
assert(typeof FileBatchJobIdentifier$ === "object");
assert(typeof FsxStorageConfiguration$ === "object");
assert(typeof GdgAttributes$ === "object");
assert(typeof GdgDetailAttributes$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetApplicationVersionRequest$ === "object");
assert(typeof GetApplicationVersionResponse$ === "object");
assert(typeof GetBatchJobExecutionRequest$ === "object");
assert(typeof GetBatchJobExecutionResponse$ === "object");
assert(typeof GetDataSetDetailsRequest$ === "object");
assert(typeof GetDataSetDetailsResponse$ === "object");
assert(typeof GetDataSetExportTaskRequest$ === "object");
assert(typeof GetDataSetExportTaskResponse$ === "object");
assert(typeof GetDataSetImportTaskRequest$ === "object");
assert(typeof GetDataSetImportTaskResponse$ === "object");
assert(typeof GetDeploymentRequest$ === "object");
assert(typeof GetDeploymentResponse$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof GetSignedBluinsightsUrlResponse$ === "object");
assert(typeof HighAvailabilityConfig$ === "object");
assert(typeof JobIdentifier$ === "object");
assert(typeof JobStep$ === "object");
assert(typeof JobStepRestartMarker$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListApplicationVersionsRequest$ === "object");
assert(typeof ListApplicationVersionsResponse$ === "object");
assert(typeof ListBatchJobDefinitionsRequest$ === "object");
assert(typeof ListBatchJobDefinitionsResponse$ === "object");
assert(typeof ListBatchJobExecutionsRequest$ === "object");
assert(typeof ListBatchJobExecutionsResponse$ === "object");
assert(typeof ListBatchJobRestartPointsRequest$ === "object");
assert(typeof ListBatchJobRestartPointsResponse$ === "object");
assert(typeof ListDataSetExportHistoryRequest$ === "object");
assert(typeof ListDataSetExportHistoryResponse$ === "object");
assert(typeof ListDataSetImportHistoryRequest$ === "object");
assert(typeof ListDataSetImportHistoryResponse$ === "object");
assert(typeof ListDataSetsRequest$ === "object");
assert(typeof ListDataSetsResponse$ === "object");
assert(typeof ListDeploymentsRequest$ === "object");
assert(typeof ListDeploymentsResponse$ === "object");
assert(typeof ListEngineVersionsRequest$ === "object");
assert(typeof ListEngineVersionsResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogGroupSummary$ === "object");
assert(typeof MaintenanceSchedule$ === "object");
assert(typeof PendingMaintenance$ === "object");
assert(typeof PoAttributes$ === "object");
assert(typeof PoDetailAttributes$ === "object");
assert(typeof PrimaryKey$ === "object");
assert(typeof PsAttributes$ === "object");
assert(typeof PsDetailAttributes$ === "object");
assert(typeof RecordLength$ === "object");
assert(typeof RestartBatchJobIdentifier$ === "object");
assert(typeof S3BatchJobIdentifier$ === "object");
assert(typeof ScriptBatchJobDefinition$ === "object");
assert(typeof ScriptBatchJobIdentifier$ === "object");
assert(typeof StartApplicationRequest$ === "object");
assert(typeof StartApplicationResponse$ === "object");
assert(typeof StartBatchJobRequest$ === "object");
assert(typeof StartBatchJobResponse$ === "object");
assert(typeof StopApplicationRequest$ === "object");
assert(typeof StopApplicationResponse$ === "object");
assert(typeof StorageConfiguration$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateEnvironmentRequest$ === "object");
assert(typeof UpdateEnvironmentResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VsamAttributes$ === "object");
assert(typeof VsamDetailAttributes$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof M2ServiceException);
assert(typeof ConflictException$ === "object");
assert(ExecutionTimeoutException.prototype instanceof M2ServiceException);
assert(typeof ExecutionTimeoutException$ === "object");
assert(InternalServerException.prototype instanceof M2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof M2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof M2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof M2ServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof M2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof M2ServiceException);
assert(typeof ValidationException$ === "object");
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
