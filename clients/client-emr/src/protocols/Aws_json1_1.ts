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

export const serializeAws_json1_1AddInstanceFleetCommand = async (
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddInstanceFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddInstanceFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddInstanceGroupsCommand = async (
  input: AddInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddJobFlowStepsCommand = async (
  input: AddJobFlowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddJobFlowSteps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddJobFlowStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.AddTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelStepsCommand = async (
  input: CancelStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CancelSteps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStudioCommand = async (
  input: CreateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateStudio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStudioSessionMappingCommand = async (
  input: CreateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.CreateStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStudioCommand = async (
  input: DeleteStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteStudio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStudioSessionMappingCommand = async (
  input: DeleteStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DeleteStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeJobFlowsCommand = async (
  input: DescribeJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeJobFlows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeJobFlowsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNotebookExecutionCommand = async (
  input: DescribeNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReleaseLabelCommand = async (
  input: DescribeReleaseLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeReleaseLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReleaseLabelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSecurityConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStepCommand = async (
  input: DescribeStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeStep",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStudioCommand = async (
  input: DescribeStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.DescribeStudio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAutoTerminationPolicyCommand = async (
  input: GetAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetBlockPublicAccessConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetClusterSessionCredentialsCommand = async (
  input: GetClusterSessionCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetClusterSessionCredentials",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetClusterSessionCredentialsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetManagedScalingPolicyCommand = async (
  input: GetManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStudioSessionMappingCommand = async (
  input: GetStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.GetStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBootstrapActionsCommand = async (
  input: ListBootstrapActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListBootstrapActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBootstrapActionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListClustersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstanceFleetsCommand = async (
  input: ListInstanceFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstanceFleets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstanceFleetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstanceGroupsCommand = async (
  input: ListInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNotebookExecutionsCommand = async (
  input: ListNotebookExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListNotebookExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNotebookExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReleaseLabelsCommand = async (
  input: ListReleaseLabelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListReleaseLabels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReleaseLabelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListSecurityConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecurityConfigurationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStepsCommand = async (
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListSteps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStudiosCommand = async (
  input: ListStudiosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListStudios",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStudiosInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStudioSessionMappingsCommand = async (
  input: ListStudioSessionMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ListStudioSessionMappings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStudioSessionMappingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyInstanceFleetCommand = async (
  input: ModifyInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyInstanceFleet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyInstanceFleetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyInstanceGroupsCommand = async (
  input: ModifyInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.ModifyInstanceGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyInstanceGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAutoScalingPolicyCommand = async (
  input: PutAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAutoTerminationPolicyCommand = async (
  input: PutAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutBlockPublicAccessConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutManagedScalingPolicyCommand = async (
  input: PutManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.PutManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveAutoScalingPolicyCommand = async (
  input: RemoveAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveAutoTerminationPolicyCommand = async (
  input: RemoveAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveAutoTerminationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveAutoTerminationPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveManagedScalingPolicyCommand = async (
  input: RemoveManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveManagedScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveManagedScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RemoveTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunJobFlowCommand = async (
  input: RunJobFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.RunJobFlow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RunJobFlowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetTerminationProtectionCommand = async (
  input: SetTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.SetTerminationProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTerminationProtectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetVisibleToAllUsersCommand = async (
  input: SetVisibleToAllUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.SetVisibleToAllUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetVisibleToAllUsersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartNotebookExecutionCommand = async (
  input: StartNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.StartNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopNotebookExecutionCommand = async (
  input: StopNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.StopNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateJobFlowsCommand = async (
  input: TerminateJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.TerminateJobFlows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateJobFlowsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStudioCommand = async (
  input: UpdateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.UpdateStudio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStudioSessionMappingCommand = async (
  input: UpdateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "ElasticMapReduce.UpdateStudioSessionMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStudioSessionMappingInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddInstanceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddInstanceFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddInstanceFleetOutput(data, context);
  const response: AddInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddInstanceFleetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddInstanceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddInstanceGroupsOutput(data, context);
  const response: AddInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddInstanceGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddJobFlowStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddJobFlowStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddJobFlowStepsOutput(data, context);
  const response: AddJobFlowStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddJobFlowStepsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelStepsOutput(data, context);
  const response: CancelStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelStepsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecurityConfigurationOutput(data, context);
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStudioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStudioOutput(data, context);
  const response: CreateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStudioCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStudioSessionMappingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecurityConfigurationOutput(data, context);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStudioCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStudioCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStudioSessionMappingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClusterOutput(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClusterCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeJobFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeJobFlowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeJobFlowsOutput(data, context);
  const response: DescribeJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeJobFlowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNotebookExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNotebookExecutionOutput(data, context);
  const response: DescribeNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNotebookExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeReleaseLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReleaseLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReleaseLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReleaseLabelOutput(data, context);
  const response: DescribeReleaseLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReleaseLabelCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecurityConfigurationOutput(data, context);
  const response: DescribeSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecurityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStepCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStepOutput(data, context);
  const response: DescribeStepCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStepCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStudioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStudioOutput(data, context);
  const response: DescribeStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStudioCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAutoTerminationPolicyOutput(data, context);
  const response: GetAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAutoTerminationPolicyCommandError = async (
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

export const deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput(data, context);
  const response: GetBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetClusterSessionCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterSessionCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetClusterSessionCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetClusterSessionCredentialsOutput(data, context);
  const response: GetClusterSessionCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetClusterSessionCredentialsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetManagedScalingPolicyOutput(data, context);
  const response: GetManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetManagedScalingPolicyCommandError = async (
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

export const deserializeAws_json1_1GetStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStudioSessionMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStudioSessionMappingOutput(data, context);
  const response: GetStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStudioSessionMappingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBootstrapActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBootstrapActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBootstrapActionsOutput(data, context);
  const response: ListBootstrapActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBootstrapActionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersOutput(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClustersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListInstanceFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstanceFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceFleetsOutput(data, context);
  const response: ListInstanceFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstanceFleetsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstanceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceGroupsOutput(data, context);
  const response: ListInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstanceGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstancesOutput(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstancesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListNotebookExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNotebookExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNotebookExecutionsOutput(data, context);
  const response: ListNotebookExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNotebookExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListReleaseLabelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReleaseLabelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReleaseLabelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReleaseLabelsOutput(data, context);
  const response: ListReleaseLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReleaseLabelsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSecurityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecurityConfigurationsOutput(data, context);
  const response: ListSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecurityConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStepsOutput(data, context);
  const response: ListStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStepsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStudiosCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudiosCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStudiosCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStudiosOutput(data, context);
  const response: ListStudiosCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStudiosCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStudioSessionMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioSessionMappingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStudioSessionMappingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStudioSessionMappingsOutput(data, context);
  const response: ListStudioSessionMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStudioSessionMappingsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClusterOutput(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyClusterCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyInstanceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyInstanceFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyInstanceFleetCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ModifyInstanceGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyInstanceGroupsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyInstanceGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAutoScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAutoScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAutoScalingPolicyOutput(data, context);
  const response: PutAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAutoScalingPolicyCommandError = async (
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

export const deserializeAws_json1_1PutAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAutoTerminationPolicyOutput(data, context);
  const response: PutAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAutoTerminationPolicyCommandError = async (
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

export const deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput(data, context);
  const response: PutBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutManagedScalingPolicyOutput(data, context);
  const response: PutManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutManagedScalingPolicyCommandError = async (
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

export const deserializeAws_json1_1RemoveAutoScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveAutoScalingPolicyOutput(data, context);
  const response: RemoveAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveAutoScalingPolicyCommandError = async (
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

export const deserializeAws_json1_1RemoveAutoTerminationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoTerminationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveAutoTerminationPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveAutoTerminationPolicyOutput(data, context);
  const response: RemoveAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveAutoTerminationPolicyCommandError = async (
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

export const deserializeAws_json1_1RemoveManagedScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveManagedScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveManagedScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveManagedScalingPolicyOutput(data, context);
  const response: RemoveManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveManagedScalingPolicyCommandError = async (
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

export const deserializeAws_json1_1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RunJobFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RunJobFlowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunJobFlowOutput(data, context);
  const response: RunJobFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunJobFlowCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetTerminationProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetTerminationProtectionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTerminationProtectionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetVisibleToAllUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetVisibleToAllUsersCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetVisibleToAllUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetVisibleToAllUsersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartNotebookExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartNotebookExecutionOutput(data, context);
  const response: StartNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartNotebookExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopNotebookExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopNotebookExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopNotebookExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TerminateJobFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateJobFlowsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateJobFlowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateStudioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStudioCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStudioCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateStudioSessionMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStudioSessionMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStudioSessionMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStudioSessionMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStudioSessionMappingCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddInstanceFleetInput = (input: AddInstanceFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet != null && {
      InstanceFleet: serializeAws_json1_1InstanceFleetConfig(input.InstanceFleet, context),
    }),
  };
};

const serializeAws_json1_1AddInstanceGroupsInput = (input: AddInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.InstanceGroups != null && {
      InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
    }),
    ...(input.JobFlowId != null && { JobFlowId: input.JobFlowId }),
  };
};

const serializeAws_json1_1AddJobFlowStepsInput = (input: AddJobFlowStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.JobFlowId != null && { JobFlowId: input.JobFlowId }),
    ...(input.Steps != null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
  };
};

const serializeAws_json1_1AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Application = (input: Application, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && {
      AdditionalInfo: serializeAws_json1_1StringMap(input.AdditionalInfo, context),
    }),
    ...(input.Args != null && { Args: serializeAws_json1_1StringList(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1ApplicationList = (input: Application[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Application(entry, context);
    });
};

const serializeAws_json1_1AutoScalingPolicy = (input: AutoScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Constraints != null && {
      Constraints: serializeAws_json1_1ScalingConstraints(input.Constraints, context),
    }),
    ...(input.Rules != null && { Rules: serializeAws_json1_1ScalingRuleList(input.Rules, context) }),
  };
};

const serializeAws_json1_1AutoTerminationPolicy = (input: AutoTerminationPolicy, context: __SerdeContext): any => {
  return {
    ...(input.IdleTimeout != null && { IdleTimeout: input.IdleTimeout }),
  };
};

const serializeAws_json1_1BlockPublicAccessConfiguration = (
  input: BlockPublicAccessConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicSecurityGroupRules != null && {
      BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules,
    }),
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.PermittedPublicSecurityGroupRuleRanges != null && {
      PermittedPublicSecurityGroupRuleRanges: serializeAws_json1_1PortRanges(
        input.PermittedPublicSecurityGroupRuleRanges,
        context
      ),
    }),
    ...(input.Properties != null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
  };
};

const serializeAws_json1_1BootstrapActionConfig = (input: BootstrapActionConfig, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScriptBootstrapAction != null && {
      ScriptBootstrapAction: serializeAws_json1_1ScriptBootstrapActionConfig(input.ScriptBootstrapAction, context),
    }),
  };
};

const serializeAws_json1_1BootstrapActionConfigList = (
  input: BootstrapActionConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1BootstrapActionConfig(entry, context);
    });
};

const serializeAws_json1_1CancelStepsInput = (input: CancelStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepCancellationOption != null && { StepCancellationOption: input.StepCancellationOption }),
    ...(input.StepIds != null && { StepIds: serializeAws_json1_1StepIdsList(input.StepIds, context) }),
  };
};

const serializeAws_json1_1CloudWatchAlarmDefinition = (
  input: CloudWatchAlarmDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Dimensions != null && { Dimensions: serializeAws_json1_1MetricDimensionList(input.Dimensions, context) }),
    ...(input.EvaluationPeriods != null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Period != null && { Period: input.Period }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1ClusterStateList = (input: (ClusterState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ComputeLimits = (input: ComputeLimits, context: __SerdeContext): any => {
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

const serializeAws_json1_1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.Properties != null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
  };
};

const serializeAws_json1_1ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Configuration(entry, context);
    });
};

const serializeAws_json1_1CreateSecurityConfigurationInput = (
  input: CreateSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
  };
};

const serializeAws_json1_1CreateStudioInput = (input: CreateStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.AuthMode != null && { AuthMode: input.AuthMode }),
    ...(input.DefaultS3Location != null && { DefaultS3Location: input.DefaultS3Location }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineSecurityGroupId != null && { EngineSecurityGroupId: input.EngineSecurityGroupId }),
    ...(input.IdpAuthUrl != null && { IdpAuthUrl: input.IdpAuthUrl }),
    ...(input.IdpRelayStateParameterName != null && { IdpRelayStateParameterName: input.IdpRelayStateParameterName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserRole != null && { UserRole: input.UserRole }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
    ...(input.WorkspaceSecurityGroupId != null && { WorkspaceSecurityGroupId: input.WorkspaceSecurityGroupId }),
  };
};

const serializeAws_json1_1CreateStudioSessionMappingInput = (
  input: CreateStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn != null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DeleteSecurityConfigurationInput = (
  input: DeleteSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteStudioInput = (input: DeleteStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DeleteStudioSessionMappingInput = (
  input: DeleteStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DescribeClusterInput = (input: DescribeClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1DescribeJobFlowsInput = (input: DescribeJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.JobFlowIds != null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.JobFlowStates != null && {
      JobFlowStates: serializeAws_json1_1JobFlowExecutionStateList(input.JobFlowStates, context),
    }),
  };
};

const serializeAws_json1_1DescribeNotebookExecutionInput = (
  input: DescribeNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotebookExecutionId != null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

const serializeAws_json1_1DescribeReleaseLabelInput = (
  input: DescribeReleaseLabelInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ReleaseLabel != null && { ReleaseLabel: input.ReleaseLabel }),
  };
};

const serializeAws_json1_1DescribeSecurityConfigurationInput = (
  input: DescribeSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeStepInput = (input: DescribeStepInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepId != null && { StepId: input.StepId }),
  };
};

const serializeAws_json1_1DescribeStudioInput = (input: DescribeStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1EbsBlockDeviceConfig = (input: EbsBlockDeviceConfig, context: __SerdeContext): any => {
  return {
    ...(input.VolumeSpecification != null && {
      VolumeSpecification: serializeAws_json1_1VolumeSpecification(input.VolumeSpecification, context),
    }),
    ...(input.VolumesPerInstance != null && { VolumesPerInstance: input.VolumesPerInstance }),
  };
};

const serializeAws_json1_1EbsBlockDeviceConfigList = (input: EbsBlockDeviceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EbsBlockDeviceConfig(entry, context);
    });
};

const serializeAws_json1_1EbsConfiguration = (input: EbsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EbsBlockDeviceConfigs != null && {
      EbsBlockDeviceConfigs: serializeAws_json1_1EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context),
    }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
  };
};

const serializeAws_json1_1EC2InstanceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EC2InstanceIdsToTerminateList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExecutionEngineConfig = (input: ExecutionEngineConfig, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.MasterInstanceSecurityGroupId != null && {
      MasterInstanceSecurityGroupId: input.MasterInstanceSecurityGroupId,
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GetAutoTerminationPolicyInput = (
  input: GetAutoTerminationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (
  input: GetBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetClusterSessionCredentialsInput = (
  input: GetClusterSessionCredentialsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
  };
};

const serializeAws_json1_1GetManagedScalingPolicyInput = (
  input: GetManagedScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1GetStudioSessionMappingInput = (
  input: GetStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1HadoopJarStepConfig = (input: HadoopJarStepConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Jar != null && { Jar: input.Jar }),
    ...(input.MainClass != null && { MainClass: input.MainClass }),
    ...(input.Properties != null && { Properties: serializeAws_json1_1KeyValueList(input.Properties, context) }),
  };
};

const serializeAws_json1_1InstanceFleetConfig = (input: InstanceFleetConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceFleetType != null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceTypeConfigs != null && {
      InstanceTypeConfigs: serializeAws_json1_1InstanceTypeConfigList(input.InstanceTypeConfigs, context),
    }),
    ...(input.LaunchSpecifications != null && {
      LaunchSpecifications: serializeAws_json1_1InstanceFleetProvisioningSpecifications(
        input.LaunchSpecifications,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TargetOnDemandCapacity != null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity != null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

const serializeAws_json1_1InstanceFleetConfigList = (input: InstanceFleetConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceFleetConfig(entry, context);
    });
};

const serializeAws_json1_1InstanceFleetModifyConfig = (
  input: InstanceFleetModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceFleetId != null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.TargetOnDemandCapacity != null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity != null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  input: InstanceFleetProvisioningSpecifications,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnDemandSpecification != null && {
      OnDemandSpecification: serializeAws_json1_1OnDemandProvisioningSpecification(
        input.OnDemandSpecification,
        context
      ),
    }),
    ...(input.SpotSpecification != null && {
      SpotSpecification: serializeAws_json1_1SpotProvisioningSpecification(input.SpotSpecification, context),
    }),
  };
};

const serializeAws_json1_1InstanceGroupConfig = (input: InstanceGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.BidPrice != null && { BidPrice: input.BidPrice }),
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsConfiguration != null && {
      EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
    }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceRole != null && { InstanceRole: input.InstanceRole }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.Market != null && { Market: input.Market }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1InstanceGroupConfigList = (input: InstanceGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceGroupConfig(entry, context);
    });
};

const serializeAws_json1_1InstanceGroupModifyConfig = (
  input: InstanceGroupModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.EC2InstanceIdsToTerminate != null && {
      EC2InstanceIdsToTerminate: serializeAws_json1_1EC2InstanceIdsToTerminateList(
        input.EC2InstanceIdsToTerminate,
        context
      ),
    }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.ReconfigurationType != null && { ReconfigurationType: input.ReconfigurationType }),
    ...(input.ShrinkPolicy != null && { ShrinkPolicy: serializeAws_json1_1ShrinkPolicy(input.ShrinkPolicy, context) }),
  };
};

const serializeAws_json1_1InstanceGroupModifyConfigList = (
  input: InstanceGroupModifyConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceGroupModifyConfig(entry, context);
    });
};

const serializeAws_json1_1InstanceGroupTypeList = (
  input: (InstanceGroupType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InstanceResizePolicy = (input: InstanceResizePolicy, context: __SerdeContext): any => {
  return {
    ...(input.InstanceTerminationTimeout != null && { InstanceTerminationTimeout: input.InstanceTerminationTimeout }),
    ...(input.InstancesToProtect != null && {
      InstancesToProtect: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToProtect, context),
    }),
    ...(input.InstancesToTerminate != null && {
      InstancesToTerminate: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToTerminate, context),
    }),
  };
};

const serializeAws_json1_1InstanceStateList = (input: (InstanceState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InstanceTypeConfig = (input: InstanceTypeConfig, context: __SerdeContext): any => {
  return {
    ...(input.BidPrice != null && { BidPrice: input.BidPrice }),
    ...(input.BidPriceAsPercentageOfOnDemandPrice != null && {
      BidPriceAsPercentageOfOnDemandPrice: __serializeFloat(input.BidPriceAsPercentageOfOnDemandPrice),
    }),
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsConfiguration != null && {
      EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
    }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity != null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

const serializeAws_json1_1InstanceTypeConfigList = (input: InstanceTypeConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InstanceTypeConfig(entry, context);
    });
};

const serializeAws_json1_1JobFlowExecutionStateList = (
  input: (JobFlowExecutionState | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1JobFlowInstancesConfig = (input: JobFlowInstancesConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalMasterSecurityGroups != null && {
      AdditionalMasterSecurityGroups: serializeAws_json1_1SecurityGroupsList(
        input.AdditionalMasterSecurityGroups,
        context
      ),
    }),
    ...(input.AdditionalSlaveSecurityGroups != null && {
      AdditionalSlaveSecurityGroups: serializeAws_json1_1SecurityGroupsList(
        input.AdditionalSlaveSecurityGroups,
        context
      ),
    }),
    ...(input.Ec2KeyName != null && { Ec2KeyName: input.Ec2KeyName }),
    ...(input.Ec2SubnetId != null && { Ec2SubnetId: input.Ec2SubnetId }),
    ...(input.Ec2SubnetIds != null && {
      Ec2SubnetIds: serializeAws_json1_1XmlStringMaxLen256List(input.Ec2SubnetIds, context),
    }),
    ...(input.EmrManagedMasterSecurityGroup != null && {
      EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup,
    }),
    ...(input.EmrManagedSlaveSecurityGroup != null && {
      EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup,
    }),
    ...(input.HadoopVersion != null && { HadoopVersion: input.HadoopVersion }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceFleets != null && {
      InstanceFleets: serializeAws_json1_1InstanceFleetConfigList(input.InstanceFleets, context),
    }),
    ...(input.InstanceGroups != null && {
      InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
    }),
    ...(input.KeepJobFlowAliveWhenNoSteps != null && {
      KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps,
    }),
    ...(input.MasterInstanceType != null && { MasterInstanceType: input.MasterInstanceType }),
    ...(input.Placement != null && { Placement: serializeAws_json1_1PlacementType(input.Placement, context) }),
    ...(input.ServiceAccessSecurityGroup != null && { ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup }),
    ...(input.SlaveInstanceType != null && { SlaveInstanceType: input.SlaveInstanceType }),
    ...(input.TerminationProtected != null && { TerminationProtected: input.TerminationProtected }),
  };
};

const serializeAws_json1_1KerberosAttributes = (input: KerberosAttributes, context: __SerdeContext): any => {
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

const serializeAws_json1_1KeyValue = (input: KeyValue, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1KeyValueList = (input: KeyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1KeyValue(entry, context);
    });
};

const serializeAws_json1_1ListBootstrapActionsInput = (
  input: ListBootstrapActionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListClustersInput = (input: ListClustersInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterStates != null && {
      ClusterStates: serializeAws_json1_1ClusterStateList(input.ClusterStates, context),
    }),
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstanceFleetsInput = (input: ListInstanceFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstanceGroupsInput = (input: ListInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstancesInput = (input: ListInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleetId != null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.InstanceFleetType != null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.InstanceGroupTypes != null && {
      InstanceGroupTypes: serializeAws_json1_1InstanceGroupTypeList(input.InstanceGroupTypes, context),
    }),
    ...(input.InstanceStates != null && {
      InstanceStates: serializeAws_json1_1InstanceStateList(input.InstanceStates, context),
    }),
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListNotebookExecutionsInput = (
  input: ListNotebookExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EditorId != null && { EditorId: input.EditorId }),
    ...(input.From != null && { From: Math.round(input.From.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.To != null && { To: Math.round(input.To.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListReleaseLabelsInput = (input: ListReleaseLabelsInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1ReleaseLabelFilter(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSecurityConfigurationsInput = (
  input: ListSecurityConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListStepsInput = (input: ListStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StepIds != null && { StepIds: serializeAws_json1_1XmlStringList(input.StepIds, context) }),
    ...(input.StepStates != null && { StepStates: serializeAws_json1_1StepStateList(input.StepStates, context) }),
  };
};

const serializeAws_json1_1ListStudioSessionMappingsInput = (
  input: ListStudioSessionMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1ListStudiosInput = (input: ListStudiosInput, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ManagedScalingPolicy = (input: ManagedScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ComputeLimits != null && {
      ComputeLimits: serializeAws_json1_1ComputeLimits(input.ComputeLimits, context),
    }),
  };
};

const serializeAws_json1_1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetricDimensionList = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};

const serializeAws_json1_1ModifyClusterInput = (input: ModifyClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.StepConcurrencyLevel != null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
  };
};

const serializeAws_json1_1ModifyInstanceFleetInput = (
  input: ModifyInstanceFleetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet != null && {
      InstanceFleet: serializeAws_json1_1InstanceFleetModifyConfig(input.InstanceFleet, context),
    }),
  };
};

const serializeAws_json1_1ModifyInstanceGroupsInput = (
  input: ModifyInstanceGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroups != null && {
      InstanceGroups: serializeAws_json1_1InstanceGroupModifyConfigList(input.InstanceGroups, context),
    }),
  };
};

const serializeAws_json1_1NewSupportedProductsList = (
  input: SupportedProductConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SupportedProductConfig(entry, context);
    });
};

const serializeAws_json1_1OnDemandCapacityReservationOptions = (
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

const serializeAws_json1_1OnDemandProvisioningSpecification = (
  input: OnDemandProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocationStrategy != null && { AllocationStrategy: input.AllocationStrategy }),
    ...(input.CapacityReservationOptions != null && {
      CapacityReservationOptions: serializeAws_json1_1OnDemandCapacityReservationOptions(
        input.CapacityReservationOptions,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PlacementGroupConfig = (input: PlacementGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceRole != null && { InstanceRole: input.InstanceRole }),
    ...(input.PlacementStrategy != null && { PlacementStrategy: input.PlacementStrategy }),
  };
};

const serializeAws_json1_1PlacementGroupConfigList = (input: PlacementGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};

const serializeAws_json1_1PlacementType = (input: PlacementType, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_json1_1XmlStringMaxLen256List(input.AvailabilityZones, context),
    }),
  };
};

const serializeAws_json1_1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxRange != null && { MaxRange: input.MaxRange }),
    ...(input.MinRange != null && { MinRange: input.MinRange }),
  };
};

const serializeAws_json1_1PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PortRange(entry, context);
    });
};

const serializeAws_json1_1PutAutoScalingPolicyInput = (
  input: PutAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy != null && {
      AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
    }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

const serializeAws_json1_1PutAutoTerminationPolicyInput = (
  input: PutAutoTerminationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoTerminationPolicy != null && {
      AutoTerminationPolicy: serializeAws_json1_1AutoTerminationPolicy(input.AutoTerminationPolicy, context),
    }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAccessConfiguration != null && {
      BlockPublicAccessConfiguration: serializeAws_json1_1BlockPublicAccessConfiguration(
        input.BlockPublicAccessConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutManagedScalingPolicyInput = (
  input: PutManagedScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.ManagedScalingPolicy != null && {
      ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    }),
  };
};

const serializeAws_json1_1ReleaseLabelFilter = (input: ReleaseLabelFilter, context: __SerdeContext): any => {
  return {
    ...(input.Application != null && { Application: input.Application }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_1RemoveAutoScalingPolicyInput = (
  input: RemoveAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId != null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

const serializeAws_json1_1RemoveAutoTerminationPolicyInput = (
  input: RemoveAutoTerminationPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1RemoveManagedScalingPolicyInput = (
  input: RemoveManagedScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1StringList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1RunJobFlowInput = (input: RunJobFlowInput, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo != null && { AdditionalInfo: input.AdditionalInfo }),
    ...(input.AmiVersion != null && { AmiVersion: input.AmiVersion }),
    ...(input.Applications != null && {
      Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
    }),
    ...(input.AutoScalingRole != null && { AutoScalingRole: input.AutoScalingRole }),
    ...(input.AutoTerminationPolicy != null && {
      AutoTerminationPolicy: serializeAws_json1_1AutoTerminationPolicy(input.AutoTerminationPolicy, context),
    }),
    ...(input.BootstrapActions != null && {
      BootstrapActions: serializeAws_json1_1BootstrapActionConfigList(input.BootstrapActions, context),
    }),
    ...(input.Configurations != null && {
      Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
    }),
    ...(input.CustomAmiId != null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsRootVolumeSize != null && { EbsRootVolumeSize: input.EbsRootVolumeSize }),
    ...(input.Instances != null && { Instances: serializeAws_json1_1JobFlowInstancesConfig(input.Instances, context) }),
    ...(input.JobFlowRole != null && { JobFlowRole: input.JobFlowRole }),
    ...(input.KerberosAttributes != null && {
      KerberosAttributes: serializeAws_json1_1KerberosAttributes(input.KerberosAttributes, context),
    }),
    ...(input.LogEncryptionKmsKeyId != null && { LogEncryptionKmsKeyId: input.LogEncryptionKmsKeyId }),
    ...(input.LogUri != null && { LogUri: input.LogUri }),
    ...(input.ManagedScalingPolicy != null && {
      ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NewSupportedProducts != null && {
      NewSupportedProducts: serializeAws_json1_1NewSupportedProductsList(input.NewSupportedProducts, context),
    }),
    ...(input.OSReleaseLabel != null && { OSReleaseLabel: input.OSReleaseLabel }),
    ...(input.PlacementGroupConfigs != null && {
      PlacementGroupConfigs: serializeAws_json1_1PlacementGroupConfigList(input.PlacementGroupConfigs, context),
    }),
    ...(input.ReleaseLabel != null && { ReleaseLabel: input.ReleaseLabel }),
    ...(input.RepoUpgradeOnBoot != null && { RepoUpgradeOnBoot: input.RepoUpgradeOnBoot }),
    ...(input.ScaleDownBehavior != null && { ScaleDownBehavior: input.ScaleDownBehavior }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.StepConcurrencyLevel != null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
    ...(input.Steps != null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
    ...(input.SupportedProducts != null && {
      SupportedProducts: serializeAws_json1_1SupportedProductsList(input.SupportedProducts, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VisibleToAllUsers != null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

const serializeAws_json1_1ScalingAction = (input: ScalingAction, context: __SerdeContext): any => {
  return {
    ...(input.Market != null && { Market: input.Market }),
    ...(input.SimpleScalingPolicyConfiguration != null && {
      SimpleScalingPolicyConfiguration: serializeAws_json1_1SimpleScalingPolicyConfiguration(
        input.SimpleScalingPolicyConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ScalingConstraints = (input: ScalingConstraints, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity != null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity != null && { MinCapacity: input.MinCapacity }),
  };
};

const serializeAws_json1_1ScalingRule = (input: ScalingRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: serializeAws_json1_1ScalingAction(input.Action, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Trigger != null && { Trigger: serializeAws_json1_1ScalingTrigger(input.Trigger, context) }),
  };
};

const serializeAws_json1_1ScalingRuleList = (input: ScalingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ScalingRule(entry, context);
    });
};

const serializeAws_json1_1ScalingTrigger = (input: ScalingTrigger, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchAlarmDefinition != null && {
      CloudWatchAlarmDefinition: serializeAws_json1_1CloudWatchAlarmDefinition(
        input.CloudWatchAlarmDefinition,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ScriptBootstrapActionConfig = (
  input: ScriptBootstrapActionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Args != null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_json1_1SecurityGroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SetTerminationProtectionInput = (
  input: SetTerminationProtectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.TerminationProtected != null && { TerminationProtected: input.TerminationProtected }),
  };
};

const serializeAws_json1_1SetVisibleToAllUsersInput = (
  input: SetVisibleToAllUsersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.VisibleToAllUsers != null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

const serializeAws_json1_1ShrinkPolicy = (input: ShrinkPolicy, context: __SerdeContext): any => {
  return {
    ...(input.DecommissionTimeout != null && { DecommissionTimeout: input.DecommissionTimeout }),
    ...(input.InstanceResizePolicy != null && {
      InstanceResizePolicy: serializeAws_json1_1InstanceResizePolicy(input.InstanceResizePolicy, context),
    }),
  };
};

const serializeAws_json1_1SimpleScalingPolicyConfiguration = (
  input: SimpleScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdjustmentType != null && { AdjustmentType: input.AdjustmentType }),
    ...(input.CoolDown != null && { CoolDown: input.CoolDown }),
    ...(input.ScalingAdjustment != null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};

const serializeAws_json1_1SpotProvisioningSpecification = (
  input: SpotProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocationStrategy != null && { AllocationStrategy: input.AllocationStrategy }),
    ...(input.BlockDurationMinutes != null && { BlockDurationMinutes: input.BlockDurationMinutes }),
    ...(input.TimeoutAction != null && { TimeoutAction: input.TimeoutAction }),
    ...(input.TimeoutDurationMinutes != null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
  };
};

const serializeAws_json1_1StartNotebookExecutionInput = (
  input: StartNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EditorId != null && { EditorId: input.EditorId }),
    ...(input.ExecutionEngine != null && {
      ExecutionEngine: serializeAws_json1_1ExecutionEngineConfig(input.ExecutionEngine, context),
    }),
    ...(input.NotebookExecutionName != null && { NotebookExecutionName: input.NotebookExecutionName }),
    ...(input.NotebookInstanceSecurityGroupId != null && {
      NotebookInstanceSecurityGroupId: input.NotebookInstanceSecurityGroupId,
    }),
    ...(input.NotebookParams != null && { NotebookParams: input.NotebookParams }),
    ...(input.RelativePath != null && { RelativePath: input.RelativePath }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1StepConfig = (input: StepConfig, context: __SerdeContext): any => {
  return {
    ...(input.ActionOnFailure != null && { ActionOnFailure: input.ActionOnFailure }),
    ...(input.HadoopJarStep != null && {
      HadoopJarStep: serializeAws_json1_1HadoopJarStepConfig(input.HadoopJarStep, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StepConfigList = (input: StepConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StepConfig(entry, context);
    });
};

const serializeAws_json1_1StepIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StepStateList = (input: (StepState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StopNotebookExecutionInput = (
  input: StopNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotebookExecutionId != null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SupportedProductConfig = (input: SupportedProductConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SupportedProductsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateJobFlowsInput = (input: TerminateJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowIds != null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
  };
};

const serializeAws_json1_1UpdateStudioInput = (input: UpdateStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.DefaultS3Location != null && { DefaultS3Location: input.DefaultS3Location }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1UpdateStudioSessionMappingInput = (
  input: UpdateStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName != null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType != null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn != null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId != null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1VolumeSpecification = (input: VolumeSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.SizeInGB != null && { SizeInGB: input.SizeInGB }),
    ...(input.Throughput != null && { Throughput: input.Throughput }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1XmlStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1XmlStringMaxLen256List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AddInstanceFleetOutput = (output: any, context: __SerdeContext): AddInstanceFleetOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    ClusterId: __expectString(output.ClusterId),
    InstanceFleetId: __expectString(output.InstanceFleetId),
  } as any;
};

const deserializeAws_json1_1AddInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceGroupsOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    InstanceGroupIds:
      output.InstanceGroupIds != null
        ? deserializeAws_json1_1InstanceGroupIdsList(output.InstanceGroupIds, context)
        : undefined,
    JobFlowId: __expectString(output.JobFlowId),
  } as any;
};

const deserializeAws_json1_1AddJobFlowStepsOutput = (output: any, context: __SerdeContext): AddJobFlowStepsOutput => {
  return {
    StepIds: output.StepIds != null ? deserializeAws_json1_1StepIdsList(output.StepIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {} as any;
};

const deserializeAws_json1_1Application = (output: any, context: __SerdeContext): Application => {
  return {
    AdditionalInfo:
      output.AdditionalInfo != null ? deserializeAws_json1_1StringMap(output.AdditionalInfo, context) : undefined,
    Args: output.Args != null ? deserializeAws_json1_1StringList(output.Args, context) : undefined,
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Application(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  return {
    Constraints:
      output.Constraints != null ? deserializeAws_json1_1ScalingConstraints(output.Constraints, context) : undefined,
    Rules: output.Rules != null ? deserializeAws_json1_1ScalingRuleList(output.Rules, context) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1AutoScalingPolicyStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStatus = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1AutoScalingPolicyStateChangeReason(output.StateChangeReason, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutoTerminationPolicy = (output: any, context: __SerdeContext): AutoTerminationPolicy => {
  return {
    IdleTimeout: __expectLong(output.IdleTimeout),
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfiguration = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfiguration => {
  return {
    BlockPublicSecurityGroupRules: __expectBoolean(output.BlockPublicSecurityGroupRules),
    Classification: __expectString(output.Classification),
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    PermittedPublicSecurityGroupRuleRanges:
      output.PermittedPublicSecurityGroupRuleRanges != null
        ? deserializeAws_json1_1PortRanges(output.PermittedPublicSecurityGroupRuleRanges, context)
        : undefined,
    Properties: output.Properties != null ? deserializeAws_json1_1StringMap(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (
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

const deserializeAws_json1_1BootstrapActionConfig = (output: any, context: __SerdeContext): BootstrapActionConfig => {
  return {
    Name: __expectString(output.Name),
    ScriptBootstrapAction:
      output.ScriptBootstrapAction != null
        ? deserializeAws_json1_1ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetail = (output: any, context: __SerdeContext): BootstrapActionDetail => {
  return {
    BootstrapActionConfig:
      output.BootstrapActionConfig != null
        ? deserializeAws_json1_1BootstrapActionConfig(output.BootstrapActionConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetailList = (
  output: any,
  context: __SerdeContext
): BootstrapActionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BootstrapActionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CancelStepsInfo = (output: any, context: __SerdeContext): CancelStepsInfo => {
  return {
    Reason: __expectString(output.Reason),
    Status: __expectString(output.Status),
    StepId: __expectString(output.StepId),
  } as any;
};

const deserializeAws_json1_1CancelStepsInfoList = (output: any, context: __SerdeContext): CancelStepsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CancelStepsInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CancelStepsOutput = (output: any, context: __SerdeContext): CancelStepsOutput => {
  return {
    CancelStepsInfoList:
      output.CancelStepsInfoList != null
        ? deserializeAws_json1_1CancelStepsInfoList(output.CancelStepsInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CloudWatchAlarmDefinition = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmDefinition => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Dimensions:
      output.Dimensions != null ? deserializeAws_json1_1MetricDimensionList(output.Dimensions, context) : undefined,
    EvaluationPeriods: __expectInt32(output.EvaluationPeriods),
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    Period: __expectInt32(output.Period),
    Statistic: __expectString(output.Statistic),
    Threshold: __limitedParseDouble(output.Threshold),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    Applications:
      output.Applications != null ? deserializeAws_json1_1ApplicationList(output.Applications, context) : undefined,
    AutoScalingRole: __expectString(output.AutoScalingRole),
    AutoTerminate: __expectBoolean(output.AutoTerminate),
    ClusterArn: __expectString(output.ClusterArn),
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsRootVolumeSize: __expectInt32(output.EbsRootVolumeSize),
    Ec2InstanceAttributes:
      output.Ec2InstanceAttributes != null
        ? deserializeAws_json1_1Ec2InstanceAttributes(output.Ec2InstanceAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCollectionType: __expectString(output.InstanceCollectionType),
    KerberosAttributes:
      output.KerberosAttributes != null
        ? deserializeAws_json1_1KerberosAttributes(output.KerberosAttributes, context)
        : undefined,
    LogEncryptionKmsKeyId: __expectString(output.LogEncryptionKmsKeyId),
    LogUri: __expectString(output.LogUri),
    MasterPublicDnsName: __expectString(output.MasterPublicDnsName),
    Name: __expectString(output.Name),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    OSReleaseLabel: __expectString(output.OSReleaseLabel),
    OutpostArn: __expectString(output.OutpostArn),
    PlacementGroups:
      output.PlacementGroups != null
        ? deserializeAws_json1_1PlacementGroupConfigList(output.PlacementGroups, context)
        : undefined,
    ReleaseLabel: __expectString(output.ReleaseLabel),
    RepoUpgradeOnBoot: __expectString(output.RepoUpgradeOnBoot),
    RequestedAmiVersion: __expectString(output.RequestedAmiVersion),
    RunningAmiVersion: __expectString(output.RunningAmiVersion),
    ScaleDownBehavior: __expectString(output.ScaleDownBehavior),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    ServiceRole: __expectString(output.ServiceRole),
    Status: output.Status != null ? deserializeAws_json1_1ClusterStatus(output.Status, context) : undefined,
    StepConcurrencyLevel: __expectInt32(output.StepConcurrencyLevel),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    TerminationProtected: __expectBoolean(output.TerminationProtected),
    VisibleToAllUsers: __expectBoolean(output.VisibleToAllUsers),
  } as any;
};

const deserializeAws_json1_1ClusterStateChangeReason = (
  output: any,
  context: __SerdeContext
): ClusterStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ClusterStatus = (output: any, context: __SerdeContext): ClusterStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1ClusterStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline: output.Timeline != null ? deserializeAws_json1_1ClusterTimeline(output.Timeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    OutpostArn: __expectString(output.OutpostArn),
    Status: output.Status != null ? deserializeAws_json1_1ClusterStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterSummaryList = (output: any, context: __SerdeContext): ClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClusterSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClusterTimeline = (output: any, context: __SerdeContext): ClusterTimeline => {
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

const deserializeAws_json1_1Command = (output: any, context: __SerdeContext): Command => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1StringList(output.Args, context) : undefined,
    Name: __expectString(output.Name),
    ScriptPath: __expectString(output.ScriptPath),
  } as any;
};

const deserializeAws_json1_1CommandList = (output: any, context: __SerdeContext): Command[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Command(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ComputeLimits = (output: any, context: __SerdeContext): ComputeLimits => {
  return {
    MaximumCapacityUnits: __expectInt32(output.MaximumCapacityUnits),
    MaximumCoreCapacityUnits: __expectInt32(output.MaximumCoreCapacityUnits),
    MaximumOnDemandCapacityUnits: __expectInt32(output.MaximumOnDemandCapacityUnits),
    MinimumCapacityUnits: __expectInt32(output.MinimumCapacityUnits),
    UnitType: __expectString(output.UnitType),
  } as any;
};

const deserializeAws_json1_1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Classification: __expectString(output.Classification),
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    Properties: output.Properties != null ? deserializeAws_json1_1StringMap(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Configuration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateSecurityConfigurationOutput = (
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

const deserializeAws_json1_1CreateStudioOutput = (output: any, context: __SerdeContext): CreateStudioOutput => {
  return {
    StudioId: __expectString(output.StudioId),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1Credentials = (output: any, context: __SerdeContext): Credentials => {
  if (output.UsernamePassword != null) {
    return {
      UsernamePassword: deserializeAws_json1_1UsernamePassword(output.UsernamePassword, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeClusterOutput = (output: any, context: __SerdeContext): DescribeClusterOutput => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeJobFlowsOutput = (output: any, context: __SerdeContext): DescribeJobFlowsOutput => {
  return {
    JobFlows: output.JobFlows != null ? deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeNotebookExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeNotebookExecutionOutput => {
  return {
    NotebookExecution:
      output.NotebookExecution != null
        ? deserializeAws_json1_1NotebookExecution(output.NotebookExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReleaseLabelOutput = (
  output: any,
  context: __SerdeContext
): DescribeReleaseLabelOutput => {
  return {
    Applications:
      output.Applications != null
        ? deserializeAws_json1_1SimplifiedApplicationList(output.Applications, context)
        : undefined,
    AvailableOSReleases:
      output.AvailableOSReleases != null
        ? deserializeAws_json1_1OSReleaseList(output.AvailableOSReleases, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    ReleaseLabel: __expectString(output.ReleaseLabel),
  } as any;
};

const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (
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

const deserializeAws_json1_1DescribeStepOutput = (output: any, context: __SerdeContext): DescribeStepOutput => {
  return {
    Step: output.Step != null ? deserializeAws_json1_1Step(output.Step, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStudioOutput = (output: any, context: __SerdeContext): DescribeStudioOutput => {
  return {
    Studio: output.Studio != null ? deserializeAws_json1_1Studio(output.Studio, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EbsBlockDevice = (output: any, context: __SerdeContext): EbsBlockDevice => {
  return {
    Device: __expectString(output.Device),
    VolumeSpecification:
      output.VolumeSpecification != null
        ? deserializeAws_json1_1VolumeSpecification(output.VolumeSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EbsBlockDeviceList = (output: any, context: __SerdeContext): EbsBlockDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EbsBlockDevice(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EbsVolume = (output: any, context: __SerdeContext): EbsVolume => {
  return {
    Device: __expectString(output.Device),
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1EbsVolumeList = (output: any, context: __SerdeContext): EbsVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EbsVolume(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Ec2InstanceAttributes = (output: any, context: __SerdeContext): Ec2InstanceAttributes => {
  return {
    AdditionalMasterSecurityGroups:
      output.AdditionalMasterSecurityGroups != null
        ? deserializeAws_json1_1StringList(output.AdditionalMasterSecurityGroups, context)
        : undefined,
    AdditionalSlaveSecurityGroups:
      output.AdditionalSlaveSecurityGroups != null
        ? deserializeAws_json1_1StringList(output.AdditionalSlaveSecurityGroups, context)
        : undefined,
    Ec2AvailabilityZone: __expectString(output.Ec2AvailabilityZone),
    Ec2KeyName: __expectString(output.Ec2KeyName),
    Ec2SubnetId: __expectString(output.Ec2SubnetId),
    EmrManagedMasterSecurityGroup: __expectString(output.EmrManagedMasterSecurityGroup),
    EmrManagedSlaveSecurityGroup: __expectString(output.EmrManagedSlaveSecurityGroup),
    IamInstanceProfile: __expectString(output.IamInstanceProfile),
    RequestedEc2AvailabilityZones:
      output.RequestedEc2AvailabilityZones != null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2AvailabilityZones, context)
        : undefined,
    RequestedEc2SubnetIds:
      output.RequestedEc2SubnetIds != null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2SubnetIds, context)
        : undefined,
    ServiceAccessSecurityGroup: __expectString(output.ServiceAccessSecurityGroup),
  } as any;
};

const deserializeAws_json1_1EC2InstanceIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExecutionEngineConfig = (output: any, context: __SerdeContext): ExecutionEngineConfig => {
  return {
    Id: __expectString(output.Id),
    MasterInstanceSecurityGroupId: __expectString(output.MasterInstanceSecurityGroupId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    LogFile: __expectString(output.LogFile),
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1GetAutoTerminationPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetAutoTerminationPolicyOutput => {
  return {
    AutoTerminationPolicy:
      output.AutoTerminationPolicy != null
        ? deserializeAws_json1_1AutoTerminationPolicy(output.AutoTerminationPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  return {
    BlockPublicAccessConfiguration:
      output.BlockPublicAccessConfiguration != null
        ? deserializeAws_json1_1BlockPublicAccessConfiguration(output.BlockPublicAccessConfiguration, context)
        : undefined,
    BlockPublicAccessConfigurationMetadata:
      output.BlockPublicAccessConfigurationMetadata != null
        ? deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(
            output.BlockPublicAccessConfigurationMetadata,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetClusterSessionCredentialsOutput = (
  output: any,
  context: __SerdeContext
): GetClusterSessionCredentialsOutput => {
  return {
    Credentials:
      output.Credentials != null
        ? deserializeAws_json1_1Credentials(__expectUnion(output.Credentials), context)
        : undefined,
    ExpiresAt:
      output.ExpiresAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiresAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1GetManagedScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetManagedScalingPolicyOutput => {
  return {
    ManagedScalingPolicy:
      output.ManagedScalingPolicy != null
        ? deserializeAws_json1_1ManagedScalingPolicy(output.ManagedScalingPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetStudioSessionMappingOutput = (
  output: any,
  context: __SerdeContext
): GetStudioSessionMappingOutput => {
  return {
    SessionMapping:
      output.SessionMapping != null
        ? deserializeAws_json1_1SessionMappingDetail(output.SessionMapping, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HadoopJarStepConfig = (output: any, context: __SerdeContext): HadoopJarStepConfig => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1XmlStringList(output.Args, context) : undefined,
    Jar: __expectString(output.Jar),
    MainClass: __expectString(output.MainClass),
    Properties: output.Properties != null ? deserializeAws_json1_1KeyValueList(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HadoopStepConfig = (output: any, context: __SerdeContext): HadoopStepConfig => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1StringList(output.Args, context) : undefined,
    Jar: __expectString(output.Jar),
    MainClass: __expectString(output.MainClass),
    Properties: output.Properties != null ? deserializeAws_json1_1StringMap(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    EbsVolumes: output.EbsVolumes != null ? deserializeAws_json1_1EbsVolumeList(output.EbsVolumes, context) : undefined,
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
    Status: output.Status != null ? deserializeAws_json1_1InstanceStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleet = (output: any, context: __SerdeContext): InstanceFleet => {
  return {
    Id: __expectString(output.Id),
    InstanceFleetType: __expectString(output.InstanceFleetType),
    InstanceTypeSpecifications:
      output.InstanceTypeSpecifications != null
        ? deserializeAws_json1_1InstanceTypeSpecificationList(output.InstanceTypeSpecifications, context)
        : undefined,
    LaunchSpecifications:
      output.LaunchSpecifications != null
        ? deserializeAws_json1_1InstanceFleetProvisioningSpecifications(output.LaunchSpecifications, context)
        : undefined,
    Name: __expectString(output.Name),
    ProvisionedOnDemandCapacity: __expectInt32(output.ProvisionedOnDemandCapacity),
    ProvisionedSpotCapacity: __expectInt32(output.ProvisionedSpotCapacity),
    Status: output.Status != null ? deserializeAws_json1_1InstanceFleetStatus(output.Status, context) : undefined,
    TargetOnDemandCapacity: __expectInt32(output.TargetOnDemandCapacity),
    TargetSpotCapacity: __expectInt32(output.TargetSpotCapacity),
  } as any;
};

const deserializeAws_json1_1InstanceFleetList = (output: any, context: __SerdeContext): InstanceFleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceFleet(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetProvisioningSpecifications => {
  return {
    OnDemandSpecification:
      output.OnDemandSpecification != null
        ? deserializeAws_json1_1OnDemandProvisioningSpecification(output.OnDemandSpecification, context)
        : undefined,
    SpotSpecification:
      output.SpotSpecification != null
        ? deserializeAws_json1_1SpotProvisioningSpecification(output.SpotSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceFleetStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InstanceFleetStatus = (output: any, context: __SerdeContext): InstanceFleetStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1InstanceFleetStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline != null ? deserializeAws_json1_1InstanceFleetTimeline(output.Timeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetTimeline = (output: any, context: __SerdeContext): InstanceFleetTimeline => {
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

const deserializeAws_json1_1InstanceGroup = (output: any, context: __SerdeContext): InstanceGroup => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy != null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
        : undefined,
    BidPrice: __expectString(output.BidPrice),
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    ConfigurationsVersion: __expectLong(output.ConfigurationsVersion),
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsBlockDevices:
      output.EbsBlockDevices != null
        ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
        : undefined,
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    Id: __expectString(output.Id),
    InstanceGroupType: __expectString(output.InstanceGroupType),
    InstanceType: __expectString(output.InstanceType),
    LastSuccessfullyAppliedConfigurations:
      output.LastSuccessfullyAppliedConfigurations != null
        ? deserializeAws_json1_1ConfigurationList(output.LastSuccessfullyAppliedConfigurations, context)
        : undefined,
    LastSuccessfullyAppliedConfigurationsVersion: __expectLong(output.LastSuccessfullyAppliedConfigurationsVersion),
    Market: __expectString(output.Market),
    Name: __expectString(output.Name),
    RequestedInstanceCount: __expectInt32(output.RequestedInstanceCount),
    RunningInstanceCount: __expectInt32(output.RunningInstanceCount),
    ShrinkPolicy:
      output.ShrinkPolicy != null ? deserializeAws_json1_1ShrinkPolicy(output.ShrinkPolicy, context) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1InstanceGroupStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupDetail = (output: any, context: __SerdeContext): InstanceGroupDetail => {
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

const deserializeAws_json1_1InstanceGroupDetailList = (output: any, context: __SerdeContext): InstanceGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceGroupDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceGroupIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InstanceGroupList = (output: any, context: __SerdeContext): InstanceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceGroupStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceGroupStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InstanceGroupStatus = (output: any, context: __SerdeContext): InstanceGroupStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1InstanceGroupStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline != null ? deserializeAws_json1_1InstanceGroupTimeline(output.Timeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupTimeline = (output: any, context: __SerdeContext): InstanceGroupTimeline => {
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

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceResizePolicy = (output: any, context: __SerdeContext): InstanceResizePolicy => {
  return {
    InstanceTerminationTimeout: __expectInt32(output.InstanceTerminationTimeout),
    InstancesToProtect:
      output.InstancesToProtect != null
        ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToProtect, context)
        : undefined,
    InstancesToTerminate:
      output.InstancesToTerminate != null
        ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToTerminate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InstanceStatus = (output: any, context: __SerdeContext): InstanceStatus => {
  return {
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1InstanceStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline: output.Timeline != null ? deserializeAws_json1_1InstanceTimeline(output.Timeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceTimeline = (output: any, context: __SerdeContext): InstanceTimeline => {
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

const deserializeAws_json1_1InstanceTypeSpecification = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification => {
  return {
    BidPrice: __expectString(output.BidPrice),
    BidPriceAsPercentageOfOnDemandPrice: __limitedParseDouble(output.BidPriceAsPercentageOfOnDemandPrice),
    Configurations:
      output.Configurations != null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    CustomAmiId: __expectString(output.CustomAmiId),
    EbsBlockDevices:
      output.EbsBlockDevices != null
        ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
        : undefined,
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    InstanceType: __expectString(output.InstanceType),
    WeightedCapacity: __expectInt32(output.WeightedCapacity),
  } as any;
};

const deserializeAws_json1_1InstanceTypeSpecificationList = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceTypeSpecification(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {} as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JobFlowDetail = (output: any, context: __SerdeContext): JobFlowDetail => {
  return {
    AmiVersion: __expectString(output.AmiVersion),
    AutoScalingRole: __expectString(output.AutoScalingRole),
    BootstrapActions:
      output.BootstrapActions != null
        ? deserializeAws_json1_1BootstrapActionDetailList(output.BootstrapActions, context)
        : undefined,
    ExecutionStatusDetail:
      output.ExecutionStatusDetail != null
        ? deserializeAws_json1_1JobFlowExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    Instances:
      output.Instances != null ? deserializeAws_json1_1JobFlowInstancesDetail(output.Instances, context) : undefined,
    JobFlowId: __expectString(output.JobFlowId),
    JobFlowRole: __expectString(output.JobFlowRole),
    LogEncryptionKmsKeyId: __expectString(output.LogEncryptionKmsKeyId),
    LogUri: __expectString(output.LogUri),
    Name: __expectString(output.Name),
    ScaleDownBehavior: __expectString(output.ScaleDownBehavior),
    ServiceRole: __expectString(output.ServiceRole),
    Steps: output.Steps != null ? deserializeAws_json1_1StepDetailList(output.Steps, context) : undefined,
    SupportedProducts:
      output.SupportedProducts != null
        ? deserializeAws_json1_1SupportedProductsList(output.SupportedProducts, context)
        : undefined,
    VisibleToAllUsers: __expectBoolean(output.VisibleToAllUsers),
  } as any;
};

const deserializeAws_json1_1JobFlowDetailList = (output: any, context: __SerdeContext): JobFlowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobFlowDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JobFlowExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): JobFlowExecutionStatusDetail => {
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

const deserializeAws_json1_1JobFlowInstancesDetail = (output: any, context: __SerdeContext): JobFlowInstancesDetail => {
  return {
    Ec2KeyName: __expectString(output.Ec2KeyName),
    Ec2SubnetId: __expectString(output.Ec2SubnetId),
    HadoopVersion: __expectString(output.HadoopVersion),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceGroups:
      output.InstanceGroups != null
        ? deserializeAws_json1_1InstanceGroupDetailList(output.InstanceGroups, context)
        : undefined,
    KeepJobFlowAliveWhenNoSteps: __expectBoolean(output.KeepJobFlowAliveWhenNoSteps),
    MasterInstanceId: __expectString(output.MasterInstanceId),
    MasterInstanceType: __expectString(output.MasterInstanceType),
    MasterPublicDnsName: __expectString(output.MasterPublicDnsName),
    NormalizedInstanceHours: __expectInt32(output.NormalizedInstanceHours),
    Placement: output.Placement != null ? deserializeAws_json1_1PlacementType(output.Placement, context) : undefined,
    SlaveInstanceType: __expectString(output.SlaveInstanceType),
    TerminationProtected: __expectBoolean(output.TerminationProtected),
  } as any;
};

const deserializeAws_json1_1KerberosAttributes = (output: any, context: __SerdeContext): KerberosAttributes => {
  return {
    ADDomainJoinPassword: __expectString(output.ADDomainJoinPassword),
    ADDomainJoinUser: __expectString(output.ADDomainJoinUser),
    CrossRealmTrustPrincipalPassword: __expectString(output.CrossRealmTrustPrincipalPassword),
    KdcAdminPassword: __expectString(output.KdcAdminPassword),
    Realm: __expectString(output.Realm),
  } as any;
};

const deserializeAws_json1_1KeyValue = (output: any, context: __SerdeContext): KeyValue => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1KeyValueList = (output: any, context: __SerdeContext): KeyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListBootstrapActionsOutput = (
  output: any,
  context: __SerdeContext
): ListBootstrapActionsOutput => {
  return {
    BootstrapActions:
      output.BootstrapActions != null ? deserializeAws_json1_1CommandList(output.BootstrapActions, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListClustersOutput = (output: any, context: __SerdeContext): ListClustersOutput => {
  return {
    Clusters: output.Clusters != null ? deserializeAws_json1_1ClusterSummaryList(output.Clusters, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListInstanceFleetsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceFleetsOutput => {
  return {
    InstanceFleets:
      output.InstanceFleets != null
        ? deserializeAws_json1_1InstanceFleetList(output.InstanceFleets, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceGroupsOutput => {
  return {
    InstanceGroups:
      output.InstanceGroups != null
        ? deserializeAws_json1_1InstanceGroupList(output.InstanceGroups, context)
        : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListInstancesOutput = (output: any, context: __SerdeContext): ListInstancesOutput => {
  return {
    Instances: output.Instances != null ? deserializeAws_json1_1InstanceList(output.Instances, context) : undefined,
    Marker: __expectString(output.Marker),
  } as any;
};

const deserializeAws_json1_1ListNotebookExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListNotebookExecutionsOutput => {
  return {
    Marker: __expectString(output.Marker),
    NotebookExecutions:
      output.NotebookExecutions != null
        ? deserializeAws_json1_1NotebookExecutionSummaryList(output.NotebookExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListReleaseLabelsOutput = (
  output: any,
  context: __SerdeContext
): ListReleaseLabelsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ReleaseLabels:
      output.ReleaseLabels != null ? deserializeAws_json1_1StringList(output.ReleaseLabels, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  return {
    Marker: __expectString(output.Marker),
    SecurityConfigurations:
      output.SecurityConfigurations != null
        ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStepsOutput = (output: any, context: __SerdeContext): ListStepsOutput => {
  return {
    Marker: __expectString(output.Marker),
    Steps: output.Steps != null ? deserializeAws_json1_1StepSummaryList(output.Steps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListStudioSessionMappingsOutput = (
  output: any,
  context: __SerdeContext
): ListStudioSessionMappingsOutput => {
  return {
    Marker: __expectString(output.Marker),
    SessionMappings:
      output.SessionMappings != null
        ? deserializeAws_json1_1SessionMappingSummaryList(output.SessionMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStudiosOutput = (output: any, context: __SerdeContext): ListStudiosOutput => {
  return {
    Marker: __expectString(output.Marker),
    Studios: output.Studios != null ? deserializeAws_json1_1StudioSummaryList(output.Studios, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedScalingPolicy = (output: any, context: __SerdeContext): ManagedScalingPolicy => {
  return {
    ComputeLimits:
      output.ComputeLimits != null ? deserializeAws_json1_1ComputeLimits(output.ComputeLimits, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1MetricDimensionList = (output: any, context: __SerdeContext): MetricDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ModifyClusterOutput = (output: any, context: __SerdeContext): ModifyClusterOutput => {
  return {
    StepConcurrencyLevel: __expectInt32(output.StepConcurrencyLevel),
  } as any;
};

const deserializeAws_json1_1NotebookExecution = (output: any, context: __SerdeContext): NotebookExecution => {
  return {
    Arn: __expectString(output.Arn),
    EditorId: __expectString(output.EditorId),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ExecutionEngine:
      output.ExecutionEngine != null
        ? deserializeAws_json1_1ExecutionEngineConfig(output.ExecutionEngine, context)
        : undefined,
    LastStateChangeReason: __expectString(output.LastStateChangeReason),
    NotebookExecutionId: __expectString(output.NotebookExecutionId),
    NotebookExecutionName: __expectString(output.NotebookExecutionName),
    NotebookInstanceSecurityGroupId: __expectString(output.NotebookInstanceSecurityGroupId),
    NotebookParams: __expectString(output.NotebookParams),
    OutputNotebookURI: __expectString(output.OutputNotebookURI),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1NotebookExecutionSummary = (
  output: any,
  context: __SerdeContext
): NotebookExecutionSummary => {
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

const deserializeAws_json1_1NotebookExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): NotebookExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotebookExecutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OnDemandCapacityReservationOptions = (
  output: any,
  context: __SerdeContext
): OnDemandCapacityReservationOptions => {
  return {
    CapacityReservationPreference: __expectString(output.CapacityReservationPreference),
    CapacityReservationResourceGroupArn: __expectString(output.CapacityReservationResourceGroupArn),
    UsageStrategy: __expectString(output.UsageStrategy),
  } as any;
};

const deserializeAws_json1_1OnDemandProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): OnDemandProvisioningSpecification => {
  return {
    AllocationStrategy: __expectString(output.AllocationStrategy),
    CapacityReservationOptions:
      output.CapacityReservationOptions != null
        ? deserializeAws_json1_1OnDemandCapacityReservationOptions(output.CapacityReservationOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OSRelease = (output: any, context: __SerdeContext): OSRelease => {
  return {
    Label: __expectString(output.Label),
  } as any;
};

const deserializeAws_json1_1OSReleaseList = (output: any, context: __SerdeContext): OSRelease[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OSRelease(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlacementGroupConfig = (output: any, context: __SerdeContext): PlacementGroupConfig => {
  return {
    InstanceRole: __expectString(output.InstanceRole),
    PlacementStrategy: __expectString(output.PlacementStrategy),
  } as any;
};

const deserializeAws_json1_1PlacementGroupConfigList = (
  output: any,
  context: __SerdeContext
): PlacementGroupConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementGroupConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PlacementType = (output: any, context: __SerdeContext): PlacementType => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.AvailabilityZones, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    MaxRange: __expectInt32(output.MaxRange),
    MinRange: __expectInt32(output.MinRange),
  } as any;
};

const deserializeAws_json1_1PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutAutoScalingPolicyOutput => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy != null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
        : undefined,
    ClusterArn: __expectString(output.ClusterArn),
    ClusterId: __expectString(output.ClusterId),
    InstanceGroupId: __expectString(output.InstanceGroupId),
  } as any;
};

const deserializeAws_json1_1PutAutoTerminationPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutAutoTerminationPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): PutBlockPublicAccessConfigurationOutput => {
  return {} as any;
};

const deserializeAws_json1_1PutManagedScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutManagedScalingPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1RemoveAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveAutoScalingPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1RemoveAutoTerminationPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveAutoTerminationPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1RemoveManagedScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveManagedScalingPolicyOutput => {
  return {} as any;
};

const deserializeAws_json1_1RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  return {} as any;
};

const deserializeAws_json1_1RunJobFlowOutput = (output: any, context: __SerdeContext): RunJobFlowOutput => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    JobFlowId: __expectString(output.JobFlowId),
  } as any;
};

const deserializeAws_json1_1ScalingAction = (output: any, context: __SerdeContext): ScalingAction => {
  return {
    Market: __expectString(output.Market),
    SimpleScalingPolicyConfiguration:
      output.SimpleScalingPolicyConfiguration != null
        ? deserializeAws_json1_1SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingConstraints = (output: any, context: __SerdeContext): ScalingConstraints => {
  return {
    MaxCapacity: __expectInt32(output.MaxCapacity),
    MinCapacity: __expectInt32(output.MinCapacity),
  } as any;
};

const deserializeAws_json1_1ScalingRule = (output: any, context: __SerdeContext): ScalingRule => {
  return {
    Action: output.Action != null ? deserializeAws_json1_1ScalingAction(output.Action, context) : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Trigger: output.Trigger != null ? deserializeAws_json1_1ScalingTrigger(output.Trigger, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingRuleList = (output: any, context: __SerdeContext): ScalingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScalingTrigger = (output: any, context: __SerdeContext): ScalingTrigger => {
  return {
    CloudWatchAlarmDefinition:
      output.CloudWatchAlarmDefinition != null
        ? deserializeAws_json1_1CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScriptBootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): ScriptBootstrapActionConfig => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1XmlStringList(output.Args, context) : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SecurityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary => {
  return {
    CreationDateTime:
      output.CreationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDateTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SessionMappingDetail = (output: any, context: __SerdeContext): SessionMappingDetail => {
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

const deserializeAws_json1_1SessionMappingSummary = (output: any, context: __SerdeContext): SessionMappingSummary => {
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

const deserializeAws_json1_1SessionMappingSummaryList = (
  output: any,
  context: __SerdeContext
): SessionMappingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SessionMappingSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ShrinkPolicy = (output: any, context: __SerdeContext): ShrinkPolicy => {
  return {
    DecommissionTimeout: __expectInt32(output.DecommissionTimeout),
    InstanceResizePolicy:
      output.InstanceResizePolicy != null
        ? deserializeAws_json1_1InstanceResizePolicy(output.InstanceResizePolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): SimpleScalingPolicyConfiguration => {
  return {
    AdjustmentType: __expectString(output.AdjustmentType),
    CoolDown: __expectInt32(output.CoolDown),
    ScalingAdjustment: __expectInt32(output.ScalingAdjustment),
  } as any;
};

const deserializeAws_json1_1SimplifiedApplication = (output: any, context: __SerdeContext): SimplifiedApplication => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1SimplifiedApplicationList = (
  output: any,
  context: __SerdeContext
): SimplifiedApplication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SimplifiedApplication(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SpotProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): SpotProvisioningSpecification => {
  return {
    AllocationStrategy: __expectString(output.AllocationStrategy),
    BlockDurationMinutes: __expectInt32(output.BlockDurationMinutes),
    TimeoutAction: __expectString(output.TimeoutAction),
    TimeoutDurationMinutes: __expectInt32(output.TimeoutDurationMinutes),
  } as any;
};

const deserializeAws_json1_1StartNotebookExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartNotebookExecutionOutput => {
  return {
    NotebookExecutionId: __expectString(output.NotebookExecutionId),
  } as any;
};

const deserializeAws_json1_1Step = (output: any, context: __SerdeContext): Step => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    Config: output.Config != null ? deserializeAws_json1_1HadoopStepConfig(output.Config, context) : undefined,
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: output.Status != null ? deserializeAws_json1_1StepStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StepConfig = (output: any, context: __SerdeContext): StepConfig => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    HadoopJarStep:
      output.HadoopJarStep != null
        ? deserializeAws_json1_1HadoopJarStepConfig(output.HadoopJarStep, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1StepDetail = (output: any, context: __SerdeContext): StepDetail => {
  return {
    ExecutionStatusDetail:
      output.ExecutionStatusDetail != null
        ? deserializeAws_json1_1StepExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    StepConfig: output.StepConfig != null ? deserializeAws_json1_1StepConfig(output.StepConfig, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StepDetailList = (output: any, context: __SerdeContext): StepDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StepExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): StepExecutionStatusDetail => {
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

const deserializeAws_json1_1StepIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StepStateChangeReason = (output: any, context: __SerdeContext): StepStateChangeReason => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StepStatus = (output: any, context: __SerdeContext): StepStatus => {
  return {
    FailureDetails:
      output.FailureDetails != null ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context) : undefined,
    State: __expectString(output.State),
    StateChangeReason:
      output.StateChangeReason != null
        ? deserializeAws_json1_1StepStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline: output.Timeline != null ? deserializeAws_json1_1StepTimeline(output.Timeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StepSummary = (output: any, context: __SerdeContext): StepSummary => {
  return {
    ActionOnFailure: __expectString(output.ActionOnFailure),
    Config: output.Config != null ? deserializeAws_json1_1HadoopStepConfig(output.Config, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: output.Status != null ? deserializeAws_json1_1StepStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StepSummaryList = (output: any, context: __SerdeContext): StepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StepTimeline = (output: any, context: __SerdeContext): StepTimeline => {
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

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Studio = (output: any, context: __SerdeContext): Studio => {
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
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
    Url: __expectString(output.Url),
    UserRole: __expectString(output.UserRole),
    VpcId: __expectString(output.VpcId),
    WorkspaceSecurityGroupId: __expectString(output.WorkspaceSecurityGroupId),
  } as any;
};

const deserializeAws_json1_1StudioSummary = (output: any, context: __SerdeContext): StudioSummary => {
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

const deserializeAws_json1_1StudioSummaryList = (output: any, context: __SerdeContext): StudioSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StudioSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SupportedProductsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UsernamePassword = (output: any, context: __SerdeContext): UsernamePassword => {
  return {
    Password: __expectString(output.Password),
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1VolumeSpecification = (output: any, context: __SerdeContext): VolumeSpecification => {
  return {
    Iops: __expectInt32(output.Iops),
    SizeInGB: __expectInt32(output.SizeInGB),
    Throughput: __expectInt32(output.Throughput),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1XmlStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1XmlStringMaxLen256List = (output: any, context: __SerdeContext): string[] => {
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
