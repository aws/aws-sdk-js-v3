// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import { AttachInstancesCommandInput, AttachInstancesCommandOutput } from "../commands/AttachInstancesCommand";
import {
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput,
} from "../commands/AttachLoadBalancersCommand";
import {
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput,
} from "../commands/AttachLoadBalancerTargetGroupsCommand";
import {
  AttachTrafficSourcesCommandInput,
  AttachTrafficSourcesCommandOutput,
} from "../commands/AttachTrafficSourcesCommand";
import {
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
} from "../commands/BatchDeleteScheduledActionCommand";
import {
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput,
} from "../commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  CancelInstanceRefreshCommandInput,
  CancelInstanceRefreshCommandOutput,
} from "../commands/CancelInstanceRefreshCommand";
import {
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
} from "../commands/CompleteLifecycleActionCommand";
import {
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput,
} from "../commands/CreateAutoScalingGroupCommand";
import {
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput,
} from "../commands/CreateLaunchConfigurationCommand";
import { CreateOrUpdateTagsCommandInput, CreateOrUpdateTagsCommandOutput } from "../commands/CreateOrUpdateTagsCommand";
import {
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
} from "../commands/DeleteAutoScalingGroupCommand";
import {
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput,
} from "../commands/DeleteLaunchConfigurationCommand";
import {
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput,
} from "../commands/DeleteLifecycleHookCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "../commands/DeleteNotificationConfigurationCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteWarmPoolCommandInput, DeleteWarmPoolCommandOutput } from "../commands/DeleteWarmPoolCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
} from "../commands/DescribeAdjustmentTypesCommand";
import {
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
} from "../commands/DescribeAutoScalingGroupsCommand";
import {
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
} from "../commands/DescribeAutoScalingInstancesCommand";
import {
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
} from "../commands/DescribeAutoScalingNotificationTypesCommand";
import {
  DescribeInstanceRefreshesCommandInput,
  DescribeInstanceRefreshesCommandOutput,
} from "../commands/DescribeInstanceRefreshesCommand";
import {
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
} from "../commands/DescribeLaunchConfigurationsCommand";
import {
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
} from "../commands/DescribeLifecycleHooksCommand";
import {
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
} from "../commands/DescribeLifecycleHookTypesCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import {
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput,
} from "../commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
} from "../commands/DescribeMetricCollectionTypesCommand";
import {
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "../commands/DescribeNotificationConfigurationsCommand";
import { DescribePoliciesCommandInput, DescribePoliciesCommandOutput } from "../commands/DescribePoliciesCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
} from "../commands/DescribeScalingProcessTypesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput,
} from "../commands/DescribeTerminationPolicyTypesCommand";
import {
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
} from "../commands/DescribeTrafficSourcesCommand";
import { DescribeWarmPoolCommandInput, DescribeWarmPoolCommandOutput } from "../commands/DescribeWarmPoolCommand";
import { DetachInstancesCommandInput, DetachInstancesCommandOutput } from "../commands/DetachInstancesCommand";
import {
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput,
} from "../commands/DetachLoadBalancersCommand";
import {
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput,
} from "../commands/DetachLoadBalancerTargetGroupsCommand";
import {
  DetachTrafficSourcesCommandInput,
  DetachTrafficSourcesCommandOutput,
} from "../commands/DetachTrafficSourcesCommand";
import {
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput,
} from "../commands/DisableMetricsCollectionCommand";
import {
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
} from "../commands/EnableMetricsCollectionCommand";
import { EnterStandbyCommandInput, EnterStandbyCommandOutput } from "../commands/EnterStandbyCommand";
import { ExecutePolicyCommandInput, ExecutePolicyCommandOutput } from "../commands/ExecutePolicyCommand";
import { ExitStandbyCommandInput, ExitStandbyCommandOutput } from "../commands/ExitStandbyCommand";
import {
  GetPredictiveScalingForecastCommandInput,
  GetPredictiveScalingForecastCommandOutput,
} from "../commands/GetPredictiveScalingForecastCommand";
import { PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput } from "../commands/PutLifecycleHookCommand";
import {
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
} from "../commands/PutNotificationConfigurationCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import {
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput,
} from "../commands/PutScheduledUpdateGroupActionCommand";
import { PutWarmPoolCommandInput, PutWarmPoolCommandOutput } from "../commands/PutWarmPoolCommand";
import {
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput,
} from "../commands/RecordLifecycleActionHeartbeatCommand";
import { ResumeProcessesCommandInput, ResumeProcessesCommandOutput } from "../commands/ResumeProcessesCommand";
import {
  RollbackInstanceRefreshCommandInput,
  RollbackInstanceRefreshCommandOutput,
} from "../commands/RollbackInstanceRefreshCommand";
import { SetDesiredCapacityCommandInput, SetDesiredCapacityCommandOutput } from "../commands/SetDesiredCapacityCommand";
import { SetInstanceHealthCommandInput, SetInstanceHealthCommandOutput } from "../commands/SetInstanceHealthCommand";
import {
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput,
} from "../commands/SetInstanceProtectionCommand";
import {
  StartInstanceRefreshCommandInput,
  StartInstanceRefreshCommandOutput,
} from "../commands/StartInstanceRefreshCommand";
import { SuspendProcessesCommandInput, SuspendProcessesCommandOutput } from "../commands/SuspendProcessesCommand";
import {
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput,
} from "../commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
} from "../commands/UpdateAutoScalingGroupCommand";
import { AutoScalingServiceException as __BaseException } from "../models/AutoScalingServiceException";
import {
  AcceleratorCountRequest,
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorTotalMemoryMiBRequest,
  AcceleratorType,
  ActiveInstanceRefreshNotFoundFault,
  ActivitiesType,
  Activity,
  ActivityType,
  AdjustmentType,
  Alarm,
  AlarmSpecification,
  AlreadyExistsFault,
  AttachInstancesQuery,
  AttachLoadBalancersResultType,
  AttachLoadBalancersType,
  AttachLoadBalancerTargetGroupsResultType,
  AttachLoadBalancerTargetGroupsType,
  AttachTrafficSourcesResultType,
  AttachTrafficSourcesType,
  AutoScalingGroup,
  AutoScalingGroupNamesType,
  AutoScalingGroupsType,
  AutoScalingInstanceDetails,
  AutoScalingInstancesType,
  BaselineEbsBandwidthMbpsRequest,
  BatchDeleteScheduledActionAnswer,
  BatchDeleteScheduledActionType,
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType,
  BlockDeviceMapping,
  CancelInstanceRefreshAnswer,
  CancelInstanceRefreshType,
  CapacityForecast,
  CompleteLifecycleActionAnswer,
  CompleteLifecycleActionType,
  CpuManufacturer,
  CreateAutoScalingGroupType,
  CreateLaunchConfigurationType,
  CreateOrUpdateTagsType,
  CustomizedMetricSpecification,
  DeleteAutoScalingGroupType,
  DeleteLifecycleHookAnswer,
  DeleteLifecycleHookType,
  DeleteNotificationConfigurationType,
  DeletePolicyType,
  DeleteScheduledActionType,
  DeleteTagsType,
  DeleteWarmPoolAnswer,
  DeleteWarmPoolType,
  DescribeAccountLimitsAnswer,
  DescribeAdjustmentTypesAnswer,
  DescribeAutoScalingInstancesType,
  DescribeAutoScalingNotificationTypesAnswer,
  DescribeInstanceRefreshesAnswer,
  DescribeInstanceRefreshesType,
  DescribeLifecycleHooksAnswer,
  DescribeLifecycleHooksType,
  DescribeLifecycleHookTypesAnswer,
  DescribeLoadBalancersRequest,
  DescribeLoadBalancersResponse,
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsResponse,
  DescribeMetricCollectionTypesAnswer,
  DescribeNotificationConfigurationsAnswer,
  DescribeNotificationConfigurationsType,
  DescribePoliciesType,
  DescribeScalingActivitiesType,
  DescribeScheduledActionsType,
  DescribeTagsType,
  DescribeTerminationPolicyTypesAnswer,
  DescribeTrafficSourcesRequest,
  DescribeTrafficSourcesResponse,
  DescribeWarmPoolAnswer,
  DescribeWarmPoolType,
  DesiredConfiguration,
  DetachInstancesAnswer,
  DetachInstancesQuery,
  DetachLoadBalancersResultType,
  DetachLoadBalancersType,
  DetachLoadBalancerTargetGroupsResultType,
  DetachLoadBalancerTargetGroupsType,
  DetachTrafficSourcesResultType,
  DetachTrafficSourcesType,
  DisableMetricsCollectionQuery,
  Ebs,
  EnabledMetric,
  EnableMetricsCollectionQuery,
  EnterStandbyAnswer,
  EnterStandbyQuery,
  ExecutePolicyType,
  ExitStandbyAnswer,
  ExitStandbyQuery,
  FailedScheduledUpdateGroupActionRequest,
  Filter,
  GetPredictiveScalingForecastAnswer,
  GetPredictiveScalingForecastType,
  Instance,
  InstanceGeneration,
  InstanceMetadataOptions,
  InstanceMonitoring,
  InstanceRefresh,
  InstanceRefreshInProgressFault,
  InstanceRefreshLivePoolProgress,
  InstanceRefreshProgressDetails,
  InstanceRefreshWarmPoolProgress,
  InstanceRequirements,
  InstanceReusePolicy,
  InstancesDistribution,
  InvalidNextToken,
  IrreversibleInstanceRefreshFault,
  LaunchConfiguration,
  LaunchConfigurationNamesType,
  LaunchConfigurationNameType,
  LaunchConfigurationsType,
  LaunchTemplate,
  LaunchTemplateOverrides,
  LaunchTemplateSpecification,
  LifecycleHook,
  LifecycleHookSpecification,
  LimitExceededFault,
  LoadBalancerState,
  LoadBalancerTargetGroupState,
  LoadForecast,
  LocalStorageType,
  MemoryGiBPerVCpuRequest,
  MemoryMiBRequest,
  Metric,
  MetricCollectionType,
  MetricDataQuery,
  MetricDimension,
  MetricGranularityType,
  MetricStat,
  MixedInstancesPolicy,
  NetworkBandwidthGbpsRequest,
  NetworkInterfaceCountRequest,
  NotificationConfiguration,
  PoliciesType,
  PolicyARNType,
  PredefinedMetricSpecification,
  PredictiveScalingConfiguration,
  PredictiveScalingCustomizedCapacityMetric,
  PredictiveScalingCustomizedLoadMetric,
  PredictiveScalingCustomizedScalingMetric,
  PredictiveScalingMetricSpecification,
  PredictiveScalingPredefinedLoadMetric,
  PredictiveScalingPredefinedMetricPair,
  PredictiveScalingPredefinedScalingMetric,
  ProcessesType,
  ProcessType,
  PutLifecycleHookAnswer,
  PutLifecycleHookType,
  PutNotificationConfigurationType,
  PutScalingPolicyType,
  PutScheduledUpdateGroupActionType,
  PutWarmPoolAnswer,
  PutWarmPoolType,
  RecordLifecycleActionHeartbeatAnswer,
  RecordLifecycleActionHeartbeatType,
  RefreshPreferences,
  ResourceContentionFault,
  ResourceInUseFault,
  RollbackDetails,
  RollbackInstanceRefreshAnswer,
  RollbackInstanceRefreshType,
  ScalingActivityInProgressFault,
  ScalingPolicy,
  ScalingProcessQuery,
  ScheduledActionsType,
  ScheduledUpdateGroupAction,
  ScheduledUpdateGroupActionRequest,
  ServiceLinkedRoleFailure,
  SetDesiredCapacityType,
  SetInstanceHealthQuery,
  SetInstanceProtectionAnswer,
  SetInstanceProtectionQuery,
  StartInstanceRefreshAnswer,
  StartInstanceRefreshType,
  StepAdjustment,
  SuspendedProcess,
  Tag,
  TagDescription,
  TagsType,
  TargetTrackingConfiguration,
  TargetTrackingMetricDataQuery,
  TargetTrackingMetricStat,
  TerminateInstanceInAutoScalingGroupType,
  TotalLocalStorageGBRequest,
  TrafficSourceIdentifier,
  TrafficSourceState,
  UpdateAutoScalingGroupType,
  VCpuCountRequest,
  WarmPoolConfiguration,
} from "../models/models_0";

/**
 * serializeAws_queryAttachInstancesCommand
 */
