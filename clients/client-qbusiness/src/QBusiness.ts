// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import {
  BatchPutDocumentCommand,
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput,
} from "./commands/BatchPutDocumentCommand";
import { ChatCommand, ChatCommandInput, ChatCommandOutput } from "./commands/ChatCommand";
import { ChatSyncCommand, ChatSyncCommandInput, ChatSyncCommandOutput } from "./commands/ChatSyncCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreatePluginCommand,
  CreatePluginCommandInput,
  CreatePluginCommandOutput,
} from "./commands/CreatePluginCommand";
import {
  CreateRetrieverCommand,
  CreateRetrieverCommandInput,
  CreateRetrieverCommandOutput,
} from "./commands/CreateRetrieverCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateWebExperienceCommand,
  CreateWebExperienceCommandInput,
  CreateWebExperienceCommandOutput,
} from "./commands/CreateWebExperienceCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteChatControlsConfigurationCommand,
  DeleteChatControlsConfigurationCommandInput,
  DeleteChatControlsConfigurationCommandOutput,
} from "./commands/DeleteChatControlsConfigurationCommand";
import {
  DeleteConversationCommand,
  DeleteConversationCommandInput,
  DeleteConversationCommandOutput,
} from "./commands/DeleteConversationCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeletePluginCommand,
  DeletePluginCommandInput,
  DeletePluginCommandOutput,
} from "./commands/DeletePluginCommand";
import {
  DeleteRetrieverCommand,
  DeleteRetrieverCommandInput,
  DeleteRetrieverCommandOutput,
} from "./commands/DeleteRetrieverCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteWebExperienceCommand,
  DeleteWebExperienceCommandInput,
  DeleteWebExperienceCommandOutput,
} from "./commands/DeleteWebExperienceCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetChatControlsConfigurationCommand,
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
} from "./commands/GetChatControlsConfigurationCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetIndexCommand, GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import { GetMediaCommand, GetMediaCommandInput, GetMediaCommandOutput } from "./commands/GetMediaCommand";
import { GetPluginCommand, GetPluginCommandInput, GetPluginCommandOutput } from "./commands/GetPluginCommand";
import {
  GetRetrieverCommand,
  GetRetrieverCommandInput,
  GetRetrieverCommandOutput,
} from "./commands/GetRetrieverCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetWebExperienceCommand,
  GetWebExperienceCommandInput,
  GetWebExperienceCommandOutput,
} from "./commands/GetWebExperienceCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListAttachmentsCommand,
  ListAttachmentsCommandInput,
  ListAttachmentsCommandOutput,
} from "./commands/ListAttachmentsCommand";
import {
  ListConversationsCommand,
  ListConversationsCommandInput,
  ListConversationsCommandOutput,
} from "./commands/ListConversationsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  ListDocumentsCommand,
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
} from "./commands/ListDocumentsCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListMessagesCommand,
  ListMessagesCommandInput,
  ListMessagesCommandOutput,
} from "./commands/ListMessagesCommand";
import { ListPluginsCommand, ListPluginsCommandInput, ListPluginsCommandOutput } from "./commands/ListPluginsCommand";
import {
  ListRetrieversCommand,
  ListRetrieversCommandInput,
  ListRetrieversCommandOutput,
} from "./commands/ListRetrieversCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebExperiencesCommand,
  ListWebExperiencesCommandInput,
  ListWebExperiencesCommandOutput,
} from "./commands/ListWebExperiencesCommand";
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { PutGroupCommand, PutGroupCommandInput, PutGroupCommandOutput } from "./commands/PutGroupCommand";
import {
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateChatControlsConfigurationCommand,
  UpdateChatControlsConfigurationCommandInput,
  UpdateChatControlsConfigurationCommandOutput,
} from "./commands/UpdateChatControlsConfigurationCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import { UpdateIndexCommand, UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import {
  UpdatePluginCommand,
  UpdatePluginCommandInput,
  UpdatePluginCommandOutput,
} from "./commands/UpdatePluginCommand";
import {
  UpdateRetrieverCommand,
  UpdateRetrieverCommandInput,
  UpdateRetrieverCommandOutput,
} from "./commands/UpdateRetrieverCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateWebExperienceCommand,
  UpdateWebExperienceCommandInput,
  UpdateWebExperienceCommandOutput,
} from "./commands/UpdateWebExperienceCommand";
import { QBusinessClient, QBusinessClientConfig } from "./QBusinessClient";

