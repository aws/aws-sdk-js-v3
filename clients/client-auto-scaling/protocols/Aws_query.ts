import {
  AttachInstancesCommandInput,
  AttachInstancesCommandOutput
} from "../commands/AttachInstancesCommand";
import {
  AttachLoadBalancerTargetGroupsCommandInput,
  AttachLoadBalancerTargetGroupsCommandOutput
} from "../commands/AttachLoadBalancerTargetGroupsCommand";
import {
  AttachLoadBalancersCommandInput,
  AttachLoadBalancersCommandOutput
} from "../commands/AttachLoadBalancersCommand";
import {
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput
} from "../commands/BatchDeleteScheduledActionCommand";
import {
  BatchPutScheduledUpdateGroupActionCommandInput,
  BatchPutScheduledUpdateGroupActionCommandOutput
} from "../commands/BatchPutScheduledUpdateGroupActionCommand";
import {
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput
} from "../commands/CompleteLifecycleActionCommand";
import {
  CreateAutoScalingGroupCommandInput,
  CreateAutoScalingGroupCommandOutput
} from "../commands/CreateAutoScalingGroupCommand";
import {
  CreateLaunchConfigurationCommandInput,
  CreateLaunchConfigurationCommandOutput
} from "../commands/CreateLaunchConfigurationCommand";
import {
  CreateOrUpdateTagsCommandInput,
  CreateOrUpdateTagsCommandOutput
} from "../commands/CreateOrUpdateTagsCommand";
import {
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput
} from "../commands/DeleteAutoScalingGroupCommand";
import {
  DeleteLaunchConfigurationCommandInput,
  DeleteLaunchConfigurationCommandOutput
} from "../commands/DeleteLaunchConfigurationCommand";
import {
  DeleteLifecycleHookCommandInput,
  DeleteLifecycleHookCommandOutput
} from "../commands/DeleteLifecycleHookCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput
} from "../commands/DeleteNotificationConfigurationCommand";
import {
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput
} from "../commands/DeletePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput
} from "../commands/DeleteScheduledActionCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput
} from "../commands/DescribeAdjustmentTypesCommand";
import {
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput
} from "../commands/DescribeAutoScalingGroupsCommand";
import {
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput
} from "../commands/DescribeAutoScalingInstancesCommand";
import {
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput
} from "../commands/DescribeAutoScalingNotificationTypesCommand";
import {
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput
} from "../commands/DescribeLaunchConfigurationsCommand";
import {
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput
} from "../commands/DescribeLifecycleHookTypesCommand";
import {
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput
} from "../commands/DescribeLifecycleHooksCommand";
import {
  DescribeLoadBalancerTargetGroupsCommandInput,
  DescribeLoadBalancerTargetGroupsCommandOutput
} from "../commands/DescribeLoadBalancerTargetGroupsCommand";
import {
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
} from "../commands/DescribeLoadBalancersCommand";
import {
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput
} from "../commands/DescribeMetricCollectionTypesCommand";
import {
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput
} from "../commands/DescribeNotificationConfigurationsCommand";
import {
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput
} from "../commands/DescribePoliciesCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput
} from "../commands/DescribeScalingProcessTypesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput
} from "../commands/DescribeScheduledActionsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  DescribeTerminationPolicyTypesCommandInput,
  DescribeTerminationPolicyTypesCommandOutput
} from "../commands/DescribeTerminationPolicyTypesCommand";
import {
  DetachInstancesCommandInput,
  DetachInstancesCommandOutput
} from "../commands/DetachInstancesCommand";
import {
  DetachLoadBalancerTargetGroupsCommandInput,
  DetachLoadBalancerTargetGroupsCommandOutput
} from "../commands/DetachLoadBalancerTargetGroupsCommand";
import {
  DetachLoadBalancersCommandInput,
  DetachLoadBalancersCommandOutput
} from "../commands/DetachLoadBalancersCommand";
import {
  DisableMetricsCollectionCommandInput,
  DisableMetricsCollectionCommandOutput
} from "../commands/DisableMetricsCollectionCommand";
import {
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput
} from "../commands/EnableMetricsCollectionCommand";
import {
  EnterStandbyCommandInput,
  EnterStandbyCommandOutput
} from "../commands/EnterStandbyCommand";
import {
  ExecutePolicyCommandInput,
  ExecutePolicyCommandOutput
} from "../commands/ExecutePolicyCommand";
import {
  ExitStandbyCommandInput,
  ExitStandbyCommandOutput
} from "../commands/ExitStandbyCommand";
import {
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput
} from "../commands/PutLifecycleHookCommand";
import {
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput
} from "../commands/PutNotificationConfigurationCommand";
import {
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput
} from "../commands/PutScalingPolicyCommand";
import {
  PutScheduledUpdateGroupActionCommandInput,
  PutScheduledUpdateGroupActionCommandOutput
} from "../commands/PutScheduledUpdateGroupActionCommand";
import {
  RecordLifecycleActionHeartbeatCommandInput,
  RecordLifecycleActionHeartbeatCommandOutput
} from "../commands/RecordLifecycleActionHeartbeatCommand";
import {
  ResumeProcessesCommandInput,
  ResumeProcessesCommandOutput
} from "../commands/ResumeProcessesCommand";
import {
  SetDesiredCapacityCommandInput,
  SetDesiredCapacityCommandOutput
} from "../commands/SetDesiredCapacityCommand";
import {
  SetInstanceHealthCommandInput,
  SetInstanceHealthCommandOutput
} from "../commands/SetInstanceHealthCommand";
import {
  SetInstanceProtectionCommandInput,
  SetInstanceProtectionCommandOutput
} from "../commands/SetInstanceProtectionCommand";
import {
  SuspendProcessesCommandInput,
  SuspendProcessesCommandOutput
} from "../commands/SuspendProcessesCommand";
import {
  TerminateInstanceInAutoScalingGroupCommandInput,
  TerminateInstanceInAutoScalingGroupCommandOutput
} from "../commands/TerminateInstanceInAutoScalingGroupCommand";
import {
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput
} from "../commands/UpdateAutoScalingGroupCommand";
import {
  ActivitiesType,
  Activity,
  ActivityType,
  AdjustmentType,
  Alarm,
  AlreadyExistsFault,
  AttachInstancesQuery,
  AttachLoadBalancerTargetGroupsResultType,
  AttachLoadBalancerTargetGroupsType,
  AttachLoadBalancersResultType,
  AttachLoadBalancersType,
  AutoScalingGroup,
  AutoScalingGroupNamesType,
  AutoScalingGroupsType,
  AutoScalingInstanceDetails,
  AutoScalingInstancesType,
  BatchDeleteScheduledActionAnswer,
  BatchDeleteScheduledActionType,
  BatchPutScheduledUpdateGroupActionAnswer,
  BatchPutScheduledUpdateGroupActionType,
  BlockDeviceMapping,
  CompleteLifecycleActionAnswer,
  CompleteLifecycleActionType,
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
  DescribeAccountLimitsAnswer,
  DescribeAdjustmentTypesAnswer,
  DescribeAutoScalingInstancesType,
  DescribeAutoScalingNotificationTypesAnswer,
  DescribeLifecycleHookTypesAnswer,
  DescribeLifecycleHooksAnswer,
  DescribeLifecycleHooksType,
  DescribeLoadBalancerTargetGroupsRequest,
  DescribeLoadBalancerTargetGroupsResponse,
  DescribeLoadBalancersRequest,
  DescribeLoadBalancersResponse,
  DescribeMetricCollectionTypesAnswer,
  DescribeNotificationConfigurationsAnswer,
  DescribeNotificationConfigurationsType,
  DescribePoliciesType,
  DescribeScalingActivitiesType,
  DescribeScheduledActionsType,
  DescribeTagsType,
  DescribeTerminationPolicyTypesAnswer,
  DetachInstancesAnswer,
  DetachInstancesQuery,
  DetachLoadBalancerTargetGroupsResultType,
  DetachLoadBalancerTargetGroupsType,
  DetachLoadBalancersResultType,
  DetachLoadBalancersType,
  DisableMetricsCollectionQuery,
  Ebs,
  EnableMetricsCollectionQuery,
  EnabledMetric,
  EnterStandbyAnswer,
  EnterStandbyQuery,
  ExecutePolicyType,
  ExitStandbyAnswer,
  ExitStandbyQuery,
  FailedScheduledUpdateGroupActionRequest,
  Filter,
  Instance,
  InstanceMonitoring,
  InstancesDistribution,
  InvalidNextToken,
  LaunchConfiguration,
  LaunchConfigurationNameType,
  LaunchConfigurationNamesType,
  LaunchConfigurationsType,
  LaunchTemplate,
  LaunchTemplateOverrides,
  LaunchTemplateSpecification,
  LifecycleHook,
  LifecycleHookSpecification,
  LimitExceededFault,
  LoadBalancerState,
  LoadBalancerTargetGroupState,
  MetricCollectionType,
  MetricDimension,
  MetricGranularityType,
  MixedInstancesPolicy,
  NotificationConfiguration,
  PoliciesType,
  PolicyARNType,
  PredefinedMetricSpecification,
  ProcessType,
  ProcessesType,
  PutLifecycleHookAnswer,
  PutLifecycleHookType,
  PutNotificationConfigurationType,
  PutScalingPolicyType,
  PutScheduledUpdateGroupActionType,
  RecordLifecycleActionHeartbeatAnswer,
  RecordLifecycleActionHeartbeatType,
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
  StepAdjustment,
  SuspendedProcess,
  Tag,
  TagDescription,
  TagsType,
  TargetTrackingConfiguration,
  TerminateInstanceInAutoScalingGroupType,
  UpdateAutoScalingGroupType
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAttachInstancesCommand = async (
  input: AttachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachInstancesQuery(input, context),
    Action: "AttachInstances",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachLoadBalancersCommand = async (
  input: AttachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancersType(input, context),
    Action: "AttachLoadBalancers",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (
  input: AttachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachLoadBalancerTargetGroupsType(input, context),
    Action: "AttachLoadBalancerTargetGroups",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchDeleteScheduledActionCommand = async (
  input: BatchDeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchDeleteScheduledActionType(input, context),
    Action: "BatchDeleteScheduledAction",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (
  input: BatchPutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryBatchPutScheduledUpdateGroupActionType(input, context),
    Action: "BatchPutScheduledUpdateGroupAction",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCompleteLifecycleActionCommand = async (
  input: CompleteLifecycleActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCompleteLifecycleActionType(input, context),
    Action: "CompleteLifecycleAction",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAutoScalingGroupCommand = async (
  input: CreateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAutoScalingGroupType(input, context),
    Action: "CreateAutoScalingGroup",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLaunchConfigurationCommand = async (
  input: CreateLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLaunchConfigurationType(input, context),
    Action: "CreateLaunchConfiguration",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateOrUpdateTagsCommand = async (
  input: CreateOrUpdateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateOrUpdateTagsType(input, context),
    Action: "CreateOrUpdateTags",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAutoScalingGroupCommand = async (
  input: DeleteAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAutoScalingGroupType(input, context),
    Action: "DeleteAutoScalingGroup",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLaunchConfigurationCommand = async (
  input: DeleteLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNameType(input, context),
    Action: "DeleteLaunchConfiguration",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLifecycleHookCommand = async (
  input: DeleteLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLifecycleHookType(input, context),
    Action: "DeleteLifecycleHook",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteNotificationConfigurationCommand = async (
  input: DeleteNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteNotificationConfigurationType(input, context),
    Action: "DeleteNotificationConfiguration",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePolicyType(input, context),
    Action: "DeletePolicy",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteScheduledActionType(input, context),
    Action: "DeleteScheduledAction",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTagsType(input, context),
    Action: "DeleteTags",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAccountLimits",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAdjustmentTypesCommand = async (
  input: DescribeAdjustmentTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAdjustmentTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingGroupsCommand = async (
  input: DescribeAutoScalingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAutoScalingGroupNamesType(input, context),
    Action: "DescribeAutoScalingGroups",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingInstancesCommand = async (
  input: DescribeAutoScalingInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAutoScalingInstancesType(input, context),
    Action: "DescribeAutoScalingInstances",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (
  input: DescribeAutoScalingNotificationTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeAutoScalingNotificationTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLaunchConfigurationsCommand = async (
  input: DescribeLaunchConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryLaunchConfigurationNamesType(input, context),
    Action: "DescribeLaunchConfigurations",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLifecycleHooksCommand = async (
  input: DescribeLifecycleHooksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLifecycleHooksType(input, context),
    Action: "DescribeLifecycleHooks",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLifecycleHookTypesCommand = async (
  input: DescribeLifecycleHookTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeLifecycleHookTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancersCommand = async (
  input: DescribeLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancersRequest(input, context),
    Action: "DescribeLoadBalancers",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (
  input: DescribeLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeLoadBalancerTargetGroupsRequest(
      input,
      context
    ),
    Action: "DescribeLoadBalancerTargetGroups",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeMetricCollectionTypesCommand = async (
  input: DescribeMetricCollectionTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeMetricCollectionTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeNotificationConfigurationsCommand = async (
  input: DescribeNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeNotificationConfigurationsType(input, context),
    Action: "DescribeNotificationConfigurations",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribePoliciesCommand = async (
  input: DescribePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribePoliciesType(input, context),
    Action: "DescribePolicies",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScalingActivitiesType(input, context),
    Action: "DescribeScalingActivities",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScalingProcessTypesCommand = async (
  input: DescribeScalingProcessTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeScalingProcessTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeScheduledActionsType(input, context),
    Action: "DescribeScheduledActions",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeTagsType(input, context),
    Action: "DescribeTags",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeTerminationPolicyTypesCommand = async (
  input: DescribeTerminationPolicyTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const body = buildFormUrlencodedString({
    Action: "DescribeTerminationPolicyTypes",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachInstancesCommand = async (
  input: DetachInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachInstancesQuery(input, context),
    Action: "DetachInstances",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachLoadBalancersCommand = async (
  input: DetachLoadBalancersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancersType(input, context),
    Action: "DetachLoadBalancers",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (
  input: DetachLoadBalancerTargetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachLoadBalancerTargetGroupsType(input, context),
    Action: "DetachLoadBalancerTargetGroups",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableMetricsCollectionCommand = async (
  input: DisableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableMetricsCollectionQuery(input, context),
    Action: "DisableMetricsCollection",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableMetricsCollectionCommand = async (
  input: EnableMetricsCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableMetricsCollectionQuery(input, context),
    Action: "EnableMetricsCollection",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnterStandbyCommand = async (
  input: EnterStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnterStandbyQuery(input, context),
    Action: "EnterStandby",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryExecutePolicyCommand = async (
  input: ExecutePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExecutePolicyType(input, context),
    Action: "ExecutePolicy",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryExitStandbyCommand = async (
  input: ExitStandbyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryExitStandbyQuery(input, context),
    Action: "ExitStandby",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutLifecycleHookCommand = async (
  input: PutLifecycleHookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutLifecycleHookType(input, context),
    Action: "PutLifecycleHook",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutNotificationConfigurationCommand = async (
  input: PutNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutNotificationConfigurationType(input, context),
    Action: "PutNotificationConfiguration",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScalingPolicyType(input, context),
    Action: "PutScalingPolicy",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutScheduledUpdateGroupActionCommand = async (
  input: PutScheduledUpdateGroupActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutScheduledUpdateGroupActionType(input, context),
    Action: "PutScheduledUpdateGroupAction",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRecordLifecycleActionHeartbeatCommand = async (
  input: RecordLifecycleActionHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRecordLifecycleActionHeartbeatType(input, context),
    Action: "RecordLifecycleActionHeartbeat",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResumeProcessesCommand = async (
  input: ResumeProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "ResumeProcesses",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetDesiredCapacityCommand = async (
  input: SetDesiredCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetDesiredCapacityType(input, context),
    Action: "SetDesiredCapacity",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetInstanceHealthCommand = async (
  input: SetInstanceHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceHealthQuery(input, context),
    Action: "SetInstanceHealth",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetInstanceProtectionCommand = async (
  input: SetInstanceProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetInstanceProtectionQuery(input, context),
    Action: "SetInstanceProtection",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySuspendProcessesCommand = async (
  input: SuspendProcessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryScalingProcessQuery(input, context),
    Action: "SuspendProcesses",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (
  input: TerminateInstanceInAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTerminateInstanceInAutoScalingGroupType(
      input,
      context
    ),
    Action: "TerminateInstanceInAutoScalingGroup",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAutoScalingGroupCommand = async (
  input: UpdateAutoScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAutoScalingGroupType(input, context),
    Action: "UpdateAutoScalingGroup",
    Version: "2011-01-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAttachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAttachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancersResultType(
    data.AttachLoadBalancersResult,
    context
  );
  const response: AttachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachLoadBalancersResultType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAttachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAttachLoadBalancerTargetGroupsResultType(
    data.AttachLoadBalancerTargetGroupsResult,
    context
  );
  const response: AttachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AttachLoadBalancerTargetGroupsResultType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryBatchDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryBatchDeleteScheduledActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchDeleteScheduledActionAnswer(
    data.BatchDeleteScheduledActionResult,
    context
  );
  const response: BatchDeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteScheduledActionAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchDeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryBatchPutScheduledUpdateGroupActionAnswer(
    data.BatchPutScheduledUpdateGroupActionResult,
    context
  );
  const response: BatchPutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchPutScheduledUpdateGroupActionAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryBatchPutScheduledUpdateGroupActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutScheduledUpdateGroupActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCompleteLifecycleActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCompleteLifecycleActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCompleteLifecycleActionAnswer(
    data.CompleteLifecycleActionResult,
    context
  );
  const response: CompleteLifecycleActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CompleteLifecycleActionAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCompleteLifecycleActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteLifecycleActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateAutoScalingGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: CreateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLaunchConfigurationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: CreateLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateOrUpdateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateOrUpdateTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateOrUpdateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateOrUpdateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrUpdateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAutoScalingGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLaunchConfigurationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteLifecycleHookAnswer(
    data.DeleteLifecycleHookResult,
    context
  );
  const response: DeleteLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLifecycleHookAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLifecycleHookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecycleHookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteNotificationConfigurationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteScheduledActionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteTagsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAccountLimitsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAccountLimitsAnswer(
    data.DescribeAccountLimitsResult,
    context
  );
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountLimitsAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAdjustmentTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAdjustmentTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAdjustmentTypesAnswer(
    data.DescribeAdjustmentTypesResult,
    context
  );
  const response: DescribeAdjustmentTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAdjustmentTypesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAdjustmentTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAdjustmentTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAutoScalingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAutoScalingGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAutoScalingGroupsType(
    data.DescribeAutoScalingGroupsResult,
    context
  );
  const response: DescribeAutoScalingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AutoScalingGroupsType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAutoScalingInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAutoScalingInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAutoScalingInstancesType(
    data.DescribeAutoScalingInstancesResult,
    context
  );
  const response: DescribeAutoScalingInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AutoScalingInstancesType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAutoScalingNotificationTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAutoScalingNotificationTypesAnswer(
    data.DescribeAutoScalingNotificationTypesResult,
    context
  );
  const response: DescribeAutoScalingNotificationTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAutoScalingNotificationTypesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAutoScalingNotificationTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingNotificationTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeLaunchConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLaunchConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryLaunchConfigurationsType(
    data.DescribeLaunchConfigurationsResult,
    context
  );
  const response: DescribeLaunchConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LaunchConfigurationsType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLaunchConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLaunchConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeLifecycleHooksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLifecycleHooksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLifecycleHooksAnswer(
    data.DescribeLifecycleHooksResult,
    context
  );
  const response: DescribeLifecycleHooksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLifecycleHooksAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLifecycleHooksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHooksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeLifecycleHookTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLifecycleHookTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLifecycleHookTypesAnswer(
    data.DescribeLifecycleHookTypesResult,
    context
  );
  const response: DescribeLifecycleHookTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLifecycleHookTypesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLifecycleHookTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleHookTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancersResponse(
    data.DescribeLoadBalancersResult,
    context
  );
  const response: DescribeLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse(
    data.DescribeLoadBalancerTargetGroupsResult,
    context
  );
  const response: DescribeLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoadBalancerTargetGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeMetricCollectionTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeMetricCollectionTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeMetricCollectionTypesAnswer(
    data.DescribeMetricCollectionTypesResult,
    context
  );
  const response: DescribeMetricCollectionTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMetricCollectionTypesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeMetricCollectionTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricCollectionTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeNotificationConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeNotificationConfigurationsAnswer(
    data.DescribeNotificationConfigurationsResult,
    context
  );
  const response: DescribeNotificationConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNotificationConfigurationsAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeNotificationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPoliciesType(
    data.DescribePoliciesResult,
    context
  );
  const response: DescribePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PoliciesType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeScalingActivitiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryActivitiesType(
    data.DescribeScalingActivitiesResult,
    context
  );
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivitiesType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeScalingProcessTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeScalingProcessTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryProcessesType(
    data.DescribeScalingProcessTypesResult,
    context
  );
  const response: DescribeScalingProcessTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ProcessesType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScalingProcessTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingProcessTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeScheduledActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryScheduledActionsType(
    data.DescribeScheduledActionsResult,
    context
  );
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ScheduledActionsType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagsType(data.DescribeTagsResult, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagsType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.autoscaling#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeTerminationPolicyTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeTerminationPolicyTypesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeTerminationPolicyTypesAnswer(
    data.DescribeTerminationPolicyTypesResult,
    context
  );
  const response: DescribeTerminationPolicyTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTerminationPolicyTypesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeTerminationPolicyTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTerminationPolicyTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachInstancesAnswer(
    data.DetachInstancesResult,
    context
  );
  const response: DetachInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachInstancesAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachLoadBalancersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachLoadBalancersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancersResultType(
    data.DetachLoadBalancersResult,
    context
  );
  const response: DetachLoadBalancersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachLoadBalancersResultType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachLoadBalancersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachLoadBalancerTargetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDetachLoadBalancerTargetGroupsResultType(
    data.DetachLoadBalancerTargetGroupsResult,
    context
  );
  const response: DetachLoadBalancerTargetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetachLoadBalancerTargetGroupsResultType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachLoadBalancerTargetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachLoadBalancerTargetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDisableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDisableMetricsCollectionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableMetricsCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableMetricsCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEnableMetricsCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnableMetricsCollectionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: EnableMetricsCollectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableMetricsCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMetricsCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEnterStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnterStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnterStandbyAnswer(
    data.EnterStandbyResult,
    context
  );
  const response: EnterStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnterStandbyAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnterStandbyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnterStandbyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryExecutePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryExecutePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecutePolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryExecutePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecutePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryExitStandbyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryExitStandbyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryExitStandbyAnswer(
    data.ExitStandbyResult,
    context
  );
  const response: ExitStandbyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExitStandbyAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryExitStandbyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExitStandbyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutLifecycleHookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutLifecycleHookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutLifecycleHookAnswer(
    data.PutLifecycleHookResult,
    context
  );
  const response: PutLifecycleHookCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLifecycleHookAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutLifecycleHookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleHookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutNotificationConfigurationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutNotificationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPolicyARNType(
    data.PutScalingPolicyResult,
    context
  );
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PolicyARNType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutScheduledUpdateGroupActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutScheduledUpdateGroupActionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutScheduledUpdateGroupActionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutScheduledUpdateGroupActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledUpdateGroupActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsFault":
    case "com.amazonaws.autoscaling#AlreadyExistsFault":
      response = {
        ...(await deserializeAws_queryAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRecordLifecycleActionHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRecordLifecycleActionHeartbeatCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryRecordLifecycleActionHeartbeatAnswer(
    data.RecordLifecycleActionHeartbeatResult,
    context
  );
  const response: RecordLifecycleActionHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RecordLifecycleActionHeartbeatAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRecordLifecycleActionHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordLifecycleActionHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryResumeProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryResumeProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeProcessesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResumeProcessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeProcessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetDesiredCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetDesiredCapacityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDesiredCapacityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetDesiredCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDesiredCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetInstanceHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetInstanceHealthCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetInstanceHealthCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetInstanceHealthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceHealthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetInstanceProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetInstanceProtectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetInstanceProtectionAnswer(
    data.SetInstanceProtectionResult,
    context
  );
  const response: SetInstanceProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetInstanceProtectionAnswer",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetInstanceProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetInstanceProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.autoscaling#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySuspendProcessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySuspendProcessesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SuspendProcessesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySuspendProcessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SuspendProcessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseFault":
    case "com.amazonaws.autoscaling#ResourceInUseFault":
      response = {
        ...(await deserializeAws_queryResourceInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryActivityType(
    data.TerminateInstanceInAutoScalingGroupResult,
    context
  );
  const response: TerminateInstanceInAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivityType",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTerminateInstanceInAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateInstanceInAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAutoScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateAutoScalingGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateAutoScalingGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAutoScalingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoScalingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceContentionFault":
    case "com.amazonaws.autoscaling#ResourceContentionFault":
      response = {
        ...(await deserializeAws_queryResourceContentionFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ScalingActivityInProgressFault":
    case "com.amazonaws.autoscaling#ScalingActivityInProgressFault":
      response = {
        ...(await deserializeAws_queryScalingActivityInProgressFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleFailure":
    case "com.amazonaws.autoscaling#ServiceLinkedRoleFailure":
      response = {
        ...(await deserializeAws_queryServiceLinkedRoleFailureResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAlreadyExistsFault(
    body.Error,
    context
  );
  const contents: AlreadyExistsFault = {
    name: "AlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidNextTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidNextToken(
    body.Error,
    context
  );
  const contents: InvalidNextToken = {
    name: "InvalidNextToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededFault(
    body.Error,
    context
  );
  const contents: LimitExceededFault = {
    name: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceContentionFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceContentionFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceContentionFault(
    body.Error,
    context
  );
  const contents: ResourceContentionFault = {
    name: "ResourceContentionFault",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceInUseFault(
    body.Error,
    context
  );
  const contents: ResourceInUseFault = {
    name: "ResourceInUseFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryScalingActivityInProgressFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScalingActivityInProgressFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryScalingActivityInProgressFault(
    body.Error,
    context
  );
  const contents: ScalingActivityInProgressFault = {
    name: "ScalingActivityInProgressFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryServiceLinkedRoleFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceLinkedRoleFailure(
    body.Error,
    context
  );
  const contents: ServiceLinkedRoleFailure = {
    name: "ServiceLinkedRoleFailure",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryActivityIds = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAttachInstancesQuery = (
  input: AttachInstancesQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryAttachLoadBalancersType = (
  input: AttachLoadBalancersType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupARNs(
      input.TargetGroupARNs,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryAutoScalingGroupNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.AutoScalingGroupNames !== undefined) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(
      input.AutoScalingGroupNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryAutoScalingNotificationTypes = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAvailabilityZones = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryBatchDeleteScheduledActionType = (
  input: BatchDeleteScheduledActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionNames !== undefined) {
    const memberEntries = serializeAws_queryScheduledActionNames(
      input.ScheduledActionNames,
      context
    );
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledUpdateGroupActions !== undefined) {
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequests(
      input.ScheduledUpdateGroupActions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledUpdateGroupActions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryBlockDeviceMapping = (
  input: BlockDeviceMapping,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeviceName !== undefined) {
    entries["DeviceName"] = input.DeviceName;
  }
  if (input.Ebs !== undefined) {
    const memberEntries = serializeAws_queryEbs(input.Ebs, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Ebs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NoDevice !== undefined) {
    entries["NoDevice"] = input.NoDevice;
  }
  if (input.VirtualName !== undefined) {
    entries["VirtualName"] = input.VirtualName;
  }
  return entries;
};

const serializeAws_queryBlockDeviceMappings = (
  input: BlockDeviceMapping[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryBlockDeviceMapping(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryClassicLinkVPCSecurityGroups = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.LifecycleActionResult !== undefined) {
    entries["LifecycleActionResult"] = input.LifecycleActionResult;
  }
  if (input.LifecycleActionToken !== undefined) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.LifecycleHookName !== undefined) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  return entries;
};

const serializeAws_queryCreateAutoScalingGroupType = (
  input: CreateAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultCooldown !== undefined) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.DesiredCapacity !== undefined) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.HealthCheckGracePeriod !== undefined) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.HealthCheckType !== undefined) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.LaunchConfigurationName !== undefined) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(
      input.LaunchTemplate,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LifecycleHookSpecificationList !== undefined) {
    const memberEntries = serializeAws_queryLifecycleHookSpecifications(
      input.LifecycleHookSpecificationList,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LifecycleHookSpecificationList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LoadBalancerNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxInstanceLifetime !== undefined) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  if (input.MaxSize !== undefined) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.MinSize !== undefined) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MixedInstancesPolicy !== undefined) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(
      input.MixedInstancesPolicy,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn !== undefined) {
    entries["NewInstancesProtectedFromScaleIn"] =
      input.NewInstancesProtectedFromScaleIn;
  }
  if (input.PlacementGroup !== undefined) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.ServiceLinkedRoleARN !== undefined) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetGroupARNs !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupARNs(
      input.TargetGroupARNs,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TerminationPolicies !== undefined) {
    const memberEntries = serializeAws_queryTerminationPolicies(
      input.TerminationPolicies,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VPCZoneIdentifier !== undefined) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  return entries;
};

const serializeAws_queryCreateLaunchConfigurationType = (
  input: CreateLaunchConfigurationType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AssociatePublicIpAddress !== undefined) {
    entries["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
  }
  if (input.BlockDeviceMappings !== undefined) {
    const memberEntries = serializeAws_queryBlockDeviceMappings(
      input.BlockDeviceMappings,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BlockDeviceMappings.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ClassicLinkVPCId !== undefined) {
    entries["ClassicLinkVPCId"] = input.ClassicLinkVPCId;
  }
  if (input.ClassicLinkVPCSecurityGroups !== undefined) {
    const memberEntries = serializeAws_queryClassicLinkVPCSecurityGroups(
      input.ClassicLinkVPCSecurityGroups,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClassicLinkVPCSecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EbsOptimized !== undefined) {
    entries["EbsOptimized"] = input.EbsOptimized;
  }
  if (input.IamInstanceProfile !== undefined) {
    entries["IamInstanceProfile"] = input.IamInstanceProfile;
  }
  if (input.ImageId !== undefined) {
    entries["ImageId"] = input.ImageId;
  }
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.InstanceMonitoring !== undefined) {
    const memberEntries = serializeAws_queryInstanceMonitoring(
      input.InstanceMonitoring,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceMonitoring.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InstanceType !== undefined) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.KernelId !== undefined) {
    entries["KernelId"] = input.KernelId;
  }
  if (input.KeyName !== undefined) {
    entries["KeyName"] = input.KeyName;
  }
  if (input.LaunchConfigurationName !== undefined) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.PlacementTenancy !== undefined) {
    entries["PlacementTenancy"] = input.PlacementTenancy;
  }
  if (input.RamdiskId !== undefined) {
    entries["RamdiskId"] = input.RamdiskId;
  }
  if (input.SecurityGroups !== undefined) {
    const memberEntries = serializeAws_querySecurityGroups(
      input.SecurityGroups,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SecurityGroups.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SpotPrice !== undefined) {
    entries["SpotPrice"] = input.SpotPrice;
  }
  if (input.UserData !== undefined) {
    entries["UserData"] = input.UserData;
  }
  return entries;
};

const serializeAws_queryCreateOrUpdateTagsType = (
  input: CreateOrUpdateTagsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
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
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryMetricDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Statistic !== undefined) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryDeleteAutoScalingGroupType = (
  input: DeleteAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ForceDelete !== undefined) {
    entries["ForceDelete"] = input.ForceDelete;
  }
  return entries;
};

const serializeAws_queryDeleteLifecycleHookType = (
  input: DeleteLifecycleHookType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookName !== undefined) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  return entries;
};

const serializeAws_queryDeleteNotificationConfigurationType = (
  input: DeleteNotificationConfigurationType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TopicARN !== undefined) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};

const serializeAws_queryDeletePolicyType = (
  input: DeletePolicyType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeleteScheduledActionType = (
  input: DeleteScheduledActionType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScheduledActionName !== undefined) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  return entries;
};

const serializeAws_queryDeleteTagsType = (
  input: DeleteTagsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTags(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeAutoScalingInstancesType = (
  input: DescribeAutoScalingInstancesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeLifecycleHooksType = (
  input: DescribeLifecycleHooksType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LifecycleHookNames !== undefined) {
    const memberEntries = serializeAws_queryLifecycleHookNames(
      input.LifecycleHookNames,
      context
    );
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeLoadBalancerTargetGroupsRequest = (
  input: DescribeLoadBalancerTargetGroupsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeNotificationConfigurationsType = (
  input: DescribeNotificationConfigurationsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupNames !== undefined) {
    const memberEntries = serializeAws_queryAutoScalingGroupNames(
      input.AutoScalingGroupNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AutoScalingGroupNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribePoliciesType = (
  input: DescribePoliciesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.PolicyNames !== undefined) {
    const memberEntries = serializeAws_queryPolicyNames(
      input.PolicyNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicyTypes !== undefined) {
    const memberEntries = serializeAws_queryPolicyTypes(
      input.PolicyTypes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeScalingActivitiesType = (
  input: DescribeScalingActivitiesType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActivityIds !== undefined) {
    const memberEntries = serializeAws_queryActivityIds(
      input.ActivityIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActivityIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeScheduledActionsType = (
  input: DescribeScheduledActionsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScheduledActionNames !== undefined) {
    const memberEntries = serializeAws_queryScheduledActionNames(
      input.ScheduledActionNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScheduledActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryDescribeTagsType = (
  input: DescribeTagsType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filters !== undefined) {
    const memberEntries = serializeAws_queryFilters(input.Filters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDetachInstancesQuery = (
  input: DetachInstancesQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined) {
    entries["ShouldDecrementDesiredCapacity"] =
      input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

const serializeAws_queryDetachLoadBalancersType = (
  input: DetachLoadBalancersType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.LoadBalancerNames !== undefined) {
    const memberEntries = serializeAws_queryLoadBalancerNames(
      input.LoadBalancerNames,
      context
    );
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.TargetGroupARNs !== undefined) {
    const memberEntries = serializeAws_queryTargetGroupARNs(
      input.TargetGroupARNs,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetGroupARNs.${key}`;
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Metrics !== undefined) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEbs = (input: Ebs, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DeleteOnTermination !== undefined) {
    entries["DeleteOnTermination"] = input.DeleteOnTermination;
  }
  if (input.Encrypted !== undefined) {
    entries["Encrypted"] = input.Encrypted;
  }
  if (input.Iops !== undefined) {
    entries["Iops"] = input.Iops;
  }
  if (input.SnapshotId !== undefined) {
    entries["SnapshotId"] = input.SnapshotId;
  }
  if (input.VolumeSize !== undefined) {
    entries["VolumeSize"] = input.VolumeSize;
  }
  if (input.VolumeType !== undefined) {
    entries["VolumeType"] = input.VolumeType;
  }
  return entries;
};

const serializeAws_queryEnableMetricsCollectionQuery = (
  input: EnableMetricsCollectionQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Granularity !== undefined) {
    entries["Granularity"] = input.Granularity;
  }
  if (input.Metrics !== undefined) {
    const memberEntries = serializeAws_queryMetrics(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnterStandbyQuery = (
  input: EnterStandbyQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined) {
    entries["ShouldDecrementDesiredCapacity"] =
      input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

const serializeAws_queryExecutePolicyType = (
  input: ExecutePolicyType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.BreachThreshold !== undefined) {
    entries["BreachThreshold"] = input.BreachThreshold;
  }
  if (input.HonorCooldown !== undefined) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  if (input.MetricValue !== undefined) {
    entries["MetricValue"] = input.MetricValue;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryExitStandbyQuery = (
  input: ExitStandbyQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryFilter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryValues(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryFilters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryInstanceIds = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryInstanceMonitoring = (
  input: InstanceMonitoring,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Enabled !== undefined) {
    entries["Enabled"] = input.Enabled;
  }
  return entries;
};

const serializeAws_queryInstancesDistribution = (
  input: InstancesDistribution,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OnDemandAllocationStrategy !== undefined) {
    entries["OnDemandAllocationStrategy"] = input.OnDemandAllocationStrategy;
  }
  if (input.OnDemandBaseCapacity !== undefined) {
    entries["OnDemandBaseCapacity"] = input.OnDemandBaseCapacity;
  }
  if (input.OnDemandPercentageAboveBaseCapacity !== undefined) {
    entries["OnDemandPercentageAboveBaseCapacity"] =
      input.OnDemandPercentageAboveBaseCapacity;
  }
  if (input.SpotAllocationStrategy !== undefined) {
    entries["SpotAllocationStrategy"] = input.SpotAllocationStrategy;
  }
  if (input.SpotInstancePools !== undefined) {
    entries["SpotInstancePools"] = input.SpotInstancePools;
  }
  if (input.SpotMaxPrice !== undefined) {
    entries["SpotMaxPrice"] = input.SpotMaxPrice;
  }
  return entries;
};

const serializeAws_queryLaunchConfigurationNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.LaunchConfigurationNames !== undefined) {
    const memberEntries = serializeAws_queryLaunchConfigurationNames(
      input.LaunchConfigurationNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchConfigurationNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryLaunchConfigurationNameType = (
  input: LaunchConfigurationNameType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LaunchConfigurationName !== undefined) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  return entries;
};

const serializeAws_queryLaunchTemplate = (
  input: LaunchTemplate,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LaunchTemplateSpecification !== undefined) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(
      input.LaunchTemplateSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplateSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Overrides !== undefined) {
    const memberEntries = serializeAws_queryOverrides(input.Overrides, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Overrides.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryLaunchTemplateOverrides = (
  input: LaunchTemplateOverrides,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceType !== undefined) {
    entries["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity !== undefined) {
    entries["WeightedCapacity"] = input.WeightedCapacity;
  }
  return entries;
};

const serializeAws_queryLaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.LaunchTemplateId !== undefined) {
    entries["LaunchTemplateId"] = input.LaunchTemplateId;
  }
  if (input.LaunchTemplateName !== undefined) {
    entries["LaunchTemplateName"] = input.LaunchTemplateName;
  }
  if (input.Version !== undefined) {
    entries["Version"] = input.Version;
  }
  return entries;
};

const serializeAws_queryLifecycleHookNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.DefaultResult !== undefined) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  if (input.HeartbeatTimeout !== undefined) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.LifecycleHookName !== undefined) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.LifecycleTransition !== undefined) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.NotificationMetadata !== undefined) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.NotificationTargetARN !== undefined) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.RoleARN !== undefined) {
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
  for (let entry of input) {
    const memberEntries = serializeAws_queryLifecycleHookSpecification(
      entry,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryLoadBalancerNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryMetricDimensions = (
  input: MetricDimension[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryMetricDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetrics = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryMixedInstancesPolicy = (
  input: MixedInstancesPolicy,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstancesDistribution !== undefined) {
    const memberEntries = serializeAws_queryInstancesDistribution(
      input.InstancesDistribution,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstancesDistribution.${key}`;
      entries[loc] = value;
    });
  }
  if (input.LaunchTemplate !== undefined) {
    const memberEntries = serializeAws_queryLaunchTemplate(
      input.LaunchTemplate,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryOverrides = (
  input: LaunchTemplateOverrides[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryLaunchTemplateOverrides(
      entry,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyTypes = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.PredefinedMetricType !== undefined) {
    entries["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined) {
    entries["ResourceLabel"] = input.ResourceLabel;
  }
  return entries;
};

const serializeAws_queryProcessNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPutLifecycleHookType = (
  input: PutLifecycleHookType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.DefaultResult !== undefined) {
    entries["DefaultResult"] = input.DefaultResult;
  }
  if (input.HeartbeatTimeout !== undefined) {
    entries["HeartbeatTimeout"] = input.HeartbeatTimeout;
  }
  if (input.LifecycleHookName !== undefined) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  if (input.LifecycleTransition !== undefined) {
    entries["LifecycleTransition"] = input.LifecycleTransition;
  }
  if (input.NotificationMetadata !== undefined) {
    entries["NotificationMetadata"] = input.NotificationMetadata;
  }
  if (input.NotificationTargetARN !== undefined) {
    entries["NotificationTargetARN"] = input.NotificationTargetARN;
  }
  if (input.RoleARN !== undefined) {
    entries["RoleARN"] = input.RoleARN;
  }
  return entries;
};

const serializeAws_queryPutNotificationConfigurationType = (
  input: PutNotificationConfigurationType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.NotificationTypes !== undefined) {
    const memberEntries = serializeAws_queryAutoScalingNotificationTypes(
      input.NotificationTypes,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `NotificationTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TopicARN !== undefined) {
    entries["TopicARN"] = input.TopicARN;
  }
  return entries;
};

const serializeAws_queryPutScalingPolicyType = (
  input: PutScalingPolicyType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AdjustmentType !== undefined) {
    entries["AdjustmentType"] = input.AdjustmentType;
  }
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.Cooldown !== undefined) {
    entries["Cooldown"] = input.Cooldown;
  }
  if (input.EstimatedInstanceWarmup !== undefined) {
    entries["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
  }
  if (input.MetricAggregationType !== undefined) {
    entries["MetricAggregationType"] = input.MetricAggregationType;
  }
  if (input.MinAdjustmentMagnitude !== undefined) {
    entries["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
  }
  if (input.MinAdjustmentStep !== undefined) {
    entries["MinAdjustmentStep"] = input.MinAdjustmentStep;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyType !== undefined) {
    entries["PolicyType"] = input.PolicyType;
  }
  if (input.ScalingAdjustment !== undefined) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  if (input.StepAdjustments !== undefined) {
    const memberEntries = serializeAws_queryStepAdjustments(
      input.StepAdjustments,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StepAdjustments.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetTrackingConfiguration !== undefined) {
    const memberEntries = serializeAws_queryTargetTrackingConfiguration(
      input.TargetTrackingConfiguration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TargetTrackingConfiguration.${key}`;
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
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.DesiredCapacity !== undefined) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxSize !== undefined) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.MinSize !== undefined) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.Recurrence !== undefined) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.ScheduledActionName !== undefined) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Time !== undefined) {
    entries["Time"] = input.Time.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryRecordLifecycleActionHeartbeatType = (
  input: RecordLifecycleActionHeartbeatType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.LifecycleActionToken !== undefined) {
    entries["LifecycleActionToken"] = input.LifecycleActionToken;
  }
  if (input.LifecycleHookName !== undefined) {
    entries["LifecycleHookName"] = input.LifecycleHookName;
  }
  return entries;
};

const serializeAws_queryScalingProcessQuery = (
  input: ScalingProcessQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.ScalingProcesses !== undefined) {
    const memberEntries = serializeAws_queryProcessNames(
      input.ScalingProcesses,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ScalingProcesses.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryScheduledActionNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.DesiredCapacity !== undefined) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxSize !== undefined) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.MinSize !== undefined) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.Recurrence !== undefined) {
    entries["Recurrence"] = input.Recurrence;
  }
  if (input.ScheduledActionName !== undefined) {
    entries["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryScheduledUpdateGroupActionRequests = (
  input: ScheduledUpdateGroupActionRequest[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryScheduledUpdateGroupActionRequest(
      entry,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySecurityGroups = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetDesiredCapacityType = (
  input: SetDesiredCapacityType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.DesiredCapacity !== undefined) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.HonorCooldown !== undefined) {
    entries["HonorCooldown"] = input.HonorCooldown;
  }
  return entries;
};

const serializeAws_querySetInstanceHealthQuery = (
  input: SetInstanceHealthQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.HealthStatus !== undefined) {
    entries["HealthStatus"] = input.HealthStatus;
  }
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.ShouldRespectGracePeriod !== undefined) {
    entries["ShouldRespectGracePeriod"] = input.ShouldRespectGracePeriod;
  }
  return entries;
};

const serializeAws_querySetInstanceProtectionQuery = (
  input: SetInstanceProtectionQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.InstanceIds !== undefined) {
    const memberEntries = serializeAws_queryInstanceIds(
      input.InstanceIds,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceIds.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ProtectedFromScaleIn !== undefined) {
    entries["ProtectedFromScaleIn"] = input.ProtectedFromScaleIn;
  }
  return entries;
};

const serializeAws_queryStepAdjustment = (
  input: StepAdjustment,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricIntervalLowerBound !== undefined) {
    entries["MetricIntervalLowerBound"] = input.MetricIntervalLowerBound;
  }
  if (input.MetricIntervalUpperBound !== undefined) {
    entries["MetricIntervalUpperBound"] = input.MetricIntervalUpperBound;
  }
  if (input.ScalingAdjustment !== undefined) {
    entries["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  return entries;
};

const serializeAws_queryStepAdjustments = (
  input: StepAdjustment[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.PropagateAtLaunch !== undefined) {
    entries["PropagateAtLaunch"] = input.PropagateAtLaunch;
  }
  if (input.ResourceId !== undefined) {
    entries["ResourceId"] = input.ResourceId;
  }
  if (input.ResourceType !== undefined) {
    entries["ResourceType"] = input.ResourceType;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTags = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTargetGroupARNs = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.CustomizedMetricSpecification !== undefined) {
    const memberEntries = serializeAws_queryCustomizedMetricSpecification(
      input.CustomizedMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `CustomizedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DisableScaleIn !== undefined) {
    entries["DisableScaleIn"] = input.DisableScaleIn;
  }
  if (input.PredefinedMetricSpecification !== undefined) {
    const memberEntries = serializeAws_queryPredefinedMetricSpecification(
      input.PredefinedMetricSpecification,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PredefinedMetricSpecification.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TargetValue !== undefined) {
    entries["TargetValue"] = input.TargetValue;
  }
  return entries;
};

const serializeAws_queryTerminateInstanceInAutoScalingGroupType = (
  input: TerminateInstanceInAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceId !== undefined) {
    entries["InstanceId"] = input.InstanceId;
  }
  if (input.ShouldDecrementDesiredCapacity !== undefined) {
    entries["ShouldDecrementDesiredCapacity"] =
      input.ShouldDecrementDesiredCapacity;
  }
  return entries;
};

const serializeAws_queryTerminationPolicies = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryUpdateAutoScalingGroupType = (
  input: UpdateAutoScalingGroupType,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AutoScalingGroupName !== undefined) {
    entries["AutoScalingGroupName"] = input.AutoScalingGroupName;
  }
  if (input.AvailabilityZones !== undefined) {
    const memberEntries = serializeAws_queryAvailabilityZones(
      input.AvailabilityZones,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AvailabilityZones.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DefaultCooldown !== undefined) {
    entries["DefaultCooldown"] = input.DefaultCooldown;
  }
  if (input.DesiredCapacity !== undefined) {
    entries["DesiredCapacity"] = input.DesiredCapacity;
  }
  if (input.HealthCheckGracePeriod !== undefined) {
    entries["HealthCheckGracePeriod"] = input.HealthCheckGracePeriod;
  }
  if (input.HealthCheckType !== undefined) {
    entries["HealthCheckType"] = input.HealthCheckType;
  }
  if (input.LaunchConfigurationName !== undefined) {
    entries["LaunchConfigurationName"] = input.LaunchConfigurationName;
  }
  if (input.LaunchTemplate !== undefined) {
    const memberEntries = serializeAws_queryLaunchTemplateSpecification(
      input.LaunchTemplate,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LaunchTemplate.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxInstanceLifetime !== undefined) {
    entries["MaxInstanceLifetime"] = input.MaxInstanceLifetime;
  }
  if (input.MaxSize !== undefined) {
    entries["MaxSize"] = input.MaxSize;
  }
  if (input.MinSize !== undefined) {
    entries["MinSize"] = input.MinSize;
  }
  if (input.MixedInstancesPolicy !== undefined) {
    const memberEntries = serializeAws_queryMixedInstancesPolicy(
      input.MixedInstancesPolicy,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MixedInstancesPolicy.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NewInstancesProtectedFromScaleIn !== undefined) {
    entries["NewInstancesProtectedFromScaleIn"] =
      input.NewInstancesProtectedFromScaleIn;
  }
  if (input.PlacementGroup !== undefined) {
    entries["PlacementGroup"] = input.PlacementGroup;
  }
  if (input.ServiceLinkedRoleARN !== undefined) {
    entries["ServiceLinkedRoleARN"] = input.ServiceLinkedRoleARN;
  }
  if (input.TerminationPolicies !== undefined) {
    const memberEntries = serializeAws_queryTerminationPolicies(
      input.TerminationPolicies,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TerminationPolicies.${key}`;
      entries[loc] = value;
    });
  }
  if (input.VPCZoneIdentifier !== undefined) {
    entries["VPCZoneIdentifier"] = input.VPCZoneIdentifier;
  }
  return entries;
};

const serializeAws_queryValues = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryActivities = (
  output: any,
  context: __SerdeContext
): Activity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryActivity(entry, context)
  );
};

const deserializeAws_queryActivitiesType = (
  output: any,
  context: __SerdeContext
): ActivitiesType => {
  let contents: any = {
    __type: "ActivitiesType",
    Activities: undefined,
    NextToken: undefined
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (
    output["Activities"] !== undefined &&
    output["Activities"]["member"] !== undefined
  ) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryActivity = (
  output: any,
  context: __SerdeContext
): Activity => {
  let contents: any = {
    __type: "Activity",
    ActivityId: undefined,
    AutoScalingGroupName: undefined,
    Cause: undefined,
    Description: undefined,
    Details: undefined,
    EndTime: undefined,
    Progress: undefined,
    StartTime: undefined,
    StatusCode: undefined,
    StatusMessage: undefined
  };
  if (output["ActivityId"] !== undefined) {
    contents.ActivityId = output["ActivityId"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["Cause"] !== undefined) {
    contents.Cause = output["Cause"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["Details"] !== undefined) {
    contents.Details = output["Details"];
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["Progress"] !== undefined) {
    contents.Progress = parseInt(output["Progress"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = output["StatusCode"];
  }
  if (output["StatusMessage"] !== undefined) {
    contents.StatusMessage = output["StatusMessage"];
  }
  return contents;
};

const deserializeAws_queryActivityType = (
  output: any,
  context: __SerdeContext
): ActivityType => {
  let contents: any = {
    __type: "ActivityType",
    Activity: undefined
  };
  if (output["Activity"] !== undefined) {
    contents.Activity = deserializeAws_queryActivity(
      output["Activity"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryAdjustmentType = (
  output: any,
  context: __SerdeContext
): AdjustmentType => {
  let contents: any = {
    __type: "AdjustmentType",
    AdjustmentType: undefined
  };
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = output["AdjustmentType"];
  }
  return contents;
};

const deserializeAws_queryAdjustmentTypes = (
  output: any,
  context: __SerdeContext
): AdjustmentType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAdjustmentType(entry, context)
  );
};

const deserializeAws_queryAlarm = (
  output: any,
  context: __SerdeContext
): Alarm => {
  let contents: any = {
    __type: "Alarm",
    AlarmARN: undefined,
    AlarmName: undefined
  };
  if (output["AlarmARN"] !== undefined) {
    contents.AlarmARN = output["AlarmARN"];
  }
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = output["AlarmName"];
  }
  return contents;
};

const deserializeAws_queryAlarms = (
  output: any,
  context: __SerdeContext
): Alarm[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAlarm(entry, context)
  );
};

const deserializeAws_queryAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): AlreadyExistsFault => {
  let contents: any = {
    __type: "AlreadyExistsFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryAttachLoadBalancersResultType = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancersResultType => {
  let contents: any = {
    __type: "AttachLoadBalancersResultType"
  };
  return contents;
};

const deserializeAws_queryAttachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): AttachLoadBalancerTargetGroupsResultType => {
  let contents: any = {
    __type: "AttachLoadBalancerTargetGroupsResultType"
  };
  return contents;
};

const deserializeAws_queryAutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  let contents: any = {
    __type: "AutoScalingGroup",
    AutoScalingGroupARN: undefined,
    AutoScalingGroupName: undefined,
    AvailabilityZones: undefined,
    CreatedTime: undefined,
    DefaultCooldown: undefined,
    DesiredCapacity: undefined,
    EnabledMetrics: undefined,
    HealthCheckGracePeriod: undefined,
    HealthCheckType: undefined,
    Instances: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    LoadBalancerNames: undefined,
    MaxInstanceLifetime: undefined,
    MaxSize: undefined,
    MinSize: undefined,
    MixedInstancesPolicy: undefined,
    NewInstancesProtectedFromScaleIn: undefined,
    PlacementGroup: undefined,
    ServiceLinkedRoleARN: undefined,
    Status: undefined,
    SuspendedProcesses: undefined,
    Tags: undefined,
    TargetGroupARNs: undefined,
    TerminationPolicies: undefined,
    VPCZoneIdentifier: undefined
  };
  if (output["AutoScalingGroupARN"] !== undefined) {
    contents.AutoScalingGroupARN = output["AutoScalingGroupARN"];
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output.AvailabilityZones === "") {
    contents.AvailabilityZones = [];
  }
  if (
    output["AvailabilityZones"] !== undefined &&
    output["AvailabilityZones"]["member"] !== undefined
  ) {
    contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(
      __getArrayIfSingleItem(output["AvailabilityZones"]["member"]),
      context
    );
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["DefaultCooldown"] !== undefined) {
    contents.DefaultCooldown = parseInt(output["DefaultCooldown"]);
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
  }
  if (output.EnabledMetrics === "") {
    contents.EnabledMetrics = [];
  }
  if (
    output["EnabledMetrics"] !== undefined &&
    output["EnabledMetrics"]["member"] !== undefined
  ) {
    contents.EnabledMetrics = deserializeAws_queryEnabledMetrics(
      __getArrayIfSingleItem(output["EnabledMetrics"]["member"]),
      context
    );
  }
  if (output["HealthCheckGracePeriod"] !== undefined) {
    contents.HealthCheckGracePeriod = parseInt(
      output["HealthCheckGracePeriod"]
    );
  }
  if (output["HealthCheckType"] !== undefined) {
    contents.HealthCheckType = output["HealthCheckType"];
  }
  if (output.Instances === "") {
    contents.Instances = [];
  }
  if (
    output["Instances"] !== undefined &&
    output["Instances"]["member"] !== undefined
  ) {
    contents.Instances = deserializeAws_queryInstances(
      __getArrayIfSingleItem(output["Instances"]["member"]),
      context
    );
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplate"],
      context
    );
  }
  if (output.LoadBalancerNames === "") {
    contents.LoadBalancerNames = [];
  }
  if (
    output["LoadBalancerNames"] !== undefined &&
    output["LoadBalancerNames"]["member"] !== undefined
  ) {
    contents.LoadBalancerNames = deserializeAws_queryLoadBalancerNames(
      __getArrayIfSingleItem(output["LoadBalancerNames"]["member"]),
      context
    );
  }
  if (output["MaxInstanceLifetime"] !== undefined) {
    contents.MaxInstanceLifetime = parseInt(output["MaxInstanceLifetime"]);
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = parseInt(output["MaxSize"]);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["MixedInstancesPolicy"] !== undefined) {
    contents.MixedInstancesPolicy = deserializeAws_queryMixedInstancesPolicy(
      output["MixedInstancesPolicy"],
      context
    );
  }
  if (output["NewInstancesProtectedFromScaleIn"] !== undefined) {
    contents.NewInstancesProtectedFromScaleIn =
      output["NewInstancesProtectedFromScaleIn"] == "true";
  }
  if (output["PlacementGroup"] !== undefined) {
    contents.PlacementGroup = output["PlacementGroup"];
  }
  if (output["ServiceLinkedRoleARN"] !== undefined) {
    contents.ServiceLinkedRoleARN = output["ServiceLinkedRoleARN"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output.SuspendedProcesses === "") {
    contents.SuspendedProcesses = [];
  }
  if (
    output["SuspendedProcesses"] !== undefined &&
    output["SuspendedProcesses"]["member"] !== undefined
  ) {
    contents.SuspendedProcesses = deserializeAws_querySuspendedProcesses(
      __getArrayIfSingleItem(output["SuspendedProcesses"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(
      __getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  if (output.TargetGroupARNs === "") {
    contents.TargetGroupARNs = [];
  }
  if (
    output["TargetGroupARNs"] !== undefined &&
    output["TargetGroupARNs"]["member"] !== undefined
  ) {
    contents.TargetGroupARNs = deserializeAws_queryTargetGroupARNs(
      __getArrayIfSingleItem(output["TargetGroupARNs"]["member"]),
      context
    );
  }
  if (output.TerminationPolicies === "") {
    contents.TerminationPolicies = [];
  }
  if (
    output["TerminationPolicies"] !== undefined &&
    output["TerminationPolicies"]["member"] !== undefined
  ) {
    contents.TerminationPolicies = deserializeAws_queryTerminationPolicies(
      __getArrayIfSingleItem(output["TerminationPolicies"]["member"]),
      context
    );
  }
  if (output["VPCZoneIdentifier"] !== undefined) {
    contents.VPCZoneIdentifier = output["VPCZoneIdentifier"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingGroups = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAutoScalingGroup(entry, context)
  );
};

const deserializeAws_queryAutoScalingGroupsType = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupsType => {
  let contents: any = {
    __type: "AutoScalingGroupsType",
    AutoScalingGroups: undefined,
    NextToken: undefined
  };
  if (output.AutoScalingGroups === "") {
    contents.AutoScalingGroups = [];
  }
  if (
    output["AutoScalingGroups"] !== undefined &&
    output["AutoScalingGroups"]["member"] !== undefined
  ) {
    contents.AutoScalingGroups = deserializeAws_queryAutoScalingGroups(
      __getArrayIfSingleItem(output["AutoScalingGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingInstanceDetails = (
  output: any,
  context: __SerdeContext
): AutoScalingInstanceDetails => {
  let contents: any = {
    __type: "AutoScalingInstanceDetails",
    AutoScalingGroupName: undefined,
    AvailabilityZone: undefined,
    HealthStatus: undefined,
    InstanceId: undefined,
    InstanceType: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    LifecycleState: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = output["InstanceId"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplate"],
      context
    );
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = output["LifecycleState"];
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingInstances = (
  output: any,
  context: __SerdeContext
): AutoScalingInstanceDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAutoScalingInstanceDetails(entry, context)
  );
};

const deserializeAws_queryAutoScalingInstancesType = (
  output: any,
  context: __SerdeContext
): AutoScalingInstancesType => {
  let contents: any = {
    __type: "AutoScalingInstancesType",
    AutoScalingInstances: undefined,
    NextToken: undefined
  };
  if (output.AutoScalingInstances === "") {
    contents.AutoScalingInstances = [];
  }
  if (
    output["AutoScalingInstances"] !== undefined &&
    output["AutoScalingInstances"]["member"] !== undefined
  ) {
    contents.AutoScalingInstances = deserializeAws_queryAutoScalingInstances(
      __getArrayIfSingleItem(output["AutoScalingInstances"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryAutoScalingNotificationTypes = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryAvailabilityZones = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryBatchDeleteScheduledActionAnswer = (
  output: any,
  context: __SerdeContext
): BatchDeleteScheduledActionAnswer => {
  let contents: any = {
    __type: "BatchDeleteScheduledActionAnswer",
    FailedScheduledActions: undefined
  };
  if (output.FailedScheduledActions === "") {
    contents.FailedScheduledActions = [];
  }
  if (
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
  let contents: any = {
    __type: "BatchPutScheduledUpdateGroupActionAnswer",
    FailedScheduledUpdateGroupActions: undefined
  };
  if (output.FailedScheduledUpdateGroupActions === "") {
    contents.FailedScheduledUpdateGroupActions = [];
  }
  if (
    output["FailedScheduledUpdateGroupActions"] !== undefined &&
    output["FailedScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.FailedScheduledUpdateGroupActions = deserializeAws_queryFailedScheduledUpdateGroupActionRequests(
      __getArrayIfSingleItem(
        output["FailedScheduledUpdateGroupActions"]["member"]
      ),
      context
    );
  }
  return contents;
};

const deserializeAws_queryBlockDeviceMapping = (
  output: any,
  context: __SerdeContext
): BlockDeviceMapping => {
  let contents: any = {
    __type: "BlockDeviceMapping",
    DeviceName: undefined,
    Ebs: undefined,
    NoDevice: undefined,
    VirtualName: undefined
  };
  if (output["DeviceName"] !== undefined) {
    contents.DeviceName = output["DeviceName"];
  }
  if (output["Ebs"] !== undefined) {
    contents.Ebs = deserializeAws_queryEbs(output["Ebs"], context);
  }
  if (output["NoDevice"] !== undefined) {
    contents.NoDevice = output["NoDevice"] == "true";
  }
  if (output["VirtualName"] !== undefined) {
    contents.VirtualName = output["VirtualName"];
  }
  return contents;
};

const deserializeAws_queryBlockDeviceMappings = (
  output: any,
  context: __SerdeContext
): BlockDeviceMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryBlockDeviceMapping(entry, context)
  );
};

const deserializeAws_queryClassicLinkVPCSecurityGroups = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCompleteLifecycleActionAnswer = (
  output: any,
  context: __SerdeContext
): CompleteLifecycleActionAnswer => {
  let contents: any = {
    __type: "CompleteLifecycleActionAnswer"
  };
  return contents;
};

const deserializeAws_queryCustomizedMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedMetricSpecification => {
  let contents: any = {
    __type: "CustomizedMetricSpecification",
    Dimensions: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Statistic: undefined,
    Unit: undefined
  };
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (
    output["Dimensions"] !== undefined &&
    output["Dimensions"]["member"] !== undefined
  ) {
    contents.Dimensions = deserializeAws_queryMetricDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = output["MetricName"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = output["Statistic"];
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = output["Unit"];
  }
  return contents;
};

const deserializeAws_queryDeleteLifecycleHookAnswer = (
  output: any,
  context: __SerdeContext
): DeleteLifecycleHookAnswer => {
  let contents: any = {
    __type: "DeleteLifecycleHookAnswer"
  };
  return contents;
};

const deserializeAws_queryDescribeAccountLimitsAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsAnswer => {
  let contents: any = {
    __type: "DescribeAccountLimitsAnswer",
    MaxNumberOfAutoScalingGroups: undefined,
    MaxNumberOfLaunchConfigurations: undefined,
    NumberOfAutoScalingGroups: undefined,
    NumberOfLaunchConfigurations: undefined
  };
  if (output["MaxNumberOfAutoScalingGroups"] !== undefined) {
    contents.MaxNumberOfAutoScalingGroups = parseInt(
      output["MaxNumberOfAutoScalingGroups"]
    );
  }
  if (output["MaxNumberOfLaunchConfigurations"] !== undefined) {
    contents.MaxNumberOfLaunchConfigurations = parseInt(
      output["MaxNumberOfLaunchConfigurations"]
    );
  }
  if (output["NumberOfAutoScalingGroups"] !== undefined) {
    contents.NumberOfAutoScalingGroups = parseInt(
      output["NumberOfAutoScalingGroups"]
    );
  }
  if (output["NumberOfLaunchConfigurations"] !== undefined) {
    contents.NumberOfLaunchConfigurations = parseInt(
      output["NumberOfLaunchConfigurations"]
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAdjustmentTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeAdjustmentTypesAnswer => {
  let contents: any = {
    __type: "DescribeAdjustmentTypesAnswer",
    AdjustmentTypes: undefined
  };
  if (output.AdjustmentTypes === "") {
    contents.AdjustmentTypes = [];
  }
  if (
    output["AdjustmentTypes"] !== undefined &&
    output["AdjustmentTypes"]["member"] !== undefined
  ) {
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
  let contents: any = {
    __type: "DescribeAutoScalingNotificationTypesAnswer",
    AutoScalingNotificationTypes: undefined
  };
  if (output.AutoScalingNotificationTypes === "") {
    contents.AutoScalingNotificationTypes = [];
  }
  if (
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

const deserializeAws_queryDescribeLifecycleHooksAnswer = (
  output: any,
  context: __SerdeContext
): DescribeLifecycleHooksAnswer => {
  let contents: any = {
    __type: "DescribeLifecycleHooksAnswer",
    LifecycleHooks: undefined
  };
  if (output.LifecycleHooks === "") {
    contents.LifecycleHooks = [];
  }
  if (
    output["LifecycleHooks"] !== undefined &&
    output["LifecycleHooks"]["member"] !== undefined
  ) {
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
  let contents: any = {
    __type: "DescribeLifecycleHookTypesAnswer",
    LifecycleHookTypes: undefined
  };
  if (output.LifecycleHookTypes === "") {
    contents.LifecycleHookTypes = [];
  }
  if (
    output["LifecycleHookTypes"] !== undefined &&
    output["LifecycleHookTypes"]["member"] !== undefined
  ) {
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
  let contents: any = {
    __type: "DescribeLoadBalancersResponse",
    LoadBalancers: undefined,
    NextToken: undefined
  };
  if (output.LoadBalancers === "") {
    contents.LoadBalancers = [];
  }
  if (
    output["LoadBalancers"] !== undefined &&
    output["LoadBalancers"]["member"] !== undefined
  ) {
    contents.LoadBalancers = deserializeAws_queryLoadBalancerStates(
      __getArrayIfSingleItem(output["LoadBalancers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeLoadBalancerTargetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLoadBalancerTargetGroupsResponse => {
  let contents: any = {
    __type: "DescribeLoadBalancerTargetGroupsResponse",
    LoadBalancerTargetGroups: undefined,
    NextToken: undefined
  };
  if (output.LoadBalancerTargetGroups === "") {
    contents.LoadBalancerTargetGroups = [];
  }
  if (
    output["LoadBalancerTargetGroups"] !== undefined &&
    output["LoadBalancerTargetGroups"]["member"] !== undefined
  ) {
    contents.LoadBalancerTargetGroups = deserializeAws_queryLoadBalancerTargetGroupStates(
      __getArrayIfSingleItem(output["LoadBalancerTargetGroups"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeMetricCollectionTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeMetricCollectionTypesAnswer => {
  let contents: any = {
    __type: "DescribeMetricCollectionTypesAnswer",
    Granularities: undefined,
    Metrics: undefined
  };
  if (output.Granularities === "") {
    contents.Granularities = [];
  }
  if (
    output["Granularities"] !== undefined &&
    output["Granularities"]["member"] !== undefined
  ) {
    contents.Granularities = deserializeAws_queryMetricGranularityTypes(
      __getArrayIfSingleItem(output["Granularities"]["member"]),
      context
    );
  }
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (
    output["Metrics"] !== undefined &&
    output["Metrics"]["member"] !== undefined
  ) {
    contents.Metrics = deserializeAws_queryMetricCollectionTypes(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeNotificationConfigurationsAnswer = (
  output: any,
  context: __SerdeContext
): DescribeNotificationConfigurationsAnswer => {
  let contents: any = {
    __type: "DescribeNotificationConfigurationsAnswer",
    NextToken: undefined,
    NotificationConfigurations: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.NotificationConfigurations === "") {
    contents.NotificationConfigurations = [];
  }
  if (
    output["NotificationConfigurations"] !== undefined &&
    output["NotificationConfigurations"]["member"] !== undefined
  ) {
    contents.NotificationConfigurations = deserializeAws_queryNotificationConfigurations(
      __getArrayIfSingleItem(output["NotificationConfigurations"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeTerminationPolicyTypesAnswer = (
  output: any,
  context: __SerdeContext
): DescribeTerminationPolicyTypesAnswer => {
  let contents: any = {
    __type: "DescribeTerminationPolicyTypesAnswer",
    TerminationPolicyTypes: undefined
  };
  if (output.TerminationPolicyTypes === "") {
    contents.TerminationPolicyTypes = [];
  }
  if (
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

const deserializeAws_queryDetachInstancesAnswer = (
  output: any,
  context: __SerdeContext
): DetachInstancesAnswer => {
  let contents: any = {
    __type: "DetachInstancesAnswer",
    Activities: undefined
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (
    output["Activities"] !== undefined &&
    output["Activities"]["member"] !== undefined
  ) {
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
  let contents: any = {
    __type: "DetachLoadBalancersResultType"
  };
  return contents;
};

const deserializeAws_queryDetachLoadBalancerTargetGroupsResultType = (
  output: any,
  context: __SerdeContext
): DetachLoadBalancerTargetGroupsResultType => {
  let contents: any = {
    __type: "DetachLoadBalancerTargetGroupsResultType"
  };
  return contents;
};

const deserializeAws_queryEbs = (output: any, context: __SerdeContext): Ebs => {
  let contents: any = {
    __type: "Ebs",
    DeleteOnTermination: undefined,
    Encrypted: undefined,
    Iops: undefined,
    SnapshotId: undefined,
    VolumeSize: undefined,
    VolumeType: undefined
  };
  if (output["DeleteOnTermination"] !== undefined) {
    contents.DeleteOnTermination = output["DeleteOnTermination"] == "true";
  }
  if (output["Encrypted"] !== undefined) {
    contents.Encrypted = output["Encrypted"] == "true";
  }
  if (output["Iops"] !== undefined) {
    contents.Iops = parseInt(output["Iops"]);
  }
  if (output["SnapshotId"] !== undefined) {
    contents.SnapshotId = output["SnapshotId"];
  }
  if (output["VolumeSize"] !== undefined) {
    contents.VolumeSize = parseInt(output["VolumeSize"]);
  }
  if (output["VolumeType"] !== undefined) {
    contents.VolumeType = output["VolumeType"];
  }
  return contents;
};

const deserializeAws_queryEnabledMetric = (
  output: any,
  context: __SerdeContext
): EnabledMetric => {
  let contents: any = {
    __type: "EnabledMetric",
    Granularity: undefined,
    Metric: undefined
  };
  if (output["Granularity"] !== undefined) {
    contents.Granularity = output["Granularity"];
  }
  if (output["Metric"] !== undefined) {
    contents.Metric = output["Metric"];
  }
  return contents;
};

const deserializeAws_queryEnabledMetrics = (
  output: any,
  context: __SerdeContext
): EnabledMetric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryEnabledMetric(entry, context)
  );
};

const deserializeAws_queryEnterStandbyAnswer = (
  output: any,
  context: __SerdeContext
): EnterStandbyAnswer => {
  let contents: any = {
    __type: "EnterStandbyAnswer",
    Activities: undefined
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (
    output["Activities"] !== undefined &&
    output["Activities"]["member"] !== undefined
  ) {
    contents.Activities = deserializeAws_queryActivities(
      __getArrayIfSingleItem(output["Activities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryExitStandbyAnswer = (
  output: any,
  context: __SerdeContext
): ExitStandbyAnswer => {
  let contents: any = {
    __type: "ExitStandbyAnswer",
    Activities: undefined
  };
  if (output.Activities === "") {
    contents.Activities = [];
  }
  if (
    output["Activities"] !== undefined &&
    output["Activities"]["member"] !== undefined
  ) {
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
  let contents: any = {
    __type: "FailedScheduledUpdateGroupActionRequest",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    ScheduledActionName: undefined
  };
  if (output["ErrorCode"] !== undefined) {
    contents.ErrorCode = output["ErrorCode"];
  }
  if (output["ErrorMessage"] !== undefined) {
    contents.ErrorMessage = output["ErrorMessage"];
  }
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = output["ScheduledActionName"];
  }
  return contents;
};

const deserializeAws_queryFailedScheduledUpdateGroupActionRequests = (
  output: any,
  context: __SerdeContext
): FailedScheduledUpdateGroupActionRequest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryFailedScheduledUpdateGroupActionRequest(entry, context)
  );
};

const deserializeAws_queryInstance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    AvailabilityZone: undefined,
    HealthStatus: undefined,
    InstanceId: undefined,
    InstanceType: undefined,
    LaunchConfigurationName: undefined,
    LaunchTemplate: undefined,
    LifecycleState: undefined,
    ProtectedFromScaleIn: undefined,
    WeightedCapacity: undefined
  };
  if (output["AvailabilityZone"] !== undefined) {
    contents.AvailabilityZone = output["AvailabilityZone"];
  }
  if (output["HealthStatus"] !== undefined) {
    contents.HealthStatus = output["HealthStatus"];
  }
  if (output["InstanceId"] !== undefined) {
    contents.InstanceId = output["InstanceId"];
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplate"],
      context
    );
  }
  if (output["LifecycleState"] !== undefined) {
    contents.LifecycleState = output["LifecycleState"];
  }
  if (output["ProtectedFromScaleIn"] !== undefined) {
    contents.ProtectedFromScaleIn = output["ProtectedFromScaleIn"] == "true";
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  return contents;
};

const deserializeAws_queryInstanceMonitoring = (
  output: any,
  context: __SerdeContext
): InstanceMonitoring => {
  let contents: any = {
    __type: "InstanceMonitoring",
    Enabled: undefined
  };
  if (output["Enabled"] !== undefined) {
    contents.Enabled = output["Enabled"] == "true";
  }
  return contents;
};

const deserializeAws_queryInstances = (
  output: any,
  context: __SerdeContext
): Instance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInstance(entry, context)
  );
};

const deserializeAws_queryInstancesDistribution = (
  output: any,
  context: __SerdeContext
): InstancesDistribution => {
  let contents: any = {
    __type: "InstancesDistribution",
    OnDemandAllocationStrategy: undefined,
    OnDemandBaseCapacity: undefined,
    OnDemandPercentageAboveBaseCapacity: undefined,
    SpotAllocationStrategy: undefined,
    SpotInstancePools: undefined,
    SpotMaxPrice: undefined
  };
  if (output["OnDemandAllocationStrategy"] !== undefined) {
    contents.OnDemandAllocationStrategy = output["OnDemandAllocationStrategy"];
  }
  if (output["OnDemandBaseCapacity"] !== undefined) {
    contents.OnDemandBaseCapacity = parseInt(output["OnDemandBaseCapacity"]);
  }
  if (output["OnDemandPercentageAboveBaseCapacity"] !== undefined) {
    contents.OnDemandPercentageAboveBaseCapacity = parseInt(
      output["OnDemandPercentageAboveBaseCapacity"]
    );
  }
  if (output["SpotAllocationStrategy"] !== undefined) {
    contents.SpotAllocationStrategy = output["SpotAllocationStrategy"];
  }
  if (output["SpotInstancePools"] !== undefined) {
    contents.SpotInstancePools = parseInt(output["SpotInstancePools"]);
  }
  if (output["SpotMaxPrice"] !== undefined) {
    contents.SpotMaxPrice = output["SpotMaxPrice"];
  }
  return contents;
};

const deserializeAws_queryInvalidNextToken = (
  output: any,
  context: __SerdeContext
): InvalidNextToken => {
  let contents: any = {
    __type: "InvalidNextToken",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): LaunchConfiguration => {
  let contents: any = {
    __type: "LaunchConfiguration",
    AssociatePublicIpAddress: undefined,
    BlockDeviceMappings: undefined,
    ClassicLinkVPCId: undefined,
    ClassicLinkVPCSecurityGroups: undefined,
    CreatedTime: undefined,
    EbsOptimized: undefined,
    IamInstanceProfile: undefined,
    ImageId: undefined,
    InstanceMonitoring: undefined,
    InstanceType: undefined,
    KernelId: undefined,
    KeyName: undefined,
    LaunchConfigurationARN: undefined,
    LaunchConfigurationName: undefined,
    PlacementTenancy: undefined,
    RamdiskId: undefined,
    SecurityGroups: undefined,
    SpotPrice: undefined,
    UserData: undefined
  };
  if (output["AssociatePublicIpAddress"] !== undefined) {
    contents.AssociatePublicIpAddress =
      output["AssociatePublicIpAddress"] == "true";
  }
  if (output.BlockDeviceMappings === "") {
    contents.BlockDeviceMappings = [];
  }
  if (
    output["BlockDeviceMappings"] !== undefined &&
    output["BlockDeviceMappings"]["member"] !== undefined
  ) {
    contents.BlockDeviceMappings = deserializeAws_queryBlockDeviceMappings(
      __getArrayIfSingleItem(output["BlockDeviceMappings"]["member"]),
      context
    );
  }
  if (output["ClassicLinkVPCId"] !== undefined) {
    contents.ClassicLinkVPCId = output["ClassicLinkVPCId"];
  }
  if (output.ClassicLinkVPCSecurityGroups === "") {
    contents.ClassicLinkVPCSecurityGroups = [];
  }
  if (
    output["ClassicLinkVPCSecurityGroups"] !== undefined &&
    output["ClassicLinkVPCSecurityGroups"]["member"] !== undefined
  ) {
    contents.ClassicLinkVPCSecurityGroups = deserializeAws_queryClassicLinkVPCSecurityGroups(
      __getArrayIfSingleItem(output["ClassicLinkVPCSecurityGroups"]["member"]),
      context
    );
  }
  if (output["CreatedTime"] !== undefined) {
    contents.CreatedTime = new Date(output["CreatedTime"]);
  }
  if (output["EbsOptimized"] !== undefined) {
    contents.EbsOptimized = output["EbsOptimized"] == "true";
  }
  if (output["IamInstanceProfile"] !== undefined) {
    contents.IamInstanceProfile = output["IamInstanceProfile"];
  }
  if (output["ImageId"] !== undefined) {
    contents.ImageId = output["ImageId"];
  }
  if (output["InstanceMonitoring"] !== undefined) {
    contents.InstanceMonitoring = deserializeAws_queryInstanceMonitoring(
      output["InstanceMonitoring"],
      context
    );
  }
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["KernelId"] !== undefined) {
    contents.KernelId = output["KernelId"];
  }
  if (output["KeyName"] !== undefined) {
    contents.KeyName = output["KeyName"];
  }
  if (output["LaunchConfigurationARN"] !== undefined) {
    contents.LaunchConfigurationARN = output["LaunchConfigurationARN"];
  }
  if (output["LaunchConfigurationName"] !== undefined) {
    contents.LaunchConfigurationName = output["LaunchConfigurationName"];
  }
  if (output["PlacementTenancy"] !== undefined) {
    contents.PlacementTenancy = output["PlacementTenancy"];
  }
  if (output["RamdiskId"] !== undefined) {
    contents.RamdiskId = output["RamdiskId"];
  }
  if (output.SecurityGroups === "") {
    contents.SecurityGroups = [];
  }
  if (
    output["SecurityGroups"] !== undefined &&
    output["SecurityGroups"]["member"] !== undefined
  ) {
    contents.SecurityGroups = deserializeAws_querySecurityGroups(
      __getArrayIfSingleItem(output["SecurityGroups"]["member"]),
      context
    );
  }
  if (output["SpotPrice"] !== undefined) {
    contents.SpotPrice = output["SpotPrice"];
  }
  if (output["UserData"] !== undefined) {
    contents.UserData = output["UserData"];
  }
  return contents;
};

const deserializeAws_queryLaunchConfigurations = (
  output: any,
  context: __SerdeContext
): LaunchConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLaunchConfiguration(entry, context)
  );
};

const deserializeAws_queryLaunchConfigurationsType = (
  output: any,
  context: __SerdeContext
): LaunchConfigurationsType => {
  let contents: any = {
    __type: "LaunchConfigurationsType",
    LaunchConfigurations: undefined,
    NextToken: undefined
  };
  if (output.LaunchConfigurations === "") {
    contents.LaunchConfigurations = [];
  }
  if (
    output["LaunchConfigurations"] !== undefined &&
    output["LaunchConfigurations"]["member"] !== undefined
  ) {
    contents.LaunchConfigurations = deserializeAws_queryLaunchConfigurations(
      __getArrayIfSingleItem(output["LaunchConfigurations"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryLaunchTemplate = (
  output: any,
  context: __SerdeContext
): LaunchTemplate => {
  let contents: any = {
    __type: "LaunchTemplate",
    LaunchTemplateSpecification: undefined,
    Overrides: undefined
  };
  if (output["LaunchTemplateSpecification"] !== undefined) {
    contents.LaunchTemplateSpecification = deserializeAws_queryLaunchTemplateSpecification(
      output["LaunchTemplateSpecification"],
      context
    );
  }
  if (output.Overrides === "") {
    contents.Overrides = [];
  }
  if (
    output["Overrides"] !== undefined &&
    output["Overrides"]["member"] !== undefined
  ) {
    contents.Overrides = deserializeAws_queryOverrides(
      __getArrayIfSingleItem(output["Overrides"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateOverrides = (
  output: any,
  context: __SerdeContext
): LaunchTemplateOverrides => {
  let contents: any = {
    __type: "LaunchTemplateOverrides",
    InstanceType: undefined,
    WeightedCapacity: undefined
  };
  if (output["InstanceType"] !== undefined) {
    contents.InstanceType = output["InstanceType"];
  }
  if (output["WeightedCapacity"] !== undefined) {
    contents.WeightedCapacity = output["WeightedCapacity"];
  }
  return contents;
};

const deserializeAws_queryLaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  let contents: any = {
    __type: "LaunchTemplateSpecification",
    LaunchTemplateId: undefined,
    LaunchTemplateName: undefined,
    Version: undefined
  };
  if (output["LaunchTemplateId"] !== undefined) {
    contents.LaunchTemplateId = output["LaunchTemplateId"];
  }
  if (output["LaunchTemplateName"] !== undefined) {
    contents.LaunchTemplateName = output["LaunchTemplateName"];
  }
  if (output["Version"] !== undefined) {
    contents.Version = output["Version"];
  }
  return contents;
};

const deserializeAws_queryLifecycleHook = (
  output: any,
  context: __SerdeContext
): LifecycleHook => {
  let contents: any = {
    __type: "LifecycleHook",
    AutoScalingGroupName: undefined,
    DefaultResult: undefined,
    GlobalTimeout: undefined,
    HeartbeatTimeout: undefined,
    LifecycleHookName: undefined,
    LifecycleTransition: undefined,
    NotificationMetadata: undefined,
    NotificationTargetARN: undefined,
    RoleARN: undefined
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["DefaultResult"] !== undefined) {
    contents.DefaultResult = output["DefaultResult"];
  }
  if (output["GlobalTimeout"] !== undefined) {
    contents.GlobalTimeout = parseInt(output["GlobalTimeout"]);
  }
  if (output["HeartbeatTimeout"] !== undefined) {
    contents.HeartbeatTimeout = parseInt(output["HeartbeatTimeout"]);
  }
  if (output["LifecycleHookName"] !== undefined) {
    contents.LifecycleHookName = output["LifecycleHookName"];
  }
  if (output["LifecycleTransition"] !== undefined) {
    contents.LifecycleTransition = output["LifecycleTransition"];
  }
  if (output["NotificationMetadata"] !== undefined) {
    contents.NotificationMetadata = output["NotificationMetadata"];
  }
  if (output["NotificationTargetARN"] !== undefined) {
    contents.NotificationTargetARN = output["NotificationTargetARN"];
  }
  if (output["RoleARN"] !== undefined) {
    contents.RoleARN = output["RoleARN"];
  }
  return contents;
};

const deserializeAws_queryLifecycleHooks = (
  output: any,
  context: __SerdeContext
): LifecycleHook[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLifecycleHook(entry, context)
  );
};

const deserializeAws_queryLimitExceededFault = (
  output: any,
  context: __SerdeContext
): LimitExceededFault => {
  let contents: any = {
    __type: "LimitExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryLoadBalancerState = (
  output: any,
  context: __SerdeContext
): LoadBalancerState => {
  let contents: any = {
    __type: "LoadBalancerState",
    LoadBalancerName: undefined,
    State: undefined
  };
  if (output["LoadBalancerName"] !== undefined) {
    contents.LoadBalancerName = output["LoadBalancerName"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerStates = (
  output: any,
  context: __SerdeContext
): LoadBalancerState[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancerState(entry, context)
  );
};

const deserializeAws_queryLoadBalancerTargetGroupState = (
  output: any,
  context: __SerdeContext
): LoadBalancerTargetGroupState => {
  let contents: any = {
    __type: "LoadBalancerTargetGroupState",
    LoadBalancerTargetGroupARN: undefined,
    State: undefined
  };
  if (output["LoadBalancerTargetGroupARN"] !== undefined) {
    contents.LoadBalancerTargetGroupARN = output["LoadBalancerTargetGroupARN"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};

const deserializeAws_queryLoadBalancerTargetGroupStates = (
  output: any,
  context: __SerdeContext
): LoadBalancerTargetGroupState[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLoadBalancerTargetGroupState(entry, context)
  );
};

const deserializeAws_queryMetricCollectionType = (
  output: any,
  context: __SerdeContext
): MetricCollectionType => {
  let contents: any = {
    __type: "MetricCollectionType",
    Metric: undefined
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = output["Metric"];
  }
  return contents;
};

const deserializeAws_queryMetricCollectionTypes = (
  output: any,
  context: __SerdeContext
): MetricCollectionType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricCollectionType(entry, context)
  );
};

const deserializeAws_queryMetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  let contents: any = {
    __type: "MetricDimension",
    Name: undefined,
    Value: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryMetricDimensions = (
  output: any,
  context: __SerdeContext
): MetricDimension[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricDimension(entry, context)
  );
};

const deserializeAws_queryMetricGranularityType = (
  output: any,
  context: __SerdeContext
): MetricGranularityType => {
  let contents: any = {
    __type: "MetricGranularityType",
    Granularity: undefined
  };
  if (output["Granularity"] !== undefined) {
    contents.Granularity = output["Granularity"];
  }
  return contents;
};

const deserializeAws_queryMetricGranularityTypes = (
  output: any,
  context: __SerdeContext
): MetricGranularityType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricGranularityType(entry, context)
  );
};

const deserializeAws_queryMixedInstancesPolicy = (
  output: any,
  context: __SerdeContext
): MixedInstancesPolicy => {
  let contents: any = {
    __type: "MixedInstancesPolicy",
    InstancesDistribution: undefined,
    LaunchTemplate: undefined
  };
  if (output["InstancesDistribution"] !== undefined) {
    contents.InstancesDistribution = deserializeAws_queryInstancesDistribution(
      output["InstancesDistribution"],
      context
    );
  }
  if (output["LaunchTemplate"] !== undefined) {
    contents.LaunchTemplate = deserializeAws_queryLaunchTemplate(
      output["LaunchTemplate"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  let contents: any = {
    __type: "NotificationConfiguration",
    AutoScalingGroupName: undefined,
    NotificationType: undefined,
    TopicARN: undefined
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["NotificationType"] !== undefined) {
    contents.NotificationType = output["NotificationType"];
  }
  if (output["TopicARN"] !== undefined) {
    contents.TopicARN = output["TopicARN"];
  }
  return contents;
};

const deserializeAws_queryNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryNotificationConfiguration(entry, context)
  );
};

const deserializeAws_queryOverrides = (
  output: any,
  context: __SerdeContext
): LaunchTemplateOverrides[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryLaunchTemplateOverrides(entry, context)
  );
};

const deserializeAws_queryPoliciesType = (
  output: any,
  context: __SerdeContext
): PoliciesType => {
  let contents: any = {
    __type: "PoliciesType",
    NextToken: undefined,
    ScalingPolicies: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.ScalingPolicies === "") {
    contents.ScalingPolicies = [];
  }
  if (
    output["ScalingPolicies"] !== undefined &&
    output["ScalingPolicies"]["member"] !== undefined
  ) {
    contents.ScalingPolicies = deserializeAws_queryScalingPolicies(
      __getArrayIfSingleItem(output["ScalingPolicies"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPolicyARNType = (
  output: any,
  context: __SerdeContext
): PolicyARNType => {
  let contents: any = {
    __type: "PolicyARNType",
    Alarms: undefined,
    PolicyARN: undefined
  };
  if (output.Alarms === "") {
    contents.Alarms = [];
  }
  if (
    output["Alarms"] !== undefined &&
    output["Alarms"]["member"] !== undefined
  ) {
    contents.Alarms = deserializeAws_queryAlarms(
      __getArrayIfSingleItem(output["Alarms"]["member"]),
      context
    );
  }
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = output["PolicyARN"];
  }
  return contents;
};

const deserializeAws_queryPredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  let contents: any = {
    __type: "PredefinedMetricSpecification",
    PredefinedMetricType: undefined,
    ResourceLabel: undefined
  };
  if (output["PredefinedMetricType"] !== undefined) {
    contents.PredefinedMetricType = output["PredefinedMetricType"];
  }
  if (output["ResourceLabel"] !== undefined) {
    contents.ResourceLabel = output["ResourceLabel"];
  }
  return contents;
};

const deserializeAws_queryProcesses = (
  output: any,
  context: __SerdeContext
): ProcessType[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryProcessType(entry, context)
  );
};

const deserializeAws_queryProcessesType = (
  output: any,
  context: __SerdeContext
): ProcessesType => {
  let contents: any = {
    __type: "ProcessesType",
    Processes: undefined
  };
  if (output.Processes === "") {
    contents.Processes = [];
  }
  if (
    output["Processes"] !== undefined &&
    output["Processes"]["member"] !== undefined
  ) {
    contents.Processes = deserializeAws_queryProcesses(
      __getArrayIfSingleItem(output["Processes"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryProcessType = (
  output: any,
  context: __SerdeContext
): ProcessType => {
  let contents: any = {
    __type: "ProcessType",
    ProcessName: undefined
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = output["ProcessName"];
  }
  return contents;
};

const deserializeAws_queryPutLifecycleHookAnswer = (
  output: any,
  context: __SerdeContext
): PutLifecycleHookAnswer => {
  let contents: any = {
    __type: "PutLifecycleHookAnswer"
  };
  return contents;
};

const deserializeAws_queryRecordLifecycleActionHeartbeatAnswer = (
  output: any,
  context: __SerdeContext
): RecordLifecycleActionHeartbeatAnswer => {
  let contents: any = {
    __type: "RecordLifecycleActionHeartbeatAnswer"
  };
  return contents;
};

const deserializeAws_queryResourceContentionFault = (
  output: any,
  context: __SerdeContext
): ResourceContentionFault => {
  let contents: any = {
    __type: "ResourceContentionFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryResourceInUseFault = (
  output: any,
  context: __SerdeContext
): ResourceInUseFault => {
  let contents: any = {
    __type: "ResourceInUseFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryScalingActivityInProgressFault = (
  output: any,
  context: __SerdeContext
): ScalingActivityInProgressFault => {
  let contents: any = {
    __type: "ScalingActivityInProgressFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryScalingPolicies = (
  output: any,
  context: __SerdeContext
): ScalingPolicy[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryScalingPolicy(entry, context)
  );
};

const deserializeAws_queryScalingPolicy = (
  output: any,
  context: __SerdeContext
): ScalingPolicy => {
  let contents: any = {
    __type: "ScalingPolicy",
    AdjustmentType: undefined,
    Alarms: undefined,
    AutoScalingGroupName: undefined,
    Cooldown: undefined,
    EstimatedInstanceWarmup: undefined,
    MetricAggregationType: undefined,
    MinAdjustmentMagnitude: undefined,
    MinAdjustmentStep: undefined,
    PolicyARN: undefined,
    PolicyName: undefined,
    PolicyType: undefined,
    ScalingAdjustment: undefined,
    StepAdjustments: undefined,
    TargetTrackingConfiguration: undefined
  };
  if (output["AdjustmentType"] !== undefined) {
    contents.AdjustmentType = output["AdjustmentType"];
  }
  if (output.Alarms === "") {
    contents.Alarms = [];
  }
  if (
    output["Alarms"] !== undefined &&
    output["Alarms"]["member"] !== undefined
  ) {
    contents.Alarms = deserializeAws_queryAlarms(
      __getArrayIfSingleItem(output["Alarms"]["member"]),
      context
    );
  }
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["Cooldown"] !== undefined) {
    contents.Cooldown = parseInt(output["Cooldown"]);
  }
  if (output["EstimatedInstanceWarmup"] !== undefined) {
    contents.EstimatedInstanceWarmup = parseInt(
      output["EstimatedInstanceWarmup"]
    );
  }
  if (output["MetricAggregationType"] !== undefined) {
    contents.MetricAggregationType = output["MetricAggregationType"];
  }
  if (output["MinAdjustmentMagnitude"] !== undefined) {
    contents.MinAdjustmentMagnitude = parseInt(
      output["MinAdjustmentMagnitude"]
    );
  }
  if (output["MinAdjustmentStep"] !== undefined) {
    contents.MinAdjustmentStep = parseInt(output["MinAdjustmentStep"]);
  }
  if (output["PolicyARN"] !== undefined) {
    contents.PolicyARN = output["PolicyARN"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["PolicyType"] !== undefined) {
    contents.PolicyType = output["PolicyType"];
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
  }
  if (output.StepAdjustments === "") {
    contents.StepAdjustments = [];
  }
  if (
    output["StepAdjustments"] !== undefined &&
    output["StepAdjustments"]["member"] !== undefined
  ) {
    contents.StepAdjustments = deserializeAws_queryStepAdjustments(
      __getArrayIfSingleItem(output["StepAdjustments"]["member"]),
      context
    );
  }
  if (output["TargetTrackingConfiguration"] !== undefined) {
    contents.TargetTrackingConfiguration = deserializeAws_queryTargetTrackingConfiguration(
      output["TargetTrackingConfiguration"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryScheduledActionsType = (
  output: any,
  context: __SerdeContext
): ScheduledActionsType => {
  let contents: any = {
    __type: "ScheduledActionsType",
    NextToken: undefined,
    ScheduledUpdateGroupActions: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.ScheduledUpdateGroupActions === "") {
    contents.ScheduledUpdateGroupActions = [];
  }
  if (
    output["ScheduledUpdateGroupActions"] !== undefined &&
    output["ScheduledUpdateGroupActions"]["member"] !== undefined
  ) {
    contents.ScheduledUpdateGroupActions = deserializeAws_queryScheduledUpdateGroupActions(
      __getArrayIfSingleItem(output["ScheduledUpdateGroupActions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryScheduledUpdateGroupAction = (
  output: any,
  context: __SerdeContext
): ScheduledUpdateGroupAction => {
  let contents: any = {
    __type: "ScheduledUpdateGroupAction",
    AutoScalingGroupName: undefined,
    DesiredCapacity: undefined,
    EndTime: undefined,
    MaxSize: undefined,
    MinSize: undefined,
    Recurrence: undefined,
    ScheduledActionARN: undefined,
    ScheduledActionName: undefined,
    StartTime: undefined,
    Time: undefined
  };
  if (output["AutoScalingGroupName"] !== undefined) {
    contents.AutoScalingGroupName = output["AutoScalingGroupName"];
  }
  if (output["DesiredCapacity"] !== undefined) {
    contents.DesiredCapacity = parseInt(output["DesiredCapacity"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["MaxSize"] !== undefined) {
    contents.MaxSize = parseInt(output["MaxSize"]);
  }
  if (output["MinSize"] !== undefined) {
    contents.MinSize = parseInt(output["MinSize"]);
  }
  if (output["Recurrence"] !== undefined) {
    contents.Recurrence = output["Recurrence"];
  }
  if (output["ScheduledActionARN"] !== undefined) {
    contents.ScheduledActionARN = output["ScheduledActionARN"];
  }
  if (output["ScheduledActionName"] !== undefined) {
    contents.ScheduledActionName = output["ScheduledActionName"];
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["Time"] !== undefined) {
    contents.Time = new Date(output["Time"]);
  }
  return contents;
};

const deserializeAws_queryScheduledUpdateGroupActions = (
  output: any,
  context: __SerdeContext
): ScheduledUpdateGroupAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryScheduledUpdateGroupAction(entry, context)
  );
};

const deserializeAws_querySecurityGroups = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryServiceLinkedRoleFailure = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleFailure => {
  let contents: any = {
    __type: "ServiceLinkedRoleFailure",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_querySetInstanceProtectionAnswer = (
  output: any,
  context: __SerdeContext
): SetInstanceProtectionAnswer => {
  let contents: any = {
    __type: "SetInstanceProtectionAnswer"
  };
  return contents;
};

const deserializeAws_queryStepAdjustment = (
  output: any,
  context: __SerdeContext
): StepAdjustment => {
  let contents: any = {
    __type: "StepAdjustment",
    MetricIntervalLowerBound: undefined,
    MetricIntervalUpperBound: undefined,
    ScalingAdjustment: undefined
  };
  if (output["MetricIntervalLowerBound"] !== undefined) {
    contents.MetricIntervalLowerBound = parseFloat(
      output["MetricIntervalLowerBound"]
    );
  }
  if (output["MetricIntervalUpperBound"] !== undefined) {
    contents.MetricIntervalUpperBound = parseFloat(
      output["MetricIntervalUpperBound"]
    );
  }
  if (output["ScalingAdjustment"] !== undefined) {
    contents.ScalingAdjustment = parseInt(output["ScalingAdjustment"]);
  }
  return contents;
};

const deserializeAws_queryStepAdjustments = (
  output: any,
  context: __SerdeContext
): StepAdjustment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryStepAdjustment(entry, context)
  );
};

const deserializeAws_querySuspendedProcess = (
  output: any,
  context: __SerdeContext
): SuspendedProcess => {
  let contents: any = {
    __type: "SuspendedProcess",
    ProcessName: undefined,
    SuspensionReason: undefined
  };
  if (output["ProcessName"] !== undefined) {
    contents.ProcessName = output["ProcessName"];
  }
  if (output["SuspensionReason"] !== undefined) {
    contents.SuspensionReason = output["SuspensionReason"];
  }
  return contents;
};

const deserializeAws_querySuspendedProcesses = (
  output: any,
  context: __SerdeContext
): SuspendedProcess[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_querySuspendedProcess(entry, context)
  );
};

const deserializeAws_queryTagDescription = (
  output: any,
  context: __SerdeContext
): TagDescription => {
  let contents: any = {
    __type: "TagDescription",
    Key: undefined,
    PropagateAtLaunch: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["PropagateAtLaunch"] !== undefined) {
    contents.PropagateAtLaunch = output["PropagateAtLaunch"] == "true";
  }
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = output["ResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagDescriptionList = (
  output: any,
  context: __SerdeContext
): TagDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTagDescription(entry, context)
  );
};

const deserializeAws_queryTagsType = (
  output: any,
  context: __SerdeContext
): TagsType => {
  let contents: any = {
    __type: "TagsType",
    NextToken: undefined,
    Tags: undefined
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagDescriptionList(
      __getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryTargetGroupARNs = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryTargetTrackingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration => {
  let contents: any = {
    __type: "TargetTrackingConfiguration",
    CustomizedMetricSpecification: undefined,
    DisableScaleIn: undefined,
    PredefinedMetricSpecification: undefined,
    TargetValue: undefined
  };
  if (output["CustomizedMetricSpecification"] !== undefined) {
    contents.CustomizedMetricSpecification = deserializeAws_queryCustomizedMetricSpecification(
      output["CustomizedMetricSpecification"],
      context
    );
  }
  if (output["DisableScaleIn"] !== undefined) {
    contents.DisableScaleIn = output["DisableScaleIn"] == "true";
  }
  if (output["PredefinedMetricSpecification"] !== undefined) {
    contents.PredefinedMetricSpecification = deserializeAws_queryPredefinedMetricSpecification(
      output["PredefinedMetricSpecification"],
      context
    );
  }
  if (output["TargetValue"] !== undefined) {
    contents.TargetValue = parseFloat(output["TargetValue"]);
  }
  return contents;
};

const deserializeAws_queryTerminationPolicies = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
      });
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

const buildFormUrlencodedString = (formEntries: {
  [key: string]: string;
}): string =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(value)
    )
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
