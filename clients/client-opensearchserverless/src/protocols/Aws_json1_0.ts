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
  OcuLimitExceededException,
  ResourceNotFoundException,
  SamlConfigOptions,
  SecurityConfigDetail,
  SecurityConfigStats,
  SecurityConfigSummary,
  SecurityPolicyDetail,
  SecurityPolicyStats,
  SecurityPolicySummary,
  ServiceQuotaExceededException,
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

/**
 * serializeAws_json1_0BatchGetCollectionCommand
 */
export const se_BatchGetCollectionCommand = async (
  input: BatchGetCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.BatchGetCollection",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchGetVpcEndpointCommand
 */
export const se_BatchGetVpcEndpointCommand = async (
  input: BatchGetVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.BatchGetVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAccessPolicyCommand
 */
export const se_CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(se_CreateAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCollectionCommand
 */
export const se_CreateCollectionCommand = async (
  input: CreateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateCollection",
  };
  let body: any;
  body = JSON.stringify(se_CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSecurityConfigCommand
 */
export const se_CreateSecurityConfigCommand = async (
  input: CreateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(se_CreateSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSecurityPolicyCommand
 */
export const se_CreateSecurityPolicyCommand = async (
  input: CreateSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(se_CreateSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVpcEndpointCommand
 */
export const se_CreateVpcEndpointCommand = async (
  input: CreateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.CreateVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_CreateVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAccessPolicyCommand
 */
export const se_DeleteAccessPolicyCommand = async (
  input: DeleteAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCollectionCommand
 */
export const se_DeleteCollectionCommand = async (
  input: DeleteCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteCollection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSecurityConfigCommand
 */
export const se_DeleteSecurityConfigCommand = async (
  input: DeleteSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSecurityPolicyCommand
 */
export const se_DeleteSecurityPolicyCommand = async (
  input: DeleteSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVpcEndpointCommand
 */
export const se_DeleteVpcEndpointCommand = async (
  input: DeleteVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.DeleteVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccessPolicyCommand
 */
export const se_GetAccessPolicyCommand = async (
  input: GetAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetAccountSettings",
  };
  let body: any;
  body = JSON.stringify(se_GetAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPoliciesStatsCommand
 */
export const se_GetPoliciesStatsCommand = async (
  input: GetPoliciesStatsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetPoliciesStats",
  };
  let body: any;
  body = JSON.stringify(se_GetPoliciesStatsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSecurityConfigCommand
 */
export const se_GetSecurityConfigCommand = async (
  input: GetSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(se_GetSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSecurityPolicyCommand
 */
export const se_GetSecurityPolicyCommand = async (
  input: GetSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.GetSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAccessPoliciesCommand
 */
export const se_ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListAccessPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListAccessPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCollectionsCommand
 */
export const se_ListCollectionsCommand = async (
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListCollections",
  };
  let body: any;
  body = JSON.stringify(se_ListCollectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSecurityConfigsCommand
 */
export const se_ListSecurityConfigsCommand = async (
  input: ListSecurityConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListSecurityConfigs",
  };
  let body: any;
  body = JSON.stringify(se_ListSecurityConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSecurityPoliciesCommand
 */
export const se_ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListSecurityPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListSecurityPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVpcEndpointsCommand
 */
export const se_ListVpcEndpointsCommand = async (
  input: ListVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.ListVpcEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_ListVpcEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateAccessPolicyCommand
 */
export const se_UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateAccessPolicy",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAccessPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateAccountSettings",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateCollectionCommand
 */
export const se_UpdateCollectionCommand = async (
  input: UpdateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateCollection",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSecurityConfigCommand
 */
export const se_UpdateSecurityConfigCommand = async (
  input: UpdateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateSecurityConfig",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSecurityConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSecurityPolicyCommand
 */
export const se_UpdateSecurityPolicyCommand = async (
  input: UpdateSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateVpcEndpointCommand
 */
export const se_UpdateVpcEndpointCommand = async (
  input: UpdateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "OpenSearchServerless.UpdateVpcEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_UpdateVpcEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0BatchGetCollectionCommand
 */
export const de_BatchGetCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetCollectionResponse(data, context);
  const response: BatchGetCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchGetCollectionCommandError
 */
const de_BatchGetCollectionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0BatchGetVpcEndpointCommand
 */
export const de_BatchGetVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetVpcEndpointResponse(data, context);
  const response: BatchGetVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0BatchGetVpcEndpointCommandError
 */
const de_BatchGetVpcEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateAccessPolicyCommand
 */
export const de_CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccessPolicyResponse(data, context);
  const response: CreateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateAccessPolicyCommandError
 */
const de_CreateAccessPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateCollectionCommand
 */
export const de_CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCollectionResponse(data, context);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateCollectionCommandError
 */
const de_CreateCollectionCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "OcuLimitExceededException":
    case "com.amazonaws.opensearchserverless#OcuLimitExceededException":
      throw await de_OcuLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateSecurityConfigCommand
 */
export const de_CreateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecurityConfigResponse(data, context);
  const response: CreateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateSecurityConfigCommandError
 */
const de_CreateSecurityConfigCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateSecurityPolicyCommand
 */
export const de_CreateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecurityPolicyResponse(data, context);
  const response: CreateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateSecurityPolicyCommandError
 */
const de_CreateSecurityPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateVpcEndpointCommand
 */
export const de_CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVpcEndpointResponse(data, context);
  const response: CreateVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateVpcEndpointCommandError
 */
const de_CreateVpcEndpointCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteAccessPolicyCommand
 */
export const de_DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccessPolicyResponse(data, context);
  const response: DeleteAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteAccessPolicyCommandError
 */
const de_DeleteAccessPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteCollectionCommand
 */
export const de_DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCollectionResponse(data, context);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteCollectionCommandError
 */
const de_DeleteCollectionCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteSecurityConfigCommand
 */
export const de_DeleteSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSecurityConfigResponse(data, context);
  const response: DeleteSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteSecurityConfigCommandError
 */
const de_DeleteSecurityConfigCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteSecurityPolicyCommand
 */
export const de_DeleteSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSecurityPolicyResponse(data, context);
  const response: DeleteSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteSecurityPolicyCommandError
 */
const de_DeleteSecurityPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteVpcEndpointCommand
 */
export const de_DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVpcEndpointResponse(data, context);
  const response: DeleteVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteVpcEndpointCommandError
 */
const de_DeleteVpcEndpointCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetAccessPolicyCommand
 */
export const de_GetAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessPolicyResponse(data, context);
  const response: GetAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetAccessPolicyCommandError
 */
const de_GetAccessPolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountSettingsResponse(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetAccountSettingsCommandError
 */
const de_GetAccountSettingsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetPoliciesStatsCommand
 */
export const de_GetPoliciesStatsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPoliciesStatsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPoliciesStatsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPoliciesStatsResponse(data, context);
  const response: GetPoliciesStatsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetPoliciesStatsCommandError
 */
const de_GetPoliciesStatsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetSecurityConfigCommand
 */
export const de_GetSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecurityConfigResponse(data, context);
  const response: GetSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetSecurityConfigCommandError
 */
const de_GetSecurityConfigCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetSecurityPolicyCommand
 */
export const de_GetSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecurityPolicyResponse(data, context);
  const response: GetSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetSecurityPolicyCommandError
 */
const de_GetSecurityPolicyCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListAccessPoliciesCommand
 */
export const de_ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccessPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccessPoliciesResponse(data, context);
  const response: ListAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListAccessPoliciesCommandError
 */
const de_ListAccessPoliciesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListCollectionsCommand
 */
export const de_ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCollectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCollectionsResponse(data, context);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListCollectionsCommandError
 */
const de_ListCollectionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListSecurityConfigsCommand
 */
export const de_ListSecurityConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecurityConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecurityConfigsResponse(data, context);
  const response: ListSecurityConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListSecurityConfigsCommandError
 */
const de_ListSecurityConfigsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListSecurityPoliciesCommand
 */
export const de_ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecurityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecurityPoliciesResponse(data, context);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListSecurityPoliciesCommandError
 */
const de_ListSecurityPoliciesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListVpcEndpointsCommand
 */
export const de_ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVpcEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVpcEndpointsResponse(data, context);
  const response: ListVpcEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListVpcEndpointsCommandError
 */
const de_ListVpcEndpointsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateAccessPolicyCommand
 */
export const de_UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccessPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAccessPolicyResponse(data, context);
  const response: UpdateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateAccessPolicyCommandError
 */
const de_UpdateAccessPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAccountSettingsResponse(data, context);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateAccountSettingsCommandError
 */
const de_UpdateAccountSettingsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateCollectionCommand
 */
export const de_UpdateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCollectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCollectionResponse(data, context);
  const response: UpdateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateCollectionCommandError
 */
const de_UpdateCollectionCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateSecurityConfigCommand
 */
export const de_UpdateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSecurityConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSecurityConfigResponse(data, context);
  const response: UpdateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateSecurityConfigCommandError
 */
const de_UpdateSecurityConfigCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateSecurityPolicyCommand
 */
export const de_UpdateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSecurityPolicyResponse(data, context);
  const response: UpdateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateSecurityPolicyCommandError
 */
const de_UpdateSecurityPolicyCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateVpcEndpointCommand
 */
export const de_UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVpcEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVpcEndpointResponse(data, context);
  const response: UpdateVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateVpcEndpointCommandError
 */
const de_UpdateVpcEndpointCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0OcuLimitExceededExceptionRes
 */
const de_OcuLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OcuLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OcuLimitExceededException(body, context);
  const exception = new OcuLimitExceededException({
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0BatchGetCollectionRequest
 */
const se_BatchGetCollectionRequest = (input: BatchGetCollectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_CollectionIds(input.ids, context) }),
    ...(input.names != null && { names: se_CollectionNames(input.names, context) }),
  };
};

/**
 * serializeAws_json1_0BatchGetVpcEndpointRequest
 */
const se_BatchGetVpcEndpointRequest = (input: BatchGetVpcEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.ids != null && { ids: se_VpcEndpointIds(input.ids, context) }),
  };
};

/**
 * serializeAws_json1_0CapacityLimits
 */
const se_CapacityLimits = (input: CapacityLimits, context: __SerdeContext): any => {
  return {
    ...(input.maxIndexingCapacityInOCU != null && { maxIndexingCapacityInOCU: input.maxIndexingCapacityInOCU }),
    ...(input.maxSearchCapacityInOCU != null && { maxSearchCapacityInOCU: input.maxSearchCapacityInOCU }),
  };
};

/**
 * serializeAws_json1_0CollectionFilters
 */
const se_CollectionFilters = (input: CollectionFilters, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0CollectionIds
 */
const se_CollectionIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CollectionNames
 */
const se_CollectionNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0CreateAccessPolicyRequest
 */
const se_CreateAccessPolicyRequest = (input: CreateAccessPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0CreateCollectionRequest
 */
const se_CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0CreateSecurityConfigRequest
 */
const se_CreateSecurityConfigRequest = (input: CreateSecurityConfigRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.samlOptions != null && { samlOptions: se_SamlConfigOptions(input.samlOptions, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0CreateSecurityPolicyRequest
 */
const se_CreateSecurityPolicyRequest = (input: CreateSecurityPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0CreateVpcEndpointRequest
 */
const se_CreateVpcEndpointRequest = (input: CreateVpcEndpointRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_SecurityGroupIds(input.securityGroupIds, context) }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIds(input.subnetIds, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

/**
 * serializeAws_json1_0DeleteAccessPolicyRequest
 */
const se_DeleteAccessPolicyRequest = (input: DeleteAccessPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0DeleteCollectionRequest
 */
const se_DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0DeleteSecurityConfigRequest
 */
const se_DeleteSecurityConfigRequest = (input: DeleteSecurityConfigRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0DeleteSecurityPolicyRequest
 */
const se_DeleteSecurityPolicyRequest = (input: DeleteSecurityPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0DeleteVpcEndpointRequest
 */
const se_DeleteVpcEndpointRequest = (input: DeleteVpcEndpointRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0GetAccessPolicyRequest
 */
const se_GetAccessPolicyRequest = (input: GetAccessPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0GetAccountSettingsRequest
 */
const se_GetAccountSettingsRequest = (input: GetAccountSettingsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetPoliciesStatsRequest
 */
const se_GetPoliciesStatsRequest = (input: GetPoliciesStatsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetSecurityConfigRequest
 */
const se_GetSecurityConfigRequest = (input: GetSecurityConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0GetSecurityPolicyRequest
 */
const se_GetSecurityPolicyRequest = (input: GetSecurityPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0ListAccessPoliciesRequest
 */
const se_ListAccessPoliciesRequest = (input: ListAccessPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resource != null && { resource: se_ResourceFilter(input.resource, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0ListCollectionsRequest
 */
const se_ListCollectionsRequest = (input: ListCollectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.collectionFilters != null && {
      collectionFilters: se_CollectionFilters(input.collectionFilters, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListSecurityConfigsRequest
 */
const se_ListSecurityConfigsRequest = (input: ListSecurityConfigsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0ListSecurityPoliciesRequest
 */
const se_ListSecurityPoliciesRequest = (input: ListSecurityPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resource != null && { resource: se_ResourceFilter(input.resource, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_0ListVpcEndpointsRequest
 */
const se_ListVpcEndpointsRequest = (input: ListVpcEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vpcEndpointFilters != null && {
      vpcEndpointFilters: se_VpcEndpointFilters(input.vpcEndpointFilters, context),
    }),
  };
};

/**
 * serializeAws_json1_0ResourceFilter
 */
const se_ResourceFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0SamlConfigOptions
 */
const se_SamlConfigOptions = (input: SamlConfigOptions, context: __SerdeContext): any => {
  return {
    ...(input.groupAttribute != null && { groupAttribute: input.groupAttribute }),
    ...(input.metadata != null && { metadata: input.metadata }),
    ...(input.sessionTimeout != null && { sessionTimeout: input.sessionTimeout }),
    ...(input.userAttribute != null && { userAttribute: input.userAttribute }),
  };
};

/**
 * serializeAws_json1_0SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeys(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateAccessPolicyRequest
 */
const se_UpdateAccessPolicyRequest = (input: UpdateAccessPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.policyVersion != null && { policyVersion: input.policyVersion }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0UpdateAccountSettingsRequest
 */
const se_UpdateAccountSettingsRequest = (input: UpdateAccountSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacityLimits != null && { capacityLimits: se_CapacityLimits(input.capacityLimits, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateCollectionRequest
 */
const se_UpdateCollectionRequest = (input: UpdateCollectionRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0UpdateSecurityConfigRequest
 */
const se_UpdateSecurityConfigRequest = (input: UpdateSecurityConfigRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configVersion != null && { configVersion: input.configVersion }),
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.samlOptions != null && { samlOptions: se_SamlConfigOptions(input.samlOptions, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateSecurityPolicyRequest
 */
const se_UpdateSecurityPolicyRequest = (input: UpdateSecurityPolicyRequest, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.policy != null && { policy: input.policy }),
    ...(input.policyVersion != null && { policyVersion: input.policyVersion }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0UpdateVpcEndpointRequest
 */
const se_UpdateVpcEndpointRequest = (input: UpdateVpcEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.addSecurityGroupIds != null && {
      addSecurityGroupIds: se_SecurityGroupIds(input.addSecurityGroupIds, context),
    }),
    ...(input.addSubnetIds != null && { addSubnetIds: se_SubnetIds(input.addSubnetIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.id != null && { id: input.id }),
    ...(input.removeSecurityGroupIds != null && {
      removeSecurityGroupIds: se_SecurityGroupIds(input.removeSecurityGroupIds, context),
    }),
    ...(input.removeSubnetIds != null && { removeSubnetIds: se_SubnetIds(input.removeSubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_0VpcEndpointFilters
 */
const se_VpcEndpointFilters = (input: VpcEndpointFilters, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0VpcEndpointIds
 */
const se_VpcEndpointIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_0AccessPolicyDetail
 */
const de_AccessPolicyDetail = (output: any, context: __SerdeContext): AccessPolicyDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policy: output.policy != null ? de_Document(output.policy, context) : undefined,
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0AccessPolicyStats
 */
const de_AccessPolicyStats = (output: any, context: __SerdeContext): AccessPolicyStats => {
  return {
    DataPolicyCount: __expectLong(output.DataPolicyCount),
  } as any;
};

/**
 * deserializeAws_json1_0AccessPolicySummaries
 */
const de_AccessPolicySummaries = (output: any, context: __SerdeContext): AccessPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessPolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AccessPolicySummary
 */
const de_AccessPolicySummary = (output: any, context: __SerdeContext): AccessPolicySummary => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0AccountSettingsDetail
 */
const de_AccountSettingsDetail = (output: any, context: __SerdeContext): AccountSettingsDetail => {
  return {
    capacityLimits: output.capacityLimits != null ? de_CapacityLimits(output.capacityLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchGetCollectionResponse
 */
const de_BatchGetCollectionResponse = (output: any, context: __SerdeContext): BatchGetCollectionResponse => {
  return {
    collectionDetails:
      output.collectionDetails != null ? de_CollectionDetails(output.collectionDetails, context) : undefined,
    collectionErrorDetails:
      output.collectionErrorDetails != null
        ? de_CollectionErrorDetails(output.collectionErrorDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BatchGetVpcEndpointResponse
 */
const de_BatchGetVpcEndpointResponse = (output: any, context: __SerdeContext): BatchGetVpcEndpointResponse => {
  return {
    vpcEndpointDetails:
      output.vpcEndpointDetails != null ? de_VpcEndpointDetails(output.vpcEndpointDetails, context) : undefined,
    vpcEndpointErrorDetails:
      output.vpcEndpointErrorDetails != null
        ? de_VpcEndpointErrorDetails(output.vpcEndpointErrorDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CapacityLimits
 */
const de_CapacityLimits = (output: any, context: __SerdeContext): CapacityLimits => {
  return {
    maxIndexingCapacityInOCU: __expectInt32(output.maxIndexingCapacityInOCU),
    maxSearchCapacityInOCU: __expectInt32(output.maxSearchCapacityInOCU),
  } as any;
};

/**
 * deserializeAws_json1_0CollectionDetail
 */
const de_CollectionDetail = (output: any, context: __SerdeContext): CollectionDetail => {
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

/**
 * deserializeAws_json1_0CollectionDetails
 */
const de_CollectionDetails = (output: any, context: __SerdeContext): CollectionDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollectionDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CollectionErrorDetail
 */
const de_CollectionErrorDetail = (output: any, context: __SerdeContext): CollectionErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0CollectionErrorDetails
 */
const de_CollectionErrorDetails = (output: any, context: __SerdeContext): CollectionErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollectionErrorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CollectionSummaries
 */
const de_CollectionSummaries = (output: any, context: __SerdeContext): CollectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CollectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CollectionSummary
 */
const de_CollectionSummary = (output: any, context: __SerdeContext): CollectionSummary => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateAccessPolicyResponse
 */
const de_CreateAccessPolicyResponse = (output: any, context: __SerdeContext): CreateAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null ? de_AccessPolicyDetail(output.accessPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateCollectionDetail
 */
const de_CreateCollectionDetail = (output: any, context: __SerdeContext): CreateCollectionDetail => {
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

/**
 * deserializeAws_json1_0CreateCollectionResponse
 */
const de_CreateCollectionResponse = (output: any, context: __SerdeContext): CreateCollectionResponse => {
  return {
    createCollectionDetail:
      output.createCollectionDetail != null
        ? de_CreateCollectionDetail(output.createCollectionDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateSecurityConfigResponse
 */
const de_CreateSecurityConfigResponse = (output: any, context: __SerdeContext): CreateSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null ? de_SecurityConfigDetail(output.securityConfigDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateSecurityPolicyResponse
 */
const de_CreateSecurityPolicyResponse = (output: any, context: __SerdeContext): CreateSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null ? de_SecurityPolicyDetail(output.securityPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateVpcEndpointDetail
 */
const de_CreateVpcEndpointDetail = (output: any, context: __SerdeContext): CreateVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0CreateVpcEndpointResponse
 */
const de_CreateVpcEndpointResponse = (output: any, context: __SerdeContext): CreateVpcEndpointResponse => {
  return {
    createVpcEndpointDetail:
      output.createVpcEndpointDetail != null
        ? de_CreateVpcEndpointDetail(output.createVpcEndpointDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteAccessPolicyResponse
 */
const de_DeleteAccessPolicyResponse = (output: any, context: __SerdeContext): DeleteAccessPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteCollectionDetail
 */
const de_DeleteCollectionDetail = (output: any, context: __SerdeContext): DeleteCollectionDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteCollectionResponse
 */
const de_DeleteCollectionResponse = (output: any, context: __SerdeContext): DeleteCollectionResponse => {
  return {
    deleteCollectionDetail:
      output.deleteCollectionDetail != null
        ? de_DeleteCollectionDetail(output.deleteCollectionDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteSecurityConfigResponse
 */
const de_DeleteSecurityConfigResponse = (output: any, context: __SerdeContext): DeleteSecurityConfigResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteSecurityPolicyResponse
 */
const de_DeleteSecurityPolicyResponse = (output: any, context: __SerdeContext): DeleteSecurityPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteVpcEndpointDetail
 */
const de_DeleteVpcEndpointDetail = (output: any, context: __SerdeContext): DeleteVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteVpcEndpointResponse
 */
const de_DeleteVpcEndpointResponse = (output: any, context: __SerdeContext): DeleteVpcEndpointResponse => {
  return {
    deleteVpcEndpointDetail:
      output.deleteVpcEndpointDetail != null
        ? de_DeleteVpcEndpointDetail(output.deleteVpcEndpointDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetAccessPolicyResponse
 */
const de_GetAccessPolicyResponse = (output: any, context: __SerdeContext): GetAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null ? de_AccessPolicyDetail(output.accessPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetAccountSettingsResponse
 */
const de_GetAccountSettingsResponse = (output: any, context: __SerdeContext): GetAccountSettingsResponse => {
  return {
    accountSettingsDetail:
      output.accountSettingsDetail != null
        ? de_AccountSettingsDetail(output.accountSettingsDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetPoliciesStatsResponse
 */
const de_GetPoliciesStatsResponse = (output: any, context: __SerdeContext): GetPoliciesStatsResponse => {
  return {
    AccessPolicyStats:
      output.AccessPolicyStats != null ? de_AccessPolicyStats(output.AccessPolicyStats, context) : undefined,
    SecurityConfigStats:
      output.SecurityConfigStats != null ? de_SecurityConfigStats(output.SecurityConfigStats, context) : undefined,
    SecurityPolicyStats:
      output.SecurityPolicyStats != null ? de_SecurityPolicyStats(output.SecurityPolicyStats, context) : undefined,
    TotalPolicyCount: __expectLong(output.TotalPolicyCount),
  } as any;
};

/**
 * deserializeAws_json1_0GetSecurityConfigResponse
 */
const de_GetSecurityConfigResponse = (output: any, context: __SerdeContext): GetSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null ? de_SecurityConfigDetail(output.securityConfigDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetSecurityPolicyResponse
 */
const de_GetSecurityPolicyResponse = (output: any, context: __SerdeContext): GetSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null ? de_SecurityPolicyDetail(output.securityPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ListAccessPoliciesResponse
 */
const de_ListAccessPoliciesResponse = (output: any, context: __SerdeContext): ListAccessPoliciesResponse => {
  return {
    accessPolicySummaries:
      output.accessPolicySummaries != null
        ? de_AccessPolicySummaries(output.accessPolicySummaries, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListCollectionsResponse
 */
const de_ListCollectionsResponse = (output: any, context: __SerdeContext): ListCollectionsResponse => {
  return {
    collectionSummaries:
      output.collectionSummaries != null ? de_CollectionSummaries(output.collectionSummaries, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListSecurityConfigsResponse
 */
const de_ListSecurityConfigsResponse = (output: any, context: __SerdeContext): ListSecurityConfigsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    securityConfigSummaries:
      output.securityConfigSummaries != null
        ? de_SecurityConfigSummaries(output.securityConfigSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListSecurityPoliciesResponse
 */
const de_ListSecurityPoliciesResponse = (output: any, context: __SerdeContext): ListSecurityPoliciesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    securityPolicySummaries:
      output.securityPolicySummaries != null
        ? de_SecurityPolicySummaries(output.securityPolicySummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVpcEndpointsResponse
 */
const de_ListVpcEndpointsResponse = (output: any, context: __SerdeContext): ListVpcEndpointsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    vpcEndpointSummaries:
      output.vpcEndpointSummaries != null ? de_VpcEndpointSummaries(output.vpcEndpointSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0OcuLimitExceededException
 */
const de_OcuLimitExceededException = (output: any, context: __SerdeContext): OcuLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0SamlConfigOptions
 */
const de_SamlConfigOptions = (output: any, context: __SerdeContext): SamlConfigOptions => {
  return {
    groupAttribute: __expectString(output.groupAttribute),
    metadata: __expectString(output.metadata),
    sessionTimeout: __expectInt32(output.sessionTimeout),
    userAttribute: __expectString(output.userAttribute),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityConfigDetail
 */
const de_SecurityConfigDetail = (output: any, context: __SerdeContext): SecurityConfigDetail => {
  return {
    configVersion: __expectString(output.configVersion),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    samlOptions: output.samlOptions != null ? de_SamlConfigOptions(output.samlOptions, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityConfigStats
 */
const de_SecurityConfigStats = (output: any, context: __SerdeContext): SecurityConfigStats => {
  return {
    SamlConfigCount: __expectLong(output.SamlConfigCount),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityConfigSummaries
 */
const de_SecurityConfigSummaries = (output: any, context: __SerdeContext): SecurityConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityConfigSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SecurityConfigSummary
 */
const de_SecurityConfigSummary = (output: any, context: __SerdeContext): SecurityConfigSummary => {
  return {
    configVersion: __expectString(output.configVersion),
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0SecurityPolicyDetail
 */
const de_SecurityPolicyDetail = (output: any, context: __SerdeContext): SecurityPolicyDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policy: output.policy != null ? de_Document(output.policy, context) : undefined,
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityPolicyStats
 */
const de_SecurityPolicyStats = (output: any, context: __SerdeContext): SecurityPolicyStats => {
  return {
    EncryptionPolicyCount: __expectLong(output.EncryptionPolicyCount),
    NetworkPolicyCount: __expectLong(output.NetworkPolicyCount),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityPolicySummaries
 */
const de_SecurityPolicySummaries = (output: any, context: __SerdeContext): SecurityPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityPolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SecurityPolicySummary
 */
const de_SecurityPolicySummary = (output: any, context: __SerdeContext): SecurityPolicySummary => {
  return {
    createdDate: __expectLong(output.createdDate),
    description: __expectString(output.description),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    policyVersion: __expectString(output.policyVersion),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
    quotaCode: __expectString(output.quotaCode),
    resourceId: __expectString(output.resourceId),
    resourceType: __expectString(output.resourceType),
    serviceCode: __expectString(output.serviceCode),
  } as any;
};

/**
 * deserializeAws_json1_0SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateAccessPolicyResponse
 */
const de_UpdateAccessPolicyResponse = (output: any, context: __SerdeContext): UpdateAccessPolicyResponse => {
  return {
    accessPolicyDetail:
      output.accessPolicyDetail != null ? de_AccessPolicyDetail(output.accessPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateAccountSettingsResponse
 */
const de_UpdateAccountSettingsResponse = (output: any, context: __SerdeContext): UpdateAccountSettingsResponse => {
  return {
    accountSettingsDetail:
      output.accountSettingsDetail != null
        ? de_AccountSettingsDetail(output.accountSettingsDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateCollectionDetail
 */
const de_UpdateCollectionDetail = (output: any, context: __SerdeContext): UpdateCollectionDetail => {
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

/**
 * deserializeAws_json1_0UpdateCollectionResponse
 */
const de_UpdateCollectionResponse = (output: any, context: __SerdeContext): UpdateCollectionResponse => {
  return {
    updateCollectionDetail:
      output.updateCollectionDetail != null
        ? de_UpdateCollectionDetail(output.updateCollectionDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateSecurityConfigResponse
 */
const de_UpdateSecurityConfigResponse = (output: any, context: __SerdeContext): UpdateSecurityConfigResponse => {
  return {
    securityConfigDetail:
      output.securityConfigDetail != null ? de_SecurityConfigDetail(output.securityConfigDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateSecurityPolicyResponse
 */
const de_UpdateSecurityPolicyResponse = (output: any, context: __SerdeContext): UpdateSecurityPolicyResponse => {
  return {
    securityPolicyDetail:
      output.securityPolicyDetail != null ? de_SecurityPolicyDetail(output.securityPolicyDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateVpcEndpointDetail
 */
const de_UpdateVpcEndpointDetail = (output: any, context: __SerdeContext): UpdateVpcEndpointDetail => {
  return {
    id: __expectString(output.id),
    lastModifiedDate: __expectLong(output.lastModifiedDate),
    name: __expectString(output.name),
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIds(output.securityGroupIds, context) : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? de_SubnetIds(output.subnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateVpcEndpointResponse
 */
const de_UpdateVpcEndpointResponse = (output: any, context: __SerdeContext): UpdateVpcEndpointResponse => {
  return {
    UpdateVpcEndpointDetail:
      output.UpdateVpcEndpointDetail != null
        ? de_UpdateVpcEndpointDetail(output.UpdateVpcEndpointDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0VpcEndpointDetail
 */
const de_VpcEndpointDetail = (output: any, context: __SerdeContext): VpcEndpointDetail => {
  return {
    createdDate: __expectLong(output.createdDate),
    id: __expectString(output.id),
    name: __expectString(output.name),
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIds(output.securityGroupIds, context) : undefined,
    status: __expectString(output.status),
    subnetIds: output.subnetIds != null ? de_SubnetIds(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_0VpcEndpointDetails
 */
const de_VpcEndpointDetails = (output: any, context: __SerdeContext): VpcEndpointDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpointDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VpcEndpointErrorDetail
 */
const de_VpcEndpointErrorDetail = (output: any, context: __SerdeContext): VpcEndpointErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_0VpcEndpointErrorDetails
 */
const de_VpcEndpointErrorDetails = (output: any, context: __SerdeContext): VpcEndpointErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpointErrorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VpcEndpointSummaries
 */
const de_VpcEndpointSummaries = (output: any, context: __SerdeContext): VpcEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpointSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VpcEndpointSummary
 */
const de_VpcEndpointSummary = (output: any, context: __SerdeContext): VpcEndpointSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
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