export const se_AttachInstancesCommand = async (
  input: AttachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachInstancesQuery(input, context),
    Action: "AttachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachLoadBalancersCommand
 */
export const se_AttachLoadBalancersCommand = async (
  input: AttachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachLoadBalancersType(input, context),
    Action: "AttachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachLoadBalancerTargetGroupsCommand
 */
export const se_AttachLoadBalancerTargetGroupsCommand = async (
  input: AttachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachLoadBalancerTargetGroupsType(input, context),
    Action: "AttachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachTrafficSourcesCommand
 */
export const se_AttachTrafficSourcesCommand = async (
  input: AttachTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachTrafficSourcesType(input, context),
    Action: "AttachTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchDeleteScheduledActionCommand
 */
export const se_BatchDeleteScheduledActionCommand = async (
  input: BatchDeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchDeleteScheduledActionType(input, context),
    Action: "BatchDeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryBatchPutScheduledUpdateGroupActionCommand
 */
export const se_BatchPutScheduledUpdateGroupActionCommand = async (
  input: BatchPutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_BatchPutScheduledUpdateGroupActionType(input, context),
    Action: "BatchPutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCancelInstanceRefreshCommand
 */
export const se_CancelInstanceRefreshCommand = async (
  input: CancelInstanceRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CancelInstanceRefreshType(input, context),
    Action: "CancelInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCompleteLifecycleActionCommand
 */
export const se_CompleteLifecycleActionCommand = async (
  input: CompleteLifecycleActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CompleteLifecycleActionType(input, context),
    Action: "CompleteLifecycleAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateAutoScalingGroupCommand
 */
export const se_CreateAutoScalingGroupCommand = async (
  input: CreateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAutoScalingGroupType(input, context),
    Action: "CreateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLaunchConfigurationCommand
 */
export const se_CreateLaunchConfigurationCommand = async (
  input: CreateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLaunchConfigurationType(input, context),
    Action: "CreateLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateOrUpdateTagsCommand
 */
export const se_CreateOrUpdateTagsCommand = async (
  input: CreateOrUpdateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateOrUpdateTagsType(input, context),
    Action: "CreateOrUpdateTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAutoScalingGroupCommand
 */
export const se_DeleteAutoScalingGroupCommand = async (
  input: DeleteAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAutoScalingGroupType(input, context),
    Action: "DeleteAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLaunchConfigurationCommand
 */
export const se_DeleteLaunchConfigurationCommand = async (
  input: DeleteLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_LaunchConfigurationNameType(input, context),
    Action: "DeleteLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLifecycleHookCommand
 */
export const se_DeleteLifecycleHookCommand = async (
  input: DeleteLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteLifecycleHookType(input, context),
    Action: "DeleteLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteNotificationConfigurationCommand
 */
export const se_DeleteNotificationConfigurationCommand = async (
  input: DeleteNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteNotificationConfigurationType(input, context),
    Action: "DeleteNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeletePolicyType(input, context),
    Action: "DeletePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteScheduledActionCommand
 */
export const se_DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteScheduledActionType(input, context),
    Action: "DeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTagsType(input, context),
    Action: "DeleteTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteWarmPoolCommand
 */
export const se_DeleteWarmPoolCommand = async (
  input: DeleteWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteWarmPoolType(input, context),
    Action: "DeleteWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAccountLimitsCommand
 */
export const se_DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountLimits",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAdjustmentTypesCommand
 */
export const se_DescribeAdjustmentTypesCommand = async (
  input: DescribeAdjustmentTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeAdjustmentTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAutoScalingGroupsCommand
 */
export const se_DescribeAutoScalingGroupsCommand = async (
  input: DescribeAutoScalingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AutoScalingGroupNamesType(input, context),
    Action: "DescribeAutoScalingGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAutoScalingInstancesCommand
 */
export const se_DescribeAutoScalingInstancesCommand = async (
  input: DescribeAutoScalingInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAutoScalingInstancesType(input, context),
    Action: "DescribeAutoScalingInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAutoScalingNotificationTypesCommand
 */
export const se_DescribeAutoScalingNotificationTypesCommand = async (
  input: DescribeAutoScalingNotificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeAutoScalingNotificationTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeInstanceRefreshesCommand
 */
export const se_DescribeInstanceRefreshesCommand = async (
  input: DescribeInstanceRefreshesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeInstanceRefreshesType(input, context),
    Action: "DescribeInstanceRefreshes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLaunchConfigurationsCommand
 */
export const se_DescribeLaunchConfigurationsCommand = async (
  input: DescribeLaunchConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_LaunchConfigurationNamesType(input, context),
    Action: "DescribeLaunchConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLifecycleHooksCommand
 */
export const se_DescribeLifecycleHooksCommand = async (
  input: DescribeLifecycleHooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLifecycleHooksType(input, context),
    Action: "DescribeLifecycleHooks",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLifecycleHookTypesCommand
 */
export const se_DescribeLifecycleHookTypesCommand = async (
  input: DescribeLifecycleHookTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeLifecycleHookTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancersCommand
 */
export const se_DescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancersRequest(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeLoadBalancerTargetGroupsCommand
 */
export const se_DescribeLoadBalancerTargetGroupsCommand = async (
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeLoadBalancerTargetGroupsRequest(input, context),
    Action: "DescribeLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeMetricCollectionTypesCommand
 */
export const se_DescribeMetricCollectionTypesCommand = async (
  input: DescribeMetricCollectionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeMetricCollectionTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeNotificationConfigurationsCommand
 */
export const se_DescribeNotificationConfigurationsCommand = async (
  input: DescribeNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeNotificationConfigurationsType(input, context),
    Action: "DescribeNotificationConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribePoliciesCommand
 */
export const se_DescribePoliciesCommand = async (
  input: DescribePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribePoliciesType(input, context),
    Action: "DescribePolicies",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeScalingActivitiesCommand
 */
export const se_DescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeScalingActivitiesType(input, context),
    Action: "DescribeScalingActivities",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeScalingProcessTypesCommand
 */
export const se_DescribeScalingProcessTypesCommand = async (
  input: DescribeScalingProcessTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeScalingProcessTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeScheduledActionsCommand
 */
export const se_DescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeScheduledActionsType(input, context),
    Action: "DescribeScheduledActions",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTagsType(input, context),
    Action: "DescribeTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTerminationPolicyTypesCommand
 */
export const se_DescribeTerminationPolicyTypesCommand = async (
  input: DescribeTerminationPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    Action: "DescribeTerminationPolicyTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeTrafficSourcesCommand
 */
export const se_DescribeTrafficSourcesCommand = async (
  input: DescribeTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeTrafficSourcesRequest(input, context),
    Action: "DescribeTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeWarmPoolCommand
 */
export const se_DescribeWarmPoolCommand = async (
  input: DescribeWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeWarmPoolType(input, context),
    Action: "DescribeWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachInstancesCommand
 */
export const se_DetachInstancesCommand = async (
  input: DetachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachInstancesQuery(input, context),
    Action: "DetachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachLoadBalancersCommand
 */
export const se_DetachLoadBalancersCommand = async (
  input: DetachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachLoadBalancersType(input, context),
    Action: "DetachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachLoadBalancerTargetGroupsCommand
 */
export const se_DetachLoadBalancerTargetGroupsCommand = async (
  input: DetachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachLoadBalancerTargetGroupsType(input, context),
    Action: "DetachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachTrafficSourcesCommand
 */
export const se_DetachTrafficSourcesCommand = async (
  input: DetachTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachTrafficSourcesType(input, context),
    Action: "DetachTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableMetricsCollectionCommand
 */
export const se_DisableMetricsCollectionCommand = async (
  input: DisableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableMetricsCollectionQuery(input, context),
    Action: "DisableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableMetricsCollectionCommand
 */
export const se_EnableMetricsCollectionCommand = async (
  input: EnableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableMetricsCollectionQuery(input, context),
    Action: "EnableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnterStandbyCommand
 */
export const se_EnterStandbyCommand = async (
  input: EnterStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnterStandbyQuery(input, context),
    Action: "EnterStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryExecutePolicyCommand
 */
export const se_ExecutePolicyCommand = async (
  input: ExecutePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ExecutePolicyType(input, context),
    Action: "ExecutePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryExitStandbyCommand
 */
export const se_ExitStandbyCommand = async (
  input: ExitStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ExitStandbyQuery(input, context),
    Action: "ExitStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetPredictiveScalingForecastCommand
 */
export const se_GetPredictiveScalingForecastCommand = async (
  input: GetPredictiveScalingForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetPredictiveScalingForecastType(input, context),
    Action: "GetPredictiveScalingForecast",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutLifecycleHookCommand
 */
export const se_PutLifecycleHookCommand = async (
  input: PutLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutLifecycleHookType(input, context),
    Action: "PutLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutNotificationConfigurationCommand
 */
export const se_PutNotificationConfigurationCommand = async (
  input: PutNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutNotificationConfigurationType(input, context),
    Action: "PutNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutScalingPolicyCommand
 */
export const se_PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutScalingPolicyType(input, context),
    Action: "PutScalingPolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutScheduledUpdateGroupActionCommand
 */
export const se_PutScheduledUpdateGroupActionCommand = async (
  input: PutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutScheduledUpdateGroupActionType(input, context),
    Action: "PutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutWarmPoolCommand
 */
export const se_PutWarmPoolCommand = async (
  input: PutWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutWarmPoolType(input, context),
    Action: "PutWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRecordLifecycleActionHeartbeatCommand
 */
export const se_RecordLifecycleActionHeartbeatCommand = async (
  input: RecordLifecycleActionHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RecordLifecycleActionHeartbeatType(input, context),
    Action: "RecordLifecycleActionHeartbeat",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResumeProcessesCommand
 */
export const se_ResumeProcessesCommand = async (
  input: ResumeProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ScalingProcessQuery(input, context),
    Action: "ResumeProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRollbackInstanceRefreshCommand
 */
export const se_RollbackInstanceRefreshCommand = async (
  input: RollbackInstanceRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RollbackInstanceRefreshType(input, context),
    Action: "RollbackInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetDesiredCapacityCommand
 */
export const se_SetDesiredCapacityCommand = async (
  input: SetDesiredCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetDesiredCapacityType(input, context),
    Action: "SetDesiredCapacity",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetInstanceHealthCommand
 */
export const se_SetInstanceHealthCommand = async (
  input: SetInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetInstanceHealthQuery(input, context),
    Action: "SetInstanceHealth",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetInstanceProtectionCommand
 */
export const se_SetInstanceProtectionCommand = async (
  input: SetInstanceProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetInstanceProtectionQuery(input, context),
    Action: "SetInstanceProtection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartInstanceRefreshCommand
 */
export const se_StartInstanceRefreshCommand = async (
  input: StartInstanceRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartInstanceRefreshType(input, context),
    Action: "StartInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySuspendProcessesCommand
 */
export const se_SuspendProcessesCommand = async (
  input: SuspendProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ScalingProcessQuery(input, context),
    Action: "SuspendProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTerminateInstanceInAutoScalingGroupCommand
 */
export const se_TerminateInstanceInAutoScalingGroupCommand = async (
  input: TerminateInstanceInAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TerminateInstanceInAutoScalingGroupType(input, context),
    Action: "TerminateInstanceInAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAutoScalingGroupCommand
 */
export const se_UpdateAutoScalingGroupCommand = async (
  input: UpdateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAutoScalingGroupType(input, context),
    Action: "UpdateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAttachInstancesCommand
 */
export const de_AttachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachInstancesCommandError
 */
const de_AttachInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachLoadBalancersCommand
 */
export const de_AttachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachLoadBalancersResultType(data.AttachLoadBalancersResult, context);
  const response: AttachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAttachLoadBalancersCommandError
 */
const de_AttachLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachLoadBalancerTargetGroupsCommand
 */
export const de_AttachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachLoadBalancerTargetGroupsResultType(data.AttachLoadBalancerTargetGroupsResult, context);
  const response: AttachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError
 */
const de_AttachLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachTrafficSourcesCommand
 */
export const de_AttachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AttachTrafficSourcesResultType(data.AttachTrafficSourcesResult, context);
  const response: AttachTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAttachTrafficSourcesCommandError
 */
const de_AttachTrafficSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTrafficSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchDeleteScheduledActionCommand
 */
export const de_BatchDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDeleteScheduledActionAnswer(data.BatchDeleteScheduledActionResult, context);
  const response: BatchDeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchDeleteScheduledActionCommandError
 */
const de_BatchDeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand
 */
export const de_BatchPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchPutScheduledUpdateGroupActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchPutScheduledUpdateGroupActionAnswer(data.BatchPutScheduledUpdateGroupActionResult, context);
  const response: BatchPutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError
 */
const de_BatchPutScheduledUpdateGroupActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCancelInstanceRefreshCommand
 */
export const de_CancelInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelInstanceRefreshCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelInstanceRefreshAnswer(data.CancelInstanceRefreshResult, context);
  const response: CancelInstanceRefreshCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCancelInstanceRefreshCommandError
 */
const de_CancelInstanceRefreshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInstanceRefreshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveInstanceRefreshNotFound":
    case "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault":
      throw await de_ActiveInstanceRefreshNotFoundFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCompleteLifecycleActionCommand
 */
export const de_CompleteLifecycleActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CompleteLifecycleActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CompleteLifecycleActionAnswer(data.CompleteLifecycleActionResult, context);
  const response: CompleteLifecycleActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCompleteLifecycleActionCommandError
 */
const de_CompleteLifecycleActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateAutoScalingGroupCommand
 */
export const de_CreateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateAutoScalingGroupCommandError
 */
const de_CreateAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLaunchConfigurationCommand
 */
export const de_CreateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateLaunchConfigurationCommandError
 */
const de_CreateLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateOrUpdateTagsCommand
 */
export const de_CreateOrUpdateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOrUpdateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateOrUpdateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateOrUpdateTagsCommandError
 */
const de_CreateOrUpdateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAutoScalingGroupCommand
 */
export const de_DeleteAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAutoScalingGroupCommandError
 */
const de_DeleteAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLaunchConfigurationCommand
 */
export const de_DeleteLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLaunchConfigurationCommandError
 */
const de_DeleteLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLifecycleHookCommand
 */
export const de_DeleteLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLifecycleHookAnswer(data.DeleteLifecycleHookResult, context);
  const response: DeleteLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLifecycleHookCommandError
 */
const de_DeleteLifecycleHookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteNotificationConfigurationCommand
 */
export const de_DeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteNotificationConfigurationCommandError
 */
const de_DeleteNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScheduledActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteScheduledActionCommandError
 */
const de_DeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteWarmPoolCommand
 */
export const de_DeleteWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWarmPoolAnswer(data.DeleteWarmPoolResult, context);
  const response: DeleteWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteWarmPoolCommandError
 */
const de_DeleteWarmPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWarmPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountLimitsAnswer(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAccountLimitsCommandError
 */
const de_DescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAdjustmentTypesCommand
 */
export const de_DescribeAdjustmentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAdjustmentTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAdjustmentTypesAnswer(data.DescribeAdjustmentTypesResult, context);
  const response: DescribeAdjustmentTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAdjustmentTypesCommandError
 */
const de_DescribeAdjustmentTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAutoScalingGroupsCommand
 */
export const de_DescribeAutoScalingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoScalingGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AutoScalingGroupsType(data.DescribeAutoScalingGroupsResult, context);
  const response: DescribeAutoScalingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAutoScalingGroupsCommandError
 */
const de_DescribeAutoScalingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAutoScalingInstancesCommand
 */
export const de_DescribeAutoScalingInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoScalingInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AutoScalingInstancesType(data.DescribeAutoScalingInstancesResult, context);
  const response: DescribeAutoScalingInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAutoScalingInstancesCommandError
 */
const de_DescribeAutoScalingInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAutoScalingNotificationTypesCommand
 */
export const de_DescribeAutoScalingNotificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoScalingNotificationTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoScalingNotificationTypesAnswer(data.DescribeAutoScalingNotificationTypesResult, context);
  const response: DescribeAutoScalingNotificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError
 */
const de_DescribeAutoScalingNotificationTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeInstanceRefreshesCommand
 */
export const de_DescribeInstanceRefreshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceRefreshesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceRefreshesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstanceRefreshesAnswer(data.DescribeInstanceRefreshesResult, context);
  const response: DescribeInstanceRefreshesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeInstanceRefreshesCommandError
 */
const de_DescribeInstanceRefreshesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceRefreshesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLaunchConfigurationsCommand
 */
export const de_DescribeLaunchConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLaunchConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LaunchConfigurationsType(data.DescribeLaunchConfigurationsResult, context);
  const response: DescribeLaunchConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLaunchConfigurationsCommandError
 */
const de_DescribeLaunchConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLifecycleHooksCommand
 */
export const de_DescribeLifecycleHooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLifecycleHooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLifecycleHooksAnswer(data.DescribeLifecycleHooksResult, context);
  const response: DescribeLifecycleHooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLifecycleHooksCommandError
 */
const de_DescribeLifecycleHooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLifecycleHookTypesCommand
 */
export const de_DescribeLifecycleHookTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLifecycleHookTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLifecycleHookTypesAnswer(data.DescribeLifecycleHookTypesResult, context);
  const response: DescribeLifecycleHookTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLifecycleHookTypesCommandError
 */
const de_DescribeLifecycleHookTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommand
 */
export const de_DescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancersResponse(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancersCommandError
 */
const de_DescribeLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand
 */
export const de_DescribeLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLoadBalancerTargetGroupsResponse(data.DescribeLoadBalancerTargetGroupsResult, context);
  const response: DescribeLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError
 */
const de_DescribeLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeMetricCollectionTypesCommand
 */
export const de_DescribeMetricCollectionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMetricCollectionTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMetricCollectionTypesAnswer(data.DescribeMetricCollectionTypesResult, context);
  const response: DescribeMetricCollectionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeMetricCollectionTypesCommandError
 */
const de_DescribeMetricCollectionTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeNotificationConfigurationsCommand
 */
export const de_DescribeNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNotificationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotificationConfigurationsAnswer(data.DescribeNotificationConfigurationsResult, context);
  const response: DescribeNotificationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeNotificationConfigurationsCommandError
 */
const de_DescribeNotificationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribePoliciesCommand
 */
export const de_DescribePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PoliciesType(data.DescribePoliciesResult, context);
  const response: DescribePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribePoliciesCommandError
 */
const de_DescribePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeScalingActivitiesCommand
 */
export const de_DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivitiesType(data.DescribeScalingActivitiesResult, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeScalingActivitiesCommandError
 */
const de_DescribeScalingActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeScalingProcessTypesCommand
 */
export const de_DescribeScalingProcessTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScalingProcessTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProcessesType(data.DescribeScalingProcessTypesResult, context);
  const response: DescribeScalingProcessTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeScalingProcessTypesCommandError
 */
const de_DescribeScalingProcessTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduledActionsType(data.DescribeScheduledActionsResult, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeScheduledActionsCommandError
 */
const de_DescribeScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagsType(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTerminationPolicyTypesCommand
 */
export const de_DescribeTerminationPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTerminationPolicyTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTerminationPolicyTypesAnswer(data.DescribeTerminationPolicyTypesResult, context);
  const response: DescribeTerminationPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTerminationPolicyTypesCommandError
 */
const de_DescribeTerminationPolicyTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeTrafficSourcesCommand
 */
export const de_DescribeTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrafficSourcesResponse(data.DescribeTrafficSourcesResult, context);
  const response: DescribeTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeTrafficSourcesCommandError
 */
const de_DescribeTrafficSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeWarmPoolCommand
 */
export const de_DescribeWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWarmPoolAnswer(data.DescribeWarmPoolResult, context);
  const response: DescribeWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeWarmPoolCommandError
 */
const de_DescribeWarmPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWarmPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachInstancesCommand
 */
export const de_DetachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachInstancesAnswer(data.DetachInstancesResult, context);
  const response: DetachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetachInstancesCommandError
 */
const de_DetachInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachLoadBalancersCommand
 */
export const de_DetachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachLoadBalancersResultType(data.DetachLoadBalancersResult, context);
  const response: DetachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetachLoadBalancersCommandError
 */
const de_DetachLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachLoadBalancerTargetGroupsCommand
 */
export const de_DetachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachLoadBalancerTargetGroupsResultType(data.DetachLoadBalancerTargetGroupsResult, context);
  const response: DetachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError
 */
const de_DetachLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachTrafficSourcesCommand
 */
export const de_DetachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetachTrafficSourcesResultType(data.DetachTrafficSourcesResult, context);
  const response: DetachTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDetachTrafficSourcesCommandError
 */
const de_DetachTrafficSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTrafficSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisableMetricsCollectionCommand
 */
export const de_DisableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDisableMetricsCollectionCommandError
 */
const de_DisableMetricsCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableMetricsCollectionCommand
 */
export const de_EnableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnableMetricsCollectionCommandError
 */
const de_EnableMetricsCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnterStandbyCommand
 */
export const de_EnterStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnterStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnterStandbyAnswer(data.EnterStandbyResult, context);
  const response: EnterStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnterStandbyCommandError
 */
const de_EnterStandbyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryExecutePolicyCommand
 */
export const de_ExecutePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecutePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecutePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryExecutePolicyCommandError
 */
const de_ExecutePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryExitStandbyCommand
 */
export const de_ExitStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExitStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExitStandbyAnswer(data.ExitStandbyResult, context);
  const response: ExitStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryExitStandbyCommandError
 */
const de_ExitStandbyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetPredictiveScalingForecastCommand
 */
export const de_GetPredictiveScalingForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictiveScalingForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPredictiveScalingForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPredictiveScalingForecastAnswer(data.GetPredictiveScalingForecastResult, context);
  const response: GetPredictiveScalingForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetPredictiveScalingForecastCommandError
 */
const de_GetPredictiveScalingForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictiveScalingForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutLifecycleHookCommand
 */
export const de_PutLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLifecycleHookAnswer(data.PutLifecycleHookResult, context);
  const response: PutLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutLifecycleHookCommandError
 */
const de_PutLifecycleHookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutNotificationConfigurationCommand
 */
export const de_PutNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutNotificationConfigurationCommandError
 */
const de_PutNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutScalingPolicyCommand
 */
export const de_PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PolicyARNType(data.PutScalingPolicyResult, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutScalingPolicyCommandError
 */
const de_PutScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutScheduledUpdateGroupActionCommand
 */
export const de_PutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutScheduledUpdateGroupActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutScheduledUpdateGroupActionCommandError
 */
const de_PutScheduledUpdateGroupActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutWarmPoolCommand
 */
export const de_PutWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutWarmPoolAnswer(data.PutWarmPoolResult, context);
  const response: PutWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutWarmPoolCommandError
 */
const de_PutWarmPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWarmPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRecordLifecycleActionHeartbeatCommand
 */
export const de_RecordLifecycleActionHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RecordLifecycleActionHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RecordLifecycleActionHeartbeatAnswer(data.RecordLifecycleActionHeartbeatResult, context);
  const response: RecordLifecycleActionHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRecordLifecycleActionHeartbeatCommandError
 */
const de_RecordLifecycleActionHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResumeProcessesCommand
 */
export const de_ResumeProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryResumeProcessesCommandError
 */
const de_ResumeProcessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRollbackInstanceRefreshCommand
 */
export const de_RollbackInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RollbackInstanceRefreshCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RollbackInstanceRefreshAnswer(data.RollbackInstanceRefreshResult, context);
  const response: RollbackInstanceRefreshCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryRollbackInstanceRefreshCommandError
 */
const de_RollbackInstanceRefreshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackInstanceRefreshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveInstanceRefreshNotFound":
    case "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault":
      throw await de_ActiveInstanceRefreshNotFoundFaultRes(parsedOutput, context);
    case "IrreversibleInstanceRefresh":
    case "com.amazonaws.autoscaling#IrreversibleInstanceRefreshFault":
      throw await de_IrreversibleInstanceRefreshFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetDesiredCapacityCommand
 */
export const de_SetDesiredCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetDesiredCapacityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDesiredCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetDesiredCapacityCommandError
 */
const de_SetDesiredCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetInstanceHealthCommand
 */
export const de_SetInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetInstanceHealthCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetInstanceHealthCommandError
 */
const de_SetInstanceHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetInstanceProtectionCommand
 */
export const de_SetInstanceProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetInstanceProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetInstanceProtectionAnswer(data.SetInstanceProtectionResult, context);
  const response: SetInstanceProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetInstanceProtectionCommandError
 */
const de_SetInstanceProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryStartInstanceRefreshCommand
 */
export const de_StartInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInstanceRefreshCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartInstanceRefreshAnswer(data.StartInstanceRefreshResult, context);
  const response: StartInstanceRefreshCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartInstanceRefreshCommandError
 */
const de_StartInstanceRefreshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceRefreshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceRefreshInProgress":
    case "com.amazonaws.autoscaling#InstanceRefreshInProgressFault":
      throw await de_InstanceRefreshInProgressFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySuspendProcessesCommand
 */
export const de_SuspendProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SuspendProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SuspendProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySuspendProcessesCommandError
 */
const de_SuspendProcessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand
 */
export const de_TerminateInstanceInAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateInstanceInAutoScalingGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivityType(data.TerminateInstanceInAutoScalingGroupResult, context);
  const response: TerminateInstanceInAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError
 */
const de_TerminateInstanceInAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateAutoScalingGroupCommand
 */
export const de_UpdateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAutoScalingGroupCommandError
 */
const de_UpdateAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await de_ResourceContentionFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await de_ServiceLinkedRoleFailureRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryActiveInstanceRefreshNotFoundFaultRes
 */
const de_ActiveInstanceRefreshNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveInstanceRefreshNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ActiveInstanceRefreshNotFoundFault(body.Error, context);
  const exception = new ActiveInstanceRefreshNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryAlreadyExistsFaultRes
 */
const de_AlreadyExistsFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<AlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsFault(body.Error, context);
  const exception = new AlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInstanceRefreshInProgressFaultRes
 */
const de_InstanceRefreshInProgressFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceRefreshInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceRefreshInProgressFault(body.Error, context);
  const exception = new InstanceRefreshInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidNextTokenRes
 */
const de_InvalidNextTokenRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextToken(body.Error, context);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIrreversibleInstanceRefreshFaultRes
 */
const de_IrreversibleInstanceRefreshFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IrreversibleInstanceRefreshFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IrreversibleInstanceRefreshFault(body.Error, context);
  const exception = new IrreversibleInstanceRefreshFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededFaultRes
 */
const de_LimitExceededFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededFault(body.Error, context);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceContentionFaultRes
 */
const de_ResourceContentionFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceContentionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceContentionFault(body.Error, context);
  const exception = new ResourceContentionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceInUseFaultRes
 */
const de_ResourceInUseFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseFault(body.Error, context);
  const exception = new ResourceInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryScalingActivityInProgressFaultRes
 */
const de_ScalingActivityInProgressFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScalingActivityInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ScalingActivityInProgressFault(body.Error, context);
  const exception = new ScalingActivityInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceLinkedRoleFailureRes
 */
const de_ServiceLinkedRoleFailureRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLinkedRoleFailure(body.Error, context);
  const exception = new ServiceLinkedRoleFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAcceleratorCountRequest
 */
const se_AcceleratorCountRequest = (input: AcceleratorCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorManufacturers
 */
const se_AcceleratorManufacturers = (input: (AcceleratorManufacturer | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorNames
 */
const se_AcceleratorNames = (input: (AcceleratorName | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorTotalMemoryMiBRequest
 */
const se_AcceleratorTotalMemoryMiBRequest = (input: AcceleratorTotalMemoryMiBRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorTypes
 */
const se_AcceleratorTypes = (input: (AcceleratorType | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryActivityIds
 */
const se_ActivityIds = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAlarmList
 */
const se_AlarmList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAlarmSpecification
 */
const se_AlarmSpecification = (input: AlarmSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Alarms != null) {
    const memberEntries = se_AlarmList(input.Alarms, context);
    if (input.Alarms?.length === 0) {
      entries.Alarms = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Alarms.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAllowedInstanceTypes
 */
const se_AllowedInstanceTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAttachInstancesQuery
 */
const se_AttachInstancesQuery = (input: AttachInstancesQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryAttachLoadBalancersType
 */
const se_AttachLoadBalancersType = (input: AttachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAttachLoadBalancerTargetGroupsType
 */
const se_AttachLoadBalancerTargetGroupsType = (
  input: AttachLoadBalancerTargetGroupsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = se_TargetGroupARNs(input.TargetGroupARNs, context);
    if (input.TargetGroupARNs?.length === 0) {
      entries.TargetGroupARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAttachTrafficSourcesType
 */
const se_AttachTrafficSourcesType = (input: AttachTrafficSourcesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TrafficSources != null) {
    const memberEntries = se_TrafficSources(input.TrafficSources, context);
    if (input.TrafficSources?.length === 0) {
      entries.TrafficSources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrafficSources.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAutoScalingGroupNames
 */
const se_AutoScalingGroupNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAutoScalingGroupNamesType
 */
const se_AutoScalingGroupNamesType = (input: AutoScalingGroupNamesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupNames != null) {
    const memberEntries = se_AutoScalingGroupNames(input.AutoScalingGroupNames, context);
    if (input.AutoScalingGroupNames?.length === 0) {
      entries.AutoScalingGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.Filters != null) {
    const memberEntries = se_Filters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAutoScalingNotificationTypes
 */
const se_AutoScalingNotificationTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAvailabilityZones
 */
const se_AvailabilityZones = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryBaselineEbsBandwidthMbpsRequest
 */
const se_BaselineEbsBandwidthMbpsRequest = (input: BaselineEbsBandwidthMbpsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * serializeAws_queryBatchDeleteScheduledActionType
 */
const se_BatchDeleteScheduledActionType = (input: BatchDeleteScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames != null) {
    const memberEntries = se_ScheduledActionNames(input.ScheduledActionNames, context);
    if (input.ScheduledActionNames?.length === 0) {
      entries.ScheduledActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBatchPutScheduledUpdateGroupActionType
 */
const se_BatchPutScheduledUpdateGroupActionType = (
  input: BatchPutScheduledUpdateGroupActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledUpdateGroupActions != null) {
    const memberEntries = se_ScheduledUpdateGroupActionRequests(input.ScheduledUpdateGroupActions, context);
    if (input.ScheduledUpdateGroupActions?.length === 0) {
      entries.ScheduledUpdateGroupActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledUpdateGroupActions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBlockDeviceMapping
 */
const se_BlockDeviceMapping = (input: BlockDeviceMapping, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.VirtualName != null) {
    entries["VirtualName"] = input.VirtualName;
  }
  if (input.DeviceName != null) {
    entries["DeviceName"] = input.DeviceName;
  }
  if (input.Ebs != null) {
    const memberEntries = se_Ebs(input.Ebs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Ebs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NoDevice != null) {
    entries["NoDevice"] = input.NoDevice;
  }
  return entries;
};

/**
 * serializeAws_queryBlockDeviceMappings
 */
const se_BlockDeviceMappings = (input: BlockDeviceMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_BlockDeviceMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCancelInstanceRefreshType
 */
const se_CancelInstanceRefreshType = (input: CancelInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryCheckpointPercentages
 */
const se_CheckpointPercentages = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryClassicLinkVPCSecurityGroups
 */
const se_ClassicLinkVPCSecurityGroups = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCompleteLifecycleActionType
 */
const se_CompleteLifecycleActionType = (input: CompleteLifecycleActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleActionToken != null) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.LifecycleActionResult != null) {
    entries["LifecycleActionResult"] = input.LifecycleActionResult;
  }
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

/**
 * serializeAws_queryCpuManufacturers
 */
const se_CpuManufacturers = (input: (CpuManufacturer | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCreateAutoScalingGroupType
 */
const se_CreateAutoScalingGroupType = (input: CreateAutoScalingGroupType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate != null) {
    const memberEntries = se_LaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = se_MixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.MinSize != null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize != null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity != null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.DefaultCooldown != null) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = se_TargetGroupARNs(input.TargetGroupARNs, context);
    if (input.TargetGroupARNs?.length === 0) {
      entries.TargetGroupARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HealthCheckType != null) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.HealthCheckGracePeriod != null) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.PlacementGroup != null) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.VPCZoneIdentifier != null) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  if (input.TerminationPolicies != null) {
    const memberEntries = se_TerminationPolicies(input.TerminationPolicies, context);
    if (input.TerminationPolicies?.length === 0) {
      entries.TerminationPolicies = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn != null) {
    entries["NewInstancesProtectedFromScaleIn"] = input.NewInstancesProtectedFromScaleIn;
  }
  if (input.CapacityRebalance != null) {
    entries["CapacityRebalance"] = input.CapacityRebalance;
  }
  if (input.LifecycleHookSpecificationList != null) {
    const memberEntries = se_LifecycleHookSpecifications(input.LifecycleHookSpecificationList, context);
    if (input.LifecycleHookSpecificationList?.length === 0) {
      entries.LifecycleHookSpecificationList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookSpecificationList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ServiceLinkedRoleARN != null) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.MaxInstanceLifetime != null) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  if (input.Context != null) {
    entries["Context"] = input.Context;
  }
  if (input.DesiredCapacityType != null) {
    entries["DesiredCapacityType"] = input.DesiredCapacityType;
  }
  if (input.DefaultInstanceWarmup != null) {
    entries["DefaultInstanceWarmup"] = input.DefaultInstanceWarmup;
  }
  if (input.TrafficSources != null) {
    const memberEntries = se_TrafficSources(input.TrafficSources, context);
    if (input.TrafficSources?.length === 0) {
      entries.TrafficSources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrafficSources.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateLaunchConfigurationType
 */
const se_CreateLaunchConfigurationType = (input: CreateLaunchConfigurationType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.ImageId != null) {
    entries["ImageId"] = input.ImageId;
  }
  if (input.KeyName != null) {
    entries["KeyName"] = input.KeyName;
  }
  if (input.SecurityGroups != null) {
    const memberEntries = se_SecurityGroups(input.SecurityGroups, context);
    if (input.SecurityGroups?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClassicLinkVPCId != null) {
    entries["ClassicLinkVPCId"] = input.ClassicLinkVPCId;
  }
  if (input.ClassicLinkVPCSecurityGroups != null) {
    const memberEntries = se_ClassicLinkVPCSecurityGroups(input.ClassicLinkVPCSecurityGroups, context);
    if (input.ClassicLinkVPCSecurityGroups?.length === 0) {
      entries.ClassicLinkVPCSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClassicLinkVPCSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserData != null) {
    entries["UserData"] = input.UserData;
  }
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.InstanceType != null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.KernelId != null) {
    entries["KernelId"] = input.KernelId;
  }
  if (input.RamdiskId != null) {
    entries["RamdiskId"] = input.RamdiskId;
  }
  if (input.BlockDeviceMappings != null) {
    const memberEntries = se_BlockDeviceMappings(input.BlockDeviceMappings, context);
    if (input.BlockDeviceMappings?.length === 0) {
      entries.BlockDeviceMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BlockDeviceMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceMonitoring != null) {
    const memberEntries = se_InstanceMonitoring(input.InstanceMonitoring, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMonitoring.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SpotPrice != null) {
    entries["SpotPrice"] = input.SpotPrice;
  }
  if (input.IamInstanceProfile != null) {
    entries["IamInstanceProfile"] = input.IamInstanceProfile;
  }
  if (input.EbsOptimized != null) {
    entries["EbsOptimized"] = input.EbsOptimized;
  }
  if (input.AssociatePublicIpAddress != null) {
    entries["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
  }
  if (input.PlacementTenancy != null) {
    entries["PlacementTenancy"] = input.PlacementTenancy;
  }
  if (input.MetadataOptions != null) {
    const memberEntries = se_InstanceMetadataOptions(input.MetadataOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetadataOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateOrUpdateTagsType
 */
const se_CreateOrUpdateTagsType = (input: CreateOrUpdateTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCustomizedMetricSpecification
 */
const se_CustomizedMetricSpecification = (input: CustomizedMetricSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_MetricDimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Statistic != null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  if (input.Metrics != null) {
    const memberEntries = se_TargetTrackingMetricDataQueries(input.Metrics, context);
    if (input.Metrics?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAutoScalingGroupType
 */
const se_DeleteAutoScalingGroupType = (input: DeleteAutoScalingGroupType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete != null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLifecycleHookType
 */
const se_DeleteLifecycleHookType = (input: DeleteLifecycleHookType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteNotificationConfigurationType
 */
const se_DeleteNotificationConfigurationType = (
  input: DeleteNotificationConfigurationType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN != null) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyType
 */
const se_DeletePolicyType = (input: DeletePolicyType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteScheduledActionType
 */
const se_DeleteScheduledActionType = (input: DeleteScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTagsType
 */
const se_DeleteTagsType = (input: DeleteTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Tags != null) {
    const memberEntries = se_Tags(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteWarmPoolType
 */
const se_DeleteWarmPoolType = (input: DeleteWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete != null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAutoScalingInstancesType
 */
const se_DescribeAutoScalingInstancesType = (input: DescribeAutoScalingInstancesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeInstanceRefreshesType
 */
const se_DescribeInstanceRefreshesType = (input: DescribeInstanceRefreshesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceRefreshIds != null) {
    const memberEntries = se_InstanceRefreshIds(input.InstanceRefreshIds, context);
    if (input.InstanceRefreshIds?.length === 0) {
      entries.InstanceRefreshIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceRefreshIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLifecycleHooksType
 */
const se_DescribeLifecycleHooksType = (input: DescribeLifecycleHooksType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookNames != null) {
    const memberEntries = se_LifecycleHookNames(input.LifecycleHookNames, context);
    if (input.LifecycleHookNames?.length === 0) {
      entries.LifecycleHookNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancersRequest
 */
const se_DescribeLoadBalancersRequest = (input: DescribeLoadBalancersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLoadBalancerTargetGroupsRequest
 */
const se_DescribeLoadBalancerTargetGroupsRequest = (
  input: DescribeLoadBalancerTargetGroupsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeNotificationConfigurationsType
 */
const se_DescribeNotificationConfigurationsType = (
  input: DescribeNotificationConfigurationsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupNames != null) {
    const memberEntries = se_AutoScalingGroupNames(input.AutoScalingGroupNames, context);
    if (input.AutoScalingGroupNames?.length === 0) {
      entries.AutoScalingGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribePoliciesType
 */
const se_DescribePoliciesType = (input: DescribePoliciesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyNames != null) {
    const memberEntries = se_PolicyNames(input.PolicyNames, context);
    if (input.PolicyNames?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicyTypes != null) {
    const memberEntries = se_PolicyTypes(input.PolicyTypes, context);
    if (input.PolicyTypes?.length === 0) {
      entries.PolicyTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScalingActivitiesType
 */
const se_DescribeScalingActivitiesType = (input: DescribeScalingActivitiesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ActivityIds != null) {
    const memberEntries = se_ActivityIds(input.ActivityIds, context);
    if (input.ActivityIds?.length === 0) {
      entries.ActivityIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActivityIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.IncludeDeletedGroups != null) {
    entries["IncludeDeletedGroups"] = input.IncludeDeletedGroups;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScheduledActionsType
 */
const se_DescribeScheduledActionsType = (input: DescribeScheduledActionsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames != null) {
    const memberEntries = se_ScheduledActionNames(input.ScheduledActionNames, context);
    if (input.ScheduledActionNames?.length === 0) {
      entries.ScheduledActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsType
 */
const se_DescribeTagsType = (input: DescribeTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Filters != null) {
    const memberEntries = se_Filters(input.Filters, context);
    if (input.Filters?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTrafficSourcesRequest
 */
const se_DescribeTrafficSourcesRequest = (input: DescribeTrafficSourcesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TrafficSourceType != null) {
    entries["TrafficSourceType"] = input.TrafficSourceType;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeWarmPoolType
 */
const se_DescribeWarmPoolType = (input: DescribeWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDesiredConfiguration
 */
const se_DesiredConfiguration = (input: DesiredConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplate != null) {
    const memberEntries = se_LaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = se_MixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDetachInstancesQuery
 */
const se_DetachInstancesQuery = (input: DetachInstancesQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ShouldDecrementDesiredCapacity != null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

/**
 * serializeAws_queryDetachLoadBalancersType
 */
const se_DetachLoadBalancersType = (input: DetachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = se_LoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDetachLoadBalancerTargetGroupsType
 */
const se_DetachLoadBalancerTargetGroupsType = (
  input: DetachLoadBalancerTargetGroupsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = se_TargetGroupARNs(input.TargetGroupARNs, context);
    if (input.TargetGroupARNs?.length === 0) {
      entries.TargetGroupARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDetachTrafficSourcesType
 */
const se_DetachTrafficSourcesType = (input: DetachTrafficSourcesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TrafficSources != null) {
    const memberEntries = se_TrafficSources(input.TrafficSources, context);
    if (input.TrafficSources?.length === 0) {
      entries.TrafficSources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrafficSources.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDisableMetricsCollectionQuery
 */
const se_DisableMetricsCollectionQuery = (input: DisableMetricsCollectionQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics != null) {
    const memberEntries = se_Metrics(input.Metrics, context);
    if (input.Metrics?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEbs
 */
const se_Ebs = (input: Ebs, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SnapshotId != null) {
    entries["SnapshotId"] = input.SnapshotId;
  }
  if (input.VolumeSize != null) {
    entries["VolumeSize"] = input.VolumeSize;
  }
  if (input.VolumeType != null) {
    entries["VolumeType"] = input.VolumeType;
  }
  if (input.DeleteOnTermination != null) {
    entries["DeleteOnTermination"] = input.DeleteOnTermination;
  }
  if (input.Iops != null) {
    entries["Iops"] = input.Iops;
  }
  if (input.Encrypted != null) {
    entries["Encrypted"] = input.Encrypted;
  }
  if (input.Throughput != null) {
    entries["Throughput"] = input.Throughput;
  }
  return entries;
};

/**
 * serializeAws_queryEnableMetricsCollectionQuery
 */
const se_EnableMetricsCollectionQuery = (input: EnableMetricsCollectionQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics != null) {
    const memberEntries = se_Metrics(input.Metrics, context);
    if (input.Metrics?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Granularity != null) {
    entries["Granularity"] = input.Granularity;
  }
  return entries;
};

/**
 * serializeAws_queryEnterStandbyQuery
 */
const se_EnterStandbyQuery = (input: EnterStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ShouldDecrementDesiredCapacity != null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

/**
 * serializeAws_queryExcludedInstanceTypes
 */
const se_ExcludedInstanceTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryExecutePolicyType
 */
const se_ExecutePolicyType = (input: ExecutePolicyType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.HonorCooldown != null) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  if (input.MetricValue != null) {
    entries["MetricValue"] = __serializeFloat(input.MetricValue);
  }
  if (input.BreachThreshold != null) {
    entries["BreachThreshold"] = __serializeFloat(input.BreachThreshold);
  }
  return entries;
};

/**
 * serializeAws_queryExitStandbyQuery
 */
const se_ExitStandbyQuery = (input: ExitStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryFilter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = se_Values(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryFilters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Filter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGetPredictiveScalingForecastType
 */
const se_GetPredictiveScalingForecastType = (input: GetPredictiveScalingForecastType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

/**
 * serializeAws_queryInstanceGenerations
 */
const se_InstanceGenerations = (input: (InstanceGeneration | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryInstanceIds
 */
const se_InstanceIds = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryInstanceMetadataOptions
 */
const se_InstanceMetadataOptions = (input: InstanceMetadataOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.HttpTokens != null) {
    entries["HttpTokens"] = input.HttpTokens;
  }
  if (input.HttpPutResponseHopLimit != null) {
    entries["HttpPutResponseHopLimit"] = input.HttpPutResponseHopLimit;
  }
  if (input.HttpEndpoint != null) {
    entries["HttpEndpoint"] = input.HttpEndpoint;
  }
  return entries;
};

/**
 * serializeAws_queryInstanceMonitoring
 */
const se_InstanceMonitoring = (input: InstanceMonitoring, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

/**
 * serializeAws_queryInstanceRefreshIds
 */
const se_InstanceRefreshIds = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryInstanceRequirements
 */
const se_InstanceRequirements = (input: InstanceRequirements, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.VCpuCount != null) {
    const memberEntries = se_VCpuCountRequest(input.VCpuCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VCpuCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MemoryMiB != null) {
    const memberEntries = se_MemoryMiBRequest(input.MemoryMiB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CpuManufacturers != null) {
    const memberEntries = se_CpuManufacturers(input.CpuManufacturers, context);
    if (input.CpuManufacturers?.length === 0) {
      entries.CpuManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CpuManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MemoryGiBPerVCpu != null) {
    const memberEntries = se_MemoryGiBPerVCpuRequest(input.MemoryGiBPerVCpu, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryGiBPerVCpu.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedInstanceTypes != null) {
    const memberEntries = se_ExcludedInstanceTypes(input.ExcludedInstanceTypes, context);
    if (input.ExcludedInstanceTypes?.length === 0) {
      entries.ExcludedInstanceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedInstanceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceGenerations != null) {
    const memberEntries = se_InstanceGenerations(input.InstanceGenerations, context);
    if (input.InstanceGenerations?.length === 0) {
      entries.InstanceGenerations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceGenerations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SpotMaxPricePercentageOverLowestPrice != null) {
    entries["SpotMaxPricePercentageOverLowestPrice"] = input.SpotMaxPricePercentageOverLowestPrice;
  }
  if (input.OnDemandMaxPricePercentageOverLowestPrice != null) {
    entries["OnDemandMaxPricePercentageOverLowestPrice"] = input.OnDemandMaxPricePercentageOverLowestPrice;
  }
  if (input.BareMetal != null) {
    entries["BareMetal"] = input.BareMetal;
  }
  if (input.BurstablePerformance != null) {
    entries["BurstablePerformance"] = input.BurstablePerformance;
  }
  if (input.RequireHibernateSupport != null) {
    entries["RequireHibernateSupport"] = input.RequireHibernateSupport;
  }
  if (input.NetworkInterfaceCount != null) {
    const memberEntries = se_NetworkInterfaceCountRequest(input.NetworkInterfaceCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkInterfaceCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LocalStorage != null) {
    entries["LocalStorage"] = input.LocalStorage;
  }
  if (input.LocalStorageTypes != null) {
    const memberEntries = se_LocalStorageTypes(input.LocalStorageTypes, context);
    if (input.LocalStorageTypes?.length === 0) {
      entries.LocalStorageTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LocalStorageTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TotalLocalStorageGB != null) {
    const memberEntries = se_TotalLocalStorageGBRequest(input.TotalLocalStorageGB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TotalLocalStorageGB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BaselineEbsBandwidthMbps != null) {
    const memberEntries = se_BaselineEbsBandwidthMbpsRequest(input.BaselineEbsBandwidthMbps, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BaselineEbsBandwidthMbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorTypes != null) {
    const memberEntries = se_AcceleratorTypes(input.AcceleratorTypes, context);
    if (input.AcceleratorTypes?.length === 0) {
      entries.AcceleratorTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorCount != null) {
    const memberEntries = se_AcceleratorCountRequest(input.AcceleratorCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorManufacturers != null) {
    const memberEntries = se_AcceleratorManufacturers(input.AcceleratorManufacturers, context);
    if (input.AcceleratorManufacturers?.length === 0) {
      entries.AcceleratorManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorNames != null) {
    const memberEntries = se_AcceleratorNames(input.AcceleratorNames, context);
    if (input.AcceleratorNames?.length === 0) {
      entries.AcceleratorNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorTotalMemoryMiB != null) {
    const memberEntries = se_AcceleratorTotalMemoryMiBRequest(input.AcceleratorTotalMemoryMiB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTotalMemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkBandwidthGbps != null) {
    const memberEntries = se_NetworkBandwidthGbpsRequest(input.NetworkBandwidthGbps, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkBandwidthGbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AllowedInstanceTypes != null) {
    const memberEntries = se_AllowedInstanceTypes(input.AllowedInstanceTypes, context);
    if (input.AllowedInstanceTypes?.length === 0) {
      entries.AllowedInstanceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AllowedInstanceTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryInstanceReusePolicy
 */
const se_InstanceReusePolicy = (input: InstanceReusePolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReuseOnScaleIn != null) {
    entries["ReuseOnScaleIn"] = input.ReuseOnScaleIn;
  }
  return entries;
};

/**
 * serializeAws_queryInstancesDistribution
 */
const se_InstancesDistribution = (input: InstancesDistribution, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OnDemandAllocationStrategy != null) {
    entries["OnDemandAllocationStrategy"] = input.OnDemandAllocationStrategy;
  }
  if (input.OnDemandBaseCapacity != null) {
    entries["OnDemandBaseCapacity"] = input.OnDemandBaseCapacity;
  }
  if (input.OnDemandPercentageAboveBaseCapacity != null) {
    entries["OnDemandPercentageAboveBaseCapacity"] = input.OnDemandPercentageAboveBaseCapacity;
  }
  if (input.SpotAllocationStrategy != null) {
    entries["SpotAllocationStrategy"] = input.SpotAllocationStrategy;
  }
  if (input.SpotInstancePools != null) {
    entries["SpotInstancePools"] = input.SpotInstancePools;
  }
  if (input.SpotMaxPrice != null) {
    entries["SpotMaxPrice"] = input.SpotMaxPrice;
  }
  return entries;
};

/**
 * serializeAws_queryLaunchConfigurationNames
 */
const se_LaunchConfigurationNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLaunchConfigurationNamesType
 */
const se_LaunchConfigurationNamesType = (input: LaunchConfigurationNamesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchConfigurationNames != null) {
    const memberEntries = se_LaunchConfigurationNames(input.LaunchConfigurationNames, context);
    if (input.LaunchConfigurationNames?.length === 0) {
      entries.LaunchConfigurationNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchConfigurationNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  return entries;
};

/**
 * serializeAws_queryLaunchConfigurationNameType
 */
const se_LaunchConfigurationNameType = (input: LaunchConfigurationNameType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  return entries;
};

/**
 * serializeAws_queryLaunchTemplate
 */
const se_LaunchTemplate = (input: LaunchTemplate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplateSpecification != null) {
    const memberEntries = se_LaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Overrides != null) {
    const memberEntries = se_Overrides(input.Overrides, context);
    if (input.Overrides?.length === 0) {
      entries.Overrides = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Overrides.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryLaunchTemplateOverrides
 */
const se_LaunchTemplateOverrides = (input: LaunchTemplateOverrides, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceType != null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity != null) {
    entries["WeightedCapacity"] = input.WeightedCapacity;
  }
  if (input.LaunchTemplateSpecification != null) {
    const memberEntries = se_LaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceRequirements != null) {
    const memberEntries = se_InstanceRequirements(input.InstanceRequirements, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceRequirements.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryLaunchTemplateSpecification
 */
const se_LaunchTemplateSpecification = (input: LaunchTemplateSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplateId != null) {
    entries["LaunchTemplateId"] = input.LaunchTemplateId;
  }
  if (input.LaunchTemplateName != null) {
    entries["LaunchTemplateName"] = input.LaunchTemplateName;
  }
  if (input.Version != null) {
    entries["Version"] = input.Version;
  }
  return entries;
};

/**
 * serializeAws_queryLifecycleHookNames
 */
const se_LifecycleHookNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLifecycleHookSpecification
 */
const se_LifecycleHookSpecification = (input: LifecycleHookSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.LifecycleTransition != null) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.NotificationMetadata != null) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.HeartbeatTimeout != null) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.DefaultResult != null) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  if (input.NotificationTargetARN != null) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  return entries;
};

/**
 * serializeAws_queryLifecycleHookSpecifications
 */
const se_LifecycleHookSpecifications = (input: LifecycleHookSpecification[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LifecycleHookSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLoadBalancerNames
 */
const se_LoadBalancerNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLocalStorageTypes
 */
const se_LocalStorageTypes = (input: (LocalStorageType | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMemoryGiBPerVCpuRequest
 */
const se_MemoryGiBPerVCpuRequest = (input: MemoryGiBPerVCpuRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

/**
 * serializeAws_queryMemoryMiBRequest
 */
const se_MemoryMiBRequest = (input: MemoryMiBRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * serializeAws_queryMetric
 */
const se_Metric = (input: Metric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_MetricDimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMetricDataQueries
 */
const se_MetricDataQueries = (input: MetricDataQuery[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDataQuery
 */
const se_MetricDataQuery = (input: MetricDataQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Expression != null) {
    entries["Expression"] = input.Expression;
  }
  if (input.MetricStat != null) {
    const memberEntries = se_MetricStat(input.MetricStat, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.ReturnData != null) {
    entries["ReturnData"] = input.ReturnData;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDimensions
 */
const se_MetricDimensions = (input: MetricDimension[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetrics
 */
const se_Metrics = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStat
 */
const se_MetricStat = (input: MetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Metric != null) {
    const memberEntries = se_Metric(input.Metric, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

/**
 * serializeAws_queryMixedInstancesPolicy
 */
const se_MixedInstancesPolicy = (input: MixedInstancesPolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplate != null) {
    const memberEntries = se_LaunchTemplate(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstancesDistribution != null) {
    const memberEntries = se_InstancesDistribution(input.InstancesDistribution, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstancesDistribution.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryNetworkBandwidthGbpsRequest
 */
const se_NetworkBandwidthGbpsRequest = (input: NetworkBandwidthGbpsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

/**
 * serializeAws_queryNetworkInterfaceCountRequest
 */
const se_NetworkInterfaceCountRequest = (input: NetworkInterfaceCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * serializeAws_queryOverrides
 */
const se_Overrides = (input: LaunchTemplateOverrides[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_LaunchTemplateOverrides(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyNames
 */
const se_PolicyNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyTypes
 */
const se_PolicyTypes = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPredefinedMetricSpecification
 */
const se_PredefinedMetricSpecification = (input: PredefinedMetricSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PredefinedMetricType != null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel != null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingConfiguration
 */
const se_PredictiveScalingConfiguration = (input: PredictiveScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricSpecifications != null) {
    const memberEntries = se_PredictiveScalingMetricSpecifications(input.MetricSpecifications, context);
    if (input.MetricSpecifications?.length === 0) {
      entries.MetricSpecifications = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricSpecifications.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Mode != null) {
    entries["Mode"] = input.Mode;
  }
  if (input.SchedulingBufferTime != null) {
    entries["SchedulingBufferTime"] = input.SchedulingBufferTime;
  }
  if (input.MaxCapacityBreachBehavior != null) {
    entries["MaxCapacityBreachBehavior"] = input.MaxCapacityBreachBehavior;
  }
  if (input.MaxCapacityBuffer != null) {
    entries["MaxCapacityBuffer"] = input.MaxCapacityBuffer;
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingCustomizedCapacityMetric
 */
const se_PredictiveScalingCustomizedCapacityMetric = (
  input: PredictiveScalingCustomizedCapacityMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = se_MetricDataQueries(input.MetricDataQueries, context);
    if (input.MetricDataQueries?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingCustomizedLoadMetric
 */
const se_PredictiveScalingCustomizedLoadMetric = (
  input: PredictiveScalingCustomizedLoadMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = se_MetricDataQueries(input.MetricDataQueries, context);
    if (input.MetricDataQueries?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingCustomizedScalingMetric
 */
const se_PredictiveScalingCustomizedScalingMetric = (
  input: PredictiveScalingCustomizedScalingMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = se_MetricDataQueries(input.MetricDataQueries, context);
    if (input.MetricDataQueries?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingMetricSpecification
 */
const se_PredictiveScalingMetricSpecification = (
  input: PredictiveScalingMetricSpecification,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetValue != null) {
    entries["TargetValue"] = __serializeFloat(input.TargetValue);
  }
  if (input.PredefinedMetricPairSpecification != null) {
    const memberEntries = se_PredictiveScalingPredefinedMetricPair(input.PredefinedMetricPairSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricPairSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedScalingMetricSpecification != null) {
    const memberEntries = se_PredictiveScalingPredefinedScalingMetric(
      input.PredefinedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedLoadMetricSpecification != null) {
    const memberEntries = se_PredictiveScalingPredefinedLoadMetric(input.PredefinedLoadMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedScalingMetricSpecification != null) {
    const memberEntries = se_PredictiveScalingCustomizedScalingMetric(
      input.CustomizedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedLoadMetricSpecification != null) {
    const memberEntries = se_PredictiveScalingCustomizedLoadMetric(input.CustomizedLoadMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedCapacityMetricSpecification != null) {
    const memberEntries = se_PredictiveScalingCustomizedCapacityMetric(
      input.CustomizedCapacityMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedCapacityMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingMetricSpecifications
 */
const se_PredictiveScalingMetricSpecifications = (
  input: PredictiveScalingMetricSpecification[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PredictiveScalingMetricSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingPredefinedLoadMetric
 */
const se_PredictiveScalingPredefinedLoadMetric = (
  input: PredictiveScalingPredefinedLoadMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PredefinedMetricType != null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel != null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingPredefinedMetricPair
 */
const se_PredictiveScalingPredefinedMetricPair = (
  input: PredictiveScalingPredefinedMetricPair,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PredefinedMetricType != null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel != null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingPredefinedScalingMetric
 */
const se_PredictiveScalingPredefinedScalingMetric = (
  input: PredictiveScalingPredefinedScalingMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PredefinedMetricType != null) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel != null) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};

/**
 * serializeAws_queryProcessNames
 */
const se_ProcessNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPutLifecycleHookType
 */
const se_PutLifecycleHookType = (input: PutLifecycleHookType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleTransition != null) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.RoleARN != null) {
    entries["RoleARN"] = input.RoleARN;
  }
  if (input.NotificationTargetARN != null) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.NotificationMetadata != null) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.HeartbeatTimeout != null) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.DefaultResult != null) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  return entries;
};

/**
 * serializeAws_queryPutNotificationConfigurationType
 */
const se_PutNotificationConfigurationType = (input: PutNotificationConfigurationType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN != null) {
    entries["TopicARN"] = input.TopicARN;
  }
  if (input.NotificationTypes != null) {
    const memberEntries = se_AutoScalingNotificationTypes(input.NotificationTypes, context);
    if (input.NotificationTypes?.length === 0) {
      entries.NotificationTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPutScalingPolicyType
 */
const se_PutScalingPolicyType = (input: PutScalingPolicyType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyType != null) {
    entries["PolicyType"] = input.PolicyType;
  }
  if (input.AdjustmentType != null) {
    entries["AdjustmentType"] = input.AdjustmentType;
  }
  if (input.MinAdjustmentStep != null) {
    entries["MinAdjustmentStep"] = input.MinAdjustmentStep;
  }
  if (input.MinAdjustmentMagnitude != null) {
    entries["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
  }
  if (input.ScalingAdjustment != null) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  if (input.Cooldown != null) {
    entries["Cooldown"] = input.Cooldown;
  }
  if (input.MetricAggregationType != null) {
    entries["MetricAggregationType"] = input.MetricAggregationType;
  }
  if (input.StepAdjustments != null) {
    const memberEntries = se_StepAdjustments(input.StepAdjustments, context);
    if (input.StepAdjustments?.length === 0) {
      entries.StepAdjustments = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StepAdjustments.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EstimatedInstanceWarmup != null) {
    entries["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
  }
  if (input.TargetTrackingConfiguration != null) {
    const memberEntries = se_TargetTrackingConfiguration(input.TargetTrackingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetTrackingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.PredictiveScalingConfiguration != null) {
    const memberEntries = se_PredictiveScalingConfiguration(input.PredictiveScalingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredictiveScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPutScheduledUpdateGroupActionType
 */
const se_PutScheduledUpdateGroupActionType = (
  input: PutScheduledUpdateGroupActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.Time != null) {
    entries["Time"] = input.Time.toISOString().split(".")[0] + "Z";
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Recurrence != null) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.MinSize != null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize != null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity != null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.TimeZone != null) {
    entries["TimeZone"] = input.TimeZone;
  }
  return entries;
};

/**
 * serializeAws_queryPutWarmPoolType
 */
const se_PutWarmPoolType = (input: PutWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxGroupPreparedCapacity != null) {
    entries["MaxGroupPreparedCapacity"] = input.MaxGroupPreparedCapacity;
  }
  if (input.MinSize != null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.PoolState != null) {
    entries["PoolState"] = input.PoolState;
  }
  if (input.InstanceReusePolicy != null) {
    const memberEntries = se_InstanceReusePolicy(input.InstanceReusePolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceReusePolicy.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRecordLifecycleActionHeartbeatType
 */
const se_RecordLifecycleActionHeartbeatType = (
  input: RecordLifecycleActionHeartbeatType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleActionToken != null) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

/**
 * serializeAws_queryRefreshPreferences
 */
const se_RefreshPreferences = (input: RefreshPreferences, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MinHealthyPercentage != null) {
    entries["MinHealthyPercentage"] = input.MinHealthyPercentage;
  }
  if (input.InstanceWarmup != null) {
    entries["InstanceWarmup"] = input.InstanceWarmup;
  }
  if (input.CheckpointPercentages != null) {
    const memberEntries = se_CheckpointPercentages(input.CheckpointPercentages, context);
    if (input.CheckpointPercentages?.length === 0) {
      entries.CheckpointPercentages = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CheckpointPercentages.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CheckpointDelay != null) {
    entries["CheckpointDelay"] = input.CheckpointDelay;
  }
  if (input.SkipMatching != null) {
    entries["SkipMatching"] = input.SkipMatching;
  }
  if (input.AutoRollback != null) {
    entries["AutoRollback"] = input.AutoRollback;
  }
  if (input.ScaleInProtectedInstances != null) {
    entries["ScaleInProtectedInstances"] = input.ScaleInProtectedInstances;
  }
  if (input.StandbyInstances != null) {
    entries["StandbyInstances"] = input.StandbyInstances;
  }
  if (input.AlarmSpecification != null) {
    const memberEntries = se_AlarmSpecification(input.AlarmSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmSpecification.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryRollbackInstanceRefreshType
 */
const se_RollbackInstanceRefreshType = (input: RollbackInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryScalingProcessQuery
 */
const se_ScalingProcessQuery = (input: ScalingProcessQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScalingProcesses != null) {
    const memberEntries = se_ProcessNames(input.ScalingProcesses, context);
    if (input.ScalingProcesses?.length === 0) {
      entries.ScalingProcesses = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingProcesses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryScheduledActionNames
 */
const se_ScheduledActionNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryScheduledUpdateGroupActionRequest
 */
const se_ScheduledUpdateGroupActionRequest = (
  input: ScheduledUpdateGroupActionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Recurrence != null) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.MinSize != null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize != null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity != null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.TimeZone != null) {
    entries["TimeZone"] = input.TimeZone;
  }
  return entries;
};

/**
 * serializeAws_queryScheduledUpdateGroupActionRequests
 */
const se_ScheduledUpdateGroupActionRequests = (
  input: ScheduledUpdateGroupActionRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ScheduledUpdateGroupActionRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetDesiredCapacityType
 */
const se_SetDesiredCapacityType = (input: SetDesiredCapacityType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.DesiredCapacity != null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.HonorCooldown != null) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  return entries;
};

/**
 * serializeAws_querySetInstanceHealthQuery
 */
const se_SetInstanceHealthQuery = (input: SetInstanceHealthQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.HealthStatus != null) {
    entries["HealthStatus"] = input.HealthStatus;
  }
  if (input.ShouldRespectGracePeriod != null) {
    entries["ShouldRespectGracePeriod"] = input.ShouldRespectGracePeriod;
  }
  return entries;
};

/**
 * serializeAws_querySetInstanceProtectionQuery
 */
const se_SetInstanceProtectionQuery = (input: SetInstanceProtectionQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = se_InstanceIds(input.InstanceIds, context);
    if (input.InstanceIds?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ProtectedFromScaleIn != null) {
    entries["ProtectedFromScaleIn"] = input.ProtectedFromScaleIn;
  }
  return entries;
};

/**
 * serializeAws_queryStartInstanceRefreshType
 */
const se_StartInstanceRefreshType = (input: StartInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Strategy != null) {
    entries["Strategy"] = input.Strategy;
  }
  if (input.DesiredConfiguration != null) {
    const memberEntries = se_DesiredConfiguration(input.DesiredConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DesiredConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Preferences != null) {
    const memberEntries = se_RefreshPreferences(input.Preferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Preferences.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryStepAdjustment
 */
const se_StepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricIntervalLowerBound != null) {
    entries["MetricIntervalLowerBound"] = __serializeFloat(input.MetricIntervalLowerBound);
  }
  if (input.MetricIntervalUpperBound != null) {
    entries["MetricIntervalUpperBound"] = __serializeFloat(input.MetricIntervalUpperBound);
  }
  if (input.ScalingAdjustment != null) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  return entries;
};

/**
 * serializeAws_queryStepAdjustments
 */
const se_StepAdjustments = (input: StepAdjustment[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_StepAdjustment(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceId != null) {
    entries["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType != null) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  if (input.PropagateAtLaunch != null) {
    entries["PropagateAtLaunch"] = input.PropagateAtLaunch;
  }
  return entries;
};

/**
 * serializeAws_queryTags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetGroupARNs
 */
const se_TargetGroupARNs = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetTrackingConfiguration
 */
const se_TargetTrackingConfiguration = (input: TargetTrackingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PredefinedMetricSpecification != null) {
    const memberEntries = se_PredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedMetricSpecification != null) {
    const memberEntries = se_CustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetValue != null) {
    entries["TargetValue"] = __serializeFloat(input.TargetValue);
  }
  if (input.DisableScaleIn != null) {
    entries["DisableScaleIn"] = input.DisableScaleIn;
  }
  return entries;
};

/**
 * serializeAws_queryTargetTrackingMetricDataQueries
 */
const se_TargetTrackingMetricDataQueries = (input: TargetTrackingMetricDataQuery[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TargetTrackingMetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTargetTrackingMetricDataQuery
 */
const se_TargetTrackingMetricDataQuery = (input: TargetTrackingMetricDataQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Expression != null) {
    entries["Expression"] = input.Expression;
  }
  if (input.MetricStat != null) {
    const memberEntries = se_TargetTrackingMetricStat(input.MetricStat, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.ReturnData != null) {
    entries["ReturnData"] = input.ReturnData;
  }
  return entries;
};

/**
 * serializeAws_queryTargetTrackingMetricStat
 */
const se_TargetTrackingMetricStat = (input: TargetTrackingMetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Metric != null) {
    const memberEntries = se_Metric(input.Metric, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

/**
 * serializeAws_queryTerminateInstanceInAutoScalingGroupType
 */
const se_TerminateInstanceInAutoScalingGroupType = (
  input: TerminateInstanceInAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.ShouldDecrementDesiredCapacity != null) {
    entries["ShouldDecrementDesiredCapacity"] = input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

/**
 * serializeAws_queryTerminationPolicies
 */
const se_TerminationPolicies = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTotalLocalStorageGBRequest
 */
const se_TotalLocalStorageGBRequest = (input: TotalLocalStorageGBRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

/**
 * serializeAws_queryTrafficSourceIdentifier
 */
const se_TrafficSourceIdentifier = (input: TrafficSourceIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identifier != null) {
    entries["Identifier"] = input.Identifier;
  }
  if (input.Type != null) {
    entries["Type"] = input.Type;
  }
  return entries;
};

/**
 * serializeAws_queryTrafficSources
 */
const se_TrafficSources = (input: TrafficSourceIdentifier[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_TrafficSourceIdentifier(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAutoScalingGroupType
 */
const se_UpdateAutoScalingGroupType = (input: UpdateAutoScalingGroupType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate != null) {
    const memberEntries = se_LaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = se_MixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MinSize != null) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MaxSize != null) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.DesiredCapacity != null) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.DefaultCooldown != null) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.AvailabilityZones != null) {
    const memberEntries = se_AvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HealthCheckType != null) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.HealthCheckGracePeriod != null) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.PlacementGroup != null) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.VPCZoneIdentifier != null) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  if (input.TerminationPolicies != null) {
    const memberEntries = se_TerminationPolicies(input.TerminationPolicies, context);
    if (input.TerminationPolicies?.length === 0) {
      entries.TerminationPolicies = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn != null) {
    entries["NewInstancesProtectedFromScaleIn"] = input.NewInstancesProtectedFromScaleIn;
  }
  if (input.ServiceLinkedRoleARN != null) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.MaxInstanceLifetime != null) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  if (input.CapacityRebalance != null) {
    entries["CapacityRebalance"] = input.CapacityRebalance;
  }
  if (input.Context != null) {
    entries["Context"] = input.Context;
  }
  if (input.DesiredCapacityType != null) {
    entries["DesiredCapacityType"] = input.DesiredCapacityType;
  }
  if (input.DefaultInstanceWarmup != null) {
    entries["DefaultInstanceWarmup"] = input.DefaultInstanceWarmup;
  }
  return entries;
};

/**
 * serializeAws_queryValues
 */
const se_Values = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryVCpuCountRequest
 */
const se_VCpuCountRequest = (input: VCpuCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

/**
 * deserializeAws_queryAcceleratorCountRequest
 */
const de_AcceleratorCountRequest = (output: any, context: __SerdeContext): AcceleratorCountRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAcceleratorManufacturers
 */
const de_AcceleratorManufacturers = (output: any, context: __SerdeContext): (AcceleratorManufacturer | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAcceleratorNames
 */
const de_AcceleratorNames = (output: any, context: __SerdeContext): (AcceleratorName | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAcceleratorTotalMemoryMiBRequest
 */
const de_AcceleratorTotalMemoryMiBRequest = (
  output: any,
  context: __SerdeContext
): AcceleratorTotalMemoryMiBRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAcceleratorTypes
 */
const de_AcceleratorTypes = (output: any, context: __SerdeContext): (AcceleratorType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryActiveInstanceRefreshNotFoundFault
 */
const de_ActiveInstanceRefreshNotFoundFault = (
  output: any,
  context: __SerdeContext
): ActiveInstanceRefreshNotFoundFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryActivities
 */
const de_Activities = (output: any, context: __SerdeContext): Activity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Activity(entry, context);
    });
};

/**
 * deserializeAws_queryActivitiesType
 */
const de_ActivitiesType = (output: any, context: __SerdeContext): ActivitiesType => {
  const contents: any = {};
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = de_Activities(__getArrayIfSingleItem(output["Activities"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryActivity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  const contents: any = {};
  if (output["ActivityId"] !== undefined) {
    contents.ActivityId = __expectString(output["ActivityId"]);
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["Cause"] !== undefined) {
    contents.Cause = __expectString(output["Cause"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTime"]));
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = __expectString(output["StatusMessage"]);
  }
  if (output["Progress"] !== undefined) {
    contents.Progress = __strictParseInt32(output["Progress"]) as number;
  }
  if (output["Details"] !== undefined) {
    contents.Details = __expectString(output["Details"]);
  }
  if (output["AutoScalingGroupState"] !== undefined) {
    contents.AutoScalingGroupState = __expectString(output["AutoScalingGroupState"]);
  }
  if (output["AutoScalingGroupARN"] !== undefined) {
    contents.AutoScalingGroupARN = __expectString(output["AutoScalingGroupARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryActivityType
 */
const de_ActivityType = (output: any, context: __SerdeContext): ActivityType => {
  const contents: any = {};
  if (output["Activity"] !== undefined) {
    contents.Activity = de_Activity(output["Activity"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAdjustmentType
 */
const de_AdjustmentType = (output: any, context: __SerdeContext): AdjustmentType => {
  const contents: any = {};
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = __expectString(output["AdjustmentType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAdjustmentTypes
 */
const de_AdjustmentTypes = (output: any, context: __SerdeContext): AdjustmentType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdjustmentType(entry, context);
    });
};

/**
 * deserializeAws_queryAlarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  const contents: any = {};
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmARN"] !== undefined) {
    contents.AlarmARN = __expectString(output["AlarmARN"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAlarmList
 */
const de_AlarmList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAlarms
 */
const de_Alarms = (output: any, context: __SerdeContext): Alarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alarm(entry, context);
    });
};

/**
 * deserializeAws_queryAlarmSpecification
 */
const de_AlarmSpecification = (output: any, context: __SerdeContext): AlarmSpecification => {
  const contents: any = {};
  if (output.Alarms === "") {
    contents.Alarms = [];
  } else if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = de_AlarmList(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAllowedInstanceTypes
 */
const de_AllowedInstanceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAlreadyExistsFault
 */
const de_AlreadyExistsFault = (output: any, context: __SerdeContext): AlreadyExistsFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAttachLoadBalancersResultType
 */
const de_AttachLoadBalancersResultType = (output: any, context: __SerdeContext): AttachLoadBalancersResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAttachLoadBalancerTargetGroupsResultType
 */
const de_AttachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTargetGroupsResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAttachTrafficSourcesResultType
 */
const de_AttachTrafficSourcesResultType = (output: any, context: __SerdeContext): AttachTrafficSourcesResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryAutoScalingGroup
 */
const de_AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  const contents: any = {};
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["AutoScalingGroupARN"] !== undefined) {
    contents.AutoScalingGroupARN = __expectString(output["AutoScalingGroupARN"]);
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = __expectString(output["LaunchConfigurationName"]);
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = de_LaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = de_MixedInstancesPolicy(output["MixedInstancesPolicy"], context);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = __strictParseInt32(output["MinSize"]) as number;
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = __strictParseInt32(output["MaxSize"]) as number;
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = __strictParseInt32(output["DesiredCapacity"]) as number;
  }
  if (output["PredictedCapacity"] !== undefined) {
    contents.PredictedCapacity = __strictParseInt32(output["PredictedCapacity"]) as number;
  }
  if (output["DefaultCooldown"] !== undefined) {
    contents.DefaultCooldown = __strictParseInt32(output["DefaultCooldown"]) as number;
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  } else if (output["AvailabilityZones"] !== undefined && output["AvailabilityZones"]["member"] !== undefined) {
    contents.AvailabilityZones = de_AvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.LoadBalancerNames === "") {
    contents.LoadBalancerNames = [];
  } else if (output["LoadBalancerNames"] !== undefined && output["LoadBalancerNames"]["member"] !== undefined) {
    contents.LoadBalancerNames = de_LoadBalancerNames(
      __getArrayIfSingleItem(output["LoadBalancerNames"]["member"]),
      context
    );
  }
  if (output.TargetGroupARNs === "") {
    contents.TargetGroupARNs = [];
  } else if (output["TargetGroupARNs"] !== undefined && output["TargetGroupARNs"]["member"] !== undefined) {
    contents.TargetGroupARNs = de_TargetGroupARNs(__getArrayIfSingleItem(output["TargetGroupARNs"]["member"]), context);
  }
  if (output["HealthCheckType"] !== undefined) {
    contents.HealthCheckType = __expectString(output["HealthCheckType"]);
  }
  if (output["HealthCheckGracePeriod"] !== undefined) {
    contents.HealthCheckGracePeriod = __strictParseInt32(output["HealthCheckGracePeriod"]) as number;
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_Instances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output.SuspendedProcesses === "") {
    contents.SuspendedProcesses = [];
  } else if (output["SuspendedProcesses"] !== undefined && output["SuspendedProcesses"]["member"] !== undefined) {
    contents.SuspendedProcesses = de_SuspendedProcesses(
      __getArrayIfSingleItem(output["SuspendedProcesses"]["member"]),
      context
    );
  }
  if (output["PlacementGroup"] !== undefined) {
    contents.PlacementGroup = __expectString(output["PlacementGroup"]);
  }
  if (output["VPCZoneIdentifier"] !== undefined) {
    contents.VPCZoneIdentifier = __expectString(output["VPCZoneIdentifier"]);
  }
  if (output.EnabledMetrics === "") {
    contents.EnabledMetrics = [];
  } else if (output["EnabledMetrics"] !== undefined && output["EnabledMetrics"]["member"] !== undefined) {
    contents.EnabledMetrics = de_EnabledMetrics(__getArrayIfSingleItem(output["EnabledMetrics"]["member"]), context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.TerminationPolicies === "") {
    contents.TerminationPolicies = [];
  } else if (output["TerminationPolicies"] !== undefined && output["TerminationPolicies"]["member"] !== undefined) {
    contents.TerminationPolicies = de_TerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicies"]["member"]),
      context
    );
  }
  if (output["NewInstancesProtectedFromScaleIn"] !== undefined) {
    contents.NewInstancesProtectedFromScaleIn = __parseBoolean(output["NewInstancesProtectedFromScaleIn"]);
  }
  if (output["ServiceLinkedRoleARN"] !== undefined) {
    contents.ServiceLinkedRoleARN = __expectString(output["ServiceLinkedRoleARN"]);
  }
  if (output["MaxInstanceLifetime"] !== undefined) {
    contents.MaxInstanceLifetime = __strictParseInt32(output["MaxInstanceLifetime"]) as number;
  }
  if (output["CapacityRebalance"] !== undefined) {
    contents.CapacityRebalance = __parseBoolean(output["CapacityRebalance"]);
  }
  if (output["WarmPoolConfiguration"] !== undefined) {
    contents.WarmPoolConfiguration = de_WarmPoolConfiguration(output["WarmPoolConfiguration"], context);
  }
  if (output["WarmPoolSize"] !== undefined) {
    contents.WarmPoolSize = __strictParseInt32(output["WarmPoolSize"]) as number;
  }
  if (output["Context"] !== undefined) {
    contents.Context = __expectString(output["Context"]);
  }
  if (output["DesiredCapacityType"] !== undefined) {
    contents.DesiredCapacityType = __expectString(output["DesiredCapacityType"]);
  }
  if (output["DefaultInstanceWarmup"] !== undefined) {
    contents.DefaultInstanceWarmup = __strictParseInt32(output["DefaultInstanceWarmup"]) as number;
  }
  if (output.TrafficSources === "") {
    contents.TrafficSources = [];
  } else if (output["TrafficSources"] !== undefined && output["TrafficSources"]["member"] !== undefined) {
    contents.TrafficSources = de_TrafficSources(__getArrayIfSingleItem(output["TrafficSources"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingGroups
 */
const de_AutoScalingGroups = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingGroup(entry, context);
    });
};

/**
 * deserializeAws_queryAutoScalingGroupsType
 */
const de_AutoScalingGroupsType = (output: any, context: __SerdeContext): AutoScalingGroupsType => {
  const contents: any = {};
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  } else if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = de_AutoScalingGroups(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingInstanceDetails
 */
const de_AutoScalingInstanceDetails = (output: any, context: __SerdeContext): AutoScalingInstanceDetails => {
  const contents: any = {};
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = __expectString(output["LifecycleState"]);
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = __expectString(output["HealthStatus"]);
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = __expectString(output["LaunchConfigurationName"]);
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = de_LaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = __parseBoolean(output["ProtectedFromScaleIn"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingInstances
 */
const de_AutoScalingInstances = (output: any, context: __SerdeContext): AutoScalingInstanceDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingInstanceDetails(entry, context);
    });
};

/**
 * deserializeAws_queryAutoScalingInstancesType
 */
const de_AutoScalingInstancesType = (output: any, context: __SerdeContext): AutoScalingInstancesType => {
  const contents: any = {};
  if (output.AutoScalingInstances === "") {
    contents.AutoScalingInstances = [];
  } else if (output["AutoScalingInstances"] !== undefined && output["AutoScalingInstances"]["member"] !== undefined) {
    contents.AutoScalingInstances = de_AutoScalingInstances(
      __getArrayIfSingleItem(output["AutoScalingInstances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingNotificationTypes
 */
const de_AutoScalingNotificationTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryBaselineEbsBandwidthMbpsRequest
 */
const de_BaselineEbsBandwidthMbpsRequest = (output: any, context: __SerdeContext): BaselineEbsBandwidthMbpsRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryBatchDeleteScheduledActionAnswer
 */
const de_BatchDeleteScheduledActionAnswer = (
  output: any,
  context: __SerdeContext
): BatchDeleteScheduledActionAnswer => {
  const contents: any = {};
  if (output.FailedScheduledActions === "") {
    contents.FailedScheduledActions = [];
  } else if (
    output["FailedScheduledActions"] !== undefined &&
    output["FailedScheduledActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledActions = de_FailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output["FailedScheduledActions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer
 */
const de_BatchPutScheduledUpdateGroupActionAnswer = (
  output: any,
  context: __SerdeContext
): BatchPutScheduledUpdateGroupActionAnswer => {
  const contents: any = {};
  if (output.FailedScheduledUpdateGroupActions === "") {
    contents.FailedScheduledUpdateGroupActions = [];
  } else if (
    output["FailedScheduledUpdateGroupActions"] !== undefined &&
    output["FailedScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledUpdateGroupActions = de_FailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output["FailedScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryBlockDeviceMapping
 */
const de_BlockDeviceMapping = (output: any, context: __SerdeContext): BlockDeviceMapping => {
  const contents: any = {};
  if (output["VirtualName"] !== undefined) {
    contents.VirtualName = __expectString(output["VirtualName"]);
  }
  if (output["DeviceName"] !== undefined) {
    contents.DeviceName = __expectString(output["DeviceName"]);
  }
  if (output["Ebs"] !== undefined) {
    contents.Ebs = de_Ebs(output["Ebs"], context);
  }
  if (output["NoDevice"] !== undefined) {
    contents.NoDevice = __parseBoolean(output["NoDevice"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBlockDeviceMappings
 */
const de_BlockDeviceMappings = (output: any, context: __SerdeContext): BlockDeviceMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlockDeviceMapping(entry, context);
    });
};

/**
 * deserializeAws_queryCancelInstanceRefreshAnswer
 */
const de_CancelInstanceRefreshAnswer = (output: any, context: __SerdeContext): CancelInstanceRefreshAnswer => {
  const contents: any = {};
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityForecast
 */
const de_CapacityForecast = (output: any, context: __SerdeContext): CapacityForecast => {
  const contents: any = {};
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  } else if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = de_PredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_PredictiveScalingForecastValues(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCheckpointPercentages
 */
const de_CheckpointPercentages = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

/**
 * deserializeAws_queryClassicLinkVPCSecurityGroups
 */
const de_ClassicLinkVPCSecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCompleteLifecycleActionAnswer
 */
const de_CompleteLifecycleActionAnswer = (output: any, context: __SerdeContext): CompleteLifecycleActionAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCpuManufacturers
 */
const de_CpuManufacturers = (output: any, context: __SerdeContext): (CpuManufacturer | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCustomizedMetricSpecification
 */
const de_CustomizedMetricSpecification = (output: any, context: __SerdeContext): CustomizedMetricSpecification => {
  const contents: any = {};
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_MetricDimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = __expectString(output["Statistic"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  if (output.Metrics === "") {
    contents.Metrics = [];
  } else if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = de_TargetTrackingMetricDataQueries(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteLifecycleHookAnswer
 */
const de_DeleteLifecycleHookAnswer = (output: any, context: __SerdeContext): DeleteLifecycleHookAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteWarmPoolAnswer
 */
const de_DeleteWarmPoolAnswer = (output: any, context: __SerdeContext): DeleteWarmPoolAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeAccountLimitsAnswer
 */
const de_DescribeAccountLimitsAnswer = (output: any, context: __SerdeContext): DescribeAccountLimitsAnswer => {
  const contents: any = {};
  if (output["MaxNumberOfAutoScalingGroups"] !== undefined) {
    contents.MaxNumberOfAutoScalingGroups = __strictParseInt32(output["MaxNumberOfAutoScalingGroups"]) as number;
  }
  if (output["MaxNumberOfLaunchConfigurations"] !== undefined) {
    contents.MaxNumberOfLaunchConfigurations = __strictParseInt32(output["MaxNumberOfLaunchConfigurations"]) as number;
  }
  if (output["NumberOfAutoScalingGroups"] !== undefined) {
    contents.NumberOfAutoScalingGroups = __strictParseInt32(output["NumberOfAutoScalingGroups"]) as number;
  }
  if (output["NumberOfLaunchConfigurations"] !== undefined) {
    contents.NumberOfLaunchConfigurations = __strictParseInt32(output["NumberOfLaunchConfigurations"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAdjustmentTypesAnswer
 */
const de_DescribeAdjustmentTypesAnswer = (output: any, context: __SerdeContext): DescribeAdjustmentTypesAnswer => {
  const contents: any = {};
  if (output.AdjustmentTypes === "") {
    contents.AdjustmentTypes = [];
  } else if (output["AdjustmentTypes"] !== undefined && output["AdjustmentTypes"]["member"] !== undefined) {
    contents.AdjustmentTypes = de_AdjustmentTypes(__getArrayIfSingleItem(output["AdjustmentTypes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer
 */
const de_DescribeAutoScalingNotificationTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingNotificationTypesAnswer => {
  const contents: any = {};
  if (output.AutoScalingNotificationTypes === "") {
    contents.AutoScalingNotificationTypes = [];
  } else if (
    output["AutoScalingNotificationTypes"] !== undefined &&
    output["AutoScalingNotificationTypes"]["member"] !== undefined
  ) {
    contents.AutoScalingNotificationTypes = de_AutoScalingNotificationTypes(
      __getArrayIfSingleItem(output["AutoScalingNotificationTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInstanceRefreshesAnswer
 */
const de_DescribeInstanceRefreshesAnswer = (output: any, context: __SerdeContext): DescribeInstanceRefreshesAnswer => {
  const contents: any = {};
  if (output.InstanceRefreshes === "") {
    contents.InstanceRefreshes = [];
  } else if (output["InstanceRefreshes"] !== undefined && output["InstanceRefreshes"]["member"] !== undefined) {
    contents.InstanceRefreshes = de_InstanceRefreshes(
      __getArrayIfSingleItem(output["InstanceRefreshes"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLifecycleHooksAnswer
 */
const de_DescribeLifecycleHooksAnswer = (output: any, context: __SerdeContext): DescribeLifecycleHooksAnswer => {
  const contents: any = {};
  if (output.LifecycleHooks === "") {
    contents.LifecycleHooks = [];
  } else if (output["LifecycleHooks"] !== undefined && output["LifecycleHooks"]["member"] !== undefined) {
    contents.LifecycleHooks = de_LifecycleHooks(__getArrayIfSingleItem(output["LifecycleHooks"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLifecycleHookTypesAnswer
 */
const de_DescribeLifecycleHookTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeLifecycleHookTypesAnswer => {
  const contents: any = {};
  if (output.LifecycleHookTypes === "") {
    contents.LifecycleHookTypes = [];
  } else if (output["LifecycleHookTypes"] !== undefined && output["LifecycleHookTypes"]["member"] !== undefined) {
    contents.LifecycleHookTypes = de_AutoScalingNotificationTypes(
      __getArrayIfSingleItem(output["LifecycleHookTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancersResponse
 */
const de_DescribeLoadBalancersResponse = (output: any, context: __SerdeContext): DescribeLoadBalancersResponse => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = de_LoadBalancerStates(__getArrayIfSingleItem(output["LoadBalancers"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse
 */
const de_DescribeLoadBalancerTargetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerTargetGroupsResponse => {
  const contents: any = {};
  if (output.LoadBalancerTargetGroups === "") {
    contents.LoadBalancerTargetGroups = [];
  } else if (
    output["LoadBalancerTargetGroups"] !== undefined &&
    output["LoadBalancerTargetGroups"]["member"] !== undefined
  ) {
    contents.LoadBalancerTargetGroups = de_LoadBalancerTargetGroupStates(
      __getArrayIfSingleItem(output["LoadBalancerTargetGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeMetricCollectionTypesAnswer
 */
const de_DescribeMetricCollectionTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeMetricCollectionTypesAnswer => {
  const contents: any = {};
  if (output.Metrics === "") {
    contents.Metrics = [];
  } else if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = de_MetricCollectionTypes(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
  }
  if (output.Granularities === "") {
    contents.Granularities = [];
  } else if (output["Granularities"] !== undefined && output["Granularities"]["member"] !== undefined) {
    contents.Granularities = de_MetricGranularityTypes(
      __getArrayIfSingleItem(output["Granularities"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeNotificationConfigurationsAnswer
 */
const de_DescribeNotificationConfigurationsAnswer = (
  output: any,
  context: __SerdeContext
): DescribeNotificationConfigurationsAnswer => {
  const contents: any = {};
  if (output.NotificationConfigurations === "") {
    contents.NotificationConfigurations = [];
  } else if (
    output["NotificationConfigurations"] !== undefined &&
    output["NotificationConfigurations"]["member"] !== undefined
  ) {
    contents.NotificationConfigurations = de_NotificationConfigurations(
      __getArrayIfSingleItem(output["NotificationConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTerminationPolicyTypesAnswer
 */
const de_DescribeTerminationPolicyTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeTerminationPolicyTypesAnswer => {
  const contents: any = {};
  if (output.TerminationPolicyTypes === "") {
    contents.TerminationPolicyTypes = [];
  } else if (
    output["TerminationPolicyTypes"] !== undefined &&
    output["TerminationPolicyTypes"]["member"] !== undefined
  ) {
    contents.TerminationPolicyTypes = de_TerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicyTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrafficSourcesResponse
 */
const de_DescribeTrafficSourcesResponse = (output: any, context: __SerdeContext): DescribeTrafficSourcesResponse => {
  const contents: any = {};
  if (output.TrafficSources === "") {
    contents.TrafficSources = [];
  } else if (output["TrafficSources"] !== undefined && output["TrafficSources"]["member"] !== undefined) {
    contents.TrafficSources = de_TrafficSourceStates(
      __getArrayIfSingleItem(output["TrafficSources"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeWarmPoolAnswer
 */
const de_DescribeWarmPoolAnswer = (output: any, context: __SerdeContext): DescribeWarmPoolAnswer => {
  const contents: any = {};
  if (output["WarmPoolConfiguration"] !== undefined) {
    contents.WarmPoolConfiguration = de_WarmPoolConfiguration(output["WarmPoolConfiguration"], context);
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = de_Instances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDesiredConfiguration
 */
const de_DesiredConfiguration = (output: any, context: __SerdeContext): DesiredConfiguration => {
  const contents: any = {};
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = de_LaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = de_MixedInstancesPolicy(output["MixedInstancesPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetachInstancesAnswer
 */
const de_DetachInstancesAnswer = (output: any, context: __SerdeContext): DetachInstancesAnswer => {
  const contents: any = {};
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = de_Activities(__getArrayIfSingleItem(output["Activities"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetachLoadBalancersResultType
 */
const de_DetachLoadBalancersResultType = (output: any, context: __SerdeContext): DetachLoadBalancersResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDetachLoadBalancerTargetGroupsResultType
 */
const de_DetachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerTargetGroupsResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDetachTrafficSourcesResultType
 */
const de_DetachTrafficSourcesResultType = (output: any, context: __SerdeContext): DetachTrafficSourcesResultType => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryEbs
 */
const de_Ebs = (output: any, context: __SerdeContext): Ebs => {
  const contents: any = {};
  if (output["SnapshotId"] !== undefined) {
    contents.SnapshotId = __expectString(output["SnapshotId"]);
  }
  if (output["VolumeSize"] !== undefined) {
    contents.VolumeSize = __strictParseInt32(output["VolumeSize"]) as number;
  }
  if (output["VolumeType"] !== undefined) {
    contents.VolumeType = __expectString(output["VolumeType"]);
  }
  if (output["DeleteOnTermination"] !== undefined) {
    contents.DeleteOnTermination = __parseBoolean(output["DeleteOnTermination"]);
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = __strictParseInt32(output["Iops"]) as number;
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = __parseBoolean(output["Encrypted"]);
  }
  if (output["Throughput"] !== undefined) {
    contents.Throughput = __strictParseInt32(output["Throughput"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEnabledMetric
 */
const de_EnabledMetric = (output: any, context: __SerdeContext): EnabledMetric => {
  const contents: any = {};
  if (output["Metric"] !== undefined) {
    contents.Metric = __expectString(output["Metric"]);
  }
  if (output["Granularity"] !== undefined) {
    contents.Granularity = __expectString(output["Granularity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnabledMetrics
 */
const de_EnabledMetrics = (output: any, context: __SerdeContext): EnabledMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnabledMetric(entry, context);
    });
};

/**
 * deserializeAws_queryEnterStandbyAnswer
 */
const de_EnterStandbyAnswer = (output: any, context: __SerdeContext): EnterStandbyAnswer => {
  const contents: any = {};
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = de_Activities(__getArrayIfSingleItem(output["Activities"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryExcludedInstanceTypes
 */
const de_ExcludedInstanceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryExitStandbyAnswer
 */
const de_ExitStandbyAnswer = (output: any, context: __SerdeContext): ExitStandbyAnswer => {
  const contents: any = {};
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = de_Activities(__getArrayIfSingleItem(output["Activities"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryFailedScheduledUpdateGroupActionRequest
 */
const de_FailedScheduledUpdateGroupActionRequest = (
  output: any,
  context: __SerdeContext
): FailedScheduledUpdateGroupActionRequest => {
  const contents: any = {};
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = __expectString(output["ScheduledActionName"]);
  }
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = __expectString(output["ErrorCode"]);
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = __expectString(output["ErrorMessage"]);
  }
  return contents;
};

/**
 * deserializeAws_queryFailedScheduledUpdateGroupActionRequests
 */
const de_FailedScheduledUpdateGroupActionRequests = (
  output: any,
  context: __SerdeContext
): FailedScheduledUpdateGroupActionRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FailedScheduledUpdateGroupActionRequest(entry, context);
    });
};

/**
 * deserializeAws_queryGetPredictiveScalingForecastAnswer
 */
const de_GetPredictiveScalingForecastAnswer = (
  output: any,
  context: __SerdeContext
): GetPredictiveScalingForecastAnswer => {
  const contents: any = {};
  if (output.LoadForecast === "") {
    contents.LoadForecast = [];
  } else if (output["LoadForecast"] !== undefined && output["LoadForecast"]["member"] !== undefined) {
    contents.LoadForecast = de_LoadForecasts(__getArrayIfSingleItem(output["LoadForecast"]["member"]), context);
  }
  if (output["CapacityForecast"] !== undefined) {
    contents.CapacityForecast = de_CapacityForecast(output["CapacityForecast"], context);
  }
  if (output["UpdateTime"] !== undefined) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdateTime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = __expectString(output["InstanceId"]);
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = __expectString(output["AvailabilityZone"]);
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = __expectString(output["LifecycleState"]);
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = __expectString(output["HealthStatus"]);
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = __expectString(output["LaunchConfigurationName"]);
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = de_LaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = __parseBoolean(output["ProtectedFromScaleIn"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceGenerations
 */
const de_InstanceGenerations = (output: any, context: __SerdeContext): (InstanceGeneration | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryInstanceMetadataOptions
 */
const de_InstanceMetadataOptions = (output: any, context: __SerdeContext): InstanceMetadataOptions => {
  const contents: any = {};
  if (output["HttpTokens"] !== undefined) {
    contents.HttpTokens = __expectString(output["HttpTokens"]);
  }
  if (output["HttpPutResponseHopLimit"] !== undefined) {
    contents.HttpPutResponseHopLimit = __strictParseInt32(output["HttpPutResponseHopLimit"]) as number;
  }
  if (output["HttpEndpoint"] !== undefined) {
    contents.HttpEndpoint = __expectString(output["HttpEndpoint"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceMonitoring
 */
const de_InstanceMonitoring = (output: any, context: __SerdeContext): InstanceMonitoring => {
  const contents: any = {};
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefresh
 */
const de_InstanceRefresh = (output: any, context: __SerdeContext): InstanceRefresh => {
  const contents: any = {};
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["StatusReason"] !== undefined) {
    contents.StatusReason = __expectString(output["StatusReason"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTime"]));
  }
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  if (output["ProgressDetails"] !== undefined) {
    contents.ProgressDetails = de_InstanceRefreshProgressDetails(output["ProgressDetails"], context);
  }
  if (output["Preferences"] !== undefined) {
    contents.Preferences = de_RefreshPreferences(output["Preferences"], context);
  }
  if (output["DesiredConfiguration"] !== undefined) {
    contents.DesiredConfiguration = de_DesiredConfiguration(output["DesiredConfiguration"], context);
  }
  if (output["RollbackDetails"] !== undefined) {
    contents.RollbackDetails = de_RollbackDetails(output["RollbackDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshes
 */
const de_InstanceRefreshes = (output: any, context: __SerdeContext): InstanceRefresh[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceRefresh(entry, context);
    });
};

/**
 * deserializeAws_queryInstanceRefreshInProgressFault
 */
const de_InstanceRefreshInProgressFault = (output: any, context: __SerdeContext): InstanceRefreshInProgressFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshLivePoolProgress
 */
const de_InstanceRefreshLivePoolProgress = (output: any, context: __SerdeContext): InstanceRefreshLivePoolProgress => {
  const contents: any = {};
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshProgressDetails
 */
const de_InstanceRefreshProgressDetails = (output: any, context: __SerdeContext): InstanceRefreshProgressDetails => {
  const contents: any = {};
  if (output["LivePoolProgress"] !== undefined) {
    contents.LivePoolProgress = de_InstanceRefreshLivePoolProgress(output["LivePoolProgress"], context);
  }
  if (output["WarmPoolProgress"] !== undefined) {
    contents.WarmPoolProgress = de_InstanceRefreshWarmPoolProgress(output["WarmPoolProgress"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshWarmPoolProgress
 */
const de_InstanceRefreshWarmPoolProgress = (output: any, context: __SerdeContext): InstanceRefreshWarmPoolProgress => {
  const contents: any = {};
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRequirements
 */
const de_InstanceRequirements = (output: any, context: __SerdeContext): InstanceRequirements => {
  const contents: any = {};
  if (output["VCpuCount"] !== undefined) {
    contents.VCpuCount = de_VCpuCountRequest(output["VCpuCount"], context);
  }
  if (output["MemoryMiB"] !== undefined) {
    contents.MemoryMiB = de_MemoryMiBRequest(output["MemoryMiB"], context);
  }
  if (output.CpuManufacturers === "") {
    contents.CpuManufacturers = [];
  } else if (output["CpuManufacturers"] !== undefined && output["CpuManufacturers"]["member"] !== undefined) {
    contents.CpuManufacturers = de_CpuManufacturers(
      __getArrayIfSingleItem(output["CpuManufacturers"]["member"]),
      context
    );
  }
  if (output["MemoryGiBPerVCpu"] !== undefined) {
    contents.MemoryGiBPerVCpu = de_MemoryGiBPerVCpuRequest(output["MemoryGiBPerVCpu"], context);
  }
  if (output.ExcludedInstanceTypes === "") {
    contents.ExcludedInstanceTypes = [];
  } else if (output["ExcludedInstanceTypes"] !== undefined && output["ExcludedInstanceTypes"]["member"] !== undefined) {
    contents.ExcludedInstanceTypes = de_ExcludedInstanceTypes(
      __getArrayIfSingleItem(output["ExcludedInstanceTypes"]["member"]),
      context
    );
  }
  if (output.InstanceGenerations === "") {
    contents.InstanceGenerations = [];
  } else if (output["InstanceGenerations"] !== undefined && output["InstanceGenerations"]["member"] !== undefined) {
    contents.InstanceGenerations = de_InstanceGenerations(
      __getArrayIfSingleItem(output["InstanceGenerations"]["member"]),
      context
    );
  }
  if (output["SpotMaxPricePercentageOverLowestPrice"] !== undefined) {
    contents.SpotMaxPricePercentageOverLowestPrice = __strictParseInt32(
      output["SpotMaxPricePercentageOverLowestPrice"]
    ) as number;
  }
  if (output["OnDemandMaxPricePercentageOverLowestPrice"] !== undefined) {
    contents.OnDemandMaxPricePercentageOverLowestPrice = __strictParseInt32(
      output["OnDemandMaxPricePercentageOverLowestPrice"]
    ) as number;
  }
  if (output["BareMetal"] !== undefined) {
    contents.BareMetal = __expectString(output["BareMetal"]);
  }
  if (output["BurstablePerformance"] !== undefined) {
    contents.BurstablePerformance = __expectString(output["BurstablePerformance"]);
  }
  if (output["RequireHibernateSupport"] !== undefined) {
    contents.RequireHibernateSupport = __parseBoolean(output["RequireHibernateSupport"]);
  }
  if (output["NetworkInterfaceCount"] !== undefined) {
    contents.NetworkInterfaceCount = de_NetworkInterfaceCountRequest(output["NetworkInterfaceCount"], context);
  }
  if (output["LocalStorage"] !== undefined) {
    contents.LocalStorage = __expectString(output["LocalStorage"]);
  }
  if (output.LocalStorageTypes === "") {
    contents.LocalStorageTypes = [];
  } else if (output["LocalStorageTypes"] !== undefined && output["LocalStorageTypes"]["member"] !== undefined) {
    contents.LocalStorageTypes = de_LocalStorageTypes(
      __getArrayIfSingleItem(output["LocalStorageTypes"]["member"]),
      context
    );
  }
  if (output["TotalLocalStorageGB"] !== undefined) {
    contents.TotalLocalStorageGB = de_TotalLocalStorageGBRequest(output["TotalLocalStorageGB"], context);
  }
  if (output["BaselineEbsBandwidthMbps"] !== undefined) {
    contents.BaselineEbsBandwidthMbps = de_BaselineEbsBandwidthMbpsRequest(output["BaselineEbsBandwidthMbps"], context);
  }
  if (output.AcceleratorTypes === "") {
    contents.AcceleratorTypes = [];
  } else if (output["AcceleratorTypes"] !== undefined && output["AcceleratorTypes"]["member"] !== undefined) {
    contents.AcceleratorTypes = de_AcceleratorTypes(
      __getArrayIfSingleItem(output["AcceleratorTypes"]["member"]),
      context
    );
  }
  if (output["AcceleratorCount"] !== undefined) {
    contents.AcceleratorCount = de_AcceleratorCountRequest(output["AcceleratorCount"], context);
  }
  if (output.AcceleratorManufacturers === "") {
    contents.AcceleratorManufacturers = [];
  } else if (
    output["AcceleratorManufacturers"] !== undefined &&
    output["AcceleratorManufacturers"]["member"] !== undefined
  ) {
    contents.AcceleratorManufacturers = de_AcceleratorManufacturers(
      __getArrayIfSingleItem(output["AcceleratorManufacturers"]["member"]),
      context
    );
  }
  if (output.AcceleratorNames === "") {
    contents.AcceleratorNames = [];
  } else if (output["AcceleratorNames"] !== undefined && output["AcceleratorNames"]["member"] !== undefined) {
    contents.AcceleratorNames = de_AcceleratorNames(
      __getArrayIfSingleItem(output["AcceleratorNames"]["member"]),
      context
    );
  }
  if (output["AcceleratorTotalMemoryMiB"] !== undefined) {
    contents.AcceleratorTotalMemoryMiB = de_AcceleratorTotalMemoryMiBRequest(
      output["AcceleratorTotalMemoryMiB"],
      context
    );
  }
  if (output["NetworkBandwidthGbps"] !== undefined) {
    contents.NetworkBandwidthGbps = de_NetworkBandwidthGbpsRequest(output["NetworkBandwidthGbps"], context);
  }
  if (output.AllowedInstanceTypes === "") {
    contents.AllowedInstanceTypes = [];
  } else if (output["AllowedInstanceTypes"] !== undefined && output["AllowedInstanceTypes"]["member"] !== undefined) {
    contents.AllowedInstanceTypes = de_AllowedInstanceTypes(
      __getArrayIfSingleItem(output["AllowedInstanceTypes"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceReusePolicy
 */
const de_InstanceReusePolicy = (output: any, context: __SerdeContext): InstanceReusePolicy => {
  const contents: any = {};
  if (output["ReuseOnScaleIn"] !== undefined) {
    contents.ReuseOnScaleIn = __parseBoolean(output["ReuseOnScaleIn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstances
 */
const de_Instances = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
};

/**
 * deserializeAws_queryInstancesDistribution
 */
const de_InstancesDistribution = (output: any, context: __SerdeContext): InstancesDistribution => {
  const contents: any = {};
  if (output["OnDemandAllocationStrategy"] !== undefined) {
    contents.OnDemandAllocationStrategy = __expectString(output["OnDemandAllocationStrategy"]);
  }
  if (output["OnDemandBaseCapacity"] !== undefined) {
    contents.OnDemandBaseCapacity = __strictParseInt32(output["OnDemandBaseCapacity"]) as number;
  }
  if (output["OnDemandPercentageAboveBaseCapacity"] !== undefined) {
    contents.OnDemandPercentageAboveBaseCapacity = __strictParseInt32(
      output["OnDemandPercentageAboveBaseCapacity"]
    ) as number;
  }
  if (output["SpotAllocationStrategy"] !== undefined) {
    contents.SpotAllocationStrategy = __expectString(output["SpotAllocationStrategy"]);
  }
  if (output["SpotInstancePools"] !== undefined) {
    contents.SpotInstancePools = __strictParseInt32(output["SpotInstancePools"]) as number;
  }
  if (output["SpotMaxPrice"] !== undefined) {
    contents.SpotMaxPrice = __expectString(output["SpotMaxPrice"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNextToken
 */
const de_InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIrreversibleInstanceRefreshFault
 */
const de_IrreversibleInstanceRefreshFault = (
  output: any,
  context: __SerdeContext
): IrreversibleInstanceRefreshFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfiguration
 */
const de_LaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {};
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = __expectString(output["LaunchConfigurationName"]);
  }
  if (output["LaunchConfigurationARN"] !== undefined) {
    contents.LaunchConfigurationARN = __expectString(output["LaunchConfigurationARN"]);
  }
  if (output["ImageId"] !== undefined) {
    contents.ImageId = __expectString(output["ImageId"]);
  }
  if (output["KeyName"] !== undefined) {
    contents.KeyName = __expectString(output["KeyName"]);
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  } else if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
    contents.SecurityGroups = de_SecurityGroups(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
  }
  if (output["ClassicLinkVPCId"] !== undefined) {
    contents.ClassicLinkVPCId = __expectString(output["ClassicLinkVPCId"]);
  }
  if (output.ClassicLinkVPCSecurityGroups === "") {
    contents.ClassicLinkVPCSecurityGroups = [];
  } else if (
    output["ClassicLinkVPCSecurityGroups"] !== undefined &&
    output["ClassicLinkVPCSecurityGroups"]["member"] !== undefined
  ) {
    contents.ClassicLinkVPCSecurityGroups = de_ClassicLinkVPCSecurityGroups(
      __getArrayIfSingleItem(output["ClassicLinkVPCSecurityGroups"]["member"]),
      context
    );
  }
  if (output["UserData"] !== undefined) {
    contents.UserData = __expectString(output["UserData"]);
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  if (output["KernelId"] !== undefined) {
    contents.KernelId = __expectString(output["KernelId"]);
  }
  if (output["RamdiskId"] !== undefined) {
    contents.RamdiskId = __expectString(output["RamdiskId"]);
  }
  if (output.BlockDeviceMappings === "") {
    contents.BlockDeviceMappings = [];
  } else if (output["BlockDeviceMappings"] !== undefined && output["BlockDeviceMappings"]["member"] !== undefined) {
    contents.BlockDeviceMappings = de_BlockDeviceMappings(
      __getArrayIfSingleItem(output["BlockDeviceMappings"]["member"]),
      context
    );
  }
  if (output["InstanceMonitoring"] !== undefined) {
    contents.InstanceMonitoring = de_InstanceMonitoring(output["InstanceMonitoring"], context);
  }
  if (output["SpotPrice"] !== undefined) {
    contents.SpotPrice = __expectString(output["SpotPrice"]);
  }
  if (output["IamInstanceProfile"] !== undefined) {
    contents.IamInstanceProfile = __expectString(output["IamInstanceProfile"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedTime"]));
  }
  if (output["EbsOptimized"] !== undefined) {
    contents.EbsOptimized = __parseBoolean(output["EbsOptimized"]);
  }
  if (output["AssociatePublicIpAddress"] !== undefined) {
    contents.AssociatePublicIpAddress = __parseBoolean(output["AssociatePublicIpAddress"]);
  }
  if (output["PlacementTenancy"] !== undefined) {
    contents.PlacementTenancy = __expectString(output["PlacementTenancy"]);
  }
  if (output["MetadataOptions"] !== undefined) {
    contents.MetadataOptions = de_InstanceMetadataOptions(output["MetadataOptions"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfigurations
 */
const de_LaunchConfigurations = (output: any, context: __SerdeContext): LaunchConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LaunchConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryLaunchConfigurationsType
 */
const de_LaunchConfigurationsType = (output: any, context: __SerdeContext): LaunchConfigurationsType => {
  const contents: any = {};
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  } else if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = de_LaunchConfigurations(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplate
 */
const de_LaunchTemplate = (output: any, context: __SerdeContext): LaunchTemplate => {
  const contents: any = {};
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = de_LaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output.Overrides === "") {
    contents.Overrides = [];
  } else if (output["Overrides"] !== undefined && output["Overrides"]["member"] !== undefined) {
    contents.Overrides = de_Overrides(__getArrayIfSingleItem(output["Overrides"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplateOverrides
 */
const de_LaunchTemplateOverrides = (output: any, context: __SerdeContext): LaunchTemplateOverrides => {
  const contents: any = {};
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = de_LaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output["InstanceRequirements"] !== undefined) {
    contents.InstanceRequirements = de_InstanceRequirements(output["InstanceRequirements"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplateSpecification
 */
const de_LaunchTemplateSpecification = (output: any, context: __SerdeContext): LaunchTemplateSpecification => {
  const contents: any = {};
  if (output["LaunchTemplateId"] !== undefined) {
    contents.LaunchTemplateId = __expectString(output["LaunchTemplateId"]);
  }
  if (output["LaunchTemplateName"] !== undefined) {
    contents.LaunchTemplateName = __expectString(output["LaunchTemplateName"]);
  }
  if (output["Version"] !== undefined) {
    contents.Version = __expectString(output["Version"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLifecycleHook
 */
const de_LifecycleHook = (output: any, context: __SerdeContext): LifecycleHook => {
  const contents: any = {};
  if (output["LifecycleHookName"] !== undefined) {
    contents.LifecycleHookName = __expectString(output["LifecycleHookName"]);
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["LifecycleTransition"] !== undefined) {
    contents.LifecycleTransition = __expectString(output["LifecycleTransition"]);
  }
  if (output["NotificationTargetARN"] !== undefined) {
    contents.NotificationTargetARN = __expectString(output["NotificationTargetARN"]);
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = __expectString(output["RoleARN"]);
  }
  if (output["NotificationMetadata"] !== undefined) {
    contents.NotificationMetadata = __expectString(output["NotificationMetadata"]);
  }
  if (output["HeartbeatTimeout"] !== undefined) {
    contents.HeartbeatTimeout = __strictParseInt32(output["HeartbeatTimeout"]) as number;
  }
  if (output["GlobalTimeout"] !== undefined) {
    contents.GlobalTimeout = __strictParseInt32(output["GlobalTimeout"]) as number;
  }
  if (output["DefaultResult"] !== undefined) {
    contents.DefaultResult = __expectString(output["DefaultResult"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLifecycleHooks
 */
const de_LifecycleHooks = (output: any, context: __SerdeContext): LifecycleHook[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleHook(entry, context);
    });
};

/**
 * deserializeAws_queryLimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerNames
 */
const de_LoadBalancerNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryLoadBalancerState
 */
const de_LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  const contents: any = {};
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerStates
 */
const de_LoadBalancerStates = (output: any, context: __SerdeContext): LoadBalancerState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerState(entry, context);
    });
};

/**
 * deserializeAws_queryLoadBalancerTargetGroupState
 */
const de_LoadBalancerTargetGroupState = (output: any, context: __SerdeContext): LoadBalancerTargetGroupState => {
  const contents: any = {};
  if (output["LoadBalancerTargetGroupARN"] !== undefined) {
    contents.LoadBalancerTargetGroupARN = __expectString(output["LoadBalancerTargetGroupARN"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadBalancerTargetGroupStates
 */
const de_LoadBalancerTargetGroupStates = (output: any, context: __SerdeContext): LoadBalancerTargetGroupState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadBalancerTargetGroupState(entry, context);
    });
};

/**
 * deserializeAws_queryLoadForecast
 */
const de_LoadForecast = (output: any, context: __SerdeContext): LoadForecast => {
  const contents: any = {};
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  } else if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = de_PredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_PredictiveScalingForecastValues(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  if (output["MetricSpecification"] !== undefined) {
    contents.MetricSpecification = de_PredictiveScalingMetricSpecification(output["MetricSpecification"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryLoadForecasts
 */
const de_LoadForecasts = (output: any, context: __SerdeContext): LoadForecast[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoadForecast(entry, context);
    });
};

/**
 * deserializeAws_queryLocalStorageTypes
 */
const de_LocalStorageTypes = (output: any, context: __SerdeContext): (LocalStorageType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryMemoryGiBPerVCpuRequest
 */
const de_MemoryGiBPerVCpuRequest = (output: any, context: __SerdeContext): MemoryGiBPerVCpuRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryMemoryMiBRequest
 */
const de_MemoryMiBRequest = (output: any, context: __SerdeContext): MemoryMiBRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryMetric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {};
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_MetricDimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricCollectionType
 */
const de_MetricCollectionType = (output: any, context: __SerdeContext): MetricCollectionType => {
  const contents: any = {};
  if (output["Metric"] !== undefined) {
    contents.Metric = __expectString(output["Metric"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricCollectionTypes
 */
const de_MetricCollectionTypes = (output: any, context: __SerdeContext): MetricCollectionType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricCollectionType(entry, context);
    });
};

/**
 * deserializeAws_queryMetricDataQueries
 */
const de_MetricDataQueries = (output: any, context: __SerdeContext): MetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataQuery(entry, context);
    });
};

/**
 * deserializeAws_queryMetricDataQuery
 */
const de_MetricDataQuery = (output: any, context: __SerdeContext): MetricDataQuery => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Expression"] !== undefined) {
    contents.Expression = __expectString(output["Expression"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = de_MetricStat(output["MetricStat"], context);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = __parseBoolean(output["ReturnData"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDimensions
 */
const de_MetricDimensions = (output: any, context: __SerdeContext): MetricDimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDimension(entry, context);
    });
};

/**
 * deserializeAws_queryMetricGranularityType
 */
const de_MetricGranularityType = (output: any, context: __SerdeContext): MetricGranularityType => {
  const contents: any = {};
  if (output["Granularity"] !== undefined) {
    contents.Granularity = __expectString(output["Granularity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricGranularityTypes
 */
const de_MetricGranularityTypes = (output: any, context: __SerdeContext): MetricGranularityType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricGranularityType(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStat
 */
const de_MetricStat = (output: any, context: __SerdeContext): MetricStat => {
  const contents: any = {};
  if (output["Metric"] !== undefined) {
    contents.Metric = de_Metric(output["Metric"], context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMixedInstancesPolicy
 */
const de_MixedInstancesPolicy = (output: any, context: __SerdeContext): MixedInstancesPolicy => {
  const contents: any = {};
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = de_LaunchTemplate(output["LaunchTemplate"], context);
  }
  if (output["InstancesDistribution"] !== undefined) {
    contents.InstancesDistribution = de_InstancesDistribution(output["InstancesDistribution"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkBandwidthGbpsRequest
 */
const de_NetworkBandwidthGbpsRequest = (output: any, context: __SerdeContext): NetworkBandwidthGbpsRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkInterfaceCountRequest
 */
const de_NetworkInterfaceCountRequest = (output: any, context: __SerdeContext): NetworkInterfaceCountRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  const contents: any = {};
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["TopicARN"] !== undefined) {
    contents.TopicARN = __expectString(output["TopicARN"]);
  }
  if (output["NotificationType"] !== undefined) {
    contents.NotificationType = __expectString(output["NotificationType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationConfigurations
 */
const de_NotificationConfigurations = (output: any, context: __SerdeContext): NotificationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryOverrides
 */
const de_Overrides = (output: any, context: __SerdeContext): LaunchTemplateOverrides[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LaunchTemplateOverrides(entry, context);
    });
};

/**
 * deserializeAws_queryPoliciesType
 */
const de_PoliciesType = (output: any, context: __SerdeContext): PoliciesType => {
  const contents: any = {};
  if (output.ScalingPolicies === "") {
    contents.ScalingPolicies = [];
  } else if (output["ScalingPolicies"] !== undefined && output["ScalingPolicies"]["member"] !== undefined) {
    contents.ScalingPolicies = de_ScalingPolicies(__getArrayIfSingleItem(output["ScalingPolicies"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyARNType
 */
const de_PolicyARNType = (output: any, context: __SerdeContext): PolicyARNType => {
  const contents: any = {};
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = __expectString(output["PolicyARN"]);
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  } else if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = de_Alarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPredefinedMetricSpecification
 */
const de_PredefinedMetricSpecification = (output: any, context: __SerdeContext): PredefinedMetricSpecification => {
  const contents: any = {};
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingConfiguration
 */
const de_PredictiveScalingConfiguration = (output: any, context: __SerdeContext): PredictiveScalingConfiguration => {
  const contents: any = {};
  if (output.MetricSpecifications === "") {
    contents.MetricSpecifications = [];
  } else if (output["MetricSpecifications"] !== undefined && output["MetricSpecifications"]["member"] !== undefined) {
    contents.MetricSpecifications = de_PredictiveScalingMetricSpecifications(
      __getArrayIfSingleItem(output["MetricSpecifications"]["member"]),
      context
    );
  }
  if (output["Mode"] !== undefined) {
    contents.Mode = __expectString(output["Mode"]);
  }
  if (output["SchedulingBufferTime"] !== undefined) {
    contents.SchedulingBufferTime = __strictParseInt32(output["SchedulingBufferTime"]) as number;
  }
  if (output["MaxCapacityBreachBehavior"] !== undefined) {
    contents.MaxCapacityBreachBehavior = __expectString(output["MaxCapacityBreachBehavior"]);
  }
  if (output["MaxCapacityBuffer"] !== undefined) {
    contents.MaxCapacityBuffer = __strictParseInt32(output["MaxCapacityBuffer"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingCustomizedCapacityMetric
 */
const de_PredictiveScalingCustomizedCapacityMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedCapacityMetric => {
  const contents: any = {};
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = de_MetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingCustomizedLoadMetric
 */
const de_PredictiveScalingCustomizedLoadMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedLoadMetric => {
  const contents: any = {};
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = de_MetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingCustomizedScalingMetric
 */
const de_PredictiveScalingCustomizedScalingMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedScalingMetric => {
  const contents: any = {};
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = de_MetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingForecastTimestamps
 */
const de_PredictiveScalingForecastTimestamps = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

/**
 * deserializeAws_queryPredictiveScalingForecastValues
 */
const de_PredictiveScalingForecastValues = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseFloat(entry) as number;
    });
};

/**
 * deserializeAws_queryPredictiveScalingMetricSpecification
 */
const de_PredictiveScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification => {
  const contents: any = {};
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = __strictParseFloat(output["TargetValue"]) as number;
  }
  if (output["PredefinedMetricPairSpecification"] !== undefined) {
    contents.PredefinedMetricPairSpecification = de_PredictiveScalingPredefinedMetricPair(
      output["PredefinedMetricPairSpecification"],
      context
    );
  }
  if (output["PredefinedScalingMetricSpecification"] !== undefined) {
    contents.PredefinedScalingMetricSpecification = de_PredictiveScalingPredefinedScalingMetric(
      output["PredefinedScalingMetricSpecification"],
      context
    );
  }
  if (output["PredefinedLoadMetricSpecification"] !== undefined) {
    contents.PredefinedLoadMetricSpecification = de_PredictiveScalingPredefinedLoadMetric(
      output["PredefinedLoadMetricSpecification"],
      context
    );
  }
  if (output["CustomizedScalingMetricSpecification"] !== undefined) {
    contents.CustomizedScalingMetricSpecification = de_PredictiveScalingCustomizedScalingMetric(
      output["CustomizedScalingMetricSpecification"],
      context
    );
  }
  if (output["CustomizedLoadMetricSpecification"] !== undefined) {
    contents.CustomizedLoadMetricSpecification = de_PredictiveScalingCustomizedLoadMetric(
      output["CustomizedLoadMetricSpecification"],
      context
    );
  }
  if (output["CustomizedCapacityMetricSpecification"] !== undefined) {
    contents.CustomizedCapacityMetricSpecification = de_PredictiveScalingCustomizedCapacityMetric(
      output["CustomizedCapacityMetricSpecification"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingMetricSpecifications
 */
const de_PredictiveScalingMetricSpecifications = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictiveScalingMetricSpecification(entry, context);
    });
};

/**
 * deserializeAws_queryPredictiveScalingPredefinedLoadMetric
 */
const de_PredictiveScalingPredefinedLoadMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedLoadMetric => {
  const contents: any = {};
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingPredefinedMetricPair
 */
const de_PredictiveScalingPredefinedMetricPair = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedMetricPair => {
  const contents: any = {};
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingPredefinedScalingMetric
 */
const de_PredictiveScalingPredefinedScalingMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedScalingMetric => {
  const contents: any = {};
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

/**
 * deserializeAws_queryProcesses
 */
const de_Processes = (output: any, context: __SerdeContext): ProcessType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessType(entry, context);
    });
};

/**
 * deserializeAws_queryProcessesType
 */
const de_ProcessesType = (output: any, context: __SerdeContext): ProcessesType => {
  const contents: any = {};
  if (output.Processes === "") {
    contents.Processes = [];
  } else if (output["Processes"] !== undefined && output["Processes"]["member"] !== undefined) {
    contents.Processes = de_Processes(__getArrayIfSingleItem(output["Processes"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessType
 */
const de_ProcessType = (output: any, context: __SerdeContext): ProcessType => {
  const contents: any = {};
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = __expectString(output["ProcessName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPutLifecycleHookAnswer
 */
const de_PutLifecycleHookAnswer = (output: any, context: __SerdeContext): PutLifecycleHookAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPutWarmPoolAnswer
 */
const de_PutWarmPoolAnswer = (output: any, context: __SerdeContext): PutWarmPoolAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRecordLifecycleActionHeartbeatAnswer
 */
const de_RecordLifecycleActionHeartbeatAnswer = (
  output: any,
  context: __SerdeContext
): RecordLifecycleActionHeartbeatAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryRefreshPreferences
 */
const de_RefreshPreferences = (output: any, context: __SerdeContext): RefreshPreferences => {
  const contents: any = {};
  if (output["MinHealthyPercentage"] !== undefined) {
    contents.MinHealthyPercentage = __strictParseInt32(output["MinHealthyPercentage"]) as number;
  }
  if (output["InstanceWarmup"] !== undefined) {
    contents.InstanceWarmup = __strictParseInt32(output["InstanceWarmup"]) as number;
  }
  if (output.CheckpointPercentages === "") {
    contents.CheckpointPercentages = [];
  } else if (output["CheckpointPercentages"] !== undefined && output["CheckpointPercentages"]["member"] !== undefined) {
    contents.CheckpointPercentages = de_CheckpointPercentages(
      __getArrayIfSingleItem(output["CheckpointPercentages"]["member"]),
      context
    );
  }
  if (output["CheckpointDelay"] !== undefined) {
    contents.CheckpointDelay = __strictParseInt32(output["CheckpointDelay"]) as number;
  }
  if (output["SkipMatching"] !== undefined) {
    contents.SkipMatching = __parseBoolean(output["SkipMatching"]);
  }
  if (output["AutoRollback"] !== undefined) {
    contents.AutoRollback = __parseBoolean(output["AutoRollback"]);
  }
  if (output["ScaleInProtectedInstances"] !== undefined) {
    contents.ScaleInProtectedInstances = __expectString(output["ScaleInProtectedInstances"]);
  }
  if (output["StandbyInstances"] !== undefined) {
    contents.StandbyInstances = __expectString(output["StandbyInstances"]);
  }
  if (output["AlarmSpecification"] !== undefined) {
    contents.AlarmSpecification = de_AlarmSpecification(output["AlarmSpecification"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceContentionFault
 */
const de_ResourceContentionFault = (output: any, context: __SerdeContext): ResourceContentionFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceInUseFault
 */
const de_ResourceInUseFault = (output: any, context: __SerdeContext): ResourceInUseFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackDetails
 */
const de_RollbackDetails = (output: any, context: __SerdeContext): RollbackDetails => {
  const contents: any = {};
  if (output["RollbackReason"] !== undefined) {
    contents.RollbackReason = __expectString(output["RollbackReason"]);
  }
  if (output["RollbackStartTime"] !== undefined) {
    contents.RollbackStartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["RollbackStartTime"]));
  }
  if (output["PercentageCompleteOnRollback"] !== undefined) {
    contents.PercentageCompleteOnRollback = __strictParseInt32(output["PercentageCompleteOnRollback"]) as number;
  }
  if (output["InstancesToUpdateOnRollback"] !== undefined) {
    contents.InstancesToUpdateOnRollback = __strictParseInt32(output["InstancesToUpdateOnRollback"]) as number;
  }
  if (output["ProgressDetailsOnRollback"] !== undefined) {
    contents.ProgressDetailsOnRollback = de_InstanceRefreshProgressDetails(
      output["ProgressDetailsOnRollback"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackInstanceRefreshAnswer
 */
const de_RollbackInstanceRefreshAnswer = (output: any, context: __SerdeContext): RollbackInstanceRefreshAnswer => {
  const contents: any = {};
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingActivityInProgressFault
 */
const de_ScalingActivityInProgressFault = (output: any, context: __SerdeContext): ScalingActivityInProgressFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingPolicies
 */
const de_ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingPolicy(entry, context);
    });
};

/**
 * deserializeAws_queryScalingPolicy
 */
const de_ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  const contents: any = {};
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = __expectString(output["PolicyARN"]);
  }
  if (output["PolicyType"] !== undefined) {
    contents.PolicyType = __expectString(output["PolicyType"]);
  }
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = __expectString(output["AdjustmentType"]);
  }
  if (output["MinAdjustmentStep"] !== undefined) {
    contents.MinAdjustmentStep = __strictParseInt32(output["MinAdjustmentStep"]) as number;
  }
  if (output["MinAdjustmentMagnitude"] !== undefined) {
    contents.MinAdjustmentMagnitude = __strictParseInt32(output["MinAdjustmentMagnitude"]) as number;
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = __strictParseInt32(output["ScalingAdjustment"]) as number;
  }
  if (output["Cooldown"] !== undefined) {
    contents.Cooldown = __strictParseInt32(output["Cooldown"]) as number;
  }
  if (output.StepAdjustments === "") {
    contents.StepAdjustments = [];
  } else if (output["StepAdjustments"] !== undefined && output["StepAdjustments"]["member"] !== undefined) {
    contents.StepAdjustments = de_StepAdjustments(__getArrayIfSingleItem(output["StepAdjustments"]["member"]), context);
  }
  if (output["MetricAggregationType"] !== undefined) {
    contents.MetricAggregationType = __expectString(output["MetricAggregationType"]);
  }
  if (output["EstimatedInstanceWarmup"] !== undefined) {
    contents.EstimatedInstanceWarmup = __strictParseInt32(output["EstimatedInstanceWarmup"]) as number;
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  } else if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = de_Alarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  if (output["TargetTrackingConfiguration"] !== undefined) {
    contents.TargetTrackingConfiguration = de_TargetTrackingConfiguration(
      output["TargetTrackingConfiguration"],
      context
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["PredictiveScalingConfiguration"] !== undefined) {
    contents.PredictiveScalingConfiguration = de_PredictiveScalingConfiguration(
      output["PredictiveScalingConfiguration"],
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionsType
 */
const de_ScheduledActionsType = (output: any, context: __SerdeContext): ScheduledActionsType => {
  const contents: any = {};
  if (output.ScheduledUpdateGroupActions === "") {
    contents.ScheduledUpdateGroupActions = [];
  } else if (
    output["ScheduledUpdateGroupActions"] !== undefined &&
    output["ScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.ScheduledUpdateGroupActions = de_ScheduledUpdateGroupActions(
      __getArrayIfSingleItem(output["ScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledUpdateGroupAction
 */
const de_ScheduledUpdateGroupAction = (output: any, context: __SerdeContext): ScheduledUpdateGroupAction => {
  const contents: any = {};
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = __expectString(output["AutoScalingGroupName"]);
  }
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = __expectString(output["ScheduledActionName"]);
  }
  if (output["ScheduledActionARN"] !== undefined) {
    contents.ScheduledActionARN = __expectString(output["ScheduledActionARN"]);
  }
  if (output["Time"] !== undefined) {
    contents.Time = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Time"]));
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTime"]));
  }
  if (output["Recurrence"] !== undefined) {
    contents.Recurrence = __expectString(output["Recurrence"]);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = __strictParseInt32(output["MinSize"]) as number;
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = __strictParseInt32(output["MaxSize"]) as number;
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = __strictParseInt32(output["DesiredCapacity"]) as number;
  }
  if (output["TimeZone"] !== undefined) {
    contents.TimeZone = __expectString(output["TimeZone"]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledUpdateGroupActions
 */
const de_ScheduledUpdateGroupActions = (output: any, context: __SerdeContext): ScheduledUpdateGroupAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledUpdateGroupAction(entry, context);
    });
};

/**
 * deserializeAws_querySecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryServiceLinkedRoleFailure
 */
const de_ServiceLinkedRoleFailure = (output: any, context: __SerdeContext): ServiceLinkedRoleFailure => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySetInstanceProtectionAnswer
 */
const de_SetInstanceProtectionAnswer = (output: any, context: __SerdeContext): SetInstanceProtectionAnswer => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryStartInstanceRefreshAnswer
 */
const de_StartInstanceRefreshAnswer = (output: any, context: __SerdeContext): StartInstanceRefreshAnswer => {
  const contents: any = {};
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStepAdjustment
 */
const de_StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  const contents: any = {};
  if (output["MetricIntervalLowerBound"] !== undefined) {
    contents.MetricIntervalLowerBound = __strictParseFloat(output["MetricIntervalLowerBound"]) as number;
  }
  if (output["MetricIntervalUpperBound"] !== undefined) {
    contents.MetricIntervalUpperBound = __strictParseFloat(output["MetricIntervalUpperBound"]) as number;
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = __strictParseInt32(output["ScalingAdjustment"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryStepAdjustments
 */
const de_StepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepAdjustment(entry, context);
    });
};

/**
 * deserializeAws_querySuspendedProcess
 */
const de_SuspendedProcess = (output: any, context: __SerdeContext): SuspendedProcess => {
  const contents: any = {};
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = __expectString(output["ProcessName"]);
  }
  if (output["SuspensionReason"] !== undefined) {
    contents.SuspensionReason = __expectString(output["SuspensionReason"]);
  }
  return contents;
};

/**
 * deserializeAws_querySuspendedProcesses
 */
const de_SuspendedProcesses = (output: any, context: __SerdeContext): SuspendedProcess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SuspendedProcess(entry, context);
    });
};

/**
 * deserializeAws_queryTagDescription
 */
const de_TagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {};
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = __expectString(output["ResourceId"]);
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  if (output["PropagateAtLaunch"] !== undefined) {
    contents.PropagateAtLaunch = __parseBoolean(output["PropagateAtLaunch"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagDescriptionList
 */
const de_TagDescriptionList = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TagDescription(entry, context);
    });
};

/**
 * deserializeAws_queryTagsType
 */
const de_TagsType = (output: any, context: __SerdeContext): TagsType => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetGroupARNs
 */
const de_TargetGroupARNs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTargetTrackingConfiguration
 */
const de_TargetTrackingConfiguration = (output: any, context: __SerdeContext): TargetTrackingConfiguration => {
  const contents: any = {};
  if (output["PredefinedMetricSpecification"] !== undefined) {
    contents.PredefinedMetricSpecification = de_PredefinedMetricSpecification(
      output["PredefinedMetricSpecification"],
      context
    );
  }
  if (output["CustomizedMetricSpecification"] !== undefined) {
    contents.CustomizedMetricSpecification = de_CustomizedMetricSpecification(
      output["CustomizedMetricSpecification"],
      context
    );
  }
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = __strictParseFloat(output["TargetValue"]) as number;
  }
  if (output["DisableScaleIn"] !== undefined) {
    contents.DisableScaleIn = __parseBoolean(output["DisableScaleIn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetTrackingMetricDataQueries
 */
const de_TargetTrackingMetricDataQueries = (output: any, context: __SerdeContext): TargetTrackingMetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetTrackingMetricDataQuery(entry, context);
    });
};

/**
 * deserializeAws_queryTargetTrackingMetricDataQuery
 */
const de_TargetTrackingMetricDataQuery = (output: any, context: __SerdeContext): TargetTrackingMetricDataQuery => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Expression"] !== undefined) {
    contents.Expression = __expectString(output["Expression"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = de_TargetTrackingMetricStat(output["MetricStat"], context);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = __parseBoolean(output["ReturnData"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetTrackingMetricStat
 */
const de_TargetTrackingMetricStat = (output: any, context: __SerdeContext): TargetTrackingMetricStat => {
  const contents: any = {};
  if (output["Metric"] !== undefined) {
    contents.Metric = de_Metric(output["Metric"], context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTerminationPolicies
 */
const de_TerminationPolicies = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTotalLocalStorageGBRequest
 */
const de_TotalLocalStorageGBRequest = (output: any, context: __SerdeContext): TotalLocalStorageGBRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTrafficSourceIdentifier
 */
const de_TrafficSourceIdentifier = (output: any, context: __SerdeContext): TrafficSourceIdentifier => {
  const contents: any = {};
  if (output["Identifier"] !== undefined) {
    contents.Identifier = __expectString(output["Identifier"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrafficSources
 */
const de_TrafficSources = (output: any, context: __SerdeContext): TrafficSourceIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrafficSourceIdentifier(entry, context);
    });
};

/**
 * deserializeAws_queryTrafficSourceState
 */
const de_TrafficSourceState = (output: any, context: __SerdeContext): TrafficSourceState => {
  const contents: any = {};
  if (output["TrafficSource"] !== undefined) {
    contents.TrafficSource = __expectString(output["TrafficSource"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Identifier"] !== undefined) {
    contents.Identifier = __expectString(output["Identifier"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrafficSourceStates
 */
const de_TrafficSourceStates = (output: any, context: __SerdeContext): TrafficSourceState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrafficSourceState(entry, context);
    });
};

/**
 * deserializeAws_queryVCpuCountRequest
 */
const de_VCpuCountRequest = (output: any, context: __SerdeContext): VCpuCountRequest => {
  const contents: any = {};
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryWarmPoolConfiguration
 */
const de_WarmPoolConfiguration = (output: any, context: __SerdeContext): WarmPoolConfiguration => {
  const contents: any = {};
  if (output["MaxGroupPreparedCapacity"] !== undefined) {
    contents.MaxGroupPreparedCapacity = __strictParseInt32(output["MaxGroupPreparedCapacity"]) as number;
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = __strictParseInt32(output["MinSize"]) as number;
  }
  if (output["PoolState"] !== undefined) {
    contents.PoolState = __expectString(output["PoolState"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["InstanceReusePolicy"] !== undefined) {
    contents.InstanceReusePolicy = de_InstanceReusePolicy(output["InstanceReusePolicy"], context);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
