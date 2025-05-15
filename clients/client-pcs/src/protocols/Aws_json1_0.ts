// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateComputeNodeGroupCommandInput,
  CreateComputeNodeGroupCommandOutput,
} from "../commands/CreateComputeNodeGroupCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteComputeNodeGroupCommandInput,
  DeleteComputeNodeGroupCommandOutput,
} from "../commands/DeleteComputeNodeGroupCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { GetClusterCommandInput, GetClusterCommandOutput } from "../commands/GetClusterCommand";
import {
  GetComputeNodeGroupCommandInput,
  GetComputeNodeGroupCommandOutput,
} from "../commands/GetComputeNodeGroupCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "../commands/GetQueueCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListComputeNodeGroupsCommandInput,
  ListComputeNodeGroupsCommandOutput,
} from "../commands/ListComputeNodeGroupsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterComputeNodeGroupInstanceCommandInput,
  RegisterComputeNodeGroupInstanceCommandOutput,
} from "../commands/RegisterComputeNodeGroupInstanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateComputeNodeGroupCommandInput,
  UpdateComputeNodeGroupCommandOutput,
} from "../commands/UpdateComputeNodeGroupCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "../commands/UpdateQueueCommand";
import {
  AccessDeniedException,
  AccountingRequest,
  Cluster,
  ClusterSlurmConfigurationRequest,
  ClusterSummary,
  ComputeNodeGroup,
  ComputeNodeGroupConfiguration,
  ComputeNodeGroupSlurmConfigurationRequest,
  ComputeNodeGroupSummary,
  ConflictException,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateComputeNodeGroupRequest,
  CreateComputeNodeGroupResponse,
  CreateQueueRequest,
  CreateQueueResponse,
  CustomLaunchTemplate,
  DeleteClusterRequest,
  DeleteComputeNodeGroupRequest,
  DeleteQueueRequest,
  GetClusterRequest,
  GetClusterResponse,
  GetComputeNodeGroupRequest,
  GetComputeNodeGroupResponse,
  GetQueueRequest,
  GetQueueResponse,
  InstanceConfig,
  InternalServerException,
  ListClustersRequest,
  ListClustersResponse,
  ListComputeNodeGroupsRequest,
  ListComputeNodeGroupsResponse,
  ListQueuesRequest,
  ListQueuesResponse,
  ListTagsForResourceRequest,
  NetworkingRequest,
  Queue,
  QueueSummary,
  RegisterComputeNodeGroupInstanceRequest,
  ResourceNotFoundException,
  ScalingConfigurationRequest,
  SchedulerRequest,
  ServiceQuotaExceededException,
  SlurmCustomSetting,
  SpotOptions,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateComputeNodeGroupRequest,
  UpdateComputeNodeGroupResponse,
  UpdateComputeNodeGroupSlurmConfigurationRequest,
  UpdateQueueRequest,
  UpdateQueueResponse,
  ValidationException,
} from "../models/models_0";
import { PCSServiceException as __BaseException } from "../models/PCSServiceException";

/**
 * serializeAws_json1_0CreateClusterCommand
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
 * serializeAws_json1_0CreateComputeNodeGroupCommand
 */
