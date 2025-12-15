import {
  AgentListEntry$,
  AgentStatus,
  Atime,
  AzureAccessTier,
  AzureBlobAuthenticationType,
  AzureBlobSasConfiguration$,
  AzureBlobType,
  CancelTaskExecution$,
  CancelTaskExecutionCommand,
  CancelTaskExecutionRequest$,
  CancelTaskExecutionResponse$,
  CmkSecretConfig$,
  CreateAgent$,
  CreateAgentCommand,
  CreateAgentRequest$,
  CreateAgentResponse$,
  CreateLocationAzureBlob$,
  CreateLocationAzureBlobCommand,
  CreateLocationAzureBlobRequest$,
  CreateLocationAzureBlobResponse$,
  CreateLocationEfs$,
  CreateLocationEfsCommand,
  CreateLocationEfsRequest$,
  CreateLocationEfsResponse$,
  CreateLocationFsxLustre$,
  CreateLocationFsxLustreCommand,
  CreateLocationFsxLustreRequest$,
  CreateLocationFsxLustreResponse$,
  CreateLocationFsxOntap$,
  CreateLocationFsxOntapCommand,
  CreateLocationFsxOntapRequest$,
  CreateLocationFsxOntapResponse$,
  CreateLocationFsxOpenZfs$,
  CreateLocationFsxOpenZfsCommand,
  CreateLocationFsxOpenZfsRequest$,
  CreateLocationFsxOpenZfsResponse$,
  CreateLocationFsxWindows$,
  CreateLocationFsxWindowsCommand,
  CreateLocationFsxWindowsRequest$,
  CreateLocationFsxWindowsResponse$,
  CreateLocationHdfs$,
  CreateLocationHdfsCommand,
  CreateLocationHdfsRequest$,
  CreateLocationHdfsResponse$,
  CreateLocationNfs$,
  CreateLocationNfsCommand,
  CreateLocationNfsRequest$,
  CreateLocationNfsResponse$,
  CreateLocationObjectStorage$,
  CreateLocationObjectStorageCommand,
  CreateLocationObjectStorageRequest$,
  CreateLocationObjectStorageResponse$,
  CreateLocationS3$,
  CreateLocationS3Command,
  CreateLocationS3Request$,
  CreateLocationS3Response$,
  CreateLocationSmb$,
  CreateLocationSmbCommand,
  CreateLocationSmbRequest$,
  CreateLocationSmbResponse$,
  CreateTask$,
  CreateTaskCommand,
  CreateTaskRequest$,
  CreateTaskResponse$,
  CustomSecretConfig$,
  DataSync,
  DataSyncClient,
  DataSyncServiceException,
  DeleteAgent$,
  DeleteAgentCommand,
  DeleteAgentRequest$,
  DeleteAgentResponse$,
  DeleteLocation$,
  DeleteLocationCommand,
  DeleteLocationRequest$,
  DeleteLocationResponse$,
  DeleteTask$,
  DeleteTaskCommand,
  DeleteTaskRequest$,
  DeleteTaskResponse$,
  DescribeAgent$,
  DescribeAgentCommand,
  DescribeAgentRequest$,
  DescribeAgentResponse$,
  DescribeLocationAzureBlob$,
  DescribeLocationAzureBlobCommand,
  DescribeLocationAzureBlobRequest$,
  DescribeLocationAzureBlobResponse$,
  DescribeLocationEfs$,
  DescribeLocationEfsCommand,
  DescribeLocationEfsRequest$,
  DescribeLocationEfsResponse$,
  DescribeLocationFsxLustre$,
  DescribeLocationFsxLustreCommand,
  DescribeLocationFsxLustreRequest$,
  DescribeLocationFsxLustreResponse$,
  DescribeLocationFsxOntap$,
  DescribeLocationFsxOntapCommand,
  DescribeLocationFsxOntapRequest$,
  DescribeLocationFsxOntapResponse$,
  DescribeLocationFsxOpenZfs$,
  DescribeLocationFsxOpenZfsCommand,
  DescribeLocationFsxOpenZfsRequest$,
  DescribeLocationFsxOpenZfsResponse$,
  DescribeLocationFsxWindows$,
  DescribeLocationFsxWindowsCommand,
  DescribeLocationFsxWindowsRequest$,
  DescribeLocationFsxWindowsResponse$,
  DescribeLocationHdfs$,
  DescribeLocationHdfsCommand,
  DescribeLocationHdfsRequest$,
  DescribeLocationHdfsResponse$,
  DescribeLocationNfs$,
  DescribeLocationNfsCommand,
  DescribeLocationNfsRequest$,
  DescribeLocationNfsResponse$,
  DescribeLocationObjectStorage$,
  DescribeLocationObjectStorageCommand,
  DescribeLocationObjectStorageRequest$,
  DescribeLocationObjectStorageResponse$,
  DescribeLocationS3$,
  DescribeLocationS3Command,
  DescribeLocationS3Request$,
  DescribeLocationS3Response$,
  DescribeLocationSmb$,
  DescribeLocationSmbCommand,
  DescribeLocationSmbRequest$,
  DescribeLocationSmbResponse$,
  DescribeTask$,
  DescribeTaskCommand,
  DescribeTaskExecution$,
  DescribeTaskExecutionCommand,
  DescribeTaskExecutionRequest$,
  DescribeTaskExecutionResponse$,
  DescribeTaskRequest$,
  DescribeTaskResponse$,
  Ec2Config$,
  EfsInTransitEncryption,
  EndpointType,
  FilterRule$,
  FilterType,
  FsxProtocol$,
  FsxProtocolNfs$,
  FsxProtocolSmb$,
  FsxUpdateProtocol$,
  FsxUpdateProtocolSmb$,
  Gid,
  HdfsAuthenticationType,
  HdfsDataTransferProtection,
  HdfsNameNode$,
  HdfsRpcProtection,
  InternalException,
  InternalException$,
  InvalidRequestException,
  InvalidRequestException$,
  ListAgents$,
  ListAgentsCommand,
  ListAgentsRequest$,
  ListAgentsResponse$,
  ListLocations$,
  ListLocationsCommand,
  ListLocationsRequest$,
  ListLocationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTaskExecutions$,
  ListTaskExecutionsCommand,
  ListTaskExecutionsRequest$,
  ListTaskExecutionsResponse$,
  ListTasks$,
  ListTasksCommand,
  ListTasksRequest$,
  ListTasksResponse$,
  LocationFilter$,
  LocationFilterName,
  LocationListEntry$,
  LogLevel,
  ManagedSecretConfig$,
  ManifestAction,
  ManifestConfig$,
  ManifestFormat,
  Mtime,
  NfsMountOptions$,
  NfsVersion,
  ObjectStorageServerProtocol,
  ObjectTags,
  ObjectVersionIds,
  OnPremConfig$,
  Operator,
  Options$,
  OverwriteMode,
  PhaseStatus,
  Platform$,
  PosixPermissions,
  PreserveDeletedFiles,
  PreserveDevices,
  PrivateLinkConfig$,
  QopConfiguration$,
  ReportDestination$,
  ReportDestinationS3$,
  ReportLevel,
  ReportOutputType,
  ReportOverride$,
  ReportOverrides$,
  ReportResult$,
  S3Config$,
  S3ManifestConfig$,
  S3StorageClass,
  ScheduleDisabledBy,
  ScheduleStatus,
  SmbAuthenticationType,
  SmbMountOptions$,
  SmbSecurityDescriptorCopyFlags,
  SmbVersion,
  SourceManifestConfig$,
  StartTaskExecution$,
  StartTaskExecutionCommand,
  StartTaskExecutionRequest$,
  StartTaskExecutionResponse$,
  TagListEntry$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskExecutionFilesFailedDetail$,
  TaskExecutionFilesListedDetail$,
  TaskExecutionFoldersFailedDetail$,
  TaskExecutionFoldersListedDetail$,
  TaskExecutionListEntry$,
  TaskExecutionResultDetail$,
  TaskExecutionStatus,
  TaskFilter$,
  TaskFilterName,
  TaskListEntry$,
  TaskMode,
  TaskQueueing,
  TaskReportConfig$,
  TaskSchedule$,
  TaskScheduleDetails$,
  TaskStatus,
  TransferMode,
  Uid,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAgent$,
  UpdateAgentCommand,
  UpdateAgentRequest$,
  UpdateAgentResponse$,
  UpdateLocationAzureBlob$,
  UpdateLocationAzureBlobCommand,
  UpdateLocationAzureBlobRequest$,
  UpdateLocationAzureBlobResponse$,
  UpdateLocationEfs$,
  UpdateLocationEfsCommand,
  UpdateLocationEfsRequest$,
  UpdateLocationEfsResponse$,
  UpdateLocationFsxLustre$,
  UpdateLocationFsxLustreCommand,
  UpdateLocationFsxLustreRequest$,
  UpdateLocationFsxLustreResponse$,
  UpdateLocationFsxOntap$,
  UpdateLocationFsxOntapCommand,
  UpdateLocationFsxOntapRequest$,
  UpdateLocationFsxOntapResponse$,
  UpdateLocationFsxOpenZfs$,
  UpdateLocationFsxOpenZfsCommand,
  UpdateLocationFsxOpenZfsRequest$,
  UpdateLocationFsxOpenZfsResponse$,
  UpdateLocationFsxWindows$,
  UpdateLocationFsxWindowsCommand,
  UpdateLocationFsxWindowsRequest$,
  UpdateLocationFsxWindowsResponse$,
  UpdateLocationHdfs$,
  UpdateLocationHdfsCommand,
  UpdateLocationHdfsRequest$,
  UpdateLocationHdfsResponse$,
  UpdateLocationNfs$,
  UpdateLocationNfsCommand,
  UpdateLocationNfsRequest$,
  UpdateLocationNfsResponse$,
  UpdateLocationObjectStorage$,
  UpdateLocationObjectStorageCommand,
  UpdateLocationObjectStorageRequest$,
  UpdateLocationObjectStorageResponse$,
  UpdateLocationS3$,
  UpdateLocationS3Command,
  UpdateLocationS3Request$,
  UpdateLocationS3Response$,
  UpdateLocationSmb$,
  UpdateLocationSmbCommand,
  UpdateLocationSmbRequest$,
  UpdateLocationSmbResponse$,
  UpdateTask$,
  UpdateTaskCommand,
  UpdateTaskExecution$,
  UpdateTaskExecutionCommand,
  UpdateTaskExecutionRequest$,
  UpdateTaskExecutionResponse$,
  UpdateTaskRequest$,
  UpdateTaskResponse$,
  VerifyMode,
  paginateListAgents,
  paginateListLocations,
  paginateListTagsForResource,
  paginateListTaskExecutions,
  paginateListTasks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataSyncClient === "function");
