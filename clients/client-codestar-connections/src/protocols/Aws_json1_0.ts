// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateHostCommandInput, CreateHostCommandOutput } from "../commands/CreateHostCommand";
import {
  CreateRepositoryLinkCommandInput,
  CreateRepositoryLinkCommandOutput,
} from "../commands/CreateRepositoryLinkCommand";
import {
  CreateSyncConfigurationCommandInput,
  CreateSyncConfigurationCommandOutput,
} from "../commands/CreateSyncConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteHostCommandInput, DeleteHostCommandOutput } from "../commands/DeleteHostCommand";
import {
  DeleteRepositoryLinkCommandInput,
  DeleteRepositoryLinkCommandOutput,
} from "../commands/DeleteRepositoryLinkCommand";
import {
  DeleteSyncConfigurationCommandInput,
  DeleteSyncConfigurationCommandOutput,
} from "../commands/DeleteSyncConfigurationCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetHostCommandInput, GetHostCommandOutput } from "../commands/GetHostCommand";
import { GetRepositoryLinkCommandInput, GetRepositoryLinkCommandOutput } from "../commands/GetRepositoryLinkCommand";
import {
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "../commands/GetRepositorySyncStatusCommand";
import {
  GetResourceSyncStatusCommandInput,
  GetResourceSyncStatusCommandOutput,
} from "../commands/GetResourceSyncStatusCommand";
import {
  GetSyncBlockerSummaryCommandInput,
  GetSyncBlockerSummaryCommandOutput,
} from "../commands/GetSyncBlockerSummaryCommand";
import {
  GetSyncConfigurationCommandInput,
  GetSyncConfigurationCommandOutput,
} from "../commands/GetSyncConfigurationCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import {
  ListRepositoryLinksCommandInput,
  ListRepositoryLinksCommandOutput,
} from "../commands/ListRepositoryLinksCommand";
import {
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "../commands/ListRepositorySyncDefinitionsCommand";
import {
  ListSyncConfigurationsCommandInput,
  ListSyncConfigurationsCommandOutput,
} from "../commands/ListSyncConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateHostCommandInput, UpdateHostCommandOutput } from "../commands/UpdateHostCommand";
import {
  UpdateRepositoryLinkCommandInput,
  UpdateRepositoryLinkCommandOutput,
} from "../commands/UpdateRepositoryLinkCommand";
import { UpdateSyncBlockerCommandInput, UpdateSyncBlockerCommandOutput } from "../commands/UpdateSyncBlockerCommand";
import {
  UpdateSyncConfigurationCommandInput,
  UpdateSyncConfigurationCommandOutput,
} from "../commands/UpdateSyncConfigurationCommand";
import { CodeStarConnectionsServiceException as __BaseException } from "../models/CodeStarConnectionsServiceException";
import {
  AccessDeniedException,
  ConcurrentModificationException,
  ConditionalCheckFailedException,
  ConflictException,
  CreateConnectionInput,
  CreateHostInput,
  CreateRepositoryLinkInput,
  CreateSyncConfigurationInput,
  DeleteConnectionInput,
  DeleteHostInput,
  DeleteRepositoryLinkInput,
  DeleteSyncConfigurationInput,
  GetConnectionInput,
  GetHostInput,
  GetRepositoryLinkInput,
  GetRepositorySyncStatusInput,
  GetRepositorySyncStatusOutput,
  GetResourceSyncStatusInput,
  GetResourceSyncStatusOutput,
  GetSyncBlockerSummaryInput,
  GetSyncBlockerSummaryOutput,
  GetSyncConfigurationInput,
  InternalServerException,
  InvalidInputException,
  LimitExceededException,
  ListConnectionsInput,
  ListHostsInput,
  ListRepositoryLinksInput,
  ListRepositorySyncDefinitionsInput,
  ListSyncConfigurationsInput,
  ListTagsForResourceInput,
  RepositorySyncAttempt,
  RepositorySyncEvent,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResourceSyncAttempt,
  ResourceSyncEvent,
  ResourceUnavailableException,
  RetryLatestCommitFailedException,
  SyncBlocker,
  SyncBlockerDoesNotExistException,
  SyncBlockerSummary,
  SyncConfigurationStillExistsException,
  Tag,
  TagResourceInput,
  ThrottlingException,
  UnsupportedOperationException,
  UnsupportedProviderTypeException,
  UntagResourceInput,
  UpdateHostInput,
  UpdateOutOfSyncException,
  UpdateRepositoryLinkInput,
  UpdateSyncBlockerInput,
  UpdateSyncBlockerOutput,
  UpdateSyncConfigurationInput,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateHostCommand
 */
export const se_CreateHostCommand = async (
  input: CreateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHost");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRepositoryLinkCommand
 */
export const se_CreateRepositoryLinkCommand = async (
  input: CreateRepositoryLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRepositoryLink");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateSyncConfigurationCommand
 */
export const se_CreateSyncConfigurationCommand = async (
  input: CreateSyncConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSyncConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteHostCommand
 */
export const se_DeleteHostCommand = async (
  input: DeleteHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHost");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRepositoryLinkCommand
 */
export const se_DeleteRepositoryLinkCommand = async (
  input: DeleteRepositoryLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRepositoryLink");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteSyncConfigurationCommand
 */
export const se_DeleteSyncConfigurationCommand = async (
  input: DeleteSyncConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSyncConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetHostCommand
 */
export const se_GetHostCommand = async (
  input: GetHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetHost");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositoryLinkCommand
 */
export const se_GetRepositoryLinkCommand = async (
  input: GetRepositoryLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositoryLink");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositorySyncStatusCommand
 */
export const se_GetRepositorySyncStatusCommand = async (
  input: GetRepositorySyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositorySyncStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourceSyncStatusCommand
 */
export const se_GetResourceSyncStatusCommand = async (
  input: GetResourceSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceSyncStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSyncBlockerSummaryCommand
 */
export const se_GetSyncBlockerSummaryCommand = async (
  input: GetSyncBlockerSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSyncBlockerSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSyncConfigurationCommand
 */
export const se_GetSyncConfigurationCommand = async (
  input: GetSyncConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSyncConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListHostsCommand
 */
export const se_ListHostsCommand = async (
  input: ListHostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHosts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositoryLinksCommand
 */
export const se_ListRepositoryLinksCommand = async (
  input: ListRepositoryLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositoryLinks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositorySyncDefinitionsCommand
 */
export const se_ListRepositorySyncDefinitionsCommand = async (
  input: ListRepositorySyncDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositorySyncDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSyncConfigurationsCommand
 */
export const se_ListSyncConfigurationsCommand = async (
  input: ListSyncConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSyncConfigurations");
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
 * serializeAws_json1_0UpdateHostCommand
 */
export const se_UpdateHostCommand = async (
  input: UpdateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHost");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateRepositoryLinkCommand
 */
export const se_UpdateRepositoryLinkCommand = async (
  input: UpdateRepositoryLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRepositoryLink");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSyncBlockerCommand
 */
export const se_UpdateSyncBlockerCommand = async (
  input: UpdateSyncBlockerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSyncBlocker");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSyncConfigurationCommand
 */
export const se_UpdateSyncConfigurationCommand = async (
  input: UpdateSyncConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSyncConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateHostCommand
 */
export const de_CreateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRepositoryLinkCommand
 */
export const de_CreateRepositoryLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryLinkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRepositoryLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateSyncConfigurationCommand
 */
export const de_CreateSyncConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSyncConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSyncConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteHostCommand
 */
export const de_DeleteHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRepositoryLinkCommand
 */
export const de_DeleteRepositoryLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryLinkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRepositoryLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteSyncConfigurationCommand
 */
export const de_DeleteSyncConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSyncConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSyncConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetHostCommand
 */
export const de_GetHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRepositoryLinkCommand
 */
export const de_GetRepositoryLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryLinkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRepositoryLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRepositorySyncStatusCommand
 */
export const de_GetRepositorySyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositorySyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRepositorySyncStatusOutput(data, context);
  const response: GetRepositorySyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourceSyncStatusCommand
 */
export const de_GetResourceSyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceSyncStatusOutput(data, context);
  const response: GetResourceSyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSyncBlockerSummaryCommand
 */
export const de_GetSyncBlockerSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSyncBlockerSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSyncBlockerSummaryOutput(data, context);
  const response: GetSyncBlockerSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSyncConfigurationCommand
 */
export const de_GetSyncConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSyncConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSyncConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListHostsCommand
 */
export const de_ListHostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListHostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRepositoryLinksCommand
 */
export const de_ListRepositoryLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryLinksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositoryLinksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRepositorySyncDefinitionsCommand
 */
export const de_ListRepositorySyncDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositorySyncDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositorySyncDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSyncConfigurationsCommand
 */
export const de_ListSyncConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSyncConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSyncConfigurationsCommandOutput = {
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
 * deserializeAws_json1_0UpdateHostCommand
 */
export const de_UpdateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateRepositoryLinkCommand
 */
export const de_UpdateRepositoryLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryLinkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRepositoryLinkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSyncBlockerCommand
 */
export const de_UpdateSyncBlockerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSyncBlockerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSyncBlockerOutput(data, context);
  const response: UpdateSyncBlockerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSyncConfigurationCommand
 */
export const de_UpdateSyncConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSyncConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSyncConfigurationCommandOutput = {
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
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.codestarconnections#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarconnections#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codestarconnections#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codestarconnections#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codestarconnections#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codestarconnections#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "SyncConfigurationStillExistsException":
    case "com.amazonaws.codestarconnections#SyncConfigurationStillExistsException":
      throw await de_SyncConfigurationStillExistsExceptionRes(parsedOutput, context);
    case "UnsupportedProviderTypeException":
    case "com.amazonaws.codestarconnections#UnsupportedProviderTypeException":
      throw await de_UnsupportedProviderTypeExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codestarconnections#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.codestarconnections#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "ConditionalCheckFailedException":
    case "com.amazonaws.codestarconnections#ConditionalCheckFailedException":
      throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
    case "UpdateOutOfSyncException":
    case "com.amazonaws.codestarconnections#UpdateOutOfSyncException":
      throw await de_UpdateOutOfSyncExceptionRes(parsedOutput, context);
    case "RetryLatestCommitFailedException":
    case "com.amazonaws.codestarconnections#RetryLatestCommitFailedException":
      throw await de_RetryLatestCommitFailedExceptionRes(parsedOutput, context);
    case "SyncBlockerDoesNotExistException":
    case "com.amazonaws.codestarconnections#SyncBlockerDoesNotExistException":
      throw await de_SyncBlockerDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConditionalCheckFailedExceptionRes
 */
const de_ConditionalCheckFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionalCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConditionalCheckFailedException({
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
 * deserializeAws_json1_0InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistsException({
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
 * deserializeAws_json1_0ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RetryLatestCommitFailedExceptionRes
 */
const de_RetryLatestCommitFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RetryLatestCommitFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RetryLatestCommitFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0SyncBlockerDoesNotExistExceptionRes
 */
const de_SyncBlockerDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SyncBlockerDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SyncBlockerDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0SyncConfigurationStillExistsExceptionRes
 */
const de_SyncConfigurationStillExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SyncConfigurationStillExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SyncConfigurationStillExistsException({
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
 * deserializeAws_json1_0UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnsupportedProviderTypeExceptionRes
 */
const de_UnsupportedProviderTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedProviderTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedProviderTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UpdateOutOfSyncExceptionRes
 */
const de_UpdateOutOfSyncExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UpdateOutOfSyncException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UpdateOutOfSyncException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_CreateConnectionInput omitted.

// se_CreateHostInput omitted.

// se_CreateRepositoryLinkInput omitted.

// se_CreateSyncConfigurationInput omitted.

// se_DeleteConnectionInput omitted.

// se_DeleteHostInput omitted.

// se_DeleteRepositoryLinkInput omitted.

// se_DeleteSyncConfigurationInput omitted.

// se_GetConnectionInput omitted.

// se_GetHostInput omitted.

// se_GetRepositoryLinkInput omitted.

// se_GetRepositorySyncStatusInput omitted.

// se_GetResourceSyncStatusInput omitted.

// se_GetSyncBlockerSummaryInput omitted.

// se_GetSyncConfigurationInput omitted.

// se_ListConnectionsInput omitted.

// se_ListHostsInput omitted.

// se_ListRepositoryLinksInput omitted.

// se_ListRepositorySyncDefinitionsInput omitted.

// se_ListSyncConfigurationsInput omitted.

// se_ListTagsForResourceInput omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_UntagResourceInput omitted.

// se_UpdateHostInput omitted.

// se_UpdateRepositoryLinkInput omitted.

// se_UpdateSyncBlockerInput omitted.

// se_UpdateSyncConfigurationInput omitted.

// se_VpcConfiguration omitted.

// de_AccessDeniedException omitted.

// de_ConcurrentModificationException omitted.

// de_ConditionalCheckFailedException omitted.

// de_ConflictException omitted.

// de_Connection omitted.

// de_ConnectionList omitted.

// de_CreateConnectionOutput omitted.

// de_CreateHostOutput omitted.

// de_CreateRepositoryLinkOutput omitted.

// de_CreateSyncConfigurationOutput omitted.

// de_DeleteConnectionOutput omitted.

// de_DeleteHostOutput omitted.

// de_DeleteRepositoryLinkOutput omitted.

// de_DeleteSyncConfigurationOutput omitted.

// de_GetConnectionOutput omitted.

// de_GetHostOutput omitted.

// de_GetRepositoryLinkOutput omitted.

/**
 * deserializeAws_json1_0GetRepositorySyncStatusOutput
 */
const de_GetRepositorySyncStatusOutput = (output: any, context: __SerdeContext): GetRepositorySyncStatusOutput => {
  return take(output, {
    LatestSync: (_: any) => de_RepositorySyncAttempt(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetResourceSyncStatusOutput
 */
const de_GetResourceSyncStatusOutput = (output: any, context: __SerdeContext): GetResourceSyncStatusOutput => {
  return take(output, {
    DesiredState: _json,
    LatestSuccessfulSync: (_: any) => de_ResourceSyncAttempt(_, context),
    LatestSync: (_: any) => de_ResourceSyncAttempt(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetSyncBlockerSummaryOutput
 */
const de_GetSyncBlockerSummaryOutput = (output: any, context: __SerdeContext): GetSyncBlockerSummaryOutput => {
  return take(output, {
    SyncBlockerSummary: (_: any) => de_SyncBlockerSummary(_, context),
  }) as any;
};

// de_GetSyncConfigurationOutput omitted.

// de_Host omitted.

// de_HostList omitted.

// de_InternalServerException omitted.

// de_InvalidInputException omitted.

/**
 * deserializeAws_json1_0LatestSyncBlockerList
 */
const de_LatestSyncBlockerList = (output: any, context: __SerdeContext): SyncBlocker[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SyncBlocker(entry, context);
    });
  return retVal;
};

// de_LimitExceededException omitted.

// de_ListConnectionsOutput omitted.

// de_ListHostsOutput omitted.

// de_ListRepositoryLinksOutput omitted.

// de_ListRepositorySyncDefinitionsOutput omitted.

// de_ListSyncConfigurationsOutput omitted.

// de_ListTagsForResourceOutput omitted.

// de_RepositoryLinkInfo omitted.

// de_RepositoryLinkList omitted.

/**
 * deserializeAws_json1_0RepositorySyncAttempt
 */
const de_RepositorySyncAttempt = (output: any, context: __SerdeContext): RepositorySyncAttempt => {
  return take(output, {
    Events: (_: any) => de_RepositorySyncEventList(_, context),
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_RepositorySyncDefinition omitted.

// de_RepositorySyncDefinitionList omitted.

/**
 * deserializeAws_json1_0RepositorySyncEvent
 */
const de_RepositorySyncEvent = (output: any, context: __SerdeContext): RepositorySyncEvent => {
  return take(output, {
    Event: __expectString,
    ExternalId: __expectString,
    Time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RepositorySyncEventList
 */
const de_RepositorySyncEventList = (output: any, context: __SerdeContext): RepositorySyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositorySyncEvent(entry, context);
    });
  return retVal;
};

// de_ResourceAlreadyExistsException omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0ResourceSyncAttempt
 */
const de_ResourceSyncAttempt = (output: any, context: __SerdeContext): ResourceSyncAttempt => {
  return take(output, {
    Events: (_: any) => de_ResourceSyncEventList(_, context),
    InitialRevision: _json,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Target: __expectString,
    TargetRevision: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEvent
 */
const de_ResourceSyncEvent = (output: any, context: __SerdeContext): ResourceSyncEvent => {
  return take(output, {
    Event: __expectString,
    ExternalId: __expectString,
    Time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEventList
 */
const de_ResourceSyncEventList = (output: any, context: __SerdeContext): ResourceSyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceSyncEvent(entry, context);
    });
  return retVal;
};

// de_ResourceUnavailableException omitted.

// de_RetryLatestCommitFailedException omitted.

// de_Revision omitted.

// de_SecurityGroupIds omitted.

// de_SubnetIds omitted.

/**
 * deserializeAws_json1_0SyncBlocker
 */
const de_SyncBlocker = (output: any, context: __SerdeContext): SyncBlocker => {
  return take(output, {
    Contexts: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedReason: __expectString,
    Id: __expectString,
    ResolvedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResolvedReason: __expectString,
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

// de_SyncBlockerContext omitted.

// de_SyncBlockerContextList omitted.

// de_SyncBlockerDoesNotExistException omitted.

/**
 * deserializeAws_json1_0SyncBlockerSummary
 */
const de_SyncBlockerSummary = (output: any, context: __SerdeContext): SyncBlockerSummary => {
  return take(output, {
    LatestBlockers: (_: any) => de_LatestSyncBlockerList(_, context),
    ParentResourceName: __expectString,
    ResourceName: __expectString,
  }) as any;
};

// de_SyncConfiguration omitted.

// de_SyncConfigurationList omitted.

// de_SyncConfigurationStillExistsException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_ThrottlingException omitted.

// de_UnsupportedOperationException omitted.

// de_UnsupportedProviderTypeException omitted.

// de_UntagResourceOutput omitted.

// de_UpdateHostOutput omitted.

// de_UpdateOutOfSyncException omitted.

// de_UpdateRepositoryLinkOutput omitted.

/**
 * deserializeAws_json1_0UpdateSyncBlockerOutput
 */
const de_UpdateSyncBlockerOutput = (output: any, context: __SerdeContext): UpdateSyncBlockerOutput => {
  return take(output, {
    ParentResourceName: __expectString,
    ResourceName: __expectString,
    SyncBlocker: (_: any) => de_SyncBlocker(_, context),
  }) as any;
};

// de_UpdateSyncConfigurationOutput omitted.

// de_VpcConfiguration omitted.

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
    "x-amz-target": `CodeStar_connections_20191201.${operation}`,
  };
}
