import {
  AddInstanceFleetCommandInput,
  AddInstanceFleetCommandOutput
} from "../commands/AddInstanceFleetCommand";
import {
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput
} from "../commands/AddInstanceGroupsCommand";
import {
  AddJobFlowStepsCommandInput,
  AddJobFlowStepsCommandOutput
} from "../commands/AddJobFlowStepsCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CancelStepsCommandInput,
  CancelStepsCommandOutput
} from "../commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput
} from "../commands/CreateSecurityConfigurationCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput
} from "../commands/DeleteSecurityConfigurationCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeJobFlowsCommandInput,
  DescribeJobFlowsCommandOutput
} from "../commands/DescribeJobFlowsCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput
} from "../commands/DescribeSecurityConfigurationCommand";
import {
  DescribeStepCommandInput,
  DescribeStepCommandOutput
} from "../commands/DescribeStepCommand";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput
} from "../commands/GetBlockPublicAccessConfigurationCommand";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput
} from "../commands/ListBootstrapActionsCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput
} from "../commands/ListInstanceFleetsCommand";
import {
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput
} from "../commands/ListInstanceGroupsCommand";
import {
  ListInstancesCommandInput,
  ListInstancesCommandOutput
} from "../commands/ListInstancesCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput
} from "../commands/ListSecurityConfigurationsCommand";
import {
  ListStepsCommandInput,
  ListStepsCommandOutput
} from "../commands/ListStepsCommand";
import {
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput
} from "../commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput
} from "../commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput
} from "../commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput
} from "../commands/PutAutoScalingPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput
} from "../commands/PutBlockPublicAccessConfigurationCommand";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput
} from "../commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  RunJobFlowCommandInput,
  RunJobFlowCommandOutput
} from "../commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput
} from "../commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput
} from "../commands/SetVisibleToAllUsersCommand";
import {
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput
} from "../commands/TerminateJobFlowsCommand";
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
  Configuration,
  CreateSecurityConfigurationInput,
  CreateSecurityConfigurationOutput,
  DeleteSecurityConfigurationInput,
  DeleteSecurityConfigurationOutput,
  DescribeClusterInput,
  DescribeClusterOutput,
  DescribeJobFlowsInput,
  DescribeJobFlowsOutput,
  DescribeSecurityConfigurationInput,
  DescribeSecurityConfigurationOutput,
  DescribeStepInput,
  DescribeStepOutput,
  EbsBlockDevice,
  EbsBlockDeviceConfig,
  EbsConfiguration,
  EbsVolume,
  Ec2InstanceAttributes,
  FailureDetails,
  GetBlockPublicAccessConfigurationInput,
  GetBlockPublicAccessConfigurationOutput,
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
  ListSecurityConfigurationsInput,
  ListSecurityConfigurationsOutput,
  ListStepsInput,
  ListStepsOutput,
  MetricDimension,
  ModifyClusterInput,
  ModifyClusterOutput,
  ModifyInstanceFleetInput,
  ModifyInstanceGroupsInput,
  PlacementType,
  PortRange,
  PutAutoScalingPolicyInput,
  PutAutoScalingPolicyOutput,
  PutBlockPublicAccessConfigurationInput,
  PutBlockPublicAccessConfigurationOutput,
  RemoveAutoScalingPolicyInput,
  RemoveAutoScalingPolicyOutput,
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
  SetTerminationProtectionInput,
  SetVisibleToAllUsersInput,
  ShrinkPolicy,
  SimpleScalingPolicyConfiguration,
  SpotProvisioningSpecification,
  Step,
  StepConfig,
  StepDetail,
  StepExecutionStatusDetail,
  StepState,
  StepStateChangeReason,
  StepStatus,
  StepSummary,
  StepTimeline,
  SupportedProductConfig,
  Tag,
  TerminateJobFlowsInput,
  VolumeSpecification
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AddInstanceFleetCommand = async (
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.AddInstanceFleet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddInstanceFleetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddInstanceGroupsCommand = async (
  input: AddInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.AddInstanceGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddJobFlowStepsCommand = async (
  input: AddJobFlowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.AddJobFlowSteps"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddJobFlowStepsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.AddTags"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.CancelSteps"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.CreateSecurityConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DeleteSecurityConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DescribeCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClusterInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeJobFlowsCommand = async (
  input: DescribeJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DescribeJobFlows"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeJobFlowsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecurityConfigurationCommand = async (
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DescribeSecurityConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStepCommand = async (
  input: DescribeStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.DescribeStep"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlockPublicAccessConfigurationCommand = async (
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.GetBlockPublicAccessConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBootstrapActionsCommand = async (
  input: ListBootstrapActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListBootstrapActions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBootstrapActionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListClusters"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListInstanceFleets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstanceFleetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstanceGroupsCommand = async (
  input: ListInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListInstanceGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListInstances"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecurityConfigurationsCommand = async (
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListSecurityConfigurations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSecurityConfigurationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStepsCommand = async (
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ListSteps"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ModifyCluster"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ModifyInstanceFleet"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyInstanceFleetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyInstanceGroupsCommand = async (
  input: ModifyInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.ModifyInstanceGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAutoScalingPolicyCommand = async (
  input: PutAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.PutAutoScalingPolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutAutoScalingPolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutBlockPublicAccessConfigurationCommand = async (
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.PutBlockPublicAccessConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveAutoScalingPolicyCommand = async (
  input: RemoveAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.RemoveAutoScalingPolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.RemoveTags"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.RunJobFlow"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.SetTerminationProtection"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetTerminationProtectionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetVisibleToAllUsersCommand = async (
  input: SetVisibleToAllUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.SetVisibleToAllUsers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetVisibleToAllUsersInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateJobFlowsCommand = async (
  input: TerminateJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ElasticMapReduce.TerminateJobFlows"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TerminateJobFlowsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddInstanceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddInstanceFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddInstanceFleetOutput(data, context);
  const response: AddInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddInstanceFleetOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddInstanceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddInstanceGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddInstanceGroupsOutput(data, context);
  const response: AddInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddInstanceGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddJobFlowStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddJobFlowStepsOutput(data, context);
  const response: AddJobFlowStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddJobFlowStepsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddJobFlowStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelStepsOutput(data, context);
  const response: CancelStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelStepsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSecurityConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecurityConfigurationOutput(
    data,
    context
  );
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSecurityConfigurationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecurityConfigurationOutput(
    data,
    context
  );
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSecurityConfigurationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClusterOutput(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeJobFlowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeJobFlowsOutput(data, context);
  const response: DescribeJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobFlowsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeJobFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSecurityConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecurityConfigurationOutput(
    data,
    context
  );
  const response: DescribeSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSecurityConfigurationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStepCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStepOutput(data, context);
  const response: DescribeStepCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStepOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStepCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput(
    data,
    context
  );
  const response: GetBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlockPublicAccessConfigurationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListBootstrapActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBootstrapActionsOutput(data, context);
  const response: ListBootstrapActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBootstrapActionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBootstrapActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersOutput(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListInstanceFleetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceFleetsOutput(data, context);
  const response: ListInstanceFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstanceFleetsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstanceFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListInstanceGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceGroupsOutput(data, context);
  const response: ListInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstanceGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstancesOutput(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSecurityConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecurityConfigurationsOutput(
    data,
    context
  );
  const response: ListSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSecurityConfigurationsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecurityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStepsOutput(data, context);
  const response: ListStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStepsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClusterOutput(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyClusterOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyInstanceFleetCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceFleetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyInstanceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyInstanceGroupsCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ModifyInstanceGroupsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyInstanceGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAutoScalingPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAutoScalingPolicyOutput(data, context);
  const response: PutAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAutoScalingPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAutoScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput(
    data,
    context
  );
  const response: PutBlockPublicAccessConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutBlockPublicAccessConfigurationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveAutoScalingPolicyOutput(data, context);
  const response: RemoveAutoScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveAutoScalingPolicyOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveAutoScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emr#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.emr#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RunJobFlowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunJobFlowOutput(data, context);
  const response: RunJobFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RunJobFlowOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunJobFlowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetTerminationProtectionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetTerminationProtectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTerminationProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetVisibleToAllUsersCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetVisibleToAllUsersCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetVisibleToAllUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TerminateJobFlowsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateJobFlowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.emr#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddInstanceFleetInput = (
  input: AddInstanceFleetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet !== undefined && {
      InstanceFleet: serializeAws_json1_1InstanceFleetConfig(
        input.InstanceFleet,
        context
      )
    })
  };
};

const serializeAws_json1_1AddInstanceGroupsInput = (
  input: AddInstanceGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceGroups !== undefined && {
      InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(
        input.InstanceGroups,
        context
      )
    }),
    ...(input.JobFlowId !== undefined && { JobFlowId: input.JobFlowId })
  };
};

const serializeAws_json1_1AddJobFlowStepsInput = (
  input: AddJobFlowStepsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowId !== undefined && { JobFlowId: input.JobFlowId }),
    ...(input.Steps !== undefined && {
      Steps: serializeAws_json1_1StepConfigList(input.Steps, context)
    })
  };
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1Application = (
  input: Application,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalInfo !== undefined && {
      AdditionalInfo: serializeAws_json1_1StringMap(
        input.AdditionalInfo,
        context
      )
    }),
    ...(input.Args !== undefined && {
      Args: serializeAws_json1_1StringList(input.Args, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Version !== undefined && { Version: input.Version })
  };
};

const serializeAws_json1_1ApplicationList = (
  input: Application[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Application(entry, context));
};

const serializeAws_json1_1AutoScalingPolicy = (
  input: AutoScalingPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Constraints !== undefined && {
      Constraints: serializeAws_json1_1ScalingConstraints(
        input.Constraints,
        context
      )
    }),
    ...(input.Rules !== undefined && {
      Rules: serializeAws_json1_1ScalingRuleList(input.Rules, context)
    })
  };
};

const serializeAws_json1_1BlockPublicAccessConfiguration = (
  input: BlockPublicAccessConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicSecurityGroupRules !== undefined && {
      BlockPublicSecurityGroupRules: input.BlockPublicSecurityGroupRules
    }),
    ...(input.Classification !== undefined && {
      Classification: input.Classification
    }),
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.PermittedPublicSecurityGroupRuleRanges !== undefined && {
      PermittedPublicSecurityGroupRuleRanges: serializeAws_json1_1PortRanges(
        input.PermittedPublicSecurityGroupRuleRanges,
        context
      )
    }),
    ...(input.Properties !== undefined && {
      Properties: serializeAws_json1_1StringMap(input.Properties, context)
    })
  };
};

const serializeAws_json1_1BootstrapActionConfig = (
  input: BootstrapActionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ScriptBootstrapAction !== undefined && {
      ScriptBootstrapAction: serializeAws_json1_1ScriptBootstrapActionConfig(
        input.ScriptBootstrapAction,
        context
      )
    })
  };
};

const serializeAws_json1_1BootstrapActionConfigList = (
  input: BootstrapActionConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1BootstrapActionConfig(entry, context)
  );
};

