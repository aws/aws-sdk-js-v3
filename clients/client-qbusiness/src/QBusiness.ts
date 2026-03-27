// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociatePermissionCommandInput,
  type AssociatePermissionCommandOutput,
  AssociatePermissionCommand,
} from "./commands/AssociatePermissionCommand";
import {
  type BatchDeleteDocumentCommandInput,
  type BatchDeleteDocumentCommandOutput,
  BatchDeleteDocumentCommand,
} from "./commands/BatchDeleteDocumentCommand";
import {
  type BatchPutDocumentCommandInput,
  type BatchPutDocumentCommandOutput,
  BatchPutDocumentCommand,
} from "./commands/BatchPutDocumentCommand";
import {
  type CancelSubscriptionCommandInput,
  type CancelSubscriptionCommandOutput,
  CancelSubscriptionCommand,
} from "./commands/CancelSubscriptionCommand";
import { type ChatCommandInput, type ChatCommandOutput, ChatCommand } from "./commands/ChatCommand";
import { type ChatSyncCommandInput, type ChatSyncCommandOutput, ChatSyncCommand } from "./commands/ChatSyncCommand";
import {
  type CheckDocumentAccessCommandInput,
  type CheckDocumentAccessCommandOutput,
  CheckDocumentAccessCommand,
} from "./commands/CheckDocumentAccessCommand";
import {
  type CreateAnonymousWebExperienceUrlCommandInput,
  type CreateAnonymousWebExperienceUrlCommandOutput,
  CreateAnonymousWebExperienceUrlCommand,
} from "./commands/CreateAnonymousWebExperienceUrlCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateChatResponseConfigurationCommandInput,
  type CreateChatResponseConfigurationCommandOutput,
  CreateChatResponseConfigurationCommand,
} from "./commands/CreateChatResponseConfigurationCommand";
import {
  type CreateDataAccessorCommandInput,
  type CreateDataAccessorCommandOutput,
  CreateDataAccessorCommand,
} from "./commands/CreateDataAccessorCommand";
import {
  type CreateDataSourceCommandInput,
  type CreateDataSourceCommandOutput,
  CreateDataSourceCommand,
} from "./commands/CreateDataSourceCommand";
import {
  type CreateIndexCommandInput,
  type CreateIndexCommandOutput,
  CreateIndexCommand,
} from "./commands/CreateIndexCommand";
import {
  type CreatePluginCommandInput,
  type CreatePluginCommandOutput,
  CreatePluginCommand,
} from "./commands/CreatePluginCommand";
import {
  type CreateRetrieverCommandInput,
  type CreateRetrieverCommandOutput,
  CreateRetrieverCommand,
} from "./commands/CreateRetrieverCommand";
import {
  type CreateSubscriptionCommandInput,
  type CreateSubscriptionCommandOutput,
  CreateSubscriptionCommand,
} from "./commands/CreateSubscriptionCommand";
import {
  type CreateUserCommandInput,
  type CreateUserCommandOutput,
  CreateUserCommand,
} from "./commands/CreateUserCommand";
import {
  type CreateWebExperienceCommandInput,
  type CreateWebExperienceCommandOutput,
  CreateWebExperienceCommand,
} from "./commands/CreateWebExperienceCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteAttachmentCommandInput,
  type DeleteAttachmentCommandOutput,
  DeleteAttachmentCommand,
} from "./commands/DeleteAttachmentCommand";
import {
  type DeleteChatControlsConfigurationCommandInput,
  type DeleteChatControlsConfigurationCommandOutput,
  DeleteChatControlsConfigurationCommand,
} from "./commands/DeleteChatControlsConfigurationCommand";
import {
  type DeleteChatResponseConfigurationCommandInput,
  type DeleteChatResponseConfigurationCommandOutput,
  DeleteChatResponseConfigurationCommand,
} from "./commands/DeleteChatResponseConfigurationCommand";
import {
  type DeleteConversationCommandInput,
  type DeleteConversationCommandOutput,
  DeleteConversationCommand,
} from "./commands/DeleteConversationCommand";
import {
  type DeleteDataAccessorCommandInput,
  type DeleteDataAccessorCommandOutput,
  DeleteDataAccessorCommand,
} from "./commands/DeleteDataAccessorCommand";
import {
  type DeleteDataSourceCommandInput,
  type DeleteDataSourceCommandOutput,
  DeleteDataSourceCommand,
} from "./commands/DeleteDataSourceCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type DeleteIndexCommandInput,
  type DeleteIndexCommandOutput,
  DeleteIndexCommand,
} from "./commands/DeleteIndexCommand";
import {
  type DeletePluginCommandInput,
  type DeletePluginCommandOutput,
  DeletePluginCommand,
} from "./commands/DeletePluginCommand";
import {
  type DeleteRetrieverCommandInput,
  type DeleteRetrieverCommandOutput,
  DeleteRetrieverCommand,
} from "./commands/DeleteRetrieverCommand";
import {
  type DeleteUserCommandInput,
  type DeleteUserCommandOutput,
  DeleteUserCommand,
} from "./commands/DeleteUserCommand";
import {
  type DeleteWebExperienceCommandInput,
  type DeleteWebExperienceCommandOutput,
  DeleteWebExperienceCommand,
} from "./commands/DeleteWebExperienceCommand";
import {
  type DisassociatePermissionCommandInput,
  type DisassociatePermissionCommandOutput,
  DisassociatePermissionCommand,
} from "./commands/DisassociatePermissionCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetChatControlsConfigurationCommandInput,
  type GetChatControlsConfigurationCommandOutput,
  GetChatControlsConfigurationCommand,
} from "./commands/GetChatControlsConfigurationCommand";
import {
  type GetChatResponseConfigurationCommandInput,
  type GetChatResponseConfigurationCommandOutput,
  GetChatResponseConfigurationCommand,
} from "./commands/GetChatResponseConfigurationCommand";
import {
  type GetDataAccessorCommandInput,
  type GetDataAccessorCommandOutput,
  GetDataAccessorCommand,
} from "./commands/GetDataAccessorCommand";
import {
  type GetDataSourceCommandInput,
  type GetDataSourceCommandOutput,
  GetDataSourceCommand,
} from "./commands/GetDataSourceCommand";
import {
  type GetDocumentContentCommandInput,
  type GetDocumentContentCommandOutput,
  GetDocumentContentCommand,
} from "./commands/GetDocumentContentCommand";
import { type GetGroupCommandInput, type GetGroupCommandOutput, GetGroupCommand } from "./commands/GetGroupCommand";
import { type GetIndexCommandInput, type GetIndexCommandOutput, GetIndexCommand } from "./commands/GetIndexCommand";
import { type GetMediaCommandInput, type GetMediaCommandOutput, GetMediaCommand } from "./commands/GetMediaCommand";
import { type GetPluginCommandInput, type GetPluginCommandOutput, GetPluginCommand } from "./commands/GetPluginCommand";
import { type GetPolicyCommandInput, type GetPolicyCommandOutput, GetPolicyCommand } from "./commands/GetPolicyCommand";
import {
  type GetRetrieverCommandInput,
  type GetRetrieverCommandOutput,
  GetRetrieverCommand,
} from "./commands/GetRetrieverCommand";
import { type GetUserCommandInput, type GetUserCommandOutput, GetUserCommand } from "./commands/GetUserCommand";
import {
  type GetWebExperienceCommandInput,
  type GetWebExperienceCommandOutput,
  GetWebExperienceCommand,
} from "./commands/GetWebExperienceCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListAttachmentsCommandInput,
  type ListAttachmentsCommandOutput,
  ListAttachmentsCommand,
} from "./commands/ListAttachmentsCommand";
import {
  type ListChatResponseConfigurationsCommandInput,
  type ListChatResponseConfigurationsCommandOutput,
  ListChatResponseConfigurationsCommand,
} from "./commands/ListChatResponseConfigurationsCommand";
import {
  type ListConversationsCommandInput,
  type ListConversationsCommandOutput,
  ListConversationsCommand,
} from "./commands/ListConversationsCommand";
import {
  type ListDataAccessorsCommandInput,
  type ListDataAccessorsCommandOutput,
  ListDataAccessorsCommand,
} from "./commands/ListDataAccessorsCommand";
import {
  type ListDataSourcesCommandInput,
  type ListDataSourcesCommandOutput,
  ListDataSourcesCommand,
} from "./commands/ListDataSourcesCommand";
import {
  type ListDataSourceSyncJobsCommandInput,
  type ListDataSourceSyncJobsCommandOutput,
  ListDataSourceSyncJobsCommand,
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  type ListDocumentsCommandInput,
  type ListDocumentsCommandOutput,
  ListDocumentsCommand,
} from "./commands/ListDocumentsCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListIndicesCommandInput,
  type ListIndicesCommandOutput,
  ListIndicesCommand,
} from "./commands/ListIndicesCommand";
import {
  type ListMessagesCommandInput,
  type ListMessagesCommandOutput,
  ListMessagesCommand,
} from "./commands/ListMessagesCommand";
import {
  type ListPluginActionsCommandInput,
  type ListPluginActionsCommandOutput,
  ListPluginActionsCommand,
} from "./commands/ListPluginActionsCommand";
import {
  type ListPluginsCommandInput,
  type ListPluginsCommandOutput,
  ListPluginsCommand,
} from "./commands/ListPluginsCommand";
import {
  type ListPluginTypeActionsCommandInput,
  type ListPluginTypeActionsCommandOutput,
  ListPluginTypeActionsCommand,
} from "./commands/ListPluginTypeActionsCommand";
import {
  type ListPluginTypeMetadataCommandInput,
  type ListPluginTypeMetadataCommandOutput,
  ListPluginTypeMetadataCommand,
} from "./commands/ListPluginTypeMetadataCommand";
import {
  type ListRetrieversCommandInput,
  type ListRetrieversCommandOutput,
  ListRetrieversCommand,
} from "./commands/ListRetrieversCommand";
import {
  type ListSubscriptionsCommandInput,
  type ListSubscriptionsCommandOutput,
  ListSubscriptionsCommand,
} from "./commands/ListSubscriptionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWebExperiencesCommandInput,
  type ListWebExperiencesCommandOutput,
  ListWebExperiencesCommand,
} from "./commands/ListWebExperiencesCommand";
import {
  type PutFeedbackCommandInput,
  type PutFeedbackCommandOutput,
  PutFeedbackCommand,
} from "./commands/PutFeedbackCommand";
import { type PutGroupCommandInput, type PutGroupCommandOutput, PutGroupCommand } from "./commands/PutGroupCommand";
import {
  type SearchRelevantContentCommandInput,
  type SearchRelevantContentCommandOutput,
  SearchRelevantContentCommand,
} from "./commands/SearchRelevantContentCommand";
import {
  type StartDataSourceSyncJobCommandInput,
  type StartDataSourceSyncJobCommandOutput,
  StartDataSourceSyncJobCommand,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  type StopDataSourceSyncJobCommandInput,
  type StopDataSourceSyncJobCommandOutput,
  StopDataSourceSyncJobCommand,
} from "./commands/StopDataSourceSyncJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateChatControlsConfigurationCommandInput,
  type UpdateChatControlsConfigurationCommandOutput,
  UpdateChatControlsConfigurationCommand,
} from "./commands/UpdateChatControlsConfigurationCommand";
import {
  type UpdateChatResponseConfigurationCommandInput,
  type UpdateChatResponseConfigurationCommandOutput,
  UpdateChatResponseConfigurationCommand,
} from "./commands/UpdateChatResponseConfigurationCommand";
import {
  type UpdateDataAccessorCommandInput,
  type UpdateDataAccessorCommandOutput,
  UpdateDataAccessorCommand,
} from "./commands/UpdateDataAccessorCommand";
import {
  type UpdateDataSourceCommandInput,
  type UpdateDataSourceCommandOutput,
  UpdateDataSourceCommand,
} from "./commands/UpdateDataSourceCommand";
import {
  type UpdateIndexCommandInput,
  type UpdateIndexCommandOutput,
  UpdateIndexCommand,
} from "./commands/UpdateIndexCommand";
import {
  type UpdatePluginCommandInput,
  type UpdatePluginCommandOutput,
  UpdatePluginCommand,
} from "./commands/UpdatePluginCommand";
import {
  type UpdateRetrieverCommandInput,
  type UpdateRetrieverCommandOutput,
  UpdateRetrieverCommand,
} from "./commands/UpdateRetrieverCommand";
import {
  type UpdateSubscriptionCommandInput,
  type UpdateSubscriptionCommandOutput,
  UpdateSubscriptionCommand,
} from "./commands/UpdateSubscriptionCommand";
import {
  type UpdateUserCommandInput,
  type UpdateUserCommandOutput,
  UpdateUserCommand,
} from "./commands/UpdateUserCommand";
import {
  type UpdateWebExperienceCommandInput,
  type UpdateWebExperienceCommandOutput,
  UpdateWebExperienceCommand,
} from "./commands/UpdateWebExperienceCommand";
import { paginateGetChatControlsConfiguration } from "./pagination/GetChatControlsConfigurationPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListAttachments } from "./pagination/ListAttachmentsPaginator";
import { paginateListChatResponseConfigurations } from "./pagination/ListChatResponseConfigurationsPaginator";
import { paginateListConversations } from "./pagination/ListConversationsPaginator";
import { paginateListDataAccessors } from "./pagination/ListDataAccessorsPaginator";
import { paginateListDataSources } from "./pagination/ListDataSourcesPaginator";
import { paginateListDataSourceSyncJobs } from "./pagination/ListDataSourceSyncJobsPaginator";
import { paginateListDocuments } from "./pagination/ListDocumentsPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListIndices } from "./pagination/ListIndicesPaginator";
import { paginateListMessages } from "./pagination/ListMessagesPaginator";
import { paginateListPluginActions } from "./pagination/ListPluginActionsPaginator";
import { paginateListPlugins } from "./pagination/ListPluginsPaginator";
import { paginateListPluginTypeActions } from "./pagination/ListPluginTypeActionsPaginator";
import { paginateListPluginTypeMetadata } from "./pagination/ListPluginTypeMetadataPaginator";
import { paginateListRetrievers } from "./pagination/ListRetrieversPaginator";
import { paginateListSubscriptions } from "./pagination/ListSubscriptionsPaginator";
import { paginateListWebExperiences } from "./pagination/ListWebExperiencesPaginator";
import { paginateSearchRelevantContent } from "./pagination/SearchRelevantContentPaginator";
import { QBusinessClient } from "./QBusinessClient";