export const se_CreateComputeNodeGroupCommand = async (
  input: CreateComputeNodeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateComputeNodeGroup");
  let body: any;
  body = JSON.stringify(se_CreateComputeNodeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateQueue");
  let body: any;
  body = JSON.stringify(se_CreateQueueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteClusterCommand
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
 * serializeAws_json1_0DeleteComputeNodeGroupCommand
 */
export const se_DeleteComputeNodeGroupCommand = async (
  input: DeleteComputeNodeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteComputeNodeGroup");
  let body: any;
  body = JSON.stringify(se_DeleteComputeNodeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteQueue");
  let body: any;
  body = JSON.stringify(se_DeleteQueueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetClusterCommand
 */
export const se_GetClusterCommand = async (
  input: GetClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetComputeNodeGroupCommand
 */
export const se_GetComputeNodeGroupCommand = async (
  input: GetComputeNodeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComputeNodeGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetQueueCommand
 */
export const se_GetQueueCommand = async (
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComputeNodeGroupsCommand
 */
export const se_ListComputeNodeGroupsCommand = async (
  input: ListComputeNodeGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComputeNodeGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQueues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterComputeNodeGroupInstanceCommand
 */
export const se_RegisterComputeNodeGroupInstanceCommand = async (
  input: RegisterComputeNodeGroupInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterComputeNodeGroupInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateComputeNodeGroupCommand
 */
export const se_UpdateComputeNodeGroupCommand = async (
  input: UpdateComputeNodeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateComputeNodeGroup");
  let body: any;
  body = JSON.stringify(se_UpdateComputeNodeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateQueueCommand
 */
export const se_UpdateQueueCommand = async (
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateQueue");
  let body: any;
  body = JSON.stringify(se_UpdateQueueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateComputeNodeGroupCommand
 */
export const de_CreateComputeNodeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputeNodeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateComputeNodeGroupResponse(data, context);
  const response: CreateComputeNodeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateQueueResponse(data, context);
  const response: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteComputeNodeGroupCommand
 */
export const de_DeleteComputeNodeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComputeNodeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteComputeNodeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteQueueCommand
 */
export const de_DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetClusterCommand
 */
export const de_GetClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetClusterResponse(data, context);
  const response: GetClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetComputeNodeGroupCommand
 */
export const de_GetComputeNodeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComputeNodeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComputeNodeGroupResponse(data, context);
  const response: GetComputeNodeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetQueueCommand
 */
export const de_GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueueResponse(data, context);
  const response: GetQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClustersResponse(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListComputeNodeGroupsCommand
 */
export const de_ListComputeNodeGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComputeNodeGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComputeNodeGroupsResponse(data, context);
  const response: ListComputeNodeGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQueuesResponse(data, context);
  const response: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RegisterComputeNodeGroupInstanceCommand
 */
export const de_RegisterComputeNodeGroupInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterComputeNodeGroupInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RegisterComputeNodeGroupInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateComputeNodeGroupCommand
 */
export const de_UpdateComputeNodeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComputeNodeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateComputeNodeGroupResponse(data, context);
  const response: UpdateComputeNodeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateQueueCommand
 */
export const de_UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateQueueResponse(data, context);
  const response: UpdateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pcs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pcs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pcs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pcs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pcs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pcs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pcs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
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
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountingRequest omitted.

// se_ClusterSlurmConfigurationRequest omitted.

// se_ComputeNodeGroupConfiguration omitted.

// se_ComputeNodeGroupConfigurationList omitted.

// se_ComputeNodeGroupSlurmConfigurationRequest omitted.

/**
 * serializeAws_json1_0CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterName: [],
    networking: _json,
    scheduler: _json,
    size: [],
    slurmConfiguration: _json,
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateComputeNodeGroupRequest
 */
const se_CreateComputeNodeGroupRequest = (input: CreateComputeNodeGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    amiId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    computeNodeGroupName: [],
    customLaunchTemplate: _json,
    iamInstanceProfileArn: [],
    instanceConfigs: _json,
    purchaseOption: [],
    scalingConfiguration: _json,
    slurmConfiguration: _json,
    spotOptions: _json,
    subnetIds: _json,
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateQueueRequest
 */
const se_CreateQueueRequest = (input: CreateQueueRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    computeNodeGroupConfigurations: _json,
    queueName: [],
    tags: _json,
  });
};

// se_CustomLaunchTemplate omitted.

/**
 * serializeAws_json1_0DeleteClusterRequest
 */
const se_DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
  });
};

/**
 * serializeAws_json1_0DeleteComputeNodeGroupRequest
 */
const se_DeleteComputeNodeGroupRequest = (input: DeleteComputeNodeGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    computeNodeGroupIdentifier: [],
  });
};

/**
 * serializeAws_json1_0DeleteQueueRequest
 */
const se_DeleteQueueRequest = (input: DeleteQueueRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    queueIdentifier: [],
  });
};

// se_GetClusterRequest omitted.

// se_GetComputeNodeGroupRequest omitted.

// se_GetQueueRequest omitted.

// se_InstanceConfig omitted.

// se_InstanceList omitted.

// se_ListClustersRequest omitted.

// se_ListComputeNodeGroupsRequest omitted.

// se_ListQueuesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_NetworkingRequest omitted.

// se_RegisterComputeNodeGroupInstanceRequest omitted.

// se_RequestTagMap omitted.

// se_ScalingConfigurationRequest omitted.

// se_SchedulerRequest omitted.

// se_SecurityGroupIdList omitted.

// se_SlurmCustomSetting omitted.

// se_SlurmCustomSettings omitted.

// se_SpotOptions omitted.

// se_StringList omitted.

// se_SubnetIdList omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateComputeNodeGroupRequest
 */
const se_UpdateComputeNodeGroupRequest = (input: UpdateComputeNodeGroupRequest, context: __SerdeContext): any => {
  return take(input, {
    amiId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    computeNodeGroupIdentifier: [],
    customLaunchTemplate: _json,
    iamInstanceProfileArn: [],
    purchaseOption: [],
    scalingConfiguration: _json,
    slurmConfiguration: _json,
    spotOptions: _json,
    subnetIds: _json,
  });
};

// se_UpdateComputeNodeGroupSlurmConfigurationRequest omitted.

/**
 * serializeAws_json1_0UpdateQueueRequest
 */
const se_UpdateQueueRequest = (input: UpdateQueueRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    clusterIdentifier: [],
    computeNodeGroupConfigurations: _json,
    queueIdentifier: [],
  });
};

// de_AccessDeniedException omitted.

// de_Accounting omitted.

/**
 * deserializeAws_json1_0Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endpoints: _json,
    errorInfo: _json,
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    networking: _json,
    scheduler: _json,
    size: __expectString,
    slurmConfiguration: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ClusterList
 */
const de_ClusterList = (output: any, context: __SerdeContext): ClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterSummary(entry, context);
    });
  return retVal;
};

// de_ClusterSlurmConfiguration omitted.

/**
 * deserializeAws_json1_0ClusterSummary
 */
const de_ClusterSummary = (output: any, context: __SerdeContext): ClusterSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ComputeNodeGroup
 */
const de_ComputeNodeGroup = (output: any, context: __SerdeContext): ComputeNodeGroup => {
  return take(output, {
    amiId: __expectString,
    arn: __expectString,
    clusterId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customLaunchTemplate: _json,
    errorInfo: _json,
    iamInstanceProfileArn: __expectString,
    id: __expectString,
    instanceConfigs: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    purchaseOption: __expectString,
    scalingConfiguration: _json,
    slurmConfiguration: _json,
    spotOptions: _json,
    status: __expectString,
    subnetIds: _json,
  }) as any;
};

// de_ComputeNodeGroupConfiguration omitted.

// de_ComputeNodeGroupConfigurationList omitted.

/**
 * deserializeAws_json1_0ComputeNodeGroupList
 */
const de_ComputeNodeGroupList = (output: any, context: __SerdeContext): ComputeNodeGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComputeNodeGroupSummary(entry, context);
    });
  return retVal;
};