const serializeAws_json1_1CancelStepsInput = (
  input: CancelStepsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.StepCancellationOption !== undefined && {
      StepCancellationOption: input.StepCancellationOption
    }),
    ...(input.StepIds !== undefined && {
      StepIds: serializeAws_json1_1StepIdsList(input.StepIds, context)
    })
  };
};

const serializeAws_json1_1CloudWatchAlarmDefinition = (
  input: CloudWatchAlarmDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_json1_1MetricDimensionList(
        input.Dimensions,
        context
      )
    }),
    ...(input.EvaluationPeriods !== undefined && {
      EvaluationPeriods: input.EvaluationPeriods
    }),
    ...(input.MetricName !== undefined && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && { Namespace: input.Namespace }),
    ...(input.Period !== undefined && { Period: input.Period }),
    ...(input.Statistic !== undefined && { Statistic: input.Statistic }),
    ...(input.Threshold !== undefined && { Threshold: input.Threshold }),
    ...(input.Unit !== undefined && { Unit: input.Unit })
  };
};

const serializeAws_json1_1ClusterStateList = (
  input: (ClusterState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Configuration = (
  input: Configuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification !== undefined && {
      Classification: input.Classification
    }),
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.Properties !== undefined && {
      Properties: serializeAws_json1_1StringMap(input.Properties, context)
    })
  };
};

const serializeAws_json1_1ConfigurationList = (
  input: Configuration[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Configuration(entry, context));
};

const serializeAws_json1_1CreateSecurityConfigurationInput = (
  input: CreateSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SecurityConfiguration !== undefined && {
      SecurityConfiguration: input.SecurityConfiguration
    })
  };
};

const serializeAws_json1_1DeleteSecurityConfigurationInput = (
  input: DeleteSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribeClusterInput = (
  input: DescribeClusterInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId })
  };
};

const serializeAws_json1_1DescribeJobFlowsInput = (
  input: DescribeJobFlowsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedAfter !== undefined && {
      CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000)
    }),
    ...(input.CreatedBefore !== undefined && {
      CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000)
    }),
    ...(input.JobFlowIds !== undefined && {
      JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context)
    }),
    ...(input.JobFlowStates !== undefined && {
      JobFlowStates: serializeAws_json1_1JobFlowExecutionStateList(
        input.JobFlowStates,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeSecurityConfigurationInput = (
  input: DescribeSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribeStepInput = (
  input: DescribeStepInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.StepId !== undefined && { StepId: input.StepId })
  };
};

const serializeAws_json1_1EbsBlockDeviceConfig = (
  input: EbsBlockDeviceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeSpecification !== undefined && {
      VolumeSpecification: serializeAws_json1_1VolumeSpecification(
        input.VolumeSpecification,
        context
      )
    }),
    ...(input.VolumesPerInstance !== undefined && {
      VolumesPerInstance: input.VolumesPerInstance
    })
  };
};

const serializeAws_json1_1EbsBlockDeviceConfigList = (
  input: EbsBlockDeviceConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EbsBlockDeviceConfig(entry, context)
  );
};

const serializeAws_json1_1EbsConfiguration = (
  input: EbsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EbsBlockDeviceConfigs !== undefined && {
      EbsBlockDeviceConfigs: serializeAws_json1_1EbsBlockDeviceConfigList(
        input.EbsBlockDeviceConfigs,
        context
      )
    }),
    ...(input.EbsOptimized !== undefined && {
      EbsOptimized: input.EbsOptimized
    })
  };
};

const serializeAws_json1_1EC2InstanceIdsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1EC2InstanceIdsToTerminateList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (
  input: GetBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1HadoopJarStepConfig = (
  input: HadoopJarStepConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Args !== undefined && {
      Args: serializeAws_json1_1XmlStringList(input.Args, context)
    }),
    ...(input.Jar !== undefined && { Jar: input.Jar }),
    ...(input.MainClass !== undefined && { MainClass: input.MainClass }),
    ...(input.Properties !== undefined && {
      Properties: serializeAws_json1_1KeyValueList(input.Properties, context)
    })
  };
};

const serializeAws_json1_1InstanceFleetConfig = (
  input: InstanceFleetConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceFleetType !== undefined && {
      InstanceFleetType: input.InstanceFleetType
    }),
    ...(input.InstanceTypeConfigs !== undefined && {
      InstanceTypeConfigs: serializeAws_json1_1InstanceTypeConfigList(
        input.InstanceTypeConfigs,
        context
      )
    }),
    ...(input.LaunchSpecifications !== undefined && {
      LaunchSpecifications: serializeAws_json1_1InstanceFleetProvisioningSpecifications(
        input.LaunchSpecifications,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.TargetOnDemandCapacity !== undefined && {
      TargetOnDemandCapacity: input.TargetOnDemandCapacity
    }),
    ...(input.TargetSpotCapacity !== undefined && {
      TargetSpotCapacity: input.TargetSpotCapacity
    })
  };
};

const serializeAws_json1_1InstanceFleetConfigList = (
  input: InstanceFleetConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InstanceFleetConfig(entry, context)
  );
};

const serializeAws_json1_1InstanceFleetModifyConfig = (
  input: InstanceFleetModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceFleetId !== undefined && {
      InstanceFleetId: input.InstanceFleetId
    }),
    ...(input.TargetOnDemandCapacity !== undefined && {
      TargetOnDemandCapacity: input.TargetOnDemandCapacity
    }),
    ...(input.TargetSpotCapacity !== undefined && {
      TargetSpotCapacity: input.TargetSpotCapacity
    })
  };
};

const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  input: InstanceFleetProvisioningSpecifications,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpotSpecification !== undefined && {
      SpotSpecification: serializeAws_json1_1SpotProvisioningSpecification(
        input.SpotSpecification,
        context
      )
    })
  };
};

const serializeAws_json1_1InstanceGroupConfig = (
  input: InstanceGroupConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy !== undefined && {
      AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(
        input.AutoScalingPolicy,
        context
      )
    }),
    ...(input.BidPrice !== undefined && { BidPrice: input.BidPrice }),
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.EbsConfiguration !== undefined && {
      EbsConfiguration: serializeAws_json1_1EbsConfiguration(
        input.EbsConfiguration,
        context
      )
    }),
    ...(input.InstanceCount !== undefined && {
      InstanceCount: input.InstanceCount
    }),
    ...(input.InstanceRole !== undefined && {
      InstanceRole: input.InstanceRole
    }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.Market !== undefined && { Market: input.Market }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1InstanceGroupConfigList = (
  input: InstanceGroupConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InstanceGroupConfig(entry, context)
  );
};

const serializeAws_json1_1InstanceGroupModifyConfig = (
  input: InstanceGroupModifyConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.EC2InstanceIdsToTerminate !== undefined && {
      EC2InstanceIdsToTerminate: serializeAws_json1_1EC2InstanceIdsToTerminateList(
        input.EC2InstanceIdsToTerminate,
        context
      )
    }),
    ...(input.InstanceCount !== undefined && {
      InstanceCount: input.InstanceCount
    }),
    ...(input.InstanceGroupId !== undefined && {
      InstanceGroupId: input.InstanceGroupId
    }),
    ...(input.ShrinkPolicy !== undefined && {
      ShrinkPolicy: serializeAws_json1_1ShrinkPolicy(
        input.ShrinkPolicy,
        context
      )
    })
  };
};

const serializeAws_json1_1InstanceGroupModifyConfigList = (
  input: InstanceGroupModifyConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InstanceGroupModifyConfig(entry, context)
  );
};

const serializeAws_json1_1InstanceGroupTypeList = (
  input: (InstanceGroupType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstanceResizePolicy = (
  input: InstanceResizePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceTerminationTimeout !== undefined && {
      InstanceTerminationTimeout: input.InstanceTerminationTimeout
    }),
    ...(input.InstancesToProtect !== undefined && {
      InstancesToProtect: serializeAws_json1_1EC2InstanceIdsList(
        input.InstancesToProtect,
        context
      )
    }),
    ...(input.InstancesToTerminate !== undefined && {
      InstancesToTerminate: serializeAws_json1_1EC2InstanceIdsList(
        input.InstancesToTerminate,
        context
      )
    })
  };
};

const serializeAws_json1_1InstanceStateList = (
  input: (InstanceState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstanceTypeConfig = (
  input: InstanceTypeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.BidPrice !== undefined && { BidPrice: input.BidPrice }),
    ...(input.BidPriceAsPercentageOfOnDemandPrice !== undefined && {
      BidPriceAsPercentageOfOnDemandPrice:
        input.BidPriceAsPercentageOfOnDemandPrice
    }),
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.EbsConfiguration !== undefined && {
      EbsConfiguration: serializeAws_json1_1EbsConfiguration(
        input.EbsConfiguration,
        context
      )
    }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    }),
    ...(input.WeightedCapacity !== undefined && {
      WeightedCapacity: input.WeightedCapacity
    })
  };
};

const serializeAws_json1_1InstanceTypeConfigList = (
  input: InstanceTypeConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1InstanceTypeConfig(entry, context)
  );
};

