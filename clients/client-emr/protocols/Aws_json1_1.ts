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
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "../commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommandInput, DescribeStepCommandOutput } from "../commands/DescribeStepCommand";
import { DescribeStudioCommandInput, DescribeStudioCommandOutput } from "../commands/DescribeStudioCommand";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "../commands/GetBlockPublicAccessConfigurationCommand";
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
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import {
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "../commands/ListStudioSessionMappingsCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
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
import {
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "../commands/UpdateStudioSessionMappingCommand";
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
  GetBlockPublicAccessConfigurationInput,
  GetBlockPublicAccessConfigurationOutput,
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
  OnDemandProvisioningSpecification,
  PlacementGroupConfig,
  PlacementType,
  PortRange,
  PutAutoScalingPolicyInput,
  PutAutoScalingPolicyOutput,
  PutBlockPublicAccessConfigurationInput,
  PutBlockPublicAccessConfigurationOutput,
  PutManagedScalingPolicyInput,
  PutManagedScalingPolicyOutput,
  RemoveAutoScalingPolicyInput,
  RemoveAutoScalingPolicyOutput,
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
  UpdateStudioSessionMappingInput,
  VolumeSpecification,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AddInstanceFleetCommand = async (
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.AddInstanceFleet",
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
    "X-Amz-Target": "ElasticMapReduce.AddInstanceGroups",
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
    "X-Amz-Target": "ElasticMapReduce.AddJobFlowSteps",
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
    "X-Amz-Target": "ElasticMapReduce.AddTags",
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
    "X-Amz-Target": "ElasticMapReduce.CancelSteps",
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
    "X-Amz-Target": "ElasticMapReduce.CreateSecurityConfiguration",
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
    "X-Amz-Target": "ElasticMapReduce.CreateStudio",
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
    "X-Amz-Target": "ElasticMapReduce.CreateStudioSessionMapping",
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
    "X-Amz-Target": "ElasticMapReduce.DeleteSecurityConfiguration",
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
    "X-Amz-Target": "ElasticMapReduce.DeleteStudio",
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
    "X-Amz-Target": "ElasticMapReduce.DeleteStudioSessionMapping",
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
    "X-Amz-Target": "ElasticMapReduce.DescribeCluster",
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
    "X-Amz-Target": "ElasticMapReduce.DescribeJobFlows",
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
    "X-Amz-Target": "ElasticMapReduce.DescribeNotebookExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNotebookExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DescribeSecurityConfiguration",
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
    "X-Amz-Target": "ElasticMapReduce.DescribeStep",
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
    "X-Amz-Target": "ElasticMapReduce.DescribeStudio",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStudioInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.GetBlockPublicAccessConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetManagedScalingPolicyCommand = async (
  input: GetManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.GetManagedScalingPolicy",
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
    "X-Amz-Target": "ElasticMapReduce.GetStudioSessionMapping",
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
    "X-Amz-Target": "ElasticMapReduce.ListBootstrapActions",
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
    "X-Amz-Target": "ElasticMapReduce.ListClusters",
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
    "X-Amz-Target": "ElasticMapReduce.ListInstanceFleets",
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
    "X-Amz-Target": "ElasticMapReduce.ListInstanceGroups",
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
    "X-Amz-Target": "ElasticMapReduce.ListInstances",
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
    "X-Amz-Target": "ElasticMapReduce.ListNotebookExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNotebookExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListSecurityConfigurations",
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
    "X-Amz-Target": "ElasticMapReduce.ListSteps",
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
    "X-Amz-Target": "ElasticMapReduce.ListStudios",
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
    "X-Amz-Target": "ElasticMapReduce.ListStudioSessionMappings",
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
    "X-Amz-Target": "ElasticMapReduce.ModifyCluster",
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
    "X-Amz-Target": "ElasticMapReduce.ModifyInstanceFleet",
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
    "X-Amz-Target": "ElasticMapReduce.ModifyInstanceGroups",
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
    "X-Amz-Target": "ElasticMapReduce.PutAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.PutBlockPublicAccessConfiguration",
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
    "X-Amz-Target": "ElasticMapReduce.PutManagedScalingPolicy",
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
    "X-Amz-Target": "ElasticMapReduce.RemoveAutoScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveManagedScalingPolicyCommand = async (
  input: RemoveManagedScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.RemoveManagedScalingPolicy",
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
    "X-Amz-Target": "ElasticMapReduce.RemoveTags",
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
    "X-Amz-Target": "ElasticMapReduce.RunJobFlow",
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
    "X-Amz-Target": "ElasticMapReduce.SetTerminationProtection",
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
    "X-Amz-Target": "ElasticMapReduce.SetVisibleToAllUsers",
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
    "X-Amz-Target": "ElasticMapReduce.StartNotebookExecution",
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
    "X-Amz-Target": "ElasticMapReduce.StopNotebookExecution",
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
    "X-Amz-Target": "ElasticMapReduce.TerminateJobFlows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateJobFlowsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStudioSessionMappingCommand = async (
  input: UpdateStudioSessionMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.UpdateStudioSessionMapping",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddInstanceFleetInput = (input: AddInstanceFleetInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet !== undefined &&
      input.InstanceFleet !== null && {
        InstanceFleet: serializeAws_json1_1InstanceFleetConfig(input.InstanceFleet, context),
      }),
  };
};

const serializeAws_json1_1AddInstanceGroupsInput = (input: AddInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.InstanceGroups !== undefined &&
      input.InstanceGroups !== null && {
        InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
      }),
    ...(input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId }),
  };
};

const serializeAws_json1_1AddJobFlowStepsInput = (input: AddJobFlowStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowId !== undefined && input.JobFlowId !== null && { JobFlowId: input.JobFlowId }),
    ...(input.Steps !== undefined &&
      input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
  };
};

const serializeAws_json1_1AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Application = (input: Application, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo !== undefined &&
      input.AdditionalInfo !== null && {
        AdditionalInfo: serializeAws_json1_1StringMap(input.AdditionalInfo, context),
      }),
    ...(input.Args !== undefined &&
      input.Args !== null && { Args: serializeAws_json1_1StringList(input.Args, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1ApplicationList = (input: Application[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Application(entry, context);
    });
};

const serializeAws_json1_1AutoScalingPolicy = (input: AutoScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Constraints !== undefined &&
      input.Constraints !== null && {
        Constraints: serializeAws_json1_1ScalingConstraints(input.Constraints, context),
      }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_json1_1ScalingRuleList(input.Rules, context) }),
  };
};

const serializeAws_json1_1BlockPublicAccessConfiguration = (
  input: BlockPublicAccessConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicSecurityGroupRules !== undefined &&
      input.BlockPublicSecurityGroupRules !== null && {
        BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules,
      }),
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.PermittedPublicSecurityGroupRuleRanges !== undefined &&
      input.PermittedPublicSecurityGroupRuleRanges !== null && {
        PermittedPublicSecurityGroupRuleRanges: serializeAws_json1_1PortRanges(
          input.PermittedPublicSecurityGroupRuleRanges,
          context
        ),
      }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
  };
};

const serializeAws_json1_1BootstrapActionConfig = (input: BootstrapActionConfig, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScriptBootstrapAction !== undefined &&
      input.ScriptBootstrapAction !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BootstrapActionConfig(entry, context);
    });
};

const serializeAws_json1_1CancelStepsInput = (input: CancelStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.StepCancellationOption !== undefined &&
      input.StepCancellationOption !== null && { StepCancellationOption: input.StepCancellationOption }),
    ...(input.StepIds !== undefined &&
      input.StepIds !== null && { StepIds: serializeAws_json1_1StepIdsList(input.StepIds, context) }),
  };
};

const serializeAws_json1_1CloudWatchAlarmDefinition = (
  input: CloudWatchAlarmDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensionList(input.Dimensions, context) }),
    ...(input.EvaluationPeriods !== undefined &&
      input.EvaluationPeriods !== null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Period !== undefined && input.Period !== null && { Period: input.Period }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
    ...(input.Threshold !== undefined && input.Threshold !== null && { Threshold: input.Threshold }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1ClusterStateList = (input: (ClusterState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ComputeLimits = (input: ComputeLimits, context: __SerdeContext): any => {
  return {
    ...(input.MaximumCapacityUnits !== undefined &&
      input.MaximumCapacityUnits !== null && { MaximumCapacityUnits: input.MaximumCapacityUnits }),
    ...(input.MaximumCoreCapacityUnits !== undefined &&
      input.MaximumCoreCapacityUnits !== null && { MaximumCoreCapacityUnits: input.MaximumCoreCapacityUnits }),
    ...(input.MaximumOnDemandCapacityUnits !== undefined &&
      input.MaximumOnDemandCapacityUnits !== null && {
        MaximumOnDemandCapacityUnits: input.MaximumOnDemandCapacityUnits,
      }),
    ...(input.MinimumCapacityUnits !== undefined &&
      input.MinimumCapacityUnits !== null && { MinimumCapacityUnits: input.MinimumCapacityUnits }),
    ...(input.UnitType !== undefined && input.UnitType !== null && { UnitType: input.UnitType }),
  };
};

const serializeAws_json1_1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.Classification !== undefined &&
      input.Classification !== null && { Classification: input.Classification }),
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && { Properties: serializeAws_json1_1StringMap(input.Properties, context) }),
  };
};

const serializeAws_json1_1ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Configuration(entry, context);
    });
};

const serializeAws_json1_1CreateSecurityConfigurationInput = (
  input: CreateSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
  };
};

const serializeAws_json1_1CreateStudioInput = (input: CreateStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.AuthMode !== undefined && input.AuthMode !== null && { AuthMode: input.AuthMode }),
    ...(input.DefaultS3Location !== undefined &&
      input.DefaultS3Location !== null && { DefaultS3Location: input.DefaultS3Location }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EngineSecurityGroupId !== undefined &&
      input.EngineSecurityGroupId !== null && { EngineSecurityGroupId: input.EngineSecurityGroupId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserRole !== undefined && input.UserRole !== null && { UserRole: input.UserRole }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
    ...(input.WorkspaceSecurityGroupId !== undefined &&
      input.WorkspaceSecurityGroupId !== null && { WorkspaceSecurityGroupId: input.WorkspaceSecurityGroupId }),
  };
};

