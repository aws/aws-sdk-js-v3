// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
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

import { BatchGetPolicyCommandInput, BatchGetPolicyCommandOutput } from "../commands/BatchGetPolicyCommand";
import { BatchIsAuthorizedCommandInput, BatchIsAuthorizedCommandOutput } from "../commands/BatchIsAuthorizedCommand";
import {
  BatchIsAuthorizedWithTokenCommandInput,
  BatchIsAuthorizedWithTokenCommandOutput,
} from "../commands/BatchIsAuthorizedWithTokenCommand";
import {
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "../commands/CreateIdentitySourceCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "../commands/CreatePolicyCommand";
import { CreatePolicyStoreCommandInput, CreatePolicyStoreCommandOutput } from "../commands/CreatePolicyStoreCommand";
import {
  CreatePolicyTemplateCommandInput,
  CreatePolicyTemplateCommandOutput,
} from "../commands/CreatePolicyTemplateCommand";
import {
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "../commands/DeleteIdentitySourceCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import { DeletePolicyStoreCommandInput, DeletePolicyStoreCommandOutput } from "../commands/DeletePolicyStoreCommand";
import {
  DeletePolicyTemplateCommandInput,
  DeletePolicyTemplateCommandOutput,
} from "../commands/DeletePolicyTemplateCommand";
import { GetIdentitySourceCommandInput, GetIdentitySourceCommandOutput } from "../commands/GetIdentitySourceCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetPolicyStoreCommandInput, GetPolicyStoreCommandOutput } from "../commands/GetPolicyStoreCommand";
import { GetPolicyTemplateCommandInput, GetPolicyTemplateCommandOutput } from "../commands/GetPolicyTemplateCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import { IsAuthorizedCommandInput, IsAuthorizedCommandOutput } from "../commands/IsAuthorizedCommand";
import {
  IsAuthorizedWithTokenCommandInput,
  IsAuthorizedWithTokenCommandOutput,
} from "../commands/IsAuthorizedWithTokenCommand";
import {
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { ListPolicyStoresCommandInput, ListPolicyStoresCommandOutput } from "../commands/ListPolicyStoresCommand";
import {
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput,
} from "../commands/ListPolicyTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutSchemaCommandInput, PutSchemaCommandOutput } from "../commands/PutSchemaCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateIdentitySourceCommandInput,
  UpdateIdentitySourceCommandOutput,
} from "../commands/UpdateIdentitySourceCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "../commands/UpdatePolicyCommand";
import { UpdatePolicyStoreCommandInput, UpdatePolicyStoreCommandOutput } from "../commands/UpdatePolicyStoreCommand";
import {
  UpdatePolicyTemplateCommandInput,
  UpdatePolicyTemplateCommandOutput,
} from "../commands/UpdatePolicyTemplateCommand";
import {
  AccessDeniedException,
  ActionIdentifier,
  AttributeValue,
  BatchGetPolicyInput,
  BatchGetPolicyInputItem,
  BatchGetPolicyOutput,
  BatchGetPolicyOutputItem,
  BatchIsAuthorizedInput,
  BatchIsAuthorizedInputItem,
  BatchIsAuthorizedOutput,
  BatchIsAuthorizedOutputItem,
  BatchIsAuthorizedWithTokenInput,
  BatchIsAuthorizedWithTokenInputItem,
  BatchIsAuthorizedWithTokenOutput,
  BatchIsAuthorizedWithTokenOutputItem,
  CognitoGroupConfiguration,
  CognitoUserPoolConfiguration,
  Configuration,
  ConflictException,
  ContextDefinition,
  CreateIdentitySourceInput,
  CreateIdentitySourceOutput,
  CreatePolicyInput,
  CreatePolicyOutput,
  CreatePolicyStoreInput,
  CreatePolicyStoreOutput,
  CreatePolicyTemplateInput,
  CreatePolicyTemplateOutput,
  DeleteIdentitySourceInput,
  DeletePolicyInput,
  DeletePolicyStoreInput,
  DeletePolicyTemplateInput,
  EntitiesDefinition,
  EntityIdentifier,
  EntityItem,
  EntityReference,
  GetIdentitySourceInput,
  GetIdentitySourceOutput,
  GetPolicyInput,
  GetPolicyOutput,
  GetPolicyStoreInput,
  GetPolicyStoreOutput,
  GetPolicyTemplateInput,
  GetPolicyTemplateOutput,
  GetSchemaInput,
  GetSchemaOutput,
  IdentitySourceFilter,
  IdentitySourceItem,
  InternalServerException,
  InvalidStateException,
  IsAuthorizedInput,
  IsAuthorizedWithTokenInput,
  ListIdentitySourcesInput,
  ListIdentitySourcesOutput,
  ListPoliciesInput,
  ListPoliciesOutput,
  ListPolicyStoresInput,
  ListPolicyStoresOutput,
  ListPolicyTemplatesInput,
  ListPolicyTemplatesOutput,
  ListTagsForResourceInput,
  OpenIdConnectAccessTokenConfiguration,
  OpenIdConnectConfiguration,
  OpenIdConnectGroupConfiguration,
  OpenIdConnectIdentityTokenConfiguration,
  OpenIdConnectTokenSelection,
  PolicyDefinition,
  PolicyFilter,
  PolicyItem,
  PolicyStoreItem,
  PolicyTemplateItem,
  PutSchemaInput,
  PutSchemaOutput,
  ResourceNotFoundException,
  SchemaDefinition,
  ServiceQuotaExceededException,
  StaticPolicyDefinition,
  TagResourceInput,
  TemplateLinkedPolicyDefinition,
  ThrottlingException,
  TooManyTagsException,
  UntagResourceInput,
  UpdateCognitoGroupConfiguration,
  UpdateCognitoUserPoolConfiguration,
  UpdateConfiguration,
  UpdateIdentitySourceInput,
  UpdateIdentitySourceOutput,
  UpdateOpenIdConnectAccessTokenConfiguration,
  UpdateOpenIdConnectConfiguration,
  UpdateOpenIdConnectGroupConfiguration,
  UpdateOpenIdConnectIdentityTokenConfiguration,
  UpdateOpenIdConnectTokenSelection,
  UpdatePolicyDefinition,
  UpdatePolicyInput,
  UpdatePolicyOutput,
  UpdatePolicyStoreInput,
  UpdatePolicyStoreOutput,
  UpdatePolicyTemplateInput,
  UpdatePolicyTemplateOutput,
  UpdateStaticPolicyDefinition,
  ValidationException,
  ValidationSettings,
} from "../models/models_0";
import { VerifiedPermissionsServiceException as __BaseException } from "../models/VerifiedPermissionsServiceException";

/**
 * serializeAws_json1_0BatchGetPolicyCommand
 */
export const se_BatchGetPolicyCommand = async (
  input: BatchGetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchIsAuthorizedCommand
 */
export const se_BatchIsAuthorizedCommand = async (
  input: BatchIsAuthorizedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchIsAuthorized");
  let body: any;
  body = JSON.stringify(se_BatchIsAuthorizedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0BatchIsAuthorizedWithTokenCommand
 */
export const se_BatchIsAuthorizedWithTokenCommand = async (
  input: BatchIsAuthorizedWithTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchIsAuthorizedWithToken");
  let body: any;
  body = JSON.stringify(se_BatchIsAuthorizedWithTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateIdentitySourceCommand
 */
export const se_CreateIdentitySourceCommand = async (
  input: CreateIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIdentitySource");
  let body: any;
  body = JSON.stringify(se_CreateIdentitySourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicy");
  let body: any;
  body = JSON.stringify(se_CreatePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyStoreCommand
 */
export const se_CreatePolicyStoreCommand = async (
  input: CreatePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicyStore");
  let body: any;
  body = JSON.stringify(se_CreatePolicyStoreInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyTemplateCommand
 */
export const se_CreatePolicyTemplateCommand = async (
  input: CreatePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicyTemplate");
  let body: any;
  body = JSON.stringify(se_CreatePolicyTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteIdentitySourceCommand
 */
export const se_DeleteIdentitySourceCommand = async (
  input: DeleteIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyStoreCommand
 */
export const se_DeletePolicyStoreCommand = async (
  input: DeletePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyTemplateCommand
 */
export const se_DeletePolicyTemplateCommand = async (
  input: DeletePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetIdentitySourceCommand
 */
export const se_GetIdentitySourceCommand = async (
  input: GetIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyStoreCommand
 */
export const se_GetPolicyStoreCommand = async (
  input: GetPolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyTemplateCommand
 */
export const se_GetPolicyTemplateCommand = async (
  input: GetPolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSchemaCommand
 */
export const se_GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0IsAuthorizedCommand
 */
export const se_IsAuthorizedCommand = async (
  input: IsAuthorizedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IsAuthorized");
  let body: any;
  body = JSON.stringify(se_IsAuthorizedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0IsAuthorizedWithTokenCommand
 */
export const se_IsAuthorizedWithTokenCommand = async (
  input: IsAuthorizedWithTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IsAuthorizedWithToken");
  let body: any;
  body = JSON.stringify(se_IsAuthorizedWithTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListIdentitySourcesCommand
 */
export const se_ListIdentitySourcesCommand = async (
  input: ListIdentitySourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIdentitySources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPolicyStoresCommand
 */
export const se_ListPolicyStoresCommand = async (
  input: ListPolicyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicyStores");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPolicyTemplatesCommand
 */
export const se_ListPolicyTemplatesCommand = async (
  input: ListPolicyTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicyTemplates");
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
 * serializeAws_json1_0PutSchemaCommand
 */
export const se_PutSchemaCommand = async (
  input: PutSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSchema");
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
 * serializeAws_json1_0UpdateIdentitySourceCommand
 */
export const se_UpdateIdentitySourceCommand = async (
  input: UpdateIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyCommand
 */
export const se_UpdatePolicyCommand = async (
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyStoreCommand
 */
export const se_UpdatePolicyStoreCommand = async (
  input: UpdatePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyTemplateCommand
 */
export const se_UpdatePolicyTemplateCommand = async (
  input: UpdatePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0BatchGetPolicyCommand
 */
export const de_BatchGetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetPolicyOutput(data, context);
  const response: BatchGetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedCommand
 */
export const de_BatchIsAuthorizedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchIsAuthorizedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchIsAuthorizedOutput(data, context);
  const response: BatchIsAuthorizedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedWithTokenCommand
 */
export const de_BatchIsAuthorizedWithTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchIsAuthorizedWithTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchIsAuthorizedWithTokenOutput(data, context);
  const response: BatchIsAuthorizedWithTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateIdentitySourceCommand
 */
export const de_CreateIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIdentitySourceOutput(data, context);
  const response: CreateIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyOutput(data, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyStoreCommand
 */
export const de_CreatePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyStoreOutput(data, context);
  const response: CreatePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyTemplateCommand
 */
export const de_CreatePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyTemplateOutput(data, context);
  const response: CreatePolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteIdentitySourceCommand
 */
export const de_DeleteIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyStoreCommand
 */
export const de_DeletePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyTemplateCommand
 */
export const de_DeletePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetIdentitySourceCommand
 */
export const de_GetIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentitySourceOutput(data, context);
  const response: GetIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyOutput(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyStoreCommand
 */
export const de_GetPolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyStoreOutput(data, context);
  const response: GetPolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyTemplateCommand
 */
export const de_GetPolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyTemplateOutput(data, context);
  const response: GetPolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSchemaOutput(data, context);
  const response: GetSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0IsAuthorizedCommand
 */
export const de_IsAuthorizedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: IsAuthorizedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0IsAuthorizedWithTokenCommand
 */
export const de_IsAuthorizedWithTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedWithTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: IsAuthorizedWithTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListIdentitySourcesCommand
 */
export const de_ListIdentitySourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitySourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentitySourcesOutput(data, context);
  const response: ListIdentitySourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesOutput(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPolicyStoresCommand
 */
export const de_ListPolicyStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyStoresOutput(data, context);
  const response: ListPolicyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPolicyTemplatesCommand
 */
export const de_ListPolicyTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyTemplatesOutput(data, context);
  const response: ListPolicyTemplatesCommandOutput = {
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
 * deserializeAws_json1_0PutSchemaCommand
 */
export const de_PutSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutSchemaOutput(data, context);
  const response: PutSchemaCommandOutput = {
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
 * deserializeAws_json1_0UpdateIdentitySourceCommand
 */
export const de_UpdateIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateIdentitySourceOutput(data, context);
  const response: UpdateIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyCommand
 */
export const de_UpdatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyOutput(data, context);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyStoreCommand
 */
export const de_UpdatePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyStoreOutput(data, context);
  const response: UpdatePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyTemplateCommand
 */
export const de_UpdatePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyTemplateOutput(data, context);
  const response: UpdatePolicyTemplateCommandOutput = {
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
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.verifiedpermissions#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.verifiedpermissions#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidStateException({
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
 * deserializeAws_json1_0TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
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

// se_ActionIdentifier omitted.

/**
 * serializeAws_json1_0AttributeValue
 */
const se_AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return AttributeValue.visit(input, {
    boolean: (value) => ({ boolean: value }),
    datetime: (value) => ({ datetime: value }),
    decimal: (value) => ({ decimal: value }),
    duration: (value) => ({ duration: value }),
    entityIdentifier: (value) => ({ entityIdentifier: _json(value) }),
    ipaddr: (value) => ({ ipaddr: value }),
    long: (value) => ({ long: value }),
    record: (value) => ({ record: se_RecordAttribute(value, context) }),
    set: (value) => ({ set: se_SetAttribute(value, context) }),
    string: (value) => ({ string: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_Audiences omitted.

// se_BatchGetPolicyInput omitted.

// se_BatchGetPolicyInputItem omitted.

// se_BatchGetPolicyInputList omitted.

/**
 * serializeAws_json1_0BatchIsAuthorizedInput
 */
const se_BatchIsAuthorizedInput = (input: BatchIsAuthorizedInput, context: __SerdeContext): any => {
  return take(input, {
    entities: (_) => se_EntitiesDefinition(_, context),
    policyStoreId: [],
    requests: (_) => se_BatchIsAuthorizedInputList(_, context),
  });
};

/**
 * serializeAws_json1_0BatchIsAuthorizedInputItem
 */
const se_BatchIsAuthorizedInputItem = (input: BatchIsAuthorizedInputItem, context: __SerdeContext): any => {
  return take(input, {
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    principal: _json,
    resource: _json,
  });
};

/**
 * serializeAws_json1_0BatchIsAuthorizedInputList
 */
const se_BatchIsAuthorizedInputList = (input: BatchIsAuthorizedInputItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchIsAuthorizedInputItem(entry, context);
    });
};

/**
 * serializeAws_json1_0BatchIsAuthorizedWithTokenInput
 */
const se_BatchIsAuthorizedWithTokenInput = (input: BatchIsAuthorizedWithTokenInput, context: __SerdeContext): any => {
  return take(input, {
    accessToken: [],
    entities: (_) => se_EntitiesDefinition(_, context),
    identityToken: [],
    policyStoreId: [],
    requests: (_) => se_BatchIsAuthorizedWithTokenInputList(_, context),
  });
};

/**
 * serializeAws_json1_0BatchIsAuthorizedWithTokenInputItem
 */
const se_BatchIsAuthorizedWithTokenInputItem = (
  input: BatchIsAuthorizedWithTokenInputItem,
  context: __SerdeContext
): any => {
  return take(input, {
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    resource: _json,
  });
};

/**
 * serializeAws_json1_0BatchIsAuthorizedWithTokenInputList
 */
const se_BatchIsAuthorizedWithTokenInputList = (
  input: BatchIsAuthorizedWithTokenInputItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchIsAuthorizedWithTokenInputItem(entry, context);
    });
};

// se_ClientIds omitted.

// se_CognitoGroupConfiguration omitted.

// se_CognitoUserPoolConfiguration omitted.

// se_Configuration omitted.

/**
 * serializeAws_json1_0ContextDefinition
 */
const se_ContextDefinition = (input: ContextDefinition, context: __SerdeContext): any => {
  return ContextDefinition.visit(input, {
    cedarJson: (value) => ({ cedarJson: value }),
    contextMap: (value) => ({ contextMap: se_ContextMap(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_json1_0ContextMap
 */
const se_ContextMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0CreateIdentitySourceInput
 */
const se_CreateIdentitySourceInput = (input: CreateIdentitySourceInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    configuration: _json,
    policyStoreId: [],
    principalEntityType: [],
  });
};

/**
 * serializeAws_json1_0CreatePolicyInput
 */
const se_CreatePolicyInput = (input: CreatePolicyInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    definition: _json,
    policyStoreId: [],
  });
};

/**
 * serializeAws_json1_0CreatePolicyStoreInput
 */
const se_CreatePolicyStoreInput = (input: CreatePolicyStoreInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    deletionProtection: [],
    description: [],
    tags: _json,
    validationSettings: _json,
  });
};

/**
 * serializeAws_json1_0CreatePolicyTemplateInput
 */
const se_CreatePolicyTemplateInput = (input: CreatePolicyTemplateInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    policyStoreId: [],
    statement: [],
  });
};

// se_DeleteIdentitySourceInput omitted.

// se_DeletePolicyInput omitted.

// se_DeletePolicyStoreInput omitted.

// se_DeletePolicyTemplateInput omitted.

/**
 * serializeAws_json1_0EntitiesDefinition
 */
const se_EntitiesDefinition = (input: EntitiesDefinition, context: __SerdeContext): any => {
  return EntitiesDefinition.visit(input, {
    cedarJson: (value) => ({ cedarJson: value }),
    entityList: (value) => ({ entityList: se_EntityList(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_json1_0EntityAttributes
 */
const se_EntityAttributes = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

// se_EntityIdentifier omitted.

/**
 * serializeAws_json1_0EntityItem
 */
const se_EntityItem = (input: EntityItem, context: __SerdeContext): any => {
  return take(input, {
    attributes: (_) => se_EntityAttributes(_, context),
    identifier: _json,
    parents: _json,
  });
};

/**
 * serializeAws_json1_0EntityList
 */
const se_EntityList = (input: EntityItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityItem(entry, context);
    });
};

// se_EntityReference omitted.

// se_GetIdentitySourceInput omitted.

// se_GetPolicyInput omitted.

// se_GetPolicyStoreInput omitted.

// se_GetPolicyTemplateInput omitted.

// se_GetSchemaInput omitted.

// se_IdentitySourceFilter omitted.

// se_IdentitySourceFilters omitted.

/**
 * serializeAws_json1_0IsAuthorizedInput
 */
const se_IsAuthorizedInput = (input: IsAuthorizedInput, context: __SerdeContext): any => {
  return take(input, {
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    entities: (_) => se_EntitiesDefinition(_, context),
    policyStoreId: [],
    principal: _json,
    resource: _json,
  });
};

/**
 * serializeAws_json1_0IsAuthorizedWithTokenInput
 */
const se_IsAuthorizedWithTokenInput = (input: IsAuthorizedWithTokenInput, context: __SerdeContext): any => {
  return take(input, {
    accessToken: [],
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    entities: (_) => se_EntitiesDefinition(_, context),
    identityToken: [],
    policyStoreId: [],
    resource: _json,
  });
};

// se_ListIdentitySourcesInput omitted.

// se_ListPoliciesInput omitted.

// se_ListPolicyStoresInput omitted.

// se_ListPolicyTemplatesInput omitted.

// se_ListTagsForResourceInput omitted.

// se_OpenIdConnectAccessTokenConfiguration omitted.

// se_OpenIdConnectConfiguration omitted.

// se_OpenIdConnectGroupConfiguration omitted.

// se_OpenIdConnectIdentityTokenConfiguration omitted.

// se_OpenIdConnectTokenSelection omitted.

// se_ParentList omitted.

// se_PolicyDefinition omitted.

// se_PolicyFilter omitted.

// se_PutSchemaInput omitted.

/**
 * serializeAws_json1_0RecordAttribute
 */
const se_RecordAttribute = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

// se_SchemaDefinition omitted.

/**
 * serializeAws_json1_0SetAttribute
 */
const se_SetAttribute = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

// se_StaticPolicyDefinition omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_TagResourceInput omitted.

// se_TemplateLinkedPolicyDefinition omitted.

// se_UntagResourceInput omitted.

// se_UpdateCognitoGroupConfiguration omitted.

// se_UpdateCognitoUserPoolConfiguration omitted.

// se_UpdateConfiguration omitted.

// se_UpdateIdentitySourceInput omitted.

// se_UpdateOpenIdConnectAccessTokenConfiguration omitted.

// se_UpdateOpenIdConnectConfiguration omitted.

// se_UpdateOpenIdConnectGroupConfiguration omitted.

// se_UpdateOpenIdConnectIdentityTokenConfiguration omitted.

// se_UpdateOpenIdConnectTokenSelection omitted.

// se_UpdatePolicyDefinition omitted.

// se_UpdatePolicyInput omitted.

// se_UpdatePolicyStoreInput omitted.

// se_UpdatePolicyTemplateInput omitted.

// se_UpdateStaticPolicyDefinition omitted.

// se_ValidationSettings omitted.

// de_AccessDeniedException omitted.

// de_ActionIdentifier omitted.

// de_ActionIdentifierList omitted.

/**
 * deserializeAws_json1_0AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  if (__expectBoolean(output.boolean) !== undefined) {
    return { boolean: __expectBoolean(output.boolean) as any };
  }
  if (__expectString(output.datetime) !== undefined) {
    return { datetime: __expectString(output.datetime) as any };
  }
  if (__expectString(output.decimal) !== undefined) {
    return { decimal: __expectString(output.decimal) as any };
  }
  if (__expectString(output.duration) !== undefined) {
    return { duration: __expectString(output.duration) as any };
  }
  if (output.entityIdentifier != null) {
    return {
      entityIdentifier: _json(output.entityIdentifier),
    };
  }
  if (__expectString(output.ipaddr) !== undefined) {
    return { ipaddr: __expectString(output.ipaddr) as any };
  }
  if (__expectLong(output.long) !== undefined) {
    return { long: __expectLong(output.long) as any };
  }
  if (output.record != null) {
    return {
      record: de_RecordAttribute(output.record, context),
    };
  }
  if (output.set != null) {
    return {
      set: de_SetAttribute(output.set, context),
    };
  }
  if (__expectString(output.string) !== undefined) {
    return { string: __expectString(output.string) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_Audiences omitted.

// de_BatchGetPolicyErrorItem omitted.

// de_BatchGetPolicyErrorList omitted.

/**
 * deserializeAws_json1_0BatchGetPolicyOutput
 */
const de_BatchGetPolicyOutput = (output: any, context: __SerdeContext): BatchGetPolicyOutput => {
  return take(output, {
    errors: _json,
    results: (_: any) => de_BatchGetPolicyOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchGetPolicyOutputItem
 */
const de_BatchGetPolicyOutputItem = (output: any, context: __SerdeContext): BatchGetPolicyOutputItem => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: (_: any) => _json(__expectUnion(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchGetPolicyOutputList
 */
const de_BatchGetPolicyOutputList = (output: any, context: __SerdeContext): BatchGetPolicyOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchGetPolicyOutputItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedInputItem
 */
const de_BatchIsAuthorizedInputItem = (output: any, context: __SerdeContext): BatchIsAuthorizedInputItem => {
  return take(output, {
    action: _json,
    context: (_: any) => de_ContextDefinition(__expectUnion(_), context),
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedOutput
 */
const de_BatchIsAuthorizedOutput = (output: any, context: __SerdeContext): BatchIsAuthorizedOutput => {
  return take(output, {
    results: (_: any) => de_BatchIsAuthorizedOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedOutputItem
 */
const de_BatchIsAuthorizedOutputItem = (output: any, context: __SerdeContext): BatchIsAuthorizedOutputItem => {
  return take(output, {
    decision: __expectString,
    determiningPolicies: _json,
    errors: _json,
    request: (_: any) => de_BatchIsAuthorizedInputItem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedOutputList
 */
const de_BatchIsAuthorizedOutputList = (output: any, context: __SerdeContext): BatchIsAuthorizedOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchIsAuthorizedOutputItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedWithTokenInputItem
 */
const de_BatchIsAuthorizedWithTokenInputItem = (
  output: any,
  context: __SerdeContext
): BatchIsAuthorizedWithTokenInputItem => {
  return take(output, {
    action: _json,
    context: (_: any) => de_ContextDefinition(__expectUnion(_), context),
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedWithTokenOutput
 */
const de_BatchIsAuthorizedWithTokenOutput = (
  output: any,
  context: __SerdeContext
): BatchIsAuthorizedWithTokenOutput => {
  return take(output, {
    principal: _json,
    results: (_: any) => de_BatchIsAuthorizedWithTokenOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedWithTokenOutputItem
 */
const de_BatchIsAuthorizedWithTokenOutputItem = (
  output: any,
  context: __SerdeContext
): BatchIsAuthorizedWithTokenOutputItem => {
  return take(output, {
    decision: __expectString,
    determiningPolicies: _json,
    errors: _json,
    request: (_: any) => de_BatchIsAuthorizedWithTokenInputItem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0BatchIsAuthorizedWithTokenOutputList
 */
const de_BatchIsAuthorizedWithTokenOutputList = (
  output: any,
  context: __SerdeContext
): BatchIsAuthorizedWithTokenOutputItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchIsAuthorizedWithTokenOutputItem(entry, context);
    });
  return retVal;
};

// de_ClientIds omitted.

// de_CognitoGroupConfigurationDetail omitted.

// de_CognitoGroupConfigurationItem omitted.

// de_CognitoUserPoolConfigurationDetail omitted.

// de_CognitoUserPoolConfigurationItem omitted.

// de_ConfigurationDetail omitted.

// de_ConfigurationItem omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0ContextDefinition
 */
const de_ContextDefinition = (output: any, context: __SerdeContext): ContextDefinition => {
  if (__expectString(output.cedarJson) !== undefined) {
    return { cedarJson: __expectString(output.cedarJson) as any };
  }
  if (output.contextMap != null) {
    return {
      contextMap: de_ContextMap(output.contextMap, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0ContextMap
 */
const de_ContextMap = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

/**
 * deserializeAws_json1_0CreateIdentitySourceOutput
 */
const de_CreateIdentitySourceOutput = (output: any, context: __SerdeContext): CreateIdentitySourceOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyOutput
 */
const de_CreatePolicyOutput = (output: any, context: __SerdeContext): CreatePolicyOutput => {
  return take(output, {
    actions: _json,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    effect: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyStoreOutput
 */
const de_CreatePolicyStoreOutput = (output: any, context: __SerdeContext): CreatePolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyTemplateOutput
 */
const de_CreatePolicyTemplateOutput = (output: any, context: __SerdeContext): CreatePolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

// de_DeleteIdentitySourceOutput omitted.

// de_DeletePolicyOutput omitted.

// de_DeletePolicyStoreOutput omitted.

// de_DeletePolicyTemplateOutput omitted.

// de_DeterminingPolicyItem omitted.

// de_DeterminingPolicyList omitted.

// de_EntityIdentifier omitted.

// de_EvaluationErrorItem omitted.

// de_EvaluationErrorList omitted.

/**
 * deserializeAws_json1_0GetIdentitySourceOutput
 */
const de_GetIdentitySourceOutput = (output: any, context: __SerdeContext): GetIdentitySourceOutput => {
  return take(output, {
    configuration: (_: any) => _json(__expectUnion(_)),
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    details: _json,
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    principalEntityType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyOutput
 */
const de_GetPolicyOutput = (output: any, context: __SerdeContext): GetPolicyOutput => {
  return take(output, {
    actions: _json,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: (_: any) => _json(__expectUnion(_)),
    effect: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyStoreOutput
 */
const de_GetPolicyStoreOutput = (output: any, context: __SerdeContext): GetPolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    cedarVersion: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deletionProtection: __expectString,
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    tags: _json,
    validationSettings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyTemplateOutput
 */
const de_GetPolicyTemplateOutput = (output: any, context: __SerdeContext): GetPolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
    statement: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetSchemaOutput
 */
const de_GetSchemaOutput = (output: any, context: __SerdeContext): GetSchemaOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    namespaces: _json,
    policyStoreId: __expectString,
    schema: __expectString,
  }) as any;
};

// de_IdentitySourceDetails omitted.

/**
 * deserializeAws_json1_0IdentitySourceItem
 */
const de_IdentitySourceItem = (output: any, context: __SerdeContext): IdentitySourceItem => {
  return take(output, {
    configuration: (_: any) => _json(__expectUnion(_)),
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    details: _json,
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    principalEntityType: __expectString,
  }) as any;
};

// de_IdentitySourceItemDetails omitted.

/**
 * deserializeAws_json1_0IdentitySources
 */
const de_IdentitySources = (output: any, context: __SerdeContext): IdentitySourceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentitySourceItem(entry, context);
    });
  return retVal;
};

// de_InternalServerException omitted.

// de_InvalidStateException omitted.

// de_IsAuthorizedOutput omitted.

// de_IsAuthorizedWithTokenOutput omitted.

/**
 * deserializeAws_json1_0ListIdentitySourcesOutput
 */
const de_ListIdentitySourcesOutput = (output: any, context: __SerdeContext): ListIdentitySourcesOutput => {
  return take(output, {
    identitySources: (_: any) => de_IdentitySources(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListPoliciesOutput
 */
const de_ListPoliciesOutput = (output: any, context: __SerdeContext): ListPoliciesOutput => {
  return take(output, {
    nextToken: __expectString,
    policies: (_: any) => de_PolicyList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListPolicyStoresOutput
 */
const de_ListPolicyStoresOutput = (output: any, context: __SerdeContext): ListPolicyStoresOutput => {
  return take(output, {
    nextToken: __expectString,
    policyStores: (_: any) => de_PolicyStoreList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListPolicyTemplatesOutput
 */
const de_ListPolicyTemplatesOutput = (output: any, context: __SerdeContext): ListPolicyTemplatesOutput => {
  return take(output, {
    nextToken: __expectString,
    policyTemplates: (_: any) => de_PolicyTemplatesList(_, context),
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

// de_NamespaceList omitted.

// de_OpenIdConnectAccessTokenConfigurationDetail omitted.

// de_OpenIdConnectAccessTokenConfigurationItem omitted.

// de_OpenIdConnectConfigurationDetail omitted.

// de_OpenIdConnectConfigurationItem omitted.

// de_OpenIdConnectGroupConfigurationDetail omitted.

// de_OpenIdConnectGroupConfigurationItem omitted.

// de_OpenIdConnectIdentityTokenConfigurationDetail omitted.

// de_OpenIdConnectIdentityTokenConfigurationItem omitted.

// de_OpenIdConnectTokenSelectionDetail omitted.

// de_OpenIdConnectTokenSelectionItem omitted.

// de_PolicyDefinitionDetail omitted.

// de_PolicyDefinitionItem omitted.

/**
 * deserializeAws_json1_0PolicyItem
 */
const de_PolicyItem = (output: any, context: __SerdeContext): PolicyItem => {
  return take(output, {
    actions: _json,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: (_: any) => _json(__expectUnion(_)),
    effect: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyList
 */
const de_PolicyList = (output: any, context: __SerdeContext): PolicyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PolicyStoreItem
 */
const de_PolicyStoreItem = (output: any, context: __SerdeContext): PolicyStoreItem => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyStoreList
 */
const de_PolicyStoreList = (output: any, context: __SerdeContext): PolicyStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyStoreItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PolicyTemplateItem
 */
const de_PolicyTemplateItem = (output: any, context: __SerdeContext): PolicyTemplateItem => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyTemplatesList
 */
const de_PolicyTemplatesList = (output: any, context: __SerdeContext): PolicyTemplateItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyTemplateItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PutSchemaOutput
 */
const de_PutSchemaOutput = (output: any, context: __SerdeContext): PutSchemaOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    namespaces: _json,
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RecordAttribute
 */
const de_RecordAttribute = (output: any, context: __SerdeContext): Record<string, AttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AttributeValue(__expectUnion(value), context);
    return acc;
  }, {} as Record<string, AttributeValue>);
};

// de_ResourceConflict omitted.

// de_ResourceConflictList omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_0SetAttribute
 */
const de_SetAttribute = (output: any, context: __SerdeContext): AttributeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeValue(__expectUnion(entry), context);
    });
  return retVal;
};

// de_StaticPolicyDefinitionDetail omitted.

// de_StaticPolicyDefinitionItem omitted.

// de_TagMap omitted.

// de_TagResourceOutput omitted.

// de_TemplateLinkedPolicyDefinitionDetail omitted.

// de_TemplateLinkedPolicyDefinitionItem omitted.

// de_ThrottlingException omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceOutput omitted.

/**
 * deserializeAws_json1_0UpdateIdentitySourceOutput
 */
const de_UpdateIdentitySourceOutput = (output: any, context: __SerdeContext): UpdateIdentitySourceOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyOutput
 */
const de_UpdatePolicyOutput = (output: any, context: __SerdeContext): UpdatePolicyOutput => {
  return take(output, {
    actions: _json,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    effect: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyStoreOutput
 */
const de_UpdatePolicyStoreOutput = (output: any, context: __SerdeContext): UpdatePolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyTemplateOutput
 */
const de_UpdatePolicyTemplateOutput = (output: any, context: __SerdeContext): UpdatePolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ValidationSettings omitted.

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
    "x-amz-target": `VerifiedPermissions.${operation}`,
  };
}
