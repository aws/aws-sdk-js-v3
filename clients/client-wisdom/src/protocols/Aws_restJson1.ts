// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "../commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "../commands/CreateAssistantCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "../commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "../commands/CreateKnowledgeBaseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "../commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "../commands/DeleteAssistantCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "../commands/DeleteContentCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "../commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "../commands/GetAssistantCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "../commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "../commands/GetContentSummaryCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "../commands/ListAssistantsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "../commands/ListContentsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "../commands/NotifyRecommendationsReceivedCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "../commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/RemoveKnowledgeBaseTemplateUriCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "../commands/SearchContentCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "../commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "../commands/StartContentUploadCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "../commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  AccessDeniedException,
  AppIntegrationsConfiguration,
  AssistantAssociationData,
  AssistantAssociationInputData,
  AssistantAssociationOutputData,
  AssistantAssociationSummary,
  AssistantData,
  AssistantSummary,
  ConflictException,
  ContentData,
  ContentReference,
  ContentSummary,
  Document,
  DocumentText,
  Filter,
  Highlight,
  KnowledgeBaseAssociationData,
  KnowledgeBaseData,
  KnowledgeBaseSummary,
  NotifyRecommendationsReceivedError,
  PreconditionFailedException,
  QueryRecommendationTriggerData,
  RecommendationData,
  RecommendationTrigger,
  RecommendationTriggerData,
  RenderingConfiguration,
  ResourceNotFoundException,
  ResultData,
  SearchExpression,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  SessionData,
  SessionSummary,
  SourceConfiguration,
  TooManyTagsException,
  ValidationException,
} from "../models/models_0";
import { WisdomServiceException as __BaseException } from "../models/WisdomServiceException";

/**
 * serializeAws_restJson1CreateAssistantCommand
 */
