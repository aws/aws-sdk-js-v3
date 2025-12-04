import {
  AgentStatus,
  Atime,
  AzureAccessTier,
  AzureBlobAuthenticationType,
  AzureBlobType,
  CancelTaskExecutionCommand,
  CreateAgentCommand,
  CreateLocationAzureBlobCommand,
  CreateLocationEfsCommand,
  CreateLocationFsxLustreCommand,
  CreateLocationFsxOntapCommand,
  CreateLocationFsxOpenZfsCommand,
  CreateLocationFsxWindowsCommand,
  CreateLocationHdfsCommand,
  CreateLocationNfsCommand,
  CreateLocationObjectStorageCommand,
  CreateLocationS3Command,
  CreateLocationSmbCommand,
  CreateTaskCommand,
  DataSync,
  DataSyncClient,
  DataSyncServiceException,
  DeleteAgentCommand,
  DeleteLocationCommand,
  DeleteTaskCommand,
  DescribeAgentCommand,
  DescribeLocationAzureBlobCommand,
  DescribeLocationEfsCommand,
  DescribeLocationFsxLustreCommand,
  DescribeLocationFsxOntapCommand,
  DescribeLocationFsxOpenZfsCommand,
  DescribeLocationFsxWindowsCommand,
  DescribeLocationHdfsCommand,
  DescribeLocationNfsCommand,
  DescribeLocationObjectStorageCommand,
  DescribeLocationS3Command,
  DescribeLocationSmbCommand,
  DescribeTaskCommand,
  DescribeTaskExecutionCommand,
  EfsInTransitEncryption,
  EndpointType,
  FilterType,
  Gid,
  HdfsAuthenticationType,
  HdfsDataTransferProtection,
  HdfsRpcProtection,
  ListAgentsCommand,
  ListLocationsCommand,
  ListTagsForResourceCommand,
  ListTaskExecutionsCommand,
  ListTasksCommand,
  LocationFilterName,
  LogLevel,
  ManifestAction,
  ManifestFormat,
  Mtime,
  NfsVersion,
  ObjectStorageServerProtocol,
  ObjectTags,
  ObjectVersionIds,
  Operator,
  OverwriteMode,
  PhaseStatus,
  PosixPermissions,
  PreserveDeletedFiles,
  PreserveDevices,
  ReportLevel,
  ReportOutputType,
  S3StorageClass,
  ScheduleDisabledBy,
  ScheduleStatus,
  SmbAuthenticationType,
  SmbSecurityDescriptorCopyFlags,
  SmbVersion,
  StartTaskExecutionCommand,
  TagResourceCommand,
  TaskExecutionStatus,
  TaskFilterName,
  TaskMode,
  TaskQueueing,
  TaskStatus,
  TransferMode,
  Uid,
  UntagResourceCommand,
  UpdateAgentCommand,
  UpdateLocationAzureBlobCommand,
  UpdateLocationEfsCommand,
  UpdateLocationFsxLustreCommand,
  UpdateLocationFsxOntapCommand,
  UpdateLocationFsxOpenZfsCommand,
  UpdateLocationFsxWindowsCommand,
  UpdateLocationHdfsCommand,
  UpdateLocationNfsCommand,
  UpdateLocationObjectStorageCommand,
  UpdateLocationS3Command,
  UpdateLocationSmbCommand,
  UpdateTaskCommand,
  UpdateTaskExecutionCommand,
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
assert(typeof CreateAgentCommand === "function");
assert(typeof CreateLocationAzureBlobCommand === "function");
assert(typeof CreateLocationEfsCommand === "function");
assert(typeof CreateLocationFsxLustreCommand === "function");
assert(typeof CreateLocationFsxOntapCommand === "function");
assert(typeof CreateLocationFsxOpenZfsCommand === "function");
assert(typeof CreateLocationFsxWindowsCommand === "function");
assert(typeof CreateLocationHdfsCommand === "function");
assert(typeof CreateLocationNfsCommand === "function");
assert(typeof CreateLocationObjectStorageCommand === "function");
assert(typeof CreateLocationS3Command === "function");
assert(typeof CreateLocationSmbCommand === "function");
assert(typeof CreateTaskCommand === "function");
assert(typeof DeleteAgentCommand === "function");
assert(typeof DeleteLocationCommand === "function");
assert(typeof DeleteTaskCommand === "function");
assert(typeof DescribeAgentCommand === "function");
assert(typeof DescribeLocationAzureBlobCommand === "function");
assert(typeof DescribeLocationEfsCommand === "function");
assert(typeof DescribeLocationFsxLustreCommand === "function");
assert(typeof DescribeLocationFsxOntapCommand === "function");
assert(typeof DescribeLocationFsxOpenZfsCommand === "function");
assert(typeof DescribeLocationFsxWindowsCommand === "function");
assert(typeof DescribeLocationHdfsCommand === "function");
assert(typeof DescribeLocationNfsCommand === "function");
assert(typeof DescribeLocationObjectStorageCommand === "function");
assert(typeof DescribeLocationS3Command === "function");
assert(typeof DescribeLocationSmbCommand === "function");
assert(typeof DescribeTaskCommand === "function");
assert(typeof DescribeTaskExecutionCommand === "function");
assert(typeof ListAgentsCommand === "function");
assert(typeof ListLocationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTaskExecutionsCommand === "function");
assert(typeof ListTasksCommand === "function");
assert(typeof StartTaskExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAgentCommand === "function");
assert(typeof UpdateLocationAzureBlobCommand === "function");
assert(typeof UpdateLocationEfsCommand === "function");
assert(typeof UpdateLocationFsxLustreCommand === "function");
assert(typeof UpdateLocationFsxOntapCommand === "function");
assert(typeof UpdateLocationFsxOpenZfsCommand === "function");
assert(typeof UpdateLocationFsxWindowsCommand === "function");
assert(typeof UpdateLocationHdfsCommand === "function");
assert(typeof UpdateLocationNfsCommand === "function");
assert(typeof UpdateLocationObjectStorageCommand === "function");
assert(typeof UpdateLocationS3Command === "function");
assert(typeof UpdateLocationSmbCommand === "function");
assert(typeof UpdateTaskCommand === "function");
assert(typeof UpdateTaskExecutionCommand === "function");
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
assert(DataSyncServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgents === "function");
assert(typeof paginateListLocations === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTaskExecutions === "function");
assert(typeof paginateListTasks === "function");
console.log(`DataSync index test passed.`);
