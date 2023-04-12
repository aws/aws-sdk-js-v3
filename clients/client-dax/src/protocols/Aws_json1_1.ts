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

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCluster");
  let body: any;
  body = JSON.stringify(se_CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateParameterGroupCommand
 */
export const se_CreateParameterGroupCommand = async (
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateParameterGroup");
  let body: any;
  body = JSON.stringify(se_CreateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSubnetGroupCommand
 */
export const se_CreateSubnetGroupCommand = async (
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSubnetGroup");
  let body: any;
  body = JSON.stringify(se_CreateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DecreaseReplicationFactorCommand
 */
export const se_DecreaseReplicationFactorCommand = async (
  input: DecreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DecreaseReplicationFactor");
  let body: any;
  body = JSON.stringify(se_DecreaseReplicationFactorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCluster");
  let body: any;
  body = JSON.stringify(se_DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteParameterGroupCommand
 */
export const se_DeleteParameterGroupCommand = async (
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteParameterGroup");
  let body: any;
  body = JSON.stringify(se_DeleteParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSubnetGroupCommand
 */
export const se_DeleteSubnetGroupCommand = async (
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSubnetGroup");
  let body: any;
  body = JSON.stringify(se_DeleteSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClusters");
  let body: any;
  body = JSON.stringify(se_DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDefaultParametersCommand
 */
export const se_DescribeDefaultParametersCommand = async (
  input: DescribeDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDefaultParameters");
  let body: any;
  body = JSON.stringify(se_DescribeDefaultParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvents");
  let body: any;
  body = JSON.stringify(se_DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParameterGroupsCommand
 */
export const se_DescribeParameterGroupsCommand = async (
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeParameterGroups");
  let body: any;
  body = JSON.stringify(se_DescribeParameterGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeParametersCommand
 */
export const se_DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeParameters");
  let body: any;
  body = JSON.stringify(se_DescribeParametersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubnetGroupsCommand
 */
export const se_DescribeSubnetGroupsCommand = async (
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubnetGroups");
  let body: any;
  body = JSON.stringify(se_DescribeSubnetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IncreaseReplicationFactorCommand
 */
export const se_IncreaseReplicationFactorCommand = async (
  input: IncreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IncreaseReplicationFactor");
  let body: any;
  body = JSON.stringify(se_IncreaseReplicationFactorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RebootNodeCommand
 */
export const se_RebootNodeCommand = async (
  input: RebootNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootNode");
  let body: any;
  body = JSON.stringify(se_RebootNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCluster");
  let body: any;
  body = JSON.stringify(se_UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateParameterGroupCommand
 */
export const se_UpdateParameterGroupCommand = async (
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateParameterGroup");
  let body: any;
  body = JSON.stringify(se_UpdateParameterGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSubnetGroupCommand
 */
export const se_UpdateSubnetGroupCommand = async (
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubnetGroup");
  let body: any;
  body = JSON.stringify(se_UpdateSubnetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
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
      throw await de_ClusterAlreadyExistsFaultRes(parsedOutput, context);
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#ClusterQuotaForCustomerExceededFault":
      throw await de_ClusterQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.dax#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateParameterGroupCommand
 */
export const de_CreateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateParameterGroupResponse(data, context);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateParameterGroupCommandError
 */
const de_CreateParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.dax#ParameterGroupAlreadyExistsFault":
      throw await de_ParameterGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.dax#ParameterGroupQuotaExceededFault":
      throw await de_ParameterGroupQuotaExceededFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSubnetGroupCommand
 */
export const de_CreateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSubnetGroupResponse(data, context);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSubnetGroupCommandError
 */
const de_CreateSubnetGroupCommandError = async (
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
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.dax#SubnetGroupAlreadyExistsFault":
      throw await de_SubnetGroupAlreadyExistsFaultRes(parsedOutput, context);
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.dax#SubnetGroupQuotaExceededFault":
      throw await de_SubnetGroupQuotaExceededFaultRes(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      throw await de_SubnetQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DecreaseReplicationFactorCommand
 */
export const de_DecreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecreaseReplicationFactorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecreaseReplicationFactorResponse(data, context);
  const response: DecreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DecreaseReplicationFactorCommandError
 */
const de_DecreaseReplicationFactorCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      throw await de_NodeNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteParameterGroupCommand
 */
export const de_DeleteParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteParameterGroupResponse(data, context);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteParameterGroupCommandError
 */
const de_DeleteParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSubnetGroupCommand
 */
export const de_DeleteSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSubnetGroupResponse(data, context);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSubnetGroupCommandError
 */
const de_DeleteSubnetGroupCommandError = async (
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
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupInUseFault":
    case "com.amazonaws.dax#SubnetGroupInUseFault":
      throw await de_SubnetGroupInUseFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClustersCommandError
 */
const de_DescribeClustersCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeDefaultParametersCommand
 */
export const de_DescribeDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDefaultParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDefaultParametersResponse(data, context);
  const response: DescribeDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDefaultParametersCommandError
 */
const de_DescribeDefaultParametersCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeParameterGroupsCommand
 */
export const de_DescribeParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeParameterGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeParameterGroupsResponse(data, context);
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeParameterGroupsCommandError
 */
const de_DescribeParameterGroupsCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeParametersCommand
 */
export const de_DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeParametersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeParametersResponse(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeParametersCommandError
 */
const de_DescribeParametersCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSubnetGroupsCommand
 */
export const de_DescribeSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubnetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSubnetGroupsResponse(data, context);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSubnetGroupsCommandError
 */
const de_DescribeSubnetGroupsCommandError = async (
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
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1IncreaseReplicationFactorCommand
 */
export const de_IncreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IncreaseReplicationFactorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IncreaseReplicationFactorResponse(data, context);
  const response: IncreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IncreaseReplicationFactorCommandError
 */
const de_IncreaseReplicationFactorCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      throw await de_InsufficientClusterCapacityFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      throw await de_InvalidVPCNetworkStateFaultRes(parsedOutput, context);
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      throw await de_NodeQuotaForClusterExceededFaultRes(parsedOutput, context);
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      throw await de_NodeQuotaForCustomerExceededFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1RebootNodeCommand
 */
export const de_RebootNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RebootNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RebootNodeResponse(data, context);
  const response: RebootNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RebootNodeCommandError
 */
const de_RebootNodeCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      throw await de_NodeNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      throw await de_TagQuotaPerResourceExceededRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      throw await de_InvalidARNFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "TagNotFoundFault":
    case "com.amazonaws.dax#TagNotFoundFault":
      throw await de_TagNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateClusterCommandError
 */
const de_UpdateClusterCommandError = async (
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
      throw await de_ClusterNotFoundFaultRes(parsedOutput, context);
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      throw await de_InvalidClusterStateFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateParameterGroupCommand
 */
export const de_UpdateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateParameterGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateParameterGroupResponse(data, context);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateParameterGroupCommandError
 */
const de_UpdateParameterGroupCommandError = async (
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
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      throw await de_InvalidParameterGroupStateFaultRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      throw await de_ParameterGroupNotFoundFaultRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSubnetGroupCommand
 */
export const de_UpdateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSubnetGroupResponse(data, context);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSubnetGroupCommandError
 */
const de_UpdateSubnetGroupCommandError = async (
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
      throw await de_InvalidSubnetRes(parsedOutput, context);
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      throw await de_ServiceLinkedRoleNotFoundFaultRes(parsedOutput, context);
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      throw await de_SubnetGroupNotFoundFaultRes(parsedOutput, context);
    case "SubnetInUse":
    case "com.amazonaws.dax#SubnetInUse":
      throw await de_SubnetInUseRes(parsedOutput, context);
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      throw await de_SubnetQuotaExceededFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_1ClusterAlreadyExistsFaultRes
 */
const de_ClusterAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterAlreadyExistsFault(body, context);
  const exception = new ClusterAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterNotFoundFaultRes
 */
const de_ClusterNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterNotFoundFault(body, context);
  const exception = new ClusterNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultRes
 */
const de_ClusterQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterQuotaForCustomerExceededFault(body, context);
  const exception = new ClusterQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientClusterCapacityFaultRes
 */
const de_InsufficientClusterCapacityFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientClusterCapacityFault(body, context);
  const exception = new InsufficientClusterCapacityFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidARNFaultRes
 */
const de_InvalidARNFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidARNFault(body, context);
  const exception = new InvalidARNFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidClusterStateFaultRes
 */
const de_InvalidClusterStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClusterStateFault(body, context);
  const exception = new InvalidClusterStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterGroupStateFaultRes
 */
const de_InvalidParameterGroupStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterGroupStateFault(body, context);
  const exception = new InvalidParameterGroupStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSubnetRes
 */
const de_InvalidSubnetRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSubnet(body, context);
  const exception = new InvalidSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidVPCNetworkStateFaultRes
 */
const de_InvalidVPCNetworkStateFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidVPCNetworkStateFault(body, context);
  const exception = new InvalidVPCNetworkStateFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NodeNotFoundFaultRes
 */
const de_NodeNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<NodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeNotFoundFault(body, context);
  const exception = new NodeNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NodeQuotaForClusterExceededFaultRes
 */
const de_NodeQuotaForClusterExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForClusterExceededFault(body, context);
  const exception = new NodeQuotaForClusterExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NodeQuotaForCustomerExceededFaultRes
 */
const de_NodeQuotaForCustomerExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NodeQuotaForCustomerExceededFault(body, context);
  const exception = new NodeQuotaForCustomerExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupAlreadyExistsFaultRes
 */
const de_ParameterGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupAlreadyExistsFault(body, context);
  const exception = new ParameterGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupNotFoundFaultRes
 */
const de_ParameterGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupNotFoundFault(body, context);
  const exception = new ParameterGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParameterGroupQuotaExceededFaultRes
 */
const de_ParameterGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParameterGroupQuotaExceededFault(body, context);
  const exception = new ParameterGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultRes
 */
const de_ServiceLinkedRoleNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLinkedRoleNotFoundFault(body, context);
  const exception = new ServiceLinkedRoleNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupAlreadyExistsFaultRes
 */
const de_SubnetGroupAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupAlreadyExistsFault(body, context);
  const exception = new SubnetGroupAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupInUseFaultRes
 */
const de_SubnetGroupInUseFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupInUseFault(body, context);
  const exception = new SubnetGroupInUseFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupNotFoundFaultRes
 */
const de_SubnetGroupNotFoundFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupNotFoundFault(body, context);
  const exception = new SubnetGroupNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetGroupQuotaExceededFaultRes
 */
const de_SubnetGroupQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetGroupQuotaExceededFault(body, context);
  const exception = new SubnetGroupQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetInUseRes
 */
const de_SubnetInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetInUse(body, context);
  const exception = new SubnetInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubnetQuotaExceededFaultRes
 */
const de_SubnetQuotaExceededFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubnetQuotaExceededFault(body, context);
  const exception = new SubnetQuotaExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagNotFoundFaultRes
 */
const de_TagNotFoundFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagNotFoundFault(body, context);
  const exception = new TagNotFoundFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagQuotaPerResourceExceededRes
 */
const de_TagQuotaPerResourceExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagQuotaPerResourceExceeded(body, context);
  const exception = new TagQuotaPerResourceExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AvailabilityZoneList
 */
const se_AvailabilityZoneList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ClusterNameList
 */
const se_ClusterNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: se_AvailabilityZoneList(input.AvailabilityZones, context),
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
    ...(input.SSESpecification != null && { SSESpecification: se_SSESpecification(input.SSESpecification, context) }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateParameterGroupRequest
 */
const se_CreateParameterGroupRequest = (input: CreateParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

/**
 * serializeAws_json1_1CreateSubnetGroupRequest
 */
const se_CreateSubnetGroupRequest = (input: CreateSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1DecreaseReplicationFactorRequest
 */
const se_DecreaseReplicationFactorRequest = (input: DecreaseReplicationFactorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: se_AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor != null && { NewReplicationFactor: input.NewReplicationFactor }),
    ...(input.NodeIdsToRemove != null && { NodeIdsToRemove: se_NodeIdentifierList(input.NodeIdsToRemove, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteClusterRequest
 */
const se_DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
  };
};

/**
 * serializeAws_json1_1DeleteParameterGroupRequest
 */
const se_DeleteParameterGroupRequest = (input: DeleteParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteSubnetGroupRequest
 */
const se_DeleteSubnetGroupRequest = (input: DeleteSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeClustersRequest
 */
const se_DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterNames != null && { ClusterNames: se_ClusterNameList(input.ClusterNames, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDefaultParametersRequest
 */
const se_DescribeDefaultParametersRequest = (input: DescribeDefaultParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeParameterGroupsRequest
 */
const se_DescribeParameterGroupsRequest = (input: DescribeParameterGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupNames != null && {
      ParameterGroupNames: se_ParameterGroupNameList(input.ParameterGroupNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeParametersRequest
 */
const se_DescribeParametersRequest = (input: DescribeParametersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

/**
 * serializeAws_json1_1DescribeSubnetGroupsRequest
 */
const se_DescribeSubnetGroupsRequest = (input: DescribeSubnetGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SubnetGroupNames != null && {
      SubnetGroupNames: se_SubnetGroupNameList(input.SubnetGroupNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1IncreaseReplicationFactorRequest
 */
const se_IncreaseReplicationFactorRequest = (input: IncreaseReplicationFactorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: se_AvailabilityZoneList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor != null && { NewReplicationFactor: input.NewReplicationFactor }),
  };
};

/**
 * serializeAws_json1_1KeyList
 */
const se_KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
  };
};

/**
 * serializeAws_json1_1NodeIdentifierList
 */
const se_NodeIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterGroupNameList
 */
const se_ParameterGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParameterNameValue
 */
const se_ParameterNameValue = (input: ParameterNameValue, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_json1_1ParameterNameValueList
 */
const se_ParameterNameValueList = (input: ParameterNameValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterNameValue(entry, context);
    });
};

/**
 * serializeAws_json1_1RebootNodeRequest
 */
const se_RebootNodeRequest = (input: RebootNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.NodeId != null && { NodeId: input.NodeId }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdentifierList
 */
const se_SecurityGroupIdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SSESpecification
 */
const se_SSESpecification = (input: SSESpecification, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_json1_1SubnetGroupNameList
 */
const se_SubnetGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIdentifierList
 */
const se_SubnetIdentifierList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.TagKeys != null && { TagKeys: se_KeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateClusterRequest
 */
const se_UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.NotificationTopicArn != null && { NotificationTopicArn: input.NotificationTopicArn }),
    ...(input.NotificationTopicStatus != null && { NotificationTopicStatus: input.NotificationTopicStatus }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateParameterGroupRequest
 */
const se_UpdateParameterGroupRequest = (input: UpdateParameterGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
    ...(input.ParameterNameValues != null && {
      ParameterNameValues: se_ParameterNameValueList(input.ParameterNameValues, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateSubnetGroupRequest
 */
const se_UpdateSubnetGroupRequest = (input: UpdateSubnetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SubnetGroupName != null && { SubnetGroupName: input.SubnetGroupName }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdentifierList(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    ActiveNodes: __expectInt32(output.ActiveNodes),
    ClusterArn: __expectString(output.ClusterArn),
    ClusterDiscoveryEndpoint:
      output.ClusterDiscoveryEndpoint != null ? de_Endpoint(output.ClusterDiscoveryEndpoint, context) : undefined,
    ClusterEndpointEncryptionType: __expectString(output.ClusterEndpointEncryptionType),
    ClusterName: __expectString(output.ClusterName),
    Description: __expectString(output.Description),
    IamRoleArn: __expectString(output.IamRoleArn),
    NodeIdsToRemove:
      output.NodeIdsToRemove != null ? de_NodeIdentifierList(output.NodeIdsToRemove, context) : undefined,
    NodeType: __expectString(output.NodeType),
    Nodes: output.Nodes != null ? de_NodeList(output.Nodes, context) : undefined,
    NotificationConfiguration:
      output.NotificationConfiguration != null
        ? de_NotificationConfiguration(output.NotificationConfiguration, context)
        : undefined,
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroupStatus(output.ParameterGroup, context) : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    SSEDescription: output.SSEDescription != null ? de_SSEDescription(output.SSEDescription, context) : undefined,
    SecurityGroups:
      output.SecurityGroups != null ? de_SecurityGroupMembershipList(output.SecurityGroups, context) : undefined,
    Status: __expectString(output.Status),
    SubnetGroup: __expectString(output.SubnetGroup),
    TotalNodes: __expectInt32(output.TotalNodes),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterAlreadyExistsFault
 */
const de_ClusterAlreadyExistsFault = (output: any, context: __SerdeContext): ClusterAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterList
 */
const de_ClusterList = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterNotFoundFault
 */
const de_ClusterNotFoundFault = (output: any, context: __SerdeContext): ClusterNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterQuotaForCustomerExceededFault
 */
const de_ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateParameterGroupResponse
 */
const de_CreateParameterGroupResponse = (output: any, context: __SerdeContext): CreateParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSubnetGroupResponse
 */
const de_CreateSubnetGroupResponse = (output: any, context: __SerdeContext): CreateSubnetGroupResponse => {
  return {
    SubnetGroup: output.SubnetGroup != null ? de_SubnetGroup(output.SubnetGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DecreaseReplicationFactorResponse
 */
const de_DecreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): DecreaseReplicationFactorResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteParameterGroupResponse
 */
const de_DeleteParameterGroupResponse = (output: any, context: __SerdeContext): DeleteParameterGroupResponse => {
  return {
    DeletionMessage: __expectString(output.DeletionMessage),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSubnetGroupResponse
 */
const de_DeleteSubnetGroupResponse = (output: any, context: __SerdeContext): DeleteSubnetGroupResponse => {
  return {
    DeletionMessage: __expectString(output.DeletionMessage),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return {
    Clusters: output.Clusters != null ? de_ClusterList(output.Clusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDefaultParametersResponse
 */
const de_DescribeDefaultParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeDefaultParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParameterList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    Events: output.Events != null ? de_EventList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeParameterGroupsResponse
 */
const de_DescribeParameterGroupsResponse = (output: any, context: __SerdeContext): DescribeParameterGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParameterGroups:
      output.ParameterGroups != null ? de_ParameterGroupList(output.ParameterGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeParametersResponse
 */
const de_DescribeParametersResponse = (output: any, context: __SerdeContext): DescribeParametersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parameters: output.Parameters != null ? de_ParameterList(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSubnetGroupsResponse
 */
const de_DescribeSubnetGroupsResponse = (output: any, context: __SerdeContext): DescribeSubnetGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SubnetGroups: output.SubnetGroups != null ? de_SubnetGroupList(output.SubnetGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
    URL: __expectString(output.URL),
  } as any;
};

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Message: __expectString(output.Message),
    SourceName: __expectString(output.SourceName),
    SourceType: __expectString(output.SourceType),
  } as any;
};

/**
 * deserializeAws_json1_1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IncreaseReplicationFactorResponse
 */
const de_IncreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): IncreaseReplicationFactorResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientClusterCapacityFault
 */
const de_InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidARNFault
 */
const de_InvalidARNFault = (output: any, context: __SerdeContext): InvalidARNFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidClusterStateFault
 */
const de_InvalidClusterStateFault = (output: any, context: __SerdeContext): InvalidClusterStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterGroupStateFault
 */
const de_InvalidParameterGroupStateFault = (output: any, context: __SerdeContext): InvalidParameterGroupStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSubnet
 */
const de_InvalidSubnet = (output: any, context: __SerdeContext): InvalidSubnet => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidVPCNetworkStateFault
 */
const de_InvalidVPCNetworkStateFault = (output: any, context: __SerdeContext): InvalidVPCNetworkStateFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    Endpoint: output.Endpoint != null ? de_Endpoint(output.Endpoint, context) : undefined,
    NodeCreateTime:
      output.NodeCreateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NodeCreateTime)))
        : undefined,
    NodeId: __expectString(output.NodeId),
    NodeStatus: __expectString(output.NodeStatus),
    ParameterGroupStatus: __expectString(output.ParameterGroupStatus),
  } as any;
};

/**
 * deserializeAws_json1_1NodeIdentifierList
 */
const de_NodeIdentifierList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NodeList
 */
const de_NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Node(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NodeNotFoundFault
 */
const de_NodeNotFoundFault = (output: any, context: __SerdeContext): NodeNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NodeQuotaForClusterExceededFault
 */
const de_NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NodeQuotaForCustomerExceededFault
 */
const de_NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NodeTypeSpecificValue
 */
const de_NodeTypeSpecificValue = (output: any, context: __SerdeContext): NodeTypeSpecificValue => {
  return {
    NodeType: __expectString(output.NodeType),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1NodeTypeSpecificValueList
 */
const de_NodeTypeSpecificValueList = (output: any, context: __SerdeContext): NodeTypeSpecificValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeTypeSpecificValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  return {
    TopicArn: __expectString(output.TopicArn),
    TopicStatus: __expectString(output.TopicStatus),
  } as any;
};

/**
 * deserializeAws_json1_1Parameter
 */
const de_Parameter = (output: any, context: __SerdeContext): Parameter => {
  return {
    AllowedValues: __expectString(output.AllowedValues),
    ChangeType: __expectString(output.ChangeType),
    DataType: __expectString(output.DataType),
    Description: __expectString(output.Description),
    IsModifiable: __expectString(output.IsModifiable),
    NodeTypeSpecificValues:
      output.NodeTypeSpecificValues != null
        ? de_NodeTypeSpecificValueList(output.NodeTypeSpecificValues, context)
        : undefined,
    ParameterName: __expectString(output.ParameterName),
    ParameterType: __expectString(output.ParameterType),
    ParameterValue: __expectString(output.ParameterValue),
    Source: __expectString(output.Source),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroup
 */
const de_ParameterGroup = (output: any, context: __SerdeContext): ParameterGroup => {
  return {
    Description: __expectString(output.Description),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupAlreadyExistsFault
 */
const de_ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupList
 */
const de_ParameterGroupList = (output: any, context: __SerdeContext): ParameterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterGroupNotFoundFault
 */
const de_ParameterGroupNotFoundFault = (output: any, context: __SerdeContext): ParameterGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupQuotaExceededFault
 */
const de_ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterGroupStatus
 */
const de_ParameterGroupStatus = (output: any, context: __SerdeContext): ParameterGroupStatus => {
  return {
    NodeIdsToReboot:
      output.NodeIdsToReboot != null ? de_NodeIdentifierList(output.NodeIdsToReboot, context) : undefined,
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterList
 */
const de_ParameterList = (output: any, context: __SerdeContext): Parameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Parameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RebootNodeResponse
 */
const de_RebootNodeResponse = (output: any, context: __SerdeContext): RebootNodeResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupMembership
 */
const de_SecurityGroupMembership = (output: any, context: __SerdeContext): SecurityGroupMembership => {
  return {
    SecurityGroupIdentifier: __expectString(output.SecurityGroupIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupMembershipList
 */
const de_SecurityGroupMembershipList = (output: any, context: __SerdeContext): SecurityGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityGroupMembership(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceLinkedRoleNotFoundFault
 */
const de_ServiceLinkedRoleNotFoundFault = (output: any, context: __SerdeContext): ServiceLinkedRoleNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SSEDescription
 */
const de_SSEDescription = (output: any, context: __SerdeContext): SSEDescription => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Subnet
 */
const de_Subnet = (output: any, context: __SerdeContext): Subnet => {
  return {
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroup
 */
const de_SubnetGroup = (output: any, context: __SerdeContext): SubnetGroup => {
  return {
    Description: __expectString(output.Description),
    SubnetGroupName: __expectString(output.SubnetGroupName),
    Subnets: output.Subnets != null ? de_SubnetList(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupAlreadyExistsFault
 */
const de_SubnetGroupAlreadyExistsFault = (output: any, context: __SerdeContext): SubnetGroupAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupInUseFault
 */
const de_SubnetGroupInUseFault = (output: any, context: __SerdeContext): SubnetGroupInUseFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupList
 */
const de_SubnetGroupList = (output: any, context: __SerdeContext): SubnetGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubnetGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetGroupNotFoundFault
 */
const de_SubnetGroupNotFoundFault = (output: any, context: __SerdeContext): SubnetGroupNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetGroupQuotaExceededFault
 */
const de_SubnetGroupQuotaExceededFault = (output: any, context: __SerdeContext): SubnetGroupQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetInUse
 */
const de_SubnetInUse = (output: any, context: __SerdeContext): SubnetInUse => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): Subnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Subnet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetQuotaExceededFault
 */
const de_SubnetQuotaExceededFault = (output: any, context: __SerdeContext): SubnetQuotaExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
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
 * deserializeAws_json1_1TagNotFoundFault
 */
const de_TagNotFoundFault = (output: any, context: __SerdeContext): TagNotFoundFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagQuotaPerResourceExceeded
 */
const de_TagQuotaPerResourceExceeded = (output: any, context: __SerdeContext): TagQuotaPerResourceExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateClusterResponse
 */
const de_UpdateClusterResponse = (output: any, context: __SerdeContext): UpdateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateParameterGroupResponse
 */
const de_UpdateParameterGroupResponse = (output: any, context: __SerdeContext): UpdateParameterGroupResponse => {
  return {
    ParameterGroup: output.ParameterGroup != null ? de_ParameterGroup(output.ParameterGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSubnetGroupResponse
 */
const de_UpdateSubnetGroupResponse = (output: any, context: __SerdeContext): UpdateSubnetGroupResponse => {
  return {
    SubnetGroup: output.SubnetGroup != null ? de_SubnetGroup(output.SubnetGroup, context) : undefined,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonDAXV3.${operation}`,
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