const commands = {
  AssociatePermissionCommand,
  BatchDeleteDocumentCommand,
  BatchPutDocumentCommand,
  CancelSubscriptionCommand,
  ChatCommand,
  ChatSyncCommand,
  CheckDocumentAccessCommand,
  CreateAnonymousWebExperienceUrlCommand,
  CreateApplicationCommand,
  CreateChatResponseConfigurationCommand,
  CreateDataAccessorCommand,
  CreateDataSourceCommand,
  CreateIndexCommand,
  CreatePluginCommand,
  CreateRetrieverCommand,
  CreateSubscriptionCommand,
  CreateUserCommand,
  CreateWebExperienceCommand,
  DeleteApplicationCommand,
  DeleteAttachmentCommand,
  DeleteChatControlsConfigurationCommand,
  DeleteChatResponseConfigurationCommand,
  DeleteConversationCommand,
  DeleteDataAccessorCommand,
  DeleteDataSourceCommand,
  DeleteGroupCommand,
  DeleteIndexCommand,
  DeletePluginCommand,
  DeleteRetrieverCommand,
  DeleteUserCommand,
  DeleteWebExperienceCommand,
  DisassociatePermissionCommand,
  GetApplicationCommand,
  GetChatControlsConfigurationCommand,
  GetChatResponseConfigurationCommand,
  GetDataAccessorCommand,
  GetDataSourceCommand,
  GetDocumentContentCommand,
  GetGroupCommand,
  GetIndexCommand,
  GetMediaCommand,
  GetPluginCommand,
  GetPolicyCommand,
  GetRetrieverCommand,
  GetUserCommand,
  GetWebExperienceCommand,
  ListApplicationsCommand,
  ListAttachmentsCommand,
  ListChatResponseConfigurationsCommand,
  ListConversationsCommand,
  ListDataAccessorsCommand,
  ListDataSourcesCommand,
  ListDataSourceSyncJobsCommand,
  ListDocumentsCommand,
  ListGroupsCommand,
  ListIndicesCommand,
  ListMessagesCommand,
  ListPluginActionsCommand,
  ListPluginsCommand,
  ListPluginTypeActionsCommand,
  ListPluginTypeMetadataCommand,
  ListRetrieversCommand,
  ListSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListWebExperiencesCommand,
  PutFeedbackCommand,
  PutGroupCommand,
  SearchRelevantContentCommand,
  StartDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateChatControlsConfigurationCommand,
  UpdateChatResponseConfigurationCommand,
  UpdateDataAccessorCommand,
  UpdateDataSourceCommand,
  UpdateIndexCommand,
  UpdatePluginCommand,
  UpdateRetrieverCommand,
  UpdateSubscriptionCommand,
  UpdateUserCommand,
  UpdateWebExperienceCommand,
};
const paginators = {
  paginateGetChatControlsConfiguration,
  paginateListApplications,
  paginateListAttachments,
  paginateListChatResponseConfigurations,
  paginateListConversations,
  paginateListDataAccessors,
  paginateListDataSources,
  paginateListDataSourceSyncJobs,
  paginateListDocuments,
  paginateListGroups,
  paginateListIndices,
  paginateListMessages,
  paginateListPluginActions,
  paginateListPlugins,
  paginateListPluginTypeActions,
  paginateListPluginTypeMetadata,
  paginateListRetrievers,
  paginateListSubscriptions,
  paginateListWebExperiences,
  paginateSearchRelevantContent,
};

