// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "../commands/CreateQuickResponseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "../commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "../commands/DeleteAssistantCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "../commands/DeleteContentCommand";
import { DeleteImportJobCommandInput, DeleteImportJobCommandOutput } from "../commands/DeleteImportJobCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
import {
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "../commands/DeleteQuickResponseCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "../commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "../commands/GetAssistantCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "../commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "../commands/GetContentSummaryCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
import { GetQuickResponseCommandInput, GetQuickResponseCommandOutput } from "../commands/GetQuickResponseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "../commands/ListAssistantsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "../commands/ListContentsCommand";
import { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "../commands/ListImportJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import { ListQuickResponsesCommandInput, ListQuickResponsesCommandOutput } from "../commands/ListQuickResponsesCommand";
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
import {
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "../commands/SearchQuickResponsesCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "../commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "../commands/StartContentUploadCommand";
import { StartImportJobCommandInput, StartImportJobCommandOutput } from "../commands/StartImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "../commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "../commands/UpdateQuickResponseCommand";
import {
  AccessDeniedException,
  AppIntegrationsConfiguration,
  AssistantAssociationInputData,
  Configuration,
  ConflictException,
  ConnectConfiguration,
  ContentData,
  ExternalSourceConfiguration,
  Filter,
  GroupingConfiguration,
  ImportJobData,
  ImportJobSummary,
  KnowledgeBaseData,
  PreconditionFailedException,
  QuickResponseData,
  QuickResponseDataProvider,
  QuickResponseFilterField,
  QuickResponseOrderField,
  QuickResponseQueryField,
  QuickResponseSearchExpression,
  QuickResponseSearchResultData,
  QuickResponseSummary,
  RecommendationData,
  RenderingConfiguration,
  RequestTimeoutException,
  ResourceNotFoundException,
  ResultData,
  SearchExpression,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      serverSideEncryptionConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssistantAssociationCommand
 */
export const se_CreateAssistantAssociationCommand = async (
  input: CreateAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/associations");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      association: (_) => _json(_),
      associationType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateContentCommand
 */
export const se_CreateContentCommand = async (
  input: CreateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      metadata: (_) => _json(_),
      name: [],
      overrideLinkOutUri: [],
      tags: (_) => _json(_),
      title: [],
      uploadId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const se_CreateKnowledgeBaseCommand = async (
  input: CreateKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      knowledgeBaseType: [],
      name: [],
      renderingConfiguration: (_) => _json(_),
      serverSideEncryptionConfiguration: (_) => _json(_),
      sourceConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateQuickResponseCommand
 */
export const se_CreateQuickResponseCommand = async (
  input: CreateQuickResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/quickResponses");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      channels: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      content: (_) => _json(_),
      contentType: [],
      description: [],
      groupingConfiguration: (_) => _json(_),
      isActive: [],
      language: [],
      name: [],
      shortcutKey: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSessionCommand
 */
export const se_CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/sessions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssistantCommand
 */
export const se_DeleteAssistantCommand = async (
  input: DeleteAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssistantAssociationCommand
 */
export const se_DeleteAssistantAssociationCommand = async (
  input: DeleteAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/associations/{assistantAssociationId}");
  b.p("assistantAssociationId", () => input.assistantAssociationId!, "{assistantAssociationId}", false);
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteContentCommand
 */
export const se_DeleteContentCommand = async (
  input: DeleteContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImportJobCommand
 */
export const se_DeleteImportJobCommand = async (
  input: DeleteImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("importJobId", () => input.importJobId!, "{importJobId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const se_DeleteKnowledgeBaseCommand = async (
  input: DeleteKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQuickResponseCommand
 */
export const se_DeleteQuickResponseCommand = async (
  input: DeleteQuickResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("quickResponseId", () => input.quickResponseId!, "{quickResponseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssistantCommand
 */
export const se_GetAssistantCommand = async (
  input: GetAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssistantAssociationCommand
 */
export const se_GetAssistantAssociationCommand = async (
  input: GetAssistantAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/associations/{assistantAssociationId}");
  b.p("assistantAssociationId", () => input.assistantAssociationId!, "{assistantAssociationId}", false);
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContentCommand
 */
export const se_GetContentCommand = async (
  input: GetContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}");
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetContentSummaryCommand
 */
export const se_GetContentSummaryCommand = async (
  input: GetContentSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/summary");
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImportJobCommand
 */
export const se_GetImportJobCommand = async (
  input: GetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}");
  b.p("importJobId", () => input.importJobId!, "{importJobId}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKnowledgeBaseCommand
 */
export const se_GetKnowledgeBaseCommand = async (
  input: GetKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQuickResponseCommand
 */
export const se_GetQuickResponseCommand = async (
  input: GetQuickResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}");
  b.p("quickResponseId", () => input.quickResponseId!, "{quickResponseId}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/recommendations");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_wTS]: [() => input.waitTimeSeconds !== void 0, () => input[_wTS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/sessions/{sessionId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssistantAssociationsCommand
 */
export const se_ListAssistantAssociationsCommand = async (
  input: ListAssistantAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/associations");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssistantsCommand
 */
export const se_ListAssistantsCommand = async (
  input: ListAssistantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContentsCommand
 */
export const se_ListContentsCommand = async (
  input: ListContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportJobsCommand
 */
export const se_ListImportJobsCommand = async (
  input: ListImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/importJobs");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKnowledgeBasesCommand
 */
export const se_ListKnowledgeBasesCommand = async (
  input: ListKnowledgeBasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQuickResponsesCommand
 */
export const se_ListQuickResponsesCommand = async (
  input: ListQuickResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/quickResponses");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1NotifyRecommendationsReceivedCommand
 */
export const se_NotifyRecommendationsReceivedCommand = async (
  input: NotifyRecommendationsReceivedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/recommendations/notify");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      recommendationIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryAssistantCommand
 */
export const se_QueryAssistantCommand = async (
  input: QueryAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/query");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      queryText: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand
 */
export const se_RemoveKnowledgeBaseTemplateUriCommand = async (
  input: RemoveKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/templateUri");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchContentCommand
 */
export const se_SearchContentCommand = async (
  input: SearchContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/search");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      searchExpression: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchQuickResponsesCommand
 */
export const se_SearchQuickResponsesCommand = async (
  input: SearchQuickResponsesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/search/quickResponses");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      searchExpression: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchSessionsCommand
 */
export const se_SearchSessionsCommand = async (
  input: SearchSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/searchSessions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      searchExpression: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartContentUploadCommand
 */
export const se_StartContentUploadCommand = async (
  input: StartContentUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/upload");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentType: [],
      presignedUrlTimeToLive: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartImportJobCommand
 */
export const se_StartImportJobCommand = async (
  input: StartImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/importJobs");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      externalSourceConfiguration: (_) => _json(_),
      importJobType: [],
      metadata: (_) => _json(_),
      uploadId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateContentCommand
 */
export const se_UpdateContentCommand = async (
  input: UpdateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      metadata: (_) => _json(_),
      overrideLinkOutUri: [],
      removeOverrideLinkOutUri: [],
      revisionId: [],
      title: [],
      uploadId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand
 */
export const se_UpdateKnowledgeBaseTemplateUriCommand = async (
  input: UpdateKnowledgeBaseTemplateUriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/templateUri");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      templateUri: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateQuickResponseCommand
 */
export const se_UpdateQuickResponseCommand = async (
  input: UpdateQuickResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/quickResponses/{quickResponseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("quickResponseId", () => input.quickResponseId!, "{quickResponseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      channels: (_) => _json(_),
      content: (_) => _json(_),
      contentType: [],
      description: [],
      groupingConfiguration: (_) => _json(_),
      isActive: [],
      language: [],
      name: [],
      removeDescription: [],
      removeGroupingConfiguration: [],
      removeShortcutKey: [],
      shortcutKey: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAssistantCommand
 */
export const de_CreateAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistant: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssistantAssociationCommand
 */
export const de_CreateAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistantAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateContentCommand
 */
export const de_CreateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    content: (_) => de_ContentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const de_CreateKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBaseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQuickResponseCommand
 */
export const de_CreateQuickResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuickResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    quickResponse: (_) => de_QuickResponseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSessionCommand
 */
export const de_CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssistantCommand
 */
export const de_DeleteAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssistantAssociationCommand
 */
export const de_DeleteAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContentCommand
 */
export const de_DeleteContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImportJobCommand
 */
export const de_DeleteImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportJobCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const de_DeleteKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQuickResponseCommand
 */
export const de_DeleteQuickResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuickResponseCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssistantCommand
 */
export const de_GetAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistant: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssistantAssociationCommand
 */
export const de_GetAssistantAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssistantAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistantAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContentCommand
 */
export const de_GetContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    content: (_) => de_ContentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetContentSummaryCommand
 */
export const de_GetContentSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportJobCommand
 */
export const de_GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    importJob: (_) => de_ImportJobData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKnowledgeBaseCommand
 */
export const de_GetKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBaseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQuickResponseCommand
 */
export const de_GetQuickResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuickResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    quickResponse: (_) => de_QuickResponseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recommendations: (_) => de_RecommendationList(_, context),
    triggers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    session: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssistantAssociationsCommand
 */
export const de_ListAssistantAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistantAssociationSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssistantsCommand
 */
export const de_ListAssistantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssistantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistantSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContentsCommand
 */
export const de_ListContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportJobsCommand
 */
export const de_ListImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    importJobSummaries: (_) => de_ImportJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKnowledgeBasesCommand
 */
export const de_ListKnowledgeBasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBaseSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQuickResponsesCommand
 */
export const de_ListQuickResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuickResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    quickResponseSummaries: (_) => de_QuickResponseSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1NotifyRecommendationsReceivedCommand
 */
export const de_NotifyRecommendationsReceivedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyRecommendationsReceivedCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    recommendationIds: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1QueryAssistantCommand
 */
export const de_QueryAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: (_) => de_QueryResultsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand
 */
export const de_RemoveKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SearchContentCommand
 */
export const de_SearchContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchQuickResponsesCommand
 */
export const de_SearchQuickResponsesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchQuickResponsesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: (_) => de_QuickResponseSearchResultsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchSessionsCommand
 */
export const de_SearchSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sessionSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartContentUploadCommand
 */
export const de_StartContentUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartContentUploadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    headersToInclude: _json,
    uploadId: __expectString,
    url: __expectString,
    urlExpiry: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartImportJobCommand
 */
export const de_StartImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    importJob: (_) => de_ImportJobData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateContentCommand
 */
export const de_UpdateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    content: (_) => de_ContentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKnowledgeBaseTemplateUriCommand
 */
export const de_UpdateKnowledgeBaseTemplateUriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBaseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQuickResponseCommand
 */
export const de_UpdateQuickResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuickResponseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    quickResponse: (_) => de_QuickResponseData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.wisdom#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.wisdom#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.wisdom#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.wisdom#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestTimeoutException({
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AppIntegrationsConfiguration omitted.

// se_AssistantAssociationInputData omitted.

// se_Channels omitted.

// se_Configuration omitted.

// se_ConnectConfiguration omitted.

// se_ContactAttributes omitted.

// se_ContentMetadata omitted.

// se_ExternalSourceConfiguration omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_GroupingConfiguration omitted.

// se_GroupingValues omitted.

// se_ObjectFieldsList omitted.

// se_QuickResponseDataProvider omitted.

// se_QuickResponseFilterField omitted.

// se_QuickResponseFilterFieldList omitted.

// se_QuickResponseFilterValueList omitted.

// se_QuickResponseOrderField omitted.

// se_QuickResponseQueryField omitted.

// se_QuickResponseQueryFieldList omitted.

// se_QuickResponseQueryValueList omitted.

// se_QuickResponseSearchExpression omitted.

// se_RecommendationIdList omitted.

// se_RenderingConfiguration omitted.

// se_SearchExpression omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_SourceConfiguration omitted.

// se_Tags omitted.

// de_AppIntegrationsConfiguration omitted.

// de_AssistantAssociationData omitted.

// de_AssistantAssociationOutputData omitted.

// de_AssistantAssociationSummary omitted.

// de_AssistantAssociationSummaryList omitted.

// de_AssistantData omitted.

// de_AssistantIntegrationConfiguration omitted.

// de_AssistantList omitted.

// de_AssistantSummary omitted.

// de_Channels omitted.

// de_Configuration omitted.

// de_ConnectConfiguration omitted.

// de_ContactAttributeKeys omitted.

/**
 * deserializeAws_restJson1ContentData
 */
const de_ContentData = (output: any, context: __SerdeContext): ContentData => {
  return take(output, {
    contentArn: __expectString,
    contentId: __expectString,
    contentType: __expectString,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    linkOutUri: __expectString,
    metadata: _json,
    name: __expectString,
    revisionId: __expectString,
    status: __expectString,
    tags: _json,
    title: __expectString,
    url: __expectString,
    urlExpiry: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ContentMetadata omitted.

// de_ContentReference omitted.

// de_ContentSummary omitted.

// de_ContentSummaryList omitted.

// de_Document omitted.

// de_DocumentText omitted.

// de_ExternalSourceConfiguration omitted.

// de_GroupingConfiguration omitted.

// de_GroupingValues omitted.

// de_Headers omitted.

// de_Highlight omitted.

// de_Highlights omitted.

/**
 * deserializeAws_restJson1ImportJobData
 */
const de_ImportJobData = (output: any, context: __SerdeContext): ImportJobData => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    externalSourceConfiguration: _json,
    failedRecordReport: __expectString,
    importJobId: __expectString,
    importJobType: __expectString,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metadata: _json,
    status: __expectString,
    uploadId: __expectString,
    url: __expectString,
    urlExpiry: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ImportJobList
 */
const de_ImportJobList = (output: any, context: __SerdeContext): ImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImportJobSummary
 */
const de_ImportJobSummary = (output: any, context: __SerdeContext): ImportJobSummary => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    externalSourceConfiguration: _json,
    importJobId: __expectString,
    importJobType: __expectString,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metadata: _json,
    status: __expectString,
    uploadId: __expectString,
  }) as any;
};

// de_KnowledgeBaseAssociationData omitted.

/**
 * deserializeAws_restJson1KnowledgeBaseData
 */
const de_KnowledgeBaseData = (output: any, context: __SerdeContext): KnowledgeBaseData => {
  return take(output, {
    description: __expectString,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    knowledgeBaseType: __expectString,
    lastContentModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    renderingConfiguration: _json,
    serverSideEncryptionConfiguration: _json,
    sourceConfiguration: (_: any) => _json(__expectUnion(_)),
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_KnowledgeBaseList omitted.

// de_KnowledgeBaseSummary omitted.

// de_NotifyRecommendationsReceivedError omitted.

// de_NotifyRecommendationsReceivedErrorList omitted.

// de_ObjectFieldsList omitted.

// de_QueryRecommendationTriggerData omitted.

/**
 * deserializeAws_restJson1QueryResultsList
 */
const de_QueryResultsList = (output: any, context: __SerdeContext): ResultData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResultData(entry, context);
    });
  return retVal;
};

// de_QuickResponseContentProvider omitted.

// de_QuickResponseContents omitted.

/**
 * deserializeAws_restJson1QuickResponseData
 */
const de_QuickResponseData = (output: any, context: __SerdeContext): QuickResponseData => {
  return take(output, {
    channels: _json,
    contentType: __expectString,
    contents: _json,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    groupingConfiguration: _json,
    isActive: __expectBoolean,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    language: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    quickResponseArn: __expectString,
    quickResponseId: __expectString,
    shortcutKey: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1QuickResponseSearchResultData
 */
const de_QuickResponseSearchResultData = (output: any, context: __SerdeContext): QuickResponseSearchResultData => {
  return take(output, {
    attributesInterpolated: _json,
    attributesNotInterpolated: _json,
    channels: _json,
    contentType: __expectString,
    contents: _json,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    groupingConfiguration: _json,
    isActive: __expectBoolean,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    language: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    quickResponseArn: __expectString,
    quickResponseId: __expectString,
    shortcutKey: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1QuickResponseSearchResultsList
 */
const de_QuickResponseSearchResultsList = (output: any, context: __SerdeContext): QuickResponseSearchResultData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuickResponseSearchResultData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1QuickResponseSummary
 */
const de_QuickResponseSummary = (output: any, context: __SerdeContext): QuickResponseSummary => {
  return take(output, {
    channels: _json,
    contentType: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    isActive: __expectBoolean,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    quickResponseArn: __expectString,
    quickResponseId: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1QuickResponseSummaryList
 */
const de_QuickResponseSummaryList = (output: any, context: __SerdeContext): QuickResponseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuickResponseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecommendationData
 */
const de_RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return take(output, {
    document: _json,
    recommendationId: __expectString,
    relevanceLevel: __expectString,
    relevanceScore: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

// de_RecommendationIdList omitted.

/**
 * deserializeAws_restJson1RecommendationList
 */
const de_RecommendationList = (output: any, context: __SerdeContext): RecommendationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommendationData(entry, context);
    });
  return retVal;
};

// de_RecommendationTrigger omitted.

// de_RecommendationTriggerData omitted.

// de_RecommendationTriggerList omitted.

// de_RenderingConfiguration omitted.

/**
 * deserializeAws_restJson1ResultData
 */
const de_ResultData = (output: any, context: __SerdeContext): ResultData => {
  return take(output, {
    document: _json,
    relevanceScore: __limitedParseDouble,
    resultId: __expectString,
  }) as any;
};

// de_ServerSideEncryptionConfiguration omitted.

// de_SessionData omitted.

// de_SessionIntegrationConfiguration omitted.

// de_SessionSummaries omitted.

// de_SessionSummary omitted.

// de_SourceConfiguration omitted.

// de_Tags omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
const _wTS = "waitTimeSeconds";
