// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectString as __expectString,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchGetCollectionCommandInput, BatchGetCollectionCommandOutput } from "../commands/BatchGetCollectionCommand";
import {
  BatchGetEffectiveLifecyclePolicyCommandInput,
  BatchGetEffectiveLifecyclePolicyCommandOutput,
} from "../commands/BatchGetEffectiveLifecyclePolicyCommand";
import {
  BatchGetLifecyclePolicyCommandInput,
  BatchGetLifecyclePolicyCommandOutput,
} from "../commands/BatchGetLifecyclePolicyCommand";
import {
  BatchGetVpcEndpointCommandInput,
  BatchGetVpcEndpointCommandOutput,
} from "../commands/BatchGetVpcEndpointCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "../commands/CreateAccessPolicyCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "../commands/CreateCollectionCommand";
import {
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "../commands/CreateLifecyclePolicyCommand";
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
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "../commands/DeleteLifecyclePolicyCommand";
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
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "../commands/ListLifecyclePoliciesCommand";
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
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "../commands/UpdateLifecyclePolicyCommand";
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
  BatchGetCollectionRequest,
  BatchGetEffectiveLifecyclePolicyRequest,
  BatchGetLifecyclePolicyRequest,
  BatchGetLifecyclePolicyResponse,
  BatchGetVpcEndpointRequest,
  CapacityLimits,
  CollectionFilters,
  ConflictException,
  CreateAccessPolicyRequest,
  CreateAccessPolicyResponse,
  CreateCollectionRequest,
  CreateIamIdentityCenterConfigOptions,
  CreateLifecyclePolicyRequest,
  CreateLifecyclePolicyResponse,
  CreateSecurityConfigRequest,
  CreateSecurityPolicyRequest,
  CreateSecurityPolicyResponse,
  CreateVpcEndpointRequest,
  DeleteAccessPolicyRequest,
  DeleteCollectionRequest,
  DeleteLifecyclePolicyRequest,
  DeleteSecurityConfigRequest,
  DeleteSecurityPolicyRequest,
  DeleteVpcEndpointRequest,
  GetAccessPolicyRequest,
  GetAccessPolicyResponse,
  GetAccountSettingsRequest,
  GetPoliciesStatsRequest,
  GetSecurityConfigRequest,
  GetSecurityPolicyRequest,
  GetSecurityPolicyResponse,
  InternalServerException,
  LifecyclePolicyDetail,
  LifecyclePolicyIdentifier,
  LifecyclePolicyResourceIdentifier,
  ListAccessPoliciesRequest,
  ListCollectionsRequest,
  ListLifecyclePoliciesRequest,
  ListSecurityConfigsRequest,
  ListSecurityPoliciesRequest,
  ListTagsForResourceRequest,
  ListVpcEndpointsRequest,
  OcuLimitExceededException,
  ResourceNotFoundException,
  SamlConfigOptions,
  SecurityPolicyDetail,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateAccessPolicyRequest,
  UpdateAccessPolicyResponse,
  UpdateAccountSettingsRequest,
  UpdateCollectionRequest,
  UpdateIamIdentityCenterConfigOptions,
  UpdateLifecyclePolicyRequest,
  UpdateLifecyclePolicyResponse,
  UpdateSecurityConfigRequest,
  UpdateSecurityPolicyRequest,
  UpdateSecurityPolicyResponse,
  UpdateVpcEndpointRequest,
  ValidationException,
  VpcEndpointFilters,
} from "../models/models_0";
import { OpenSearchServerlessServiceException as __BaseException } from "../models/OpenSearchServerlessServiceException";

/**
 * serializeAws_json1_0BatchGetCollectionCommand
 */
