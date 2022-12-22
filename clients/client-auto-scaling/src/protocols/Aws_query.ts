// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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

export const serializeAws_queryAttachInstancesCommand = async (
  input: AttachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachInstancesQuery(input, context),
    Action: "AttachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachLoadBalancersCommand = async (
  input: AttachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancersType(input, context),
    Action: "AttachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (
  input: AttachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancerTargetGroupsType(input, context),
    Action: "AttachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachTrafficSourcesCommand = async (
  input: AttachTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachTrafficSourcesType(input, context),
    Action: "AttachTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchDeleteScheduledActionCommand = async (
  input: BatchDeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchDeleteScheduledActionType(input, context),
    Action: "BatchDeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (
  input: BatchPutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchPutScheduledUpdateGroupActionType(input, context),
    Action: "BatchPutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCancelInstanceRefreshCommand = async (
  input: CancelInstanceRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCancelInstanceRefreshType(input, context),
    Action: "CancelInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCompleteLifecycleActionCommand = async (
  input: CompleteLifecycleActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCompleteLifecycleActionType(input, context),
    Action: "CompleteLifecycleAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAutoScalingGroupCommand = async (
  input: CreateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAutoScalingGroupType(input, context),
    Action: "CreateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLaunchConfigurationCommand = async (
  input: CreateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLaunchConfigurationType(input, context),
    Action: "CreateLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateOrUpdateTagsCommand = async (
  input: CreateOrUpdateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateOrUpdateTagsType(input, context),
    Action: "CreateOrUpdateTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAutoScalingGroupCommand = async (
  input: DeleteAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAutoScalingGroupType(input, context),
    Action: "DeleteAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLaunchConfigurationCommand = async (
  input: DeleteLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNameType(input, context),
    Action: "DeleteLaunchConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLifecycleHookCommand = async (
  input: DeleteLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLifecycleHookType(input, context),
    Action: "DeleteLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteNotificationConfigurationCommand = async (
  input: DeleteNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteNotificationConfigurationType(input, context),
    Action: "DeleteNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePolicyType(input, context),
    Action: "DeletePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteScheduledActionType(input, context),
    Action: "DeleteScheduledAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTagsType(input, context),
    Action: "DeleteTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteWarmPoolCommand = async (
  input: DeleteWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteWarmPoolType(input, context),
    Action: "DeleteWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountLimits",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAdjustmentTypesCommand = async (
  input: DescribeAdjustmentTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAdjustmentTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingGroupsCommand = async (
  input: DescribeAutoScalingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAutoScalingGroupNamesType(input, context),
    Action: "DescribeAutoScalingGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingInstancesCommand = async (
  input: DescribeAutoScalingInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAutoScalingInstancesType(input, context),
    Action: "DescribeAutoScalingInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (
  input: DescribeAutoScalingNotificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAutoScalingNotificationTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeInstanceRefreshesCommand = async (
  input: DescribeInstanceRefreshesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeInstanceRefreshesType(input, context),
    Action: "DescribeInstanceRefreshes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLaunchConfigurationsCommand = async (
  input: DescribeLaunchConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNamesType(input, context),
    Action: "DescribeLaunchConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLifecycleHooksCommand = async (
  input: DescribeLifecycleHooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLifecycleHooksType(input, context),
    Action: "DescribeLifecycleHooks",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLifecycleHookTypesCommand = async (
  input: DescribeLifecycleHookTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeLifecycleHookTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancersRequest(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerTargetGroupsRequest(input, context),
    Action: "DescribeLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeMetricCollectionTypesCommand = async (
  input: DescribeMetricCollectionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeMetricCollectionTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeNotificationConfigurationsCommand = async (
  input: DescribeNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeNotificationConfigurationsType(input, context),
    Action: "DescribeNotificationConfigurations",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePoliciesCommand = async (
  input: DescribePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePoliciesType(input, context),
    Action: "DescribePolicies",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScalingActivitiesType(input, context),
    Action: "DescribeScalingActivities",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingProcessTypesCommand = async (
  input: DescribeScalingProcessTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeScalingProcessTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScheduledActionsType(input, context),
    Action: "DescribeScheduledActions",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsType(input, context),
    Action: "DescribeTags",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTerminationPolicyTypesCommand = async (
  input: DescribeTerminationPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeTerminationPolicyTypes",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTrafficSourcesCommand = async (
  input: DescribeTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTrafficSourcesRequest(input, context),
    Action: "DescribeTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeWarmPoolCommand = async (
  input: DescribeWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeWarmPoolType(input, context),
    Action: "DescribeWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachInstancesCommand = async (
  input: DetachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachInstancesQuery(input, context),
    Action: "DetachInstances",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachLoadBalancersCommand = async (
  input: DetachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancersType(input, context),
    Action: "DetachLoadBalancers",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (
  input: DetachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancerTargetGroupsType(input, context),
    Action: "DetachLoadBalancerTargetGroups",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachTrafficSourcesCommand = async (
  input: DetachTrafficSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachTrafficSourcesType(input, context),
    Action: "DetachTrafficSources",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableMetricsCollectionCommand = async (
  input: DisableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableMetricsCollectionQuery(input, context),
    Action: "DisableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableMetricsCollectionCommand = async (
  input: EnableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableMetricsCollectionQuery(input, context),
    Action: "EnableMetricsCollection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnterStandbyCommand = async (
  input: EnterStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnterStandbyQuery(input, context),
    Action: "EnterStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryExecutePolicyCommand = async (
  input: ExecutePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExecutePolicyType(input, context),
    Action: "ExecutePolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryExitStandbyCommand = async (
  input: ExitStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExitStandbyQuery(input, context),
    Action: "ExitStandby",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetPredictiveScalingForecastCommand = async (
  input: GetPredictiveScalingForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPredictiveScalingForecastType(input, context),
    Action: "GetPredictiveScalingForecast",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutLifecycleHookCommand = async (
  input: PutLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutLifecycleHookType(input, context),
    Action: "PutLifecycleHook",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutNotificationConfigurationCommand = async (
  input: PutNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutNotificationConfigurationType(input, context),
    Action: "PutNotificationConfiguration",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScalingPolicyType(input, context),
    Action: "PutScalingPolicy",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutScheduledUpdateGroupActionCommand = async (
  input: PutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScheduledUpdateGroupActionType(input, context),
    Action: "PutScheduledUpdateGroupAction",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutWarmPoolCommand = async (
  input: PutWarmPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutWarmPoolType(input, context),
    Action: "PutWarmPool",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRecordLifecycleActionHeartbeatCommand = async (
  input: RecordLifecycleActionHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRecordLifecycleActionHeartbeatType(input, context),
    Action: "RecordLifecycleActionHeartbeat",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResumeProcessesCommand = async (
  input: ResumeProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "ResumeProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetDesiredCapacityCommand = async (
  input: SetDesiredCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetDesiredCapacityType(input, context),
    Action: "SetDesiredCapacity",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetInstanceHealthCommand = async (
  input: SetInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceHealthQuery(input, context),
    Action: "SetInstanceHealth",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetInstanceProtectionCommand = async (
  input: SetInstanceProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceProtectionQuery(input, context),
    Action: "SetInstanceProtection",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartInstanceRefreshCommand = async (
  input: StartInstanceRefreshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartInstanceRefreshType(input, context),
    Action: "StartInstanceRefresh",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySuspendProcessesCommand = async (
  input: SuspendProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "SuspendProcesses",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (
  input: TerminateInstanceInAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTerminateInstanceInAutoScalingGroupType(input, context),
    Action: "TerminateInstanceInAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAutoScalingGroupCommand = async (
  input: UpdateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAutoScalingGroupType(input, context),
    Action: "UpdateAutoScalingGroup",
    Version: "2011-01-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAttachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachInstancesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAttachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancersResultType(data.AttachLoadBalancersResult, context);
  const response: AttachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachLoadBalancersCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancerTargetGroupsResultType(
    data.AttachLoadBalancerTargetGroupsResult,
    context
  );
  const response: AttachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryAttachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAttachTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachTrafficSourcesResultType(data.AttachTrafficSourcesResult, context);
  const response: AttachTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachTrafficSourcesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchDeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchDeleteScheduledActionAnswer(data.BatchDeleteScheduledActionResult, context);
  const response: BatchDeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchDeleteScheduledActionCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer(
    data.BatchPutScheduledUpdateGroupActionResult,
    context
  );
  const response: BatchPutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError = async (
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
      throw await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCancelInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCancelInstanceRefreshCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCancelInstanceRefreshAnswer(data.CancelInstanceRefreshResult, context);
  const response: CancelInstanceRefreshCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCancelInstanceRefreshCommandError = async (
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
      throw await deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCompleteLifecycleActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCompleteLifecycleActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCompleteLifecycleActionAnswer(data.CompleteLifecycleActionResult, context);
  const response: CompleteLifecycleActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCompleteLifecycleActionCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAutoScalingGroupCommandError = async (
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
      throw await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLaunchConfigurationCommandError = async (
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
      throw await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateOrUpdateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateOrUpdateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateOrUpdateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateOrUpdateTagsCommandError = async (
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
      throw await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAutoScalingGroupCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLaunchConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLaunchConfigurationCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLifecycleHookAnswer(data.DeleteLifecycleHookResult, context);
  const response: DeleteLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLifecycleHookCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteNotificationConfigurationCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePolicyCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteScheduledActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteScheduledActionCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTagsCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteWarmPoolAnswer(data.DeleteWarmPoolResult, context);
  const response: DeleteWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteWarmPoolCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsAnswer(data.DescribeAccountLimitsResult, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountLimitsCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAdjustmentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAdjustmentTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAdjustmentTypesAnswer(data.DescribeAdjustmentTypesResult, context);
  const response: DescribeAdjustmentTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAdjustmentTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAutoScalingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAutoScalingGroupsType(data.DescribeAutoScalingGroupsResult, context);
  const response: DescribeAutoScalingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingGroupsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAutoScalingInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAutoScalingInstancesType(data.DescribeAutoScalingInstancesResult, context);
  const response: DescribeAutoScalingInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingInstancesCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer(
    data.DescribeAutoScalingNotificationTypesResult,
    context
  );
  const response: DescribeAutoScalingNotificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeInstanceRefreshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceRefreshesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeInstanceRefreshesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeInstanceRefreshesAnswer(data.DescribeInstanceRefreshesResult, context);
  const response: DescribeInstanceRefreshesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeInstanceRefreshesCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLaunchConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLaunchConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryLaunchConfigurationsType(data.DescribeLaunchConfigurationsResult, context);
  const response: DescribeLaunchConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLaunchConfigurationsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLifecycleHooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLifecycleHooksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLifecycleHooksAnswer(data.DescribeLifecycleHooksResult, context);
  const response: DescribeLifecycleHooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLifecycleHooksCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLifecycleHookTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLifecycleHookTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLifecycleHookTypesAnswer(data.DescribeLifecycleHookTypesResult, context);
  const response: DescribeLifecycleHookTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLifecycleHookTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancersResponse(data.DescribeLoadBalancersResult, context);
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancersCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse(
    data.DescribeLoadBalancerTargetGroupsResult,
    context
  );
  const response: DescribeLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeMetricCollectionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeMetricCollectionTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeMetricCollectionTypesAnswer(data.DescribeMetricCollectionTypesResult, context);
  const response: DescribeMetricCollectionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeMetricCollectionTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeNotificationConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeNotificationConfigurationsAnswer(
    data.DescribeNotificationConfigurationsResult,
    context
  );
  const response: DescribeNotificationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeNotificationConfigurationsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPoliciesType(data.DescribePoliciesResult, context);
  const response: DescribePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePoliciesCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryActivitiesType(data.DescribeScalingActivitiesResult, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingActivitiesCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeScalingProcessTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScalingProcessTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryProcessesType(data.DescribeScalingProcessTypesResult, context);
  const response: DescribeScalingProcessTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingProcessTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryScheduledActionsType(data.DescribeScheduledActionsResult, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScheduledActionsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagsType(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTagsCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTerminationPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTerminationPolicyTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTerminationPolicyTypesAnswer(
    data.DescribeTerminationPolicyTypesResult,
    context
  );
  const response: DescribeTerminationPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTerminationPolicyTypesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTrafficSourcesResponse(data.DescribeTrafficSourcesResult, context);
  const response: DescribeTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTrafficSourcesCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDescribeWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeWarmPoolAnswer(data.DescribeWarmPoolResult, context);
  const response: DescribeWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeWarmPoolCommandError = async (
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
      throw await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDetachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachInstancesAnswer(data.DetachInstancesResult, context);
  const response: DetachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachInstancesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDetachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancersResultType(data.DetachLoadBalancersResult, context);
  const response: DetachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachLoadBalancersCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancerTargetGroupsResultType(
    data.DetachLoadBalancerTargetGroupsResult,
    context
  );
  const response: DetachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDetachTrafficSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachTrafficSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDetachTrafficSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachTrafficSourcesResultType(data.DetachTrafficSourcesResult, context);
  const response: DetachTrafficSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachTrafficSourcesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDisableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableMetricsCollectionCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryEnableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableMetricsCollectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableMetricsCollectionCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryEnterStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnterStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnterStandbyAnswer(data.EnterStandbyResult, context);
  const response: EnterStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnterStandbyCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryExecutePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExecutePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecutePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryExecutePolicyCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryExitStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryExitStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExitStandbyAnswer(data.ExitStandbyResult, context);
  const response: ExitStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryExitStandbyCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetPredictiveScalingForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPredictiveScalingForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetPredictiveScalingForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetPredictiveScalingForecastAnswer(data.GetPredictiveScalingForecastResult, context);
  const response: GetPredictiveScalingForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetPredictiveScalingForecastCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPutLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutLifecycleHookAnswer(data.PutLifecycleHookResult, context);
  const response: PutLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutLifecycleHookCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPutNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutNotificationConfigurationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutNotificationConfigurationCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPolicyARNType(data.PutScalingPolicyResult, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutScalingPolicyCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutScheduledUpdateGroupActionCommandError = async (
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
      throw await deserializeAws_queryAlreadyExistsFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryPutWarmPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWarmPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutWarmPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutWarmPoolAnswer(data.PutWarmPoolResult, context);
  const response: PutWarmPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutWarmPoolCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRecordLifecycleActionHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRecordLifecycleActionHeartbeatAnswer(
    data.RecordLifecycleActionHeartbeatResult,
    context
  );
  const response: RecordLifecycleActionHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRecordLifecycleActionHeartbeatCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryResumeProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryResumeProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResumeProcessesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetDesiredCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetDesiredCapacityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDesiredCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetDesiredCapacityCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetInstanceHealthCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetInstanceHealthCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetInstanceProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetInstanceProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetInstanceProtectionAnswer(data.SetInstanceProtectionResult, context);
  const response: SetInstanceProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetInstanceProtectionCommandError = async (
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
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryStartInstanceRefreshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceRefreshCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartInstanceRefreshCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartInstanceRefreshAnswer(data.StartInstanceRefreshResult, context);
  const response: StartInstanceRefreshCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartInstanceRefreshCommandError = async (
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
      throw await deserializeAws_queryInstanceRefreshInProgressFaultResponse(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      throw await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context);
    case "ResourceContention":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySuspendProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySuspendProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SuspendProcessesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySuspendProcessesCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      throw await deserializeAws_queryResourceInUseFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryActivityType(data.TerminateInstanceInAutoScalingGroupResult, context);
  const response: TerminateInstanceInAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryUpdateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUpdateAutoScalingGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAutoScalingGroupCommandError = async (
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
      throw await deserializeAws_queryResourceContentionFaultResponse(parsedOutput, context);
    case "ScalingActivityInProgress":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      throw await deserializeAws_queryScalingActivityInProgressFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      throw await deserializeAws_queryServiceLinkedRoleFailureResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_queryActiveInstanceRefreshNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveInstanceRefreshNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryActiveInstanceRefreshNotFoundFault(body.Error, context);
  const exception = new ActiveInstanceRefreshNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAlreadyExistsFault(body.Error, context);
  const exception = new AlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInstanceRefreshInProgressFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceRefreshInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInstanceRefreshInProgressFault(body.Error, context);
  const exception = new InstanceRefreshInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidNextTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidNextToken(body.Error, context);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededFault(body.Error, context);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceContentionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceContentionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceContentionFault(body.Error, context);
  const exception = new ResourceContentionFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceInUseFault(body.Error, context);
  const exception = new ResourceInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryScalingActivityInProgressFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScalingActivityInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScalingActivityInProgressFault(body.Error, context);
  const exception = new ScalingActivityInProgressFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryServiceLinkedRoleFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceLinkedRoleFailure(body.Error, context);
  const exception = new ServiceLinkedRoleFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryAcceleratorCountRequest = (input: AcceleratorCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const serializeAws_queryAcceleratorManufacturers = (
  input: (AcceleratorManufacturer | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_queryAcceleratorNames = (input: (AcceleratorName | string)[], context: __SerdeContext): any => {
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

const serializeAws_queryAcceleratorTotalMemoryMiBRequest = (
  input: AcceleratorTotalMemoryMiBRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const serializeAws_queryAcceleratorTypes = (input: (AcceleratorType | string)[], context: __SerdeContext): any => {
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

const serializeAws_queryActivityIds = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAllowedInstanceTypes = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAttachInstancesQuery = (input: AttachInstancesQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryAttachLoadBalancersType = (input: AttachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
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

const serializeAws_queryAttachLoadBalancerTargetGroupsType = (
  input: AttachLoadBalancerTargetGroupsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
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

const serializeAws_queryAttachTrafficSourcesType = (input: AttachTrafficSourcesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TrafficSources != null) {
    const memberEntries = serializeAws_queryTrafficSources(input.TrafficSources, context);
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

const serializeAws_queryAutoScalingGroupNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAutoScalingGroupNamesType = (
  input: AutoScalingGroupNamesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupNames != null) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
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
    const memberEntries = serializeAws_queryFilters(input.Filters, context);
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

const serializeAws_queryAutoScalingNotificationTypes = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAvailabilityZones = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryBaselineEbsBandwidthMbpsRequest = (
  input: BaselineEbsBandwidthMbpsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const serializeAws_queryBatchDeleteScheduledActionType = (
  input: BatchDeleteScheduledActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames != null) {
    const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
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

const serializeAws_queryBatchPutScheduledUpdateGroupActionType = (
  input: BatchPutScheduledUpdateGroupActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledUpdateGroupActions != null) {
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequests(
      input.ScheduledUpdateGroupActions,
      context
    );
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

const serializeAws_queryBlockDeviceMapping = (input: BlockDeviceMapping, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.VirtualName != null) {
    entries["VirtualName"] = input.VirtualName;
  }
  if (input.DeviceName != null) {
    entries["DeviceName"] = input.DeviceName;
  }
  if (input.Ebs != null) {
    const memberEntries = serializeAws_queryEbs(input.Ebs, context);
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

const serializeAws_queryBlockDeviceMappings = (input: BlockDeviceMapping[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryBlockDeviceMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCancelInstanceRefreshType = (
  input: CancelInstanceRefreshType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

const serializeAws_queryCheckpointPercentages = (input: number[], context: __SerdeContext): any => {
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

const serializeAws_queryClassicLinkVPCSecurityGroups = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryCompleteLifecycleActionType = (
  input: CompleteLifecycleActionType,
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
  if (input.LifecycleActionResult != null) {
    entries["LifecycleActionResult"] = input.LifecycleActionResult;
  }
  if (input.InstanceId != null) {
    entries["InstanceId"] = input.InstanceId;
  }
  return entries;
};

const serializeAws_queryCpuManufacturers = (input: (CpuManufacturer | string)[], context: __SerdeContext): any => {
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

const serializeAws_queryCreateAutoScalingGroupType = (
  input: CreateAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate != null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
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
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
    if (input.AvailabilityZones?.length === 0) {
      entries.AvailabilityZones = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
    if (input.LoadBalancerNames?.length === 0) {
      entries.LoadBalancerNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
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
    const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
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
    const memberEntries = serializeAws_queryLifecycleHookSpecifications(input.LifecycleHookSpecificationList, context);
    if (input.LifecycleHookSpecificationList?.length === 0) {
      entries.LifecycleHookSpecificationList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookSpecificationList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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
    const memberEntries = serializeAws_queryTrafficSources(input.TrafficSources, context);
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

const serializeAws_queryCreateLaunchConfigurationType = (
  input: CreateLaunchConfigurationType,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_querySecurityGroups(input.SecurityGroups, context);
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
    const memberEntries = serializeAws_queryClassicLinkVPCSecurityGroups(input.ClassicLinkVPCSecurityGroups, context);
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
    const memberEntries = serializeAws_queryBlockDeviceMappings(input.BlockDeviceMappings, context);
    if (input.BlockDeviceMappings?.length === 0) {
      entries.BlockDeviceMappings = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BlockDeviceMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceMonitoring != null) {
    const memberEntries = serializeAws_queryInstanceMonitoring(input.InstanceMonitoring, context);
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
    const memberEntries = serializeAws_queryInstanceMetadataOptions(input.MetadataOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetadataOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateOrUpdateTagsType = (input: CreateOrUpdateTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryCustomizedMetricSpecification = (
  input: CustomizedMetricSpecification,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Dimensions != null) {
    const memberEntries = serializeAws_queryMetricDimensions(input.Dimensions, context);
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
    const memberEntries = serializeAws_queryTargetTrackingMetricDataQueries(input.Metrics, context);
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

const serializeAws_queryDeleteAutoScalingGroupType = (
  input: DeleteAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete != null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};

const serializeAws_queryDeleteLifecycleHookType = (input: DeleteLifecycleHookType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LifecycleHookName != null) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  return entries;
};

const serializeAws_queryDeleteNotificationConfigurationType = (
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

const serializeAws_queryDeletePolicyType = (input: DeletePolicyType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeleteScheduledActionType = (
  input: DeleteScheduledActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName != null) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};

const serializeAws_queryDeleteTagsType = (input: DeleteTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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

const serializeAws_queryDeleteWarmPoolType = (input: DeleteWarmPoolType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete != null) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};

const serializeAws_queryDescribeAutoScalingInstancesType = (
  input: DescribeAutoScalingInstancesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryDescribeInstanceRefreshesType = (
  input: DescribeInstanceRefreshesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceRefreshIds != null) {
    const memberEntries = serializeAws_queryInstanceRefreshIds(input.InstanceRefreshIds, context);
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

const serializeAws_queryDescribeLifecycleHooksType = (
  input: DescribeLifecycleHooksType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookNames != null) {
    const memberEntries = serializeAws_queryLifecycleHookNames(input.LifecycleHookNames, context);
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

const serializeAws_queryDescribeLoadBalancersRequest = (
  input: DescribeLoadBalancersRequest,
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

const serializeAws_queryDescribeLoadBalancerTargetGroupsRequest = (
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

const serializeAws_queryDescribeNotificationConfigurationsType = (
  input: DescribeNotificationConfigurationsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupNames != null) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(input.AutoScalingGroupNames, context);
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

const serializeAws_queryDescribePoliciesType = (input: DescribePoliciesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyNames != null) {
    const memberEntries = serializeAws_queryPolicyNames(input.PolicyNames, context);
    if (input.PolicyNames?.length === 0) {
      entries.PolicyNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicyTypes != null) {
    const memberEntries = serializeAws_queryPolicyTypes(input.PolicyTypes, context);
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

const serializeAws_queryDescribeScalingActivitiesType = (
  input: DescribeScalingActivitiesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActivityIds != null) {
    const memberEntries = serializeAws_queryActivityIds(input.ActivityIds, context);
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

const serializeAws_queryDescribeScheduledActionsType = (
  input: DescribeScheduledActionsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames != null) {
    const memberEntries = serializeAws_queryScheduledActionNames(input.ScheduledActionNames, context);
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

const serializeAws_queryDescribeTagsType = (input: DescribeTagsType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Filters != null) {
    const memberEntries = serializeAws_queryFilters(input.Filters, context);
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

const serializeAws_queryDescribeTrafficSourcesRequest = (
  input: DescribeTrafficSourcesRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_queryDescribeWarmPoolType = (input: DescribeWarmPoolType, context: __SerdeContext): any => {
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

const serializeAws_queryDesiredConfiguration = (input: DesiredConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplate != null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDetachInstancesQuery = (input: DetachInstancesQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryDetachLoadBalancersType = (input: DetachLoadBalancersType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames != null) {
    const memberEntries = serializeAws_queryLoadBalancerNames(input.LoadBalancerNames, context);
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

const serializeAws_queryDetachLoadBalancerTargetGroupsType = (
  input: DetachLoadBalancerTargetGroupsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs != null) {
    const memberEntries = serializeAws_queryTargetGroupARNs(input.TargetGroupARNs, context);
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

const serializeAws_queryDetachTrafficSourcesType = (input: DetachTrafficSourcesType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TrafficSources != null) {
    const memberEntries = serializeAws_queryTrafficSources(input.TrafficSources, context);
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

const serializeAws_queryDisableMetricsCollectionQuery = (
  input: DisableMetricsCollectionQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics != null) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
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

const serializeAws_queryEbs = (input: Ebs, context: __SerdeContext): any => {
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

const serializeAws_queryEnableMetricsCollectionQuery = (
  input: EnableMetricsCollectionQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics != null) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
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

const serializeAws_queryEnterStandbyQuery = (input: EnterStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryExcludedInstanceTypes = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryExecutePolicyType = (input: ExecutePolicyType, context: __SerdeContext): any => {
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

const serializeAws_queryExitStandbyQuery = (input: ExitStandbyQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryFilter = (input: Filter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Values != null) {
    const memberEntries = serializeAws_queryValues(input.Values, context);
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

const serializeAws_queryFilters = (input: Filter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryGetPredictiveScalingForecastType = (
  input: GetPredictiveScalingForecastType,
  context: __SerdeContext
): any => {
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

const serializeAws_queryInstanceGenerations = (
  input: (InstanceGeneration | string)[],
  context: __SerdeContext
): any => {
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

const serializeAws_queryInstanceIds = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryInstanceMetadataOptions = (input: InstanceMetadataOptions, context: __SerdeContext): any => {
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

const serializeAws_queryInstanceMonitoring = (input: InstanceMonitoring, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryInstanceRefreshIds = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryInstanceRequirements = (input: InstanceRequirements, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.VCpuCount != null) {
    const memberEntries = serializeAws_queryVCpuCountRequest(input.VCpuCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `VCpuCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MemoryMiB != null) {
    const memberEntries = serializeAws_queryMemoryMiBRequest(input.MemoryMiB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CpuManufacturers != null) {
    const memberEntries = serializeAws_queryCpuManufacturers(input.CpuManufacturers, context);
    if (input.CpuManufacturers?.length === 0) {
      entries.CpuManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CpuManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MemoryGiBPerVCpu != null) {
    const memberEntries = serializeAws_queryMemoryGiBPerVCpuRequest(input.MemoryGiBPerVCpu, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MemoryGiBPerVCpu.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludedInstanceTypes != null) {
    const memberEntries = serializeAws_queryExcludedInstanceTypes(input.ExcludedInstanceTypes, context);
    if (input.ExcludedInstanceTypes?.length === 0) {
      entries.ExcludedInstanceTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedInstanceTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceGenerations != null) {
    const memberEntries = serializeAws_queryInstanceGenerations(input.InstanceGenerations, context);
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
    const memberEntries = serializeAws_queryNetworkInterfaceCountRequest(input.NetworkInterfaceCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkInterfaceCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LocalStorage != null) {
    entries["LocalStorage"] = input.LocalStorage;
  }
  if (input.LocalStorageTypes != null) {
    const memberEntries = serializeAws_queryLocalStorageTypes(input.LocalStorageTypes, context);
    if (input.LocalStorageTypes?.length === 0) {
      entries.LocalStorageTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LocalStorageTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TotalLocalStorageGB != null) {
    const memberEntries = serializeAws_queryTotalLocalStorageGBRequest(input.TotalLocalStorageGB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TotalLocalStorageGB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.BaselineEbsBandwidthMbps != null) {
    const memberEntries = serializeAws_queryBaselineEbsBandwidthMbpsRequest(input.BaselineEbsBandwidthMbps, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BaselineEbsBandwidthMbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorTypes != null) {
    const memberEntries = serializeAws_queryAcceleratorTypes(input.AcceleratorTypes, context);
    if (input.AcceleratorTypes?.length === 0) {
      entries.AcceleratorTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorCount != null) {
    const memberEntries = serializeAws_queryAcceleratorCountRequest(input.AcceleratorCount, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorCount.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorManufacturers != null) {
    const memberEntries = serializeAws_queryAcceleratorManufacturers(input.AcceleratorManufacturers, context);
    if (input.AcceleratorManufacturers?.length === 0) {
      entries.AcceleratorManufacturers = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorManufacturers.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorNames != null) {
    const memberEntries = serializeAws_queryAcceleratorNames(input.AcceleratorNames, context);
    if (input.AcceleratorNames?.length === 0) {
      entries.AcceleratorNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AcceleratorTotalMemoryMiB != null) {
    const memberEntries = serializeAws_queryAcceleratorTotalMemoryMiBRequest(input.AcceleratorTotalMemoryMiB, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AcceleratorTotalMemoryMiB.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NetworkBandwidthGbps != null) {
    const memberEntries = serializeAws_queryNetworkBandwidthGbpsRequest(input.NetworkBandwidthGbps, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NetworkBandwidthGbps.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AllowedInstanceTypes != null) {
    const memberEntries = serializeAws_queryAllowedInstanceTypes(input.AllowedInstanceTypes, context);
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

const serializeAws_queryInstanceReusePolicy = (input: InstanceReusePolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ReuseOnScaleIn != null) {
    entries["ReuseOnScaleIn"] = input.ReuseOnScaleIn;
  }
  return entries;
};

const serializeAws_queryInstancesDistribution = (input: InstancesDistribution, context: __SerdeContext): any => {
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

const serializeAws_queryLaunchConfigurationNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLaunchConfigurationNamesType = (
  input: LaunchConfigurationNamesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LaunchConfigurationNames != null) {
    const memberEntries = serializeAws_queryLaunchConfigurationNames(input.LaunchConfigurationNames, context);
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

const serializeAws_queryLaunchConfigurationNameType = (
  input: LaunchConfigurationNameType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  return entries;
};

const serializeAws_queryLaunchTemplate = (input: LaunchTemplate, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplateSpecification != null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Overrides != null) {
    const memberEntries = serializeAws_queryOverrides(input.Overrides, context);
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

const serializeAws_queryLaunchTemplateOverrides = (input: LaunchTemplateOverrides, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceType != null) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity != null) {
    entries["WeightedCapacity"] = input.WeightedCapacity;
  }
  if (input.LaunchTemplateSpecification != null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplateSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceRequirements != null) {
    const memberEntries = serializeAws_queryInstanceRequirements(input.InstanceRequirements, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceRequirements.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryLaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
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

const serializeAws_queryLifecycleHookNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLifecycleHookSpecification = (
  input: LifecycleHookSpecification,
  context: __SerdeContext
): any => {
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

const serializeAws_queryLifecycleHookSpecifications = (
  input: LifecycleHookSpecification[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLifecycleHookSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryLocalStorageTypes = (input: (LocalStorageType | string)[], context: __SerdeContext): any => {
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

const serializeAws_queryMemoryGiBPerVCpuRequest = (input: MemoryGiBPerVCpuRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

const serializeAws_queryMemoryMiBRequest = (input: MemoryMiBRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const serializeAws_queryMetric = (input: Metric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = serializeAws_queryMetricDimensions(input.Dimensions, context);
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

const serializeAws_queryMetricDataQueries = (input: MetricDataQuery[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDataQuery = (input: MetricDataQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Expression != null) {
    entries["Expression"] = input.Expression;
  }
  if (input.MetricStat != null) {
    const memberEntries = serializeAws_queryMetricStat(input.MetricStat, context);
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

const serializeAws_queryMetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryMetricDimensions = (input: MetricDimension[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetrics = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryMetricStat = (input: MetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Metric != null) {
    const memberEntries = serializeAws_queryMetric(input.Metric, context);
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

const serializeAws_queryMixedInstancesPolicy = (input: MixedInstancesPolicy, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.LaunchTemplate != null) {
    const memberEntries = serializeAws_queryLaunchTemplate(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstancesDistribution != null) {
    const memberEntries = serializeAws_queryInstancesDistribution(input.InstancesDistribution, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstancesDistribution.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryNetworkBandwidthGbpsRequest = (
  input: NetworkBandwidthGbpsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

const serializeAws_queryNetworkInterfaceCountRequest = (
  input: NetworkInterfaceCountRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const serializeAws_queryOverrides = (input: LaunchTemplateOverrides[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryLaunchTemplateOverrides(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPolicyTypes = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPredefinedMetricSpecification = (
  input: PredefinedMetricSpecification,
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

const serializeAws_queryPredictiveScalingConfiguration = (
  input: PredictiveScalingConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricSpecifications != null) {
    const memberEntries = serializeAws_queryPredictiveScalingMetricSpecifications(input.MetricSpecifications, context);
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

const serializeAws_queryPredictiveScalingCustomizedCapacityMetric = (
  input: PredictiveScalingCustomizedCapacityMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
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

const serializeAws_queryPredictiveScalingCustomizedLoadMetric = (
  input: PredictiveScalingCustomizedLoadMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
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

const serializeAws_queryPredictiveScalingCustomizedScalingMetric = (
  input: PredictiveScalingCustomizedScalingMetric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
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

const serializeAws_queryPredictiveScalingMetricSpecification = (
  input: PredictiveScalingMetricSpecification,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TargetValue != null) {
    entries["TargetValue"] = __serializeFloat(input.TargetValue);
  }
  if (input.PredefinedMetricPairSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedMetricPair(
      input.PredefinedMetricPairSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricPairSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedScalingMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedScalingMetric(
      input.PredefinedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PredefinedLoadMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingPredefinedLoadMetric(
      input.PredefinedLoadMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedScalingMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingCustomizedScalingMetric(
      input.CustomizedScalingMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedScalingMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedLoadMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingCustomizedLoadMetric(
      input.CustomizedLoadMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedLoadMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedCapacityMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredictiveScalingCustomizedCapacityMetric(
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

const serializeAws_queryPredictiveScalingMetricSpecifications = (
  input: PredictiveScalingMetricSpecification[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPredictiveScalingMetricSpecification(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPredictiveScalingPredefinedLoadMetric = (
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

const serializeAws_queryPredictiveScalingPredefinedMetricPair = (
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

const serializeAws_queryPredictiveScalingPredefinedScalingMetric = (
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

const serializeAws_queryProcessNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryPutLifecycleHookType = (input: PutLifecycleHookType, context: __SerdeContext): any => {
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

const serializeAws_queryPutNotificationConfigurationType = (
  input: PutNotificationConfigurationType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN != null) {
    entries["TopicARN"] = input.TopicARN;
  }
  if (input.NotificationTypes != null) {
    const memberEntries = serializeAws_queryAutoScalingNotificationTypes(input.NotificationTypes, context);
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

const serializeAws_queryPutScalingPolicyType = (input: PutScalingPolicyType, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryStepAdjustments(input.StepAdjustments, context);
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
    const memberEntries = serializeAws_queryTargetTrackingConfiguration(input.TargetTrackingConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetTrackingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Enabled != null) {
    entries["Enabled"] = input.Enabled;
  }
  if (input.PredictiveScalingConfiguration != null) {
    const memberEntries = serializeAws_queryPredictiveScalingConfiguration(
      input.PredictiveScalingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredictiveScalingConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutScheduledUpdateGroupActionType = (
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

const serializeAws_queryPutWarmPoolType = (input: PutWarmPoolType, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryInstanceReusePolicy(input.InstanceReusePolicy, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceReusePolicy.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRecordLifecycleActionHeartbeatType = (
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

const serializeAws_queryRefreshPreferences = (input: RefreshPreferences, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MinHealthyPercentage != null) {
    entries["MinHealthyPercentage"] = input.MinHealthyPercentage;
  }
  if (input.InstanceWarmup != null) {
    entries["InstanceWarmup"] = input.InstanceWarmup;
  }
  if (input.CheckpointPercentages != null) {
    const memberEntries = serializeAws_queryCheckpointPercentages(input.CheckpointPercentages, context);
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
  return entries;
};

const serializeAws_queryScalingProcessQuery = (input: ScalingProcessQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScalingProcesses != null) {
    const memberEntries = serializeAws_queryProcessNames(input.ScalingProcesses, context);
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

const serializeAws_queryScheduledActionNames = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryScheduledUpdateGroupActionRequest = (
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

const serializeAws_queryScheduledUpdateGroupActionRequests = (
  input: ScheduledUpdateGroupActionRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequest(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySecurityGroups = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_querySetDesiredCapacityType = (input: SetDesiredCapacityType, context: __SerdeContext): any => {
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

const serializeAws_querySetInstanceHealthQuery = (input: SetInstanceHealthQuery, context: __SerdeContext): any => {
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

const serializeAws_querySetInstanceProtectionQuery = (
  input: SetInstanceProtectionQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceIds != null) {
    const memberEntries = serializeAws_queryInstanceIds(input.InstanceIds, context);
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

const serializeAws_queryStartInstanceRefreshType = (input: StartInstanceRefreshType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Strategy != null) {
    entries["Strategy"] = input.Strategy;
  }
  if (input.DesiredConfiguration != null) {
    const memberEntries = serializeAws_queryDesiredConfiguration(input.DesiredConfiguration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DesiredConfiguration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Preferences != null) {
    const memberEntries = serializeAws_queryRefreshPreferences(input.Preferences, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Preferences.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryStepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
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

const serializeAws_queryStepAdjustments = (input: StepAdjustment[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryStepAdjustment(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
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

const serializeAws_queryTags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupARNs = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PredefinedMetricSpecification != null) {
    const memberEntries = serializeAws_queryPredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CustomizedMetricSpecification != null) {
    const memberEntries = serializeAws_queryCustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
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

const serializeAws_queryTargetTrackingMetricDataQueries = (
  input: TargetTrackingMetricDataQuery[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTargetTrackingMetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetTrackingMetricDataQuery = (
  input: TargetTrackingMetricDataQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Expression != null) {
    entries["Expression"] = input.Expression;
  }
  if (input.MetricStat != null) {
    const memberEntries = serializeAws_queryTargetTrackingMetricStat(input.MetricStat, context);
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

const serializeAws_queryTargetTrackingMetricStat = (input: TargetTrackingMetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Metric != null) {
    const memberEntries = serializeAws_queryMetric(input.Metric, context);
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

const serializeAws_queryTerminateInstanceInAutoScalingGroupType = (
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

const serializeAws_queryTerminationPolicies = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTotalLocalStorageGBRequest = (
  input: TotalLocalStorageGBRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = __serializeFloat(input.Min);
  }
  if (input.Max != null) {
    entries["Max"] = __serializeFloat(input.Max);
  }
  return entries;
};

const serializeAws_queryTrafficSourceIdentifier = (input: TrafficSourceIdentifier, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Identifier != null) {
    entries["Identifier"] = input.Identifier;
  }
  return entries;
};

const serializeAws_queryTrafficSources = (input: TrafficSourceIdentifier[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTrafficSourceIdentifier(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryUpdateAutoScalingGroupType = (
  input: UpdateAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName != null) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LaunchConfigurationName != null) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate != null) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(input.LaunchTemplate, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MixedInstancesPolicy != null) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(input.MixedInstancesPolicy, context);
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
    const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
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
    const memberEntries = serializeAws_queryTerminationPolicies(input.TerminationPolicies, context);
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

const serializeAws_queryValues = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryVCpuCountRequest = (input: VCpuCountRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Min != null) {
    entries["Min"] = input.Min;
  }
  if (input.Max != null) {
    entries["Max"] = input.Max;
  }
  return entries;
};

const deserializeAws_queryAcceleratorCountRequest = (output: any, context: __SerdeContext): AcceleratorCountRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryAcceleratorManufacturers = (
  output: any,
  context: __SerdeContext
): (AcceleratorManufacturer | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAcceleratorNames = (output: any, context: __SerdeContext): (AcceleratorName | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAcceleratorTotalMemoryMiBRequest = (
  output: any,
  context: __SerdeContext
): AcceleratorTotalMemoryMiBRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryAcceleratorTypes = (output: any, context: __SerdeContext): (AcceleratorType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryActiveInstanceRefreshNotFoundFault = (
  output: any,
  context: __SerdeContext
): ActiveInstanceRefreshNotFoundFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryActivities = (output: any, context: __SerdeContext): Activity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryActivity(entry, context);
    });
};

const deserializeAws_queryActivitiesType = (output: any, context: __SerdeContext): ActivitiesType => {
  const contents: any = {
    Activities: undefined,
    NextToken: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryActivity = (output: any, context: __SerdeContext): Activity => {
  const contents: any = {
    ActivityId: undefined,
    AutoScalingGroupName: undefined,
    Description: undefined,
    Cause: undefined,
    StartTime: undefined,
    EndTime: undefined,
    StatusCode: undefined,
    StatusMessage: undefined,
    Progress: undefined,
    Details: undefined,
    AutoScalingGroupState: undefined,
    AutoScalingGroupARN: undefined,
  };
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
    contents.StartTime = __expectNonNull(__parseRfc3339DateTime(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTime(output["EndTime"]));
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

const deserializeAws_queryActivityType = (output: any, context: __SerdeContext): ActivityType => {
  const contents: any = {
    Activity: undefined,
  };
  if (output["Activity"] !== undefined) {
    contents.Activity = deserializeAws_queryActivity(output["Activity"], context);
  }
  return contents;
};

const deserializeAws_queryAdjustmentType = (output: any, context: __SerdeContext): AdjustmentType => {
  const contents: any = {
    AdjustmentType: undefined,
  };
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = __expectString(output["AdjustmentType"]);
  }
  return contents;
};

const deserializeAws_queryAdjustmentTypes = (output: any, context: __SerdeContext): AdjustmentType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAdjustmentType(entry, context);
    });
};

const deserializeAws_queryAlarm = (output: any, context: __SerdeContext): Alarm => {
  const contents: any = {
    AlarmName: undefined,
    AlarmARN: undefined,
  };
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmARN"] !== undefined) {
    contents.AlarmARN = __expectString(output["AlarmARN"]);
  }
  return contents;
};

const deserializeAws_queryAlarms = (output: any, context: __SerdeContext): Alarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAlarm(entry, context);
    });
};

const deserializeAws_queryAllowedInstanceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAlreadyExistsFault = (output: any, context: __SerdeContext): AlreadyExistsFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryAttachLoadBalancersResultType = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancersResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryAttachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTargetGroupsResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryAttachTrafficSourcesResultType = (
  output: any,
  context: __SerdeContext
): AttachTrafficSourcesResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryAutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  const contents: any = {
    AutoScalingGroupName: undefined,
    AutoScalingGroupARN: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    MixedInstancesPolicy: undefined,
    MinSize: undefined,
    MaxSize: undefined,
    DesiredCapacity: undefined,
    PredictedCapacity: undefined,
    DefaultCooldown: undefined,
    AvailabilityZones: undefined,
    LoadBalancerNames: undefined,
    TargetGroupARNs: undefined,
    HealthCheckType: undefined,
    HealthCheckGracePeriod: undefined,
    Instances: undefined,
    CreatedTime: undefined,
    SuspendedProcesses: undefined,
    PlacementGroup: undefined,
    VPCZoneIdentifier: undefined,
    EnabledMetrics: undefined,
    Status: undefined,
    Tags: undefined,
    TerminationPolicies: undefined,
    NewInstancesProtectedFromScaleIn: undefined,
    ServiceLinkedRoleARN: undefined,
    MaxInstanceLifetime: undefined,
    CapacityRebalance: undefined,
    WarmPoolConfiguration: undefined,
    WarmPoolSize: undefined,
    Context: undefined,
    DesiredCapacityType: undefined,
    DefaultInstanceWarmup: undefined,
    TrafficSources: undefined,
  };
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
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = deserializeAws_queryMixedInstancesPolicy(output["MixedInstancesPolicy"], context);
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
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output.LoadBalancerNames === "") {
    contents.LoadBalancerNames = [];
  } else if (output["LoadBalancerNames"] !== undefined && output["LoadBalancerNames"]["member"] !== undefined) {
    contents.LoadBalancerNames = deserializeAws_queryLoadBalancerNames(
      __getArrayIfSingleItem(output["LoadBalancerNames"]["member"]),
      context
    );
  }
  if (output.TargetGroupARNs === "") {
    contents.TargetGroupARNs = [];
  } else if (output["TargetGroupARNs"] !== undefined && output["TargetGroupARNs"]["member"] !== undefined) {
    contents.TargetGroupARNs = deserializeAws_queryTargetGroupARNs(
      __getArrayIfSingleItem(output["TargetGroupARNs"]["member"]),
      context
    );
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
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
  }
  if (output.SuspendedProcesses === "") {
    contents.SuspendedProcesses = [];
  } else if (output["SuspendedProcesses"] !== undefined && output["SuspendedProcesses"]["member"] !== undefined) {
    contents.SuspendedProcesses = deserializeAws_querySuspendedProcesses(
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
    contents.EnabledMetrics = deserializeAws_queryEnabledMetrics(
      __getArrayIfSingleItem(output["EnabledMetrics"]["member"]),
      context
    );
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output.TerminationPolicies === "") {
    contents.TerminationPolicies = [];
  } else if (output["TerminationPolicies"] !== undefined && output["TerminationPolicies"]["member"] !== undefined) {
    contents.TerminationPolicies = deserializeAws_queryTerminationPolicies(
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
    contents.WarmPoolConfiguration = deserializeAws_queryWarmPoolConfiguration(
      output["WarmPoolConfiguration"],
      context
    );
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
    contents.TrafficSources = deserializeAws_queryTrafficSources(
      __getArrayIfSingleItem(output["TrafficSources"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryAutoScalingGroups = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAutoScalingGroup(entry, context);
    });
};

const deserializeAws_queryAutoScalingGroupsType = (output: any, context: __SerdeContext): AutoScalingGroupsType => {
  const contents: any = {
    AutoScalingGroups: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  } else if (output["AutoScalingGroups"] !== undefined && output["AutoScalingGroups"]["member"] !== undefined) {
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroups(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryAutoScalingInstanceDetails = (
  output: any,
  context: __SerdeContext
): AutoScalingInstanceDetails => {
  const contents: any = {
    InstanceId: undefined,
    InstanceType: undefined,
    AutoScalingGroupName: undefined,
    AvailabilityZone: undefined,
    LifecycleState: undefined,
    HealthStatus: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined,
  };
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
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = __parseBoolean(output["ProtectedFromScaleIn"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  return contents;
};

const deserializeAws_queryAutoScalingInstances = (
  output: any,
  context: __SerdeContext
): AutoScalingInstanceDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryAutoScalingInstanceDetails(entry, context);
    });
};

const deserializeAws_queryAutoScalingInstancesType = (
  output: any,
  context: __SerdeContext
): AutoScalingInstancesType => {
  const contents: any = {
    AutoScalingInstances: undefined,
    NextToken: undefined,
  };
  if (output.AutoScalingInstances === "") {
    contents.AutoScalingInstances = [];
  } else if (output["AutoScalingInstances"] !== undefined && output["AutoScalingInstances"]["member"] !== undefined) {
    contents.AutoScalingInstances = deserializeAws_queryAutoScalingInstances(
      __getArrayIfSingleItem(output["AutoScalingInstances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryAutoScalingNotificationTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryAvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryBaselineEbsBandwidthMbpsRequest = (
  output: any,
  context: __SerdeContext
): BaselineEbsBandwidthMbpsRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryBatchDeleteScheduledActionAnswer = (
  output: any,
  context: __SerdeContext
): BatchDeleteScheduledActionAnswer => {
  const contents: any = {
    FailedScheduledActions: undefined,
  };
  if (output.FailedScheduledActions === "") {
    contents.FailedScheduledActions = [];
  } else if (
    output["FailedScheduledActions"] !== undefined &&
    output["FailedScheduledActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output["FailedScheduledActions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer = (
  output: any,
  context: __SerdeContext
): BatchPutScheduledUpdateGroupActionAnswer => {
  const contents: any = {
    FailedScheduledUpdateGroupActions: undefined,
  };
  if (output.FailedScheduledUpdateGroupActions === "") {
    contents.FailedScheduledUpdateGroupActions = [];
  } else if (
    output["FailedScheduledUpdateGroupActions"] !== undefined &&
    output["FailedScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledUpdateGroupActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(output["FailedScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBlockDeviceMapping = (output: any, context: __SerdeContext): BlockDeviceMapping => {
  const contents: any = {
    VirtualName: undefined,
    DeviceName: undefined,
    Ebs: undefined,
    NoDevice: undefined,
  };
  if (output["VirtualName"] !== undefined) {
    contents.VirtualName = __expectString(output["VirtualName"]);
  }
  if (output["DeviceName"] !== undefined) {
    contents.DeviceName = __expectString(output["DeviceName"]);
  }
  if (output["Ebs"] !== undefined) {
    contents.Ebs = deserializeAws_queryEbs(output["Ebs"], context);
  }
  if (output["NoDevice"] !== undefined) {
    contents.NoDevice = __parseBoolean(output["NoDevice"]);
  }
  return contents;
};

const deserializeAws_queryBlockDeviceMappings = (output: any, context: __SerdeContext): BlockDeviceMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryBlockDeviceMapping(entry, context);
    });
};

const deserializeAws_queryCancelInstanceRefreshAnswer = (
  output: any,
  context: __SerdeContext
): CancelInstanceRefreshAnswer => {
  const contents: any = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  return contents;
};

const deserializeAws_queryCapacityForecast = (output: any, context: __SerdeContext): CapacityForecast => {
  const contents: any = {
    Timestamps: undefined,
    Values: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  } else if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryCheckpointPercentages = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseInt32(entry) as number;
    });
};

const deserializeAws_queryClassicLinkVPCSecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCompleteLifecycleActionAnswer = (
  output: any,
  context: __SerdeContext
): CompleteLifecycleActionAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCpuManufacturers = (output: any, context: __SerdeContext): (CpuManufacturer | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryCustomizedMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedMetricSpecification => {
  const contents: any = {
    MetricName: undefined,
    Namespace: undefined,
    Dimensions: undefined,
    Statistic: undefined,
    Unit: undefined,
    Metrics: undefined,
  };
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryMetricDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
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
    contents.Metrics = deserializeAws_queryTargetTrackingMetricDataQueries(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteLifecycleHookAnswer = (
  output: any,
  context: __SerdeContext
): DeleteLifecycleHookAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteWarmPoolAnswer = (output: any, context: __SerdeContext): DeleteWarmPoolAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsAnswer => {
  const contents: any = {
    MaxNumberOfAutoScalingGroups: undefined,
    MaxNumberOfLaunchConfigurations: undefined,
    NumberOfAutoScalingGroups: undefined,
    NumberOfLaunchConfigurations: undefined,
  };
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

const deserializeAws_queryDescribeAdjustmentTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAdjustmentTypesAnswer => {
  const contents: any = {
    AdjustmentTypes: undefined,
  };
  if (output.AdjustmentTypes === "") {
    contents.AdjustmentTypes = [];
  } else if (output["AdjustmentTypes"] !== undefined && output["AdjustmentTypes"]["member"] !== undefined) {
    contents.AdjustmentTypes = deserializeAws_queryAdjustmentTypes(
      __getArrayIfSingleItem(output["AdjustmentTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingNotificationTypesAnswer => {
  const contents: any = {
    AutoScalingNotificationTypes: undefined,
  };
  if (output.AutoScalingNotificationTypes === "") {
    contents.AutoScalingNotificationTypes = [];
  } else if (
    output["AutoScalingNotificationTypes"] !== undefined &&
    output["AutoScalingNotificationTypes"]["member"] !== undefined
  ) {
    contents.AutoScalingNotificationTypes = deserializeAws_queryAutoScalingNotificationTypes(
      __getArrayIfSingleItem(output["AutoScalingNotificationTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeInstanceRefreshesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeInstanceRefreshesAnswer => {
  const contents: any = {
    InstanceRefreshes: undefined,
    NextToken: undefined,
  };
  if (output.InstanceRefreshes === "") {
    contents.InstanceRefreshes = [];
  } else if (output["InstanceRefreshes"] !== undefined && output["InstanceRefreshes"]["member"] !== undefined) {
    contents.InstanceRefreshes = deserializeAws_queryInstanceRefreshes(
      __getArrayIfSingleItem(output["InstanceRefreshes"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeLifecycleHooksAnswer = (
  output: any,
  context: __SerdeContext
): DescribeLifecycleHooksAnswer => {
  const contents: any = {
    LifecycleHooks: undefined,
  };
  if (output.LifecycleHooks === "") {
    contents.LifecycleHooks = [];
  } else if (output["LifecycleHooks"] !== undefined && output["LifecycleHooks"]["member"] !== undefined) {
    contents.LifecycleHooks = deserializeAws_queryLifecycleHooks(
      __getArrayIfSingleItem(output["LifecycleHooks"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLifecycleHookTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeLifecycleHookTypesAnswer => {
  const contents: any = {
    LifecycleHookTypes: undefined,
  };
  if (output.LifecycleHookTypes === "") {
    contents.LifecycleHookTypes = [];
  } else if (output["LifecycleHookTypes"] !== undefined && output["LifecycleHookTypes"]["member"] !== undefined) {
    contents.LifecycleHookTypes = deserializeAws_queryAutoScalingNotificationTypes(
      __getArrayIfSingleItem(output["LifecycleHookTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancersResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancersResponse => {
  const contents: any = {
    LoadBalancers: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  } else if (output["LoadBalancers"] !== undefined && output["LoadBalancers"]["member"] !== undefined) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancerStates(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerTargetGroupsResponse => {
  const contents: any = {
    LoadBalancerTargetGroups: undefined,
    NextToken: undefined,
  };
  if (output.LoadBalancerTargetGroups === "") {
    contents.LoadBalancerTargetGroups = [];
  } else if (
    output["LoadBalancerTargetGroups"] !== undefined &&
    output["LoadBalancerTargetGroups"]["member"] !== undefined
  ) {
    contents.LoadBalancerTargetGroups = deserializeAws_queryLoadBalancerTargetGroupStates(
      __getArrayIfSingleItem(output["LoadBalancerTargetGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeMetricCollectionTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeMetricCollectionTypesAnswer => {
  const contents: any = {
    Metrics: undefined,
    Granularities: undefined,
  };
  if (output.Metrics === "") {
    contents.Metrics = [];
  } else if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = deserializeAws_queryMetricCollectionTypes(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output.Granularities === "") {
    contents.Granularities = [];
  } else if (output["Granularities"] !== undefined && output["Granularities"]["member"] !== undefined) {
    contents.Granularities = deserializeAws_queryMetricGranularityTypes(
      __getArrayIfSingleItem(output["Granularities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeNotificationConfigurationsAnswer = (
  output: any,
  context: __SerdeContext
): DescribeNotificationConfigurationsAnswer => {
  const contents: any = {
    NotificationConfigurations: undefined,
    NextToken: undefined,
  };
  if (output.NotificationConfigurations === "") {
    contents.NotificationConfigurations = [];
  } else if (
    output["NotificationConfigurations"] !== undefined &&
    output["NotificationConfigurations"]["member"] !== undefined
  ) {
    contents.NotificationConfigurations = deserializeAws_queryNotificationConfigurations(
      __getArrayIfSingleItem(output["NotificationConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeTerminationPolicyTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeTerminationPolicyTypesAnswer => {
  const contents: any = {
    TerminationPolicyTypes: undefined,
  };
  if (output.TerminationPolicyTypes === "") {
    contents.TerminationPolicyTypes = [];
  } else if (
    output["TerminationPolicyTypes"] !== undefined &&
    output["TerminationPolicyTypes"]["member"] !== undefined
  ) {
    contents.TerminationPolicyTypes = deserializeAws_queryTerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicyTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTrafficSourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrafficSourcesResponse => {
  const contents: any = {
    TrafficSources: undefined,
    NextToken: undefined,
  };
  if (output.TrafficSources === "") {
    contents.TrafficSources = [];
  } else if (output["TrafficSources"] !== undefined && output["TrafficSources"]["member"] !== undefined) {
    contents.TrafficSources = deserializeAws_queryTrafficSourceStates(
      __getArrayIfSingleItem(output["TrafficSources"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeWarmPoolAnswer = (output: any, context: __SerdeContext): DescribeWarmPoolAnswer => {
  const contents: any = {
    WarmPoolConfiguration: undefined,
    Instances: undefined,
    NextToken: undefined,
  };
  if (output["WarmPoolConfiguration"] !== undefined) {
    contents.WarmPoolConfiguration = deserializeAws_queryWarmPoolConfiguration(
      output["WarmPoolConfiguration"],
      context
    );
  }
  if (output.Instances === "") {
    contents.Instances = [];
  } else if (output["Instances"] !== undefined && output["Instances"]["member"] !== undefined) {
    contents.Instances = deserializeAws_queryInstances(__getArrayIfSingleItem(output["Instances"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDesiredConfiguration = (output: any, context: __SerdeContext): DesiredConfiguration => {
  const contents: any = {
    LaunchTemplate: undefined,
    MixedInstancesPolicy: undefined,
  };
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = deserializeAws_queryMixedInstancesPolicy(output["MixedInstancesPolicy"], context);
  }
  return contents;
};

const deserializeAws_queryDetachInstancesAnswer = (output: any, context: __SerdeContext): DetachInstancesAnswer => {
  const contents: any = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDetachLoadBalancersResultType = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancersResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDetachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerTargetGroupsResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryDetachTrafficSourcesResultType = (
  output: any,
  context: __SerdeContext
): DetachTrafficSourcesResultType => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryEbs = (output: any, context: __SerdeContext): Ebs => {
  const contents: any = {
    SnapshotId: undefined,
    VolumeSize: undefined,
    VolumeType: undefined,
    DeleteOnTermination: undefined,
    Iops: undefined,
    Encrypted: undefined,
    Throughput: undefined,
  };
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

const deserializeAws_queryEnabledMetric = (output: any, context: __SerdeContext): EnabledMetric => {
  const contents: any = {
    Metric: undefined,
    Granularity: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = __expectString(output["Metric"]);
  }
  if (output["Granularity"] !== undefined) {
    contents.Granularity = __expectString(output["Granularity"]);
  }
  return contents;
};

const deserializeAws_queryEnabledMetrics = (output: any, context: __SerdeContext): EnabledMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEnabledMetric(entry, context);
    });
};

const deserializeAws_queryEnterStandbyAnswer = (output: any, context: __SerdeContext): EnterStandbyAnswer => {
  const contents: any = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryExcludedInstanceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryExitStandbyAnswer = (output: any, context: __SerdeContext): ExitStandbyAnswer => {
  const contents: any = {
    Activities: undefined,
  };
  if (output.Activities === "") {
    contents.Activities = [];
  } else if (output["Activities"] !== undefined && output["Activities"]["member"] !== undefined) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryFailedScheduledUpdateGroupActionRequest = (
  output: any,
  context: __SerdeContext
): FailedScheduledUpdateGroupActionRequest => {
  const contents: any = {
    ScheduledActionName: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
  };
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

const deserializeAws_queryFailedScheduledUpdateGroupActionRequests = (
  output: any,
  context: __SerdeContext
): FailedScheduledUpdateGroupActionRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryFailedScheduledUpdateGroupActionRequest(entry, context);
    });
};

const deserializeAws_queryGetPredictiveScalingForecastAnswer = (
  output: any,
  context: __SerdeContext
): GetPredictiveScalingForecastAnswer => {
  const contents: any = {
    LoadForecast: undefined,
    CapacityForecast: undefined,
    UpdateTime: undefined,
  };
  if (output.LoadForecast === "") {
    contents.LoadForecast = [];
  } else if (output["LoadForecast"] !== undefined && output["LoadForecast"]["member"] !== undefined) {
    contents.LoadForecast = deserializeAws_queryLoadForecasts(
      __getArrayIfSingleItem(output["LoadForecast"]["member"]),
      context
    );
  }
  if (output["CapacityForecast"] !== undefined) {
    contents.CapacityForecast = deserializeAws_queryCapacityForecast(output["CapacityForecast"], context);
  }
  if (output["UpdateTime"] !== undefined) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(output["UpdateTime"]));
  }
  return contents;
};

const deserializeAws_queryInstance = (output: any, context: __SerdeContext): Instance => {
  const contents: any = {
    InstanceId: undefined,
    InstanceType: undefined,
    AvailabilityZone: undefined,
    LifecycleState: undefined,
    HealthStatus: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined,
  };
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
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(output["LaunchTemplate"], context);
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = __parseBoolean(output["ProtectedFromScaleIn"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  return contents;
};

const deserializeAws_queryInstanceGenerations = (
  output: any,
  context: __SerdeContext
): (InstanceGeneration | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryInstanceMetadataOptions = (output: any, context: __SerdeContext): InstanceMetadataOptions => {
  const contents: any = {
    HttpTokens: undefined,
    HttpPutResponseHopLimit: undefined,
    HttpEndpoint: undefined,
  };
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

const deserializeAws_queryInstanceMonitoring = (output: any, context: __SerdeContext): InstanceMonitoring => {
  const contents: any = {
    Enabled: undefined,
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  return contents;
};

const deserializeAws_queryInstanceRefresh = (output: any, context: __SerdeContext): InstanceRefresh => {
  const contents: any = {
    InstanceRefreshId: undefined,
    AutoScalingGroupName: undefined,
    Status: undefined,
    StatusReason: undefined,
    StartTime: undefined,
    EndTime: undefined,
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
    ProgressDetails: undefined,
    Preferences: undefined,
    DesiredConfiguration: undefined,
  };
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
    contents.StartTime = __expectNonNull(__parseRfc3339DateTime(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTime(output["EndTime"]));
  }
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  if (output["ProgressDetails"] !== undefined) {
    contents.ProgressDetails = deserializeAws_queryInstanceRefreshProgressDetails(output["ProgressDetails"], context);
  }
  if (output["Preferences"] !== undefined) {
    contents.Preferences = deserializeAws_queryRefreshPreferences(output["Preferences"], context);
  }
  if (output["DesiredConfiguration"] !== undefined) {
    contents.DesiredConfiguration = deserializeAws_queryDesiredConfiguration(output["DesiredConfiguration"], context);
  }
  return contents;
};

const deserializeAws_queryInstanceRefreshes = (output: any, context: __SerdeContext): InstanceRefresh[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryInstanceRefresh(entry, context);
    });
};

const deserializeAws_queryInstanceRefreshInProgressFault = (
  output: any,
  context: __SerdeContext
): InstanceRefreshInProgressFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInstanceRefreshLivePoolProgress = (
  output: any,
  context: __SerdeContext
): InstanceRefreshLivePoolProgress => {
  const contents: any = {
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
  };
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  return contents;
};

const deserializeAws_queryInstanceRefreshProgressDetails = (
  output: any,
  context: __SerdeContext
): InstanceRefreshProgressDetails => {
  const contents: any = {
    LivePoolProgress: undefined,
    WarmPoolProgress: undefined,
  };
  if (output["LivePoolProgress"] !== undefined) {
    contents.LivePoolProgress = deserializeAws_queryInstanceRefreshLivePoolProgress(
      output["LivePoolProgress"],
      context
    );
  }
  if (output["WarmPoolProgress"] !== undefined) {
    contents.WarmPoolProgress = deserializeAws_queryInstanceRefreshWarmPoolProgress(
      output["WarmPoolProgress"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryInstanceRefreshWarmPoolProgress = (
  output: any,
  context: __SerdeContext
): InstanceRefreshWarmPoolProgress => {
  const contents: any = {
    PercentageComplete: undefined,
    InstancesToUpdate: undefined,
  };
  if (output["PercentageComplete"] !== undefined) {
    contents.PercentageComplete = __strictParseInt32(output["PercentageComplete"]) as number;
  }
  if (output["InstancesToUpdate"] !== undefined) {
    contents.InstancesToUpdate = __strictParseInt32(output["InstancesToUpdate"]) as number;
  }
  return contents;
};

const deserializeAws_queryInstanceRequirements = (output: any, context: __SerdeContext): InstanceRequirements => {
  const contents: any = {
    VCpuCount: undefined,
    MemoryMiB: undefined,
    CpuManufacturers: undefined,
    MemoryGiBPerVCpu: undefined,
    ExcludedInstanceTypes: undefined,
    InstanceGenerations: undefined,
    SpotMaxPricePercentageOverLowestPrice: undefined,
    OnDemandMaxPricePercentageOverLowestPrice: undefined,
    BareMetal: undefined,
    BurstablePerformance: undefined,
    RequireHibernateSupport: undefined,
    NetworkInterfaceCount: undefined,
    LocalStorage: undefined,
    LocalStorageTypes: undefined,
    TotalLocalStorageGB: undefined,
    BaselineEbsBandwidthMbps: undefined,
    AcceleratorTypes: undefined,
    AcceleratorCount: undefined,
    AcceleratorManufacturers: undefined,
    AcceleratorNames: undefined,
    AcceleratorTotalMemoryMiB: undefined,
    NetworkBandwidthGbps: undefined,
    AllowedInstanceTypes: undefined,
  };
  if (output["VCpuCount"] !== undefined) {
    contents.VCpuCount = deserializeAws_queryVCpuCountRequest(output["VCpuCount"], context);
  }
  if (output["MemoryMiB"] !== undefined) {
    contents.MemoryMiB = deserializeAws_queryMemoryMiBRequest(output["MemoryMiB"], context);
  }
  if (output.CpuManufacturers === "") {
    contents.CpuManufacturers = [];
  } else if (output["CpuManufacturers"] !== undefined && output["CpuManufacturers"]["member"] !== undefined) {
    contents.CpuManufacturers = deserializeAws_queryCpuManufacturers(
      __getArrayIfSingleItem(output["CpuManufacturers"]["member"]),
      context
    );
  }
  if (output["MemoryGiBPerVCpu"] !== undefined) {
    contents.MemoryGiBPerVCpu = deserializeAws_queryMemoryGiBPerVCpuRequest(output["MemoryGiBPerVCpu"], context);
  }
  if (output.ExcludedInstanceTypes === "") {
    contents.ExcludedInstanceTypes = [];
  } else if (output["ExcludedInstanceTypes"] !== undefined && output["ExcludedInstanceTypes"]["member"] !== undefined) {
    contents.ExcludedInstanceTypes = deserializeAws_queryExcludedInstanceTypes(
      __getArrayIfSingleItem(output["ExcludedInstanceTypes"]["member"]),
      context
    );
  }
  if (output.InstanceGenerations === "") {
    contents.InstanceGenerations = [];
  } else if (output["InstanceGenerations"] !== undefined && output["InstanceGenerations"]["member"] !== undefined) {
    contents.InstanceGenerations = deserializeAws_queryInstanceGenerations(
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
    contents.NetworkInterfaceCount = deserializeAws_queryNetworkInterfaceCountRequest(
      output["NetworkInterfaceCount"],
      context
    );
  }
  if (output["LocalStorage"] !== undefined) {
    contents.LocalStorage = __expectString(output["LocalStorage"]);
  }
  if (output.LocalStorageTypes === "") {
    contents.LocalStorageTypes = [];
  } else if (output["LocalStorageTypes"] !== undefined && output["LocalStorageTypes"]["member"] !== undefined) {
    contents.LocalStorageTypes = deserializeAws_queryLocalStorageTypes(
      __getArrayIfSingleItem(output["LocalStorageTypes"]["member"]),
      context
    );
  }
  if (output["TotalLocalStorageGB"] !== undefined) {
    contents.TotalLocalStorageGB = deserializeAws_queryTotalLocalStorageGBRequest(
      output["TotalLocalStorageGB"],
      context
    );
  }
  if (output["BaselineEbsBandwidthMbps"] !== undefined) {
    contents.BaselineEbsBandwidthMbps = deserializeAws_queryBaselineEbsBandwidthMbpsRequest(
      output["BaselineEbsBandwidthMbps"],
      context
    );
  }
  if (output.AcceleratorTypes === "") {
    contents.AcceleratorTypes = [];
  } else if (output["AcceleratorTypes"] !== undefined && output["AcceleratorTypes"]["member"] !== undefined) {
    contents.AcceleratorTypes = deserializeAws_queryAcceleratorTypes(
      __getArrayIfSingleItem(output["AcceleratorTypes"]["member"]),
      context
    );
  }
  if (output["AcceleratorCount"] !== undefined) {
    contents.AcceleratorCount = deserializeAws_queryAcceleratorCountRequest(output["AcceleratorCount"], context);
  }
  if (output.AcceleratorManufacturers === "") {
    contents.AcceleratorManufacturers = [];
  } else if (
    output["AcceleratorManufacturers"] !== undefined &&
    output["AcceleratorManufacturers"]["member"] !== undefined
  ) {
    contents.AcceleratorManufacturers = deserializeAws_queryAcceleratorManufacturers(
      __getArrayIfSingleItem(output["AcceleratorManufacturers"]["member"]),
      context
    );
  }
  if (output.AcceleratorNames === "") {
    contents.AcceleratorNames = [];
  } else if (output["AcceleratorNames"] !== undefined && output["AcceleratorNames"]["member"] !== undefined) {
    contents.AcceleratorNames = deserializeAws_queryAcceleratorNames(
      __getArrayIfSingleItem(output["AcceleratorNames"]["member"]),
      context
    );
  }
  if (output["AcceleratorTotalMemoryMiB"] !== undefined) {
    contents.AcceleratorTotalMemoryMiB = deserializeAws_queryAcceleratorTotalMemoryMiBRequest(
      output["AcceleratorTotalMemoryMiB"],
      context
    );
  }
  if (output["NetworkBandwidthGbps"] !== undefined) {
    contents.NetworkBandwidthGbps = deserializeAws_queryNetworkBandwidthGbpsRequest(
      output["NetworkBandwidthGbps"],
      context
    );
  }
  if (output.AllowedInstanceTypes === "") {
    contents.AllowedInstanceTypes = [];
  } else if (output["AllowedInstanceTypes"] !== undefined && output["AllowedInstanceTypes"]["member"] !== undefined) {
    contents.AllowedInstanceTypes = deserializeAws_queryAllowedInstanceTypes(
      __getArrayIfSingleItem(output["AllowedInstanceTypes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryInstanceReusePolicy = (output: any, context: __SerdeContext): InstanceReusePolicy => {
  const contents: any = {
    ReuseOnScaleIn: undefined,
  };
  if (output["ReuseOnScaleIn"] !== undefined) {
    contents.ReuseOnScaleIn = __parseBoolean(output["ReuseOnScaleIn"]);
  }
  return contents;
};

const deserializeAws_queryInstances = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryInstance(entry, context);
    });
};

const deserializeAws_queryInstancesDistribution = (output: any, context: __SerdeContext): InstancesDistribution => {
  const contents: any = {
    OnDemandAllocationStrategy: undefined,
    OnDemandBaseCapacity: undefined,
    OnDemandPercentageAboveBaseCapacity: undefined,
    SpotAllocationStrategy: undefined,
    SpotInstancePools: undefined,
    SpotMaxPrice: undefined,
  };
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

const deserializeAws_queryInvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLaunchConfiguration = (output: any, context: __SerdeContext): LaunchConfiguration => {
  const contents: any = {
    LaunchConfigurationName: undefined,
    LaunchConfigurationARN: undefined,
    ImageId: undefined,
    KeyName: undefined,
    SecurityGroups: undefined,
    ClassicLinkVPCId: undefined,
    ClassicLinkVPCSecurityGroups: undefined,
    UserData: undefined,
    InstanceType: undefined,
    KernelId: undefined,
    RamdiskId: undefined,
    BlockDeviceMappings: undefined,
    InstanceMonitoring: undefined,
    SpotPrice: undefined,
    IamInstanceProfile: undefined,
    CreatedTime: undefined,
    EbsOptimized: undefined,
    AssociatePublicIpAddress: undefined,
    PlacementTenancy: undefined,
    MetadataOptions: undefined,
  };
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
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
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
    contents.ClassicLinkVPCSecurityGroups = deserializeAws_queryClassicLinkVPCSecurityGroups(
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
    contents.BlockDeviceMappings = deserializeAws_queryBlockDeviceMappings(
      __getArrayIfSingleItem(output["BlockDeviceMappings"]["member"]),
      context
    );
  }
  if (output["InstanceMonitoring"] !== undefined) {
    contents.InstanceMonitoring = deserializeAws_queryInstanceMonitoring(output["InstanceMonitoring"], context);
  }
  if (output["SpotPrice"] !== undefined) {
    contents.SpotPrice = __expectString(output["SpotPrice"]);
  }
  if (output["IamInstanceProfile"] !== undefined) {
    contents.IamInstanceProfile = __expectString(output["IamInstanceProfile"]);
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = __expectNonNull(__parseRfc3339DateTime(output["CreatedTime"]));
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
    contents.MetadataOptions = deserializeAws_queryInstanceMetadataOptions(output["MetadataOptions"], context);
  }
  return contents;
};

const deserializeAws_queryLaunchConfigurations = (output: any, context: __SerdeContext): LaunchConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLaunchConfiguration(entry, context);
    });
};

const deserializeAws_queryLaunchConfigurationsType = (
  output: any,
  context: __SerdeContext
): LaunchConfigurationsType => {
  const contents: any = {
    LaunchConfigurations: undefined,
    NextToken: undefined,
  };
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  } else if (output["LaunchConfigurations"] !== undefined && output["LaunchConfigurations"]["member"] !== undefined) {
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurations(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryLaunchTemplate = (output: any, context: __SerdeContext): LaunchTemplate => {
  const contents: any = {
    LaunchTemplateSpecification: undefined,
    Overrides: undefined,
  };
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output.Overrides === "") {
    contents.Overrides = [];
  } else if (output["Overrides"] !== undefined && output["Overrides"]["member"] !== undefined) {
    contents.Overrides = deserializeAws_queryOverrides(__getArrayIfSingleItem(output["Overrides"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateOverrides = (output: any, context: __SerdeContext): LaunchTemplateOverrides => {
  const contents: any = {
    InstanceType: undefined,
    WeightedCapacity: undefined,
    LaunchTemplateSpecification: undefined,
    InstanceRequirements: undefined,
  };
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = __expectString(output["InstanceType"]);
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = __expectString(output["WeightedCapacity"]);
  }
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output["InstanceRequirements"] !== undefined) {
    contents.InstanceRequirements = deserializeAws_queryInstanceRequirements(output["InstanceRequirements"], context);
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  const contents: any = {
    LaunchTemplateId: undefined,
    LaunchTemplateName: undefined,
    Version: undefined,
  };
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

const deserializeAws_queryLifecycleHook = (output: any, context: __SerdeContext): LifecycleHook => {
  const contents: any = {
    LifecycleHookName: undefined,
    AutoScalingGroupName: undefined,
    LifecycleTransition: undefined,
    NotificationTargetARN: undefined,
    RoleARN: undefined,
    NotificationMetadata: undefined,
    HeartbeatTimeout: undefined,
    GlobalTimeout: undefined,
    DefaultResult: undefined,
  };
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

const deserializeAws_queryLifecycleHooks = (output: any, context: __SerdeContext): LifecycleHook[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLifecycleHook(entry, context);
    });
};

const deserializeAws_queryLimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryLoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  const contents: any = {
    LoadBalancerName: undefined,
    State: undefined,
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = __expectString(output["LoadBalancerName"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerStates = (output: any, context: __SerdeContext): LoadBalancerState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancerState(entry, context);
    });
};

const deserializeAws_queryLoadBalancerTargetGroupState = (
  output: any,
  context: __SerdeContext
): LoadBalancerTargetGroupState => {
  const contents: any = {
    LoadBalancerTargetGroupARN: undefined,
    State: undefined,
  };
  if (output["LoadBalancerTargetGroupARN"] !== undefined) {
    contents.LoadBalancerTargetGroupARN = __expectString(output["LoadBalancerTargetGroupARN"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

const deserializeAws_queryLoadBalancerTargetGroupStates = (
  output: any,
  context: __SerdeContext
): LoadBalancerTargetGroupState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadBalancerTargetGroupState(entry, context);
    });
};

const deserializeAws_queryLoadForecast = (output: any, context: __SerdeContext): LoadForecast => {
  const contents: any = {
    Timestamps: undefined,
    Values: undefined,
    MetricSpecification: undefined,
  };
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  } else if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryPredictiveScalingForecastTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryPredictiveScalingForecastValues(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  if (output["MetricSpecification"] !== undefined) {
    contents.MetricSpecification = deserializeAws_queryPredictiveScalingMetricSpecification(
      output["MetricSpecification"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoadForecasts = (output: any, context: __SerdeContext): LoadForecast[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLoadForecast(entry, context);
    });
};

const deserializeAws_queryLocalStorageTypes = (output: any, context: __SerdeContext): (LocalStorageType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryMemoryGiBPerVCpuRequest = (output: any, context: __SerdeContext): MemoryGiBPerVCpuRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryMemoryMiBRequest = (output: any, context: __SerdeContext): MemoryMiBRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryMetric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {
    Namespace: undefined,
    MetricName: undefined,
    Dimensions: undefined,
  };
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryMetricDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMetricCollectionType = (output: any, context: __SerdeContext): MetricCollectionType => {
  const contents: any = {
    Metric: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = __expectString(output["Metric"]);
  }
  return contents;
};

const deserializeAws_queryMetricCollectionTypes = (output: any, context: __SerdeContext): MetricCollectionType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMetricCollectionType(entry, context);
    });
};

const deserializeAws_queryMetricDataQueries = (output: any, context: __SerdeContext): MetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMetricDataQuery(entry, context);
    });
};

const deserializeAws_queryMetricDataQuery = (output: any, context: __SerdeContext): MetricDataQuery => {
  const contents: any = {
    Id: undefined,
    Expression: undefined,
    MetricStat: undefined,
    Label: undefined,
    ReturnData: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Expression"] !== undefined) {
    contents.Expression = __expectString(output["Expression"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = deserializeAws_queryMetricStat(output["MetricStat"], context);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = __parseBoolean(output["ReturnData"]);
  }
  return contents;
};

const deserializeAws_queryMetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  const contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryMetricDimensions = (output: any, context: __SerdeContext): MetricDimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMetricDimension(entry, context);
    });
};

const deserializeAws_queryMetricGranularityType = (output: any, context: __SerdeContext): MetricGranularityType => {
  const contents: any = {
    Granularity: undefined,
  };
  if (output["Granularity"] !== undefined) {
    contents.Granularity = __expectString(output["Granularity"]);
  }
  return contents;
};

const deserializeAws_queryMetricGranularityTypes = (output: any, context: __SerdeContext): MetricGranularityType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMetricGranularityType(entry, context);
    });
};

const deserializeAws_queryMetricStat = (output: any, context: __SerdeContext): MetricStat => {
  const contents: any = {
    Metric: undefined,
    Stat: undefined,
    Unit: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  return contents;
};

const deserializeAws_queryMixedInstancesPolicy = (output: any, context: __SerdeContext): MixedInstancesPolicy => {
  const contents: any = {
    LaunchTemplate: undefined,
    InstancesDistribution: undefined,
  };
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplate(output["LaunchTemplate"], context);
  }
  if (output["InstancesDistribution"] !== undefined) {
    contents.InstancesDistribution = deserializeAws_queryInstancesDistribution(
      output["InstancesDistribution"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryNetworkBandwidthGbpsRequest = (
  output: any,
  context: __SerdeContext
): NetworkBandwidthGbpsRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryNetworkInterfaceCountRequest = (
  output: any,
  context: __SerdeContext
): NetworkInterfaceCountRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  const contents: any = {
    AutoScalingGroupName: undefined,
    TopicARN: undefined,
    NotificationType: undefined,
  };
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

const deserializeAws_queryNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryNotificationConfiguration(entry, context);
    });
};

const deserializeAws_queryOverrides = (output: any, context: __SerdeContext): LaunchTemplateOverrides[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryLaunchTemplateOverrides(entry, context);
    });
};

const deserializeAws_queryPoliciesType = (output: any, context: __SerdeContext): PoliciesType => {
  const contents: any = {
    ScalingPolicies: undefined,
    NextToken: undefined,
  };
  if (output.ScalingPolicies === "") {
    contents.ScalingPolicies = [];
  } else if (output["ScalingPolicies"] !== undefined && output["ScalingPolicies"]["member"] !== undefined) {
    contents.ScalingPolicies = deserializeAws_queryScalingPolicies(
      __getArrayIfSingleItem(output["ScalingPolicies"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryPolicyARNType = (output: any, context: __SerdeContext): PolicyARNType => {
  const contents: any = {
    PolicyARN: undefined,
    Alarms: undefined,
  };
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = __expectString(output["PolicyARN"]);
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  } else if (output["Alarms"] !== undefined && output["Alarms"]["member"] !== undefined) {
    contents.Alarms = deserializeAws_queryAlarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryPredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  const contents: any = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingConfiguration = (
  output: any,
  context: __SerdeContext
): PredictiveScalingConfiguration => {
  const contents: any = {
    MetricSpecifications: undefined,
    Mode: undefined,
    SchedulingBufferTime: undefined,
    MaxCapacityBreachBehavior: undefined,
    MaxCapacityBuffer: undefined,
  };
  if (output.MetricSpecifications === "") {
    contents.MetricSpecifications = [];
  } else if (output["MetricSpecifications"] !== undefined && output["MetricSpecifications"]["member"] !== undefined) {
    contents.MetricSpecifications = deserializeAws_queryPredictiveScalingMetricSpecifications(
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

const deserializeAws_queryPredictiveScalingCustomizedCapacityMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedCapacityMetric => {
  const contents: any = {
    MetricDataQueries: undefined,
  };
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = deserializeAws_queryMetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingCustomizedLoadMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedLoadMetric => {
  const contents: any = {
    MetricDataQueries: undefined,
  };
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = deserializeAws_queryMetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingCustomizedScalingMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingCustomizedScalingMetric => {
  const contents: any = {
    MetricDataQueries: undefined,
  };
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = deserializeAws_queryMetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingForecastTimestamps = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTime(entry));
    });
};

const deserializeAws_queryPredictiveScalingForecastValues = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseFloat(entry) as number;
    });
};

const deserializeAws_queryPredictiveScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification => {
  const contents: any = {
    TargetValue: undefined,
    PredefinedMetricPairSpecification: undefined,
    PredefinedScalingMetricSpecification: undefined,
    PredefinedLoadMetricSpecification: undefined,
    CustomizedScalingMetricSpecification: undefined,
    CustomizedLoadMetricSpecification: undefined,
    CustomizedCapacityMetricSpecification: undefined,
  };
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = __strictParseFloat(output["TargetValue"]) as number;
  }
  if (output["PredefinedMetricPairSpecification"] !== undefined) {
    contents.PredefinedMetricPairSpecification = deserializeAws_queryPredictiveScalingPredefinedMetricPair(
      output["PredefinedMetricPairSpecification"],
      context
    );
  }
  if (output["PredefinedScalingMetricSpecification"] !== undefined) {
    contents.PredefinedScalingMetricSpecification = deserializeAws_queryPredictiveScalingPredefinedScalingMetric(
      output["PredefinedScalingMetricSpecification"],
      context
    );
  }
  if (output["PredefinedLoadMetricSpecification"] !== undefined) {
    contents.PredefinedLoadMetricSpecification = deserializeAws_queryPredictiveScalingPredefinedLoadMetric(
      output["PredefinedLoadMetricSpecification"],
      context
    );
  }
  if (output["CustomizedScalingMetricSpecification"] !== undefined) {
    contents.CustomizedScalingMetricSpecification = deserializeAws_queryPredictiveScalingCustomizedScalingMetric(
      output["CustomizedScalingMetricSpecification"],
      context
    );
  }
  if (output["CustomizedLoadMetricSpecification"] !== undefined) {
    contents.CustomizedLoadMetricSpecification = deserializeAws_queryPredictiveScalingCustomizedLoadMetric(
      output["CustomizedLoadMetricSpecification"],
      context
    );
  }
  if (output["CustomizedCapacityMetricSpecification"] !== undefined) {
    contents.CustomizedCapacityMetricSpecification = deserializeAws_queryPredictiveScalingCustomizedCapacityMetric(
      output["CustomizedCapacityMetricSpecification"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingMetricSpecifications = (
  output: any,
  context: __SerdeContext
): PredictiveScalingMetricSpecification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPredictiveScalingMetricSpecification(entry, context);
    });
};

const deserializeAws_queryPredictiveScalingPredefinedLoadMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedLoadMetric => {
  const contents: any = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingPredefinedMetricPair = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedMetricPair => {
  const contents: any = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

const deserializeAws_queryPredictiveScalingPredefinedScalingMetric = (
  output: any,
  context: __SerdeContext
): PredictiveScalingPredefinedScalingMetric => {
  const contents: any = {
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = __expectString(output["PredefinedMetricType"]);
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = __expectString(output["ResourceLabel"]);
  }
  return contents;
};

const deserializeAws_queryProcesses = (output: any, context: __SerdeContext): ProcessType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryProcessType(entry, context);
    });
};

const deserializeAws_queryProcessesType = (output: any, context: __SerdeContext): ProcessesType => {
  const contents: any = {
    Processes: undefined,
  };
  if (output.Processes === "") {
    contents.Processes = [];
  } else if (output["Processes"] !== undefined && output["Processes"]["member"] !== undefined) {
    contents.Processes = deserializeAws_queryProcesses(__getArrayIfSingleItem(output["Processes"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryProcessType = (output: any, context: __SerdeContext): ProcessType => {
  const contents: any = {
    ProcessName: undefined,
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = __expectString(output["ProcessName"]);
  }
  return contents;
};

const deserializeAws_queryPutLifecycleHookAnswer = (output: any, context: __SerdeContext): PutLifecycleHookAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryPutWarmPoolAnswer = (output: any, context: __SerdeContext): PutWarmPoolAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryRecordLifecycleActionHeartbeatAnswer = (
  output: any,
  context: __SerdeContext
): RecordLifecycleActionHeartbeatAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryRefreshPreferences = (output: any, context: __SerdeContext): RefreshPreferences => {
  const contents: any = {
    MinHealthyPercentage: undefined,
    InstanceWarmup: undefined,
    CheckpointPercentages: undefined,
    CheckpointDelay: undefined,
    SkipMatching: undefined,
  };
  if (output["MinHealthyPercentage"] !== undefined) {
    contents.MinHealthyPercentage = __strictParseInt32(output["MinHealthyPercentage"]) as number;
  }
  if (output["InstanceWarmup"] !== undefined) {
    contents.InstanceWarmup = __strictParseInt32(output["InstanceWarmup"]) as number;
  }
  if (output.CheckpointPercentages === "") {
    contents.CheckpointPercentages = [];
  } else if (output["CheckpointPercentages"] !== undefined && output["CheckpointPercentages"]["member"] !== undefined) {
    contents.CheckpointPercentages = deserializeAws_queryCheckpointPercentages(
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
  return contents;
};

const deserializeAws_queryResourceContentionFault = (output: any, context: __SerdeContext): ResourceContentionFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryResourceInUseFault = (output: any, context: __SerdeContext): ResourceInUseFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScalingActivityInProgressFault = (
  output: any,
  context: __SerdeContext
): ScalingActivityInProgressFault => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryScalingPolicy(entry, context);
    });
};

const deserializeAws_queryScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  const contents: any = {
    AutoScalingGroupName: undefined,
    PolicyName: undefined,
    PolicyARN: undefined,
    PolicyType: undefined,
    AdjustmentType: undefined,
    MinAdjustmentStep: undefined,
    MinAdjustmentMagnitude: undefined,
    ScalingAdjustment: undefined,
    Cooldown: undefined,
    StepAdjustments: undefined,
    MetricAggregationType: undefined,
    EstimatedInstanceWarmup: undefined,
    Alarms: undefined,
    TargetTrackingConfiguration: undefined,
    Enabled: undefined,
    PredictiveScalingConfiguration: undefined,
  };
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
    contents.StepAdjustments = deserializeAws_queryStepAdjustments(
      __getArrayIfSingleItem(output["StepAdjustments"]["member"]),
      context
    );
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
    contents.Alarms = deserializeAws_queryAlarms(__getArrayIfSingleItem(output["Alarms"]["member"]), context);
  }
  if (output["TargetTrackingConfiguration"] !== undefined) {
    contents.TargetTrackingConfiguration = deserializeAws_queryTargetTrackingConfiguration(
      output["TargetTrackingConfiguration"],
      context
    );
  }
  if (output["Enabled"] !== undefined) {
    contents.Enabled = __parseBoolean(output["Enabled"]);
  }
  if (output["PredictiveScalingConfiguration"] !== undefined) {
    contents.PredictiveScalingConfiguration = deserializeAws_queryPredictiveScalingConfiguration(
      output["PredictiveScalingConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryScheduledActionsType = (output: any, context: __SerdeContext): ScheduledActionsType => {
  const contents: any = {
    ScheduledUpdateGroupActions: undefined,
    NextToken: undefined,
  };
  if (output.ScheduledUpdateGroupActions === "") {
    contents.ScheduledUpdateGroupActions = [];
  } else if (
    output["ScheduledUpdateGroupActions"] !== undefined &&
    output["ScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.ScheduledUpdateGroupActions = deserializeAws_queryScheduledUpdateGroupActions(
      __getArrayIfSingleItem(output["ScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryScheduledUpdateGroupAction = (
  output: any,
  context: __SerdeContext
): ScheduledUpdateGroupAction => {
  const contents: any = {
    AutoScalingGroupName: undefined,
    ScheduledActionName: undefined,
    ScheduledActionARN: undefined,
    Time: undefined,
    StartTime: undefined,
    EndTime: undefined,
    Recurrence: undefined,
    MinSize: undefined,
    MaxSize: undefined,
    DesiredCapacity: undefined,
    TimeZone: undefined,
  };
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
    contents.Time = __expectNonNull(__parseRfc3339DateTime(output["Time"]));
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTime(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTime(output["EndTime"]));
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

const deserializeAws_queryScheduledUpdateGroupActions = (
  output: any,
  context: __SerdeContext
): ScheduledUpdateGroupAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryScheduledUpdateGroupAction(entry, context);
    });
};

const deserializeAws_querySecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryServiceLinkedRoleFailure = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleFailure => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySetInstanceProtectionAnswer = (
  output: any,
  context: __SerdeContext
): SetInstanceProtectionAnswer => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryStartInstanceRefreshAnswer = (
  output: any,
  context: __SerdeContext
): StartInstanceRefreshAnswer => {
  const contents: any = {
    InstanceRefreshId: undefined,
  };
  if (output["InstanceRefreshId"] !== undefined) {
    contents.InstanceRefreshId = __expectString(output["InstanceRefreshId"]);
  }
  return contents;
};

const deserializeAws_queryStepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  const contents: any = {
    MetricIntervalLowerBound: undefined,
    MetricIntervalUpperBound: undefined,
    ScalingAdjustment: undefined,
  };
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

const deserializeAws_queryStepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryStepAdjustment(entry, context);
    });
};

const deserializeAws_querySuspendedProcess = (output: any, context: __SerdeContext): SuspendedProcess => {
  const contents: any = {
    ProcessName: undefined,
    SuspensionReason: undefined,
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = __expectString(output["ProcessName"]);
  }
  if (output["SuspensionReason"] !== undefined) {
    contents.SuspensionReason = __expectString(output["SuspensionReason"]);
  }
  return contents;
};

const deserializeAws_querySuspendedProcesses = (output: any, context: __SerdeContext): SuspendedProcess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySuspendedProcess(entry, context);
    });
};

const deserializeAws_queryTagDescription = (output: any, context: __SerdeContext): TagDescription => {
  const contents: any = {
    ResourceId: undefined,
    ResourceType: undefined,
    Key: undefined,
    Value: undefined,
    PropagateAtLaunch: undefined,
  };
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

const deserializeAws_queryTagDescriptionList = (output: any, context: __SerdeContext): TagDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTagDescription(entry, context);
    });
};

const deserializeAws_queryTagsType = (output: any, context: __SerdeContext): TagsType => {
  const contents: any = {
    Tags: undefined,
    NextToken: undefined,
  };
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryTargetGroupARNs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTargetTrackingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration => {
  const contents: any = {
    PredefinedMetricSpecification: undefined,
    CustomizedMetricSpecification: undefined,
    TargetValue: undefined,
    DisableScaleIn: undefined,
  };
  if (output["PredefinedMetricSpecification"] !== undefined) {
    contents.PredefinedMetricSpecification = deserializeAws_queryPredefinedMetricSpecification(
      output["PredefinedMetricSpecification"],
      context
    );
  }
  if (output["CustomizedMetricSpecification"] !== undefined) {
    contents.CustomizedMetricSpecification = deserializeAws_queryCustomizedMetricSpecification(
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

const deserializeAws_queryTargetTrackingMetricDataQueries = (
  output: any,
  context: __SerdeContext
): TargetTrackingMetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTargetTrackingMetricDataQuery(entry, context);
    });
};

const deserializeAws_queryTargetTrackingMetricDataQuery = (
  output: any,
  context: __SerdeContext
): TargetTrackingMetricDataQuery => {
  const contents: any = {
    Id: undefined,
    Expression: undefined,
    MetricStat: undefined,
    Label: undefined,
    ReturnData: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Expression"] !== undefined) {
    contents.Expression = __expectString(output["Expression"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = deserializeAws_queryTargetTrackingMetricStat(output["MetricStat"], context);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = __parseBoolean(output["ReturnData"]);
  }
  return contents;
};

const deserializeAws_queryTargetTrackingMetricStat = (
  output: any,
  context: __SerdeContext
): TargetTrackingMetricStat => {
  const contents: any = {
    Metric: undefined,
    Stat: undefined,
    Unit: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  return contents;
};

const deserializeAws_queryTerminationPolicies = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTotalLocalStorageGBRequest = (
  output: any,
  context: __SerdeContext
): TotalLocalStorageGBRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseFloat(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseFloat(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryTrafficSourceIdentifier = (output: any, context: __SerdeContext): TrafficSourceIdentifier => {
  const contents: any = {
    Identifier: undefined,
  };
  if (output["Identifier"] !== undefined) {
    contents.Identifier = __expectString(output["Identifier"]);
  }
  return contents;
};

const deserializeAws_queryTrafficSources = (output: any, context: __SerdeContext): TrafficSourceIdentifier[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTrafficSourceIdentifier(entry, context);
    });
};

const deserializeAws_queryTrafficSourceState = (output: any, context: __SerdeContext): TrafficSourceState => {
  const contents: any = {
    TrafficSource: undefined,
    State: undefined,
  };
  if (output["TrafficSource"] !== undefined) {
    contents.TrafficSource = __expectString(output["TrafficSource"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

const deserializeAws_queryTrafficSourceStates = (output: any, context: __SerdeContext): TrafficSourceState[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTrafficSourceState(entry, context);
    });
};

const deserializeAws_queryVCpuCountRequest = (output: any, context: __SerdeContext): VCpuCountRequest => {
  const contents: any = {
    Min: undefined,
    Max: undefined,
  };
  if (output["Min"] !== undefined) {
    contents.Min = __strictParseInt32(output["Min"]) as number;
  }
  if (output["Max"] !== undefined) {
    contents.Max = __strictParseInt32(output["Max"]) as number;
  }
  return contents;
};

const deserializeAws_queryWarmPoolConfiguration = (output: any, context: __SerdeContext): WarmPoolConfiguration => {
  const contents: any = {
    MaxGroupPreparedCapacity: undefined,
    MinSize: undefined,
    PoolState: undefined,
    Status: undefined,
    InstanceReusePolicy: undefined,
  };
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
    contents.InstanceReusePolicy = deserializeAws_queryInstanceReusePolicy(output["InstanceReusePolicy"], context);
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