const serializeAws_json1_1CreateStudioSessionMappingInput = (
  input: CreateStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn !== undefined &&
      input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DeleteSecurityConfigurationInput = (
  input: DeleteSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteStudioInput = (input: DeleteStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DeleteStudioSessionMappingInput = (
  input: DeleteStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1DescribeClusterInput = (input: DescribeClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1DescribeJobFlowsInput = (input: DescribeJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter !== undefined &&
      input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore !== undefined &&
      input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.JobFlowIds !== undefined &&
      input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.JobFlowStates !== undefined &&
      input.JobFlowStates !== null && {
        JobFlowStates: serializeAws_json1_1JobFlowExecutionStateList(input.JobFlowStates, context),
      }),
  };
};

const serializeAws_json1_1DescribeNotebookExecutionInput = (
  input: DescribeNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotebookExecutionId !== undefined &&
      input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

const serializeAws_json1_1DescribeSecurityConfigurationInput = (
  input: DescribeSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeStepInput = (input: DescribeStepInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.StepId !== undefined && input.StepId !== null && { StepId: input.StepId }),
  };
};

const serializeAws_json1_1DescribeStudioInput = (input: DescribeStudioInput, context: __SerdeContext): any => {
  return {
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1EbsBlockDeviceConfig = (input: EbsBlockDeviceConfig, context: __SerdeContext): any => {
  return {
    ...(input.VolumeSpecification !== undefined &&
      input.VolumeSpecification !== null && {
        VolumeSpecification: serializeAws_json1_1VolumeSpecification(input.VolumeSpecification, context),
      }),
    ...(input.VolumesPerInstance !== undefined &&
      input.VolumesPerInstance !== null && { VolumesPerInstance: input.VolumesPerInstance }),
  };
};

const serializeAws_json1_1EbsBlockDeviceConfigList = (input: EbsBlockDeviceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EbsBlockDeviceConfig(entry, context);
    });
};

const serializeAws_json1_1EbsConfiguration = (input: EbsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EbsBlockDeviceConfigs !== undefined &&
      input.EbsBlockDeviceConfigs !== null && {
        EbsBlockDeviceConfigs: serializeAws_json1_1EbsBlockDeviceConfigList(input.EbsBlockDeviceConfigs, context),
      }),
    ...(input.EbsOptimized !== undefined && input.EbsOptimized !== null && { EbsOptimized: input.EbsOptimized }),
  };
};

const serializeAws_json1_1EC2InstanceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EC2InstanceIdsToTerminateList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ExecutionEngineConfig = (input: ExecutionEngineConfig, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.MasterInstanceSecurityGroupId !== undefined &&
      input.MasterInstanceSecurityGroupId !== null && {
        MasterInstanceSecurityGroupId: input.MasterInstanceSecurityGroupId,
      }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (
  input: GetBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetManagedScalingPolicyInput = (
  input: GetManagedScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1GetStudioSessionMappingInput = (
  input: GetStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1HadoopJarStepConfig = (input: HadoopJarStepConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args !== undefined &&
      input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Jar !== undefined && input.Jar !== null && { Jar: input.Jar }),
    ...(input.MainClass !== undefined && input.MainClass !== null && { MainClass: input.MainClass }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && { Properties: serializeAws_json1_1KeyValueList(input.Properties, context) }),
  };
};

const serializeAws_json1_1InstanceFleetConfig = (input: InstanceFleetConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceFleetType !== undefined &&
      input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceTypeConfigs !== undefined &&
      input.InstanceTypeConfigs !== null && {
        InstanceTypeConfigs: serializeAws_json1_1InstanceTypeConfigList(input.InstanceTypeConfigs, context),
      }),
    ...(input.LaunchSpecifications !== undefined &&
      input.LaunchSpecifications !== null && {
        LaunchSpecifications: serializeAws_json1_1InstanceFleetProvisioningSpecifications(
          input.LaunchSpecifications,
          context
        ),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TargetOnDemandCapacity !== undefined &&
      input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity !== undefined &&
      input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

const serializeAws_json1_1InstanceFleetConfigList = (input: InstanceFleetConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InstanceFleetConfig(entry, context);
    });
};

const serializeAws_json1_1InstanceFleetModifyConfig = (
  input: InstanceFleetModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceFleetId !== undefined &&
      input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.TargetOnDemandCapacity !== undefined &&
      input.TargetOnDemandCapacity !== null && { TargetOnDemandCapacity: input.TargetOnDemandCapacity }),
    ...(input.TargetSpotCapacity !== undefined &&
      input.TargetSpotCapacity !== null && { TargetSpotCapacity: input.TargetSpotCapacity }),
  };
};

const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  input: InstanceFleetProvisioningSpecifications,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnDemandSpecification !== undefined &&
      input.OnDemandSpecification !== null && {
        OnDemandSpecification: serializeAws_json1_1OnDemandProvisioningSpecification(
          input.OnDemandSpecification,
          context
        ),
      }),
    ...(input.SpotSpecification !== undefined &&
      input.SpotSpecification !== null && {
        SpotSpecification: serializeAws_json1_1SpotProvisioningSpecification(input.SpotSpecification, context),
      }),
  };
};

const serializeAws_json1_1InstanceGroupConfig = (input: InstanceGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingPolicy !== undefined &&
      input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
      }),
    ...(input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice }),
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.EbsConfiguration !== undefined &&
      input.EbsConfiguration !== null && {
        EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
      }),
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.Market !== undefined && input.Market !== null && { Market: input.Market }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1InstanceGroupConfigList = (input: InstanceGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InstanceGroupConfig(entry, context);
    });
};

const serializeAws_json1_1InstanceGroupModifyConfig = (
  input: InstanceGroupModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.EC2InstanceIdsToTerminate !== undefined &&
      input.EC2InstanceIdsToTerminate !== null && {
        EC2InstanceIdsToTerminate: serializeAws_json1_1EC2InstanceIdsToTerminateList(
          input.EC2InstanceIdsToTerminate,
          context
        ),
      }),
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceGroupId !== undefined &&
      input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.ShrinkPolicy !== undefined &&
      input.ShrinkPolicy !== null && { ShrinkPolicy: serializeAws_json1_1ShrinkPolicy(input.ShrinkPolicy, context) }),
  };
};

const serializeAws_json1_1InstanceGroupModifyConfigList = (
  input: InstanceGroupModifyConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1InstanceResizePolicy = (input: InstanceResizePolicy, context: __SerdeContext): any => {
  return {
    ...(input.InstanceTerminationTimeout !== undefined &&
      input.InstanceTerminationTimeout !== null && { InstanceTerminationTimeout: input.InstanceTerminationTimeout }),
    ...(input.InstancesToProtect !== undefined &&
      input.InstancesToProtect !== null && {
        InstancesToProtect: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToProtect, context),
      }),
    ...(input.InstancesToTerminate !== undefined &&
      input.InstancesToTerminate !== null && {
        InstancesToTerminate: serializeAws_json1_1EC2InstanceIdsList(input.InstancesToTerminate, context),
      }),
  };
};

const serializeAws_json1_1InstanceStateList = (input: (InstanceState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1InstanceTypeConfig = (input: InstanceTypeConfig, context: __SerdeContext): any => {
  return {
    ...(input.BidPrice !== undefined && input.BidPrice !== null && { BidPrice: input.BidPrice }),
    ...(input.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
      input.BidPriceAsPercentageOfOnDemandPrice !== null && {
        BidPriceAsPercentageOfOnDemandPrice: input.BidPriceAsPercentageOfOnDemandPrice,
      }),
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.EbsConfiguration !== undefined &&
      input.EbsConfiguration !== null && {
        EbsConfiguration: serializeAws_json1_1EbsConfiguration(input.EbsConfiguration, context),
      }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity !== undefined &&
      input.WeightedCapacity !== null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

const serializeAws_json1_1InstanceTypeConfigList = (input: InstanceTypeConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1JobFlowInstancesConfig = (input: JobFlowInstancesConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalMasterSecurityGroups !== undefined &&
      input.AdditionalMasterSecurityGroups !== null && {
        AdditionalMasterSecurityGroups: serializeAws_json1_1SecurityGroupsList(
          input.AdditionalMasterSecurityGroups,
          context
        ),
      }),
    ...(input.AdditionalSlaveSecurityGroups !== undefined &&
      input.AdditionalSlaveSecurityGroups !== null && {
        AdditionalSlaveSecurityGroups: serializeAws_json1_1SecurityGroupsList(
          input.AdditionalSlaveSecurityGroups,
          context
        ),
      }),
    ...(input.Ec2KeyName !== undefined && input.Ec2KeyName !== null && { Ec2KeyName: input.Ec2KeyName }),
    ...(input.Ec2SubnetId !== undefined && input.Ec2SubnetId !== null && { Ec2SubnetId: input.Ec2SubnetId }),
    ...(input.Ec2SubnetIds !== undefined &&
      input.Ec2SubnetIds !== null && {
        Ec2SubnetIds: serializeAws_json1_1XmlStringMaxLen256List(input.Ec2SubnetIds, context),
      }),
    ...(input.EmrManagedMasterSecurityGroup !== undefined &&
      input.EmrManagedMasterSecurityGroup !== null && {
        EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup,
      }),
    ...(input.EmrManagedSlaveSecurityGroup !== undefined &&
      input.EmrManagedSlaveSecurityGroup !== null && {
        EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup,
      }),
    ...(input.HadoopVersion !== undefined && input.HadoopVersion !== null && { HadoopVersion: input.HadoopVersion }),
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceFleets !== undefined &&
      input.InstanceFleets !== null && {
        InstanceFleets: serializeAws_json1_1InstanceFleetConfigList(input.InstanceFleets, context),
      }),
    ...(input.InstanceGroups !== undefined &&
      input.InstanceGroups !== null && {
        InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(input.InstanceGroups, context),
      }),
    ...(input.KeepJobFlowAliveWhenNoSteps !== undefined &&
      input.KeepJobFlowAliveWhenNoSteps !== null && { KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps }),
    ...(input.MasterInstanceType !== undefined &&
      input.MasterInstanceType !== null && { MasterInstanceType: input.MasterInstanceType }),
    ...(input.Placement !== undefined &&
      input.Placement !== null && { Placement: serializeAws_json1_1PlacementType(input.Placement, context) }),
    ...(input.ServiceAccessSecurityGroup !== undefined &&
      input.ServiceAccessSecurityGroup !== null && { ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup }),
    ...(input.SlaveInstanceType !== undefined &&
      input.SlaveInstanceType !== null && { SlaveInstanceType: input.SlaveInstanceType }),
    ...(input.TerminationProtected !== undefined &&
      input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }),
  };
};

const serializeAws_json1_1KerberosAttributes = (input: KerberosAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ADDomainJoinPassword !== undefined &&
      input.ADDomainJoinPassword !== null && { ADDomainJoinPassword: input.ADDomainJoinPassword }),
    ...(input.ADDomainJoinUser !== undefined &&
      input.ADDomainJoinUser !== null && { ADDomainJoinUser: input.ADDomainJoinUser }),
    ...(input.CrossRealmTrustPrincipalPassword !== undefined &&
      input.CrossRealmTrustPrincipalPassword !== null && {
        CrossRealmTrustPrincipalPassword: input.CrossRealmTrustPrincipalPassword,
      }),
    ...(input.KdcAdminPassword !== undefined &&
      input.KdcAdminPassword !== null && { KdcAdminPassword: input.KdcAdminPassword }),
    ...(input.Realm !== undefined && input.Realm !== null && { Realm: input.Realm }),
  };
};

