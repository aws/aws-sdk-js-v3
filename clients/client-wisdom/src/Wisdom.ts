// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateAssistantAssociationCommandInput,
  type CreateAssistantAssociationCommandOutput,
  CreateAssistantAssociationCommand,
} from "./commands/CreateAssistantAssociationCommand";
import {
  type CreateAssistantCommandInput,
  type CreateAssistantCommandOutput,
  CreateAssistantCommand,
} from "./commands/CreateAssistantCommand";
import {
  type CreateContentCommandInput,
  type CreateContentCommandOutput,
  CreateContentCommand,
} from "./commands/CreateContentCommand";
import {
  type CreateKnowledgeBaseCommandInput,
  type CreateKnowledgeBaseCommandOutput,
  CreateKnowledgeBaseCommand,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  type CreateQuickResponseCommandInput,
  type CreateQuickResponseCommandOutput,
  CreateQuickResponseCommand,
} from "./commands/CreateQuickResponseCommand";
import {
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  CreateSessionCommand,
} from "./commands/CreateSessionCommand";
import {
  type DeleteAssistantAssociationCommandInput,
  type DeleteAssistantAssociationCommandOutput,
  DeleteAssistantAssociationCommand,
} from "./commands/DeleteAssistantAssociationCommand";
import {
  type DeleteAssistantCommandInput,
  type DeleteAssistantCommandOutput,
  DeleteAssistantCommand,
} from "./commands/DeleteAssistantCommand";
import {
  type DeleteContentCommandInput,
  type DeleteContentCommandOutput,
  DeleteContentCommand,
} from "./commands/DeleteContentCommand";
import {
  type DeleteImportJobCommandInput,
  type DeleteImportJobCommandOutput,
  DeleteImportJobCommand,
} from "./commands/DeleteImportJobCommand";
import {
  type DeleteKnowledgeBaseCommandInput,
  type DeleteKnowledgeBaseCommandOutput,
  DeleteKnowledgeBaseCommand,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  type DeleteQuickResponseCommandInput,
  type DeleteQuickResponseCommandOutput,
  DeleteQuickResponseCommand,
} from "./commands/DeleteQuickResponseCommand";
import {
  type GetAssistantAssociationCommandInput,
  type GetAssistantAssociationCommandOutput,
  GetAssistantAssociationCommand,
} from "./commands/GetAssistantAssociationCommand";
import {
  type GetAssistantCommandInput,
  type GetAssistantCommandOutput,
  GetAssistantCommand,
} from "./commands/GetAssistantCommand";
import {
  type GetContentCommandInput,
  type GetContentCommandOutput,
  GetContentCommand,
} from "./commands/GetContentCommand";
import {
  type GetContentSummaryCommandInput,
  type GetContentSummaryCommandOutput,
  GetContentSummaryCommand,
} from "./commands/GetContentSummaryCommand";
import {
  type GetImportJobCommandInput,
  type GetImportJobCommandOutput,
  GetImportJobCommand,
} from "./commands/GetImportJobCommand";
import {
  type GetKnowledgeBaseCommandInput,
  type GetKnowledgeBaseCommandOutput,
  GetKnowledgeBaseCommand,
} from "./commands/GetKnowledgeBaseCommand";
import {
  type GetQuickResponseCommandInput,
  type GetQuickResponseCommandOutput,
  GetQuickResponseCommand,
} from "./commands/GetQuickResponseCommand";
import {
  type GetRecommendationsCommandInput,
  type GetRecommendationsCommandOutput,
  GetRecommendationsCommand,
} from "./commands/GetRecommendationsCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type ListAssistantAssociationsCommandInput,
  type ListAssistantAssociationsCommandOutput,
  ListAssistantAssociationsCommand,
} from "./commands/ListAssistantAssociationsCommand";
import {
  type ListAssistantsCommandInput,
  type ListAssistantsCommandOutput,
  ListAssistantsCommand,
} from "./commands/ListAssistantsCommand";
import {
  type ListContentsCommandInput,
  type ListContentsCommandOutput,
  ListContentsCommand,
} from "./commands/ListContentsCommand";
import {
  type ListImportJobsCommandInput,
  type ListImportJobsCommandOutput,
  ListImportJobsCommand,
} from "./commands/ListImportJobsCommand";
import {
  type ListKnowledgeBasesCommandInput,
  type ListKnowledgeBasesCommandOutput,
  ListKnowledgeBasesCommand,
} from "./commands/ListKnowledgeBasesCommand";
import {
  type ListQuickResponsesCommandInput,
  type ListQuickResponsesCommandOutput,
  ListQuickResponsesCommand,
} from "./commands/ListQuickResponsesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type NotifyRecommendationsReceivedCommandInput,
  type NotifyRecommendationsReceivedCommandOutput,
  NotifyRecommendationsReceivedCommand,
} from "./commands/NotifyRecommendationsReceivedCommand";
import {
  type QueryAssistantCommandInput,
  type QueryAssistantCommandOutput,
  QueryAssistantCommand,
} from "./commands/QueryAssistantCommand";
import {
  type RemoveKnowledgeBaseTemplateUriCommandInput,
  type RemoveKnowledgeBaseTemplateUriCommandOutput,
  RemoveKnowledgeBaseTemplateUriCommand,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import {
  type SearchContentCommandInput,
  type SearchContentCommandOutput,
  SearchContentCommand,
} from "./commands/SearchContentCommand";
import {
  type SearchQuickResponsesCommandInput,
  type SearchQuickResponsesCommandOutput,
  SearchQuickResponsesCommand,
} from "./commands/SearchQuickResponsesCommand";
import {
  type SearchSessionsCommandInput,
  type SearchSessionsCommandOutput,
  SearchSessionsCommand,
} from "./commands/SearchSessionsCommand";
import {
  type StartContentUploadCommandInput,
  type StartContentUploadCommandOutput,
  StartContentUploadCommand,
} from "./commands/StartContentUploadCommand";
import {
  type StartImportJobCommandInput,
  type StartImportJobCommandOutput,
  StartImportJobCommand,
} from "./commands/StartImportJobCommand";
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
  type UpdateContentCommandInput,
  type UpdateContentCommandOutput,
  UpdateContentCommand,
} from "./commands/UpdateContentCommand";
import {
  type UpdateKnowledgeBaseTemplateUriCommandInput,
  type UpdateKnowledgeBaseTemplateUriCommandOutput,
  UpdateKnowledgeBaseTemplateUriCommand,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  type UpdateQuickResponseCommandInput,
  type UpdateQuickResponseCommandOutput,
  UpdateQuickResponseCommand,
} from "./commands/UpdateQuickResponseCommand";
import { paginateListAssistantAssociations } from "./pagination/ListAssistantAssociationsPaginator";
import { paginateListAssistants } from "./pagination/ListAssistantsPaginator";
import { paginateListContents } from "./pagination/ListContentsPaginator";
import { paginateListImportJobs } from "./pagination/ListImportJobsPaginator";
import { paginateListKnowledgeBases } from "./pagination/ListKnowledgeBasesPaginator";
import { paginateListQuickResponses } from "./pagination/ListQuickResponsesPaginator";
import { paginateQueryAssistant } from "./pagination/QueryAssistantPaginator";
import { paginateSearchContent } from "./pagination/SearchContentPaginator";
import { paginateSearchQuickResponses } from "./pagination/SearchQuickResponsesPaginator";
import { paginateSearchSessions } from "./pagination/SearchSessionsPaginator";
import { WisdomClient } from "./WisdomClient";

