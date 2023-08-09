// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeCommitClient, CodeCommitClientConfig } from "./CodeCommitClient";
import {
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
} from "./commands/AssociateApprovalRuleTemplateWithRepositoryCommand";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
} from "./commands/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
import {
  BatchDescribeMergeConflictsCommand,
  BatchDescribeMergeConflictsCommandInput,
  BatchDescribeMergeConflictsCommandOutput,
} from "./commands/BatchDescribeMergeConflictsCommand";
import {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput,
} from "./commands/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
import {
  BatchGetCommitsCommand,
  BatchGetCommitsCommandInput,
  BatchGetCommitsCommandOutput,
} from "./commands/BatchGetCommitsCommand";
import {
  BatchGetRepositoriesCommand,
  BatchGetRepositoriesCommandInput,
  BatchGetRepositoriesCommandOutput,
} from "./commands/BatchGetRepositoriesCommand";
import {
  CreateApprovalRuleTemplateCommand,
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
} from "./commands/CreateApprovalRuleTemplateCommand";
import {
  CreateBranchCommand,
  CreateBranchCommandInput,
  CreateBranchCommandOutput,
} from "./commands/CreateBranchCommand";
import {
  CreateCommitCommand,
  CreateCommitCommandInput,
  CreateCommitCommandOutput,
} from "./commands/CreateCommitCommand";
import {
  CreatePullRequestApprovalRuleCommand,
  CreatePullRequestApprovalRuleCommandInput,
  CreatePullRequestApprovalRuleCommandOutput,
} from "./commands/CreatePullRequestApprovalRuleCommand";
import {
  CreatePullRequestCommand,
  CreatePullRequestCommandInput,
  CreatePullRequestCommandOutput,
} from "./commands/CreatePullRequestCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  CreateUnreferencedMergeCommitCommand,
  CreateUnreferencedMergeCommitCommandInput,
  CreateUnreferencedMergeCommitCommandOutput,
} from "./commands/CreateUnreferencedMergeCommitCommand";
import {
  DeleteApprovalRuleTemplateCommand,
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
} from "./commands/DeleteApprovalRuleTemplateCommand";
import {
  DeleteBranchCommand,
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput,
} from "./commands/DeleteBranchCommand";
import {
  DeleteCommentContentCommand,
  DeleteCommentContentCommandInput,
  DeleteCommentContentCommandOutput,
} from "./commands/DeleteCommentContentCommand";
import { DeleteFileCommand, DeleteFileCommandInput, DeleteFileCommandOutput } from "./commands/DeleteFileCommand";
import {
  DeletePullRequestApprovalRuleCommand,
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
} from "./commands/DeletePullRequestApprovalRuleCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "./commands/DescribeMergeConflictsCommand";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "./commands/DescribePullRequestEventsCommand";
import {
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  DisassociateApprovalRuleTemplateFromRepositoryCommandOutput,
} from "./commands/DisassociateApprovalRuleTemplateFromRepositoryCommand";
import {
  EvaluatePullRequestApprovalRulesCommand,
  EvaluatePullRequestApprovalRulesCommandInput,
  EvaluatePullRequestApprovalRulesCommandOutput,
} from "./commands/EvaluatePullRequestApprovalRulesCommand";
import {
  GetApprovalRuleTemplateCommand,
  GetApprovalRuleTemplateCommandInput,
  GetApprovalRuleTemplateCommandOutput,
} from "./commands/GetApprovalRuleTemplateCommand";
import { GetBlobCommand, GetBlobCommandInput, GetBlobCommandOutput } from "./commands/GetBlobCommand";
import { GetBranchCommand, GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import { GetCommentCommand, GetCommentCommandInput, GetCommentCommandOutput } from "./commands/GetCommentCommand";
import {
  GetCommentReactionsCommand,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "./commands/GetCommentReactionsCommand";
import {
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "./commands/GetCommentsForComparedCommitCommand";
import {
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "./commands/GetCommentsForPullRequestCommand";
import { GetCommitCommand, GetCommitCommandInput, GetCommitCommandOutput } from "./commands/GetCommitCommand";
import {
  GetDifferencesCommand,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
} from "./commands/GetDifferencesCommand";
import { GetFileCommand, GetFileCommandInput, GetFileCommandOutput } from "./commands/GetFileCommand";
import { GetFolderCommand, GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import {
  GetMergeCommitCommand,
  GetMergeCommitCommandInput,
  GetMergeCommitCommandOutput,
} from "./commands/GetMergeCommitCommand";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "./commands/GetMergeConflictsCommand";
import {
  GetMergeOptionsCommand,
  GetMergeOptionsCommandInput,
  GetMergeOptionsCommandOutput,
} from "./commands/GetMergeOptionsCommand";
import {
  GetPullRequestApprovalStatesCommand,
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
} from "./commands/GetPullRequestApprovalStatesCommand";
import {
  GetPullRequestCommand,
  GetPullRequestCommandInput,
  GetPullRequestCommandOutput,
} from "./commands/GetPullRequestCommand";
import {
  GetPullRequestOverrideStateCommand,
  GetPullRequestOverrideStateCommandInput,
  GetPullRequestOverrideStateCommandOutput,
} from "./commands/GetPullRequestOverrideStateCommand";
import {
  GetRepositoryCommand,
  GetRepositoryCommandInput,
  GetRepositoryCommandOutput,
} from "./commands/GetRepositoryCommand";
import {
  GetRepositoryTriggersCommand,
  GetRepositoryTriggersCommandInput,
  GetRepositoryTriggersCommandOutput,
} from "./commands/GetRepositoryTriggersCommand";
import {
  ListApprovalRuleTemplatesCommand,
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "./commands/ListApprovalRuleTemplatesCommand";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "./commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "./commands/ListBranchesCommand";
import {
  ListPullRequestsCommand,
  ListPullRequestsCommandInput,
  ListPullRequestsCommandOutput,
} from "./commands/ListPullRequestsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "./commands/ListRepositoriesForApprovalRuleTemplateCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  MergeBranchesByFastForwardCommand,
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
} from "./commands/MergeBranchesByFastForwardCommand";
import {
  MergeBranchesBySquashCommand,
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
} from "./commands/MergeBranchesBySquashCommand";
import {
  MergeBranchesByThreeWayCommand,
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
} from "./commands/MergeBranchesByThreeWayCommand";
import {
  MergePullRequestByFastForwardCommand,
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
} from "./commands/MergePullRequestByFastForwardCommand";
import {
  MergePullRequestBySquashCommand,
  MergePullRequestBySquashCommandInput,
  MergePullRequestBySquashCommandOutput,
} from "./commands/MergePullRequestBySquashCommand";
import {
  MergePullRequestByThreeWayCommand,
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
} from "./commands/MergePullRequestByThreeWayCommand";
import {
  OverridePullRequestApprovalRulesCommand,
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
} from "./commands/OverridePullRequestApprovalRulesCommand";
import {
  PostCommentForComparedCommitCommand,
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
} from "./commands/PostCommentForComparedCommitCommand";
import {
  PostCommentForPullRequestCommand,
  PostCommentForPullRequestCommandInput,
  PostCommentForPullRequestCommandOutput,
} from "./commands/PostCommentForPullRequestCommand";
import {
  PostCommentReplyCommand,
  PostCommentReplyCommandInput,
  PostCommentReplyCommandOutput,
} from "./commands/PostCommentReplyCommand";
import {
  PutCommentReactionCommand,
  PutCommentReactionCommandInput,
  PutCommentReactionCommandOutput,
} from "./commands/PutCommentReactionCommand";
import { PutFileCommand, PutFileCommandInput, PutFileCommandOutput } from "./commands/PutFileCommand";
import {
  PutRepositoryTriggersCommand,
  PutRepositoryTriggersCommandInput,
  PutRepositoryTriggersCommandOutput,
} from "./commands/PutRepositoryTriggersCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestRepositoryTriggersCommand,
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
} from "./commands/TestRepositoryTriggersCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApprovalRuleTemplateContentCommand,
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateContentCommand";
import {
  UpdateApprovalRuleTemplateDescriptionCommand,
  UpdateApprovalRuleTemplateDescriptionCommandInput,
  UpdateApprovalRuleTemplateDescriptionCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateDescriptionCommand";
import {
  UpdateApprovalRuleTemplateNameCommand,
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
} from "./commands/UpdateApprovalRuleTemplateNameCommand";
import {
  UpdateCommentCommand,
  UpdateCommentCommandInput,
  UpdateCommentCommandOutput,
} from "./commands/UpdateCommentCommand";
import {
  UpdateDefaultBranchCommand,
  UpdateDefaultBranchCommandInput,
  UpdateDefaultBranchCommandOutput,
} from "./commands/UpdateDefaultBranchCommand";
import {
  UpdatePullRequestApprovalRuleContentCommand,
  UpdatePullRequestApprovalRuleContentCommandInput,
  UpdatePullRequestApprovalRuleContentCommandOutput,
} from "./commands/UpdatePullRequestApprovalRuleContentCommand";
import {
  UpdatePullRequestApprovalStateCommand,
  UpdatePullRequestApprovalStateCommandInput,
  UpdatePullRequestApprovalStateCommandOutput,
} from "./commands/UpdatePullRequestApprovalStateCommand";
import {
  UpdatePullRequestDescriptionCommand,
  UpdatePullRequestDescriptionCommandInput,
  UpdatePullRequestDescriptionCommandOutput,
} from "./commands/UpdatePullRequestDescriptionCommand";
import {
  UpdatePullRequestStatusCommand,
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
} from "./commands/UpdatePullRequestStatusCommand";
import {
  UpdatePullRequestTitleCommand,
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
} from "./commands/UpdatePullRequestTitleCommand";
import {
  UpdateRepositoryDescriptionCommand,
  UpdateRepositoryDescriptionCommandInput,
  UpdateRepositoryDescriptionCommandOutput,
} from "./commands/UpdateRepositoryDescriptionCommand";
import {
  UpdateRepositoryNameCommand,
  UpdateRepositoryNameCommandInput,
  UpdateRepositoryNameCommandOutput,
} from "./commands/UpdateRepositoryNameCommand";

const commands = {
  AssociateApprovalRuleTemplateWithRepositoryCommand,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommand,
  BatchDescribeMergeConflictsCommand,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  BatchGetCommitsCommand,
  BatchGetRepositoriesCommand,
  CreateApprovalRuleTemplateCommand,
  CreateBranchCommand,
  CreateCommitCommand,
  CreatePullRequestCommand,
  CreatePullRequestApprovalRuleCommand,
  CreateRepositoryCommand,
  CreateUnreferencedMergeCommitCommand,
  DeleteApprovalRuleTemplateCommand,
  DeleteBranchCommand,
  DeleteCommentContentCommand,
  DeleteFileCommand,
  DeletePullRequestApprovalRuleCommand,
  DeleteRepositoryCommand,
  DescribeMergeConflictsCommand,
  DescribePullRequestEventsCommand,
  DisassociateApprovalRuleTemplateFromRepositoryCommand,
  EvaluatePullRequestApprovalRulesCommand,
  GetApprovalRuleTemplateCommand,
  GetBlobCommand,
  GetBranchCommand,
  GetCommentCommand,
  GetCommentReactionsCommand,
  GetCommentsForComparedCommitCommand,
  GetCommentsForPullRequestCommand,
  GetCommitCommand,
  GetDifferencesCommand,
  GetFileCommand,
  GetFolderCommand,
  GetMergeCommitCommand,
  GetMergeConflictsCommand,
  GetMergeOptionsCommand,
  GetPullRequestCommand,
  GetPullRequestApprovalStatesCommand,
  GetPullRequestOverrideStateCommand,
  GetRepositoryCommand,
  GetRepositoryTriggersCommand,
  ListApprovalRuleTemplatesCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListBranchesCommand,
  ListPullRequestsCommand,
  ListRepositoriesCommand,
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListTagsForResourceCommand,
  MergeBranchesByFastForwardCommand,
  MergeBranchesBySquashCommand,
  MergeBranchesByThreeWayCommand,
  MergePullRequestByFastForwardCommand,
  MergePullRequestBySquashCommand,
  MergePullRequestByThreeWayCommand,
  OverridePullRequestApprovalRulesCommand,
  PostCommentForComparedCommitCommand,
  PostCommentForPullRequestCommand,
  PostCommentReplyCommand,
  PutCommentReactionCommand,
  PutFileCommand,
  PutRepositoryTriggersCommand,
  TagResourceCommand,
  TestRepositoryTriggersCommand,
  UntagResourceCommand,
  UpdateApprovalRuleTemplateContentCommand,
  UpdateApprovalRuleTemplateDescriptionCommand,
  UpdateApprovalRuleTemplateNameCommand,
  UpdateCommentCommand,
  UpdateDefaultBranchCommand,
  UpdatePullRequestApprovalRuleContentCommand,
  UpdatePullRequestApprovalStateCommand,
  UpdatePullRequestDescriptionCommand,
  UpdatePullRequestStatusCommand,
  UpdatePullRequestTitleCommand,
  UpdateRepositoryDescriptionCommand,
  UpdateRepositoryNameCommand,
};

export interface CodeCommit {
  /**
   * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommand}
   */
  associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput>;
  associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void
  ): void;
  associateApprovalRuleTemplateWithRepository(
    args: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApprovalRuleTemplateWithRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommand}
   */
  batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput>;
  batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void
  ): void;
  batchAssociateApprovalRuleTemplateWithRepositories(
    args: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeMergeConflictsCommand}
   */
  batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeMergeConflictsCommandOutput>;
  batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void
  ): void;
  batchDescribeMergeConflicts(
    args: BatchDescribeMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeMergeConflictsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand}
   */
  batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput>;
  batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void
  ): void;
  batchDisassociateApprovalRuleTemplateFromRepositories(
    args: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCommitsCommand}
   */
  batchGetCommits(
    args: BatchGetCommitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCommitsCommandOutput>;
  batchGetCommits(args: BatchGetCommitsCommandInput, cb: (err: any, data?: BatchGetCommitsCommandOutput) => void): void;
  batchGetCommits(
    args: BatchGetCommitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCommitsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetRepositoriesCommand}
   */
  batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetRepositoriesCommandOutput>;
  batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void
  ): void;
  batchGetRepositories(
    args: BatchGetRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApprovalRuleTemplateCommand}
   */
  createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApprovalRuleTemplateCommandOutput>;
  createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void
  ): void;
  createApprovalRuleTemplate(
    args: CreateApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApprovalRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBranchCommand}
   */
  createBranch(args: CreateBranchCommandInput, options?: __HttpHandlerOptions): Promise<CreateBranchCommandOutput>;
  createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
  createBranch(
    args: CreateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCommitCommand}
   */
  createCommit(args: CreateCommitCommandInput, options?: __HttpHandlerOptions): Promise<CreateCommitCommandOutput>;
  createCommit(args: CreateCommitCommandInput, cb: (err: any, data?: CreateCommitCommandOutput) => void): void;
  createCommit(
    args: CreateCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePullRequestCommand}
   */
  createPullRequest(
    args: CreatePullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePullRequestCommandOutput>;
  createPullRequest(
    args: CreatePullRequestCommandInput,
    cb: (err: any, data?: CreatePullRequestCommandOutput) => void
  ): void;
  createPullRequest(
    args: CreatePullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePullRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePullRequestApprovalRuleCommand}
   */
  createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePullRequestApprovalRuleCommandOutput>;
  createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void
  ): void;
  createPullRequestApprovalRule(
    args: CreatePullRequestApprovalRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePullRequestApprovalRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUnreferencedMergeCommitCommand}
   */
  createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUnreferencedMergeCommitCommandOutput>;
  createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void
  ): void;
  createUnreferencedMergeCommit(
    args: CreateUnreferencedMergeCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUnreferencedMergeCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApprovalRuleTemplateCommand}
   */
  deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApprovalRuleTemplateCommandOutput>;
  deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void
  ): void;
  deleteApprovalRuleTemplate(
    args: DeleteApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApprovalRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBranchCommand}
   */
  deleteBranch(args: DeleteBranchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBranchCommandOutput>;
  deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
  deleteBranch(
    args: DeleteBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCommentContentCommand}
   */
  deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCommentContentCommandOutput>;
  deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    cb: (err: any, data?: DeleteCommentContentCommandOutput) => void
  ): void;
  deleteCommentContent(
    args: DeleteCommentContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCommentContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileCommand}
   */
  deleteFile(args: DeleteFileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFileCommandOutput>;
  deleteFile(args: DeleteFileCommandInput, cb: (err: any, data?: DeleteFileCommandOutput) => void): void;
  deleteFile(
    args: DeleteFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePullRequestApprovalRuleCommand}
   */
  deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePullRequestApprovalRuleCommandOutput>;
  deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void
  ): void;
  deletePullRequestApprovalRule(
    args: DeletePullRequestApprovalRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePullRequestApprovalRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMergeConflictsCommand}
   */
  describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMergeConflictsCommandOutput>;
  describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void
  ): void;
  describeMergeConflicts(
    args: DescribeMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMergeConflictsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePullRequestEventsCommand}
   */
  describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePullRequestEventsCommandOutput>;
  describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void
  ): void;
  describePullRequestEvents(
    args: DescribePullRequestEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePullRequestEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommand}
   */
  disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput>;
  disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void
  ): void;
  disassociateApprovalRuleTemplateFromRepository(
    args: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link EvaluatePullRequestApprovalRulesCommand}
   */
  evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluatePullRequestApprovalRulesCommandOutput>;
  evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void
  ): void;
  evaluatePullRequestApprovalRules(
    args: EvaluatePullRequestApprovalRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluatePullRequestApprovalRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApprovalRuleTemplateCommand}
   */
  getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApprovalRuleTemplateCommandOutput>;
  getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void
  ): void;
  getApprovalRuleTemplate(
    args: GetApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApprovalRuleTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBlobCommand}
   */
  getBlob(args: GetBlobCommandInput, options?: __HttpHandlerOptions): Promise<GetBlobCommandOutput>;
  getBlob(args: GetBlobCommandInput, cb: (err: any, data?: GetBlobCommandOutput) => void): void;
  getBlob(
    args: GetBlobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBranchCommand}
   */
  getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
  getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
  getBranch(
    args: GetBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommentCommand}
   */
  getComment(args: GetCommentCommandInput, options?: __HttpHandlerOptions): Promise<GetCommentCommandOutput>;
  getComment(args: GetCommentCommandInput, cb: (err: any, data?: GetCommentCommandOutput) => void): void;
  getComment(
    args: GetCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommentReactionsCommand}
   */
  getCommentReactions(
    args: GetCommentReactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentReactionsCommandOutput>;
  getCommentReactions(
    args: GetCommentReactionsCommandInput,
    cb: (err: any, data?: GetCommentReactionsCommandOutput) => void
  ): void;
  getCommentReactions(
    args: GetCommentReactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentReactionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommentsForComparedCommitCommand}
   */
  getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentsForComparedCommitCommandOutput>;
  getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void
  ): void;
  getCommentsForComparedCommit(
    args: GetCommentsForComparedCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentsForComparedCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommentsForPullRequestCommand}
   */
  getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCommentsForPullRequestCommandOutput>;
  getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void
  ): void;
  getCommentsForPullRequest(
    args: GetCommentsForPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommentsForPullRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCommitCommand}
   */
  getCommit(args: GetCommitCommandInput, options?: __HttpHandlerOptions): Promise<GetCommitCommandOutput>;
  getCommit(args: GetCommitCommandInput, cb: (err: any, data?: GetCommitCommandOutput) => void): void;
  getCommit(
    args: GetCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDifferencesCommand}
   */
  getDifferences(
    args: GetDifferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDifferencesCommandOutput>;
  getDifferences(args: GetDifferencesCommandInput, cb: (err: any, data?: GetDifferencesCommandOutput) => void): void;
  getDifferences(
    args: GetDifferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDifferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFileCommand}
   */
  getFile(args: GetFileCommandInput, options?: __HttpHandlerOptions): Promise<GetFileCommandOutput>;
  getFile(args: GetFileCommandInput, cb: (err: any, data?: GetFileCommandOutput) => void): void;
  getFile(
    args: GetFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFolderCommand}
   */
  getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
  getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
  getFolder(
    args: GetFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMergeCommitCommand}
   */
  getMergeCommit(
    args: GetMergeCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeCommitCommandOutput>;
  getMergeCommit(args: GetMergeCommitCommandInput, cb: (err: any, data?: GetMergeCommitCommandOutput) => void): void;
  getMergeCommit(
    args: GetMergeCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMergeConflictsCommand}
   */
  getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeConflictsCommandOutput>;
  getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    cb: (err: any, data?: GetMergeConflictsCommandOutput) => void
  ): void;
  getMergeConflicts(
    args: GetMergeConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeConflictsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMergeOptionsCommand}
   */
  getMergeOptions(
    args: GetMergeOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMergeOptionsCommandOutput>;
  getMergeOptions(args: GetMergeOptionsCommandInput, cb: (err: any, data?: GetMergeOptionsCommandOutput) => void): void;
  getMergeOptions(
    args: GetMergeOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMergeOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPullRequestCommand}
   */
  getPullRequest(
    args: GetPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestCommandOutput>;
  getPullRequest(args: GetPullRequestCommandInput, cb: (err: any, data?: GetPullRequestCommandOutput) => void): void;
  getPullRequest(
    args: GetPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPullRequestApprovalStatesCommand}
   */
  getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestApprovalStatesCommandOutput>;
  getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void
  ): void;
  getPullRequestApprovalStates(
    args: GetPullRequestApprovalStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestApprovalStatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPullRequestOverrideStateCommand}
   */
  getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPullRequestOverrideStateCommandOutput>;
  getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void
  ): void;
  getPullRequestOverrideState(
    args: GetPullRequestOverrideStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPullRequestOverrideStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryCommand}
   */
  getRepository(args: GetRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<GetRepositoryCommandOutput>;
  getRepository(args: GetRepositoryCommandInput, cb: (err: any, data?: GetRepositoryCommandOutput) => void): void;
  getRepository(
    args: GetRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryTriggersCommand}
   */
  getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryTriggersCommandOutput>;
  getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void
  ): void;
  getRepositoryTriggers(
    args: GetRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryTriggersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApprovalRuleTemplatesCommand}
   */
  listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApprovalRuleTemplatesCommandOutput>;
  listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void
  ): void;
  listApprovalRuleTemplates(
    args: ListApprovalRuleTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApprovalRuleTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedApprovalRuleTemplatesForRepositoryCommand}
   */
  listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput>;
  listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void
  ): void;
  listAssociatedApprovalRuleTemplatesForRepository(
    args: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBranchesCommand}
   */
  listBranches(args: ListBranchesCommandInput, options?: __HttpHandlerOptions): Promise<ListBranchesCommandOutput>;
  listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
  listBranches(
    args: ListBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPullRequestsCommand}
   */
  listPullRequests(
    args: ListPullRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPullRequestsCommandOutput>;
  listPullRequests(
    args: ListPullRequestsCommandInput,
    cb: (err: any, data?: ListPullRequestsCommandOutput) => void
  ): void;
  listPullRequests(
    args: ListPullRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPullRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoriesCommand}
   */
  listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoriesForApprovalRuleTemplateCommand}
   */
  listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput>;
  listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void
  ): void;
  listRepositoriesForApprovalRuleTemplate(
    args: ListRepositoriesForApprovalRuleTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesForApprovalRuleTemplateCommandOutput) => void
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
   * @see {@link MergeBranchesByFastForwardCommand}
   */
  mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesByFastForwardCommandOutput>;
  mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void
  ): void;
  mergeBranchesByFastForward(
    args: MergeBranchesByFastForwardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesByFastForwardCommandOutput) => void
  ): void;

  /**
   * @see {@link MergeBranchesBySquashCommand}
   */
  mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesBySquashCommandOutput>;
  mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void
  ): void;
  mergeBranchesBySquash(
    args: MergeBranchesBySquashCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesBySquashCommandOutput) => void
  ): void;

  /**
   * @see {@link MergeBranchesByThreeWayCommand}
   */
  mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeBranchesByThreeWayCommandOutput>;
  mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void
  ): void;
  mergeBranchesByThreeWay(
    args: MergeBranchesByThreeWayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeBranchesByThreeWayCommandOutput) => void
  ): void;

  /**
   * @see {@link MergePullRequestByFastForwardCommand}
   */
  mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestByFastForwardCommandOutput>;
  mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void
  ): void;
  mergePullRequestByFastForward(
    args: MergePullRequestByFastForwardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestByFastForwardCommandOutput) => void
  ): void;

  /**
   * @see {@link MergePullRequestBySquashCommand}
   */
  mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestBySquashCommandOutput>;
  mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void
  ): void;
  mergePullRequestBySquash(
    args: MergePullRequestBySquashCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestBySquashCommandOutput) => void
  ): void;

  /**
   * @see {@link MergePullRequestByThreeWayCommand}
   */
  mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergePullRequestByThreeWayCommandOutput>;
  mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void
  ): void;
  mergePullRequestByThreeWay(
    args: MergePullRequestByThreeWayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergePullRequestByThreeWayCommandOutput) => void
  ): void;

  /**
   * @see {@link OverridePullRequestApprovalRulesCommand}
   */
  overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OverridePullRequestApprovalRulesCommandOutput>;
  overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void
  ): void;
  overridePullRequestApprovalRules(
    args: OverridePullRequestApprovalRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OverridePullRequestApprovalRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link PostCommentForComparedCommitCommand}
   */
  postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentForComparedCommitCommandOutput>;
  postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void
  ): void;
  postCommentForComparedCommit(
    args: PostCommentForComparedCommitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentForComparedCommitCommandOutput) => void
  ): void;

  /**
   * @see {@link PostCommentForPullRequestCommand}
   */
  postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentForPullRequestCommandOutput>;
  postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void
  ): void;
  postCommentForPullRequest(
    args: PostCommentForPullRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentForPullRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link PostCommentReplyCommand}
   */
  postCommentReply(
    args: PostCommentReplyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PostCommentReplyCommandOutput>;
  postCommentReply(
    args: PostCommentReplyCommandInput,
    cb: (err: any, data?: PostCommentReplyCommandOutput) => void
  ): void;
  postCommentReply(
    args: PostCommentReplyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostCommentReplyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCommentReactionCommand}
   */
  putCommentReaction(
    args: PutCommentReactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCommentReactionCommandOutput>;
  putCommentReaction(
    args: PutCommentReactionCommandInput,
    cb: (err: any, data?: PutCommentReactionCommandOutput) => void
  ): void;
  putCommentReaction(
    args: PutCommentReactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCommentReactionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFileCommand}
   */
  putFile(args: PutFileCommandInput, options?: __HttpHandlerOptions): Promise<PutFileCommandOutput>;
  putFile(args: PutFileCommandInput, cb: (err: any, data?: PutFileCommandOutput) => void): void;
  putFile(
    args: PutFileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFileCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRepositoryTriggersCommand}
   */
  putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryTriggersCommandOutput>;
  putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void
  ): void;
  putRepositoryTriggers(
    args: PutRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryTriggersCommandOutput) => void
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
   * @see {@link TestRepositoryTriggersCommand}
   */
  testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestRepositoryTriggersCommandOutput>;
  testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void
  ): void;
  testRepositoryTriggers(
    args: TestRepositoryTriggersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestRepositoryTriggersCommandOutput) => void
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
   * @see {@link UpdateApprovalRuleTemplateContentCommand}
   */
  updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput>;
  updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void
  ): void;
  updateApprovalRuleTemplateContent(
    args: UpdateApprovalRuleTemplateContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApprovalRuleTemplateDescriptionCommand}
   */
  updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput>;
  updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void
  ): void;
  updateApprovalRuleTemplateDescription(
    args: UpdateApprovalRuleTemplateDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApprovalRuleTemplateNameCommand}
   */
  updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalRuleTemplateNameCommandOutput>;
  updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void
  ): void;
  updateApprovalRuleTemplateName(
    args: UpdateApprovalRuleTemplateNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalRuleTemplateNameCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCommentCommand}
   */
  updateComment(args: UpdateCommentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCommentCommandOutput>;
  updateComment(args: UpdateCommentCommandInput, cb: (err: any, data?: UpdateCommentCommandOutput) => void): void;
  updateComment(
    args: UpdateCommentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCommentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDefaultBranchCommand}
   */
  updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDefaultBranchCommandOutput>;
  updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void
  ): void;
  updateDefaultBranch(
    args: UpdateDefaultBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDefaultBranchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullRequestApprovalRuleContentCommand}
   */
  updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestApprovalRuleContentCommandOutput>;
  updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void
  ): void;
  updatePullRequestApprovalRuleContent(
    args: UpdatePullRequestApprovalRuleContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestApprovalRuleContentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullRequestApprovalStateCommand}
   */
  updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestApprovalStateCommandOutput>;
  updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void
  ): void;
  updatePullRequestApprovalState(
    args: UpdatePullRequestApprovalStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestApprovalStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullRequestDescriptionCommand}
   */
  updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestDescriptionCommandOutput>;
  updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void
  ): void;
  updatePullRequestDescription(
    args: UpdatePullRequestDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullRequestStatusCommand}
   */
  updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestStatusCommandOutput>;
  updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void
  ): void;
  updatePullRequestStatus(
    args: UpdatePullRequestStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePullRequestTitleCommand}
   */
  updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePullRequestTitleCommandOutput>;
  updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void
  ): void;
  updatePullRequestTitle(
    args: UpdatePullRequestTitleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePullRequestTitleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRepositoryDescriptionCommand}
   */
  updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryDescriptionCommandOutput>;
  updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void
  ): void;
  updateRepositoryDescription(
    args: UpdateRepositoryDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRepositoryNameCommand}
   */
  updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryNameCommandOutput>;
  updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void
  ): void;
  updateRepositoryName(
    args: UpdateRepositoryNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryNameCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>AWS CodeCommit</fullname>
 *         <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for
 *             AWS CodeCommit API along with usage examples.</p>
 *         <p>You can use the AWS CodeCommit API to work with the following objects:</p>
 *
 *             <p>Repositories, by calling the following:</p>
 *           <ul>
 *             <li>
 *                   <p>
 *                   <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>GetRepository</a>, which returns information about a specified repository.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p>
 *             </li>
 *             <li>
 *                   <p>
 *                   <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p>
 *               </li>
 *             <li>
 *                   <p>
 *                   <a>UpdateRepositoryName</a>, which changes the name of the
 *                     repository. If you change the name of a repository, no other users of that
 *                     repository can access it until you send them the new HTTPS or SSH URL to
 *                     use.</p>
 *             </li>
 *          </ul>
 *
 *             <p>Branches, by calling the following:</p>
 *             <ul>
 *             <li>
 *                     <p>
 *                   <a>CreateBranch</a>, which creates a branch in a specified
 *                     repository.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p>
 *                 </li>
 *             <li>
 *                     <p>
 *                   <a>GetBranch</a>, which returns information about a specified branch.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>ListBranches</a>, which lists all branches for a specified repository.</p>
 *             </li>
 *             <li>
 *                     <p>
 *                   <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Files, by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetBlob</a>, which returns the base-64 encoded content of an
 *                     individual Git blob object in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p>
 *             </li>
 *          </ul>
 *
 *
 *             <p>Commits, by calling the following:</p>
 *               <ul>
 *             <li>
 *                       <p>
 *                   <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p>
 *                   </li>
 *             <li>
 *                <p>
 *                   <a>CreateCommit</a>, which creates a commit for changes to a repository.</p>
 *             </li>
 *             <li>
 *                       <p>
 *                   <a>GetCommit</a>, which returns information about  a commit, including commit
 *                           messages and author and committer information.</p>
 *                   </li>
 *             <li>
 *                       <p>
 *                   <a>GetDifferences</a>, which returns information about the
 *                     differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID,
 *                     or other fully qualified reference).</p>
 *                   </li>
 *          </ul>
 *
 *
 *         <p>Merges, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the
 *                     purpose of comparing them and identifying any potential conflicts.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions
 *                     of a file in a potential merge.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p>
 *
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetMergeConflicts</a>, which returns information about merge conflicts
 *                     between the source and destination branch in a pull request.</p>
 *             </li>
 *             <li>
 *
 *                 <p>
 *                   <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p>
 *             </li>
 *          </ul>
 *
 *
 *         <p>Pull requests, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p>
 *             </li>
 *             <li>
 *
 *                 <p>
 *                   <a>GetPullRequest</a>, which returns information about a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a
 *             pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>ListPullRequests</a>, which lists all pull requests for a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination
 *                     branch for that pull request using the fast-forward merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination
 *                 branch for that pull request using the squash merge option.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination
 *                 branch for that pull request using the three-way merge option.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Approval rule templates, by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template
 *                     with a specified repository. After the template is associated with a repository,
 *                     AWS CodeCommit creates approval rules that match the template conditions on
 *                     every pull request created in the specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a
 *                     template with one or more specified repositories. After the template is
 *                     associated with a repository, AWS CodeCommit creates approval rules that match
 *                     the template conditions on every pull request created in the specified
 *                     repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the
 *                     association between a template and specified repositories so that approval rules
 *                     based on the template are not automatically created when pull requests are
 *                     created in those repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories
 *              in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the
 *                     association between a template and a repository so that approval rules based on
 *                     the template are not automatically created when pull requests are created in the
 *                     specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an
 *                     approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Comments in a repository, by calling the following:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetComment</a>, which returns information about a comment on a commit.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers
 *                     in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>PostCommentReply</a>, which creates a reply to a comment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p>
 *             </li>
 *          </ul>
 *
 *         <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p>
 *             </li>
 *          </ul>
 *
 *             <p>Triggers, by calling the following:</p>
 *                 <ul>
 *             <li>
 *                         <p>
 *                   <a>GetRepositoryTriggers</a>, which returns information about triggers configured
 *                             for a repository.</p>
 *             </li>
 *             <li>
 *                         <p>
 *                   <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can
 *                             be used to create or delete triggers.</p>
 *             </li>
 *             <li>
 *                         <p>
 *                   <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger
 *                             by sending data to the trigger target.</p>
 *             </li>
 *          </ul>
 *
 *
 *
 *
 *         <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>
 */
export class CodeCommit extends CodeCommitClient implements CodeCommit {}
createAggregatedClient(commands, CodeCommit);
