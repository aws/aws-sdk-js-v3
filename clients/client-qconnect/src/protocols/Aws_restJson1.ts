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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  ActivateMessageTemplateCommandInput,
  ActivateMessageTemplateCommandOutput,
} from "../commands/ActivateMessageTemplateCommand";
import { CreateAIAgentCommandInput, CreateAIAgentCommandOutput } from "../commands/CreateAIAgentCommand";
import {
  CreateAIAgentVersionCommandInput,
  CreateAIAgentVersionCommandOutput,
} from "../commands/CreateAIAgentVersionCommand";
import { CreateAIGuardrailCommandInput, CreateAIGuardrailCommandOutput } from "../commands/CreateAIGuardrailCommand";
import {
  CreateAIGuardrailVersionCommandInput,
  CreateAIGuardrailVersionCommandOutput,
} from "../commands/CreateAIGuardrailVersionCommand";
import { CreateAIPromptCommandInput, CreateAIPromptCommandOutput } from "../commands/CreateAIPromptCommand";
import {
  CreateAIPromptVersionCommandInput,
  CreateAIPromptVersionCommandOutput,
} from "../commands/CreateAIPromptVersionCommand";
import {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "../commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "../commands/CreateAssistantCommand";
import {
  CreateContentAssociationCommandInput,
  CreateContentAssociationCommandOutput,
} from "../commands/CreateContentAssociationCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "../commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "../commands/CreateKnowledgeBaseCommand";
import {
  CreateMessageTemplateAttachmentCommandInput,
  CreateMessageTemplateAttachmentCommandOutput,
} from "../commands/CreateMessageTemplateAttachmentCommand";
import {
  CreateMessageTemplateCommandInput,
  CreateMessageTemplateCommandOutput,
} from "../commands/CreateMessageTemplateCommand";
import {
  CreateMessageTemplateVersionCommandInput,
  CreateMessageTemplateVersionCommandOutput,
} from "../commands/CreateMessageTemplateVersionCommand";
import {
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "../commands/CreateQuickResponseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import {
  DeactivateMessageTemplateCommandInput,
  DeactivateMessageTemplateCommandOutput,
} from "../commands/DeactivateMessageTemplateCommand";
import { DeleteAIAgentCommandInput, DeleteAIAgentCommandOutput } from "../commands/DeleteAIAgentCommand";
import {
  DeleteAIAgentVersionCommandInput,
  DeleteAIAgentVersionCommandOutput,
} from "../commands/DeleteAIAgentVersionCommand";
import { DeleteAIGuardrailCommandInput, DeleteAIGuardrailCommandOutput } from "../commands/DeleteAIGuardrailCommand";
import {
  DeleteAIGuardrailVersionCommandInput,
  DeleteAIGuardrailVersionCommandOutput,
} from "../commands/DeleteAIGuardrailVersionCommand";
import { DeleteAIPromptCommandInput, DeleteAIPromptCommandOutput } from "../commands/DeleteAIPromptCommand";
import {
  DeleteAIPromptVersionCommandInput,
  DeleteAIPromptVersionCommandOutput,
} from "../commands/DeleteAIPromptVersionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "../commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "../commands/DeleteAssistantCommand";
import {
  DeleteContentAssociationCommandInput,
  DeleteContentAssociationCommandOutput,
} from "../commands/DeleteContentAssociationCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "../commands/DeleteContentCommand";
import { DeleteImportJobCommandInput, DeleteImportJobCommandOutput } from "../commands/DeleteImportJobCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
import {
  DeleteMessageTemplateAttachmentCommandInput,
  DeleteMessageTemplateAttachmentCommandOutput,
} from "../commands/DeleteMessageTemplateAttachmentCommand";
import {
  DeleteMessageTemplateCommandInput,
  DeleteMessageTemplateCommandOutput,
} from "../commands/DeleteMessageTemplateCommand";
import {
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "../commands/DeleteQuickResponseCommand";
import { GetAIAgentCommandInput, GetAIAgentCommandOutput } from "../commands/GetAIAgentCommand";
import { GetAIGuardrailCommandInput, GetAIGuardrailCommandOutput } from "../commands/GetAIGuardrailCommand";
import { GetAIPromptCommandInput, GetAIPromptCommandOutput } from "../commands/GetAIPromptCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "../commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "../commands/GetAssistantCommand";
import {
  GetContentAssociationCommandInput,
  GetContentAssociationCommandOutput,
} from "../commands/GetContentAssociationCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "../commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "../commands/GetContentSummaryCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
import { GetMessageTemplateCommandInput, GetMessageTemplateCommandOutput } from "../commands/GetMessageTemplateCommand";
import { GetNextMessageCommandInput, GetNextMessageCommandOutput } from "../commands/GetNextMessageCommand";
import { GetQuickResponseCommandInput, GetQuickResponseCommandOutput } from "../commands/GetQuickResponseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { ListAIAgentsCommandInput, ListAIAgentsCommandOutput } from "../commands/ListAIAgentsCommand";
import {
  ListAIAgentVersionsCommandInput,
  ListAIAgentVersionsCommandOutput,
} from "../commands/ListAIAgentVersionsCommand";
import { ListAIGuardrailsCommandInput, ListAIGuardrailsCommandOutput } from "../commands/ListAIGuardrailsCommand";
import {
  ListAIGuardrailVersionsCommandInput,
  ListAIGuardrailVersionsCommandOutput,
} from "../commands/ListAIGuardrailVersionsCommand";
import { ListAIPromptsCommandInput, ListAIPromptsCommandOutput } from "../commands/ListAIPromptsCommand";
import {
  ListAIPromptVersionsCommandInput,
  ListAIPromptVersionsCommandOutput,
} from "../commands/ListAIPromptVersionsCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "../commands/ListAssistantsCommand";
import {
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "../commands/ListContentAssociationsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "../commands/ListContentsCommand";
import { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "../commands/ListImportJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import { ListMessagesCommandInput, ListMessagesCommandOutput } from "../commands/ListMessagesCommand";
import {
  ListMessageTemplatesCommandInput,
  ListMessageTemplatesCommandOutput,
} from "../commands/ListMessageTemplatesCommand";
import {
  ListMessageTemplateVersionsCommandInput,
  ListMessageTemplateVersionsCommandOutput,
} from "../commands/ListMessageTemplateVersionsCommand";
import { ListQuickResponsesCommandInput, ListQuickResponsesCommandOutput } from "../commands/ListQuickResponsesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "../commands/NotifyRecommendationsReceivedCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "../commands/QueryAssistantCommand";
import {
  RemoveAssistantAIAgentCommandInput,
  RemoveAssistantAIAgentCommandOutput,
} from "../commands/RemoveAssistantAIAgentCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/RemoveKnowledgeBaseTemplateUriCommand";
import {
  RenderMessageTemplateCommandInput,
  RenderMessageTemplateCommandOutput,
} from "../commands/RenderMessageTemplateCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "../commands/SearchContentCommand";
import {
  SearchMessageTemplatesCommandInput,
  SearchMessageTemplatesCommandOutput,
} from "../commands/SearchMessageTemplatesCommand";
import {
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "../commands/SearchQuickResponsesCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "../commands/SearchSessionsCommand";
import { SendMessageCommandInput, SendMessageCommandOutput } from "../commands/SendMessageCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "../commands/StartContentUploadCommand";
import { StartImportJobCommandInput, StartImportJobCommandOutput } from "../commands/StartImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAIAgentCommandInput, UpdateAIAgentCommandOutput } from "../commands/UpdateAIAgentCommand";
import { UpdateAIGuardrailCommandInput, UpdateAIGuardrailCommandOutput } from "../commands/UpdateAIGuardrailCommand";
import { UpdateAIPromptCommandInput, UpdateAIPromptCommandOutput } from "../commands/UpdateAIPromptCommand";
import {
  UpdateAssistantAIAgentCommandInput,
  UpdateAssistantAIAgentCommandOutput,
} from "../commands/UpdateAssistantAIAgentCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "../commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "../commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  UpdateMessageTemplateCommandInput,
  UpdateMessageTemplateCommandOutput,
} from "../commands/UpdateMessageTemplateCommand";
import {
  UpdateMessageTemplateMetadataCommandInput,
  UpdateMessageTemplateMetadataCommandOutput,
} from "../commands/UpdateMessageTemplateMetadataCommand";
import {
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "../commands/UpdateQuickResponseCommand";
import { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "../commands/UpdateSessionCommand";
import { UpdateSessionDataCommandInput, UpdateSessionDataCommandOutput } from "../commands/UpdateSessionDataCommand";
import {
  AccessDeniedException,
  AgentAttributes,
  AIAgentConfiguration,
  AIAgentConfigurationData,
  AIAgentData,
  AIAgentSummary,
  AIAgentType,
  AIAgentVersionSummary,
  AIGuardrailContentPolicyConfig,
  AIGuardrailContextualGroundingPolicyConfig,
  AIGuardrailData,
  AIGuardrailSensitiveInformationPolicyConfig,
  AIGuardrailSummary,
  AIGuardrailTopicPolicyConfig,
  AIGuardrailVersionSummary,
  AIGuardrailWordPolicyConfig,
  AIPromptData,
  AIPromptSummary,
  AIPromptTemplateConfiguration,
  AIPromptVersionSummary,
  AmazonConnectGuideAssociationData,
  AnswerRecommendationAIAgentConfiguration,
  AppIntegrationsConfiguration,
  AssistantAssociationInputData,
  AssociationConfiguration,
  AssociationConfigurationData,
  BedrockFoundationModelConfigurationForParsing,
  ChunkingConfiguration,
  Configuration,
  ConflictException,
  ConnectConfiguration,
  ContentAssociationContents,
  ContentData,
  ContentDataDetails,
  ContentFeedbackData,
  ConversationContext,
  CustomerProfileAttributes,
  EmailHeader,
  EmailMessageTemplateContent,
  EmailMessageTemplateContentBody,
  Filter,
  FixedSizeChunkingConfiguration,
  GenerativeContentFeedbackData,
  GroupingConfiguration,
  GuardrailContentFilterConfig,
  GuardrailContextualGroundingFilterConfig,
  GuardrailManagedWordsConfig,
  GuardrailPiiEntityConfig,
  GuardrailRegexConfig,
  GuardrailTopicConfig,
  GuardrailWordConfig,
  HierarchicalChunkingConfiguration,
  HierarchicalChunkingLevelConfiguration,
  IntentInputData,
  KnowledgeBaseAssociationConfigurationData,
  KnowledgeBaseData,
  ManagedSourceConfiguration,
  ManualSearchAIAgentConfiguration,
  MessageConfiguration,
  MessageData,
  MessageInput,
  MessageOutput,
  MessageTemplateAttachment,
  MessageTemplateAttributes,
  MessageTemplateBodyContentProvider,
  MessageTemplateContentProvider,
  MessageTemplateData,
  OrCondition,
  ParsingConfiguration,
  ParsingPrompt,
  PreconditionFailedException,
  QueryCondition,
  QueryConditionItem,
  QueryInputData,
  QueryTextInputData,
  RankingData,
  RenderingConfiguration,
  RequestTimeoutException,
  ResourceNotFoundException,
  RuntimeSessionData,
  RuntimeSessionDataValue,
  SearchExpression,
  SeedUrl,
  SelfServiceAIAgentConfiguration,
  SelfServiceConversationHistory,
  SemanticChunkingConfiguration,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  SMSMessageTemplateContent,
  SMSMessageTemplateContentBody,
  SourceConfiguration,
  SourceContentDataDetails,
  SystemAttributes,
  SystemEndpointAttributes,
  TagCondition,
  TagFilter,
  TextFullAIPromptEditTemplateConfiguration,
  TextMessage,
  ThrottlingException,
  UnauthorizedException,
  UrlConfiguration,
  ValidationException,
  VectorIngestionConfiguration,
  WebCrawlerConfiguration,
  WebCrawlerLimits,
} from "../models/models_0";
import {
  DataDetails,
  DataSummary,
  ExtendedMessageTemplateData,
  ExternalSourceConfiguration,
  GenerativeChunkDataDetails,
  GenerativeDataDetails,
  ImportJobData,
  ImportJobSummary,
  MessageTemplateFilterField,
  MessageTemplateOrderField,
  MessageTemplateQueryField,
  MessageTemplateSearchExpression,
  MessageTemplateSearchResultData,
  MessageTemplateSummary,
  QuickResponseData,
  QuickResponseDataProvider,
  QuickResponseFilterField,
  QuickResponseOrderField,
  QuickResponseQueryField,
  QuickResponseSearchExpression,
  QuickResponseSearchResultData,
  QuickResponseSummary,
  RecommendationData,
  ResultData,
  TooManyTagsException,
} from "../models/models_1";
import { QConnectServiceException as __BaseException } from "../models/QConnectServiceException";

/**
 * serializeAws_restJson1ActivateMessageTemplateCommand
 */
export const se_ActivateMessageTemplateCommand = async (
  input: ActivateMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/activate");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      versionNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIAgentCommand
 */
export const se_CreateAIAgentCommand = async (
  input: CreateAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiagents");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => se_AIAgentConfiguration(_, context),
      description: [],
      name: [],
      tags: (_) => _json(_),
      type: [],
      visibilityStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIAgentVersionCommand
 */
export const se_CreateAIAgentVersionCommand = async (
  input: CreateAIAgentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modifiedTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIGuardrailCommand
 */
export const se_CreateAIGuardrailCommand = async (
  input: CreateAIGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiguardrails");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedInputMessaging: [],
      blockedOutputsMessaging: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      contentPolicyConfig: (_) => _json(_),
      contextualGroundingPolicyConfig: (_) => se_AIGuardrailContextualGroundingPolicyConfig(_, context),
      description: [],
      name: [],
      sensitiveInformationPolicyConfig: (_) => _json(_),
      tags: (_) => _json(_),
      topicPolicyConfig: (_) => _json(_),
      visibilityStatus: [],
      wordPolicyConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIGuardrailVersionCommand
 */
export const se_CreateAIGuardrailVersionCommand = async (
  input: CreateAIGuardrailVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modifiedTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIPromptCommand
 */
export const se_CreateAIPromptCommand = async (
  input: CreateAIPromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiprompts");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiFormat: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      modelId: [],
      name: [],
      tags: (_) => _json(_),
      templateConfiguration: (_) => _json(_),
      templateType: [],
      type: [],
      visibilityStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAIPromptVersionCommand
 */
export const se_CreateAIPromptVersionCommand = async (
  input: CreateAIPromptVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modifiedTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

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
 * serializeAws_restJson1CreateContentAssociationCommand
 */
export const se_CreateContentAssociationCommand = async (
  input: CreateContentAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
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
      vectorIngestionConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMessageTemplateCommand
 */
export const se_CreateMessageTemplateCommand = async (
  input: CreateMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelSubtype: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      content: (_) => _json(_),
      defaultAttributes: (_) => _json(_),
      description: [],
      groupingConfiguration: (_) => _json(_),
      language: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMessageTemplateAttachmentCommand
 */
export const se_CreateMessageTemplateAttachmentCommand = async (
  input: CreateMessageTemplateAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      body: [],
      clientToken: [],
      contentDisposition: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMessageTemplateVersionCommand
 */
export const se_CreateMessageTemplateVersionCommand = async (
  input: CreateMessageTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      messageTemplateContentSha256: [],
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
      aiAgentConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tagFilter: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeactivateMessageTemplateCommand
 */
export const se_DeactivateMessageTemplateCommand = async (
  input: DeactivateMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/deactivate");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      versionNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIAgentCommand
 */
export const se_DeleteAIAgentCommand = async (
  input: DeleteAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIAgentVersionCommand
 */
export const se_DeleteAIAgentVersionCommand = async (
  input: DeleteAIAgentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}/versions/{versionNumber}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  b.p("versionNumber", () => input.versionNumber!.toString(), "{versionNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIGuardrailCommand
 */
export const se_DeleteAIGuardrailCommand = async (
  input: DeleteAIGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIGuardrailVersionCommand
 */
export const se_DeleteAIGuardrailVersionCommand = async (
  input: DeleteAIGuardrailVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions/{versionNumber}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  b.p("versionNumber", () => input.versionNumber!.toString(), "{versionNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIPromptCommand
 */
export const se_DeleteAIPromptCommand = async (
  input: DeleteAIPromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAIPromptVersionCommand
 */
export const se_DeleteAIPromptVersionCommand = async (
  input: DeleteAIPromptVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}/versions/{versionNumber}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  b.p("versionNumber", () => input.versionNumber!.toString(), "{versionNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
 * serializeAws_restJson1DeleteContentAssociationCommand
 */
export const se_DeleteContentAssociationCommand = async (
  input: DeleteContentAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  b.p("contentAssociationId", () => input.contentAssociationId!, "{contentAssociationId}", false);
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
 * serializeAws_restJson1DeleteMessageTemplateCommand
 */
export const se_DeleteMessageTemplateCommand = async (
  input: DeleteMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMessageTemplateAttachmentCommand
 */
export const se_DeleteMessageTemplateAttachmentCommand = async (
  input: DeleteMessageTemplateAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/attachments/{attachmentId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  b.p("attachmentId", () => input.attachmentId!, "{attachmentId}", false);
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
 * serializeAws_restJson1GetAIAgentCommand
 */
export const se_GetAIAgentCommand = async (
  input: GetAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAIGuardrailCommand
 */
export const se_GetAIGuardrailCommand = async (
  input: GetAIGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAIPromptCommand
 */
export const se_GetAIPromptCommand = async (
  input: GetAIPromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1GetContentAssociationCommand
 */
export const se_GetContentAssociationCommand = async (
  input: GetContentAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations/{contentAssociationId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
  b.p("contentAssociationId", () => input.contentAssociationId!, "{contentAssociationId}", false);
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
 * serializeAws_restJson1GetMessageTemplateCommand
 */
export const se_GetMessageTemplateCommand = async (
  input: GetMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}");
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNextMessageCommand
 */
export const se_GetNextMessageCommand = async (
  input: GetNextMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/messages/next");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  const query: any = map({
    [_nMT]: [, __expectNonNull(input[_nMT]!, `nextMessageToken`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
    [_nCT]: [, input[_nCT]!],
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
 * serializeAws_restJson1ListAIAgentsCommand
 */
export const se_ListAIAgentsCommand = async (
  input: ListAIAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagents");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_o]: [, input[_o]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAIAgentVersionsCommand
 */
export const se_ListAIAgentVersionsCommand = async (
  input: ListAIAgentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_o]: [, input[_o]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAIGuardrailsCommand
 */
export const se_ListAIGuardrailsCommand = async (
  input: ListAIGuardrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiguardrails");
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
 * serializeAws_restJson1ListAIGuardrailVersionsCommand
 */
export const se_ListAIGuardrailVersionsCommand = async (
  input: ListAIGuardrailVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAIPromptsCommand
 */
export const se_ListAIPromptsCommand = async (
  input: ListAIPromptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiprompts");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_o]: [, input[_o]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAIPromptVersionsCommand
 */
export const se_ListAIPromptVersionsCommand = async (
  input: ListAIPromptVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}/versions");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_o]: [, input[_o]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
 * serializeAws_restJson1ListContentAssociationsCommand
 */
export const se_ListContentAssociationsCommand = async (
  input: ListContentAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/contents/{contentId}/associations");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("contentId", () => input.contentId!, "{contentId}", false);
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
 * serializeAws_restJson1ListMessagesCommand
 */
export const se_ListMessagesCommand = async (
  input: ListMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/messages");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMessageTemplatesCommand
 */
export const se_ListMessageTemplatesCommand = async (
  input: ListMessageTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates");
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
 * serializeAws_restJson1ListMessageTemplateVersionsCommand
 */
export const se_ListMessageTemplateVersionsCommand = async (
  input: ListMessageTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/versions");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
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
 * serializeAws_restJson1PutFeedbackCommand
 */
export const se_PutFeedbackCommand = async (
  input: PutFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/feedback");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contentFeedback: (_) => _json(_),
      targetId: [],
      targetType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
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
      overrideKnowledgeBaseSearchType: [],
      queryCondition: (_) => _json(_),
      queryInputData: (_) => _json(_),
      queryText: [],
      sessionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveAssistantAIAgentCommand
 */
export const se_RemoveAssistantAIAgentCommand = async (
  input: RemoveAssistantAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assistants/{assistantId}/aiagentConfiguration");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  const query: any = map({
    [_aAT]: [, __expectNonNull(input[_aAT]!, `aiAgentType`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
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
 * serializeAws_restJson1RenderMessageTemplateCommand
 */
export const se_RenderMessageTemplateCommand = async (
  input: RenderMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/render");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1SearchMessageTemplatesCommand
 */
export const se_SearchMessageTemplatesCommand = async (
  input: SearchMessageTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/search/messageTemplates");
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
 * serializeAws_restJson1SendMessageCommand
 */
export const se_SendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/message");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => _json(_),
      conversationContext: (_) => _json(_),
      message: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1UpdateAIAgentCommand
 */
export const se_UpdateAIAgentCommand = async (
  input: UpdateAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiagents/{aiAgentId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiAgentId", () => input.aiAgentId!, "{aiAgentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => se_AIAgentConfiguration(_, context),
      description: [],
      visibilityStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAIGuardrailCommand
 */
export const se_UpdateAIGuardrailCommand = async (
  input: UpdateAIGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiguardrails/{aiGuardrailId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiGuardrailId", () => input.aiGuardrailId!, "{aiGuardrailId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedInputMessaging: [],
      blockedOutputsMessaging: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      contentPolicyConfig: (_) => _json(_),
      contextualGroundingPolicyConfig: (_) => se_AIGuardrailContextualGroundingPolicyConfig(_, context),
      description: [],
      sensitiveInformationPolicyConfig: (_) => _json(_),
      topicPolicyConfig: (_) => _json(_),
      visibilityStatus: [],
      wordPolicyConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAIPromptCommand
 */
export const se_UpdateAIPromptCommand = async (
  input: UpdateAIPromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiprompts/{aiPromptId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("aiPromptId", () => input.aiPromptId!, "{aiPromptId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      modelId: [],
      templateConfiguration: (_) => _json(_),
      visibilityStatus: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssistantAIAgentCommand
 */
export const se_UpdateAssistantAIAgentCommand = async (
  input: UpdateAssistantAIAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/aiagentConfiguration");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aiAgentType: [],
      configuration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1UpdateMessageTemplateCommand
 */
export const se_UpdateMessageTemplateCommand = async (
  input: UpdateMessageTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      content: (_) => _json(_),
      defaultAttributes: (_) => _json(_),
      language: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMessageTemplateMetadataCommand
 */
export const se_UpdateMessageTemplateMetadataCommand = async (
  input: UpdateMessageTemplateMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgeBases/{knowledgeBaseId}/messageTemplates/{messageTemplateId}/metadata");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("messageTemplateId", () => input.messageTemplateId!, "{messageTemplateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      groupingConfiguration: (_) => _json(_),
      name: [],
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
 * serializeAws_restJson1UpdateSessionCommand
 */
export const se_UpdateSessionCommand = async (
  input: UpdateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/sessions/{sessionId}");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aiAgentConfiguration: (_) => _json(_),
      description: [],
      tagFilter: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSessionDataCommand
 */
export const se_UpdateSessionDataCommand = async (
  input: UpdateSessionDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistants/{assistantId}/sessions/{sessionId}/data");
  b.p("assistantId", () => input.assistantId!, "{assistantId}", false);
  b.p("sessionId", () => input.sessionId!, "{sessionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      data: (_) => _json(_),
      namespace: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1ActivateMessageTemplateCommand
 */
export const de_ActivateMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplateArn: __expectString,
    messageTemplateId: __expectString,
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIAgentCommand
 */
export const de_CreateAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgent: (_) => de_AIAgentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIAgentVersionCommand
 */
export const de_CreateAIAgentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIAgentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgent: (_) => de_AIAgentData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIGuardrailCommand
 */
export const de_CreateAIGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIGuardrailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrail: (_) => de_AIGuardrailData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIGuardrailVersionCommand
 */
export const de_CreateAIGuardrailVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIGuardrailVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrail: (_) => de_AIGuardrailData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIPromptCommand
 */
export const de_CreateAIPromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIPromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPrompt: (_) => de_AIPromptData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAIPromptVersionCommand
 */
export const de_CreateAIPromptVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAIPromptVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPrompt: (_) => de_AIPromptData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
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
 * deserializeAws_restJson1CreateContentAssociationCommand
 */
export const de_CreateContentAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContentAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentAssociation: _json,
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
 * deserializeAws_restJson1CreateMessageTemplateCommand
 */
export const de_CreateMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplate: (_) => de_MessageTemplateData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMessageTemplateAttachmentCommand
 */
export const de_CreateMessageTemplateAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMessageTemplateAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachment: (_) => de_MessageTemplateAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMessageTemplateVersionCommand
 */
export const de_CreateMessageTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMessageTemplateVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplate: (_) => de_ExtendedMessageTemplateData(_, context),
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
 * deserializeAws_restJson1DeactivateMessageTemplateCommand
 */
export const de_DeactivateMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplateArn: __expectString,
    messageTemplateId: __expectString,
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAIAgentCommand
 */
export const de_DeleteAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIAgentCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAIAgentVersionCommand
 */
export const de_DeleteAIAgentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIAgentVersionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAIGuardrailCommand
 */
export const de_DeleteAIGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIGuardrailCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAIGuardrailVersionCommand
 */
export const de_DeleteAIGuardrailVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIGuardrailVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAIPromptCommand
 */
export const de_DeleteAIPromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIPromptCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAIPromptVersionCommand
 */
export const de_DeleteAIPromptVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAIPromptVersionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteContentAssociationCommand
 */
export const de_DeleteContentAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContentAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMessageTemplateCommand
 */
export const de_DeleteMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageTemplateCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMessageTemplateAttachmentCommand
 */
export const de_DeleteMessageTemplateAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageTemplateAttachmentCommandOutput> => {
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
 * deserializeAws_restJson1GetAIAgentCommand
 */
export const de_GetAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAIAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgent: (_) => de_AIAgentData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAIGuardrailCommand
 */
export const de_GetAIGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAIGuardrailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrail: (_) => de_AIGuardrailData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAIPromptCommand
 */
export const de_GetAIPromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAIPromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPrompt: (_) => de_AIPromptData(_, context),
    versionNumber: __expectLong,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1GetContentAssociationCommand
 */
export const de_GetContentAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContentAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentAssociation: _json,
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
 * deserializeAws_restJson1GetMessageTemplateCommand
 */
export const de_GetMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplate: (_) => de_ExtendedMessageTemplateData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNextMessageCommand
 */
export const de_GetNextMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNextMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    conversationSessionData: _json,
    conversationState: _json,
    nextMessageToken: __expectString,
    requestMessageId: __expectString,
    response: (_) => de_MessageOutput(_, context),
    type: __expectString,
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
 * deserializeAws_restJson1ListAIAgentsCommand
 */
export const de_ListAIAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIAgentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgentSummaries: (_) => de_AIAgentSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAIAgentVersionsCommand
 */
export const de_ListAIAgentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIAgentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgentVersionSummaries: (_) => de_AIAgentVersionSummariesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAIGuardrailsCommand
 */
export const de_ListAIGuardrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIGuardrailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrailSummaries: (_) => de_AIGuardrailSummariesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAIGuardrailVersionsCommand
 */
export const de_ListAIGuardrailVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIGuardrailVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrailVersionSummaries: (_) => de_AIGuardrailVersionSummariesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAIPromptsCommand
 */
export const de_ListAIPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPromptSummaries: (_) => de_AIPromptSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAIPromptVersionsCommand
 */
export const de_ListAIPromptVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAIPromptVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPromptVersionSummaries: (_) => de_AIPromptVersionSummariesList(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1ListContentAssociationsCommand
 */
export const de_ListContentAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContentAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contentAssociationSummaries: _json,
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
 * deserializeAws_restJson1ListMessagesCommand
 */
export const de_ListMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messages: (_) => de_MessageList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMessageTemplatesCommand
 */
export const de_ListMessageTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMessageTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplateSummaries: (_) => de_MessageTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMessageTemplateVersionsCommand
 */
export const de_ListMessageTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMessageTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplateVersionSummaries: _json,
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
 * deserializeAws_restJson1PutFeedbackCommand
 */
export const de_PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assistantArn: __expectString,
    assistantId: __expectString,
    contentFeedback: (_) => _json(__expectUnion(_)),
    targetId: __expectString,
    targetType: __expectString,
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
 * deserializeAws_restJson1RemoveAssistantAIAgentCommand
 */
export const de_RemoveAssistantAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAssistantAIAgentCommandOutput> => {
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
 * deserializeAws_restJson1RenderMessageTemplateCommand
 */
export const de_RenderMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenderMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachments: (_) => de_MessageTemplateAttachmentList(_, context),
    attributesNotInterpolated: _json,
    content: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1SearchMessageTemplatesCommand
 */
export const de_SearchMessageTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchMessageTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: (_) => de_MessageTemplateSearchResultsList(_, context),
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
 * deserializeAws_restJson1SendMessageCommand
 */
export const de_SendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuration: _json,
    nextMessageToken: __expectString,
    requestMessageId: __expectString,
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
 * deserializeAws_restJson1UpdateAIAgentCommand
 */
export const de_UpdateAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAIAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiAgent: (_) => de_AIAgentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAIGuardrailCommand
 */
export const de_UpdateAIGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAIGuardrailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiGuardrail: (_) => de_AIGuardrailData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAIPromptCommand
 */
export const de_UpdateAIPromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAIPromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aiPrompt: (_) => de_AIPromptData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssistantAIAgentCommand
 */
export const de_UpdateAssistantAIAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssistantAIAgentCommandOutput> => {
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
 * deserializeAws_restJson1UpdateMessageTemplateCommand
 */
export const de_UpdateMessageTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMessageTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplate: (_) => de_MessageTemplateData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMessageTemplateMetadataCommand
 */
export const de_UpdateMessageTemplateMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMessageTemplateMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    messageTemplate: (_) => de_MessageTemplateData(_, context),
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
 * deserializeAws_restJson1UpdateSessionCommand
 */
export const de_UpdateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSessionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateSessionDataCommand
 */
export const de_UpdateSessionDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSessionDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    data: _json,
    namespace: __expectString,
    sessionArn: __expectString,
    sessionId: __expectString,
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
    case "com.amazonaws.qconnect#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.qconnect#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qconnect#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.qconnect#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.qconnect#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.qconnect#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.qconnect#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.qconnect#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.qconnect#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.qconnect#PreconditionFailedException":
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
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
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
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

// se_AgentAttributes omitted.

/**
 * serializeAws_restJson1AIAgentConfiguration
 */
const se_AIAgentConfiguration = (input: AIAgentConfiguration, context: __SerdeContext): any => {
  return AIAgentConfiguration.visit(input, {
    answerRecommendationAIAgentConfiguration: (value) => ({ answerRecommendationAIAgentConfiguration: _json(value) }),
    manualSearchAIAgentConfiguration: (value) => ({ manualSearchAIAgentConfiguration: _json(value) }),
    selfServiceAIAgentConfiguration: (value) => ({ selfServiceAIAgentConfiguration: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_AIAgentConfigurationData omitted.

// se_AIAgentConfigurationMap omitted.

// se_AIGuardrailContentPolicyConfig omitted.

/**
 * serializeAws_restJson1AIGuardrailContextualGroundingPolicyConfig
 */
const se_AIGuardrailContextualGroundingPolicyConfig = (
  input: AIGuardrailContextualGroundingPolicyConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    filtersConfig: (_) => se_GuardrailContextualGroundingFiltersConfig(_, context),
  });
};

// se_AIGuardrailSensitiveInformationPolicyConfig omitted.

// se_AIGuardrailTopicPolicyConfig omitted.

// se_AIGuardrailWordPolicyConfig omitted.

// se_AIPromptTemplateConfiguration omitted.

// se_AmazonConnectGuideAssociationData omitted.

// se_AndConditions omitted.

// se_AnswerRecommendationAIAgentConfiguration omitted.

// se_AppIntegrationsConfiguration omitted.

// se_AssistantAssociationInputData omitted.

// se_AssociationConfiguration omitted.

// se_AssociationConfigurationData omitted.

// se_AssociationConfigurationList omitted.

// se_BedrockFoundationModelConfigurationForParsing omitted.

// se_Channels omitted.

// se_ChunkingConfiguration omitted.

// se_Configuration omitted.

// se_ConnectConfiguration omitted.

// se_ContactAttributes omitted.

// se_ContentAssociationContents omitted.

// se_ContentFeedbackData omitted.

// se_ContentMetadata omitted.

// se_ConversationContext omitted.

// se_CustomAttributes omitted.

// se_CustomerProfileAttributes omitted.

// se_EmailHeader omitted.

// se_EmailHeaders omitted.

// se_EmailMessageTemplateContent omitted.

// se_EmailMessageTemplateContentBody omitted.

// se_ExternalSourceConfiguration omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FixedSizeChunkingConfiguration omitted.

// se_GenerativeContentFeedbackData omitted.

// se_GroupingConfiguration omitted.

// se_GroupingValues omitted.

// se_GuardrailContentFilterConfig omitted.

// se_GuardrailContentFiltersConfig omitted.

/**
 * serializeAws_restJson1GuardrailContextualGroundingFilterConfig
 */
const se_GuardrailContextualGroundingFilterConfig = (
  input: GuardrailContextualGroundingFilterConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    threshold: __serializeFloat,
    type: [],
  });
};

/**
 * serializeAws_restJson1GuardrailContextualGroundingFiltersConfig
 */
const se_GuardrailContextualGroundingFiltersConfig = (
  input: GuardrailContextualGroundingFilterConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GuardrailContextualGroundingFilterConfig(entry, context);
    });
};

// se_GuardrailManagedWordListsConfig omitted.

// se_GuardrailManagedWordsConfig omitted.

// se_GuardrailPiiEntitiesConfig omitted.

// se_GuardrailPiiEntityConfig omitted.

// se_GuardrailRegexConfig omitted.

// se_GuardrailRegexesConfig omitted.

// se_GuardrailTopicConfig omitted.

// se_GuardrailTopicExamples omitted.

// se_GuardrailTopicsConfig omitted.

// se_GuardrailWordConfig omitted.

// se_GuardrailWordsConfig omitted.

// se_HierarchicalChunkingConfiguration omitted.

// se_HierarchicalChunkingLevelConfiguration omitted.

// se_HierarchicalChunkingLevelConfigurations omitted.

// se_IntentInputData omitted.

// se_KnowledgeBaseAssociationConfigurationData omitted.

// se_ManagedSourceConfiguration omitted.

// se_ManualSearchAIAgentConfiguration omitted.

// se_MessageConfiguration omitted.

// se_MessageData omitted.

// se_MessageInput omitted.

// se_MessageTemplateAttributes omitted.

// se_MessageTemplateBodyContentProvider omitted.

// se_MessageTemplateContentProvider omitted.

// se_MessageTemplateFilterField omitted.

// se_MessageTemplateFilterFieldList omitted.

// se_MessageTemplateFilterValueList omitted.

// se_MessageTemplateOrderField omitted.

// se_MessageTemplateQueryField omitted.

// se_MessageTemplateQueryFieldList omitted.

// se_MessageTemplateQueryValueList omitted.

// se_MessageTemplateSearchExpression omitted.

// se_ObjectFieldsList omitted.

// se_OrCondition omitted.

// se_OrConditions omitted.

// se_ParsingConfiguration omitted.

// se_ParsingPrompt omitted.

// se_QueryCondition omitted.

// se_QueryConditionExpression omitted.

// se_QueryConditionItem omitted.

// se_QueryInputData omitted.

// se_QueryTextInputData omitted.

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

// se_RuntimeSessionData omitted.

// se_RuntimeSessionDataList omitted.

// se_RuntimeSessionDataValue omitted.

// se_SearchExpression omitted.

// se_SeedUrl omitted.

// se_SeedUrls omitted.

// se_SelfServiceAIAgentConfiguration omitted.

// se_SelfServiceConversationHistory omitted.

// se_SelfServiceConversationHistoryList omitted.

// se_SemanticChunkingConfiguration omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_SMSMessageTemplateContent omitted.

// se_SMSMessageTemplateContentBody omitted.

// se_SourceConfiguration omitted.

// se_SystemAttributes omitted.

// se_SystemEndpointAttributes omitted.

// se_TagCondition omitted.

// se_TagFilter omitted.

// se_Tags omitted.

// se_TextFullAIPromptEditTemplateConfiguration omitted.

// se_TextMessage omitted.

// se_UrlConfiguration omitted.

// se_UrlFilterList omitted.

// se_VectorIngestionConfiguration omitted.

// se_WebCrawlerConfiguration omitted.

// se_WebCrawlerLimits omitted.

// de_AgentAttributes omitted.

/**
 * deserializeAws_restJson1AIAgentConfiguration
 */
const de_AIAgentConfiguration = (output: any, context: __SerdeContext): AIAgentConfiguration => {
  if (output.answerRecommendationAIAgentConfiguration != null) {
    return {
      answerRecommendationAIAgentConfiguration: _json(output.answerRecommendationAIAgentConfiguration),
    };
  }
  if (output.manualSearchAIAgentConfiguration != null) {
    return {
      manualSearchAIAgentConfiguration: _json(output.manualSearchAIAgentConfiguration),
    };
  }
  if (output.selfServiceAIAgentConfiguration != null) {
    return {
      selfServiceAIAgentConfiguration: _json(output.selfServiceAIAgentConfiguration),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_AIAgentConfigurationData omitted.

// de_AIAgentConfigurationMap omitted.

/**
 * deserializeAws_restJson1AIAgentData
 */
const de_AIAgentData = (output: any, context: __SerdeContext): AIAgentData => {
  return take(output, {
    aiAgentArn: __expectString,
    aiAgentId: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    configuration: (_: any) => de_AIAgentConfiguration(__expectUnion(_), context),
    description: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    origin: __expectString,
    status: __expectString,
    tags: _json,
    type: __expectString,
    visibilityStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AIAgentSummary
 */
const de_AIAgentSummary = (output: any, context: __SerdeContext): AIAgentSummary => {
  return take(output, {
    aiAgentArn: __expectString,
    aiAgentId: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    configuration: (_: any) => de_AIAgentConfiguration(__expectUnion(_), context),
    description: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    origin: __expectString,
    status: __expectString,
    tags: _json,
    type: __expectString,
    visibilityStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AIAgentSummaryList
 */
const de_AIAgentSummaryList = (output: any, context: __SerdeContext): AIAgentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIAgentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AIAgentVersionSummariesList
 */
const de_AIAgentVersionSummariesList = (output: any, context: __SerdeContext): AIAgentVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIAgentVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AIAgentVersionSummary
 */
const de_AIAgentVersionSummary = (output: any, context: __SerdeContext): AIAgentVersionSummary => {
  return take(output, {
    aiAgentSummary: (_: any) => de_AIAgentSummary(_, context),
    versionNumber: __expectLong,
  }) as any;
};

// de_AIGuardrailContentPolicyConfig omitted.

/**
 * deserializeAws_restJson1AIGuardrailContextualGroundingPolicyConfig
 */
const de_AIGuardrailContextualGroundingPolicyConfig = (
  output: any,
  context: __SerdeContext
): AIGuardrailContextualGroundingPolicyConfig => {
  return take(output, {
    filtersConfig: (_: any) => de_GuardrailContextualGroundingFiltersConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AIGuardrailData
 */
const de_AIGuardrailData = (output: any, context: __SerdeContext): AIGuardrailData => {
  return take(output, {
    aiGuardrailArn: __expectString,
    aiGuardrailId: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    blockedInputMessaging: __expectString,
    blockedOutputsMessaging: __expectString,
    contentPolicyConfig: _json,
    contextualGroundingPolicyConfig: (_: any) => de_AIGuardrailContextualGroundingPolicyConfig(_, context),
    description: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    sensitiveInformationPolicyConfig: _json,
    status: __expectString,
    tags: _json,
    topicPolicyConfig: _json,
    visibilityStatus: __expectString,
    wordPolicyConfig: _json,
  }) as any;
};

// de_AIGuardrailSensitiveInformationPolicyConfig omitted.

/**
 * deserializeAws_restJson1AIGuardrailSummariesList
 */
const de_AIGuardrailSummariesList = (output: any, context: __SerdeContext): AIGuardrailSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIGuardrailSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AIGuardrailSummary
 */
const de_AIGuardrailSummary = (output: any, context: __SerdeContext): AIGuardrailSummary => {
  return take(output, {
    aiGuardrailArn: __expectString,
    aiGuardrailId: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    description: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    tags: _json,
    visibilityStatus: __expectString,
  }) as any;
};

// de_AIGuardrailTopicPolicyConfig omitted.

/**
 * deserializeAws_restJson1AIGuardrailVersionSummariesList
 */
const de_AIGuardrailVersionSummariesList = (output: any, context: __SerdeContext): AIGuardrailVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIGuardrailVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AIGuardrailVersionSummary
 */
const de_AIGuardrailVersionSummary = (output: any, context: __SerdeContext): AIGuardrailVersionSummary => {
  return take(output, {
    aiGuardrailSummary: (_: any) => de_AIGuardrailSummary(_, context),
    versionNumber: __expectLong,
  }) as any;
};

// de_AIGuardrailWordPolicyConfig omitted.

/**
 * deserializeAws_restJson1AIPromptData
 */
const de_AIPromptData = (output: any, context: __SerdeContext): AIPromptData => {
  return take(output, {
    aiPromptArn: __expectString,
    aiPromptId: __expectString,
    apiFormat: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    description: __expectString,
    modelId: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    origin: __expectString,
    status: __expectString,
    tags: _json,
    templateConfiguration: (_: any) => _json(__expectUnion(_)),
    templateType: __expectString,
    type: __expectString,
    visibilityStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AIPromptSummary
 */
const de_AIPromptSummary = (output: any, context: __SerdeContext): AIPromptSummary => {
  return take(output, {
    aiPromptArn: __expectString,
    aiPromptId: __expectString,
    apiFormat: __expectString,
    assistantArn: __expectString,
    assistantId: __expectString,
    description: __expectString,
    modelId: __expectString,
    modifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    origin: __expectString,
    status: __expectString,
    tags: _json,
    templateType: __expectString,
    type: __expectString,
    visibilityStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AIPromptSummaryList
 */
const de_AIPromptSummaryList = (output: any, context: __SerdeContext): AIPromptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIPromptSummary(entry, context);
    });
  return retVal;
};

// de_AIPromptTemplateConfiguration omitted.

/**
 * deserializeAws_restJson1AIPromptVersionSummariesList
 */
const de_AIPromptVersionSummariesList = (output: any, context: __SerdeContext): AIPromptVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AIPromptVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AIPromptVersionSummary
 */
const de_AIPromptVersionSummary = (output: any, context: __SerdeContext): AIPromptVersionSummary => {
  return take(output, {
    aiPromptSummary: (_: any) => de_AIPromptSummary(_, context),
    versionNumber: __expectLong,
  }) as any;
};

// de_AmazonConnectGuideAssociationData omitted.

// de_AndConditions omitted.

// de_AnswerRecommendationAIAgentConfiguration omitted.

// de_AppIntegrationsConfiguration omitted.

// de_AssistantAssociationData omitted.

// de_AssistantAssociationOutputData omitted.

// de_AssistantAssociationSummary omitted.

// de_AssistantAssociationSummaryList omitted.

// de_AssistantCapabilityConfiguration omitted.

// de_AssistantData omitted.

// de_AssistantIntegrationConfiguration omitted.

// de_AssistantList omitted.

// de_AssistantSummary omitted.

// de_AssociationConfiguration omitted.

// de_AssociationConfigurationData omitted.

// de_AssociationConfigurationList omitted.

// de_BedrockFoundationModelConfigurationForParsing omitted.

// de_Channels omitted.

// de_ChunkingConfiguration omitted.

// de_CitationSpan omitted.

// de_Configuration omitted.

// de_ConnectConfiguration omitted.

// de_ContactAttributeKeys omitted.

// de_ContentAssociationContents omitted.

// de_ContentAssociationData omitted.

// de_ContentAssociationSummary omitted.

// de_ContentAssociationSummaryList omitted.

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

/**
 * deserializeAws_restJson1ContentDataDetails
 */
const de_ContentDataDetails = (output: any, context: __SerdeContext): ContentDataDetails => {
  return take(output, {
    rankingData: (_: any) => de_RankingData(_, context),
    textData: _json,
  }) as any;
};

// de_ContentFeedbackData omitted.

// de_ContentMetadata omitted.

// de_ContentReference omitted.

// de_ContentSummary omitted.

// de_ContentSummaryList omitted.

// de_ConversationState omitted.

// de_CustomAttributes omitted.

// de_CustomerProfileAttributes omitted.

/**
 * deserializeAws_restJson1DataDetails
 */
const de_DataDetails = (output: any, context: __SerdeContext): DataDetails => {
  if (output.contentData != null) {
    return {
      contentData: de_ContentDataDetails(output.contentData, context),
    };
  }
  if (output.generativeChunkData != null) {
    return {
      generativeChunkData: de_GenerativeChunkDataDetails(output.generativeChunkData, context),
    };
  }
  if (output.generativeData != null) {
    return {
      generativeData: de_GenerativeDataDetails(output.generativeData, context),
    };
  }
  if (output.intentDetectedData != null) {
    return {
      intentDetectedData: _json(output.intentDetectedData),
    };
  }
  if (output.sourceContentData != null) {
    return {
      sourceContentData: de_SourceContentDataDetails(output.sourceContentData, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_DataReference omitted.

/**
 * deserializeAws_restJson1DataSummary
 */
const de_DataSummary = (output: any, context: __SerdeContext): DataSummary => {
  return take(output, {
    details: (_: any) => de_DataDetails(__expectUnion(_), context),
    reference: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSummaryList
 */
const de_DataSummaryList = (output: any, context: __SerdeContext): DataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSummary(entry, context);
    });
  return retVal;
};

// de_Document omitted.

// de_DocumentText omitted.

// de_EmailHeader omitted.

// de_EmailHeaders omitted.

// de_EmailMessageTemplateContent omitted.

// de_EmailMessageTemplateContentBody omitted.

/**
 * deserializeAws_restJson1ExtendedMessageTemplateData
 */
const de_ExtendedMessageTemplateData = (output: any, context: __SerdeContext): ExtendedMessageTemplateData => {
  return take(output, {
    attachments: (_: any) => de_MessageTemplateAttachmentList(_, context),
    attributeTypes: _json,
    channelSubtype: __expectString,
    content: (_: any) => _json(__expectUnion(_)),
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    defaultAttributes: _json,
    description: __expectString,
    groupingConfiguration: _json,
    isActive: __expectBoolean,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    language: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    messageTemplateArn: __expectString,
    messageTemplateContentSha256: __expectString,
    messageTemplateId: __expectString,
    name: __expectString,
    tags: _json,
    versionNumber: __expectLong,
  }) as any;
};

// de_ExternalSourceConfiguration omitted.

// de_FailureReason omitted.

// de_FixedSizeChunkingConfiguration omitted.

/**
 * deserializeAws_restJson1GenerativeChunkDataDetails
 */
const de_GenerativeChunkDataDetails = (output: any, context: __SerdeContext): GenerativeChunkDataDetails => {
  return take(output, {
    completion: __expectString,
    nextChunkToken: __expectString,
    references: (_: any) => de_DataSummaryList(_, context),
  }) as any;
};

// de_GenerativeContentFeedbackData omitted.

/**
 * deserializeAws_restJson1GenerativeDataDetails
 */
const de_GenerativeDataDetails = (output: any, context: __SerdeContext): GenerativeDataDetails => {
  return take(output, {
    completion: __expectString,
    rankingData: (_: any) => de_RankingData(_, context),
    references: (_: any) => de_DataSummaryList(_, context),
  }) as any;
};

// de_GenerativeReference omitted.

// de_GroupingConfiguration omitted.

// de_GroupingValues omitted.

// de_GuardrailContentFilterConfig omitted.

// de_GuardrailContentFiltersConfig omitted.

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFilterConfig
 */
const de_GuardrailContextualGroundingFilterConfig = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilterConfig => {
  return take(output, {
    threshold: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFiltersConfig
 */
const de_GuardrailContextualGroundingFiltersConfig = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilterConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailContextualGroundingFilterConfig(entry, context);
    });
  return retVal;
};

// de_GuardrailManagedWordListsConfig omitted.

// de_GuardrailManagedWordsConfig omitted.

// de_GuardrailPiiEntitiesConfig omitted.

// de_GuardrailPiiEntityConfig omitted.

// de_GuardrailRegexConfig omitted.

// de_GuardrailRegexesConfig omitted.

// de_GuardrailTopicConfig omitted.

// de_GuardrailTopicExamples omitted.

// de_GuardrailTopicsConfig omitted.

// de_GuardrailWordConfig omitted.

// de_GuardrailWordsConfig omitted.

// de_Headers omitted.

// de_HierarchicalChunkingConfiguration omitted.

// de_HierarchicalChunkingLevelConfiguration omitted.

// de_HierarchicalChunkingLevelConfigurations omitted.

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

// de_IntentDetectedDataDetails omitted.

// de_KnowledgeBaseAssociationConfigurationData omitted.

// de_KnowledgeBaseAssociationData omitted.

/**
 * deserializeAws_restJson1KnowledgeBaseData
 */
const de_KnowledgeBaseData = (output: any, context: __SerdeContext): KnowledgeBaseData => {
  return take(output, {
    description: __expectString,
    ingestionFailureReasons: _json,
    ingestionStatus: __expectString,
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
    vectorIngestionConfiguration: _json,
  }) as any;
};

// de_KnowledgeBaseList omitted.

// de_KnowledgeBaseSummary omitted.

// de_ManagedSourceConfiguration omitted.

// de_ManualSearchAIAgentConfiguration omitted.

// de_MessageConfiguration omitted.

// de_MessageData omitted.

/**
 * deserializeAws_restJson1MessageList
 */
const de_MessageList = (output: any, context: __SerdeContext): MessageOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MessageOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MessageOutput
 */
const de_MessageOutput = (output: any, context: __SerdeContext): MessageOutput => {
  return take(output, {
    messageId: __expectString,
    participant: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    value: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MessageTemplateAttachment
 */
const de_MessageTemplateAttachment = (output: any, context: __SerdeContext): MessageTemplateAttachment => {
  return take(output, {
    attachmentId: __expectString,
    contentDisposition: __expectString,
    name: __expectString,
    uploadedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    url: __expectString,
    urlExpiry: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MessageTemplateAttachmentList
 */
const de_MessageTemplateAttachmentList = (output: any, context: __SerdeContext): MessageTemplateAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MessageTemplateAttachment(entry, context);
    });
  return retVal;
};

// de_MessageTemplateAttributeKeyList omitted.

// de_MessageTemplateAttributes omitted.

// de_MessageTemplateAttributeTypeList omitted.

// de_MessageTemplateBodyContentProvider omitted.

// de_MessageTemplateContentProvider omitted.

/**
 * deserializeAws_restJson1MessageTemplateData
 */
const de_MessageTemplateData = (output: any, context: __SerdeContext): MessageTemplateData => {
  return take(output, {
    attributeTypes: _json,
    channelSubtype: __expectString,
    content: (_: any) => _json(__expectUnion(_)),
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    defaultAttributes: _json,
    description: __expectString,
    groupingConfiguration: _json,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    language: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    messageTemplateArn: __expectString,
    messageTemplateContentSha256: __expectString,
    messageTemplateId: __expectString,
    name: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MessageTemplateSearchResultData
 */
const de_MessageTemplateSearchResultData = (output: any, context: __SerdeContext): MessageTemplateSearchResultData => {
  return take(output, {
    channelSubtype: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    groupingConfiguration: _json,
    isActive: __expectBoolean,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    language: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    messageTemplateArn: __expectString,
    messageTemplateId: __expectString,
    name: __expectString,
    tags: _json,
    versionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1MessageTemplateSearchResultsList
 */
const de_MessageTemplateSearchResultsList = (
  output: any,
  context: __SerdeContext
): MessageTemplateSearchResultData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MessageTemplateSearchResultData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MessageTemplateSummary
 */
const de_MessageTemplateSummary = (output: any, context: __SerdeContext): MessageTemplateSummary => {
  return take(output, {
    activeVersionNumber: __expectLong,
    channelSubtype: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    knowledgeBaseArn: __expectString,
    knowledgeBaseId: __expectString,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    messageTemplateArn: __expectString,
    messageTemplateId: __expectString,
    name: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1MessageTemplateSummaryList
 */
const de_MessageTemplateSummaryList = (output: any, context: __SerdeContext): MessageTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MessageTemplateSummary(entry, context);
    });
  return retVal;
};

// de_MessageTemplateVersionSummary omitted.

// de_MessageTemplateVersionSummaryList omitted.

// de_NotifyRecommendationsReceivedError omitted.

// de_NotifyRecommendationsReceivedErrorList omitted.

// de_ObjectFieldsList omitted.

// de_OrCondition omitted.

// de_OrConditions omitted.

// de_ParsingConfiguration omitted.

// de_ParsingPrompt omitted.

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
 * deserializeAws_restJson1RankingData
 */
const de_RankingData = (output: any, context: __SerdeContext): RankingData => {
  return take(output, {
    relevanceLevel: __expectString,
    relevanceScore: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RecommendationData
 */
const de_RecommendationData = (output: any, context: __SerdeContext): RecommendationData => {
  return take(output, {
    data: (_: any) => de_DataSummary(_, context),
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
    data: (_: any) => de_DataSummary(_, context),
    document: _json,
    relevanceScore: __limitedParseDouble,
    resultId: __expectString,
    type: __expectString,
  }) as any;
};

// de_RuntimeSessionData omitted.

// de_RuntimeSessionDataList omitted.

// de_RuntimeSessionDataValue omitted.

// de_SeedUrl omitted.

// de_SeedUrls omitted.

// de_SelfServiceAIAgentConfiguration omitted.

// de_SemanticChunkingConfiguration omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_SessionData omitted.

// de_SessionIntegrationConfiguration omitted.

// de_SessionSummaries omitted.

// de_SessionSummary omitted.

// de_SMSMessageTemplateContent omitted.

// de_SMSMessageTemplateContentBody omitted.

// de_SourceConfiguration omitted.

/**
 * deserializeAws_restJson1SourceContentDataDetails
 */
const de_SourceContentDataDetails = (output: any, context: __SerdeContext): SourceContentDataDetails => {
  return take(output, {
    citationSpan: _json,
    id: __expectString,
    rankingData: (_: any) => de_RankingData(_, context),
    textData: _json,
    type: __expectString,
  }) as any;
};

// de_SystemAttributes omitted.

// de_SystemEndpointAttributes omitted.

// de_TagCondition omitted.

// de_TagFilter omitted.

// de_Tags omitted.

// de_TextData omitted.

// de_TextFullAIPromptEditTemplateConfiguration omitted.

// de_TextMessage omitted.

// de_UrlConfiguration omitted.

// de_UrlFilterList omitted.

// de_VectorIngestionConfiguration omitted.

// de_WebCrawlerConfiguration omitted.

// de_WebCrawlerLimits omitted.

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

const _aAT = "aiAgentType";
const _mR = "maxResults";
const _nCT = "nextChunkToken";
const _nMT = "nextMessageToken";
const _nT = "nextToken";
const _o = "origin";
const _tK = "tagKeys";
const _wTS = "waitTimeSeconds";
