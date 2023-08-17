// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAssistantAssociationCommand,
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "./commands/CreateAssistantAssociationCommand";
import {
  CreateAssistantCommand,
  CreateAssistantCommandInput,
  CreateAssistantCommandOutput,
} from "./commands/CreateAssistantCommand";
import {
  CreateContentCommand,
  CreateContentCommandInput,
  CreateContentCommandOutput,
} from "./commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  CreateSessionCommand,
  CreateSessionCommandInput,
  CreateSessionCommandOutput,
} from "./commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommand,
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "./commands/DeleteAssistantAssociationCommand";
import {
  DeleteAssistantCommand,
  DeleteAssistantCommandInput,
  DeleteAssistantCommandOutput,
} from "./commands/DeleteAssistantCommand";
import {
  DeleteContentCommand,
  DeleteContentCommandInput,
  DeleteContentCommandOutput,
} from "./commands/DeleteContentCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  GetAssistantAssociationCommand,
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "./commands/GetAssistantAssociationCommand";
import {
  GetAssistantCommand,
  GetAssistantCommandInput,
  GetAssistantCommandOutput,
} from "./commands/GetAssistantCommand";
import { GetContentCommand, GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import {
  GetContentSummaryCommand,
  GetContentSummaryCommandInput,
  GetContentSummaryCommandOutput,
} from "./commands/GetContentSummaryCommand";
import {
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
} from "./commands/GetKnowledgeBaseCommand";
import {
  GetRecommendationsCommand,
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "./commands/ListAssistantAssociationsCommand";
import {
  ListAssistantsCommand,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput,
} from "./commands/ListAssistantsCommand";
import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "./commands/ListContentsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommand,
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "./commands/NotifyRecommendationsReceivedCommand";
import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "./commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommand,
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import {
  SearchContentCommand,
  SearchContentCommandInput,
  SearchContentCommandOutput,
} from "./commands/SearchContentCommand";
import {
  SearchSessionsCommand,
  SearchSessionsCommandInput,
  SearchSessionsCommandOutput,
} from "./commands/SearchSessionsCommand";
import {
  StartContentUploadCommand,
  StartContentUploadCommandInput,
  StartContentUploadCommandOutput,
} from "./commands/StartContentUploadCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateContentCommand,
  UpdateContentCommandInput,
  UpdateContentCommandOutput,
} from "./commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import { WisdomClient, WisdomClientConfig } from "./WisdomClient";

const commands = {
  CreateAssistantCommand,
  CreateAssistantAssociationCommand,
  CreateContentCommand,
  CreateKnowledgeBaseCommand,
  CreateSessionCommand,
  DeleteAssistantCommand,
  DeleteAssistantAssociationCommand,
  DeleteContentCommand,
  DeleteKnowledgeBaseCommand,
  GetAssistantCommand,
  GetAssistantAssociationCommand,
  GetContentCommand,
  GetContentSummaryCommand,
  GetKnowledgeBaseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentsCommand,
  ListKnowledgeBasesCommand,
  ListTagsForResourceCommand,
  NotifyRecommendationsReceivedCommand,
  QueryAssistantCommand,
  RemoveKnowledgeBaseTemplateUriCommand,
  SearchContentCommand,
  SearchSessionsCommand,
  StartContentUploadCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateContentCommand,
  UpdateKnowledgeBaseTemplateUriCommand,
};

export interface Wisdom {
  /**
   * @see {@link CreateAssistantCommand}
   */
  createAssistant(
    args: CreateAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantCommandOutput>;
  createAssistant(args: CreateAssistantCommandInput, cb: (err: any, data?: CreateAssistantCommandOutput) => void): void;
  createAssistant(
    args: CreateAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssistantAssociationCommand}
   */
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantAssociationCommandOutput>;
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;
  createAssistantAssociation(
    args: CreateAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContentCommand}
   */
  createContent(args: CreateContentCommandInput, options?: __HttpHandlerOptions): Promise<CreateContentCommandOutput>;
  createContent(args: CreateContentCommandInput, cb: (err: any, data?: CreateContentCommandOutput) => void): void;
  createContent(
    args: CreateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKnowledgeBaseCommand}
   */
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKnowledgeBaseCommandOutput>;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;
  createKnowledgeBase(
    args: CreateKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
  createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
  createSession(
    args: CreateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssistantCommand}
   */
  deleteAssistant(
    args: DeleteAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantCommandOutput>;
  deleteAssistant(args: DeleteAssistantCommandInput, cb: (err: any, data?: DeleteAssistantCommandOutput) => void): void;
  deleteAssistant(
    args: DeleteAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssistantAssociationCommand}
   */
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssistantAssociationCommandOutput>;
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;
  deleteAssistantAssociation(
    args: DeleteAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContentCommand}
   */
  deleteContent(args: DeleteContentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContentCommandOutput>;
  deleteContent(args: DeleteContentCommandInput, cb: (err: any, data?: DeleteContentCommandOutput) => void): void;
  deleteContent(
    args: DeleteContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKnowledgeBaseCommand}
   */
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnowledgeBaseCommandOutput>;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;
  deleteKnowledgeBase(
    args: DeleteKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssistantCommand}
   */
  getAssistant(args: GetAssistantCommandInput, options?: __HttpHandlerOptions): Promise<GetAssistantCommandOutput>;
  getAssistant(args: GetAssistantCommandInput, cb: (err: any, data?: GetAssistantCommandOutput) => void): void;
  getAssistant(
    args: GetAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssistantAssociationCommand}
   */
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssistantAssociationCommandOutput>;
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;
  getAssistantAssociation(
    args: GetAssistantAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentCommand}
   */
  getContent(args: GetContentCommandInput, options?: __HttpHandlerOptions): Promise<GetContentCommandOutput>;
  getContent(args: GetContentCommandInput, cb: (err: any, data?: GetContentCommandOutput) => void): void;
  getContent(
    args: GetContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContentSummaryCommand}
   */
  getContentSummary(
    args: GetContentSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentSummaryCommandOutput>;
  getContentSummary(
    args: GetContentSummaryCommandInput,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;
  getContentSummary(
    args: GetContentSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKnowledgeBaseCommand}
   */
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKnowledgeBaseCommandOutput>;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;
  getKnowledgeBase(
    args: GetKnowledgeBaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommendationsCommand}
   */
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommendationsCommandOutput>;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;
  getRecommendations(
    args: GetRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommendationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssistantAssociationsCommand}
   */
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantAssociationsCommandOutput>;
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;
  listAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssistantsCommand}
   */
  listAssistants(
    args: ListAssistantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantsCommandOutput>;
  listAssistants(args: ListAssistantsCommandInput, cb: (err: any, data?: ListAssistantsCommandOutput) => void): void;
  listAssistants(
    args: ListAssistantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContentsCommand}
   */
  listContents(args: ListContentsCommandInput, options?: __HttpHandlerOptions): Promise<ListContentsCommandOutput>;
  listContents(args: ListContentsCommandInput, cb: (err: any, data?: ListContentsCommandOutput) => void): void;
  listContents(
    args: ListContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKnowledgeBasesCommandOutput>;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
  ): void;
  listKnowledgeBases(
    args: ListKnowledgeBasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void
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
   * @see {@link NotifyRecommendationsReceivedCommand}
   */
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<NotifyRecommendationsReceivedCommandOutput>;
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;
  notifyRecommendationsReceived(
    args: NotifyRecommendationsReceivedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryAssistantCommand}
   */
  queryAssistant(
    args: QueryAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryAssistantCommandOutput>;
  queryAssistant(args: QueryAssistantCommandInput, cb: (err: any, data?: QueryAssistantCommandOutput) => void): void;
  queryAssistant(
    args: QueryAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveKnowledgeBaseTemplateUriCommand}
   */
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput>;
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  removeKnowledgeBaseTemplateUri(
    args: RemoveKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchContentCommand}
   */
  searchContent(args: SearchContentCommandInput, options?: __HttpHandlerOptions): Promise<SearchContentCommandOutput>;
  searchContent(args: SearchContentCommandInput, cb: (err: any, data?: SearchContentCommandOutput) => void): void;
  searchContent(
    args: SearchContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSessionsCommand}
   */
  searchSessions(
    args: SearchSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSessionsCommandOutput>;
  searchSessions(args: SearchSessionsCommandInput, cb: (err: any, data?: SearchSessionsCommandOutput) => void): void;
  searchSessions(
    args: SearchSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartContentUploadCommand}
   */
  startContentUpload(
    args: StartContentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartContentUploadCommandOutput>;
  startContentUpload(
    args: StartContentUploadCommandInput,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
  ): void;
  startContentUpload(
    args: StartContentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartContentUploadCommandOutput) => void
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
   * @see {@link UpdateContentCommand}
   */
  updateContent(args: UpdateContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContentCommandOutput>;
  updateContent(args: UpdateContentCommandInput, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;
  updateContent(
    args: UpdateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKnowledgeBaseTemplateUriCommand}
   */
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput>;
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
  updateKnowledgeBaseTemplateUri(
    args: UpdateKnowledgeBaseTemplateUriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're
 *       actively speaking with customers. Agents can search across connected repositories from within
 *       their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a
 *       knowledge base, for example, or manage content by uploading custom files.</p>
 */
export class Wisdom extends WisdomClient implements Wisdom {}
createAggregatedClient(commands, Wisdom);
