import {
  AccessDeniedException,
  AccessDeniedException$,
  Account$,
  AssociateSourceNetworkStack$,
  AssociateSourceNetworkStackCommand,
  AssociateSourceNetworkStackRequest$,
  AssociateSourceNetworkStackResponse$,
  CPU$,
  ConflictException,
  ConflictException$,
  ConversionProperties$,
  CreateExtendedSourceServer$,
  CreateExtendedSourceServerCommand,
  CreateExtendedSourceServerRequest$,
  CreateExtendedSourceServerResponse$,
  CreateLaunchConfigurationTemplate$,
  CreateLaunchConfigurationTemplateCommand,
  CreateLaunchConfigurationTemplateRequest$,
  CreateLaunchConfigurationTemplateResponse$,
  CreateReplicationConfigurationTemplate$,
  CreateReplicationConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateRequest$,
  CreateSourceNetwork$,
  CreateSourceNetworkCommand,
  CreateSourceNetworkRequest$,
  CreateSourceNetworkResponse$,
  DataReplicationError$,
  DataReplicationErrorString,
  DataReplicationInfo$,
  DataReplicationInfoReplicatedDisk$,
  DataReplicationInitiation$,
  DataReplicationInitiationStep$,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobRequest$,
  DeleteJobResponse$,
  DeleteLaunchAction$,
  DeleteLaunchActionCommand,
  DeleteLaunchActionRequest$,
  DeleteLaunchActionResponse$,
  DeleteLaunchConfigurationTemplate$,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteLaunchConfigurationTemplateRequest$,
  DeleteLaunchConfigurationTemplateResponse$,
  DeleteRecoveryInstance$,
  DeleteRecoveryInstanceCommand,
  DeleteRecoveryInstanceRequest$,
  DeleteReplicationConfigurationTemplate$,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteReplicationConfigurationTemplateRequest$,
  DeleteReplicationConfigurationTemplateResponse$,
  DeleteSourceNetwork$,
  DeleteSourceNetworkCommand,
  DeleteSourceNetworkRequest$,
  DeleteSourceNetworkResponse$,
  DeleteSourceServer$,
  DeleteSourceServerCommand,
  DeleteSourceServerRequest$,
  DeleteSourceServerResponse$,
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
  DescribeRecoveryInstances$,
  DescribeRecoveryInstancesCommand,
  DescribeRecoveryInstancesRequest$,
  DescribeRecoveryInstancesRequestFilters$,
  DescribeRecoveryInstancesResponse$,
  DescribeRecoverySnapshots$,
  DescribeRecoverySnapshotsCommand,
  DescribeRecoverySnapshotsRequest$,
  DescribeRecoverySnapshotsRequestFilters$,
  DescribeRecoverySnapshotsResponse$,
  DescribeReplicationConfigurationTemplates$,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesRequest$,
  DescribeReplicationConfigurationTemplatesResponse$,
  DescribeSourceNetworks$,
  DescribeSourceNetworksCommand,
  DescribeSourceNetworksRequest$,
  DescribeSourceNetworksRequestFilters$,
  DescribeSourceNetworksResponse$,
  DescribeSourceServers$,
  DescribeSourceServersCommand,
  DescribeSourceServersRequest$,
  DescribeSourceServersRequestFilters$,
  DescribeSourceServersResponse$,
  DisconnectRecoveryInstance$,
  DisconnectRecoveryInstanceCommand,
  DisconnectRecoveryInstanceRequest$,
  DisconnectSourceServer$,
  DisconnectSourceServerCommand,
  DisconnectSourceServerRequest$,
  Disk$,
  Drs,
  DrsClient,
  DrsServiceException,
  EC2InstanceState,
  EventResourceData$,
  ExportSourceNetworkCfnTemplate$,
  ExportSourceNetworkCfnTemplateCommand,
  ExportSourceNetworkCfnTemplateRequest$,
  ExportSourceNetworkCfnTemplateResponse$,
  ExtensionStatus,
  FailbackLaunchType,
  FailbackReplicationError,
  FailbackState,
  GetFailbackReplicationConfiguration$,
  GetFailbackReplicationConfigurationCommand,
  GetFailbackReplicationConfigurationRequest$,
  GetFailbackReplicationConfigurationResponse$,
  GetLaunchConfiguration$,
  GetLaunchConfigurationCommand,
  GetLaunchConfigurationRequest$,
  GetReplicationConfiguration$,
  GetReplicationConfigurationCommand,
  GetReplicationConfigurationRequest$,
  IdentificationHints$,
  InitializeService$,
  InitializeServiceCommand,
  InitializeServiceRequest$,
  InitializeServiceResponse$,
  InitiatedBy,
  InternalServerException,
  InternalServerException$,
  Job$,
  JobLog$,
  JobLogEvent,
  JobLogEventData$,
  JobStatus,
  JobType,
  LastLaunchResult,
  LastLaunchType,
  LaunchAction$,
  LaunchActionCategory,
  LaunchActionParameter$,
  LaunchActionParameterType,
  LaunchActionRun$,
  LaunchActionRunStatus,
  LaunchActionType,
  LaunchActionsRequestFilters$,
  LaunchActionsStatus$,
  LaunchConfiguration$,
  LaunchConfigurationTemplate$,
  LaunchDisposition,
  LaunchIntoInstanceProperties$,
  LaunchStatus,
  Licensing$,
  LifeCycle$,
  LifeCycleLastLaunch$,
  LifeCycleLastLaunchInitiated$,
  ListExtensibleSourceServers$,
  ListExtensibleSourceServersCommand,
  ListExtensibleSourceServersRequest$,
  ListExtensibleSourceServersResponse$,
  ListLaunchActions$,
  ListLaunchActionsCommand,
  ListLaunchActionsRequest$,
  ListLaunchActionsResponse$,
  ListStagingAccounts$,
  ListStagingAccountsCommand,
  ListStagingAccountsRequest$,
  ListStagingAccountsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NetworkInterface$,
  OS$,
  OriginEnvironment,
  PITPolicyRule$,
  PITPolicyRuleUnits,
  ParticipatingResource$,
  ParticipatingResourceID$,
  ParticipatingServer$,
  ProductCode$,
  ProductCodeMode,
  PutLaunchAction$,
  PutLaunchActionCommand,
  PutLaunchActionRequest$,
  PutLaunchActionResponse$,
  RecoveryInstance$,
  RecoveryInstanceDataReplicationError$,
  RecoveryInstanceDataReplicationInfo$,
  RecoveryInstanceDataReplicationInfoReplicatedDisk$,
  RecoveryInstanceDataReplicationInitiation$,
  RecoveryInstanceDataReplicationInitiationStep$,
  RecoveryInstanceDataReplicationInitiationStepName,
  RecoveryInstanceDataReplicationInitiationStepStatus,
  RecoveryInstanceDataReplicationState,
  RecoveryInstanceDisk$,
  RecoveryInstanceFailback$,
  RecoveryInstanceProperties$,
  RecoveryLifeCycle$,
  RecoveryResult,
  RecoverySnapshot$,
  RecoverySnapshotsOrder,
  ReplicationConfiguration$,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDisk$,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationConfigurationTemplate$,
  ReplicationDirection,
  ReplicationStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryDataReplication$,
  RetryDataReplicationCommand,
  RetryDataReplicationRequest$,
  ReverseReplication$,
  ReverseReplicationCommand,
  ReverseReplicationRequest$,
  ReverseReplicationResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceCloudProperties$,
  SourceNetwork$,
  SourceNetworkData$,
  SourceProperties$,
  SourceServer$,
  StagingArea$,
  StagingSourceServer$,
  StartFailbackLaunch$,
  StartFailbackLaunchCommand,
  StartFailbackLaunchRequest$,
  StartFailbackLaunchResponse$,
  StartRecovery$,
  StartRecoveryCommand,
  StartRecoveryRequest$,
  StartRecoveryRequestSourceServer$,
  StartRecoveryResponse$,
  StartReplication$,
  StartReplicationCommand,
  StartReplicationRequest$,
  StartReplicationResponse$,
  StartSourceNetworkRecovery$,
  StartSourceNetworkRecoveryCommand,
  StartSourceNetworkRecoveryRequest$,
  StartSourceNetworkRecoveryRequestNetworkEntry$,
  StartSourceNetworkRecoveryResponse$,
  StartSourceNetworkReplication$,
  StartSourceNetworkReplicationCommand,
  StartSourceNetworkReplicationRequest$,
  StartSourceNetworkReplicationResponse$,
  StopFailback$,
  StopFailbackCommand,
  StopFailbackRequest$,
  StopReplication$,
  StopReplicationCommand,
  StopReplicationRequest$,
  StopReplicationResponse$,
  StopSourceNetworkReplication$,
  StopSourceNetworkReplicationCommand,
  StopSourceNetworkReplicationRequest$,
  StopSourceNetworkReplicationResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TargetInstanceTypeRightSizingMethod,
  TerminateRecoveryInstances$,
  TerminateRecoveryInstancesCommand,
  TerminateRecoveryInstancesRequest$,
  TerminateRecoveryInstancesResponse$,
  ThrottlingException,
  ThrottlingException$,
  UninitializedAccountException,
  UninitializedAccountException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateFailbackReplicationConfiguration$,
  UpdateFailbackReplicationConfigurationCommand,
  UpdateFailbackReplicationConfigurationRequest$,
  UpdateLaunchConfiguration$,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationRequest$,
  UpdateLaunchConfigurationTemplate$,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateLaunchConfigurationTemplateRequest$,
  UpdateLaunchConfigurationTemplateResponse$,
  UpdateReplicationConfiguration$,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationRequest$,
  UpdateReplicationConfigurationTemplate$,
  UpdateReplicationConfigurationTemplateCommand,
  UpdateReplicationConfigurationTemplateRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VolumeStatus,
  paginateDescribeJobLogItems,
  paginateDescribeJobs,
  paginateDescribeLaunchConfigurationTemplates,
  paginateDescribeRecoveryInstances,
  paginateDescribeRecoverySnapshots,
  paginateDescribeReplicationConfigurationTemplates,
  paginateDescribeSourceNetworks,
  paginateDescribeSourceServers,
  paginateListExtensibleSourceServers,
  paginateListLaunchActions,
  paginateListStagingAccounts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DrsClient === "function");