const commands = {
  BatchDeleteDocumentCommand,
  BatchPutDocumentCommand,
  ChatCommand,
  ChatSyncCommand,
  CreateApplicationCommand,
  CreateDataSourceCommand,
  CreateIndexCommand,
  CreatePluginCommand,
  CreateRetrieverCommand,
  CreateUserCommand,
  CreateWebExperienceCommand,
  DeleteApplicationCommand,
  DeleteChatControlsConfigurationCommand,
  DeleteConversationCommand,
  DeleteDataSourceCommand,
  DeleteGroupCommand,
  DeleteIndexCommand,
  DeletePluginCommand,
  DeleteRetrieverCommand,
  DeleteUserCommand,
  DeleteWebExperienceCommand,
  GetApplicationCommand,
  GetChatControlsConfigurationCommand,
  GetDataSourceCommand,
  GetGroupCommand,
  GetIndexCommand,
  GetMediaCommand,
  GetPluginCommand,
  GetRetrieverCommand,
  GetUserCommand,
  GetWebExperienceCommand,
  ListApplicationsCommand,
  ListAttachmentsCommand,
  ListConversationsCommand,
  ListDataSourcesCommand,
  ListDataSourceSyncJobsCommand,
  ListDocumentsCommand,
  ListGroupsCommand,
  ListIndicesCommand,
  ListMessagesCommand,
  ListPluginsCommand,
  ListRetrieversCommand,
  ListTagsForResourceCommand,
  ListWebExperiencesCommand,
  PutFeedbackCommand,
  PutGroupCommand,
  StartDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateChatControlsConfigurationCommand,
  UpdateDataSourceCommand,
  UpdateIndexCommand,
  UpdatePluginCommand,
  UpdateRetrieverCommand,
  UpdateUserCommand,
  UpdateWebExperienceCommand,
};

