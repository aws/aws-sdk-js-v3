// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchGetCollectionCommandInput, BatchGetCollectionCommandOutput } from "../commands/BatchGetCollectionCommand";
import {
  BatchGetVpcEndpointCommandInput,
  BatchGetVpcEndpointCommandOutput,
} from "../commands/BatchGetVpcEndpointCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "../commands/CreateAccessPolicyCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "../commands/CreateCollectionCommand";
import {
  CreateSecurityConfigCommandInput,
  CreateSecurityConfigCommandOutput,
} from "../commands/CreateSecurityConfigCommand";
import {
  CreateSecurityPolicyCommandInput,
  CreateSecurityPolicyCommandOutput,
} from "../commands/CreateSecurityPolicyCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "../commands/CreateVpcEndpointCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "../commands/DeleteAccessPolicyCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "../commands/DeleteCollectionCommand";
import {
  DeleteSecurityConfigCommandInput,
  DeleteSecurityConfigCommandOutput,
} from "../commands/DeleteSecurityConfigCommand";
import {
  DeleteSecurityPolicyCommandInput,
  DeleteSecurityPolicyCommandOutput,
} from "../commands/DeleteSecurityPolicyCommand";
import { DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput } from "../commands/DeleteVpcEndpointCommand";
import { GetAccessPolicyCommandInput, GetAccessPolicyCommandOutput } from "../commands/GetAccessPolicyCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetPoliciesStatsCommandInput, GetPoliciesStatsCommandOutput } from "../commands/GetPoliciesStatsCommand";
import { GetSecurityConfigCommandInput, GetSecurityConfigCommandOutput } from "../commands/GetSecurityConfigCommand";
import { GetSecurityPolicyCommandInput, GetSecurityPolicyCommandOutput } from "../commands/GetSecurityPolicyCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "../commands/ListAccessPoliciesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "../commands/ListCollectionsCommand";
import {
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "../commands/ListSecurityConfigsCommand";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "../commands/ListVpcEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput } from "../commands/UpdateAccessPolicyCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateCollectionCommandInput, UpdateCollectionCommandOutput } from "../commands/UpdateCollectionCommand";
import {
  UpdateSecurityConfigCommandInput,
  UpdateSecurityConfigCommandOutput,
} from "../commands/UpdateSecurityConfigCommand";
import {
  UpdateSecurityPolicyCommandInput,
  UpdateSecurityPolicyCommandOutput,
} from "../commands/UpdateSecurityPolicyCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "../commands/UpdateVpcEndpointCommand";
import {
  AccessPolicyDetail,
  AccessPolicyStats,
  AccessPolicySummary,
  AccountSettingsDetail,
  BatchGetCollectionRequest,
  BatchGetCollectionResponse,
  BatchGetVpcEndpointRequest,
  BatchGetVpcEndpointResponse,
  CapacityLimits,
  CollectionDetail,
  CollectionErrorDetail,
  CollectionFilters,
  CollectionSummary,
  ConflictException,
  CreateAccessPolicyRequest,
  CreateAccessPolicyResponse,
  CreateCollectionDetail,
  CreateCollectionRequest,
  CreateCollectionResponse,
  CreateSecurityConfigRequest,
  CreateSecurityConfigResponse,
  CreateSecurityPolicyRequest,
  CreateSecurityPolicyResponse,
  CreateVpcEndpointDetail,
  CreateVpcEndpointRequest,
  CreateVpcEndpointResponse,
  DeleteAccessPolicyRequest,
  DeleteAccessPolicyResponse,
  DeleteCollectionDetail,
  DeleteCollectionRequest,
  DeleteCollectionResponse,
  DeleteSecurityConfigRequest,
  DeleteSecurityConfigResponse,
  DeleteSecurityPolicyRequest,
  DeleteSecurityPolicyResponse,
  DeleteVpcEndpointDetail,
  DeleteVpcEndpointRequest,
  DeleteVpcEndpointResponse,
  GetAccessPolicyRequest,
  GetAccessPolicyResponse,
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
  GetPoliciesStatsRequest,
  GetPoliciesStatsResponse,
  GetSecurityConfigRequest,
  GetSecurityConfigResponse,
  GetSecurityPolicyRequest,
  GetSecurityPolicyResponse,
  InternalServerException,
  ListAccessPoliciesRequest,
  ListAccessPoliciesResponse,
  ListCollectionsRequest,
  ListCollectionsResponse,
  ListSecurityConfigsRequest,
  ListSecurityConfigsResponse,
  ListSecurityPoliciesRequest,
  ListSecurityPoliciesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListVpcEndpointsRequest,
  ListVpcEndpointsResponse,
  ResourceNotFoundException,
  SamlConfigOptions,
  SecurityConfigDetail,
  SecurityConfigStats,
  SecurityConfigSummary,
  SecurityPolicyDetail,
  SecurityPolicyStats,
  SecurityPolicySummary,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAccessPolicyRequest,
  UpdateAccessPolicyResponse,
  UpdateAccountSettingsRequest,
  UpdateAccountSettingsResponse,
  UpdateCollectionDetail,
  UpdateCollectionRequest,
  UpdateCollectionResponse,
  UpdateSecurityConfigRequest,
  UpdateSecurityConfigResponse,
  UpdateSecurityPolicyRequest,
  UpdateSecurityPolicyResponse,
  UpdateVpcEndpointDetail,
  UpdateVpcEndpointRequest,
  UpdateVpcEndpointResponse,
  ValidationException,
  VpcEndpointDetail,
  VpcEndpointErrorDetail,
  VpcEndpointFilters,
  VpcEndpointSummary,
} from "../models/models_0";
import { OpenSearchServerlessServiceException as __BaseException } from "../models/OpenSearchServerlessServiceException";

