// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "../commands/CreateParameterGroupCommand";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "../commands/CreateSubnetGroupCommand";
import {
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput,
} from "../commands/DecreaseReplicationFactorCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "../commands/DeleteParameterGroupCommand";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "../commands/DeleteSubnetGroupCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import {
  DescribeDefaultParametersCommandInput,
  DescribeDefaultParametersCommandOutput,
} from "../commands/DescribeDefaultParametersCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "../commands/DescribeParameterGroupsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "../commands/DescribeParametersCommand";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "../commands/DescribeSubnetGroupsCommand";
import {
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
} from "../commands/IncreaseReplicationFactorCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { RebootNodeCommandInput, RebootNodeCommandOutput } from "../commands/RebootNodeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "../commands/UpdateClusterCommand";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "../commands/UpdateParameterGroupCommand";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "../commands/UpdateSubnetGroupCommand";
import { DAXServiceException as __BaseException } from "../models/DAXServiceException";
import {
  Cluster,
  ClusterAlreadyExistsFault,
  ClusterNotFoundFault,
  ClusterQuotaForCustomerExceededFault,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateParameterGroupRequest,
  CreateParameterGroupResponse,
  CreateSubnetGroupRequest,
  CreateSubnetGroupResponse,
  DecreaseReplicationFactorRequest,
  DecreaseReplicationFactorResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteParameterGroupRequest,
  DeleteParameterGroupResponse,
  DeleteSubnetGroupRequest,
  DeleteSubnetGroupResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeDefaultParametersRequest,
  DescribeDefaultParametersResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeParameterGroupsRequest,
  DescribeParameterGroupsResponse,
  DescribeParametersRequest,
  DescribeParametersResponse,
  DescribeSubnetGroupsRequest,
  DescribeSubnetGroupsResponse,
  Endpoint,
  Event,
  IncreaseReplicationFactorRequest,
  IncreaseReplicationFactorResponse,
  InsufficientClusterCapacityFault,
  InvalidARNFault,
  InvalidClusterStateFault,
  InvalidParameterCombinationException,
  InvalidParameterGroupStateFault,
  InvalidParameterValueException,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  ListTagsRequest,
  ListTagsResponse,
  Node,
  NodeNotFoundFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NodeTypeSpecificValue,
  NotificationConfiguration,
  Parameter,
  ParameterGroup,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterGroupStatus,
  ParameterNameValue,
  RebootNodeRequest,
  RebootNodeResponse,
  SecurityGroupMembership,
  ServiceLinkedRoleNotFoundFault,
  ServiceQuotaExceededException,
  SSEDescription,
  SSESpecification,
  Subnet,
  SubnetGroup,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupInUseFault,
  SubnetGroupNotFoundFault,
  SubnetGroupQuotaExceededFault,
  SubnetInUse,
  SubnetQuotaExceededFault,
  Tag,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateParameterGroupRequest,
  UpdateParameterGroupResponse,
  UpdateSubnetGroupRequest,
  UpdateSubnetGroupResponse,
} from "../models/models_0";

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateParameterGroupCommand = async (
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.CreateParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubnetGroupCommand = async (
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.CreateSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DecreaseReplicationFactorCommand = async (
  input: DecreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DecreaseReplicationFactor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DecreaseReplicationFactorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParameterGroupCommand = async (
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DeleteParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubnetGroupCommand = async (
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DeleteSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDefaultParametersCommand = async (
  input: DescribeDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeDefaultParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDefaultParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParameterGroupsCommand = async (
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeParameterGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeParameterGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeParameters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubnetGroupsCommand = async (
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.DescribeSubnetGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSubnetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IncreaseReplicationFactorCommand = async (
  input: IncreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.IncreaseReplicationFactor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IncreaseReplicationFactorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootNodeCommand = async (
  input: RebootNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.RebootNode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.UpdateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateParameterGroupCommand = async (
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.UpdateParameterGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubnetGroupCommand = async (
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonDAXV3.UpdateSubnetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterAlreadyExistsFault":
    case "com.amazonaws.dax#ClusterAlreadyExistsFault":
      throw await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#ClusterQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      throw await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      throw await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.dax#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.dax#ParameterGroupAlreadyExistsFault":
      throw await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.dax#ParameterGroupQuotaExceededFault":
      throw await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.dax#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.dax#SubnetGroupAlreadyExistsFault":
      throw await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context);
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.dax#SubnetGroupQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DecreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DecreaseReplicationFactorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DecreaseReplicationFactorResponse(data, context);
  const response: DecreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DecreaseReplicationFactorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      throw await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupInUseFault":
    case "com.amazonaws.dax#SubnetGroupInUseFault":
      throw await deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDefaultParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDefaultParametersResponse(data, context);
  const response: DescribeDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDefaultParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParameterGroupsResponse(data, context);
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1IncreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IncreaseReplicationFactorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IncreaseReplicationFactorResponse(data, context);
  const response: IncreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IncreaseReplicationFactorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      throw await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      throw await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      throw await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RebootNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RebootNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootNodeResponse(data, context);
  const response: RebootNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      throw await deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      throw await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "TagNotFoundFault":
    case "com.amazonaws.dax#TagNotFoundFault":
      throw await deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      throw await deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSubnet":
    case "com.amazonaws.dax#InvalidSubnet":
      throw await deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.dax#SubnetInUse":
      throw await deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      throw await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context);
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

const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundFault(body, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidARNFault(body, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClusterStateFault(body, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
  const exception = new InvalidParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(body, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeNotFoundFault(body, context);
  const exception = new NodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
  const exception = new ParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
  const exception = new ParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
  const exception = new ParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
  const exception = new SubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
  const exception = new SubnetGroupInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
  const exception = new SubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
  const exception = new SubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetInUse(body, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
  const exception = new SubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagNotFoundFault(body, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ClusterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterEndpointEncryptionType != null && {
      ClusterEndpointEncryptionType: input.ClusterEndpointEncryptionType,
    }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.NotificationTopicArn != null && { NotificationTopicArn: input.NotificationTopicArn }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ReplicationFactor != null && { ReplicationFactor: input.ReplicationFactor }),
    ...(input.SSESpecification != null && {
      SSESpecification: serializeAws_json1_1SSESpecification(input.SSESpecification, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateParameterGroupRequest = (
  input: CreateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1CreateSubnetGroupRequest = (
  input: CreateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1DecreaseReplicationFactorRequest = (
  input: DecreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor != null && { NewReplicationFactor: input.NewReplicationFactor }),
    ...(input.NodeIdsToRemove != null && {
      NodeIdsToRemove: serializeAws_json1_1NodeIdentifierList(input.NodeIdsToRemove, context),
    }),
  };
};

const serializeAws_json1_1DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
  };
};

const serializeAws_json1_1DeleteParameterGroupRequest = (
  input: DeleteParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_json1_1DeleteSubnetGroupRequest = (
  input: DeleteSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

const serializeAws_json1_1DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterNames != null && {
      ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDefaultParametersRequest = (
  input: DescribeDefaultParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SourceName != null && { SourceName: input.SourceName }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeParameterGroupsRequest = (
  input: DescribeParameterGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupNames != null && {
      ParameterGroupNames: serializeAws_json1_1ParameterGroupNameList(input.ParameterGroupNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

const serializeAws_json1_1DescribeSubnetGroupsRequest = (
  input: DescribeSubnetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubnetGroupNames != null && {
      SubnetGroupNames: serializeAws_json1_1SubnetGroupNameList(input.SubnetGroupNames, context),
    }),
  };
};

const serializeAws_json1_1IncreaseReplicationFactorRequest = (
  input: IncreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor != null && { NewReplicationFactor: input.NewReplicationFactor }),
  };
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

const serializeAws_json1_1NodeIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterNameValue(entry, context);
    });
};

const serializeAws_json1_1RebootNodeRequest = (input: RebootNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
  };
};

const serializeAws_json1_1SecurityGroupIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SSESpecification = (input: SSESpecification, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_json1_1SubnetGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.NotificationTopicArn != null && { NotificationTopicArn: input.NotificationTopicArn }),
    ...(input.NotificationTopicStatus != null && { NotificationTopicStatus: input.NotificationTopicStatus }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    }),
  };
};

const serializeAws_json1_1UpdateParameterGroupRequest = (
  input: UpdateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNameValues != null && {
      ParameterNameValues: serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context),
    }),
  };
};

const serializeAws_json1_1UpdateSubnetGroupRequest = (
  input: UpdateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    ActiveNodes: __expectInt32(output.ActiveNodes),
    ClusterArn: __expectString(output.ClusterArn),
    ClusterDiscoveryEndpoint:
      output.ClusterDiscoveryEndpoint != null
        ? deserializeAws_json1_1Endpoint(output.ClusterDiscoveryEndpoint, context)
        : undefined,
    ClusterEndpointEncryptionType: __expectString(output.ClusterEndpointEncryptionType),
    ClusterName: __expectString(output.ClusterName),
    Description: __expectString(output.Description),
    IamRoleArn: __expectString(output.IamRoleArn),
    NodeIdsToRemove:
      output.NodeIdsToRemove != null
        ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToRemove, context)
        : undefined,
    NodeType: __expectString(output.NodeType),
    Nodes: output.Nodes != null ? deserializeAws_json1_1NodeList(output.Nodes, context) : undefined,
    NotificationConfiguration:
      output.NotificationConfiguration != null
        ? deserializeAws_json1_1NotificationConfiguration(output.NotificationConfiguration, context)
        : undefined,
    ParameterGroup:
      output.ParameterGroup != null
        ? deserializeAws_json1_1ParameterGroupStatus(output.ParameterGroup, context)
        : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    SSEDescription:
      output.SSEDescription != null ? deserializeAws_json1_1SSEDescription(output.SSEDescription, context) : undefined,
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context)
        : undefined,
    Status: __expectString(output.Status),
    SubnetGroup: __expectString(output.SubnetGroup),
    TotalNodes: __expectInt32(output.TotalNodes),
  } as any;
};

const deserializeAws_json1_1ClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Cluster(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup != null ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DecreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): DecreaseReplicationFactorResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteParameterGroupResponse => {
  return {
    DeletionMessage: __expectString(output.DeletionMessage),
  } as any;
};

const deserializeAws_json1_1DeleteSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubnetGroupResponse => {
  return {
    DeletionMessage: __expectString(output.DeletionMessage),
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    Clusters: output.Clusters != null ? deserializeAws_json1_1ClusterList(output.Clusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDefaultParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeDefaultParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParameterList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeParameterGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeParameterGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParameterGroups:
      output.ParameterGroups != null
        ? deserializeAws_json1_1ParameterGroupList(output.ParameterGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParameterList(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubnetGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SubnetGroups:
      output.SubnetGroups != null ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
    URL: __expectString(output.URL),
  } as any;
};

const deserializeAws_json1_1Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    SourceName: __expectString(output.SourceName),
    SourceType: __expectString(output.SourceType),
  } as any;
};

const deserializeAws_json1_1EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IncreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): IncreaseReplicationFactorResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidParameterGroupStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    Endpoint: output.Endpoint != null ? deserializeAws_json1_1Endpoint(output.Endpoint, context) : undefined,
    NodeCreateTime:
      output.NodeCreateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NodeCreateTime)))
        : undefined,
    NodeId: __expectString(output.NodeId),
    NodeStatus: __expectString(output.NodeStatus),
    ParameterGroupStatus: __expectString(output.ParameterGroupStatus),
  } as any;
};

const deserializeAws_json1_1NodeIdentifierList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Node(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NodeNotFoundFault = (output: any, context: __SerdeContext): NodeNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NodeTypeSpecificValue = (output: any, context: __SerdeContext): NodeTypeSpecificValue => {
  return {
    NodeType: __expectString(output.NodeType),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1NodeTypeSpecificValueList = (
  output: any,
  context: __SerdeContext
): NodeTypeSpecificValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NodeTypeSpecificValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  return {
    TopicArn: __expectString(output.TopicArn),
    TopicStatus: __expectString(output.TopicStatus),
  } as any;
};

const deserializeAws_json1_1Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    AllowedValues: __expectString(output.AllowedValues),
    ChangeType: __expectString(output.ChangeType),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    IsModifiable: __expectString(output.IsModifiable),
    NodeTypeSpecificValues:
      output.NodeTypeSpecificValues != null
        ? deserializeAws_json1_1NodeTypeSpecificValueList(output.NodeTypeSpecificValues, context)
        : undefined,
    ParameterName: __expectString(output.ParameterName),
    ParameterType: __expectString(output.ParameterType),
    ParameterValue: __expectString(output.ParameterValue),
    Source: __expectString(output.Source),
  } as any;
};

const deserializeAws_json1_1ParameterGroup = (output: any, context: __SerdeContext): ParameterGroup => {
  return {
    Description: __expectString(output.Description),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterGroupList = (output: any, context: __SerdeContext): ParameterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ParameterGroupStatus = (output: any, context: __SerdeContext): ParameterGroupStatus => {
  return {
    NodeIdsToReboot:
      output.NodeIdsToReboot != null
        ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToReboot, context)
        : undefined,
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

const deserializeAws_json1_1ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RebootNodeResponse = (output: any, context: __SerdeContext): RebootNodeResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership => {
  return {
    SecurityGroupIdentifier: __expectString(output.SecurityGroupIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityGroupMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {} as any;
};

const deserializeAws_json1_1SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
  } as any;
};

const deserializeAws_json1_1SubnetGroup = (output: any, context: __SerdeContext): SubnetGroup => {
  return {
    Description: __expectString(output.Description),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    Subnets: output.Subnets != null ? deserializeAws_json1_1SubnetList(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupInUseFault = (output: any, context: __SerdeContext): SubnetGroupInUseFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupList = (output: any, context: __SerdeContext): SubnetGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubnetGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Subnet(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
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

const deserializeAws_json1_1TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? deserializeAws_json1_1Cluster(output.Cluster, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateParameterGroupResponse => {
  return {
    ParameterGroup:
      output.ParameterGroup != null ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetGroupResponse => {
  return {
    SubnetGroup:
      output.SubnetGroup != null ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
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