export interface QBusiness {
  /**
   * @see {@link AssociatePermissionCommand}
   */
  associatePermission(
    args: AssociatePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePermissionCommandOutput>;
  associatePermission(
    args: AssociatePermissionCommandInput,
    cb: (err: any, data?: AssociatePermissionCommandOutput) => void
  ): void;
  associatePermission(
    args: AssociatePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDocumentCommand}
   */
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDocumentCommandOutput>;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;
  batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutDocumentCommand}
   */
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutDocumentCommandOutput>;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;
  batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSubscriptionCommand}
   */
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSubscriptionCommandOutput>;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;
  cancelSubscription(
    args: CancelSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link ChatCommand}
   */
  chat(
    args: ChatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChatCommandOutput>;
  chat(
    args: ChatCommandInput,
    cb: (err: any, data?: ChatCommandOutput) => void
  ): void;
  chat(
    args: ChatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChatCommandOutput) => void
  ): void;

  /**
   * @see {@link ChatSyncCommand}
   */
  chatSync(
    args: ChatSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChatSyncCommandOutput>;
  chatSync(
    args: ChatSyncCommandInput,
    cb: (err: any, data?: ChatSyncCommandOutput) => void
  ): void;
  chatSync(
    args: ChatSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChatSyncCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckDocumentAccessCommand}
   */
  checkDocumentAccess(
    args: CheckDocumentAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckDocumentAccessCommandOutput>;
  checkDocumentAccess(
    args: CheckDocumentAccessCommandInput,
    cb: (err: any, data?: CheckDocumentAccessCommandOutput) => void
  ): void;
  checkDocumentAccess(
    args: CheckDocumentAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckDocumentAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnonymousWebExperienceUrlCommand}
   */
  createAnonymousWebExperienceUrl(
    args: CreateAnonymousWebExperienceUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnonymousWebExperienceUrlCommandOutput>;
  createAnonymousWebExperienceUrl(
    args: CreateAnonymousWebExperienceUrlCommandInput,
    cb: (err: any, data?: CreateAnonymousWebExperienceUrlCommandOutput) => void
  ): void;
  createAnonymousWebExperienceUrl(
    args: CreateAnonymousWebExperienceUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnonymousWebExperienceUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChatResponseConfigurationCommand}
   */
  createChatResponseConfiguration(
    args: CreateChatResponseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChatResponseConfigurationCommandOutput>;
  createChatResponseConfiguration(
    args: CreateChatResponseConfigurationCommandInput,
    cb: (err: any, data?: CreateChatResponseConfigurationCommandOutput) => void
  ): void;
  createChatResponseConfiguration(
    args: CreateChatResponseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChatResponseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataAccessorCommand}
   */
  createDataAccessor(
    args: CreateDataAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataAccessorCommandOutput>;
  createDataAccessor(
    args: CreateDataAccessorCommandInput,
    cb: (err: any, data?: CreateDataAccessorCommandOutput) => void
  ): void;
  createDataAccessor(
    args: CreateDataAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataSourceCommand}
   */
  createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(
    args: CreateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIndexCommandOutput>;
  createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePluginCommand}
   */
  createPlugin(
    args: CreatePluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePluginCommandOutput>;
  createPlugin(
    args: CreatePluginCommandInput,
    cb: (err: any, data?: CreatePluginCommandOutput) => void
  ): void;
  createPlugin(
    args: CreatePluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePluginCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRetrieverCommand}
   */
  createRetriever(
    args: CreateRetrieverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRetrieverCommandOutput>;
  createRetriever(
    args: CreateRetrieverCommandInput,
    cb: (err: any, data?: CreateRetrieverCommandOutput) => void
  ): void;
  createRetriever(
    args: CreateRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriptionCommand}
   */
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  createSubscription(
    args: CreateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(
    args: CreateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserCommandOutput>;
  createUser(
    args: CreateUserCommandInput,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebExperienceCommand}
   */
  createWebExperience(
    args: CreateWebExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebExperienceCommandOutput>;
  createWebExperience(
    args: CreateWebExperienceCommandInput,
    cb: (err: any, data?: CreateWebExperienceCommandOutput) => void
  ): void;
  createWebExperience(
    args: CreateWebExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttachmentCommand}
   */
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttachmentCommandOutput>;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;
  deleteAttachment(
    args: DeleteAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttachmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChatControlsConfigurationCommand}
   */
  deleteChatControlsConfiguration(
    args: DeleteChatControlsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChatControlsConfigurationCommandOutput>;
  deleteChatControlsConfiguration(
    args: DeleteChatControlsConfigurationCommandInput,
    cb: (err: any, data?: DeleteChatControlsConfigurationCommandOutput) => void
  ): void;
  deleteChatControlsConfiguration(
    args: DeleteChatControlsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChatControlsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChatResponseConfigurationCommand}
   */
  deleteChatResponseConfiguration(
    args: DeleteChatResponseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChatResponseConfigurationCommandOutput>;
  deleteChatResponseConfiguration(
    args: DeleteChatResponseConfigurationCommandInput,
    cb: (err: any, data?: DeleteChatResponseConfigurationCommandOutput) => void
  ): void;
  deleteChatResponseConfiguration(
    args: DeleteChatResponseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChatResponseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConversationCommand}
   */
  deleteConversation(
    args: DeleteConversationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConversationCommandOutput>;
  deleteConversation(
    args: DeleteConversationCommandInput,
    cb: (err: any, data?: DeleteConversationCommandOutput) => void
  ): void;
  deleteConversation(
    args: DeleteConversationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConversationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataAccessorCommand}
   */
  deleteDataAccessor(
    args: DeleteDataAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataAccessorCommandOutput>;
  deleteDataAccessor(
    args: DeleteDataAccessorCommandInput,
    cb: (err: any, data?: DeleteDataAccessorCommandOutput) => void
  ): void;
  deleteDataAccessor(
    args: DeleteDataAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataSourceCommand}
   */
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(
    args: DeleteIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexCommandOutput>;
  deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePluginCommand}
   */
  deletePlugin(
    args: DeletePluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePluginCommandOutput>;
  deletePlugin(
    args: DeletePluginCommandInput,
    cb: (err: any, data?: DeletePluginCommandOutput) => void
  ): void;
  deletePlugin(
    args: DeletePluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePluginCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetrieverCommand}
   */
  deleteRetriever(
    args: DeleteRetrieverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetrieverCommandOutput>;
  deleteRetriever(
    args: DeleteRetrieverCommandInput,
    cb: (err: any, data?: DeleteRetrieverCommandOutput) => void
  ): void;
  deleteRetriever(
    args: DeleteRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(
    args: DeleteUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserCommandOutput>;
  deleteUser(
    args: DeleteUserCommandInput,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebExperienceCommand}
   */
  deleteWebExperience(
    args: DeleteWebExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebExperienceCommandOutput>;
  deleteWebExperience(
    args: DeleteWebExperienceCommandInput,
    cb: (err: any, data?: DeleteWebExperienceCommandOutput) => void
  ): void;
  deleteWebExperience(
    args: DeleteWebExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePermissionCommand}
   */
  disassociatePermission(
    args: DisassociatePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePermissionCommandOutput>;
  disassociatePermission(
    args: DisassociatePermissionCommandInput,
    cb: (err: any, data?: DisassociatePermissionCommandOutput) => void
  ): void;
  disassociatePermission(
    args: DisassociatePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChatControlsConfigurationCommand}
   */
  getChatControlsConfiguration(
    args: GetChatControlsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChatControlsConfigurationCommandOutput>;
  getChatControlsConfiguration(
    args: GetChatControlsConfigurationCommandInput,
    cb: (err: any, data?: GetChatControlsConfigurationCommandOutput) => void
  ): void;
  getChatControlsConfiguration(
    args: GetChatControlsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChatControlsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChatResponseConfigurationCommand}
   */
  getChatResponseConfiguration(
    args: GetChatResponseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChatResponseConfigurationCommandOutput>;
  getChatResponseConfiguration(
    args: GetChatResponseConfigurationCommandInput,
    cb: (err: any, data?: GetChatResponseConfigurationCommandOutput) => void
  ): void;
  getChatResponseConfiguration(
    args: GetChatResponseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChatResponseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataAccessorCommand}
   */
  getDataAccessor(
    args: GetDataAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataAccessorCommandOutput>;
  getDataAccessor(
    args: GetDataAccessorCommandInput,
    cb: (err: any, data?: GetDataAccessorCommandOutput) => void
  ): void;
  getDataAccessor(
    args: GetDataAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(
    args: GetDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceCommandOutput>;
  getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDocumentContentCommand}
   */
  getDocumentContent(
    args: GetDocumentContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentContentCommandOutput>;
  getDocumentContent(
    args: GetDocumentContentCommandInput,
    cb: (err: any, data?: GetDocumentContentCommandOutput) => void
  ): void;
  getDocumentContent(
    args: GetDocumentContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(
    args: GetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(
    args: GetIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIndexCommandOutput>;
  getIndex(
    args: GetIndexCommandInput,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;
  getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaCommand}
   */
  getMedia(
    args: GetMediaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaCommandOutput>;
  getMedia(
    args: GetMediaCommandInput,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;
  getMedia(
    args: GetMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPluginCommand}
   */
  getPlugin(
    args: GetPluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPluginCommandOutput>;
  getPlugin(
    args: GetPluginCommandInput,
    cb: (err: any, data?: GetPluginCommandOutput) => void
  ): void;
  getPlugin(
    args: GetPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPluginCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetrieverCommand}
   */
  getRetriever(
    args: GetRetrieverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRetrieverCommandOutput>;
  getRetriever(
    args: GetRetrieverCommandInput,
    cb: (err: any, data?: GetRetrieverCommandOutput) => void
  ): void;
  getRetriever(
    args: GetRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(
    args: GetUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserCommandOutput>;
  getUser(
    args: GetUserCommandInput,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebExperienceCommand}
   */
  getWebExperience(
    args: GetWebExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWebExperienceCommandOutput>;
  getWebExperience(
    args: GetWebExperienceCommandInput,
    cb: (err: any, data?: GetWebExperienceCommandOutput) => void
  ): void;
  getWebExperience(
    args: GetWebExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachmentsCommand}
   */
  listAttachments(
    args: ListAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachmentsCommandOutput>;
  listAttachments(
    args: ListAttachmentsCommandInput,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;
  listAttachments(
    args: ListAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChatResponseConfigurationsCommand}
   */
  listChatResponseConfigurations(
    args: ListChatResponseConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChatResponseConfigurationsCommandOutput>;
  listChatResponseConfigurations(
    args: ListChatResponseConfigurationsCommandInput,
    cb: (err: any, data?: ListChatResponseConfigurationsCommandOutput) => void
  ): void;
  listChatResponseConfigurations(
    args: ListChatResponseConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChatResponseConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConversationsCommand}
   */
  listConversations(
    args: ListConversationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConversationsCommandOutput>;
  listConversations(
    args: ListConversationsCommandInput,
    cb: (err: any, data?: ListConversationsCommandOutput) => void
  ): void;
  listConversations(
    args: ListConversationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConversationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataAccessorsCommand}
   */
  listDataAccessors(
    args: ListDataAccessorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataAccessorsCommandOutput>;
  listDataAccessors(
    args: ListDataAccessorsCommandInput,
    cb: (err: any, data?: ListDataAccessorsCommandOutput) => void
  ): void;
  listDataAccessors(
    args: ListDataAccessorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataAccessorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataSourceSyncJobsCommand}
   */
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourceSyncJobsCommandOutput>;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;
  listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDocumentsCommand}
   */
  listDocuments(
    args: ListDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDocumentsCommandOutput>;
  listDocuments(
    args: ListDocumentsCommandInput,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;
  listDocuments(
    args: ListDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(
    args: ListGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(
    args: ListIndicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndicesCommandOutput>;
  listIndices(
    args: ListIndicesCommandInput,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessagesCommand}
   */
  listMessages(
    args: ListMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMessagesCommandOutput>;
  listMessages(
    args: ListMessagesCommandInput,
    cb: (err: any, data?: ListMessagesCommandOutput) => void
  ): void;
  listMessages(
    args: ListMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginActionsCommand}
   */
  listPluginActions(
    args: ListPluginActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPluginActionsCommandOutput>;
  listPluginActions(
    args: ListPluginActionsCommandInput,
    cb: (err: any, data?: ListPluginActionsCommandOutput) => void
  ): void;
  listPluginActions(
    args: ListPluginActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginsCommand}
   */
  listPlugins(
    args: ListPluginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPluginsCommandOutput>;
  listPlugins(
    args: ListPluginsCommandInput,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
  ): void;
  listPlugins(
    args: ListPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginTypeActionsCommand}
   */
  listPluginTypeActions(
    args: ListPluginTypeActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPluginTypeActionsCommandOutput>;
  listPluginTypeActions(
    args: ListPluginTypeActionsCommandInput,
    cb: (err: any, data?: ListPluginTypeActionsCommandOutput) => void
  ): void;
  listPluginTypeActions(
    args: ListPluginTypeActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginTypeActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginTypeMetadataCommand}
   */
  listPluginTypeMetadata(): Promise<ListPluginTypeMetadataCommandOutput>;
  listPluginTypeMetadata(
    args: ListPluginTypeMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPluginTypeMetadataCommandOutput>;
  listPluginTypeMetadata(
    args: ListPluginTypeMetadataCommandInput,
    cb: (err: any, data?: ListPluginTypeMetadataCommandOutput) => void
  ): void;
  listPluginTypeMetadata(
    args: ListPluginTypeMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginTypeMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetrieversCommand}
   */
  listRetrievers(
    args: ListRetrieversCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetrieversCommandOutput>;
  listRetrievers(
    args: ListRetrieversCommandInput,
    cb: (err: any, data?: ListRetrieversCommandOutput) => void
  ): void;
  listRetrievers(
    args: ListRetrieversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetrieversCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscriptionsCommand}
   */
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscriptionsCommandOutput>;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;
  listSubscriptions(
    args: ListSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscriptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebExperiencesCommand}
   */
  listWebExperiences(
    args: ListWebExperiencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebExperiencesCommandOutput>;
  listWebExperiences(
    args: ListWebExperiencesCommandInput,
    cb: (err: any, data?: ListWebExperiencesCommandOutput) => void
  ): void;
  listWebExperiences(
    args: ListWebExperiencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebExperiencesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFeedbackCommand}
   */
  putFeedback(
    args: PutFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFeedbackCommandOutput>;
  putFeedback(
    args: PutFeedbackCommandInput,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;
  putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGroupCommand}
   */
  putGroup(
    args: PutGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupCommandOutput>;
  putGroup(
    args: PutGroupCommandInput,
    cb: (err: any, data?: PutGroupCommandOutput) => void
  ): void;
  putGroup(
    args: PutGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRelevantContentCommand}
   */
  searchRelevantContent(
    args: SearchRelevantContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRelevantContentCommandOutput>;
  searchRelevantContent(
    args: SearchRelevantContentCommandInput,
    cb: (err: any, data?: SearchRelevantContentCommandOutput) => void
  ): void;
  searchRelevantContent(
    args: SearchRelevantContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRelevantContentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataSourceSyncJobCommand}
   */
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataSourceSyncJobCommandOutput>;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;
  startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopDataSourceSyncJobCommand}
   */
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDataSourceSyncJobCommandOutput>;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;
  stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChatControlsConfigurationCommand}
   */
  updateChatControlsConfiguration(
    args: UpdateChatControlsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChatControlsConfigurationCommandOutput>;
  updateChatControlsConfiguration(
    args: UpdateChatControlsConfigurationCommandInput,
    cb: (err: any, data?: UpdateChatControlsConfigurationCommandOutput) => void
  ): void;
  updateChatControlsConfiguration(
    args: UpdateChatControlsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChatControlsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChatResponseConfigurationCommand}
   */
  updateChatResponseConfiguration(
    args: UpdateChatResponseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChatResponseConfigurationCommandOutput>;
  updateChatResponseConfiguration(
    args: UpdateChatResponseConfigurationCommandInput,
    cb: (err: any, data?: UpdateChatResponseConfigurationCommandOutput) => void
  ): void;
  updateChatResponseConfiguration(
    args: UpdateChatResponseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChatResponseConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataAccessorCommand}
   */
  updateDataAccessor(
    args: UpdateDataAccessorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataAccessorCommandOutput>;
  updateDataAccessor(
    args: UpdateDataAccessorCommandInput,
    cb: (err: any, data?: UpdateDataAccessorCommandOutput) => void
  ): void;
  updateDataAccessor(
    args: UpdateDataAccessorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataAccessorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataSourceCommand}
   */
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIndexCommand}
   */
  updateIndex(
    args: UpdateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexCommandOutput>;
  updateIndex(
    args: UpdateIndexCommandInput,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePluginCommand}
   */
  updatePlugin(
    args: UpdatePluginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePluginCommandOutput>;
  updatePlugin(
    args: UpdatePluginCommandInput,
    cb: (err: any, data?: UpdatePluginCommandOutput) => void
  ): void;
  updatePlugin(
    args: UpdatePluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePluginCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRetrieverCommand}
   */
  updateRetriever(
    args: UpdateRetrieverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRetrieverCommandOutput>;
  updateRetriever(
    args: UpdateRetrieverCommandInput,
    cb: (err: any, data?: UpdateRetrieverCommandOutput) => void
  ): void;
  updateRetriever(
    args: UpdateRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriptionCommand}
   */
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionCommandOutput>;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(
    args: UpdateUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserCommandOutput>;
  updateUser(
    args: UpdateUserCommandInput,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebExperienceCommand}
   */
  updateWebExperience(
    args: UpdateWebExperienceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebExperienceCommandOutput>;
  updateWebExperience(
    args: UpdateWebExperienceCommandInput,
    cb: (err: any, data?: UpdateWebExperienceCommandOutput) => void
  ): void;
  updateWebExperience(
    args: UpdateWebExperienceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebExperienceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChatControlsConfigurationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetChatControlsConfigurationCommandOutput}.
   */
  paginateGetChatControlsConfiguration(
    args: GetChatControlsConfigurationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetChatControlsConfigurationCommandOutput>;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListAttachmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttachmentsCommandOutput}.
   */
  paginateListAttachments(
    args: ListAttachmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttachmentsCommandOutput>;

  /**
   * @see {@link ListChatResponseConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChatResponseConfigurationsCommandOutput}.
   */
  paginateListChatResponseConfigurations(
    args: ListChatResponseConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChatResponseConfigurationsCommandOutput>;

  /**
   * @see {@link ListConversationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConversationsCommandOutput}.
   */
  paginateListConversations(
    args: ListConversationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConversationsCommandOutput>;

  /**
   * @see {@link ListDataAccessorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataAccessorsCommandOutput}.
   */
  paginateListDataAccessors(
    args: ListDataAccessorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataAccessorsCommandOutput>;

  /**
   * @see {@link ListDataSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourcesCommandOutput}.
   */
  paginateListDataSources(
    args: ListDataSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourcesCommandOutput>;

  /**
   * @see {@link ListDataSourceSyncJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataSourceSyncJobsCommandOutput}.
   */
  paginateListDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataSourceSyncJobsCommandOutput>;

  /**
   * @see {@link ListDocumentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDocumentsCommandOutput}.
   */
  paginateListDocuments(
    args: ListDocumentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDocumentsCommandOutput>;

  /**
   * @see {@link ListGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsCommandOutput}.
   */
  paginateListGroups(
    args: ListGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsCommandOutput>;

  /**
   * @see {@link ListIndicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIndicesCommandOutput}.
   */
  paginateListIndices(
    args: ListIndicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIndicesCommandOutput>;

  /**
   * @see {@link ListMessagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMessagesCommandOutput}.
   */
  paginateListMessages(
    args: ListMessagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMessagesCommandOutput>;

  /**
   * @see {@link ListPluginActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPluginActionsCommandOutput}.
   */
  paginateListPluginActions(
    args: ListPluginActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPluginActionsCommandOutput>;

  /**
   * @see {@link ListPluginsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPluginsCommandOutput}.
   */
  paginateListPlugins(
    args: ListPluginsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPluginsCommandOutput>;

  /**
   * @see {@link ListPluginTypeActionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPluginTypeActionsCommandOutput}.
   */
  paginateListPluginTypeActions(
    args: ListPluginTypeActionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPluginTypeActionsCommandOutput>;

  /**
   * @see {@link ListPluginTypeMetadataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPluginTypeMetadataCommandOutput}.
   */
  paginateListPluginTypeMetadata(
    args?: ListPluginTypeMetadataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPluginTypeMetadataCommandOutput>;

  /**
   * @see {@link ListRetrieversCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRetrieversCommandOutput}.
   */
  paginateListRetrievers(
    args: ListRetrieversCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRetrieversCommandOutput>;

  /**
   * @see {@link ListSubscriptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSubscriptionsCommandOutput}.
   */
  paginateListSubscriptions(
    args: ListSubscriptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSubscriptionsCommandOutput>;

  /**
   * @see {@link ListWebExperiencesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWebExperiencesCommandOutput}.
   */
  paginateListWebExperiences(
    args: ListWebExperiencesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWebExperiencesCommandOutput>;

  /**
   * @see {@link SearchRelevantContentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchRelevantContentCommandOutput}.
   */
  paginateSearchRelevantContent(
    args: SearchRelevantContentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchRelevantContentCommandOutput>;
}

/**
 * <p>This is the <i>Amazon Q Business</i> API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html"> <i>Amazon Q Business User Guide</i> </a>.</p> <p>For an overview of the Amazon Q Business APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview">Overview of Amazon Q Business API operations</a>.</p> <p>For information about the IAM access control permissions you need to use this API, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html">IAM roles for Amazon Q Business</a> in the <i>Amazon Q Business User Guide</i>.</p> <p>The following resources provide additional information about using the Amazon Q Business API:</p> <ul> <li> <p> <i> <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html">Setting up for Amazon Q Business</a> </i> </p> </li> <li> <p> <i> <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html">Amazon Q Business CLI Reference</a> </i> </p> </li> <li> <p> <i> <a href="https://docs.aws.amazon.com/general/latest/gr/amazonq.html">Amazon Web Services General Reference</a> </i> </p> </li> </ul>
 * @public
 */
export class QBusiness extends QBusinessClient implements QBusiness {}
createAggregatedClient(commands, QBusiness, { paginators });
