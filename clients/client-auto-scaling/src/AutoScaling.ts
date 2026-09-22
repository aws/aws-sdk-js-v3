// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { AutoScalingClient } from "./AutoScalingClient";
import {
  type AttachInstancesCommandInput,
  type AttachInstancesCommandOutput,
  AttachInstancesCommand,
} from "./commands/AttachInstancesCommand";
import {
  type AttachLoadBalancersCommandInput,
  type AttachLoadBalancersCommandOutput,
  AttachLoadBalancersCommand,
} from "./commands/AttachLoadBalancersCommand";
import {
  type AttachLoadBalancerTargetGroupsCommandInput,
  type AttachLoadBalancerTargetGroupsCommandOutput,
  AttachLoadBalancerTargetGroupsCommand,
} from "./commands/AttachLoadBalancerTargetGroupsCommand";
import {
  type AttachTrafficSourcesCommandInput,
  type AttachTrafficSourcesCommandOutput,
  AttachTrafficSourcesCommand,
} from "./commands/AttachTrafficSourcesCommand";
import {
  type BatchDeleteScheduledActionCommandInput,
  type BatchDeleteScheduledActionCommandOutput,
  BatchDeleteScheduledActionCommand,
} from "./commands/BatchDeleteScheduledActionCommand";
import {
  type BatchPutScheduledUpdateGroupActionCommandInput,
  type BatchPutScheduledUpdateGroupActionCommandOutput,
  BatchPutScheduledUpdateGroupActionCommand,
} from "./commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  type CancelInstanceRefreshCommandInput,
  type CancelInstanceRefreshCommandOutput,
  CancelInstanceRefreshCommand,
} from "./commands/CancelInstanceRefreshCommand";
import {
  type CompleteLifecycleActionCommandInput,
  type CompleteLifecycleActionCommandOutput,
  CompleteLifecycleActionCommand,
} from "./commands/CompleteLifecycleActionCommand";
import {
  type CreateAutoScalingGroupCommandInput,
  type CreateAutoScalingGroupCommandOutput,
  CreateAutoScalingGroupCommand,
} from "./commands/CreateAutoScalingGroupCommand";
import {
  type CreateLaunchConfigurationCommandInput,
  type CreateLaunchConfigurationCommandOutput,
  CreateLaunchConfigurationCommand,
} from "./commands/CreateLaunchConfigurationCommand";
import {
  type CreateOrUpdateTagsCommandInput,
  type CreateOrUpdateTagsCommandOutput,
  CreateOrUpdateTagsCommand,
} from "./commands/CreateOrUpdateTagsCommand";
import {
  type DeleteAutoScalingGroupCommandInput,
  type DeleteAutoScalingGroupCommandOutput,
  DeleteAutoScalingGroupCommand,
} from "./commands/DeleteAutoScalingGroupCommand";
import {
  type DeleteLaunchConfigurationCommandInput,
  type DeleteLaunchConfigurationCommandOutput,
  DeleteLaunchConfigurationCommand,
} from "./commands/DeleteLaunchConfigurationCommand";
import {
  type DeleteLifecycleHookCommandInput,
  type DeleteLifecycleHookCommandOutput,
  DeleteLifecycleHookCommand,
} from "./commands/DeleteLifecycleHookCommand";
import {
  type DeleteNotificationConfigurationCommandInput,
  type DeleteNotificationConfigurationCommandOutput,
  DeleteNotificationConfigurationCommand,
} from "./commands/DeleteNotificationConfigurationCommand";
import {
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyCommand,
} from "./commands/DeletePolicyCommand";
import {
  type DeleteScheduledActionCommandInput,
  type DeleteScheduledActionCommandOutput,
  DeleteScheduledActionCommand,
} from "./commands/DeleteScheduledActionCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DeleteWarmPoolCommandInput,
  type DeleteWarmPoolCommandOutput,
  DeleteWarmPoolCommand,
} from "./commands/DeleteWarmPoolCommand";
import {
  type DescribeAccountLimitsCommandInput,
  type DescribeAccountLimitsCommandOutput,
  DescribeAccountLimitsCommand,
} from "./commands/DescribeAccountLimitsCommand";
import {
  type DescribeAdjustmentTypesCommandInput,
  type DescribeAdjustmentTypesCommandOutput,
  DescribeAdjustmentTypesCommand,
} from "./commands/DescribeAdjustmentTypesCommand";
import {
  type DescribeAutoScalingGroupsCommandInput,
  type DescribeAutoScalingGroupsCommandOutput,
  DescribeAutoScalingGroupsCommand,
} from "./commands/DescribeAutoScalingGroupsCommand";
import {
  type DescribeAutoScalingInstancesCommandInput,
  type DescribeAutoScalingInstancesCommandOutput,
  DescribeAutoScalingInstancesCommand,
} from "./commands/DescribeAutoScalingInstancesCommand";
import {
  type DescribeAutoScalingNotificationTypesCommandInput,
  type DescribeAutoScalingNotificationTypesCommandOutput,
  DescribeAutoScalingNotificationTypesCommand,
} from "./commands/DescribeAutoScalingNotificationTypesCommand";
import {
  type DescribeInstanceRefreshesCommandInput,
  type DescribeInstanceRefreshesCommandOutput,
  DescribeInstanceRefreshesCommand,
} from "./commands/DescribeInstanceRefreshesCommand";
import {
  type DescribeLaunchConfigurationsCommandInput,
  type DescribeLaunchConfigurationsCommandOutput,
  DescribeLaunchConfigurationsCommand,
} from "./commands/DescribeLaunchConfigurationsCommand";
import {
  type DescribeLifecycleHooksCommandInput,
  type DescribeLifecycleHooksCommandOutput,
  DescribeLifecycleHooksCommand,
} from "./commands/DescribeLifecycleHooksCommand";
import {
  type DescribeLifecycleHookTypesCommandInput,
  type DescribeLifecycleHookTypesCommandOutput,
  DescribeLifecycleHookTypesCommand,
} from "./commands/DescribeLifecycleHookTypesCommand";
import {
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  DescribeLoadBalancersCommand,
} from "./commands/DescribeLoadBalancersCommand";
import {
  type DescribeLoadBalancerTargetGroupsCommandInput,
  type DescribeLoadBalancerTargetGroupsCommandOutput,
  DescribeLoadBalancerTargetGroupsCommand,
} from "./commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  type DescribeMetricCollectionTypesCommandInput,
  type DescribeMetricCollectionTypesCommandOutput,
  DescribeMetricCollectionTypesCommand,
} from "./commands/DescribeMetricCollectionTypesCommand";
import {
  type DescribeNotificationConfigurationsCommandInput,
  type DescribeNotificationConfigurationsCommandOutput,
  DescribeNotificationConfigurationsCommand,
} from "./commands/DescribeNotificationConfigurationsCommand";
import {
  type DescribePoliciesCommandInput,
  type DescribePoliciesCommandOutput,
  DescribePoliciesCommand,
} from "./commands/DescribePoliciesCommand";
import {
  type DescribeScalingActivitiesCommandInput,
  type DescribeScalingActivitiesCommandOutput,
  DescribeScalingActivitiesCommand,
} from "./commands/DescribeScalingActivitiesCommand";
import {
  type DescribeScalingProcessTypesCommandInput,
  type DescribeScalingProcessTypesCommandOutput,
  DescribeScalingProcessTypesCommand,
} from "./commands/DescribeScalingProcessTypesCommand";
import {
  type DescribeScheduledActionsCommandInput,
  type DescribeScheduledActionsCommandOutput,
  DescribeScheduledActionsCommand,
} from "./commands/DescribeScheduledActionsCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DescribeTerminationPolicyTypesCommandInput,
  type DescribeTerminationPolicyTypesCommandOutput,
  DescribeTerminationPolicyTypesCommand,
} from "./commands/DescribeTerminationPolicyTypesCommand";
import {
  type DescribeTrafficSourcesCommandInput,
  type DescribeTrafficSourcesCommandOutput,
  DescribeTrafficSourcesCommand,
} from "./commands/DescribeTrafficSourcesCommand";
import {
  type DescribeWarmPoolCommandInput,
  type DescribeWarmPoolCommandOutput,
  DescribeWarmPoolCommand,
} from "./commands/DescribeWarmPoolCommand";
import {
  type DetachInstancesCommandInput,
  type DetachInstancesCommandOutput,
  DetachInstancesCommand,
} from "./commands/DetachInstancesCommand";
import {
  type DetachLoadBalancersCommandInput,
  type DetachLoadBalancersCommandOutput,
  DetachLoadBalancersCommand,
} from "./commands/DetachLoadBalancersCommand";
import {
  type DetachLoadBalancerTargetGroupsCommandInput,
  type DetachLoadBalancerTargetGroupsCommandOutput,
  DetachLoadBalancerTargetGroupsCommand,
} from "./commands/DetachLoadBalancerTargetGroupsCommand";
import {
  type DetachTrafficSourcesCommandInput,
  type DetachTrafficSourcesCommandOutput,
  DetachTrafficSourcesCommand,
} from "./commands/DetachTrafficSourcesCommand";
import {
  type DisableMetricsCollectionCommandInput,
  type DisableMetricsCollectionCommandOutput,
  DisableMetricsCollectionCommand,
} from "./commands/DisableMetricsCollectionCommand";
import {
  type EnableMetricsCollectionCommandInput,
  type EnableMetricsCollectionCommandOutput,
  EnableMetricsCollectionCommand,
} from "./commands/EnableMetricsCollectionCommand";
import {
  type EnterStandbyCommandInput,
  type EnterStandbyCommandOutput,
  EnterStandbyCommand,
} from "./commands/EnterStandbyCommand";
import {
  type ExecutePolicyCommandInput,
  type ExecutePolicyCommandOutput,
  ExecutePolicyCommand,
} from "./commands/ExecutePolicyCommand";
import {
  type ExitStandbyCommandInput,
  type ExitStandbyCommandOutput,
  ExitStandbyCommand,
} from "./commands/ExitStandbyCommand";
import {
  type GetPredictiveScalingForecastCommandInput,
  type GetPredictiveScalingForecastCommandOutput,
  GetPredictiveScalingForecastCommand,
} from "./commands/GetPredictiveScalingForecastCommand";
import {
  type LaunchInstancesCommandInput,
  type LaunchInstancesCommandOutput,
  LaunchInstancesCommand,
} from "./commands/LaunchInstancesCommand";
import {
  type PutLifecycleHookCommandInput,
  type PutLifecycleHookCommandOutput,
  PutLifecycleHookCommand,
} from "./commands/PutLifecycleHookCommand";
import {
  type PutNotificationConfigurationCommandInput,
  type PutNotificationConfigurationCommandOutput,
  PutNotificationConfigurationCommand,
} from "./commands/PutNotificationConfigurationCommand";
import {
  type PutScalingPolicyCommandInput,
  type PutScalingPolicyCommandOutput,
  PutScalingPolicyCommand,
} from "./commands/PutScalingPolicyCommand";
import {
  type PutScheduledUpdateGroupActionCommandInput,
  type PutScheduledUpdateGroupActionCommandOutput,
  PutScheduledUpdateGroupActionCommand,
} from "./commands/PutScheduledUpdateGroupActionCommand";
import {
  type PutWarmPoolCommandInput,
  type PutWarmPoolCommandOutput,
  PutWarmPoolCommand,
} from "./commands/PutWarmPoolCommand";
import {
  type RecordLifecycleActionHeartbeatCommandInput,
  type RecordLifecycleActionHeartbeatCommandOutput,
  RecordLifecycleActionHeartbeatCommand,
} from "./commands/RecordLifecycleActionHeartbeatCommand";
import {
  type ResumeProcessesCommandInput,
  type ResumeProcessesCommandOutput,
  ResumeProcessesCommand,
} from "./commands/ResumeProcessesCommand";
import {
  type RollbackInstanceRefreshCommandInput,
  type RollbackInstanceRefreshCommandOutput,
  RollbackInstanceRefreshCommand,
} from "./commands/RollbackInstanceRefreshCommand";
import {
  type SetDesiredCapacityCommandInput,
  type SetDesiredCapacityCommandOutput,
  SetDesiredCapacityCommand,
} from "./commands/SetDesiredCapacityCommand";
import {
  type SetInstanceHealthCommandInput,
  type SetInstanceHealthCommandOutput,
  SetInstanceHealthCommand,
} from "./commands/SetInstanceHealthCommand";
import {
  type SetInstanceProtectionCommandInput,
  type SetInstanceProtectionCommandOutput,
  SetInstanceProtectionCommand,
} from "./commands/SetInstanceProtectionCommand";
import {
  type StartInstanceRefreshCommandInput,
  type StartInstanceRefreshCommandOutput,
  StartInstanceRefreshCommand,
} from "./commands/StartInstanceRefreshCommand";
import {
  type SuspendProcessesCommandInput,
  type SuspendProcessesCommandOutput,
  SuspendProcessesCommand,
} from "./commands/SuspendProcessesCommand";
import {
  type TerminateInstanceInAutoScalingGroupCommandInput,
  type TerminateInstanceInAutoScalingGroupCommandOutput,
  TerminateInstanceInAutoScalingGroupCommand,
} from "./commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  type UpdateAutoScalingGroupCommandInput,
  type UpdateAutoScalingGroupCommandOutput,
  UpdateAutoScalingGroupCommand,
} from "./commands/UpdateAutoScalingGroupCommand";
import type { AutoScalingServiceException } from "./models/AutoScalingServiceException";
import { paginateDescribeAutoScalingGroups } from "./pagination/DescribeAutoScalingGroupsPaginator";
import { paginateDescribeAutoScalingInstances } from "./pagination/DescribeAutoScalingInstancesPaginator";
import { paginateDescribeInstanceRefreshes } from "./pagination/DescribeInstanceRefreshesPaginator";
import { paginateDescribeLaunchConfigurations } from "./pagination/DescribeLaunchConfigurationsPaginator";
import { paginateDescribeLoadBalancers } from "./pagination/DescribeLoadBalancersPaginator";
import { paginateDescribeLoadBalancerTargetGroups } from "./pagination/DescribeLoadBalancerTargetGroupsPaginator";
import { paginateDescribeNotificationConfigurations } from "./pagination/DescribeNotificationConfigurationsPaginator";
import { paginateDescribePolicies } from "./pagination/DescribePoliciesPaginator";
import { paginateDescribeScalingActivities } from "./pagination/DescribeScalingActivitiesPaginator";
import { paginateDescribeScheduledActions } from "./pagination/DescribeScheduledActionsPaginator";
import { paginateDescribeTags } from "./pagination/DescribeTagsPaginator";
import { paginateDescribeTrafficSources } from "./pagination/DescribeTrafficSourcesPaginator";
import { paginateDescribeWarmPool } from "./pagination/DescribeWarmPoolPaginator";
import { waitUntilGroupExists } from "./waiters/waitForGroupExists";
import { waitUntilGroupInService } from "./waiters/waitForGroupInService";
import { waitUntilGroupNotExists } from "./waiters/waitForGroupNotExists";

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
  LaunchInstancesCommand,
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
const paginators = {
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
};
const waiters = {
  waitUntilGroupExists,
  waitUntilGroupInService,
  waitUntilGroupNotExists,
};