const serializeAws_json1_1JobFlowExecutionStateList = (
  input: (JobFlowExecutionState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1JobFlowInstancesConfig = (
  input: JobFlowInstancesConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalMasterSecurityGroups !== undefined && {
      AdditionalMasterSecurityGroups: serializeAws_json1_1SecurityGroupsList(
        input.AdditionalMasterSecurityGroups,
        context
      )
    }),
    ...(input.AdditionalSlaveSecurityGroups !== undefined && {
      AdditionalSlaveSecurityGroups: serializeAws_json1_1SecurityGroupsList(
        input.AdditionalSlaveSecurityGroups,
        context
      )
    }),
    ...(input.Ec2KeyName !== undefined && { Ec2KeyName: input.Ec2KeyName }),
    ...(input.Ec2SubnetId !== undefined && { Ec2SubnetId: input.Ec2SubnetId }),
    ...(input.Ec2SubnetIds !== undefined && {
      Ec2SubnetIds: serializeAws_json1_1XmlStringMaxLen256List(
        input.Ec2SubnetIds,
        context
      )
    }),
    ...(input.EmrManagedMasterSecurityGroup !== undefined && {
      EmrManagedMasterSecurityGroup: input.EmrManagedMasterSecurityGroup
    }),
    ...(input.EmrManagedSlaveSecurityGroup !== undefined && {
      EmrManagedSlaveSecurityGroup: input.EmrManagedSlaveSecurityGroup
    }),
    ...(input.HadoopVersion !== undefined && {
      HadoopVersion: input.HadoopVersion
    }),
    ...(input.InstanceCount !== undefined && {
      InstanceCount: input.InstanceCount
    }),
    ...(input.InstanceFleets !== undefined && {
      InstanceFleets: serializeAws_json1_1InstanceFleetConfigList(
        input.InstanceFleets,
        context
      )
    }),
    ...(input.InstanceGroups !== undefined && {
      InstanceGroups: serializeAws_json1_1InstanceGroupConfigList(
        input.InstanceGroups,
        context
      )
    }),
    ...(input.KeepJobFlowAliveWhenNoSteps !== undefined && {
      KeepJobFlowAliveWhenNoSteps: input.KeepJobFlowAliveWhenNoSteps
    }),
    ...(input.MasterInstanceType !== undefined && {
      MasterInstanceType: input.MasterInstanceType
    }),
    ...(input.Placement !== undefined && {
      Placement: serializeAws_json1_1PlacementType(input.Placement, context)
    }),
    ...(input.ServiceAccessSecurityGroup !== undefined && {
      ServiceAccessSecurityGroup: input.ServiceAccessSecurityGroup
    }),
    ...(input.SlaveInstanceType !== undefined && {
      SlaveInstanceType: input.SlaveInstanceType
    }),
    ...(input.TerminationProtected !== undefined && {
      TerminationProtected: input.TerminationProtected
    })
  };
};

const serializeAws_json1_1KerberosAttributes = (
  input: KerberosAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADDomainJoinPassword !== undefined && {
      ADDomainJoinPassword: input.ADDomainJoinPassword
    }),
    ...(input.ADDomainJoinUser !== undefined && {
      ADDomainJoinUser: input.ADDomainJoinUser
    }),
    ...(input.CrossRealmTrustPrincipalPassword !== undefined && {
      CrossRealmTrustPrincipalPassword: input.CrossRealmTrustPrincipalPassword
    }),
    ...(input.KdcAdminPassword !== undefined && {
      KdcAdminPassword: input.KdcAdminPassword
    }),
    ...(input.Realm !== undefined && { Realm: input.Realm })
  };
};

const serializeAws_json1_1KeyValue = (
  input: KeyValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1KeyValueList = (
  input: KeyValue[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1KeyValue(entry, context));
};

const serializeAws_json1_1ListBootstrapActionsInput = (
  input: ListBootstrapActionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListClustersInput = (
  input: ListClustersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterStates !== undefined && {
      ClusterStates: serializeAws_json1_1ClusterStateList(
        input.ClusterStates,
        context
      )
    }),
    ...(input.CreatedAfter !== undefined && {
      CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000)
    }),
    ...(input.CreatedBefore !== undefined && {
      CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000)
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListInstanceFleetsInput = (
  input: ListInstanceFleetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListInstanceGroupsInput = (
  input: ListInstanceGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListInstancesInput = (
  input: ListInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleetId !== undefined && {
      InstanceFleetId: input.InstanceFleetId
    }),
    ...(input.InstanceFleetType !== undefined && {
      InstanceFleetType: input.InstanceFleetType
    }),
    ...(input.InstanceGroupId !== undefined && {
      InstanceGroupId: input.InstanceGroupId
    }),
    ...(input.InstanceGroupTypes !== undefined && {
      InstanceGroupTypes: serializeAws_json1_1InstanceGroupTypeList(
        input.InstanceGroupTypes,
        context
      )
    }),
    ...(input.InstanceStates !== undefined && {
      InstanceStates: serializeAws_json1_1InstanceStateList(
        input.InstanceStates,
        context
      )
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListSecurityConfigurationsInput = (
  input: ListSecurityConfigurationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker !== undefined && { Marker: input.Marker })
  };
};

const serializeAws_json1_1ListStepsInput = (
  input: ListStepsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.StepIds !== undefined && {
      StepIds: serializeAws_json1_1XmlStringList(input.StepIds, context)
    }),
    ...(input.StepStates !== undefined && {
      StepStates: serializeAws_json1_1StepStateList(input.StepStates, context)
    })
  };
};

const serializeAws_json1_1MetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1MetricDimensionList = (
  input: MetricDimension[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1MetricDimension(entry, context)
  );
};

const serializeAws_json1_1ModifyClusterInput = (
  input: ModifyClusterInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.StepConcurrencyLevel !== undefined && {
      StepConcurrencyLevel: input.StepConcurrencyLevel
    })
  };
};

const serializeAws_json1_1ModifyInstanceFleetInput = (
  input: ModifyInstanceFleetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceFleet !== undefined && {
      InstanceFleet: serializeAws_json1_1InstanceFleetModifyConfig(
        input.InstanceFleet,
        context
      )
    })
  };
};

const serializeAws_json1_1ModifyInstanceGroupsInput = (
  input: ModifyInstanceGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroups !== undefined && {
      InstanceGroups: serializeAws_json1_1InstanceGroupModifyConfigList(
        input.InstanceGroups,
        context
      )
    })
  };
};

const serializeAws_json1_1NewSupportedProductsList = (
  input: SupportedProductConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1SupportedProductConfig(entry, context)
  );
};

const serializeAws_json1_1PlacementType = (
  input: PlacementType,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZone !== undefined && {
      AvailabilityZone: input.AvailabilityZone
    }),
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_json1_1XmlStringMaxLen256List(
        input.AvailabilityZones,
        context
      )
    })
  };
};

const serializeAws_json1_1PortRange = (
  input: PortRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxRange !== undefined && { MaxRange: input.MaxRange }),
    ...(input.MinRange !== undefined && { MinRange: input.MinRange })
  };
};

const serializeAws_json1_1PortRanges = (
  input: PortRange[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PortRange(entry, context));
};

const serializeAws_json1_1PutAutoScalingPolicyInput = (
  input: PutAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingPolicy !== undefined && {
      AutoScalingPolicy: serializeAws_json1_1AutoScalingPolicy(
        input.AutoScalingPolicy,
        context
      )
    }),
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId !== undefined && {
      InstanceGroupId: input.InstanceGroupId
    })
  };
};

const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAccessConfiguration !== undefined && {
      BlockPublicAccessConfiguration: serializeAws_json1_1BlockPublicAccessConfiguration(
        input.BlockPublicAccessConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1RemoveAutoScalingPolicyInput = (
  input: RemoveAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.InstanceGroupId !== undefined && {
      InstanceGroupId: input.InstanceGroupId
    })
  };
};

const serializeAws_json1_1RemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1StringList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1RunJobFlowInput = (
  input: RunJobFlowInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalInfo !== undefined && {
      AdditionalInfo: input.AdditionalInfo
    }),
    ...(input.AmiVersion !== undefined && { AmiVersion: input.AmiVersion }),
    ...(input.Applications !== undefined && {
      Applications: serializeAws_json1_1ApplicationList(
        input.Applications,
        context
      )
    }),
    ...(input.AutoScalingRole !== undefined && {
      AutoScalingRole: input.AutoScalingRole
    }),
    ...(input.BootstrapActions !== undefined && {
      BootstrapActions: serializeAws_json1_1BootstrapActionConfigList(
        input.BootstrapActions,
        context
      )
    }),
    ...(input.Configurations !== undefined && {
      Configurations: serializeAws_json1_1ConfigurationList(
        input.Configurations,
        context
      )
    }),
    ...(input.CustomAmiId !== undefined && { CustomAmiId: input.CustomAmiId }),
    ...(input.EbsRootVolumeSize !== undefined && {
      EbsRootVolumeSize: input.EbsRootVolumeSize
    }),
    ...(input.Instances !== undefined && {
      Instances: serializeAws_json1_1JobFlowInstancesConfig(
        input.Instances,
        context
      )
    }),
    ...(input.JobFlowRole !== undefined && { JobFlowRole: input.JobFlowRole }),
    ...(input.KerberosAttributes !== undefined && {
      KerberosAttributes: serializeAws_json1_1KerberosAttributes(
        input.KerberosAttributes,
        context
      )
    }),
    ...(input.LogUri !== undefined && { LogUri: input.LogUri }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.NewSupportedProducts !== undefined && {
      NewSupportedProducts: serializeAws_json1_1NewSupportedProductsList(
        input.NewSupportedProducts,
        context
      )
    }),
    ...(input.ReleaseLabel !== undefined && {
      ReleaseLabel: input.ReleaseLabel
    }),
    ...(input.RepoUpgradeOnBoot !== undefined && {
      RepoUpgradeOnBoot: input.RepoUpgradeOnBoot
    }),
    ...(input.ScaleDownBehavior !== undefined && {
      ScaleDownBehavior: input.ScaleDownBehavior
    }),
    ...(input.SecurityConfiguration !== undefined && {
      SecurityConfiguration: input.SecurityConfiguration
    }),
    ...(input.ServiceRole !== undefined && { ServiceRole: input.ServiceRole }),
    ...(input.StepConcurrencyLevel !== undefined && {
      StepConcurrencyLevel: input.StepConcurrencyLevel
    }),
    ...(input.Steps !== undefined && {
      Steps: serializeAws_json1_1StepConfigList(input.Steps, context)
    }),
    ...(input.SupportedProducts !== undefined && {
      SupportedProducts: serializeAws_json1_1SupportedProductsList(
        input.SupportedProducts,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.VisibleToAllUsers !== undefined && {
      VisibleToAllUsers: input.VisibleToAllUsers
    })
  };
};