export interface QBusiness {
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
   * @see {@link ChatCommand}
   */
  chat(args: ChatCommandInput, options?: __HttpHandlerOptions): Promise<ChatCommandOutput>;
  chat(args: ChatCommandInput, cb: (err: any, data?: ChatCommandOutput) => void): void;
  chat(args: ChatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ChatCommandOutput) => void): void;

  /**
   * @see {@link ChatSyncCommand}
   */
  chatSync(args: ChatSyncCommandInput, options?: __HttpHandlerOptions): Promise<ChatSyncCommandOutput>;
  chatSync(args: ChatSyncCommandInput, cb: (err: any, data?: ChatSyncCommandOutput) => void): void;
  chatSync(
    args: ChatSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChatSyncCommandOutput) => void
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
  createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePluginCommand}
   */
  createPlugin(args: CreatePluginCommandInput, options?: __HttpHandlerOptions): Promise<CreatePluginCommandOutput>;
  createPlugin(args: CreatePluginCommandInput, cb: (err: any, data?: CreatePluginCommandOutput) => void): void;
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
  createRetriever(args: CreateRetrieverCommandInput, cb: (err: any, data?: CreateRetrieverCommandOutput) => void): void;
  createRetriever(
    args: CreateRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
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
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
  deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePluginCommand}
   */
  deletePlugin(args: DeletePluginCommandInput, options?: __HttpHandlerOptions): Promise<DeletePluginCommandOutput>;
  deletePlugin(args: DeletePluginCommandInput, cb: (err: any, data?: DeletePluginCommandOutput) => void): void;
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
  deleteRetriever(args: DeleteRetrieverCommandInput, cb: (err: any, data?: DeleteRetrieverCommandOutput) => void): void;
  deleteRetriever(
    args: DeleteRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
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
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
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
   * @see {@link GetDataSourceCommand}
   */
  getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
  getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
  getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(args: GetIndexCommandInput, options?: __HttpHandlerOptions): Promise<GetIndexCommandOutput>;
  getIndex(args: GetIndexCommandInput, cb: (err: any, data?: GetIndexCommandOutput) => void): void;
  getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaCommand}
   */
  getMedia(args: GetMediaCommandInput, options?: __HttpHandlerOptions): Promise<GetMediaCommandOutput>;
  getMedia(args: GetMediaCommandInput, cb: (err: any, data?: GetMediaCommandOutput) => void): void;
  getMedia(
    args: GetMediaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPluginCommand}
   */
  getPlugin(args: GetPluginCommandInput, options?: __HttpHandlerOptions): Promise<GetPluginCommandOutput>;
  getPlugin(args: GetPluginCommandInput, cb: (err: any, data?: GetPluginCommandOutput) => void): void;
  getPlugin(
    args: GetPluginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPluginCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRetrieverCommand}
   */
  getRetriever(args: GetRetrieverCommandInput, options?: __HttpHandlerOptions): Promise<GetRetrieverCommandOutput>;
  getRetriever(args: GetRetrieverCommandInput, cb: (err: any, data?: GetRetrieverCommandOutput) => void): void;
  getRetriever(
    args: GetRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
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
  listAttachments(args: ListAttachmentsCommandInput, cb: (err: any, data?: ListAttachmentsCommandOutput) => void): void;
  listAttachments(
    args: ListAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachmentsCommandOutput) => void
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
   * @see {@link ListDataSourcesCommand}
   */
  listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
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
  listDocuments(args: ListDocumentsCommandInput, options?: __HttpHandlerOptions): Promise<ListDocumentsCommandOutput>;
  listDocuments(args: ListDocumentsCommandInput, cb: (err: any, data?: ListDocumentsCommandOutput) => void): void;
  listDocuments(
    args: ListDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
  listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
  listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMessagesCommand}
   */
  listMessages(args: ListMessagesCommandInput, options?: __HttpHandlerOptions): Promise<ListMessagesCommandOutput>;
  listMessages(args: ListMessagesCommandInput, cb: (err: any, data?: ListMessagesCommandOutput) => void): void;
  listMessages(
    args: ListMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPluginsCommand}
   */
  listPlugins(args: ListPluginsCommandInput, options?: __HttpHandlerOptions): Promise<ListPluginsCommandOutput>;
  listPlugins(args: ListPluginsCommandInput, cb: (err: any, data?: ListPluginsCommandOutput) => void): void;
  listPlugins(
    args: ListPluginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPluginsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRetrieversCommand}
   */
  listRetrievers(
    args: ListRetrieversCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRetrieversCommandOutput>;
  listRetrievers(args: ListRetrieversCommandInput, cb: (err: any, data?: ListRetrieversCommandOutput) => void): void;
  listRetrievers(
    args: ListRetrieversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRetrieversCommandOutput) => void
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
  putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
  putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
  putFeedback(
    args: PutFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGroupCommand}
   */
  putGroup(args: PutGroupCommandInput, options?: __HttpHandlerOptions): Promise<PutGroupCommandOutput>;
  putGroup(args: PutGroupCommandInput, cb: (err: any, data?: PutGroupCommandOutput) => void): void;
  putGroup(
    args: PutGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupCommandOutput) => void
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateIndex(args: UpdateIndexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexCommandOutput>;
  updateIndex(args: UpdateIndexCommandInput, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
  updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePluginCommand}
   */
  updatePlugin(args: UpdatePluginCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePluginCommandOutput>;
  updatePlugin(args: UpdatePluginCommandInput, cb: (err: any, data?: UpdatePluginCommandOutput) => void): void;
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
  updateRetriever(args: UpdateRetrieverCommandInput, cb: (err: any, data?: UpdateRetrieverCommandOutput) => void): void;
  updateRetriever(
    args: UpdateRetrieverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRetrieverCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
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
}

/**
 * <p>This is the <i>Amazon Q Business</i> API Reference. Amazon Q Business is a fully
 *             managed, generative-AI powered enterprise chat assistant that you can deploy within your
 *             organization. Amazon Q Business enhances employee productivity by supporting key tasks such
 *             as question-answering, knowledge discovery, writing email messages, summarizing text,
 *             drafting document outlines, and brainstorming ideas. Users ask questions of
 *             Amazon Q Business and get answers that are presented in a conversational manner. For an
 *             introduction to the service, see the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html">
 *                <i>Amazon Q Business User Guide</i>
 *             </a>.</p>
 *          <p>For an overview of the Amazon Q Business APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview">Overview of Amazon Q Business API operations</a>.</p>
 *          <p>For information about the IAM access control permissions you need to
 *             use this API, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html">IAM roles for Amazon Q Business</a> in the
 *                 <i>Amazon Q Business User Guide</i>.</p>
 *          <p>The following resources provide additional information about using the Amazon Q Business
 *             API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html">Setting up for
 *                             Amazon Q Business</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html">Amazon Q Business CLI Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/general/latest/gr/amazonq.html">Amazon Web Services General Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class QBusiness extends QBusinessClient implements QBusiness {}
createAggregatedClient(commands, QBusiness);