/**
 * @public
 */
export interface AutoScalingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AutoScaling {
  /**
   * @see {@link AttachInstancesCommand}
   */
  attachInstances(
    args: AttachInstancesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<AttachInstancesCommandOutput>;
  attachInstances(
    args: AttachInstancesCommandInput,
    cb: (err: any, data?: AttachInstancesCommandOutput) => void
  ): void;
  attachInstances(
    args: AttachInstancesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: AttachInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancersCommand}
   */
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<AttachLoadBalancersCommandOutput>;
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;
  attachLoadBalancers(
    args: AttachLoadBalancersCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: AttachLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachLoadBalancerTargetGroupsCommand}
   */
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<AttachLoadBalancerTargetGroupsCommandOutput>;
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  attachLoadBalancerTargetGroups(
    args: AttachLoadBalancerTargetGroupsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: AttachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachTrafficSourcesCommand}
   */
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<AttachTrafficSourcesCommandOutput>;
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    cb: (err: any, data?: AttachTrafficSourcesCommandOutput) => void
  ): void;
  attachTrafficSources(
    args: AttachTrafficSourcesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: AttachTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteScheduledActionCommand}
   */
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<BatchDeleteScheduledActionCommandOutput>;
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;
  batchDeleteScheduledAction(
    args: BatchDeleteScheduledActionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: BatchDeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutScheduledUpdateGroupActionCommand}
   */
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<BatchPutScheduledUpdateGroupActionCommandOutput>;
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  batchPutScheduledUpdateGroupAction(
    args: BatchPutScheduledUpdateGroupActionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: BatchPutScheduledUpdateGroupActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelInstanceRefreshCommand}
   */
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<CancelInstanceRefreshCommandOutput>;
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    cb: (err: any, data?: CancelInstanceRefreshCommandOutput) => void
  ): void;
  cancelInstanceRefresh(
    args: CancelInstanceRefreshCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: CancelInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteLifecycleActionCommand}
   */
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<CompleteLifecycleActionCommandOutput>;
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;
  completeLifecycleAction(
    args: CompleteLifecycleActionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: CompleteLifecycleActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutoScalingGroupCommand}
   */
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<CreateAutoScalingGroupCommandOutput>;
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;
  createAutoScalingGroup(
    args: CreateAutoScalingGroupCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: CreateAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLaunchConfigurationCommand}
   */
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<CreateLaunchConfigurationCommandOutput>;
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;
  createLaunchConfiguration(
    args: CreateLaunchConfigurationCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: CreateLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrUpdateTagsCommand}
   */
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<CreateOrUpdateTagsCommandOutput>;
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;
  createOrUpdateTags(
    args: CreateOrUpdateTagsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: CreateOrUpdateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAutoScalingGroupCommand}
   */
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteAutoScalingGroupCommandOutput>;
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;
  deleteAutoScalingGroup(
    args: DeleteAutoScalingGroupCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLaunchConfigurationCommand}
   */
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteLaunchConfigurationCommandOutput>;
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;
  deleteLaunchConfiguration(
    args: DeleteLaunchConfigurationCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteLaunchConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecycleHookCommand}
   */
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteLifecycleHookCommandOutput>;
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;
  deleteLifecycleHook(
    args: DeleteLifecycleHookCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteLifecycleHookCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationConfigurationCommand}
   */
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteNotificationConfigurationCommandOutput>;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;
  deleteNotificationConfiguration(
    args: DeleteNotificationConfigurationCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteScheduledActionCommand}
   */
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteScheduledActionCommandOutput>;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;
  deleteScheduledAction(
    args: DeleteScheduledActionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteScheduledActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWarmPoolCommand}
   */
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DeleteWarmPoolCommandOutput>;
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    cb: (err: any, data?: DeleteWarmPoolCommandOutput) => void
  ): void;
  deleteWarmPool(
    args: DeleteWarmPoolCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DeleteWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountLimitsCommand}
   */
  describeAccountLimits(): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAdjustmentTypesCommand}
   */
  describeAdjustmentTypes(): Promise<DescribeAdjustmentTypesCommandOutput>;
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeAdjustmentTypesCommandOutput>;
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;
  describeAdjustmentTypes(
    args: DescribeAdjustmentTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeAdjustmentTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   */
  describeAutoScalingGroups(): Promise<DescribeAutoScalingGroupsCommandOutput>;
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeAutoScalingGroupsCommandOutput>;
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;
  describeAutoScalingGroups(
    args: DescribeAutoScalingGroupsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeAutoScalingGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingInstancesCommand}
   */
  describeAutoScalingInstances(): Promise<DescribeAutoScalingInstancesCommandOutput>;
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeAutoScalingInstancesCommandOutput>;
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;
  describeAutoScalingInstances(
    args: DescribeAutoScalingInstancesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeAutoScalingInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingNotificationTypesCommand}
   */
  describeAutoScalingNotificationTypes(): Promise<DescribeAutoScalingNotificationTypesCommandOutput>;
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput>;
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;
  describeAutoScalingNotificationTypes(
    args: DescribeAutoScalingNotificationTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeAutoScalingNotificationTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceRefreshesCommand}
   */
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeInstanceRefreshesCommandOutput>;
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    cb: (err: any, data?: DescribeInstanceRefreshesCommandOutput) => void
  ): void;
  describeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeInstanceRefreshesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLaunchConfigurationsCommand}
   */
  describeLaunchConfigurations(): Promise<DescribeLaunchConfigurationsCommandOutput>;
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeLaunchConfigurationsCommandOutput>;
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;
  describeLaunchConfigurations(
    args: DescribeLaunchConfigurationsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeLaunchConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLifecycleHooksCommand}
   */
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeLifecycleHooksCommandOutput>;
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;
  describeLifecycleHooks(
    args: DescribeLifecycleHooksCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeLifecycleHooksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLifecycleHookTypesCommand}
   */
  describeLifecycleHookTypes(): Promise<DescribeLifecycleHookTypesCommandOutput>;
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeLifecycleHookTypesCommandOutput>;
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;
  describeLifecycleHookTypes(
    args: DescribeLifecycleHookTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeLifecycleHookTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   */
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoadBalancerTargetGroupsCommand}
   */
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeLoadBalancerTargetGroupsCommandOutput>;
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  describeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMetricCollectionTypesCommand}
   */
  describeMetricCollectionTypes(): Promise<DescribeMetricCollectionTypesCommandOutput>;
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeMetricCollectionTypesCommandOutput>;
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;
  describeMetricCollectionTypes(
    args: DescribeMetricCollectionTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeMetricCollectionTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationConfigurationsCommand}
   */
  describeNotificationConfigurations(): Promise<DescribeNotificationConfigurationsCommandOutput>;
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeNotificationConfigurationsCommandOutput>;
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;
  describeNotificationConfigurations(
    args: DescribeNotificationConfigurationsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeNotificationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePoliciesCommand}
   */
  describePolicies(): Promise<DescribePoliciesCommandOutput>;
  describePolicies(
    args: DescribePoliciesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribePoliciesCommandOutput>;
  describePolicies(
    args: DescribePoliciesCommandInput,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;
  describePolicies(
    args: DescribePoliciesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingActivitiesCommand}
   */
  describeScalingActivities(): Promise<DescribeScalingActivitiesCommandOutput>;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeScalingActivitiesCommandOutput>;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;
  describeScalingActivities(
    args: DescribeScalingActivitiesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeScalingActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingProcessTypesCommand}
   */
  describeScalingProcessTypes(): Promise<DescribeScalingProcessTypesCommandOutput>;
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeScalingProcessTypesCommandOutput>;
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;
  describeScalingProcessTypes(
    args: DescribeScalingProcessTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeScalingProcessTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   */
  describeScheduledActions(): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeScheduledActionsCommandOutput>;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;
  describeScheduledActions(
    args: DescribeScheduledActionsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeScheduledActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTerminationPolicyTypesCommand}
   */
  describeTerminationPolicyTypes(): Promise<DescribeTerminationPolicyTypesCommandOutput>;
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeTerminationPolicyTypesCommandOutput>;
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;
  describeTerminationPolicyTypes(
    args: DescribeTerminationPolicyTypesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeTerminationPolicyTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrafficSourcesCommand}
   */
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeTrafficSourcesCommandOutput>;
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    cb: (err: any, data?: DescribeTrafficSourcesCommandOutput) => void
  ): void;
  describeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWarmPoolCommand}
   */
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DescribeWarmPoolCommandOutput>;
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    cb: (err: any, data?: DescribeWarmPoolCommandOutput) => void
  ): void;
  describeWarmPool(
    args: DescribeWarmPoolCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DescribeWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachInstancesCommand}
   */
  detachInstances(
    args: DetachInstancesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DetachInstancesCommandOutput>;
  detachInstances(
    args: DetachInstancesCommandInput,
    cb: (err: any, data?: DetachInstancesCommandOutput) => void
  ): void;
  detachInstances(
    args: DetachInstancesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DetachInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachLoadBalancersCommand}
   */
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DetachLoadBalancersCommandOutput>;
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;
  detachLoadBalancers(
    args: DetachLoadBalancersCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DetachLoadBalancersCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachLoadBalancerTargetGroupsCommand}
   */
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DetachLoadBalancerTargetGroupsCommandOutput>;
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;
  detachLoadBalancerTargetGroups(
    args: DetachLoadBalancerTargetGroupsCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DetachLoadBalancerTargetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachTrafficSourcesCommand}
   */
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DetachTrafficSourcesCommandOutput>;
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    cb: (err: any, data?: DetachTrafficSourcesCommandOutput) => void
  ): void;
  detachTrafficSources(
    args: DetachTrafficSourcesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DetachTrafficSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableMetricsCollectionCommand}
   */
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<DisableMetricsCollectionCommandOutput>;
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;
  disableMetricsCollection(
    args: DisableMetricsCollectionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: DisableMetricsCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableMetricsCollectionCommand}
   */
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<EnableMetricsCollectionCommandOutput>;
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;
  enableMetricsCollection(
    args: EnableMetricsCollectionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: EnableMetricsCollectionCommandOutput) => void
  ): void;

  /**
   * @see {@link EnterStandbyCommand}
   */
  enterStandby(
    args: EnterStandbyCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<EnterStandbyCommandOutput>;
  enterStandby(
    args: EnterStandbyCommandInput,
    cb: (err: any, data?: EnterStandbyCommandOutput) => void
  ): void;
  enterStandby(
    args: EnterStandbyCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: EnterStandbyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecutePolicyCommand}
   */
  executePolicy(
    args: ExecutePolicyCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<ExecutePolicyCommandOutput>;
  executePolicy(
    args: ExecutePolicyCommandInput,
    cb: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): void;
  executePolicy(
    args: ExecutePolicyCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: ExecutePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExitStandbyCommand}
   */
  exitStandby(
    args: ExitStandbyCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<ExitStandbyCommandOutput>;
  exitStandby(
    args: ExitStandbyCommandInput,
    cb: (err: any, data?: ExitStandbyCommandOutput) => void
  ): void;
  exitStandby(
    args: ExitStandbyCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: ExitStandbyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPredictiveScalingForecastCommand}
   */
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<GetPredictiveScalingForecastCommandOutput>;
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    cb: (err: any, data?: GetPredictiveScalingForecastCommandOutput) => void
  ): void;
  getPredictiveScalingForecast(
    args: GetPredictiveScalingForecastCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: GetPredictiveScalingForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link LaunchInstancesCommand}
   */
  launchInstances(
    args: LaunchInstancesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<LaunchInstancesCommandOutput>;
  launchInstances(
    args: LaunchInstancesCommandInput,
    cb: (err: any, data?: LaunchInstancesCommandOutput) => void
  ): void;
  launchInstances(
    args: LaunchInstancesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: LaunchInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLifecycleHookCommand}
   */
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<PutLifecycleHookCommandOutput>;
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;
  putLifecycleHook(
    args: PutLifecycleHookCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: PutLifecycleHookCommandOutput) => void
  ): void;

  /**
   * @see {@link PutNotificationConfigurationCommand}
   */
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<PutNotificationConfigurationCommandOutput>;
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;
  putNotificationConfiguration(
    args: PutNotificationConfigurationCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: PutNotificationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScalingPolicyCommand}
   */
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutScheduledUpdateGroupActionCommand}
   */
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<PutScheduledUpdateGroupActionCommandOutput>;
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;
  putScheduledUpdateGroupAction(
    args: PutScheduledUpdateGroupActionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: PutScheduledUpdateGroupActionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutWarmPoolCommand}
   */
  putWarmPool(
    args: PutWarmPoolCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<PutWarmPoolCommandOutput>;
  putWarmPool(
    args: PutWarmPoolCommandInput,
    cb: (err: any, data?: PutWarmPoolCommandOutput) => void
  ): void;
  putWarmPool(
    args: PutWarmPoolCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: PutWarmPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link RecordLifecycleActionHeartbeatCommand}
   */
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<RecordLifecycleActionHeartbeatCommandOutput>;
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;
  recordLifecycleActionHeartbeat(
    args: RecordLifecycleActionHeartbeatCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: RecordLifecycleActionHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeProcessesCommand}
   */
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<ResumeProcessesCommandOutput>;
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    cb: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): void;
  resumeProcesses(
    args: ResumeProcessesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: ResumeProcessesCommandOutput) => void
  ): void;

  /**
   * @see {@link RollbackInstanceRefreshCommand}
   */
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<RollbackInstanceRefreshCommandOutput>;
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    cb: (err: any, data?: RollbackInstanceRefreshCommandOutput) => void
  ): void;
  rollbackInstanceRefresh(
    args: RollbackInstanceRefreshCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: RollbackInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDesiredCapacityCommand}
   */
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<SetDesiredCapacityCommandOutput>;
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;
  setDesiredCapacity(
    args: SetDesiredCapacityCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: SetDesiredCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link SetInstanceHealthCommand}
   */
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<SetInstanceHealthCommandOutput>;
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;
  setInstanceHealth(
    args: SetInstanceHealthCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: SetInstanceHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link SetInstanceProtectionCommand}
   */
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<SetInstanceProtectionCommandOutput>;
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;
  setInstanceProtection(
    args: SetInstanceProtectionCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: SetInstanceProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInstanceRefreshCommand}
   */
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<StartInstanceRefreshCommandOutput>;
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    cb: (err: any, data?: StartInstanceRefreshCommandOutput) => void
  ): void;
  startInstanceRefresh(
    args: StartInstanceRefreshCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: StartInstanceRefreshCommandOutput) => void
  ): void;

  /**
   * @see {@link SuspendProcessesCommand}
   */
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<SuspendProcessesCommandOutput>;
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;
  suspendProcesses(
    args: SuspendProcessesCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: SuspendProcessesCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateInstanceInAutoScalingGroupCommand}
   */
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<TerminateInstanceInAutoScalingGroupCommandOutput>;
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;
  terminateInstanceInAutoScalingGroup(
    args: TerminateInstanceInAutoScalingGroupCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: TerminateInstanceInAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutoScalingGroupCommand}
   */
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options?: AutoScalingRequestOptions
  ): Promise<UpdateAutoScalingGroupCommandOutput>;
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;
  updateAutoScalingGroup(
    args: UpdateAutoScalingGroupCommandInput,
    options: AutoScalingRequestOptions,
    cb: (err: any, data?: UpdateAutoScalingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAutoScalingGroupsCommandOutput}.
   */
  paginateDescribeAutoScalingGroups(
    args?: DescribeAutoScalingGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAutoScalingGroupsCommandOutput>;

  /**
   * @see {@link DescribeAutoScalingInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAutoScalingInstancesCommandOutput}.
   */
  paginateDescribeAutoScalingInstances(
    args?: DescribeAutoScalingInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAutoScalingInstancesCommandOutput>;

  /**
   * @see {@link DescribeInstanceRefreshesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeInstanceRefreshesCommandOutput}.
   */
  paginateDescribeInstanceRefreshes(
    args: DescribeInstanceRefreshesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeInstanceRefreshesCommandOutput>;

  /**
   * @see {@link DescribeLaunchConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLaunchConfigurationsCommandOutput}.
   */
  paginateDescribeLaunchConfigurations(
    args?: DescribeLaunchConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLaunchConfigurationsCommandOutput>;

  /**
   * @see {@link DescribeLoadBalancersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLoadBalancersCommandOutput}.
   */
  paginateDescribeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLoadBalancersCommandOutput>;

  /**
   * @see {@link DescribeLoadBalancerTargetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeLoadBalancerTargetGroupsCommandOutput}.
   */
  paginateDescribeLoadBalancerTargetGroups(
    args: DescribeLoadBalancerTargetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeLoadBalancerTargetGroupsCommandOutput>;

  /**
   * @see {@link DescribeNotificationConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeNotificationConfigurationsCommandOutput}.
   */
  paginateDescribeNotificationConfigurations(
    args?: DescribeNotificationConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeNotificationConfigurationsCommandOutput>;

  /**
   * @see {@link DescribePoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribePoliciesCommandOutput}.
   */
  paginateDescribePolicies(
    args?: DescribePoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribePoliciesCommandOutput>;

  /**
   * @see {@link DescribeScalingActivitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeScalingActivitiesCommandOutput}.
   */
  paginateDescribeScalingActivities(
    args?: DescribeScalingActivitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeScalingActivitiesCommandOutput>;

  /**
   * @see {@link DescribeScheduledActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeScheduledActionsCommandOutput}.
   */
  paginateDescribeScheduledActions(
    args?: DescribeScheduledActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeScheduledActionsCommandOutput>;

  /**
   * @see {@link DescribeTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTagsCommandOutput}.
   */
  paginateDescribeTags(
    args?: DescribeTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTagsCommandOutput>;

  /**
   * @see {@link DescribeTrafficSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTrafficSourcesCommandOutput}.
   */
  paginateDescribeTrafficSources(
    args: DescribeTrafficSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTrafficSourcesCommandOutput>;

  /**
   * @see {@link DescribeWarmPoolCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeWarmPoolCommandOutput}.
   */
  paginateDescribeWarmPool(
    args: DescribeWarmPoolCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeWarmPoolCommandOutput>;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGroupExists(
    args: DescribeAutoScalingGroupsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AutoScaling>, "client">
  ): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput>>;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGroupInService(
    args: DescribeAutoScalingGroupsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AutoScaling>, "client">
  ): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput>>;

  /**
   * @see {@link DescribeAutoScalingGroupsCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilGroupNotExists(
    args: DescribeAutoScalingGroupsCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<AutoScaling>, "client">
  ): Promise<WaiterResult<DescribeAutoScalingGroupsCommandOutput>>;
}

/**
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *          <p>The <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAutoScalingGroups.html">DescribeAutoScalingGroups</a> API operation might be throttled when retrieving details for an Auto Scaling group that contains many instances. By default, this operation returns details for all instances in the group.
 *             To help prevent throttling, you can set the <code>IncludeInstances</code> parameter to <code>false</code> to exclude instance details from the response.</p>
 *          <p>Amazon EC2 Auto Scaling is designed to automatically launch and terminate EC2 instances
 *             based on user-defined scaling policies, scheduled actions, and health checks.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a> and the <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/Welcome.html">Amazon EC2 Auto Scaling API Reference</a>.</p>
 * @public
 */
export class AutoScaling extends AutoScalingClient implements AutoScaling {}
createAggregatedClient(commands, AutoScaling, { paginators, waiters });
