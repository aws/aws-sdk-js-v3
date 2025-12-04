import {
  ActionOnFailure,
  AddInstanceFleetCommand,
  AddInstanceGroupsCommand,
  AddJobFlowStepsCommand,
  AddTagsCommand,
  AdjustmentType,
  AuthMode,
  AutoScalingPolicyState,
  AutoScalingPolicyStateChangeReasonCode,
  CancelStepsCommand,
  CancelStepsRequestStatus,
  ClusterState,
  ClusterStateChangeReasonCode,
  ComparisonOperator,
  ComputeLimitsUnitType,
  CreatePersistentAppUICommand,
  CreateSecurityConfigurationCommand,
  CreateStudioCommand,
  CreateStudioSessionMappingCommand,
  DeleteSecurityConfigurationCommand,
  DeleteStudioCommand,
  DeleteStudioSessionMappingCommand,
  DescribeClusterCommand,
  DescribeJobFlowsCommand,
  DescribeNotebookExecutionCommand,
  DescribePersistentAppUICommand,
  DescribeReleaseLabelCommand,
  DescribeSecurityConfigurationCommand,
  DescribeStepCommand,
  DescribeStudioCommand,
  EMR,
  EMRClient,
  EMRServiceException,
  ExecutionEngineType,
  GetAutoTerminationPolicyCommand,
  GetBlockPublicAccessConfigurationCommand,
  GetClusterSessionCredentialsCommand,
  GetManagedScalingPolicyCommand,
  GetOnClusterAppUIPresignedURLCommand,
  GetPersistentAppUIPresignedURLCommand,
  GetStudioSessionMappingCommand,
  IdcUserAssignment,
  IdentityType,
  InstanceCollectionType,
  InstanceFleetState,
  InstanceFleetStateChangeReasonCode,
  InstanceFleetType,
  InstanceGroupState,
  InstanceGroupStateChangeReasonCode,
  InstanceGroupType,
  InstanceRoleType,
  InstanceState,
  InstanceStateChangeReasonCode,
  JobFlowExecutionState,
  ListBootstrapActionsCommand,
  ListClustersCommand,
  ListInstanceFleetsCommand,
  ListInstanceGroupsCommand,
  ListInstancesCommand,
  ListNotebookExecutionsCommand,
  ListReleaseLabelsCommand,
  ListSecurityConfigurationsCommand,
  ListStepsCommand,
  ListStudioSessionMappingsCommand,
  ListStudiosCommand,
  ListSupportedInstanceTypesCommand,
  MarketType,
  ModifyClusterCommand,
  ModifyInstanceFleetCommand,
  ModifyInstanceGroupsCommand,
  NotebookExecutionStatus,
  OnClusterAppUIType,
  OnDemandCapacityReservationPreference,
  OnDemandCapacityReservationUsageStrategy,
  OnDemandProvisioningAllocationStrategy,
  OutputNotebookFormat,
  PersistentAppUIType,
  PlacementGroupStrategy,
  ProfilerType,
  PutAutoScalingPolicyCommand,
  PutAutoTerminationPolicyCommand,
  PutBlockPublicAccessConfigurationCommand,
  PutManagedScalingPolicyCommand,
  ReconfigurationType,
  RemoveAutoScalingPolicyCommand,
  RemoveAutoTerminationPolicyCommand,
  RemoveManagedScalingPolicyCommand,
  RemoveTagsCommand,
  RepoUpgradeOnBoot,
  RunJobFlowCommand,
  ScaleDownBehavior,
  ScalingStrategy,
  SetKeepJobFlowAliveWhenNoStepsCommand,
  SetTerminationProtectionCommand,
  SetUnhealthyNodeReplacementCommand,
  SetVisibleToAllUsersCommand,
  SpotProvisioningAllocationStrategy,
  SpotProvisioningTimeoutAction,
  StartNotebookExecutionCommand,
  Statistic,
  StepCancellationOption,
  StepExecutionState,
  StepState,
  StepStateChangeReasonCode,
  StopNotebookExecutionCommand,
  TerminateJobFlowsCommand,
  Unit,
  UpdateStudioCommand,
  UpdateStudioSessionMappingCommand,
  paginateListBootstrapActions,
  paginateListClusters,
  paginateListInstanceFleets,
  paginateListInstanceGroups,
  paginateListInstances,
  paginateListNotebookExecutions,
  paginateListReleaseLabels,
  paginateListSecurityConfigurations,
  paginateListSteps,
  paginateListStudioSessionMappings,
  paginateListStudios,
  paginateListSupportedInstanceTypes,
  waitForClusterRunning,
  waitForClusterTerminated,
  waitForStepComplete,
  waitUntilClusterRunning,
  waitUntilClusterTerminated,
  waitUntilStepComplete,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EMRClient === "function")
