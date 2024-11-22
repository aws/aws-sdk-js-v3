// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
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
  AvailabilityZoneDistribution,
  AvailabilityZoneImpairmentPolicy,
  BaselineEbsBandwidthMbpsRequest,
  BaselinePerformanceFactorsRequest,
  BatchDeleteScheduledActionAnswer,
  BatchDeleteScheduledActionType,
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType,
  BlockDeviceMapping,
  CancelInstanceRefreshAnswer,
  CancelInstanceRefreshType,
  CapacityForecast,
  CapacityReservationSpecification,
  CapacityReservationTarget,
  CompleteLifecycleActionAnswer,
  CompleteLifecycleActionType,
  CpuManufacturer,
  CpuPerformanceFactorRequest,
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
  InstanceMaintenancePolicy,
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
  PerformanceFactorReferenceRequest,
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
    [_A]: _AI,
    [_V]: _,
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
    [_A]: _ALB,
    [_V]: _,
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
    [_A]: _ALBTG,
    [_V]: _,
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
    [_A]: _ATS,
    [_V]: _,
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
    [_A]: _BDSA,
    [_V]: _,
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
    [_A]: _BPSUGA,
    [_V]: _,
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
    [_A]: _CIR,
    [_V]: _,
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
    [_A]: _CLA,
    [_V]: _,
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
    [_A]: _CASG,
    [_V]: _,
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
    [_A]: _CLC,
    [_V]: _,
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
    [_A]: _COUT,
    [_V]: _,
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
    [_A]: _DASG,
    [_V]: _,
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
    [_A]: _DLC,
    [_V]: _,
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
    [_A]: _DLH,
    [_V]: _,
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
    [_A]: _DNC,
    [_V]: _,
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
    [_A]: _DP,
    [_V]: _,
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
    [_A]: _DSA,
    [_V]: _,
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
    [_A]: _DT,
    [_V]: _,
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
    [_A]: _DWP,
    [_V]: _,
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
    [_A]: _DAL,
    [_V]: _,
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
    [_A]: _DAT,
    [_V]: _,
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
    [_A]: _DASGe,
    [_V]: _,
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
    [_A]: _DASI,
    [_V]: _,
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
    [_A]: _DASNT,
    [_V]: _,
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
    [_A]: _DIR,
    [_V]: _,
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
    [_A]: _DLCe,
    [_V]: _,
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
    [_A]: _DLHe,
    [_V]: _,
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
    [_A]: _DLHT,
    [_V]: _,
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
    [_A]: _DLB,
    [_V]: _,
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
    [_A]: _DLBTG,
    [_V]: _,
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
    [_A]: _DMCT,
    [_V]: _,
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
    [_A]: _DNCe,
    [_V]: _,
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
    [_A]: _DPe,
    [_V]: _,
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
    [_A]: _DSAe,
    [_V]: _,
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
    [_A]: _DSPT,
    [_V]: _,
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
    [_A]: _DSAes,
    [_V]: _,
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
    [_A]: _DTe,
    [_V]: _,
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
    [_A]: _DTPT,
    [_V]: _,
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
    [_A]: _DTS,
    [_V]: _,
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
    [_A]: _DWPe,
    [_V]: _,
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
    [_A]: _DI,
    [_V]: _,
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
    [_A]: _DLBe,
    [_V]: _,
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
    [_A]: _DLBTGe,
    [_V]: _,
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
    [_A]: _DTSe,
    [_V]: _,
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
    [_A]: _DMC,
    [_V]: _,
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
    [_A]: _EMC,
    [_V]: _,
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
    [_A]: _ES,
    [_V]: _,
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
    [_A]: _EP,
    [_V]: _,
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
    [_A]: _ESx,
    [_V]: _,
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
    [_A]: _GPSF,
    [_V]: _,
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
    [_A]: _PLH,
    [_V]: _,
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
    [_A]: _PNC,
    [_V]: _,
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
    [_A]: _PSP,
    [_V]: _,
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
    [_A]: _PSUGA,
    [_V]: _,
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
    [_A]: _PWP,
    [_V]: _,
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
    [_A]: _RLAH,
    [_V]: _,
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
    [_A]: _RP,
    [_V]: _,
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
    [_A]: _RIR,
    [_V]: _,
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
    [_A]: _SDC,
    [_V]: _,
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
    [_A]: _SIH,
    [_V]: _,
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
    [_A]: _SIP,
    [_V]: _,
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
    [_A]: _SIR,
    [_V]: _,
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
    [_A]: _SP,
    [_V]: _,
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
    [_A]: _TIIASG,
    [_V]: _,
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
    [_A]: _UASG,
    [_V]: _,
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
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachLoadBalancersCommand
 */
export const de_AttachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAttachLoadBalancerTargetGroupsCommand
 */
export const de_AttachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryAttachTrafficSourcesCommand
 */
export const de_AttachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryBatchDeleteScheduledActionCommand
 */
export const de_BatchDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand
 */
export const de_BatchPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCancelInstanceRefreshCommand
 */
export const de_CancelInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCompleteLifecycleActionCommand
 */
export const de_CompleteLifecycleActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryCreateAutoScalingGroupCommand
 */
export const de_CreateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateLaunchConfigurationCommand
 */
export const de_CreateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateOrUpdateTagsCommand
 */
export const de_CreateOrUpdateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateOrUpdateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAutoScalingGroupCommand
 */
export const de_DeleteAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLaunchConfigurationCommand
 */
export const de_DeleteLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLifecycleHookCommand
 */
export const de_DeleteLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDeleteNotificationConfigurationCommand
 */
export const de_DeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteWarmPoolCommand
 */
export const de_DeleteWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAdjustmentTypesCommand
 */
export const de_DescribeAdjustmentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAutoScalingGroupsCommand
 */
export const de_DescribeAutoScalingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAutoScalingInstancesCommand
 */
export const de_DescribeAutoScalingInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeAutoScalingNotificationTypesCommand
 */
export const de_DescribeAutoScalingNotificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeInstanceRefreshesCommand
 */
export const de_DescribeInstanceRefreshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceRefreshesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLaunchConfigurationsCommand
 */
export const de_DescribeLaunchConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLifecycleHooksCommand
 */
export const de_DescribeLifecycleHooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLifecycleHookTypesCommand
 */
export const de_DescribeLifecycleHookTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancersCommand
 */
export const de_DescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand
 */
export const de_DescribeLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeMetricCollectionTypesCommand
 */
export const de_DescribeMetricCollectionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeNotificationConfigurationsCommand
 */
export const de_DescribeNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribePoliciesCommand
 */
export const de_DescribePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeScalingActivitiesCommand
 */
export const de_DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeScalingProcessTypesCommand
 */
export const de_DescribeScalingProcessTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeScheduledActionsCommand
 */
export const de_DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTerminationPolicyTypesCommand
 */
export const de_DescribeTerminationPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeTrafficSourcesCommand
 */
export const de_DescribeTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDescribeWarmPoolCommand
 */
export const de_DescribeWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDetachInstancesCommand
 */
export const de_DetachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDetachLoadBalancersCommand
 */
export const de_DetachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDetachLoadBalancerTargetGroupsCommand
 */
export const de_DetachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDetachTrafficSourcesCommand
 */
export const de_DetachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryDisableMetricsCollectionCommand
 */
export const de_DisableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnableMetricsCollectionCommand
 */
export const de_EnableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnterStandbyCommand
 */
export const de_EnterStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryExecutePolicyCommand
 */
export const de_ExecutePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecutePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryExitStandbyCommand
 */
export const de_ExitStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryGetPredictiveScalingForecastCommand
 */
export const de_GetPredictiveScalingForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictiveScalingForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPutLifecycleHookCommand
 */
export const de_PutLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPutNotificationConfigurationCommand
 */
export const de_PutNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutScalingPolicyCommand
 */
export const de_PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryPutScheduledUpdateGroupActionCommand
 */
export const de_PutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutWarmPoolCommand
 */
export const de_PutWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryRecordLifecycleActionHeartbeatCommand
 */
export const de_RecordLifecycleActionHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryResumeProcessesCommand
 */
export const de_ResumeProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRollbackInstanceRefreshCommand
 */
export const de_RollbackInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySetDesiredCapacityCommand
 */
export const de_SetDesiredCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDesiredCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetInstanceHealthCommand
 */
export const de_SetInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetInstanceProtectionCommand
 */
export const de_SetInstanceProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryStartInstanceRefreshCommand
 */
export const de_StartInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_querySuspendProcessesCommand
 */
export const de_SuspendProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SuspendProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand
 */
export const de_TerminateInstanceInAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_queryUpdateAutoScalingGroupCommand
 */
