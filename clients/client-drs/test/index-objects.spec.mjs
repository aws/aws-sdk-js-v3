import {
  AssociateSourceNetworkStackCommand,
  CreateExtendedSourceServerCommand,
  CreateLaunchConfigurationTemplateCommand,
  CreateReplicationConfigurationTemplateCommand,
  CreateSourceNetworkCommand,
  DataReplicationErrorString,
  DataReplicationInitiationStepName,
  DataReplicationInitiationStepStatus,
  DataReplicationState,
  DeleteJobCommand,
  DeleteLaunchActionCommand,
  DeleteLaunchConfigurationTemplateCommand,
  DeleteRecoveryInstanceCommand,
  DeleteReplicationConfigurationTemplateCommand,
  DeleteSourceNetworkCommand,
  DeleteSourceServerCommand,
  DescribeJobLogItemsCommand,
  DescribeJobsCommand,
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeRecoveryInstancesCommand,
  DescribeRecoverySnapshotsCommand,
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeSourceNetworksCommand,
  DescribeSourceServersCommand,
  DisconnectRecoveryInstanceCommand,
  DisconnectSourceServerCommand,
  Drs,
  DrsClient,
  DrsServiceException,
  EC2InstanceState,
  ExportSourceNetworkCfnTemplateCommand,
  ExtensionStatus,
  FailbackLaunchType,
  FailbackReplicationError,
  FailbackState,
  GetFailbackReplicationConfigurationCommand,
  GetLaunchConfigurationCommand,
  GetReplicationConfigurationCommand,
  InitializeServiceCommand,
  InitiatedBy,
  JobLogEvent,
  JobStatus,
  JobType,
  LastLaunchResult,
  LastLaunchType,
  LaunchActionCategory,
  LaunchActionParameterType,
  LaunchActionRunStatus,
  LaunchActionType,
  LaunchDisposition,
  LaunchStatus,
  ListExtensibleSourceServersCommand,
  ListLaunchActionsCommand,
  ListStagingAccountsCommand,
  ListTagsForResourceCommand,
  OriginEnvironment,
  PITPolicyRuleUnits,
  ProductCodeMode,
  PutLaunchActionCommand,
  RecoveryInstanceDataReplicationInitiationStepName,
  RecoveryInstanceDataReplicationInitiationStepStatus,
  RecoveryInstanceDataReplicationState,
  RecoveryResult,
  RecoverySnapshotsOrder,
  ReplicationConfigurationDataPlaneRouting,
  ReplicationConfigurationDefaultLargeStagingDiskType,
  ReplicationConfigurationEbsEncryption,
  ReplicationConfigurationReplicatedDiskStagingDiskType,
  ReplicationDirection,
  ReplicationStatus,
  RetryDataReplicationCommand,
  ReverseReplicationCommand,
  StartFailbackLaunchCommand,
  StartRecoveryCommand,
  StartReplicationCommand,
  StartSourceNetworkRecoveryCommand,
  StartSourceNetworkReplicationCommand,
  StopFailbackCommand,
  StopReplicationCommand,
  StopSourceNetworkReplicationCommand,
  TagResourceCommand,
  TargetInstanceTypeRightSizingMethod,
  TerminateRecoveryInstancesCommand,
  UntagResourceCommand,
  UpdateFailbackReplicationConfigurationCommand,
  UpdateLaunchConfigurationCommand,
  UpdateLaunchConfigurationTemplateCommand,
  UpdateReplicationConfigurationCommand,
  UpdateReplicationConfigurationTemplateCommand,
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
assert(typeof DrsClient === "function")
assert(typeof Drs === "function")
// commands
assert(typeof AssociateSourceNetworkStackCommand === "function")
assert(typeof CreateExtendedSourceServerCommand === "function")
assert(typeof CreateLaunchConfigurationTemplateCommand === "function")
assert(typeof CreateReplicationConfigurationTemplateCommand === "function")
assert(typeof CreateSourceNetworkCommand === "function")
assert(typeof DeleteJobCommand === "function")
assert(typeof DeleteLaunchActionCommand === "function")
assert(typeof DeleteLaunchConfigurationTemplateCommand === "function")
assert(typeof DeleteRecoveryInstanceCommand === "function")
assert(typeof DeleteReplicationConfigurationTemplateCommand === "function")
assert(typeof DeleteSourceNetworkCommand === "function")
assert(typeof DeleteSourceServerCommand === "function")
assert(typeof DescribeJobLogItemsCommand === "function")
assert(typeof DescribeJobsCommand === "function")
assert(typeof DescribeLaunchConfigurationTemplatesCommand === "function")
assert(typeof DescribeRecoveryInstancesCommand === "function")
assert(typeof DescribeRecoverySnapshotsCommand === "function")
assert(typeof DescribeReplicationConfigurationTemplatesCommand === "function")
assert(typeof DescribeSourceNetworksCommand === "function")
assert(typeof DescribeSourceServersCommand === "function")
assert(typeof DisconnectRecoveryInstanceCommand === "function")
assert(typeof DisconnectSourceServerCommand === "function")
assert(typeof ExportSourceNetworkCfnTemplateCommand === "function")
assert(typeof GetFailbackReplicationConfigurationCommand === "function")
assert(typeof GetLaunchConfigurationCommand === "function")
assert(typeof GetReplicationConfigurationCommand === "function")
assert(typeof InitializeServiceCommand === "function")
assert(typeof ListExtensibleSourceServersCommand === "function")
assert(typeof ListLaunchActionsCommand === "function")
assert(typeof ListStagingAccountsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutLaunchActionCommand === "function")
assert(typeof RetryDataReplicationCommand === "function")
assert(typeof ReverseReplicationCommand === "function")
assert(typeof StartFailbackLaunchCommand === "function")
assert(typeof StartRecoveryCommand === "function")
assert(typeof StartReplicationCommand === "function")
assert(typeof StartSourceNetworkRecoveryCommand === "function")
assert(typeof StartSourceNetworkReplicationCommand === "function")
assert(typeof StopFailbackCommand === "function")
assert(typeof StopReplicationCommand === "function")
assert(typeof StopSourceNetworkReplicationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TerminateRecoveryInstancesCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateFailbackReplicationConfigurationCommand === "function")
assert(typeof UpdateLaunchConfigurationCommand === "function")
assert(typeof UpdateLaunchConfigurationTemplateCommand === "function")
assert(typeof UpdateReplicationConfigurationCommand === "function")
assert(typeof UpdateReplicationConfigurationTemplateCommand === "function")
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
assert(typeof VolumeStatus === "object");
// errors
assert(DrsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeJobLogItems === "function")
assert(typeof paginateDescribeJobs === "function")
assert(typeof paginateDescribeLaunchConfigurationTemplates === "function")
assert(typeof paginateDescribeRecoveryInstances === "function")
assert(typeof paginateDescribeRecoverySnapshots === "function")
assert(typeof paginateDescribeReplicationConfigurationTemplates === "function")
assert(typeof paginateDescribeSourceNetworks === "function")
assert(typeof paginateDescribeSourceServers === "function")
assert(typeof paginateListExtensibleSourceServers === "function")
assert(typeof paginateListLaunchActions === "function")
assert(typeof paginateListStagingAccounts === "function")
console.log(`Drs index test passed.`);
