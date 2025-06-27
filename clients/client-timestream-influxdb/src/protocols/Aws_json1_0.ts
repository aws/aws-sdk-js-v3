// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateDbClusterCommandInput, CreateDbClusterCommandOutput } from "../commands/CreateDbClusterCommand";
import { CreateDbInstanceCommandInput, CreateDbInstanceCommandOutput } from "../commands/CreateDbInstanceCommand";
import {
  CreateDbParameterGroupCommandInput,
  CreateDbParameterGroupCommandOutput,
} from "../commands/CreateDbParameterGroupCommand";
import { DeleteDbClusterCommandInput, DeleteDbClusterCommandOutput } from "../commands/DeleteDbClusterCommand";
import { DeleteDbInstanceCommandInput, DeleteDbInstanceCommandOutput } from "../commands/DeleteDbInstanceCommand";
import { GetDbClusterCommandInput, GetDbClusterCommandOutput } from "../commands/GetDbClusterCommand";
import { GetDbInstanceCommandInput, GetDbInstanceCommandOutput } from "../commands/GetDbInstanceCommand";
import {
  GetDbParameterGroupCommandInput,
  GetDbParameterGroupCommandOutput,
} from "../commands/GetDbParameterGroupCommand";
import { ListDbClustersCommandInput, ListDbClustersCommandOutput } from "../commands/ListDbClustersCommand";
import { ListDbInstancesCommandInput, ListDbInstancesCommandOutput } from "../commands/ListDbInstancesCommand";
import {
  ListDbInstancesForClusterCommandInput,
  ListDbInstancesForClusterCommandOutput,
} from "../commands/ListDbInstancesForClusterCommand";
import {
  ListDbParameterGroupsCommandInput,
  ListDbParameterGroupsCommandOutput,
} from "../commands/ListDbParameterGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDbClusterCommandInput, UpdateDbClusterCommandOutput } from "../commands/UpdateDbClusterCommand";
import { UpdateDbInstanceCommandInput, UpdateDbInstanceCommandOutput } from "../commands/UpdateDbInstanceCommand";
import {
  _Parameters,
  AccessDeniedException,
  ConflictException,
  CreateDbClusterInput,
  CreateDbInstanceInput,
  CreateDbParameterGroupInput,
  DeleteDbClusterInput,
  DeleteDbInstanceInput,
  Duration,
  GetDbClusterInput,
  GetDbInstanceInput,
  GetDbParameterGroupInput,
  InfluxDBv2Parameters,
  InternalServerException,
  ListDbClustersInput,
  ListDbInstancesForClusterInput,
  ListDbInstancesInput,
  ListDbParameterGroupsInput,
  ListTagsForResourceRequest,
  LogDeliveryConfiguration,
  ResourceNotFoundException,
  S3Configuration,
  ServiceQuotaExceededException,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateDbClusterInput,
  UpdateDbInstanceInput,
  ValidationException,
} from "../models/models_0";
import { TimestreamInfluxDBServiceException as __BaseException } from "../models/TimestreamInfluxDBServiceException";

/**
 * serializeAws_json1_0CreateDbClusterCommand
 */