export const se_BatchGetCollectionCommand = async (
  input: BatchGetCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetCollection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchGetEffectiveLifecyclePolicyCommand
 */
export const se_BatchGetEffectiveLifecyclePolicyCommand = async (
  input: BatchGetEffectiveLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetEffectiveLifecyclePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchGetLifecyclePolicyCommand
 */
export const se_BatchGetLifecyclePolicyCommand = async (
  input: BatchGetLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetLifecyclePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchGetVpcEndpointCommand
 */
export const se_BatchGetVpcEndpointCommand = async (
  input: BatchGetVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetVpcEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAccessPolicyCommand
 */
export const se_CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccessPolicy");
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
  const headers: __HeaderBag = sharedHeaders("CreateCollection");
  let body: any;
  body = JSON.stringify(se_CreateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateLifecyclePolicyCommand
 */
export const se_CreateLifecyclePolicyCommand = async (
  input: CreateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_CreateLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSecurityConfigCommand
 */
export const se_CreateSecurityConfigCommand = async (
  input: CreateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSecurityConfig");
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
  const headers: __HeaderBag = sharedHeaders("CreateSecurityPolicy");
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
  const headers: __HeaderBag = sharedHeaders("CreateVpcEndpoint");
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
  const headers: __HeaderBag = sharedHeaders("DeleteAccessPolicy");
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
  const headers: __HeaderBag = sharedHeaders("DeleteCollection");
  let body: any;
  body = JSON.stringify(se_DeleteCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteLifecyclePolicyCommand
 */
export const se_DeleteLifecyclePolicyCommand = async (
  input: DeleteLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_DeleteLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSecurityConfigCommand
 */
export const se_DeleteSecurityConfigCommand = async (
  input: DeleteSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSecurityConfig");
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
  const headers: __HeaderBag = sharedHeaders("DeleteSecurityPolicy");
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
  const headers: __HeaderBag = sharedHeaders("DeleteVpcEndpoint");
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
  const headers: __HeaderBag = sharedHeaders("GetAccessPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPoliciesStatsCommand
 */
export const se_GetPoliciesStatsCommand = async (
  input: GetPoliciesStatsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPoliciesStats");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSecurityConfigCommand
 */
export const se_GetSecurityConfigCommand = async (
  input: GetSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSecurityConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSecurityPolicyCommand
 */
export const se_GetSecurityPolicyCommand = async (
  input: GetSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSecurityPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAccessPoliciesCommand
 */
export const se_ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccessPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCollectionsCommand
 */
export const se_ListCollectionsCommand = async (
  input: ListCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCollections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListLifecyclePoliciesCommand
 */
export const se_ListLifecyclePoliciesCommand = async (
  input: ListLifecyclePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLifecyclePolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSecurityConfigsCommand
 */
export const se_ListSecurityConfigsCommand = async (
  input: ListSecurityConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSecurityConfigs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSecurityPoliciesCommand
 */
export const se_ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSecurityPolicies");
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
 * serializeAws_json1_0ListVpcEndpointsCommand
 */
export const se_ListVpcEndpointsCommand = async (
  input: ListVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVpcEndpoints");
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
 * serializeAws_json1_0UpdateAccessPolicyCommand
 */
export const se_UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAccessPolicy");
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
  const headers: __HeaderBag = sharedHeaders("UpdateAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateCollectionCommand
 */
export const se_UpdateCollectionCommand = async (
  input: UpdateCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCollection");
  let body: any;
  body = JSON.stringify(se_UpdateCollectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateLifecyclePolicyCommand
 */
export const se_UpdateLifecyclePolicyCommand = async (
  input: UpdateLifecyclePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLifecyclePolicy");
  let body: any;
  body = JSON.stringify(se_UpdateLifecyclePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSecurityConfigCommand
 */
export const se_UpdateSecurityConfigCommand = async (
  input: UpdateSecurityConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSecurityConfig");
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
  const headers: __HeaderBag = sharedHeaders("UpdateSecurityPolicy");
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
  const headers: __HeaderBag = sharedHeaders("UpdateVpcEndpoint");
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchGetEffectiveLifecyclePolicyCommand
 */
export const de_BatchGetEffectiveLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetEffectiveLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetEffectiveLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchGetLifecyclePolicyCommand
 */
export const de_BatchGetLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetLifecyclePolicyResponse(data, context);
  const response: BatchGetLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchGetVpcEndpointCommand
 */
export const de_BatchGetVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAccessPolicyCommand
 */
export const de_CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccessPolicyResponse(data, context);
  const response: CreateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateCollectionCommand
 */
export const de_CreateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateLifecyclePolicyCommand
 */
export const de_CreateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLifecyclePolicyResponse(data, context);
  const response: CreateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateSecurityConfigCommand
 */
export const de_CreateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateSecurityPolicyCommand
 */
export const de_CreateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecurityPolicyResponse(data, context);
  const response: CreateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateVpcEndpointCommand
 */
export const de_CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAccessPolicyCommand
 */
export const de_DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteCollectionCommand
 */
export const de_DeleteCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteLifecyclePolicyCommand
 */
export const de_DeleteLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteSecurityConfigCommand
 */
export const de_DeleteSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteSecurityPolicyCommand
 */
export const de_DeleteSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteVpcEndpointCommand
 */
export const de_DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVpcEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAccessPolicyCommand
 */
export const de_GetAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessPolicyResponse(data, context);
  const response: GetAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPoliciesStatsCommand
 */
export const de_GetPoliciesStatsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPoliciesStatsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPoliciesStatsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSecurityConfigCommand
 */
export const de_GetSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSecurityPolicyCommand
 */
export const de_GetSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecurityPolicyResponse(data, context);
  const response: GetSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAccessPoliciesCommand
 */
export const de_ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListCollectionsCommand
 */
export const de_ListCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListLifecyclePoliciesCommand
 */
export const de_ListLifecyclePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLifecyclePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLifecyclePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSecurityConfigsCommand
 */
export const de_ListSecurityConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSecurityConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSecurityPoliciesCommand
 */
export const de_ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSecurityPoliciesCommandOutput = {
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
 * deserializeAws_json1_0ListVpcEndpointsCommand
 */
export const de_ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVpcEndpointsCommandOutput = {
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateAccessPolicyCommand
 */
export const de_UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAccessPolicyResponse(data, context);
  const response: UpdateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateCollectionCommand
 */
export const de_UpdateCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCollectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateLifecyclePolicyCommand
 */
export const de_UpdateLifecyclePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLifecyclePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLifecyclePolicyResponse(data, context);
  const response: UpdateLifecyclePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSecurityConfigCommand
 */
export const de_UpdateSecurityConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSecurityConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSecurityPolicyCommand
 */
export const de_UpdateSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSecurityPolicyResponse(data, context);
  const response: UpdateSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateVpcEndpointCommand
 */
export const de_UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateVpcEndpointCommandOutput = {
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
    case "InternalServerException":
    case "com.amazonaws.opensearchserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearchserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearchserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.opensearchserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "OcuLimitExceededException":
    case "com.amazonaws.opensearchserverless#OcuLimitExceededException":
      throw await de_OcuLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearchserverless#ResourceNotFoundException":
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
 * deserializeAws_json1_0OcuLimitExceededExceptionRes
 */
const de_OcuLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OcuLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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

// se_BatchGetCollectionRequest omitted.

// se_BatchGetEffectiveLifecyclePolicyRequest omitted.

// se_BatchGetLifecyclePolicyRequest omitted.

// se_BatchGetVpcEndpointRequest omitted.

// se_CapacityLimits omitted.

// se_CollectionFilters omitted.

// se_CollectionIds omitted.

// se_CollectionNames omitted.

/**
 * serializeAws_json1_0CreateAccessPolicyRequest
 */
const se_CreateAccessPolicyRequest = (input: CreateAccessPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0CreateCollectionRequest
 */
const se_CreateCollectionRequest = (input: CreateCollectionRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    standbyReplicas: [],
    tags: _json,
    type: [],
  });
};

// se_CreateIamIdentityCenterConfigOptions omitted.

/**
 * serializeAws_json1_0CreateLifecyclePolicyRequest
 */
const se_CreateLifecyclePolicyRequest = (input: CreateLifecyclePolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0CreateSecurityConfigRequest
 */
const se_CreateSecurityConfigRequest = (input: CreateSecurityConfigRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    iamIdentityCenterOptions: _json,
    name: [],
    samlOptions: _json,
    type: [],
  });
};

/**
 * serializeAws_json1_0CreateSecurityPolicyRequest
 */
const se_CreateSecurityPolicyRequest = (input: CreateSecurityPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0CreateVpcEndpointRequest
 */
const se_CreateVpcEndpointRequest = (input: CreateVpcEndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    securityGroupIds: _json,
    subnetIds: _json,
    vpcId: [],
  });
};

/**
 * serializeAws_json1_0DeleteAccessPolicyRequest
 */
const se_DeleteAccessPolicyRequest = (input: DeleteAccessPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0DeleteCollectionRequest
 */
const se_DeleteCollectionRequest = (input: DeleteCollectionRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    id: [],
  });
};

/**
 * serializeAws_json1_0DeleteLifecyclePolicyRequest
 */
const se_DeleteLifecyclePolicyRequest = (input: DeleteLifecyclePolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0DeleteSecurityConfigRequest
 */
const se_DeleteSecurityConfigRequest = (input: DeleteSecurityConfigRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    id: [],
  });
};

/**
 * serializeAws_json1_0DeleteSecurityPolicyRequest
 */
const se_DeleteSecurityPolicyRequest = (input: DeleteSecurityPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0DeleteVpcEndpointRequest
 */
const se_DeleteVpcEndpointRequest = (input: DeleteVpcEndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    id: [],
  });
};

// se_GetAccessPolicyRequest omitted.

// se_GetAccountSettingsRequest omitted.

// se_GetPoliciesStatsRequest omitted.

// se_GetSecurityConfigRequest omitted.

// se_GetSecurityPolicyRequest omitted.

// se_LifecyclePolicyIdentifier omitted.

// se_LifecyclePolicyIdentifiers omitted.

// se_LifecyclePolicyResourceIdentifier omitted.

// se_LifecyclePolicyResourceIdentifiers omitted.

// se_LifecycleResourceFilter omitted.

// se_ListAccessPoliciesRequest omitted.

// se_ListCollectionsRequest omitted.

// se_ListLifecyclePoliciesRequest omitted.

// se_ListSecurityConfigsRequest omitted.

// se_ListSecurityPoliciesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListVpcEndpointsRequest omitted.

// se_ResourceFilter omitted.

// se_SamlConfigOptions omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateAccessPolicyRequest
 */
const se_UpdateAccessPolicyRequest = (input: UpdateAccessPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    policyVersion: [],
    type: [],
  });
};

// se_UpdateAccountSettingsRequest omitted.

/**
 * serializeAws_json1_0UpdateCollectionRequest
 */
const se_UpdateCollectionRequest = (input: UpdateCollectionRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    id: [],
  });
};

// se_UpdateIamIdentityCenterConfigOptions omitted.

/**
 * serializeAws_json1_0UpdateLifecyclePolicyRequest
 */
const se_UpdateLifecyclePolicyRequest = (input: UpdateLifecyclePolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    policyVersion: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0UpdateSecurityConfigRequest
 */
const se_UpdateSecurityConfigRequest = (input: UpdateSecurityConfigRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    configVersion: [],
    description: [],
    iamIdentityCenterOptionsUpdates: _json,
    id: [],
    samlOptions: _json,
  });
};

/**
 * serializeAws_json1_0UpdateSecurityPolicyRequest
 */
const se_UpdateSecurityPolicyRequest = (input: UpdateSecurityPolicyRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    name: [],
    policy: [],
    policyVersion: [],
    type: [],
  });
};

/**
 * serializeAws_json1_0UpdateVpcEndpointRequest
 */
const se_UpdateVpcEndpointRequest = (input: UpdateVpcEndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    addSecurityGroupIds: _json,
    addSubnetIds: _json,
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    id: [],
    removeSecurityGroupIds: _json,
    removeSubnetIds: _json,
  });
};

// se_VpcEndpointFilters omitted.

// se_VpcEndpointIds omitted.

/**
 * deserializeAws_json1_0AccessPolicyDetail
 */
const de_AccessPolicyDetail = (output: any, context: __SerdeContext): AccessPolicyDetail => {
  return take(output, {
    createdDate: __expectLong,
    description: __expectString,
    lastModifiedDate: __expectLong,
    name: __expectString,
    policy: (_: any) => de_Document(_, context),
    policyVersion: __expectString,
    type: __expectString,
  }) as any;
};

// de_AccessPolicyStats omitted.

// de_AccessPolicySummaries omitted.

// de_AccessPolicySummary omitted.

// de_AccountSettingsDetail omitted.

// de_BatchGetCollectionResponse omitted.

// de_BatchGetEffectiveLifecyclePolicyResponse omitted.

/**
 * deserializeAws_json1_0BatchGetLifecyclePolicyResponse
 */
const de_BatchGetLifecyclePolicyResponse = (output: any, context: __SerdeContext): BatchGetLifecyclePolicyResponse => {
  return take(output, {
    lifecyclePolicyDetails: (_: any) => de_LifecyclePolicyDetails(_, context),
    lifecyclePolicyErrorDetails: _json,
  }) as any;
};

// de_BatchGetVpcEndpointResponse omitted.

// de_CapacityLimits omitted.

// de_CollectionDetail omitted.

// de_CollectionDetails omitted.

// de_CollectionErrorDetail omitted.

// de_CollectionErrorDetails omitted.

// de_CollectionSummaries omitted.

// de_CollectionSummary omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateAccessPolicyResponse
 */
const de_CreateAccessPolicyResponse = (output: any, context: __SerdeContext): CreateAccessPolicyResponse => {
  return take(output, {
    accessPolicyDetail: (_: any) => de_AccessPolicyDetail(_, context),
  }) as any;
};

// de_CreateCollectionDetail omitted.

// de_CreateCollectionResponse omitted.

/**
 * deserializeAws_json1_0CreateLifecyclePolicyResponse
 */
const de_CreateLifecyclePolicyResponse = (output: any, context: __SerdeContext): CreateLifecyclePolicyResponse => {
  return take(output, {
    lifecyclePolicyDetail: (_: any) => de_LifecyclePolicyDetail(_, context),
  }) as any;
};

// de_CreateSecurityConfigResponse omitted.

/**
 * deserializeAws_json1_0CreateSecurityPolicyResponse
 */
const de_CreateSecurityPolicyResponse = (output: any, context: __SerdeContext): CreateSecurityPolicyResponse => {
  return take(output, {
    securityPolicyDetail: (_: any) => de_SecurityPolicyDetail(_, context),
  }) as any;
};

// de_CreateVpcEndpointDetail omitted.

// de_CreateVpcEndpointResponse omitted.

// de_DeleteAccessPolicyResponse omitted.

// de_DeleteCollectionDetail omitted.

// de_DeleteCollectionResponse omitted.

// de_DeleteLifecyclePolicyResponse omitted.

// de_DeleteSecurityConfigResponse omitted.

// de_DeleteSecurityPolicyResponse omitted.

// de_DeleteVpcEndpointDetail omitted.

// de_DeleteVpcEndpointResponse omitted.

// de_EffectiveLifecyclePolicyDetail omitted.

// de_EffectiveLifecyclePolicyDetails omitted.

// de_EffectiveLifecyclePolicyErrorDetail omitted.

// de_EffectiveLifecyclePolicyErrorDetails omitted.

/**
 * deserializeAws_json1_0GetAccessPolicyResponse
 */
const de_GetAccessPolicyResponse = (output: any, context: __SerdeContext): GetAccessPolicyResponse => {
  return take(output, {
    accessPolicyDetail: (_: any) => de_AccessPolicyDetail(_, context),
  }) as any;
};

// de_GetAccountSettingsResponse omitted.

// de_GetPoliciesStatsResponse omitted.

// de_GetSecurityConfigResponse omitted.

/**
 * deserializeAws_json1_0GetSecurityPolicyResponse
 */
const de_GetSecurityPolicyResponse = (output: any, context: __SerdeContext): GetSecurityPolicyResponse => {
  return take(output, {
    securityPolicyDetail: (_: any) => de_SecurityPolicyDetail(_, context),
  }) as any;
};

// de_IamIdentityCenterConfigOptions omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0LifecyclePolicyDetail
 */
const de_LifecyclePolicyDetail = (output: any, context: __SerdeContext): LifecyclePolicyDetail => {
  return take(output, {
    createdDate: __expectLong,
    description: __expectString,
    lastModifiedDate: __expectLong,
    name: __expectString,
    policy: (_: any) => de_Document(_, context),
    policyVersion: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0LifecyclePolicyDetails
 */
const de_LifecyclePolicyDetails = (output: any, context: __SerdeContext): LifecyclePolicyDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecyclePolicyDetail(entry, context);
    });
  return retVal;
};

// de_LifecyclePolicyErrorDetail omitted.

// de_LifecyclePolicyErrorDetails omitted.

// de_LifecyclePolicyStats omitted.

// de_LifecyclePolicySummaries omitted.

// de_LifecyclePolicySummary omitted.

// de_ListAccessPoliciesResponse omitted.

// de_ListCollectionsResponse omitted.

// de_ListLifecyclePoliciesResponse omitted.

// de_ListSecurityConfigsResponse omitted.

// de_ListSecurityPoliciesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListVpcEndpointsResponse omitted.

// de_OcuLimitExceededException omitted.

// de_ResourceNotFoundException omitted.

// de_SamlConfigOptions omitted.

// de_SecurityConfigDetail omitted.

// de_SecurityConfigStats omitted.

// de_SecurityConfigSummaries omitted.

// de_SecurityConfigSummary omitted.

// de_SecurityGroupIds omitted.

/**
 * deserializeAws_json1_0SecurityPolicyDetail
 */
const de_SecurityPolicyDetail = (output: any, context: __SerdeContext): SecurityPolicyDetail => {
  return take(output, {
    createdDate: __expectLong,
    description: __expectString,
    lastModifiedDate: __expectLong,
    name: __expectString,
    policy: (_: any) => de_Document(_, context),
    policyVersion: __expectString,
    type: __expectString,
  }) as any;
};

// de_SecurityPolicyStats omitted.

// de_SecurityPolicySummaries omitted.

// de_SecurityPolicySummary omitted.

// de_ServiceQuotaExceededException omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateAccessPolicyResponse
 */
const de_UpdateAccessPolicyResponse = (output: any, context: __SerdeContext): UpdateAccessPolicyResponse => {
  return take(output, {
    accessPolicyDetail: (_: any) => de_AccessPolicyDetail(_, context),
  }) as any;
};

// de_UpdateAccountSettingsResponse omitted.

// de_UpdateCollectionDetail omitted.

// de_UpdateCollectionResponse omitted.

/**
 * deserializeAws_json1_0UpdateLifecyclePolicyResponse
 */
const de_UpdateLifecyclePolicyResponse = (output: any, context: __SerdeContext): UpdateLifecyclePolicyResponse => {
  return take(output, {
    lifecyclePolicyDetail: (_: any) => de_LifecyclePolicyDetail(_, context),
  }) as any;
};

// de_UpdateSecurityConfigResponse omitted.

/**
 * deserializeAws_json1_0UpdateSecurityPolicyResponse
 */
const de_UpdateSecurityPolicyResponse = (output: any, context: __SerdeContext): UpdateSecurityPolicyResponse => {
  return take(output, {
    securityPolicyDetail: (_: any) => de_SecurityPolicyDetail(_, context),
  }) as any;
};

// de_UpdateVpcEndpointDetail omitted.

// de_UpdateVpcEndpointResponse omitted.

// de_ValidationException omitted.

// de_VpcEndpointDetail omitted.

// de_VpcEndpointDetails omitted.

// de_VpcEndpointErrorDetail omitted.

// de_VpcEndpointErrorDetails omitted.

// de_VpcEndpointSummaries omitted.

// de_VpcEndpointSummary omitted.

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
    "x-amz-target": `OpenSearchServerless.${operation}`,
  };
}