const commands = {
  CreateAssistantCommand,
  CreateAssistantAssociationCommand,
  CreateContentCommand,
  CreateKnowledgeBaseCommand,
  CreateQuickResponseCommand,
  CreateSessionCommand,
  DeleteAssistantCommand,
  DeleteAssistantAssociationCommand,
  DeleteContentCommand,
  DeleteImportJobCommand,
  DeleteKnowledgeBaseCommand,
  DeleteQuickResponseCommand,
  GetAssistantCommand,
  GetAssistantAssociationCommand,
  GetContentCommand,
  GetContentSummaryCommand,
  GetImportJobCommand,
  GetKnowledgeBaseCommand,
  GetQuickResponseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentsCommand,
  ListImportJobsCommand,
  ListKnowledgeBasesCommand,
  ListQuickResponsesCommand,
  ListTagsForResourceCommand,
  NotifyRecommendationsReceivedCommand,
  QueryAssistantCommand,
  RemoveKnowledgeBaseTemplateUriCommand,
  SearchContentCommand,
  SearchQuickResponsesCommand,
  SearchSessionsCommand,
  StartContentUploadCommand,
  StartImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateContentCommand,
  UpdateKnowledgeBaseTemplateUriCommand,
  UpdateQuickResponseCommand,
};
const paginators = {
  paginateListAssistantAssociations,
  paginateListAssistants,
  paginateListContents,
  paginateListImportJobs,
  paginateListKnowledgeBases,
  paginateListQuickResponses,
  paginateQueryAssistant,
  paginateSearchContent,
  paginateSearchQuickResponses,
  paginateSearchSessions,
};

