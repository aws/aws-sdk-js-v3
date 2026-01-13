import {
  AcceleratorCountRequest$,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiBRequest$,
  AcceleratorType,
  ActiveInstanceRefreshNotFoundFault,
  ActiveInstanceRefreshNotFoundFault$,
  ActivitiesType$,
  Activity$,
  ActivityType$,
  AdjustmentType$,
  Alarm$,
  AlarmSpecification$,
  AlreadyExistsFault,
  AlreadyExistsFault$,
  AttachInstances$,
  AttachInstancesCommand,
  AttachInstancesQuery$,
  AttachLoadBalancers$,
  AttachLoadBalancersCommand,
  AttachLoadBalancersResultType$,
  AttachLoadBalancersType$,
  AttachLoadBalancerTargetGroups$,
  AttachLoadBalancerTargetGroupsCommand,
  AttachLoadBalancerTargetGroupsResultType$,
  AttachLoadBalancerTargetGroupsType$,
  AttachTrafficSources$,
  AttachTrafficSourcesCommand,
  AttachTrafficSourcesResultType$,
  AttachTrafficSourcesType$,
  AutoScaling,
  AutoScalingClient,
  AutoScalingGroup$,
  AutoScalingGroupNamesType$,
  AutoScalingGroupsType$,
  AutoScalingInstanceDetails$,
  AutoScalingInstancesType$,
  AutoScalingServiceException,
  AvailabilityZoneDistribution$,
  AvailabilityZoneImpairmentPolicy$,
  BareMetal,
  BaselineEbsBandwidthMbpsRequest$,
  BaselinePerformanceFactorsRequest$,
  BatchDeleteScheduledAction$,
  BatchDeleteScheduledActionAnswer$,
  BatchDeleteScheduledActionCommand,
  BatchDeleteScheduledActionType$,
  BatchPutScheduledUpdateGroupAction$,
  BatchPutScheduledUpdateGroupActionAnswer$,
  BatchPutScheduledUpdateGroupActionCommand,
  BatchPutScheduledUpdateGroupActionType$,
  BlockDeviceMapping$,
  BurstablePerformance,
  CancelInstanceRefresh$,
  CancelInstanceRefreshAnswer$,
  CancelInstanceRefreshCommand,
  CancelInstanceRefreshType$,
  CapacityDistributionStrategy,
  CapacityForecast$,
  CapacityReservationPreference,
  CapacityReservationSpecification$,
  CapacityReservationTarget$,
  CompleteLifecycleAction$,
  CompleteLifecycleActionAnswer$,
  CompleteLifecycleActionCommand,
  CompleteLifecycleActionType$,
  CpuManufacturer,
  CpuPerformanceFactorRequest$,
  CreateAutoScalingGroup$,
  CreateAutoScalingGroupCommand,
  CreateAutoScalingGroupType$,
  CreateLaunchConfiguration$,
  CreateLaunchConfigurationCommand,
  CreateLaunchConfigurationType$,
  CreateOrUpdateTags$,
  CreateOrUpdateTagsCommand,
  CreateOrUpdateTagsType$,
  CustomizedMetricSpecification$,
  DeleteAutoScalingGroup$,
  DeleteAutoScalingGroupCommand,
  DeleteAutoScalingGroupType$,
  DeleteLaunchConfiguration$,
  DeleteLaunchConfigurationCommand,
  DeleteLifecycleHook$,
  DeleteLifecycleHookAnswer$,
  DeleteLifecycleHookCommand,
  DeleteLifecycleHookType$,
  DeleteNotificationConfiguration$,
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationType$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyType$,
  DeleteScheduledAction$,
  DeleteScheduledActionCommand,
  DeleteScheduledActionType$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsType$,
  DeleteWarmPool$,
  DeleteWarmPoolAnswer$,
  DeleteWarmPoolCommand,
  DeleteWarmPoolType$,
  DescribeAccountLimits$,
  DescribeAccountLimitsAnswer$,
  DescribeAccountLimitsCommand,
  DescribeAdjustmentTypes$,
  DescribeAdjustmentTypesAnswer$,
  DescribeAdjustmentTypesCommand,
  DescribeAutoScalingGroups$,
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingInstances$,
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingInstancesType$,
  DescribeAutoScalingNotificationTypes$,
  DescribeAutoScalingNotificationTypesAnswer$,
  DescribeAutoScalingNotificationTypesCommand,
  DescribeInstanceRefreshes$,
  DescribeInstanceRefreshesAnswer$,
  DescribeInstanceRefreshesCommand,
  DescribeInstanceRefreshesType$,
  DescribeLaunchConfigurations$,
  DescribeLaunchConfigurationsCommand,
  DescribeLifecycleHooks$,
  DescribeLifecycleHooksAnswer$,
  DescribeLifecycleHooksCommand,
  DescribeLifecycleHooksType$,
  DescribeLifecycleHookTypes$,
  DescribeLifecycleHookTypesAnswer$,
  DescribeLifecycleHookTypesCommand,
  DescribeLoadBalancers$,
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersRequest$,
  DescribeLoadBalancersResponse$,
  DescribeLoadBalancerTargetGroups$,
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancerTargetGroupsRequest$,
  DescribeLoadBalancerTargetGroupsResponse$,
  DescribeMetricCollectionTypes$,
  DescribeMetricCollectionTypesAnswer$,
  DescribeMetricCollectionTypesCommand,
  DescribeNotificationConfigurations$,
  DescribeNotificationConfigurationsAnswer$,
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsType$,
  DescribePolicies$,
  DescribePoliciesCommand,
  DescribePoliciesType$,
  DescribeScalingActivities$,
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesType$,
  DescribeScalingProcessTypes$,
  DescribeScalingProcessTypesCommand,
  DescribeScheduledActions$,
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsType$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsType$,
  DescribeTerminationPolicyTypes$,
  DescribeTerminationPolicyTypesAnswer$,
  DescribeTerminationPolicyTypesCommand,
  DescribeTrafficSources$,
  DescribeTrafficSourcesCommand,
  DescribeTrafficSourcesRequest$,
  DescribeTrafficSourcesResponse$,
  DescribeWarmPool$,
  DescribeWarmPoolAnswer$,
  DescribeWarmPoolCommand,
  DescribeWarmPoolType$,
  DesiredConfiguration$,
  DetachInstances$,
  DetachInstancesAnswer$,
  DetachInstancesCommand,
  DetachInstancesQuery$,
  DetachLoadBalancers$,
  DetachLoadBalancersCommand,
  DetachLoadBalancersResultType$,
  DetachLoadBalancersType$,
  DetachLoadBalancerTargetGroups$,
  DetachLoadBalancerTargetGroupsCommand,
  DetachLoadBalancerTargetGroupsResultType$,
  DetachLoadBalancerTargetGroupsType$,
  DetachTrafficSources$,
  DetachTrafficSourcesCommand,
  DetachTrafficSourcesResultType$,
  DetachTrafficSourcesType$,
  DisableMetricsCollection$,
  DisableMetricsCollectionCommand,
  DisableMetricsCollectionQuery$,
  Ebs$,
  EnabledMetric$,
  EnableMetricsCollection$,
  EnableMetricsCollectionCommand,
  EnableMetricsCollectionQuery$,
  EnterStandby$,
  EnterStandbyAnswer$,
  EnterStandbyCommand,
  EnterStandbyQuery$,
  ExecutePolicy$,
  ExecutePolicyCommand,
  ExecutePolicyType$,
  ExitStandby$,
  ExitStandbyAnswer$,
  ExitStandbyCommand,
  ExitStandbyQuery$,
  FailedScheduledUpdateGroupActionRequest$,
  Filter$,
  GetPredictiveScalingForecast$,
  GetPredictiveScalingForecastAnswer$,
  GetPredictiveScalingForecastCommand,
  GetPredictiveScalingForecastType$,
  IdempotentParameterMismatchError,
  IdempotentParameterMismatchError$,
  ImpairedZoneHealthCheckBehavior,
  Instance$,
  InstanceCollection$,
  InstanceGeneration,
  InstanceLifecyclePolicy$,
  InstanceMaintenancePolicy$,
  InstanceMetadataEndpointState,
  InstanceMetadataHttpTokensState,
  InstanceMetadataOptions$,
  InstanceMonitoring$,
  InstanceRefresh$,
  InstanceRefreshInProgressFault,
  InstanceRefreshInProgressFault$,
  InstanceRefreshLivePoolProgress$,
  InstanceRefreshProgressDetails$,
  InstanceRefreshStatus,
  InstanceRefreshWarmPoolProgress$,
  InstanceRequirements$,
  InstanceReusePolicy$,
  InstancesDistribution$,
  InvalidNextToken,
  InvalidNextToken$,
  IrreversibleInstanceRefreshFault,
  IrreversibleInstanceRefreshFault$,
  LaunchConfiguration$,
  LaunchConfigurationNamesType$,
  LaunchConfigurationNameType$,
  LaunchConfigurationsType$,
  LaunchInstances$,
  LaunchInstancesCommand,
  LaunchInstancesError$,
  LaunchInstancesRequest$,
  LaunchInstancesResult$,
  LaunchTemplate$,
  LaunchTemplateOverrides$,
  LaunchTemplateSpecification$,
  LifecycleHook$,
  LifecycleHookSpecification$,
  LifecycleState,
  LimitExceededFault,
  LimitExceededFault$,
  LoadBalancerState$,
  LoadBalancerTargetGroupState$,
  LoadForecast$,
  LocalStorage,
  LocalStorageType,
  MemoryGiBPerVCpuRequest$,
  MemoryMiBRequest$,
  Metric$,
  MetricCollectionType$,
  MetricDataQuery$,
  MetricDimension$,
  MetricGranularityType$,
  MetricStat$,
  MetricStatistic,
  MetricType,
  MixedInstancesPolicy$,
  NetworkBandwidthGbpsRequest$,
  NetworkInterfaceCountRequest$,
  NotificationConfiguration$,
  paginateDescribeAutoScalingGroups,
  paginateDescribeAutoScalingInstances,
  paginateDescribeInstanceRefreshes,
  paginateDescribeLaunchConfigurations,
  paginateDescribeLoadBalancers,
  paginateDescribeLoadBalancerTargetGroups,
  paginateDescribeNotificationConfigurations,
  paginateDescribePolicies,
  paginateDescribeScalingActivities,
  paginateDescribeScheduledActions,
  paginateDescribeTags,
  paginateDescribeTrafficSources,
  paginateDescribeWarmPool,
  PerformanceFactorReferenceRequest$,
  PoliciesType$,
  PolicyARNType$,
  PredefinedLoadMetricType,
  PredefinedMetricPairType,
  PredefinedMetricSpecification$,
  PredefinedScalingMetricType,
  PredictiveScalingConfiguration$,
  PredictiveScalingCustomizedCapacityMetric$,
  PredictiveScalingCustomizedLoadMetric$,
  PredictiveScalingCustomizedScalingMetric$,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMetricSpecification$,
  PredictiveScalingMode,
  PredictiveScalingPredefinedLoadMetric$,
  PredictiveScalingPredefinedMetricPair$,
  PredictiveScalingPredefinedScalingMetric$,
  ProcessesType$,
  ProcessType$,
  PutLifecycleHook$,
  PutLifecycleHookAnswer$,
  PutLifecycleHookCommand,
  PutLifecycleHookType$,
  PutNotificationConfiguration$,
  PutNotificationConfigurationCommand,
  PutNotificationConfigurationType$,
  PutScalingPolicy$,
  PutScalingPolicyCommand,
  PutScalingPolicyType$,
  PutScheduledUpdateGroupAction$,
  PutScheduledUpdateGroupActionCommand,
  PutScheduledUpdateGroupActionType$,
  PutWarmPool$,
  PutWarmPoolAnswer$,
  PutWarmPoolCommand,
  PutWarmPoolType$,
  RecordLifecycleActionHeartbeat$,
  RecordLifecycleActionHeartbeatAnswer$,
  RecordLifecycleActionHeartbeatCommand,
  RecordLifecycleActionHeartbeatType$,
  RefreshPreferences$,
  RefreshStrategy,
  ResourceContentionFault,
  ResourceContentionFault$,
  ResourceInUseFault,
  ResourceInUseFault$,
  ResumeProcesses$,
  ResumeProcessesCommand,
  RetentionAction,
  RetentionTriggers$,
  RetryStrategy,
  RollbackDetails$,
  RollbackInstanceRefresh$,
  RollbackInstanceRefreshAnswer$,
  RollbackInstanceRefreshCommand,
  RollbackInstanceRefreshType$,
  ScaleInProtectedInstances,
  ScalingActivityInProgressFault,
  ScalingActivityInProgressFault$,
  ScalingActivityStatusCode,
  ScalingPolicy$,
  ScalingProcessQuery$,
  ScheduledActionsType$,
  ScheduledUpdateGroupAction$,
  ScheduledUpdateGroupActionRequest$,
  ServiceLinkedRoleFailure,
  ServiceLinkedRoleFailure$,
  SetDesiredCapacity$,
  SetDesiredCapacityCommand,
  SetDesiredCapacityType$,
  SetInstanceHealth$,
  SetInstanceHealthCommand,
  SetInstanceHealthQuery$,
  SetInstanceProtection$,
  SetInstanceProtectionAnswer$,
  SetInstanceProtectionCommand,
  SetInstanceProtectionQuery$,
  StandbyInstances,
  StartInstanceRefresh$,
  StartInstanceRefreshAnswer$,
  StartInstanceRefreshCommand,
  StartInstanceRefreshType$,
  StepAdjustment$,
  SuspendedProcess$,
  SuspendProcesses$,
  SuspendProcessesCommand,
  Tag$,
  TagDescription$,
  TagsType$,
  TargetTrackingConfiguration$,
  TargetTrackingMetricDataQuery$,
  TargetTrackingMetricStat$,
  TerminateInstanceInAutoScalingGroup$,
  TerminateInstanceInAutoScalingGroupCommand,
  TerminateInstanceInAutoScalingGroupType$,
  TotalLocalStorageGBRequest$,
  TrafficSourceIdentifier$,
  TrafficSourceState$,
  UpdateAutoScalingGroup$,
  UpdateAutoScalingGroupCommand,
  UpdateAutoScalingGroupType$,
  VCpuCountRequest$,
  waitForGroupExists,
  waitForGroupInService,
  waitForGroupNotExists,
  waitUntilGroupExists,
  waitUntilGroupInService,
  waitUntilGroupNotExists,
  WarmPoolConfiguration$,
  WarmPoolState,
  WarmPoolStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AutoScalingClient === "function");
