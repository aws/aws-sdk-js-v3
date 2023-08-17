// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AutoScalingClient, AutoScalingClientConfig } from "./AutoScalingClient";
import {
  AttachInstancesCommand,
  AttachInstancesCommandInput,
  AttachInstancesCommandOutput,
} from "./commands/AttachInstancesCommand";
import {
  AttachLoadBalancersCommand,
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
} from "./commands/AttachLoadBalancersCommand";
import {
  AttachLoadBalancerTargetGroupsCommand,
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/AttachLoadBalancerTargetGroupsCommand";
import {
  AttachTrafficSourcesCommand,
  AttachTrafficSourcesCommandInput,
  AttachTrafficSourcesCommandOutput,
} from "./commands/AttachTrafficSourcesCommand";
import {
  BatchDeleteScheduledActionCommand,
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
} from "./commands/BatchDeleteScheduledActionCommand";
import {
  BatchPutScheduledUpdateGroupActionCommand,
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
} from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  CancelInstanceRefreshCommand,
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
} from "./commands/CancelInstanceRefreshCommand";
import {
  CompleteLifecycleActionCommand,
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
} from "./commands/CompleteLifecycleActionCommand";
import {
  CreateAutoScalingGroupCommand,
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
} from "./commands/CreateAutoScalingGroupCommand";
import {
  CreateLaunchConfigurationCommand,
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
} from "./commands/CreateLaunchConfigurationCommand";
import {
  CreateOrUpdateTagsCommand,
  CreateOrUpdateTagsCommandInput,
  CreateOrUpdateTagsCommandOutput,
} from "./commands/CreateOrUpdateTagsCommand";
import {
  DeleteAutoScalingGroupCommand,
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
} from "./commands/DeleteAutoScalingGroupCommand";
import {
  DeleteLaunchConfigurationCommand,
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput,
} from "./commands/DeleteLaunchConfigurationCommand";
import {
  DeleteLifecycleHookCommand,
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
} from "./commands/DeleteLifecycleHookCommand";
import {
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteScheduledActionCommand,
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "./commands/DeleteScheduledActionCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteWarmPoolCommand,
  DeleteWarmPoolCommandInput,
  DeleteWarmPoolCommandOutput,
} from "./commands/DeleteWarmPoolCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeAdjustmentTypesCommand,
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
} from "./commands/DescribeAdjustmentTypesCommand";
import {
  DescribeAutoScalingGroupsCommand,
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "./commands/DescribeAutoScalingGroupsCommand";
import {
  DescribeAutoScalingInstancesCommand,
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "./commands/DescribeAutoScalingInstancesCommand";
import {
  DescribeAutoScalingNotificationTypesCommand,
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
} from "./commands/DescribeAutoScalingNotificationTypesCommand";
import {
  DescribeInstanceRefreshesCommand,
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "./commands/DescribeInstanceRefreshesCommand";
import {
  DescribeLaunchConfigurationsCommand,
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "./commands/DescribeLaunchConfigurationsCommand";
import {
  DescribeLifecycleHooksCommand,
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
} from "./commands/DescribeLifecycleHooksCommand";
import {
  DescribeLifecycleHookTypesCommand,
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
} from "./commands/DescribeLifecycleHookTypesCommand";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeLoadBalancerTargetGroupsCommand,
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  DescribeMetricCollectionTypesCommand,
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
} from "./commands/DescribeMetricCollectionTypesCommand";
import {
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "./commands/DescribeNotificationConfigurationsCommand";
import {
  DescribePoliciesCommand,
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
} from "./commands/DescribePoliciesCommand";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingProcessTypesCommand,
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
} from "./commands/DescribeScalingProcessTypesCommand";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "./commands/DescribeScheduledActionsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeTerminationPolicyTypesCommand,
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
} from "./commands/DescribeTerminationPolicyTypesCommand";
import {
  DescribeTrafficSourcesCommand,
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
} from "./commands/DescribeTrafficSourcesCommand";
import {
  DescribeWarmPoolCommand,
  DescribeWarmPoolCommandInput,
  DescribeWarmPoolCommandOutput,
} from "./commands/DescribeWarmPoolCommand";
import {
  DetachInstancesCommand,
  DetachInstancesCommandInput,
  DetachInstancesCommandOutput,
} from "./commands/DetachInstancesCommand";
import {
  DetachLoadBalancersCommand,
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
} from "./commands/DetachLoadBalancersCommand";
import {
  DetachLoadBalancerTargetGroupsCommand,
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
} from "./commands/DetachLoadBalancerTargetGroupsCommand";
import {
  DetachTrafficSourcesCommand,
  DetachTrafficSourcesCommandInput,
  DetachTrafficSourcesCommandOutput,
} from "./commands/DetachTrafficSourcesCommand";
import {
  DisableMetricsCollectionCommand,
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
} from "./commands/DisableMetricsCollectionCommand";
import {
  EnableMetricsCollectionCommand,
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
} from "./commands/EnableMetricsCollectionCommand";
import {
  EnterStandbyCommand,
  EnterStandbyCommandInput,
  EnterStandbyCommandOutput,
} from "./commands/EnterStandbyCommand";
import {
  ExecutePolicyCommand,
  ExecutePolicyCommandInput,
  ExecutePolicyCommandOutput,
} from "./commands/ExecutePolicyCommand";
import { ExitStandbyCommand, ExitStandbyCommandInput, ExitStandbyCommandOutput } from "./commands/ExitStandbyCommand";
import {
  GetPredictiveScalingForecastCommand,
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
} from "./commands/GetPredictiveScalingForecastCommand";
import {
  PutLifecycleHookCommand,
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput,
} from "./commands/PutLifecycleHookCommand";
import {
  PutNotificationConfigurationCommand,
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
} from "./commands/PutNotificationConfigurationCommand";
import {
  PutScalingPolicyCommand,
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "./commands/PutScalingPolicyCommand";
import {
  PutScheduledUpdateGroupActionCommand,
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
} from "./commands/PutScheduledUpdateGroupActionCommand";
import { PutWarmPoolCommand, PutWarmPoolCommandInput, PutWarmPoolCommandOutput } from "./commands/PutWarmPoolCommand";
import {
  RecordLifecycleActionHeartbeatCommand,
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
} from "./commands/RecordLifecycleActionHeartbeatCommand";
import {
  ResumeProcessesCommand,
  ResumeProcessesCommandInput,
  ResumeProcessesCommandOutput,
} from "./commands/ResumeProcessesCommand";
import {
  RollbackInstanceRefreshCommand,
  RollbackInstanceRefreshCommandInput,
  RollbackInstanceRefreshCommandOutput,
} from "./commands/RollbackInstanceRefreshCommand";
import {
  SetDesiredCapacityCommand,
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput,
} from "./commands/SetDesiredCapacityCommand";
import {
  SetInstanceHealthCommand,
  SetInstanceHealthCommandInput,
  SetInstanceHealthCommandOutput,
} from "./commands/SetInstanceHealthCommand";
import {
  SetInstanceProtectionCommand,
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
} from "./commands/SetInstanceProtectionCommand";
import {
  StartInstanceRefreshCommand,
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
} from "./commands/StartInstanceRefreshCommand";
import {
  SuspendProcessesCommand,
  SuspendProcessesCommandInput,
  SuspendProcessesCommandOutput,
} from "./commands/SuspendProcessesCommand";
import {
  TerminateInstanceInAutoScalingGroupCommand,
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
} from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  UpdateAutoScalingGroupCommand,
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
} from "./commands/UpdateAutoScalingGroupCommand";

const commands = {
  AttachInstancesCommand,
  AttachLoadBalancersCommand,
  AttachLoadBalancerTargetGroupsCommand,
  AttachTrafficSourcesCommand,
  BatchDeleteScheduledActionCommand,
  BatchPutScheduledUpdateGroupActionCommand,
  CancelInstanceRefreshCommand,
  CompleteLifecycleActionCommand,
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
  DescribeLifecycleHooksCommand,
  DescribeLifecycleHookTypesCommand,
  DescribeLoadBalancersCommand,
  DescribeLoadBalancerTargetGroupsCommand,
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
  DetachLoadBalancersCommand,
  DetachLoadBalancerTargetGroupsCommand,
  DetachTrafficSourcesCommand,
  DisableMetricsCollectionCommand,
  EnableMetricsCollectionCommand,
  EnterStandbyCommand,
  ExecutePolicyCommand,
  ExitStandbyCommand,
  GetPredictiveScalingForecastCommand,
  PutLifecycleHookCommand,
  PutNotificationConfigurationCommand,
  PutScalingPolicyCommand,
  PutScheduledUpdateGroupActionCommand,
  PutWarmPoolCommand,
  RecordLifecycleActionHeartbeatCommand,
  ResumeProcessesCommand,
  RollbackInstanceRefreshCommand,
  SetDesiredCapacityCommand,
  SetInstanceHealthCommand,
  SetInstanceProtectionCommand,
  StartInstanceRefreshCommand,
  SuspendProcessesCommand,
  TerminateInstanceInAutoScalingGroupCommand,
  UpdateAutoScalingGroupCommand,
};

export interface AutoScaling {
  /**
   * @see {@link AttachInstancesCommand}
   */
  attachInstances(
    args: AttachInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInstancesCommandOutput>;
  attachInstances(args: AttachInstancesCommandInput, cb: (err: any, data?: AttachInstancesCommandOutput) => void): void;
  attachInstances(
    args: AttachInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancersCommand}
   */
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancersCommandOutput>;
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancerTargetGroupsCommand}
   */
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput>;
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachTrafficSourcesCommand}
   */
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachTrafficSourcesCommandOutput>;
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    cb: (err: any, data?: AttachTrafficSourcesCommandOutput) => void
  ): void;
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteScheduledActionCommand}
   */
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteScheduledActionCommandOutput>;
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutScheduledUpdateGroupActionCommand}
   */
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput>;
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelInstanceRefreshCommand}
   */
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelInstanceRefreshCommandOutput>;
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    cb: (err: any, data?: CancelInstanceRefreshCommandOutput) => void
  ): void;
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteLifecycleActionCommand}
   */
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteLifecycleActionCommandOutput>;
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutoScalingGroupCommand}
   */
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoScalingGroupCommandOutput>;
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationCommand}
   */
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLaunchConfigurationCommandOutput>;
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrUpdateTagsCommand}
   */
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrUpdateTagsCommandOutput>;
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutoScalingGroupCommand}
   */
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoScalingGroupCommandOutput>;
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchConfigurationCommand}
   */
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLaunchConfigurationCommandOutput>;
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecycleHookCommand}
   */
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecycleHookCommandOutput>;
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationConfigurationCommand}
   */
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationConfigurationCommandOutput>;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWarmPoolCommand}
   */
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWarmPoolCommandOutput>;
  deleteWarmPool(args: DeleteWarmPoolCommandInput, cb: (err: any, data?: DeleteWarmPoolCommandOutput) => void): void;
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAdjustmentTypesCommand}
   */
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAdjustmentTypesCommandOutput>;
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   */
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingGroupsCommandOutput>;
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingInstancesCommand}
   */
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingInstancesCommandOutput>;
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingNotificationTypesCommand}
   */
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput>;
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceRefreshesCommand}
   */
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceRefreshesCommandOutput>;
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    cb: (err: any, data?: DescribeInstanceRefreshesCommandOutput) => void
  ): void;
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceRefreshesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationsCommand}
   */
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLaunchConfigurationsCommandOutput>;
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLifecycleHooksCommand}
   */
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleHooksCommandOutput>;
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLifecycleHookTypesCommand}
   */
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleHookTypesCommandOutput>;
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerTargetGroupsCommand}
   */
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerTargetGroupsCommandOutput>;
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricCollectionTypesCommand}
   */
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMetricCollectionTypesCommandOutput>;
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationConfigurationsCommand}
   */
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationConfigurationsCommandOutput>;
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePoliciesCommand}
   */
  describePolicies(
    args: DescribePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePoliciesCommandOutput>;
  describePolicies(
    args: DescribePoliciesCommandInput,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;
  describePolicies(
    args: DescribePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingActivitiesCommand}
   */
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingActivitiesCommandOutput>;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingProcessTypesCommand}
   */
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingProcessTypesCommandOutput>;
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTerminationPolicyTypesCommand}
   */
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTerminationPolicyTypesCommandOutput>;
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficSourcesCommand}
   */
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrafficSourcesCommandOutput>;
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    cb: (err: any, data?: DescribeTrafficSourcesCommandOutput) => void
  ): void;
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWarmPoolCommand}
   */
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWarmPoolCommandOutput>;
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    cb: (err: any, data?: DescribeWarmPoolCommandOutput) => void
  ): void;
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachInstancesCommand}
   */
  detachInstances(
    args: DetachInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInstancesCommandOutput>;
  detachInstances(args: DetachInstancesCommandInput, cb: (err: any, data?: DetachInstancesCommandOutput) => void): void;
  detachInstances(
    args: DetachInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachLoadBalancersCommand}
   */
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachLoadBalancersCommandOutput>;
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachLoadBalancerTargetGroupsCommand}
   */
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput>;
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachTrafficSourcesCommand}
   */
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachTrafficSourcesCommandOutput>;
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    cb: (err: any, data?: DetachTrafficSourcesCommandOutput) => void
  ): void;
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableMetricsCollectionCommand}
   */
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableMetricsCollectionCommandOutput>;
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableMetricsCollectionCommand}
   */
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMetricsCollectionCommandOutput>;
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnterStandbyCommand}
   */
  enterStandby(args: EnterStandbyCommandInput, options?: __HttpHandlerOptions): Promise<EnterStandbyCommandOutput>;
  enterStandby(args: EnterStandbyCommandInput, cb: (err: any, data?: EnterStandbyCommandOutput) => void): void;
  enterStandby(
    args: EnterStandbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnterStandbyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecutePolicyCommand}
   */
  executePolicy(args: ExecutePolicyCommandInput, options?: __HttpHandlerOptions): Promise<ExecutePolicyCommandOutput>;
  executePolicy(args: ExecutePolicyCommandInput, cb: (err: any, data?: ExecutePolicyCommandOutput) => void): void;
  executePolicy(
    args: ExecutePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExitStandbyCommand}
   */
  exitStandby(args: ExitStandbyCommandInput, options?: __HttpHandlerOptions): Promise<ExitStandbyCommandOutput>;
  exitStandby(args: ExitStandbyCommandInput, cb: (err: any, data?: ExitStandbyCommandOutput) => void): void;
  exitStandby(
    args: ExitStandbyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExitStandbyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPredictiveScalingForecastCommand}
   */
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPredictiveScalingForecastCommandOutput>;
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    cb: (err: any, data?: GetPredictiveScalingForecastCommandOutput) => void
  ): void;
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPredictiveScalingForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLifecycleHookCommand}
   */
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleHookCommandOutput>;
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;

  /**
   * @see {@link PutNotificationConfigurationCommand}
   */
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutNotificationConfigurationCommandOutput>;
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScalingPolicyCommand}
   */
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScheduledUpdateGroupActionCommand}
   */
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScheduledUpdateGroupActionCommandOutput>;
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWarmPoolCommand}
   */
  putWarmPool(args: PutWarmPoolCommandInput, options?: __HttpHandlerOptions): Promise<PutWarmPoolCommandOutput>;
  putWarmPool(args: PutWarmPoolCommandInput, cb: (err: any, data?: PutWarmPoolCommandOutput) => void): void;
  putWarmPool(
    args: PutWarmPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link RecordLifecycleActionHeartbeatCommand}
   */
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordLifecycleActionHeartbeatCommandOutput>;
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeProcessesCommand}
   */
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeProcessesCommandOutput>;
  resumeProcesses(args: ResumeProcessesCommandInput, cb: (err: any, data?: ResumeProcessesCommandOutput) => void): void;
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): void;

  /**
   * @see {@link RollbackInstanceRefreshCommand}
   */
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackInstanceRefreshCommandOutput>;
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    cb: (err: any, data?: RollbackInstanceRefreshCommandOutput) => void
  ): void;
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDesiredCapacityCommand}
   */
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDesiredCapacityCommandOutput>;
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link SetInstanceHealthCommand}
   */
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetInstanceHealthCommandOutput>;
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link SetInstanceProtectionCommand}
   */
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetInstanceProtectionCommandOutput>;
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstanceRefreshCommand}
   */
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstanceRefreshCommandOutput>;
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    cb: (err: any, data?: StartInstanceRefreshCommandOutput) => void
  ): void;
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link SuspendProcessesCommand}
   */
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendProcessesCommandOutput>;
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateInstanceInAutoScalingGroupCommand}
   */
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput>;
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutoScalingGroupCommand}
   */
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutoScalingGroupCommandOutput>;
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *          <p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances
 *             based on user-defined scaling policies, scheduled actions, and health checks.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>
 */
export class AutoScaling extends AutoScalingClient implements AutoScaling {}
createAggregatedClient(commands, AutoScaling);