assert(typeof DataSync === "function");
// commands
assert(typeof CancelTaskExecutionCommand === "function");
assert(typeof CancelTaskExecution$ === "object");
assert(typeof CreateAgentCommand === "function");
assert(typeof CreateAgent$ === "object");
assert(typeof CreateLocationAzureBlobCommand === "function");
assert(typeof CreateLocationAzureBlob$ === "object");
assert(typeof CreateLocationEfsCommand === "function");
assert(typeof CreateLocationEfs$ === "object");
assert(typeof CreateLocationFsxLustreCommand === "function");
assert(typeof CreateLocationFsxLustre$ === "object");
assert(typeof CreateLocationFsxOntapCommand === "function");
assert(typeof CreateLocationFsxOntap$ === "object");
assert(typeof CreateLocationFsxOpenZfsCommand === "function");
assert(typeof CreateLocationFsxOpenZfs$ === "object");
assert(typeof CreateLocationFsxWindowsCommand === "function");
assert(typeof CreateLocationFsxWindows$ === "object");
assert(typeof CreateLocationHdfsCommand === "function");
assert(typeof CreateLocationHdfs$ === "object");
assert(typeof CreateLocationNfsCommand === "function");
assert(typeof CreateLocationNfs$ === "object");
assert(typeof CreateLocationObjectStorageCommand === "function");
assert(typeof CreateLocationObjectStorage$ === "object");
assert(typeof CreateLocationS3Command === "function");
assert(typeof CreateLocationS3$ === "object");
assert(typeof CreateLocationSmbCommand === "function");
assert(typeof CreateLocationSmb$ === "object");
assert(typeof CreateTaskCommand === "function");
assert(typeof CreateTask$ === "object");
assert(typeof DeleteAgentCommand === "function");
assert(typeof DeleteAgent$ === "object");
assert(typeof DeleteLocationCommand === "function");
assert(typeof DeleteLocation$ === "object");
assert(typeof DeleteTaskCommand === "function");
assert(typeof DeleteTask$ === "object");
assert(typeof DescribeAgentCommand === "function");
assert(typeof DescribeAgent$ === "object");
assert(typeof DescribeLocationAzureBlobCommand === "function");
assert(typeof DescribeLocationAzureBlob$ === "object");
assert(typeof DescribeLocationEfsCommand === "function");
assert(typeof DescribeLocationEfs$ === "object");
assert(typeof DescribeLocationFsxLustreCommand === "function");
assert(typeof DescribeLocationFsxLustre$ === "object");
assert(typeof DescribeLocationFsxOntapCommand === "function");
assert(typeof DescribeLocationFsxOntap$ === "object");
assert(typeof DescribeLocationFsxOpenZfsCommand === "function");
assert(typeof DescribeLocationFsxOpenZfs$ === "object");
assert(typeof DescribeLocationFsxWindowsCommand === "function");
assert(typeof DescribeLocationFsxWindows$ === "object");
assert(typeof DescribeLocationHdfsCommand === "function");
assert(typeof DescribeLocationHdfs$ === "object");
assert(typeof DescribeLocationNfsCommand === "function");
assert(typeof DescribeLocationNfs$ === "object");
assert(typeof DescribeLocationObjectStorageCommand === "function");
assert(typeof DescribeLocationObjectStorage$ === "object");
assert(typeof DescribeLocationS3Command === "function");
assert(typeof DescribeLocationS3$ === "object");
assert(typeof DescribeLocationSmbCommand === "function");
assert(typeof DescribeLocationSmb$ === "object");
assert(typeof DescribeTaskCommand === "function");
assert(typeof DescribeTask$ === "object");
assert(typeof DescribeTaskExecutionCommand === "function");
assert(typeof DescribeTaskExecution$ === "object");
assert(typeof ListAgentsCommand === "function");
assert(typeof ListAgents$ === "object");
assert(typeof ListLocationsCommand === "function");
assert(typeof ListLocations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTaskExecutionsCommand === "function");
assert(typeof ListTaskExecutions$ === "object");
assert(typeof ListTasksCommand === "function");
assert(typeof ListTasks$ === "object");
assert(typeof StartTaskExecutionCommand === "function");
assert(typeof StartTaskExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentCommand === "function");
assert(typeof UpdateAgent$ === "object");
assert(typeof UpdateLocationAzureBlobCommand === "function");
assert(typeof UpdateLocationAzureBlob$ === "object");
assert(typeof UpdateLocationEfsCommand === "function");
assert(typeof UpdateLocationEfs$ === "object");
assert(typeof UpdateLocationFsxLustreCommand === "function");
assert(typeof UpdateLocationFsxLustre$ === "object");
assert(typeof UpdateLocationFsxOntapCommand === "function");
assert(typeof UpdateLocationFsxOntap$ === "object");
assert(typeof UpdateLocationFsxOpenZfsCommand === "function");
assert(typeof UpdateLocationFsxOpenZfs$ === "object");
assert(typeof UpdateLocationFsxWindowsCommand === "function");
assert(typeof UpdateLocationFsxWindows$ === "object");
assert(typeof UpdateLocationHdfsCommand === "function");
assert(typeof UpdateLocationHdfs$ === "object");
assert(typeof UpdateLocationNfsCommand === "function");
assert(typeof UpdateLocationNfs$ === "object");
assert(typeof UpdateLocationObjectStorageCommand === "function");
assert(typeof UpdateLocationObjectStorage$ === "object");
assert(typeof UpdateLocationS3Command === "function");
assert(typeof UpdateLocationS3$ === "object");
assert(typeof UpdateLocationSmbCommand === "function");
assert(typeof UpdateLocationSmb$ === "object");
assert(typeof UpdateTaskCommand === "function");
assert(typeof UpdateTask$ === "object");
assert(typeof UpdateTaskExecutionCommand === "function");
assert(typeof UpdateTaskExecution$ === "object");
// structural schemas
assert(typeof AgentListEntry$ === "object");
assert(typeof AzureBlobSasConfiguration$ === "object");
assert(typeof CancelTaskExecutionRequest$ === "object");
assert(typeof CancelTaskExecutionResponse$ === "object");
assert(typeof CmkSecretConfig$ === "object");
assert(typeof CreateAgentRequest$ === "object");
assert(typeof CreateAgentResponse$ === "object");
assert(typeof CreateLocationAzureBlobRequest$ === "object");
assert(typeof CreateLocationAzureBlobResponse$ === "object");
assert(typeof CreateLocationEfsRequest$ === "object");
assert(typeof CreateLocationEfsResponse$ === "object");
assert(typeof CreateLocationFsxLustreRequest$ === "object");
assert(typeof CreateLocationFsxLustreResponse$ === "object");
assert(typeof CreateLocationFsxOntapRequest$ === "object");
assert(typeof CreateLocationFsxOntapResponse$ === "object");
assert(typeof CreateLocationFsxOpenZfsRequest$ === "object");
assert(typeof CreateLocationFsxOpenZfsResponse$ === "object");
assert(typeof CreateLocationFsxWindowsRequest$ === "object");
assert(typeof CreateLocationFsxWindowsResponse$ === "object");
assert(typeof CreateLocationHdfsRequest$ === "object");
assert(typeof CreateLocationHdfsResponse$ === "object");
assert(typeof CreateLocationNfsRequest$ === "object");
assert(typeof CreateLocationNfsResponse$ === "object");
assert(typeof CreateLocationObjectStorageRequest$ === "object");
assert(typeof CreateLocationObjectStorageResponse$ === "object");
assert(typeof CreateLocationS3Request$ === "object");
assert(typeof CreateLocationS3Response$ === "object");
assert(typeof CreateLocationSmbRequest$ === "object");
assert(typeof CreateLocationSmbResponse$ === "object");
assert(typeof CreateTaskRequest$ === "object");
assert(typeof CreateTaskResponse$ === "object");
assert(typeof CustomSecretConfig$ === "object");
assert(typeof DeleteAgentRequest$ === "object");
assert(typeof DeleteAgentResponse$ === "object");
assert(typeof DeleteLocationRequest$ === "object");
assert(typeof DeleteLocationResponse$ === "object");
assert(typeof DeleteTaskRequest$ === "object");
assert(typeof DeleteTaskResponse$ === "object");
assert(typeof DescribeAgentRequest$ === "object");
assert(typeof DescribeAgentResponse$ === "object");
assert(typeof DescribeLocationAzureBlobRequest$ === "object");
assert(typeof DescribeLocationAzureBlobResponse$ === "object");
assert(typeof DescribeLocationEfsRequest$ === "object");
assert(typeof DescribeLocationEfsResponse$ === "object");
assert(typeof DescribeLocationFsxLustreRequest$ === "object");
assert(typeof DescribeLocationFsxLustreResponse$ === "object");
assert(typeof DescribeLocationFsxOntapRequest$ === "object");
assert(typeof DescribeLocationFsxOntapResponse$ === "object");
assert(typeof DescribeLocationFsxOpenZfsRequest$ === "object");
assert(typeof DescribeLocationFsxOpenZfsResponse$ === "object");
assert(typeof DescribeLocationFsxWindowsRequest$ === "object");
assert(typeof DescribeLocationFsxWindowsResponse$ === "object");
assert(typeof DescribeLocationHdfsRequest$ === "object");
assert(typeof DescribeLocationHdfsResponse$ === "object");
assert(typeof DescribeLocationNfsRequest$ === "object");
assert(typeof DescribeLocationNfsResponse$ === "object");
assert(typeof DescribeLocationObjectStorageRequest$ === "object");
assert(typeof DescribeLocationObjectStorageResponse$ === "object");
assert(typeof DescribeLocationS3Request$ === "object");
assert(typeof DescribeLocationS3Response$ === "object");
assert(typeof DescribeLocationSmbRequest$ === "object");
assert(typeof DescribeLocationSmbResponse$ === "object");
assert(typeof DescribeTaskExecutionRequest$ === "object");
assert(typeof DescribeTaskExecutionResponse$ === "object");
assert(typeof DescribeTaskRequest$ === "object");
assert(typeof DescribeTaskResponse$ === "object");
assert(typeof Ec2Config$ === "object");
assert(typeof FilterRule$ === "object");
assert(typeof FsxProtocol$ === "object");
assert(typeof FsxProtocolNfs$ === "object");
assert(typeof FsxProtocolSmb$ === "object");
assert(typeof FsxUpdateProtocol$ === "object");
assert(typeof FsxUpdateProtocolSmb$ === "object");
assert(typeof HdfsNameNode$ === "object");
assert(typeof ListAgentsRequest$ === "object");
assert(typeof ListAgentsResponse$ === "object");
assert(typeof ListLocationsRequest$ === "object");
assert(typeof ListLocationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTaskExecutionsRequest$ === "object");
assert(typeof ListTaskExecutionsResponse$ === "object");
assert(typeof ListTasksRequest$ === "object");
assert(typeof ListTasksResponse$ === "object");
assert(typeof LocationFilter$ === "object");
assert(typeof LocationListEntry$ === "object");
assert(typeof ManagedSecretConfig$ === "object");
assert(typeof ManifestConfig$ === "object");
assert(typeof NfsMountOptions$ === "object");
assert(typeof OnPremConfig$ === "object");
assert(typeof Options$ === "object");
assert(typeof Platform$ === "object");
assert(typeof PrivateLinkConfig$ === "object");
assert(typeof QopConfiguration$ === "object");
assert(typeof ReportDestination$ === "object");
assert(typeof ReportDestinationS3$ === "object");
assert(typeof ReportOverride$ === "object");
assert(typeof ReportOverrides$ === "object");
assert(typeof ReportResult$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof S3ManifestConfig$ === "object");
assert(typeof SmbMountOptions$ === "object");
assert(typeof SourceManifestConfig$ === "object");
assert(typeof StartTaskExecutionRequest$ === "object");
assert(typeof StartTaskExecutionResponse$ === "object");
assert(typeof TagListEntry$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskExecutionFilesFailedDetail$ === "object");
assert(typeof TaskExecutionFilesListedDetail$ === "object");
assert(typeof TaskExecutionFoldersFailedDetail$ === "object");
assert(typeof TaskExecutionFoldersListedDetail$ === "object");
assert(typeof TaskExecutionListEntry$ === "object");
assert(typeof TaskExecutionResultDetail$ === "object");
assert(typeof TaskFilter$ === "object");
assert(typeof TaskListEntry$ === "object");
assert(typeof TaskReportConfig$ === "object");
assert(typeof TaskSchedule$ === "object");
assert(typeof TaskScheduleDetails$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAgentRequest$ === "object");
assert(typeof UpdateAgentResponse$ === "object");
assert(typeof UpdateLocationAzureBlobRequest$ === "object");
assert(typeof UpdateLocationAzureBlobResponse$ === "object");
assert(typeof UpdateLocationEfsRequest$ === "object");
assert(typeof UpdateLocationEfsResponse$ === "object");
assert(typeof UpdateLocationFsxLustreRequest$ === "object");
assert(typeof UpdateLocationFsxLustreResponse$ === "object");
assert(typeof UpdateLocationFsxOntapRequest$ === "object");
assert(typeof UpdateLocationFsxOntapResponse$ === "object");
assert(typeof UpdateLocationFsxOpenZfsRequest$ === "object");
assert(typeof UpdateLocationFsxOpenZfsResponse$ === "object");
assert(typeof UpdateLocationFsxWindowsRequest$ === "object");
assert(typeof UpdateLocationFsxWindowsResponse$ === "object");
assert(typeof UpdateLocationHdfsRequest$ === "object");
assert(typeof UpdateLocationHdfsResponse$ === "object");
assert(typeof UpdateLocationNfsRequest$ === "object");
assert(typeof UpdateLocationNfsResponse$ === "object");
assert(typeof UpdateLocationObjectStorageRequest$ === "object");
assert(typeof UpdateLocationObjectStorageResponse$ === "object");
assert(typeof UpdateLocationS3Request$ === "object");
assert(typeof UpdateLocationS3Response$ === "object");
assert(typeof UpdateLocationSmbRequest$ === "object");
assert(typeof UpdateLocationSmbResponse$ === "object");
assert(typeof UpdateTaskExecutionRequest$ === "object");
assert(typeof UpdateTaskExecutionResponse$ === "object");
assert(typeof UpdateTaskRequest$ === "object");
assert(typeof UpdateTaskResponse$ === "object");
// enums
assert(typeof AgentStatus === "object");
assert(typeof Atime === "object");
assert(typeof AzureAccessTier === "object");
assert(typeof AzureBlobAuthenticationType === "object");
assert(typeof AzureBlobType === "object");
assert(typeof EfsInTransitEncryption === "object");
assert(typeof EndpointType === "object");
assert(typeof FilterType === "object");
assert(typeof Gid === "object");
assert(typeof HdfsAuthenticationType === "object");
assert(typeof HdfsDataTransferProtection === "object");
assert(typeof HdfsRpcProtection === "object");
assert(typeof LocationFilterName === "object");
assert(typeof LogLevel === "object");
assert(typeof ManifestAction === "object");
assert(typeof ManifestFormat === "object");
assert(typeof Mtime === "object");
assert(typeof NfsVersion === "object");
assert(typeof ObjectStorageServerProtocol === "object");
assert(typeof ObjectTags === "object");
assert(typeof ObjectVersionIds === "object");
assert(typeof Operator === "object");
assert(typeof OverwriteMode === "object");
assert(typeof PhaseStatus === "object");
assert(typeof PosixPermissions === "object");
assert(typeof PreserveDeletedFiles === "object");
assert(typeof PreserveDevices === "object");
assert(typeof ReportLevel === "object");
assert(typeof ReportOutputType === "object");
assert(typeof S3StorageClass === "object");
assert(typeof ScheduleDisabledBy === "object");
assert(typeof ScheduleStatus === "object");
assert(typeof SmbAuthenticationType === "object");
assert(typeof SmbSecurityDescriptorCopyFlags === "object");
assert(typeof SmbVersion === "object");
assert(typeof TaskExecutionStatus === "object");
assert(typeof TaskFilterName === "object");
assert(typeof TaskMode === "object");
assert(typeof TaskQueueing === "object");
assert(typeof TaskStatus === "object");
assert(typeof TransferMode === "object");
assert(typeof Uid === "object");
assert(typeof VerifyMode === "object");
// errors
assert(InternalException.prototype instanceof DataSyncServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidRequestException.prototype instanceof DataSyncServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(DataSyncServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgents === "function");
assert(typeof paginateListLocations === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTaskExecutions === "function");
assert(typeof paginateListTasks === "function");
console.log(`DataSync index test passed.`);
