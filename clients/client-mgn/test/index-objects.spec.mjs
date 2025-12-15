import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionCategory,
  Application$,
  ApplicationAggregatedStatus$,
  ApplicationHealthStatus,
  ApplicationProgressStatus,
  ArchiveApplication$,
  ArchiveApplicationCommand,
  ArchiveApplicationRequest$,
  ArchiveWave$,
  ArchiveWaveCommand,
  ArchiveWaveRequest$,
  AssociateApplications$,
  AssociateApplicationsCommand,
  AssociateApplicationsRequest$,
  AssociateApplicationsResponse$,
  AssociateSourceServers$,
  AssociateSourceServersCommand,
  AssociateSourceServersRequest$,
  AssociateSourceServersResponse$,
  BootMode,
  CPU$,
  ChangeServerLifeCycleState$,
  ChangeServerLifeCycleStateCommand,
  ChangeServerLifeCycleStateRequest$,
  ChangeServerLifeCycleStateSourceServerLifecycle$,
  ChangeServerLifeCycleStateSourceServerLifecycleState,
  ConflictException,
  ConflictException$,
  Connector$,
  ConnectorSsmCommandConfig$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorRequest$,
  CreateLaunchConfigurationTemplate$,
  CreateLaunchConfigurationTemplateCommand,
  CreateLaunchConfigurationTemplateRequest$,
  CreateReplicationConfigurationTemplate$,
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateRequest$,
  CreateWave$,
  CreateWaveCommand,
  CreateWaveRequest$,
  DataReplicationError$,
  DataReplicationErrorString,
  DataReplicationInfo$,
  DataReplicationInfoReplicatedDisk$,
  DataReplicationInitiation$,
  DataReplicationInitiationStep$,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorRequest$,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobRequest$,
  DeleteJobResponse$,
  DeleteLaunchConfigurationTemplate$,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteLaunchConfigurationTemplateRequest$,
  DeleteLaunchConfigurationTemplateResponse$,
  DeleteReplicationConfigurationTemplate$,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateRequest$,
  DeleteReplicationConfigurationTemplateResponse$,
  DeleteSourceServer$,
  DeleteSourceServerCommand,
  DeleteSourceServerRequest$,
  DeleteSourceServerResponse$,
  DeleteVcenterClient$,
  DeleteVcenterClientCommand,
  DeleteVcenterClientRequest$,
  DeleteWave$,
  DeleteWaveCommand,
  DeleteWaveRequest$,
  DeleteWaveResponse$,
  DescribeJobLogItems$,
  DescribeJobLogItemsCommand,
  DescribeJobLogItemsRequest$,
  DescribeJobLogItemsResponse$,
  DescribeJobs$,
  DescribeJobsCommand,
  DescribeJobsRequest$,
  DescribeJobsRequestFilters$,
  DescribeJobsResponse$,
  DescribeLaunchConfigurationTemplates$,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesRequest$,
  DescribeLaunchConfigurationTemplatesResponse$,
  DescribeReplicationConfigurationTemplates$,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesRequest$,
  DescribeReplicationConfigurationTemplatesResponse$,
  DescribeSourceServers$,
  DescribeSourceServersCommand,
  DescribeSourceServersRequest$,
  DescribeSourceServersRequestFilters$,
  DescribeSourceServersResponse$,
  DescribeVcenterClients$,
  DescribeVcenterClientsCommand,
  DescribeVcenterClientsRequest$,
  DescribeVcenterClientsResponse$,
  DisassociateApplications$,
  DisassociateApplicationsCommand,
  DisassociateApplicationsRequest$,
  DisassociateApplicationsResponse$,
  DisassociateSourceServers$,
  DisassociateSourceServersCommand,
  DisassociateSourceServersRequest$,
  DisassociateSourceServersResponse$,
  DisconnectFromService$,
  DisconnectFromServiceCommand,
  DisconnectFromServiceRequest$,
  Disk$,
  ErrorDetails$,
  ExportErrorData$,
  ExportStatus,
  ExportTask$,
  ExportTaskError$,
  ExportTaskSummary$,
  FinalizeCutover$,
  FinalizeCutoverCommand,
  FinalizeCutoverRequest$,
  FirstBoot,
  GetLaunchConfiguration$,
  GetLaunchConfigurationCommand,
  GetLaunchConfigurationRequest$,
  GetReplicationConfiguration$,
  GetReplicationConfigurationCommand,
  GetReplicationConfigurationRequest$,
  IdentificationHints$,
  ImportErrorData$,
  ImportErrorType,
  ImportStatus,
  ImportTask$,
  ImportTaskError$,
  ImportTaskSummary$,
  ImportTaskSummaryApplications$,
  ImportTaskSummaryServers$,
  ImportTaskSummaryWaves$,
  InitializeService$,
  InitializeServiceCommand,
  InitializeServiceRequest$,
  InitializeServiceResponse$,
  InitiatedBy,
  InternalServerException,
  InternalServerException$,
  InternetProtocol,
  Job$,
  JobLog$,
  JobLogEvent,
  JobLogEventData$,
  JobPostLaunchActionsLaunchStatus$,
  JobStatus,
  JobType,
  LaunchConfiguration$,
  LaunchConfigurationTemplate$,
  LaunchDisposition,
  LaunchStatus,
  LaunchTemplateDiskConf$,
  LaunchedInstance$,
  Licensing$,
  LifeCycle$,
  LifeCycleLastCutover$,
  LifeCycleLastCutoverFinalized$,
  LifeCycleLastCutoverInitiated$,
  LifeCycleLastCutoverReverted$,
  LifeCycleLastTest$,
  LifeCycleLastTestFinalized$,
  LifeCycleLastTestInitiated$,
  LifeCycleLastTestReverted$,
  LifeCycleState,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsRequestFilters$,
  ListApplicationsResponse$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsRequestFilters$,
  ListConnectorsResponse$,
  ListExportErrors$,
  ListExportErrorsCommand,
  ListExportErrorsRequest$,
  ListExportErrorsResponse$,
  ListExports$,
  ListExportsCommand,
  ListExportsRequest$,
  ListExportsRequestFilters$,
  ListExportsResponse$,
  ListImportErrors$,
  ListImportErrorsCommand,
  ListImportErrorsRequest$,
  ListImportErrorsResponse$,
  ListImports$,
  ListImportsCommand,
  ListImportsRequest$,
  ListImportsRequestFilters$,
  ListImportsResponse$,
  ListManagedAccounts$,
  ListManagedAccountsCommand,
  ListManagedAccountsRequest$,
  ListManagedAccountsResponse$,
  ListSourceServerActions$,
  ListSourceServerActionsCommand,
  ListSourceServerActionsRequest$,
  ListSourceServerActionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTemplateActions$,
  ListTemplateActionsCommand,
  ListTemplateActionsRequest$,
  ListTemplateActionsResponse$,
  ListWaves$,
  ListWavesCommand,
  ListWavesRequest$,
  ListWavesRequestFilters$,
  ListWavesResponse$,
  ManagedAccount$,
  MarkAsArchived$,
  MarkAsArchivedCommand,
  MarkAsArchivedRequest$,
  Mgn,
  MgnClient,
  MgnServiceException,
  NetworkInterface$,
  OS$,
  ParticipatingServer$,
  PauseReplication$,
  PauseReplicationCommand,
  PauseReplicationRequest$,
  PostLaunchActionExecutionStatus,
  PostLaunchActions$,
  PostLaunchActionsDeploymentType,
  PostLaunchActionsStatus$,
  PutSourceServerAction$,
  PutSourceServerActionCommand,
  PutSourceServerActionRequest$,
  PutTemplateAction$,
  PutTemplateActionCommand,
  PutTemplateActionRequest$,
  RemoveSourceServerAction$,
  RemoveSourceServerActionCommand,
  RemoveSourceServerActionRequest$,
  RemoveSourceServerActionResponse$,
  RemoveTemplateAction$,
  RemoveTemplateActionCommand,
  RemoveTemplateActionRequest$,
  RemoveTemplateActionResponse$,
  ReplicationConfiguration$,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDisk$,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationConfigurationTemplate$,
  ReplicationType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResumeReplication$,
  ResumeReplicationCommand,
  ResumeReplicationRequest$,
  RetryDataReplication$,
  RetryDataReplicationCommand,
  RetryDataReplicationRequest$,
  S3BucketSource$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceProperties$,
  SourceServer$,
  SourceServerActionDocument$,
  SourceServerActionsRequestFilters$,
  SourceServerConnectorAction$,
  SsmDocument$,
  SsmDocumentType,
  SsmExternalParameter$,
  SsmParameterStoreParameter$,
  SsmParameterStoreParameterType,
  StartCutover$,
  StartCutoverCommand,
  StartCutoverRequest$,
  StartCutoverResponse$,
  StartExport$,
  StartExportCommand,
  StartExportRequest$,
  StartExportResponse$,
  StartImport$,
  StartImportCommand,
  StartImportRequest$,
  StartImportResponse$,
  StartReplication$,
  StartReplicationCommand,
  StartReplicationRequest$,
  StartTest$,
  StartTestCommand,
  StartTestRequest$,
  StartTestResponse$,
  StopReplication$,
  StopReplicationCommand,
  StopReplicationRequest$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TargetInstanceTypeRightSizingMethod,
  TemplateActionDocument$,
  TemplateActionsRequestFilters$,
  TerminateTargetInstances$,
  TerminateTargetInstancesCommand,
  TerminateTargetInstancesRequest$,
  TerminateTargetInstancesResponse$,
  ThrottlingException,
  ThrottlingException$,
  UnarchiveApplication$,
  UnarchiveApplicationCommand,
  UnarchiveApplicationRequest$,
  UnarchiveWave$,
  UnarchiveWaveCommand,
  UnarchiveWaveRequest$,
  UninitializedAccountException,
  UninitializedAccountException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateConnector$,
  UpdateConnectorCommand,
  UpdateConnectorRequest$,
  UpdateLaunchConfiguration$,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationRequest$,
  UpdateLaunchConfigurationTemplate$,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateLaunchConfigurationTemplateRequest$,
  UpdateReplicationConfiguration$,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationRequest$,
  UpdateReplicationConfigurationTemplate$,
  UpdateReplicationConfigurationTemplateCommand,
  UpdateReplicationConfigurationTemplateRequest$,
  UpdateSourceServer$,
  UpdateSourceServerCommand,
  UpdateSourceServerReplicationType$,
  UpdateSourceServerReplicationTypeCommand,
  UpdateSourceServerReplicationTypeRequest$,
  UpdateSourceServerRequest$,
  UpdateWave$,
  UpdateWaveCommand,
  UpdateWaveRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VcenterClient$,
  VolumeType,
  Wave$,
  WaveAggregatedStatus$,
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
assert(typeof ArchiveApplication$ === "object");
assert(typeof ArchiveWaveCommand === "function");
assert(typeof ArchiveWave$ === "object");
assert(typeof AssociateApplicationsCommand === "function");
assert(typeof AssociateApplications$ === "object");
assert(typeof AssociateSourceServersCommand === "function");
assert(typeof AssociateSourceServers$ === "object");
assert(typeof ChangeServerLifeCycleStateCommand === "function");
assert(typeof ChangeServerLifeCycleState$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof CreateLaunchConfigurationTemplateCommand === "function");
assert(typeof CreateLaunchConfigurationTemplate$ === "object");
assert(typeof CreateReplicationConfigurationTemplateCommand === "function");
assert(typeof CreateReplicationConfigurationTemplate$ === "object");
assert(typeof CreateWaveCommand === "function");
assert(typeof CreateWave$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateCommand === "function");
assert(typeof DeleteLaunchConfigurationTemplate$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateCommand === "function");
assert(typeof DeleteReplicationConfigurationTemplate$ === "object");
assert(typeof DeleteSourceServerCommand === "function");
assert(typeof DeleteSourceServer$ === "object");
assert(typeof DeleteVcenterClientCommand === "function");
assert(typeof DeleteVcenterClient$ === "object");
assert(typeof DeleteWaveCommand === "function");
assert(typeof DeleteWave$ === "object");
assert(typeof DescribeJobLogItemsCommand === "function");
assert(typeof DescribeJobLogItems$ === "object");
assert(typeof DescribeJobsCommand === "function");
assert(typeof DescribeJobs$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesCommand === "function");
assert(typeof DescribeLaunchConfigurationTemplates$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesCommand === "function");
assert(typeof DescribeReplicationConfigurationTemplates$ === "object");
assert(typeof DescribeSourceServersCommand === "function");
assert(typeof DescribeSourceServers$ === "object");
assert(typeof DescribeVcenterClientsCommand === "function");
assert(typeof DescribeVcenterClients$ === "object");
assert(typeof DisassociateApplicationsCommand === "function");
assert(typeof DisassociateApplications$ === "object");
assert(typeof DisassociateSourceServersCommand === "function");
assert(typeof DisassociateSourceServers$ === "object");
assert(typeof DisconnectFromServiceCommand === "function");
assert(typeof DisconnectFromService$ === "object");
assert(typeof FinalizeCutoverCommand === "function");
assert(typeof FinalizeCutover$ === "object");
assert(typeof GetLaunchConfigurationCommand === "function");
assert(typeof GetLaunchConfiguration$ === "object");
assert(typeof GetReplicationConfigurationCommand === "function");
assert(typeof GetReplicationConfiguration$ === "object");
assert(typeof InitializeServiceCommand === "function");
assert(typeof InitializeService$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListExportErrorsCommand === "function");
assert(typeof ListExportErrors$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof ListImportErrorsCommand === "function");
assert(typeof ListImportErrors$ === "object");
assert(typeof ListImportsCommand === "function");
assert(typeof ListImports$ === "object");
assert(typeof ListManagedAccountsCommand === "function");
assert(typeof ListManagedAccounts$ === "object");
assert(typeof ListSourceServerActionsCommand === "function");
assert(typeof ListSourceServerActions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplateActionsCommand === "function");
assert(typeof ListTemplateActions$ === "object");
assert(typeof ListWavesCommand === "function");
assert(typeof ListWaves$ === "object");
assert(typeof MarkAsArchivedCommand === "function");
assert(typeof MarkAsArchived$ === "object");
assert(typeof PauseReplicationCommand === "function");
assert(typeof PauseReplication$ === "object");
assert(typeof PutSourceServerActionCommand === "function");
assert(typeof PutSourceServerAction$ === "object");
assert(typeof PutTemplateActionCommand === "function");
assert(typeof PutTemplateAction$ === "object");
assert(typeof RemoveSourceServerActionCommand === "function");
assert(typeof RemoveSourceServerAction$ === "object");
assert(typeof RemoveTemplateActionCommand === "function");
assert(typeof RemoveTemplateAction$ === "object");
assert(typeof ResumeReplicationCommand === "function");
assert(typeof ResumeReplication$ === "object");
assert(typeof RetryDataReplicationCommand === "function");
assert(typeof RetryDataReplication$ === "object");
assert(typeof StartCutoverCommand === "function");
assert(typeof StartCutover$ === "object");
assert(typeof StartExportCommand === "function");
assert(typeof StartExport$ === "object");
assert(typeof StartImportCommand === "function");
assert(typeof StartImport$ === "object");
assert(typeof StartReplicationCommand === "function");
assert(typeof StartReplication$ === "object");
assert(typeof StartTestCommand === "function");
assert(typeof StartTest$ === "object");
assert(typeof StopReplicationCommand === "function");
assert(typeof StopReplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateTargetInstancesCommand === "function");
assert(typeof TerminateTargetInstances$ === "object");
assert(typeof UnarchiveApplicationCommand === "function");
assert(typeof UnarchiveApplication$ === "object");
assert(typeof UnarchiveWaveCommand === "function");
assert(typeof UnarchiveWave$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateConnectorCommand === "function");
assert(typeof UpdateConnector$ === "object");
assert(typeof UpdateLaunchConfigurationCommand === "function");
assert(typeof UpdateLaunchConfiguration$ === "object");
assert(typeof UpdateLaunchConfigurationTemplateCommand === "function");
assert(typeof UpdateLaunchConfigurationTemplate$ === "object");
assert(typeof UpdateReplicationConfigurationCommand === "function");
assert(typeof UpdateReplicationConfiguration$ === "object");
assert(typeof UpdateReplicationConfigurationTemplateCommand === "function");
assert(typeof UpdateReplicationConfigurationTemplate$ === "object");
assert(typeof UpdateSourceServerCommand === "function");
assert(typeof UpdateSourceServer$ === "object");
assert(typeof UpdateSourceServerReplicationTypeCommand === "function");
assert(typeof UpdateSourceServerReplicationType$ === "object");
assert(typeof UpdateWaveCommand === "function");
assert(typeof UpdateWave$ === "object");
// structural schemas
assert(typeof Application$ === "object");
assert(typeof ApplicationAggregatedStatus$ === "object");
assert(typeof ArchiveApplicationRequest$ === "object");
assert(typeof ArchiveWaveRequest$ === "object");
assert(typeof AssociateApplicationsRequest$ === "object");
assert(typeof AssociateApplicationsResponse$ === "object");
assert(typeof AssociateSourceServersRequest$ === "object");
assert(typeof AssociateSourceServersResponse$ === "object");
assert(typeof ChangeServerLifeCycleStateRequest$ === "object");
assert(typeof ChangeServerLifeCycleStateSourceServerLifecycle$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorSsmCommandConfig$ === "object");
assert(typeof CPU$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateConnectorRequest$ === "object");
assert(typeof CreateLaunchConfigurationTemplateRequest$ === "object");
assert(typeof CreateReplicationConfigurationTemplateRequest$ === "object");
assert(typeof CreateWaveRequest$ === "object");
assert(typeof DataReplicationError$ === "object");
assert(typeof DataReplicationInfo$ === "object");
assert(typeof DataReplicationInfoReplicatedDisk$ === "object");
assert(typeof DataReplicationInitiation$ === "object");
assert(typeof DataReplicationInitiationStep$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteConnectorRequest$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobResponse$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateRequest$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateResponse$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateRequest$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateResponse$ === "object");
assert(typeof DeleteSourceServerRequest$ === "object");
assert(typeof DeleteSourceServerResponse$ === "object");
assert(typeof DeleteVcenterClientRequest$ === "object");
assert(typeof DeleteWaveRequest$ === "object");
assert(typeof DeleteWaveResponse$ === "object");
assert(typeof DescribeJobLogItemsRequest$ === "object");
assert(typeof DescribeJobLogItemsResponse$ === "object");
assert(typeof DescribeJobsRequest$ === "object");
assert(typeof DescribeJobsRequestFilters$ === "object");
assert(typeof DescribeJobsResponse$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesRequest$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesResponse$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesRequest$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesResponse$ === "object");
assert(typeof DescribeSourceServersRequest$ === "object");
assert(typeof DescribeSourceServersRequestFilters$ === "object");
assert(typeof DescribeSourceServersResponse$ === "object");
assert(typeof DescribeVcenterClientsRequest$ === "object");
assert(typeof DescribeVcenterClientsResponse$ === "object");
assert(typeof DisassociateApplicationsRequest$ === "object");
assert(typeof DisassociateApplicationsResponse$ === "object");
assert(typeof DisassociateSourceServersRequest$ === "object");
assert(typeof DisassociateSourceServersResponse$ === "object");
assert(typeof DisconnectFromServiceRequest$ === "object");
assert(typeof Disk$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ExportErrorData$ === "object");
assert(typeof ExportTask$ === "object");
assert(typeof ExportTaskError$ === "object");
assert(typeof ExportTaskSummary$ === "object");
assert(typeof FinalizeCutoverRequest$ === "object");
assert(typeof GetLaunchConfigurationRequest$ === "object");
assert(typeof GetReplicationConfigurationRequest$ === "object");
assert(typeof IdentificationHints$ === "object");
assert(typeof ImportErrorData$ === "object");
assert(typeof ImportTask$ === "object");
assert(typeof ImportTaskError$ === "object");
assert(typeof ImportTaskSummary$ === "object");
assert(typeof ImportTaskSummaryApplications$ === "object");
assert(typeof ImportTaskSummaryServers$ === "object");
assert(typeof ImportTaskSummaryWaves$ === "object");
assert(typeof InitializeServiceRequest$ === "object");
assert(typeof InitializeServiceResponse$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobLog$ === "object");
assert(typeof JobLogEventData$ === "object");
assert(typeof JobPostLaunchActionsLaunchStatus$ === "object");
assert(typeof LaunchConfiguration$ === "object");
assert(typeof LaunchConfigurationTemplate$ === "object");
assert(typeof LaunchedInstance$ === "object");
assert(typeof LaunchTemplateDiskConf$ === "object");
assert(typeof Licensing$ === "object");
assert(typeof LifeCycle$ === "object");
assert(typeof LifeCycleLastCutover$ === "object");
assert(typeof LifeCycleLastCutoverFinalized$ === "object");
assert(typeof LifeCycleLastCutoverInitiated$ === "object");
assert(typeof LifeCycleLastCutoverReverted$ === "object");
assert(typeof LifeCycleLastTest$ === "object");
assert(typeof LifeCycleLastTestFinalized$ === "object");
assert(typeof LifeCycleLastTestInitiated$ === "object");
assert(typeof LifeCycleLastTestReverted$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsRequestFilters$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsRequestFilters$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListExportErrorsRequest$ === "object");
assert(typeof ListExportErrorsResponse$ === "object");
assert(typeof ListExportsRequest$ === "object");
assert(typeof ListExportsRequestFilters$ === "object");
assert(typeof ListExportsResponse$ === "object");
assert(typeof ListImportErrorsRequest$ === "object");
assert(typeof ListImportErrorsResponse$ === "object");
assert(typeof ListImportsRequest$ === "object");
assert(typeof ListImportsRequestFilters$ === "object");
assert(typeof ListImportsResponse$ === "object");
assert(typeof ListManagedAccountsRequest$ === "object");
assert(typeof ListManagedAccountsResponse$ === "object");
assert(typeof ListSourceServerActionsRequest$ === "object");
assert(typeof ListSourceServerActionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTemplateActionsRequest$ === "object");
assert(typeof ListTemplateActionsResponse$ === "object");
assert(typeof ListWavesRequest$ === "object");
assert(typeof ListWavesRequestFilters$ === "object");
assert(typeof ListWavesResponse$ === "object");
assert(typeof ManagedAccount$ === "object");
assert(typeof MarkAsArchivedRequest$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof OS$ === "object");
assert(typeof ParticipatingServer$ === "object");
assert(typeof PauseReplicationRequest$ === "object");
assert(typeof PostLaunchActions$ === "object");
assert(typeof PostLaunchActionsStatus$ === "object");
assert(typeof PutSourceServerActionRequest$ === "object");
assert(typeof PutTemplateActionRequest$ === "object");
assert(typeof RemoveSourceServerActionRequest$ === "object");
assert(typeof RemoveSourceServerActionResponse$ === "object");
assert(typeof RemoveTemplateActionRequest$ === "object");
assert(typeof RemoveTemplateActionResponse$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationConfigurationReplicatedDisk$ === "object");
assert(typeof ReplicationConfigurationTemplate$ === "object");
assert(typeof ResumeReplicationRequest$ === "object");
assert(typeof RetryDataReplicationRequest$ === "object");
assert(typeof S3BucketSource$ === "object");
assert(typeof SourceProperties$ === "object");
assert(typeof SourceServer$ === "object");
assert(typeof SourceServerActionDocument$ === "object");
assert(typeof SourceServerActionsRequestFilters$ === "object");
assert(typeof SourceServerConnectorAction$ === "object");
assert(typeof SsmDocument$ === "object");
assert(typeof SsmExternalParameter$ === "object");
assert(typeof SsmParameterStoreParameter$ === "object");
assert(typeof StartCutoverRequest$ === "object");
assert(typeof StartCutoverResponse$ === "object");
assert(typeof StartExportRequest$ === "object");
assert(typeof StartExportResponse$ === "object");
assert(typeof StartImportRequest$ === "object");
assert(typeof StartImportResponse$ === "object");
assert(typeof StartReplicationRequest$ === "object");
assert(typeof StartTestRequest$ === "object");
assert(typeof StartTestResponse$ === "object");
assert(typeof StopReplicationRequest$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TemplateActionDocument$ === "object");
assert(typeof TemplateActionsRequestFilters$ === "object");
assert(typeof TerminateTargetInstancesRequest$ === "object");
assert(typeof TerminateTargetInstancesResponse$ === "object");
assert(typeof UnarchiveApplicationRequest$ === "object");
assert(typeof UnarchiveWaveRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateConnectorRequest$ === "object");
assert(typeof UpdateLaunchConfigurationRequest$ === "object");
assert(typeof UpdateLaunchConfigurationTemplateRequest$ === "object");
assert(typeof UpdateReplicationConfigurationRequest$ === "object");
assert(typeof UpdateReplicationConfigurationTemplateRequest$ === "object");
assert(typeof UpdateSourceServerReplicationTypeRequest$ === "object");
assert(typeof UpdateSourceServerRequest$ === "object");
assert(typeof UpdateWaveRequest$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VcenterClient$ === "object");
assert(typeof Wave$ === "object");
assert(typeof WaveAggregatedStatus$ === "object");
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
assert(typeof InternetProtocol === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MgnServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MgnServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MgnServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MgnServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MgnServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UninitializedAccountException.prototype instanceof MgnServiceException);
assert(typeof UninitializedAccountException$ === "object");
assert(ValidationException.prototype instanceof MgnServiceException);
assert(typeof ValidationException$ === "object");
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
