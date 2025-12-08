import {
  AccessDeniedException,
  ActionCategory,
  ApplicationHealthStatus,
  ApplicationProgressStatus,
  ArchiveApplicationCommand,
  ArchiveWaveCommand,
  AssociateApplicationsCommand,
  AssociateSourceServersCommand,
  BootMode,
  ChangeServerLifeCycleStateCommand,
  ChangeServerLifeCycleStateSourceServerLifecycleState,
  ConflictException,
  CreateApplicationCommand,
  CreateConnectorCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommand,
  CreateWaveCommand,
  DataReplicationErrorString,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  DeleteApplicationCommand,
  DeleteConnectorCommand,
  DeleteJobCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteSourceServerCommand,
  DeleteVcenterClientCommand,
  DeleteWaveCommand,
  DescribeJobLogItemsCommand,
  DescribeJobsCommand,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeSourceServersCommand,
  DescribeVcenterClientsCommand,
  DisassociateApplicationsCommand,
  DisassociateSourceServersCommand,
  DisconnectFromServiceCommand,
  ExportStatus,
  FinalizeCutoverCommand,
  FirstBoot,
  GetLaunchConfigurationCommand,
  GetReplicationConfigurationCommand,
  ImportErrorType,
  ImportStatus,
  InitializeServiceCommand,
  InitiatedBy,
  InternalServerException,
  JobLogEvent,
  JobStatus,
  JobType,
  LaunchDisposition,
  LaunchStatus,
  LifeCycleState,
  ListApplicationsCommand,
  ListConnectorsCommand,
  ListExportErrorsCommand,
  ListExportsCommand,
  ListImportErrorsCommand,
  ListImportsCommand,
  ListManagedAccountsCommand,
  ListSourceServerActionsCommand,
  ListTagsForResourceCommand,
  ListTemplateActionsCommand,
  ListWavesCommand,
  MarkAsArchivedCommand,
  Mgn,
  MgnClient,
  MgnServiceException,
  PauseReplicationCommand,
  PostLaunchActionExecutionStatus,
  PostLaunchActionsDeploymentType,
  PutSourceServerActionCommand,
  PutTemplateActionCommand,
  RemoveSourceServerActionCommand,
  RemoveTemplateActionCommand,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationType,
  ResourceNotFoundException,
  ResumeReplicationCommand,
  RetryDataReplicationCommand,
  ServiceQuotaExceededException,
  SsmDocumentType,
  SsmParameterStoreParameterType,
  StartCutoverCommand,
  StartExportCommand,
  StartImportCommand,
  StartReplicationCommand,
  StartTestCommand,
  StopReplicationCommand,
  TagResourceCommand,
  TargetInstanceTypeRightSizingMethod,
  TerminateTargetInstancesCommand,
  ThrottlingException,
  UnarchiveApplicationCommand,
  UnarchiveWaveCommand,
  UninitializedAccountException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateConnectorCommand,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
  UpdateSourceServerCommand,
  UpdateSourceServerReplicationTypeCommand,
  UpdateWaveCommand,
  ValidationException,
  ValidationExceptionReason,
  VolumeType,
  WaveHealthStatus,
  WaveProgressStatus,
  paginateDescribeJobLogItems,
  paginateDescribeJobs,
  paginateDescribeLaunchConfigurationTemplates,
  paginateDescribeReplicationConfigurationTemplates,
  paginateDescribeSourceServers,
  paginateDescribeVcenterClients,
  paginateListApplications,
  paginateListConnectors,
  paginateListExportErrors,
  paginateListExports,
  paginateListImportErrors,
  paginateListImports,
  paginateListManagedAccounts,
  paginateListSourceServerActions,
  paginateListTemplateActions,
  paginateListWaves,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MgnClient === "function");