export const serializeAws_json1_0BatchGetCollectionCommand = async (
  input: BatchGetCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.BatchGetCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchGetCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchGetVpcEndpointCommand = async (
  input: BatchGetVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.BatchGetVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchGetVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateSecurityConfigCommand = async (
  input: CreateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateSecurityPolicyCommand = async (
  input: CreateSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateVpcEndpointCommand = async (
  input: CreateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteAccessPolicyCommand = async (
  input: DeleteAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteCollectionCommand = async (
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteSecurityConfigCommand = async (
  input: DeleteSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteSecurityPolicyCommand = async (
  input: DeleteSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteVpcEndpointCommand = async (
  input: DeleteVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetAccessPolicyCommand = async (
  input: GetAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetPoliciesStatsCommand = async (
  input: GetPoliciesStatsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetPoliciesStats",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetPoliciesStatsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetSecurityConfigCommand = async (
  input: GetSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetSecurityPolicyCommand = async (
  input: GetSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListAccessPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListAccessPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListCollectionsCommand = async (
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListCollections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListCollectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSecurityConfigsCommand = async (
  input: ListSecurityConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListSecurityConfigs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSecurityConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListSecurityPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListSecurityPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListVpcEndpointsCommand = async (
  input: ListVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListVpcEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListVpcEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateCollectionCommand = async (
  input: UpdateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateCollection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateSecurityConfigCommand = async (
  input: UpdateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateSecurityPolicyCommand = async (
  input: UpdateSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateVpcEndpointCommand = async (
  input: UpdateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0BatchGetCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchGetCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchGetCollectionResponse(data, context);
  const response: BatchGetCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchGetCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0BatchGetVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0BatchGetVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchGetVpcEndpointResponse(data, context);
  const response: BatchGetVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchGetVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateAccessPolicyResponse(data, context);
  const response: CreateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateSecurityConfigResponse(data, context);
  const response: CreateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateSecurityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateSecurityPolicyResponse(data, context);
  const response: CreateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateVpcEndpointResponse(data, context);
  const response: CreateVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteAccessPolicyResponse(data, context);
  const response: DeleteAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteSecurityConfigResponse(data, context);
  const response: DeleteSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteSecurityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteSecurityPolicyResponse(data, context);
  const response: DeleteSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteVpcEndpointResponse(data, context);
  const response: DeleteVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAccessPolicyResponse(data, context);
  const response: GetAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAccountSettingsResponse(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetPoliciesStatsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPoliciesStatsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetPoliciesStatsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetPoliciesStatsResponse(data, context);
  const response: GetPoliciesStatsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetPoliciesStatsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPoliciesStatsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetSecurityConfigResponse(data, context);
  const response: GetSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetSecurityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetSecurityPolicyResponse(data, context);
  const response: GetSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListAccessPoliciesResponse(data, context);
  const response: ListAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListSecurityConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSecurityConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSecurityConfigsResponse(data, context);
  const response: ListSecurityConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSecurityConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListSecurityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListSecurityPoliciesResponse(data, context);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListSecurityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListVpcEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListVpcEndpointsResponse(data, context);
  const response: ListVpcEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListVpcEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateAccessPolicyResponse(data, context);
  const response: UpdateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateAccountSettingsResponse(data, context);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateCollectionResponse(data, context);
  const response: UpdateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateSecurityConfigResponse(data, context);
  const response: UpdateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateSecurityConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateSecurityPolicyResponse(data, context);
  const response: UpdateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateVpcEndpointResponse(data, context);
  const response: UpdateVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0BatchGetCollectionRequest = (
  input: BatchGetCollectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ids != null && { ids: serializeAws_json1_0CollectionIds(input.ids, context) }),
    ...(input.names != null && { names: serializeAws_json1_0CollectionNames(input.names, context) }),
  };
};

const serializeAws_json1_0BatchGetVpcEndpointRequest = (
  input: BatchGetVpcEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ids != null && { ids: serializeAws_json1_0VpcEndpointIds(input.ids, context) }),
  };
};

const serializeAws_json1_0CapacityLimits = (input: CapacityLimits, context: __SerdeContext): any => {
  return {
    ...(input.maxIndexingCapacityInOCU != null && { maxIndexingCapacityInOCU: input.maxIndexingCapacityInOCU }),
    ...(input.maxSearchCapacityInOCU != null && { maxSearchCapacityInOCU: input.maxSearchCapacityInOCU }),
  };
};

const serializeAws_json1_0CollectionFilters = (input: CollectionFilters, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0CollectionIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0CollectionNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0CreateAccessPolicyRequest = (
  input: CreateAccessPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_0Tags(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0CreateSecurityConfigRequest = (
  input: CreateSecurityConfigRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.samlOptions != null && {
      samlOptions: serializeAws_json1_0SamlConfigOptions(input.samlOptions, context),
    }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0CreateSecurityPolicyRequest = (
  input: CreateSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0CreateVpcEndpointRequest = (
  input: CreateVpcEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_json1_0SecurityGroupIds(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_json1_0SubnetIds(input.subnetIds, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

const serializeAws_json1_0DeleteAccessPolicyRequest = (
  input: DeleteAccessPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0DeleteSecurityConfigRequest = (
  input: DeleteSecurityConfigRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0DeleteSecurityPolicyRequest = (
  input: DeleteSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0DeleteVpcEndpointRequest = (
  input: DeleteVpcEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0GetAccessPolicyRequest = (input: GetAccessPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0GetAccountSettingsRequest = (
  input: GetAccountSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0GetPoliciesStatsRequest = (input: GetPoliciesStatsRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0GetSecurityConfigRequest = (
  input: GetSecurityConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0GetSecurityPolicyRequest = (
  input: GetSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0ListAccessPoliciesRequest = (
  input: ListAccessPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resource != null && { resource: serializeAws_json1_0ResourceFilter(input.resource, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0ListCollectionsRequest = (input: ListCollectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.collectionFilters != null && {
      collectionFilters: serializeAws_json1_0CollectionFilters(input.collectionFilters, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListSecurityConfigsRequest = (
  input: ListSecurityConfigsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0ListSecurityPoliciesRequest = (
  input: ListSecurityPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resource != null && { resource: serializeAws_json1_0ResourceFilter(input.resource, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0ListVpcEndpointsRequest = (input: ListVpcEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vpcEndpointFilters != null && {
      vpcEndpointFilters: serializeAws_json1_0VpcEndpointFilters(input.vpcEndpointFilters, context),
    }),
  };
};

const serializeAws_json1_0ResourceFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0SamlConfigOptions = (input: SamlConfigOptions, context: __SerdeContext): any => {
  return {
    ...(input.groupAttribute != null && { groupAttribute: input.groupAttribute }),
    ...(input.metadata != null && { metadata: input.metadata }),
    ...(input.sessionTimeout != null && { sessionTimeout: input.sessionTimeout }),
    ...(input.userAttribute != null && { userAttribute: input.userAttribute }),
  };
};

const serializeAws_json1_0SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_0TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0Tags(input.tags, context) }),
  };
};

const serializeAws_json1_0Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_0TagKeys(input.tagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateAccessPolicyRequest = (
  input: UpdateAccessPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.policyVersion != null && { policyVersion: input.policyVersion }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0UpdateAccountSettingsRequest = (
  input: UpdateAccountSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.capacityLimits != null && {
      capacityLimits: serializeAws_json1_0CapacityLimits(input.capacityLimits, context),
    }),
  };
};

const serializeAws_json1_0UpdateCollectionRequest = (input: UpdateCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0UpdateSecurityConfigRequest = (
  input: UpdateSecurityConfigRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configVersion != null && { configVersion: input.configVersion }),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.samlOptions != null && {
      samlOptions: serializeAws_json1_0SamlConfigOptions(input.samlOptions, context),
    }),
  };
};

const serializeAws_json1_0UpdateSecurityPolicyRequest = (
  input: UpdateSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.policyVersion != null && { policyVersion: input.policyVersion }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0UpdateVpcEndpointRequest = (
  input: UpdateVpcEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addSecurityGroupIds != null && {
      addSecurityGroupIds: serializeAws_json1_0SecurityGroupIds(input.addSecurityGroupIds, context),
    }),
    ...(input.addSubnetIds != null && { addSubnetIds: serializeAws_json1_0SubnetIds(input.addSubnetIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
    ...(input.removeSecurityGroupIds != null && {
      removeSecurityGroupIds: serializeAws_json1_0SecurityGroupIds(input.removeSecurityGroupIds, context),
    }),
    ...(input.removeSubnetIds != null && {
      removeSubnetIds: serializeAws_json1_0SubnetIds(input.removeSubnetIds, context),
    }),
  };
};

const serializeAws_json1_0VpcEndpointFilters = (input: VpcEndpointFilters, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0VpcEndpointIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_0AccessPolicyDetail = (output: any, context: __SerdeContext): AccessPolicyDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policy: output.policy != null ? deserializeAws_json1_0Document(output.policy, context) : undefined,
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0AccessPolicyStats = (output: any, context: __SerdeContext): AccessPolicyStats => {
  return {
    DataPolicyCount: __expectLong(output.DataPolicyCount),
  } as any;
};

const deserializeAws_json1_0AccessPolicySummaries = (output: any, context: __SerdeContext): AccessPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AccessPolicySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AccessPolicySummary = (output: any, context: __SerdeContext): AccessPolicySummary => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0AccountSettingsDetail = (output: any, context: __SerdeContext): AccountSettingsDetail => {
  return {
    capacityLimits:
      output.capacityLimits != null ? deserializeAws_json1_0CapacityLimits(output.capacityLimits, context) : undefined,
  } as any;
};

const deserializeAws_json1_0BatchGetCollectionResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCollectionResponse => {
  return {
    collectionDetails:
      output.collectionDetails != null
        ? deserializeAws_json1_0CollectionDetails(output.collectionDetails, context)
        : undefined,
    collectionErrorDetails:
      output.collectionErrorDetails != null
        ? deserializeAws_json1_0CollectionErrorDetails(output.collectionErrorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0BatchGetVpcEndpointResponse = (
  output: any,
  context: __SerdeContext
): BatchGetVpcEndpointResponse => {
  return {
    vpcEndpointDetails:
      output.vpcEndpointDetails != null
        ? deserializeAws_json1_0VpcEndpointDetails(output.vpcEndpointDetails, context)
        : undefined,
    vpcEndpointErrorDetails:
      output.vpcEndpointErrorDetails != null
        ? deserializeAws_json1_0VpcEndpointErrorDetails(output.vpcEndpointErrorDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CapacityLimits = (output: any, context: __SerdeContext): CapacityLimits => {
  return {
    maxIndexingCapacityInOCU: __expectInt32(output.maxIndexingCapacityInOCU),
    maxSearchCapacityInOCU: __expectInt32(output.maxSearchCapacityInOCU),
  } as any;
};

const deserializeAws_json1_0CollectionDetail = (output: any, context: __SerdeContext): CollectionDetail => {
  return {
    arn: __expectString(output.arn),
    collectionEndpoint: __expectString(output.collectionEndpoint),
    createdDate: __expectLong(output.createdDate),
    dashboardEndpoint: __expectString(output.dashboardEndpoint),
    description: __expectString(output.description),
    id: __expectString(output.id),
    kmsKeyArn: __expectString(output.kmsKeyArn),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0CollectionDetails = (output: any, context: __SerdeContext): CollectionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CollectionDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CollectionErrorDetail = (output: any, context: __SerdeContext): CollectionErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0CollectionErrorDetails = (
  output: any,
  context: __SerdeContext
): CollectionErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CollectionErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CollectionSummaries = (output: any, context: __SerdeContext): CollectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CollectionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CollectionSummary = (output: any, context: __SerdeContext): CollectionSummary => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0CreateAccessPolicyResponse = (
  output: any,
  context: __SerdeContext
): CreateAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null
        ? deserializeAws_json1_0AccessPolicyDetail(output.accessPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateCollectionDetail = (output: any, context: __SerdeContext): CreateCollectionDetail => {
  return {
    arn: __expectString(output.arn),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    kmsKeyArn: __expectString(output.kmsKeyArn),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0CreateCollectionResponse = (
  output: any,
  context: __SerdeContext
): CreateCollectionResponse => {
  return {
    createCollectionDetail:
      output.createCollectionDetail != null
        ? deserializeAws_json1_0CreateCollectionDetail(output.createCollectionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateSecurityConfigResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null
        ? deserializeAws_json1_0SecurityConfigDetail(output.securityConfigDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null
        ? deserializeAws_json1_0SecurityPolicyDetail(output.securityPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateVpcEndpointDetail = (
  output: any,
  context: __SerdeContext
): CreateVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0CreateVpcEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateVpcEndpointResponse => {
  return {
    createVpcEndpointDetail:
      output.createVpcEndpointDetail != null
        ? deserializeAws_json1_0CreateVpcEndpointDetail(output.createVpcEndpointDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteAccessPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccessPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_0DeleteCollectionDetail = (output: any, context: __SerdeContext): DeleteCollectionDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0DeleteCollectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteCollectionResponse => {
  return {
    deleteCollectionDetail:
      output.deleteCollectionDetail != null
        ? deserializeAws_json1_0DeleteCollectionDetail(output.deleteCollectionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteSecurityConfigResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigResponse => {
  return {} as any;
};

const deserializeAws_json1_0DeleteSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecurityPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_0DeleteVpcEndpointDetail = (
  output: any,
  context: __SerdeContext
): DeleteVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0DeleteVpcEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteVpcEndpointResponse => {
  return {
    deleteVpcEndpointDetail:
      output.deleteVpcEndpointDetail != null
        ? deserializeAws_json1_0DeleteVpcEndpointDetail(output.deleteVpcEndpointDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetAccessPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null
        ? deserializeAws_json1_0AccessPolicyDetail(output.accessPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetAccountSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetAccountSettingsResponse => {
  return {
    accountSettingsDetail:
      output.accountSettingsDetail != null
        ? deserializeAws_json1_0AccountSettingsDetail(output.accountSettingsDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetPoliciesStatsResponse = (
  output: any,
  context: __SerdeContext
): GetPoliciesStatsResponse => {
  return {
    AccessPolicyStats:
      output.AccessPolicyStats != null
        ? deserializeAws_json1_0AccessPolicyStats(output.AccessPolicyStats, context)
        : undefined,
    SecurityConfigStats:
      output.SecurityConfigStats != null
        ? deserializeAws_json1_0SecurityConfigStats(output.SecurityConfigStats, context)
        : undefined,
    SecurityPolicyStats:
      output.SecurityPolicyStats != null
        ? deserializeAws_json1_0SecurityPolicyStats(output.SecurityPolicyStats, context)
        : undefined,
    TotalPolicyCount: __expectLong(output.TotalPolicyCount),
  } as any;
};

const deserializeAws_json1_0GetSecurityConfigResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null
        ? deserializeAws_json1_0SecurityConfigDetail(output.securityConfigDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null
        ? deserializeAws_json1_0SecurityPolicyDetail(output.securityPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ListAccessPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAccessPoliciesResponse => {
  return {
    accessPolicySummaries:
      output.accessPolicySummaries != null
        ? deserializeAws_json1_0AccessPolicySummaries(output.accessPolicySummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListCollectionsResponse = (
  output: any,
  context: __SerdeContext
): ListCollectionsResponse => {
  return {
    collectionSummaries:
      output.collectionSummaries != null
        ? deserializeAws_json1_0CollectionSummaries(output.collectionSummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListSecurityConfigsResponse = (
  output: any,
  context: __SerdeContext
): ListSecurityConfigsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    securityConfigSummaries:
      output.securityConfigSummaries != null
        ? deserializeAws_json1_0SecurityConfigSummaries(output.securityConfigSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListSecurityPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListSecurityPoliciesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    securityPolicySummaries:
      output.securityPolicySummaries != null
        ? deserializeAws_json1_0SecurityPolicySummaries(output.securityPolicySummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_0Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListVpcEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListVpcEndpointsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vpcEndpointSummaries:
      output.vpcEndpointSummaries != null
        ? deserializeAws_json1_0VpcEndpointSummaries(output.vpcEndpointSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0SamlConfigOptions = (output: any, context: __SerdeContext): SamlConfigOptions => {
  return {
    groupAttribute: __expectString(output.groupAttribute),
    metadata: __expectString(output.metadata),
    sessionTimeout: __expectInt32(output.sessionTimeout),
    userAttribute: __expectString(output.userAttribute),
  } as any;
};

const deserializeAws_json1_0SecurityConfigDetail = (output: any, context: __SerdeContext): SecurityConfigDetail => {
  return {
    configVersion: __expectString(output.configVersion),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    samlOptions:
      output.samlOptions != null ? deserializeAws_json1_0SamlConfigOptions(output.samlOptions, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0SecurityConfigStats = (output: any, context: __SerdeContext): SecurityConfigStats => {
  return {
    SamlConfigCount: __expectLong(output.SamlConfigCount),
  } as any;
};

const deserializeAws_json1_0SecurityConfigSummaries = (
  output: any,
  context: __SerdeContext
): SecurityConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SecurityConfigSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SecurityConfigSummary = (output: any, context: __SerdeContext): SecurityConfigSummary => {
  return {
    configVersion: __expectString(output.configVersion),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0SecurityPolicyDetail = (output: any, context: __SerdeContext): SecurityPolicyDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policy: output.policy != null ? deserializeAws_json1_0Document(output.policy, context) : undefined,
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0SecurityPolicyStats = (output: any, context: __SerdeContext): SecurityPolicyStats => {
  return {
    EncryptionPolicyCount: __expectLong(output.EncryptionPolicyCount),
    NetworkPolicyCount: __expectLong(output.NetworkPolicyCount),
  } as any;
};

const deserializeAws_json1_0SecurityPolicySummaries = (
  output: any,
  context: __SerdeContext
): SecurityPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SecurityPolicySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SecurityPolicySummary = (output: any, context: __SerdeContext): SecurityPolicySummary => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateAccessPolicyResponse = (
  output: any,
  context: __SerdeContext
): UpdateAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null
        ? deserializeAws_json1_0AccessPolicyDetail(output.accessPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateAccountSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateAccountSettingsResponse => {
  return {
    accountSettingsDetail:
      output.accountSettingsDetail != null
        ? deserializeAws_json1_0AccountSettingsDetail(output.accountSettingsDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateCollectionDetail = (output: any, context: __SerdeContext): UpdateCollectionDetail => {
  return {
    arn: __expectString(output.arn),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0UpdateCollectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateCollectionResponse => {
  return {
    updateCollectionDetail:
      output.updateCollectionDetail != null
        ? deserializeAws_json1_0UpdateCollectionDetail(output.updateCollectionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateSecurityConfigResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null
        ? deserializeAws_json1_0SecurityConfigDetail(output.securityConfigDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null
        ? deserializeAws_json1_0SecurityPolicyDetail(output.securityPolicyDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateVpcEndpointDetail = (
  output: any,
  context: __SerdeContext
): UpdateVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_json1_0SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? deserializeAws_json1_0SubnetIds(output.subnetIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateVpcEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateVpcEndpointResponse => {
  return {
    UpdateVpcEndpointDetail:
      output.UpdateVpcEndpointDetail != null
        ? deserializeAws_json1_0UpdateVpcEndpointDetail(output.UpdateVpcEndpointDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0VpcEndpointDetail = (output: any, context: __SerdeContext): VpcEndpointDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    id: __expectString(output.id),
    name: __expectString(output.name),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_json1_0SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? deserializeAws_json1_0SubnetIds(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_json1_0VpcEndpointDetails = (output: any, context: __SerdeContext): VpcEndpointDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VpcEndpointDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VpcEndpointErrorDetail = (output: any, context: __SerdeContext): VpcEndpointErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_0VpcEndpointErrorDetails = (
  output: any,
  context: __SerdeContext
): VpcEndpointErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VpcEndpointErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VpcEndpointSummaries = (output: any, context: __SerdeContext): VpcEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VpcEndpointSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0VpcEndpointSummary = (output: any, context: __SerdeContext): VpcEndpointSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
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
