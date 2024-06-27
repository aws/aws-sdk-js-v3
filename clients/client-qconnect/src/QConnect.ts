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
  CreateContentAssociationCommand,
  CreateContentAssociationCommandInput,
  CreateContentAssociationCommandOutput,
} from "./commands/CreateContentAssociationCommand";
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
  CreateQuickResponseCommand,
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "./commands/CreateQuickResponseCommand";
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
  DeleteContentAssociationCommand,
  DeleteContentAssociationCommandInput,
  DeleteContentAssociationCommandOutput,
} from "./commands/DeleteContentAssociationCommand";
import {
  DeleteContentCommand,
  DeleteContentCommandInput,
  DeleteContentCommandOutput,
} from "./commands/DeleteContentCommand";
import {
  DeleteImportJobCommand,
  DeleteImportJobCommandInput,
  DeleteImportJobCommandOutput,
} from "./commands/DeleteImportJobCommand";
import {
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DeleteQuickResponseCommand,
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "./commands/DeleteQuickResponseCommand";
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
import {
  GetContentAssociationCommand,
  GetContentAssociationCommandInput,
  GetContentAssociationCommandOutput,
} from "./commands/GetContentAssociationCommand";
import { GetContentCommand, GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import {
  GetContentSummaryCommand,
  GetContentSummaryCommandInput,
  GetContentSummaryCommandOutput,
} from "./commands/GetContentSummaryCommand";
import {
  GetImportJobCommand,
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
} from "./commands/GetImportJobCommand";
import {
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
} from "./commands/GetKnowledgeBaseCommand";
import {
  GetQuickResponseCommand,
  GetQuickResponseCommandInput,
  GetQuickResponseCommandOutput,
} from "./commands/GetQuickResponseCommand";
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
  ListContentAssociationsCommand,
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "./commands/ListContentAssociationsCommand";
import {
  ListContentsCommand,
  ListContentsCommandInput,
  ListContentsCommandOutput,
} from "./commands/ListContentsCommand";
import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "./commands/ListImportJobsCommand";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import {
  ListQuickResponsesCommand,
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "./commands/ListQuickResponsesCommand";
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
import { PutFeedbackCommand, PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
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
  SearchQuickResponsesCommand,
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "./commands/SearchQuickResponsesCommand";
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
import {
  StartImportJobCommand,
  StartImportJobCommandInput,
  StartImportJobCommandOutput,
} from "./commands/StartImportJobCommand";
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
import {
  UpdateQuickResponseCommand,
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "./commands/UpdateQuickResponseCommand";
import {
  UpdateSessionCommand,
  UpdateSessionCommandInput,
  UpdateSessionCommandOutput,
} from "./commands/UpdateSessionCommand";
import { QConnectClient, QConnectClientConfig } from "./QConnectClient";

const commands = {
  CreateAssistantCommand,
  CreateAssistantAssociationCommand,
  CreateContentCommand,
  CreateContentAssociationCommand,
  CreateKnowledgeBaseCommand,
  CreateQuickResponseCommand,
  CreateSessionCommand,
  DeleteAssistantCommand,
  DeleteAssistantAssociationCommand,
  DeleteContentCommand,
  DeleteContentAssociationCommand,
  DeleteImportJobCommand,
  DeleteKnowledgeBaseCommand,
  DeleteQuickResponseCommand,
  GetAssistantCommand,
  GetAssistantAssociationCommand,
  GetContentCommand,
  GetContentAssociationCommand,
  GetContentSummaryCommand,
  GetImportJobCommand,
  GetKnowledgeBaseCommand,
  GetQuickResponseCommand,
  GetRecommendationsCommand,
  GetSessionCommand,
  ListAssistantAssociationsCommand,
  ListAssistantsCommand,
  ListContentAssociationsCommand,
  ListContentsCommand,
  ListImportJobsCommand,
  ListKnowledgeBasesCommand,
  ListQuickResponsesCommand,
  ListTagsForResourceCommand,
  NotifyRecommendationsReceivedCommand,
  PutFeedbackCommand,
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
  UpdateSessionCommand,
};

export interface QConnect {
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
   * @see {@link CreateContentAssociationCommand}
   */
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContentAssociationCommandOutput>;
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    cb: (err: any, data?: CreateContentAssociationCommandOutput) => void
  ): void;
  createContentAssociation(
    args: CreateContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContentAssociationCommandOutput) => void
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
   * @see {@link DeleteContentAssociationCommand}
   */
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContentAssociationCommandOutput>;
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    cb: (err: any, data?: DeleteContentAssociationCommandOutput) => void
  ): void;
  deleteContentAssociation(
    args: DeleteContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContentAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportJobCommand}
   */
  deleteImportJob(
    args: DeleteImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportJobCommandOutput>;
  deleteImportJob(args: DeleteImportJobCommandInput, cb: (err: any, data?: DeleteImportJobCommandOutput) => void): void;
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
   * @see {@link GetContentAssociationCommand}
   */
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContentAssociationCommandOutput>;
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    cb: (err: any, data?: GetContentAssociationCommandOutput) => void
  ): void;
  getContentAssociation(
    args: GetContentAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContentAssociationCommandOutput) => void
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
  getImportJob(args: GetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetImportJobCommandOutput>;
  getImportJob(args: GetImportJobCommandInput, cb: (err: any, data?: GetImportJobCommandOutput) => void): void;
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
  listAssistants(): Promise<ListAssistantsCommandOutput>;
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
   * @see {@link ListContentAssociationsCommand}
   */
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContentAssociationsCommandOutput>;
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    cb: (err: any, data?: ListContentAssociationsCommandOutput) => void
  ): void;
  listContentAssociations(
    args: ListContentAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContentAssociationsCommandOutput) => void
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
   * @see {@link ListImportJobsCommand}
   */
  listImportJobs(
    args: ListImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportJobsCommandOutput>;
  listImportJobs(args: ListImportJobsCommandInput, cb: (err: any, data?: ListImportJobsCommandOutput) => void): void;
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
   * @see {@link StartImportJobCommand}
   */
  startImportJob(
    args: StartImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImportJobCommandOutput>;
  startImportJob(args: StartImportJobCommandInput, cb: (err: any, data?: StartImportJobCommandOutput) => void): void;
  startImportJob(
    args: StartImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportJobCommandOutput) => void
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
   * @see {@link UpdateSessionCommand}
   */
  updateSession(args: UpdateSessionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSessionCommandOutput>;
  updateSession(args: UpdateSessionCommandInput, cb: (err: any, data?: UpdateSessionCommandOutput) => void): void;
  updateSession(
    args: UpdateSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSessionCommandOutput) => void
  ): void;
}

/**
 * <note>
 *             <p>
 *                <b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse
 *           detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of
 *         the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of
 *         artificial intelligence (AI).</p>
 *          </note>
 *          <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced
 *       evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact
 *       center agents resolve customer issues quickly and accurately.</p>
 *          <p>Amazon Q in Connect automatically detects customer intent during calls and chats using conversational
 *       analytics and natural language understanding (NLU). It then provides agents with immediate,
 *       real-time generative responses and suggested actions, and links to relevant documents and
 *       articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer
 *       customer requests.</p>
 *          <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or
 *       manage content by uploading custom files.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI
 *         powered agent assistance in real-time</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 * @public
 */
export class QConnect extends QConnectClient implements QConnect {}
createAggregatedClient(commands, QConnect);
