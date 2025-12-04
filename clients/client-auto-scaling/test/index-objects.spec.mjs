import {
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  AttachInstancesCommand,
  AttachLoadBalancerTargetGroupsCommand,
  AttachLoadBalancersCommand,
  AttachTrafficSourcesCommand,
  AutoScaling,
  AutoScalingClient,
  AutoScalingServiceException,
  BareMetal,
  BatchDeleteScheduledActionCommand,
  BatchPutScheduledUpdateGroupActionCommand,
  BurstablePerformance,
  CancelInstanceRefreshCommand,
  CapacityDistributionStrategy,
  CapacityReservationPreference,
  CompleteLifecycleActionCommand,
  CpuManufacturer,
  CreateAutoScalingGroupCommand,
  CreateLaunchConfigurationCommand,
  CreateOrUpdateTagsCommand,
  DeleteAutoScalingGroupCommand,
  DeleteLaunchConfigurationCommand,
  DeleteLifecycleHookCommand,
  DeleteNotificationConfigurationCommand,
  DeletePolicyCommand,
  DeleteScheduledActionCommand,
  DeleteTagsCommand,
  DeleteWarmPoolCommand,
  DescribeAccountLimitsCommand,
  DescribeAdjustmentTypesCommand,
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingNotificationTypesCommand,
  DescribeInstanceRefreshesCommand,
  DescribeLaunchConfigurationsCommand,
  DescribeLifecycleHookTypesCommand,
  DescribeLifecycleHooksCommand,
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancersCommand,
  DescribeMetricCollectionTypesCommand,
  DescribeNotificationConfigurationsCommand,
  DescribePoliciesCommand,
  DescribeScalingActivitiesCommand,
  DescribeScalingProcessTypesCommand,
  DescribeScheduledActionsCommand,
  DescribeTagsCommand,
  DescribeTerminationPolicyTypesCommand,
  DescribeTrafficSourcesCommand,
  DescribeWarmPoolCommand,
  DetachInstancesCommand,
  DetachLoadBalancerTargetGroupsCommand,
  DetachLoadBalancersCommand,
  DetachTrafficSourcesCommand,
  DisableMetricsCollectionCommand,
  EnableMetricsCollectionCommand,
  EnterStandbyCommand,
  ExecutePolicyCommand,
  ExitStandbyCommand,
  GetPredictiveScalingForecastCommand,
  ImpairedZoneHealthCheckBehavior,
  InstanceGeneration,
  InstanceMetadataEndpointState,
  InstanceMetadataHttpTokensState,
  InstanceRefreshStatus,
  LaunchInstancesCommand,
  LifecycleState,
  LocalStorage,
  LocalStorageType,
  MetricStatistic,
  MetricType,
  PredefinedLoadMetricType,
  PredefinedMetricPairType,
  PredefinedScalingMetricType,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMode,
  PutLifecycleHookCommand,
  PutNotificationConfigurationCommand,
  PutScalingPolicyCommand,
  PutScheduledUpdateGroupActionCommand,
  PutWarmPoolCommand,
  RecordLifecycleActionHeartbeatCommand,
  RefreshStrategy,
  ResumeProcessesCommand,
  RetentionAction,
  RetryStrategy,
  RollbackInstanceRefreshCommand,
  ScaleInProtectedInstances,
  ScalingActivityStatusCode,
  SetDesiredCapacityCommand,
  SetInstanceHealthCommand,
  SetInstanceProtectionCommand,
  StandbyInstances,
  StartInstanceRefreshCommand,
  SuspendProcessesCommand,
  TerminateInstanceInAutoScalingGroupCommand,
  UpdateAutoScalingGroupCommand,
  WarmPoolState,
  WarmPoolStatus,
  paginateDescribeAutoScalingGroups,
  paginateDescribeAutoScalingInstances,
  paginateDescribeInstanceRefreshes,
  paginateDescribeLaunchConfigurations,
  paginateDescribeLoadBalancerTargetGroups,
  paginateDescribeLoadBalancers,
  paginateDescribeNotificationConfigurations,
  paginateDescribePolicies,
  paginateDescribeScalingActivities,
  paginateDescribeScheduledActions,
  paginateDescribeTags,
  paginateDescribeTrafficSources,
  paginateDescribeWarmPool,
  waitForGroupExists,
  waitForGroupInService,
  waitForGroupNotExists,
  waitUntilGroupExists,
  waitUntilGroupInService,
  waitUntilGroupNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AutoScalingClient === "function");
