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
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociatePermissionCommandInput,
  AssociatePermissionCommandOutput,
} from "../commands/AssociatePermissionCommand";
import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "../commands/BatchDeleteDocumentCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "../commands/BatchPutDocumentCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "../commands/CancelSubscriptionCommand";
import { ChatCommandInput, ChatCommandOutput } from "../commands/ChatCommand";
import { ChatSyncCommandInput, ChatSyncCommandOutput } from "../commands/ChatSyncCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateDataAccessorCommandInput, CreateDataAccessorCommandOutput } from "../commands/CreateDataAccessorCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import { CreatePluginCommandInput, CreatePluginCommandOutput } from "../commands/CreatePluginCommand";
import { CreateRetrieverCommandInput, CreateRetrieverCommandOutput } from "../commands/CreateRetrieverCommand";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "../commands/CreateSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  CreateWebExperienceCommandInput,
  CreateWebExperienceCommandOutput,
} from "../commands/CreateWebExperienceCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteChatControlsConfigurationCommandInput,
  DeleteChatControlsConfigurationCommandOutput,
} from "../commands/DeleteChatControlsConfigurationCommand";
import { DeleteConversationCommandInput, DeleteConversationCommandOutput } from "../commands/DeleteConversationCommand";
import { DeleteDataAccessorCommandInput, DeleteDataAccessorCommandOutput } from "../commands/DeleteDataAccessorCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "../commands/DeleteIndexCommand";
import { DeletePluginCommandInput, DeletePluginCommandOutput } from "../commands/DeletePluginCommand";
import { DeleteRetrieverCommandInput, DeleteRetrieverCommandOutput } from "../commands/DeleteRetrieverCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeleteWebExperienceCommandInput,
  DeleteWebExperienceCommandOutput,
} from "../commands/DeleteWebExperienceCommand";
import {
  DisassociatePermissionCommandInput,
  DisassociatePermissionCommandOutput,
} from "../commands/DisassociatePermissionCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
} from "../commands/GetChatControlsConfigurationCommand";
import { GetDataAccessorCommandInput, GetDataAccessorCommandOutput } from "../commands/GetDataAccessorCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetIndexCommandInput, GetIndexCommandOutput } from "../commands/GetIndexCommand";
import { GetMediaCommandInput, GetMediaCommandOutput } from "../commands/GetMediaCommand";
import { GetPluginCommandInput, GetPluginCommandOutput } from "../commands/GetPluginCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetRetrieverCommandInput, GetRetrieverCommandOutput } from "../commands/GetRetrieverCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetWebExperienceCommandInput, GetWebExperienceCommandOutput } from "../commands/GetWebExperienceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "../commands/ListAttachmentsCommand";
import { ListConversationsCommandInput, ListConversationsCommandOutput } from "../commands/ListConversationsCommand";
import { ListDataAccessorsCommandInput, ListDataAccessorsCommandOutput } from "../commands/ListDataAccessorsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "../commands/ListDocumentsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { ListMessagesCommandInput, ListMessagesCommandOutput } from "../commands/ListMessagesCommand";
import { ListPluginActionsCommandInput, ListPluginActionsCommandOutput } from "../commands/ListPluginActionsCommand";
import { ListPluginsCommandInput, ListPluginsCommandOutput } from "../commands/ListPluginsCommand";
import {
  ListPluginTypeActionsCommandInput,
  ListPluginTypeActionsCommandOutput,
} from "../commands/ListPluginTypeActionsCommand";
import {
  ListPluginTypeMetadataCommandInput,
  ListPluginTypeMetadataCommandOutput,
} from "../commands/ListPluginTypeMetadataCommand";
import { ListRetrieversCommandInput, ListRetrieversCommandOutput } from "../commands/ListRetrieversCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "../commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebExperiencesCommandInput, ListWebExperiencesCommandOutput } from "../commands/ListWebExperiencesCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import { PutGroupCommandInput, PutGroupCommandOutput } from "../commands/PutGroupCommand";
import {
  SearchRelevantContentCommandInput,
  SearchRelevantContentCommandOutput,
} from "../commands/SearchRelevantContentCommand";
import {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "../commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "../commands/StopDataSourceSyncJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateChatControlsConfigurationCommandInput,
  UpdateChatControlsConfigurationCommandOutput,
} from "../commands/UpdateChatControlsConfigurationCommand";
import { UpdateDataAccessorCommandInput, UpdateDataAccessorCommandOutput } from "../commands/UpdateDataAccessorCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "../commands/UpdateIndexCommand";
import { UpdatePluginCommandInput, UpdatePluginCommandOutput } from "../commands/UpdatePluginCommand";
import { UpdateRetrieverCommandInput, UpdateRetrieverCommandOutput } from "../commands/UpdateRetrieverCommand";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "../commands/UpdateSubscriptionCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  UpdateWebExperienceCommandInput,
  UpdateWebExperienceCommandOutput,
} from "../commands/UpdateWebExperienceCommand";
import {
  AccessConfiguration,
  AccessControl,
  AccessDeniedException,
  ActionExecution,
  ActionExecutionEvent,
  ActionExecutionPayloadField,
  ActionReview,
  ActionReviewEvent,
  ActionReviewPayloadField,
  ActionReviewPayloadFieldAllowedValue,
  APISchema,
  Application,
  Attachment,
  AttachmentInput,
  AttachmentInputEvent,
  AttachmentsConfiguration,
  AuthChallengeRequestEvent,
  AuthChallengeResponse,
  AuthChallengeResponseEvent,
  AutoSubscriptionConfiguration,
  BasicAuthConfiguration,
  BlockedPhrasesConfigurationUpdate,
  BrowserExtension,
  BrowserExtensionConfiguration,
  ChatModeConfiguration,
  ChatOutputStream,
  ConflictException,
  ContentBlockerRule,
  ContentRetrievalRule,
  ContentSource,
  Conversation,
  ConversationSource,
  CopyFromSource,
  CreatorModeConfiguration,
  CustomizationConfiguration,
  CustomPluginConfiguration,
  DataAccessor,
  DataSource,
  DataSourceSyncJob,
  DataSourceVpcConfiguration,
  DateAttributeBoostingConfiguration,
  DeleteDocument,
  Document,
  DocumentAttribute,
  DocumentAttributeBoostingConfiguration,
  DocumentAttributeCondition,
  DocumentAttributeConfiguration,
  DocumentAttributeTarget,
  DocumentAttributeValue,
  DocumentContent,
  DocumentDetails,
  DocumentEnrichmentConfiguration,
  EligibleDataSource,
  EncryptionConfiguration,
  EndOfInputEvent,
  ExternalResourceException,
  FailedAttachmentEvent,
  GroupStatusDetail,
  HookConfiguration,
  IdcAuthConfiguration,
  IdentityProviderConfiguration,
  ImageExtractionConfiguration,
  Index,
  IndexCapacityConfiguration,
  InlineDocumentEnrichmentConfiguration,
  InternalServerException,
  KendraIndexConfiguration,
  LicenseNotFoundException,
  MediaExtractionConfiguration,
  MediaTooLargeException,
  MemberGroup,
  Message,
  MessageUsefulnessFeedback,
  MetadataEvent,
  NativeIndexConfiguration,
  NoAuthConfiguration,
  NumberAttributeBoostingConfiguration,
  OAuth2ClientCredentialConfiguration,
  OpenIDConnectProviderConfiguration,
  PersonalizationConfiguration,
  Plugin,
  PluginAuthConfiguration,
  PluginConfiguration,
  Principal,
  PrincipalGroup,
  PrincipalUser,
  QAppsConfiguration,
  QuickSightConfiguration,
  ResourceNotFoundException,
  RetrieverConfiguration,
  RetrieverContentSource,
  Rule,
  RuleConfiguration,
  S3,
  SamlConfiguration,
  SamlProviderConfiguration,
  ServiceQuotaExceededException,
  SourceAttribution,
  StringAttributeBoostingConfiguration,
  StringAttributeValueBoostingLevel,
  StringListAttributeBoostingConfiguration,
  SubscriptionPrincipal,
  Tag,
  TextInputEvent,
  TextOutputEvent,
  ThrottlingException,
  TopicConfiguration,
  UserAlias,
  UsersAndGroups,
  ValidationException,
  WebExperience,
  WebExperienceAuthConfiguration,
} from "../models/models_0";
import {
  ActionConfiguration,
  ActionFilterConfiguration,
  AttributeFilter,
  ChatInputStream,
  ConfigurationEvent,
  GroupMembers,
  MemberUser,
  RelevantContent,
} from "../models/models_1";
import { QBusinessServiceException as __BaseException } from "../models/QBusinessServiceException";