assert(typeof EMR === "function")
// commands
assert(typeof AddInstanceFleetCommand === "function")
assert(typeof AddInstanceGroupsCommand === "function")
assert(typeof AddJobFlowStepsCommand === "function")
assert(typeof AddTagsCommand === "function")
assert(typeof CancelStepsCommand === "function")
assert(typeof CreatePersistentAppUICommand === "function")
assert(typeof CreateSecurityConfigurationCommand === "function")
assert(typeof CreateStudioCommand === "function")
assert(typeof CreateStudioSessionMappingCommand === "function")
assert(typeof DeleteSecurityConfigurationCommand === "function")
assert(typeof DeleteStudioCommand === "function")
assert(typeof DeleteStudioSessionMappingCommand === "function")
assert(typeof DescribeClusterCommand === "function")
assert(typeof DescribeJobFlowsCommand === "function")
assert(typeof DescribeNotebookExecutionCommand === "function")
assert(typeof DescribePersistentAppUICommand === "function")
assert(typeof DescribeReleaseLabelCommand === "function")
assert(typeof DescribeSecurityConfigurationCommand === "function")
assert(typeof DescribeStepCommand === "function")
assert(typeof DescribeStudioCommand === "function")
assert(typeof GetAutoTerminationPolicyCommand === "function")
assert(typeof GetBlockPublicAccessConfigurationCommand === "function")
assert(typeof GetClusterSessionCredentialsCommand === "function")
assert(typeof GetManagedScalingPolicyCommand === "function")
assert(typeof GetOnClusterAppUIPresignedURLCommand === "function")
assert(typeof GetPersistentAppUIPresignedURLCommand === "function")
assert(typeof GetStudioSessionMappingCommand === "function")
assert(typeof ListBootstrapActionsCommand === "function")
assert(typeof ListClustersCommand === "function")
assert(typeof ListInstanceFleetsCommand === "function")
assert(typeof ListInstanceGroupsCommand === "function")
assert(typeof ListInstancesCommand === "function")
assert(typeof ListNotebookExecutionsCommand === "function")
assert(typeof ListReleaseLabelsCommand === "function")
assert(typeof ListSecurityConfigurationsCommand === "function")
assert(typeof ListStepsCommand === "function")
assert(typeof ListStudiosCommand === "function")
assert(typeof ListStudioSessionMappingsCommand === "function")
assert(typeof ListSupportedInstanceTypesCommand === "function")
assert(typeof ModifyClusterCommand === "function")
assert(typeof ModifyInstanceFleetCommand === "function")
assert(typeof ModifyInstanceGroupsCommand === "function")
assert(typeof PutAutoScalingPolicyCommand === "function")
assert(typeof PutAutoTerminationPolicyCommand === "function")
assert(typeof PutBlockPublicAccessConfigurationCommand === "function")
assert(typeof PutManagedScalingPolicyCommand === "function")
assert(typeof RemoveAutoScalingPolicyCommand === "function")
assert(typeof RemoveAutoTerminationPolicyCommand === "function")
assert(typeof RemoveManagedScalingPolicyCommand === "function")
assert(typeof RemoveTagsCommand === "function")
assert(typeof RunJobFlowCommand === "function")
assert(typeof SetKeepJobFlowAliveWhenNoStepsCommand === "function")
assert(typeof SetTerminationProtectionCommand === "function")
assert(typeof SetUnhealthyNodeReplacementCommand === "function")
assert(typeof SetVisibleToAllUsersCommand === "function")
assert(typeof StartNotebookExecutionCommand === "function")
assert(typeof StopNotebookExecutionCommand === "function")
assert(typeof TerminateJobFlowsCommand === "function")
assert(typeof UpdateStudioCommand === "function")
assert(typeof UpdateStudioSessionMappingCommand === "function")
// enums
assert(typeof ActionOnFailure === "object");
assert(typeof AdjustmentType === "object");
assert(typeof AuthMode === "object");
assert(typeof AutoScalingPolicyState === "object");
assert(typeof AutoScalingPolicyStateChangeReasonCode === "object");
assert(typeof CancelStepsRequestStatus === "object");
assert(typeof ClusterState === "object");
assert(typeof ClusterStateChangeReasonCode === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof ComputeLimitsUnitType === "object");
assert(typeof ExecutionEngineType === "object");
assert(typeof IdcUserAssignment === "object");
assert(typeof IdentityType === "object");
assert(typeof InstanceCollectionType === "object");
assert(typeof InstanceFleetState === "object");
assert(typeof InstanceFleetStateChangeReasonCode === "object");
assert(typeof InstanceFleetType === "object");
assert(typeof InstanceGroupState === "object");
assert(typeof InstanceGroupStateChangeReasonCode === "object");
assert(typeof InstanceGroupType === "object");
assert(typeof InstanceRoleType === "object");
assert(typeof InstanceState === "object");
assert(typeof InstanceStateChangeReasonCode === "object");
assert(typeof JobFlowExecutionState === "object");
assert(typeof MarketType === "object");
assert(typeof NotebookExecutionStatus === "object");
assert(typeof OnClusterAppUIType === "object");
assert(typeof OnDemandCapacityReservationPreference === "object");
assert(typeof OnDemandCapacityReservationUsageStrategy === "object");
assert(typeof OnDemandProvisioningAllocationStrategy === "object");
assert(typeof OutputNotebookFormat === "object");
assert(typeof PersistentAppUIType === "object");
assert(typeof PlacementGroupStrategy === "object");
assert(typeof ProfilerType === "object");
assert(typeof ReconfigurationType === "object");
assert(typeof RepoUpgradeOnBoot === "object");
assert(typeof ScaleDownBehavior === "object");
assert(typeof ScalingStrategy === "object");
assert(typeof SpotProvisioningAllocationStrategy === "object");
assert(typeof SpotProvisioningTimeoutAction === "object");
assert(typeof Statistic === "object");
assert(typeof StepCancellationOption === "object");
assert(typeof StepExecutionState === "object");
assert(typeof StepState === "object");
assert(typeof StepStateChangeReasonCode === "object");
assert(typeof Unit === "object");
// errors
assert(EMRServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForClusterRunning === "function")
assert(typeof waitForClusterTerminated === "function")
assert(typeof waitForStepComplete === "function")
assert(typeof waitUntilClusterRunning === "function")
assert(typeof waitUntilClusterTerminated === "function")
assert(typeof waitUntilStepComplete === "function")
// paginators
assert(typeof paginateListBootstrapActions === "function")
assert(typeof paginateListClusters === "function")
assert(typeof paginateListInstanceFleets === "function")
assert(typeof paginateListInstanceGroups === "function")
assert(typeof paginateListInstances === "function")
assert(typeof paginateListNotebookExecutions === "function")
assert(typeof paginateListReleaseLabels === "function")
assert(typeof paginateListSecurityConfigurations === "function")
assert(typeof paginateListSteps === "function")
assert(typeof paginateListStudioSessionMappings === "function")
assert(typeof paginateListStudios === "function")
assert(typeof paginateListSupportedInstanceTypes === "function")
console.log(`EMR index test passed.`);