assert(typeof Mgn === "function");
// commands
assert(typeof ArchiveApplicationCommand === "function");
assert(typeof ArchiveWaveCommand === "function");
assert(typeof AssociateApplicationsCommand === "function");
assert(typeof AssociateSourceServersCommand === "function");
assert(typeof ChangeServerLifeCycleStateCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateLaunchConfigurationTemplateCommand === "function");
assert(typeof CreateReplicationConfigurationTemplateCommand === "function");
assert(typeof CreateWaveCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteLaunchConfigurationTemplateCommand === "function");
assert(typeof DeleteReplicationConfigurationTemplateCommand === "function");
assert(typeof DeleteSourceServerCommand === "function");
assert(typeof DeleteVcenterClientCommand === "function");
assert(typeof DeleteWaveCommand === "function");
assert(typeof DescribeJobLogItemsCommand === "function");
assert(typeof DescribeJobsCommand === "function");
assert(typeof DescribeLaunchConfigurationTemplatesCommand === "function");
assert(typeof DescribeReplicationConfigurationTemplatesCommand === "function");
assert(typeof DescribeSourceServersCommand === "function");
assert(typeof DescribeVcenterClientsCommand === "function");
assert(typeof DisassociateApplicationsCommand === "function");
assert(typeof DisassociateSourceServersCommand === "function");
assert(typeof DisconnectFromServiceCommand === "function");
assert(typeof FinalizeCutoverCommand === "function");
assert(typeof GetLaunchConfigurationCommand === "function");
assert(typeof GetReplicationConfigurationCommand === "function");
assert(typeof InitializeServiceCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListExportErrorsCommand === "function");
assert(typeof ListExportsCommand === "function");
assert(typeof ListImportErrorsCommand === "function");
assert(typeof ListImportsCommand === "function");
assert(typeof ListManagedAccountsCommand === "function");
assert(typeof ListSourceServerActionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTemplateActionsCommand === "function");
assert(typeof ListWavesCommand === "function");
assert(typeof MarkAsArchivedCommand === "function");
assert(typeof PauseReplicationCommand === "function");
assert(typeof PutSourceServerActionCommand === "function");
assert(typeof PutTemplateActionCommand === "function");
assert(typeof RemoveSourceServerActionCommand === "function");
assert(typeof RemoveTemplateActionCommand === "function");
assert(typeof ResumeReplicationCommand === "function");
assert(typeof RetryDataReplicationCommand === "function");
assert(typeof StartCutoverCommand === "function");
assert(typeof StartExportCommand === "function");
assert(typeof StartImportCommand === "function");
assert(typeof StartReplicationCommand === "function");
assert(typeof StartTestCommand === "function");
assert(typeof StopReplicationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateTargetInstancesCommand === "function");
assert(typeof UnarchiveApplicationCommand === "function");
assert(typeof UnarchiveWaveCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateConnectorCommand === "function");
assert(typeof UpdateLaunchConfigurationCommand === "function");
assert(typeof UpdateLaunchConfigurationTemplateCommand === "function");
assert(typeof UpdateReplicationConfigurationCommand === "function");
assert(typeof UpdateReplicationConfigurationTemplateCommand === "function");
assert(typeof UpdateSourceServerCommand === "function");
assert(typeof UpdateSourceServerReplicationTypeCommand === "function");
assert(typeof UpdateWaveCommand === "function");
// enums
assert(typeof ActionCategory === "object");
assert(typeof ApplicationHealthStatus === "object");
assert(typeof ApplicationProgressStatus === "object");
assert(typeof BootMode === "object");
assert(typeof ChangeServerLifeCycleStateSourceServerLifecycleState === "object");
assert(typeof DataReplicationErrorString === "object");
assert(typeof DataReplicationInitiationStepName === "object");
assert(typeof DataReplicationInitiationStepStatus === "object");
assert(typeof DataReplicationState === "object");
assert(typeof ExportStatus === "object");
assert(typeof FirstBoot === "object");
assert(typeof ImportErrorType === "object");
assert(typeof ImportStatus === "object");
assert(typeof InitiatedBy === "object");
assert(typeof JobLogEvent === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof LaunchDisposition === "object");
assert(typeof LaunchStatus === "object");
assert(typeof LifeCycleState === "object");
assert(typeof PostLaunchActionExecutionStatus === "object");
assert(typeof PostLaunchActionsDeploymentType === "object");
assert(typeof ReplicationConfigurationDataPlaneRouting === "object");
assert(typeof ReplicationConfigurationDefaultLargeStagingDiskType === "object");
assert(typeof ReplicationConfigurationEbsEncryption === "object");
assert(typeof ReplicationConfigurationReplicatedDiskStagingDiskType === "object");
assert(typeof ReplicationType === "object");
assert(typeof SsmDocumentType === "object");
assert(typeof SsmParameterStoreParameterType === "object");
assert(typeof TargetInstanceTypeRightSizingMethod === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VolumeType === "object");
assert(typeof WaveHealthStatus === "object");
assert(typeof WaveProgressStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof MgnServiceException);
assert(ConflictException.prototype instanceof MgnServiceException);
assert(InternalServerException.prototype instanceof MgnServiceException);
assert(ResourceNotFoundException.prototype instanceof MgnServiceException);
assert(ServiceQuotaExceededException.prototype instanceof MgnServiceException);
assert(ThrottlingException.prototype instanceof MgnServiceException);
assert(UninitializedAccountException.prototype instanceof MgnServiceException);
assert(ValidationException.prototype instanceof MgnServiceException);
assert(MgnServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeJobLogItems === "function");
assert(typeof paginateDescribeJobs === "function");
assert(typeof paginateDescribeLaunchConfigurationTemplates === "function");
assert(typeof paginateDescribeReplicationConfigurationTemplates === "function");
assert(typeof paginateDescribeSourceServers === "function");
assert(typeof paginateDescribeVcenterClients === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListExportErrors === "function");
assert(typeof paginateListExports === "function");
assert(typeof paginateListImportErrors === "function");
assert(typeof paginateListImports === "function");
assert(typeof paginateListManagedAccounts === "function");
assert(typeof paginateListSourceServerActions === "function");
assert(typeof paginateListTemplateActions === "function");
assert(typeof paginateListWaves === "function");
console.log(`Mgn index test passed.`);