export const se_CreateDbClusterCommand = async (
  input: CreateDbClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDbCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDbInstanceCommand
 */
export const se_CreateDbInstanceCommand = async (
  input: CreateDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDbParameterGroupCommand
 */
export const se_CreateDbParameterGroupCommand = async (
  input: CreateDbParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDbParameterGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDbClusterCommand
 */
export const se_DeleteDbClusterCommand = async (
  input: DeleteDbClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDbCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDbInstanceCommand
 */
export const se_DeleteDbInstanceCommand = async (
  input: DeleteDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDbClusterCommand
 */
export const se_GetDbClusterCommand = async (
  input: GetDbClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDbCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDbInstanceCommand
 */
export const se_GetDbInstanceCommand = async (
  input: GetDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDbParameterGroupCommand
 */
export const se_GetDbParameterGroupCommand = async (
  input: GetDbParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDbParameterGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbClustersCommand
 */
export const se_ListDbClustersCommand = async (
  input: ListDbClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbInstancesCommand
 */
export const se_ListDbInstancesCommand = async (
  input: ListDbInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbInstancesForClusterCommand
 */
export const se_ListDbInstancesForClusterCommand = async (
  input: ListDbInstancesForClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbInstancesForCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbParameterGroupsCommand
 */
export const se_ListDbParameterGroupsCommand = async (
  input: ListDbParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbParameterGroups");
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
 * serializeAws_json1_0UpdateDbClusterCommand
 */
export const se_UpdateDbClusterCommand = async (
  input: UpdateDbClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDbCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDbInstanceCommand
 */
export const se_UpdateDbInstanceCommand = async (
  input: UpdateDbInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDbInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateDbClusterCommand
 */
export const de_CreateDbClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDbClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDbClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateDbInstanceCommand
 */
export const de_CreateDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateDbParameterGroupCommand
 */
export const de_CreateDbParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDbParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDbParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDbClusterCommand
 */
export const de_DeleteDbClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDbClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDbClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDbInstanceCommand
 */
export const de_DeleteDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDbClusterCommand
 */
export const de_GetDbClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDbClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDbClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDbInstanceCommand
 */
export const de_GetDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDbInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDbParameterGroupCommand
 */
export const de_GetDbParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDbParameterGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDbParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbClustersCommand
 */
export const de_ListDbClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDbClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbInstancesCommand
 */
export const de_ListDbInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDbInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbInstancesForClusterCommand
 */
export const de_ListDbInstancesForClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbInstancesForClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDbInstancesForClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbParameterGroupsCommand
 */
export const de_ListDbParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbParameterGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDbParameterGroupsCommandOutput = {
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
 * deserializeAws_json1_0UpdateDbClusterCommand
 */
export const de_UpdateDbClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDbClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDbClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateDbInstanceCommand
 */
export const de_UpdateDbInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDbInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDbInstanceCommandOutput = {
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
    case "com.amazonaws.timestreaminfluxdb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreaminfluxdb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreaminfluxdb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreaminfluxdb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreaminfluxdb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreaminfluxdb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreaminfluxdb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

// se_CreateDbClusterInput omitted.

// se_CreateDbInstanceInput omitted.

// se_CreateDbParameterGroupInput omitted.

// se_DeleteDbClusterInput omitted.

// se_DeleteDbInstanceInput omitted.

// se_Duration omitted.

// se_GetDbClusterInput omitted.

// se_GetDbInstanceInput omitted.

// se_GetDbParameterGroupInput omitted.

// se_InfluxDBv2Parameters omitted.

// se_ListDbClustersInput omitted.

// se_ListDbInstancesForClusterInput omitted.

// se_ListDbInstancesInput omitted.

// se_ListDbParameterGroupsInput omitted.

// se_ListTagsForResourceRequest omitted.

// se_LogDeliveryConfiguration omitted.

// se__Parameters omitted.

// se_RequestTagMap omitted.

// se_S3Configuration omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDbClusterInput omitted.

// se_UpdateDbInstanceInput omitted.

// se_VpcSecurityGroupIdList omitted.

// se_VpcSubnetIdList omitted.

// de_AccessDeniedException omitted.

// de_ConflictException omitted.

// de_CreateDbClusterOutput omitted.

// de_CreateDbInstanceOutput omitted.

// de_CreateDbParameterGroupOutput omitted.

// de_DbClusterSummary omitted.

// de_DbClusterSummaryList omitted.

// de_DbInstanceForClusterSummary omitted.

// de_DbInstanceForClusterSummaryList omitted.

// de_DbInstanceSummary omitted.

// de_DbInstanceSummaryList omitted.

// de_DbParameterGroupSummary omitted.

// de_DbParameterGroupSummaryList omitted.

// de_DeleteDbClusterOutput omitted.

// de_DeleteDbInstanceOutput omitted.

// de_Duration omitted.

// de_GetDbClusterOutput omitted.

// de_GetDbInstanceOutput omitted.

// de_GetDbParameterGroupOutput omitted.

// de_InfluxDBv2Parameters omitted.

// de_InternalServerException omitted.

// de_ListDbClustersOutput omitted.

// de_ListDbInstancesForClusterOutput omitted.

// de_ListDbInstancesOutput omitted.

// de_ListDbParameterGroupsOutput omitted.

// de_ListTagsForResourceResponse omitted.

// de_LogDeliveryConfiguration omitted.

// de__Parameters omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseTagMap omitted.

// de_S3Configuration omitted.

// de_ServiceQuotaExceededException omitted.

// de_ThrottlingException omitted.

// de_UpdateDbClusterOutput omitted.

// de_UpdateDbInstanceOutput omitted.

// de_ValidationException omitted.

// de_VpcSecurityGroupIdList omitted.

// de_VpcSubnetIdList omitted.

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
    "x-amz-target": `AmazonTimestreamInfluxDB.${operation}`,
  };
}
