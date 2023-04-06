// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput } from "../commands/AddInstanceFleetCommand";
import { AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput } from "../commands/AddInstanceGroupsCommand";
import { AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput } from "../commands/AddJobFlowStepsCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CancelStepsCommandInput, CancelStepsCommandOutput } from "../commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "../commands/CreateSecurityConfigurationCommand";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "../commands/CreateStudioCommand";
import {
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "../commands/CreateStudioSessionMappingCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "../commands/DeleteSecurityConfigurationCommand";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "../commands/DeleteStudioCommand";
import {
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "../commands/DeleteStudioSessionMappingCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import { DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput } from "../commands/DescribeJobFlowsCommand";
import {
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "../commands/DescribeNotebookExecutionCommand";
import {
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
} from "../commands/DescribeReleaseLabelCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "../commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommandInput, DescribeStepCommandOutput } from "../commands/DescribeStepCommand";
import { DescribeStudioCommandInput, DescribeStudioCommandOutput } from "../commands/DescribeStudioCommand";
import {
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
} from "../commands/GetAutoTerminationPolicyCommand";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "../commands/GetBlockPublicAccessConfigurationCommand";
import {
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
} from "../commands/GetClusterSessionCredentialsCommand";
import {
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "../commands/GetManagedScalingPolicyCommand";
import {
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "../commands/GetStudioSessionMappingCommand";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "../commands/ListBootstrapActionsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import { ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput } from "../commands/ListInstanceFleetsCommand";
import { ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput } from "../commands/ListInstanceGroupsCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "../commands/ListNotebookExecutionsCommand";
import { ListReleaseLabelsCommandInput, ListReleaseLabelsCommandOutput } from "../commands/ListReleaseLabelsCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import {
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "../commands/ListStudioSessionMappingsCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "../commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "../commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "../commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "../commands/PutAutoScalingPolicyCommand";
import {
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
} from "../commands/PutAutoTerminationPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "../commands/PutBlockPublicAccessConfigurationCommand";
import {
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "../commands/PutManagedScalingPolicyCommand";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "../commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
} from "../commands/RemoveAutoTerminationPolicyCommand";
import {
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "../commands/RemoveManagedScalingPolicyCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import { RunJobFlowCommandInput, RunJobFlowCommandOutput } from "../commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "../commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "../commands/SetVisibleToAllUsersCommand";
import {
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "../commands/StartNotebookExecutionCommand";
import {
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "../commands/StopNotebookExecutionCommand";
import { TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput } from "../commands/TerminateJobFlowsCommand";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "../commands/UpdateStudioCommand";
import {
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "../commands/UpdateStudioSessionMappingCommand";
import { EMRServiceException as __BaseException } from "../models/EMRServiceException";
import {
  AddInstanceFleetInput,
  AddInstanceFleetOutput,
  AddInstanceGroupsInput,
  AddInstanceGroupsOutput,
  AddJobFlowStepsInput,
  AddJobFlowStepsOutput,
  AddTagsInput,
  AddTagsOutput,
  Application,
  AutoScalingPolicy,
  AutoScalingPolicyDescription,
  AutoScalingPolicyStateChangeReason,
  AutoScalingPolicyStatus,
  AutoTerminationPolicy,
  BlockPublicAccessConfiguration,
  BlockPublicAccessConfigurationMetadata,
  BootstrapActionConfig,
  BootstrapActionDetail,
  CancelStepsInfo,
  CancelStepsInput,
  CancelStepsOutput,
  CloudWatchAlarmDefinition,
  Cluster,
  ClusterState,
  ClusterStateChangeReason,
  ClusterStatus,
  ClusterSummary,
  ClusterTimeline,
  Command,
  ComputeLimits,
  Configuration,
  CreateSecurityConfigurationInput,
  CreateSecurityConfigurationOutput,
  CreateStudioInput,
  CreateStudioOutput,
  CreateStudioSessionMappingInput,
  Credentials,
  DeleteSecurityConfigurationInput,
  DeleteSecurityConfigurationOutput,
  DeleteStudioInput,
  DeleteStudioSessionMappingInput,
  DescribeClusterInput,
  DescribeClusterOutput,
  DescribeJobFlowsInput,
  DescribeJobFlowsOutput,
  DescribeNotebookExecutionInput,
  DescribeNotebookExecutionOutput,
  DescribeReleaseLabelInput,
  DescribeReleaseLabelOutput,
  DescribeSecurityConfigurationInput,
  DescribeSecurityConfigurationOutput,
  DescribeStepInput,
  DescribeStepOutput,
  DescribeStudioInput,
  DescribeStudioOutput,
  EbsBlockDevice,
  EbsBlockDeviceConfig,
  EbsConfiguration,
  EbsVolume,
  Ec2InstanceAttributes,
  ErrorDetail,
  ExecutionEngineConfig,
  FailureDetails,
  GetAutoTerminationPolicyInput,
  GetAutoTerminationPolicyOutput,
  GetBlockPublicAccessConfigurationInput,
  GetBlockPublicAccessConfigurationOutput,
  GetClusterSessionCredentialsInput,
  GetClusterSessionCredentialsOutput,
  GetManagedScalingPolicyInput,
  GetManagedScalingPolicyOutput,
  GetStudioSessionMappingInput,
  GetStudioSessionMappingOutput,
  HadoopJarStepConfig,
  HadoopStepConfig,
  Instance,
  InstanceFleet,
  InstanceFleetConfig,
  InstanceFleetModifyConfig,
  InstanceFleetProvisioningSpecifications,
  InstanceFleetResizingSpecifications,
  InstanceFleetStateChangeReason,
  InstanceFleetStatus,
  InstanceFleetTimeline,
  InstanceGroup,
  InstanceGroupConfig,
  InstanceGroupDetail,
  InstanceGroupModifyConfig,
  InstanceGroupStateChangeReason,
  InstanceGroupStatus,
  InstanceGroupTimeline,
  InstanceGroupType,
  InstanceResizePolicy,
  InstanceState,
  InstanceStateChangeReason,
  InstanceStatus,
  InstanceTimeline,
  InstanceTypeConfig,
  InstanceTypeSpecification,
  InternalServerError,
  InternalServerException,
  InvalidRequestException,
  JobFlowDetail,
  JobFlowExecutionState,
  JobFlowExecutionStatusDetail,
  JobFlowInstancesConfig,
  JobFlowInstancesDetail,
  KerberosAttributes,
  KeyValue,
  ListBootstrapActionsInput,
  ListBootstrapActionsOutput,
  ListClustersInput,
  ListClustersOutput,
  ListInstanceFleetsInput,
  ListInstanceFleetsOutput,
  ListInstanceGroupsInput,
  ListInstanceGroupsOutput,
  ListInstancesInput,
  ListInstancesOutput,
  ListNotebookExecutionsInput,
  ListNotebookExecutionsOutput,
  ListReleaseLabelsInput,
  ListReleaseLabelsOutput,
  ListSecurityConfigurationsInput,
  ListSecurityConfigurationsOutput,
  ListStepsInput,
  ListStepsOutput,
  ListStudioSessionMappingsInput,
  ListStudioSessionMappingsOutput,
  ListStudiosInput,
  ListStudiosOutput,
  ManagedScalingPolicy,
  MetricDimension,
  ModifyClusterInput,
  ModifyClusterOutput,
  ModifyInstanceFleetInput,
  ModifyInstanceGroupsInput,
  NotebookExecution,
  NotebookExecutionSummary,
  OnDemandCapacityReservationOptions,
  OnDemandProvisioningSpecification,
  OnDemandResizingSpecification,
  OSRelease,
  PlacementGroupConfig,
  PlacementType,
  PortRange,
  PutAutoScalingPolicyInput,
  PutAutoScalingPolicyOutput,
  PutAutoTerminationPolicyInput,
  PutAutoTerminationPolicyOutput,
  PutBlockPublicAccessConfigurationInput,
  PutBlockPublicAccessConfigurationOutput,
  PutManagedScalingPolicyInput,
  PutManagedScalingPolicyOutput,
  ReleaseLabelFilter,
  RemoveAutoScalingPolicyInput,
  RemoveAutoScalingPolicyOutput,
  RemoveAutoTerminationPolicyInput,
  RemoveAutoTerminationPolicyOutput,
  RemoveManagedScalingPolicyInput,
  RemoveManagedScalingPolicyOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  RunJobFlowInput,
  RunJobFlowOutput,
  ScalingAction,
  ScalingConstraints,
  ScalingRule,
  ScalingTrigger,
  ScriptBootstrapActionConfig,
  SecurityConfigurationSummary,
  SessionMappingDetail,
  SessionMappingSummary,
  SetTerminationProtectionInput,
  SetVisibleToAllUsersInput,
  ShrinkPolicy,
  SimpleScalingPolicyConfiguration,
  SimplifiedApplication,
  SpotProvisioningSpecification,
  SpotResizingSpecification,
  StartNotebookExecutionInput,
  StartNotebookExecutionOutput,
  Step,
  StepConfig,
  StepDetail,
  StepExecutionStatusDetail,
  StepState,
  StepStateChangeReason,
  StepStatus,
  StepSummary,
  StepTimeline,
  StopNotebookExecutionInput,
  Studio,
  StudioSummary,
  SupportedProductConfig,
  Tag,
  TerminateJobFlowsInput,
  UpdateStudioInput,
  UpdateStudioSessionMappingInput,
  UsernamePassword,
  VolumeSpecification,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddInstanceFleetCommand
 */
export const se_AddInstanceFleetCommand = async (
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddInstanceFleet",
  };
  let body: any;
  body = JSON.stringify(se_AddInstanceFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddInstanceGroupsCommand
 */
export const se_AddInstanceGroupsCommand = async (
  input: AddInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(se_AddInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddJobFlowStepsCommand
 */
export const se_AddJobFlowStepsCommand = async (
  input: AddJobFlowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddJobFlowSteps",
  };
  let body: any;
  body = JSON.stringify(se_AddJobFlowStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddTags",
  };
  let body: any;
  body = JSON.stringify(se_AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelStepsCommand
 */
export const se_CancelStepsCommand = async (
  input: CancelStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CancelSteps",
  };
  let body: any;
  body = JSON.stringify(se_CancelStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSecurityConfigurationCommand
 */
export const se_CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_CreateSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioCommand
 */
export const se_CreateStudioCommand = async (
  input: CreateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateStudio",
  };
  let body: any;
  body = JSON.stringify(se_CreateStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioSessionMappingCommand
 */
export const se_CreateStudioSessionMappingCommand = async (
  input: CreateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(se_CreateStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSecurityConfigurationCommand
 */
export const se_DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioCommand
 */
export const se_DeleteStudioCommand = async (
  input: DeleteStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteStudio",
  };
  let body: any;
  body = JSON.stringify(se_DeleteStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioSessionMappingCommand
 */
export const se_DeleteStudioSessionMappingCommand = async (
  input: DeleteStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(se_DeleteStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeCluster",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeJobFlowsCommand
 */
export const se_DescribeJobFlowsCommand = async (
  input: DescribeJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeJobFlows",
  };
  let body: any;
  body = JSON.stringify(se_DescribeJobFlowsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotebookExecutionCommand
 */
export const se_DescribeNotebookExecutionCommand = async (
  input: DescribeNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(se_DescribeNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReleaseLabelCommand
 */
export const se_DescribeReleaseLabelCommand = async (
  input: DescribeReleaseLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeReleaseLabel",
  };
  let body: any;
  body = JSON.stringify(se_DescribeReleaseLabelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSecurityConfigurationCommand
 */
export const se_DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStepCommand
 */
export const se_DescribeStepCommand = async (
  input: DescribeStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeStep",
  };
  let body: any;
  body = JSON.stringify(se_DescribeStepInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStudioCommand
 */
export const se_DescribeStudioCommand = async (
  input: DescribeStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeStudio",
  };
  let body: any;
  body = JSON.stringify(se_DescribeStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutoTerminationPolicyCommand
 */
export const se_GetAutoTerminationPolicyCommand = async (
  input: GetAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlockPublicAccessConfigurationCommand
 */
export const se_GetBlockPublicAccessConfigurationCommand = async (
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetBlockPublicAccessConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_GetBlockPublicAccessConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetClusterSessionCredentialsCommand
 */
export const se_GetClusterSessionCredentialsCommand = async (
  input: GetClusterSessionCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetClusterSessionCredentials",
  };
  let body: any;
  body = JSON.stringify(se_GetClusterSessionCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetManagedScalingPolicyCommand
 */
export const se_GetManagedScalingPolicyCommand = async (
  input: GetManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStudioSessionMappingCommand
 */
export const se_GetStudioSessionMappingCommand = async (
  input: GetStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(se_GetStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBootstrapActionsCommand
 */
export const se_ListBootstrapActionsCommand = async (
  input: ListBootstrapActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListBootstrapActions",
  };
  let body: any;
  body = JSON.stringify(se_ListBootstrapActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListClusters",
  };
  let body: any;
  body = JSON.stringify(se_ListClustersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstanceFleetsCommand
 */
export const se_ListInstanceFleetsCommand = async (
  input: ListInstanceFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstanceFleets",
  };
  let body: any;
  body = JSON.stringify(se_ListInstanceFleetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstanceGroupsCommand
 */
export const se_ListInstanceGroupsCommand = async (
  input: ListInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstances",
  };
  let body: any;
  body = JSON.stringify(se_ListInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookExecutionsCommand
 */
export const se_ListNotebookExecutionsCommand = async (
  input: ListNotebookExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListNotebookExecutions",
  };
  let body: any;
  body = JSON.stringify(se_ListNotebookExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReleaseLabelsCommand
 */
export const se_ListReleaseLabelsCommand = async (
  input: ListReleaseLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListReleaseLabels",
  };
  let body: any;
  body = JSON.stringify(se_ListReleaseLabelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSecurityConfigurationsCommand
 */
export const se_ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListSecurityConfigurations",
  };
  let body: any;
  body = JSON.stringify(se_ListSecurityConfigurationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStepsCommand
 */
export const se_ListStepsCommand = async (
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListSteps",
  };
  let body: any;
  body = JSON.stringify(se_ListStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudiosCommand
 */
export const se_ListStudiosCommand = async (
  input: ListStudiosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListStudios",
  };
  let body: any;
  body = JSON.stringify(se_ListStudiosInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudioSessionMappingsCommand
 */
export const se_ListStudioSessionMappingsCommand = async (
  input: ListStudioSessionMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListStudioSessionMappings",
  };
  let body: any;
  body = JSON.stringify(se_ListStudioSessionMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClusterCommand
 */
export const se_ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyCluster",
  };
  let body: any;
  body = JSON.stringify(se_ModifyClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyInstanceFleetCommand
 */
export const se_ModifyInstanceFleetCommand = async (
  input: ModifyInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyInstanceFleet",
  };
  let body: any;
  body = JSON.stringify(se_ModifyInstanceFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyInstanceGroupsCommand
 */
export const se_ModifyInstanceGroupsCommand = async (
  input: ModifyInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(se_ModifyInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAutoScalingPolicyCommand
 */
export const se_PutAutoScalingPolicyCommand = async (
  input: PutAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAutoTerminationPolicyCommand
 */
export const se_PutAutoTerminationPolicyCommand = async (
  input: PutAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutBlockPublicAccessConfigurationCommand
 */
export const se_PutBlockPublicAccessConfigurationCommand = async (
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutBlockPublicAccessConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_PutBlockPublicAccessConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutManagedScalingPolicyCommand
 */
export const se_PutManagedScalingPolicyCommand = async (
  input: PutManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAutoScalingPolicyCommand
 */
export const se_RemoveAutoScalingPolicyCommand = async (
  input: RemoveAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(se_RemoveAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAutoTerminationPolicyCommand
 */
export const se_RemoveAutoTerminationPolicyCommand = async (
  input: RemoveAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(se_RemoveAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveManagedScalingPolicyCommand
 */
export const se_RemoveManagedScalingPolicyCommand = async (
  input: RemoveManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(se_RemoveManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveTags",
  };
  let body: any;
  body = JSON.stringify(se_RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunJobFlowCommand
 */
export const se_RunJobFlowCommand = async (
  input: RunJobFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RunJobFlow",
  };
  let body: any;
  body = JSON.stringify(se_RunJobFlowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetTerminationProtectionCommand
 */
export const se_SetTerminationProtectionCommand = async (
  input: SetTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.SetTerminationProtection",
  };
  let body: any;
  body = JSON.stringify(se_SetTerminationProtectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetVisibleToAllUsersCommand
 */
export const se_SetVisibleToAllUsersCommand = async (
  input: SetVisibleToAllUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.SetVisibleToAllUsers",
  };
  let body: any;
  body = JSON.stringify(se_SetVisibleToAllUsersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartNotebookExecutionCommand
 */
export const se_StartNotebookExecutionCommand = async (
  input: StartNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.StartNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(se_StartNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopNotebookExecutionCommand
 */
export const se_StopNotebookExecutionCommand = async (
  input: StopNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.StopNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(se_StopNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateJobFlowsCommand
 */
export const se_TerminateJobFlowsCommand = async (
  input: TerminateJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.TerminateJobFlows",
  };
  let body: any;
  body = JSON.stringify(se_TerminateJobFlowsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStudioCommand
 */
export const se_UpdateStudioCommand = async (
  input: UpdateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.UpdateStudio",
  };
  let body: any;
  body = JSON.stringify(se_UpdateStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStudioSessionMappingCommand
 */
export const se_UpdateStudioSessionMappingCommand = async (
  input: UpdateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.UpdateStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(se_UpdateStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddInstanceFleetCommand
 */
export const de_AddInstanceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddInstanceFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddInstanceFleetOutput(data, context);
  const response: AddInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddInstanceFleetCommandError
 */
const de_AddInstanceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddInstanceGroupsCommand
 */
export const de_AddInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddInstanceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddInstanceGroupsOutput(data, context);
  const response: AddInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddInstanceGroupsCommandError
 */
const de_AddInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddJobFlowStepsCommand
 */
export const de_AddJobFlowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddJobFlowStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddJobFlowStepsOutput(data, context);
  const response: AddJobFlowStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddJobFlowStepsCommandError
 */
const de_AddJobFlowStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelStepsCommand
 */
export const de_CancelStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelStepsOutput(data, context);
  const response: CancelStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelStepsCommandError
 */
const de_CancelStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSecurityConfigurationCommand
 */
export const de_CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecurityConfigurationOutput(data, context);
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSecurityConfigurationCommandError
 */
const de_CreateSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStudioCommand
 */
export const de_CreateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStudioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStudioOutput(data, context);
  const response: CreateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStudioCommandError
 */
const de_CreateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStudioSessionMappingCommand
 */
export const de_CreateStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStudioSessionMappingCommandError
 */
const de_CreateStudioSessionMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioSessionMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSecurityConfigurationCommand
 */
export const de_DeleteSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSecurityConfigurationOutput(data, context);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSecurityConfigurationCommandError
 */
const de_DeleteSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStudioCommand
 */
export const de_DeleteStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStudioCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStudioCommandError
 */
const de_DeleteStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStudioSessionMappingCommand
 */
export const de_DeleteStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStudioSessionMappingCommandError
 */
const de_DeleteStudioSessionMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioSessionMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClusterOutput(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClusterCommandError
 */
const de_DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeJobFlowsCommand
 */
export const de_DescribeJobFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeJobFlowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeJobFlowsOutput(data, context);
  const response: DescribeJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeJobFlowsCommandError
 */
const de_DescribeJobFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeNotebookExecutionCommand
 */
export const de_DescribeNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNotebookExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotebookExecutionOutput(data, context);
  const response: DescribeNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeNotebookExecutionCommandError
 */
const de_DescribeNotebookExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeReleaseLabelCommand
 */
export const de_DescribeReleaseLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReleaseLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReleaseLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReleaseLabelOutput(data, context);
  const response: DescribeReleaseLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeReleaseLabelCommandError
 */
const de_DescribeReleaseLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReleaseLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSecurityConfigurationCommand
 */
export const de_DescribeSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSecurityConfigurationOutput(data, context);
  const response: DescribeSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSecurityConfigurationCommandError
 */
const de_DescribeSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStepCommand
 */
export const de_DescribeStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStepCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStepOutput(data, context);
  const response: DescribeStepCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStepCommandError
 */
const de_DescribeStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStudioCommand
 */
export const de_DescribeStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStudioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStudioOutput(data, context);
  const response: DescribeStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStudioCommandError
 */
const de_DescribeStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAutoTerminationPolicyCommand
 */
export const de_GetAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAutoTerminationPolicyOutput(data, context);
  const response: GetAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAutoTerminationPolicyCommandError
 */
const de_GetAutoTerminationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoTerminationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand
 */
export const de_GetBlockPublicAccessConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlockPublicAccessConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlockPublicAccessConfigurationOutput(data, context);
  const response: GetBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError
 */
const de_GetBlockPublicAccessConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetClusterSessionCredentialsCommand
 */
export const de_GetClusterSessionCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterSessionCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetClusterSessionCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetClusterSessionCredentialsOutput(data, context);
  const response: GetClusterSessionCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetClusterSessionCredentialsCommandError
 */
const de_GetClusterSessionCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterSessionCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetManagedScalingPolicyCommand
 */
export const de_GetManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetManagedScalingPolicyOutput(data, context);
  const response: GetManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetManagedScalingPolicyCommandError
 */
const de_GetManagedScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetStudioSessionMappingCommand
 */
export const de_GetStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStudioSessionMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStudioSessionMappingOutput(data, context);
  const response: GetStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetStudioSessionMappingCommandError
 */
const de_GetStudioSessionMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioSessionMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBootstrapActionsCommand
 */
export const de_ListBootstrapActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBootstrapActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBootstrapActionsOutput(data, context);
  const response: ListBootstrapActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBootstrapActionsCommandError
 */
const de_ListBootstrapActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClustersOutput(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListClustersCommandError
 */
const de_ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInstanceFleetsCommand
 */
export const de_ListInstanceFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstanceFleetsOutput(data, context);
  const response: ListInstanceFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInstanceFleetsCommandError
 */
const de_ListInstanceFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInstanceGroupsCommand
 */
export const de_ListInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstanceGroupsOutput(data, context);
  const response: ListInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInstanceGroupsCommandError
 */
const de_ListInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstancesOutput(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListNotebookExecutionsCommand
 */
export const de_ListNotebookExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNotebookExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookExecutionsOutput(data, context);
  const response: ListNotebookExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNotebookExecutionsCommandError
 */
const de_ListNotebookExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListReleaseLabelsCommand
 */
export const de_ListReleaseLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReleaseLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReleaseLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReleaseLabelsOutput(data, context);
  const response: ListReleaseLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReleaseLabelsCommandError
 */
const de_ListReleaseLabelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReleaseLabelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSecurityConfigurationsCommand
 */
export const de_ListSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecurityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecurityConfigurationsOutput(data, context);
  const response: ListSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSecurityConfigurationsCommandError
 */
const de_ListSecurityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStepsCommand
 */
export const de_ListStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStepsOutput(data, context);
  const response: ListStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStepsCommandError
 */
const de_ListStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStudiosCommand
 */
export const de_ListStudiosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStudiosCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStudiosOutput(data, context);
  const response: ListStudiosCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStudiosCommandError
 */
const de_ListStudiosCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListStudioSessionMappingsCommand
 */
export const de_ListStudioSessionMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioSessionMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStudioSessionMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStudioSessionMappingsOutput(data, context);
  const response: ListStudioSessionMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStudioSessionMappingsCommandError
 */
const de_ListStudioSessionMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioSessionMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyClusterCommand
 */
export const de_ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterOutput(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyClusterCommandError
 */
const de_ModifyClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyInstanceFleetCommand
 */
export const de_ModifyInstanceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyInstanceFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyInstanceFleetCommandError
 */
const de_ModifyInstanceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ModifyInstanceGroupsCommand
 */
export const de_ModifyInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyInstanceGroupsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyInstanceGroupsCommandError
 */
const de_ModifyInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAutoScalingPolicyCommand
 */
export const de_PutAutoScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAutoScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAutoScalingPolicyOutput(data, context);
  const response: PutAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAutoScalingPolicyCommandError
 */
const de_PutAutoScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1PutAutoTerminationPolicyCommand
 */
export const de_PutAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAutoTerminationPolicyOutput(data, context);
  const response: PutAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAutoTerminationPolicyCommandError
 */
const de_PutAutoTerminationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoTerminationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand
 */
export const de_PutBlockPublicAccessConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutBlockPublicAccessConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutBlockPublicAccessConfigurationOutput(data, context);
  const response: PutBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError
 */
const de_PutBlockPublicAccessConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutManagedScalingPolicyCommand
 */
export const de_PutManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutManagedScalingPolicyOutput(data, context);
  const response: PutManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutManagedScalingPolicyCommandError
 */
const de_PutManagedScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1RemoveAutoScalingPolicyCommand
 */
export const de_RemoveAutoScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveAutoScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveAutoScalingPolicyOutput(data, context);
  const response: RemoveAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveAutoScalingPolicyCommandError
 */
const de_RemoveAutoScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1RemoveAutoTerminationPolicyCommand
 */
export const de_RemoveAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveAutoTerminationPolicyOutput(data, context);
  const response: RemoveAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveAutoTerminationPolicyCommandError
 */
const de_RemoveAutoTerminationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoTerminationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1RemoveManagedScalingPolicyCommand
 */
export const de_RemoveManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveManagedScalingPolicyOutput(data, context);
  const response: RemoveManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveManagedScalingPolicyCommandError
 */
const de_RemoveManagedScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveManagedScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1RemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RunJobFlowCommand
 */
export const de_RunJobFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RunJobFlowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RunJobFlowOutput(data, context);
  const response: RunJobFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RunJobFlowCommandError
 */
const de_RunJobFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetTerminationProtectionCommand
 */
export const de_SetTerminationProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTerminationProtectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetTerminationProtectionCommandError
 */
const de_SetTerminationProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetVisibleToAllUsersCommand
 */
export const de_SetVisibleToAllUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetVisibleToAllUsersCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetVisibleToAllUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetVisibleToAllUsersCommandError
 */
const de_SetVisibleToAllUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartNotebookExecutionCommand
 */
export const de_StartNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartNotebookExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartNotebookExecutionOutput(data, context);
  const response: StartNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartNotebookExecutionCommandError
 */
const de_StartNotebookExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopNotebookExecutionCommand
 */
export const de_StopNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopNotebookExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopNotebookExecutionCommandError
 */
const de_StopNotebookExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TerminateJobFlowsCommand
 */
export const de_TerminateJobFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateJobFlowsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateJobFlowsCommandError
 */
const de_TerminateJobFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStudioCommand
 */
export const de_UpdateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStudioCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStudioCommandError
 */
const de_UpdateStudioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStudioSessionMappingCommand
 */
export const de_UpdateStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStudioSessionMappingCommandError
 */
const de_UpdateStudioSessionMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioSessionMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddInstanceFleetInput
 */
const se_AddInstanceFleetInput = (input: AddInstanceFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet != null && { InstanceFleet: se_InstanceFleetConfig(input.InstanceFleet, context) }),
  };
};

/**
 * serializeAws_json1_1AddInstanceGroupsInput
 */
const se_AddInstanceGroupsInput = (input: AddInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.InstanceGroups != null && { InstanceGroups: se_InstanceGroupConfigList(input.InstanceGroups, context) }),
    ...(input.JobFlowId != null && { JobFlowId: input.JobFlowId }),
  };
};

/**
 * serializeAws_json1_1AddJobFlowStepsInput
 */
const se_AddJobFlowStepsInput = (input: AddJobFlowStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.JobFlowId != null && { JobFlowId: input.JobFlowId }),
    ...(input.Steps != null && { Steps: se_StepConfigList(input.Steps, context) }),
  };
};

/**
 * serializeAws_json1_1AddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Application
 */
const se_Application = (input: Application, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && { AdditionalInfo: se_StringMap(input.AdditionalInfo, context) }),
    ...(input.Args != null && { Args: se_StringList(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1ApplicationList
 */
const se_ApplicationList = (input: Application[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Application(entry, context);
    });
};

/**
 * serializeAws_json1_1AutoScalingPolicy
 */
const se_AutoScalingPolicy = (input: AutoScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Constraints != null && { Constraints: se_ScalingConstraints(input.Constraints, context) }),
    ...(input.Rules != null && { Rules: se_ScalingRuleList(input.Rules, context) }),
  };
};

/**
 * serializeAws_json1_1AutoTerminationPolicy
 */
const se_AutoTerminationPolicy = (input: AutoTerminationPolicy, context: __SerdeContext): any => {
  return {
    ...(input.IdleTimeout != null && { IdleTimeout: input.IdleTimeout }),
  };
};

/**
 * serializeAws_json1_1BlockPublicAccessConfiguration
 */
const se_BlockPublicAccessConfiguration = (input: BlockPublicAccessConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BlockPublicSecurityGroupRules != null && {
      BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules,
    }),
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.PermittedPublicSecurityGroupRuleRanges != null && {
      PermittedPublicSecurityGroupRuleRanges: se_PortRanges(input.PermittedPublicSecurityGroupRuleRanges, context),
    }),
    ...(input.Properties != null && { Properties: se_StringMap(input.Properties, context) }),
  };
};

/**
 * serializeAws_json1_1BootstrapActionConfig
 */
const se_BootstrapActionConfig = (input: BootstrapActionConfig, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScriptBootstrapAction != null && {
      ScriptBootstrapAction: se_ScriptBootstrapActionConfig(input.ScriptBootstrapAction, context),
    }),
  };
};

/**
 * serializeAws_json1_1BootstrapActionConfigList
 */
const se_BootstrapActionConfigList = (input: BootstrapActionConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BootstrapActionConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1CancelStepsInput
 */
const se_CancelStepsInput = (input: CancelStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepCancellationOption != null && { StepCancellationOption: input.StepCancellationOption }),
    ...(input.StepIds != null && { StepIds: se_StepIdsList(input.StepIds, context) }),
  };
};

/**
 * serializeAws_json1_1CloudWatchAlarmDefinition
 */
const se_CloudWatchAlarmDefinition = (input: CloudWatchAlarmDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Dimensions != null && { Dimensions: se_MetricDimensionList(input.Dimensions, context) }),
    ...(input.EvaluationPeriods != null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Period != null && { Period: input.Period }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

/**
 * serializeAws_json1_1ClusterStateList
 */
const se_ClusterStateList = (input: (ClusterState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ComputeLimits
 */
const se_ComputeLimits = (input: ComputeLimits, context: __SerdeContext): any => {
  return {
    ...(input.MaximumCapacityUnits != null && { MaximumCapacityUnits: input.MaximumCapacityUnits }),
    ...(input.MaximumCoreCapacityUnits != null && { MaximumCoreCapacityUnits: input.MaximumCoreCapacityUnits }),
    ...(input.MaximumOnDemandCapacityUnits != null && {
      MaximumOnDemandCapacityUnits: input.MaximumOnDemandCapacityUnits,
    }),
    ...(input.MinimumCapacityUnits != null && { MinimumCapacityUnits: input.MinimumCapacityUnits }),
    ...(input.UnitType != null && { UnitType: input.UnitType }),
  };
};

/**
 * serializeAws_json1_1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.Properties != null && { Properties: se_StringMap(input.Properties, context) }),
  };
};

/**
 * serializeAws_json1_1ConfigurationList
 */
const se_ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Configuration(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateSecurityConfigurationInput
 */
const se_CreateSecurityConfigurationInput = (input: CreateSecurityConfigurationInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
  };
};

/**
 * serializeAws_json1_1CreateStudioInput
 */
const se_CreateStudioInput = (input: CreateStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.AuthMode != null && { AuthMode: input.AuthMode }),
    ...(input.DefaultS3Location != null && { DefaultS3Location: input.DefaultS3Location }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineSecurityGroupId != null && { EngineSecurityGroupId: input.EngineSecurityGroupId }),
    ...(input.IdpAuthUrl != null && { IdpAuthUrl: input.IdpAuthUrl }),
    ...(input.IdpRelayStateParameterName != null && { IdpRelayStateParameterName: input.IdpRelayStateParameterName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserRole != null && { UserRole: input.UserRole }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
    ...(input.WorkspaceSecurityGroupId != null && { WorkspaceSecurityGroupId: input.WorkspaceSecurityGroupId }),
  };
};

/**
 * serializeAws_json1_1CreateStudioSessionMappingInput
 */
const se_CreateStudioSessionMappingInput = (input: CreateStudioSessionMappingInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn != null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1DeleteSecurityConfigurationInput
 */
const se_DeleteSecurityConfigurationInput = (input: DeleteSecurityConfigurationInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteStudioInput
 */
const se_DeleteStudioInput = (input: DeleteStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1DeleteStudioSessionMappingInput
 */
const se_DeleteStudioSessionMappingInput = (input: DeleteStudioSessionMappingInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1DescribeClusterInput
 */
const se_DescribeClusterInput = (input: DescribeClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1DescribeJobFlowsInput
 */
const se_DescribeJobFlowsInput = (input: DescribeJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.JobFlowIds != null && { JobFlowIds: se_XmlStringList(input.JobFlowIds, context) }),
    ...(input.JobFlowStates != null && { JobFlowStates: se_JobFlowExecutionStateList(input.JobFlowStates, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeNotebookExecutionInput
 */
const se_DescribeNotebookExecutionInput = (input: DescribeNotebookExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookExecutionId != null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

/**
 * serializeAws_json1_1DescribeReleaseLabelInput
 */
const se_DescribeReleaseLabelInput = (input: DescribeReleaseLabelInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ReleaseLabel != null && { ReleaseLabel: input.ReleaseLabel }),
  };
};

/**
 * serializeAws_json1_1DescribeSecurityConfigurationInput
 */
const se_DescribeSecurityConfigurationInput = (
  input: DescribeSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeStepInput
 */
const se_DescribeStepInput = (input: DescribeStepInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepId != null && { StepId: input.StepId }),
  };
};

/**
 * serializeAws_json1_1DescribeStudioInput
 */
const se_DescribeStudioInput = (input: DescribeStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1EbsBlockDeviceConfig
 */
const se_EbsBlockDeviceConfig = (input: EbsBlockDeviceConfig, context: __SerdeContext): any => {
  return {
    ...(input.VolumeSpecification != null && {
      VolumeSpecification: se_VolumeSpecification(input.VolumeSpecification, context),
    }),
    ...(input.VolumesPerInstance != null && { VolumesPerInstance: input.VolumesPerInstance }),
  };
};

/**
 * serializeAws_json1_1EbsBlockDeviceConfigList
 */
const se_EbsBlockDeviceConfigList = (input: EbsBlockDeviceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EbsBlockDeviceConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1EbsConfiguration
 */
const se_EbsConfiguration = (input: EbsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EbsBlockDeviceConfigs != null && {
      EbsBlockDeviceConfigs: se_EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context),
    }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
  };
};

/**
 * serializeAws_json1_1EC2InstanceIdsList
 */
const se_EC2InstanceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EC2InstanceIdsToTerminateList
 */
const se_EC2InstanceIdsToTerminateList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExecutionEngineConfig
 */
const se_ExecutionEngineConfig = (input: ExecutionEngineConfig, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.MasterInstanceSecurityGroupId != null && {
      MasterInstanceSecurityGroupId: input.MasterInstanceSecurityGroupId,
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1GetAutoTerminationPolicyInput
 */
const se_GetAutoTerminationPolicyInput = (input: GetAutoTerminationPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1GetBlockPublicAccessConfigurationInput
 */
const se_GetBlockPublicAccessConfigurationInput = (
  input: GetBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1GetClusterSessionCredentialsInput
 */
const se_GetClusterSessionCredentialsInput = (
  input: GetClusterSessionCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
  };
};

/**
 * serializeAws_json1_1GetManagedScalingPolicyInput
 */
const se_GetManagedScalingPolicyInput = (input: GetManagedScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1GetStudioSessionMappingInput
 */
const se_GetStudioSessionMappingInput = (input: GetStudioSessionMappingInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1HadoopJarStepConfig
 */
const se_HadoopJarStepConfig = (input: HadoopJarStepConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: se_XmlStringList(input.Args, context) }),
    ...(input.Jar != null && { Jar: input.Jar }),
    ...(input.MainClass != null && { MainClass: input.MainClass }),
    ...(input.Properties != null && { Properties: se_KeyValueList(input.Properties, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceFleetConfig
 */
const se_InstanceFleetConfig = (input: InstanceFleetConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceFleetType != null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceTypeConfigs != null && {
      InstanceTypeConfigs: se_InstanceTypeConfigList(input.InstanceTypeConfigs, context),
    }),
    ...(input.LaunchSpecifications != null && {
      LaunchSpecifications: se_InstanceFleetProvisioningSpecifications(input.LaunchSpecifications, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResizeSpecifications != null && {
      ResizeSpecifications: se_InstanceFleetResizingSpecifications(input.ResizeSpecifications, context),
    }),
    ...(input.TargetOnDemandCapacity != null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity != null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

/**
 * serializeAws_json1_1InstanceFleetConfigList
 */
const se_InstanceFleetConfigList = (input: InstanceFleetConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceFleetConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1InstanceFleetModifyConfig
 */
const se_InstanceFleetModifyConfig = (input: InstanceFleetModifyConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceFleetId != null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.ResizeSpecifications != null && {
      ResizeSpecifications: se_InstanceFleetResizingSpecifications(input.ResizeSpecifications, context),
    }),
    ...(input.TargetOnDemandCapacity != null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity != null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

/**
 * serializeAws_json1_1InstanceFleetProvisioningSpecifications
 */
const se_InstanceFleetProvisioningSpecifications = (
  input: InstanceFleetProvisioningSpecifications,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnDemandSpecification != null && {
      OnDemandSpecification: se_OnDemandProvisioningSpecification(input.OnDemandSpecification, context),
    }),
    ...(input.SpotSpecification != null && {
      SpotSpecification: se_SpotProvisioningSpecification(input.SpotSpecification, context),
    }),
  };
};

/**
 * serializeAws_json1_1InstanceFleetResizingSpecifications
 */
const se_InstanceFleetResizingSpecifications = (
  input: InstanceFleetResizingSpecifications,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnDemandResizeSpecification != null && {
      OnDemandResizeSpecification: se_OnDemandResizingSpecification(input.OnDemandResizeSpecification, context),
    }),
    ...(input.SpotResizeSpecification != null && {
      SpotResizeSpecification: se_SpotResizingSpecification(input.SpotResizeSpecification, context),
    }),
  };
};

/**
 * serializeAws_json1_1InstanceGroupConfig
 */
const se_InstanceGroupConfig = (input: InstanceGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: se_AutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.BidPrice != null && { BidPrice: input.BidPrice }),
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsConfiguration != null && { EbsConfiguration: se_EbsConfiguration(input.EbsConfiguration, context) }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceRole != null && { InstanceRole: input.InstanceRole }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.Market != null && { Market: input.Market }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1InstanceGroupConfigList
 */
const se_InstanceGroupConfigList = (input: InstanceGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceGroupConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1InstanceGroupModifyConfig
 */
const se_InstanceGroupModifyConfig = (input: InstanceGroupModifyConfig, context: __SerdeContext): any => {
  return {
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.EC2InstanceIdsToTerminate != null && {
      EC2InstanceIdsToTerminate: se_EC2InstanceIdsToTerminateList(input.EC2InstanceIdsToTerminate, context),
    }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.ReconfigurationType != null && { ReconfigurationType: input.ReconfigurationType }),
    ...(input.ShrinkPolicy != null && { ShrinkPolicy: se_ShrinkPolicy(input.ShrinkPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1InstanceGroupModifyConfigList
 */
const se_InstanceGroupModifyConfigList = (input: InstanceGroupModifyConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceGroupModifyConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1InstanceGroupTypeList
 */
const se_InstanceGroupTypeList = (input: (InstanceGroupType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceResizePolicy
 */
const se_InstanceResizePolicy = (input: InstanceResizePolicy, context: __SerdeContext): any => {
  return {
    ...(input.InstanceTerminationTimeout != null && { InstanceTerminationTimeout: input.InstanceTerminationTimeout }),
    ...(input.InstancesToProtect != null && {
      InstancesToProtect: se_EC2InstanceIdsList(input.InstancesToProtect, context),
    }),
    ...(input.InstancesToTerminate != null && {
      InstancesToTerminate: se_EC2InstanceIdsList(input.InstancesToTerminate, context),
    }),
  };
};

/**
 * serializeAws_json1_1InstanceStateList
 */
const se_InstanceStateList = (input: (InstanceState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceTypeConfig
 */
const se_InstanceTypeConfig = (input: InstanceTypeConfig, context: __SerdeContext): any => {
  return {
    ...(input.BidPrice != null && { BidPrice: input.BidPrice }),
    ...(input.BidPriceAsPercentageOfOnDemandPrice != null && {
      BidPriceAsPercentageOfOnDemandPrice: __serializeFloat(input.BidPriceAsPercentageOfOnDemandPrice),
    }),
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsConfiguration != null && { EbsConfiguration: se_EbsConfiguration(input.EbsConfiguration, context) }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity != null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

/**
 * serializeAws_json1_1InstanceTypeConfigList
 */
const se_InstanceTypeConfigList = (input: InstanceTypeConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceTypeConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1JobFlowExecutionStateList
 */
const se_JobFlowExecutionStateList = (input: (JobFlowExecutionState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1JobFlowInstancesConfig
 */
const se_JobFlowInstancesConfig = (input: JobFlowInstancesConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalMasterSecurityGroups != null && {
      AdditionalMasterSecurityGroups: se_SecurityGroupsList(input.AdditionalMasterSecurityGroups, context),
    }),
    ...(input.AdditionalSlaveSecurityGroups != null && {
      AdditionalSlaveSecurityGroups: se_SecurityGroupsList(input.AdditionalSlaveSecurityGroups, context),
    }),
    ...(input.Ec2KeyName != null && { Ec2KeyName: input.Ec2KeyName }),
    ...(input.Ec2SubnetId != null && { Ec2SubnetId: input.Ec2SubnetId }),
    ...(input.Ec2SubnetIds != null && { Ec2SubnetIds: se_XmlStringMaxLen256List(input.Ec2SubnetIds, context) }),
    ...(input.EmrManagedMasterSecurityGroup != null && {
      EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup,
    }),
    ...(input.EmrManagedSlaveSecurityGroup != null && {
      EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup,
    }),
    ...(input.HadoopVersion != null && { HadoopVersion: input.HadoopVersion }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceFleets != null && { InstanceFleets: se_InstanceFleetConfigList(input.InstanceFleets, context) }),
    ...(input.InstanceGroups != null && { InstanceGroups: se_InstanceGroupConfigList(input.InstanceGroups, context) }),
    ...(input.KeepJobFlowAliveWhenNoSteps != null && {
      KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps,
    }),
    ...(input.MasterInstanceType != null && { MasterInstanceType: input.MasterInstanceType }),
    ...(input.Placement != null && { Placement: se_PlacementType(input.Placement, context) }),
    ...(input.ServiceAccessSecurityGroup != null && { ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup }),
    ...(input.SlaveInstanceType != null && { SlaveInstanceType: input.SlaveInstanceType }),
    ...(input.TerminationProtected != null && { TerminationProtected: input.TerminationProtected }),
  };
};

/**
 * serializeAws_json1_1KerberosAttributes
 */
const se_KerberosAttributes = (input: KerberosAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ADDomainJoinPassword != null && { ADDomainJoinPassword: input.ADDomainJoinPassword }),
    ...(input.ADDomainJoinUser != null && { ADDomainJoinUser: input.ADDomainJoinUser }),
    ...(input.CrossRealmTrustPrincipalPassword != null && {
      CrossRealmTrustPrincipalPassword: input.CrossRealmTrustPrincipalPassword,
    }),
    ...(input.KdcAdminPassword != null && { KdcAdminPassword: input.KdcAdminPassword }),
    ...(input.Realm != null && { Realm: input.Realm }),
  };
};

/**
 * serializeAws_json1_1KeyValue
 */
const se_KeyValue = (input: KeyValue, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1KeyValueList
 */
const se_KeyValueList = (input: KeyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeyValue(entry, context);
    });
};

/**
 * serializeAws_json1_1ListBootstrapActionsInput
 */
const se_ListBootstrapActionsInput = (input: ListBootstrapActionsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListClustersInput
 */
const se_ListClustersInput = (input: ListClustersInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterStates != null && { ClusterStates: se_ClusterStateList(input.ClusterStates, context) }),
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListInstanceFleetsInput
 */
const se_ListInstanceFleetsInput = (input: ListInstanceFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListInstanceGroupsInput
 */
const se_ListInstanceGroupsInput = (input: ListInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListInstancesInput
 */
const se_ListInstancesInput = (input: ListInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleetId != null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.InstanceFleetType != null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.InstanceGroupTypes != null && {
      InstanceGroupTypes: se_InstanceGroupTypeList(input.InstanceGroupTypes, context),
    }),
    ...(input.InstanceStates != null && { InstanceStates: se_InstanceStateList(input.InstanceStates, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListNotebookExecutionsInput
 */
const se_ListNotebookExecutionsInput = (input: ListNotebookExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.EditorId != null && { EditorId: input.EditorId }),
    ...(input.From != null && { From: Math.round(input.From.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.To != null && { To: Math.round(input.To.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListReleaseLabelsInput
 */
const se_ListReleaseLabelsInput = (input: ListReleaseLabelsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ReleaseLabelFilter(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSecurityConfigurationsInput
 */
const se_ListSecurityConfigurationsInput = (input: ListSecurityConfigurationsInput, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ListStepsInput
 */
const se_ListStepsInput = (input: ListStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StepIds != null && { StepIds: se_XmlStringList(input.StepIds, context) }),
    ...(input.StepStates != null && { StepStates: se_StepStateList(input.StepStates, context) }),
  };
};

/**
 * serializeAws_json1_1ListStudioSessionMappingsInput
 */
const se_ListStudioSessionMappingsInput = (input: ListStudioSessionMappingsInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1ListStudiosInput
 */
const se_ListStudiosInput = (input: ListStudiosInput, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

/**
 * serializeAws_json1_1ManagedScalingPolicy
 */
const se_ManagedScalingPolicy = (input: ManagedScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ComputeLimits != null && { ComputeLimits: se_ComputeLimits(input.ComputeLimits, context) }),
  };
};

/**
 * serializeAws_json1_1MetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1MetricDimensionList
 */
const se_MetricDimensionList = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricDimension(entry, context);
    });
};

/**
 * serializeAws_json1_1ModifyClusterInput
 */
const se_ModifyClusterInput = (input: ModifyClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepConcurrencyLevel != null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
  };
};

/**
 * serializeAws_json1_1ModifyInstanceFleetInput
 */
const se_ModifyInstanceFleetInput = (input: ModifyInstanceFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet != null && { InstanceFleet: se_InstanceFleetModifyConfig(input.InstanceFleet, context) }),
  };
};

/**
 * serializeAws_json1_1ModifyInstanceGroupsInput
 */
const se_ModifyInstanceGroupsInput = (input: ModifyInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroups != null && {
      InstanceGroups: se_InstanceGroupModifyConfigList(input.InstanceGroups, context),
    }),
  };
};

/**
 * serializeAws_json1_1NewSupportedProductsList
 */
const se_NewSupportedProductsList = (input: SupportedProductConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SupportedProductConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1OnDemandCapacityReservationOptions
 */
const se_OnDemandCapacityReservationOptions = (
  input: OnDemandCapacityReservationOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CapacityReservationPreference != null && {
      CapacityReservationPreference: input.CapacityReservationPreference,
    }),
    ...(input.CapacityReservationResourceGroupArn != null && {
      CapacityReservationResourceGroupArn: input.CapacityReservationResourceGroupArn,
    }),
    ...(input.UsageStrategy != null && { UsageStrategy: input.UsageStrategy }),
  };
};

/**
 * serializeAws_json1_1OnDemandProvisioningSpecification
 */
const se_OnDemandProvisioningSpecification = (
  input: OnDemandProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocationStrategy != null && { AllocationStrategy: input.AllocationStrategy }),
    ...(input.CapacityReservationOptions != null && {
      CapacityReservationOptions: se_OnDemandCapacityReservationOptions(input.CapacityReservationOptions, context),
    }),
  };
};

/**
 * serializeAws_json1_1OnDemandResizingSpecification
 */
const se_OnDemandResizingSpecification = (input: OnDemandResizingSpecification, context: __SerdeContext): any => {
  return {
    ...(input.TimeoutDurationMinutes != null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
  };
};

/**
 * serializeAws_json1_1PlacementGroupConfig
 */
const se_PlacementGroupConfig = (input: PlacementGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceRole != null && { InstanceRole: input.InstanceRole }),
    ...(input.PlacementStrategy != null && { PlacementStrategy: input.PlacementStrategy }),
  };
};

/**
 * serializeAws_json1_1PlacementGroupConfigList
 */
const se_PlacementGroupConfigList = (input: PlacementGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementGroupConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1PlacementType
 */
const se_PlacementType = (input: PlacementType, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: se_XmlStringMaxLen256List(input.AvailabilityZones, context),
    }),
  };
};

/**
 * serializeAws_json1_1PortRange
 */
const se_PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxRange != null && { MaxRange: input.MaxRange }),
    ...(input.MinRange != null && { MinRange: input.MinRange }),
  };
};

/**
 * serializeAws_json1_1PortRanges
 */
const se_PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortRange(entry, context);
    });
};

/**
 * serializeAws_json1_1PutAutoScalingPolicyInput
 */
const se_PutAutoScalingPolicyInput = (input: PutAutoScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: se_AutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

/**
 * serializeAws_json1_1PutAutoTerminationPolicyInput
 */
const se_PutAutoTerminationPolicyInput = (input: PutAutoTerminationPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.AutoTerminationPolicy != null && {
      AutoTerminationPolicy: se_AutoTerminationPolicy(input.AutoTerminationPolicy, context),
    }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1PutBlockPublicAccessConfigurationInput
 */
const se_PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAccessConfiguration != null && {
      BlockPublicAccessConfiguration: se_BlockPublicAccessConfiguration(input.BlockPublicAccessConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutManagedScalingPolicyInput
 */
const se_PutManagedScalingPolicyInput = (input: PutManagedScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.ManagedScalingPolicy != null && {
      ManagedScalingPolicy: se_ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    }),
  };
};

/**
 * serializeAws_json1_1ReleaseLabelFilter
 */
const se_ReleaseLabelFilter = (input: ReleaseLabelFilter, context: __SerdeContext): any => {
  return {
    ...(input.Application != null && { Application: input.Application }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

/**
 * serializeAws_json1_1RemoveAutoScalingPolicyInput
 */
const se_RemoveAutoScalingPolicyInput = (input: RemoveAutoScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

/**
 * serializeAws_json1_1RemoveAutoTerminationPolicyInput
 */
const se_RemoveAutoTerminationPolicyInput = (input: RemoveAutoTerminationPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1RemoveManagedScalingPolicyInput
 */
const se_RemoveManagedScalingPolicyInput = (input: RemoveManagedScalingPolicyInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsInput
 */
const se_RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: se_StringList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1RunJobFlowInput
 */
const se_RunJobFlowInput = (input: RunJobFlowInput, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && { AdditionalInfo: input.AdditionalInfo }),
    ...(input.AmiVersion != null && { AmiVersion: input.AmiVersion }),
    ...(input.Applications != null && { Applications: se_ApplicationList(input.Applications, context) }),
    ...(input.AutoScalingRole != null && { AutoScalingRole: input.AutoScalingRole }),
    ...(input.AutoTerminationPolicy != null && {
      AutoTerminationPolicy: se_AutoTerminationPolicy(input.AutoTerminationPolicy, context),
    }),
    ...(input.BootstrapActions != null && {
      BootstrapActions: se_BootstrapActionConfigList(input.BootstrapActions, context),
    }),
    ...(input.Configurations != null && { Configurations: se_ConfigurationList(input.Configurations, context) }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsRootVolumeSize != null && { EbsRootVolumeSize: input.EbsRootVolumeSize }),
    ...(input.Instances != null && { Instances: se_JobFlowInstancesConfig(input.Instances, context) }),
    ...(input.JobFlowRole != null && { JobFlowRole: input.JobFlowRole }),
    ...(input.KerberosAttributes != null && {
      KerberosAttributes: se_KerberosAttributes(input.KerberosAttributes, context),
    }),
    ...(input.LogEncryptionKmsKeyId != null && { LogEncryptionKmsKeyId: input.LogEncryptionKmsKeyId }),
    ...(input.LogUri != null && { LogUri: input.LogUri }),
    ...(input.ManagedScalingPolicy != null && {
      ManagedScalingPolicy: se_ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewSupportedProducts != null && {
      NewSupportedProducts: se_NewSupportedProductsList(input.NewSupportedProducts, context),
    }),
    ...(input.OSReleaseLabel != null && { OSReleaseLabel: input.OSReleaseLabel }),
    ...(input.PlacementGroupConfigs != null && {
      PlacementGroupConfigs: se_PlacementGroupConfigList(input.PlacementGroupConfigs, context),
    }),
    ...(input.ReleaseLabel != null && { ReleaseLabel: input.ReleaseLabel }),
    ...(input.RepoUpgradeOnBoot != null && { RepoUpgradeOnBoot: input.RepoUpgradeOnBoot }),
    ...(input.ScaleDownBehavior != null && { ScaleDownBehavior: input.ScaleDownBehavior }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.StepConcurrencyLevel != null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
    ...(input.Steps != null && { Steps: se_StepConfigList(input.Steps, context) }),
    ...(input.SupportedProducts != null && {
      SupportedProducts: se_SupportedProductsList(input.SupportedProducts, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VisibleToAllUsers != null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

/**
 * serializeAws_json1_1ScalingAction
 */
const se_ScalingAction = (input: ScalingAction, context: __SerdeContext): any => {
  return {
    ...(input.Market != null && { Market: input.Market }),
    ...(input.SimpleScalingPolicyConfiguration != null && {
      SimpleScalingPolicyConfiguration: se_SimpleScalingPolicyConfiguration(
        input.SimpleScalingPolicyConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ScalingConstraints
 */
const se_ScalingConstraints = (input: ScalingConstraints, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
  };
};

/**
 * serializeAws_json1_1ScalingRule
 */
const se_ScalingRule = (input: ScalingRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: se_ScalingAction(input.Action, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Trigger != null && { Trigger: se_ScalingTrigger(input.Trigger, context) }),
  };
};

/**
 * serializeAws_json1_1ScalingRuleList
 */
const se_ScalingRuleList = (input: ScalingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScalingRule(entry, context);
    });
};

/**
 * serializeAws_json1_1ScalingTrigger
 */
const se_ScalingTrigger = (input: ScalingTrigger, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchAlarmDefinition != null && {
      CloudWatchAlarmDefinition: se_CloudWatchAlarmDefinition(input.CloudWatchAlarmDefinition, context),
    }),
  };
};

/**
 * serializeAws_json1_1ScriptBootstrapActionConfig
 */
const se_ScriptBootstrapActionConfig = (input: ScriptBootstrapActionConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: se_XmlStringList(input.Args, context) }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupsList
 */
const se_SecurityGroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SetTerminationProtectionInput
 */
const se_SetTerminationProtectionInput = (input: SetTerminationProtectionInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: se_XmlStringList(input.JobFlowIds, context) }),
    ...(input.TerminationProtected != null && { TerminationProtected: input.TerminationProtected }),
  };
};

/**
 * serializeAws_json1_1SetVisibleToAllUsersInput
 */
const se_SetVisibleToAllUsersInput = (input: SetVisibleToAllUsersInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: se_XmlStringList(input.JobFlowIds, context) }),
    ...(input.VisibleToAllUsers != null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

/**
 * serializeAws_json1_1ShrinkPolicy
 */
const se_ShrinkPolicy = (input: ShrinkPolicy, context: __SerdeContext): any => {
  return {
    ...(input.DecommissionTimeout != null && { DecommissionTimeout: input.DecommissionTimeout }),
    ...(input.InstanceResizePolicy != null && {
      InstanceResizePolicy: se_InstanceResizePolicy(input.InstanceResizePolicy, context),
    }),
  };
};

/**
 * serializeAws_json1_1SimpleScalingPolicyConfiguration
 */
const se_SimpleScalingPolicyConfiguration = (input: SimpleScalingPolicyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdjustmentType != null && { AdjustmentType: input.AdjustmentType }),
    ...(input.CoolDown != null && { CoolDown: input.CoolDown }),
    ...(input.ScalingAdjustment != null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};

/**
 * serializeAws_json1_1SpotProvisioningSpecification
 */
const se_SpotProvisioningSpecification = (input: SpotProvisioningSpecification, context: __SerdeContext): any => {
  return {
    ...(input.AllocationStrategy != null && { AllocationStrategy: input.AllocationStrategy }),
    ...(input.BlockDurationMinutes != null && { BlockDurationMinutes: input.BlockDurationMinutes }),
    ...(input.TimeoutAction != null && { TimeoutAction: input.TimeoutAction }),
    ...(input.TimeoutDurationMinutes != null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
  };
};

/**
 * serializeAws_json1_1SpotResizingSpecification
 */
const se_SpotResizingSpecification = (input: SpotResizingSpecification, context: __SerdeContext): any => {
  return {
    ...(input.TimeoutDurationMinutes != null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
  };
};

/**
 * serializeAws_json1_1StartNotebookExecutionInput
 */
const se_StartNotebookExecutionInput = (input: StartNotebookExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.EditorId != null && { EditorId: input.EditorId }),
    ...(input.ExecutionEngine != null && { ExecutionEngine: se_ExecutionEngineConfig(input.ExecutionEngine, context) }),
    ...(input.NotebookExecutionName != null && { NotebookExecutionName: input.NotebookExecutionName }),
    ...(input.NotebookInstanceSecurityGroupId != null && {
      NotebookInstanceSecurityGroupId: input.NotebookInstanceSecurityGroupId,
    }),
    ...(input.NotebookParams != null && { NotebookParams: input.NotebookParams }),
    ...(input.RelativePath != null && { RelativePath: input.RelativePath }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1StepConfig
 */
const se_StepConfig = (input: StepConfig, context: __SerdeContext): any => {
  return {
    ...(input.ActionOnFailure != null && { ActionOnFailure: input.ActionOnFailure }),
    ...(input.HadoopJarStep != null && { HadoopJarStep: se_HadoopJarStepConfig(input.HadoopJarStep, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StepConfigList
 */
const se_StepConfigList = (input: StepConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StepConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1StepIdsList
 */
const se_StepIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StepStateList
 */
const se_StepStateList = (input: (StepState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StopNotebookExecutionInput
 */
const se_StopNotebookExecutionInput = (input: StopNotebookExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookExecutionId != null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SupportedProductConfig
 */
const se_SupportedProductConfig = (input: SupportedProductConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: se_XmlStringList(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1SupportedProductsList
 */
const se_SupportedProductsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TerminateJobFlowsInput
 */
const se_TerminateJobFlowsInput = (input: TerminateJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: se_XmlStringList(input.JobFlowIds, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateStudioInput
 */
const se_UpdateStudioInput = (input: UpdateStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.DefaultS3Location != null && { DefaultS3Location: input.DefaultS3Location }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateStudioSessionMappingInput
 */
const se_UpdateStudioSessionMappingInput = (input: UpdateStudioSessionMappingInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn != null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

/**
 * serializeAws_json1_1VolumeSpecification
 */
const se_VolumeSpecification = (input: VolumeSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.SizeInGB != null && { SizeInGB: input.SizeInGB }),
    ...(input.Throughput != null && { Throughput: input.Throughput }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

/**
 * serializeAws_json1_1XmlStringList
 */
const se_XmlStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1XmlStringMaxLen256List
 */
const se_XmlStringMaxLen256List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AddInstanceFleetOutput
 */
const de_AddInstanceFleetOutput = (output: any, context: __SerdeContext): AddInstanceFleetOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    ClusterId: __expectString(output.ClusterId),
    InstanceFleetId: __expectString(output.InstanceFleetId),
  } as any;
};

/**
 * deserializeAws_json1_1AddInstanceGroupsOutput
 */
const de_AddInstanceGroupsOutput = (output: any, context: __SerdeContext): AddInstanceGroupsOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    InstanceGroupIds:
      output.InstanceGroupIds != null ? de_InstanceGroupIdsList(output.InstanceGroupIds, context) : undefined,
    JobFlowId: __expectString(output.JobFlowId),
  } as any;
};

/**
 * deserializeAws_json1_1AddJobFlowStepsOutput
 */
const de_AddJobFlowStepsOutput = (output: any, context: __SerdeContext): AddJobFlowStepsOutput => {
  return {
    StepIds: output.StepIds != null ? de_StepIdsList(output.StepIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return {
    AdditionalInfo: output.AdditionalInfo != null ? de_StringMap(output.AdditionalInfo, context) : undefined,
    Args: output.Args != null ? de_StringList(output.Args, context) : undefined,
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationList
 */
const de_ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Application(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoScalingPolicyDescription
 */
const de_AutoScalingPolicyDescription = (output: any, context: __SerdeContext): AutoScalingPolicyDescription => {
  return {
    Constraints: output.Constraints != null ? de_ScalingConstraints(output.Constraints, context) : undefined,
    Rules: output.Rules != null ? de_ScalingRuleList(output.Rules, context) : undefined,
    Status: output.Status != null ? de_AutoScalingPolicyStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoScalingPolicyStateChangeReason
 */
const de_AutoScalingPolicyStateChangeReason = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AutoScalingPolicyStatus
 */
const de_AutoScalingPolicyStatus = (output: any, context: __SerdeContext): AutoScalingPolicyStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? de_AutoScalingPolicyStateChangeReason(output.StateChangeReason, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoTerminationPolicy
 */
const de_AutoTerminationPolicy = (output: any, context: __SerdeContext): AutoTerminationPolicy => {
  return {
    IdleTimeout: __expectLong(output.IdleTimeout),
  } as any;
};

/**
 * deserializeAws_json1_1BlockPublicAccessConfiguration
 */
const de_BlockPublicAccessConfiguration = (output: any, context: __SerdeContext): BlockPublicAccessConfiguration => {
  return {
    BlockPublicSecurityGroupRules: __expectBoolean(output.BlockPublicSecurityGroupRules),
    Classification: __expectString(output.Classification),
    Configurations: output.Configurations != null ? de_ConfigurationList(output.Configurations, context) : undefined,
    PermittedPublicSecurityGroupRuleRanges:
      output.PermittedPublicSecurityGroupRuleRanges != null
        ? de_PortRanges(output.PermittedPublicSecurityGroupRuleRanges, context)
        : undefined,
    Properties: output.Properties != null ? de_StringMap(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BlockPublicAccessConfigurationMetadata
 */
const de_BlockPublicAccessConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfigurationMetadata => {
  return {
    CreatedByArn: __expectString(output.CreatedByArn),
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BootstrapActionConfig
 */
const de_BootstrapActionConfig = (output: any, context: __SerdeContext): BootstrapActionConfig => {
  return {
    Name: __expectString(output.Name),
    ScriptBootstrapAction:
      output.ScriptBootstrapAction != null
        ? de_ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BootstrapActionDetail
 */
const de_BootstrapActionDetail = (output: any, context: __SerdeContext): BootstrapActionDetail => {
  return {
    BootstrapActionConfig:
      output.BootstrapActionConfig != null
        ? de_BootstrapActionConfig(output.BootstrapActionConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BootstrapActionDetailList
 */
const de_BootstrapActionDetailList = (output: any, context: __SerdeContext): BootstrapActionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BootstrapActionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelStepsInfo
 */
const de_CancelStepsInfo = (output: any, context: __SerdeContext): CancelStepsInfo => {
  return {
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
    StepId: __expectString(output.StepId),
  } as any;
};

/**
 * deserializeAws_json1_1CancelStepsInfoList
 */
const de_CancelStepsInfoList = (output: any, context: __SerdeContext): CancelStepsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CancelStepsInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelStepsOutput
 */
const de_CancelStepsOutput = (output: any, context: __SerdeContext): CancelStepsOutput => {
  return {
    CancelStepsInfoList:
      output.CancelStepsInfoList != null ? de_CancelStepsInfoList(output.CancelStepsInfoList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchAlarmDefinition
 */
const de_CloudWatchAlarmDefinition = (output: any, context: __SerdeContext): CloudWatchAlarmDefinition => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Dimensions: output.Dimensions != null ? de_MetricDimensionList(output.Dimensions, context) : undefined,
    EvaluationPeriods: __expectInt32(output.EvaluationPeriods),
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Period: __expectInt32(output.Period),
    Statistic: __expectString(output.Statistic),
    Threshold: __limitedParseDouble(output.Threshold),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    Applications: output.Applications != null ? de_ApplicationList(output.Applications, context) : undefined,
    AutoScalingRole: __expectString(output.AutoScalingRole),
    AutoTerminate: __expectBoolean(output.AutoTerminate),
    ClusterArn: __expectString(output.ClusterArn),
    Configurations: output.Configurations != null ? de_ConfigurationList(output.Configurations, context) : undefined,
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsRootVolumeSize: __expectInt32(output.EbsRootVolumeSize),
    Ec2InstanceAttributes:
      output.Ec2InstanceAttributes != null
        ? de_Ec2InstanceAttributes(output.Ec2InstanceAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCollectionType: __expectString(output.InstanceCollectionType),
    KerberosAttributes:
      output.KerberosAttributes != null ? de_KerberosAttributes(output.KerberosAttributes, context) : undefined,
    LogEncryptionKmsKeyId: __expectString(output.LogEncryptionKmsKeyId),
    LogUri: __expectString(output.LogUri),
    MasterPublicDnsName: __expectString(output.MasterPublicDnsName),
    Name: __expectString(output.Name),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    OSReleaseLabel: __expectString(output.OSReleaseLabel),
    OutpostArn: __expectString(output.OutpostArn),
    PlacementGroups:
      output.PlacementGroups != null ? de_PlacementGroupConfigList(output.PlacementGroups, context) : undefined,
    ReleaseLabel: __expectString(output.ReleaseLabel),
    RepoUpgradeOnBoot: __expectString(output.RepoUpgradeOnBoot),
    RequestedAmiVersion: __expectString(output.RequestedAmiVersion),
    RunningAmiVersion: __expectString(output.RunningAmiVersion),
    ScaleDownBehavior: __expectString(output.ScaleDownBehavior),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    ServiceRole: __expectString(output.ServiceRole),
    Status: output.Status != null ? de_ClusterStatus(output.Status, context) : undefined,
    StepConcurrencyLevel: __expectInt32(output.StepConcurrencyLevel),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TerminationProtected: __expectBoolean(output.TerminationProtected),
    VisibleToAllUsers: __expectBoolean(output.VisibleToAllUsers),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterStateChangeReason
 */
const de_ClusterStateChangeReason = (output: any, context: __SerdeContext): ClusterStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterStatus
 */
const de_ClusterStatus = (output: any, context: __SerdeContext): ClusterStatus => {
  return {
    ErrorDetails: output.ErrorDetails != null ? de_ErrorDetailList(output.ErrorDetails, context) : undefined,
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null ? de_ClusterStateChangeReason(output.StateChangeReason, context) : undefined,
    Timeline: output.Timeline != null ? de_ClusterTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClusterSummary
 */
const de_ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    OutpostArn: __expectString(output.OutpostArn),
    Status: output.Status != null ? de_ClusterStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ClusterSummaryList
 */
const de_ClusterSummaryList = (output: any, context: __SerdeContext): ClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterTimeline
 */
const de_ClusterTimeline = (output: any, context: __SerdeContext): ClusterTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Command
 */
const de_Command = (output: any, context: __SerdeContext): Command => {
  return {
    Args: output.Args != null ? de_StringList(output.Args, context) : undefined,
    Name: __expectString(output.Name),
    ScriptPath: __expectString(output.ScriptPath),
  } as any;
};

/**
 * deserializeAws_json1_1CommandList
 */
const de_CommandList = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Command(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ComputeLimits
 */
const de_ComputeLimits = (output: any, context: __SerdeContext): ComputeLimits => {
  return {
    MaximumCapacityUnits: __expectInt32(output.MaximumCapacityUnits),
    MaximumCoreCapacityUnits: __expectInt32(output.MaximumCoreCapacityUnits),
    MaximumOnDemandCapacityUnits: __expectInt32(output.MaximumOnDemandCapacityUnits),
    MinimumCapacityUnits: __expectInt32(output.MinimumCapacityUnits),
    UnitType: __expectString(output.UnitType),
  } as any;
};

/**
 * deserializeAws_json1_1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Classification: __expectString(output.Classification),
    Configurations: output.Configurations != null ? de_ConfigurationList(output.Configurations, context) : undefined,
    Properties: output.Properties != null ? de_StringMap(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfigurationList
 */
const de_ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateSecurityConfigurationOutput
 */
const de_CreateSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationOutput => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1CreateStudioOutput
 */
const de_CreateStudioOutput = (output: any, context: __SerdeContext): CreateStudioOutput => {
  return {
    StudioId: __expectString(output.StudioId),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1Credentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  if (output.UsernamePassword != null) {
    return {
      UsernamePassword: de_UsernamePassword(output.UsernamePassword, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1DeleteSecurityConfigurationOutput
 */
const de_DeleteSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeClusterOutput
 */
const de_DescribeClusterOutput = (output: any, context: __SerdeContext): DescribeClusterOutput => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeJobFlowsOutput
 */
const de_DescribeJobFlowsOutput = (output: any, context: __SerdeContext): DescribeJobFlowsOutput => {
  return {
    JobFlows: output.JobFlows != null ? de_JobFlowDetailList(output.JobFlows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookExecutionOutput
 */
const de_DescribeNotebookExecutionOutput = (output: any, context: __SerdeContext): DescribeNotebookExecutionOutput => {
  return {
    NotebookExecution:
      output.NotebookExecution != null ? de_NotebookExecution(output.NotebookExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReleaseLabelOutput
 */
const de_DescribeReleaseLabelOutput = (output: any, context: __SerdeContext): DescribeReleaseLabelOutput => {
  return {
    Applications: output.Applications != null ? de_SimplifiedApplicationList(output.Applications, context) : undefined,
    AvailableOSReleases:
      output.AvailableOSReleases != null ? de_OSReleaseList(output.AvailableOSReleases, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ReleaseLabel: __expectString(output.ReleaseLabel),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSecurityConfigurationOutput
 */
const de_DescribeSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeSecurityConfigurationOutput => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStepOutput
 */
const de_DescribeStepOutput = (output: any, context: __SerdeContext): DescribeStepOutput => {
  return {
    Step: output.Step != null ? de_Step(output.Step, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStudioOutput
 */
const de_DescribeStudioOutput = (output: any, context: __SerdeContext): DescribeStudioOutput => {
  return {
    Studio: output.Studio != null ? de_Studio(output.Studio, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EbsBlockDevice
 */
const de_EbsBlockDevice = (output: any, context: __SerdeContext): EbsBlockDevice => {
  return {
    Device: __expectString(output.Device),
    VolumeSpecification:
      output.VolumeSpecification != null ? de_VolumeSpecification(output.VolumeSpecification, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EbsBlockDeviceList
 */
const de_EbsBlockDeviceList = (output: any, context: __SerdeContext): EbsBlockDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EbsBlockDevice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EbsVolume
 */
const de_EbsVolume = (output: any, context: __SerdeContext): EbsVolume => {
  return {
    Device: __expectString(output.Device),
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

/**
 * deserializeAws_json1_1EbsVolumeList
 */
const de_EbsVolumeList = (output: any, context: __SerdeContext): EbsVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EbsVolume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Ec2InstanceAttributes
 */
const de_Ec2InstanceAttributes = (output: any, context: __SerdeContext): Ec2InstanceAttributes => {
  return {
    AdditionalMasterSecurityGroups:
      output.AdditionalMasterSecurityGroups != null
        ? de_StringList(output.AdditionalMasterSecurityGroups, context)
        : undefined,
    AdditionalSlaveSecurityGroups:
      output.AdditionalSlaveSecurityGroups != null
        ? de_StringList(output.AdditionalSlaveSecurityGroups, context)
        : undefined,
    Ec2AvailabilityZone: __expectString(output.Ec2AvailabilityZone),
    Ec2KeyName: __expectString(output.Ec2KeyName),
    Ec2SubnetId: __expectString(output.Ec2SubnetId),
    EmrManagedMasterSecurityGroup: __expectString(output.EmrManagedMasterSecurityGroup),
    EmrManagedSlaveSecurityGroup: __expectString(output.EmrManagedSlaveSecurityGroup),
    IamInstanceProfile: __expectString(output.IamInstanceProfile),
    RequestedEc2AvailabilityZones:
      output.RequestedEc2AvailabilityZones != null
        ? de_XmlStringMaxLen256List(output.RequestedEc2AvailabilityZones, context)
        : undefined,
    RequestedEc2SubnetIds:
      output.RequestedEc2SubnetIds != null
        ? de_XmlStringMaxLen256List(output.RequestedEc2SubnetIds, context)
        : undefined,
    ServiceAccessSecurityGroup: __expectString(output.ServiceAccessSecurityGroup),
  } as any;
};

/**
 * deserializeAws_json1_1EC2InstanceIdsList
 */
const de_EC2InstanceIdsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ErrorData
 */
const de_ErrorData = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StringMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ErrorDetail
 */
const de_ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorData: output.ErrorData != null ? de_ErrorData(output.ErrorData, context) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorDetailList
 */
const de_ErrorDetailList = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExecutionEngineConfig
 */
const de_ExecutionEngineConfig = (output: any, context: __SerdeContext): ExecutionEngineConfig => {
  return {
    Id: __expectString(output.Id),
    MasterInstanceSecurityGroupId: __expectString(output.MasterInstanceSecurityGroupId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1FailureDetails
 */
const de_FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    LogFile: __expectString(output.LogFile),
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1GetAutoTerminationPolicyOutput
 */
const de_GetAutoTerminationPolicyOutput = (output: any, context: __SerdeContext): GetAutoTerminationPolicyOutput => {
  return {
    AutoTerminationPolicy:
      output.AutoTerminationPolicy != null
        ? de_AutoTerminationPolicy(output.AutoTerminationPolicy, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput
 */
const de_GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  return {
    BlockPublicAccessConfiguration:
      output.BlockPublicAccessConfiguration != null
        ? de_BlockPublicAccessConfiguration(output.BlockPublicAccessConfiguration, context)
        : undefined,
    BlockPublicAccessConfigurationMetadata:
      output.BlockPublicAccessConfigurationMetadata != null
        ? de_BlockPublicAccessConfigurationMetadata(output.BlockPublicAccessConfigurationMetadata, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetClusterSessionCredentialsOutput
 */
const de_GetClusterSessionCredentialsOutput = (
  output: any,
  context: __SerdeContext
): GetClusterSessionCredentialsOutput => {
  return {
    Credentials: output.Credentials != null ? de_Credentials(__expectUnion(output.Credentials), context) : undefined,
    ExpiresAt:
      output.ExpiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiresAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetManagedScalingPolicyOutput
 */
const de_GetManagedScalingPolicyOutput = (output: any, context: __SerdeContext): GetManagedScalingPolicyOutput => {
  return {
    ManagedScalingPolicy:
      output.ManagedScalingPolicy != null ? de_ManagedScalingPolicy(output.ManagedScalingPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetStudioSessionMappingOutput
 */
const de_GetStudioSessionMappingOutput = (output: any, context: __SerdeContext): GetStudioSessionMappingOutput => {
  return {
    SessionMapping: output.SessionMapping != null ? de_SessionMappingDetail(output.SessionMapping, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HadoopJarStepConfig
 */
const de_HadoopJarStepConfig = (output: any, context: __SerdeContext): HadoopJarStepConfig => {
  return {
    Args: output.Args != null ? de_XmlStringList(output.Args, context) : undefined,
    Jar: __expectString(output.Jar),
    MainClass: __expectString(output.MainClass),
    Properties: output.Properties != null ? de_KeyValueList(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HadoopStepConfig
 */
const de_HadoopStepConfig = (output: any, context: __SerdeContext): HadoopStepConfig => {
  return {
    Args: output.Args != null ? de_StringList(output.Args, context) : undefined,
    Jar: __expectString(output.Jar),
    MainClass: __expectString(output.MainClass),
    Properties: output.Properties != null ? de_StringMap(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    EbsVolumes: output.EbsVolumes != null ? de_EbsVolumeList(output.EbsVolumes, context) : undefined,
    Ec2InstanceId: __expectString(output.Ec2InstanceId),
    Id: __expectString(output.Id),
    InstanceFleetId: __expectString(output.InstanceFleetId),
    InstanceGroupId: __expectString(output.InstanceGroupId),
    InstanceType: __expectString(output.InstanceType),
    Market: __expectString(output.Market),
    PrivateDnsName: __expectString(output.PrivateDnsName),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
    PublicDnsName: __expectString(output.PublicDnsName),
    PublicIpAddress: __expectString(output.PublicIpAddress),
    Status: output.Status != null ? de_InstanceStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleet
 */
const de_InstanceFleet = (output: any, context: __SerdeContext): InstanceFleet => {
  return {
    Id: __expectString(output.Id),
    InstanceFleetType: __expectString(output.InstanceFleetType),
    InstanceTypeSpecifications:
      output.InstanceTypeSpecifications != null
        ? de_InstanceTypeSpecificationList(output.InstanceTypeSpecifications, context)
        : undefined,
    LaunchSpecifications:
      output.LaunchSpecifications != null
        ? de_InstanceFleetProvisioningSpecifications(output.LaunchSpecifications, context)
        : undefined,
    Name: __expectString(output.Name),
    ProvisionedOnDemandCapacity: __expectInt32(output.ProvisionedOnDemandCapacity),
    ProvisionedSpotCapacity: __expectInt32(output.ProvisionedSpotCapacity),
    ResizeSpecifications:
      output.ResizeSpecifications != null
        ? de_InstanceFleetResizingSpecifications(output.ResizeSpecifications, context)
        : undefined,
    Status: output.Status != null ? de_InstanceFleetStatus(output.Status, context) : undefined,
    TargetOnDemandCapacity: __expectInt32(output.TargetOnDemandCapacity),
    TargetSpotCapacity: __expectInt32(output.TargetSpotCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleetList
 */
const de_InstanceFleetList = (output: any, context: __SerdeContext): InstanceFleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceFleet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceFleetProvisioningSpecifications
 */
const de_InstanceFleetProvisioningSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetProvisioningSpecifications => {
  return {
    OnDemandSpecification:
      output.OnDemandSpecification != null
        ? de_OnDemandProvisioningSpecification(output.OnDemandSpecification, context)
        : undefined,
    SpotSpecification:
      output.SpotSpecification != null
        ? de_SpotProvisioningSpecification(output.SpotSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleetResizingSpecifications
 */
const de_InstanceFleetResizingSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetResizingSpecifications => {
  return {
    OnDemandResizeSpecification:
      output.OnDemandResizeSpecification != null
        ? de_OnDemandResizingSpecification(output.OnDemandResizeSpecification, context)
        : undefined,
    SpotResizeSpecification:
      output.SpotResizeSpecification != null
        ? de_SpotResizingSpecification(output.SpotResizeSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleetStateChangeReason
 */
const de_InstanceFleetStateChangeReason = (output: any, context: __SerdeContext): InstanceFleetStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleetStatus
 */
const de_InstanceFleetStatus = (output: any, context: __SerdeContext): InstanceFleetStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? de_InstanceFleetStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline: output.Timeline != null ? de_InstanceFleetTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceFleetTimeline
 */
const de_InstanceFleetTimeline = (output: any, context: __SerdeContext): InstanceFleetTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceGroup
 */
const de_InstanceGroup = (output: any, context: __SerdeContext): InstanceGroup => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy != null ? de_AutoScalingPolicyDescription(output.AutoScalingPolicy, context) : undefined,
    BidPrice: __expectString(output.BidPrice),
    Configurations: output.Configurations != null ? de_ConfigurationList(output.Configurations, context) : undefined,
    ConfigurationsVersion: __expectLong(output.ConfigurationsVersion),
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsBlockDevices:
      output.EbsBlockDevices != null ? de_EbsBlockDeviceList(output.EbsBlockDevices, context) : undefined,
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    Id: __expectString(output.Id),
    InstanceGroupType: __expectString(output.InstanceGroupType),
    InstanceType: __expectString(output.InstanceType),
    LastSuccessfullyAppliedConfigurations:
      output.LastSuccessfullyAppliedConfigurations != null
        ? de_ConfigurationList(output.LastSuccessfullyAppliedConfigurations, context)
        : undefined,
    LastSuccessfullyAppliedConfigurationsVersion: __expectLong(output.LastSuccessfullyAppliedConfigurationsVersion),
    Market: __expectString(output.Market),
    Name: __expectString(output.Name),
    RequestedInstanceCount: __expectInt32(output.RequestedInstanceCount),
    RunningInstanceCount: __expectInt32(output.RunningInstanceCount),
    ShrinkPolicy: output.ShrinkPolicy != null ? de_ShrinkPolicy(output.ShrinkPolicy, context) : undefined,
    Status: output.Status != null ? de_InstanceGroupStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceGroupDetail
 */
const de_InstanceGroupDetail = (output: any, context: __SerdeContext): InstanceGroupDetail => {
  return {
    BidPrice: __expectString(output.BidPrice),
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    CustomAmiId: __expectString(output.CustomAmiId),
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    InstanceGroupId: __expectString(output.InstanceGroupId),
    InstanceRequestCount: __expectInt32(output.InstanceRequestCount),
    InstanceRole: __expectString(output.InstanceRole),
    InstanceRunningCount: __expectInt32(output.InstanceRunningCount),
    InstanceType: __expectString(output.InstanceType),
    LastStateChangeReason: __expectString(output.LastStateChangeReason),
    Market: __expectString(output.Market),
    Name: __expectString(output.Name),
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceGroupDetailList
 */
const de_InstanceGroupDetailList = (output: any, context: __SerdeContext): InstanceGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceGroupDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceGroupIdsList
 */
const de_InstanceGroupIdsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceGroupList
 */
const de_InstanceGroupList = (output: any, context: __SerdeContext): InstanceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceGroupStateChangeReason
 */
const de_InstanceGroupStateChangeReason = (output: any, context: __SerdeContext): InstanceGroupStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceGroupStatus
 */
const de_InstanceGroupStatus = (output: any, context: __SerdeContext): InstanceGroupStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? de_InstanceGroupStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline: output.Timeline != null ? de_InstanceGroupTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceGroupTimeline
 */
const de_InstanceGroupTimeline = (output: any, context: __SerdeContext): InstanceGroupTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Instance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceResizePolicy
 */
const de_InstanceResizePolicy = (output: any, context: __SerdeContext): InstanceResizePolicy => {
  return {
    InstanceTerminationTimeout: __expectInt32(output.InstanceTerminationTimeout),
    InstancesToProtect:
      output.InstancesToProtect != null ? de_EC2InstanceIdsList(output.InstancesToProtect, context) : undefined,
    InstancesToTerminate:
      output.InstancesToTerminate != null ? de_EC2InstanceIdsList(output.InstancesToTerminate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceStateChangeReason
 */
const de_InstanceStateChangeReason = (output: any, context: __SerdeContext): InstanceStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceStatus
 */
const de_InstanceStatus = (output: any, context: __SerdeContext): InstanceStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null ? de_InstanceStateChangeReason(output.StateChangeReason, context) : undefined,
    Timeline: output.Timeline != null ? de_InstanceTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceTimeline
 */
const de_InstanceTimeline = (output: any, context: __SerdeContext): InstanceTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceTypeSpecification
 */
const de_InstanceTypeSpecification = (output: any, context: __SerdeContext): InstanceTypeSpecification => {
  return {
    BidPrice: __expectString(output.BidPrice),
    BidPriceAsPercentageOfOnDemandPrice: __limitedParseDouble(output.BidPriceAsPercentageOfOnDemandPrice),
    Configurations: output.Configurations != null ? de_ConfigurationList(output.Configurations, context) : undefined,
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsBlockDevices:
      output.EbsBlockDevices != null ? de_EbsBlockDeviceList(output.EbsBlockDevices, context) : undefined,
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    InstanceType: __expectString(output.InstanceType),
    WeightedCapacity: __expectInt32(output.WeightedCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceTypeSpecificationList
 */
const de_InstanceTypeSpecificationList = (output: any, context: __SerdeContext): InstanceTypeSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceTypeSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1JobFlowDetail
 */
const de_JobFlowDetail = (output: any, context: __SerdeContext): JobFlowDetail => {
  return {
    AmiVersion: __expectString(output.AmiVersion),
    AutoScalingRole: __expectString(output.AutoScalingRole),
    BootstrapActions:
      output.BootstrapActions != null ? de_BootstrapActionDetailList(output.BootstrapActions, context) : undefined,
    ExecutionStatusDetail:
      output.ExecutionStatusDetail != null
        ? de_JobFlowExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    Instances: output.Instances != null ? de_JobFlowInstancesDetail(output.Instances, context) : undefined,
    JobFlowId: __expectString(output.JobFlowId),
    JobFlowRole: __expectString(output.JobFlowRole),
    LogEncryptionKmsKeyId: __expectString(output.LogEncryptionKmsKeyId),
    LogUri: __expectString(output.LogUri),
    Name: __expectString(output.Name),
    ScaleDownBehavior: __expectString(output.ScaleDownBehavior),
    ServiceRole: __expectString(output.ServiceRole),
    Steps: output.Steps != null ? de_StepDetailList(output.Steps, context) : undefined,
    SupportedProducts:
      output.SupportedProducts != null ? de_SupportedProductsList(output.SupportedProducts, context) : undefined,
    VisibleToAllUsers: __expectBoolean(output.VisibleToAllUsers),
  } as any;
};

/**
 * deserializeAws_json1_1JobFlowDetailList
 */
const de_JobFlowDetailList = (output: any, context: __SerdeContext): JobFlowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobFlowDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JobFlowExecutionStatusDetail
 */
const de_JobFlowExecutionStatusDetail = (output: any, context: __SerdeContext): JobFlowExecutionStatusDetail => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    LastStateChangeReason: __expectString(output.LastStateChangeReason),
    ReadyDateTime:
      output.ReadyDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadyDateTime)))
        : undefined,
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1JobFlowInstancesDetail
 */
const de_JobFlowInstancesDetail = (output: any, context: __SerdeContext): JobFlowInstancesDetail => {
  return {
    Ec2KeyName: __expectString(output.Ec2KeyName),
    Ec2SubnetId: __expectString(output.Ec2SubnetId),
    HadoopVersion: __expectString(output.HadoopVersion),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceGroups:
      output.InstanceGroups != null ? de_InstanceGroupDetailList(output.InstanceGroups, context) : undefined,
    KeepJobFlowAliveWhenNoSteps: __expectBoolean(output.KeepJobFlowAliveWhenNoSteps),
    MasterInstanceId: __expectString(output.MasterInstanceId),
    MasterInstanceType: __expectString(output.MasterInstanceType),
    MasterPublicDnsName: __expectString(output.MasterPublicDnsName),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    Placement: output.Placement != null ? de_PlacementType(output.Placement, context) : undefined,
    SlaveInstanceType: __expectString(output.SlaveInstanceType),
    TerminationProtected: __expectBoolean(output.TerminationProtected),
  } as any;
};

/**
 * deserializeAws_json1_1KerberosAttributes
 */
const de_KerberosAttributes = (output: any, context: __SerdeContext): KerberosAttributes => {
  return {
    ADDomainJoinPassword: __expectString(output.ADDomainJoinPassword),
    ADDomainJoinUser: __expectString(output.ADDomainJoinUser),
    CrossRealmTrustPrincipalPassword: __expectString(output.CrossRealmTrustPrincipalPassword),
    KdcAdminPassword: __expectString(output.KdcAdminPassword),
    Realm: __expectString(output.Realm),
  } as any;
};

/**
 * deserializeAws_json1_1KeyValue
 */
const de_KeyValue = (output: any, context: __SerdeContext): KeyValue => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1KeyValueList
 */
const de_KeyValueList = (output: any, context: __SerdeContext): KeyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListBootstrapActionsOutput
 */
const de_ListBootstrapActionsOutput = (output: any, context: __SerdeContext): ListBootstrapActionsOutput => {
  return {
    BootstrapActions: output.BootstrapActions != null ? de_CommandList(output.BootstrapActions, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListClustersOutput
 */
const de_ListClustersOutput = (output: any, context: __SerdeContext): ListClustersOutput => {
  return {
    Clusters: output.Clusters != null ? de_ClusterSummaryList(output.Clusters, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstanceFleetsOutput
 */
const de_ListInstanceFleetsOutput = (output: any, context: __SerdeContext): ListInstanceFleetsOutput => {
  return {
    InstanceFleets: output.InstanceFleets != null ? de_InstanceFleetList(output.InstanceFleets, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstanceGroupsOutput
 */
const de_ListInstanceGroupsOutput = (output: any, context: __SerdeContext): ListInstanceGroupsOutput => {
  return {
    InstanceGroups: output.InstanceGroups != null ? de_InstanceGroupList(output.InstanceGroups, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstancesOutput
 */
const de_ListInstancesOutput = (output: any, context: __SerdeContext): ListInstancesOutput => {
  return {
    Instances: output.Instances != null ? de_InstanceList(output.Instances, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

/**
 * deserializeAws_json1_1ListNotebookExecutionsOutput
 */
const de_ListNotebookExecutionsOutput = (output: any, context: __SerdeContext): ListNotebookExecutionsOutput => {
  return {
    Marker: __expectString(output.Marker),
    NotebookExecutions:
      output.NotebookExecutions != null
        ? de_NotebookExecutionSummaryList(output.NotebookExecutions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReleaseLabelsOutput
 */
const de_ListReleaseLabelsOutput = (output: any, context: __SerdeContext): ListReleaseLabelsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ReleaseLabels: output.ReleaseLabels != null ? de_StringList(output.ReleaseLabels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSecurityConfigurationsOutput
 */
const de_ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  return {
    Marker: __expectString(output.Marker),
    SecurityConfigurations:
      output.SecurityConfigurations != null
        ? de_SecurityConfigurationList(output.SecurityConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStepsOutput
 */
const de_ListStepsOutput = (output: any, context: __SerdeContext): ListStepsOutput => {
  return {
    Marker: __expectString(output.Marker),
    Steps: output.Steps != null ? de_StepSummaryList(output.Steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStudioSessionMappingsOutput
 */
const de_ListStudioSessionMappingsOutput = (output: any, context: __SerdeContext): ListStudioSessionMappingsOutput => {
  return {
    Marker: __expectString(output.Marker),
    SessionMappings:
      output.SessionMappings != null ? de_SessionMappingSummaryList(output.SessionMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStudiosOutput
 */
const de_ListStudiosOutput = (output: any, context: __SerdeContext): ListStudiosOutput => {
  return {
    Marker: __expectString(output.Marker),
    Studios: output.Studios != null ? de_StudioSummaryList(output.Studios, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ManagedScalingPolicy
 */
const de_ManagedScalingPolicy = (output: any, context: __SerdeContext): ManagedScalingPolicy => {
  return {
    ComputeLimits: output.ComputeLimits != null ? de_ComputeLimits(output.ComputeLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1MetricDimensionList
 */
const de_MetricDimensionList = (output: any, context: __SerdeContext): MetricDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDimension(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModifyClusterOutput
 */
const de_ModifyClusterOutput = (output: any, context: __SerdeContext): ModifyClusterOutput => {
  return {
    StepConcurrencyLevel: __expectInt32(output.StepConcurrencyLevel),
  } as any;
};

/**
 * deserializeAws_json1_1NotebookExecution
 */
const de_NotebookExecution = (output: any, context: __SerdeContext): NotebookExecution => {
  return {
    Arn: __expectString(output.Arn),
    EditorId: __expectString(output.EditorId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExecutionEngine:
      output.ExecutionEngine != null ? de_ExecutionEngineConfig(output.ExecutionEngine, context) : undefined,
    LastStateChangeReason: __expectString(output.LastStateChangeReason),
    NotebookExecutionId: __expectString(output.NotebookExecutionId),
    NotebookExecutionName: __expectString(output.NotebookExecutionName),
    NotebookInstanceSecurityGroupId: __expectString(output.NotebookInstanceSecurityGroupId),
    NotebookParams: __expectString(output.NotebookParams),
    OutputNotebookURI: __expectString(output.OutputNotebookURI),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NotebookExecutionSummary
 */
const de_NotebookExecutionSummary = (output: any, context: __SerdeContext): NotebookExecutionSummary => {
  return {
    EditorId: __expectString(output.EditorId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    NotebookExecutionId: __expectString(output.NotebookExecutionId),
    NotebookExecutionName: __expectString(output.NotebookExecutionName),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1NotebookExecutionSummaryList
 */
const de_NotebookExecutionSummaryList = (output: any, context: __SerdeContext): NotebookExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotebookExecutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OnDemandCapacityReservationOptions
 */
const de_OnDemandCapacityReservationOptions = (
  output: any,
  context: __SerdeContext
): OnDemandCapacityReservationOptions => {
  return {
    CapacityReservationPreference: __expectString(output.CapacityReservationPreference),
    CapacityReservationResourceGroupArn: __expectString(output.CapacityReservationResourceGroupArn),
    UsageStrategy: __expectString(output.UsageStrategy),
  } as any;
};

/**
 * deserializeAws_json1_1OnDemandProvisioningSpecification
 */
const de_OnDemandProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): OnDemandProvisioningSpecification => {
  return {
    AllocationStrategy: __expectString(output.AllocationStrategy),
    CapacityReservationOptions:
      output.CapacityReservationOptions != null
        ? de_OnDemandCapacityReservationOptions(output.CapacityReservationOptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OnDemandResizingSpecification
 */
const de_OnDemandResizingSpecification = (output: any, context: __SerdeContext): OnDemandResizingSpecification => {
  return {
    TimeoutDurationMinutes: __expectInt32(output.TimeoutDurationMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1OSRelease
 */
const de_OSRelease = (output: any, context: __SerdeContext): OSRelease => {
  return {
    Label: __expectString(output.Label),
  } as any;
};

/**
 * deserializeAws_json1_1OSReleaseList
 */
const de_OSReleaseList = (output: any, context: __SerdeContext): OSRelease[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OSRelease(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementGroupConfig
 */
const de_PlacementGroupConfig = (output: any, context: __SerdeContext): PlacementGroupConfig => {
  return {
    InstanceRole: __expectString(output.InstanceRole),
    PlacementStrategy: __expectString(output.PlacementStrategy),
  } as any;
};

/**
 * deserializeAws_json1_1PlacementGroupConfigList
 */
const de_PlacementGroupConfigList = (output: any, context: __SerdeContext): PlacementGroupConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementGroupConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementType
 */
const de_PlacementType = (output: any, context: __SerdeContext): PlacementType => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    AvailabilityZones:
      output.AvailabilityZones != null ? de_XmlStringMaxLen256List(output.AvailabilityZones, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PortRange
 */
const de_PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    MaxRange: __expectInt32(output.MaxRange),
    MinRange: __expectInt32(output.MinRange),
  } as any;
};

/**
 * deserializeAws_json1_1PortRanges
 */
const de_PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutAutoScalingPolicyOutput
 */
const de_PutAutoScalingPolicyOutput = (output: any, context: __SerdeContext): PutAutoScalingPolicyOutput => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy != null ? de_AutoScalingPolicyDescription(output.AutoScalingPolicy, context) : undefined,
    ClusterArn: __expectString(output.ClusterArn),
    ClusterId: __expectString(output.ClusterId),
    InstanceGroupId: __expectString(output.InstanceGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1PutAutoTerminationPolicyOutput
 */
const de_PutAutoTerminationPolicyOutput = (output: any, context: __SerdeContext): PutAutoTerminationPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput
 */
const de_PutBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): PutBlockPublicAccessConfigurationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutManagedScalingPolicyOutput
 */
const de_PutManagedScalingPolicyOutput = (output: any, context: __SerdeContext): PutManagedScalingPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveAutoScalingPolicyOutput
 */
const de_RemoveAutoScalingPolicyOutput = (output: any, context: __SerdeContext): RemoveAutoScalingPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveAutoTerminationPolicyOutput
 */
const de_RemoveAutoTerminationPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveAutoTerminationPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveManagedScalingPolicyOutput
 */
const de_RemoveManagedScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveManagedScalingPolicyOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveTagsOutput
 */
const de_RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RunJobFlowOutput
 */
const de_RunJobFlowOutput = (output: any, context: __SerdeContext): RunJobFlowOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    JobFlowId: __expectString(output.JobFlowId),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingAction
 */
const de_ScalingAction = (output: any, context: __SerdeContext): ScalingAction => {
  return {
    Market: __expectString(output.Market),
    SimpleScalingPolicyConfiguration:
      output.SimpleScalingPolicyConfiguration != null
        ? de_SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScalingConstraints
 */
const de_ScalingConstraints = (output: any, context: __SerdeContext): ScalingConstraints => {
  return {
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1ScalingRule
 */
const de_ScalingRule = (output: any, context: __SerdeContext): ScalingRule => {
  return {
    Action: output.Action != null ? de_ScalingAction(output.Action, context) : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Trigger: output.Trigger != null ? de_ScalingTrigger(output.Trigger, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScalingRuleList
 */
const de_ScalingRuleList = (output: any, context: __SerdeContext): ScalingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScalingRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingTrigger
 */
const de_ScalingTrigger = (output: any, context: __SerdeContext): ScalingTrigger => {
  return {
    CloudWatchAlarmDefinition:
      output.CloudWatchAlarmDefinition != null
        ? de_CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScriptBootstrapActionConfig
 */
const de_ScriptBootstrapActionConfig = (output: any, context: __SerdeContext): ScriptBootstrapActionConfig => {
  return {
    Args: output.Args != null ? de_XmlStringList(output.Args, context) : undefined,
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityConfigurationList
 */
const de_SecurityConfigurationList = (output: any, context: __SerdeContext): SecurityConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityConfigurationSummary
 */
const de_SecurityConfigurationSummary = (output: any, context: __SerdeContext): SecurityConfigurationSummary => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SessionMappingDetail
 */
const de_SessionMappingDetail = (output: any, context: __SerdeContext): SessionMappingDetail => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    IdentityId: __expectString(output.IdentityId),
    IdentityName: __expectString(output.IdentityName),
    IdentityType: __expectString(output.IdentityType),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    SessionPolicyArn: __expectString(output.SessionPolicyArn),
    StudioId: __expectString(output.StudioId),
  } as any;
};

/**
 * deserializeAws_json1_1SessionMappingSummary
 */
const de_SessionMappingSummary = (output: any, context: __SerdeContext): SessionMappingSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    IdentityId: __expectString(output.IdentityId),
    IdentityName: __expectString(output.IdentityName),
    IdentityType: __expectString(output.IdentityType),
    SessionPolicyArn: __expectString(output.SessionPolicyArn),
    StudioId: __expectString(output.StudioId),
  } as any;
};

/**
 * deserializeAws_json1_1SessionMappingSummaryList
 */
const de_SessionMappingSummaryList = (output: any, context: __SerdeContext): SessionMappingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SessionMappingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ShrinkPolicy
 */
const de_ShrinkPolicy = (output: any, context: __SerdeContext): ShrinkPolicy => {
  return {
    DecommissionTimeout: __expectInt32(output.DecommissionTimeout),
    InstanceResizePolicy:
      output.InstanceResizePolicy != null ? de_InstanceResizePolicy(output.InstanceResizePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SimpleScalingPolicyConfiguration
 */
const de_SimpleScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): SimpleScalingPolicyConfiguration => {
  return {
    AdjustmentType: __expectString(output.AdjustmentType),
    CoolDown: __expectInt32(output.CoolDown),
    ScalingAdjustment: __expectInt32(output.ScalingAdjustment),
  } as any;
};

/**
 * deserializeAws_json1_1SimplifiedApplication
 */
const de_SimplifiedApplication = (output: any, context: __SerdeContext): SimplifiedApplication => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1SimplifiedApplicationList
 */
const de_SimplifiedApplicationList = (output: any, context: __SerdeContext): SimplifiedApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimplifiedApplication(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SpotProvisioningSpecification
 */
const de_SpotProvisioningSpecification = (output: any, context: __SerdeContext): SpotProvisioningSpecification => {
  return {
    AllocationStrategy: __expectString(output.AllocationStrategy),
    BlockDurationMinutes: __expectInt32(output.BlockDurationMinutes),
    TimeoutAction: __expectString(output.TimeoutAction),
    TimeoutDurationMinutes: __expectInt32(output.TimeoutDurationMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1SpotResizingSpecification
 */
const de_SpotResizingSpecification = (output: any, context: __SerdeContext): SpotResizingSpecification => {
  return {
    TimeoutDurationMinutes: __expectInt32(output.TimeoutDurationMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1StartNotebookExecutionOutput
 */
const de_StartNotebookExecutionOutput = (output: any, context: __SerdeContext): StartNotebookExecutionOutput => {
  return {
    NotebookExecutionId: __expectString(output.NotebookExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    Config: output.Config != null ? de_HadoopStepConfig(output.Config, context) : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: output.Status != null ? de_StepStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StepConfig
 */
const de_StepConfig = (output: any, context: __SerdeContext): StepConfig => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    HadoopJarStep: output.HadoopJarStep != null ? de_HadoopJarStepConfig(output.HadoopJarStep, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1StepDetail
 */
const de_StepDetail = (output: any, context: __SerdeContext): StepDetail => {
  return {
    ExecutionStatusDetail:
      output.ExecutionStatusDetail != null
        ? de_StepExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    StepConfig: output.StepConfig != null ? de_StepConfig(output.StepConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StepDetailList
 */
const de_StepDetailList = (output: any, context: __SerdeContext): StepDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StepDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepExecutionStatusDetail
 */
const de_StepExecutionStatusDetail = (output: any, context: __SerdeContext): StepExecutionStatusDetail => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    LastStateChangeReason: __expectString(output.LastStateChangeReason),
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1StepIdsList
 */
const de_StepIdsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepStateChangeReason
 */
const de_StepStateChangeReason = (output: any, context: __SerdeContext): StepStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1StepStatus
 */
const de_StepStatus = (output: any, context: __SerdeContext): StepStatus => {
  return {
    FailureDetails: output.FailureDetails != null ? de_FailureDetails(output.FailureDetails, context) : undefined,
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null ? de_StepStateChangeReason(output.StateChangeReason, context) : undefined,
    Timeline: output.Timeline != null ? de_StepTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StepSummary
 */
const de_StepSummary = (output: any, context: __SerdeContext): StepSummary => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    Config: output.Config != null ? de_HadoopStepConfig(output.Config, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: output.Status != null ? de_StepStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StepSummaryList
 */
const de_StepSummaryList = (output: any, context: __SerdeContext): StepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepTimeline
 */
const de_StepTimeline = (output: any, context: __SerdeContext): StepTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Studio
 */
const de_Studio = (output: any, context: __SerdeContext): Studio => {
  return {
    AuthMode: __expectString(output.AuthMode),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DefaultS3Location: __expectString(output.DefaultS3Location),
    Description: __expectString(output.Description),
    EngineSecurityGroupId: __expectString(output.EngineSecurityGroupId),
    IdpAuthUrl: __expectString(output.IdpAuthUrl),
    IdpRelayStateParameterName: __expectString(output.IdpRelayStateParameterName),
    Name: __expectString(output.Name),
    ServiceRole: __expectString(output.ServiceRole),
    StudioArn: __expectString(output.StudioArn),
    StudioId: __expectString(output.StudioId),
    SubnetIds: output.SubnetIds != null ? de_SubnetIdList(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    Url: __expectString(output.Url),
    UserRole: __expectString(output.UserRole),
    VpcId: __expectString(output.VpcId),
    WorkspaceSecurityGroupId: __expectString(output.WorkspaceSecurityGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1StudioSummary
 */
const de_StudioSummary = (output: any, context: __SerdeContext): StudioSummary => {
  return {
    AuthMode: __expectString(output.AuthMode),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    StudioId: __expectString(output.StudioId),
    Url: __expectString(output.Url),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1StudioSummaryList
 */
const de_StudioSummaryList = (output: any, context: __SerdeContext): StudioSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StudioSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SupportedProductsList
 */
const de_SupportedProductsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsernamePassword
 */
const de_UsernamePassword = (output: any, context: __SerdeContext): UsernamePassword => {
  return {
    Password: __expectString(output.Password),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeSpecification
 */
const de_VolumeSpecification = (output: any, context: __SerdeContext): VolumeSpecification => {
  return {
    Iops: __expectInt32(output.Iops),
    SizeInGB: __expectInt32(output.SizeInGB),
    Throughput: __expectInt32(output.Throughput),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1XmlStringList
 */
const de_XmlStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1XmlStringMaxLen256List
 */
const de_XmlStringMaxLen256List = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
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
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