assert(typeof AutoScaling === "function");
// commands
assert(typeof AttachInstancesCommand === "function");
assert(typeof AttachLoadBalancersCommand === "function");
assert(typeof AttachLoadBalancerTargetGroupsCommand === "function");
assert(typeof AttachTrafficSourcesCommand === "function");
assert(typeof BatchDeleteScheduledActionCommand === "function");
assert(typeof BatchPutScheduledUpdateGroupActionCommand === "function");
assert(typeof CancelInstanceRefreshCommand === "function");
assert(typeof CompleteLifecycleActionCommand === "function");
assert(typeof CreateAutoScalingGroupCommand === "function");
assert(typeof CreateLaunchConfigurationCommand === "function");
assert(typeof CreateOrUpdateTagsCommand === "function");
assert(typeof DeleteAutoScalingGroupCommand === "function");
assert(typeof DeleteLaunchConfigurationCommand === "function");
assert(typeof DeleteLifecycleHookCommand === "function");
assert(typeof DeleteNotificationConfigurationCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeleteScheduledActionCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteWarmPoolCommand === "function");
assert(typeof DescribeAccountLimitsCommand === "function");
assert(typeof DescribeAdjustmentTypesCommand === "function");
assert(typeof DescribeAutoScalingGroupsCommand === "function");
assert(typeof DescribeAutoScalingInstancesCommand === "function");
assert(typeof DescribeAutoScalingNotificationTypesCommand === "function");
assert(typeof DescribeInstanceRefreshesCommand === "function");
assert(typeof DescribeLaunchConfigurationsCommand === "function");
assert(typeof DescribeLifecycleHooksCommand === "function");
assert(typeof DescribeLifecycleHookTypesCommand === "function");
assert(typeof DescribeLoadBalancersCommand === "function");
assert(typeof DescribeLoadBalancerTargetGroupsCommand === "function");
assert(typeof DescribeMetricCollectionTypesCommand === "function");
assert(typeof DescribeNotificationConfigurationsCommand === "function");
assert(typeof DescribePoliciesCommand === "function");
assert(typeof DescribeScalingActivitiesCommand === "function");
assert(typeof DescribeScalingProcessTypesCommand === "function");
assert(typeof DescribeScheduledActionsCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTerminationPolicyTypesCommand === "function");
assert(typeof DescribeTrafficSourcesCommand === "function");
assert(typeof DescribeWarmPoolCommand === "function");
assert(typeof DetachInstancesCommand === "function");
assert(typeof DetachLoadBalancersCommand === "function");
assert(typeof DetachLoadBalancerTargetGroupsCommand === "function");
assert(typeof DetachTrafficSourcesCommand === "function");
assert(typeof DisableMetricsCollectionCommand === "function");
assert(typeof EnableMetricsCollectionCommand === "function");
assert(typeof EnterStandbyCommand === "function");
assert(typeof ExecutePolicyCommand === "function");
assert(typeof ExitStandbyCommand === "function");
assert(typeof GetPredictiveScalingForecastCommand === "function");
assert(typeof LaunchInstancesCommand === "function");
assert(typeof PutLifecycleHookCommand === "function");
assert(typeof PutNotificationConfigurationCommand === "function");
assert(typeof PutScalingPolicyCommand === "function");
assert(typeof PutScheduledUpdateGroupActionCommand === "function");
assert(typeof PutWarmPoolCommand === "function");
assert(typeof RecordLifecycleActionHeartbeatCommand === "function");
assert(typeof ResumeProcessesCommand === "function");
assert(typeof RollbackInstanceRefreshCommand === "function");
assert(typeof SetDesiredCapacityCommand === "function");
assert(typeof SetInstanceHealthCommand === "function");
assert(typeof SetInstanceProtectionCommand === "function");
assert(typeof StartInstanceRefreshCommand === "function");
assert(typeof SuspendProcessesCommand === "function");
assert(typeof TerminateInstanceInAutoScalingGroupCommand === "function");
assert(typeof UpdateAutoScalingGroupCommand === "function");
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