const serializeAws_json1_1KeyValue = (input: KeyValue, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1KeyValueList = (input: KeyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1KeyValue(entry, context);
    });
};

const serializeAws_json1_1ListBootstrapActionsInput = (
  input: ListBootstrapActionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListClustersInput = (input: ListClustersInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterStates !== undefined &&
      input.ClusterStates !== null && {
        ClusterStates: serializeAws_json1_1ClusterStateList(input.ClusterStates, context),
      }),
    ...(input.CreatedAfter !== undefined &&
      input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore !== undefined &&
      input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstanceFleetsInput = (input: ListInstanceFleetsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstanceGroupsInput = (input: ListInstanceGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListInstancesInput = (input: ListInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleetId !== undefined &&
      input.InstanceFleetId !== null && { InstanceFleetId: input.InstanceFleetId }),
    ...(input.InstanceFleetType !== undefined &&
      input.InstanceFleetType !== null && { InstanceFleetType: input.InstanceFleetType }),
    ...(input.InstanceGroupId !== undefined &&
      input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
    ...(input.InstanceGroupTypes !== undefined &&
      input.InstanceGroupTypes !== null && {
        InstanceGroupTypes: serializeAws_json1_1InstanceGroupTypeList(input.InstanceGroupTypes, context),
      }),
    ...(input.InstanceStates !== undefined &&
      input.InstanceStates !== null && {
        InstanceStates: serializeAws_json1_1InstanceStateList(input.InstanceStates, context),
      }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListNotebookExecutionsInput = (
  input: ListNotebookExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId }),
    ...(input.From !== undefined && input.From !== null && { From: Math.round(input.From.getTime() / 1000) }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    ...(input.To !== undefined && input.To !== null && { To: Math.round(input.To.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListSecurityConfigurationsInput = (
  input: ListSecurityConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ListStepsInput = (input: ListStepsInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.StepIds !== undefined &&
      input.StepIds !== null && { StepIds: serializeAws_json1_1XmlStringList(input.StepIds, context) }),
    ...(input.StepStates !== undefined &&
      input.StepStates !== null && { StepStates: serializeAws_json1_1StepStateList(input.StepStates, context) }),
  };
};

const serializeAws_json1_1ListStudioSessionMappingsInput = (
  input: ListStudioSessionMappingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1ListStudiosInput = (input: ListStudiosInput, context: __SerdeContext): any => {
  return {
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
  };
};

const serializeAws_json1_1ManagedScalingPolicy = (input: ManagedScalingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ComputeLimits !== undefined &&
      input.ComputeLimits !== null && {
        ComputeLimits: serializeAws_json1_1ComputeLimits(input.ComputeLimits, context),
      }),
  };
};

const serializeAws_json1_1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetricDimensionList = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};

const serializeAws_json1_1ModifyClusterInput = (input: ModifyClusterInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.StepConcurrencyLevel !== undefined &&
      input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
  };
};

const serializeAws_json1_1ModifyInstanceFleetInput = (
  input: ModifyInstanceFleetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet !== undefined &&
      input.InstanceFleet !== null && {
        InstanceFleet: serializeAws_json1_1InstanceFleetModifyConfig(input.InstanceFleet, context),
      }),
  };
};

const serializeAws_json1_1ModifyInstanceGroupsInput = (
  input: ModifyInstanceGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroups !== undefined &&
      input.InstanceGroups !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SupportedProductConfig(entry, context);
    });
};

const serializeAws_json1_1OnDemandProvisioningSpecification = (
  input: OnDemandProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocationStrategy !== undefined &&
      input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy }),
  };
};

const serializeAws_json1_1PlacementGroupConfig = (input: PlacementGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.InstanceRole !== undefined && input.InstanceRole !== null && { InstanceRole: input.InstanceRole }),
    ...(input.PlacementStrategy !== undefined &&
      input.PlacementStrategy !== null && { PlacementStrategy: input.PlacementStrategy }),
  };
};

const serializeAws_json1_1PlacementGroupConfigList = (input: PlacementGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};

const serializeAws_json1_1PlacementType = (input: PlacementType, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZones !== undefined &&
      input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_json1_1XmlStringMaxLen256List(input.AvailabilityZones, context),
      }),
  };
};

const serializeAws_json1_1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxRange !== undefined && input.MaxRange !== null && { MaxRange: input.MaxRange }),
    ...(input.MinRange !== undefined && input.MinRange !== null && { MinRange: input.MinRange }),
  };
};

const serializeAws_json1_1PortRanges = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PortRange(entry, context);
    });
};

const serializeAws_json1_1PutAutoScalingPolicyInput = (
  input: PutAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy !== undefined &&
      input.AutoScalingPolicy !== null && {
        AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(input.AutoScalingPolicy, context),
      }),
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId !== undefined &&
      input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAccessConfiguration !== undefined &&
      input.BlockPublicAccessConfiguration !== null && {
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
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.ManagedScalingPolicy !== undefined &&
      input.ManagedScalingPolicy !== null && {
        ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
      }),
  };
};

const serializeAws_json1_1RemoveAutoScalingPolicyInput = (
  input: RemoveAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId !== undefined &&
      input.InstanceGroupId !== null && { InstanceGroupId: input.InstanceGroupId }),
  };
};

