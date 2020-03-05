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

export async function serializeAws_json1_1AddInstanceFleetCommand(
  input: AddInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.AddInstanceFleet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddInstanceFleetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddInstanceGroupsCommand(
  input: AddInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.AddInstanceGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddJobFlowStepsCommand(
  input: AddJobFlowStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.AddJobFlowSteps";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddJobFlowStepsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.AddTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CancelStepsCommand(
  input: CancelStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.CancelSteps";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSecurityConfigurationCommand(
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.CreateSecurityConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSecurityConfigurationCommand(
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.DeleteSecurityConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeClusterCommand(
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.DescribeCluster";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClusterInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeJobFlowsCommand(
  input: DescribeJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.DescribeJobFlows";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeJobFlowsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSecurityConfigurationCommand(
  input: DescribeSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.DescribeSecurityConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSecurityConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStepCommand(
  input: DescribeStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.DescribeStep";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStepInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetBlockPublicAccessConfigurationCommand(
  input: GetBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ElasticMapReduce.GetBlockPublicAccessConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetBlockPublicAccessConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListBootstrapActionsCommand(
  input: ListBootstrapActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListBootstrapActions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBootstrapActionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListClustersCommand(
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListClusters";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListClustersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListInstanceFleetsCommand(
  input: ListInstanceFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListInstanceFleets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstanceFleetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListInstanceGroupsCommand(
  input: ListInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListInstanceGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListInstancesCommand(
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListInstances";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSecurityConfigurationsCommand(
  input: ListSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListSecurityConfigurations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSecurityConfigurationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListStepsCommand(
  input: ListStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ListSteps";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStepsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyClusterCommand(
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ModifyCluster";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyInstanceFleetCommand(
  input: ModifyInstanceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ModifyInstanceFleet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyInstanceFleetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyInstanceGroupsCommand(
  input: ModifyInstanceGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.ModifyInstanceGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyInstanceGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutAutoScalingPolicyCommand(
  input: PutAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.PutAutoScalingPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutAutoScalingPolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutBlockPublicAccessConfigurationCommand(
  input: PutBlockPublicAccessConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ElasticMapReduce.PutBlockPublicAccessConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutBlockPublicAccessConfigurationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveAutoScalingPolicyCommand(
  input: RemoveAutoScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.RemoveAutoScalingPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveAutoScalingPolicyInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.RemoveTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RunJobFlowCommand(
  input: RunJobFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.RunJobFlow";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RunJobFlowInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetTerminationProtectionCommand(
  input: SetTerminationProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.SetTerminationProtection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetTerminationProtectionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetVisibleToAllUsersCommand(
  input: SetVisibleToAllUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.SetVisibleToAllUsers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetVisibleToAllUsersInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TerminateJobFlowsCommand(
  input: TerminateJobFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ElasticMapReduce.TerminateJobFlows";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TerminateJobFlowsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddInstanceFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> {
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
}

async function deserializeAws_json1_1AddInstanceFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddInstanceGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1AddInstanceGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddInstanceGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddJobFlowStepsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> {
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
}

async function deserializeAws_json1_1AddJobFlowStepsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddJobFlowStepsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
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
}

async function deserializeAws_json1_1AddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CancelStepsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> {
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
}

async function deserializeAws_json1_1CancelStepsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStepsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSecurityConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSecurityConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSecurityConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteSecurityConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeJobFlowsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeJobFlowsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobFlowsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSecurityConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSecurityConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeStepCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeStepCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStepCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1GetBlockPublicAccessConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockPublicAccessConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListBootstrapActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListBootstrapActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBootstrapActionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
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
}

async function deserializeAws_json1_1ListClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListInstanceFleetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListInstanceFleetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceFleetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListInstanceGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListInstanceGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1ListInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSecurityConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListSecurityConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListStepsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> {
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
}

async function deserializeAws_json1_1ListStepsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStepsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ModifyClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ModifyInstanceFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyInstanceFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceFleetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ModifyInstanceGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyInstanceGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyInstanceGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutAutoScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> {
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
}

async function deserializeAws_json1_1PutAutoScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAutoScalingPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1PutBlockPublicAccessConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBlockPublicAccessConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RemoveAutoScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveAutoScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAutoScalingPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1RemoveTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "elasticmapreduce.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "elasticmapreduce.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RunJobFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> {
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
}

async function deserializeAws_json1_1RunJobFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunJobFlowCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetTerminationProtectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> {
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
}

async function deserializeAws_json1_1SetTerminationProtectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTerminationProtectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetVisibleToAllUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> {
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
}

async function deserializeAws_json1_1SetVisibleToAllUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVisibleToAllUsersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TerminateJobFlowsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TerminateJobFlowsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateJobFlowsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TerminateJobFlowsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateJobFlowsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "elasticmapreduce.webservice#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceFleet !== undefined) {
    bodyParams["InstanceFleet"] = serializeAws_json1_1InstanceFleetConfig(
      input.InstanceFleet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddInstanceGroupsInput = (
  input: AddInstanceGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceGroups !== undefined) {
    bodyParams["InstanceGroups"] = serializeAws_json1_1InstanceGroupConfigList(
      input.InstanceGroups,
      context
    );
  }
  if (input.JobFlowId !== undefined) {
    bodyParams["JobFlowId"] = input.JobFlowId;
  }
  return bodyParams;
};

const serializeAws_json1_1AddJobFlowStepsInput = (
  input: AddJobFlowStepsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobFlowId !== undefined) {
    bodyParams["JobFlowId"] = input.JobFlowId;
  }
  if (input.Steps !== undefined) {
    bodyParams["Steps"] = serializeAws_json1_1StepConfigList(
      input.Steps,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Application = (
  input: Application,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalInfo !== undefined) {
    bodyParams["AdditionalInfo"] = serializeAws_json1_1StringMap(
      input.AdditionalInfo,
      context
    );
  }
  if (input.Args !== undefined) {
    bodyParams["Args"] = serializeAws_json1_1StringList(input.Args, context);
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationList = (
  input: Array<Application>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Application(entry, context));
  }
  return contents;
};

const serializeAws_json1_1AutoScalingPolicy = (
  input: AutoScalingPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Constraints !== undefined) {
    bodyParams["Constraints"] = serializeAws_json1_1ScalingConstraints(
      input.Constraints,
      context
    );
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1ScalingRuleList(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BlockPublicAccessConfiguration = (
  input: BlockPublicAccessConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlockPublicSecurityGroupRules !== undefined) {
    bodyParams["BlockPublicSecurityGroupRules"] =
      input.BlockPublicSecurityGroupRules;
  }
  if (input.Classification !== undefined) {
    bodyParams["Classification"] = input.Classification;
  }
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.PermittedPublicSecurityGroupRuleRanges !== undefined) {
    bodyParams[
      "PermittedPublicSecurityGroupRuleRanges"
    ] = serializeAws_json1_1PortRanges(
      input.PermittedPublicSecurityGroupRuleRanges,
      context
    );
  }
  if (input.Properties !== undefined) {
    bodyParams["Properties"] = serializeAws_json1_1StringMap(
      input.Properties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BootstrapActionConfig = (
  input: BootstrapActionConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ScriptBootstrapAction !== undefined) {
    bodyParams[
      "ScriptBootstrapAction"
    ] = serializeAws_json1_1ScriptBootstrapActionConfig(
      input.ScriptBootstrapAction,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BootstrapActionConfigList = (
  input: Array<BootstrapActionConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1BootstrapActionConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CancelStepsInput = (
  input: CancelStepsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.StepCancellationOption !== undefined) {
    bodyParams["StepCancellationOption"] = input.StepCancellationOption;
  }
  if (input.StepIds !== undefined) {
    bodyParams["StepIds"] = serializeAws_json1_1StepIdsList(
      input.StepIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchAlarmDefinition = (
  input: CloudWatchAlarmDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.Dimensions !== undefined) {
    bodyParams["Dimensions"] = serializeAws_json1_1MetricDimensionList(
      input.Dimensions,
      context
    );
  }
  if (input.EvaluationPeriods !== undefined) {
    bodyParams["EvaluationPeriods"] = input.EvaluationPeriods;
  }
  if (input.MetricName !== undefined) {
    bodyParams["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    bodyParams["Namespace"] = input.Namespace;
  }
  if (input.Period !== undefined) {
    bodyParams["Period"] = input.Period;
  }
  if (input.Statistic !== undefined) {
    bodyParams["Statistic"] = input.Statistic;
  }
  if (input.Threshold !== undefined) {
    bodyParams["Threshold"] = input.Threshold;
  }
  if (input.Unit !== undefined) {
    bodyParams["Unit"] = input.Unit;
  }
  return bodyParams;
};

const serializeAws_json1_1ClusterStateList = (
  input: Array<ClusterState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Configuration = (
  input: Configuration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Classification !== undefined) {
    bodyParams["Classification"] = input.Classification;
  }
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.Properties !== undefined) {
    bodyParams["Properties"] = serializeAws_json1_1StringMap(
      input.Properties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ConfigurationList = (
  input: Array<Configuration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Configuration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CreateSecurityConfigurationInput = (
  input: CreateSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SecurityConfiguration !== undefined) {
    bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSecurityConfigurationInput = (
  input: DeleteSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeClusterInput = (
  input: DescribeClusterInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeJobFlowsInput = (
  input: DescribeJobFlowsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatedAfter !== undefined) {
    bodyParams["CreatedAfter"] = Math.round(
      input.CreatedAfter.getTime() / 1000
    );
  }
  if (input.CreatedBefore !== undefined) {
    bodyParams["CreatedBefore"] = Math.round(
      input.CreatedBefore.getTime() / 1000
    );
  }
  if (input.JobFlowIds !== undefined) {
    bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(
      input.JobFlowIds,
      context
    );
  }
  if (input.JobFlowStates !== undefined) {
    bodyParams["JobFlowStates"] = serializeAws_json1_1JobFlowExecutionStateList(
      input.JobFlowStates,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSecurityConfigurationInput = (
  input: DescribeSecurityConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStepInput = (
  input: DescribeStepInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.StepId !== undefined) {
    bodyParams["StepId"] = input.StepId;
  }
  return bodyParams;
};

const serializeAws_json1_1EC2InstanceIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EC2InstanceIdsToTerminateList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1EbsBlockDeviceConfig = (
  input: EbsBlockDeviceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VolumeSpecification !== undefined) {
    bodyParams["VolumeSpecification"] = serializeAws_json1_1VolumeSpecification(
      input.VolumeSpecification,
      context
    );
  }
  if (input.VolumesPerInstance !== undefined) {
    bodyParams["VolumesPerInstance"] = input.VolumesPerInstance;
  }
  return bodyParams;
};

const serializeAws_json1_1EbsBlockDeviceConfigList = (
  input: Array<EbsBlockDeviceConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EbsBlockDeviceConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1EbsConfiguration = (
  input: EbsConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EbsBlockDeviceConfigs !== undefined) {
    bodyParams[
      "EbsBlockDeviceConfigs"
    ] = serializeAws_json1_1EbsBlockDeviceConfigList(
      input.EbsBlockDeviceConfigs,
      context
    );
  }
  if (input.EbsOptimized !== undefined) {
    bodyParams["EbsOptimized"] = input.EbsOptimized;
  }
  return bodyParams;
};

const serializeAws_json1_1GetBlockPublicAccessConfigurationInput = (
  input: GetBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1HadoopJarStepConfig = (
  input: HadoopJarStepConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Args !== undefined) {
    bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
  }
  if (input.Jar !== undefined) {
    bodyParams["Jar"] = input.Jar;
  }
  if (input.MainClass !== undefined) {
    bodyParams["MainClass"] = input.MainClass;
  }
  if (input.Properties !== undefined) {
    bodyParams["Properties"] = serializeAws_json1_1KeyValueList(
      input.Properties,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceFleetConfig = (
  input: InstanceFleetConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceFleetType !== undefined) {
    bodyParams["InstanceFleetType"] = input.InstanceFleetType;
  }
  if (input.InstanceTypeConfigs !== undefined) {
    bodyParams[
      "InstanceTypeConfigs"
    ] = serializeAws_json1_1InstanceTypeConfigList(
      input.InstanceTypeConfigs,
      context
    );
  }
  if (input.LaunchSpecifications !== undefined) {
    bodyParams[
      "LaunchSpecifications"
    ] = serializeAws_json1_1InstanceFleetProvisioningSpecifications(
      input.LaunchSpecifications,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.TargetOnDemandCapacity !== undefined) {
    bodyParams["TargetOnDemandCapacity"] = input.TargetOnDemandCapacity;
  }
  if (input.TargetSpotCapacity !== undefined) {
    bodyParams["TargetSpotCapacity"] = input.TargetSpotCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceFleetConfigList = (
  input: Array<InstanceFleetConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InstanceFleetConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1InstanceFleetModifyConfig = (
  input: InstanceFleetModifyConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceFleetId !== undefined) {
    bodyParams["InstanceFleetId"] = input.InstanceFleetId;
  }
  if (input.TargetOnDemandCapacity !== undefined) {
    bodyParams["TargetOnDemandCapacity"] = input.TargetOnDemandCapacity;
  }
  if (input.TargetSpotCapacity !== undefined) {
    bodyParams["TargetSpotCapacity"] = input.TargetSpotCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  input: InstanceFleetProvisioningSpecifications,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpotSpecification !== undefined) {
    bodyParams[
      "SpotSpecification"
    ] = serializeAws_json1_1SpotProvisioningSpecification(
      input.SpotSpecification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceGroupConfig = (
  input: InstanceGroupConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoScalingPolicy !== undefined) {
    bodyParams["AutoScalingPolicy"] = serializeAws_json1_1AutoScalingPolicy(
      input.AutoScalingPolicy,
      context
    );
  }
  if (input.BidPrice !== undefined) {
    bodyParams["BidPrice"] = input.BidPrice;
  }
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.EbsConfiguration !== undefined) {
    bodyParams["EbsConfiguration"] = serializeAws_json1_1EbsConfiguration(
      input.EbsConfiguration,
      context
    );
  }
  if (input.InstanceCount !== undefined) {
    bodyParams["InstanceCount"] = input.InstanceCount;
  }
  if (input.InstanceRole !== undefined) {
    bodyParams["InstanceRole"] = input.InstanceRole;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.Market !== undefined) {
    bodyParams["Market"] = input.Market;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceGroupConfigList = (
  input: Array<InstanceGroupConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InstanceGroupConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1InstanceGroupModifyConfig = (
  input: InstanceGroupModifyConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.EC2InstanceIdsToTerminate !== undefined) {
    bodyParams[
      "EC2InstanceIdsToTerminate"
    ] = serializeAws_json1_1EC2InstanceIdsToTerminateList(
      input.EC2InstanceIdsToTerminate,
      context
    );
  }
  if (input.InstanceCount !== undefined) {
    bodyParams["InstanceCount"] = input.InstanceCount;
  }
  if (input.InstanceGroupId !== undefined) {
    bodyParams["InstanceGroupId"] = input.InstanceGroupId;
  }
  if (input.ShrinkPolicy !== undefined) {
    bodyParams["ShrinkPolicy"] = serializeAws_json1_1ShrinkPolicy(
      input.ShrinkPolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceGroupModifyConfigList = (
  input: Array<InstanceGroupModifyConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1InstanceGroupModifyConfig(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1InstanceGroupTypeList = (
  input: Array<InstanceGroupType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1InstanceResizePolicy = (
  input: InstanceResizePolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InstanceTerminationTimeout !== undefined) {
    bodyParams["InstanceTerminationTimeout"] = input.InstanceTerminationTimeout;
  }
  if (input.InstancesToProtect !== undefined) {
    bodyParams["InstancesToProtect"] = serializeAws_json1_1EC2InstanceIdsList(
      input.InstancesToProtect,
      context
    );
  }
  if (input.InstancesToTerminate !== undefined) {
    bodyParams["InstancesToTerminate"] = serializeAws_json1_1EC2InstanceIdsList(
      input.InstancesToTerminate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceStateList = (
  input: Array<InstanceState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1InstanceTypeConfig = (
  input: InstanceTypeConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BidPrice !== undefined) {
    bodyParams["BidPrice"] = input.BidPrice;
  }
  if (input.BidPriceAsPercentageOfOnDemandPrice !== undefined) {
    bodyParams["BidPriceAsPercentageOfOnDemandPrice"] =
      input.BidPriceAsPercentageOfOnDemandPrice;
  }
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.EbsConfiguration !== undefined) {
    bodyParams["EbsConfiguration"] = serializeAws_json1_1EbsConfiguration(
      input.EbsConfiguration,
      context
    );
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.WeightedCapacity !== undefined) {
    bodyParams["WeightedCapacity"] = input.WeightedCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceTypeConfigList = (
  input: Array<InstanceTypeConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InstanceTypeConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1JobFlowExecutionStateList = (
  input: Array<JobFlowExecutionState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1JobFlowInstancesConfig = (
  input: JobFlowInstancesConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalMasterSecurityGroups !== undefined) {
    bodyParams[
      "AdditionalMasterSecurityGroups"
    ] = serializeAws_json1_1SecurityGroupsList(
      input.AdditionalMasterSecurityGroups,
      context
    );
  }
  if (input.AdditionalSlaveSecurityGroups !== undefined) {
    bodyParams[
      "AdditionalSlaveSecurityGroups"
    ] = serializeAws_json1_1SecurityGroupsList(
      input.AdditionalSlaveSecurityGroups,
      context
    );
  }
  if (input.Ec2KeyName !== undefined) {
    bodyParams["Ec2KeyName"] = input.Ec2KeyName;
  }
  if (input.Ec2SubnetId !== undefined) {
    bodyParams["Ec2SubnetId"] = input.Ec2SubnetId;
  }
  if (input.Ec2SubnetIds !== undefined) {
    bodyParams["Ec2SubnetIds"] = serializeAws_json1_1XmlStringMaxLen256List(
      input.Ec2SubnetIds,
      context
    );
  }
  if (input.EmrManagedMasterSecurityGroup !== undefined) {
    bodyParams["EmrManagedMasterSecurityGroup"] =
      input.EmrManagedMasterSecurityGroup;
  }
  if (input.EmrManagedSlaveSecurityGroup !== undefined) {
    bodyParams["EmrManagedSlaveSecurityGroup"] =
      input.EmrManagedSlaveSecurityGroup;
  }
  if (input.HadoopVersion !== undefined) {
    bodyParams["HadoopVersion"] = input.HadoopVersion;
  }
  if (input.InstanceCount !== undefined) {
    bodyParams["InstanceCount"] = input.InstanceCount;
  }
  if (input.InstanceFleets !== undefined) {
    bodyParams["InstanceFleets"] = serializeAws_json1_1InstanceFleetConfigList(
      input.InstanceFleets,
      context
    );
  }
  if (input.InstanceGroups !== undefined) {
    bodyParams["InstanceGroups"] = serializeAws_json1_1InstanceGroupConfigList(
      input.InstanceGroups,
      context
    );
  }
  if (input.KeepJobFlowAliveWhenNoSteps !== undefined) {
    bodyParams["KeepJobFlowAliveWhenNoSteps"] =
      input.KeepJobFlowAliveWhenNoSteps;
  }
  if (input.MasterInstanceType !== undefined) {
    bodyParams["MasterInstanceType"] = input.MasterInstanceType;
  }
  if (input.Placement !== undefined) {
    bodyParams["Placement"] = serializeAws_json1_1PlacementType(
      input.Placement,
      context
    );
  }
  if (input.ServiceAccessSecurityGroup !== undefined) {
    bodyParams["ServiceAccessSecurityGroup"] = input.ServiceAccessSecurityGroup;
  }
  if (input.SlaveInstanceType !== undefined) {
    bodyParams["SlaveInstanceType"] = input.SlaveInstanceType;
  }
  if (input.TerminationProtected !== undefined) {
    bodyParams["TerminationProtected"] = input.TerminationProtected;
  }
  return bodyParams;
};

const serializeAws_json1_1KerberosAttributes = (
  input: KerberosAttributes,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ADDomainJoinPassword !== undefined) {
    bodyParams["ADDomainJoinPassword"] = input.ADDomainJoinPassword;
  }
  if (input.ADDomainJoinUser !== undefined) {
    bodyParams["ADDomainJoinUser"] = input.ADDomainJoinUser;
  }
  if (input.CrossRealmTrustPrincipalPassword !== undefined) {
    bodyParams["CrossRealmTrustPrincipalPassword"] =
      input.CrossRealmTrustPrincipalPassword;
  }
  if (input.KdcAdminPassword !== undefined) {
    bodyParams["KdcAdminPassword"] = input.KdcAdminPassword;
  }
  if (input.Realm !== undefined) {
    bodyParams["Realm"] = input.Realm;
  }
  return bodyParams;
};

const serializeAws_json1_1KeyValue = (
  input: KeyValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1KeyValueList = (
  input: Array<KeyValue>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1KeyValue(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListBootstrapActionsInput = (
  input: ListBootstrapActionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListClustersInput = (
  input: ListClustersInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterStates !== undefined) {
    bodyParams["ClusterStates"] = serializeAws_json1_1ClusterStateList(
      input.ClusterStates,
      context
    );
  }
  if (input.CreatedAfter !== undefined) {
    bodyParams["CreatedAfter"] = Math.round(
      input.CreatedAfter.getTime() / 1000
    );
  }
  if (input.CreatedBefore !== undefined) {
    bodyParams["CreatedBefore"] = Math.round(
      input.CreatedBefore.getTime() / 1000
    );
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListInstanceFleetsInput = (
  input: ListInstanceFleetsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListInstanceGroupsInput = (
  input: ListInstanceGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListInstancesInput = (
  input: ListInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceFleetId !== undefined) {
    bodyParams["InstanceFleetId"] = input.InstanceFleetId;
  }
  if (input.InstanceFleetType !== undefined) {
    bodyParams["InstanceFleetType"] = input.InstanceFleetType;
  }
  if (input.InstanceGroupId !== undefined) {
    bodyParams["InstanceGroupId"] = input.InstanceGroupId;
  }
  if (input.InstanceGroupTypes !== undefined) {
    bodyParams[
      "InstanceGroupTypes"
    ] = serializeAws_json1_1InstanceGroupTypeList(
      input.InstanceGroupTypes,
      context
    );
  }
  if (input.InstanceStates !== undefined) {
    bodyParams["InstanceStates"] = serializeAws_json1_1InstanceStateList(
      input.InstanceStates,
      context
    );
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSecurityConfigurationsInput = (
  input: ListSecurityConfigurationsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  return bodyParams;
};

const serializeAws_json1_1ListStepsInput = (
  input: ListStepsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.StepIds !== undefined) {
    bodyParams["StepIds"] = serializeAws_json1_1XmlStringList(
      input.StepIds,
      context
    );
  }
  if (input.StepStates !== undefined) {
    bodyParams["StepStates"] = serializeAws_json1_1StepStateList(
      input.StepStates,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1MetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricDimensionList = (
  input: Array<MetricDimension>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1MetricDimension(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ModifyClusterInput = (
  input: ModifyClusterInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.StepConcurrencyLevel !== undefined) {
    bodyParams["StepConcurrencyLevel"] = input.StepConcurrencyLevel;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyInstanceFleetInput = (
  input: ModifyInstanceFleetInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceFleet !== undefined) {
    bodyParams["InstanceFleet"] = serializeAws_json1_1InstanceFleetModifyConfig(
      input.InstanceFleet,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyInstanceGroupsInput = (
  input: ModifyInstanceGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceGroups !== undefined) {
    bodyParams[
      "InstanceGroups"
    ] = serializeAws_json1_1InstanceGroupModifyConfigList(
      input.InstanceGroups,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1NewSupportedProductsList = (
  input: Array<SupportedProductConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SupportedProductConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PlacementType = (
  input: PlacementType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.AvailabilityZones !== undefined) {
    bodyParams[
      "AvailabilityZones"
    ] = serializeAws_json1_1XmlStringMaxLen256List(
      input.AvailabilityZones,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PortRange = (
  input: PortRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxRange !== undefined) {
    bodyParams["MaxRange"] = input.MaxRange;
  }
  if (input.MinRange !== undefined) {
    bodyParams["MinRange"] = input.MinRange;
  }
  return bodyParams;
};

const serializeAws_json1_1PortRanges = (
  input: Array<PortRange>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PortRange(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PutAutoScalingPolicyInput = (
  input: PutAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoScalingPolicy !== undefined) {
    bodyParams["AutoScalingPolicy"] = serializeAws_json1_1AutoScalingPolicy(
      input.AutoScalingPolicy,
      context
    );
  }
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceGroupId !== undefined) {
    bodyParams["InstanceGroupId"] = input.InstanceGroupId;
  }
  return bodyParams;
};

const serializeAws_json1_1PutBlockPublicAccessConfigurationInput = (
  input: PutBlockPublicAccessConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlockPublicAccessConfiguration !== undefined) {
    bodyParams[
      "BlockPublicAccessConfiguration"
    ] = serializeAws_json1_1BlockPublicAccessConfiguration(
      input.BlockPublicAccessConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveAutoScalingPolicyInput = (
  input: RemoveAutoScalingPolicyInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.InstanceGroupId !== undefined) {
    bodyParams["InstanceGroupId"] = input.InstanceGroupId;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1StringList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RunJobFlowInput = (
  input: RunJobFlowInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalInfo !== undefined) {
    bodyParams["AdditionalInfo"] = input.AdditionalInfo;
  }
  if (input.AmiVersion !== undefined) {
    bodyParams["AmiVersion"] = input.AmiVersion;
  }
  if (input.Applications !== undefined) {
    bodyParams["Applications"] = serializeAws_json1_1ApplicationList(
      input.Applications,
      context
    );
  }
  if (input.AutoScalingRole !== undefined) {
    bodyParams["AutoScalingRole"] = input.AutoScalingRole;
  }
  if (input.BootstrapActions !== undefined) {
    bodyParams[
      "BootstrapActions"
    ] = serializeAws_json1_1BootstrapActionConfigList(
      input.BootstrapActions,
      context
    );
  }
  if (input.Configurations !== undefined) {
    bodyParams["Configurations"] = serializeAws_json1_1ConfigurationList(
      input.Configurations,
      context
    );
  }
  if (input.CustomAmiId !== undefined) {
    bodyParams["CustomAmiId"] = input.CustomAmiId;
  }
  if (input.EbsRootVolumeSize !== undefined) {
    bodyParams["EbsRootVolumeSize"] = input.EbsRootVolumeSize;
  }
  if (input.Instances !== undefined) {
    bodyParams["Instances"] = serializeAws_json1_1JobFlowInstancesConfig(
      input.Instances,
      context
    );
  }
  if (input.JobFlowRole !== undefined) {
    bodyParams["JobFlowRole"] = input.JobFlowRole;
  }
  if (input.KerberosAttributes !== undefined) {
    bodyParams["KerberosAttributes"] = serializeAws_json1_1KerberosAttributes(
      input.KerberosAttributes,
      context
    );
  }
  if (input.LogUri !== undefined) {
    bodyParams["LogUri"] = input.LogUri;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.NewSupportedProducts !== undefined) {
    bodyParams[
      "NewSupportedProducts"
    ] = serializeAws_json1_1NewSupportedProductsList(
      input.NewSupportedProducts,
      context
    );
  }
  if (input.ReleaseLabel !== undefined) {
    bodyParams["ReleaseLabel"] = input.ReleaseLabel;
  }
  if (input.RepoUpgradeOnBoot !== undefined) {
    bodyParams["RepoUpgradeOnBoot"] = input.RepoUpgradeOnBoot;
  }
  if (input.ScaleDownBehavior !== undefined) {
    bodyParams["ScaleDownBehavior"] = input.ScaleDownBehavior;
  }
  if (input.SecurityConfiguration !== undefined) {
    bodyParams["SecurityConfiguration"] = input.SecurityConfiguration;
  }
  if (input.ServiceRole !== undefined) {
    bodyParams["ServiceRole"] = input.ServiceRole;
  }
  if (input.StepConcurrencyLevel !== undefined) {
    bodyParams["StepConcurrencyLevel"] = input.StepConcurrencyLevel;
  }
  if (input.Steps !== undefined) {
    bodyParams["Steps"] = serializeAws_json1_1StepConfigList(
      input.Steps,
      context
    );
  }
  if (input.SupportedProducts !== undefined) {
    bodyParams["SupportedProducts"] = serializeAws_json1_1SupportedProductsList(
      input.SupportedProducts,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.VisibleToAllUsers !== undefined) {
    bodyParams["VisibleToAllUsers"] = input.VisibleToAllUsers;
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingAction = (
  input: ScalingAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Market !== undefined) {
    bodyParams["Market"] = input.Market;
  }
  if (input.SimpleScalingPolicyConfiguration !== undefined) {
    bodyParams[
      "SimpleScalingPolicyConfiguration"
    ] = serializeAws_json1_1SimpleScalingPolicyConfiguration(
      input.SimpleScalingPolicyConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingConstraints = (
  input: ScalingConstraints,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxCapacity !== undefined) {
    bodyParams["MaxCapacity"] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams["MinCapacity"] = input.MinCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingRule = (
  input: ScalingRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = serializeAws_json1_1ScalingAction(
      input.Action,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Trigger !== undefined) {
    bodyParams["Trigger"] = serializeAws_json1_1ScalingTrigger(
      input.Trigger,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingRuleList = (
  input: Array<ScalingRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ScalingRule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ScalingTrigger = (
  input: ScalingTrigger,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchAlarmDefinition !== undefined) {
    bodyParams[
      "CloudWatchAlarmDefinition"
    ] = serializeAws_json1_1CloudWatchAlarmDefinition(
      input.CloudWatchAlarmDefinition,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScriptBootstrapActionConfig = (
  input: ScriptBootstrapActionConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Args !== undefined) {
    bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SetTerminationProtectionInput = (
  input: SetTerminationProtectionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobFlowIds !== undefined) {
    bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(
      input.JobFlowIds,
      context
    );
  }
  if (input.TerminationProtected !== undefined) {
    bodyParams["TerminationProtected"] = input.TerminationProtected;
  }
  return bodyParams;
};

const serializeAws_json1_1SetVisibleToAllUsersInput = (
  input: SetVisibleToAllUsersInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobFlowIds !== undefined) {
    bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(
      input.JobFlowIds,
      context
    );
  }
  if (input.VisibleToAllUsers !== undefined) {
    bodyParams["VisibleToAllUsers"] = input.VisibleToAllUsers;
  }
  return bodyParams;
};

const serializeAws_json1_1ShrinkPolicy = (
  input: ShrinkPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DecommissionTimeout !== undefined) {
    bodyParams["DecommissionTimeout"] = input.DecommissionTimeout;
  }
  if (input.InstanceResizePolicy !== undefined) {
    bodyParams[
      "InstanceResizePolicy"
    ] = serializeAws_json1_1InstanceResizePolicy(
      input.InstanceResizePolicy,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SimpleScalingPolicyConfiguration = (
  input: SimpleScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdjustmentType !== undefined) {
    bodyParams["AdjustmentType"] = input.AdjustmentType;
  }
  if (input.CoolDown !== undefined) {
    bodyParams["CoolDown"] = input.CoolDown;
  }
  if (input.ScalingAdjustment !== undefined) {
    bodyParams["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  return bodyParams;
};

const serializeAws_json1_1SpotProvisioningSpecification = (
  input: SpotProvisioningSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlockDurationMinutes !== undefined) {
    bodyParams["BlockDurationMinutes"] = input.BlockDurationMinutes;
  }
  if (input.TimeoutAction !== undefined) {
    bodyParams["TimeoutAction"] = input.TimeoutAction;
  }
  if (input.TimeoutDurationMinutes !== undefined) {
    bodyParams["TimeoutDurationMinutes"] = input.TimeoutDurationMinutes;
  }
  return bodyParams;
};

const serializeAws_json1_1StepConfig = (
  input: StepConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ActionOnFailure !== undefined) {
    bodyParams["ActionOnFailure"] = input.ActionOnFailure;
  }
  if (input.HadoopJarStep !== undefined) {
    bodyParams["HadoopJarStep"] = serializeAws_json1_1HadoopJarStepConfig(
      input.HadoopJarStep,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StepConfigList = (
  input: Array<StepConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StepConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StepIdsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StepStateList = (
  input: Array<StepState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1SupportedProductConfig = (
  input: SupportedProductConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Args !== undefined) {
    bodyParams["Args"] = serializeAws_json1_1XmlStringList(input.Args, context);
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1SupportedProductsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TerminateJobFlowsInput = (
  input: TerminateJobFlowsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobFlowIds !== undefined) {
    bodyParams["JobFlowIds"] = serializeAws_json1_1XmlStringList(
      input.JobFlowIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1VolumeSpecification = (
  input: VolumeSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Iops !== undefined) {
    bodyParams["Iops"] = input.Iops;
  }
  if (input.SizeInGB !== undefined) {
    bodyParams["SizeInGB"] = input.SizeInGB;
  }
  if (input.VolumeType !== undefined) {
    bodyParams["VolumeType"] = input.VolumeType;
  }
  return bodyParams;
};

const serializeAws_json1_1XmlStringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1XmlStringMaxLen256List = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_json1_1AddInstanceFleetOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceFleetOutput => {
  let contents: any = {
    __type: "AddInstanceFleetOutput",
    ClusterArn: undefined,
    ClusterId: undefined,
    InstanceFleetId: undefined
  };
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.InstanceFleetId !== undefined && output.InstanceFleetId !== null) {
    contents.InstanceFleetId = output.InstanceFleetId;
  }
  return contents;
};

const deserializeAws_json1_1AddInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): AddInstanceGroupsOutput => {
  let contents: any = {
    __type: "AddInstanceGroupsOutput",
    ClusterArn: undefined,
    InstanceGroupIds: undefined,
    JobFlowId: undefined
  };
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (
    output.InstanceGroupIds !== undefined &&
    output.InstanceGroupIds !== null
  ) {
    contents.InstanceGroupIds = deserializeAws_json1_1InstanceGroupIdsList(
      output.InstanceGroupIds,
      context
    );
  }
  if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
    contents.JobFlowId = output.JobFlowId;
  }
  return contents;
};

const deserializeAws_json1_1AddJobFlowStepsOutput = (
  output: any,
  context: __SerdeContext
): AddJobFlowStepsOutput => {
  let contents: any = {
    __type: "AddJobFlowStepsOutput",
    StepIds: undefined
  };
  if (output.StepIds !== undefined && output.StepIds !== null) {
    contents.StepIds = deserializeAws_json1_1StepIdsList(
      output.StepIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  let contents: any = {
    __type: "AddTagsOutput"
  };
  return contents;
};

const deserializeAws_json1_1Application = (
  output: any,
  context: __SerdeContext
): Application => {
  let contents: any = {
    __type: "Application",
    AdditionalInfo: undefined,
    Args: undefined,
    Name: undefined,
    Version: undefined
  };
  if (output.AdditionalInfo !== undefined && output.AdditionalInfo !== null) {
    contents.AdditionalInfo = deserializeAws_json1_1StringMap(
      output.AdditionalInfo,
      context
    );
  }
  if (output.Args !== undefined && output.Args !== null) {
    contents.Args = deserializeAws_json1_1StringList(output.Args, context);
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationList = (
  output: any,
  context: __SerdeContext
): Array<Application> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Application(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  let contents: any = {
    __type: "AutoScalingPolicyDescription",
    Constraints: undefined,
    Rules: undefined,
    Status: undefined
  };
  if (output.Constraints !== undefined && output.Constraints !== null) {
    contents.Constraints = deserializeAws_json1_1ScalingConstraints(
      output.Constraints,
      context
    );
  }
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_json1_1ScalingRuleList(
      output.Rules,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1AutoScalingPolicyStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AutoScalingPolicyStateChangeReason = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStateChangeReason => {
  let contents: any = {
    __type: "AutoScalingPolicyStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AutoScalingPolicyStatus = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyStatus => {
  let contents: any = {
    __type: "AutoScalingPolicyStatus",
    State: undefined,
    StateChangeReason: undefined
  };
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1AutoScalingPolicyStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BlockPublicAccessConfiguration = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfiguration => {
  let contents: any = {
    __type: "BlockPublicAccessConfiguration",
    BlockPublicSecurityGroupRules: undefined,
    Classification: undefined,
    Configurations: undefined,
    PermittedPublicSecurityGroupRuleRanges: undefined,
    Properties: undefined
  };
  if (
    output.BlockPublicSecurityGroupRules !== undefined &&
    output.BlockPublicSecurityGroupRules !== null
  ) {
    contents.BlockPublicSecurityGroupRules =
      output.BlockPublicSecurityGroupRules;
  }
  if (output.Classification !== undefined && output.Classification !== null) {
    contents.Classification = output.Classification;
  }
  if (output.Configurations !== undefined && output.Configurations !== null) {
    contents.Configurations = deserializeAws_json1_1ConfigurationList(
      output.Configurations,
      context
    );
  }
  if (
    output.PermittedPublicSecurityGroupRuleRanges !== undefined &&
    output.PermittedPublicSecurityGroupRuleRanges !== null
  ) {
    contents.PermittedPublicSecurityGroupRuleRanges = deserializeAws_json1_1PortRanges(
      output.PermittedPublicSecurityGroupRuleRanges,
      context
    );
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1StringMap(
      output.Properties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BlockPublicAccessConfigurationMetadata = (
  output: any,
  context: __SerdeContext
): BlockPublicAccessConfigurationMetadata => {
  let contents: any = {
    __type: "BlockPublicAccessConfigurationMetadata",
    CreatedByArn: undefined,
    CreationDateTime: undefined
  };
  if (output.CreatedByArn !== undefined && output.CreatedByArn !== null) {
    contents.CreatedByArn = output.CreatedByArn;
  }
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1BootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): BootstrapActionConfig => {
  let contents: any = {
    __type: "BootstrapActionConfig",
    Name: undefined,
    ScriptBootstrapAction: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.ScriptBootstrapAction !== undefined &&
    output.ScriptBootstrapAction !== null
  ) {
    contents.ScriptBootstrapAction = deserializeAws_json1_1ScriptBootstrapActionConfig(
      output.ScriptBootstrapAction,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BootstrapActionDetail = (
  output: any,
  context: __SerdeContext
): BootstrapActionDetail => {
  let contents: any = {
    __type: "BootstrapActionDetail",
    BootstrapActionConfig: undefined
  };
  if (
    output.BootstrapActionConfig !== undefined &&
    output.BootstrapActionConfig !== null
  ) {
    contents.BootstrapActionConfig = deserializeAws_json1_1BootstrapActionConfig(
      output.BootstrapActionConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BootstrapActionDetailList = (
  output: any,
  context: __SerdeContext
): Array<BootstrapActionDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BootstrapActionDetail(entry, context)
  );
};

const deserializeAws_json1_1CancelStepsInfo = (
  output: any,
  context: __SerdeContext
): CancelStepsInfo => {
  let contents: any = {
    __type: "CancelStepsInfo",
    Reason: undefined,
    Status: undefined,
    StepId: undefined
  };
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StepId !== undefined && output.StepId !== null) {
    contents.StepId = output.StepId;
  }
  return contents;
};

const deserializeAws_json1_1CancelStepsInfoList = (
  output: any,
  context: __SerdeContext
): Array<CancelStepsInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CancelStepsInfo(entry, context)
  );
};

const deserializeAws_json1_1CancelStepsOutput = (
  output: any,
  context: __SerdeContext
): CancelStepsOutput => {
  let contents: any = {
    __type: "CancelStepsOutput",
    CancelStepsInfoList: undefined
  };
  if (
    output.CancelStepsInfoList !== undefined &&
    output.CancelStepsInfoList !== null
  ) {
    contents.CancelStepsInfoList = deserializeAws_json1_1CancelStepsInfoList(
      output.CancelStepsInfoList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchAlarmDefinition = (
  output: any,
  context: __SerdeContext
): CloudWatchAlarmDefinition => {
  let contents: any = {
    __type: "CloudWatchAlarmDefinition",
    ComparisonOperator: undefined,
    Dimensions: undefined,
    EvaluationPeriods: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Period: undefined,
    Statistic: undefined,
    Threshold: undefined,
    Unit: undefined
  };
  if (
    output.ComparisonOperator !== undefined &&
    output.ComparisonOperator !== null
  ) {
    contents.ComparisonOperator = output.ComparisonOperator;
  }
  if (output.Dimensions !== undefined && output.Dimensions !== null) {
    contents.Dimensions = deserializeAws_json1_1MetricDimensionList(
      output.Dimensions,
      context
    );
  }
  if (
    output.EvaluationPeriods !== undefined &&
    output.EvaluationPeriods !== null
  ) {
    contents.EvaluationPeriods = output.EvaluationPeriods;
  }
  if (output.MetricName !== undefined && output.MetricName !== null) {
    contents.MetricName = output.MetricName;
  }
  if (output.Namespace !== undefined && output.Namespace !== null) {
    contents.Namespace = output.Namespace;
  }
  if (output.Period !== undefined && output.Period !== null) {
    contents.Period = output.Period;
  }
  if (output.Statistic !== undefined && output.Statistic !== null) {
    contents.Statistic = output.Statistic;
  }
  if (output.Threshold !== undefined && output.Threshold !== null) {
    contents.Threshold = output.Threshold;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  let contents: any = {
    __type: "Cluster",
    Applications: undefined,
    AutoScalingRole: undefined,
    AutoTerminate: undefined,
    ClusterArn: undefined,
    Configurations: undefined,
    CustomAmiId: undefined,
    EbsRootVolumeSize: undefined,
    Ec2InstanceAttributes: undefined,
    Id: undefined,
    InstanceCollectionType: undefined,
    KerberosAttributes: undefined,
    LogUri: undefined,
    MasterPublicDnsName: undefined,
    Name: undefined,
    NormalizedInstanceHours: undefined,
    OutpostArn: undefined,
    ReleaseLabel: undefined,
    RepoUpgradeOnBoot: undefined,
    RequestedAmiVersion: undefined,
    RunningAmiVersion: undefined,
    ScaleDownBehavior: undefined,
    SecurityConfiguration: undefined,
    ServiceRole: undefined,
    Status: undefined,
    StepConcurrencyLevel: undefined,
    Tags: undefined,
    TerminationProtected: undefined,
    VisibleToAllUsers: undefined
  };
  if (output.Applications !== undefined && output.Applications !== null) {
    contents.Applications = deserializeAws_json1_1ApplicationList(
      output.Applications,
      context
    );
  }
  if (output.AutoScalingRole !== undefined && output.AutoScalingRole !== null) {
    contents.AutoScalingRole = output.AutoScalingRole;
  }
  if (output.AutoTerminate !== undefined && output.AutoTerminate !== null) {
    contents.AutoTerminate = output.AutoTerminate;
  }
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.Configurations !== undefined && output.Configurations !== null) {
    contents.Configurations = deserializeAws_json1_1ConfigurationList(
      output.Configurations,
      context
    );
  }
  if (output.CustomAmiId !== undefined && output.CustomAmiId !== null) {
    contents.CustomAmiId = output.CustomAmiId;
  }
  if (
    output.EbsRootVolumeSize !== undefined &&
    output.EbsRootVolumeSize !== null
  ) {
    contents.EbsRootVolumeSize = output.EbsRootVolumeSize;
  }
  if (
    output.Ec2InstanceAttributes !== undefined &&
    output.Ec2InstanceAttributes !== null
  ) {
    contents.Ec2InstanceAttributes = deserializeAws_json1_1Ec2InstanceAttributes(
      output.Ec2InstanceAttributes,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.InstanceCollectionType !== undefined &&
    output.InstanceCollectionType !== null
  ) {
    contents.InstanceCollectionType = output.InstanceCollectionType;
  }
  if (
    output.KerberosAttributes !== undefined &&
    output.KerberosAttributes !== null
  ) {
    contents.KerberosAttributes = deserializeAws_json1_1KerberosAttributes(
      output.KerberosAttributes,
      context
    );
  }
  if (output.LogUri !== undefined && output.LogUri !== null) {
    contents.LogUri = output.LogUri;
  }
  if (
    output.MasterPublicDnsName !== undefined &&
    output.MasterPublicDnsName !== null
  ) {
    contents.MasterPublicDnsName = output.MasterPublicDnsName;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.NormalizedInstanceHours !== undefined &&
    output.NormalizedInstanceHours !== null
  ) {
    contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
  }
  if (output.OutpostArn !== undefined && output.OutpostArn !== null) {
    contents.OutpostArn = output.OutpostArn;
  }
  if (output.ReleaseLabel !== undefined && output.ReleaseLabel !== null) {
    contents.ReleaseLabel = output.ReleaseLabel;
  }
  if (
    output.RepoUpgradeOnBoot !== undefined &&
    output.RepoUpgradeOnBoot !== null
  ) {
    contents.RepoUpgradeOnBoot = output.RepoUpgradeOnBoot;
  }
  if (
    output.RequestedAmiVersion !== undefined &&
    output.RequestedAmiVersion !== null
  ) {
    contents.RequestedAmiVersion = output.RequestedAmiVersion;
  }
  if (
    output.RunningAmiVersion !== undefined &&
    output.RunningAmiVersion !== null
  ) {
    contents.RunningAmiVersion = output.RunningAmiVersion;
  }
  if (
    output.ScaleDownBehavior !== undefined &&
    output.ScaleDownBehavior !== null
  ) {
    contents.ScaleDownBehavior = output.ScaleDownBehavior;
  }
  if (
    output.SecurityConfiguration !== undefined &&
    output.SecurityConfiguration !== null
  ) {
    contents.SecurityConfiguration = output.SecurityConfiguration;
  }
  if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
    contents.ServiceRole = output.ServiceRole;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1ClusterStatus(
      output.Status,
      context
    );
  }
  if (
    output.StepConcurrencyLevel !== undefined &&
    output.StepConcurrencyLevel !== null
  ) {
    contents.StepConcurrencyLevel = output.StepConcurrencyLevel;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  if (
    output.TerminationProtected !== undefined &&
    output.TerminationProtected !== null
  ) {
    contents.TerminationProtected = output.TerminationProtected;
  }
  if (
    output.VisibleToAllUsers !== undefined &&
    output.VisibleToAllUsers !== null
  ) {
    contents.VisibleToAllUsers = output.VisibleToAllUsers;
  }
  return contents;
};

const deserializeAws_json1_1ClusterStateChangeReason = (
  output: any,
  context: __SerdeContext
): ClusterStateChangeReason => {
  let contents: any = {
    __type: "ClusterStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterStatus = (
  output: any,
  context: __SerdeContext
): ClusterStatus => {
  let contents: any = {
    __type: "ClusterStatus",
    State: undefined,
    StateChangeReason: undefined,
    Timeline: undefined
  };
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1ClusterStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Timeline !== undefined && output.Timeline !== null) {
    contents.Timeline = deserializeAws_json1_1ClusterTimeline(
      output.Timeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ClusterSummary = (
  output: any,
  context: __SerdeContext
): ClusterSummary => {
  let contents: any = {
    __type: "ClusterSummary",
    ClusterArn: undefined,
    Id: undefined,
    Name: undefined,
    NormalizedInstanceHours: undefined,
    OutpostArn: undefined,
    Status: undefined
  };
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.NormalizedInstanceHours !== undefined &&
    output.NormalizedInstanceHours !== null
  ) {
    contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
  }
  if (output.OutpostArn !== undefined && output.OutpostArn !== null) {
    contents.OutpostArn = output.OutpostArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1ClusterStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ClusterSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ClusterSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterSummary(entry, context)
  );
};

const deserializeAws_json1_1ClusterTimeline = (
  output: any,
  context: __SerdeContext
): ClusterTimeline => {
  let contents: any = {
    __type: "ClusterTimeline",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    ReadyDateTime: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1Command = (
  output: any,
  context: __SerdeContext
): Command => {
  let contents: any = {
    __type: "Command",
    Args: undefined,
    Name: undefined,
    ScriptPath: undefined
  };
  if (output.Args !== undefined && output.Args !== null) {
    contents.Args = deserializeAws_json1_1StringList(output.Args, context);
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ScriptPath !== undefined && output.ScriptPath !== null) {
    contents.ScriptPath = output.ScriptPath;
  }
  return contents;
};

const deserializeAws_json1_1CommandList = (
  output: any,
  context: __SerdeContext
): Array<Command> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Command(entry, context)
  );
};

const deserializeAws_json1_1Configuration = (
  output: any,
  context: __SerdeContext
): Configuration => {
  let contents: any = {
    __type: "Configuration",
    Classification: undefined,
    Configurations: undefined,
    Properties: undefined
  };
  if (output.Classification !== undefined && output.Classification !== null) {
    contents.Classification = output.Classification;
  }
  if (output.Configurations !== undefined && output.Configurations !== null) {
    contents.Configurations = deserializeAws_json1_1ConfigurationList(
      output.Configurations,
      context
    );
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1StringMap(
      output.Properties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ConfigurationList = (
  output: any,
  context: __SerdeContext
): Array<Configuration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Configuration(entry, context)
  );
};

const deserializeAws_json1_1CreateSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationOutput => {
  let contents: any = {
    __type: "CreateSecurityConfigurationOutput",
    CreationDateTime: undefined,
    Name: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1DeleteSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationOutput => {
  let contents: any = {
    __type: "DeleteSecurityConfigurationOutput"
  };
  return contents;
};

const deserializeAws_json1_1DescribeClusterOutput = (
  output: any,
  context: __SerdeContext
): DescribeClusterOutput => {
  let contents: any = {
    __type: "DescribeClusterOutput",
    Cluster: undefined
  };
  if (output.Cluster !== undefined && output.Cluster !== null) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeJobFlowsOutput = (
  output: any,
  context: __SerdeContext
): DescribeJobFlowsOutput => {
  let contents: any = {
    __type: "DescribeJobFlowsOutput",
    JobFlows: undefined
  };
  if (output.JobFlows !== undefined && output.JobFlows !== null) {
    contents.JobFlows = deserializeAws_json1_1JobFlowDetailList(
      output.JobFlows,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSecurityConfigurationOutput = (
  output: any,
  context: __SerdeContext
): DescribeSecurityConfigurationOutput => {
  let contents: any = {
    __type: "DescribeSecurityConfigurationOutput",
    CreationDateTime: undefined,
    Name: undefined,
    SecurityConfiguration: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.SecurityConfiguration !== undefined &&
    output.SecurityConfiguration !== null
  ) {
    contents.SecurityConfiguration = output.SecurityConfiguration;
  }
  return contents;
};

const deserializeAws_json1_1DescribeStepOutput = (
  output: any,
  context: __SerdeContext
): DescribeStepOutput => {
  let contents: any = {
    __type: "DescribeStepOutput",
    Step: undefined
  };
  if (output.Step !== undefined && output.Step !== null) {
    contents.Step = deserializeAws_json1_1Step(output.Step, context);
  }
  return contents;
};

const deserializeAws_json1_1EC2InstanceIdsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1EbsBlockDevice = (
  output: any,
  context: __SerdeContext
): EbsBlockDevice => {
  let contents: any = {
    __type: "EbsBlockDevice",
    Device: undefined,
    VolumeSpecification: undefined
  };
  if (output.Device !== undefined && output.Device !== null) {
    contents.Device = output.Device;
  }
  if (
    output.VolumeSpecification !== undefined &&
    output.VolumeSpecification !== null
  ) {
    contents.VolumeSpecification = deserializeAws_json1_1VolumeSpecification(
      output.VolumeSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EbsBlockDeviceList = (
  output: any,
  context: __SerdeContext
): Array<EbsBlockDevice> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EbsBlockDevice(entry, context)
  );
};

const deserializeAws_json1_1EbsVolume = (
  output: any,
  context: __SerdeContext
): EbsVolume => {
  let contents: any = {
    __type: "EbsVolume",
    Device: undefined,
    VolumeId: undefined
  };
  if (output.Device !== undefined && output.Device !== null) {
    contents.Device = output.Device;
  }
  if (output.VolumeId !== undefined && output.VolumeId !== null) {
    contents.VolumeId = output.VolumeId;
  }
  return contents;
};

const deserializeAws_json1_1EbsVolumeList = (
  output: any,
  context: __SerdeContext
): Array<EbsVolume> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EbsVolume(entry, context)
  );
};

const deserializeAws_json1_1Ec2InstanceAttributes = (
  output: any,
  context: __SerdeContext
): Ec2InstanceAttributes => {
  let contents: any = {
    __type: "Ec2InstanceAttributes",
    AdditionalMasterSecurityGroups: undefined,
    AdditionalSlaveSecurityGroups: undefined,
    Ec2AvailabilityZone: undefined,
    Ec2KeyName: undefined,
    Ec2SubnetId: undefined,
    EmrManagedMasterSecurityGroup: undefined,
    EmrManagedSlaveSecurityGroup: undefined,
    IamInstanceProfile: undefined,
    RequestedEc2AvailabilityZones: undefined,
    RequestedEc2SubnetIds: undefined,
    ServiceAccessSecurityGroup: undefined
  };
  if (
    output.AdditionalMasterSecurityGroups !== undefined &&
    output.AdditionalMasterSecurityGroups !== null
  ) {
    contents.AdditionalMasterSecurityGroups = deserializeAws_json1_1StringList(
      output.AdditionalMasterSecurityGroups,
      context
    );
  }
  if (
    output.AdditionalSlaveSecurityGroups !== undefined &&
    output.AdditionalSlaveSecurityGroups !== null
  ) {
    contents.AdditionalSlaveSecurityGroups = deserializeAws_json1_1StringList(
      output.AdditionalSlaveSecurityGroups,
      context
    );
  }
  if (
    output.Ec2AvailabilityZone !== undefined &&
    output.Ec2AvailabilityZone !== null
  ) {
    contents.Ec2AvailabilityZone = output.Ec2AvailabilityZone;
  }
  if (output.Ec2KeyName !== undefined && output.Ec2KeyName !== null) {
    contents.Ec2KeyName = output.Ec2KeyName;
  }
  if (output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null) {
    contents.Ec2SubnetId = output.Ec2SubnetId;
  }
  if (
    output.EmrManagedMasterSecurityGroup !== undefined &&
    output.EmrManagedMasterSecurityGroup !== null
  ) {
    contents.EmrManagedMasterSecurityGroup =
      output.EmrManagedMasterSecurityGroup;
  }
  if (
    output.EmrManagedSlaveSecurityGroup !== undefined &&
    output.EmrManagedSlaveSecurityGroup !== null
  ) {
    contents.EmrManagedSlaveSecurityGroup = output.EmrManagedSlaveSecurityGroup;
  }
  if (
    output.IamInstanceProfile !== undefined &&
    output.IamInstanceProfile !== null
  ) {
    contents.IamInstanceProfile = output.IamInstanceProfile;
  }
  if (
    output.RequestedEc2AvailabilityZones !== undefined &&
    output.RequestedEc2AvailabilityZones !== null
  ) {
    contents.RequestedEc2AvailabilityZones = deserializeAws_json1_1XmlStringMaxLen256List(
      output.RequestedEc2AvailabilityZones,
      context
    );
  }
  if (
    output.RequestedEc2SubnetIds !== undefined &&
    output.RequestedEc2SubnetIds !== null
  ) {
    contents.RequestedEc2SubnetIds = deserializeAws_json1_1XmlStringMaxLen256List(
      output.RequestedEc2SubnetIds,
      context
    );
  }
  if (
    output.ServiceAccessSecurityGroup !== undefined &&
    output.ServiceAccessSecurityGroup !== null
  ) {
    contents.ServiceAccessSecurityGroup = output.ServiceAccessSecurityGroup;
  }
  return contents;
};

const deserializeAws_json1_1FailureDetails = (
  output: any,
  context: __SerdeContext
): FailureDetails => {
  let contents: any = {
    __type: "FailureDetails",
    LogFile: undefined,
    Message: undefined,
    Reason: undefined
  };
  if (output.LogFile !== undefined && output.LogFile !== null) {
    contents.LogFile = output.LogFile;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1GetBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): GetBlockPublicAccessConfigurationOutput => {
  let contents: any = {
    __type: "GetBlockPublicAccessConfigurationOutput",
    BlockPublicAccessConfiguration: undefined,
    BlockPublicAccessConfigurationMetadata: undefined
  };
  if (
    output.BlockPublicAccessConfiguration !== undefined &&
    output.BlockPublicAccessConfiguration !== null
  ) {
    contents.BlockPublicAccessConfiguration = deserializeAws_json1_1BlockPublicAccessConfiguration(
      output.BlockPublicAccessConfiguration,
      context
    );
  }
  if (
    output.BlockPublicAccessConfigurationMetadata !== undefined &&
    output.BlockPublicAccessConfigurationMetadata !== null
  ) {
    contents.BlockPublicAccessConfigurationMetadata = deserializeAws_json1_1BlockPublicAccessConfigurationMetadata(
      output.BlockPublicAccessConfigurationMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HadoopJarStepConfig = (
  output: any,
  context: __SerdeContext
): HadoopJarStepConfig => {
  let contents: any = {
    __type: "HadoopJarStepConfig",
    Args: undefined,
    Jar: undefined,
    MainClass: undefined,
    Properties: undefined
  };
  if (output.Args !== undefined && output.Args !== null) {
    contents.Args = deserializeAws_json1_1XmlStringList(output.Args, context);
  }
  if (output.Jar !== undefined && output.Jar !== null) {
    contents.Jar = output.Jar;
  }
  if (output.MainClass !== undefined && output.MainClass !== null) {
    contents.MainClass = output.MainClass;
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1KeyValueList(
      output.Properties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HadoopStepConfig = (
  output: any,
  context: __SerdeContext
): HadoopStepConfig => {
  let contents: any = {
    __type: "HadoopStepConfig",
    Args: undefined,
    Jar: undefined,
    MainClass: undefined,
    Properties: undefined
  };
  if (output.Args !== undefined && output.Args !== null) {
    contents.Args = deserializeAws_json1_1StringList(output.Args, context);
  }
  if (output.Jar !== undefined && output.Jar !== null) {
    contents.Jar = output.Jar;
  }
  if (output.MainClass !== undefined && output.MainClass !== null) {
    contents.MainClass = output.MainClass;
  }
  if (output.Properties !== undefined && output.Properties !== null) {
    contents.Properties = deserializeAws_json1_1StringMap(
      output.Properties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Instance = (
  output: any,
  context: __SerdeContext
): Instance => {
  let contents: any = {
    __type: "Instance",
    EbsVolumes: undefined,
    Ec2InstanceId: undefined,
    Id: undefined,
    InstanceFleetId: undefined,
    InstanceGroupId: undefined,
    InstanceType: undefined,
    Market: undefined,
    PrivateDnsName: undefined,
    PrivateIpAddress: undefined,
    PublicDnsName: undefined,
    PublicIpAddress: undefined,
    Status: undefined
  };
  if (output.EbsVolumes !== undefined && output.EbsVolumes !== null) {
    contents.EbsVolumes = deserializeAws_json1_1EbsVolumeList(
      output.EbsVolumes,
      context
    );
  }
  if (output.Ec2InstanceId !== undefined && output.Ec2InstanceId !== null) {
    contents.Ec2InstanceId = output.Ec2InstanceId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceFleetId !== undefined && output.InstanceFleetId !== null) {
    contents.InstanceFleetId = output.InstanceFleetId;
  }
  if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
    contents.InstanceGroupId = output.InstanceGroupId;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.Market !== undefined && output.Market !== null) {
    contents.Market = output.Market;
  }
  if (output.PrivateDnsName !== undefined && output.PrivateDnsName !== null) {
    contents.PrivateDnsName = output.PrivateDnsName;
  }
  if (
    output.PrivateIpAddress !== undefined &&
    output.PrivateIpAddress !== null
  ) {
    contents.PrivateIpAddress = output.PrivateIpAddress;
  }
  if (output.PublicDnsName !== undefined && output.PublicDnsName !== null) {
    contents.PublicDnsName = output.PublicDnsName;
  }
  if (output.PublicIpAddress !== undefined && output.PublicIpAddress !== null) {
    contents.PublicIpAddress = output.PublicIpAddress;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1InstanceStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceFleet = (
  output: any,
  context: __SerdeContext
): InstanceFleet => {
  let contents: any = {
    __type: "InstanceFleet",
    Id: undefined,
    InstanceFleetType: undefined,
    InstanceTypeSpecifications: undefined,
    LaunchSpecifications: undefined,
    Name: undefined,
    ProvisionedOnDemandCapacity: undefined,
    ProvisionedSpotCapacity: undefined,
    Status: undefined,
    TargetOnDemandCapacity: undefined,
    TargetSpotCapacity: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.InstanceFleetType !== undefined &&
    output.InstanceFleetType !== null
  ) {
    contents.InstanceFleetType = output.InstanceFleetType;
  }
  if (
    output.InstanceTypeSpecifications !== undefined &&
    output.InstanceTypeSpecifications !== null
  ) {
    contents.InstanceTypeSpecifications = deserializeAws_json1_1InstanceTypeSpecificationList(
      output.InstanceTypeSpecifications,
      context
    );
  }
  if (
    output.LaunchSpecifications !== undefined &&
    output.LaunchSpecifications !== null
  ) {
    contents.LaunchSpecifications = deserializeAws_json1_1InstanceFleetProvisioningSpecifications(
      output.LaunchSpecifications,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.ProvisionedOnDemandCapacity !== undefined &&
    output.ProvisionedOnDemandCapacity !== null
  ) {
    contents.ProvisionedOnDemandCapacity = output.ProvisionedOnDemandCapacity;
  }
  if (
    output.ProvisionedSpotCapacity !== undefined &&
    output.ProvisionedSpotCapacity !== null
  ) {
    contents.ProvisionedSpotCapacity = output.ProvisionedSpotCapacity;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1InstanceFleetStatus(
      output.Status,
      context
    );
  }
  if (
    output.TargetOnDemandCapacity !== undefined &&
    output.TargetOnDemandCapacity !== null
  ) {
    contents.TargetOnDemandCapacity = output.TargetOnDemandCapacity;
  }
  if (
    output.TargetSpotCapacity !== undefined &&
    output.TargetSpotCapacity !== null
  ) {
    contents.TargetSpotCapacity = output.TargetSpotCapacity;
  }
  return contents;
};

const deserializeAws_json1_1InstanceFleetList = (
  output: any,
  context: __SerdeContext
): Array<InstanceFleet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceFleet(entry, context)
  );
};

const deserializeAws_json1_1InstanceFleetProvisioningSpecifications = (
  output: any,
  context: __SerdeContext
): InstanceFleetProvisioningSpecifications => {
  let contents: any = {
    __type: "InstanceFleetProvisioningSpecifications",
    SpotSpecification: undefined
  };
  if (
    output.SpotSpecification !== undefined &&
    output.SpotSpecification !== null
  ) {
    contents.SpotSpecification = deserializeAws_json1_1SpotProvisioningSpecification(
      output.SpotSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceFleetStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceFleetStateChangeReason => {
  let contents: any = {
    __type: "InstanceFleetStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceFleetStatus = (
  output: any,
  context: __SerdeContext
): InstanceFleetStatus => {
  let contents: any = {
    __type: "InstanceFleetStatus",
    State: undefined,
    StateChangeReason: undefined,
    Timeline: undefined
  };
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1InstanceFleetStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Timeline !== undefined && output.Timeline !== null) {
    contents.Timeline = deserializeAws_json1_1InstanceFleetTimeline(
      output.Timeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceFleetTimeline = (
  output: any,
  context: __SerdeContext
): InstanceFleetTimeline => {
  let contents: any = {
    __type: "InstanceFleetTimeline",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    ReadyDateTime: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1InstanceGroup = (
  output: any,
  context: __SerdeContext
): InstanceGroup => {
  let contents: any = {
    __type: "InstanceGroup",
    AutoScalingPolicy: undefined,
    BidPrice: undefined,
    Configurations: undefined,
    ConfigurationsVersion: undefined,
    EbsBlockDevices: undefined,
    EbsOptimized: undefined,
    Id: undefined,
    InstanceGroupType: undefined,
    InstanceType: undefined,
    LastSuccessfullyAppliedConfigurations: undefined,
    LastSuccessfullyAppliedConfigurationsVersion: undefined,
    Market: undefined,
    Name: undefined,
    RequestedInstanceCount: undefined,
    RunningInstanceCount: undefined,
    ShrinkPolicy: undefined,
    Status: undefined
  };
  if (
    output.AutoScalingPolicy !== undefined &&
    output.AutoScalingPolicy !== null
  ) {
    contents.AutoScalingPolicy = deserializeAws_json1_1AutoScalingPolicyDescription(
      output.AutoScalingPolicy,
      context
    );
  }
  if (output.BidPrice !== undefined && output.BidPrice !== null) {
    contents.BidPrice = output.BidPrice;
  }
  if (output.Configurations !== undefined && output.Configurations !== null) {
    contents.Configurations = deserializeAws_json1_1ConfigurationList(
      output.Configurations,
      context
    );
  }
  if (
    output.ConfigurationsVersion !== undefined &&
    output.ConfigurationsVersion !== null
  ) {
    contents.ConfigurationsVersion = output.ConfigurationsVersion;
  }
  if (output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null) {
    contents.EbsBlockDevices = deserializeAws_json1_1EbsBlockDeviceList(
      output.EbsBlockDevices,
      context
    );
  }
  if (output.EbsOptimized !== undefined && output.EbsOptimized !== null) {
    contents.EbsOptimized = output.EbsOptimized;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (
    output.InstanceGroupType !== undefined &&
    output.InstanceGroupType !== null
  ) {
    contents.InstanceGroupType = output.InstanceGroupType;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (
    output.LastSuccessfullyAppliedConfigurations !== undefined &&
    output.LastSuccessfullyAppliedConfigurations !== null
  ) {
    contents.LastSuccessfullyAppliedConfigurations = deserializeAws_json1_1ConfigurationList(
      output.LastSuccessfullyAppliedConfigurations,
      context
    );
  }
  if (
    output.LastSuccessfullyAppliedConfigurationsVersion !== undefined &&
    output.LastSuccessfullyAppliedConfigurationsVersion !== null
  ) {
    contents.LastSuccessfullyAppliedConfigurationsVersion =
      output.LastSuccessfullyAppliedConfigurationsVersion;
  }
  if (output.Market !== undefined && output.Market !== null) {
    contents.Market = output.Market;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.RequestedInstanceCount !== undefined &&
    output.RequestedInstanceCount !== null
  ) {
    contents.RequestedInstanceCount = output.RequestedInstanceCount;
  }
  if (
    output.RunningInstanceCount !== undefined &&
    output.RunningInstanceCount !== null
  ) {
    contents.RunningInstanceCount = output.RunningInstanceCount;
  }
  if (output.ShrinkPolicy !== undefined && output.ShrinkPolicy !== null) {
    contents.ShrinkPolicy = deserializeAws_json1_1ShrinkPolicy(
      output.ShrinkPolicy,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1InstanceGroupStatus(
      output.Status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceGroupDetail = (
  output: any,
  context: __SerdeContext
): InstanceGroupDetail => {
  let contents: any = {
    __type: "InstanceGroupDetail",
    BidPrice: undefined,
    CreationDateTime: undefined,
    EndDateTime: undefined,
    InstanceGroupId: undefined,
    InstanceRequestCount: undefined,
    InstanceRole: undefined,
    InstanceRunningCount: undefined,
    InstanceType: undefined,
    LastStateChangeReason: undefined,
    Market: undefined,
    Name: undefined,
    ReadyDateTime: undefined,
    StartDateTime: undefined,
    State: undefined
  };
  if (output.BidPrice !== undefined && output.BidPrice !== null) {
    contents.BidPrice = output.BidPrice;
  }
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
    contents.InstanceGroupId = output.InstanceGroupId;
  }
  if (
    output.InstanceRequestCount !== undefined &&
    output.InstanceRequestCount !== null
  ) {
    contents.InstanceRequestCount = output.InstanceRequestCount;
  }
  if (output.InstanceRole !== undefined && output.InstanceRole !== null) {
    contents.InstanceRole = output.InstanceRole;
  }
  if (
    output.InstanceRunningCount !== undefined &&
    output.InstanceRunningCount !== null
  ) {
    contents.InstanceRunningCount = output.InstanceRunningCount;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (
    output.LastStateChangeReason !== undefined &&
    output.LastStateChangeReason !== null
  ) {
    contents.LastStateChangeReason = output.LastStateChangeReason;
  }
  if (output.Market !== undefined && output.Market !== null) {
    contents.Market = output.Market;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
    contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1InstanceGroupDetailList = (
  output: any,
  context: __SerdeContext
): Array<InstanceGroupDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceGroupDetail(entry, context)
  );
};

const deserializeAws_json1_1InstanceGroupIdsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceGroupList = (
  output: any,
  context: __SerdeContext
): Array<InstanceGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceGroup(entry, context)
  );
};

const deserializeAws_json1_1InstanceGroupStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceGroupStateChangeReason => {
  let contents: any = {
    __type: "InstanceGroupStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceGroupStatus = (
  output: any,
  context: __SerdeContext
): InstanceGroupStatus => {
  let contents: any = {
    __type: "InstanceGroupStatus",
    State: undefined,
    StateChangeReason: undefined,
    Timeline: undefined
  };
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1InstanceGroupStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Timeline !== undefined && output.Timeline !== null) {
    contents.Timeline = deserializeAws_json1_1InstanceGroupTimeline(
      output.Timeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceGroupTimeline = (
  output: any,
  context: __SerdeContext
): InstanceGroupTimeline => {
  let contents: any = {
    __type: "InstanceGroupTimeline",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    ReadyDateTime: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1InstanceList = (
  output: any,
  context: __SerdeContext
): Array<Instance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Instance(entry, context)
  );
};

const deserializeAws_json1_1InstanceResizePolicy = (
  output: any,
  context: __SerdeContext
): InstanceResizePolicy => {
  let contents: any = {
    __type: "InstanceResizePolicy",
    InstanceTerminationTimeout: undefined,
    InstancesToProtect: undefined,
    InstancesToTerminate: undefined
  };
  if (
    output.InstanceTerminationTimeout !== undefined &&
    output.InstanceTerminationTimeout !== null
  ) {
    contents.InstanceTerminationTimeout = output.InstanceTerminationTimeout;
  }
  if (
    output.InstancesToProtect !== undefined &&
    output.InstancesToProtect !== null
  ) {
    contents.InstancesToProtect = deserializeAws_json1_1EC2InstanceIdsList(
      output.InstancesToProtect,
      context
    );
  }
  if (
    output.InstancesToTerminate !== undefined &&
    output.InstancesToTerminate !== null
  ) {
    contents.InstancesToTerminate = deserializeAws_json1_1EC2InstanceIdsList(
      output.InstancesToTerminate,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceStateChangeReason = (
  output: any,
  context: __SerdeContext
): InstanceStateChangeReason => {
  let contents: any = {
    __type: "InstanceStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceStatus = (
  output: any,
  context: __SerdeContext
): InstanceStatus => {
  let contents: any = {
    __type: "InstanceStatus",
    State: undefined,
    StateChangeReason: undefined,
    Timeline: undefined
  };
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1InstanceStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Timeline !== undefined && output.Timeline !== null) {
    contents.Timeline = deserializeAws_json1_1InstanceTimeline(
      output.Timeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceTimeline = (
  output: any,
  context: __SerdeContext
): InstanceTimeline => {
  let contents: any = {
    __type: "InstanceTimeline",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    ReadyDateTime: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1InstanceTypeSpecification = (
  output: any,
  context: __SerdeContext
): InstanceTypeSpecification => {
  let contents: any = {
    __type: "InstanceTypeSpecification",
    BidPrice: undefined,
    BidPriceAsPercentageOfOnDemandPrice: undefined,
    Configurations: undefined,
    EbsBlockDevices: undefined,
    EbsOptimized: undefined,
    InstanceType: undefined,
    WeightedCapacity: undefined
  };
  if (output.BidPrice !== undefined && output.BidPrice !== null) {
    contents.BidPrice = output.BidPrice;
  }
  if (
    output.BidPriceAsPercentageOfOnDemandPrice !== undefined &&
    output.BidPriceAsPercentageOfOnDemandPrice !== null
  ) {
    contents.BidPriceAsPercentageOfOnDemandPrice =
      output.BidPriceAsPercentageOfOnDemandPrice;
  }
  if (output.Configurations !== undefined && output.Configurations !== null) {
    contents.Configurations = deserializeAws_json1_1ConfigurationList(
      output.Configurations,
      context
    );
  }
  if (output.EbsBlockDevices !== undefined && output.EbsBlockDevices !== null) {
    contents.EbsBlockDevices = deserializeAws_json1_1EbsBlockDeviceList(
      output.EbsBlockDevices,
      context
    );
  }
  if (output.EbsOptimized !== undefined && output.EbsOptimized !== null) {
    contents.EbsOptimized = output.EbsOptimized;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (
    output.WeightedCapacity !== undefined &&
    output.WeightedCapacity !== null
  ) {
    contents.WeightedCapacity = output.WeightedCapacity;
  }
  return contents;
};

const deserializeAws_json1_1InstanceTypeSpecificationList = (
  output: any,
  context: __SerdeContext
): Array<InstanceTypeSpecification> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceTypeSpecification(entry, context)
  );
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError"
  };
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    ErrorCode: undefined,
    Message: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1JobFlowDetail = (
  output: any,
  context: __SerdeContext
): JobFlowDetail => {
  let contents: any = {
    __type: "JobFlowDetail",
    AmiVersion: undefined,
    AutoScalingRole: undefined,
    BootstrapActions: undefined,
    ExecutionStatusDetail: undefined,
    Instances: undefined,
    JobFlowId: undefined,
    JobFlowRole: undefined,
    LogUri: undefined,
    Name: undefined,
    ScaleDownBehavior: undefined,
    ServiceRole: undefined,
    Steps: undefined,
    SupportedProducts: undefined,
    VisibleToAllUsers: undefined
  };
  if (output.AmiVersion !== undefined && output.AmiVersion !== null) {
    contents.AmiVersion = output.AmiVersion;
  }
  if (output.AutoScalingRole !== undefined && output.AutoScalingRole !== null) {
    contents.AutoScalingRole = output.AutoScalingRole;
  }
  if (
    output.BootstrapActions !== undefined &&
    output.BootstrapActions !== null
  ) {
    contents.BootstrapActions = deserializeAws_json1_1BootstrapActionDetailList(
      output.BootstrapActions,
      context
    );
  }
  if (
    output.ExecutionStatusDetail !== undefined &&
    output.ExecutionStatusDetail !== null
  ) {
    contents.ExecutionStatusDetail = deserializeAws_json1_1JobFlowExecutionStatusDetail(
      output.ExecutionStatusDetail,
      context
    );
  }
  if (output.Instances !== undefined && output.Instances !== null) {
    contents.Instances = deserializeAws_json1_1JobFlowInstancesDetail(
      output.Instances,
      context
    );
  }
  if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
    contents.JobFlowId = output.JobFlowId;
  }
  if (output.JobFlowRole !== undefined && output.JobFlowRole !== null) {
    contents.JobFlowRole = output.JobFlowRole;
  }
  if (output.LogUri !== undefined && output.LogUri !== null) {
    contents.LogUri = output.LogUri;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.ScaleDownBehavior !== undefined &&
    output.ScaleDownBehavior !== null
  ) {
    contents.ScaleDownBehavior = output.ScaleDownBehavior;
  }
  if (output.ServiceRole !== undefined && output.ServiceRole !== null) {
    contents.ServiceRole = output.ServiceRole;
  }
  if (output.Steps !== undefined && output.Steps !== null) {
    contents.Steps = deserializeAws_json1_1StepDetailList(
      output.Steps,
      context
    );
  }
  if (
    output.SupportedProducts !== undefined &&
    output.SupportedProducts !== null
  ) {
    contents.SupportedProducts = deserializeAws_json1_1SupportedProductsList(
      output.SupportedProducts,
      context
    );
  }
  if (
    output.VisibleToAllUsers !== undefined &&
    output.VisibleToAllUsers !== null
  ) {
    contents.VisibleToAllUsers = output.VisibleToAllUsers;
  }
  return contents;
};

const deserializeAws_json1_1JobFlowDetailList = (
  output: any,
  context: __SerdeContext
): Array<JobFlowDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobFlowDetail(entry, context)
  );
};

const deserializeAws_json1_1JobFlowExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): JobFlowExecutionStatusDetail => {
  let contents: any = {
    __type: "JobFlowExecutionStatusDetail",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    LastStateChangeReason: undefined,
    ReadyDateTime: undefined,
    StartDateTime: undefined,
    State: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (
    output.LastStateChangeReason !== undefined &&
    output.LastStateChangeReason !== null
  ) {
    contents.LastStateChangeReason = output.LastStateChangeReason;
  }
  if (output.ReadyDateTime !== undefined && output.ReadyDateTime !== null) {
    contents.ReadyDateTime = new Date(Math.round(output.ReadyDateTime * 1000));
  }
  if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
    contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1JobFlowInstancesDetail = (
  output: any,
  context: __SerdeContext
): JobFlowInstancesDetail => {
  let contents: any = {
    __type: "JobFlowInstancesDetail",
    Ec2KeyName: undefined,
    Ec2SubnetId: undefined,
    HadoopVersion: undefined,
    InstanceCount: undefined,
    InstanceGroups: undefined,
    KeepJobFlowAliveWhenNoSteps: undefined,
    MasterInstanceId: undefined,
    MasterInstanceType: undefined,
    MasterPublicDnsName: undefined,
    NormalizedInstanceHours: undefined,
    Placement: undefined,
    SlaveInstanceType: undefined,
    TerminationProtected: undefined
  };
  if (output.Ec2KeyName !== undefined && output.Ec2KeyName !== null) {
    contents.Ec2KeyName = output.Ec2KeyName;
  }
  if (output.Ec2SubnetId !== undefined && output.Ec2SubnetId !== null) {
    contents.Ec2SubnetId = output.Ec2SubnetId;
  }
  if (output.HadoopVersion !== undefined && output.HadoopVersion !== null) {
    contents.HadoopVersion = output.HadoopVersion;
  }
  if (output.InstanceCount !== undefined && output.InstanceCount !== null) {
    contents.InstanceCount = output.InstanceCount;
  }
  if (output.InstanceGroups !== undefined && output.InstanceGroups !== null) {
    contents.InstanceGroups = deserializeAws_json1_1InstanceGroupDetailList(
      output.InstanceGroups,
      context
    );
  }
  if (
    output.KeepJobFlowAliveWhenNoSteps !== undefined &&
    output.KeepJobFlowAliveWhenNoSteps !== null
  ) {
    contents.KeepJobFlowAliveWhenNoSteps = output.KeepJobFlowAliveWhenNoSteps;
  }
  if (
    output.MasterInstanceId !== undefined &&
    output.MasterInstanceId !== null
  ) {
    contents.MasterInstanceId = output.MasterInstanceId;
  }
  if (
    output.MasterInstanceType !== undefined &&
    output.MasterInstanceType !== null
  ) {
    contents.MasterInstanceType = output.MasterInstanceType;
  }
  if (
    output.MasterPublicDnsName !== undefined &&
    output.MasterPublicDnsName !== null
  ) {
    contents.MasterPublicDnsName = output.MasterPublicDnsName;
  }
  if (
    output.NormalizedInstanceHours !== undefined &&
    output.NormalizedInstanceHours !== null
  ) {
    contents.NormalizedInstanceHours = output.NormalizedInstanceHours;
  }
  if (output.Placement !== undefined && output.Placement !== null) {
    contents.Placement = deserializeAws_json1_1PlacementType(
      output.Placement,
      context
    );
  }
  if (
    output.SlaveInstanceType !== undefined &&
    output.SlaveInstanceType !== null
  ) {
    contents.SlaveInstanceType = output.SlaveInstanceType;
  }
  if (
    output.TerminationProtected !== undefined &&
    output.TerminationProtected !== null
  ) {
    contents.TerminationProtected = output.TerminationProtected;
  }
  return contents;
};

const deserializeAws_json1_1KerberosAttributes = (
  output: any,
  context: __SerdeContext
): KerberosAttributes => {
  let contents: any = {
    __type: "KerberosAttributes",
    ADDomainJoinPassword: undefined,
    ADDomainJoinUser: undefined,
    CrossRealmTrustPrincipalPassword: undefined,
    KdcAdminPassword: undefined,
    Realm: undefined
  };
  if (
    output.ADDomainJoinPassword !== undefined &&
    output.ADDomainJoinPassword !== null
  ) {
    contents.ADDomainJoinPassword = output.ADDomainJoinPassword;
  }
  if (
    output.ADDomainJoinUser !== undefined &&
    output.ADDomainJoinUser !== null
  ) {
    contents.ADDomainJoinUser = output.ADDomainJoinUser;
  }
  if (
    output.CrossRealmTrustPrincipalPassword !== undefined &&
    output.CrossRealmTrustPrincipalPassword !== null
  ) {
    contents.CrossRealmTrustPrincipalPassword =
      output.CrossRealmTrustPrincipalPassword;
  }
  if (
    output.KdcAdminPassword !== undefined &&
    output.KdcAdminPassword !== null
  ) {
    contents.KdcAdminPassword = output.KdcAdminPassword;
  }
  if (output.Realm !== undefined && output.Realm !== null) {
    contents.Realm = output.Realm;
  }
  return contents;
};

const deserializeAws_json1_1KeyValue = (
  output: any,
  context: __SerdeContext
): KeyValue => {
  let contents: any = {
    __type: "KeyValue",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1KeyValueList = (
  output: any,
  context: __SerdeContext
): Array<KeyValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyValue(entry, context)
  );
};

const deserializeAws_json1_1ListBootstrapActionsOutput = (
  output: any,
  context: __SerdeContext
): ListBootstrapActionsOutput => {
  let contents: any = {
    __type: "ListBootstrapActionsOutput",
    BootstrapActions: undefined,
    Marker: undefined
  };
  if (
    output.BootstrapActions !== undefined &&
    output.BootstrapActions !== null
  ) {
    contents.BootstrapActions = deserializeAws_json1_1CommandList(
      output.BootstrapActions,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListClustersOutput = (
  output: any,
  context: __SerdeContext
): ListClustersOutput => {
  let contents: any = {
    __type: "ListClustersOutput",
    Clusters: undefined,
    Marker: undefined
  };
  if (output.Clusters !== undefined && output.Clusters !== null) {
    contents.Clusters = deserializeAws_json1_1ClusterSummaryList(
      output.Clusters,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListInstanceFleetsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceFleetsOutput => {
  let contents: any = {
    __type: "ListInstanceFleetsOutput",
    InstanceFleets: undefined,
    Marker: undefined
  };
  if (output.InstanceFleets !== undefined && output.InstanceFleets !== null) {
    contents.InstanceFleets = deserializeAws_json1_1InstanceFleetList(
      output.InstanceFleets,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListInstanceGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListInstanceGroupsOutput => {
  let contents: any = {
    __type: "ListInstanceGroupsOutput",
    InstanceGroups: undefined,
    Marker: undefined
  };
  if (output.InstanceGroups !== undefined && output.InstanceGroups !== null) {
    contents.InstanceGroups = deserializeAws_json1_1InstanceGroupList(
      output.InstanceGroups,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListInstancesOutput => {
  let contents: any = {
    __type: "ListInstancesOutput",
    Instances: undefined,
    Marker: undefined
  };
  if (output.Instances !== undefined && output.Instances !== null) {
    contents.Instances = deserializeAws_json1_1InstanceList(
      output.Instances,
      context
    );
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  return contents;
};

const deserializeAws_json1_1ListSecurityConfigurationsOutput = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigurationsOutput => {
  let contents: any = {
    __type: "ListSecurityConfigurationsOutput",
    Marker: undefined,
    SecurityConfigurations: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (
    output.SecurityConfigurations !== undefined &&
    output.SecurityConfigurations !== null
  ) {
    contents.SecurityConfigurations = deserializeAws_json1_1SecurityConfigurationList(
      output.SecurityConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListStepsOutput = (
  output: any,
  context: __SerdeContext
): ListStepsOutput => {
  let contents: any = {
    __type: "ListStepsOutput",
    Marker: undefined,
    Steps: undefined
  };
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.Steps !== undefined && output.Steps !== null) {
    contents.Steps = deserializeAws_json1_1StepSummaryList(
      output.Steps,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  let contents: any = {
    __type: "MetricDimension",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1MetricDimensionList = (
  output: any,
  context: __SerdeContext
): Array<MetricDimension> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDimension(entry, context)
  );
};

const deserializeAws_json1_1ModifyClusterOutput = (
  output: any,
  context: __SerdeContext
): ModifyClusterOutput => {
  let contents: any = {
    __type: "ModifyClusterOutput",
    StepConcurrencyLevel: undefined
  };
  if (
    output.StepConcurrencyLevel !== undefined &&
    output.StepConcurrencyLevel !== null
  ) {
    contents.StepConcurrencyLevel = output.StepConcurrencyLevel;
  }
  return contents;
};

const deserializeAws_json1_1PlacementType = (
  output: any,
  context: __SerdeContext
): PlacementType => {
  let contents: any = {
    __type: "PlacementType",
    AvailabilityZone: undefined,
    AvailabilityZones: undefined
  };
  if (
    output.AvailabilityZone !== undefined &&
    output.AvailabilityZone !== null
  ) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_json1_1XmlStringMaxLen256List(
      output.AvailabilityZones,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PortRange = (
  output: any,
  context: __SerdeContext
): PortRange => {
  let contents: any = {
    __type: "PortRange",
    MaxRange: undefined,
    MinRange: undefined
  };
  if (output.MaxRange !== undefined && output.MaxRange !== null) {
    contents.MaxRange = output.MaxRange;
  }
  if (output.MinRange !== undefined && output.MinRange !== null) {
    contents.MinRange = output.MinRange;
  }
  return contents;
};

const deserializeAws_json1_1PortRanges = (
  output: any,
  context: __SerdeContext
): Array<PortRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PortRange(entry, context)
  );
};

const deserializeAws_json1_1PutAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): PutAutoScalingPolicyOutput => {
  let contents: any = {
    __type: "PutAutoScalingPolicyOutput",
    AutoScalingPolicy: undefined,
    ClusterArn: undefined,
    ClusterId: undefined,
    InstanceGroupId: undefined
  };
  if (
    output.AutoScalingPolicy !== undefined &&
    output.AutoScalingPolicy !== null
  ) {
    contents.AutoScalingPolicy = deserializeAws_json1_1AutoScalingPolicyDescription(
      output.AutoScalingPolicy,
      context
    );
  }
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.InstanceGroupId !== undefined && output.InstanceGroupId !== null) {
    contents.InstanceGroupId = output.InstanceGroupId;
  }
  return contents;
};

const deserializeAws_json1_1PutBlockPublicAccessConfigurationOutput = (
  output: any,
  context: __SerdeContext
): PutBlockPublicAccessConfigurationOutput => {
  let contents: any = {
    __type: "PutBlockPublicAccessConfigurationOutput"
  };
  return contents;
};

const deserializeAws_json1_1RemoveAutoScalingPolicyOutput = (
  output: any,
  context: __SerdeContext
): RemoveAutoScalingPolicyOutput => {
  let contents: any = {
    __type: "RemoveAutoScalingPolicyOutput"
  };
  return contents;
};

const deserializeAws_json1_1RemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  let contents: any = {
    __type: "RemoveTagsOutput"
  };
  return contents;
};

const deserializeAws_json1_1RunJobFlowOutput = (
  output: any,
  context: __SerdeContext
): RunJobFlowOutput => {
  let contents: any = {
    __type: "RunJobFlowOutput",
    ClusterArn: undefined,
    JobFlowId: undefined
  };
  if (output.ClusterArn !== undefined && output.ClusterArn !== null) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.JobFlowId !== undefined && output.JobFlowId !== null) {
    contents.JobFlowId = output.JobFlowId;
  }
  return contents;
};

const deserializeAws_json1_1ScalingAction = (
  output: any,
  context: __SerdeContext
): ScalingAction => {
  let contents: any = {
    __type: "ScalingAction",
    Market: undefined,
    SimpleScalingPolicyConfiguration: undefined
  };
  if (output.Market !== undefined && output.Market !== null) {
    contents.Market = output.Market;
  }
  if (
    output.SimpleScalingPolicyConfiguration !== undefined &&
    output.SimpleScalingPolicyConfiguration !== null
  ) {
    contents.SimpleScalingPolicyConfiguration = deserializeAws_json1_1SimpleScalingPolicyConfiguration(
      output.SimpleScalingPolicyConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ScalingConstraints = (
  output: any,
  context: __SerdeContext
): ScalingConstraints => {
  let contents: any = {
    __type: "ScalingConstraints",
    MaxCapacity: undefined,
    MinCapacity: undefined
  };
  if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
    contents.MinCapacity = output.MinCapacity;
  }
  return contents;
};

const deserializeAws_json1_1ScalingRule = (
  output: any,
  context: __SerdeContext
): ScalingRule => {
  let contents: any = {
    __type: "ScalingRule",
    Action: undefined,
    Description: undefined,
    Name: undefined,
    Trigger: undefined
  };
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = deserializeAws_json1_1ScalingAction(
      output.Action,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Trigger !== undefined && output.Trigger !== null) {
    contents.Trigger = deserializeAws_json1_1ScalingTrigger(
      output.Trigger,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ScalingRuleList = (
  output: any,
  context: __SerdeContext
): Array<ScalingRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingRule(entry, context)
  );
};

const deserializeAws_json1_1ScalingTrigger = (
  output: any,
  context: __SerdeContext
): ScalingTrigger => {
  let contents: any = {
    __type: "ScalingTrigger",
    CloudWatchAlarmDefinition: undefined
  };
  if (
    output.CloudWatchAlarmDefinition !== undefined &&
    output.CloudWatchAlarmDefinition !== null
  ) {
    contents.CloudWatchAlarmDefinition = deserializeAws_json1_1CloudWatchAlarmDefinition(
      output.CloudWatchAlarmDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ScriptBootstrapActionConfig = (
  output: any,
  context: __SerdeContext
): ScriptBootstrapActionConfig => {
  let contents: any = {
    __type: "ScriptBootstrapActionConfig",
    Args: undefined,
    Path: undefined
  };
  if (output.Args !== undefined && output.Args !== null) {
    contents.Args = deserializeAws_json1_1XmlStringList(output.Args, context);
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  return contents;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): Array<SecurityConfigurationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecurityConfigurationSummary(entry, context)
  );
};

const deserializeAws_json1_1SecurityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): SecurityConfigurationSummary => {
  let contents: any = {
    __type: "SecurityConfigurationSummary",
    CreationDateTime: undefined,
    Name: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1ShrinkPolicy = (
  output: any,
  context: __SerdeContext
): ShrinkPolicy => {
  let contents: any = {
    __type: "ShrinkPolicy",
    DecommissionTimeout: undefined,
    InstanceResizePolicy: undefined
  };
  if (
    output.DecommissionTimeout !== undefined &&
    output.DecommissionTimeout !== null
  ) {
    contents.DecommissionTimeout = output.DecommissionTimeout;
  }
  if (
    output.InstanceResizePolicy !== undefined &&
    output.InstanceResizePolicy !== null
  ) {
    contents.InstanceResizePolicy = deserializeAws_json1_1InstanceResizePolicy(
      output.InstanceResizePolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SimpleScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): SimpleScalingPolicyConfiguration => {
  let contents: any = {
    __type: "SimpleScalingPolicyConfiguration",
    AdjustmentType: undefined,
    CoolDown: undefined,
    ScalingAdjustment: undefined
  };
  if (output.AdjustmentType !== undefined && output.AdjustmentType !== null) {
    contents.AdjustmentType = output.AdjustmentType;
  }
  if (output.CoolDown !== undefined && output.CoolDown !== null) {
    contents.CoolDown = output.CoolDown;
  }
  if (
    output.ScalingAdjustment !== undefined &&
    output.ScalingAdjustment !== null
  ) {
    contents.ScalingAdjustment = output.ScalingAdjustment;
  }
  return contents;
};

const deserializeAws_json1_1SpotProvisioningSpecification = (
  output: any,
  context: __SerdeContext
): SpotProvisioningSpecification => {
  let contents: any = {
    __type: "SpotProvisioningSpecification",
    BlockDurationMinutes: undefined,
    TimeoutAction: undefined,
    TimeoutDurationMinutes: undefined
  };
  if (
    output.BlockDurationMinutes !== undefined &&
    output.BlockDurationMinutes !== null
  ) {
    contents.BlockDurationMinutes = output.BlockDurationMinutes;
  }
  if (output.TimeoutAction !== undefined && output.TimeoutAction !== null) {
    contents.TimeoutAction = output.TimeoutAction;
  }
  if (
    output.TimeoutDurationMinutes !== undefined &&
    output.TimeoutDurationMinutes !== null
  ) {
    contents.TimeoutDurationMinutes = output.TimeoutDurationMinutes;
  }
  return contents;
};

const deserializeAws_json1_1Step = (
  output: any,
  context: __SerdeContext
): Step => {
  let contents: any = {
    __type: "Step",
    ActionOnFailure: undefined,
    Config: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
    contents.ActionOnFailure = output.ActionOnFailure;
  }
  if (output.Config !== undefined && output.Config !== null) {
    contents.Config = deserializeAws_json1_1HadoopStepConfig(
      output.Config,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1StepStatus(output.Status, context);
  }
  return contents;
};

const deserializeAws_json1_1StepConfig = (
  output: any,
  context: __SerdeContext
): StepConfig => {
  let contents: any = {
    __type: "StepConfig",
    ActionOnFailure: undefined,
    HadoopJarStep: undefined,
    Name: undefined
  };
  if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
    contents.ActionOnFailure = output.ActionOnFailure;
  }
  if (output.HadoopJarStep !== undefined && output.HadoopJarStep !== null) {
    contents.HadoopJarStep = deserializeAws_json1_1HadoopJarStepConfig(
      output.HadoopJarStep,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1StepDetail = (
  output: any,
  context: __SerdeContext
): StepDetail => {
  let contents: any = {
    __type: "StepDetail",
    ExecutionStatusDetail: undefined,
    StepConfig: undefined
  };
  if (
    output.ExecutionStatusDetail !== undefined &&
    output.ExecutionStatusDetail !== null
  ) {
    contents.ExecutionStatusDetail = deserializeAws_json1_1StepExecutionStatusDetail(
      output.ExecutionStatusDetail,
      context
    );
  }
  if (output.StepConfig !== undefined && output.StepConfig !== null) {
    contents.StepConfig = deserializeAws_json1_1StepConfig(
      output.StepConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StepDetailList = (
  output: any,
  context: __SerdeContext
): Array<StepDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepDetail(entry, context)
  );
};

const deserializeAws_json1_1StepExecutionStatusDetail = (
  output: any,
  context: __SerdeContext
): StepExecutionStatusDetail => {
  let contents: any = {
    __type: "StepExecutionStatusDetail",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    LastStateChangeReason: undefined,
    StartDateTime: undefined,
    State: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (
    output.LastStateChangeReason !== undefined &&
    output.LastStateChangeReason !== null
  ) {
    contents.LastStateChangeReason = output.LastStateChangeReason;
  }
  if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
    contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1StepIdsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StepStateChangeReason = (
  output: any,
  context: __SerdeContext
): StepStateChangeReason => {
  let contents: any = {
    __type: "StepStateChangeReason",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1StepStatus = (
  output: any,
  context: __SerdeContext
): StepStatus => {
  let contents: any = {
    __type: "StepStatus",
    FailureDetails: undefined,
    State: undefined,
    StateChangeReason: undefined,
    Timeline: undefined
  };
  if (output.FailureDetails !== undefined && output.FailureDetails !== null) {
    contents.FailureDetails = deserializeAws_json1_1FailureDetails(
      output.FailureDetails,
      context
    );
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = deserializeAws_json1_1StepStateChangeReason(
      output.StateChangeReason,
      context
    );
  }
  if (output.Timeline !== undefined && output.Timeline !== null) {
    contents.Timeline = deserializeAws_json1_1StepTimeline(
      output.Timeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StepSummary = (
  output: any,
  context: __SerdeContext
): StepSummary => {
  let contents: any = {
    __type: "StepSummary",
    ActionOnFailure: undefined,
    Config: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.ActionOnFailure !== undefined && output.ActionOnFailure !== null) {
    contents.ActionOnFailure = output.ActionOnFailure;
  }
  if (output.Config !== undefined && output.Config !== null) {
    contents.Config = deserializeAws_json1_1HadoopStepConfig(
      output.Config,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1StepStatus(output.Status, context);
  }
  return contents;
};

const deserializeAws_json1_1StepSummaryList = (
  output: any,
  context: __SerdeContext
): Array<StepSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepSummary(entry, context)
  );
};

const deserializeAws_json1_1StepTimeline = (
  output: any,
  context: __SerdeContext
): StepTimeline => {
  let contents: any = {
    __type: "StepTimeline",
    CreationDateTime: undefined,
    EndDateTime: undefined,
    StartDateTime: undefined
  };
  if (
    output.CreationDateTime !== undefined &&
    output.CreationDateTime !== null
  ) {
    contents.CreationDateTime = new Date(
      Math.round(output.CreationDateTime * 1000)
    );
  }
  if (output.EndDateTime !== undefined && output.EndDateTime !== null) {
    contents.EndDateTime = new Date(Math.round(output.EndDateTime * 1000));
  }
  if (output.StartDateTime !== undefined && output.StartDateTime !== null) {
    contents.StartDateTime = new Date(Math.round(output.StartDateTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1SupportedProductsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1VolumeSpecification = (
  output: any,
  context: __SerdeContext
): VolumeSpecification => {
  let contents: any = {
    __type: "VolumeSpecification",
    Iops: undefined,
    SizeInGB: undefined,
    VolumeType: undefined
  };
  if (output.Iops !== undefined && output.Iops !== null) {
    contents.Iops = output.Iops;
  }
  if (output.SizeInGB !== undefined && output.SizeInGB !== null) {
    contents.SizeInGB = output.SizeInGB;
  }
  if (output.VolumeType !== undefined && output.VolumeType !== null) {
    contents.VolumeType = output.VolumeType;
  }
  return contents;
};

const deserializeAws_json1_1XmlStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1XmlStringMaxLen256List = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
