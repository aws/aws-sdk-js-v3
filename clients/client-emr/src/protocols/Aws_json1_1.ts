// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
} from "../commands/ListSupportedInstanceTypesCommand";
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
  AddInstanceGroupsInput,
  AddJobFlowStepsInput,
  AddTagsInput,
  Application,
  AutoScalingPolicy,
  AutoScalingPolicyDescription,
  AutoTerminationPolicy,
  BlockPublicAccessConfiguration,
  BlockPublicAccessConfigurationMetadata,
  BootstrapActionConfig,
  CancelStepsInput,
  CloudWatchAlarmDefinition,
  Cluster,
  ClusterState,
  ClusterStatus,
  ClusterSummary,
  ClusterTimeline,
  ComputeLimits,
  Configuration,
  CreateSecurityConfigurationInput,
  CreateSecurityConfigurationOutput,
  CreateStudioInput,
  CreateStudioSessionMappingInput,
  DeleteSecurityConfigurationInput,
  DeleteStudioInput,
  DeleteStudioSessionMappingInput,
  DescribeClusterInput,
  DescribeClusterOutput,
  DescribeJobFlowsInput,
  DescribeJobFlowsOutput,
  DescribeNotebookExecutionInput,
  DescribeNotebookExecutionOutput,
  DescribeReleaseLabelInput,
  DescribeSecurityConfigurationInput,
  DescribeSecurityConfigurationOutput,
  DescribeStepInput,
  DescribeStepOutput,
  DescribeStudioInput,
  DescribeStudioOutput,
  EbsBlockDeviceConfig,
  EbsConfiguration,
  ExecutionEngineConfig,
  GetAutoTerminationPolicyInput,
  GetBlockPublicAccessConfigurationInput,
  GetBlockPublicAccessConfigurationOutput,
  GetClusterSessionCredentialsInput,
  GetClusterSessionCredentialsOutput,
  GetManagedScalingPolicyInput,
  GetStudioSessionMappingInput,
  GetStudioSessionMappingOutput,
  HadoopJarStepConfig,
  Instance,
  InstanceFleet,
  InstanceFleetConfig,
  InstanceFleetModifyConfig,
  InstanceFleetProvisioningSpecifications,
  InstanceFleetResizingSpecifications,
  InstanceFleetStatus,
  InstanceFleetTimeline,
  InstanceGroup,
  InstanceGroupConfig,
  InstanceGroupDetail,
  InstanceGroupModifyConfig,
  InstanceGroupStatus,
  InstanceGroupTimeline,
  InstanceGroupType,
  InstanceResizePolicy,
  InstanceState,
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
  ListSecurityConfigurationsInput,
  ListSecurityConfigurationsOutput,
  ListStepsInput,
  ListStepsOutput,
  ListStudioSessionMappingsInput,
  ListStudioSessionMappingsOutput,
  ListStudiosInput,
  ListStudiosOutput,
  ListSupportedInstanceTypesInput,
  ListSupportedInstanceTypesOutput,
  ManagedScalingPolicy,
  MetricDimension,
  ModifyClusterInput,
  ModifyInstanceFleetInput,
  ModifyInstanceGroupsInput,
  NotebookExecution,
  NotebookExecutionSummary,
  NotebookS3LocationFromInput,
  OnDemandCapacityReservationOptions,
  OnDemandProvisioningSpecification,
  OnDemandResizingSpecification,
  OutputNotebookS3LocationFromInput,
  PlacementGroupConfig,
  PlacementType,
  PortRange,
  PutAutoScalingPolicyInput,
  PutAutoScalingPolicyOutput,
  PutAutoTerminationPolicyInput,
  PutBlockPublicAccessConfigurationInput,
  PutManagedScalingPolicyInput,
  ReleaseLabelFilter,
  RemoveAutoScalingPolicyInput,
  RemoveAutoTerminationPolicyInput,
  RemoveManagedScalingPolicyInput,
  RemoveTagsInput,
  RunJobFlowInput,
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
  SpotProvisioningSpecification,
  SpotResizingSpecification,
  StartNotebookExecutionInput,
  Step,
  StepConfig,
  StepDetail,
  StepExecutionStatusDetail,
  StepState,
  StepStatus,
  StepSummary,
  StepTimeline,
  StopNotebookExecutionInput,
  Studio,
  StudioSummary,
  SupportedInstanceType,
  SupportedProductConfig,
  Tag,
  TerminateJobFlowsInput,
  UpdateStudioInput,
  UpdateStudioSessionMappingInput,
  VolumeSpecification,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddInstanceFleetCommand
 */