const serializeAws_json1_1RemoveManagedScalingPolicyInput = (
  input: RemoveManagedScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1StringList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1RunJobFlowInput = (input: RunJobFlowInput, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalInfo !== undefined &&
      input.AdditionalInfo !== null && { AdditionalInfo: input.AdditionalInfo }),
    ...(input.AmiVersion !== undefined && input.AmiVersion !== null && { AmiVersion: input.AmiVersion }),
    ...(input.Applications !== undefined &&
      input.Applications !== null && {
        Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
      }),
    ...(input.AutoScalingRole !== undefined &&
      input.AutoScalingRole !== null && { AutoScalingRole: input.AutoScalingRole }),
    ...(input.BootstrapActions !== undefined &&
      input.BootstrapActions !== null && {
        BootstrapActions: serializeAws_json1_1BootstrapActionConfigList(input.BootstrapActions, context),
      }),
    ...(input.Configurations !== undefined &&
      input.Configurations !== null && {
        Configurations: serializeAws_json1_1ConfigurationList(input.Configurations, context),
      }),
    ...(input.CustomAmiId !== undefined && input.CustomAmiId !== null && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsRootVolumeSize !== undefined &&
      input.EbsRootVolumeSize !== null && { EbsRootVolumeSize: input.EbsRootVolumeSize }),
    ...(input.Instances !== undefined &&
      input.Instances !== null && { Instances: serializeAws_json1_1JobFlowInstancesConfig(input.Instances, context) }),
    ...(input.JobFlowRole !== undefined && input.JobFlowRole !== null && { JobFlowRole: input.JobFlowRole }),
    ...(input.KerberosAttributes !== undefined &&
      input.KerberosAttributes !== null && {
        KerberosAttributes: serializeAws_json1_1KerberosAttributes(input.KerberosAttributes, context),
      }),
    ...(input.LogEncryptionKmsKeyId !== undefined &&
      input.LogEncryptionKmsKeyId !== null && { LogEncryptionKmsKeyId: input.LogEncryptionKmsKeyId }),
    ...(input.LogUri !== undefined && input.LogUri !== null && { LogUri: input.LogUri }),
    ...(input.ManagedScalingPolicy !== undefined &&
      input.ManagedScalingPolicy !== null && {
        ManagedScalingPolicy: serializeAws_json1_1ManagedScalingPolicy(input.ManagedScalingPolicy, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NewSupportedProducts !== undefined &&
      input.NewSupportedProducts !== null && {
        NewSupportedProducts: serializeAws_json1_1NewSupportedProductsList(input.NewSupportedProducts, context),
      }),
    ...(input.PlacementGroupConfigs !== undefined &&
      input.PlacementGroupConfigs !== null && {
        PlacementGroupConfigs: serializeAws_json1_1PlacementGroupConfigList(input.PlacementGroupConfigs, context),
      }),
    ...(input.ReleaseLabel !== undefined && input.ReleaseLabel !== null && { ReleaseLabel: input.ReleaseLabel }),
    ...(input.RepoUpgradeOnBoot !== undefined &&
      input.RepoUpgradeOnBoot !== null && { RepoUpgradeOnBoot: input.RepoUpgradeOnBoot }),
    ...(input.ScaleDownBehavior !== undefined &&
      input.ScaleDownBehavior !== null && { ScaleDownBehavior: input.ScaleDownBehavior }),
    ...(input.SecurityConfiguration !== undefined &&
      input.SecurityConfiguration !== null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
    ...(input.StepConcurrencyLevel !== undefined &&
      input.StepConcurrencyLevel !== null && { StepConcurrencyLevel: input.StepConcurrencyLevel }),
    ...(input.Steps !== undefined &&
      input.Steps !== null && { Steps: serializeAws_json1_1StepConfigList(input.Steps, context) }),
    ...(input.SupportedProducts !== undefined &&
      input.SupportedProducts !== null && {
        SupportedProducts: serializeAws_json1_1SupportedProductsList(input.SupportedProducts, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.VisibleToAllUsers !== undefined &&
      input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

const serializeAws_json1_1ScalingAction = (input: ScalingAction, context: __SerdeContext): any => {
  return {
    ...(input.Market !== undefined && input.Market !== null && { Market: input.Market }),
    ...(input.SimpleScalingPolicyConfiguration !== undefined &&
      input.SimpleScalingPolicyConfiguration !== null && {
        SimpleScalingPolicyConfiguration: serializeAws_json1_1SimpleScalingPolicyConfiguration(
          input.SimpleScalingPolicyConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ScalingConstraints = (input: ScalingConstraints, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
  };
};

const serializeAws_json1_1ScalingRule = (input: ScalingRule, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined &&
      input.Action !== null && { Action: serializeAws_json1_1ScalingAction(input.Action, context) }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Trigger !== undefined &&
      input.Trigger !== null && { Trigger: serializeAws_json1_1ScalingTrigger(input.Trigger, context) }),
  };
};

const serializeAws_json1_1ScalingRuleList = (input: ScalingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ScalingRule(entry, context);
    });
};

const serializeAws_json1_1ScalingTrigger = (input: ScalingTrigger, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchAlarmDefinition !== undefined &&
      input.CloudWatchAlarmDefinition !== null && {
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
    ...(input.Args !== undefined &&
      input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
  };
};

const serializeAws_json1_1SecurityGroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SetTerminationProtectionInput = (
  input: SetTerminationProtectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds !== undefined &&
      input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.TerminationProtected !== undefined &&
      input.TerminationProtected !== null && { TerminationProtected: input.TerminationProtected }),
  };
};

const serializeAws_json1_1SetVisibleToAllUsersInput = (
  input: SetVisibleToAllUsersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds !== undefined &&
      input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
    ...(input.VisibleToAllUsers !== undefined &&
      input.VisibleToAllUsers !== null && { VisibleToAllUsers: input.VisibleToAllUsers }),
  };
};

const serializeAws_json1_1ShrinkPolicy = (input: ShrinkPolicy, context: __SerdeContext): any => {
  return {
    ...(input.DecommissionTimeout !== undefined &&
      input.DecommissionTimeout !== null && { DecommissionTimeout: input.DecommissionTimeout }),
    ...(input.InstanceResizePolicy !== undefined &&
      input.InstanceResizePolicy !== null && {
        InstanceResizePolicy: serializeAws_json1_1InstanceResizePolicy(input.InstanceResizePolicy, context),
      }),
  };
};

const serializeAws_json1_1SimpleScalingPolicyConfiguration = (
  input: SimpleScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdjustmentType !== undefined &&
      input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType }),
    ...(input.CoolDown !== undefined && input.CoolDown !== null && { CoolDown: input.CoolDown }),
    ...(input.ScalingAdjustment !== undefined &&
      input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};

const serializeAws_json1_1SpotProvisioningSpecification = (
  input: SpotProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocationStrategy !== undefined &&
      input.AllocationStrategy !== null && { AllocationStrategy: input.AllocationStrategy }),
    ...(input.BlockDurationMinutes !== undefined &&
      input.BlockDurationMinutes !== null && { BlockDurationMinutes: input.BlockDurationMinutes }),
    ...(input.TimeoutAction !== undefined && input.TimeoutAction !== null && { TimeoutAction: input.TimeoutAction }),
    ...(input.TimeoutDurationMinutes !== undefined &&
      input.TimeoutDurationMinutes !== null && { TimeoutDurationMinutes: input.TimeoutDurationMinutes }),
  };
};

const serializeAws_json1_1StartNotebookExecutionInput = (
  input: StartNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EditorId !== undefined && input.EditorId !== null && { EditorId: input.EditorId }),
    ...(input.ExecutionEngine !== undefined &&
      input.ExecutionEngine !== null && {
        ExecutionEngine: serializeAws_json1_1ExecutionEngineConfig(input.ExecutionEngine, context),
      }),
    ...(input.NotebookExecutionName !== undefined &&
      input.NotebookExecutionName !== null && { NotebookExecutionName: input.NotebookExecutionName }),
    ...(input.NotebookInstanceSecurityGroupId !== undefined &&
      input.NotebookInstanceSecurityGroupId !== null && {
        NotebookInstanceSecurityGroupId: input.NotebookInstanceSecurityGroupId,
      }),
    ...(input.NotebookParams !== undefined &&
      input.NotebookParams !== null && { NotebookParams: input.NotebookParams }),
    ...(input.RelativePath !== undefined && input.RelativePath !== null && { RelativePath: input.RelativePath }),
    ...(input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1StepConfig = (input: StepConfig, context: __SerdeContext): any => {
  return {
    ...(input.ActionOnFailure !== undefined &&
      input.ActionOnFailure !== null && { ActionOnFailure: input.ActionOnFailure }),
    ...(input.HadoopJarStep !== undefined &&
      input.HadoopJarStep !== null && {
        HadoopJarStep: serializeAws_json1_1HadoopJarStepConfig(input.HadoopJarStep, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StepConfigList = (input: StepConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1StepConfig(entry, context);
    });
};

const serializeAws_json1_1StepIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StepStateList = (input: (StepState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StopNotebookExecutionInput = (
  input: StopNotebookExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotebookExecutionId !== undefined &&
      input.NotebookExecutionId !== null && { NotebookExecutionId: input.NotebookExecutionId }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StringMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SupportedProductConfig = (input: SupportedProductConfig, context: __SerdeContext): any => {
  return {
    ...(input.Args !== undefined &&
      input.Args !== null && { Args: serializeAws_json1_1XmlStringList(input.Args, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SupportedProductsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateJobFlowsInput = (input: TerminateJobFlowsInput, context: __SerdeContext): any => {
  return {
    ...(input.JobFlowIds !== undefined &&
      input.JobFlowIds !== null && { JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context) }),
  };
};

const serializeAws_json1_1UpdateStudioSessionMappingInput = (
  input: UpdateStudioSessionMappingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId !== undefined && input.IdentityId !== null && { IdentityId: input.IdentityId }),
    ...(input.IdentityName !== undefined && input.IdentityName !== null && { IdentityName: input.IdentityName }),
    ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
    ...(input.SessionPolicyArn !== undefined &&
      input.SessionPolicyArn !== null && { SessionPolicyArn: input.SessionPolicyArn }),
    ...(input.StudioId !== undefined && input.StudioId !== null && { StudioId: input.StudioId }),
  };
};

const serializeAws_json1_1VolumeSpecification = (input: VolumeSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.SizeInGB !== undefined && input.SizeInGB !== null && { SizeInGB: input.SizeInGB }),
    ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1XmlStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1XmlStringMaxLen256List = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AddInstanceFleetOutput = (output: any, context: __SerdeContext): AddInstanceFleetOutput => {
  return {
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
    InstanceFleetId:
      output.InstanceFleetId !== undefined && output.InstanceFleetId !== null ? output.InstanceFleetId : undefined,
  } as any;
};

const deserializeAws_json1_1AddInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceGroupsOutput => {
  return {
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    InstanceGroupIds:
      output.InstanceGroupIds !== undefined && output.InstanceGroupIds !== null
        ? deserializeAws_json1_1InstanceGroupIdsList(output.InstanceGroupIds, context)
        : undefined,
    JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
  } as any;
};

const deserializeAws_json1_1AddJobFlowStepsOutput = (output: any, context: __SerdeContext): AddJobFlowStepsOutput => {
  return {
    StepIds:
      output.StepIds !== undefined && output.StepIds !== null
        ? deserializeAws_json1_1StepIdsList(output.StepIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {} as any;
};

const deserializeAws_json1_1Application = (output: any, context: __SerdeContext): Application => {
  return {
    AdditionalInfo:
      output.AdditionalInfo !== undefined && output.AdditionalInfo !== null
        ? deserializeAws_json1_1StringMap(output.AdditionalInfo, context)
        : undefined,
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Application(entry, context);
    });
};

const deserializeAws_json1_1AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  return {
    Constraints:
      output.Constraints !== undefined && output.Constraints !== null
        ? deserializeAws_json1_1ScalingConstraints(output.Constraints, context)
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1ScalingRuleList(output.Rules, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1AutoScalingPolicyStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStatus = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStatus => {
  return {
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1AutoScalingPolicyStateChangeReason(output.StateChangeReason, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfiguration = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfiguration => {
  return {
    BlockPublicSecurityGroupRules:
      output.BlockPublicSecurityGroupRules !== undefined && output.BlockPublicSecurityGroupRules !== null
        ? output.BlockPublicSecurityGroupRules
        : undefined,
    Classification:
      output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    PermittedPublicSecurityGroupRuleRanges:
      output.PermittedPublicSecurityGroupRuleRanges !== undefined &&
      output.PermittedPublicSecurityGroupRuleRanges !== null
        ? deserializeAws_json1_1PortRanges(output.PermittedPublicSecurityGroupRuleRanges, context)
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfigurationMetadata => {
  return {
    CreatedByArn: output.CreatedByArn !== undefined && output.CreatedByArn !== null ? output.CreatedByArn : undefined,
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1BootstrapActionConfig = (output: any, context: __SerdeContext): BootstrapActionConfig => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ScriptBootstrapAction:
      output.ScriptBootstrapAction !== undefined && output.ScriptBootstrapAction !== null
        ? deserializeAws_json1_1ScriptBootstrapActionConfig(output.ScriptBootstrapAction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetail = (output: any, context: __SerdeContext): BootstrapActionDetail => {
  return {
    BootstrapActionConfig:
      output.BootstrapActionConfig !== undefined && output.BootstrapActionConfig !== null
        ? deserializeAws_json1_1BootstrapActionConfig(output.BootstrapActionConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetailList = (
  output: any,
  context: __SerdeContext
): BootstrapActionDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BootstrapActionDetail(entry, context);
    });
};

const deserializeAws_json1_1CancelStepsInfo = (output: any, context: __SerdeContext): CancelStepsInfo => {
  return {
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StepId: output.StepId !== undefined && output.StepId !== null ? output.StepId : undefined,
  } as any;
};

const deserializeAws_json1_1CancelStepsInfoList = (output: any, context: __SerdeContext): CancelStepsInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CancelStepsInfo(entry, context);
    });
};

const deserializeAws_json1_1CancelStepsOutput = (output: any, context: __SerdeContext): CancelStepsOutput => {
  return {
    CancelStepsInfoList:
      output.CancelStepsInfoList !== undefined && output.CancelStepsInfoList !== null
        ? deserializeAws_json1_1CancelStepsInfoList(output.CancelStepsInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CloudWatchAlarmDefinition = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmDefinition => {
  return {
    ComparisonOperator:
      output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensionList(output.Dimensions, context)
        : undefined,
    EvaluationPeriods:
      output.EvaluationPeriods !== undefined && output.EvaluationPeriods !== null
        ? output.EvaluationPeriods
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Period: output.Period !== undefined && output.Period !== null ? output.Period : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Threshold: output.Threshold !== undefined && output.Threshold !== null ? output.Threshold : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  } as any;
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    Applications:
      output.Applications !== undefined && output.Applications !== null
        ? deserializeAws_json1_1ApplicationList(output.Applications, context)
        : undefined,
    AutoScalingRole:
      output.AutoScalingRole !== undefined && output.AutoScalingRole !== null ? output.AutoScalingRole : undefined,
    AutoTerminate:
      output.AutoTerminate !== undefined && output.AutoTerminate !== null ? output.AutoTerminate : undefined,
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    CustomAmiId: output.CustomAmiId !== undefined && output.CustomAmiId !== null ? output.CustomAmiId : undefined,
    EbsRootVolumeSize:
      output.EbsRootVolumeSize !== undefined && output.EbsRootVolumeSize !== null
        ? output.EbsRootVolumeSize
        : undefined,
    Ec2InstanceAttributes:
      output.Ec2InstanceAttributes !== undefined && output.Ec2InstanceAttributes !== null
        ? deserializeAws_json1_1Ec2InstanceAttributes(output.Ec2InstanceAttributes, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceCollectionType:
      output.InstanceCollectionType !== undefined && output.InstanceCollectionType !== null
        ? output.InstanceCollectionType
        : undefined,
    KerberosAttributes:
      output.KerberosAttributes !== undefined && output.KerberosAttributes !== null
        ? deserializeAws_json1_1KerberosAttributes(output.KerberosAttributes, context)
        : undefined,
    LogEncryptionKmsKeyId:
      output.LogEncryptionKmsKeyId !== undefined && output.LogEncryptionKmsKeyId !== null
        ? output.LogEncryptionKmsKeyId
        : undefined,
    LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
    MasterPublicDnsName:
      output.MasterPublicDnsName !== undefined && output.MasterPublicDnsName !== null
        ? output.MasterPublicDnsName
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    OutpostArn: output.OutpostArn !== undefined && output.OutpostArn !== null ? output.OutpostArn : undefined,
    PlacementGroups:
      output.PlacementGroups !== undefined && output.PlacementGroups !== null
        ? deserializeAws_json1_1PlacementGroupConfigList(output.PlacementGroups, context)
        : undefined,
    ReleaseLabel: output.ReleaseLabel !== undefined && output.ReleaseLabel !== null ? output.ReleaseLabel : undefined,
    RepoUpgradeOnBoot:
      output.RepoUpgradeOnBoot !== undefined && output.RepoUpgradeOnBoot !== null
        ? output.RepoUpgradeOnBoot
        : undefined,
    RequestedAmiVersion:
      output.RequestedAmiVersion !== undefined && output.RequestedAmiVersion !== null
        ? output.RequestedAmiVersion
        : undefined,
    RunningAmiVersion:
      output.RunningAmiVersion !== undefined && output.RunningAmiVersion !== null
        ? output.RunningAmiVersion
        : undefined,
    ScaleDownBehavior:
      output.ScaleDownBehavior !== undefined && output.ScaleDownBehavior !== null
        ? output.ScaleDownBehavior
        : undefined,
    SecurityConfiguration:
      output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
        ? output.SecurityConfiguration
        : undefined,
    ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1ClusterStatus(output.Status, context)
        : undefined,
    StepConcurrencyLevel:
      output.StepConcurrencyLevel !== undefined && output.StepConcurrencyLevel !== null
        ? output.StepConcurrencyLevel
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    TerminationProtected:
      output.TerminationProtected !== undefined && output.TerminationProtected !== null
        ? output.TerminationProtected
        : undefined,
    VisibleToAllUsers:
      output.VisibleToAllUsers !== undefined && output.VisibleToAllUsers !== null
        ? output.VisibleToAllUsers
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterStateChangeReason = (
  output: any,
  context: __SerdeContext
): ClusterStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterStatus = (output: any, context: __SerdeContext): ClusterStatus => {
  return {
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1ClusterStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1ClusterTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return {
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    OutpostArn: output.OutpostArn !== undefined && output.OutpostArn !== null ? output.OutpostArn : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1ClusterStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ClusterSummaryList = (output: any, context: __SerdeContext): ClusterSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClusterSummary(entry, context);
    });
};

const deserializeAws_json1_1ClusterTimeline = (output: any, context: __SerdeContext): ClusterTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1Command = (output: any, context: __SerdeContext): Command => {
  return {
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ScriptPath: output.ScriptPath !== undefined && output.ScriptPath !== null ? output.ScriptPath : undefined,
  } as any;
};

const deserializeAws_json1_1CommandList = (output: any, context: __SerdeContext): Command[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Command(entry, context);
    });
};

const deserializeAws_json1_1ComputeLimits = (output: any, context: __SerdeContext): ComputeLimits => {
  return {
    MaximumCapacityUnits:
      output.MaximumCapacityUnits !== undefined && output.MaximumCapacityUnits !== null
        ? output.MaximumCapacityUnits
        : undefined,
    MaximumCoreCapacityUnits:
      output.MaximumCoreCapacityUnits !== undefined && output.MaximumCoreCapacityUnits !== null
        ? output.MaximumCoreCapacityUnits
        : undefined,
    MaximumOnDemandCapacityUnits:
      output.MaximumOnDemandCapacityUnits !== undefined && output.MaximumOnDemandCapacityUnits !== null
        ? output.MaximumOnDemandCapacityUnits
        : undefined,
    MinimumCapacityUnits:
      output.MinimumCapacityUnits !== undefined && output.MinimumCapacityUnits !== null
        ? output.MinimumCapacityUnits
        : undefined,
    UnitType: output.UnitType !== undefined && output.UnitType !== null ? output.UnitType : undefined,
  } as any;
};

const deserializeAws_json1_1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Classification:
      output.Classification !== undefined && output.Classification !== null ? output.Classification : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Configuration(entry, context);
    });
};

const deserializeAws_json1_1CreateSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationOutput => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1CreateStudioOutput = (output: any, context: __SerdeContext): CreateStudioOutput => {
  return {
    StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeClusterOutput = (output: any, context: __SerdeContext): DescribeClusterOutput => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeJobFlowsOutput = (output: any, context: __SerdeContext): DescribeJobFlowsOutput => {
  return {
    JobFlows:
      output.JobFlows !== undefined && output.JobFlows !== null
        ? deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeNotebookExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeNotebookExecutionOutput => {
  return {
    NotebookExecution:
      output.NotebookExecution !== undefined && output.NotebookExecution !== null
        ? deserializeAws_json1_1NotebookExecution(output.NotebookExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeSecurityConfigurationOutput => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SecurityConfiguration:
      output.SecurityConfiguration !== undefined && output.SecurityConfiguration !== null
        ? output.SecurityConfiguration
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStepOutput = (output: any, context: __SerdeContext): DescribeStepOutput => {
  return {
    Step:
      output.Step !== undefined && output.Step !== null ? deserializeAws_json1_1Step(output.Step, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStudioOutput = (output: any, context: __SerdeContext): DescribeStudioOutput => {
  return {
    Studio:
      output.Studio !== undefined && output.Studio !== null
        ? deserializeAws_json1_1Studio(output.Studio, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EbsBlockDevice = (output: any, context: __SerdeContext): EbsBlockDevice => {
  return {
    Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
    VolumeSpecification:
      output.VolumeSpecification !== undefined && output.VolumeSpecification !== null
        ? deserializeAws_json1_1VolumeSpecification(output.VolumeSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EbsBlockDeviceList = (output: any, context: __SerdeContext): EbsBlockDevice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EbsBlockDevice(entry, context);
    });
};

const deserializeAws_json1_1EbsVolume = (output: any, context: __SerdeContext): EbsVolume => {
  return {
    Device: output.Device !== undefined && output.Device !== null ? output.Device : undefined,
    VolumeId: output.VolumeId !== undefined && output.VolumeId !== null ? output.VolumeId : undefined,
  } as any;
};

const deserializeAws_json1_1EbsVolumeList = (output: any, context: __SerdeContext): EbsVolume[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EbsVolume(entry, context);
    });
};

const deserializeAws_json1_1Ec2InstanceAttributes = (output: any, context: __SerdeContext): Ec2InstanceAttributes => {
  return {
    AdditionalMasterSecurityGroups:
      output.AdditionalMasterSecurityGroups !== undefined && output.AdditionalMasterSecurityGroups !== null
        ? deserializeAws_json1_1StringList(output.AdditionalMasterSecurityGroups, context)
        : undefined,
    AdditionalSlaveSecurityGroups:
      output.AdditionalSlaveSecurityGroups !== undefined && output.AdditionalSlaveSecurityGroups !== null
        ? deserializeAws_json1_1StringList(output.AdditionalSlaveSecurityGroups, context)
        : undefined,
    Ec2AvailabilityZone:
      output.Ec2AvailabilityZone !== undefined && output.Ec2AvailabilityZone !== null
        ? output.Ec2AvailabilityZone
        : undefined,
    Ec2KeyName: output.Ec2KeyName !== undefined && output.Ec2KeyName !== null ? output.Ec2KeyName : undefined,
    Ec2SubnetId: output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null ? output.Ec2SubnetId : undefined,
    EmrManagedMasterSecurityGroup:
      output.EmrManagedMasterSecurityGroup !== undefined && output.EmrManagedMasterSecurityGroup !== null
        ? output.EmrManagedMasterSecurityGroup
        : undefined,
    EmrManagedSlaveSecurityGroup:
      output.EmrManagedSlaveSecurityGroup !== undefined && output.EmrManagedSlaveSecurityGroup !== null
        ? output.EmrManagedSlaveSecurityGroup
        : undefined,
    IamInstanceProfile:
      output.IamInstanceProfile !== undefined && output.IamInstanceProfile !== null
        ? output.IamInstanceProfile
        : undefined,
    RequestedEc2AvailabilityZones:
      output.RequestedEc2AvailabilityZones !== undefined && output.RequestedEc2AvailabilityZones !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2AvailabilityZones, context)
        : undefined,
    RequestedEc2SubnetIds:
      output.RequestedEc2SubnetIds !== undefined && output.RequestedEc2SubnetIds !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.RequestedEc2SubnetIds, context)
        : undefined,
    ServiceAccessSecurityGroup:
      output.ServiceAccessSecurityGroup !== undefined && output.ServiceAccessSecurityGroup !== null
        ? output.ServiceAccessSecurityGroup
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2InstanceIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ExecutionEngineConfig = (output: any, context: __SerdeContext): ExecutionEngineConfig => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MasterInstanceSecurityGroupId:
      output.MasterInstanceSecurityGroupId !== undefined && output.MasterInstanceSecurityGroupId !== null
        ? output.MasterInstanceSecurityGroupId
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1FailureDetails = (output: any, context: __SerdeContext): FailureDetails => {
  return {
    LogFile: output.LogFile !== undefined && output.LogFile !== null ? output.LogFile : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  return {
    BlockPublicAccessConfiguration:
      output.BlockPublicAccessConfiguration !== undefined && output.BlockPublicAccessConfiguration !== null
        ? deserializeAws_json1_1BlockPublicAccessConfiguration(output.BlockPublicAccessConfiguration, context)
        : undefined,
    BlockPublicAccessConfigurationMetadata:
      output.BlockPublicAccessConfigurationMetadata !== undefined &&
      output.BlockPublicAccessConfigurationMetadata !== null
        ? deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(
            output.BlockPublicAccessConfigurationMetadata,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetManagedScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): GetManagedScalingPolicyOutput => {
  return {
    ManagedScalingPolicy:
      output.ManagedScalingPolicy !== undefined && output.ManagedScalingPolicy !== null
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
      output.SessionMapping !== undefined && output.SessionMapping !== null
        ? deserializeAws_json1_1SessionMappingDetail(output.SessionMapping, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HadoopJarStepConfig = (output: any, context: __SerdeContext): HadoopJarStepConfig => {
  return {
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1XmlStringList(output.Args, context)
        : undefined,
    Jar: output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
    MainClass: output.MainClass !== undefined && output.MainClass !== null ? output.MainClass : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1KeyValueList(output.Properties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HadoopStepConfig = (output: any, context: __SerdeContext): HadoopStepConfig => {
  return {
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Jar: output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
    MainClass: output.MainClass !== undefined && output.MainClass !== null ? output.MainClass : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    EbsVolumes:
      output.EbsVolumes !== undefined && output.EbsVolumes !== null
        ? deserializeAws_json1_1EbsVolumeList(output.EbsVolumes, context)
        : undefined,
    Ec2InstanceId:
      output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null ? output.Ec2InstanceId : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceFleetId:
      output.InstanceFleetId !== undefined && output.InstanceFleetId !== null ? output.InstanceFleetId : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
    PrivateDnsName:
      output.PrivateDnsName !== undefined && output.PrivateDnsName !== null ? output.PrivateDnsName : undefined,
    PrivateIpAddress:
      output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
    PublicDnsName:
      output.PublicDnsName !== undefined && output.PublicDnsName !== null ? output.PublicDnsName : undefined,
    PublicIpAddress:
      output.PublicIpAddress !== undefined && output.PublicIpAddress !== null ? output.PublicIpAddress : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleet = (output: any, context: __SerdeContext): InstanceFleet => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceFleetType:
      output.InstanceFleetType !== undefined && output.InstanceFleetType !== null
        ? output.InstanceFleetType
        : undefined,
    InstanceTypeSpecifications:
      output.InstanceTypeSpecifications !== undefined && output.InstanceTypeSpecifications !== null
        ? deserializeAws_json1_1InstanceTypeSpecificationList(output.InstanceTypeSpecifications, context)
        : undefined,
    LaunchSpecifications:
      output.LaunchSpecifications !== undefined && output.LaunchSpecifications !== null
        ? deserializeAws_json1_1InstanceFleetProvisioningSpecifications(output.LaunchSpecifications, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ProvisionedOnDemandCapacity:
      output.ProvisionedOnDemandCapacity !== undefined && output.ProvisionedOnDemandCapacity !== null
        ? output.ProvisionedOnDemandCapacity
        : undefined,
    ProvisionedSpotCapacity:
      output.ProvisionedSpotCapacity !== undefined && output.ProvisionedSpotCapacity !== null
        ? output.ProvisionedSpotCapacity
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceFleetStatus(output.Status, context)
        : undefined,
    TargetOnDemandCapacity:
      output.TargetOnDemandCapacity !== undefined && output.TargetOnDemandCapacity !== null
        ? output.TargetOnDemandCapacity
        : undefined,
    TargetSpotCapacity:
      output.TargetSpotCapacity !== undefined && output.TargetSpotCapacity !== null
        ? output.TargetSpotCapacity
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetList = (output: any, context: __SerdeContext): InstanceFleet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceFleet(entry, context);
    });
};

const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetProvisioningSpecifications => {
  return {
    OnDemandSpecification:
      output.OnDemandSpecification !== undefined && output.OnDemandSpecification !== null
        ? deserializeAws_json1_1OnDemandProvisioningSpecification(output.OnDemandSpecification, context)
        : undefined,
    SpotSpecification:
      output.SpotSpecification !== undefined && output.SpotSpecification !== null
        ? deserializeAws_json1_1SpotProvisioningSpecification(output.SpotSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceFleetStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetStatus = (output: any, context: __SerdeContext): InstanceFleetStatus => {
  return {
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceFleetStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceFleetTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceFleetTimeline = (output: any, context: __SerdeContext): InstanceFleetTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroup = (output: any, context: __SerdeContext): InstanceGroup => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy !== undefined && output.AutoScalingPolicy !== null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
        : undefined,
    BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    ConfigurationsVersion:
      output.ConfigurationsVersion !== undefined && output.ConfigurationsVersion !== null
        ? output.ConfigurationsVersion
        : undefined,
    EbsBlockDevices:
      output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
        ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
        : undefined,
    EbsOptimized: output.EbsOptimized !== undefined && output.EbsOptimized !== null ? output.EbsOptimized : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceGroupType:
      output.InstanceGroupType !== undefined && output.InstanceGroupType !== null
        ? output.InstanceGroupType
        : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    LastSuccessfullyAppliedConfigurations:
      output.LastSuccessfullyAppliedConfigurations !== undefined &&
      output.LastSuccessfullyAppliedConfigurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.LastSuccessfullyAppliedConfigurations, context)
        : undefined,
    LastSuccessfullyAppliedConfigurationsVersion:
      output.LastSuccessfullyAppliedConfigurationsVersion !== undefined &&
      output.LastSuccessfullyAppliedConfigurationsVersion !== null
        ? output.LastSuccessfullyAppliedConfigurationsVersion
        : undefined,
    Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RequestedInstanceCount:
      output.RequestedInstanceCount !== undefined && output.RequestedInstanceCount !== null
        ? output.RequestedInstanceCount
        : undefined,
    RunningInstanceCount:
      output.RunningInstanceCount !== undefined && output.RunningInstanceCount !== null
        ? output.RunningInstanceCount
        : undefined,
    ShrinkPolicy:
      output.ShrinkPolicy !== undefined && output.ShrinkPolicy !== null
        ? deserializeAws_json1_1ShrinkPolicy(output.ShrinkPolicy, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceGroupStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupDetail = (output: any, context: __SerdeContext): InstanceGroupDetail => {
  return {
    BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
    InstanceRequestCount:
      output.InstanceRequestCount !== undefined && output.InstanceRequestCount !== null
        ? output.InstanceRequestCount
        : undefined,
    InstanceRole: output.InstanceRole !== undefined && output.InstanceRole !== null ? output.InstanceRole : undefined,
    InstanceRunningCount:
      output.InstanceRunningCount !== undefined && output.InstanceRunningCount !== null
        ? output.InstanceRunningCount
        : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupDetailList = (output: any, context: __SerdeContext): InstanceGroupDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceGroupDetail(entry, context);
    });
};

const deserializeAws_json1_1InstanceGroupIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1InstanceGroupList = (output: any, context: __SerdeContext): InstanceGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceGroup(entry, context);
    });
};

const deserializeAws_json1_1InstanceGroupStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceGroupStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupStatus = (output: any, context: __SerdeContext): InstanceGroupStatus => {
  return {
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceGroupStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceGroupTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceGroupTimeline = (output: any, context: __SerdeContext): InstanceGroupTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): Instance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Instance(entry, context);
    });
};

const deserializeAws_json1_1InstanceResizePolicy = (output: any, context: __SerdeContext): InstanceResizePolicy => {
  return {
    InstanceTerminationTimeout:
      output.InstanceTerminationTimeout !== undefined && output.InstanceTerminationTimeout !== null
        ? output.InstanceTerminationTimeout
        : undefined,
    InstancesToProtect:
      output.InstancesToProtect !== undefined && output.InstancesToProtect !== null
        ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToProtect, context)
        : undefined,
    InstancesToTerminate:
      output.InstancesToTerminate !== undefined && output.InstancesToTerminate !== null
        ? deserializeAws_json1_1EC2InstanceIdsList(output.InstancesToTerminate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceStatus = (output: any, context: __SerdeContext): InstanceStatus => {
  return {
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceTimeline = (output: any, context: __SerdeContext): InstanceTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceTypeSpecification = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification => {
  return {
    BidPrice: output.BidPrice !== undefined && output.BidPrice !== null ? output.BidPrice : undefined,
    BidPriceAsPercentageOfOnDemandPrice:
      output.BidPriceAsPercentageOfOnDemandPrice !== undefined && output.BidPriceAsPercentageOfOnDemandPrice !== null
        ? output.BidPriceAsPercentageOfOnDemandPrice
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(output.Configurations, context)
        : undefined,
    EbsBlockDevices:
      output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
        ? deserializeAws_json1_1EbsBlockDeviceList(output.EbsBlockDevices, context)
        : undefined,
    EbsOptimized: output.EbsOptimized !== undefined && output.EbsOptimized !== null ? output.EbsOptimized : undefined,
    InstanceType: output.InstanceType !== undefined && output.InstanceType !== null ? output.InstanceType : undefined,
    WeightedCapacity:
      output.WeightedCapacity !== undefined && output.WeightedCapacity !== null ? output.WeightedCapacity : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceTypeSpecificationList = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceTypeSpecification(entry, context);
    });
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {} as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1JobFlowDetail = (output: any, context: __SerdeContext): JobFlowDetail => {
  return {
    AmiVersion: output.AmiVersion !== undefined && output.AmiVersion !== null ? output.AmiVersion : undefined,
    AutoScalingRole:
      output.AutoScalingRole !== undefined && output.AutoScalingRole !== null ? output.AutoScalingRole : undefined,
    BootstrapActions:
      output.BootstrapActions !== undefined && output.BootstrapActions !== null
        ? deserializeAws_json1_1BootstrapActionDetailList(output.BootstrapActions, context)
        : undefined,
    ExecutionStatusDetail:
      output.ExecutionStatusDetail !== undefined && output.ExecutionStatusDetail !== null
        ? deserializeAws_json1_1JobFlowExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1JobFlowInstancesDetail(output.Instances, context)
        : undefined,
    JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
    JobFlowRole: output.JobFlowRole !== undefined && output.JobFlowRole !== null ? output.JobFlowRole : undefined,
    LogEncryptionKmsKeyId:
      output.LogEncryptionKmsKeyId !== undefined && output.LogEncryptionKmsKeyId !== null
        ? output.LogEncryptionKmsKeyId
        : undefined,
    LogUri: output.LogUri !== undefined && output.LogUri !== null ? output.LogUri : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ScaleDownBehavior:
      output.ScaleDownBehavior !== undefined && output.ScaleDownBehavior !== null
        ? output.ScaleDownBehavior
        : undefined,
    ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1StepDetailList(output.Steps, context)
        : undefined,
    SupportedProducts:
      output.SupportedProducts !== undefined && output.SupportedProducts !== null
        ? deserializeAws_json1_1SupportedProductsList(output.SupportedProducts, context)
        : undefined,
    VisibleToAllUsers:
      output.VisibleToAllUsers !== undefined && output.VisibleToAllUsers !== null
        ? output.VisibleToAllUsers
        : undefined,
  } as any;
};

const deserializeAws_json1_1JobFlowDetailList = (output: any, context: __SerdeContext): JobFlowDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobFlowDetail(entry, context);
    });
};

const deserializeAws_json1_1JobFlowExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): JobFlowExecutionStatusDetail => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1JobFlowInstancesDetail = (output: any, context: __SerdeContext): JobFlowInstancesDetail => {
  return {
    Ec2KeyName: output.Ec2KeyName !== undefined && output.Ec2KeyName !== null ? output.Ec2KeyName : undefined,
    Ec2SubnetId: output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null ? output.Ec2SubnetId : undefined,
    HadoopVersion:
      output.HadoopVersion !== undefined && output.HadoopVersion !== null ? output.HadoopVersion : undefined,
    InstanceCount:
      output.InstanceCount !== undefined && output.InstanceCount !== null ? output.InstanceCount : undefined,
    InstanceGroups:
      output.InstanceGroups !== undefined && output.InstanceGroups !== null
        ? deserializeAws_json1_1InstanceGroupDetailList(output.InstanceGroups, context)
        : undefined,
    KeepJobFlowAliveWhenNoSteps:
      output.KeepJobFlowAliveWhenNoSteps !== undefined && output.KeepJobFlowAliveWhenNoSteps !== null
        ? output.KeepJobFlowAliveWhenNoSteps
        : undefined,
    MasterInstanceId:
      output.MasterInstanceId !== undefined && output.MasterInstanceId !== null ? output.MasterInstanceId : undefined,
    MasterInstanceType:
      output.MasterInstanceType !== undefined && output.MasterInstanceType !== null
        ? output.MasterInstanceType
        : undefined,
    MasterPublicDnsName:
      output.MasterPublicDnsName !== undefined && output.MasterPublicDnsName !== null
        ? output.MasterPublicDnsName
        : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined && output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    Placement:
      output.Placement !== undefined && output.Placement !== null
        ? deserializeAws_json1_1PlacementType(output.Placement, context)
        : undefined,
    SlaveInstanceType:
      output.SlaveInstanceType !== undefined && output.SlaveInstanceType !== null
        ? output.SlaveInstanceType
        : undefined,
    TerminationProtected:
      output.TerminationProtected !== undefined && output.TerminationProtected !== null
        ? output.TerminationProtected
        : undefined,
  } as any;
};

const deserializeAws_json1_1KerberosAttributes = (output: any, context: __SerdeContext): KerberosAttributes => {
  return {
    ADDomainJoinPassword:
      output.ADDomainJoinPassword !== undefined && output.ADDomainJoinPassword !== null
        ? output.ADDomainJoinPassword
        : undefined,
    ADDomainJoinUser:
      output.ADDomainJoinUser !== undefined && output.ADDomainJoinUser !== null ? output.ADDomainJoinUser : undefined,
    CrossRealmTrustPrincipalPassword:
      output.CrossRealmTrustPrincipalPassword !== undefined && output.CrossRealmTrustPrincipalPassword !== null
        ? output.CrossRealmTrustPrincipalPassword
        : undefined,
    KdcAdminPassword:
      output.KdcAdminPassword !== undefined && output.KdcAdminPassword !== null ? output.KdcAdminPassword : undefined,
    Realm: output.Realm !== undefined && output.Realm !== null ? output.Realm : undefined,
  } as any;
};

const deserializeAws_json1_1KeyValue = (output: any, context: __SerdeContext): KeyValue => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1KeyValueList = (output: any, context: __SerdeContext): KeyValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeyValue(entry, context);
    });
};

const deserializeAws_json1_1ListBootstrapActionsOutput = (
  output: any,
  context: __SerdeContext
): ListBootstrapActionsOutput => {
  return {
    BootstrapActions:
      output.BootstrapActions !== undefined && output.BootstrapActions !== null
        ? deserializeAws_json1_1CommandList(output.BootstrapActions, context)
        : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
  } as any;
};

const deserializeAws_json1_1ListClustersOutput = (output: any, context: __SerdeContext): ListClustersOutput => {
  return {
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1ClusterSummaryList(output.Clusters, context)
        : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
  } as any;
};

const deserializeAws_json1_1ListInstanceFleetsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceFleetsOutput => {
  return {
    InstanceFleets:
      output.InstanceFleets !== undefined && output.InstanceFleets !== null
        ? deserializeAws_json1_1InstanceFleetList(output.InstanceFleets, context)
        : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
  } as any;
};

const deserializeAws_json1_1ListInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceGroupsOutput => {
  return {
    InstanceGroups:
      output.InstanceGroups !== undefined && output.InstanceGroups !== null
        ? deserializeAws_json1_1InstanceGroupList(output.InstanceGroups, context)
        : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
  } as any;
};

const deserializeAws_json1_1ListInstancesOutput = (output: any, context: __SerdeContext): ListInstancesOutput => {
  return {
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1InstanceList(output.Instances, context)
        : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
  } as any;
};

const deserializeAws_json1_1ListNotebookExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListNotebookExecutionsOutput => {
  return {
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    NotebookExecutions:
      output.NotebookExecutions !== undefined && output.NotebookExecutions !== null
        ? deserializeAws_json1_1NotebookExecutionSummaryList(output.NotebookExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  return {
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    SecurityConfigurations:
      output.SecurityConfigurations !== undefined && output.SecurityConfigurations !== null
        ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStepsOutput = (output: any, context: __SerdeContext): ListStepsOutput => {
  return {
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1StepSummaryList(output.Steps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStudioSessionMappingsOutput = (
  output: any,
  context: __SerdeContext
): ListStudioSessionMappingsOutput => {
  return {
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    SessionMappings:
      output.SessionMappings !== undefined && output.SessionMappings !== null
        ? deserializeAws_json1_1SessionMappingSummaryList(output.SessionMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStudiosOutput = (output: any, context: __SerdeContext): ListStudiosOutput => {
  return {
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    Studios:
      output.Studios !== undefined && output.Studios !== null
        ? deserializeAws_json1_1StudioSummaryList(output.Studios, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedScalingPolicy = (output: any, context: __SerdeContext): ManagedScalingPolicy => {
  return {
    ComputeLimits:
      output.ComputeLimits !== undefined && output.ComputeLimits !== null
        ? deserializeAws_json1_1ComputeLimits(output.ComputeLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimensionList = (output: any, context: __SerdeContext): MetricDimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
};

const deserializeAws_json1_1ModifyClusterOutput = (output: any, context: __SerdeContext): ModifyClusterOutput => {
  return {
    StepConcurrencyLevel:
      output.StepConcurrencyLevel !== undefined && output.StepConcurrencyLevel !== null
        ? output.StepConcurrencyLevel
        : undefined,
  } as any;
};

const deserializeAws_json1_1NotebookExecution = (output: any, context: __SerdeContext): NotebookExecution => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    EditorId: output.EditorId !== undefined && output.EditorId !== null ? output.EditorId : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ExecutionEngine:
      output.ExecutionEngine !== undefined && output.ExecutionEngine !== null
        ? deserializeAws_json1_1ExecutionEngineConfig(output.ExecutionEngine, context)
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    NotebookExecutionId:
      output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
        ? output.NotebookExecutionId
        : undefined,
    NotebookExecutionName:
      output.NotebookExecutionName !== undefined && output.NotebookExecutionName !== null
        ? output.NotebookExecutionName
        : undefined,
    NotebookInstanceSecurityGroupId:
      output.NotebookInstanceSecurityGroupId !== undefined && output.NotebookInstanceSecurityGroupId !== null
        ? output.NotebookInstanceSecurityGroupId
        : undefined,
    NotebookParams:
      output.NotebookParams !== undefined && output.NotebookParams !== null ? output.NotebookParams : undefined,
    OutputNotebookURI:
      output.OutputNotebookURI !== undefined && output.OutputNotebookURI !== null
        ? output.OutputNotebookURI
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NotebookExecutionSummary = (
  output: any,
  context: __SerdeContext
): NotebookExecutionSummary => {
  return {
    EditorId: output.EditorId !== undefined && output.EditorId !== null ? output.EditorId : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    NotebookExecutionId:
      output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
        ? output.NotebookExecutionId
        : undefined,
    NotebookExecutionName:
      output.NotebookExecutionName !== undefined && output.NotebookExecutionName !== null
        ? output.NotebookExecutionName
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1NotebookExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): NotebookExecutionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotebookExecutionSummary(entry, context);
    });
};

const deserializeAws_json1_1OnDemandProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): OnDemandProvisioningSpecification => {
  return {
    AllocationStrategy:
      output.AllocationStrategy !== undefined && output.AllocationStrategy !== null
        ? output.AllocationStrategy
        : undefined,
  } as any;
};

const deserializeAws_json1_1PlacementGroupConfig = (output: any, context: __SerdeContext): PlacementGroupConfig => {
  return {
    InstanceRole: output.InstanceRole !== undefined && output.InstanceRole !== null ? output.InstanceRole : undefined,
    PlacementStrategy:
      output.PlacementStrategy !== undefined && output.PlacementStrategy !== null
        ? output.PlacementStrategy
        : undefined,
  } as any;
};

const deserializeAws_json1_1PlacementGroupConfigList = (
  output: any,
  context: __SerdeContext
): PlacementGroupConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementGroupConfig(entry, context);
    });
};

const deserializeAws_json1_1PlacementType = (output: any, context: __SerdeContext): PlacementType => {
  return {
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(output.AvailabilityZones, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    MaxRange: output.MaxRange !== undefined && output.MaxRange !== null ? output.MaxRange : undefined,
    MinRange: output.MinRange !== undefined && output.MinRange !== null ? output.MinRange : undefined,
  } as any;
};

const deserializeAws_json1_1PortRanges = (output: any, context: __SerdeContext): PortRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PortRange(entry, context);
    });
};

const deserializeAws_json1_1PutAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutAutoScalingPolicyOutput => {
  return {
    AutoScalingPolicy:
      output.AutoScalingPolicy !== undefined && output.AutoScalingPolicy !== null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(output.AutoScalingPolicy, context)
        : undefined,
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null ? output.InstanceGroupId : undefined,
  } as any;
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
    ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
    JobFlowId: output.JobFlowId !== undefined && output.JobFlowId !== null ? output.JobFlowId : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingAction = (output: any, context: __SerdeContext): ScalingAction => {
  return {
    Market: output.Market !== undefined && output.Market !== null ? output.Market : undefined,
    SimpleScalingPolicyConfiguration:
      output.SimpleScalingPolicyConfiguration !== undefined && output.SimpleScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1SimpleScalingPolicyConfiguration(output.SimpleScalingPolicyConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingConstraints = (output: any, context: __SerdeContext): ScalingConstraints => {
  return {
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingRule = (output: any, context: __SerdeContext): ScalingRule => {
  return {
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1ScalingAction(output.Action, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Trigger:
      output.Trigger !== undefined && output.Trigger !== null
        ? deserializeAws_json1_1ScalingTrigger(output.Trigger, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingRuleList = (output: any, context: __SerdeContext): ScalingRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingRule(entry, context);
    });
};

const deserializeAws_json1_1ScalingTrigger = (output: any, context: __SerdeContext): ScalingTrigger => {
  return {
    CloudWatchAlarmDefinition:
      output.CloudWatchAlarmDefinition !== undefined && output.CloudWatchAlarmDefinition !== null
        ? deserializeAws_json1_1CloudWatchAlarmDefinition(output.CloudWatchAlarmDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScriptBootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): ScriptBootstrapActionConfig => {
  return {
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1XmlStringList(output.Args, context)
        : undefined,
    Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityConfigurationSummary(entry, context);
    });
};

const deserializeAws_json1_1SecurityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1SessionMappingDetail = (output: any, context: __SerdeContext): SessionMappingDetail => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    IdentityName: output.IdentityName !== undefined && output.IdentityName !== null ? output.IdentityName : undefined,
    IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    SessionPolicyArn:
      output.SessionPolicyArn !== undefined && output.SessionPolicyArn !== null ? output.SessionPolicyArn : undefined,
    StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
  } as any;
};

const deserializeAws_json1_1SessionMappingSummary = (output: any, context: __SerdeContext): SessionMappingSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    IdentityName: output.IdentityName !== undefined && output.IdentityName !== null ? output.IdentityName : undefined,
    IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
    SessionPolicyArn:
      output.SessionPolicyArn !== undefined && output.SessionPolicyArn !== null ? output.SessionPolicyArn : undefined,
    StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
  } as any;
};

const deserializeAws_json1_1SessionMappingSummaryList = (
  output: any,
  context: __SerdeContext
): SessionMappingSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SessionMappingSummary(entry, context);
    });
};

const deserializeAws_json1_1ShrinkPolicy = (output: any, context: __SerdeContext): ShrinkPolicy => {
  return {
    DecommissionTimeout:
      output.DecommissionTimeout !== undefined && output.DecommissionTimeout !== null
        ? output.DecommissionTimeout
        : undefined,
    InstanceResizePolicy:
      output.InstanceResizePolicy !== undefined && output.InstanceResizePolicy !== null
        ? deserializeAws_json1_1InstanceResizePolicy(output.InstanceResizePolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): SimpleScalingPolicyConfiguration => {
  return {
    AdjustmentType:
      output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
    CoolDown: output.CoolDown !== undefined && output.CoolDown !== null ? output.CoolDown : undefined,
    ScalingAdjustment:
      output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
        ? output.ScalingAdjustment
        : undefined,
  } as any;
};

const deserializeAws_json1_1SpotProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): SpotProvisioningSpecification => {
  return {
    AllocationStrategy:
      output.AllocationStrategy !== undefined && output.AllocationStrategy !== null
        ? output.AllocationStrategy
        : undefined,
    BlockDurationMinutes:
      output.BlockDurationMinutes !== undefined && output.BlockDurationMinutes !== null
        ? output.BlockDurationMinutes
        : undefined,
    TimeoutAction:
      output.TimeoutAction !== undefined && output.TimeoutAction !== null ? output.TimeoutAction : undefined,
    TimeoutDurationMinutes:
      output.TimeoutDurationMinutes !== undefined && output.TimeoutDurationMinutes !== null
        ? output.TimeoutDurationMinutes
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartNotebookExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartNotebookExecutionOutput => {
  return {
    NotebookExecutionId:
      output.NotebookExecutionId !== undefined && output.NotebookExecutionId !== null
        ? output.NotebookExecutionId
        : undefined,
  } as any;
};

const deserializeAws_json1_1Step = (output: any, context: __SerdeContext): Step => {
  return {
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1StepStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepConfig = (output: any, context: __SerdeContext): StepConfig => {
  return {
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
    HadoopJarStep:
      output.HadoopJarStep !== undefined && output.HadoopJarStep !== null
        ? deserializeAws_json1_1HadoopJarStepConfig(output.HadoopJarStep, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1StepDetail = (output: any, context: __SerdeContext): StepDetail => {
  return {
    ExecutionStatusDetail:
      output.ExecutionStatusDetail !== undefined && output.ExecutionStatusDetail !== null
        ? deserializeAws_json1_1StepExecutionStatusDetail(output.ExecutionStatusDetail, context)
        : undefined,
    StepConfig:
      output.StepConfig !== undefined && output.StepConfig !== null
        ? deserializeAws_json1_1StepConfig(output.StepConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepDetailList = (output: any, context: __SerdeContext): StepDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepDetail(entry, context);
    });
};

const deserializeAws_json1_1StepExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): StepExecutionStatusDetail => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined && output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1StepIdsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1StepStateChangeReason = (output: any, context: __SerdeContext): StepStateChangeReason => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1StepStatus = (output: any, context: __SerdeContext): StepStatus => {
  return {
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined && output.StateChangeReason !== null
        ? deserializeAws_json1_1StepStateChangeReason(output.StateChangeReason, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1StepTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepSummary = (output: any, context: __SerdeContext): StepSummary => {
  return {
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null ? output.ActionOnFailure : undefined,
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1StepStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepSummaryList = (output: any, context: __SerdeContext): StepSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepSummary(entry, context);
    });
};

const deserializeAws_json1_1StepTimeline = (output: any, context: __SerdeContext): StepTimeline => {
  return {
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1Studio = (output: any, context: __SerdeContext): Studio => {
  return {
    AuthMode: output.AuthMode !== undefined && output.AuthMode !== null ? output.AuthMode : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    DefaultS3Location:
      output.DefaultS3Location !== undefined && output.DefaultS3Location !== null
        ? output.DefaultS3Location
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EngineSecurityGroupId:
      output.EngineSecurityGroupId !== undefined && output.EngineSecurityGroupId !== null
        ? output.EngineSecurityGroupId
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
    StudioArn: output.StudioArn !== undefined && output.StudioArn !== null ? output.StudioArn : undefined,
    StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    UserRole: output.UserRole !== undefined && output.UserRole !== null ? output.UserRole : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    WorkspaceSecurityGroupId:
      output.WorkspaceSecurityGroupId !== undefined && output.WorkspaceSecurityGroupId !== null
        ? output.WorkspaceSecurityGroupId
        : undefined,
  } as any;
};

const deserializeAws_json1_1StudioSummary = (output: any, context: __SerdeContext): StudioSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    StudioId: output.StudioId !== undefined && output.StudioId !== null ? output.StudioId : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_json1_1StudioSummaryList = (output: any, context: __SerdeContext): StudioSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StudioSummary(entry, context);
    });
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1SupportedProductsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1VolumeSpecification = (output: any, context: __SerdeContext): VolumeSpecification => {
  return {
    Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
    SizeInGB: output.SizeInGB !== undefined && output.SizeInGB !== null ? output.SizeInGB : undefined,
    VolumeType: output.VolumeType !== undefined && output.VolumeType !== null ? output.VolumeType : undefined,
  } as any;
};

const deserializeAws_json1_1XmlStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1XmlStringMaxLen256List = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