// de_ComputeNodeGroupSlurmConfiguration omitted.

/**
 * deserializeAws_json1_0ComputeNodeGroupSummary
 */
const de_ComputeNodeGroupSummary = (output: any, context: __SerdeContext): ComputeNodeGroupSummary => {
  return take(output, {
    arn: __expectString,
    clusterId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return take(output, {
    cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateComputeNodeGroupResponse
 */
const de_CreateComputeNodeGroupResponse = (output: any, context: __SerdeContext): CreateComputeNodeGroupResponse => {
  return take(output, {
    computeNodeGroup: (_: any) => de_ComputeNodeGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateQueueResponse
 */
const de_CreateQueueResponse = (output: any, context: __SerdeContext): CreateQueueResponse => {
  return take(output, {
    queue: (_: any) => de_Queue(_, context),
  }) as any;
};

// de_CustomLaunchTemplate omitted.

// de_DeleteClusterResponse omitted.

// de_DeleteComputeNodeGroupResponse omitted.

// de_DeleteQueueResponse omitted.

// de_Endpoint omitted.

// de_Endpoints omitted.

// de_ErrorInfo omitted.

// de_ErrorInfoList omitted.

/**
 * deserializeAws_json1_0GetClusterResponse
 */
const de_GetClusterResponse = (output: any, context: __SerdeContext): GetClusterResponse => {
  return take(output, {
    cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetComputeNodeGroupResponse
 */
const de_GetComputeNodeGroupResponse = (output: any, context: __SerdeContext): GetComputeNodeGroupResponse => {
  return take(output, {
    computeNodeGroup: (_: any) => de_ComputeNodeGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetQueueResponse
 */
const de_GetQueueResponse = (output: any, context: __SerdeContext): GetQueueResponse => {
  return take(output, {
    queue: (_: any) => de_Queue(_, context),
  }) as any;
};

// de_InstanceConfig omitted.

// de_InstanceList omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0ListClustersResponse
 */
const de_ListClustersResponse = (output: any, context: __SerdeContext): ListClustersResponse => {
  return take(output, {
    clusters: (_: any) => de_ClusterList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListComputeNodeGroupsResponse
 */
const de_ListComputeNodeGroupsResponse = (output: any, context: __SerdeContext): ListComputeNodeGroupsResponse => {
  return take(output, {
    computeNodeGroups: (_: any) => de_ComputeNodeGroupList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListQueuesResponse
 */
const de_ListQueuesResponse = (output: any, context: __SerdeContext): ListQueuesResponse => {
  return take(output, {
    nextToken: __expectString,
    queues: (_: any) => de_QueueList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_Networking omitted.

/**
 * deserializeAws_json1_0Queue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  return take(output, {
    arn: __expectString,
    clusterId: __expectString,
    computeNodeGroupConfigurations: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    errorInfo: _json,
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0QueueList
 */
const de_QueueList = (output: any, context: __SerdeContext): QueueSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0QueueSummary
 */
const de_QueueSummary = (output: any, context: __SerdeContext): QueueSummary => {
  return take(output, {
    arn: __expectString,
    clusterId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    modifiedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_RegisterComputeNodeGroupInstanceResponse omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseTagMap omitted.

// de_ScalingConfiguration omitted.

// de_Scheduler omitted.

// de_SecurityGroupIdList omitted.

// de_ServiceQuotaExceededException omitted.

// de_SlurmAuthKey omitted.

// de_SlurmCustomSetting omitted.

// de_SlurmCustomSettings omitted.

// de_SpotOptions omitted.

// de_SubnetIdList omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0UpdateComputeNodeGroupResponse
 */
const de_UpdateComputeNodeGroupResponse = (output: any, context: __SerdeContext): UpdateComputeNodeGroupResponse => {
  return take(output, {
    computeNodeGroup: (_: any) => de_ComputeNodeGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateQueueResponse
 */
const de_UpdateQueueResponse = (output: any, context: __SerdeContext): UpdateQueueResponse => {
  return take(output, {
    queue: (_: any) => de_Queue(_, context),
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AWSParallelComputingService.${operation}`,
  };
}