export const se_AddInstanceFleetCommand = async (
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddInstanceFleet");
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
  const headers: __HeaderBag = sharedHeaders("AddInstanceGroups");
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
  const headers: __HeaderBag = sharedHeaders("AddJobFlowSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelStepsCommand
 */
export const se_CancelStepsCommand = async (
  input: CancelStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSecurityConfigurationCommand
 */
export const se_CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioCommand
 */
export const se_CreateStudioCommand = async (
  input: CreateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStudio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioSessionMappingCommand
 */
export const se_CreateStudioSessionMappingCommand = async (
  input: CreateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStudioSessionMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSecurityConfigurationCommand
 */
export const se_DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioCommand
 */
export const se_DeleteStudioCommand = async (
  input: DeleteStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStudio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioSessionMappingCommand
 */
export const se_DeleteStudioSessionMappingCommand = async (
  input: DeleteStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStudioSessionMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeJobFlowsCommand
 */
export const se_DescribeJobFlowsCommand = async (
  input: DescribeJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeJobFlows");
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
  const headers: __HeaderBag = sharedHeaders("DescribeNotebookExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReleaseLabelCommand
 */
export const se_DescribeReleaseLabelCommand = async (
  input: DescribeReleaseLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReleaseLabel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSecurityConfigurationCommand
 */
export const se_DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSecurityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStepCommand
 */
export const se_DescribeStepCommand = async (
  input: DescribeStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStep");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStudioCommand
 */
export const se_DescribeStudioCommand = async (
  input: DescribeStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStudio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAutoTerminationPolicyCommand
 */
export const se_GetAutoTerminationPolicyCommand = async (
  input: GetAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAutoTerminationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlockPublicAccessConfigurationCommand
 */
export const se_GetBlockPublicAccessConfigurationCommand = async (
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlockPublicAccessConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetClusterSessionCredentialsCommand
 */
export const se_GetClusterSessionCredentialsCommand = async (
  input: GetClusterSessionCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetClusterSessionCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetManagedScalingPolicyCommand
 */
export const se_GetManagedScalingPolicyCommand = async (
  input: GetManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetManagedScalingPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStudioSessionMappingCommand
 */
export const se_GetStudioSessionMappingCommand = async (
  input: GetStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStudioSessionMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBootstrapActionsCommand
 */
export const se_ListBootstrapActionsCommand = async (
  input: ListBootstrapActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBootstrapActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusters");
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
  const headers: __HeaderBag = sharedHeaders("ListInstanceFleets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstanceGroupsCommand
 */
export const se_ListInstanceGroupsCommand = async (
  input: ListInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstanceGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookExecutionsCommand
 */
export const se_ListNotebookExecutionsCommand = async (
  input: ListNotebookExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookExecutions");
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
  const headers: __HeaderBag = sharedHeaders("ListReleaseLabels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSecurityConfigurationsCommand
 */
export const se_ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSecurityConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStepsCommand
 */
export const se_ListStepsCommand = async (
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudiosCommand
 */
export const se_ListStudiosCommand = async (
  input: ListStudiosCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStudios");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudioSessionMappingsCommand
 */
export const se_ListStudioSessionMappingsCommand = async (
  input: ListStudioSessionMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStudioSessionMappings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSupportedInstanceTypesCommand
 */
export const se_ListSupportedInstanceTypesCommand = async (
  input: ListSupportedInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSupportedInstanceTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClusterCommand
 */
export const se_ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyInstanceFleetCommand
 */
export const se_ModifyInstanceFleetCommand = async (
  input: ModifyInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyInstanceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyInstanceGroupsCommand
 */
export const se_ModifyInstanceGroupsCommand = async (
  input: ModifyInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyInstanceGroups");
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
  const headers: __HeaderBag = sharedHeaders("PutAutoScalingPolicy");
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
  const headers: __HeaderBag = sharedHeaders("PutAutoTerminationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutBlockPublicAccessConfigurationCommand
 */
export const se_PutBlockPublicAccessConfigurationCommand = async (
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutBlockPublicAccessConfiguration");
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
  const headers: __HeaderBag = sharedHeaders("PutManagedScalingPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAutoScalingPolicyCommand
 */
export const se_RemoveAutoScalingPolicyCommand = async (
  input: RemoveAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveAutoScalingPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAutoTerminationPolicyCommand
 */
export const se_RemoveAutoTerminationPolicyCommand = async (
  input: RemoveAutoTerminationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveAutoTerminationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveManagedScalingPolicyCommand
 */
export const se_RemoveManagedScalingPolicyCommand = async (
  input: RemoveManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveManagedScalingPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RunJobFlowCommand
 */
export const se_RunJobFlowCommand = async (
  input: RunJobFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RunJobFlow");
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
  const headers: __HeaderBag = sharedHeaders("SetTerminationProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetVisibleToAllUsersCommand
 */
export const se_SetVisibleToAllUsersCommand = async (
  input: SetVisibleToAllUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetVisibleToAllUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartNotebookExecutionCommand
 */
export const se_StartNotebookExecutionCommand = async (
  input: StartNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartNotebookExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopNotebookExecutionCommand
 */
export const se_StopNotebookExecutionCommand = async (
  input: StopNotebookExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopNotebookExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateJobFlowsCommand
 */
export const se_TerminateJobFlowsCommand = async (
  input: TerminateJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateJobFlows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStudioCommand
 */
export const se_UpdateStudioCommand = async (
  input: UpdateStudioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStudio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStudioSessionMappingCommand
 */
export const se_UpdateStudioSessionMappingCommand = async (
  input: UpdateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStudioSessionMapping");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AddInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddJobFlowStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateStudioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeReleaseLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListBootstrapActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListReleaseLabelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSupportedInstanceTypesCommand
 */
export const de_ListSupportedInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedInstanceTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSupportedInstanceTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSupportedInstanceTypesOutput(data, context);
  const response: ListSupportedInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSupportedInstanceTypesCommandError
 */
const de_ListSupportedInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSupportedInstanceTypesCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: PutAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: PutBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: RemoveAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: RemoveAutoTerminationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: RemoveManagedScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RunJobFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartNotebookExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClusterId: [],
    InstanceFleet: (_) => se_InstanceFleetConfig(_, context),
  });
};

/**
 * serializeAws_json1_1AddInstanceGroupsInput
 */
const se_AddInstanceGroupsInput = (input: AddInstanceGroupsInput, context: __SerdeContext): any => {
  return take(input, {
    InstanceGroups: (_) => se_InstanceGroupConfigList(_, context),
    JobFlowId: [],
  });
};

// se_AddJobFlowStepsInput omitted.

// se_AddTagsInput omitted.

// se_Application omitted.

// se_ApplicationList omitted.

/**
 * serializeAws_json1_1AutoScalingPolicy
 */
const se_AutoScalingPolicy = (input: AutoScalingPolicy, context: __SerdeContext): any => {
  return take(input, {
    Constraints: _json,
    Rules: (_) => se_ScalingRuleList(_, context),
  });
};

// se_AutoTerminationPolicy omitted.

/**
 * serializeAws_json1_1BlockPublicAccessConfiguration
 */
const se_BlockPublicAccessConfiguration = (input: BlockPublicAccessConfiguration, context: __SerdeContext): any => {
  return take(input, {
    BlockPublicSecurityGroupRules: [],
    Classification: [],
    Configurations: (_) => se_ConfigurationList(_, context),
    PermittedPublicSecurityGroupRuleRanges: _json,
    Properties: _json,
  });
};

// se_BootstrapActionConfig omitted.

// se_BootstrapActionConfigList omitted.

// se_CancelStepsInput omitted.

/**
 * serializeAws_json1_1CloudWatchAlarmDefinition
 */
const se_CloudWatchAlarmDefinition = (input: CloudWatchAlarmDefinition, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    Dimensions: _json,
    EvaluationPeriods: [],
    MetricName: [],
    Namespace: [],
    Period: [],
    Statistic: [],
    Threshold: __serializeFloat,
    Unit: [],
  });
};

// se_ClusterStateList omitted.

// se_ComputeLimits omitted.

/**
 * serializeAws_json1_1Configuration
 */
const se_Configuration = (input: Configuration, context: __SerdeContext): any => {
  return take(input, {
    Classification: [],
    Configurations: (_) => se_ConfigurationList(_, context),
    Properties: _json,
  });
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

// se_CreateSecurityConfigurationInput omitted.

// se_CreateStudioInput omitted.

// se_CreateStudioSessionMappingInput omitted.

// se_DeleteSecurityConfigurationInput omitted.

// se_DeleteStudioInput omitted.

// se_DeleteStudioSessionMappingInput omitted.

// se_DescribeClusterInput omitted.

/**
 * serializeAws_json1_1DescribeJobFlowsInput
 */
const se_DescribeJobFlowsInput = (input: DescribeJobFlowsInput, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    JobFlowIds: _json,
    JobFlowStates: _json,
  });
};

// se_DescribeNotebookExecutionInput omitted.

// se_DescribeReleaseLabelInput omitted.

// se_DescribeSecurityConfigurationInput omitted.

// se_DescribeStepInput omitted.

// se_DescribeStudioInput omitted.

// se_EbsBlockDeviceConfig omitted.

// se_EbsBlockDeviceConfigList omitted.

// se_EbsConfiguration omitted.

// se_EC2InstanceIdsList omitted.

// se_EC2InstanceIdsToTerminateList omitted.

// se_EnvironmentVariablesMap omitted.

// se_ExecutionEngineConfig omitted.

// se_GetAutoTerminationPolicyInput omitted.

// se_GetBlockPublicAccessConfigurationInput omitted.

// se_GetClusterSessionCredentialsInput omitted.

// se_GetManagedScalingPolicyInput omitted.

// se_GetStudioSessionMappingInput omitted.

// se_HadoopJarStepConfig omitted.

/**
 * serializeAws_json1_1InstanceFleetConfig
 */
const se_InstanceFleetConfig = (input: InstanceFleetConfig, context: __SerdeContext): any => {
  return take(input, {
    InstanceFleetType: [],
    InstanceTypeConfigs: (_) => se_InstanceTypeConfigList(_, context),
    LaunchSpecifications: _json,
    Name: [],
    ResizeSpecifications: _json,
    TargetOnDemandCapacity: [],
    TargetSpotCapacity: [],
  });
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

// se_InstanceFleetModifyConfig omitted.

// se_InstanceFleetProvisioningSpecifications omitted.

// se_InstanceFleetResizingSpecifications omitted.

/**
 * serializeAws_json1_1InstanceGroupConfig
 */
const se_InstanceGroupConfig = (input: InstanceGroupConfig, context: __SerdeContext): any => {
  return take(input, {
    AutoScalingPolicy: (_) => se_AutoScalingPolicy(_, context),
    BidPrice: [],
    Configurations: (_) => se_ConfigurationList(_, context),
    CustomAmiId: [],
    EbsConfiguration: _json,
    InstanceCount: [],
    InstanceRole: [],
    InstanceType: [],
    Market: [],
    Name: [],
  });
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
  return take(input, {
    Configurations: (_) => se_ConfigurationList(_, context),
    EC2InstanceIdsToTerminate: _json,
    InstanceCount: [],
    InstanceGroupId: [],
    ReconfigurationType: [],
    ShrinkPolicy: _json,
  });
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

// se_InstanceGroupTypeList omitted.

// se_InstanceResizePolicy omitted.

// se_InstanceStateList omitted.

/**
 * serializeAws_json1_1InstanceTypeConfig
 */
const se_InstanceTypeConfig = (input: InstanceTypeConfig, context: __SerdeContext): any => {
  return take(input, {
    BidPrice: [],
    BidPriceAsPercentageOfOnDemandPrice: __serializeFloat,
    Configurations: (_) => se_ConfigurationList(_, context),
    CustomAmiId: [],
    EbsConfiguration: _json,
    InstanceType: [],
    WeightedCapacity: [],
  });
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

// se_JobFlowExecutionStateList omitted.

/**
 * serializeAws_json1_1JobFlowInstancesConfig
 */
const se_JobFlowInstancesConfig = (input: JobFlowInstancesConfig, context: __SerdeContext): any => {
  return take(input, {
    AdditionalMasterSecurityGroups: _json,
    AdditionalSlaveSecurityGroups: _json,
    Ec2KeyName: [],
    Ec2SubnetId: [],
    Ec2SubnetIds: _json,
    EmrManagedMasterSecurityGroup: [],
    EmrManagedSlaveSecurityGroup: [],
    HadoopVersion: [],
    InstanceCount: [],
    InstanceFleets: (_) => se_InstanceFleetConfigList(_, context),
    InstanceGroups: (_) => se_InstanceGroupConfigList(_, context),
    KeepJobFlowAliveWhenNoSteps: [],
    MasterInstanceType: [],
    Placement: _json,
    ServiceAccessSecurityGroup: [],
    SlaveInstanceType: [],
    TerminationProtected: [],
  });
};

// se_KerberosAttributes omitted.

// se_KeyValue omitted.

// se_KeyValueList omitted.

// se_ListBootstrapActionsInput omitted.

/**
 * serializeAws_json1_1ListClustersInput
 */
const se_ListClustersInput = (input: ListClustersInput, context: __SerdeContext): any => {
  return take(input, {
    ClusterStates: _json,
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    Marker: [],
  });
};

// se_ListInstanceFleetsInput omitted.

// se_ListInstanceGroupsInput omitted.

// se_ListInstancesInput omitted.

/**
 * serializeAws_json1_1ListNotebookExecutionsInput
 */
const se_ListNotebookExecutionsInput = (input: ListNotebookExecutionsInput, context: __SerdeContext): any => {
  return take(input, {
    EditorId: [],
    ExecutionEngineId: [],
    From: (_) => Math.round(_.getTime() / 1000),
    Marker: [],
    Status: [],
    To: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListReleaseLabelsInput omitted.

// se_ListSecurityConfigurationsInput omitted.

// se_ListStepsInput omitted.

// se_ListStudioSessionMappingsInput omitted.

// se_ListStudiosInput omitted.

// se_ListSupportedInstanceTypesInput omitted.

// se_ManagedScalingPolicy omitted.

// se_MetricDimension omitted.

// se_MetricDimensionList omitted.

// se_ModifyClusterInput omitted.

// se_ModifyInstanceFleetInput omitted.

/**
 * serializeAws_json1_1ModifyInstanceGroupsInput
 */
const se_ModifyInstanceGroupsInput = (input: ModifyInstanceGroupsInput, context: __SerdeContext): any => {
  return take(input, {
    ClusterId: [],
    InstanceGroups: (_) => se_InstanceGroupModifyConfigList(_, context),
  });
};

// se_NewSupportedProductsList omitted.

// se_NotebookS3LocationFromInput omitted.

// se_OnDemandCapacityReservationOptions omitted.

// se_OnDemandProvisioningSpecification omitted.

// se_OnDemandResizingSpecification omitted.

// se_OutputNotebookS3LocationFromInput omitted.

// se_PlacementGroupConfig omitted.

// se_PlacementGroupConfigList omitted.

// se_PlacementType omitted.

// se_PortRange omitted.

// se_PortRanges omitted.

/**
 * serializeAws_json1_1PutAutoScalingPolicyInput
 */
const se_PutAutoScalingPolicyInput = (input: PutAutoScalingPolicyInput, context: __SerdeContext): any => {
  return take(input, {
    AutoScalingPolicy: (_) => se_AutoScalingPolicy(_, context),
    ClusterId: [],
    InstanceGroupId: [],
  });
};

// se_PutAutoTerminationPolicyInput omitted.

/**
 * serializeAws_json1_1PutBlockPublicAccessConfigurationInput
 */
const se_PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return take(input, {
    BlockPublicAccessConfiguration: (_) => se_BlockPublicAccessConfiguration(_, context),
  });
};

// se_PutManagedScalingPolicyInput omitted.

// se_ReleaseLabelFilter omitted.

// se_RemoveAutoScalingPolicyInput omitted.

// se_RemoveAutoTerminationPolicyInput omitted.

// se_RemoveManagedScalingPolicyInput omitted.

// se_RemoveTagsInput omitted.

/**
 * serializeAws_json1_1RunJobFlowInput
 */
const se_RunJobFlowInput = (input: RunJobFlowInput, context: __SerdeContext): any => {
  return take(input, {
    AdditionalInfo: [],
    AmiVersion: [],
    Applications: _json,
    AutoScalingRole: [],
    AutoTerminationPolicy: _json,
    BootstrapActions: _json,
    Configurations: (_) => se_ConfigurationList(_, context),
    CustomAmiId: [],
    EbsRootVolumeSize: [],
    Instances: (_) => se_JobFlowInstancesConfig(_, context),
    JobFlowRole: [],
    KerberosAttributes: _json,
    LogEncryptionKmsKeyId: [],
    LogUri: [],
    ManagedScalingPolicy: _json,
    Name: [],
    NewSupportedProducts: _json,
    OSReleaseLabel: [],
    PlacementGroupConfigs: _json,
    ReleaseLabel: [],
    RepoUpgradeOnBoot: [],
    ScaleDownBehavior: [],
    SecurityConfiguration: [],
    ServiceRole: [],
    StepConcurrencyLevel: [],
    Steps: _json,
    SupportedProducts: _json,
    Tags: _json,
    VisibleToAllUsers: [],
  });
};

// se_ScalingAction omitted.

// se_ScalingConstraints omitted.

/**
 * serializeAws_json1_1ScalingRule
 */
const se_ScalingRule = (input: ScalingRule, context: __SerdeContext): any => {
  return take(input, {
    Action: _json,
    Description: [],
    Name: [],
    Trigger: (_) => se_ScalingTrigger(_, context),
  });
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
  return take(input, {
    CloudWatchAlarmDefinition: (_) => se_CloudWatchAlarmDefinition(_, context),
  });
};

// se_ScriptBootstrapActionConfig omitted.

// se_SecurityGroupsList omitted.

// se_SetTerminationProtectionInput omitted.

// se_SetVisibleToAllUsersInput omitted.

// se_ShrinkPolicy omitted.

// se_SimpleScalingPolicyConfiguration omitted.

// se_SpotProvisioningSpecification omitted.

// se_SpotResizingSpecification omitted.

// se_StartNotebookExecutionInput omitted.

// se_StepConfig omitted.

// se_StepConfigList omitted.

// se_StepIdsList omitted.

// se_StepStateList omitted.

// se_StopNotebookExecutionInput omitted.

// se_StringList omitted.

// se_StringMap omitted.

// se_SubnetIdList omitted.

// se_SupportedProductConfig omitted.

// se_SupportedProductsList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TerminateJobFlowsInput omitted.

// se_UpdateStudioInput omitted.

// se_UpdateStudioSessionMappingInput omitted.

// se_VolumeSpecification omitted.

// se_XmlStringList omitted.

// se_XmlStringMaxLen256List omitted.

// de_AddInstanceFleetOutput omitted.

// de_AddInstanceGroupsOutput omitted.

// de_AddJobFlowStepsOutput omitted.

// de_AddTagsOutput omitted.

// de_Application omitted.

// de_ApplicationList omitted.

/**
 * deserializeAws_json1_1AutoScalingPolicyDescription
 */
const de_AutoScalingPolicyDescription = (output: any, context: __SerdeContext): AutoScalingPolicyDescription => {
  return take(output, {
    Constraints: _json,
    Rules: (_: any) => de_ScalingRuleList(_, context),
    Status: _json,
  }) as any;
};

// de_AutoScalingPolicyStateChangeReason omitted.

// de_AutoScalingPolicyStatus omitted.

// de_AutoTerminationPolicy omitted.

/**
 * deserializeAws_json1_1BlockPublicAccessConfiguration
 */
const de_BlockPublicAccessConfiguration = (output: any, context: __SerdeContext): BlockPublicAccessConfiguration => {
  return take(output, {
    BlockPublicSecurityGroupRules: __expectBoolean,
    Classification: __expectString,
    Configurations: (_: any) => de_ConfigurationList(_, context),
    PermittedPublicSecurityGroupRuleRanges: _json,
    Properties: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BlockPublicAccessConfigurationMetadata
 */
const de_BlockPublicAccessConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfigurationMetadata => {
  return take(output, {
    CreatedByArn: __expectString,
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BootstrapActionConfig omitted.

// de_BootstrapActionDetail omitted.

// de_BootstrapActionDetailList omitted.

// de_CancelStepsInfo omitted.

// de_CancelStepsInfoList omitted.

// de_CancelStepsOutput omitted.

/**
 * deserializeAws_json1_1CloudWatchAlarmDefinition
 */
const de_CloudWatchAlarmDefinition = (output: any, context: __SerdeContext): CloudWatchAlarmDefinition => {
  return take(output, {
    ComparisonOperator: __expectString,
    Dimensions: _json,
    EvaluationPeriods: __expectInt32,
    MetricName: __expectString,
    Namespace: __expectString,
    Period: __expectInt32,
    Statistic: __expectString,
    Threshold: __limitedParseDouble,
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    Applications: _json,
    AutoScalingRole: __expectString,
    AutoTerminate: __expectBoolean,
    ClusterArn: __expectString,
    Configurations: (_: any) => de_ConfigurationList(_, context),
    CustomAmiId: __expectString,
    EbsRootVolumeSize: __expectInt32,
    Ec2InstanceAttributes: _json,
    Id: __expectString,
    InstanceCollectionType: __expectString,
    KerberosAttributes: _json,
    LogEncryptionKmsKeyId: __expectString,
    LogUri: __expectString,
    MasterPublicDnsName: __expectString,
    Name: __expectString,
    NormalizedInstanceHours: __expectInt32,
    OSReleaseLabel: __expectString,
    OutpostArn: __expectString,
    PlacementGroups: _json,
    ReleaseLabel: __expectString,
    RepoUpgradeOnBoot: __expectString,
    RequestedAmiVersion: __expectString,
    RunningAmiVersion: __expectString,
    ScaleDownBehavior: __expectString,
    SecurityConfiguration: __expectString,
    ServiceRole: __expectString,
    Status: (_: any) => de_ClusterStatus(_, context),
    StepConcurrencyLevel: __expectInt32,
    Tags: _json,
    TerminationProtected: __expectBoolean,
    VisibleToAllUsers: __expectBoolean,
  }) as any;
};

// de_ClusterStateChangeReason omitted.

/**
 * deserializeAws_json1_1ClusterStatus
 */
const de_ClusterStatus = (output: any, context: __SerdeContext): ClusterStatus => {
  return take(output, {
    ErrorDetails: _json,
    State: __expectString,
    StateChangeReason: _json,
    Timeline: (_: any) => de_ClusterTimeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterSummary
 */
const de_ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return take(output, {
    ClusterArn: __expectString,
    Id: __expectString,
    Name: __expectString,
    NormalizedInstanceHours: __expectInt32,
    OutpostArn: __expectString,
    Status: (_: any) => de_ClusterStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterSummaryList
 */
const de_ClusterSummaryList = (output: any, context: __SerdeContext): ClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterTimeline
 */
const de_ClusterTimeline = (output: any, context: __SerdeContext): ClusterTimeline => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Command omitted.

// de_CommandList omitted.

// de_ComputeLimits omitted.

/**
 * deserializeAws_json1_1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return take(output, {
    Classification: __expectString,
    Configurations: (_: any) => de_ConfigurationList(_, context),
    Properties: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationList
 */
const de_ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

// de_CreateStudioOutput omitted.

// de_Credentials omitted.

// de_DeleteSecurityConfigurationOutput omitted.

/**
 * deserializeAws_json1_1DescribeClusterOutput
 */
const de_DescribeClusterOutput = (output: any, context: __SerdeContext): DescribeClusterOutput => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeJobFlowsOutput
 */
const de_DescribeJobFlowsOutput = (output: any, context: __SerdeContext): DescribeJobFlowsOutput => {
  return take(output, {
    JobFlows: (_: any) => de_JobFlowDetailList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookExecutionOutput
 */
const de_DescribeNotebookExecutionOutput = (output: any, context: __SerdeContext): DescribeNotebookExecutionOutput => {
  return take(output, {
    NotebookExecution: (_: any) => de_NotebookExecution(_, context),
  }) as any;
};

// de_DescribeReleaseLabelOutput omitted.

/**
 * deserializeAws_json1_1DescribeSecurityConfigurationOutput
 */
const de_DescribeSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeSecurityConfigurationOutput => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SecurityConfiguration: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStepOutput
 */
const de_DescribeStepOutput = (output: any, context: __SerdeContext): DescribeStepOutput => {
  return take(output, {
    Step: (_: any) => de_Step(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStudioOutput
 */
const de_DescribeStudioOutput = (output: any, context: __SerdeContext): DescribeStudioOutput => {
  return take(output, {
    Studio: (_: any) => de_Studio(_, context),
  }) as any;
};

// de_EbsBlockDevice omitted.

// de_EbsBlockDeviceList omitted.

// de_EbsVolume omitted.

// de_EbsVolumeList omitted.

// de_Ec2InstanceAttributes omitted.

// de_EC2InstanceIdsList omitted.

// de_EnvironmentVariablesMap omitted.

// de_ErrorData omitted.

// de_ErrorDetail omitted.

// de_ErrorDetailList omitted.

// de_ExecutionEngineConfig omitted.

// de_FailureDetails omitted.

// de_GetAutoTerminationPolicyOutput omitted.

/**
 * deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput
 */
const de_GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  return take(output, {
    BlockPublicAccessConfiguration: (_: any) => de_BlockPublicAccessConfiguration(_, context),
    BlockPublicAccessConfigurationMetadata: (_: any) => de_BlockPublicAccessConfigurationMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetClusterSessionCredentialsOutput
 */
const de_GetClusterSessionCredentialsOutput = (
  output: any,
  context: __SerdeContext
): GetClusterSessionCredentialsOutput => {
  return take(output, {
    Credentials: (_: any) => _json(__expectUnion(_)),
    ExpiresAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetManagedScalingPolicyOutput omitted.

/**
 * deserializeAws_json1_1GetStudioSessionMappingOutput
 */
const de_GetStudioSessionMappingOutput = (output: any, context: __SerdeContext): GetStudioSessionMappingOutput => {
  return take(output, {
    SessionMapping: (_: any) => de_SessionMappingDetail(_, context),
  }) as any;
};

// de_HadoopJarStepConfig omitted.

// de_HadoopStepConfig omitted.

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return take(output, {
    EbsVolumes: _json,
    Ec2InstanceId: __expectString,
    Id: __expectString,
    InstanceFleetId: __expectString,
    InstanceGroupId: __expectString,
    InstanceType: __expectString,
    Market: __expectString,
    PrivateDnsName: __expectString,
    PrivateIpAddress: __expectString,
    PublicDnsName: __expectString,
    PublicIpAddress: __expectString,
    Status: (_: any) => de_InstanceStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceFleet
 */
const de_InstanceFleet = (output: any, context: __SerdeContext): InstanceFleet => {
  return take(output, {
    Id: __expectString,
    InstanceFleetType: __expectString,
    InstanceTypeSpecifications: (_: any) => de_InstanceTypeSpecificationList(_, context),
    LaunchSpecifications: _json,
    Name: __expectString,
    ProvisionedOnDemandCapacity: __expectInt32,
    ProvisionedSpotCapacity: __expectInt32,
    ResizeSpecifications: _json,
    Status: (_: any) => de_InstanceFleetStatus(_, context),
    TargetOnDemandCapacity: __expectInt32,
    TargetSpotCapacity: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceFleetList
 */
const de_InstanceFleetList = (output: any, context: __SerdeContext): InstanceFleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceFleet(entry, context);
    });
  return retVal;
};

// de_InstanceFleetProvisioningSpecifications omitted.

// de_InstanceFleetResizingSpecifications omitted.

// de_InstanceFleetStateChangeReason omitted.

/**
 * deserializeAws_json1_1InstanceFleetStatus
 */
const de_InstanceFleetStatus = (output: any, context: __SerdeContext): InstanceFleetStatus => {
  return take(output, {
    State: __expectString,
    StateChangeReason: _json,
    Timeline: (_: any) => de_InstanceFleetTimeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceFleetTimeline
 */
const de_InstanceFleetTimeline = (output: any, context: __SerdeContext): InstanceFleetTimeline => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceGroup
 */
const de_InstanceGroup = (output: any, context: __SerdeContext): InstanceGroup => {
  return take(output, {
    AutoScalingPolicy: (_: any) => de_AutoScalingPolicyDescription(_, context),
    BidPrice: __expectString,
    Configurations: (_: any) => de_ConfigurationList(_, context),
    ConfigurationsVersion: __expectLong,
    CustomAmiId: __expectString,
    EbsBlockDevices: _json,
    EbsOptimized: __expectBoolean,
    Id: __expectString,
    InstanceGroupType: __expectString,
    InstanceType: __expectString,
    LastSuccessfullyAppliedConfigurations: (_: any) => de_ConfigurationList(_, context),
    LastSuccessfullyAppliedConfigurationsVersion: __expectLong,
    Market: __expectString,
    Name: __expectString,
    RequestedInstanceCount: __expectInt32,
    RunningInstanceCount: __expectInt32,
    ShrinkPolicy: _json,
    Status: (_: any) => de_InstanceGroupStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceGroupDetail
 */
const de_InstanceGroupDetail = (output: any, context: __SerdeContext): InstanceGroupDetail => {
  return take(output, {
    BidPrice: __expectString,
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomAmiId: __expectString,
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InstanceGroupId: __expectString,
    InstanceRequestCount: __expectInt32,
    InstanceRole: __expectString,
    InstanceRunningCount: __expectInt32,
    InstanceType: __expectString,
    LastStateChangeReason: __expectString,
    Market: __expectString,
    Name: __expectString,
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceGroupDetailList
 */
const de_InstanceGroupDetailList = (output: any, context: __SerdeContext): InstanceGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceGroupDetail(entry, context);
    });
  return retVal;
};

// de_InstanceGroupIdsList omitted.

/**
 * deserializeAws_json1_1InstanceGroupList
 */
const de_InstanceGroupList = (output: any, context: __SerdeContext): InstanceGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceGroup(entry, context);
    });
  return retVal;
};

// de_InstanceGroupStateChangeReason omitted.

/**
 * deserializeAws_json1_1InstanceGroupStatus
 */
const de_InstanceGroupStatus = (output: any, context: __SerdeContext): InstanceGroupStatus => {
  return take(output, {
    State: __expectString,
    StateChangeReason: _json,
    Timeline: (_: any) => de_InstanceGroupTimeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceGroupTimeline
 */
const de_InstanceGroupTimeline = (output: any, context: __SerdeContext): InstanceGroupTimeline => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Instance(entry, context);
    });
  return retVal;
};

// de_InstanceResizePolicy omitted.

// de_InstanceStateChangeReason omitted.

/**
 * deserializeAws_json1_1InstanceStatus
 */
const de_InstanceStatus = (output: any, context: __SerdeContext): InstanceStatus => {
  return take(output, {
    State: __expectString,
    StateChangeReason: _json,
    Timeline: (_: any) => de_InstanceTimeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceTimeline
 */
const de_InstanceTimeline = (output: any, context: __SerdeContext): InstanceTimeline => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceTypeSpecification
 */
const de_InstanceTypeSpecification = (output: any, context: __SerdeContext): InstanceTypeSpecification => {
  return take(output, {
    BidPrice: __expectString,
    BidPriceAsPercentageOfOnDemandPrice: __limitedParseDouble,
    Configurations: (_: any) => de_ConfigurationList(_, context),
    CustomAmiId: __expectString,
    EbsBlockDevices: _json,
    EbsOptimized: __expectBoolean,
    InstanceType: __expectString,
    WeightedCapacity: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceTypeSpecificationList
 */
const de_InstanceTypeSpecificationList = (output: any, context: __SerdeContext): InstanceTypeSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceTypeSpecification(entry, context);
    });
  return retVal;
};

// de_InternalServerError omitted.

// de_InternalServerException omitted.

// de_InvalidRequestException omitted.

/**
 * deserializeAws_json1_1JobFlowDetail
 */
const de_JobFlowDetail = (output: any, context: __SerdeContext): JobFlowDetail => {
  return take(output, {
    AmiVersion: __expectString,
    AutoScalingRole: __expectString,
    BootstrapActions: _json,
    ExecutionStatusDetail: (_: any) => de_JobFlowExecutionStatusDetail(_, context),
    Instances: (_: any) => de_JobFlowInstancesDetail(_, context),
    JobFlowId: __expectString,
    JobFlowRole: __expectString,
    LogEncryptionKmsKeyId: __expectString,
    LogUri: __expectString,
    Name: __expectString,
    ScaleDownBehavior: __expectString,
    ServiceRole: __expectString,
    Steps: (_: any) => de_StepDetailList(_, context),
    SupportedProducts: _json,
    VisibleToAllUsers: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1JobFlowDetailList
 */
const de_JobFlowDetailList = (output: any, context: __SerdeContext): JobFlowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobFlowDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JobFlowExecutionStatusDetail
 */
const de_JobFlowExecutionStatusDetail = (output: any, context: __SerdeContext): JobFlowExecutionStatusDetail => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastStateChangeReason: __expectString,
    ReadyDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1JobFlowInstancesDetail
 */
const de_JobFlowInstancesDetail = (output: any, context: __SerdeContext): JobFlowInstancesDetail => {
  return take(output, {
    Ec2KeyName: __expectString,
    Ec2SubnetId: __expectString,
    HadoopVersion: __expectString,
    InstanceCount: __expectInt32,
    InstanceGroups: (_: any) => de_InstanceGroupDetailList(_, context),
    KeepJobFlowAliveWhenNoSteps: __expectBoolean,
    MasterInstanceId: __expectString,
    MasterInstanceType: __expectString,
    MasterPublicDnsName: __expectString,
    NormalizedInstanceHours: __expectInt32,
    Placement: _json,
    SlaveInstanceType: __expectString,
    TerminationProtected: __expectBoolean,
  }) as any;
};

// de_KerberosAttributes omitted.

// de_KeyValue omitted.

// de_KeyValueList omitted.

// de_ListBootstrapActionsOutput omitted.

/**
 * deserializeAws_json1_1ListClustersOutput
 */
const de_ListClustersOutput = (output: any, context: __SerdeContext): ListClustersOutput => {
  return take(output, {
    Clusters: (_: any) => de_ClusterSummaryList(_, context),
    Marker: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInstanceFleetsOutput
 */
const de_ListInstanceFleetsOutput = (output: any, context: __SerdeContext): ListInstanceFleetsOutput => {
  return take(output, {
    InstanceFleets: (_: any) => de_InstanceFleetList(_, context),
    Marker: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInstanceGroupsOutput
 */
const de_ListInstanceGroupsOutput = (output: any, context: __SerdeContext): ListInstanceGroupsOutput => {
  return take(output, {
    InstanceGroups: (_: any) => de_InstanceGroupList(_, context),
    Marker: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInstancesOutput
 */
const de_ListInstancesOutput = (output: any, context: __SerdeContext): ListInstancesOutput => {
  return take(output, {
    Instances: (_: any) => de_InstanceList(_, context),
    Marker: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookExecutionsOutput
 */
const de_ListNotebookExecutionsOutput = (output: any, context: __SerdeContext): ListNotebookExecutionsOutput => {
  return take(output, {
    Marker: __expectString,
    NotebookExecutions: (_: any) => de_NotebookExecutionSummaryList(_, context),
  }) as any;
};

// de_ListReleaseLabelsOutput omitted.

/**
 * deserializeAws_json1_1ListSecurityConfigurationsOutput
 */
const de_ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  return take(output, {
    Marker: __expectString,
    SecurityConfigurations: (_: any) => de_SecurityConfigurationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStepsOutput
 */
const de_ListStepsOutput = (output: any, context: __SerdeContext): ListStepsOutput => {
  return take(output, {
    Marker: __expectString,
    Steps: (_: any) => de_StepSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStudioSessionMappingsOutput
 */
const de_ListStudioSessionMappingsOutput = (output: any, context: __SerdeContext): ListStudioSessionMappingsOutput => {
  return take(output, {
    Marker: __expectString,
    SessionMappings: (_: any) => de_SessionMappingSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStudiosOutput
 */
const de_ListStudiosOutput = (output: any, context: __SerdeContext): ListStudiosOutput => {
  return take(output, {
    Marker: __expectString,
    Studios: (_: any) => de_StudioSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSupportedInstanceTypesOutput
 */
const de_ListSupportedInstanceTypesOutput = (
  output: any,
  context: __SerdeContext
): ListSupportedInstanceTypesOutput => {
  return take(output, {
    Marker: __expectString,
    SupportedInstanceTypes: (_: any) => de_SupportedInstanceTypesList(_, context),
  }) as any;
};

// de_ManagedScalingPolicy omitted.

// de_MetricDimension omitted.

// de_MetricDimensionList omitted.

// de_ModifyClusterOutput omitted.

/**
 * deserializeAws_json1_1NotebookExecution
 */
const de_NotebookExecution = (output: any, context: __SerdeContext): NotebookExecution => {
  return take(output, {
    Arn: __expectString,
    EditorId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnvironmentVariables: _json,
    ExecutionEngine: _json,
    LastStateChangeReason: __expectString,
    NotebookExecutionId: __expectString,
    NotebookExecutionName: __expectString,
    NotebookInstanceSecurityGroupId: __expectString,
    NotebookParams: __expectString,
    NotebookS3Location: _json,
    OutputNotebookFormat: __expectString,
    OutputNotebookS3Location: _json,
    OutputNotebookURI: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookExecutionSummary
 */
const de_NotebookExecutionSummary = (output: any, context: __SerdeContext): NotebookExecutionSummary => {
  return take(output, {
    EditorId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExecutionEngineId: __expectString,
    NotebookExecutionId: __expectString,
    NotebookExecutionName: __expectString,
    NotebookS3Location: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookExecutionSummaryList
 */
const de_NotebookExecutionSummaryList = (output: any, context: __SerdeContext): NotebookExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookExecutionSummary(entry, context);
    });
  return retVal;
};

// de_NotebookS3LocationForOutput omitted.

// de_OnDemandCapacityReservationOptions omitted.

// de_OnDemandProvisioningSpecification omitted.

// de_OnDemandResizingSpecification omitted.

// de_OSRelease omitted.

// de_OSReleaseList omitted.

// de_OutputNotebookS3LocationForOutput omitted.

// de_PlacementGroupConfig omitted.

// de_PlacementGroupConfigList omitted.

// de_PlacementType omitted.

// de_PortRange omitted.

// de_PortRanges omitted.

/**
 * deserializeAws_json1_1PutAutoScalingPolicyOutput
 */
const de_PutAutoScalingPolicyOutput = (output: any, context: __SerdeContext): PutAutoScalingPolicyOutput => {
  return take(output, {
    AutoScalingPolicy: (_: any) => de_AutoScalingPolicyDescription(_, context),
    ClusterArn: __expectString,
    ClusterId: __expectString,
    InstanceGroupId: __expectString,
  }) as any;
};

// de_PutAutoTerminationPolicyOutput omitted.

// de_PutBlockPublicAccessConfigurationOutput omitted.

// de_PutManagedScalingPolicyOutput omitted.

// de_RemoveAutoScalingPolicyOutput omitted.

// de_RemoveAutoTerminationPolicyOutput omitted.

// de_RemoveManagedScalingPolicyOutput omitted.

// de_RemoveTagsOutput omitted.

// de_RunJobFlowOutput omitted.

// de_ScalingAction omitted.

// de_ScalingConstraints omitted.

/**
 * deserializeAws_json1_1ScalingRule
 */
const de_ScalingRule = (output: any, context: __SerdeContext): ScalingRule => {
  return take(output, {
    Action: _json,
    Description: __expectString,
    Name: __expectString,
    Trigger: (_: any) => de_ScalingTrigger(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ScalingRuleList
 */
const de_ScalingRuleList = (output: any, context: __SerdeContext): ScalingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScalingRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScalingTrigger
 */
const de_ScalingTrigger = (output: any, context: __SerdeContext): ScalingTrigger => {
  return take(output, {
    CloudWatchAlarmDefinition: (_: any) => de_CloudWatchAlarmDefinition(_, context),
  }) as any;
};

// de_ScriptBootstrapActionConfig omitted.

/**
 * deserializeAws_json1_1SecurityConfigurationList
 */
const de_SecurityConfigurationList = (output: any, context: __SerdeContext): SecurityConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecurityConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityConfigurationSummary
 */
const de_SecurityConfigurationSummary = (output: any, context: __SerdeContext): SecurityConfigurationSummary => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionMappingDetail
 */
const de_SessionMappingDetail = (output: any, context: __SerdeContext): SessionMappingDetail => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentityId: __expectString,
    IdentityName: __expectString,
    IdentityType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SessionPolicyArn: __expectString,
    StudioId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionMappingSummary
 */
const de_SessionMappingSummary = (output: any, context: __SerdeContext): SessionMappingSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentityId: __expectString,
    IdentityName: __expectString,
    IdentityType: __expectString,
    SessionPolicyArn: __expectString,
    StudioId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionMappingSummaryList
 */
const de_SessionMappingSummaryList = (output: any, context: __SerdeContext): SessionMappingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionMappingSummary(entry, context);
    });
  return retVal;
};

// de_ShrinkPolicy omitted.

// de_SimpleScalingPolicyConfiguration omitted.

// de_SimplifiedApplication omitted.

// de_SimplifiedApplicationList omitted.

// de_SpotProvisioningSpecification omitted.

// de_SpotResizingSpecification omitted.

// de_StartNotebookExecutionOutput omitted.

/**
 * deserializeAws_json1_1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return take(output, {
    ActionOnFailure: __expectString,
    Config: _json,
    ExecutionRoleArn: __expectString,
    Id: __expectString,
    Name: __expectString,
    Status: (_: any) => de_StepStatus(_, context),
  }) as any;
};

// de_StepConfig omitted.

/**
 * deserializeAws_json1_1StepDetail
 */
const de_StepDetail = (output: any, context: __SerdeContext): StepDetail => {
  return take(output, {
    ExecutionStatusDetail: (_: any) => de_StepExecutionStatusDetail(_, context),
    StepConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1StepDetailList
 */
const de_StepDetailList = (output: any, context: __SerdeContext): StepDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepExecutionStatusDetail
 */
const de_StepExecutionStatusDetail = (output: any, context: __SerdeContext): StepExecutionStatusDetail => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastStateChangeReason: __expectString,
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

// de_StepIdsList omitted.

// de_StepStateChangeReason omitted.

/**
 * deserializeAws_json1_1StepStatus
 */
const de_StepStatus = (output: any, context: __SerdeContext): StepStatus => {
  return take(output, {
    FailureDetails: _json,
    State: __expectString,
    StateChangeReason: _json,
    Timeline: (_: any) => de_StepTimeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StepSummary
 */
const de_StepSummary = (output: any, context: __SerdeContext): StepSummary => {
  return take(output, {
    ActionOnFailure: __expectString,
    Config: _json,
    Id: __expectString,
    Name: __expectString,
    Status: (_: any) => de_StepStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StepSummaryList
 */
const de_StepSummaryList = (output: any, context: __SerdeContext): StepSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StepTimeline
 */
const de_StepTimeline = (output: any, context: __SerdeContext): StepTimeline => {
  return take(output, {
    CreationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_StringList omitted.

// de_StringMap omitted.

/**
 * deserializeAws_json1_1Studio
 */
const de_Studio = (output: any, context: __SerdeContext): Studio => {
  return take(output, {
    AuthMode: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultS3Location: __expectString,
    Description: __expectString,
    EngineSecurityGroupId: __expectString,
    IdpAuthUrl: __expectString,
    IdpRelayStateParameterName: __expectString,
    Name: __expectString,
    ServiceRole: __expectString,
    StudioArn: __expectString,
    StudioId: __expectString,
    SubnetIds: _json,
    Tags: _json,
    Url: __expectString,
    UserRole: __expectString,
    VpcId: __expectString,
    WorkspaceSecurityGroupId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StudioSummary
 */
const de_StudioSummary = (output: any, context: __SerdeContext): StudioSummary => {
  return take(output, {
    AuthMode: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Name: __expectString,
    StudioId: __expectString,
    Url: __expectString,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StudioSummaryList
 */
const de_StudioSummaryList = (output: any, context: __SerdeContext): StudioSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StudioSummary(entry, context);
    });
  return retVal;
};

// de_SubnetIdList omitted.

/**
 * deserializeAws_json1_1SupportedInstanceType
 */
const de_SupportedInstanceType = (output: any, context: __SerdeContext): SupportedInstanceType => {
  return take(output, {
    Architecture: __expectString,
    EbsOptimizedAvailable: __expectBoolean,
    EbsOptimizedByDefault: __expectBoolean,
    EbsStorageOnly: __expectBoolean,
    InstanceFamilyId: __expectString,
    Is64BitsOnly: __expectBoolean,
    MemoryGB: __limitedParseFloat32,
    NumberOfDisks: __expectInt32,
    StorageGB: __expectInt32,
    Type: __expectString,
    VCPU: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1SupportedInstanceTypesList
 */
const de_SupportedInstanceTypesList = (output: any, context: __SerdeContext): SupportedInstanceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SupportedInstanceType(entry, context);
    });
  return retVal;
};

// de_SupportedProductsList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_UsernamePassword omitted.

// de_VolumeSpecification omitted.

// de_XmlStringList omitted.

// de_XmlStringMaxLen256List omitted.

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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `ElasticMapReduce.${operation}`,
  };
}

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
