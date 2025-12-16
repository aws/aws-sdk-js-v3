import {
  ActionOnFailure,
  AddInstanceFleet$,
  AddInstanceFleetCommand,
  AddInstanceFleetInput$,
  AddInstanceFleetOutput$,
  AddInstanceGroups$,
  AddInstanceGroupsCommand,
  AddInstanceGroupsInput$,
  AddInstanceGroupsOutput$,
  AddJobFlowSteps$,
  AddJobFlowStepsCommand,
  AddJobFlowStepsInput$,
  AddJobFlowStepsOutput$,
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  AdjustmentType,
  Application$,
  AuthMode,
  AutoScalingPolicy$,
  AutoScalingPolicyDescription$,
  AutoScalingPolicyState,
  AutoScalingPolicyStateChangeReason$,
  AutoScalingPolicyStateChangeReasonCode,
  AutoScalingPolicyStatus$,
  AutoTerminationPolicy$,
  BlockPublicAccessConfiguration$,
  BlockPublicAccessConfigurationMetadata$,
  BootstrapActionConfig$,
  BootstrapActionDetail$,
  CancelSteps$,
  CancelStepsCommand,
  CancelStepsInfo$,
  CancelStepsInput$,
  CancelStepsOutput$,
  CancelStepsRequestStatus,
  CloudWatchAlarmDefinition$,
  CloudWatchLogConfiguration$,
  Cluster$,
  ClusterState,
  ClusterStateChangeReason$,
  ClusterStateChangeReasonCode,
  ClusterStatus$,
  ClusterSummary$,
  ClusterTimeline$,
  Command$,
  ComparisonOperator,
  ComputeLimits$,
  ComputeLimitsUnitType,
  Configuration$,
  CreatePersistentAppUI$,
  CreatePersistentAppUICommand,
  CreatePersistentAppUIInput$,
  CreatePersistentAppUIOutput$,
  CreateSecurityConfiguration$,
  CreateSecurityConfigurationCommand,
  CreateSecurityConfigurationInput$,
  CreateSecurityConfigurationOutput$,
  CreateStudio$,
  CreateStudioCommand,
  CreateStudioInput$,
  CreateStudioOutput$,
  CreateStudioSessionMapping$,
  CreateStudioSessionMappingCommand,
  CreateStudioSessionMappingInput$,
  Credentials$,
  DeleteSecurityConfiguration$,
  DeleteSecurityConfigurationCommand,
  DeleteSecurityConfigurationInput$,
  DeleteSecurityConfigurationOutput$,
  DeleteStudio$,
  DeleteStudioCommand,
  DeleteStudioInput$,
  DeleteStudioSessionMapping$,
  DeleteStudioSessionMappingCommand,
  DeleteStudioSessionMappingInput$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterInput$,
  DescribeClusterOutput$,
  DescribeJobFlows$,
  DescribeJobFlowsCommand,
  DescribeJobFlowsInput$,
  DescribeJobFlowsOutput$,
  DescribeNotebookExecution$,
  DescribeNotebookExecutionCommand,
  DescribeNotebookExecutionInput$,
  DescribeNotebookExecutionOutput$,
  DescribePersistentAppUI$,
  DescribePersistentAppUICommand,
  DescribePersistentAppUIInput$,
  DescribePersistentAppUIOutput$,
  DescribeReleaseLabel$,
  DescribeReleaseLabelCommand,
  DescribeReleaseLabelInput$,
  DescribeReleaseLabelOutput$,
  DescribeSecurityConfiguration$,
  DescribeSecurityConfigurationCommand,
  DescribeSecurityConfigurationInput$,
  DescribeSecurityConfigurationOutput$,
  DescribeStep$,
  DescribeStepCommand,
  DescribeStepInput$,
  DescribeStepOutput$,
  DescribeStudio$,
  DescribeStudioCommand,
  DescribeStudioInput$,
  DescribeStudioOutput$,
  EMR,
  EMRClient,
  EMRContainersConfig$,
  EMRServiceException,
  EbsBlockDevice$,
  EbsBlockDeviceConfig$,
  EbsConfiguration$,
  EbsVolume$,
  Ec2InstanceAttributes$,
  ErrorDetail$,
  ExecutionEngineConfig$,
  ExecutionEngineType,
  FailureDetails$,
  GetAutoTerminationPolicy$,
  GetAutoTerminationPolicyCommand,
  GetAutoTerminationPolicyInput$,
  GetAutoTerminationPolicyOutput$,
  GetBlockPublicAccessConfiguration$,
  GetBlockPublicAccessConfigurationCommand,
  GetBlockPublicAccessConfigurationInput$,
  GetBlockPublicAccessConfigurationOutput$,
  GetClusterSessionCredentials$,
  GetClusterSessionCredentialsCommand,
  GetClusterSessionCredentialsInput$,
  GetClusterSessionCredentialsOutput$,
  GetManagedScalingPolicy$,
  GetManagedScalingPolicyCommand,
  GetManagedScalingPolicyInput$,
  GetManagedScalingPolicyOutput$,
  GetOnClusterAppUIPresignedURL$,
  GetOnClusterAppUIPresignedURLCommand,
  GetOnClusterAppUIPresignedURLInput$,
  GetOnClusterAppUIPresignedURLOutput$,
  GetPersistentAppUIPresignedURL$,
  GetPersistentAppUIPresignedURLCommand,
  GetPersistentAppUIPresignedURLInput$,
  GetPersistentAppUIPresignedURLOutput$,
  GetStudioSessionMapping$,
  GetStudioSessionMappingCommand,
  GetStudioSessionMappingInput$,
  GetStudioSessionMappingOutput$,
  HadoopJarStepConfig$,
  HadoopStepConfig$,
  IdcUserAssignment,
  IdentityType,
  Instance$,
  InstanceCollectionType,
  InstanceFleet$,
  InstanceFleetConfig$,
  InstanceFleetModifyConfig$,
  InstanceFleetProvisioningSpecifications$,
  InstanceFleetResizingSpecifications$,
  InstanceFleetState,
  InstanceFleetStateChangeReason$,
  InstanceFleetStateChangeReasonCode,
  InstanceFleetStatus$,
  InstanceFleetTimeline$,
  InstanceFleetType,
  InstanceGroup$,
  InstanceGroupConfig$,
  InstanceGroupDetail$,
  InstanceGroupModifyConfig$,
  InstanceGroupState,
  InstanceGroupStateChangeReason$,
  InstanceGroupStateChangeReasonCode,
  InstanceGroupStatus$,
  InstanceGroupTimeline$,
  InstanceGroupType,
  InstanceResizePolicy$,
  InstanceRoleType,
  InstanceState,
  InstanceStateChangeReason$,
  InstanceStateChangeReasonCode,
  InstanceStatus$,
  InstanceTimeline$,
  InstanceTypeConfig$,
  InstanceTypeSpecification$,
  InternalServerError,
  InternalServerError$,
  InternalServerException,
  InternalServerException$,
  InvalidRequestException,
  InvalidRequestException$,
  JobFlowDetail$,
  JobFlowExecutionState,
  JobFlowExecutionStatusDetail$,
  JobFlowInstancesConfig$,
  JobFlowInstancesDetail$,
  KerberosAttributes$,
  KeyValue$,
  ListBootstrapActions$,
  ListBootstrapActionsCommand,
  ListBootstrapActionsInput$,
  ListBootstrapActionsOutput$,
  ListClusters$,
  ListClustersCommand,
  ListClustersInput$,
  ListClustersOutput$,
  ListInstanceFleets$,
  ListInstanceFleetsCommand,
  ListInstanceFleetsInput$,
  ListInstanceFleetsOutput$,
  ListInstanceGroups$,
  ListInstanceGroupsCommand,
  ListInstanceGroupsInput$,
  ListInstanceGroupsOutput$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesInput$,
  ListInstancesOutput$,
  ListNotebookExecutions$,
  ListNotebookExecutionsCommand,
  ListNotebookExecutionsInput$,
  ListNotebookExecutionsOutput$,
  ListReleaseLabels$,
  ListReleaseLabelsCommand,
  ListReleaseLabelsInput$,
  ListReleaseLabelsOutput$,
  ListSecurityConfigurations$,
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsInput$,
  ListSecurityConfigurationsOutput$,
  ListSteps$,
  ListStepsCommand,
  ListStepsInput$,
  ListStepsOutput$,
  ListStudioSessionMappings$,
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsInput$,
  ListStudioSessionMappingsOutput$,
  ListStudios$,
  ListStudiosCommand,
  ListStudiosInput$,
  ListStudiosOutput$,
  ListSupportedInstanceTypes$,
  ListSupportedInstanceTypesCommand,
  ListSupportedInstanceTypesInput$,
  ListSupportedInstanceTypesOutput$,
  ManagedScalingPolicy$,
  MarketType,
  MetricDimension$,
  ModifyCluster$,
  ModifyClusterCommand,
  ModifyClusterInput$,
  ModifyClusterOutput$,
  ModifyInstanceFleet$,
  ModifyInstanceFleetCommand,
  ModifyInstanceFleetInput$,
  ModifyInstanceGroups$,
  ModifyInstanceGroupsCommand,
  ModifyInstanceGroupsInput$,
  MonitoringConfiguration$,
  NotebookExecution$,
  NotebookExecutionStatus,
  NotebookExecutionSummary$,
  NotebookS3LocationForOutput$,
  NotebookS3LocationFromInput$,
  OSRelease$,
  OnClusterAppUIType,
  OnDemandCapacityReservationOptions$,
  OnDemandCapacityReservationPreference,
  OnDemandCapacityReservationUsageStrategy,
  OnDemandProvisioningAllocationStrategy,
  OnDemandProvisioningSpecification$,
  OnDemandResizingSpecification$,
  OutputNotebookFormat,
  OutputNotebookS3LocationForOutput$,
  OutputNotebookS3LocationFromInput$,
  PersistentAppUI$,
  PersistentAppUIType,
  PlacementGroupConfig$,
  PlacementGroupStrategy,
  PlacementType$,
  PortRange$,
  ProfilerType,
  PutAutoScalingPolicy$,
  PutAutoScalingPolicyCommand,
  PutAutoScalingPolicyInput$,
  PutAutoScalingPolicyOutput$,
  PutAutoTerminationPolicy$,
  PutAutoTerminationPolicyCommand,
  PutAutoTerminationPolicyInput$,
  PutAutoTerminationPolicyOutput$,
  PutBlockPublicAccessConfiguration$,
  PutBlockPublicAccessConfigurationCommand,
  PutBlockPublicAccessConfigurationInput$,
  PutBlockPublicAccessConfigurationOutput$,
  PutManagedScalingPolicy$,
  PutManagedScalingPolicyCommand,
  PutManagedScalingPolicyInput$,
  PutManagedScalingPolicyOutput$,
  ReconfigurationType,
  ReleaseLabelFilter$,
  RemoveAutoScalingPolicy$,
  RemoveAutoScalingPolicyCommand,
  RemoveAutoScalingPolicyInput$,
  RemoveAutoScalingPolicyOutput$,
  RemoveAutoTerminationPolicy$,
  RemoveAutoTerminationPolicyCommand,
  RemoveAutoTerminationPolicyInput$,
  RemoveAutoTerminationPolicyOutput$,
  RemoveManagedScalingPolicy$,
  RemoveManagedScalingPolicyCommand,
  RemoveManagedScalingPolicyInput$,
  RemoveManagedScalingPolicyOutput$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsInput$,
  RemoveTagsOutput$,
  RepoUpgradeOnBoot,
  RunJobFlow$,
  RunJobFlowCommand,
  RunJobFlowInput$,
  RunJobFlowOutput$,
  S3MonitoringConfiguration$,
  ScaleDownBehavior,
  ScalingAction$,
  ScalingConstraints$,
  ScalingRule$,
  ScalingStrategy,
  ScalingTrigger$,
  ScriptBootstrapActionConfig$,
  SecurityConfigurationSummary$,
  SessionMappingDetail$,
  SessionMappingSummary$,
  SetKeepJobFlowAliveWhenNoSteps$,
  SetKeepJobFlowAliveWhenNoStepsCommand,
  SetKeepJobFlowAliveWhenNoStepsInput$,
  SetTerminationProtection$,
  SetTerminationProtectionCommand,
  SetTerminationProtectionInput$,
  SetUnhealthyNodeReplacement$,
  SetUnhealthyNodeReplacementCommand,
  SetUnhealthyNodeReplacementInput$,
  SetVisibleToAllUsers$,
  SetVisibleToAllUsersCommand,
  SetVisibleToAllUsersInput$,
  ShrinkPolicy$,
  SimpleScalingPolicyConfiguration$,
  SimplifiedApplication$,
  SpotProvisioningAllocationStrategy,
  SpotProvisioningSpecification$,
  SpotProvisioningTimeoutAction,
  SpotResizingSpecification$,
  StartNotebookExecution$,
  StartNotebookExecutionCommand,
  StartNotebookExecutionInput$,
  StartNotebookExecutionOutput$,
  Statistic,
  Step$,
  StepCancellationOption,
  StepConfig$,
  StepDetail$,
  StepExecutionState,
  StepExecutionStatusDetail$,
  StepMonitoringConfiguration$,
  StepState,
  StepStateChangeReason$,
  StepStateChangeReasonCode,
  StepStatus$,
  StepSummary$,
  StepTimeline$,
  StopNotebookExecution$,
  StopNotebookExecutionCommand,
  StopNotebookExecutionInput$,
  Studio$,
  StudioSummary$,
  SupportedInstanceType$,
  SupportedProductConfig$,
  Tag$,
  TerminateJobFlows$,
  TerminateJobFlowsCommand,
  TerminateJobFlowsInput$,
  Unit,
  UpdateStudio$,
  UpdateStudioCommand,
  UpdateStudioInput$,
  UpdateStudioSessionMapping$,
  UpdateStudioSessionMappingCommand,
  UpdateStudioSessionMappingInput$,
  UsernamePassword$,
  VolumeSpecification$,
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
assert(typeof EMRClient === "function");
assert(typeof EMR === "function");
// commands
assert(typeof AddInstanceFleetCommand === "function");
assert(typeof AddInstanceFleet$ === "object");
assert(typeof AddInstanceGroupsCommand === "function");
assert(typeof AddInstanceGroups$ === "object");
assert(typeof AddJobFlowStepsCommand === "function");
assert(typeof AddJobFlowSteps$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof CancelStepsCommand === "function");
assert(typeof CancelSteps$ === "object");
assert(typeof CreatePersistentAppUICommand === "function");
assert(typeof CreatePersistentAppUI$ === "object");
assert(typeof CreateSecurityConfigurationCommand === "function");
assert(typeof CreateSecurityConfiguration$ === "object");
assert(typeof CreateStudioCommand === "function");
assert(typeof CreateStudio$ === "object");
assert(typeof CreateStudioSessionMappingCommand === "function");
assert(typeof CreateStudioSessionMapping$ === "object");
assert(typeof DeleteSecurityConfigurationCommand === "function");
assert(typeof DeleteSecurityConfiguration$ === "object");
assert(typeof DeleteStudioCommand === "function");
assert(typeof DeleteStudio$ === "object");
assert(typeof DeleteStudioSessionMappingCommand === "function");
assert(typeof DeleteStudioSessionMapping$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeJobFlowsCommand === "function");
assert(typeof DescribeJobFlows$ === "object");
assert(typeof DescribeNotebookExecutionCommand === "function");
assert(typeof DescribeNotebookExecution$ === "object");
assert(typeof DescribePersistentAppUICommand === "function");
assert(typeof DescribePersistentAppUI$ === "object");
assert(typeof DescribeReleaseLabelCommand === "function");
assert(typeof DescribeReleaseLabel$ === "object");
assert(typeof DescribeSecurityConfigurationCommand === "function");
assert(typeof DescribeSecurityConfiguration$ === "object");
assert(typeof DescribeStepCommand === "function");
assert(typeof DescribeStep$ === "object");
assert(typeof DescribeStudioCommand === "function");
assert(typeof DescribeStudio$ === "object");
assert(typeof GetAutoTerminationPolicyCommand === "function");
assert(typeof GetAutoTerminationPolicy$ === "object");
assert(typeof GetBlockPublicAccessConfigurationCommand === "function");
assert(typeof GetBlockPublicAccessConfiguration$ === "object");
assert(typeof GetClusterSessionCredentialsCommand === "function");
assert(typeof GetClusterSessionCredentials$ === "object");
assert(typeof GetManagedScalingPolicyCommand === "function");
assert(typeof GetManagedScalingPolicy$ === "object");
assert(typeof GetOnClusterAppUIPresignedURLCommand === "function");
assert(typeof GetOnClusterAppUIPresignedURL$ === "object");
assert(typeof GetPersistentAppUIPresignedURLCommand === "function");
assert(typeof GetPersistentAppUIPresignedURL$ === "object");
assert(typeof GetStudioSessionMappingCommand === "function");
assert(typeof GetStudioSessionMapping$ === "object");
assert(typeof ListBootstrapActionsCommand === "function");
assert(typeof ListBootstrapActions$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListInstanceFleetsCommand === "function");
assert(typeof ListInstanceFleets$ === "object");
assert(typeof ListInstanceGroupsCommand === "function");
assert(typeof ListInstanceGroups$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListNotebookExecutionsCommand === "function");
assert(typeof ListNotebookExecutions$ === "object");
assert(typeof ListReleaseLabelsCommand === "function");
assert(typeof ListReleaseLabels$ === "object");
assert(typeof ListSecurityConfigurationsCommand === "function");
assert(typeof ListSecurityConfigurations$ === "object");
assert(typeof ListStepsCommand === "function");
assert(typeof ListSteps$ === "object");
assert(typeof ListStudiosCommand === "function");
assert(typeof ListStudios$ === "object");
assert(typeof ListStudioSessionMappingsCommand === "function");
assert(typeof ListStudioSessionMappings$ === "object");
assert(typeof ListSupportedInstanceTypesCommand === "function");
assert(typeof ListSupportedInstanceTypes$ === "object");
assert(typeof ModifyClusterCommand === "function");
assert(typeof ModifyCluster$ === "object");
assert(typeof ModifyInstanceFleetCommand === "function");
assert(typeof ModifyInstanceFleet$ === "object");
assert(typeof ModifyInstanceGroupsCommand === "function");
assert(typeof ModifyInstanceGroups$ === "object");
assert(typeof PutAutoScalingPolicyCommand === "function");
assert(typeof PutAutoScalingPolicy$ === "object");
assert(typeof PutAutoTerminationPolicyCommand === "function");
assert(typeof PutAutoTerminationPolicy$ === "object");
assert(typeof PutBlockPublicAccessConfigurationCommand === "function");
assert(typeof PutBlockPublicAccessConfiguration$ === "object");
assert(typeof PutManagedScalingPolicyCommand === "function");
assert(typeof PutManagedScalingPolicy$ === "object");
assert(typeof RemoveAutoScalingPolicyCommand === "function");
assert(typeof RemoveAutoScalingPolicy$ === "object");
assert(typeof RemoveAutoTerminationPolicyCommand === "function");
assert(typeof RemoveAutoTerminationPolicy$ === "object");
assert(typeof RemoveManagedScalingPolicyCommand === "function");
assert(typeof RemoveManagedScalingPolicy$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof RunJobFlowCommand === "function");
assert(typeof RunJobFlow$ === "object");
assert(typeof SetKeepJobFlowAliveWhenNoStepsCommand === "function");
assert(typeof SetKeepJobFlowAliveWhenNoSteps$ === "object");
assert(typeof SetTerminationProtectionCommand === "function");
assert(typeof SetTerminationProtection$ === "object");
assert(typeof SetUnhealthyNodeReplacementCommand === "function");
assert(typeof SetUnhealthyNodeReplacement$ === "object");
assert(typeof SetVisibleToAllUsersCommand === "function");
assert(typeof SetVisibleToAllUsers$ === "object");
assert(typeof StartNotebookExecutionCommand === "function");
assert(typeof StartNotebookExecution$ === "object");
assert(typeof StopNotebookExecutionCommand === "function");
assert(typeof StopNotebookExecution$ === "object");
assert(typeof TerminateJobFlowsCommand === "function");
assert(typeof TerminateJobFlows$ === "object");
assert(typeof UpdateStudioCommand === "function");
assert(typeof UpdateStudio$ === "object");
assert(typeof UpdateStudioSessionMappingCommand === "function");
assert(typeof UpdateStudioSessionMapping$ === "object");
// structural schemas
assert(typeof AddInstanceFleetInput$ === "object");
assert(typeof AddInstanceFleetOutput$ === "object");
assert(typeof AddInstanceGroupsInput$ === "object");
assert(typeof AddInstanceGroupsOutput$ === "object");
assert(typeof AddJobFlowStepsInput$ === "object");
assert(typeof AddJobFlowStepsOutput$ === "object");
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof Application$ === "object");
assert(typeof AutoScalingPolicy$ === "object");
assert(typeof AutoScalingPolicyDescription$ === "object");
assert(typeof AutoScalingPolicyStateChangeReason$ === "object");
assert(typeof AutoScalingPolicyStatus$ === "object");
assert(typeof AutoTerminationPolicy$ === "object");
assert(typeof BlockPublicAccessConfiguration$ === "object");
assert(typeof BlockPublicAccessConfigurationMetadata$ === "object");
assert(typeof BootstrapActionConfig$ === "object");
assert(typeof BootstrapActionDetail$ === "object");
assert(typeof CancelStepsInfo$ === "object");
assert(typeof CancelStepsInput$ === "object");
assert(typeof CancelStepsOutput$ === "object");
assert(typeof CloudWatchAlarmDefinition$ === "object");
assert(typeof CloudWatchLogConfiguration$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterStateChangeReason$ === "object");
assert(typeof ClusterStatus$ === "object");
assert(typeof ClusterSummary$ === "object");
assert(typeof ClusterTimeline$ === "object");
assert(typeof Command$ === "object");
assert(typeof ComputeLimits$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof CreatePersistentAppUIInput$ === "object");
assert(typeof CreatePersistentAppUIOutput$ === "object");
assert(typeof CreateSecurityConfigurationInput$ === "object");
assert(typeof CreateSecurityConfigurationOutput$ === "object");
assert(typeof CreateStudioInput$ === "object");
assert(typeof CreateStudioOutput$ === "object");
assert(typeof CreateStudioSessionMappingInput$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DeleteSecurityConfigurationInput$ === "object");
assert(typeof DeleteSecurityConfigurationOutput$ === "object");
assert(typeof DeleteStudioInput$ === "object");
assert(typeof DeleteStudioSessionMappingInput$ === "object");
assert(typeof DescribeClusterInput$ === "object");
assert(typeof DescribeClusterOutput$ === "object");
assert(typeof DescribeJobFlowsInput$ === "object");
assert(typeof DescribeJobFlowsOutput$ === "object");
assert(typeof DescribeNotebookExecutionInput$ === "object");
assert(typeof DescribeNotebookExecutionOutput$ === "object");
assert(typeof DescribePersistentAppUIInput$ === "object");
assert(typeof DescribePersistentAppUIOutput$ === "object");
assert(typeof DescribeReleaseLabelInput$ === "object");
assert(typeof DescribeReleaseLabelOutput$ === "object");
assert(typeof DescribeSecurityConfigurationInput$ === "object");
assert(typeof DescribeSecurityConfigurationOutput$ === "object");
assert(typeof DescribeStepInput$ === "object");
assert(typeof DescribeStepOutput$ === "object");
assert(typeof DescribeStudioInput$ === "object");
assert(typeof DescribeStudioOutput$ === "object");
assert(typeof EbsBlockDevice$ === "object");
assert(typeof EbsBlockDeviceConfig$ === "object");
assert(typeof EbsConfiguration$ === "object");
assert(typeof EbsVolume$ === "object");
assert(typeof Ec2InstanceAttributes$ === "object");
assert(typeof EMRContainersConfig$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof ExecutionEngineConfig$ === "object");
assert(typeof FailureDetails$ === "object");
assert(typeof GetAutoTerminationPolicyInput$ === "object");
assert(typeof GetAutoTerminationPolicyOutput$ === "object");
assert(typeof GetBlockPublicAccessConfigurationInput$ === "object");
assert(typeof GetBlockPublicAccessConfigurationOutput$ === "object");
assert(typeof GetClusterSessionCredentialsInput$ === "object");
assert(typeof GetClusterSessionCredentialsOutput$ === "object");
assert(typeof GetManagedScalingPolicyInput$ === "object");
assert(typeof GetManagedScalingPolicyOutput$ === "object");
assert(typeof GetOnClusterAppUIPresignedURLInput$ === "object");
assert(typeof GetOnClusterAppUIPresignedURLOutput$ === "object");
assert(typeof GetPersistentAppUIPresignedURLInput$ === "object");
assert(typeof GetPersistentAppUIPresignedURLOutput$ === "object");
assert(typeof GetStudioSessionMappingInput$ === "object");
assert(typeof GetStudioSessionMappingOutput$ === "object");
assert(typeof HadoopJarStepConfig$ === "object");
assert(typeof HadoopStepConfig$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceFleet$ === "object");
assert(typeof InstanceFleetConfig$ === "object");
assert(typeof InstanceFleetModifyConfig$ === "object");
assert(typeof InstanceFleetProvisioningSpecifications$ === "object");
assert(typeof InstanceFleetResizingSpecifications$ === "object");
assert(typeof InstanceFleetStateChangeReason$ === "object");
assert(typeof InstanceFleetStatus$ === "object");
assert(typeof InstanceFleetTimeline$ === "object");
assert(typeof InstanceGroup$ === "object");
assert(typeof InstanceGroupConfig$ === "object");
assert(typeof InstanceGroupDetail$ === "object");
assert(typeof InstanceGroupModifyConfig$ === "object");
assert(typeof InstanceGroupStateChangeReason$ === "object");
assert(typeof InstanceGroupStatus$ === "object");
assert(typeof InstanceGroupTimeline$ === "object");
assert(typeof InstanceResizePolicy$ === "object");
assert(typeof InstanceStateChangeReason$ === "object");
assert(typeof InstanceStatus$ === "object");
assert(typeof InstanceTimeline$ === "object");
assert(typeof InstanceTypeConfig$ === "object");
assert(typeof InstanceTypeSpecification$ === "object");
assert(typeof JobFlowDetail$ === "object");
assert(typeof JobFlowExecutionStatusDetail$ === "object");
assert(typeof JobFlowInstancesConfig$ === "object");
assert(typeof JobFlowInstancesDetail$ === "object");
assert(typeof KerberosAttributes$ === "object");
assert(typeof KeyValue$ === "object");
assert(typeof ListBootstrapActionsInput$ === "object");
assert(typeof ListBootstrapActionsOutput$ === "object");
assert(typeof ListClustersInput$ === "object");
assert(typeof ListClustersOutput$ === "object");
assert(typeof ListInstanceFleetsInput$ === "object");
assert(typeof ListInstanceFleetsOutput$ === "object");
assert(typeof ListInstanceGroupsInput$ === "object");
assert(typeof ListInstanceGroupsOutput$ === "object");
assert(typeof ListInstancesInput$ === "object");
assert(typeof ListInstancesOutput$ === "object");
assert(typeof ListNotebookExecutionsInput$ === "object");
assert(typeof ListNotebookExecutionsOutput$ === "object");
assert(typeof ListReleaseLabelsInput$ === "object");
assert(typeof ListReleaseLabelsOutput$ === "object");
assert(typeof ListSecurityConfigurationsInput$ === "object");
assert(typeof ListSecurityConfigurationsOutput$ === "object");
assert(typeof ListStepsInput$ === "object");
assert(typeof ListStepsOutput$ === "object");
assert(typeof ListStudioSessionMappingsInput$ === "object");
assert(typeof ListStudioSessionMappingsOutput$ === "object");
assert(typeof ListStudiosInput$ === "object");
assert(typeof ListStudiosOutput$ === "object");
assert(typeof ListSupportedInstanceTypesInput$ === "object");
assert(typeof ListSupportedInstanceTypesOutput$ === "object");
assert(typeof ManagedScalingPolicy$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof ModifyClusterInput$ === "object");
assert(typeof ModifyClusterOutput$ === "object");
assert(typeof ModifyInstanceFleetInput$ === "object");
assert(typeof ModifyInstanceGroupsInput$ === "object");
assert(typeof MonitoringConfiguration$ === "object");
assert(typeof NotebookExecution$ === "object");
assert(typeof NotebookExecutionSummary$ === "object");
assert(typeof NotebookS3LocationForOutput$ === "object");
assert(typeof NotebookS3LocationFromInput$ === "object");
assert(typeof OnDemandCapacityReservationOptions$ === "object");
assert(typeof OnDemandProvisioningSpecification$ === "object");
assert(typeof OnDemandResizingSpecification$ === "object");
assert(typeof OSRelease$ === "object");
assert(typeof OutputNotebookS3LocationForOutput$ === "object");
assert(typeof OutputNotebookS3LocationFromInput$ === "object");
assert(typeof PersistentAppUI$ === "object");
assert(typeof PlacementGroupConfig$ === "object");
assert(typeof PlacementType$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PutAutoScalingPolicyInput$ === "object");
assert(typeof PutAutoScalingPolicyOutput$ === "object");
assert(typeof PutAutoTerminationPolicyInput$ === "object");
assert(typeof PutAutoTerminationPolicyOutput$ === "object");
assert(typeof PutBlockPublicAccessConfigurationInput$ === "object");
assert(typeof PutBlockPublicAccessConfigurationOutput$ === "object");
assert(typeof PutManagedScalingPolicyInput$ === "object");
assert(typeof PutManagedScalingPolicyOutput$ === "object");
assert(typeof ReleaseLabelFilter$ === "object");
assert(typeof RemoveAutoScalingPolicyInput$ === "object");
assert(typeof RemoveAutoScalingPolicyOutput$ === "object");
assert(typeof RemoveAutoTerminationPolicyInput$ === "object");
assert(typeof RemoveAutoTerminationPolicyOutput$ === "object");
assert(typeof RemoveManagedScalingPolicyInput$ === "object");
assert(typeof RemoveManagedScalingPolicyOutput$ === "object");
assert(typeof RemoveTagsInput$ === "object");
assert(typeof RemoveTagsOutput$ === "object");
assert(typeof RunJobFlowInput$ === "object");
assert(typeof RunJobFlowOutput$ === "object");
assert(typeof S3MonitoringConfiguration$ === "object");
assert(typeof ScalingAction$ === "object");
assert(typeof ScalingConstraints$ === "object");
assert(typeof ScalingRule$ === "object");
assert(typeof ScalingTrigger$ === "object");
assert(typeof ScriptBootstrapActionConfig$ === "object");
assert(typeof SecurityConfigurationSummary$ === "object");
assert(typeof SessionMappingDetail$ === "object");
assert(typeof SessionMappingSummary$ === "object");
assert(typeof SetKeepJobFlowAliveWhenNoStepsInput$ === "object");
assert(typeof SetTerminationProtectionInput$ === "object");
assert(typeof SetUnhealthyNodeReplacementInput$ === "object");
assert(typeof SetVisibleToAllUsersInput$ === "object");
assert(typeof ShrinkPolicy$ === "object");
assert(typeof SimpleScalingPolicyConfiguration$ === "object");
assert(typeof SimplifiedApplication$ === "object");
assert(typeof SpotProvisioningSpecification$ === "object");
assert(typeof SpotResizingSpecification$ === "object");
assert(typeof StartNotebookExecutionInput$ === "object");
assert(typeof StartNotebookExecutionOutput$ === "object");
assert(typeof Step$ === "object");
assert(typeof StepConfig$ === "object");
assert(typeof StepDetail$ === "object");
assert(typeof StepExecutionStatusDetail$ === "object");
assert(typeof StepMonitoringConfiguration$ === "object");
assert(typeof StepStateChangeReason$ === "object");
assert(typeof StepStatus$ === "object");
assert(typeof StepSummary$ === "object");
assert(typeof StepTimeline$ === "object");
assert(typeof StopNotebookExecutionInput$ === "object");
assert(typeof Studio$ === "object");
assert(typeof StudioSummary$ === "object");
assert(typeof SupportedInstanceType$ === "object");
assert(typeof SupportedProductConfig$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TerminateJobFlowsInput$ === "object");
assert(typeof UpdateStudioInput$ === "object");
assert(typeof UpdateStudioSessionMappingInput$ === "object");
assert(typeof UsernamePassword$ === "object");
assert(typeof VolumeSpecification$ === "object");
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
assert(InternalServerError.prototype instanceof EMRServiceException);
assert(typeof InternalServerError$ === "object");
assert(InternalServerException.prototype instanceof EMRServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof EMRServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(EMRServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForClusterRunning === "function");
assert(typeof waitForClusterTerminated === "function");
assert(typeof waitForStepComplete === "function");
assert(typeof waitUntilClusterRunning === "function");
assert(typeof waitUntilClusterTerminated === "function");
assert(typeof waitUntilStepComplete === "function");
// paginators
assert(typeof paginateListBootstrapActions === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListInstanceFleets === "function");
assert(typeof paginateListInstanceGroups === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListNotebookExecutions === "function");
assert(typeof paginateListReleaseLabels === "function");
assert(typeof paginateListSecurityConfigurations === "function");
assert(typeof paginateListSteps === "function");
assert(typeof paginateListStudioSessionMappings === "function");
assert(typeof paginateListStudios === "function");
assert(typeof paginateListSupportedInstanceTypes === "function");
console.log(`EMR index test passed.`);