/**
 * serializeAws_restJson1AssociatePermissionCommand
 */
export const se_AssociatePermissionCommand = async (
  input: AssociatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/policy");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      principal: [],
      statementId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteDocumentCommand
 */
export const se_BatchDeleteDocumentCommand = async (
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}/documents/delete");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataSourceSyncId: [],
      documents: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutDocumentCommand
 */
export const se_BatchPutDocumentCommand = async (
  input: BatchPutDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}/documents");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataSourceSyncId: [],
      documents: (_) => se_Documents(_, context),
      roleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSubscriptionCommand
 */
export const se_CancelSubscriptionCommand = async (
  input: CancelSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/subscriptions/{subscriptionId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("subscriptionId", () => input.subscriptionId!, "{subscriptionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ChatCommand
 */
export const se_ChatCommand = async (
  input: ChatCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/conversations");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
    [_uG]: [() => input.userGroups !== void 0, () => input[_uG]! || []],
    [_cI]: [, input[_cI]!],
    [_pMI]: [, input[_pMI]!],
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.inputStream !== undefined) {
    body = se_ChatInputStream(input.inputStream, context);
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ChatSyncCommand
 */
export const se_ChatSyncCommand = async (
  input: ChatSyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/conversations");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_s]: [, ""],
    [_uI]: [, input[_uI]!],
    [_uG]: [() => input.userGroups !== void 0, () => input[_uG]! || []],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionExecution: (_) => se_ActionExecution(_, context),
      attachments: (_) => se_AttachmentsInput(_, context),
      attributeFilter: (_) => se_AttributeFilter(_, context),
      authChallengeResponse: (_) => _json(_),
      chatMode: [],
      chatModeConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      conversationId: [],
      parentMessageId: [],
      userMessage: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attachmentsConfiguration: (_) => _json(_),
      clientIdsForOIDC: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      displayName: [],
      encryptionConfiguration: (_) => _json(_),
      iamIdentityProviderArn: [],
      identityCenterInstanceArn: [],
      identityType: [],
      personalizationConfiguration: (_) => _json(_),
      qAppsConfiguration: (_) => _json(_),
      quickSightConfiguration: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataAccessorCommand
 */
export const se_CreateDataAccessorCommand = async (
  input: CreateDataAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/dataaccessors");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionConfigurations: (_) => se_ActionConfigurationList(_, context),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      displayName: [],
      principal: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => se_DataSourceConfiguration(_, context),
      description: [],
      displayName: [],
      documentEnrichmentConfiguration: (_) => se_DocumentEnrichmentConfiguration(_, context),
      mediaExtractionConfiguration: (_) => _json(_),
      roleArn: [],
      syncSchedule: [],
      tags: (_) => _json(_),
      vpcConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIndexCommand
 */
export const se_CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capacityConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      displayName: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePluginCommand
 */
export const se_CreatePluginCommand = async (
  input: CreatePluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/plugins");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customPluginConfiguration: (_) => _json(_),
      displayName: [],
      serverUrl: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRetrieverCommand
 */
export const se_CreateRetrieverCommand = async (
  input: CreateRetrieverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/retrievers");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configuration: (_) => _json(_),
      displayName: [],
      roleArn: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriptionCommand
 */
export const se_CreateSubscriptionCommand = async (
  input: CreateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/subscriptions");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      principal: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/users");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      userAliases: (_) => _json(_),
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWebExperienceCommand
 */
export const se_CreateWebExperienceCommand = async (
  input: CreateWebExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/experiences");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      browserExtensionConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customizationConfiguration: (_) => _json(_),
      identityProviderConfiguration: (_) => _json(_),
      origins: (_) => _json(_),
      roleArn: [],
      samplePromptsControlMode: [],
      subtitle: [],
      tags: (_) => _json(_),
      title: [],
      welcomeMessage: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChatControlsConfigurationCommand
 */
export const se_DeleteChatControlsConfigurationCommand = async (
  input: DeleteChatControlsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/chatcontrols");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConversationCommand
 */
export const se_DeleteConversationCommand = async (
  input: DeleteConversationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/conversations/{conversationId}");
  b.p("conversationId", () => input.conversationId!, "{conversationId}", false);
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataAccessorCommand
 */
export const se_DeleteDataAccessorCommand = async (
  input: DeleteDataAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/dataaccessors/{dataAccessorId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("dataAccessorId", () => input.dataAccessorId!, "{dataAccessorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/groups/{groupName}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  b.p("groupName", () => input.groupName!, "{groupName}", false);
  const query: any = map({
    [_dSI]: [, input[_dSI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIndexCommand
 */
export const se_DeleteIndexCommand = async (
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePluginCommand
 */
export const se_DeletePluginCommand = async (
  input: DeletePluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/plugins/{pluginId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("pluginId", () => input.pluginId!, "{pluginId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRetrieverCommand
 */
export const se_DeleteRetrieverCommand = async (
  input: DeleteRetrieverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/retrievers/{retrieverId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("retrieverId", () => input.retrieverId!, "{retrieverId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/users/{userId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWebExperienceCommand
 */
export const se_DeleteWebExperienceCommand = async (
  input: DeleteWebExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/experiences/{webExperienceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("webExperienceId", () => input.webExperienceId!, "{webExperienceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociatePermissionCommand
 */
export const se_DisassociatePermissionCommand = async (
  input: DisassociatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/policy/{statementId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("statementId", () => input.statementId!, "{statementId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChatControlsConfigurationCommand
 */
export const se_GetChatControlsConfigurationCommand = async (
  input: GetChatControlsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/chatcontrols");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataAccessorCommand
 */
export const se_GetDataAccessorCommand = async (
  input: GetDataAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/dataaccessors/{dataAccessorId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("dataAccessorId", () => input.dataAccessorId!, "{dataAccessorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/groups/{groupName}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  b.p("groupName", () => input.groupName!, "{groupName}", false);
  const query: any = map({
    [_dSI]: [, input[_dSI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIndexCommand
 */
export const se_GetIndexCommand = async (
  input: GetIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaCommand
 */
export const se_GetMediaCommand = async (
  input: GetMediaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/media/{mediaId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("conversationId", () => input.conversationId!, "{conversationId}", false);
  b.p("messageId", () => input.messageId!, "{messageId}", false);
  b.p("mediaId", () => input.mediaId!, "{mediaId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPluginCommand
 */
export const se_GetPluginCommand = async (
  input: GetPluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/plugins/{pluginId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("pluginId", () => input.pluginId!, "{pluginId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/policy");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRetrieverCommand
 */
export const se_GetRetrieverCommand = async (
  input: GetRetrieverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/retrievers/{retrieverId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("retrieverId", () => input.retrieverId!, "{retrieverId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/users/{userId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWebExperienceCommand
 */
export const se_GetWebExperienceCommand = async (
  input: GetWebExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/experiences/{webExperienceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("webExperienceId", () => input.webExperienceId!, "{webExperienceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttachmentsCommand
 */
export const se_ListAttachmentsCommand = async (
  input: ListAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/attachments");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_cI]: [, input[_cI]!],
    [_uI]: [, input[_uI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConversationsCommand
 */
export const se_ListConversationsCommand = async (
  input: ListConversationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/conversations");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataAccessorsCommand
 */
export const se_ListDataAccessorsCommand = async (
  input: ListDataAccessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/dataaccessors");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourceSyncJobsCommand
 */
export const se_ListDataSourceSyncJobsCommand = async (
  input: ListDataSourceSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs");
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_sS]: [, input[_sF]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDocumentsCommand
 */
export const se_ListDocumentsCommand = async (
  input: ListDocumentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/index/{indexId}/documents");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  const query: any = map({
    [_dSIa]: [() => input.dataSourceIds !== void 0, () => input[_dSIa]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/groups");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  const query: any = map({
    [_uET]: [
      __expectNonNull(input.updatedEarlierThan, `updatedEarlierThan`) != null,
      () => __serializeDateTime(input[_uET]!).toString(),
    ],
    [_dSI]: [, input[_dSI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIndicesCommand
 */
export const se_ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
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
  b.bp("/applications/{applicationId}/conversations/{conversationId}");
  b.p("conversationId", () => input.conversationId!, "{conversationId}", false);
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPluginActionsCommand
 */
export const se_ListPluginActionsCommand = async (
  input: ListPluginActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/plugins/{pluginId}/actions");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("pluginId", () => input.pluginId!, "{pluginId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPluginsCommand
 */
export const se_ListPluginsCommand = async (
  input: ListPluginsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/plugins");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPluginTypeActionsCommand
 */
export const se_ListPluginTypeActionsCommand = async (
  input: ListPluginTypeActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/pluginTypes/{pluginType}/actions");
  b.p("pluginType", () => input.pluginType!, "{pluginType}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPluginTypeMetadataCommand
 */
export const se_ListPluginTypeMetadataCommand = async (
  input: ListPluginTypeMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/pluginTypeMetadata");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRetrieversCommand
 */
export const se_ListRetrieversCommand = async (
  input: ListRetrieversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/retrievers");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscriptionsCommand
 */
export const se_ListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/subscriptions");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
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
  b.bp("/v1/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWebExperiencesCommand
 */
export const se_ListWebExperiencesCommand = async (
  input: ListWebExperiencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/experiences");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/applications/{applicationId}/conversations/{conversationId}/messages/{messageId}/feedback");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("conversationId", () => input.conversationId!, "{conversationId}", false);
  b.p("messageId", () => input.messageId!, "{messageId}", false);
  const query: any = map({
    [_uI]: [, input[_uI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      messageCopiedAt: (_) => _.getTime() / 1_000,
      messageUsefulness: (_) => se_MessageUsefulnessFeedback(_, context),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutGroupCommand
 */
export const se_PutGroupCommand = async (
  input: PutGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}/groups");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataSourceId: [],
      groupMembers: (_) => _json(_),
      groupName: [],
      roleArn: [],
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchRelevantContentCommand
 */
export const se_SearchRelevantContentCommand = async (
  input: SearchRelevantContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/relevant-content");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributeFilter: (_) => se_AttributeFilter(_, context),
      contentSource: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      queryText: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDataSourceSyncJobCommand
 */
export const se_StartDataSourceSyncJobCommand = async (
  input: StartDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync");
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopDataSourceSyncJobCommand
 */
export const se_StopDataSourceSyncJobCommand = async (
  input: StopDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/stopsync");
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
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
  b.bp("/v1/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
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
  b.bp("/v1/tags/{resourceARN}");
  b.p("resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attachmentsConfiguration: (_) => _json(_),
      autoSubscriptionConfiguration: (_) => _json(_),
      description: [],
      displayName: [],
      identityCenterInstanceArn: [],
      personalizationConfiguration: (_) => _json(_),
      qAppsConfiguration: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChatControlsConfigurationCommand
 */
export const se_UpdateChatControlsConfigurationCommand = async (
  input: UpdateChatControlsConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/chatcontrols");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedPhrasesConfigurationUpdate: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      creatorModeConfiguration: (_) => _json(_),
      responseScope: [],
      topicConfigurationsToCreateOrUpdate: (_) => _json(_),
      topicConfigurationsToDelete: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataAccessorCommand
 */
export const se_UpdateDataAccessorCommand = async (
  input: UpdateDataAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/dataaccessors/{dataAccessorId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("dataAccessorId", () => input.dataAccessorId!, "{dataAccessorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionConfigurations: (_) => se_ActionConfigurationList(_, context),
      displayName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => se_DataSourceConfiguration(_, context),
      description: [],
      displayName: [],
      documentEnrichmentConfiguration: (_) => se_DocumentEnrichmentConfiguration(_, context),
      mediaExtractionConfiguration: (_) => _json(_),
      roleArn: [],
      syncSchedule: [],
      vpcConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIndexCommand
 */
export const se_UpdateIndexCommand = async (
  input: UpdateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/indices/{indexId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("indexId", () => input.indexId!, "{indexId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capacityConfiguration: (_) => _json(_),
      description: [],
      displayName: [],
      documentAttributeConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePluginCommand
 */
export const se_UpdatePluginCommand = async (
  input: UpdatePluginCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/plugins/{pluginId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("pluginId", () => input.pluginId!, "{pluginId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authConfiguration: (_) => _json(_),
      customPluginConfiguration: (_) => _json(_),
      displayName: [],
      serverUrl: [],
      state: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRetrieverCommand
 */
export const se_UpdateRetrieverCommand = async (
  input: UpdateRetrieverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/retrievers/{retrieverId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("retrieverId", () => input.retrieverId!, "{retrieverId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
      displayName: [],
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriptionCommand
 */
export const se_UpdateSubscriptionCommand = async (
  input: UpdateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/subscriptions/{subscriptionId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("subscriptionId", () => input.subscriptionId!, "{subscriptionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      type: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/users/{userId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("userId", () => input.userId!, "{userId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      userAliasesToDelete: (_) => _json(_),
      userAliasesToUpdate: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWebExperienceCommand
 */
export const se_UpdateWebExperienceCommand = async (
  input: UpdateWebExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/applications/{applicationId}/experiences/{webExperienceId}");
  b.p("applicationId", () => input.applicationId!, "{applicationId}", false);
  b.p("webExperienceId", () => input.webExperienceId!, "{webExperienceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authenticationConfiguration: (_) => _json(_),
      browserExtensionConfiguration: (_) => _json(_),
      customizationConfiguration: (_) => _json(_),
      identityProviderConfiguration: (_) => _json(_),
      origins: (_) => _json(_),
      roleArn: [],
      samplePromptsControlMode: [],
      subtitle: [],
      title: [],
      welcomeMessage: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociatePermissionCommand
 */
export const de_AssociatePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    statement: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDocumentCommand
 */
export const de_BatchDeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedDocuments: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutDocumentCommand
 */
export const de_BatchPutDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedDocuments: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSubscriptionCommand
 */
export const de_CancelSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentSubscription: _json,
    nextSubscription: _json,
    subscriptionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ChatCommand
 */
export const de_ChatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<ChatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  contents.outputStream = de_ChatOutputStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ChatSyncCommand
 */
export const de_ChatSyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChatSyncCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionReview: (_) => de_ActionReview(_, context),
    authChallengeRequest: _json,
    conversationId: __expectString,
    failedAttachments: _json,
    sourceAttributions: (_) => de_SourceAttributions(_, context),
    systemMessage: __expectString,
    systemMessageId: __expectString,
    userMessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    applicationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataAccessorCommand
 */
export const de_CreateDataAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataAccessorArn: __expectString,
    dataAccessorId: __expectString,
    idcApplicationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSourceArn: __expectString,
    dataSourceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIndexCommand
 */
export const de_CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexArn: __expectString,
    indexId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePluginCommand
 */
export const de_CreatePluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    buildStatus: __expectString,
    pluginArn: __expectString,
    pluginId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRetrieverCommand
 */
export const de_CreateRetrieverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRetrieverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    retrieverArn: __expectString,
    retrieverId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriptionCommand
 */
export const de_CreateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentSubscription: _json,
    nextSubscription: _json,
    subscriptionArn: __expectString,
    subscriptionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
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
 * deserializeAws_restJson1CreateWebExperienceCommand
 */
export const de_CreateWebExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebExperienceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    webExperienceArn: __expectString,
    webExperienceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChatControlsConfigurationCommand
 */
export const de_DeleteChatControlsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChatControlsConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConversationCommand
 */
export const de_DeleteConversationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConversationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataAccessorCommand
 */
export const de_DeleteDataAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataAccessorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIndexCommand
 */
export const de_DeleteIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> => {
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
 * deserializeAws_restJson1DeletePluginCommand
 */
export const de_DeletePluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePluginCommandOutput> => {
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
 * deserializeAws_restJson1DeleteRetrieverCommand
 */
export const de_DeleteRetrieverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetrieverCommandOutput> => {
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
 * deserializeAws_restJson1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
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
 * deserializeAws_restJson1DeleteWebExperienceCommand
 */
export const de_DeleteWebExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebExperienceCommandOutput> => {
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
 * deserializeAws_restJson1DisassociatePermissionCommand
 */
export const de_DisassociatePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePermissionCommandOutput> => {
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
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationArn: __expectString,
    applicationId: __expectString,
    attachmentsConfiguration: _json,
    autoSubscriptionConfiguration: _json,
    clientIdsForOIDC: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    encryptionConfiguration: _json,
    error: _json,
    iamIdentityProviderArn: __expectString,
    identityCenterApplicationArn: __expectString,
    identityType: __expectString,
    personalizationConfiguration: _json,
    qAppsConfiguration: _json,
    quickSightConfiguration: _json,
    roleArn: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetChatControlsConfigurationCommand
 */
export const de_GetChatControlsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChatControlsConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blockedPhrases: _json,
    creatorModeConfiguration: _json,
    nextToken: __expectString,
    responseScope: __expectString,
    topicConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataAccessorCommand
 */
export const de_GetDataAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionConfigurations: (_) => de_ActionConfigurationList(_, context),
    applicationId: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataAccessorArn: __expectString,
    dataAccessorId: __expectString,
    displayName: __expectString,
    idcApplicationArn: __expectString,
    principal: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    configuration: (_) => de_DataSourceConfiguration(_, context),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSourceArn: __expectString,
    dataSourceId: __expectString,
    description: __expectString,
    displayName: __expectString,
    documentEnrichmentConfiguration: (_) => de_DocumentEnrichmentConfiguration(_, context),
    error: _json,
    indexId: __expectString,
    mediaExtractionConfiguration: _json,
    roleArn: __expectString,
    status: __expectString,
    syncSchedule: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vpcConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: (_) => de_GroupStatusDetail(_, context),
    statusHistory: (_) => de_GroupStatusDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIndexCommand
 */
export const de_GetIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    capacityConfiguration: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    documentAttributeConfigurations: _json,
    error: _json,
    indexArn: __expectString,
    indexId: __expectString,
    indexStatistics: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaCommand
 */
export const de_GetMediaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    mediaBytes: context.base64Decoder,
    mediaMimeType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPluginCommand
 */
export const de_GetPluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPluginCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    authConfiguration: (_) => _json(__expectUnion(_)),
    buildStatus: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customPluginConfiguration: _json,
    displayName: __expectString,
    pluginArn: __expectString,
    pluginId: __expectString,
    serverUrl: __expectString,
    state: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRetrieverCommand
 */
export const de_GetRetrieverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetrieverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    configuration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    retrieverArn: __expectString,
    retrieverId: __expectString,
    roleArn: __expectString,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAliases: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWebExperienceCommand
 */
export const de_GetWebExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWebExperienceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationId: __expectString,
    authenticationConfiguration: (_) => _json(__expectUnion(_)),
    browserExtensionConfiguration: _json,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customizationConfiguration: _json,
    defaultEndpoint: __expectString,
    error: _json,
    identityProviderConfiguration: (_) => _json(__expectUnion(_)),
    origins: _json,
    roleArn: __expectString,
    samplePromptsControlMode: __expectString,
    status: __expectString,
    subtitle: __expectString,
    title: __expectString,
    updatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    webExperienceArn: __expectString,
    webExperienceId: __expectString,
    welcomeMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applications: (_) => de_Applications(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttachmentsCommand
 */
export const de_ListAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachments: (_) => de_AttachmentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConversationsCommand
 */
export const de_ListConversationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConversationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    conversations: (_) => de_Conversations(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataAccessorsCommand
 */
export const de_ListDataAccessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataAccessorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataAccessors: (_) => de_DataAccessors(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSources: (_) => de_DataSources(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourceSyncJobsCommand
 */
export const de_ListDataSourceSyncJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    history: (_) => de_DataSourceSyncJobs(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDocumentsCommand
 */
export const de_ListDocumentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDocumentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    documentDetailList: (_) => de_DocumentDetailList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIndicesCommand
 */
export const de_ListIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indices: (_) => de_Indices(_, context),
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
    messages: (_) => de_Messages(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPluginActionsCommand
 */
export const de_ListPluginActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPluginsCommand
 */
export const de_ListPluginsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    plugins: (_) => de_Plugins(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPluginTypeActionsCommand
 */
export const de_ListPluginTypeActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginTypeActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPluginTypeMetadataCommand
 */
export const de_ListPluginTypeMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPluginTypeMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRetrieversCommand
 */
export const de_ListRetrieversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetrieversCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    retrievers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscriptionsCommand
 */
export const de_ListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    subscriptions: _json,
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
 * deserializeAws_restJson1ListWebExperiencesCommand
 */
export const de_ListWebExperiencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebExperiencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    webExperiences: (_) => de_WebExperiences(_, context),
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutGroupCommand
 */
export const de_PutGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupCommandOutput> => {
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
 * deserializeAws_restJson1SearchRelevantContentCommand
 */
export const de_SearchRelevantContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRelevantContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    relevantContent: (_) => de_RelevantContentList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDataSourceSyncJobCommand
 */
export const de_StartDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    executionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopDataSourceSyncJobCommand
 */
export const de_StopDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> => {
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
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateChatControlsConfigurationCommand
 */
export const de_UpdateChatControlsConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChatControlsConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDataAccessorCommand
 */
export const de_UpdateDataAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataAccessorCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateIndexCommand
 */
export const de_UpdateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> => {
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
 * deserializeAws_restJson1UpdatePluginCommand
 */
export const de_UpdatePluginCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePluginCommandOutput> => {
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
 * deserializeAws_restJson1UpdateRetrieverCommand
 */
export const de_UpdateRetrieverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRetrieverCommandOutput> => {
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
 * deserializeAws_restJson1UpdateSubscriptionCommand
 */
export const de_UpdateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentSubscription: _json,
    nextSubscription: _json,
    subscriptionArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    userAliasesAdded: _json,
    userAliasesDeleted: _json,
    userAliasesUpdated: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWebExperienceCommand
 */
export const de_UpdateWebExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebExperienceCommandOutput> => {
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
    case "com.amazonaws.qbusiness#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.qbusiness#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.qbusiness#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.qbusiness#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.qbusiness#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.qbusiness#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.qbusiness#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ExternalResourceException":
    case "com.amazonaws.qbusiness#ExternalResourceException":
      throw await de_ExternalResourceExceptionRes(parsedOutput, context);
    case "LicenseNotFoundException":
    case "com.amazonaws.qbusiness#LicenseNotFoundException":
      throw await de_LicenseNotFoundExceptionRes(parsedOutput, context);
    case "MediaTooLargeException":
    case "com.amazonaws.qbusiness#MediaTooLargeException":
      throw await de_MediaTooLargeExceptionRes(parsedOutput, context);
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ExternalResourceExceptionRes
 */
const de_ExternalResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExternalResourceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ExternalResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LicenseNotFoundExceptionRes
 */
const de_LicenseNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LicenseNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LicenseNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MediaTooLargeExceptionRes
 */
const de_MediaTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MediaTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MediaTooLargeException({
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
    resourceId: __expectString,
    resourceType: __expectString,
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
    resourceId: __expectString,
    resourceType: __expectString,
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fields: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ChatInputStream
 */
const se_ChatInputStream = (input: any, context: __SerdeContext & __EventStreamSerdeContext): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    ChatInputStream.visit(event, {
      configurationEvent: (value) => se_ConfigurationEvent_event(value, context),
      textEvent: (value) => se_TextInputEvent_event(value, context),
      attachmentEvent: (value) => se_AttachmentInputEvent_event(value, context),
      actionExecutionEvent: (value) => se_ActionExecutionEvent_event(value, context),
      endOfInputEvent: (value) => se_EndOfInputEvent_event(value, context),
      authChallengeResponseEvent: (value) => se_AuthChallengeResponseEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const se_ActionExecutionEvent_event = (input: ActionExecutionEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "actionExecutionEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_ActionExecutionEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_AttachmentInputEvent_event = (input: AttachmentInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "attachmentEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_AttachmentInputEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_AuthChallengeResponseEvent_event = (input: AuthChallengeResponseEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "authChallengeResponseEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_ConfigurationEvent_event = (input: ConfigurationEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "configurationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = se_ConfigurationEvent(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_EndOfInputEvent_event = (input: EndOfInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "endOfInputEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_TextInputEvent_event = (input: TextInputEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "textEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
/**
 * deserializeAws_restJson1ChatOutputStream
 */
const de_ChatOutputStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<ChatOutputStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["textEvent"] != null) {
      return {
        textEvent: await de_TextOutputEvent_event(event["textEvent"], context),
      };
    }
    if (event["metadataEvent"] != null) {
      return {
        metadataEvent: await de_MetadataEvent_event(event["metadataEvent"], context),
      };
    }
    if (event["actionReviewEvent"] != null) {
      return {
        actionReviewEvent: await de_ActionReviewEvent_event(event["actionReviewEvent"], context),
      };
    }
    if (event["failedAttachmentEvent"] != null) {
      return {
        failedAttachmentEvent: await de_FailedAttachmentEvent_event(event["failedAttachmentEvent"], context),
      };
    }
    if (event["authChallengeRequestEvent"] != null) {
      return {
        authChallengeRequestEvent: await de_AuthChallengeRequestEvent_event(
          event["authChallengeRequestEvent"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const de_ActionReviewEvent_event = async (output: any, context: __SerdeContext): Promise<ActionReviewEvent> => {
  const contents: ActionReviewEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_ActionReviewEvent(data, context));
  return contents;
};
const de_AuthChallengeRequestEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<AuthChallengeRequestEvent> => {
  const contents: AuthChallengeRequestEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_FailedAttachmentEvent_event = async (output: any, context: __SerdeContext): Promise<FailedAttachmentEvent> => {
  const contents: FailedAttachmentEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_MetadataEvent_event = async (output: any, context: __SerdeContext): Promise<MetadataEvent> => {
  const contents: MetadataEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_MetadataEvent(data, context));
  return contents;
};
const de_TextOutputEvent_event = async (output: any, context: __SerdeContext): Promise<TextOutputEvent> => {
  const contents: TextOutputEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
// se_AccessConfiguration omitted.

// se_AccessControl omitted.

// se_AccessControls omitted.

/**
 * serializeAws_restJson1ActionConfiguration
 */
const se_ActionConfiguration = (input: ActionConfiguration, context: __SerdeContext): any => {
  return take(input, {
    action: [],
    filterConfiguration: (_) => se_ActionFilterConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1ActionConfigurationList
 */
const se_ActionConfigurationList = (input: ActionConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ActionConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ActionExecution
 */
const se_ActionExecution = (input: ActionExecution, context: __SerdeContext): any => {
  return take(input, {
    payload: (_) => se_ActionExecutionPayload(_, context),
    payloadFieldNameSeparator: [],
    pluginId: [],
  });
};

/**
 * serializeAws_restJson1ActionExecutionEvent
 */
const se_ActionExecutionEvent = (input: ActionExecutionEvent, context: __SerdeContext): any => {
  return take(input, {
    payload: (_) => se_ActionExecutionPayload(_, context),
    payloadFieldNameSeparator: [],
    pluginId: [],
  });
};

/**
 * serializeAws_restJson1ActionExecutionPayload
 */
const se_ActionExecutionPayload = (
  input: Record<string, ActionExecutionPayloadField>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ActionExecutionPayloadField(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ActionExecutionPayloadField
 */
const se_ActionExecutionPayloadField = (input: ActionExecutionPayloadField, context: __SerdeContext): any => {
  return take(input, {
    value: (_) => se_ActionPayloadFieldValue(_, context),
  });
};

/**
 * serializeAws_restJson1ActionFilterConfiguration
 */
const se_ActionFilterConfiguration = (input: ActionFilterConfiguration, context: __SerdeContext): any => {
  return take(input, {
    documentAttributeFilter: (_) => se_AttributeFilter(_, context),
  });
};

/**
 * serializeAws_restJson1ActionPayloadFieldValue
 */
const se_ActionPayloadFieldValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_APISchema omitted.

/**
 * serializeAws_restJson1AttachmentInput
 */
const se_AttachmentInput = (input: AttachmentInput, context: __SerdeContext): any => {
  return take(input, {
    copyFrom: _json,
    data: context.base64Encoder,
    name: [],
  });
};

/**
 * serializeAws_restJson1AttachmentInputEvent
 */
const se_AttachmentInputEvent = (input: AttachmentInputEvent, context: __SerdeContext): any => {
  return take(input, {
    attachment: (_) => se_AttachmentInput(_, context),
  });
};

// se_AttachmentsConfiguration omitted.

/**
 * serializeAws_restJson1AttachmentsInput
 */
const se_AttachmentsInput = (input: AttachmentInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttachmentInput(entry, context);
    });
};

/**
 * serializeAws_restJson1AttributeFilter
 */
const se_AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return take(input, {
    andAllFilters: (_) => se_AttributeFilters(_, context),
    containsAll: (_) => se_DocumentAttribute(_, context),
    containsAny: (_) => se_DocumentAttribute(_, context),
    equalsTo: (_) => se_DocumentAttribute(_, context),
    greaterThan: (_) => se_DocumentAttribute(_, context),
    greaterThanOrEquals: (_) => se_DocumentAttribute(_, context),
    lessThan: (_) => se_DocumentAttribute(_, context),
    lessThanOrEquals: (_) => se_DocumentAttribute(_, context),
    notFilter: (_) => se_AttributeFilter(_, context),
    orAllFilters: (_) => se_AttributeFilters(_, context),
  });
};

/**
 * serializeAws_restJson1AttributeFilters
 */
const se_AttributeFilters = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeFilter(entry, context);
    });
};

// se_AuthChallengeResponse omitted.

// se_AuthChallengeResponseEvent omitted.

// se_AuthorizationResponseMap omitted.

// se_AutoSubscriptionConfiguration omitted.

// se_BasicAuthConfiguration omitted.

// se_BlockedPhrases omitted.

// se_BlockedPhrasesConfigurationUpdate omitted.

// se_BrowserExtensionConfiguration omitted.

// se_BrowserExtensionList omitted.

// se_ChatModeConfiguration omitted.

// se_ClientIdsForOIDC omitted.

/**
 * serializeAws_restJson1ConfigurationEvent
 */
const se_ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return take(input, {
    attributeFilter: (_) => se_AttributeFilter(_, context),
    chatMode: [],
    chatModeConfiguration: _json,
  });
};

// se_ContentBlockerRule omitted.

// se_ContentRetrievalRule omitted.

// se_ContentSource omitted.

// se_ConversationSource omitted.

// se_CopyFromSource omitted.

// se_CreatorModeConfiguration omitted.

// se_CustomizationConfiguration omitted.

// se_CustomPluginConfiguration omitted.

/**
 * serializeAws_restJson1DataSourceConfiguration
 */
const se_DataSourceConfiguration = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_DataSourceVpcConfiguration omitted.

// se_DateAttributeBoostingConfiguration omitted.

// se_DeleteDocument omitted.

// se_DeleteDocuments omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return take(input, {
    accessConfiguration: _json,
    attributes: (_) => se_DocumentAttributes(_, context),
    content: (_) => se_DocumentContent(_, context),
    contentType: [],
    documentEnrichmentConfiguration: (_) => se_DocumentEnrichmentConfiguration(_, context),
    id: [],
    mediaExtractionConfiguration: _json,
    title: [],
  });
};

/**
 * serializeAws_restJson1DocumentAttribute
 */
const se_DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    value: (_) => se_DocumentAttributeValue(_, context),
  });
};

// se_DocumentAttributeBoostingConfiguration omitted.

// se_DocumentAttributeBoostingOverrideMap omitted.

/**
 * serializeAws_restJson1DocumentAttributeCondition
 */
const se_DocumentAttributeCondition = (input: DocumentAttributeCondition, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    operator: [],
    value: (_) => se_DocumentAttributeValue(_, context),
  });
};

// se_DocumentAttributeConfiguration omitted.

// se_DocumentAttributeConfigurations omitted.

/**
 * serializeAws_restJson1DocumentAttributes
 */
const se_DocumentAttributes = (input: DocumentAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentAttribute(entry, context);
    });
};

// se_DocumentAttributeStringListValue omitted.

/**
 * serializeAws_restJson1DocumentAttributeTarget
 */
const se_DocumentAttributeTarget = (input: DocumentAttributeTarget, context: __SerdeContext): any => {
  return take(input, {
    attributeValueOperator: [],
    key: [],
    value: (_) => se_DocumentAttributeValue(_, context),
  });
};

/**
 * serializeAws_restJson1DocumentAttributeValue
 */
const se_DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return DocumentAttributeValue.visit(input, {
    dateValue: (value) => ({ dateValue: value.getTime() / 1_000 }),
    longValue: (value) => ({ longValue: value }),
    stringListValue: (value) => ({ stringListValue: _json(value) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DocumentContent
 */
const se_DocumentContent = (input: DocumentContent, context: __SerdeContext): any => {
  return DocumentContent.visit(input, {
    blob: (value) => ({ blob: context.base64Encoder(value) }),
    s3: (value) => ({ s3: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DocumentEnrichmentConfiguration
 */
const se_DocumentEnrichmentConfiguration = (input: DocumentEnrichmentConfiguration, context: __SerdeContext): any => {
  return take(input, {
    inlineConfigurations: (_) => se_InlineDocumentEnrichmentConfigurations(_, context),
    postExtractionHookConfiguration: (_) => se_HookConfiguration(_, context),
    preExtractionHookConfiguration: (_) => se_HookConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1Documents
 */
const se_Documents = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Document(entry, context);
    });
};

// se_EligibleDataSource omitted.

// se_EligibleDataSources omitted.

// se_EncryptionConfiguration omitted.

// se_EndOfInputEvent omitted.

// se_ExampleChatMessages omitted.

// se_GroupMembers omitted.

/**
 * serializeAws_restJson1HookConfiguration
 */
const se_HookConfiguration = (input: HookConfiguration, context: __SerdeContext): any => {
  return take(input, {
    invocationCondition: (_) => se_DocumentAttributeCondition(_, context),
    lambdaArn: [],
    roleArn: [],
    s3BucketName: [],
  });
};

// se_IdcAuthConfiguration omitted.

// se_IdentityProviderConfiguration omitted.

// se_ImageExtractionConfiguration omitted.

// se_IndexCapacityConfiguration omitted.

/**
 * serializeAws_restJson1InlineDocumentEnrichmentConfiguration
 */
const se_InlineDocumentEnrichmentConfiguration = (
  input: InlineDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    condition: (_) => se_DocumentAttributeCondition(_, context),
    documentContentOperator: [],
    target: (_) => se_DocumentAttributeTarget(_, context),
  });
};

/**
 * serializeAws_restJson1InlineDocumentEnrichmentConfigurations
 */
const se_InlineDocumentEnrichmentConfigurations = (
  input: InlineDocumentEnrichmentConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InlineDocumentEnrichmentConfiguration(entry, context);
    });
};

// se_KendraIndexConfiguration omitted.

// se_MediaExtractionConfiguration omitted.

// se_MemberGroup omitted.

// se_MemberGroups omitted.

// se_MemberUser omitted.

// se_MemberUsers omitted.

/**
 * serializeAws_restJson1MessageUsefulnessFeedback
 */
const se_MessageUsefulnessFeedback = (input: MessageUsefulnessFeedback, context: __SerdeContext): any => {
  return take(input, {
    comment: [],
    reason: [],
    submittedAt: (_) => _.getTime() / 1_000,
    usefulness: [],
  });
};

// se_NativeIndexConfiguration omitted.

// se_NoAuthConfiguration omitted.

// se_NumberAttributeBoostingConfiguration omitted.

// se_OAuth2ClientCredentialConfiguration omitted.

// se_OpenIDConnectProviderConfiguration omitted.

// se_PersonalizationConfiguration omitted.

// se_PluginAuthConfiguration omitted.

// se_PluginConfiguration omitted.

// se_Principal omitted.

// se_PrincipalGroup omitted.

// se_Principals omitted.

// se_PrincipalUser omitted.

// se_QAppsConfiguration omitted.

// se_QIamActions omitted.

// se_QuickSightConfiguration omitted.

// se_RetrieverConfiguration omitted.

// se_RetrieverContentSource omitted.

// se_Rule omitted.

// se_RuleConfiguration omitted.

// se_Rules omitted.

// se_S3 omitted.

// se_SamlConfiguration omitted.

// se_SamlProviderConfiguration omitted.

// se_SecurityGroupIds omitted.

// se_StringAttributeBoostingConfiguration omitted.

// se_StringAttributeValueBoosting omitted.

// se_StringListAttributeBoostingConfiguration omitted.

// se_SubnetIds omitted.

// se_SubscriptionPrincipal omitted.

// se_Tag omitted.

// se_Tags omitted.

// se_TextInputEvent omitted.

// se_TopicConfiguration omitted.

// se_TopicConfigurations omitted.

// se_UserAlias omitted.

// se_UserAliases omitted.

// se_UserGroups omitted.

// se_UserIds omitted.

// se_UsersAndGroups omitted.

// se_WebExperienceAuthConfiguration omitted.

// se_WebExperienceOrigins omitted.

/**
 * deserializeAws_restJson1ActionConfiguration
 */
const de_ActionConfiguration = (output: any, context: __SerdeContext): ActionConfiguration => {
  return take(output, {
    action: __expectString,
    filterConfiguration: (_: any) => de_ActionFilterConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionConfigurationList
 */
const de_ActionConfigurationList = (output: any, context: __SerdeContext): ActionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionExecution
 */
const de_ActionExecution = (output: any, context: __SerdeContext): ActionExecution => {
  return take(output, {
    payload: (_: any) => de_ActionExecutionPayload(_, context),
    payloadFieldNameSeparator: __expectString,
    pluginId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ActionExecutionPayload
 */
const de_ActionExecutionPayload = (
  output: any,
  context: __SerdeContext
): Record<string, ActionExecutionPayloadField> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ActionExecutionPayloadField>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_ActionExecutionPayloadField(value, context);
      return acc;
    },
    {} as Record<string, ActionExecutionPayloadField>
  );
};

/**
 * deserializeAws_restJson1ActionExecutionPayloadField
 */
const de_ActionExecutionPayloadField = (output: any, context: __SerdeContext): ActionExecutionPayloadField => {
  return take(output, {
    value: (_: any) => de_ActionPayloadFieldValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionFilterConfiguration
 */
const de_ActionFilterConfiguration = (output: any, context: __SerdeContext): ActionFilterConfiguration => {
  return take(output, {
    documentAttributeFilter: (_: any) => de_AttributeFilter(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionPayloadFieldValue
 */
const de_ActionPayloadFieldValue = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1ActionReview
 */
const de_ActionReview = (output: any, context: __SerdeContext): ActionReview => {
  return take(output, {
    payload: (_: any) => de_ActionReviewPayload(_, context),
    payloadFieldNameSeparator: __expectString,
    pluginId: __expectString,
    pluginType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ActionReviewEvent
 */
const de_ActionReviewEvent = (output: any, context: __SerdeContext): ActionReviewEvent => {
  return take(output, {
    conversationId: __expectString,
    payload: (_: any) => de_ActionReviewPayload(_, context),
    payloadFieldNameSeparator: __expectString,
    pluginId: __expectString,
    pluginType: __expectString,
    systemMessageId: __expectString,
    userMessageId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ActionReviewPayload
 */
const de_ActionReviewPayload = (output: any, context: __SerdeContext): Record<string, ActionReviewPayloadField> => {
  return Object.entries(output).reduce((acc: Record<string, ActionReviewPayloadField>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ActionReviewPayloadField(value, context);
    return acc;
  }, {} as Record<string, ActionReviewPayloadField>);
};

/**
 * deserializeAws_restJson1ActionReviewPayloadField
 */
const de_ActionReviewPayloadField = (output: any, context: __SerdeContext): ActionReviewPayloadField => {
  return take(output, {
    allowedFormat: __expectString,
    allowedValues: (_: any) => de_ActionReviewPayloadFieldAllowedValues(_, context),
    arrayItemJsonSchema: (_: any) => de_ActionReviewPayloadFieldArrayItemJsonSchema(_, context),
    displayDescription: __expectString,
    displayName: __expectString,
    displayOrder: __expectInt32,
    required: __expectBoolean,
    type: __expectString,
    value: (_: any) => de_ActionPayloadFieldValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionReviewPayloadFieldAllowedValue
 */
const de_ActionReviewPayloadFieldAllowedValue = (
  output: any,
  context: __SerdeContext
): ActionReviewPayloadFieldAllowedValue => {
  return take(output, {
    displayValue: (_: any) => de_ActionPayloadFieldValue(_, context),
    value: (_: any) => de_ActionPayloadFieldValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ActionReviewPayloadFieldAllowedValues
 */
const de_ActionReviewPayloadFieldAllowedValues = (
  output: any,
  context: __SerdeContext
): ActionReviewPayloadFieldAllowedValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionReviewPayloadFieldAllowedValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionReviewPayloadFieldArrayItemJsonSchema
 */
const de_ActionReviewPayloadFieldArrayItemJsonSchema = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_Actions omitted.

// de_ActionSummary omitted.

// de_APISchema omitted.

/**
 * deserializeAws_restJson1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return take(output, {
    applicationId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    identityType: __expectString,
    quickSightConfiguration: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Applications
 */
const de_Applications = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Application(entry, context);
    });
  return retVal;
};

// de_AppliedAttachmentsConfiguration omitted.

// de_AppliedCreatorModeConfiguration omitted.

/**
 * deserializeAws_restJson1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return take(output, {
    attachmentId: __expectString,
    conversationId: __expectString,
    copyFrom: (_: any) => _json(__expectUnion(_)),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    error: _json,
    fileSize: __expectInt32,
    fileType: __expectString,
    md5chksum: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AttachmentList
 */
const de_AttachmentList = (output: any, context: __SerdeContext): Attachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Attachment(entry, context);
    });
  return retVal;
};

// de_AttachmentOutput omitted.

// de_AttachmentsOutput omitted.

/**
 * deserializeAws_restJson1AttributeFilter
 */
const de_AttributeFilter = (output: any, context: __SerdeContext): AttributeFilter => {
  return take(output, {
    andAllFilters: (_: any) => de_AttributeFilters(_, context),
    containsAll: (_: any) => de_DocumentAttribute(_, context),
    containsAny: (_: any) => de_DocumentAttribute(_, context),
    equalsTo: (_: any) => de_DocumentAttribute(_, context),
    greaterThan: (_: any) => de_DocumentAttribute(_, context),
    greaterThanOrEquals: (_: any) => de_DocumentAttribute(_, context),
    lessThan: (_: any) => de_DocumentAttribute(_, context),
    lessThanOrEquals: (_: any) => de_DocumentAttribute(_, context),
    notFilter: (_: any) => de_AttributeFilter(_, context),
    orAllFilters: (_: any) => de_AttributeFilters(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AttributeFilters
 */
const de_AttributeFilters = (output: any, context: __SerdeContext): AttributeFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttributeFilter(entry, context);
    });
  return retVal;
};

// de_AuthChallengeRequest omitted.

// de_AuthChallengeRequestEvent omitted.

// de_AutoSubscriptionConfiguration omitted.

// de_BasicAuthConfiguration omitted.

// de_BlockedPhrases omitted.

// de_BlockedPhrasesConfiguration omitted.

// de_BrowserExtensionConfiguration omitted.

// de_BrowserExtensionList omitted.

// de_ClientIdsForOIDC omitted.

// de_ContentBlockerRule omitted.

// de_ContentRetrievalRule omitted.

/**
 * deserializeAws_restJson1Conversation
 */
const de_Conversation = (output: any, context: __SerdeContext): Conversation => {
  return take(output, {
    conversationId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Conversations
 */
const de_Conversations = (output: any, context: __SerdeContext): Conversation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Conversation(entry, context);
    });
  return retVal;
};

// de_ConversationSource omitted.

// de_CopyFromSource omitted.

// de_CustomizationConfiguration omitted.

// de_CustomPluginConfiguration omitted.

/**
 * deserializeAws_restJson1DataAccessor
 */
const de_DataAccessor = (output: any, context: __SerdeContext): DataAccessor => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataAccessorArn: __expectString,
    dataAccessorId: __expectString,
    displayName: __expectString,
    idcApplicationArn: __expectString,
    principal: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DataAccessors
 */
const de_DataAccessors = (output: any, context: __SerdeContext): DataAccessor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataAccessor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSourceId: __expectString,
    displayName: __expectString,
    status: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceConfiguration
 */
const de_DataSourceConfiguration = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceSyncJob
 */
const de_DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return take(output, {
    dataSourceErrorCode: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    error: _json,
    executionId: __expectString,
    metrics: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_DataSourceSyncJobMetrics omitted.

/**
 * deserializeAws_restJson1DataSourceSyncJobs
 */
const de_DataSourceSyncJobs = (output: any, context: __SerdeContext): DataSourceSyncJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSyncJob(entry, context);
    });
  return retVal;
};

// de_DataSourceVpcConfiguration omitted.

// de_DateAttributeBoostingConfiguration omitted.

/**
 * deserializeAws_restJson1DocumentAttribute
 */
const de_DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return take(output, {
    name: __expectString,
    value: (_: any) => de_DocumentAttributeValue(__expectUnion(_), context),
  }) as any;
};

// de_DocumentAttributeBoostingConfiguration omitted.

// de_DocumentAttributeBoostingOverrideMap omitted.

/**
 * deserializeAws_restJson1DocumentAttributeCondition
 */
const de_DocumentAttributeCondition = (output: any, context: __SerdeContext): DocumentAttributeCondition => {
  return take(output, {
    key: __expectString,
    operator: __expectString,
    value: (_: any) => de_DocumentAttributeValue(__expectUnion(_), context),
  }) as any;
};

// de_DocumentAttributeConfiguration omitted.

// de_DocumentAttributeConfigurations omitted.

/**
 * deserializeAws_restJson1DocumentAttributes
 */
const de_DocumentAttributes = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentAttribute(entry, context);
    });
  return retVal;
};

// de_DocumentAttributeStringListValue omitted.

/**
 * deserializeAws_restJson1DocumentAttributeTarget
 */
const de_DocumentAttributeTarget = (output: any, context: __SerdeContext): DocumentAttributeTarget => {
  return take(output, {
    attributeValueOperator: __expectString,
    key: __expectString,
    value: (_: any) => de_DocumentAttributeValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentAttributeValue
 */
const de_DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  if (output.dateValue != null) {
    return {
      dateValue: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.dateValue))),
    };
  }
  if (__expectLong(output.longValue) !== undefined) {
    return { longValue: __expectLong(output.longValue) as any };
  }
  if (output.stringListValue != null) {
    return {
      stringListValue: _json(output.stringListValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DocumentDetailList
 */
const de_DocumentDetailList = (output: any, context: __SerdeContext): DocumentDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DocumentDetails
 */
const de_DocumentDetails = (output: any, context: __SerdeContext): DocumentDetails => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    documentId: __expectString,
    error: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DocumentEnrichmentConfiguration
 */
const de_DocumentEnrichmentConfiguration = (output: any, context: __SerdeContext): DocumentEnrichmentConfiguration => {
  return take(output, {
    inlineConfigurations: (_: any) => de_InlineDocumentEnrichmentConfigurations(_, context),
    postExtractionHookConfiguration: (_: any) => de_HookConfiguration(_, context),
    preExtractionHookConfiguration: (_: any) => de_HookConfiguration(_, context),
  }) as any;
};

// de_EligibleDataSource omitted.

// de_EligibleDataSources omitted.

// de_EncryptionConfiguration omitted.

// de_ErrorDetail omitted.

// de_ExampleChatMessages omitted.

// de_FailedAttachmentEvent omitted.

// de_FailedDocument omitted.

// de_FailedDocuments omitted.

/**
 * deserializeAws_restJson1GroupStatusDetail
 */
const de_GroupStatusDetail = (output: any, context: __SerdeContext): GroupStatusDetail => {
  return take(output, {
    errorDetail: _json,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GroupStatusDetails
 */
const de_GroupStatusDetails = (output: any, context: __SerdeContext): GroupStatusDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupStatusDetail(entry, context);
    });
  return retVal;
};

// de_GroupSummary omitted.

// de_GroupSummaryList omitted.

/**
 * deserializeAws_restJson1HookConfiguration
 */
const de_HookConfiguration = (output: any, context: __SerdeContext): HookConfiguration => {
  return take(output, {
    invocationCondition: (_: any) => de_DocumentAttributeCondition(_, context),
    lambdaArn: __expectString,
    roleArn: __expectString,
    s3BucketName: __expectString,
  }) as any;
};

// de_IdcAuthConfiguration omitted.

// de_IdentityProviderConfiguration omitted.

// de_ImageExtractionConfiguration omitted.

/**
 * deserializeAws_restJson1Index
 */
const de_Index = (output: any, context: __SerdeContext): Index => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    indexId: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_IndexCapacityConfiguration omitted.

// de_IndexStatistics omitted.

/**
 * deserializeAws_restJson1Indices
 */
const de_Indices = (output: any, context: __SerdeContext): Index[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Index(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InlineDocumentEnrichmentConfiguration
 */
const de_InlineDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): InlineDocumentEnrichmentConfiguration => {
  return take(output, {
    condition: (_: any) => de_DocumentAttributeCondition(_, context),
    documentContentOperator: __expectString,
    target: (_: any) => de_DocumentAttributeTarget(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1InlineDocumentEnrichmentConfigurations
 */
const de_InlineDocumentEnrichmentConfigurations = (
  output: any,
  context: __SerdeContext
): InlineDocumentEnrichmentConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InlineDocumentEnrichmentConfiguration(entry, context);
    });
  return retVal;
};

// de_KendraIndexConfiguration omitted.

// de_ListPluginTypeMetadataSummaries omitted.

// de_MediaExtractionConfiguration omitted.

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return take(output, {
    actionExecution: (_: any) => de_ActionExecution(_, context),
    actionReview: (_: any) => de_ActionReview(_, context),
    attachments: _json,
    body: __expectString,
    messageId: __expectString,
    sourceAttribution: (_: any) => de_SourceAttributions(_, context),
    time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Messages
 */
const de_Messages = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Message(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetadataEvent
 */
const de_MetadataEvent = (output: any, context: __SerdeContext): MetadataEvent => {
  return take(output, {
    conversationId: __expectString,
    finalTextMessage: __expectString,
    sourceAttributions: (_: any) => de_SourceAttributions(_, context),
    systemMessageId: __expectString,
    userMessageId: __expectString,
  }) as any;
};

// de_NativeIndexConfiguration omitted.

// de_NoAuthConfiguration omitted.

// de_NumberAttributeBoostingConfiguration omitted.

// de_OAuth2ClientCredentialConfiguration omitted.

// de_OpenIDConnectProviderConfiguration omitted.

// de_PersonalizationConfiguration omitted.

/**
 * deserializeAws_restJson1Plugin
 */
const de_Plugin = (output: any, context: __SerdeContext): Plugin => {
  return take(output, {
    buildStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    displayName: __expectString,
    pluginId: __expectString,
    serverUrl: __expectString,
    state: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_PluginAuthConfiguration omitted.

/**
 * deserializeAws_restJson1Plugins
 */
const de_Plugins = (output: any, context: __SerdeContext): Plugin[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Plugin(entry, context);
    });
  return retVal;
};

// de_PluginTypeMetadataSummary omitted.

// de_QAppsConfiguration omitted.

// de_QuickSightConfiguration omitted.

/**
 * deserializeAws_restJson1RelevantContent
 */
const de_RelevantContent = (output: any, context: __SerdeContext): RelevantContent => {
  return take(output, {
    content: __expectString,
    documentAttributes: (_: any) => de_DocumentAttributes(_, context),
    documentId: __expectString,
    documentTitle: __expectString,
    documentUri: __expectString,
    scoreAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RelevantContentList
 */
const de_RelevantContentList = (output: any, context: __SerdeContext): RelevantContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelevantContent(entry, context);
    });
  return retVal;
};

// de_Retriever omitted.

// de_RetrieverConfiguration omitted.

// de_Retrievers omitted.

// de_Rule omitted.

// de_RuleConfiguration omitted.

// de_Rules omitted.

// de_S3 omitted.

// de_SamlConfiguration omitted.

// de_SamlProviderConfiguration omitted.

// de_ScoreAttributes omitted.

// de_SecurityGroupIds omitted.

// de_SnippetExcerpt omitted.

/**
 * deserializeAws_restJson1SourceAttribution
 */
const de_SourceAttribution = (output: any, context: __SerdeContext): SourceAttribution => {
  return take(output, {
    citationNumber: __expectInt32,
    snippet: __expectString,
    textMessageSegments: _json,
    title: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SourceAttributions
 */
const de_SourceAttributions = (output: any, context: __SerdeContext): SourceAttribution[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return de_SourceAttribution(entry, context);
  });
  return retVal;
};

// de_StringAttributeBoostingConfiguration omitted.

// de_StringAttributeValueBoosting omitted.

// de_StringListAttributeBoostingConfiguration omitted.

// de_SubnetIds omitted.

// de_Subscription omitted.

// de_SubscriptionDetails omitted.

// de_SubscriptionPrincipal omitted.

// de_Subscriptions omitted.

// de_Tag omitted.

// de_Tags omitted.

// de_TextDocumentStatistics omitted.

// de_TextOutputEvent omitted.

// de_TextSegment omitted.

// de_TextSegmentList omitted.

// de_TopicConfiguration omitted.

// de_TopicConfigurations omitted.

// de_UserAlias omitted.

// de_UserAliases omitted.

// de_UserGroups omitted.

// de_UserIds omitted.

// de_UsersAndGroups omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFields omitted.

/**
 * deserializeAws_restJson1WebExperience
 */
const de_WebExperience = (output: any, context: __SerdeContext): WebExperience => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultEndpoint: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    webExperienceId: __expectString,
  }) as any;
};

// de_WebExperienceAuthConfiguration omitted.

// de_WebExperienceOrigins omitted.

/**
 * deserializeAws_restJson1WebExperiences
 */
const de_WebExperiences = (output: any, context: __SerdeContext): WebExperience[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WebExperience(entry, context);
    });
  return retVal;
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

const _cI = "conversationId";
const _cT = "clientToken";
const _dSI = "dataSourceId";
const _dSIa = "dataSourceIds";
const _eT = "endTime";
const _mR = "maxResults";
const _nT = "nextToken";
const _pMI = "parentMessageId";
const _s = "sync";
const _sF = "statusFilter";
const _sS = "syncStatus";
const _sT = "startTime";
const _tK = "tagKeys";
const _uET = "updatedEarlierThan";
const _uG = "userGroups";
const _uI = "userId";