assert(typeof Drs === "function");
// commands
assert(typeof AssociateSourceNetworkStackCommand === "function");
assert(typeof AssociateSourceNetworkStack$ === "object");
assert(typeof CreateExtendedSourceServerCommand === "function");
assert(typeof CreateExtendedSourceServer$ === "object");
assert(typeof CreateLaunchConfigurationTemplateCommand === "function");
assert(typeof CreateLaunchConfigurationTemplate$ === "object");
assert(typeof CreateReplicationConfigurationTemplateCommand === "function");
assert(typeof CreateReplicationConfigurationTemplate$ === "object");
assert(typeof CreateSourceNetworkCommand === "function");
assert(typeof CreateSourceNetwork$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteLaunchActionCommand === "function");
assert(typeof DeleteLaunchAction$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateCommand === "function");
assert(typeof DeleteLaunchConfigurationTemplate$ === "object");
assert(typeof DeleteRecoveryInstanceCommand === "function");
assert(typeof DeleteRecoveryInstance$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateCommand === "function");
assert(typeof DeleteReplicationConfigurationTemplate$ === "object");
assert(typeof DeleteSourceNetworkCommand === "function");
assert(typeof DeleteSourceNetwork$ === "object");
assert(typeof DeleteSourceServerCommand === "function");
assert(typeof DeleteSourceServer$ === "object");
assert(typeof DescribeJobLogItemsCommand === "function");
assert(typeof DescribeJobLogItems$ === "object");
assert(typeof DescribeJobsCommand === "function");
assert(typeof DescribeJobs$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesCommand === "function");
assert(typeof DescribeLaunchConfigurationTemplates$ === "object");
assert(typeof DescribeRecoveryInstancesCommand === "function");
assert(typeof DescribeRecoveryInstances$ === "object");
assert(typeof DescribeRecoverySnapshotsCommand === "function");
assert(typeof DescribeRecoverySnapshots$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesCommand === "function");
assert(typeof DescribeReplicationConfigurationTemplates$ === "object");
assert(typeof DescribeSourceNetworksCommand === "function");
assert(typeof DescribeSourceNetworks$ === "object");
assert(typeof DescribeSourceServersCommand === "function");
assert(typeof DescribeSourceServers$ === "object");
assert(typeof DisconnectRecoveryInstanceCommand === "function");
assert(typeof DisconnectRecoveryInstance$ === "object");
assert(typeof DisconnectSourceServerCommand === "function");
assert(typeof DisconnectSourceServer$ === "object");
assert(typeof ExportSourceNetworkCfnTemplateCommand === "function");
assert(typeof ExportSourceNetworkCfnTemplate$ === "object");
assert(typeof GetFailbackReplicationConfigurationCommand === "function");
assert(typeof GetFailbackReplicationConfiguration$ === "object");
assert(typeof GetLaunchConfigurationCommand === "function");
assert(typeof GetLaunchConfiguration$ === "object");
assert(typeof GetReplicationConfigurationCommand === "function");
assert(typeof GetReplicationConfiguration$ === "object");
assert(typeof InitializeServiceCommand === "function");
assert(typeof InitializeService$ === "object");
assert(typeof ListExtensibleSourceServersCommand === "function");
assert(typeof ListExtensibleSourceServers$ === "object");
assert(typeof ListLaunchActionsCommand === "function");
assert(typeof ListLaunchActions$ === "object");
assert(typeof ListStagingAccountsCommand === "function");
assert(typeof ListStagingAccounts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutLaunchActionCommand === "function");
assert(typeof PutLaunchAction$ === "object");
assert(typeof RetryDataReplicationCommand === "function");
assert(typeof RetryDataReplication$ === "object");
assert(typeof ReverseReplicationCommand === "function");
assert(typeof ReverseReplication$ === "object");
assert(typeof StartFailbackLaunchCommand === "function");
assert(typeof StartFailbackLaunch$ === "object");
assert(typeof StartRecoveryCommand === "function");
assert(typeof StartRecovery$ === "object");
assert(typeof StartReplicationCommand === "function");
assert(typeof StartReplication$ === "object");
assert(typeof StartSourceNetworkRecoveryCommand === "function");
assert(typeof StartSourceNetworkRecovery$ === "object");
assert(typeof StartSourceNetworkReplicationCommand === "function");
assert(typeof StartSourceNetworkReplication$ === "object");
assert(typeof StopFailbackCommand === "function");
assert(typeof StopFailback$ === "object");
assert(typeof StopReplicationCommand === "function");
assert(typeof StopReplication$ === "object");
assert(typeof StopSourceNetworkReplicationCommand === "function");
assert(typeof StopSourceNetworkReplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateRecoveryInstancesCommand === "function");
assert(typeof TerminateRecoveryInstances$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFailbackReplicationConfigurationCommand === "function");
assert(typeof UpdateFailbackReplicationConfiguration$ === "object");
assert(typeof UpdateLaunchConfigurationCommand === "function");
assert(typeof UpdateLaunchConfiguration$ === "object");
assert(typeof UpdateLaunchConfigurationTemplateCommand === "function");
assert(typeof UpdateLaunchConfigurationTemplate$ === "object");
assert(typeof UpdateReplicationConfigurationCommand === "function");
assert(typeof UpdateReplicationConfiguration$ === "object");
assert(typeof UpdateReplicationConfigurationTemplateCommand === "function");
assert(typeof UpdateReplicationConfigurationTemplate$ === "object");
// structural schemas
assert(typeof Account$ === "object");
assert(typeof AssociateSourceNetworkStackRequest$ === "object");
assert(typeof AssociateSourceNetworkStackResponse$ === "object");
assert(typeof ConversionProperties$ === "object");
assert(typeof CPU$ === "object");
assert(typeof CreateExtendedSourceServerRequest$ === "object");
assert(typeof CreateExtendedSourceServerResponse$ === "object");
assert(typeof CreateLaunchConfigurationTemplateRequest$ === "object");
assert(typeof CreateLaunchConfigurationTemplateResponse$ === "object");
assert(typeof CreateReplicationConfigurationTemplateRequest$ === "object");
assert(typeof CreateSourceNetworkRequest$ === "object");
assert(typeof CreateSourceNetworkResponse$ === "object");
assert(typeof DataReplicationError$ === "object");
assert(typeof DataReplicationInfo$ === "object");
assert(typeof DataReplicationInfoReplicatedDisk$ === "object");
assert(typeof DataReplicationInitiation$ === "object");
assert(typeof DataReplicationInitiationStep$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobResponse$ === "object");
assert(typeof DeleteLaunchActionRequest$ === "object");
assert(typeof DeleteLaunchActionResponse$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateRequest$ === "object");
assert(typeof DeleteLaunchConfigurationTemplateResponse$ === "object");
assert(typeof DeleteRecoveryInstanceRequest$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateRequest$ === "object");
assert(typeof DeleteReplicationConfigurationTemplateResponse$ === "object");
assert(typeof DeleteSourceNetworkRequest$ === "object");
assert(typeof DeleteSourceNetworkResponse$ === "object");
assert(typeof DeleteSourceServerRequest$ === "object");
assert(typeof DeleteSourceServerResponse$ === "object");
assert(typeof DescribeJobLogItemsRequest$ === "object");
assert(typeof DescribeJobLogItemsResponse$ === "object");
assert(typeof DescribeJobsRequest$ === "object");
assert(typeof DescribeJobsRequestFilters$ === "object");
assert(typeof DescribeJobsResponse$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesRequest$ === "object");
assert(typeof DescribeLaunchConfigurationTemplatesResponse$ === "object");
assert(typeof DescribeRecoveryInstancesRequest$ === "object");
assert(typeof DescribeRecoveryInstancesRequestFilters$ === "object");
assert(typeof DescribeRecoveryInstancesResponse$ === "object");
assert(typeof DescribeRecoverySnapshotsRequest$ === "object");
assert(typeof DescribeRecoverySnapshotsRequestFilters$ === "object");
assert(typeof DescribeRecoverySnapshotsResponse$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesRequest$ === "object");
assert(typeof DescribeReplicationConfigurationTemplatesResponse$ === "object");
assert(typeof DescribeSourceNetworksRequest$ === "object");
assert(typeof DescribeSourceNetworksRequestFilters$ === "object");
assert(typeof DescribeSourceNetworksResponse$ === "object");
assert(typeof DescribeSourceServersRequest$ === "object");
assert(typeof DescribeSourceServersRequestFilters$ === "object");
assert(typeof DescribeSourceServersResponse$ === "object");
assert(typeof DisconnectRecoveryInstanceRequest$ === "object");
assert(typeof DisconnectSourceServerRequest$ === "object");
assert(typeof Disk$ === "object");
assert(typeof EventResourceData$ === "object");
assert(typeof ExportSourceNetworkCfnTemplateRequest$ === "object");
assert(typeof ExportSourceNetworkCfnTemplateResponse$ === "object");
assert(typeof GetFailbackReplicationConfigurationRequest$ === "object");
assert(typeof GetFailbackReplicationConfigurationResponse$ === "object");
assert(typeof GetLaunchConfigurationRequest$ === "object");
assert(typeof GetReplicationConfigurationRequest$ === "object");
assert(typeof IdentificationHints$ === "object");
assert(typeof InitializeServiceRequest$ === "object");
assert(typeof InitializeServiceResponse$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobLog$ === "object");
assert(typeof JobLogEventData$ === "object");
assert(typeof LaunchAction$ === "object");
assert(typeof LaunchActionParameter$ === "object");
assert(typeof LaunchActionRun$ === "object");
assert(typeof LaunchActionsRequestFilters$ === "object");
assert(typeof LaunchActionsStatus$ === "object");
assert(typeof LaunchConfiguration$ === "object");
assert(typeof LaunchConfigurationTemplate$ === "object");
assert(typeof LaunchIntoInstanceProperties$ === "object");
assert(typeof Licensing$ === "object");
assert(typeof LifeCycle$ === "object");
assert(typeof LifeCycleLastLaunch$ === "object");
assert(typeof LifeCycleLastLaunchInitiated$ === "object");
assert(typeof ListExtensibleSourceServersRequest$ === "object");
assert(typeof ListExtensibleSourceServersResponse$ === "object");
assert(typeof ListLaunchActionsRequest$ === "object");
assert(typeof ListLaunchActionsResponse$ === "object");
assert(typeof ListStagingAccountsRequest$ === "object");
assert(typeof ListStagingAccountsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof OS$ === "object");
assert(typeof ParticipatingResource$ === "object");
assert(typeof ParticipatingResourceID$ === "object");
assert(typeof ParticipatingServer$ === "object");
assert(typeof PITPolicyRule$ === "object");
assert(typeof ProductCode$ === "object");
assert(typeof PutLaunchActionRequest$ === "object");
assert(typeof PutLaunchActionResponse$ === "object");
assert(typeof RecoveryInstance$ === "object");
assert(typeof RecoveryInstanceDataReplicationError$ === "object");
assert(typeof RecoveryInstanceDataReplicationInfo$ === "object");
assert(typeof RecoveryInstanceDataReplicationInfoReplicatedDisk$ === "object");
assert(typeof RecoveryInstanceDataReplicationInitiation$ === "object");
assert(typeof RecoveryInstanceDataReplicationInitiationStep$ === "object");
assert(typeof RecoveryInstanceDisk$ === "object");
assert(typeof RecoveryInstanceFailback$ === "object");
assert(typeof RecoveryInstanceProperties$ === "object");
assert(typeof RecoveryLifeCycle$ === "object");
assert(typeof RecoverySnapshot$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationConfigurationReplicatedDisk$ === "object");
assert(typeof ReplicationConfigurationTemplate$ === "object");
assert(typeof RetryDataReplicationRequest$ === "object");
assert(typeof ReverseReplicationRequest$ === "object");
assert(typeof ReverseReplicationResponse$ === "object");
assert(typeof SourceCloudProperties$ === "object");
assert(typeof SourceNetwork$ === "object");
assert(typeof SourceNetworkData$ === "object");
assert(typeof SourceProperties$ === "object");
assert(typeof SourceServer$ === "object");
assert(typeof StagingArea$ === "object");
assert(typeof StagingSourceServer$ === "object");
assert(typeof StartFailbackLaunchRequest$ === "object");
assert(typeof StartFailbackLaunchResponse$ === "object");
assert(typeof StartRecoveryRequest$ === "object");
assert(typeof StartRecoveryRequestSourceServer$ === "object");
assert(typeof StartRecoveryResponse$ === "object");
assert(typeof StartReplicationRequest$ === "object");
assert(typeof StartReplicationResponse$ === "object");
assert(typeof StartSourceNetworkRecoveryRequest$ === "object");
assert(typeof StartSourceNetworkRecoveryRequestNetworkEntry$ === "object");
assert(typeof StartSourceNetworkRecoveryResponse$ === "object");
assert(typeof StartSourceNetworkReplicationRequest$ === "object");
assert(typeof StartSourceNetworkReplicationResponse$ === "object");
assert(typeof StopFailbackRequest$ === "object");
assert(typeof StopReplicationRequest$ === "object");
assert(typeof StopReplicationResponse$ === "object");
assert(typeof StopSourceNetworkReplicationRequest$ === "object");
assert(typeof StopSourceNetworkReplicationResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TerminateRecoveryInstancesRequest$ === "object");
assert(typeof TerminateRecoveryInstancesResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateFailbackReplicationConfigurationRequest$ === "object");
assert(typeof UpdateLaunchConfigurationRequest$ === "object");
assert(typeof UpdateLaunchConfigurationTemplateRequest$ === "object");
assert(typeof UpdateLaunchConfigurationTemplateResponse$ === "object");
assert(typeof UpdateReplicationConfigurationRequest$ === "object");
assert(typeof UpdateReplicationConfigurationTemplateRequest$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof DataReplicationErrorString === "object");
assert(typeof DataReplicationInitiationStepName === "object");
assert(typeof DataReplicationInitiationStepStatus === "object");
assert(typeof DataReplicationState === "object");
assert(typeof EC2InstanceState === "object");
assert(typeof ExtensionStatus === "object");
assert(typeof FailbackLaunchType === "object");
assert(typeof FailbackReplicationError === "object");
assert(typeof FailbackState === "object");
assert(typeof InitiatedBy === "object");
assert(typeof JobLogEvent === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof LastLaunchResult === "object");
assert(typeof LastLaunchType === "object");
assert(typeof LaunchActionCategory === "object");
assert(typeof LaunchActionParameterType === "object");
assert(typeof LaunchActionRunStatus === "object");
assert(typeof LaunchActionType === "object");
assert(typeof LaunchDisposition === "object");
assert(typeof LaunchStatus === "object");
assert(typeof OriginEnvironment === "object");
assert(typeof PITPolicyRuleUnits === "object");
assert(typeof ProductCodeMode === "object");
assert(typeof RecoveryInstanceDataReplicationInitiationStepName === "object");
assert(typeof RecoveryInstanceDataReplicationInitiationStepStatus === "object");
assert(typeof RecoveryInstanceDataReplicationState === "object");
assert(typeof RecoveryResult === "object");
assert(typeof RecoverySnapshotsOrder === "object");
assert(typeof ReplicationConfigurationDataPlaneRouting === "object");
assert(typeof ReplicationConfigurationDefaultLargeStagingDiskType === "object");
assert(typeof ReplicationConfigurationEbsEncryption === "object");
assert(typeof ReplicationConfigurationReplicatedDiskStagingDiskType === "object");
assert(typeof ReplicationDirection === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof TargetInstanceTypeRightSizingMethod === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VolumeStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof DrsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DrsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DrsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DrsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DrsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DrsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UninitializedAccountException.prototype instanceof DrsServiceException);
assert(typeof UninitializedAccountException$ === "object");
assert(ValidationException.prototype instanceof DrsServiceException);
assert(typeof ValidationException$ === "object");
assert(DrsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeJobLogItems === "function");
assert(typeof paginateDescribeJobs === "function");
assert(typeof paginateDescribeLaunchConfigurationTemplates === "function");
assert(typeof paginateDescribeRecoveryInstances === "function");
assert(typeof paginateDescribeRecoverySnapshots === "function");
assert(typeof paginateDescribeReplicationConfigurationTemplates === "function");
assert(typeof paginateDescribeSourceNetworks === "function");
assert(typeof paginateDescribeSourceServers === "function");
assert(typeof paginateListExtensibleSourceServers === "function");
assert(typeof paginateListLaunchActions === "function");
assert(typeof paginateListStagingAccounts === "function");
console.log(`Drs index test passed.`);