const serializeAws_json1_1ScalingAction = (
  input: ScalingAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Market !== undefined && { Market: input.Market }),
    ...(input.SimpleScalingPolicyConfiguration !== undefined && {
      SimpleScalingPolicyConfiguration: serializeAws_json1_1SimpleScalingPolicyConfiguration(
        input.SimpleScalingPolicyConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1ScalingConstraints = (
  input: ScalingConstraints,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCapacity !== undefined && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && { MinCapacity: input.MinCapacity })
  };
};

const serializeAws_json1_1ScalingRule = (
  input: ScalingRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && {
      Action: serializeAws_json1_1ScalingAction(input.Action, context)
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Trigger !== undefined && {
      Trigger: serializeAws_json1_1ScalingTrigger(input.Trigger, context)
    })
  };
};

const serializeAws_json1_1ScalingRuleList = (
  input: ScalingRule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ScalingRule(entry, context));
};

const serializeAws_json1_1ScalingTrigger = (
  input: ScalingTrigger,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchAlarmDefinition !== undefined && {
      CloudWatchAlarmDefinition: serializeAws_json1_1CloudWatchAlarmDefinition(
        input.CloudWatchAlarmDefinition,
        context
      )
    })
  };
};

const serializeAws_json1_1ScriptBootstrapActionConfig = (
  input: ScriptBootstrapActionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Args !== undefined && {
      Args: serializeAws_json1_1XmlStringList(input.Args, context)
    }),
    ...(input.Path !== undefined && { Path: input.Path })
  };
};

const serializeAws_json1_1SecurityGroupsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SetTerminationProtectionInput = (
  input: SetTerminationProtectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds !== undefined && {
      JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context)
    }),
    ...(input.TerminationProtected !== undefined && {
      TerminationProtected: input.TerminationProtected
    })
  };
};

const serializeAws_json1_1SetVisibleToAllUsersInput = (
  input: SetVisibleToAllUsersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds !== undefined && {
      JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context)
    }),
    ...(input.VisibleToAllUsers !== undefined && {
      VisibleToAllUsers: input.VisibleToAllUsers
    })
  };
};

const serializeAws_json1_1ShrinkPolicy = (
  input: ShrinkPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.DecommissionTimeout !== undefined && {
      DecommissionTimeout: input.DecommissionTimeout
    }),
    ...(input.InstanceResizePolicy !== undefined && {
      InstanceResizePolicy: serializeAws_json1_1InstanceResizePolicy(
        input.InstanceResizePolicy,
        context
      )
    })
  };
};

const serializeAws_json1_1SimpleScalingPolicyConfiguration = (
  input: SimpleScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdjustmentType !== undefined && {
      AdjustmentType: input.AdjustmentType
    }),
    ...(input.CoolDown !== undefined && { CoolDown: input.CoolDown }),
    ...(input.ScalingAdjustment !== undefined && {
      ScalingAdjustment: input.ScalingAdjustment
    })
  };
};

const serializeAws_json1_1SpotProvisioningSpecification = (
  input: SpotProvisioningSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockDurationMinutes !== undefined && {
      BlockDurationMinutes: input.BlockDurationMinutes
    }),
    ...(input.TimeoutAction !== undefined && {
      TimeoutAction: input.TimeoutAction
    }),
    ...(input.TimeoutDurationMinutes !== undefined && {
      TimeoutDurationMinutes: input.TimeoutDurationMinutes
    })
  };
};