export const de_UpdateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "AlreadyExists":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      throw await de_AlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "ActiveInstanceRefreshNotFound":
    case "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault":
      throw await de_ActiveInstanceRefreshNotFoundFaultRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await de_ResourceInUseFaultRes(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await de_ScalingActivityInProgressFaultRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "IrreversibleInstanceRefresh":
    case "com.amazonaws.autoscaling#IrreversibleInstanceRefreshFault":
      throw await de_IrreversibleInstanceRefreshFaultRes(parsedOutput, context);
    case "InstanceRefreshInProgress":
    case "com.amazonaws.autoscaling#InstanceRefreshInProgressFault":
      throw await de_InstanceRefreshInProgressFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorManufacturers
 */
const se_AcceleratorManufacturers = (input: AcceleratorManufacturer[], context: __SerdeContext): any => {
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
const se_AcceleratorNames = (input: AcceleratorName[], context: __SerdeContext): any => {
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryAcceleratorTypes
 */
const se_AcceleratorTypes = (input: AcceleratorType[], context: __SerdeContext): any => {
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
  if (input[_Al] != null) {
    const memberEntries = se_AlarmList(input[_Al], context);
    if (input[_Al]?.length === 0) {
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
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  return entries;
};

/**
 * serializeAws_queryAttachLoadBalancersType
 */
const se_AttachLoadBalancersType = (input: AttachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LBN] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBN], context);
    if (input[_LBN]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TGARN] != null) {
    const memberEntries = se_TargetGroupARNs(input[_TGARN], context);
    if (input[_TGARN]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TS] != null) {
    const memberEntries = se_TrafficSources(input[_TS], context);
    if (input[_TS]?.length === 0) {
      entries.TrafficSources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrafficSources.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SZSV] != null) {
    entries[_SZSV] = input[_SZSV];
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
  if (input[_ASGNu] != null) {
    const memberEntries = se_AutoScalingGroupNames(input[_ASGNu], context);
    if (input[_ASGNu]?.length === 0) {
      entries.AutoScalingGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_F] != null) {
    const memberEntries = se_Filters(input[_F], context);
    if (input[_F]?.length === 0) {
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
 * serializeAws_queryAvailabilityZoneDistribution
 */
const se_AvailabilityZoneDistribution = (input: AvailabilityZoneDistribution, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CDS] != null) {
    entries[_CDS] = input[_CDS];
  }
  return entries;
};

/**
 * serializeAws_queryAvailabilityZoneImpairmentPolicy
 */
const se_AvailabilityZoneImpairmentPolicy = (input: AvailabilityZoneImpairmentPolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ZSE] != null) {
    entries[_ZSE] = input[_ZSE];
  }
  if (input[_IZHCB] != null) {
    entries[_IZHCB] = input[_IZHCB];
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryBaselinePerformanceFactorsRequest
 */
const se_BaselinePerformanceFactorsRequest = (
  input: BaselinePerformanceFactorsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_C] != null) {
    const memberEntries = se_CpuPerformanceFactorRequest(input[_C], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Cpu.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryBatchDeleteScheduledActionType
 */
const se_BatchDeleteScheduledActionType = (input: BatchDeleteScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SAN] != null) {
    const memberEntries = se_ScheduledActionNames(input[_SAN], context);
    if (input[_SAN]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SUGA] != null) {
    const memberEntries = se_ScheduledUpdateGroupActionRequests(input[_SUGA], context);
    if (input[_SUGA]?.length === 0) {
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
  if (input[_VN] != null) {
    entries[_VN] = input[_VN];
  }
  if (input[_DN] != null) {
    entries[_DN] = input[_DN];
  }
  if (input[_E] != null) {
    const memberEntries = se_Ebs(input[_E], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Ebs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ND] != null) {
    entries[_ND] = input[_ND];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  return entries;
};

/**
 * serializeAws_queryCapacityReservationIds
 */
const se_CapacityReservationIds = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryCapacityReservationResourceGroupArns
 */
const se_CapacityReservationResourceGroupArns = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryCapacityReservationSpecification
 */
const se_CapacityReservationSpecification = (input: CapacityReservationSpecification, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CRP] != null) {
    entries[_CRP] = input[_CRP];
  }
  if (input[_CRT] != null) {
    const memberEntries = se_CapacityReservationTarget(input[_CRT], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CapacityReservationTarget.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCapacityReservationTarget
 */
const se_CapacityReservationTarget = (input: CapacityReservationTarget, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CRI] != null) {
    const memberEntries = se_CapacityReservationIds(input[_CRI], context);
    if (input[_CRI]?.length === 0) {
      entries.CapacityReservationIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CapacityReservationIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CRRGA] != null) {
    const memberEntries = se_CapacityReservationResourceGroupArns(input[_CRRGA], context);
    if (input[_CRRGA]?.length === 0) {
      entries.CapacityReservationResourceGroupArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CapacityReservationResourceGroupArns.${key}`;
      entries[loc] = value;
    });
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
  if (input[_LHN] != null) {
    entries[_LHN] = input[_LHN];
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LAT] != null) {
    entries[_LAT] = input[_LAT];
  }
  if (input[_LAR] != null) {
    entries[_LAR] = input[_LAR];
  }
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  return entries;
};

/**
 * serializeAws_queryCpuManufacturers
 */
const se_CpuManufacturers = (input: CpuManufacturer[], context: __SerdeContext): any => {
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
 * serializeAws_queryCpuPerformanceFactorRequest
 */
const se_CpuPerformanceFactorRequest = (input: CpuPerformanceFactorRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_R] != null) {
    const memberEntries = se_PerformanceFactorReferenceSetRequest(input[_R], context);
    if (input[_R]?.length === 0) {
      entries.Reference = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Reference.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateAutoScalingGroupType
 */
const se_CreateAutoScalingGroupType = (input: CreateAutoScalingGroupType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LCN] != null) {
    entries[_LCN] = input[_LCN];
  }
  if (input[_LT] != null) {
    const memberEntries = se_LaunchTemplateSpecification(input[_LT], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIP] != null) {
    const memberEntries = se_MixedInstancesPolicy(input[_MIP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MSa] != null) {
    entries[_MSa] = input[_MSa];
  }
  if (input[_DC] != null) {
    entries[_DC] = input[_DC];
  }
  if (input[_DCe] != null) {
    entries[_DCe] = input[_DCe];
  }
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LBN] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBN], context);
    if (input[_LBN]?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TGARN] != null) {
    const memberEntries = se_TargetGroupARNs(input[_TGARN], context);
    if (input[_TGARN]?.length === 0) {
      entries.TargetGroupARNs = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HCT] != null) {
    entries[_HCT] = input[_HCT];
  }
  if (input[_HCGP] != null) {
    entries[_HCGP] = input[_HCGP];
  }
  if (input[_PG] != null) {
    entries[_PG] = input[_PG];
  }
  if (input[_VPCZI] != null) {
    entries[_VPCZI] = input[_VPCZI];
  }
  if (input[_TP] != null) {
    const memberEntries = se_TerminationPolicies(input[_TP], context);
    if (input[_TP]?.length === 0) {
      entries.TerminationPolicies = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NIPFSI] != null) {
    entries[_NIPFSI] = input[_NIPFSI];
  }
  if (input[_CR] != null) {
    entries[_CR] = input[_CR];
  }
  if (input[_LHSL] != null) {
    const memberEntries = se_LifecycleHookSpecifications(input[_LHSL], context);
    if (input[_LHSL]?.length === 0) {
      entries.LifecycleHookSpecificationList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookSpecificationList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SLRARN] != null) {
    entries[_SLRARN] = input[_SLRARN];
  }
  if (input[_MIL] != null) {
    entries[_MIL] = input[_MIL];
  }
  if (input[_Co] != null) {
    entries[_Co] = input[_Co];
  }
  if (input[_DCT] != null) {
    entries[_DCT] = input[_DCT];
  }
  if (input[_DIW] != null) {
    entries[_DIW] = input[_DIW];
  }
  if (input[_TS] != null) {
    const memberEntries = se_TrafficSources(input[_TS], context);
    if (input[_TS]?.length === 0) {
      entries.TrafficSources = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TrafficSources.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IMP] != null) {
    const memberEntries = se_InstanceMaintenancePolicy(input[_IMP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMaintenancePolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZD] != null) {
    const memberEntries = se_AvailabilityZoneDistribution(input[_AZD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZoneDistribution.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZIP] != null) {
    const memberEntries = se_AvailabilityZoneImpairmentPolicy(input[_AZIP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZoneImpairmentPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SZSV] != null) {
    entries[_SZSV] = input[_SZSV];
  }
  if (input[_CRS] != null) {
    const memberEntries = se_CapacityReservationSpecification(input[_CRS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CapacityReservationSpecification.${key}`;
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
  if (input[_LCN] != null) {
    entries[_LCN] = input[_LCN];
  }
  if (input[_IIm] != null) {
    entries[_IIm] = input[_IIm];
  }
  if (input[_KN] != null) {
    entries[_KN] = input[_KN];
  }
  if (input[_SG] != null) {
    const memberEntries = se_SecurityGroups(input[_SG], context);
    if (input[_SG]?.length === 0) {
      entries.SecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CLVPCI] != null) {
    entries[_CLVPCI] = input[_CLVPCI];
  }
  if (input[_CLVPCSG] != null) {
    const memberEntries = se_ClassicLinkVPCSecurityGroups(input[_CLVPCSG], context);
    if (input[_CLVPCSG]?.length === 0) {
      entries.ClassicLinkVPCSecurityGroups = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClassicLinkVPCSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_UD] != null) {
    entries[_UD] = input[_UD];
  }
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  if (input[_KI] != null) {
    entries[_KI] = input[_KI];
  }
  if (input[_RI] != null) {
    entries[_RI] = input[_RI];
  }
  if (input[_BDM] != null) {
    const memberEntries = se_BlockDeviceMappings(input[_BDM], context);
    if (input[_BDM]?.length === 0) {
      entries.BlockDeviceMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BlockDeviceMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IM] != null) {
    const memberEntries = se_InstanceMonitoring(input[_IM], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMonitoring.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SPp] != null) {
    entries[_SPp] = input[_SPp];
  }
  if (input[_IIP] != null) {
    entries[_IIP] = input[_IIP];
  }
  if (input[_EO] != null) {
    entries[_EO] = input[_EO];
  }
  if (input[_APIA] != null) {
    entries[_APIA] = input[_APIA];
  }
  if (input[_PT] != null) {
    entries[_PT] = input[_PT];
  }
  if (input[_MO] != null) {
    const memberEntries = se_InstanceMetadataOptions(input[_MO], context);
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
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_D] != null) {
    const memberEntries = se_MetricDimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Me] != null) {
    const memberEntries = se_TargetTrackingMetricDataQueries(input[_Me], context);
    if (input[_Me]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_FD] != null) {
    entries[_FD] = input[_FD];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLifecycleHookType
 */
const se_DeleteLifecycleHookType = (input: DeleteLifecycleHookType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LHN] != null) {
    entries[_LHN] = input[_LHN];
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TARN] != null) {
    entries[_TARN] = input[_TARN];
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyType
 */
const se_DeletePolicyType = (input: DeletePolicyType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteScheduledActionType
 */
const se_DeleteScheduledActionType = (input: DeleteScheduledActionType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SANc] != null) {
    entries[_SANc] = input[_SANc];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTagsType
 */
const se_DeleteTagsType = (input: DeleteTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    const memberEntries = se_Tags(input[_T], context);
    if (input[_T]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_FD] != null) {
    entries[_FD] = input[_FD];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAutoScalingInstancesType
 */
const se_DescribeAutoScalingInstancesType = (input: DescribeAutoScalingInstancesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeInstanceRefreshesType
 */
const se_DescribeInstanceRefreshesType = (input: DescribeInstanceRefreshesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_IRI] != null) {
    const memberEntries = se_InstanceRefreshIds(input[_IRI], context);
    if (input[_IRI]?.length === 0) {
      entries.InstanceRefreshIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceRefreshIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeLifecycleHooksType
 */
const se_DescribeLifecycleHooksType = (input: DescribeLifecycleHooksType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LHNi] != null) {
    const memberEntries = se_LifecycleHookNames(input[_LHNi], context);
    if (input[_LHNi]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
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
  if (input[_ASGNu] != null) {
    const memberEntries = se_AutoScalingGroupNames(input[_ASGNu], context);
    if (input[_ASGNu]?.length === 0) {
      entries.AutoScalingGroupNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribePoliciesType
 */
const se_DescribePoliciesType = (input: DescribePoliciesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PNo] != null) {
    const memberEntries = se_PolicyNames(input[_PNo], context);
    if (input[_PNo]?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PTo] != null) {
    const memberEntries = se_PolicyTypes(input[_PTo], context);
    if (input[_PTo]?.length === 0) {
      entries.PolicyTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScalingActivitiesType
 */
const se_DescribeScalingActivitiesType = (input: DescribeScalingActivitiesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AIc] != null) {
    const memberEntries = se_ActivityIds(input[_AIc], context);
    if (input[_AIc]?.length === 0) {
      entries.ActivityIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActivityIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_IDG] != null) {
    entries[_IDG] = input[_IDG];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeScheduledActionsType
 */
const se_DescribeScheduledActionsType = (input: DescribeScheduledActionsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SAN] != null) {
    const memberEntries = se_ScheduledActionNames(input[_SAN], context);
    if (input[_SAN]?.length === 0) {
      entries.ScheduledActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTagsType
 */
const se_DescribeTagsType = (input: DescribeTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_F] != null) {
    const memberEntries = se_Filters(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeTrafficSourcesRequest
 */
const se_DescribeTrafficSourcesRequest = (input: DescribeTrafficSourcesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TST] != null) {
    entries[_TST] = input[_TST];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeWarmPoolType
 */
const se_DescribeWarmPoolType = (input: DescribeWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDesiredConfiguration
 */
const se_DesiredConfiguration = (input: DesiredConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LT] != null) {
    const memberEntries = se_LaunchTemplateSpecification(input[_LT], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIP] != null) {
    const memberEntries = se_MixedInstancesPolicy(input[_MIP], context);
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
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SDDC] != null) {
    entries[_SDDC] = input[_SDDC];
  }
  return entries;
};

/**
 * serializeAws_queryDetachLoadBalancersType
 */
const se_DetachLoadBalancersType = (input: DetachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LBN] != null) {
    const memberEntries = se_LoadBalancerNames(input[_LBN], context);
    if (input[_LBN]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TGARN] != null) {
    const memberEntries = se_TargetGroupARNs(input[_TGARN], context);
    if (input[_TGARN]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TS] != null) {
    const memberEntries = se_TrafficSources(input[_TS], context);
    if (input[_TS]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_Me] != null) {
    const memberEntries = se_Metrics(input[_Me], context);
    if (input[_Me]?.length === 0) {
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
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_VS] != null) {
    entries[_VS] = input[_VS];
  }
  if (input[_VT] != null) {
    entries[_VT] = input[_VT];
  }
  if (input[_DOT] != null) {
    entries[_DOT] = input[_DOT];
  }
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_En] != null) {
    entries[_En] = input[_En];
  }
  if (input[_Th] != null) {
    entries[_Th] = input[_Th];
  }
  return entries;
};

/**
 * serializeAws_queryEnableMetricsCollectionQuery
 */
const se_EnableMetricsCollectionQuery = (input: EnableMetricsCollectionQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_Me] != null) {
    const memberEntries = se_Metrics(input[_Me], context);
    if (input[_Me]?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_G] != null) {
    entries[_G] = input[_G];
  }
  return entries;
};

/**
 * serializeAws_queryEnterStandbyQuery
 */
const se_EnterStandbyQuery = (input: EnterStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SDDC] != null) {
    entries[_SDDC] = input[_SDDC];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_HC] != null) {
    entries[_HC] = input[_HC];
  }
  if (input[_MV] != null) {
    entries[_MV] = __serializeFloat(input[_MV]);
  }
  if (input[_BT] != null) {
    entries[_BT] = __serializeFloat(input[_BT]);
  }
  return entries;
};

/**
 * serializeAws_queryExitStandbyQuery
 */
const se_ExitStandbyQuery = (input: ExitStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  return entries;
};

/**
 * serializeAws_queryFilter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Va] != null) {
    const memberEntries = se_Values(input[_Va], context);
    if (input[_Va]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  return entries;
};

/**
 * serializeAws_queryInstanceGenerations
 */
const se_InstanceGenerations = (input: InstanceGeneration[], context: __SerdeContext): any => {
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
 * serializeAws_queryInstanceMaintenancePolicy
 */
const se_InstanceMaintenancePolicy = (input: InstanceMaintenancePolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MHP] != null) {
    entries[_MHP] = input[_MHP];
  }
  if (input[_MHPa] != null) {
    entries[_MHPa] = input[_MHPa];
  }
  return entries;
};

/**
 * serializeAws_queryInstanceMetadataOptions
 */
const se_InstanceMetadataOptions = (input: InstanceMetadataOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_HT] != null) {
    entries[_HT] = input[_HT];
  }
  if (input[_HPRHL] != null) {
    entries[_HPRHL] = input[_HPRHL];
  }
  if (input[_HE] != null) {
    entries[_HE] = input[_HE];
  }
  return entries;
};

/**
 * serializeAws_queryInstanceMonitoring
 */
const se_InstanceMonitoring = (input: InstanceMonitoring, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ena] != null) {
    entries[_Ena] = input[_Ena];
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
  if (input[_VCC] != null) {
    const memberEntries = se_VCpuCountRequest(input[_VCC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VCpuCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MMB] != null) {
    const memberEntries = se_MemoryMiBRequest(input[_MMB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CM] != null) {
    const memberEntries = se_CpuManufacturers(input[_CM], context);
    if (input[_CM]?.length === 0) {
      entries.CpuManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CpuManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MGBPVC] != null) {
    const memberEntries = se_MemoryGiBPerVCpuRequest(input[_MGBPVC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryGiBPerVCpu.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EIT] != null) {
    const memberEntries = se_ExcludedInstanceTypes(input[_EIT], context);
    if (input[_EIT]?.length === 0) {
      entries.ExcludedInstanceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedInstanceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IG] != null) {
    const memberEntries = se_InstanceGenerations(input[_IG], context);
    if (input[_IG]?.length === 0) {
      entries.InstanceGenerations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceGenerations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SMPPOLP] != null) {
    entries[_SMPPOLP] = input[_SMPPOLP];
  }
  if (input[_MSPAPOOODP] != null) {
    entries[_MSPAPOOODP] = input[_MSPAPOOODP];
  }
  if (input[_ODMPPOLP] != null) {
    entries[_ODMPPOLP] = input[_ODMPPOLP];
  }
  if (input[_BM] != null) {
    entries[_BM] = input[_BM];
  }
  if (input[_BP] != null) {
    entries[_BP] = input[_BP];
  }
  if (input[_RHS] != null) {
    entries[_RHS] = input[_RHS];
  }
  if (input[_NIC] != null) {
    const memberEntries = se_NetworkInterfaceCountRequest(input[_NIC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkInterfaceCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_LS] != null) {
    entries[_LS] = input[_LS];
  }
  if (input[_LST] != null) {
    const memberEntries = se_LocalStorageTypes(input[_LST], context);
    if (input[_LST]?.length === 0) {
      entries.LocalStorageTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LocalStorageTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TLSGB] != null) {
    const memberEntries = se_TotalLocalStorageGBRequest(input[_TLSGB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TotalLocalStorageGB.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BEBM] != null) {
    const memberEntries = se_BaselineEbsBandwidthMbpsRequest(input[_BEBM], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BaselineEbsBandwidthMbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AT] != null) {
    const memberEntries = se_AcceleratorTypes(input[_AT], context);
    if (input[_AT]?.length === 0) {
      entries.AcceleratorTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AC] != null) {
    const memberEntries = se_AcceleratorCountRequest(input[_AC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AM] != null) {
    const memberEntries = se_AcceleratorManufacturers(input[_AM], context);
    if (input[_AM]?.length === 0) {
      entries.AcceleratorManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AN] != null) {
    const memberEntries = se_AcceleratorNames(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.AcceleratorNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ATMMB] != null) {
    const memberEntries = se_AcceleratorTotalMemoryMiBRequest(input[_ATMMB], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTotalMemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NBG] != null) {
    const memberEntries = se_NetworkBandwidthGbpsRequest(input[_NBG], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkBandwidthGbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AIT] != null) {
    const memberEntries = se_AllowedInstanceTypes(input[_AIT], context);
    if (input[_AIT]?.length === 0) {
      entries.AllowedInstanceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AllowedInstanceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_BPF] != null) {
    const memberEntries = se_BaselinePerformanceFactorsRequest(input[_BPF], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BaselinePerformanceFactors.${key}`;
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
  if (input[_ROSI] != null) {
    entries[_ROSI] = input[_ROSI];
  }
  return entries;
};

/**
 * serializeAws_queryInstancesDistribution
 */
const se_InstancesDistribution = (input: InstancesDistribution, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ODAS] != null) {
    entries[_ODAS] = input[_ODAS];
  }
  if (input[_ODBC] != null) {
    entries[_ODBC] = input[_ODBC];
  }
  if (input[_ODPABC] != null) {
    entries[_ODPABC] = input[_ODPABC];
  }
  if (input[_SAS] != null) {
    entries[_SAS] = input[_SAS];
  }
  if (input[_SIPp] != null) {
    entries[_SIPp] = input[_SIPp];
  }
  if (input[_SMP] != null) {
    entries[_SMP] = input[_SMP];
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
  if (input[_LCNa] != null) {
    const memberEntries = se_LaunchConfigurationNames(input[_LCNa], context);
    if (input[_LCNa]?.length === 0) {
      entries.LaunchConfigurationNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchConfigurationNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryLaunchConfigurationNameType
 */
const se_LaunchConfigurationNameType = (input: LaunchConfigurationNameType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LCN] != null) {
    entries[_LCN] = input[_LCN];
  }
  return entries;
};

/**
 * serializeAws_queryLaunchTemplate
 */
const se_LaunchTemplate = (input: LaunchTemplate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LTS] != null) {
    const memberEntries = se_LaunchTemplateSpecification(input[_LTS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_O] != null) {
    const memberEntries = se_Overrides(input[_O], context);
    if (input[_O]?.length === 0) {
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
  if (input[_IT] != null) {
    entries[_IT] = input[_IT];
  }
  if (input[_WC] != null) {
    entries[_WC] = input[_WC];
  }
  if (input[_LTS] != null) {
    const memberEntries = se_LaunchTemplateSpecification(input[_LTS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IR] != null) {
    const memberEntries = se_InstanceRequirements(input[_IR], context);
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
  if (input[_LTI] != null) {
    entries[_LTI] = input[_LTI];
  }
  if (input[_LTN] != null) {
    entries[_LTN] = input[_LTN];
  }
  if (input[_V] != null) {
    entries[_V] = input[_V];
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
  if (input[_LHN] != null) {
    entries[_LHN] = input[_LHN];
  }
  if (input[_LTi] != null) {
    entries[_LTi] = input[_LTi];
  }
  if (input[_NM] != null) {
    entries[_NM] = input[_NM];
  }
  if (input[_HTe] != null) {
    entries[_HTe] = input[_HTe];
  }
  if (input[_DR] != null) {
    entries[_DR] = input[_DR];
  }
  if (input[_NTARN] != null) {
    entries[_NTARN] = input[_NTARN];
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
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
const se_LocalStorageTypes = (input: LocalStorageType[], context: __SerdeContext): any => {
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
  if (input[_M] != null) {
    entries[_M] = __serializeFloat(input[_M]);
  }
  if (input[_Ma] != null) {
    entries[_Ma] = __serializeFloat(input[_Ma]);
  }
  return entries;
};

/**
 * serializeAws_queryMemoryMiBRequest
 */
const se_MemoryMiBRequest = (input: MemoryMiBRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * serializeAws_queryMetric
 */
const se_Metric = (input: Metric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_MetricDimensions(input[_D], context);
    if (input[_D]?.length === 0) {
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
  if (input[_Id] != null) {
    entries[_Id] = input[_Id];
  }
  if (input[_Ex] != null) {
    entries[_Ex] = input[_Ex];
  }
  if (input[_MSe] != null) {
    const memberEntries = se_MetricStat(input[_MSe], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  if (input[_RD] != null) {
    entries[_RD] = input[_RD];
  }
  return entries;
};

/**
 * serializeAws_queryMetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
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
  if (input[_Met] != null) {
    const memberEntries = se_Metric(input[_Met], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
};

/**
 * serializeAws_queryMixedInstancesPolicy
 */
const se_MixedInstancesPolicy = (input: MixedInstancesPolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_LT] != null) {
    const memberEntries = se_LaunchTemplate(input[_LT], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ID] != null) {
    const memberEntries = se_InstancesDistribution(input[_ID], context);
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
  if (input[_M] != null) {
    entries[_M] = __serializeFloat(input[_M]);
  }
  if (input[_Ma] != null) {
    entries[_Ma] = __serializeFloat(input[_Ma]);
  }
  return entries;
};

/**
 * serializeAws_queryNetworkInterfaceCountRequest
 */
const se_NetworkInterfaceCountRequest = (input: NetworkInterfaceCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
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
 * serializeAws_queryPerformanceFactorReferenceRequest
 */
const se_PerformanceFactorReferenceRequest = (
  input: PerformanceFactorReferenceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_IF] != null) {
    entries[_IF] = input[_IF];
  }
  return entries;
};

/**
 * serializeAws_queryPerformanceFactorReferenceSetRequest
 */
const se_PerformanceFactorReferenceSetRequest = (
  input: PerformanceFactorReferenceRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PerformanceFactorReferenceRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`item.${counter}.${key}`] = value;
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
  if (input[_PMT] != null) {
    entries[_PMT] = input[_PMT];
  }
  if (input[_RL] != null) {
    entries[_RL] = input[_RL];
  }
  return entries;
};

/**
 * serializeAws_queryPredictiveScalingConfiguration
 */
const se_PredictiveScalingConfiguration = (input: PredictiveScalingConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MSet] != null) {
    const memberEntries = se_PredictiveScalingMetricSpecifications(input[_MSet], context);
    if (input[_MSet]?.length === 0) {
      entries.MetricSpecifications = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricSpecifications.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Mo] != null) {
    entries[_Mo] = input[_Mo];
  }
  if (input[_SBT] != null) {
    entries[_SBT] = input[_SBT];
  }
  if (input[_MCBB] != null) {
    entries[_MCBB] = input[_MCBB];
  }
  if (input[_MCB] != null) {
    entries[_MCB] = input[_MCB];
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
  if (input[_MDQ] != null) {
    const memberEntries = se_MetricDataQueries(input[_MDQ], context);
    if (input[_MDQ]?.length === 0) {
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
  if (input[_MDQ] != null) {
    const memberEntries = se_MetricDataQueries(input[_MDQ], context);
    if (input[_MDQ]?.length === 0) {
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
  if (input[_MDQ] != null) {
    const memberEntries = se_MetricDataQueries(input[_MDQ], context);
    if (input[_MDQ]?.length === 0) {
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
  if (input[_TV] != null) {
    entries[_TV] = __serializeFloat(input[_TV]);
  }
  if (input[_PMPS] != null) {
    const memberEntries = se_PredictiveScalingPredefinedMetricPair(input[_PMPS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricPairSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PSMS] != null) {
    const memberEntries = se_PredictiveScalingPredefinedScalingMetric(input[_PSMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PLMS] != null) {
    const memberEntries = se_PredictiveScalingPredefinedLoadMetric(input[_PLMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CSMS] != null) {
    const memberEntries = se_PredictiveScalingCustomizedScalingMetric(input[_CSMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CLMS] != null) {
    const memberEntries = se_PredictiveScalingCustomizedLoadMetric(input[_CLMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CCMS] != null) {
    const memberEntries = se_PredictiveScalingCustomizedCapacityMetric(input[_CCMS], context);
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
  if (input[_PMT] != null) {
    entries[_PMT] = input[_PMT];
  }
  if (input[_RL] != null) {
    entries[_RL] = input[_RL];
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
  if (input[_PMT] != null) {
    entries[_PMT] = input[_PMT];
  }
  if (input[_RL] != null) {
    entries[_RL] = input[_RL];
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
  if (input[_PMT] != null) {
    entries[_PMT] = input[_PMT];
  }
  if (input[_RL] != null) {
    entries[_RL] = input[_RL];
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
  if (input[_LHN] != null) {
    entries[_LHN] = input[_LHN];
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LTi] != null) {
    entries[_LTi] = input[_LTi];
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_NTARN] != null) {
    entries[_NTARN] = input[_NTARN];
  }
  if (input[_NM] != null) {
    entries[_NM] = input[_NM];
  }
  if (input[_HTe] != null) {
    entries[_HTe] = input[_HTe];
  }
  if (input[_DR] != null) {
    entries[_DR] = input[_DR];
  }
  return entries;
};

/**
 * serializeAws_queryPutNotificationConfigurationType
 */
const se_PutNotificationConfigurationType = (input: PutNotificationConfigurationType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_TARN] != null) {
    entries[_TARN] = input[_TARN];
  }
  if (input[_NTo] != null) {
    const memberEntries = se_AutoScalingNotificationTypes(input[_NTo], context);
    if (input[_NTo]?.length === 0) {
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PTol] != null) {
    entries[_PTol] = input[_PTol];
  }
  if (input[_ATd] != null) {
    entries[_ATd] = input[_ATd];
  }
  if (input[_MAS] != null) {
    entries[_MAS] = input[_MAS];
  }
  if (input[_MAM] != null) {
    entries[_MAM] = input[_MAM];
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_Coo] != null) {
    entries[_Coo] = input[_Coo];
  }
  if (input[_MAT] != null) {
    entries[_MAT] = input[_MAT];
  }
  if (input[_SAt] != null) {
    const memberEntries = se_StepAdjustments(input[_SAt], context);
    if (input[_SAt]?.length === 0) {
      entries.StepAdjustments = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StepAdjustments.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EIW] != null) {
    entries[_EIW] = input[_EIW];
  }
  if (input[_TTC] != null) {
    const memberEntries = se_TargetTrackingConfiguration(input[_TTC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetTrackingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ena] != null) {
    entries[_Ena] = input[_Ena];
  }
  if (input[_PSC] != null) {
    const memberEntries = se_PredictiveScalingConfiguration(input[_PSC], context);
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SANc] != null) {
    entries[_SANc] = input[_SANc];
  }
  if (input[_Ti] != null) {
    entries[_Ti] = __serializeDateTime(input[_Ti]);
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Re] != null) {
    entries[_Re] = input[_Re];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MSa] != null) {
    entries[_MSa] = input[_MSa];
  }
  if (input[_DC] != null) {
    entries[_DC] = input[_DC];
  }
  if (input[_TZ] != null) {
    entries[_TZ] = input[_TZ];
  }
  return entries;
};

/**
 * serializeAws_queryPutWarmPoolType
 */
const se_PutWarmPoolType = (input: PutWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_MGPC] != null) {
    entries[_MGPC] = input[_MGPC];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  if (input[_IRP] != null) {
    const memberEntries = se_InstanceReusePolicy(input[_IRP], context);
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
  if (input[_LHN] != null) {
    entries[_LHN] = input[_LHN];
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LAT] != null) {
    entries[_LAT] = input[_LAT];
  }
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  return entries;
};

/**
 * serializeAws_queryRefreshPreferences
 */
const se_RefreshPreferences = (input: RefreshPreferences, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MHP] != null) {
    entries[_MHP] = input[_MHP];
  }
  if (input[_IW] != null) {
    entries[_IW] = input[_IW];
  }
  if (input[_CP] != null) {
    const memberEntries = se_CheckpointPercentages(input[_CP], context);
    if (input[_CP]?.length === 0) {
      entries.CheckpointPercentages = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CheckpointPercentages.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CD] != null) {
    entries[_CD] = input[_CD];
  }
  if (input[_SM] != null) {
    entries[_SM] = input[_SM];
  }
  if (input[_AR] != null) {
    entries[_AR] = input[_AR];
  }
  if (input[_SIPI] != null) {
    entries[_SIPI] = input[_SIPI];
  }
  if (input[_SIt] != null) {
    entries[_SIt] = input[_SIt];
  }
  if (input[_AS] != null) {
    const memberEntries = se_AlarmSpecification(input[_AS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MHPa] != null) {
    entries[_MHPa] = input[_MHPa];
  }
  if (input[_BTa] != null) {
    entries[_BTa] = input[_BTa];
  }
  return entries;
};

/**
 * serializeAws_queryRollbackInstanceRefreshType
 */
const se_RollbackInstanceRefreshType = (input: RollbackInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  return entries;
};

/**
 * serializeAws_queryScalingProcessQuery
 */
const se_ScalingProcessQuery = (input: ScalingProcessQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_SPc] != null) {
    const memberEntries = se_ProcessNames(input[_SPc], context);
    if (input[_SPc]?.length === 0) {
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
  if (input[_SANc] != null) {
    entries[_SANc] = input[_SANc];
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_Re] != null) {
    entries[_Re] = input[_Re];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MSa] != null) {
    entries[_MSa] = input[_MSa];
  }
  if (input[_DC] != null) {
    entries[_DC] = input[_DC];
  }
  if (input[_TZ] != null) {
    entries[_TZ] = input[_TZ];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_DC] != null) {
    entries[_DC] = input[_DC];
  }
  if (input[_HC] != null) {
    entries[_HC] = input[_HC];
  }
  return entries;
};

/**
 * serializeAws_querySetInstanceHealthQuery
 */
const se_SetInstanceHealthQuery = (input: SetInstanceHealthQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  if (input[_HS] != null) {
    entries[_HS] = input[_HS];
  }
  if (input[_SRGP] != null) {
    entries[_SRGP] = input[_SRGP];
  }
  return entries;
};

/**
 * serializeAws_querySetInstanceProtectionQuery
 */
const se_SetInstanceProtectionQuery = (input: SetInstanceProtectionQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_II] != null) {
    const memberEntries = se_InstanceIds(input[_II], context);
    if (input[_II]?.length === 0) {
      entries.InstanceIds = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_PFSI] != null) {
    entries[_PFSI] = input[_PFSI];
  }
  return entries;
};

/**
 * serializeAws_queryStartInstanceRefreshType
 */
const se_StartInstanceRefreshType = (input: StartInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_Str] != null) {
    entries[_Str] = input[_Str];
  }
  if (input[_DCes] != null) {
    const memberEntries = se_DesiredConfiguration(input[_DCes], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DesiredConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Pr] != null) {
    const memberEntries = se_RefreshPreferences(input[_Pr], context);
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
  if (input[_MILB] != null) {
    entries[_MILB] = __serializeFloat(input[_MILB]);
  }
  if (input[_MIUB] != null) {
    entries[_MIUB] = __serializeFloat(input[_MIUB]);
  }
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
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
  if (input[_RIe] != null) {
    entries[_RIe] = input[_RIe];
  }
  if (input[_RT] != null) {
    entries[_RT] = input[_RT];
  }
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Val] != null) {
    entries[_Val] = input[_Val];
  }
  if (input[_PAL] != null) {
    entries[_PAL] = input[_PAL];
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
  if (input[_PMS] != null) {
    const memberEntries = se_PredefinedMetricSpecification(input[_PMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CMS] != null) {
    const memberEntries = se_CustomizedMetricSpecification(input[_CMS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TV] != null) {
    entries[_TV] = __serializeFloat(input[_TV]);
  }
  if (input[_DSI] != null) {
    entries[_DSI] = input[_DSI];
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
  if (input[_Id] != null) {
    entries[_Id] = input[_Id];
  }
  if (input[_Ex] != null) {
    entries[_Ex] = input[_Ex];
  }
  if (input[_MSe] != null) {
    const memberEntries = se_TargetTrackingMetricStat(input[_MSe], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_RD] != null) {
    entries[_RD] = input[_RD];
  }
  return entries;
};

/**
 * serializeAws_queryTargetTrackingMetricStat
 */
const se_TargetTrackingMetricStat = (input: TargetTrackingMetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Met] != null) {
    const memberEntries = se_Metric(input[_Met], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
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
  if (input[_IIn] != null) {
    entries[_IIn] = input[_IIn];
  }
  if (input[_SDDC] != null) {
    entries[_SDDC] = input[_SDDC];
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
  if (input[_M] != null) {
    entries[_M] = __serializeFloat(input[_M]);
  }
  if (input[_Ma] != null) {
    entries[_Ma] = __serializeFloat(input[_Ma]);
  }
  return entries;
};

/**
 * serializeAws_queryTrafficSourceIdentifier
 */
const se_TrafficSourceIdentifier = (input: TrafficSourceIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Ide] != null) {
    entries[_Ide] = input[_Ide];
  }
  if (input[_Ty] != null) {
    entries[_Ty] = input[_Ty];
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
  if (input[_ASGN] != null) {
    entries[_ASGN] = input[_ASGN];
  }
  if (input[_LCN] != null) {
    entries[_LCN] = input[_LCN];
  }
  if (input[_LT] != null) {
    const memberEntries = se_LaunchTemplateSpecification(input[_LT], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MIP] != null) {
    const memberEntries = se_MixedInstancesPolicy(input[_MIP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MSa] != null) {
    entries[_MSa] = input[_MSa];
  }
  if (input[_DC] != null) {
    entries[_DC] = input[_DC];
  }
  if (input[_DCe] != null) {
    entries[_DCe] = input[_DCe];
  }
  if (input[_AZ] != null) {
    const memberEntries = se_AvailabilityZones(input[_AZ], context);
    if (input[_AZ]?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HCT] != null) {
    entries[_HCT] = input[_HCT];
  }
  if (input[_HCGP] != null) {
    entries[_HCGP] = input[_HCGP];
  }
  if (input[_PG] != null) {
    entries[_PG] = input[_PG];
  }
  if (input[_VPCZI] != null) {
    entries[_VPCZI] = input[_VPCZI];
  }
  if (input[_TP] != null) {
    const memberEntries = se_TerminationPolicies(input[_TP], context);
    if (input[_TP]?.length === 0) {
      entries.TerminationPolicies = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NIPFSI] != null) {
    entries[_NIPFSI] = input[_NIPFSI];
  }
  if (input[_SLRARN] != null) {
    entries[_SLRARN] = input[_SLRARN];
  }
  if (input[_MIL] != null) {
    entries[_MIL] = input[_MIL];
  }
  if (input[_CR] != null) {
    entries[_CR] = input[_CR];
  }
  if (input[_Co] != null) {
    entries[_Co] = input[_Co];
  }
  if (input[_DCT] != null) {
    entries[_DCT] = input[_DCT];
  }
  if (input[_DIW] != null) {
    entries[_DIW] = input[_DIW];
  }
  if (input[_IMP] != null) {
    const memberEntries = se_InstanceMaintenancePolicy(input[_IMP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMaintenancePolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZD] != null) {
    const memberEntries = se_AvailabilityZoneDistribution(input[_AZD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZoneDistribution.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AZIP] != null) {
    const memberEntries = se_AvailabilityZoneImpairmentPolicy(input[_AZIP], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZoneImpairmentPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SZSV] != null) {
    entries[_SZSV] = input[_SZSV];
  }
  if (input[_CRS] != null) {
    const memberEntries = se_CapacityReservationSpecification(input[_CRS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CapacityReservationSpecification.${key}`;
      entries[loc] = value;
    });
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
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ma] != null) {
    entries[_Ma] = input[_Ma];
  }
  return entries;
};

/**
 * deserializeAws_queryAcceleratorCountRequest
 */
const de_AcceleratorCountRequest = (output: any, context: __SerdeContext): AcceleratorCountRequest => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAcceleratorManufacturers
 */
const de_AcceleratorManufacturers = (output: any, context: __SerdeContext): AcceleratorManufacturer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAcceleratorNames
 */
const de_AcceleratorNames = (output: any, context: __SerdeContext): AcceleratorName[] => {
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
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAcceleratorTypes
 */
const de_AcceleratorTypes = (output: any, context: __SerdeContext): AcceleratorType[] => {
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_Activities(__getArrayIfSingleItem(output[_Ac][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryActivity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  const contents: any = {};
  if (output[_AIct] != null) {
    contents[_AIct] = __expectString(output[_AIct]);
  }
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_De] != null) {
    contents[_De] = __expectString(output[_De]);
  }
  if (output[_Ca] != null) {
    contents[_Ca] = __expectString(output[_Ca]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ST]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  if (output[_SC] != null) {
    contents[_SC] = __expectString(output[_SC]);
  }
  if (output[_SMt] != null) {
    contents[_SMt] = __expectString(output[_SMt]);
  }
  if (output[_Pro] != null) {
    contents[_Pro] = __strictParseInt32(output[_Pro]) as number;
  }
  if (output[_Det] != null) {
    contents[_Det] = __expectString(output[_Det]);
  }
  if (output[_ASGS] != null) {
    contents[_ASGS] = __expectString(output[_ASGS]);
  }
  if (output[_ASGARN] != null) {
    contents[_ASGARN] = __expectString(output[_ASGARN]);
  }
  return contents;
};

/**
 * deserializeAws_queryActivityType
 */
const de_ActivityType = (output: any, context: __SerdeContext): ActivityType => {
  const contents: any = {};
  if (output[_Act] != null) {
    contents[_Act] = de_Activity(output[_Act], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAdjustmentType
 */
const de_AdjustmentType = (output: any, context: __SerdeContext): AdjustmentType => {
  const contents: any = {};
  if (output[_ATd] != null) {
    contents[_ATd] = __expectString(output[_ATd]);
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
  if (output[_ANl] != null) {
    contents[_ANl] = __expectString(output[_ANl]);
  }
  if (output[_AARN] != null) {
    contents[_AARN] = __expectString(output[_AARN]);
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
    contents[_Al] = [];
  } else if (output[_Al] != null && output[_Al][_me] != null) {
    contents[_Al] = de_AlarmList(__getArrayIfSingleItem(output[_Al][_me]), context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_ASGARN] != null) {
    contents[_ASGARN] = __expectString(output[_ASGARN]);
  }
  if (output[_LCN] != null) {
    contents[_LCN] = __expectString(output[_LCN]);
  }
  if (output[_LT] != null) {
    contents[_LT] = de_LaunchTemplateSpecification(output[_LT], context);
  }
  if (output[_MIP] != null) {
    contents[_MIP] = de_MixedInstancesPolicy(output[_MIP], context);
  }
  if (output[_MS] != null) {
    contents[_MS] = __strictParseInt32(output[_MS]) as number;
  }
  if (output[_MSa] != null) {
    contents[_MSa] = __strictParseInt32(output[_MSa]) as number;
  }
  if (output[_DC] != null) {
    contents[_DC] = __strictParseInt32(output[_DC]) as number;
  }
  if (output[_PC] != null) {
    contents[_PC] = __strictParseInt32(output[_PC]) as number;
  }
  if (output[_DCe] != null) {
    contents[_DCe] = __strictParseInt32(output[_DCe]) as number;
  }
  if (output.AvailabilityZones === "") {
    contents[_AZ] = [];
  } else if (output[_AZ] != null && output[_AZ][_me] != null) {
    contents[_AZ] = de_AvailabilityZones(__getArrayIfSingleItem(output[_AZ][_me]), context);
  }
  if (output.LoadBalancerNames === "") {
    contents[_LBN] = [];
  } else if (output[_LBN] != null && output[_LBN][_me] != null) {
    contents[_LBN] = de_LoadBalancerNames(__getArrayIfSingleItem(output[_LBN][_me]), context);
  }
  if (output.TargetGroupARNs === "") {
    contents[_TGARN] = [];
  } else if (output[_TGARN] != null && output[_TGARN][_me] != null) {
    contents[_TGARN] = de_TargetGroupARNs(__getArrayIfSingleItem(output[_TGARN][_me]), context);
  }
  if (output[_HCT] != null) {
    contents[_HCT] = __expectString(output[_HCT]);
  }
  if (output[_HCGP] != null) {
    contents[_HCGP] = __strictParseInt32(output[_HCGP]) as number;
  }
  if (output.Instances === "") {
    contents[_In] = [];
  } else if (output[_In] != null && output[_In][_me] != null) {
    contents[_In] = de_Instances(__getArrayIfSingleItem(output[_In][_me]), context);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CT]));
  }
  if (output.SuspendedProcesses === "") {
    contents[_SPu] = [];
  } else if (output[_SPu] != null && output[_SPu][_me] != null) {
    contents[_SPu] = de_SuspendedProcesses(__getArrayIfSingleItem(output[_SPu][_me]), context);
  }
  if (output[_PG] != null) {
    contents[_PG] = __expectString(output[_PG]);
  }
  if (output[_VPCZI] != null) {
    contents[_VPCZI] = __expectString(output[_VPCZI]);
  }
  if (output.EnabledMetrics === "") {
    contents[_EM] = [];
  } else if (output[_EM] != null && output[_EM][_me] != null) {
    contents[_EM] = de_EnabledMetrics(__getArrayIfSingleItem(output[_EM][_me]), context);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output.Tags === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_TagDescriptionList(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output.TerminationPolicies === "") {
    contents[_TP] = [];
  } else if (output[_TP] != null && output[_TP][_me] != null) {
    contents[_TP] = de_TerminationPolicies(__getArrayIfSingleItem(output[_TP][_me]), context);
  }
  if (output[_NIPFSI] != null) {
    contents[_NIPFSI] = __parseBoolean(output[_NIPFSI]);
  }
  if (output[_SLRARN] != null) {
    contents[_SLRARN] = __expectString(output[_SLRARN]);
  }
  if (output[_MIL] != null) {
    contents[_MIL] = __strictParseInt32(output[_MIL]) as number;
  }
  if (output[_CR] != null) {
    contents[_CR] = __parseBoolean(output[_CR]);
  }
  if (output[_WPC] != null) {
    contents[_WPC] = de_WarmPoolConfiguration(output[_WPC], context);
  }
  if (output[_WPS] != null) {
    contents[_WPS] = __strictParseInt32(output[_WPS]) as number;
  }
  if (output[_Co] != null) {
    contents[_Co] = __expectString(output[_Co]);
  }
  if (output[_DCT] != null) {
    contents[_DCT] = __expectString(output[_DCT]);
  }
  if (output[_DIW] != null) {
    contents[_DIW] = __strictParseInt32(output[_DIW]) as number;
  }
  if (output.TrafficSources === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_me] != null) {
    contents[_TS] = de_TrafficSources(__getArrayIfSingleItem(output[_TS][_me]), context);
  }
  if (output[_IMP] != null) {
    contents[_IMP] = de_InstanceMaintenancePolicy(output[_IMP], context);
  }
  if (output[_AZD] != null) {
    contents[_AZD] = de_AvailabilityZoneDistribution(output[_AZD], context);
  }
  if (output[_AZIP] != null) {
    contents[_AZIP] = de_AvailabilityZoneImpairmentPolicy(output[_AZIP], context);
  }
  if (output[_CRS] != null) {
    contents[_CRS] = de_CapacityReservationSpecification(output[_CRS], context);
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
    contents[_ASG] = [];
  } else if (output[_ASG] != null && output[_ASG][_me] != null) {
    contents[_ASG] = de_AutoScalingGroups(__getArrayIfSingleItem(output[_ASG][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryAutoScalingInstanceDetails
 */
const de_AutoScalingInstanceDetails = (output: any, context: __SerdeContext): AutoScalingInstanceDetails => {
  const contents: any = {};
  if (output[_IIn] != null) {
    contents[_IIn] = __expectString(output[_IIn]);
  }
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_LSi] != null) {
    contents[_LSi] = __expectString(output[_LSi]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_LCN] != null) {
    contents[_LCN] = __expectString(output[_LCN]);
  }
  if (output[_LT] != null) {
    contents[_LT] = de_LaunchTemplateSpecification(output[_LT], context);
  }
  if (output[_PFSI] != null) {
    contents[_PFSI] = __parseBoolean(output[_PFSI]);
  }
  if (output[_WC] != null) {
    contents[_WC] = __expectString(output[_WC]);
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
    contents[_ASI] = [];
  } else if (output[_ASI] != null && output[_ASI][_me] != null) {
    contents[_ASI] = de_AutoScalingInstances(__getArrayIfSingleItem(output[_ASI][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
 * deserializeAws_queryAvailabilityZoneDistribution
 */
const de_AvailabilityZoneDistribution = (output: any, context: __SerdeContext): AvailabilityZoneDistribution => {
  const contents: any = {};
  if (output[_CDS] != null) {
    contents[_CDS] = __expectString(output[_CDS]);
  }
  return contents;
};

/**
 * deserializeAws_queryAvailabilityZoneImpairmentPolicy
 */
const de_AvailabilityZoneImpairmentPolicy = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneImpairmentPolicy => {
  const contents: any = {};
  if (output[_ZSE] != null) {
    contents[_ZSE] = __parseBoolean(output[_ZSE]);
  }
  if (output[_IZHCB] != null) {
    contents[_IZHCB] = __expectString(output[_IZHCB]);
  }
  return contents;
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
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryBaselinePerformanceFactorsRequest
 */
const de_BaselinePerformanceFactorsRequest = (
  output: any,
  context: __SerdeContext
): BaselinePerformanceFactorsRequest => {
  const contents: any = {};
  if (output[_C] != null) {
    contents[_C] = de_CpuPerformanceFactorRequest(output[_C], context);
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
    contents[_FSA] = [];
  } else if (output[_FSA] != null && output[_FSA][_me] != null) {
    contents[_FSA] = de_FailedScheduledUpdateGroupActionRequests(__getArrayIfSingleItem(output[_FSA][_me]), context);
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
    contents[_FSUGA] = [];
  } else if (output[_FSUGA] != null && output[_FSUGA][_me] != null) {
    contents[_FSUGA] = de_FailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output[_FSUGA][_me]),
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
  if (output[_VN] != null) {
    contents[_VN] = __expectString(output[_VN]);
  }
  if (output[_DN] != null) {
    contents[_DN] = __expectString(output[_DN]);
  }
  if (output[_E] != null) {
    contents[_E] = de_Ebs(output[_E], context);
  }
  if (output[_ND] != null) {
    contents[_ND] = __parseBoolean(output[_ND]);
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
  if (output[_IRIn] != null) {
    contents[_IRIn] = __expectString(output[_IRIn]);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityForecast
 */
const de_CapacityForecast = (output: any, context: __SerdeContext): CapacityForecast => {
  const contents: any = {};
  if (output.Timestamps === "") {
    contents[_Tim] = [];
  } else if (output[_Tim] != null && output[_Tim][_me] != null) {
    contents[_Tim] = de_PredictiveScalingForecastTimestamps(__getArrayIfSingleItem(output[_Tim][_me]), context);
  }
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_me] != null) {
    contents[_Va] = de_PredictiveScalingForecastValues(__getArrayIfSingleItem(output[_Va][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityReservationIds
 */
const de_CapacityReservationIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCapacityReservationResourceGroupArns
 */
const de_CapacityReservationResourceGroupArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCapacityReservationSpecification
 */
const de_CapacityReservationSpecification = (
  output: any,
  context: __SerdeContext
): CapacityReservationSpecification => {
  const contents: any = {};
  if (output[_CRP] != null) {
    contents[_CRP] = __expectString(output[_CRP]);
  }
  if (output[_CRT] != null) {
    contents[_CRT] = de_CapacityReservationTarget(output[_CRT], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCapacityReservationTarget
 */
const de_CapacityReservationTarget = (output: any, context: __SerdeContext): CapacityReservationTarget => {
  const contents: any = {};
  if (output.CapacityReservationIds === "") {
    contents[_CRI] = [];
  } else if (output[_CRI] != null && output[_CRI][_me] != null) {
    contents[_CRI] = de_CapacityReservationIds(__getArrayIfSingleItem(output[_CRI][_me]), context);
  }
  if (output.CapacityReservationResourceGroupArns === "") {
    contents[_CRRGA] = [];
  } else if (output[_CRRGA] != null && output[_CRRGA][_me] != null) {
    contents[_CRRGA] = de_CapacityReservationResourceGroupArns(__getArrayIfSingleItem(output[_CRRGA][_me]), context);
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
const de_CpuManufacturers = (output: any, context: __SerdeContext): CpuManufacturer[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCpuPerformanceFactorRequest
 */
const de_CpuPerformanceFactorRequest = (output: any, context: __SerdeContext): CpuPerformanceFactorRequest => {
  const contents: any = {};
  if (output.Reference === "") {
    contents[_R] = [];
  } else if (output[_Ref] != null && output[_Ref][_i] != null) {
    contents[_R] = de_PerformanceFactorReferenceSetRequest(__getArrayIfSingleItem(output[_Ref][_i]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCustomizedMetricSpecification
 */
const de_CustomizedMetricSpecification = (output: any, context: __SerdeContext): CustomizedMetricSpecification => {
  const contents: any = {};
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output.Dimensions === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_me] != null) {
    contents[_D] = de_MetricDimensions(__getArrayIfSingleItem(output[_D][_me]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output.Metrics === "") {
    contents[_Me] = [];
  } else if (output[_Me] != null && output[_Me][_me] != null) {
    contents[_Me] = de_TargetTrackingMetricDataQueries(__getArrayIfSingleItem(output[_Me][_me]), context);
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
  if (output[_MNOASG] != null) {
    contents[_MNOASG] = __strictParseInt32(output[_MNOASG]) as number;
  }
  if (output[_MNOLC] != null) {
    contents[_MNOLC] = __strictParseInt32(output[_MNOLC]) as number;
  }
  if (output[_NOASG] != null) {
    contents[_NOASG] = __strictParseInt32(output[_NOASG]) as number;
  }
  if (output[_NOLC] != null) {
    contents[_NOLC] = __strictParseInt32(output[_NOLC]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAdjustmentTypesAnswer
 */
const de_DescribeAdjustmentTypesAnswer = (output: any, context: __SerdeContext): DescribeAdjustmentTypesAnswer => {
  const contents: any = {};
  if (output.AdjustmentTypes === "") {
    contents[_ATdj] = [];
  } else if (output[_ATdj] != null && output[_ATdj][_me] != null) {
    contents[_ATdj] = de_AdjustmentTypes(__getArrayIfSingleItem(output[_ATdj][_me]), context);
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
    contents[_ASNT] = [];
  } else if (output[_ASNT] != null && output[_ASNT][_me] != null) {
    contents[_ASNT] = de_AutoScalingNotificationTypes(__getArrayIfSingleItem(output[_ASNT][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInstanceRefreshesAnswer
 */
const de_DescribeInstanceRefreshesAnswer = (output: any, context: __SerdeContext): DescribeInstanceRefreshesAnswer => {
  const contents: any = {};
  if (output.InstanceRefreshes === "") {
    contents[_IRn] = [];
  } else if (output[_IRn] != null && output[_IRn][_me] != null) {
    contents[_IRn] = de_InstanceRefreshes(__getArrayIfSingleItem(output[_IRn][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLifecycleHooksAnswer
 */
const de_DescribeLifecycleHooksAnswer = (output: any, context: __SerdeContext): DescribeLifecycleHooksAnswer => {
  const contents: any = {};
  if (output.LifecycleHooks === "") {
    contents[_LH] = [];
  } else if (output[_LH] != null && output[_LH][_me] != null) {
    contents[_LH] = de_LifecycleHooks(__getArrayIfSingleItem(output[_LH][_me]), context);
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
    contents[_LHT] = [];
  } else if (output[_LHT] != null && output[_LHT][_me] != null) {
    contents[_LHT] = de_AutoScalingNotificationTypes(__getArrayIfSingleItem(output[_LHT][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeLoadBalancersResponse
 */
const de_DescribeLoadBalancersResponse = (output: any, context: __SerdeContext): DescribeLoadBalancersResponse => {
  const contents: any = {};
  if (output.LoadBalancers === "") {
    contents[_LB] = [];
  } else if (output[_LB] != null && output[_LB][_me] != null) {
    contents[_LB] = de_LoadBalancerStates(__getArrayIfSingleItem(output[_LB][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
    contents[_LBTG] = [];
  } else if (output[_LBTG] != null && output[_LBTG][_me] != null) {
    contents[_LBTG] = de_LoadBalancerTargetGroupStates(__getArrayIfSingleItem(output[_LBTG][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
    contents[_Me] = [];
  } else if (output[_Me] != null && output[_Me][_me] != null) {
    contents[_Me] = de_MetricCollectionTypes(__getArrayIfSingleItem(output[_Me][_me]), context);
  }
  if (output.Granularities === "") {
    contents[_Gr] = [];
  } else if (output[_Gr] != null && output[_Gr][_me] != null) {
    contents[_Gr] = de_MetricGranularityTypes(__getArrayIfSingleItem(output[_Gr][_me]), context);
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
    contents[_NC] = [];
  } else if (output[_NC] != null && output[_NC][_me] != null) {
    contents[_NC] = de_NotificationConfigurations(__getArrayIfSingleItem(output[_NC][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
    contents[_TPT] = [];
  } else if (output[_TPT] != null && output[_TPT][_me] != null) {
    contents[_TPT] = de_TerminationPolicies(__getArrayIfSingleItem(output[_TPT][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeTrafficSourcesResponse
 */
const de_DescribeTrafficSourcesResponse = (output: any, context: __SerdeContext): DescribeTrafficSourcesResponse => {
  const contents: any = {};
  if (output.TrafficSources === "") {
    contents[_TS] = [];
  } else if (output[_TS] != null && output[_TS][_me] != null) {
    contents[_TS] = de_TrafficSourceStates(__getArrayIfSingleItem(output[_TS][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeWarmPoolAnswer
 */
const de_DescribeWarmPoolAnswer = (output: any, context: __SerdeContext): DescribeWarmPoolAnswer => {
  const contents: any = {};
  if (output[_WPC] != null) {
    contents[_WPC] = de_WarmPoolConfiguration(output[_WPC], context);
  }
  if (output.Instances === "") {
    contents[_In] = [];
  } else if (output[_In] != null && output[_In][_me] != null) {
    contents[_In] = de_Instances(__getArrayIfSingleItem(output[_In][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDesiredConfiguration
 */
const de_DesiredConfiguration = (output: any, context: __SerdeContext): DesiredConfiguration => {
  const contents: any = {};
  if (output[_LT] != null) {
    contents[_LT] = de_LaunchTemplateSpecification(output[_LT], context);
  }
  if (output[_MIP] != null) {
    contents[_MIP] = de_MixedInstancesPolicy(output[_MIP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryDetachInstancesAnswer
 */
const de_DetachInstancesAnswer = (output: any, context: __SerdeContext): DetachInstancesAnswer => {
  const contents: any = {};
  if (output.Activities === "") {
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_Activities(__getArrayIfSingleItem(output[_Ac][_me]), context);
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
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  if (output[_VS] != null) {
    contents[_VS] = __strictParseInt32(output[_VS]) as number;
  }
  if (output[_VT] != null) {
    contents[_VT] = __expectString(output[_VT]);
  }
  if (output[_DOT] != null) {
    contents[_DOT] = __parseBoolean(output[_DOT]);
  }
  if (output[_I] != null) {
    contents[_I] = __strictParseInt32(output[_I]) as number;
  }
  if (output[_En] != null) {
    contents[_En] = __parseBoolean(output[_En]);
  }
  if (output[_Th] != null) {
    contents[_Th] = __strictParseInt32(output[_Th]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryEnabledMetric
 */
const de_EnabledMetric = (output: any, context: __SerdeContext): EnabledMetric => {
  const contents: any = {};
  if (output[_Met] != null) {
    contents[_Met] = __expectString(output[_Met]);
  }
  if (output[_G] != null) {
    contents[_G] = __expectString(output[_G]);
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
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_Activities(__getArrayIfSingleItem(output[_Ac][_me]), context);
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
    contents[_Ac] = [];
  } else if (output[_Ac] != null && output[_Ac][_me] != null) {
    contents[_Ac] = de_Activities(__getArrayIfSingleItem(output[_Ac][_me]), context);
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
  if (output[_SANc] != null) {
    contents[_SANc] = __expectString(output[_SANc]);
  }
  if (output[_EC] != null) {
    contents[_EC] = __expectString(output[_EC]);
  }
  if (output[_EMr] != null) {
    contents[_EMr] = __expectString(output[_EMr]);
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
    contents[_LF] = [];
  } else if (output[_LF] != null && output[_LF][_me] != null) {
    contents[_LF] = de_LoadForecasts(__getArrayIfSingleItem(output[_LF][_me]), context);
  }
  if (output[_CF] != null) {
    contents[_CF] = de_CapacityForecast(output[_CF], context);
  }
  if (output[_UT] != null) {
    contents[_UT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UT]));
  }
  return contents;
};

/**
 * deserializeAws_queryInstance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {};
  if (output[_IIn] != null) {
    contents[_IIn] = __expectString(output[_IIn]);
  }
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  if (output[_AZv] != null) {
    contents[_AZv] = __expectString(output[_AZv]);
  }
  if (output[_LSi] != null) {
    contents[_LSi] = __expectString(output[_LSi]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_LCN] != null) {
    contents[_LCN] = __expectString(output[_LCN]);
  }
  if (output[_LT] != null) {
    contents[_LT] = de_LaunchTemplateSpecification(output[_LT], context);
  }
  if (output[_PFSI] != null) {
    contents[_PFSI] = __parseBoolean(output[_PFSI]);
  }
  if (output[_WC] != null) {
    contents[_WC] = __expectString(output[_WC]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceGenerations
 */
const de_InstanceGenerations = (output: any, context: __SerdeContext): InstanceGeneration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryInstanceMaintenancePolicy
 */
const de_InstanceMaintenancePolicy = (output: any, context: __SerdeContext): InstanceMaintenancePolicy => {
  const contents: any = {};
  if (output[_MHP] != null) {
    contents[_MHP] = __strictParseInt32(output[_MHP]) as number;
  }
  if (output[_MHPa] != null) {
    contents[_MHPa] = __strictParseInt32(output[_MHPa]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceMetadataOptions
 */
const de_InstanceMetadataOptions = (output: any, context: __SerdeContext): InstanceMetadataOptions => {
  const contents: any = {};
  if (output[_HT] != null) {
    contents[_HT] = __expectString(output[_HT]);
  }
  if (output[_HPRHL] != null) {
    contents[_HPRHL] = __strictParseInt32(output[_HPRHL]) as number;
  }
  if (output[_HE] != null) {
    contents[_HE] = __expectString(output[_HE]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceMonitoring
 */
const de_InstanceMonitoring = (output: any, context: __SerdeContext): InstanceMonitoring => {
  const contents: any = {};
  if (output[_Ena] != null) {
    contents[_Ena] = __parseBoolean(output[_Ena]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefresh
 */
const de_InstanceRefresh = (output: any, context: __SerdeContext): InstanceRefresh => {
  const contents: any = {};
  if (output[_IRIn] != null) {
    contents[_IRIn] = __expectString(output[_IRIn]);
  }
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_SR] != null) {
    contents[_SR] = __expectString(output[_SR]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ST]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  if (output[_PCe] != null) {
    contents[_PCe] = __strictParseInt32(output[_PCe]) as number;
  }
  if (output[_ITU] != null) {
    contents[_ITU] = __strictParseInt32(output[_ITU]) as number;
  }
  if (output[_PD] != null) {
    contents[_PD] = de_InstanceRefreshProgressDetails(output[_PD], context);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = de_RefreshPreferences(output[_Pr], context);
  }
  if (output[_DCes] != null) {
    contents[_DCes] = de_DesiredConfiguration(output[_DCes], context);
  }
  if (output[_RDo] != null) {
    contents[_RDo] = de_RollbackDetails(output[_RDo], context);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshLivePoolProgress
 */
const de_InstanceRefreshLivePoolProgress = (output: any, context: __SerdeContext): InstanceRefreshLivePoolProgress => {
  const contents: any = {};
  if (output[_PCe] != null) {
    contents[_PCe] = __strictParseInt32(output[_PCe]) as number;
  }
  if (output[_ITU] != null) {
    contents[_ITU] = __strictParseInt32(output[_ITU]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshProgressDetails
 */
const de_InstanceRefreshProgressDetails = (output: any, context: __SerdeContext): InstanceRefreshProgressDetails => {
  const contents: any = {};
  if (output[_LPP] != null) {
    contents[_LPP] = de_InstanceRefreshLivePoolProgress(output[_LPP], context);
  }
  if (output[_WPP] != null) {
    contents[_WPP] = de_InstanceRefreshWarmPoolProgress(output[_WPP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRefreshWarmPoolProgress
 */
const de_InstanceRefreshWarmPoolProgress = (output: any, context: __SerdeContext): InstanceRefreshWarmPoolProgress => {
  const contents: any = {};
  if (output[_PCe] != null) {
    contents[_PCe] = __strictParseInt32(output[_PCe]) as number;
  }
  if (output[_ITU] != null) {
    contents[_ITU] = __strictParseInt32(output[_ITU]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceRequirements
 */
const de_InstanceRequirements = (output: any, context: __SerdeContext): InstanceRequirements => {
  const contents: any = {};
  if (output[_VCC] != null) {
    contents[_VCC] = de_VCpuCountRequest(output[_VCC], context);
  }
  if (output[_MMB] != null) {
    contents[_MMB] = de_MemoryMiBRequest(output[_MMB], context);
  }
  if (output.CpuManufacturers === "") {
    contents[_CM] = [];
  } else if (output[_CM] != null && output[_CM][_me] != null) {
    contents[_CM] = de_CpuManufacturers(__getArrayIfSingleItem(output[_CM][_me]), context);
  }
  if (output[_MGBPVC] != null) {
    contents[_MGBPVC] = de_MemoryGiBPerVCpuRequest(output[_MGBPVC], context);
  }
  if (output.ExcludedInstanceTypes === "") {
    contents[_EIT] = [];
  } else if (output[_EIT] != null && output[_EIT][_me] != null) {
    contents[_EIT] = de_ExcludedInstanceTypes(__getArrayIfSingleItem(output[_EIT][_me]), context);
  }
  if (output.InstanceGenerations === "") {
    contents[_IG] = [];
  } else if (output[_IG] != null && output[_IG][_me] != null) {
    contents[_IG] = de_InstanceGenerations(__getArrayIfSingleItem(output[_IG][_me]), context);
  }
  if (output[_SMPPOLP] != null) {
    contents[_SMPPOLP] = __strictParseInt32(output[_SMPPOLP]) as number;
  }
  if (output[_MSPAPOOODP] != null) {
    contents[_MSPAPOOODP] = __strictParseInt32(output[_MSPAPOOODP]) as number;
  }
  if (output[_ODMPPOLP] != null) {
    contents[_ODMPPOLP] = __strictParseInt32(output[_ODMPPOLP]) as number;
  }
  if (output[_BM] != null) {
    contents[_BM] = __expectString(output[_BM]);
  }
  if (output[_BP] != null) {
    contents[_BP] = __expectString(output[_BP]);
  }
  if (output[_RHS] != null) {
    contents[_RHS] = __parseBoolean(output[_RHS]);
  }
  if (output[_NIC] != null) {
    contents[_NIC] = de_NetworkInterfaceCountRequest(output[_NIC], context);
  }
  if (output[_LS] != null) {
    contents[_LS] = __expectString(output[_LS]);
  }
  if (output.LocalStorageTypes === "") {
    contents[_LST] = [];
  } else if (output[_LST] != null && output[_LST][_me] != null) {
    contents[_LST] = de_LocalStorageTypes(__getArrayIfSingleItem(output[_LST][_me]), context);
  }
  if (output[_TLSGB] != null) {
    contents[_TLSGB] = de_TotalLocalStorageGBRequest(output[_TLSGB], context);
  }
  if (output[_BEBM] != null) {
    contents[_BEBM] = de_BaselineEbsBandwidthMbpsRequest(output[_BEBM], context);
  }
  if (output.AcceleratorTypes === "") {
    contents[_AT] = [];
  } else if (output[_AT] != null && output[_AT][_me] != null) {
    contents[_AT] = de_AcceleratorTypes(__getArrayIfSingleItem(output[_AT][_me]), context);
  }
  if (output[_AC] != null) {
    contents[_AC] = de_AcceleratorCountRequest(output[_AC], context);
  }
  if (output.AcceleratorManufacturers === "") {
    contents[_AM] = [];
  } else if (output[_AM] != null && output[_AM][_me] != null) {
    contents[_AM] = de_AcceleratorManufacturers(__getArrayIfSingleItem(output[_AM][_me]), context);
  }
  if (output.AcceleratorNames === "") {
    contents[_AN] = [];
  } else if (output[_AN] != null && output[_AN][_me] != null) {
    contents[_AN] = de_AcceleratorNames(__getArrayIfSingleItem(output[_AN][_me]), context);
  }
  if (output[_ATMMB] != null) {
    contents[_ATMMB] = de_AcceleratorTotalMemoryMiBRequest(output[_ATMMB], context);
  }
  if (output[_NBG] != null) {
    contents[_NBG] = de_NetworkBandwidthGbpsRequest(output[_NBG], context);
  }
  if (output.AllowedInstanceTypes === "") {
    contents[_AIT] = [];
  } else if (output[_AIT] != null && output[_AIT][_me] != null) {
    contents[_AIT] = de_AllowedInstanceTypes(__getArrayIfSingleItem(output[_AIT][_me]), context);
  }
  if (output[_BPF] != null) {
    contents[_BPF] = de_BaselinePerformanceFactorsRequest(output[_BPF], context);
  }
  return contents;
};

/**
 * deserializeAws_queryInstanceReusePolicy
 */
const de_InstanceReusePolicy = (output: any, context: __SerdeContext): InstanceReusePolicy => {
  const contents: any = {};
  if (output[_ROSI] != null) {
    contents[_ROSI] = __parseBoolean(output[_ROSI]);
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
  if (output[_ODAS] != null) {
    contents[_ODAS] = __expectString(output[_ODAS]);
  }
  if (output[_ODBC] != null) {
    contents[_ODBC] = __strictParseInt32(output[_ODBC]) as number;
  }
  if (output[_ODPABC] != null) {
    contents[_ODPABC] = __strictParseInt32(output[_ODPABC]) as number;
  }
  if (output[_SAS] != null) {
    contents[_SAS] = __expectString(output[_SAS]);
  }
  if (output[_SIPp] != null) {
    contents[_SIPp] = __strictParseInt32(output[_SIPp]) as number;
  }
  if (output[_SMP] != null) {
    contents[_SMP] = __expectString(output[_SMP]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNextToken
 */
const de_InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchConfiguration
 */
const de_LaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {};
  if (output[_LCN] != null) {
    contents[_LCN] = __expectString(output[_LCN]);
  }
  if (output[_LCARN] != null) {
    contents[_LCARN] = __expectString(output[_LCARN]);
  }
  if (output[_IIm] != null) {
    contents[_IIm] = __expectString(output[_IIm]);
  }
  if (output[_KN] != null) {
    contents[_KN] = __expectString(output[_KN]);
  }
  if (output.SecurityGroups === "") {
    contents[_SG] = [];
  } else if (output[_SG] != null && output[_SG][_me] != null) {
    contents[_SG] = de_SecurityGroups(__getArrayIfSingleItem(output[_SG][_me]), context);
  }
  if (output[_CLVPCI] != null) {
    contents[_CLVPCI] = __expectString(output[_CLVPCI]);
  }
  if (output.ClassicLinkVPCSecurityGroups === "") {
    contents[_CLVPCSG] = [];
  } else if (output[_CLVPCSG] != null && output[_CLVPCSG][_me] != null) {
    contents[_CLVPCSG] = de_ClassicLinkVPCSecurityGroups(__getArrayIfSingleItem(output[_CLVPCSG][_me]), context);
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectString(output[_UD]);
  }
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  if (output[_KI] != null) {
    contents[_KI] = __expectString(output[_KI]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (output.BlockDeviceMappings === "") {
    contents[_BDM] = [];
  } else if (output[_BDM] != null && output[_BDM][_me] != null) {
    contents[_BDM] = de_BlockDeviceMappings(__getArrayIfSingleItem(output[_BDM][_me]), context);
  }
  if (output[_IM] != null) {
    contents[_IM] = de_InstanceMonitoring(output[_IM], context);
  }
  if (output[_SPp] != null) {
    contents[_SPp] = __expectString(output[_SPp]);
  }
  if (output[_IIP] != null) {
    contents[_IIP] = __expectString(output[_IIP]);
  }
  if (output[_CT] != null) {
    contents[_CT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CT]));
  }
  if (output[_EO] != null) {
    contents[_EO] = __parseBoolean(output[_EO]);
  }
  if (output[_APIA] != null) {
    contents[_APIA] = __parseBoolean(output[_APIA]);
  }
  if (output[_PT] != null) {
    contents[_PT] = __expectString(output[_PT]);
  }
  if (output[_MO] != null) {
    contents[_MO] = de_InstanceMetadataOptions(output[_MO], context);
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
    contents[_LC] = [];
  } else if (output[_LC] != null && output[_LC][_me] != null) {
    contents[_LC] = de_LaunchConfigurations(__getArrayIfSingleItem(output[_LC][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplate
 */
const de_LaunchTemplate = (output: any, context: __SerdeContext): LaunchTemplate => {
  const contents: any = {};
  if (output[_LTS] != null) {
    contents[_LTS] = de_LaunchTemplateSpecification(output[_LTS], context);
  }
  if (output.Overrides === "") {
    contents[_O] = [];
  } else if (output[_O] != null && output[_O][_me] != null) {
    contents[_O] = de_Overrides(__getArrayIfSingleItem(output[_O][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplateOverrides
 */
const de_LaunchTemplateOverrides = (output: any, context: __SerdeContext): LaunchTemplateOverrides => {
  const contents: any = {};
  if (output[_IT] != null) {
    contents[_IT] = __expectString(output[_IT]);
  }
  if (output[_WC] != null) {
    contents[_WC] = __expectString(output[_WC]);
  }
  if (output[_LTS] != null) {
    contents[_LTS] = de_LaunchTemplateSpecification(output[_LTS], context);
  }
  if (output[_IR] != null) {
    contents[_IR] = de_InstanceRequirements(output[_IR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryLaunchTemplateSpecification
 */
const de_LaunchTemplateSpecification = (output: any, context: __SerdeContext): LaunchTemplateSpecification => {
  const contents: any = {};
  if (output[_LTI] != null) {
    contents[_LTI] = __expectString(output[_LTI]);
  }
  if (output[_LTN] != null) {
    contents[_LTN] = __expectString(output[_LTN]);
  }
  if (output[_V] != null) {
    contents[_V] = __expectString(output[_V]);
  }
  return contents;
};

/**
 * deserializeAws_queryLifecycleHook
 */
const de_LifecycleHook = (output: any, context: __SerdeContext): LifecycleHook => {
  const contents: any = {};
  if (output[_LHN] != null) {
    contents[_LHN] = __expectString(output[_LHN]);
  }
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_LTi] != null) {
    contents[_LTi] = __expectString(output[_LTi]);
  }
  if (output[_NTARN] != null) {
    contents[_NTARN] = __expectString(output[_NTARN]);
  }
  if (output[_RARN] != null) {
    contents[_RARN] = __expectString(output[_RARN]);
  }
  if (output[_NM] != null) {
    contents[_NM] = __expectString(output[_NM]);
  }
  if (output[_HTe] != null) {
    contents[_HTe] = __strictParseInt32(output[_HTe]) as number;
  }
  if (output[_GT] != null) {
    contents[_GT] = __strictParseInt32(output[_GT]) as number;
  }
  if (output[_DR] != null) {
    contents[_DR] = __expectString(output[_DR]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_LBNo] != null) {
    contents[_LBNo] = __expectString(output[_LBNo]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
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
  if (output[_LBTGARN] != null) {
    contents[_LBTGARN] = __expectString(output[_LBTGARN]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
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
    contents[_Tim] = [];
  } else if (output[_Tim] != null && output[_Tim][_me] != null) {
    contents[_Tim] = de_PredictiveScalingForecastTimestamps(__getArrayIfSingleItem(output[_Tim][_me]), context);
  }
  if (output.Values === "") {
    contents[_Va] = [];
  } else if (output[_Va] != null && output[_Va][_me] != null) {
    contents[_Va] = de_PredictiveScalingForecastValues(__getArrayIfSingleItem(output[_Va][_me]), context);
  }
  if (output[_MSetr] != null) {
    contents[_MSetr] = de_PredictiveScalingMetricSpecification(output[_MSetr], context);
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
const de_LocalStorageTypes = (output: any, context: __SerdeContext): LocalStorageType[] => {
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
  if (output[_M] != null) {
    contents[_M] = __strictParseFloat(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseFloat(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryMemoryMiBRequest
 */
const de_MemoryMiBRequest = (output: any, context: __SerdeContext): MemoryMiBRequest => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryMetric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (output.Dimensions === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_me] != null) {
    contents[_D] = de_MetricDimensions(__getArrayIfSingleItem(output[_D][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricCollectionType
 */
const de_MetricCollectionType = (output: any, context: __SerdeContext): MetricCollectionType => {
  const contents: any = {};
  if (output[_Met] != null) {
    contents[_Met] = __expectString(output[_Met]);
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
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectString(output[_Ex]);
  }
  if (output[_MSe] != null) {
    contents[_MSe] = de_MetricStat(output[_MSe], context);
  }
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  if (output[_RD] != null) {
    contents[_RD] = __parseBoolean(output[_RD]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
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
  if (output[_G] != null) {
    contents[_G] = __expectString(output[_G]);
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
  if (output[_Met] != null) {
    contents[_Met] = de_Metric(output[_Met], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  return contents;
};

/**
 * deserializeAws_queryMixedInstancesPolicy
 */
const de_MixedInstancesPolicy = (output: any, context: __SerdeContext): MixedInstancesPolicy => {
  const contents: any = {};
  if (output[_LT] != null) {
    contents[_LT] = de_LaunchTemplate(output[_LT], context);
  }
  if (output[_ID] != null) {
    contents[_ID] = de_InstancesDistribution(output[_ID], context);
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkBandwidthGbpsRequest
 */
const de_NetworkBandwidthGbpsRequest = (output: any, context: __SerdeContext): NetworkBandwidthGbpsRequest => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseFloat(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseFloat(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryNetworkInterfaceCountRequest
 */
const de_NetworkInterfaceCountRequest = (output: any, context: __SerdeContext): NetworkInterfaceCountRequest => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryNotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  const contents: any = {};
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_TARN] != null) {
    contents[_TARN] = __expectString(output[_TARN]);
  }
  if (output[_NTot] != null) {
    contents[_NTot] = __expectString(output[_NTot]);
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
 * deserializeAws_queryPerformanceFactorReferenceRequest
 */
const de_PerformanceFactorReferenceRequest = (
  output: any,
  context: __SerdeContext
): PerformanceFactorReferenceRequest => {
  const contents: any = {};
  if (output[_IF] != null) {
    contents[_IF] = __expectString(output[_IF]);
  }
  return contents;
};

/**
 * deserializeAws_queryPerformanceFactorReferenceSetRequest
 */
const de_PerformanceFactorReferenceSetRequest = (
  output: any,
  context: __SerdeContext
): PerformanceFactorReferenceRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PerformanceFactorReferenceRequest(entry, context);
    });
};

/**
 * deserializeAws_queryPoliciesType
 */
const de_PoliciesType = (output: any, context: __SerdeContext): PoliciesType => {
  const contents: any = {};
  if (output.ScalingPolicies === "") {
    contents[_SPca] = [];
  } else if (output[_SPca] != null && output[_SPca][_me] != null) {
    contents[_SPca] = de_ScalingPolicies(__getArrayIfSingleItem(output[_SPca][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyARNType
 */
const de_PolicyARNType = (output: any, context: __SerdeContext): PolicyARNType => {
  const contents: any = {};
  if (output[_PARN] != null) {
    contents[_PARN] = __expectString(output[_PARN]);
  }
  if (output.Alarms === "") {
    contents[_Al] = [];
  } else if (output[_Al] != null && output[_Al][_me] != null) {
    contents[_Al] = de_Alarms(__getArrayIfSingleItem(output[_Al][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPredefinedMetricSpecification
 */
const de_PredefinedMetricSpecification = (output: any, context: __SerdeContext): PredefinedMetricSpecification => {
  const contents: any = {};
  if (output[_PMT] != null) {
    contents[_PMT] = __expectString(output[_PMT]);
  }
  if (output[_RL] != null) {
    contents[_RL] = __expectString(output[_RL]);
  }
  return contents;
};

/**
 * deserializeAws_queryPredictiveScalingConfiguration
 */
const de_PredictiveScalingConfiguration = (output: any, context: __SerdeContext): PredictiveScalingConfiguration => {
  const contents: any = {};
  if (output.MetricSpecifications === "") {
    contents[_MSet] = [];
  } else if (output[_MSet] != null && output[_MSet][_me] != null) {
    contents[_MSet] = de_PredictiveScalingMetricSpecifications(__getArrayIfSingleItem(output[_MSet][_me]), context);
  }
  if (output[_Mo] != null) {
    contents[_Mo] = __expectString(output[_Mo]);
  }
  if (output[_SBT] != null) {
    contents[_SBT] = __strictParseInt32(output[_SBT]) as number;
  }
  if (output[_MCBB] != null) {
    contents[_MCBB] = __expectString(output[_MCBB]);
  }
  if (output[_MCB] != null) {
    contents[_MCB] = __strictParseInt32(output[_MCB]) as number;
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
    contents[_MDQ] = [];
  } else if (output[_MDQ] != null && output[_MDQ][_me] != null) {
    contents[_MDQ] = de_MetricDataQueries(__getArrayIfSingleItem(output[_MDQ][_me]), context);
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
    contents[_MDQ] = [];
  } else if (output[_MDQ] != null && output[_MDQ][_me] != null) {
    contents[_MDQ] = de_MetricDataQueries(__getArrayIfSingleItem(output[_MDQ][_me]), context);
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
    contents[_MDQ] = [];
  } else if (output[_MDQ] != null && output[_MDQ][_me] != null) {
    contents[_MDQ] = de_MetricDataQueries(__getArrayIfSingleItem(output[_MDQ][_me]), context);
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
  if (output[_TV] != null) {
    contents[_TV] = __strictParseFloat(output[_TV]) as number;
  }
  if (output[_PMPS] != null) {
    contents[_PMPS] = de_PredictiveScalingPredefinedMetricPair(output[_PMPS], context);
  }
  if (output[_PSMS] != null) {
    contents[_PSMS] = de_PredictiveScalingPredefinedScalingMetric(output[_PSMS], context);
  }
  if (output[_PLMS] != null) {
    contents[_PLMS] = de_PredictiveScalingPredefinedLoadMetric(output[_PLMS], context);
  }
  if (output[_CSMS] != null) {
    contents[_CSMS] = de_PredictiveScalingCustomizedScalingMetric(output[_CSMS], context);
  }
  if (output[_CLMS] != null) {
    contents[_CLMS] = de_PredictiveScalingCustomizedLoadMetric(output[_CLMS], context);
  }
  if (output[_CCMS] != null) {
    contents[_CCMS] = de_PredictiveScalingCustomizedCapacityMetric(output[_CCMS], context);
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
  if (output[_PMT] != null) {
    contents[_PMT] = __expectString(output[_PMT]);
  }
  if (output[_RL] != null) {
    contents[_RL] = __expectString(output[_RL]);
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
  if (output[_PMT] != null) {
    contents[_PMT] = __expectString(output[_PMT]);
  }
  if (output[_RL] != null) {
    contents[_RL] = __expectString(output[_RL]);
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
  if (output[_PMT] != null) {
    contents[_PMT] = __expectString(output[_PMT]);
  }
  if (output[_RL] != null) {
    contents[_RL] = __expectString(output[_RL]);
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
    contents[_Proc] = [];
  } else if (output[_Proc] != null && output[_Proc][_me] != null) {
    contents[_Proc] = de_Processes(__getArrayIfSingleItem(output[_Proc][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryProcessType
 */
const de_ProcessType = (output: any, context: __SerdeContext): ProcessType => {
  const contents: any = {};
  if (output[_PNr] != null) {
    contents[_PNr] = __expectString(output[_PNr]);
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
  if (output[_MHP] != null) {
    contents[_MHP] = __strictParseInt32(output[_MHP]) as number;
  }
  if (output[_IW] != null) {
    contents[_IW] = __strictParseInt32(output[_IW]) as number;
  }
  if (output.CheckpointPercentages === "") {
    contents[_CP] = [];
  } else if (output[_CP] != null && output[_CP][_me] != null) {
    contents[_CP] = de_CheckpointPercentages(__getArrayIfSingleItem(output[_CP][_me]), context);
  }
  if (output[_CD] != null) {
    contents[_CD] = __strictParseInt32(output[_CD]) as number;
  }
  if (output[_SM] != null) {
    contents[_SM] = __parseBoolean(output[_SM]);
  }
  if (output[_AR] != null) {
    contents[_AR] = __parseBoolean(output[_AR]);
  }
  if (output[_SIPI] != null) {
    contents[_SIPI] = __expectString(output[_SIPI]);
  }
  if (output[_SIt] != null) {
    contents[_SIt] = __expectString(output[_SIt]);
  }
  if (output[_AS] != null) {
    contents[_AS] = de_AlarmSpecification(output[_AS], context);
  }
  if (output[_MHPa] != null) {
    contents[_MHPa] = __strictParseInt32(output[_MHPa]) as number;
  }
  if (output[_BTa] != null) {
    contents[_BTa] = __strictParseInt32(output[_BTa]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryResourceContentionFault
 */
const de_ResourceContentionFault = (output: any, context: __SerdeContext): ResourceContentionFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceInUseFault
 */
const de_ResourceInUseFault = (output: any, context: __SerdeContext): ResourceInUseFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackDetails
 */
const de_RollbackDetails = (output: any, context: __SerdeContext): RollbackDetails => {
  const contents: any = {};
  if (output[_RR] != null) {
    contents[_RR] = __expectString(output[_RR]);
  }
  if (output[_RST] != null) {
    contents[_RST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_RST]));
  }
  if (output[_PCOR] != null) {
    contents[_PCOR] = __strictParseInt32(output[_PCOR]) as number;
  }
  if (output[_ITUOR] != null) {
    contents[_ITUOR] = __strictParseInt32(output[_ITUOR]) as number;
  }
  if (output[_PDOR] != null) {
    contents[_PDOR] = de_InstanceRefreshProgressDetails(output[_PDOR], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRollbackInstanceRefreshAnswer
 */
const de_RollbackInstanceRefreshAnswer = (output: any, context: __SerdeContext): RollbackInstanceRefreshAnswer => {
  const contents: any = {};
  if (output[_IRIn] != null) {
    contents[_IRIn] = __expectString(output[_IRIn]);
  }
  return contents;
};

/**
 * deserializeAws_queryScalingActivityInProgressFault
 */
const de_ScalingActivityInProgressFault = (output: any, context: __SerdeContext): ScalingActivityInProgressFault => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PARN] != null) {
    contents[_PARN] = __expectString(output[_PARN]);
  }
  if (output[_PTol] != null) {
    contents[_PTol] = __expectString(output[_PTol]);
  }
  if (output[_ATd] != null) {
    contents[_ATd] = __expectString(output[_ATd]);
  }
  if (output[_MAS] != null) {
    contents[_MAS] = __strictParseInt32(output[_MAS]) as number;
  }
  if (output[_MAM] != null) {
    contents[_MAM] = __strictParseInt32(output[_MAM]) as number;
  }
  if (output[_SA] != null) {
    contents[_SA] = __strictParseInt32(output[_SA]) as number;
  }
  if (output[_Coo] != null) {
    contents[_Coo] = __strictParseInt32(output[_Coo]) as number;
  }
  if (output.StepAdjustments === "") {
    contents[_SAt] = [];
  } else if (output[_SAt] != null && output[_SAt][_me] != null) {
    contents[_SAt] = de_StepAdjustments(__getArrayIfSingleItem(output[_SAt][_me]), context);
  }
  if (output[_MAT] != null) {
    contents[_MAT] = __expectString(output[_MAT]);
  }
  if (output[_EIW] != null) {
    contents[_EIW] = __strictParseInt32(output[_EIW]) as number;
  }
  if (output.Alarms === "") {
    contents[_Al] = [];
  } else if (output[_Al] != null && output[_Al][_me] != null) {
    contents[_Al] = de_Alarms(__getArrayIfSingleItem(output[_Al][_me]), context);
  }
  if (output[_TTC] != null) {
    contents[_TTC] = de_TargetTrackingConfiguration(output[_TTC], context);
  }
  if (output[_Ena] != null) {
    contents[_Ena] = __parseBoolean(output[_Ena]);
  }
  if (output[_PSC] != null) {
    contents[_PSC] = de_PredictiveScalingConfiguration(output[_PSC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledActionsType
 */
const de_ScheduledActionsType = (output: any, context: __SerdeContext): ScheduledActionsType => {
  const contents: any = {};
  if (output.ScheduledUpdateGroupActions === "") {
    contents[_SUGA] = [];
  } else if (output[_SUGA] != null && output[_SUGA][_me] != null) {
    contents[_SUGA] = de_ScheduledUpdateGroupActions(__getArrayIfSingleItem(output[_SUGA][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryScheduledUpdateGroupAction
 */
const de_ScheduledUpdateGroupAction = (output: any, context: __SerdeContext): ScheduledUpdateGroupAction => {
  const contents: any = {};
  if (output[_ASGN] != null) {
    contents[_ASGN] = __expectString(output[_ASGN]);
  }
  if (output[_SANc] != null) {
    contents[_SANc] = __expectString(output[_SANc]);
  }
  if (output[_SAARN] != null) {
    contents[_SAARN] = __expectString(output[_SAARN]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ST]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  if (output[_Re] != null) {
    contents[_Re] = __expectString(output[_Re]);
  }
  if (output[_MS] != null) {
    contents[_MS] = __strictParseInt32(output[_MS]) as number;
  }
  if (output[_MSa] != null) {
    contents[_MSa] = __strictParseInt32(output[_MSa]) as number;
  }
  if (output[_DC] != null) {
    contents[_DC] = __strictParseInt32(output[_DC]) as number;
  }
  if (output[_TZ] != null) {
    contents[_TZ] = __expectString(output[_TZ]);
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
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  if (output[_IRIn] != null) {
    contents[_IRIn] = __expectString(output[_IRIn]);
  }
  return contents;
};

/**
 * deserializeAws_queryStepAdjustment
 */
const de_StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  const contents: any = {};
  if (output[_MILB] != null) {
    contents[_MILB] = __strictParseFloat(output[_MILB]) as number;
  }
  if (output[_MIUB] != null) {
    contents[_MIUB] = __strictParseFloat(output[_MIUB]) as number;
  }
  if (output[_SA] != null) {
    contents[_SA] = __strictParseInt32(output[_SA]) as number;
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
  if (output[_PNr] != null) {
    contents[_PNr] = __expectString(output[_PNr]);
  }
  if (output[_SRu] != null) {
    contents[_SRu] = __expectString(output[_SRu]);
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
  if (output[_RIe] != null) {
    contents[_RIe] = __expectString(output[_RIe]);
  }
  if (output[_RT] != null) {
    contents[_RT] = __expectString(output[_RT]);
  }
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Val] != null) {
    contents[_Val] = __expectString(output[_Val]);
  }
  if (output[_PAL] != null) {
    contents[_PAL] = __parseBoolean(output[_PAL]);
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
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_TagDescriptionList(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
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
  if (output[_PMS] != null) {
    contents[_PMS] = de_PredefinedMetricSpecification(output[_PMS], context);
  }
  if (output[_CMS] != null) {
    contents[_CMS] = de_CustomizedMetricSpecification(output[_CMS], context);
  }
  if (output[_TV] != null) {
    contents[_TV] = __strictParseFloat(output[_TV]) as number;
  }
  if (output[_DSI] != null) {
    contents[_DSI] = __parseBoolean(output[_DSI]);
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
  if (output[_Id] != null) {
    contents[_Id] = __expectString(output[_Id]);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectString(output[_Ex]);
  }
  if (output[_MSe] != null) {
    contents[_MSe] = de_TargetTrackingMetricStat(output[_MSe], context);
  }
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_RD] != null) {
    contents[_RD] = __parseBoolean(output[_RD]);
  }
  return contents;
};

/**
 * deserializeAws_queryTargetTrackingMetricStat
 */
const de_TargetTrackingMetricStat = (output: any, context: __SerdeContext): TargetTrackingMetricStat => {
  const contents: any = {};
  if (output[_Met] != null) {
    contents[_Met] = de_Metric(output[_Met], context);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
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
  if (output[_M] != null) {
    contents[_M] = __strictParseFloat(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseFloat(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryTrafficSourceIdentifier
 */
const de_TrafficSourceIdentifier = (output: any, context: __SerdeContext): TrafficSourceIdentifier => {
  const contents: any = {};
  if (output[_Ide] != null) {
    contents[_Ide] = __expectString(output[_Ide]);
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
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
  if (output[_TSr] != null) {
    contents[_TSr] = __expectString(output[_TSr]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  if (output[_Ide] != null) {
    contents[_Ide] = __expectString(output[_Ide]);
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
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
  if (output[_M] != null) {
    contents[_M] = __strictParseInt32(output[_M]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseInt32(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryWarmPoolConfiguration
 */
const de_WarmPoolConfiguration = (output: any, context: __SerdeContext): WarmPoolConfiguration => {
  const contents: any = {};
  if (output[_MGPC] != null) {
    contents[_MGPC] = __strictParseInt32(output[_MGPC]) as number;
  }
  if (output[_MS] != null) {
    contents[_MS] = __strictParseInt32(output[_MS]) as number;
  }
  if (output[_PS] != null) {
    contents[_PS] = __expectString(output[_PS]);
  }
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_IRP] != null) {
    contents[_IRP] = de_InstanceReusePolicy(output[_IRP], context);
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

const _ = "2011-01-01";
const _A = "Action";
const _AARN = "AlarmARN";
const _AC = "AcceleratorCount";
const _AI = "AttachInstances";
const _AIT = "AllowedInstanceTypes";
const _AIc = "ActivityIds";
const _AIct = "ActivityId";
const _ALB = "AttachLoadBalancers";
const _ALBTG = "AttachLoadBalancerTargetGroups";
const _AM = "AcceleratorManufacturers";
const _AN = "AcceleratorNames";
const _ANl = "AlarmName";
const _APIA = "AssociatePublicIpAddress";
const _AR = "AutoRollback";
const _AS = "AlarmSpecification";
const _ASG = "AutoScalingGroups";
const _ASGARN = "AutoScalingGroupARN";
const _ASGN = "AutoScalingGroupName";
const _ASGNu = "AutoScalingGroupNames";
const _ASGS = "AutoScalingGroupState";
const _ASI = "AutoScalingInstances";
const _ASNT = "AutoScalingNotificationTypes";
const _AT = "AcceleratorTypes";
const _ATMMB = "AcceleratorTotalMemoryMiB";
const _ATS = "AttachTrafficSources";
const _ATd = "AdjustmentType";
const _ATdj = "AdjustmentTypes";
const _AZ = "AvailabilityZones";
const _AZD = "AvailabilityZoneDistribution";
const _AZIP = "AvailabilityZoneImpairmentPolicy";
const _AZv = "AvailabilityZone";
const _Ac = "Activities";
const _Act = "Activity";
const _Al = "Alarms";
const _BDM = "BlockDeviceMappings";
const _BDSA = "BatchDeleteScheduledAction";
const _BEBM = "BaselineEbsBandwidthMbps";
const _BM = "BareMetal";
const _BP = "BurstablePerformance";
const _BPF = "BaselinePerformanceFactors";
const _BPSUGA = "BatchPutScheduledUpdateGroupAction";
const _BT = "BreachThreshold";
const _BTa = "BakeTime";
const _C = "Cpu";
const _CASG = "CreateAutoScalingGroup";
const _CCMS = "CustomizedCapacityMetricSpecification";
const _CD = "CheckpointDelay";
const _CDS = "CapacityDistributionStrategy";
const _CF = "CapacityForecast";
const _CIR = "CancelInstanceRefresh";
const _CLA = "CompleteLifecycleAction";
const _CLC = "CreateLaunchConfiguration";
const _CLMS = "CustomizedLoadMetricSpecification";
const _CLVPCI = "ClassicLinkVPCId";
const _CLVPCSG = "ClassicLinkVPCSecurityGroups";
const _CM = "CpuManufacturers";
const _CMS = "CustomizedMetricSpecification";
const _COUT = "CreateOrUpdateTags";
const _CP = "CheckpointPercentages";
const _CR = "CapacityRebalance";
const _CRI = "CapacityReservationIds";
const _CRP = "CapacityReservationPreference";
const _CRRGA = "CapacityReservationResourceGroupArns";
const _CRS = "CapacityReservationSpecification";
const _CRT = "CapacityReservationTarget";
const _CSMS = "CustomizedScalingMetricSpecification";
const _CT = "CreatedTime";
const _Ca = "Cause";
const _Co = "Context";
const _Coo = "Cooldown";
const _D = "Dimensions";
const _DAL = "DescribeAccountLimits";
const _DASG = "DeleteAutoScalingGroup";
const _DASGe = "DescribeAutoScalingGroups";
const _DASI = "DescribeAutoScalingInstances";
const _DASNT = "DescribeAutoScalingNotificationTypes";
const _DAT = "DescribeAdjustmentTypes";
const _DC = "DesiredCapacity";
const _DCT = "DesiredCapacityType";
const _DCe = "DefaultCooldown";
const _DCes = "DesiredConfiguration";
const _DI = "DetachInstances";
const _DIR = "DescribeInstanceRefreshes";
const _DIW = "DefaultInstanceWarmup";
const _DLB = "DescribeLoadBalancers";
const _DLBTG = "DescribeLoadBalancerTargetGroups";
const _DLBTGe = "DetachLoadBalancerTargetGroups";
const _DLBe = "DetachLoadBalancers";
const _DLC = "DeleteLaunchConfiguration";
const _DLCe = "DescribeLaunchConfigurations";
const _DLH = "DeleteLifecycleHook";
const _DLHT = "DescribeLifecycleHookTypes";
const _DLHe = "DescribeLifecycleHooks";
const _DMC = "DisableMetricsCollection";
const _DMCT = "DescribeMetricCollectionTypes";
const _DN = "DeviceName";
const _DNC = "DeleteNotificationConfiguration";
const _DNCe = "DescribeNotificationConfigurations";
const _DOT = "DeleteOnTermination";
const _DP = "DeletePolicy";
const _DPe = "DescribePolicies";
const _DR = "DefaultResult";
const _DSA = "DeleteScheduledAction";
const _DSAe = "DescribeScalingActivities";
const _DSAes = "DescribeScheduledActions";
const _DSI = "DisableScaleIn";
const _DSPT = "DescribeScalingProcessTypes";
const _DT = "DeleteTags";
const _DTPT = "DescribeTerminationPolicyTypes";
const _DTS = "DescribeTrafficSources";
const _DTSe = "DetachTrafficSources";
const _DTe = "DescribeTags";
const _DWP = "DeleteWarmPool";
const _DWPe = "DescribeWarmPool";
const _De = "Description";
const _Det = "Details";
const _E = "Ebs";
const _EC = "ErrorCode";
const _EIT = "ExcludedInstanceTypes";
const _EIW = "EstimatedInstanceWarmup";
const _EM = "EnabledMetrics";
const _EMC = "EnableMetricsCollection";
const _EMr = "ErrorMessage";
const _EO = "EbsOptimized";
const _EP = "ExecutePolicy";
const _ES = "EnterStandby";
const _ESx = "ExitStandby";
const _ET = "EndTime";
const _En = "Encrypted";
const _Ena = "Enabled";
const _Ex = "Expression";
const _F = "Filters";
const _FD = "ForceDelete";
const _FSA = "FailedScheduledActions";
const _FSUGA = "FailedScheduledUpdateGroupActions";
const _G = "Granularity";
const _GPSF = "GetPredictiveScalingForecast";
const _GT = "GlobalTimeout";
const _Gr = "Granularities";
const _HC = "HonorCooldown";
const _HCGP = "HealthCheckGracePeriod";
const _HCT = "HealthCheckType";
const _HE = "HttpEndpoint";
const _HPRHL = "HttpPutResponseHopLimit";
const _HS = "HealthStatus";
const _HT = "HttpTokens";
const _HTe = "HeartbeatTimeout";
const _I = "Iops";
const _ID = "InstancesDistribution";
const _IDG = "IncludeDeletedGroups";
const _IF = "InstanceFamily";
const _IG = "InstanceGenerations";
const _II = "InstanceIds";
const _IIP = "IamInstanceProfile";
const _IIm = "ImageId";
const _IIn = "InstanceId";
const _IM = "InstanceMonitoring";
const _IMP = "InstanceMaintenancePolicy";
const _IR = "InstanceRequirements";
const _IRI = "InstanceRefreshIds";
const _IRIn = "InstanceRefreshId";
const _IRP = "InstanceReusePolicy";
const _IRn = "InstanceRefreshes";
const _IT = "InstanceType";
const _ITU = "InstancesToUpdate";
const _ITUOR = "InstancesToUpdateOnRollback";
const _IW = "InstanceWarmup";
const _IZHCB = "ImpairedZoneHealthCheckBehavior";
const _Id = "Id";
const _Ide = "Identifier";
const _In = "Instances";
const _K = "Key";
const _KI = "KernelId";
const _KN = "KeyName";
const _L = "Label";
const _LAR = "LifecycleActionResult";
const _LAT = "LifecycleActionToken";
const _LB = "LoadBalancers";
const _LBN = "LoadBalancerNames";
const _LBNo = "LoadBalancerName";
const _LBTG = "LoadBalancerTargetGroups";
const _LBTGARN = "LoadBalancerTargetGroupARN";
const _LC = "LaunchConfigurations";
const _LCARN = "LaunchConfigurationARN";
const _LCN = "LaunchConfigurationName";
const _LCNa = "LaunchConfigurationNames";
const _LF = "LoadForecast";
const _LH = "LifecycleHooks";
const _LHN = "LifecycleHookName";
const _LHNi = "LifecycleHookNames";
const _LHSL = "LifecycleHookSpecificationList";
const _LHT = "LifecycleHookTypes";
const _LPP = "LivePoolProgress";
const _LS = "LocalStorage";
const _LST = "LocalStorageTypes";
const _LSi = "LifecycleState";
const _LT = "LaunchTemplate";
const _LTI = "LaunchTemplateId";
const _LTN = "LaunchTemplateName";
const _LTS = "LaunchTemplateSpecification";
const _LTi = "LifecycleTransition";
const _M = "Min";
const _MAM = "MinAdjustmentMagnitude";
const _MAS = "MinAdjustmentStep";
const _MAT = "MetricAggregationType";
const _MCB = "MaxCapacityBuffer";
const _MCBB = "MaxCapacityBreachBehavior";
const _MDQ = "MetricDataQueries";
const _MGBPVC = "MemoryGiBPerVCpu";
const _MGPC = "MaxGroupPreparedCapacity";
const _MHP = "MinHealthyPercentage";
const _MHPa = "MaxHealthyPercentage";
const _MIL = "MaxInstanceLifetime";
const _MILB = "MetricIntervalLowerBound";
const _MIP = "MixedInstancesPolicy";
const _MIUB = "MetricIntervalUpperBound";
const _MMB = "MemoryMiB";
const _MN = "MetricName";
const _MNOASG = "MaxNumberOfAutoScalingGroups";
const _MNOLC = "MaxNumberOfLaunchConfigurations";
const _MO = "MetadataOptions";
const _MR = "MaxRecords";
const _MS = "MinSize";
const _MSPAPOOODP = "MaxSpotPriceAsPercentageOfOptimalOnDemandPrice";
const _MSa = "MaxSize";
const _MSe = "MetricStat";
const _MSet = "MetricSpecifications";
const _MSetr = "MetricSpecification";
const _MV = "MetricValue";
const _Ma = "Max";
const _Me = "Metrics";
const _Met = "Metric";
const _Mo = "Mode";
const _N = "Namespace";
const _NBG = "NetworkBandwidthGbps";
const _NC = "NotificationConfigurations";
const _ND = "NoDevice";
const _NIC = "NetworkInterfaceCount";
const _NIPFSI = "NewInstancesProtectedFromScaleIn";
const _NM = "NotificationMetadata";
const _NOASG = "NumberOfAutoScalingGroups";
const _NOLC = "NumberOfLaunchConfigurations";
const _NT = "NextToken";
const _NTARN = "NotificationTargetARN";
const _NTo = "NotificationTypes";
const _NTot = "NotificationType";
const _Na = "Name";
const _O = "Overrides";
const _ODAS = "OnDemandAllocationStrategy";
const _ODBC = "OnDemandBaseCapacity";
const _ODMPPOLP = "OnDemandMaxPricePercentageOverLowestPrice";
const _ODPABC = "OnDemandPercentageAboveBaseCapacity";
const _P = "Period";
const _PAL = "PropagateAtLaunch";
const _PARN = "PolicyARN";
const _PC = "PredictedCapacity";
const _PCOR = "PercentageCompleteOnRollback";
const _PCe = "PercentageComplete";
const _PD = "ProgressDetails";
const _PDOR = "ProgressDetailsOnRollback";
const _PFSI = "ProtectedFromScaleIn";
const _PG = "PlacementGroup";
const _PLH = "PutLifecycleHook";
const _PLMS = "PredefinedLoadMetricSpecification";
const _PMPS = "PredefinedMetricPairSpecification";
const _PMS = "PredefinedMetricSpecification";
const _PMT = "PredefinedMetricType";
const _PN = "PolicyName";
const _PNC = "PutNotificationConfiguration";
const _PNo = "PolicyNames";
const _PNr = "ProcessName";
const _PS = "PoolState";
const _PSC = "PredictiveScalingConfiguration";
const _PSMS = "PredefinedScalingMetricSpecification";
const _PSP = "PutScalingPolicy";
const _PSUGA = "PutScheduledUpdateGroupAction";
const _PT = "PlacementTenancy";
const _PTo = "PolicyTypes";
const _PTol = "PolicyType";
const _PWP = "PutWarmPool";
const _Pr = "Preferences";
const _Pro = "Progress";
const _Proc = "Processes";
const _R = "References";
const _RARN = "RoleARN";
const _RD = "ReturnData";
const _RDo = "RollbackDetails";
const _RHS = "RequireHibernateSupport";
const _RI = "RamdiskId";
const _RIR = "RollbackInstanceRefresh";
const _RIe = "ResourceId";
const _RL = "ResourceLabel";
const _RLAH = "RecordLifecycleActionHeartbeat";
const _ROSI = "ReuseOnScaleIn";
const _RP = "ResumeProcesses";
const _RR = "RollbackReason";
const _RST = "RollbackStartTime";
const _RT = "ResourceType";
const _Re = "Recurrence";
const _Ref = "Reference";
const _S = "Statistic";
const _SA = "ScalingAdjustment";
const _SAARN = "ScheduledActionARN";
const _SAN = "ScheduledActionNames";
const _SANc = "ScheduledActionName";
const _SAS = "SpotAllocationStrategy";
const _SAt = "StepAdjustments";
const _SBT = "SchedulingBufferTime";
const _SC = "StatusCode";
const _SDC = "SetDesiredCapacity";
const _SDDC = "ShouldDecrementDesiredCapacity";
const _SG = "SecurityGroups";
const _SI = "SnapshotId";
const _SIH = "SetInstanceHealth";
const _SIP = "SetInstanceProtection";
const _SIPI = "ScaleInProtectedInstances";
const _SIPp = "SpotInstancePools";
const _SIR = "StartInstanceRefresh";
const _SIt = "StandbyInstances";
const _SLRARN = "ServiceLinkedRoleARN";
const _SM = "SkipMatching";
const _SMP = "SpotMaxPrice";
const _SMPPOLP = "SpotMaxPricePercentageOverLowestPrice";
const _SMt = "StatusMessage";
const _SP = "SuspendProcesses";
const _SPc = "ScalingProcesses";
const _SPca = "ScalingPolicies";
const _SPp = "SpotPrice";
const _SPu = "SuspendedProcesses";
const _SR = "StatusReason";
const _SRGP = "ShouldRespectGracePeriod";
const _SRu = "SuspensionReason";
const _ST = "StartTime";
const _SUGA = "ScheduledUpdateGroupActions";
const _SZSV = "SkipZonalShiftValidation";
const _St = "Stat";
const _Sta = "Status";
const _Stat = "State";
const _Str = "Strategy";
const _T = "Tags";
const _TARN = "TopicARN";
const _TGARN = "TargetGroupARNs";
const _TIIASG = "TerminateInstanceInAutoScalingGroup";
const _TLSGB = "TotalLocalStorageGB";
const _TP = "TerminationPolicies";
const _TPT = "TerminationPolicyTypes";
const _TS = "TrafficSources";
const _TST = "TrafficSourceType";
const _TSr = "TrafficSource";
const _TTC = "TargetTrackingConfiguration";
const _TV = "TargetValue";
const _TZ = "TimeZone";
const _Th = "Throughput";
const _Ti = "Time";
const _Tim = "Timestamps";
const _Ty = "Type";
const _U = "Unit";
const _UASG = "UpdateAutoScalingGroup";
const _UD = "UserData";
const _UT = "UpdateTime";
const _V = "Version";
const _VCC = "VCpuCount";
const _VN = "VirtualName";
const _VPCZI = "VPCZoneIdentifier";
const _VS = "VolumeSize";
const _VT = "VolumeType";
const _Va = "Values";
const _Val = "Value";
const _WC = "WeightedCapacity";
const _WPC = "WarmPoolConfiguration";
const _WPP = "WarmPoolProgress";
const _WPS = "WarmPoolSize";
const _ZSE = "ZonalShiftEnabled";
const _i = "item";
const _m = "message";
const _me = "member";

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