export interface Wisdom {
  /**
   * @see {@link CreateAssistantCommand}
   */
  createAssistant(
    args: CreateAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssistantCommandOutput>;
  createAssistant(
    args: CreateAssistantCommandInput,
    cb: (err: any, data?: CreateAssistantCommandOutput) => void
  ): void;
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
  createContent(
    args: CreateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContentCommandOutput>;
  createContent(
    args: CreateContentCommandInput,
    cb: (err: any, data?: CreateContentCommandOutput) => void
  ): void;
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
   * @see {@link CreateQuickResponseCommand}
   */
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuickResponseCommandOutput>;
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    cb: (err: any, data?: CreateQuickResponseCommandOutput) => void
  ): void;
  createQuickResponse(
    args: CreateQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(
    args: CreateSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSessionCommandOutput>;
  createSession(
    args: CreateSessionCommandInput,
    cb: (err: any, data?: CreateSessionCommandOutput) => void
  ): void;
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
  deleteAssistant(
    args: DeleteAssistantCommandInput,
    cb: (err: any, data?: DeleteAssistantCommandOutput) => void
  ): void;
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
  deleteContent(
    args: DeleteContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContentCommandOutput>;
  deleteContent(
    args: DeleteContentCommandInput,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;
  deleteContent(
    args: DeleteContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportJobCommand}
   */
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportJobCommandOutput>;
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    cb: (err: any, data?: DeleteImportJobCommandOutput) => void
  ): void;
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportJobCommandOutput) => void
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
   * @see {@link DeleteQuickResponseCommand}
   */
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuickResponseCommandOutput>;
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    cb: (err: any, data?: DeleteQuickResponseCommandOutput) => void
  ): void;
  deleteQuickResponse(
    args: DeleteQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssistantCommand}
   */
  getAssistant(
    args: GetAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssistantCommandOutput>;
  getAssistant(
    args: GetAssistantCommandInput,
    cb: (err: any, data?: GetAssistantCommandOutput) => void
  ): void;
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
  getContent(
    args: GetContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentCommandOutput>;
  getContent(
    args: GetContentCommandInput,
    cb: (err: any, data?: GetContentCommandOutput) => void
  ): void;
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
   * @see {@link GetImportJobCommand}
   */
  getImportJob(
    args: GetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportJobCommandOutput>;
  getImportJob(
    args: GetImportJobCommandInput,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;
  getImportJob(
    args: GetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
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
   * @see {@link GetQuickResponseCommand}
   */
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuickResponseCommandOutput>;
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    cb: (err: any, data?: GetQuickResponseCommandOutput) => void
  ): void;
  getQuickResponse(
    args: GetQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuickResponseCommandOutput) => void
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
  getSession(
    args: GetSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
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
  listAssistants(): Promise<ListAssistantsCommandOutput>;
  listAssistants(
    args: ListAssistantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssistantsCommandOutput>;
  listAssistants(
    args: ListAssistantsCommandInput,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;
  listAssistants(
    args: ListAssistantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssistantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContentsCommand}
   */
  listContents(
    args: ListContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContentsCommandOutput>;
  listContents(
    args: ListContentsCommandInput,
    cb: (err: any, data?: ListContentsCommandOutput) => void
  ): void;
  listContents(
    args: ListContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportJobsCommand}
   */
  listImportJobs(
    args: ListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportJobsCommandOutput>;
  listImportJobs(
    args: ListImportJobsCommandInput,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;
  listImportJobs(
    args: ListImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   */
  listKnowledgeBases(): Promise<ListKnowledgeBasesCommandOutput>;
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
   * @see {@link ListQuickResponsesCommand}
   */
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuickResponsesCommandOutput>;
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    cb: (err: any, data?: ListQuickResponsesCommandOutput) => void
  ): void;
  listQuickResponses(
    args: ListQuickResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuickResponsesCommandOutput) => void
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
  queryAssistant(
    args: QueryAssistantCommandInput,
    cb: (err: any, data?: QueryAssistantCommandOutput) => void
  ): void;
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
  searchContent(
    args: SearchContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchContentCommandOutput>;
  searchContent(
    args: SearchContentCommandInput,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;
  searchContent(
    args: SearchContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchContentCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchQuickResponsesCommand}
   */
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchQuickResponsesCommandOutput>;
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    cb: (err: any, data?: SearchQuickResponsesCommandOutput) => void
  ): void;
  searchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchQuickResponsesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchSessionsCommand}
   */
  searchSessions(
    args: SearchSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchSessionsCommandOutput>;
  searchSessions(
    args: SearchSessionsCommandInput,
    cb: (err: any, data?: SearchSessionsCommandOutput) => void
  ): void;
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
   * @see {@link StartImportJobCommand}
   */
  startImportJob(
    args: StartImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportJobCommandOutput>;
  startImportJob(
    args: StartImportJobCommandInput,
    cb: (err: any, data?: StartImportJobCommandOutput) => void
  ): void;
  startImportJob(
    args: StartImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportJobCommandOutput) => void
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
   * @see {@link UpdateContentCommand}
   */
  updateContent(
    args: UpdateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContentCommandOutput>;
  updateContent(
    args: UpdateContentCommandInput,
    cb: (err: any, data?: UpdateContentCommandOutput) => void
  ): void;
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

  /**
   * @see {@link UpdateQuickResponseCommand}
   */
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuickResponseCommandOutput>;
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    cb: (err: any, data?: UpdateQuickResponseCommandOutput) => void
  ): void;
  updateQuickResponse(
    args: UpdateQuickResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuickResponseCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssistantAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssistantAssociationsCommandOutput}.
   */
  paginateListAssistantAssociations(
    args: ListAssistantAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssistantAssociationsCommandOutput>;

  /**
   * @see {@link ListAssistantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssistantsCommandOutput}.
   */
  paginateListAssistants(
    args?: ListAssistantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssistantsCommandOutput>;

  /**
   * @see {@link ListContentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContentsCommandOutput}.
   */
  paginateListContents(
    args: ListContentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContentsCommandOutput>;

  /**
   * @see {@link ListImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListImportJobsCommandOutput}.
   */
  paginateListImportJobs(
    args: ListImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListImportJobsCommandOutput>;

  /**
   * @see {@link ListKnowledgeBasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKnowledgeBasesCommandOutput}.
   */
  paginateListKnowledgeBases(
    args?: ListKnowledgeBasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKnowledgeBasesCommandOutput>;

  /**
   * @see {@link ListQuickResponsesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListQuickResponsesCommandOutput}.
   */
  paginateListQuickResponses(
    args: ListQuickResponsesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListQuickResponsesCommandOutput>;

  /**
   * @see {@link QueryAssistantCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link QueryAssistantCommandOutput}.
   */
  paginateQueryAssistant(
    args: QueryAssistantCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<QueryAssistantCommandOutput>;

  /**
   * @see {@link SearchContentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchContentCommandOutput}.
   */
  paginateSearchContent(
    args: SearchContentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchContentCommandOutput>;

  /**
   * @see {@link SearchQuickResponsesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchQuickResponsesCommandOutput}.
   */
  paginateSearchQuickResponses(
    args: SearchQuickResponsesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchQuickResponsesCommandOutput>;

  /**
   * @see {@link SearchSessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchSessionsCommandOutput}.
   */
  paginateSearchSessions(
    args: SearchSessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchSessionsCommandOutput>;
}

/**
 * <p>Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're
 *       actively speaking with customers. Agents can search across connected repositories from within
 *       their agent desktop to find answers quickly. Use Amazon Connect Wisdom to create an assistant and a
 *       knowledge base, for example, or manage content by uploading custom files.</p>
 * @public
 */
export class Wisdom extends WisdomClient implements Wisdom {}
createAggregatedClient(commands, Wisdom, { paginators });