const serializeAws_json1_1StepConfig = (
  input: StepConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionOnFailure !== undefined && {
      ActionOnFailure: input.ActionOnFailure
    }),
    ...(input.HadoopJarStep !== undefined && {
      HadoopJarStep: serializeAws_json1_1HadoopJarStepConfig(
        input.HadoopJarStep,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1StepConfigList = (
  input: StepConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1StepConfig(entry, context));
};

const serializeAws_json1_1StepIdsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1StepStateList = (
  input: (StepState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1SupportedProductConfig = (
  input: SupportedProductConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Args !== undefined && {
      Args: serializeAws_json1_1XmlStringList(input.Args, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1SupportedProductsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TerminateJobFlowsInput = (
  input: TerminateJobFlowsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobFlowIds !== undefined && {
      JobFlowIds: serializeAws_json1_1XmlStringList(input.JobFlowIds, context)
    })
  };
};

const serializeAws_json1_1VolumeSpecification = (
  input: VolumeSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Iops !== undefined && { Iops: input.Iops }),
    ...(input.SizeInGB !== undefined && { SizeInGB: input.SizeInGB }),
    ...(input.VolumeType !== undefined && { VolumeType: input.VolumeType })
  };
};

const serializeAws_json1_1XmlStringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1XmlStringMaxLen256List = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1AddInstanceFleetOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceFleetOutput => {
  return {
    __type: "AddInstanceFleetOutput",
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    InstanceFleetId:
      output.InstanceFleetId !== undefined && output.InstanceFleetId !== null
        ? output.InstanceFleetId
        : undefined
  } as any;
};

const deserializeAws_json1_1AddInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceGroupsOutput => {
  return {
    __type: "AddInstanceGroupsOutput",
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    InstanceGroupIds:
      output.InstanceGroupIds !== undefined && output.InstanceGroupIds !== null
        ? deserializeAws_json1_1InstanceGroupIdsList(
            output.InstanceGroupIds,
            context
          )
        : undefined,
    JobFlowId:
      output.JobFlowId !== undefined && output.JobFlowId !== null
        ? output.JobFlowId
        : undefined
  } as any;
};

const deserializeAws_json1_1AddJobFlowStepsOutput = (
  output: any,
  context: __SerdeContext
): AddJobFlowStepsOutput => {
  return {
    __type: "AddJobFlowStepsOutput",
    StepIds:
      output.StepIds !== undefined && output.StepIds !== null
        ? deserializeAws_json1_1StepIdsList(output.StepIds, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  return {
    __type: "AddTagsOutput"
  } as any;
};

const deserializeAws_json1_1Application = (
  output: any,
  context: __SerdeContext
): Application => {
  return {
    __type: "Application",
    AdditionalInfo:
      output.AdditionalInfo !== undefined && output.AdditionalInfo !== null
        ? deserializeAws_json1_1StringMap(output.AdditionalInfo, context)
        : undefined,
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationList = (
  output: any,
  context: __SerdeContext
): Application[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Application(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  return {
    __type: "AutoScalingPolicyDescription",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStateChangeReason => {
  return {
    __type: "AutoScalingPolicyStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoScalingPolicyStatus = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStatus => {
  return {
    __type: "AutoScalingPolicyStatus",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1AutoScalingPolicyStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfiguration = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfiguration => {
  return {
    __type: "BlockPublicAccessConfiguration",
    BlockPublicSecurityGroupRules:
      output.BlockPublicSecurityGroupRules !== undefined &&
      output.BlockPublicSecurityGroupRules !== null
        ? output.BlockPublicSecurityGroupRules
        : undefined,
    Classification:
      output.Classification !== undefined && output.Classification !== null
        ? output.Classification
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.Configurations,
            context
          )
        : undefined,
    PermittedPublicSecurityGroupRuleRanges:
      output.PermittedPublicSecurityGroupRuleRanges !== undefined &&
      output.PermittedPublicSecurityGroupRuleRanges !== null
        ? deserializeAws_json1_1PortRanges(
            output.PermittedPublicSecurityGroupRuleRanges,
            context
          )
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfigurationMetadata => {
  return {
    __type: "BlockPublicAccessConfigurationMetadata",
    CreatedByArn:
      output.CreatedByArn !== undefined && output.CreatedByArn !== null
        ? output.CreatedByArn
        : undefined,
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1BootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): BootstrapActionConfig => {
  return {
    __type: "BootstrapActionConfig",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ScriptBootstrapAction:
      output.ScriptBootstrapAction !== undefined &&
      output.ScriptBootstrapAction !== null
        ? deserializeAws_json1_1ScriptBootstrapActionConfig(
            output.ScriptBootstrapAction,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetail = (
  output: any,
  context: __SerdeContext
): BootstrapActionDetail => {
  return {
    __type: "BootstrapActionDetail",
    BootstrapActionConfig:
      output.BootstrapActionConfig !== undefined &&
      output.BootstrapActionConfig !== null
        ? deserializeAws_json1_1BootstrapActionConfig(
            output.BootstrapActionConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BootstrapActionDetailList = (
  output: any,
  context: __SerdeContext
): BootstrapActionDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BootstrapActionDetail(entry, context)
  );
};

const deserializeAws_json1_1CancelStepsInfo = (
  output: any,
  context: __SerdeContext
): CancelStepsInfo => {
  return {
    __type: "CancelStepsInfo",
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StepId:
      output.StepId !== undefined && output.StepId !== null
        ? output.StepId
        : undefined
  } as any;
};

const deserializeAws_json1_1CancelStepsInfoList = (
  output: any,
  context: __SerdeContext
): CancelStepsInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CancelStepsInfo(entry, context)
  );
};

const deserializeAws_json1_1CancelStepsOutput = (
  output: any,
  context: __SerdeContext
): CancelStepsOutput => {
  return {
    __type: "CancelStepsOutput",
    CancelStepsInfoList:
      output.CancelStepsInfoList !== undefined &&
      output.CancelStepsInfoList !== null
        ? deserializeAws_json1_1CancelStepsInfoList(
            output.CancelStepsInfoList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudWatchAlarmDefinition = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmDefinition => {
  return {
    __type: "CloudWatchAlarmDefinition",
    ComparisonOperator:
      output.ComparisonOperator !== undefined &&
      output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensionList(output.Dimensions, context)
        : undefined,
    EvaluationPeriods:
      output.EvaluationPeriods !== undefined &&
      output.EvaluationPeriods !== null
        ? output.EvaluationPeriods
        : undefined,
    MetricName:
      output.MetricName !== undefined && output.MetricName !== null
        ? output.MetricName
        : undefined,
    Namespace:
      output.Namespace !== undefined && output.Namespace !== null
        ? output.Namespace
        : undefined,
    Period:
      output.Period !== undefined && output.Period !== null
        ? output.Period
        : undefined,
    Statistic:
      output.Statistic !== undefined && output.Statistic !== null
        ? output.Statistic
        : undefined,
    Threshold:
      output.Threshold !== undefined && output.Threshold !== null
        ? output.Threshold
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  return {
    __type: "Cluster",
    Applications:
      output.Applications !== undefined && output.Applications !== null
        ? deserializeAws_json1_1ApplicationList(output.Applications, context)
        : undefined,
    AutoScalingRole:
      output.AutoScalingRole !== undefined && output.AutoScalingRole !== null
        ? output.AutoScalingRole
        : undefined,
    AutoTerminate:
      output.AutoTerminate !== undefined && output.AutoTerminate !== null
        ? output.AutoTerminate
        : undefined,
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.Configurations,
            context
          )
        : undefined,
    CustomAmiId:
      output.CustomAmiId !== undefined && output.CustomAmiId !== null
        ? output.CustomAmiId
        : undefined,
    EbsRootVolumeSize:
      output.EbsRootVolumeSize !== undefined &&
      output.EbsRootVolumeSize !== null
        ? output.EbsRootVolumeSize
        : undefined,
    Ec2InstanceAttributes:
      output.Ec2InstanceAttributes !== undefined &&
      output.Ec2InstanceAttributes !== null
        ? deserializeAws_json1_1Ec2InstanceAttributes(
            output.Ec2InstanceAttributes,
            context
          )
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceCollectionType:
      output.InstanceCollectionType !== undefined &&
      output.InstanceCollectionType !== null
        ? output.InstanceCollectionType
        : undefined,
    KerberosAttributes:
      output.KerberosAttributes !== undefined &&
      output.KerberosAttributes !== null
        ? deserializeAws_json1_1KerberosAttributes(
            output.KerberosAttributes,
            context
          )
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    MasterPublicDnsName:
      output.MasterPublicDnsName !== undefined &&
      output.MasterPublicDnsName !== null
        ? output.MasterPublicDnsName
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined &&
      output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    OutpostArn:
      output.OutpostArn !== undefined && output.OutpostArn !== null
        ? output.OutpostArn
        : undefined,
    ReleaseLabel:
      output.ReleaseLabel !== undefined && output.ReleaseLabel !== null
        ? output.ReleaseLabel
        : undefined,
    RepoUpgradeOnBoot:
      output.RepoUpgradeOnBoot !== undefined &&
      output.RepoUpgradeOnBoot !== null
        ? output.RepoUpgradeOnBoot
        : undefined,
    RequestedAmiVersion:
      output.RequestedAmiVersion !== undefined &&
      output.RequestedAmiVersion !== null
        ? output.RequestedAmiVersion
        : undefined,
    RunningAmiVersion:
      output.RunningAmiVersion !== undefined &&
      output.RunningAmiVersion !== null
        ? output.RunningAmiVersion
        : undefined,
    ScaleDownBehavior:
      output.ScaleDownBehavior !== undefined &&
      output.ScaleDownBehavior !== null
        ? output.ScaleDownBehavior
        : undefined,
    SecurityConfiguration:
      output.SecurityConfiguration !== undefined &&
      output.SecurityConfiguration !== null
        ? output.SecurityConfiguration
        : undefined,
    ServiceRole:
      output.ServiceRole !== undefined && output.ServiceRole !== null
        ? output.ServiceRole
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1ClusterStatus(output.Status, context)
        : undefined,
    StepConcurrencyLevel:
      output.StepConcurrencyLevel !== undefined &&
      output.StepConcurrencyLevel !== null
        ? output.StepConcurrencyLevel
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    TerminationProtected:
      output.TerminationProtected !== undefined &&
      output.TerminationProtected !== null
        ? output.TerminationProtected
        : undefined,
    VisibleToAllUsers:
      output.VisibleToAllUsers !== undefined &&
      output.VisibleToAllUsers !== null
        ? output.VisibleToAllUsers
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterStateChangeReason = (
  output: any,
  context: __SerdeContext
): ClusterStateChangeReason => {
  return {
    __type: "ClusterStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterStatus = (
  output: any,
  context: __SerdeContext
): ClusterStatus => {
  return {
    __type: "ClusterStatus",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1ClusterStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1ClusterTimeline(output.Timeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterSummary = (
  output: any,
  context: __SerdeContext
): ClusterSummary => {
  return {
    __type: "ClusterSummary",
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined &&
      output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    OutpostArn:
      output.OutpostArn !== undefined && output.OutpostArn !== null
        ? output.OutpostArn
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1ClusterStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterSummaryList = (
  output: any,
  context: __SerdeContext
): ClusterSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterSummary(entry, context)
  );
};

const deserializeAws_json1_1ClusterTimeline = (
  output: any,
  context: __SerdeContext
): ClusterTimeline => {
  return {
    __type: "ClusterTimeline",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1Command = (
  output: any,
  context: __SerdeContext
): Command => {
  return {
    __type: "Command",
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ScriptPath:
      output.ScriptPath !== undefined && output.ScriptPath !== null
        ? output.ScriptPath
        : undefined
  } as any;
};

const deserializeAws_json1_1CommandList = (
  output: any,
  context: __SerdeContext
): Command[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Command(entry, context)
  );
};

const deserializeAws_json1_1Configuration = (
  output: any,
  context: __SerdeContext
): Configuration => {
  return {
    __type: "Configuration",
    Classification:
      output.Classification !== undefined && output.Classification !== null
        ? output.Classification
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.Configurations,
            context
          )
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ConfigurationList = (
  output: any,
  context: __SerdeContext
): Configuration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Configuration(entry, context)
  );
};

const deserializeAws_json1_1CreateSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationOutput => {
  return {
    __type: "CreateSecurityConfigurationOutput",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationOutput => {
  return {
    __type: "DeleteSecurityConfigurationOutput"
  } as any;
};

const deserializeAws_json1_1DescribeClusterOutput = (
  output: any,
  context: __SerdeContext
): DescribeClusterOutput => {
  return {
    __type: "DescribeClusterOutput",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeJobFlowsOutput = (
  output: any,
  context: __SerdeContext
): DescribeJobFlowsOutput => {
  return {
    __type: "DescribeJobFlowsOutput",
    JobFlows:
      output.JobFlows !== undefined && output.JobFlows !== null
        ? deserializeAws_json1_1JobFlowDetailList(output.JobFlows, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeSecurityConfigurationOutput => {
  return {
    __type: "DescribeSecurityConfigurationOutput",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SecurityConfiguration:
      output.SecurityConfiguration !== undefined &&
      output.SecurityConfiguration !== null
        ? output.SecurityConfiguration
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeStepOutput = (
  output: any,
  context: __SerdeContext
): DescribeStepOutput => {
  return {
    __type: "DescribeStepOutput",
    Step:
      output.Step !== undefined && output.Step !== null
        ? deserializeAws_json1_1Step(output.Step, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EbsBlockDevice = (
  output: any,
  context: __SerdeContext
): EbsBlockDevice => {
  return {
    __type: "EbsBlockDevice",
    Device:
      output.Device !== undefined && output.Device !== null
        ? output.Device
        : undefined,
    VolumeSpecification:
      output.VolumeSpecification !== undefined &&
      output.VolumeSpecification !== null
        ? deserializeAws_json1_1VolumeSpecification(
            output.VolumeSpecification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1EbsBlockDeviceList = (
  output: any,
  context: __SerdeContext
): EbsBlockDevice[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EbsBlockDevice(entry, context)
  );
};

const deserializeAws_json1_1EbsVolume = (
  output: any,
  context: __SerdeContext
): EbsVolume => {
  return {
    __type: "EbsVolume",
    Device:
      output.Device !== undefined && output.Device !== null
        ? output.Device
        : undefined,
    VolumeId:
      output.VolumeId !== undefined && output.VolumeId !== null
        ? output.VolumeId
        : undefined
  } as any;
};

const deserializeAws_json1_1EbsVolumeList = (
  output: any,
  context: __SerdeContext
): EbsVolume[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EbsVolume(entry, context)
  );
};

const deserializeAws_json1_1Ec2InstanceAttributes = (
  output: any,
  context: __SerdeContext
): Ec2InstanceAttributes => {
  return {
    __type: "Ec2InstanceAttributes",
    AdditionalMasterSecurityGroups:
      output.AdditionalMasterSecurityGroups !== undefined &&
      output.AdditionalMasterSecurityGroups !== null
        ? deserializeAws_json1_1StringList(
            output.AdditionalMasterSecurityGroups,
            context
          )
        : undefined,
    AdditionalSlaveSecurityGroups:
      output.AdditionalSlaveSecurityGroups !== undefined &&
      output.AdditionalSlaveSecurityGroups !== null
        ? deserializeAws_json1_1StringList(
            output.AdditionalSlaveSecurityGroups,
            context
          )
        : undefined,
    Ec2AvailabilityZone:
      output.Ec2AvailabilityZone !== undefined &&
      output.Ec2AvailabilityZone !== null
        ? output.Ec2AvailabilityZone
        : undefined,
    Ec2KeyName:
      output.Ec2KeyName !== undefined && output.Ec2KeyName !== null
        ? output.Ec2KeyName
        : undefined,
    Ec2SubnetId:
      output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null
        ? output.Ec2SubnetId
        : undefined,
    EmrManagedMasterSecurityGroup:
      output.EmrManagedMasterSecurityGroup !== undefined &&
      output.EmrManagedMasterSecurityGroup !== null
        ? output.EmrManagedMasterSecurityGroup
        : undefined,
    EmrManagedSlaveSecurityGroup:
      output.EmrManagedSlaveSecurityGroup !== undefined &&
      output.EmrManagedSlaveSecurityGroup !== null
        ? output.EmrManagedSlaveSecurityGroup
        : undefined,
    IamInstanceProfile:
      output.IamInstanceProfile !== undefined &&
      output.IamInstanceProfile !== null
        ? output.IamInstanceProfile
        : undefined,
    RequestedEc2AvailabilityZones:
      output.RequestedEc2AvailabilityZones !== undefined &&
      output.RequestedEc2AvailabilityZones !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(
            output.RequestedEc2AvailabilityZones,
            context
          )
        : undefined,
    RequestedEc2SubnetIds:
      output.RequestedEc2SubnetIds !== undefined &&
      output.RequestedEc2SubnetIds !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(
            output.RequestedEc2SubnetIds,
            context
          )
        : undefined,
    ServiceAccessSecurityGroup:
      output.ServiceAccessSecurityGroup !== undefined &&
      output.ServiceAccessSecurityGroup !== null
        ? output.ServiceAccessSecurityGroup
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2InstanceIdsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FailureDetails = (
  output: any,
  context: __SerdeContext
): FailureDetails => {
  return {
    __type: "FailureDetails",
    LogFile:
      output.LogFile !== undefined && output.LogFile !== null
        ? output.LogFile
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined
  } as any;
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  return {
    __type: "GetBlockPublicAccessConfigurationOutput",
    BlockPublicAccessConfiguration:
      output.BlockPublicAccessConfiguration !== undefined &&
      output.BlockPublicAccessConfiguration !== null
        ? deserializeAws_json1_1BlockPublicAccessConfiguration(
            output.BlockPublicAccessConfiguration,
            context
          )
        : undefined,
    BlockPublicAccessConfigurationMetadata:
      output.BlockPublicAccessConfigurationMetadata !== undefined &&
      output.BlockPublicAccessConfigurationMetadata !== null
        ? deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(
            output.BlockPublicAccessConfigurationMetadata,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1HadoopJarStepConfig = (
  output: any,
  context: __SerdeContext
): HadoopJarStepConfig => {
  return {
    __type: "HadoopJarStepConfig",
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1XmlStringList(output.Args, context)
        : undefined,
    Jar:
      output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
    MainClass:
      output.MainClass !== undefined && output.MainClass !== null
        ? output.MainClass
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1KeyValueList(output.Properties, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1HadoopStepConfig = (
  output: any,
  context: __SerdeContext
): HadoopStepConfig => {
  return {
    __type: "HadoopStepConfig",
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1StringList(output.Args, context)
        : undefined,
    Jar:
      output.Jar !== undefined && output.Jar !== null ? output.Jar : undefined,
    MainClass:
      output.MainClass !== undefined && output.MainClass !== null
        ? output.MainClass
        : undefined,
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1StringMap(output.Properties, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Instance = (
  output: any,
  context: __SerdeContext
): Instance => {
  return {
    __type: "Instance",
    EbsVolumes:
      output.EbsVolumes !== undefined && output.EbsVolumes !== null
        ? deserializeAws_json1_1EbsVolumeList(output.EbsVolumes, context)
        : undefined,
    Ec2InstanceId:
      output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null
        ? output.Ec2InstanceId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceFleetId:
      output.InstanceFleetId !== undefined && output.InstanceFleetId !== null
        ? output.InstanceFleetId
        : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null
        ? output.InstanceGroupId
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    Market:
      output.Market !== undefined && output.Market !== null
        ? output.Market
        : undefined,
    PrivateDnsName:
      output.PrivateDnsName !== undefined && output.PrivateDnsName !== null
        ? output.PrivateDnsName
        : undefined,
    PrivateIpAddress:
      output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null
        ? output.PrivateIpAddress
        : undefined,
    PublicDnsName:
      output.PublicDnsName !== undefined && output.PublicDnsName !== null
        ? output.PublicDnsName
        : undefined,
    PublicIpAddress:
      output.PublicIpAddress !== undefined && output.PublicIpAddress !== null
        ? output.PublicIpAddress
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceFleet = (
  output: any,
  context: __SerdeContext
): InstanceFleet => {
  return {
    __type: "InstanceFleet",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceFleetType:
      output.InstanceFleetType !== undefined &&
      output.InstanceFleetType !== null
        ? output.InstanceFleetType
        : undefined,
    InstanceTypeSpecifications:
      output.InstanceTypeSpecifications !== undefined &&
      output.InstanceTypeSpecifications !== null
        ? deserializeAws_json1_1InstanceTypeSpecificationList(
            output.InstanceTypeSpecifications,
            context
          )
        : undefined,
    LaunchSpecifications:
      output.LaunchSpecifications !== undefined &&
      output.LaunchSpecifications !== null
        ? deserializeAws_json1_1InstanceFleetProvisioningSpecifications(
            output.LaunchSpecifications,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ProvisionedOnDemandCapacity:
      output.ProvisionedOnDemandCapacity !== undefined &&
      output.ProvisionedOnDemandCapacity !== null
        ? output.ProvisionedOnDemandCapacity
        : undefined,
    ProvisionedSpotCapacity:
      output.ProvisionedSpotCapacity !== undefined &&
      output.ProvisionedSpotCapacity !== null
        ? output.ProvisionedSpotCapacity
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceFleetStatus(output.Status, context)
        : undefined,
    TargetOnDemandCapacity:
      output.TargetOnDemandCapacity !== undefined &&
      output.TargetOnDemandCapacity !== null
        ? output.TargetOnDemandCapacity
        : undefined,
    TargetSpotCapacity:
      output.TargetSpotCapacity !== undefined &&
      output.TargetSpotCapacity !== null
        ? output.TargetSpotCapacity
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceFleetList = (
  output: any,
  context: __SerdeContext
): InstanceFleet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceFleet(entry, context)
  );
};

const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetProvisioningSpecifications => {
  return {
    __type: "InstanceFleetProvisioningSpecifications",
    SpotSpecification:
      output.SpotSpecification !== undefined &&
      output.SpotSpecification !== null
        ? deserializeAws_json1_1SpotProvisioningSpecification(
            output.SpotSpecification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceFleetStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceFleetStateChangeReason => {
  return {
    __type: "InstanceFleetStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceFleetStatus = (
  output: any,
  context: __SerdeContext
): InstanceFleetStatus => {
  return {
    __type: "InstanceFleetStatus",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceFleetStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceFleetTimeline(output.Timeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceFleetTimeline = (
  output: any,
  context: __SerdeContext
): InstanceFleetTimeline => {
  return {
    __type: "InstanceFleetTimeline",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceGroup = (
  output: any,
  context: __SerdeContext
): InstanceGroup => {
  return {
    __type: "InstanceGroup",
    AutoScalingPolicy:
      output.AutoScalingPolicy !== undefined &&
      output.AutoScalingPolicy !== null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(
            output.AutoScalingPolicy,
            context
          )
        : undefined,
    BidPrice:
      output.BidPrice !== undefined && output.BidPrice !== null
        ? output.BidPrice
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.Configurations,
            context
          )
        : undefined,
    ConfigurationsVersion:
      output.ConfigurationsVersion !== undefined &&
      output.ConfigurationsVersion !== null
        ? output.ConfigurationsVersion
        : undefined,
    EbsBlockDevices:
      output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
        ? deserializeAws_json1_1EbsBlockDeviceList(
            output.EbsBlockDevices,
            context
          )
        : undefined,
    EbsOptimized:
      output.EbsOptimized !== undefined && output.EbsOptimized !== null
        ? output.EbsOptimized
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceGroupType:
      output.InstanceGroupType !== undefined &&
      output.InstanceGroupType !== null
        ? output.InstanceGroupType
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    LastSuccessfullyAppliedConfigurations:
      output.LastSuccessfullyAppliedConfigurations !== undefined &&
      output.LastSuccessfullyAppliedConfigurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.LastSuccessfullyAppliedConfigurations,
            context
          )
        : undefined,
    LastSuccessfullyAppliedConfigurationsVersion:
      output.LastSuccessfullyAppliedConfigurationsVersion !== undefined &&
      output.LastSuccessfullyAppliedConfigurationsVersion !== null
        ? output.LastSuccessfullyAppliedConfigurationsVersion
        : undefined,
    Market:
      output.Market !== undefined && output.Market !== null
        ? output.Market
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RequestedInstanceCount:
      output.RequestedInstanceCount !== undefined &&
      output.RequestedInstanceCount !== null
        ? output.RequestedInstanceCount
        : undefined,
    RunningInstanceCount:
      output.RunningInstanceCount !== undefined &&
      output.RunningInstanceCount !== null
        ? output.RunningInstanceCount
        : undefined,
    ShrinkPolicy:
      output.ShrinkPolicy !== undefined && output.ShrinkPolicy !== null
        ? deserializeAws_json1_1ShrinkPolicy(output.ShrinkPolicy, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceGroupStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceGroupDetail = (
  output: any,
  context: __SerdeContext
): InstanceGroupDetail => {
  return {
    __type: "InstanceGroupDetail",
    BidPrice:
      output.BidPrice !== undefined && output.BidPrice !== null
        ? output.BidPrice
        : undefined,
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null
        ? output.InstanceGroupId
        : undefined,
    InstanceRequestCount:
      output.InstanceRequestCount !== undefined &&
      output.InstanceRequestCount !== null
        ? output.InstanceRequestCount
        : undefined,
    InstanceRole:
      output.InstanceRole !== undefined && output.InstanceRole !== null
        ? output.InstanceRole
        : undefined,
    InstanceRunningCount:
      output.InstanceRunningCount !== undefined &&
      output.InstanceRunningCount !== null
        ? output.InstanceRunningCount
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined &&
      output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    Market:
      output.Market !== undefined && output.Market !== null
        ? output.Market
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ReadyDateTime:
      output.ReadyDateTime !== undefined && output.ReadyDateTime !== null
        ? new Date(Math.round(output.ReadyDateTime * 1000))
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceGroupDetailList = (
  output: any,
  context: __SerdeContext
): InstanceGroupDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceGroupDetail(entry, context)
  );
};

const deserializeAws_json1_1InstanceGroupIdsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceGroupList = (
  output: any,
  context: __SerdeContext
): InstanceGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceGroup(entry, context)
  );
};

const deserializeAws_json1_1InstanceGroupStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceGroupStateChangeReason => {
  return {
    __type: "InstanceGroupStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceGroupStatus = (
  output: any,
  context: __SerdeContext
): InstanceGroupStatus => {
  return {
    __type: "InstanceGroupStatus",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceGroupStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceGroupTimeline(output.Timeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceGroupTimeline = (
  output: any,
  context: __SerdeContext
): InstanceGroupTimeline => {
  return {
    __type: "InstanceGroupTimeline",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceList = (
  output: any,
  context: __SerdeContext
): Instance[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Instance(entry, context)
  );
};

const deserializeAws_json1_1InstanceResizePolicy = (
  output: any,
  context: __SerdeContext
): InstanceResizePolicy => {
  return {
    __type: "InstanceResizePolicy",
    InstanceTerminationTimeout:
      output.InstanceTerminationTimeout !== undefined &&
      output.InstanceTerminationTimeout !== null
        ? output.InstanceTerminationTimeout
        : undefined,
    InstancesToProtect:
      output.InstancesToProtect !== undefined &&
      output.InstancesToProtect !== null
        ? deserializeAws_json1_1EC2InstanceIdsList(
            output.InstancesToProtect,
            context
          )
        : undefined,
    InstancesToTerminate:
      output.InstancesToTerminate !== undefined &&
      output.InstancesToTerminate !== null
        ? deserializeAws_json1_1EC2InstanceIdsList(
            output.InstancesToTerminate,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceStateChangeReason => {
  return {
    __type: "InstanceStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceStatus = (
  output: any,
  context: __SerdeContext
): InstanceStatus => {
  return {
    __type: "InstanceStatus",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1InstanceStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1InstanceTimeline(output.Timeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceTimeline = (
  output: any,
  context: __SerdeContext
): InstanceTimeline => {
  return {
    __type: "InstanceTimeline",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceTypeSpecification = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification => {
  return {
    __type: "InstanceTypeSpecification",
    BidPrice:
      output.BidPrice !== undefined && output.BidPrice !== null
        ? output.BidPrice
        : undefined,
    BidPriceAsPercentageOfOnDemandPrice:
      output.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
      output.BidPriceAsPercentageOfOnDemandPrice !== null
        ? output.BidPriceAsPercentageOfOnDemandPrice
        : undefined,
    Configurations:
      output.Configurations !== undefined && output.Configurations !== null
        ? deserializeAws_json1_1ConfigurationList(
            output.Configurations,
            context
          )
        : undefined,
    EbsBlockDevices:
      output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null
        ? deserializeAws_json1_1EbsBlockDeviceList(
            output.EbsBlockDevices,
            context
          )
        : undefined,
    EbsOptimized:
      output.EbsOptimized !== undefined && output.EbsOptimized !== null
        ? output.EbsOptimized
        : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    WeightedCapacity:
      output.WeightedCapacity !== undefined && output.WeightedCapacity !== null
        ? output.WeightedCapacity
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceTypeSpecificationList = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceTypeSpecification(entry, context)
  );
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  return {
    __type: "InternalServerError"
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1JobFlowDetail = (
  output: any,
  context: __SerdeContext
): JobFlowDetail => {
  return {
    __type: "JobFlowDetail",
    AmiVersion:
      output.AmiVersion !== undefined && output.AmiVersion !== null
        ? output.AmiVersion
        : undefined,
    AutoScalingRole:
      output.AutoScalingRole !== undefined && output.AutoScalingRole !== null
        ? output.AutoScalingRole
        : undefined,
    BootstrapActions:
      output.BootstrapActions !== undefined && output.BootstrapActions !== null
        ? deserializeAws_json1_1BootstrapActionDetailList(
            output.BootstrapActions,
            context
          )
        : undefined,
    ExecutionStatusDetail:
      output.ExecutionStatusDetail !== undefined &&
      output.ExecutionStatusDetail !== null
        ? deserializeAws_json1_1JobFlowExecutionStatusDetail(
            output.ExecutionStatusDetail,
            context
          )
        : undefined,
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1JobFlowInstancesDetail(
            output.Instances,
            context
          )
        : undefined,
    JobFlowId:
      output.JobFlowId !== undefined && output.JobFlowId !== null
        ? output.JobFlowId
        : undefined,
    JobFlowRole:
      output.JobFlowRole !== undefined && output.JobFlowRole !== null
        ? output.JobFlowRole
        : undefined,
    LogUri:
      output.LogUri !== undefined && output.LogUri !== null
        ? output.LogUri
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ScaleDownBehavior:
      output.ScaleDownBehavior !== undefined &&
      output.ScaleDownBehavior !== null
        ? output.ScaleDownBehavior
        : undefined,
    ServiceRole:
      output.ServiceRole !== undefined && output.ServiceRole !== null
        ? output.ServiceRole
        : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1StepDetailList(output.Steps, context)
        : undefined,
    SupportedProducts:
      output.SupportedProducts !== undefined &&
      output.SupportedProducts !== null
        ? deserializeAws_json1_1SupportedProductsList(
            output.SupportedProducts,
            context
          )
        : undefined,
    VisibleToAllUsers:
      output.VisibleToAllUsers !== undefined &&
      output.VisibleToAllUsers !== null
        ? output.VisibleToAllUsers
        : undefined
  } as any;
};

const deserializeAws_json1_1JobFlowDetailList = (
  output: any,
  context: __SerdeContext
): JobFlowDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobFlowDetail(entry, context)
  );
};

const deserializeAws_json1_1JobFlowExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): JobFlowExecutionStatusDetail => {
  return {
    __type: "JobFlowExecutionStatusDetail",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined &&
      output.LastStateChangeReason !== null
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
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1JobFlowInstancesDetail = (
  output: any,
  context: __SerdeContext
): JobFlowInstancesDetail => {
  return {
    __type: "JobFlowInstancesDetail",
    Ec2KeyName:
      output.Ec2KeyName !== undefined && output.Ec2KeyName !== null
        ? output.Ec2KeyName
        : undefined,
    Ec2SubnetId:
      output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null
        ? output.Ec2SubnetId
        : undefined,
    HadoopVersion:
      output.HadoopVersion !== undefined && output.HadoopVersion !== null
        ? output.HadoopVersion
        : undefined,
    InstanceCount:
      output.InstanceCount !== undefined && output.InstanceCount !== null
        ? output.InstanceCount
        : undefined,
    InstanceGroups:
      output.InstanceGroups !== undefined && output.InstanceGroups !== null
        ? deserializeAws_json1_1InstanceGroupDetailList(
            output.InstanceGroups,
            context
          )
        : undefined,
    KeepJobFlowAliveWhenNoSteps:
      output.KeepJobFlowAliveWhenNoSteps !== undefined &&
      output.KeepJobFlowAliveWhenNoSteps !== null
        ? output.KeepJobFlowAliveWhenNoSteps
        : undefined,
    MasterInstanceId:
      output.MasterInstanceId !== undefined && output.MasterInstanceId !== null
        ? output.MasterInstanceId
        : undefined,
    MasterInstanceType:
      output.MasterInstanceType !== undefined &&
      output.MasterInstanceType !== null
        ? output.MasterInstanceType
        : undefined,
    MasterPublicDnsName:
      output.MasterPublicDnsName !== undefined &&
      output.MasterPublicDnsName !== null
        ? output.MasterPublicDnsName
        : undefined,
    NormalizedInstanceHours:
      output.NormalizedInstanceHours !== undefined &&
      output.NormalizedInstanceHours !== null
        ? output.NormalizedInstanceHours
        : undefined,
    Placement:
      output.Placement !== undefined && output.Placement !== null
        ? deserializeAws_json1_1PlacementType(output.Placement, context)
        : undefined,
    SlaveInstanceType:
      output.SlaveInstanceType !== undefined &&
      output.SlaveInstanceType !== null
        ? output.SlaveInstanceType
        : undefined,
    TerminationProtected:
      output.TerminationProtected !== undefined &&
      output.TerminationProtected !== null
        ? output.TerminationProtected
        : undefined
  } as any;
};

const deserializeAws_json1_1KerberosAttributes = (
  output: any,
  context: __SerdeContext
): KerberosAttributes => {
  return {
    __type: "KerberosAttributes",
    ADDomainJoinPassword:
      output.ADDomainJoinPassword !== undefined &&
      output.ADDomainJoinPassword !== null
        ? output.ADDomainJoinPassword
        : undefined,
    ADDomainJoinUser:
      output.ADDomainJoinUser !== undefined && output.ADDomainJoinUser !== null
        ? output.ADDomainJoinUser
        : undefined,
    CrossRealmTrustPrincipalPassword:
      output.CrossRealmTrustPrincipalPassword !== undefined &&
      output.CrossRealmTrustPrincipalPassword !== null
        ? output.CrossRealmTrustPrincipalPassword
        : undefined,
    KdcAdminPassword:
      output.KdcAdminPassword !== undefined && output.KdcAdminPassword !== null
        ? output.KdcAdminPassword
        : undefined,
    Realm:
      output.Realm !== undefined && output.Realm !== null
        ? output.Realm
        : undefined
  } as any;
};

const deserializeAws_json1_1KeyValue = (
  output: any,
  context: __SerdeContext
): KeyValue => {
  return {
    __type: "KeyValue",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1KeyValueList = (
  output: any,
  context: __SerdeContext
): KeyValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValue(entry, context)
  );
};

const deserializeAws_json1_1ListBootstrapActionsOutput = (
  output: any,
  context: __SerdeContext
): ListBootstrapActionsOutput => {
  return {
    __type: "ListBootstrapActionsOutput",
    BootstrapActions:
      output.BootstrapActions !== undefined && output.BootstrapActions !== null
        ? deserializeAws_json1_1CommandList(output.BootstrapActions, context)
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListClustersOutput = (
  output: any,
  context: __SerdeContext
): ListClustersOutput => {
  return {
    __type: "ListClustersOutput",
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1ClusterSummaryList(output.Clusters, context)
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListInstanceFleetsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceFleetsOutput => {
  return {
    __type: "ListInstanceFleetsOutput",
    InstanceFleets:
      output.InstanceFleets !== undefined && output.InstanceFleets !== null
        ? deserializeAws_json1_1InstanceFleetList(
            output.InstanceFleets,
            context
          )
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceGroupsOutput => {
  return {
    __type: "ListInstanceGroupsOutput",
    InstanceGroups:
      output.InstanceGroups !== undefined && output.InstanceGroups !== null
        ? deserializeAws_json1_1InstanceGroupList(
            output.InstanceGroups,
            context
          )
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListInstancesOutput => {
  return {
    __type: "ListInstancesOutput",
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1InstanceList(output.Instances, context)
        : undefined,
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  return {
    __type: "ListSecurityConfigurationsOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    SecurityConfigurations:
      output.SecurityConfigurations !== undefined &&
      output.SecurityConfigurations !== null
        ? deserializeAws_json1_1SecurityConfigurationList(
            output.SecurityConfigurations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListStepsOutput = (
  output: any,
  context: __SerdeContext
): ListStepsOutput => {
  return {
    __type: "ListStepsOutput",
    Marker:
      output.Marker !== undefined && output.Marker !== null
        ? output.Marker
        : undefined,
    Steps:
      output.Steps !== undefined && output.Steps !== null
        ? deserializeAws_json1_1StepSummaryList(output.Steps, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  return {
    __type: "MetricDimension",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricDimensionList = (
  output: any,
  context: __SerdeContext
): MetricDimension[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDimension(entry, context)
  );
};

const deserializeAws_json1_1ModifyClusterOutput = (
  output: any,
  context: __SerdeContext
): ModifyClusterOutput => {
  return {
    __type: "ModifyClusterOutput",
    StepConcurrencyLevel:
      output.StepConcurrencyLevel !== undefined &&
      output.StepConcurrencyLevel !== null
        ? output.StepConcurrencyLevel
        : undefined
  } as any;
};

const deserializeAws_json1_1PlacementType = (
  output: any,
  context: __SerdeContext
): PlacementType => {
  return {
    __type: "PlacementType",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined &&
      output.AvailabilityZones !== null
        ? deserializeAws_json1_1XmlStringMaxLen256List(
            output.AvailabilityZones,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1PortRange = (
  output: any,
  context: __SerdeContext
): PortRange => {
  return {
    __type: "PortRange",
    MaxRange:
      output.MaxRange !== undefined && output.MaxRange !== null
        ? output.MaxRange
        : undefined,
    MinRange:
      output.MinRange !== undefined && output.MinRange !== null
        ? output.MinRange
        : undefined
  } as any;
};

const deserializeAws_json1_1PortRanges = (
  output: any,
  context: __SerdeContext
): PortRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortRange(entry, context)
  );
};

const deserializeAws_json1_1PutAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutAutoScalingPolicyOutput => {
  return {
    __type: "PutAutoScalingPolicyOutput",
    AutoScalingPolicy:
      output.AutoScalingPolicy !== undefined &&
      output.AutoScalingPolicy !== null
        ? deserializeAws_json1_1AutoScalingPolicyDescription(
            output.AutoScalingPolicy,
            context
          )
        : undefined,
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    InstanceGroupId:
      output.InstanceGroupId !== undefined && output.InstanceGroupId !== null
        ? output.InstanceGroupId
        : undefined
  } as any;
};

const deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): PutBlockPublicAccessConfigurationOutput => {
  return {
    __type: "PutBlockPublicAccessConfigurationOutput"
  } as any;
};

const deserializeAws_json1_1RemoveAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveAutoScalingPolicyOutput => {
  return {
    __type: "RemoveAutoScalingPolicyOutput"
  } as any;
};

const deserializeAws_json1_1RemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  return {
    __type: "RemoveTagsOutput"
  } as any;
};

const deserializeAws_json1_1RunJobFlowOutput = (
  output: any,
  context: __SerdeContext
): RunJobFlowOutput => {
  return {
    __type: "RunJobFlowOutput",
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    JobFlowId:
      output.JobFlowId !== undefined && output.JobFlowId !== null
        ? output.JobFlowId
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingAction = (
  output: any,
  context: __SerdeContext
): ScalingAction => {
  return {
    __type: "ScalingAction",
    Market:
      output.Market !== undefined && output.Market !== null
        ? output.Market
        : undefined,
    SimpleScalingPolicyConfiguration:
      output.SimpleScalingPolicyConfiguration !== undefined &&
      output.SimpleScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1SimpleScalingPolicyConfiguration(
            output.SimpleScalingPolicyConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingConstraints = (
  output: any,
  context: __SerdeContext
): ScalingConstraints => {
  return {
    __type: "ScalingConstraints",
    MaxCapacity:
      output.MaxCapacity !== undefined && output.MaxCapacity !== null
        ? output.MaxCapacity
        : undefined,
    MinCapacity:
      output.MinCapacity !== undefined && output.MinCapacity !== null
        ? output.MinCapacity
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingRule = (
  output: any,
  context: __SerdeContext
): ScalingRule => {
  return {
    __type: "ScalingRule",
    Action:
      output.Action !== undefined && output.Action !== null
        ? deserializeAws_json1_1ScalingAction(output.Action, context)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Trigger:
      output.Trigger !== undefined && output.Trigger !== null
        ? deserializeAws_json1_1ScalingTrigger(output.Trigger, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingRuleList = (
  output: any,
  context: __SerdeContext
): ScalingRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingRule(entry, context)
  );
};

const deserializeAws_json1_1ScalingTrigger = (
  output: any,
  context: __SerdeContext
): ScalingTrigger => {
  return {
    __type: "ScalingTrigger",
    CloudWatchAlarmDefinition:
      output.CloudWatchAlarmDefinition !== undefined &&
      output.CloudWatchAlarmDefinition !== null
        ? deserializeAws_json1_1CloudWatchAlarmDefinition(
            output.CloudWatchAlarmDefinition,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ScriptBootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): ScriptBootstrapActionConfig => {
  return {
    __type: "ScriptBootstrapActionConfig",
    Args:
      output.Args !== undefined && output.Args !== null
        ? deserializeAws_json1_1XmlStringList(output.Args, context)
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecurityConfigurationSummary(entry, context)
  );
};

const deserializeAws_json1_1SecurityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary => {
  return {
    __type: "SecurityConfigurationSummary",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1ShrinkPolicy = (
  output: any,
  context: __SerdeContext
): ShrinkPolicy => {
  return {
    __type: "ShrinkPolicy",
    DecommissionTimeout:
      output.DecommissionTimeout !== undefined &&
      output.DecommissionTimeout !== null
        ? output.DecommissionTimeout
        : undefined,
    InstanceResizePolicy:
      output.InstanceResizePolicy !== undefined &&
      output.InstanceResizePolicy !== null
        ? deserializeAws_json1_1InstanceResizePolicy(
            output.InstanceResizePolicy,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): SimpleScalingPolicyConfiguration => {
  return {
    __type: "SimpleScalingPolicyConfiguration",
    AdjustmentType:
      output.AdjustmentType !== undefined && output.AdjustmentType !== null
        ? output.AdjustmentType
        : undefined,
    CoolDown:
      output.CoolDown !== undefined && output.CoolDown !== null
        ? output.CoolDown
        : undefined,
    ScalingAdjustment:
      output.ScalingAdjustment !== undefined &&
      output.ScalingAdjustment !== null
        ? output.ScalingAdjustment
        : undefined
  } as any;
};

const deserializeAws_json1_1SpotProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): SpotProvisioningSpecification => {
  return {
    __type: "SpotProvisioningSpecification",
    BlockDurationMinutes:
      output.BlockDurationMinutes !== undefined &&
      output.BlockDurationMinutes !== null
        ? output.BlockDurationMinutes
        : undefined,
    TimeoutAction:
      output.TimeoutAction !== undefined && output.TimeoutAction !== null
        ? output.TimeoutAction
        : undefined,
    TimeoutDurationMinutes:
      output.TimeoutDurationMinutes !== undefined &&
      output.TimeoutDurationMinutes !== null
        ? output.TimeoutDurationMinutes
        : undefined
  } as any;
};

const deserializeAws_json1_1Step = (
  output: any,
  context: __SerdeContext
): Step => {
  return {
    __type: "Step",
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null
        ? output.ActionOnFailure
        : undefined,
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1StepStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StepConfig = (
  output: any,
  context: __SerdeContext
): StepConfig => {
  return {
    __type: "StepConfig",
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null
        ? output.ActionOnFailure
        : undefined,
    HadoopJarStep:
      output.HadoopJarStep !== undefined && output.HadoopJarStep !== null
        ? deserializeAws_json1_1HadoopJarStepConfig(
            output.HadoopJarStep,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1StepDetail = (
  output: any,
  context: __SerdeContext
): StepDetail => {
  return {
    __type: "StepDetail",
    ExecutionStatusDetail:
      output.ExecutionStatusDetail !== undefined &&
      output.ExecutionStatusDetail !== null
        ? deserializeAws_json1_1StepExecutionStatusDetail(
            output.ExecutionStatusDetail,
            context
          )
        : undefined,
    StepConfig:
      output.StepConfig !== undefined && output.StepConfig !== null
        ? deserializeAws_json1_1StepConfig(output.StepConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StepDetailList = (
  output: any,
  context: __SerdeContext
): StepDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepDetail(entry, context)
  );
};

const deserializeAws_json1_1StepExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): StepExecutionStatusDetail => {
  return {
    __type: "StepExecutionStatusDetail",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    LastStateChangeReason:
      output.LastStateChangeReason !== undefined &&
      output.LastStateChangeReason !== null
        ? output.LastStateChangeReason
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1StepIdsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StepStateChangeReason = (
  output: any,
  context: __SerdeContext
): StepStateChangeReason => {
  return {
    __type: "StepStateChangeReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1StepStatus = (
  output: any,
  context: __SerdeContext
): StepStatus => {
  return {
    __type: "StepStatus",
    FailureDetails:
      output.FailureDetails !== undefined && output.FailureDetails !== null
        ? deserializeAws_json1_1FailureDetails(output.FailureDetails, context)
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? deserializeAws_json1_1StepStateChangeReason(
            output.StateChangeReason,
            context
          )
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_json1_1StepTimeline(output.Timeline, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StepSummary = (
  output: any,
  context: __SerdeContext
): StepSummary => {
  return {
    __type: "StepSummary",
    ActionOnFailure:
      output.ActionOnFailure !== undefined && output.ActionOnFailure !== null
        ? output.ActionOnFailure
        : undefined,
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_json1_1HadoopStepConfig(output.Config, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1StepStatus(output.Status, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1StepSummaryList = (
  output: any,
  context: __SerdeContext
): StepSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepSummary(entry, context)
  );
};

const deserializeAws_json1_1StepTimeline = (
  output: any,
  context: __SerdeContext
): StepTimeline => {
  return {
    __type: "StepTimeline",
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
        : undefined
  } as any;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1SupportedProductsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1VolumeSpecification = (
  output: any,
  context: __SerdeContext
): VolumeSpecification => {
  return {
    __type: "VolumeSpecification",
    Iops:
      output.Iops !== undefined && output.Iops !== null
        ? output.Iops
        : undefined,
    SizeInGB:
      output.SizeInGB !== undefined && output.SizeInGB !== null
        ? output.SizeInGB
        : undefined,
    VolumeType:
      output.VolumeType !== undefined && output.VolumeType !== null
        ? output.VolumeType
        : undefined
  } as any;
};

const deserializeAws_json1_1XmlStringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1XmlStringMaxLen256List = (
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