export const se_CreateAssistantCommand = async (
  input: CreateAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.serverSideEncryptionConfiguration != null && {
      serverSideEncryptionConfiguration: se_ServerSideEncryptionConfiguration(
        input.serverSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAssistantAssociationCommand
 */
export const se_CreateAssistantAssociationCommand = async (
  input: CreateAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/associations";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.association != null && { association: se_AssistantAssociationInputData(input.association, context) }),
    ...(input.associationType != null && { associationType: input.associationType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateContentCommand
 */
export const se_CreateContentCommand = async (
  input: CreateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.metadata != null && { metadata: se_ContentMetadata(input.metadata, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.overrideLinkOutUri != null && { overrideLinkOutUri: input.overrideLinkOutUri }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.title != null && { title: input.title }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const se_CreateKnowledgeBaseCommand = async (
  input: CreateKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.knowledgeBaseType != null && { knowledgeBaseType: input.knowledgeBaseType }),
    ...(input.name != null && { name: input.name }),
    ...(input.renderingConfiguration != null && {
      renderingConfiguration: se_RenderingConfiguration(input.renderingConfiguration, context),
    }),
    ...(input.serverSideEncryptionConfiguration != null && {
      serverSideEncryptionConfiguration: se_ServerSideEncryptionConfiguration(
        input.serverSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.sourceConfiguration != null && {
      sourceConfiguration: se_SourceConfiguration(input.sourceConfiguration, context),
    }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSessionCommand
 */
export const se_CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/sessions";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssistantCommand
 */
export const se_DeleteAssistantCommand = async (
  input: DeleteAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAssistantAssociationCommand
 */
export const se_DeleteAssistantAssociationCommand = async (
  input: DeleteAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/associations/{assistantAssociationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assistantAssociationId",
    () => input.assistantAssociationId!,
    "{assistantAssociationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteContentCommand
 */
export const se_DeleteContentCommand = async (
  input: DeleteContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "contentId", () => input.contentId!, "{contentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const se_DeleteKnowledgeBaseCommand = async (
  input: DeleteKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssistantCommand
 */
export const se_GetAssistantCommand = async (
  input: GetAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAssistantAssociationCommand
 */
export const se_GetAssistantAssociationCommand = async (
  input: GetAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/associations/{assistantAssociationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assistantAssociationId",
    () => input.assistantAssociationId!,
    "{assistantAssociationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetContentCommand
 */
export const se_GetContentCommand = async (
  input: GetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "contentId", () => input.contentId!, "{contentId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetContentSummaryCommand
 */
export const se_GetContentSummaryCommand = async (
  input: GetContentSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary";
  resolvedPath = __resolvedPath(resolvedPath, input, "contentId", () => input.contentId!, "{contentId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetKnowledgeBaseCommand
 */
export const se_GetKnowledgeBaseCommand = async (
  input: GetKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}/recommendations";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    waitTimeSeconds: [() => input.waitTimeSeconds !== void 0, () => input.waitTimeSeconds!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssistantAssociationsCommand
 */
export const se_ListAssistantAssociationsCommand = async (
  input: ListAssistantAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/associations";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListAssistantsCommand
 */
export const se_ListAssistantsCommand = async (
  input: ListAssistantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListContentsCommand
 */
export const se_ListContentsCommand = async (
  input: ListContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListKnowledgeBasesCommand
 */
export const se_ListKnowledgeBasesCommand = async (
  input: ListKnowledgeBasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1NotifyRecommendationsReceivedCommand
 */
export const se_NotifyRecommendationsReceivedCommand = async (
  input: NotifyRecommendationsReceivedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.recommendationIds != null && {
      recommendationIds: se_RecommendationIdList(input.recommendationIds, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1QueryAssistantCommand
 */
export const se_QueryAssistantCommand = async (
  input: QueryAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/query";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.queryText != null && { queryText: input.queryText }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand
 */
export const se_RemoveKnowledgeBaseTemplateUriCommand = async (
  input: RemoveKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/templateUri";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchContentCommand
 */
export const se_SearchContentCommand = async (
  input: SearchContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}/search";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.searchExpression != null && { searchExpression: se_SearchExpression(input.searchExpression, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SearchSessionsCommand
 */
export const se_SearchSessionsCommand = async (
  input: SearchSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assistants/{assistantId}/searchSessions";
  resolvedPath = __resolvedPath(resolvedPath, input, "assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.searchExpression != null && { searchExpression: se_SearchExpression(input.searchExpression, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartContentUploadCommand
 */
export const se_StartContentUploadCommand = async (
  input: StartContentUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/knowledgeBases/{knowledgeBaseId}/upload";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.contentType != null && { contentType: input.contentType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateContentCommand
 */
export const se_UpdateContentCommand = async (
  input: UpdateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/contents/{contentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "contentId", () => input.contentId!, "{contentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.metadata != null && { metadata: se_ContentMetadata(input.metadata, context) }),
    ...(input.overrideLinkOutUri != null && { overrideLinkOutUri: input.overrideLinkOutUri }),
    ...(input.removeOverrideLinkOutUri != null && { removeOverrideLinkOutUri: input.removeOverrideLinkOutUri }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
    ...(input.title != null && { title: input.title }),
    ...(input.uploadId != null && { uploadId: input.uploadId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand
 */
export const se_UpdateKnowledgeBaseTemplateUriCommand = async (
  input: UpdateKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/knowledgeBases/{knowledgeBaseId}/templateUri";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "knowledgeBaseId",
    () => input.knowledgeBaseId!,
    "{knowledgeBaseId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.templateUri != null && { templateUri: input.templateUri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateAssistantCommand
 */
export const de_CreateAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssistantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistant != null) {
    contents.assistant = de_AssistantData(data.assistant, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssistantCommandError
 */
const de_CreateAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1CreateAssistantAssociationCommand
 */
export const de_CreateAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAssistantAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociation != null) {
    contents.assistantAssociation = de_AssistantAssociationData(data.assistantAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssistantAssociationCommandError
 */
const de_CreateAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1CreateContentCommand
 */
export const de_CreateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content != null) {
    contents.content = de_ContentData(data.content, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateContentCommandError
 */
const de_CreateContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const de_CreateKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateKnowledgeBaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase != null) {
    contents.knowledgeBase = de_KnowledgeBaseData(data.knowledgeBase, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateKnowledgeBaseCommandError
 */
const de_CreateKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.wisdom#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1CreateSessionCommand
 */
export const de_CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = de_SessionData(data.session, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSessionCommandError
 */
const de_CreateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1DeleteAssistantCommand
 */
export const de_DeleteAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAssistantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssistantCommandError
 */
const de_DeleteAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1DeleteAssistantAssociationCommand
 */
export const de_DeleteAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAssistantAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssistantAssociationCommandError
 */
const de_DeleteAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1DeleteContentCommand
 */
export const de_DeleteContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContentCommandError
 */
const de_DeleteContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const de_DeleteKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteKnowledgeBaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKnowledgeBaseCommandError
 */
const de_DeleteKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.wisdom#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetAssistantCommand
 */
export const de_GetAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssistantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistant != null) {
    contents.assistant = de_AssistantData(data.assistant, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssistantCommandError
 */
const de_GetAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetAssistantAssociationCommand
 */
export const de_GetAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssistantAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociation != null) {
    contents.assistantAssociation = de_AssistantAssociationData(data.assistantAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssistantAssociationCommandError
 */
const de_GetAssistantAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetContentCommand
 */
export const de_GetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content != null) {
    contents.content = de_ContentData(data.content, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContentCommandError
 */
const de_GetContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetContentSummaryCommand
 */
export const de_GetContentSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContentSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummary != null) {
    contents.contentSummary = de_ContentSummary(data.contentSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContentSummaryCommandError
 */
const de_GetContentSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetKnowledgeBaseCommand
 */
export const de_GetKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetKnowledgeBaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase != null) {
    contents.knowledgeBase = de_KnowledgeBaseData(data.knowledgeBase, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetKnowledgeBaseCommandError
 */
const de_GetKnowledgeBaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recommendations != null) {
    contents.recommendations = de_RecommendationList(data.recommendations, context);
  }
  if (data.triggers != null) {
    contents.triggers = de_RecommendationTriggerList(data.triggers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationsCommandError
 */
const de_GetRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.session != null) {
    contents.session = de_SessionData(data.session, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommandError
 */
const de_GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1ListAssistantAssociationsCommand
 */
export const de_ListAssistantAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssistantAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantAssociationSummaries != null) {
    contents.assistantAssociationSummaries = de_AssistantAssociationSummaryList(
      data.assistantAssociationSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssistantAssociationsCommandError
 */
const de_ListAssistantAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1ListAssistantsCommand
 */
export const de_ListAssistantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssistantsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assistantSummaries != null) {
    contents.assistantSummaries = de_AssistantList(data.assistantSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssistantsCommandError
 */
const de_ListAssistantsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1ListContentsCommand
 */
export const de_ListContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummaries != null) {
    contents.contentSummaries = de_ContentSummaryList(data.contentSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContentsCommandError
 */
const de_ListContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1ListKnowledgeBasesCommand
 */
export const de_ListKnowledgeBasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListKnowledgeBasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBaseSummaries != null) {
    contents.knowledgeBaseSummaries = de_KnowledgeBaseList(data.knowledgeBaseSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListKnowledgeBasesCommandError
 */
const de_ListKnowledgeBasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1NotifyRecommendationsReceivedCommand
 */
export const de_NotifyRecommendationsReceivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyRecommendationsReceivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_NotifyRecommendationsReceivedCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_NotifyRecommendationsReceivedErrorList(data.errors, context);
  }
  if (data.recommendationIds != null) {
    contents.recommendationIds = de_RecommendationIdList(data.recommendationIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1NotifyRecommendationsReceivedCommandError
 */
const de_NotifyRecommendationsReceivedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyRecommendationsReceivedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1QueryAssistantCommand
 */
export const de_QueryAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_QueryAssistantCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.results != null) {
    contents.results = de_QueryResultsList(data.results, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1QueryAssistantCommandError
 */
const de_QueryAssistantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryAssistantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand
 */
export const de_RemoveKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveKnowledgeBaseTemplateUriCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommandError
 */
const de_RemoveKnowledgeBaseTemplateUriCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1SearchContentCommand
 */
export const de_SearchContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contentSummaries != null) {
    contents.contentSummaries = de_ContentSummaryList(data.contentSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchContentCommandError
 */
const de_SearchContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1SearchSessionsCommand
 */
export const de_SearchSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchSessionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.sessionSummaries != null) {
    contents.sessionSummaries = de_SessionSummaries(data.sessionSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchSessionsCommandError
 */
const de_SearchSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1StartContentUploadCommand
 */
export const de_StartContentUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartContentUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.headersToInclude != null) {
    contents.headersToInclude = de_Headers(data.headersToInclude, context);
  }
  if (data.uploadId != null) {
    contents.uploadId = __expectString(data.uploadId);
  }
  if (data.url != null) {
    contents.url = __expectString(data.url);
  }
  if (data.urlExpiry != null) {
    contents.urlExpiry = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.urlExpiry)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartContentUploadCommandError
 */
const de_StartContentUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.wisdom#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateContentCommand
 */
export const de_UpdateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content != null) {
    contents.content = de_ContentData(data.content, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContentCommandError
 */
const de_UpdateContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.wisdom#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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
 * deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand
 */
export const de_UpdateKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateKnowledgeBaseTemplateUriCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.knowledgeBase != null) {
    contents.knowledgeBase = de_KnowledgeBaseData(data.knowledgeBase, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommandError
 */
const de_UpdateKnowledgeBaseTemplateUriCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.wisdom#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.wisdom#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionFailedExceptionRes
 */
const de_PreconditionFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AppIntegrationsConfiguration
 */
const se_AppIntegrationsConfiguration = (input: AppIntegrationsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.appIntegrationArn != null && { appIntegrationArn: input.appIntegrationArn }),
    ...(input.objectFields != null && { objectFields: se_ObjectFieldsList(input.objectFields, context) }),
  };
};

/**
 * serializeAws_restJson1AssistantAssociationInputData
 */
const se_AssistantAssociationInputData = (input: AssistantAssociationInputData, context: __SerdeContext): any => {
  return AssistantAssociationInputData.visit(input, {
    knowledgeBaseId: (value) => ({ knowledgeBaseId: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ContentMetadata
 */
const se_ContentMetadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1ObjectFieldsList
 */
const se_ObjectFieldsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RecommendationIdList
 */
const se_RecommendationIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RenderingConfiguration
 */
const se_RenderingConfiguration = (input: RenderingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.templateUri != null && { templateUri: input.templateUri }),
  };
};

/**
 * serializeAws_restJson1SearchExpression
 */
const se_SearchExpression = (input: SearchExpression, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
  };
};

/**
 * serializeAws_restJson1ServerSideEncryptionConfiguration
 */
const se_ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  };
};

/**
 * serializeAws_restJson1SourceConfiguration
 */
const se_SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return SourceConfiguration.visit(input, {
    appIntegrations: (value) => ({ appIntegrations: se_AppIntegrationsConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AppIntegrationsConfiguration
 */
const de_AppIntegrationsConfiguration = (output: any, context: __SerdeContext): AppIntegrationsConfiguration => {
  return {
    appIntegrationArn: __expectString(output.appIntegrationArn),
    objectFields: output.objectFields != null ? de_ObjectFieldsList(output.objectFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssistantAssociationData
 */
const de_AssistantAssociationData = (output: any, context: __SerdeContext): AssistantAssociationData => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantAssociationArn: __expectString(output.assistantAssociationArn),
    assistantAssociationId: __expectString(output.assistantAssociationId),
    assistantId: __expectString(output.assistantId),
    associationData:
      output.associationData != null
        ? de_AssistantAssociationOutputData(__expectUnion(output.associationData), context)
        : undefined,
    associationType: __expectString(output.associationType),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssistantAssociationOutputData
 */
const de_AssistantAssociationOutputData = (output: any, context: __SerdeContext): AssistantAssociationOutputData => {
  if (output.knowledgeBaseAssociation != null) {
    return {
      knowledgeBaseAssociation: de_KnowledgeBaseAssociationData(output.knowledgeBaseAssociation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AssistantAssociationSummary
 */
const de_AssistantAssociationSummary = (output: any, context: __SerdeContext): AssistantAssociationSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantAssociationArn: __expectString(output.assistantAssociationArn),
    assistantAssociationId: __expectString(output.assistantAssociationId),
    assistantId: __expectString(output.assistantId),
    associationData:
      output.associationData != null
        ? de_AssistantAssociationOutputData(__expectUnion(output.associationData), context)
        : undefined,
    associationType: __expectString(output.associationType),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssistantAssociationSummaryList
 */
const de_AssistantAssociationSummaryList = (output: any, context: __SerdeContext): AssistantAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssistantAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssistantData
 */
const de_AssistantData = (output: any, context: __SerdeContext): AssistantData => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration != null
        ? de_ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AssistantList
 */
const de_AssistantList = (output: any, context: __SerdeContext): AssistantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssistantSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssistantSummary
 */
const de_AssistantSummary = (output: any, context: __SerdeContext): AssistantSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    description: __expectString(output.description),
    name: __expectString(output.name),
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration != null
        ? de_ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ContentData
 */
const de_ContentData = (output: any, context: __SerdeContext): ContentData => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    contentType: __expectString(output.contentType),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    linkOutUri: __expectString(output.linkOutUri),
    metadata: output.metadata != null ? de_ContentMetadata(output.metadata, context) : undefined,
    name: __expectString(output.name),
    revisionId: __expectString(output.revisionId),
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    title: __expectString(output.title),
    url: __expectString(output.url),
    urlExpiry:
      output.urlExpiry != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.urlExpiry))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContentMetadata
 */
const de_ContentMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ContentReference
 */
const de_ContentReference = (output: any, context: __SerdeContext): ContentReference => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
  } as any;
};

/**
 * deserializeAws_restJson1ContentSummary
 */
const de_ContentSummary = (output: any, context: __SerdeContext): ContentSummary => {
  return {
    contentArn: __expectString(output.contentArn),
    contentId: __expectString(output.contentId),
    contentType: __expectString(output.contentType),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    metadata: output.metadata != null ? de_ContentMetadata(output.metadata, context) : undefined,
    name: __expectString(output.name),
    revisionId: __expectString(output.revisionId),
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1ContentSummaryList
 */
const de_ContentSummaryList = (output: any, context: __SerdeContext): ContentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): Document => {
  return {
    contentReference:
      output.contentReference != null ? de_ContentReference(output.contentReference, context) : undefined,
    excerpt: output.excerpt != null ? de_DocumentText(output.excerpt, context) : undefined,
    title: output.title != null ? de_DocumentText(output.title, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DocumentText
 */
const de_DocumentText = (output: any, context: __SerdeContext): DocumentText => {
  return {
    highlights: output.highlights != null ? de_Highlights(output.highlights, context) : undefined,
    text: __expectString(output.text),
  } as any;
};

/**
 * deserializeAws_restJson1Headers
 */
const de_Headers = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Highlight
 */
const de_Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    beginOffsetInclusive: __expectInt32(output.beginOffsetInclusive),
    endOffsetExclusive: __expectInt32(output.endOffsetExclusive),
  } as any;
};

/**
 * deserializeAws_restJson1Highlights
 */
const de_Highlights = (output: any, context: __SerdeContext): Highlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Highlight(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KnowledgeBaseAssociationData
 */
const de_KnowledgeBaseAssociationData = (output: any, context: __SerdeContext): KnowledgeBaseAssociationData => {
  return {
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
  } as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseData
 */
const de_KnowledgeBaseData = (output: any, context: __SerdeContext): KnowledgeBaseData => {
  return {
    description: __expectString(output.description),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    knowledgeBaseType: __expectString(output.knowledgeBaseType),
    lastContentModificationTime:
      output.lastContentModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastContentModificationTime)))
        : undefined,
    name: __expectString(output.name),
    renderingConfiguration:
      output.renderingConfiguration != null
        ? de_RenderingConfiguration(output.renderingConfiguration, context)
        : undefined,
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration != null
        ? de_ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    sourceConfiguration:
      output.sourceConfiguration != null
        ? de_SourceConfiguration(__expectUnion(output.sourceConfiguration), context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseList
 */
const de_KnowledgeBaseList = (output: any, context: __SerdeContext): KnowledgeBaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KnowledgeBaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KnowledgeBaseSummary
 */
const de_KnowledgeBaseSummary = (output: any, context: __SerdeContext): KnowledgeBaseSummary => {
  return {
    description: __expectString(output.description),
    knowledgeBaseArn: __expectString(output.knowledgeBaseArn),
    knowledgeBaseId: __expectString(output.knowledgeBaseId),
    knowledgeBaseType: __expectString(output.knowledgeBaseType),
    name: __expectString(output.name),
    renderingConfiguration:
      output.renderingConfiguration != null
        ? de_RenderingConfiguration(output.renderingConfiguration, context)
        : undefined,
    serverSideEncryptionConfiguration:
      output.serverSideEncryptionConfiguration != null
        ? de_ServerSideEncryptionConfiguration(output.serverSideEncryptionConfiguration, context)
        : undefined,
    sourceConfiguration:
      output.sourceConfiguration != null
        ? de_SourceConfiguration(__expectUnion(output.sourceConfiguration), context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotifyRecommendationsReceivedError
 */
const de_NotifyRecommendationsReceivedError = (
  output: any,
  context: __SerdeContext
): NotifyRecommendationsReceivedError => {
  return {
    message: __expectString(output.message),
    recommendationId: __expectString(output.recommendationId),
  } as any;
};

/**
 * deserializeAws_restJson1NotifyRecommendationsReceivedErrorList
 */
const de_NotifyRecommendationsReceivedErrorList = (
  output: any,
  context: __SerdeContext
): NotifyRecommendationsReceivedError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotifyRecommendationsReceivedError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ObjectFieldsList
 */
const de_ObjectFieldsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1QueryRecommendationTriggerData
 */
const de_QueryRecommendationTriggerData = (output: any, context: __SerdeContext): QueryRecommendationTriggerData => {
  return {
    text: __expectString(output.text),
  } as any;
};

/**
 * deserializeAws_restJson1QueryResultsList
 */
const de_QueryResultsList = (output: any, context: __SerdeContext): ResultData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationData
 */
const de_RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return {
    document: output.document != null ? de_Document(output.document, context) : undefined,
    recommendationId: __expectString(output.recommendationId),
    relevanceLevel: __expectString(output.relevanceLevel),
    relevanceScore: __limitedParseDouble(output.relevanceScore),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationIdList
 */
const de_RecommendationIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): RecommendationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationTrigger
 */
const de_RecommendationTrigger = (output: any, context: __SerdeContext): RecommendationTrigger => {
  return {
    data: output.data != null ? de_RecommendationTriggerData(__expectUnion(output.data), context) : undefined,
    id: __expectString(output.id),
    recommendationIds:
      output.recommendationIds != null ? de_RecommendationIdList(output.recommendationIds, context) : undefined,
    source: __expectString(output.source),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendationTriggerData
 */
const de_RecommendationTriggerData = (output: any, context: __SerdeContext): RecommendationTriggerData => {
  if (output.query != null) {
    return {
      query: de_QueryRecommendationTriggerData(output.query, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RecommendationTriggerList
 */
const de_RecommendationTriggerList = (output: any, context: __SerdeContext): RecommendationTrigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendationTrigger(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RenderingConfiguration
 */
const de_RenderingConfiguration = (output: any, context: __SerdeContext): RenderingConfiguration => {
  return {
    templateUri: __expectString(output.templateUri),
  } as any;
};

/**
 * deserializeAws_restJson1ResultData
 */
const de_ResultData = (output: any, context: __SerdeContext): ResultData => {
  return {
    document: output.document != null ? de_Document(output.document, context) : undefined,
    relevanceScore: __limitedParseDouble(output.relevanceScore),
    resultId: __expectString(output.resultId),
  } as any;
};

/**
 * deserializeAws_restJson1ServerSideEncryptionConfiguration
 */
const de_ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    kmsKeyId: __expectString(output.kmsKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1SessionData
 */
const de_SessionData = (output: any, context: __SerdeContext): SessionData => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    sessionArn: __expectString(output.sessionArn),
    sessionId: __expectString(output.sessionId),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SessionSummaries
 */
const de_SessionSummaries = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return {
    assistantArn: __expectString(output.assistantArn),
    assistantId: __expectString(output.assistantId),
    sessionArn: __expectString(output.sessionArn),
    sessionId: __expectString(output.sessionId),
  } as any;
};

/**
 * deserializeAws_restJson1SourceConfiguration
 */
const de_SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  if (output.appIntegrations != null) {
    return {
      appIntegrations: de_AppIntegrationsConfiguration(output.appIntegrations, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