assert(typeof AutoScaling === "function");
// commands
assert(typeof AttachInstancesCommand === "function");
assert(typeof AttachInstances$ === "object");
assert(typeof AttachLoadBalancersCommand === "function");
assert(typeof AttachLoadBalancers$ === "object");
assert(typeof AttachLoadBalancerTargetGroupsCommand === "function");
assert(typeof AttachLoadBalancerTargetGroups$ === "object");
assert(typeof AttachTrafficSourcesCommand === "function");
assert(typeof AttachTrafficSources$ === "object");
assert(typeof BatchDeleteScheduledActionCommand === "function");
assert(typeof BatchDeleteScheduledAction$ === "object");
assert(typeof BatchPutScheduledUpdateGroupActionCommand === "function");
assert(typeof BatchPutScheduledUpdateGroupAction$ === "object");
assert(typeof CancelInstanceRefreshCommand === "function");
assert(typeof CancelInstanceRefresh$ === "object");
assert(typeof CompleteLifecycleActionCommand === "function");
assert(typeof CompleteLifecycleAction$ === "object");
assert(typeof CreateAutoScalingGroupCommand === "function");
assert(typeof CreateAutoScalingGroup$ === "object");
assert(typeof CreateLaunchConfigurationCommand === "function");
assert(typeof CreateLaunchConfiguration$ === "object");
assert(typeof CreateOrUpdateTagsCommand === "function");
assert(typeof CreateOrUpdateTags$ === "object");
assert(typeof DeleteAutoScalingGroupCommand === "function");
assert(typeof DeleteAutoScalingGroup$ === "object");
assert(typeof DeleteLaunchConfigurationCommand === "function");
assert(typeof DeleteLaunchConfiguration$ === "object");
assert(typeof DeleteLifecycleHookCommand === "function");
assert(typeof DeleteLifecycleHook$ === "object");
assert(typeof DeleteNotificationConfigurationCommand === "function");
assert(typeof DeleteNotificationConfiguration$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteScheduledAction$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteWarmPoolCommand === "function");
assert(typeof DeleteWarmPool$ === "object");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAccountLimits$ === "object");
assert(typeof DescribeAdjustmentTypesCommand === "function");
assert(typeof DescribeAdjustmentTypes$ === "object");
assert(typeof DescribeAutoScalingGroupsCommand === "function");
assert(typeof DescribeAutoScalingGroups$ === "object");
assert(typeof DescribeAutoScalingInstancesCommand === "function");
assert(typeof DescribeAutoScalingInstances$ === "object");
assert(typeof DescribeAutoScalingNotificationTypesCommand === "function");
assert(typeof DescribeAutoScalingNotificationTypes$ === "object");
assert(typeof DescribeInstanceRefreshesCommand === "function");
assert(typeof DescribeInstanceRefreshes$ === "object");
assert(typeof DescribeLaunchConfigurationsCommand === "function");
assert(typeof DescribeLaunchConfigurations$ === "object");
assert(typeof DescribeLifecycleHooksCommand === "function");
assert(typeof DescribeLifecycleHooks$ === "object");
assert(typeof DescribeLifecycleHookTypesCommand === "function");
assert(typeof DescribeLifecycleHookTypes$ === "object");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeLoadBalancers$ === "object");
assert(typeof DescribeLoadBalancerTargetGroupsCommand === "function");
assert(typeof DescribeLoadBalancerTargetGroups$ === "object");
assert(typeof DescribeMetricCollectionTypesCommand === "function");
assert(typeof DescribeMetricCollectionTypes$ === "object");
assert(typeof DescribeNotificationConfigurationsCommand === "function");
assert(typeof DescribeNotificationConfigurations$ === "object");
assert(typeof DescribePoliciesCommand === "function");
assert(typeof DescribePolicies$ === "object");
assert(typeof DescribeScalingActivitiesCommand === "function");
assert(typeof DescribeScalingActivities$ === "object");
assert(typeof DescribeScalingProcessTypesCommand === "function");
assert(typeof DescribeScalingProcessTypes$ === "object");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof DescribeScheduledActions$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeTerminationPolicyTypesCommand === "function");
assert(typeof DescribeTerminationPolicyTypes$ === "object");
assert(typeof DescribeTrafficSourcesCommand === "function");
assert(typeof DescribeTrafficSources$ === "object");
assert(typeof DescribeWarmPoolCommand === "function");
assert(typeof DescribeWarmPool$ === "object");
assert(typeof DetachInstancesCommand === "function");
assert(typeof DetachInstances$ === "object");
assert(typeof DetachLoadBalancersCommand === "function");
assert(typeof DetachLoadBalancers$ === "object");
assert(typeof DetachLoadBalancerTargetGroupsCommand === "function");
assert(typeof DetachLoadBalancerTargetGroups$ === "object");
assert(typeof DetachTrafficSourcesCommand === "function");
assert(typeof DetachTrafficSources$ === "object");
assert(typeof DisableMetricsCollectionCommand === "function");
assert(typeof DisableMetricsCollection$ === "object");
assert(typeof EnableMetricsCollectionCommand === "function");
assert(typeof EnableMetricsCollection$ === "object");
assert(typeof EnterStandbyCommand === "function");
assert(typeof EnterStandby$ === "object");
assert(typeof ExecutePolicyCommand === "function");
assert(typeof ExecutePolicy$ === "object");
assert(typeof ExitStandbyCommand === "function");
assert(typeof ExitStandby$ === "object");
assert(typeof GetPredictiveScalingForecastCommand === "function");
assert(typeof GetPredictiveScalingForecast$ === "object");
assert(typeof LaunchInstancesCommand === "function");
assert(typeof LaunchInstances$ === "object");
assert(typeof PutLifecycleHookCommand === "function");
assert(typeof PutLifecycleHook$ === "object");
assert(typeof PutNotificationConfigurationCommand === "function");
assert(typeof PutNotificationConfiguration$ === "object");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof PutScalingPolicy$ === "object");
assert(typeof PutScheduledUpdateGroupActionCommand === "function");
assert(typeof PutScheduledUpdateGroupAction$ === "object");
assert(typeof PutWarmPoolCommand === "function");
assert(typeof PutWarmPool$ === "object");
assert(typeof RecordLifecycleActionHeartbeatCommand === "function");
assert(typeof RecordLifecycleActionHeartbeat$ === "object");
assert(typeof ResumeProcessesCommand === "function");
assert(typeof ResumeProcesses$ === "object");
assert(typeof RollbackInstanceRefreshCommand === "function");
assert(typeof RollbackInstanceRefresh$ === "object");
assert(typeof SetDesiredCapacityCommand === "function");
assert(typeof SetDesiredCapacity$ === "object");
assert(typeof SetInstanceHealthCommand === "function");
assert(typeof SetInstanceHealth$ === "object");
assert(typeof SetInstanceProtectionCommand === "function");
assert(typeof SetInstanceProtection$ === "object");
assert(typeof StartInstanceRefreshCommand === "function");
assert(typeof StartInstanceRefresh$ === "object");
assert(typeof SuspendProcessesCommand === "function");
assert(typeof SuspendProcesses$ === "object");
assert(typeof TerminateInstanceInAutoScalingGroupCommand === "function");
assert(typeof TerminateInstanceInAutoScalingGroup$ === "object");
assert(typeof UpdateAutoScalingGroupCommand === "function");
assert(typeof UpdateAutoScalingGroup$ === "object");
// structural schemas
assert(typeof AcceleratorCountRequest$ === "object");
assert(typeof AcceleratorTotalMemoryMiBRequest$ === "object");
assert(typeof ActivitiesType$ === "object");
assert(typeof Activity$ === "object");
assert(typeof ActivityType$ === "object");
assert(typeof AdjustmentType$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmSpecification$ === "object");
assert(typeof AttachInstancesQuery$ === "object");
assert(typeof AttachLoadBalancersResultType$ === "object");
assert(typeof AttachLoadBalancersType$ === "object");
assert(typeof AttachLoadBalancerTargetGroupsResultType$ === "object");
assert(typeof AttachLoadBalancerTargetGroupsType$ === "object");
assert(typeof AttachTrafficSourcesResultType$ === "object");
assert(typeof AttachTrafficSourcesType$ === "object");
assert(typeof AutoScalingGroup$ === "object");
assert(typeof AutoScalingGroupNamesType$ === "object");
assert(typeof AutoScalingGroupsType$ === "object");
assert(typeof AutoScalingInstanceDetails$ === "object");
assert(typeof AutoScalingInstancesType$ === "object");
assert(typeof AvailabilityZoneDistribution$ === "object");
assert(typeof AvailabilityZoneImpairmentPolicy$ === "object");
assert(typeof BaselineEbsBandwidthMbpsRequest$ === "object");
assert(typeof BaselinePerformanceFactorsRequest$ === "object");
assert(typeof BatchDeleteScheduledActionAnswer$ === "object");
assert(typeof BatchDeleteScheduledActionType$ === "object");
assert(typeof BatchPutScheduledUpdateGroupActionAnswer$ === "object");
assert(typeof BatchPutScheduledUpdateGroupActionType$ === "object");
assert(typeof BlockDeviceMapping$ === "object");
assert(typeof CancelInstanceRefreshAnswer$ === "object");
assert(typeof CancelInstanceRefreshType$ === "object");
assert(typeof CapacityForecast$ === "object");
assert(typeof CapacityReservationSpecification$ === "object");
assert(typeof CapacityReservationTarget$ === "object");
assert(typeof CompleteLifecycleActionAnswer$ === "object");
assert(typeof CompleteLifecycleActionType$ === "object");
assert(typeof CpuPerformanceFactorRequest$ === "object");
assert(typeof CreateAutoScalingGroupType$ === "object");
assert(typeof CreateLaunchConfigurationType$ === "object");
assert(typeof CreateOrUpdateTagsType$ === "object");
assert(typeof CustomizedMetricSpecification$ === "object");
assert(typeof DeleteAutoScalingGroupType$ === "object");
assert(typeof DeleteLifecycleHookAnswer$ === "object");
assert(typeof DeleteLifecycleHookType$ === "object");
assert(typeof DeleteNotificationConfigurationType$ === "object");
assert(typeof DeletePolicyType$ === "object");
assert(typeof DeleteScheduledActionType$ === "object");
assert(typeof DeleteTagsType$ === "object");
assert(typeof DeleteWarmPoolAnswer$ === "object");
assert(typeof DeleteWarmPoolType$ === "object");
assert(typeof DescribeAccountLimitsAnswer$ === "object");
assert(typeof DescribeAdjustmentTypesAnswer$ === "object");
assert(typeof DescribeAutoScalingInstancesType$ === "object");
assert(typeof DescribeAutoScalingNotificationTypesAnswer$ === "object");
assert(typeof DescribeInstanceRefreshesAnswer$ === "object");
assert(typeof DescribeInstanceRefreshesType$ === "object");
assert(typeof DescribeLifecycleHooksAnswer$ === "object");
assert(typeof DescribeLifecycleHooksType$ === "object");
assert(typeof DescribeLifecycleHookTypesAnswer$ === "object");
assert(typeof DescribeLoadBalancersRequest$ === "object");
assert(typeof DescribeLoadBalancersResponse$ === "object");
assert(typeof DescribeLoadBalancerTargetGroupsRequest$ === "object");
assert(typeof DescribeLoadBalancerTargetGroupsResponse$ === "object");
assert(typeof DescribeMetricCollectionTypesAnswer$ === "object");
assert(typeof DescribeNotificationConfigurationsAnswer$ === "object");
assert(typeof DescribeNotificationConfigurationsType$ === "object");
assert(typeof DescribePoliciesType$ === "object");
assert(typeof DescribeScalingActivitiesType$ === "object");
assert(typeof DescribeScheduledActionsType$ === "object");
assert(typeof DescribeTagsType$ === "object");
assert(typeof DescribeTerminationPolicyTypesAnswer$ === "object");
assert(typeof DescribeTrafficSourcesRequest$ === "object");
assert(typeof DescribeTrafficSourcesResponse$ === "object");
assert(typeof DescribeWarmPoolAnswer$ === "object");
assert(typeof DescribeWarmPoolType$ === "object");
assert(typeof DesiredConfiguration$ === "object");
assert(typeof DetachInstancesAnswer$ === "object");
assert(typeof DetachInstancesQuery$ === "object");
assert(typeof DetachLoadBalancersResultType$ === "object");
assert(typeof DetachLoadBalancersType$ === "object");
assert(typeof DetachLoadBalancerTargetGroupsResultType$ === "object");
assert(typeof DetachLoadBalancerTargetGroupsType$ === "object");
assert(typeof DetachTrafficSourcesResultType$ === "object");
assert(typeof DetachTrafficSourcesType$ === "object");
assert(typeof DisableMetricsCollectionQuery$ === "object");
assert(typeof Ebs$ === "object");
assert(typeof EnabledMetric$ === "object");
assert(typeof EnableMetricsCollectionQuery$ === "object");
assert(typeof EnterStandbyAnswer$ === "object");
assert(typeof EnterStandbyQuery$ === "object");
assert(typeof ExecutePolicyType$ === "object");
assert(typeof ExitStandbyAnswer$ === "object");
assert(typeof ExitStandbyQuery$ === "object");
assert(typeof FailedScheduledUpdateGroupActionRequest$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetPredictiveScalingForecastAnswer$ === "object");
assert(typeof GetPredictiveScalingForecastType$ === "object");
assert(typeof Instance$ === "object");
assert(typeof InstanceCollection$ === "object");
assert(typeof InstanceLifecyclePolicy$ === "object");
assert(typeof InstanceMaintenancePolicy$ === "object");
assert(typeof InstanceMetadataOptions$ === "object");
assert(typeof InstanceMonitoring$ === "object");
assert(typeof InstanceRefresh$ === "object");
assert(typeof InstanceRefreshLivePoolProgress$ === "object");
assert(typeof InstanceRefreshProgressDetails$ === "object");
assert(typeof InstanceRefreshWarmPoolProgress$ === "object");
assert(typeof InstanceRequirements$ === "object");
assert(typeof InstanceReusePolicy$ === "object");
assert(typeof InstancesDistribution$ === "object");
assert(typeof LaunchConfiguration$ === "object");
assert(typeof LaunchConfigurationNamesType$ === "object");
assert(typeof LaunchConfigurationNameType$ === "object");
assert(typeof LaunchConfigurationsType$ === "object");
assert(typeof LaunchInstancesError$ === "object");
assert(typeof LaunchInstancesRequest$ === "object");
assert(typeof LaunchInstancesResult$ === "object");
assert(typeof LaunchTemplate$ === "object");
assert(typeof LaunchTemplateOverrides$ === "object");
assert(typeof LaunchTemplateSpecification$ === "object");
assert(typeof LifecycleHook$ === "object");
assert(typeof LifecycleHookSpecification$ === "object");
assert(typeof LoadBalancerState$ === "object");
assert(typeof LoadBalancerTargetGroupState$ === "object");
assert(typeof LoadForecast$ === "object");
assert(typeof MemoryGiBPerVCpuRequest$ === "object");
assert(typeof MemoryMiBRequest$ === "object");
assert(typeof Metric$ === "object");
assert(typeof MetricCollectionType$ === "object");
assert(typeof MetricDataQuery$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof MetricGranularityType$ === "object");
assert(typeof MetricStat$ === "object");
assert(typeof MixedInstancesPolicy$ === "object");
assert(typeof NetworkBandwidthGbpsRequest$ === "object");
assert(typeof NetworkInterfaceCountRequest$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof PerformanceFactorReferenceRequest$ === "object");
assert(typeof PoliciesType$ === "object");
assert(typeof PolicyARNType$ === "object");
assert(typeof PredefinedMetricSpecification$ === "object");
assert(typeof PredictiveScalingConfiguration$ === "object");
assert(typeof PredictiveScalingCustomizedCapacityMetric$ === "object");
assert(typeof PredictiveScalingCustomizedLoadMetric$ === "object");
assert(typeof PredictiveScalingCustomizedScalingMetric$ === "object");
assert(typeof PredictiveScalingMetricSpecification$ === "object");
assert(typeof PredictiveScalingPredefinedLoadMetric$ === "object");
assert(typeof PredictiveScalingPredefinedMetricPair$ === "object");
assert(typeof PredictiveScalingPredefinedScalingMetric$ === "object");
assert(typeof ProcessesType$ === "object");
assert(typeof ProcessType$ === "object");
assert(typeof PutLifecycleHookAnswer$ === "object");
assert(typeof PutLifecycleHookType$ === "object");
assert(typeof PutNotificationConfigurationType$ === "object");
assert(typeof PutScalingPolicyType$ === "object");
assert(typeof PutScheduledUpdateGroupActionType$ === "object");
assert(typeof PutWarmPoolAnswer$ === "object");
assert(typeof PutWarmPoolType$ === "object");
assert(typeof RecordLifecycleActionHeartbeatAnswer$ === "object");
assert(typeof RecordLifecycleActionHeartbeatType$ === "object");
assert(typeof RefreshPreferences$ === "object");
assert(typeof RetentionTriggers$ === "object");
assert(typeof RollbackDetails$ === "object");
assert(typeof RollbackInstanceRefreshAnswer$ === "object");
assert(typeof RollbackInstanceRefreshType$ === "object");
assert(typeof ScalingPolicy$ === "object");
assert(typeof ScalingProcessQuery$ === "object");
assert(typeof ScheduledActionsType$ === "object");
assert(typeof ScheduledUpdateGroupAction$ === "object");
assert(typeof ScheduledUpdateGroupActionRequest$ === "object");
assert(typeof SetDesiredCapacityType$ === "object");
assert(typeof SetInstanceHealthQuery$ === "object");
assert(typeof SetInstanceProtectionAnswer$ === "object");
assert(typeof SetInstanceProtectionQuery$ === "object");
assert(typeof StartInstanceRefreshAnswer$ === "object");
assert(typeof StartInstanceRefreshType$ === "object");
assert(typeof StepAdjustment$ === "object");
assert(typeof SuspendedProcess$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagDescription$ === "object");
assert(typeof TagsType$ === "object");
assert(typeof TargetTrackingConfiguration$ === "object");
assert(typeof TargetTrackingMetricDataQuery$ === "object");
assert(typeof TargetTrackingMetricStat$ === "object");
assert(typeof TerminateInstanceInAutoScalingGroupType$ === "object");
assert(typeof TotalLocalStorageGBRequest$ === "object");
assert(typeof TrafficSourceIdentifier$ === "object");
assert(typeof TrafficSourceState$ === "object");
assert(typeof UpdateAutoScalingGroupType$ === "object");
assert(typeof VCpuCountRequest$ === "object");
assert(typeof WarmPoolConfiguration$ === "object");
// enums
assert(typeof AcceleratorManufacturer === "object");
assert(typeof AcceleratorName === "object");
assert(typeof AcceleratorType === "object");
assert(typeof BareMetal === "object");
assert(typeof BurstablePerformance === "object");
assert(typeof CapacityDistributionStrategy === "object");
assert(typeof CapacityReservationPreference === "object");
assert(typeof CpuManufacturer === "object");
assert(typeof ImpairedZoneHealthCheckBehavior === "object");
assert(typeof InstanceGeneration === "object");
assert(typeof InstanceMetadataEndpointState === "object");
assert(typeof InstanceMetadataHttpTokensState === "object");
assert(typeof InstanceRefreshStatus === "object");
assert(typeof LifecycleState === "object");
assert(typeof LocalStorage === "object");
assert(typeof LocalStorageType === "object");
assert(typeof MetricStatistic === "object");
assert(typeof MetricType === "object");
assert(typeof PredefinedLoadMetricType === "object");
assert(typeof PredefinedMetricPairType === "object");
assert(typeof PredefinedScalingMetricType === "object");
assert(typeof PredictiveScalingMaxCapacityBreachBehavior === "object");
assert(typeof PredictiveScalingMode === "object");
assert(typeof RefreshStrategy === "object");
assert(typeof RetentionAction === "object");
assert(typeof RetryStrategy === "object");
assert(typeof ScaleInProtectedInstances === "object");
assert(typeof ScalingActivityStatusCode === "object");
assert(typeof StandbyInstances === "object");
assert(typeof WarmPoolState === "object");
assert(typeof WarmPoolStatus === "object");
// errors
assert(ActiveInstanceRefreshNotFoundFault.prototype instanceof AutoScalingServiceException);
assert(typeof ActiveInstanceRefreshNotFoundFault$ === "object");
assert(AlreadyExistsFault.prototype instanceof AutoScalingServiceException);
assert(typeof AlreadyExistsFault$ === "object");
assert(IdempotentParameterMismatchError.prototype instanceof AutoScalingServiceException);
assert(typeof IdempotentParameterMismatchError$ === "object");
assert(InstanceRefreshInProgressFault.prototype instanceof AutoScalingServiceException);
assert(typeof InstanceRefreshInProgressFault$ === "object");
assert(InvalidNextToken.prototype instanceof AutoScalingServiceException);
assert(typeof InvalidNextToken$ === "object");
assert(IrreversibleInstanceRefreshFault.prototype instanceof AutoScalingServiceException);
assert(typeof IrreversibleInstanceRefreshFault$ === "object");
assert(LimitExceededFault.prototype instanceof AutoScalingServiceException);
assert(typeof LimitExceededFault$ === "object");
assert(ResourceContentionFault.prototype instanceof AutoScalingServiceException);
assert(typeof ResourceContentionFault$ === "object");
assert(ResourceInUseFault.prototype instanceof AutoScalingServiceException);
assert(typeof ResourceInUseFault$ === "object");
assert(ScalingActivityInProgressFault.prototype instanceof AutoScalingServiceException);
assert(typeof ScalingActivityInProgressFault$ === "object");
assert(ServiceLinkedRoleFailure.prototype instanceof AutoScalingServiceException);
assert(typeof ServiceLinkedRoleFailure$ === "object");
assert(AutoScalingServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForGroupExists === "function");
assert(typeof waitForGroupInService === "function");
assert(typeof waitForGroupNotExists === "function");
assert(typeof waitUntilGroupExists === "function");
assert(typeof waitUntilGroupInService === "function");
assert(typeof waitUntilGroupNotExists === "function");
// paginators
assert(typeof paginateDescribeAutoScalingGroups === "function");
assert(typeof paginateDescribeAutoScalingInstances === "function");
assert(typeof paginateDescribeInstanceRefreshes === "function");
assert(typeof paginateDescribeLaunchConfigurations === "function");
assert(typeof paginateDescribeLoadBalancerTargetGroups === "function");
assert(typeof paginateDescribeLoadBalancers === "function");
assert(typeof paginateDescribeNotificationConfigurations === "function");
assert(typeof paginateDescribePolicies === "function");
assert(typeof paginateDescribeScalingActivities === "function");
assert(typeof paginateDescribeScheduledActions === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateDescribeTrafficSources === "function");
assert(typeof paginateDescribeWarmPool === "function");
console.log(`AutoScaling index test passed.`);
