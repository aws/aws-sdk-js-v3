// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
} from "../commands/AssociateApprovalRuleTemplateWithRepositoryCommand";
import {
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput,
} from "../commands/BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
import {
  BatchDescribeMergeConflictsCommandInput,
  BatchDescribeMergeConflictsCommandOutput,
} from "../commands/BatchDescribeMergeConflictsCommand";
import {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput,
} from "../commands/BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
import { BatchGetCommitsCommandInput, BatchGetCommitsCommandOutput } from "../commands/BatchGetCommitsCommand";
import {
  BatchGetRepositoriesCommandInput,
  BatchGetRepositoriesCommandOutput,
} from "../commands/BatchGetRepositoriesCommand";
import {
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
} from "../commands/CreateApprovalRuleTemplateCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "../commands/CreateBranchCommand";
import { CreateCommitCommandInput, CreateCommitCommandOutput } from "../commands/CreateCommitCommand";
import {
  CreatePullRequestApprovalRuleCommandInput,
  CreatePullRequestApprovalRuleCommandOutput,
} from "../commands/CreatePullRequestApprovalRuleCommand";
import { CreatePullRequestCommandInput, CreatePullRequestCommandOutput } from "../commands/CreatePullRequestCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import {
  CreateUnreferencedMergeCommitCommandInput,
  CreateUnreferencedMergeCommitCommandOutput,
} from "../commands/CreateUnreferencedMergeCommitCommand";
import {
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
} from "../commands/DeleteApprovalRuleTemplateCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "../commands/DeleteBranchCommand";
import {
  DeleteCommentContentCommandInput,
  DeleteCommentContentCommandOutput,
} from "../commands/DeleteCommentContentCommand";
import { DeleteFileCommandInput, DeleteFileCommandOutput } from "../commands/DeleteFileCommand";
import {
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
} from "../commands/DeletePullRequestApprovalRuleCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "../commands/DescribeMergeConflictsCommand";
import {
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "../commands/DescribePullRequestEventsCommand";
import {
  DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  DisassociateApprovalRuleTemplateFromRepositoryCommandOutput,
} from "../commands/DisassociateApprovalRuleTemplateFromRepositoryCommand";
import {
  EvaluatePullRequestApprovalRulesCommandInput,
  EvaluatePullRequestApprovalRulesCommandOutput,
} from "../commands/EvaluatePullRequestApprovalRulesCommand";
import {
  GetApprovalRuleTemplateCommandInput,
  GetApprovalRuleTemplateCommandOutput,
} from "../commands/GetApprovalRuleTemplateCommand";
import { GetBlobCommandInput, GetBlobCommandOutput } from "../commands/GetBlobCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "../commands/GetBranchCommand";
import { GetCommentCommandInput, GetCommentCommandOutput } from "../commands/GetCommentCommand";
import {
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "../commands/GetCommentReactionsCommand";
import {
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "../commands/GetCommentsForComparedCommitCommand";
import {
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "../commands/GetCommentsForPullRequestCommand";
import { GetCommitCommandInput, GetCommitCommandOutput } from "../commands/GetCommitCommand";
import { GetDifferencesCommandInput, GetDifferencesCommandOutput } from "../commands/GetDifferencesCommand";
import { GetFileCommandInput, GetFileCommandOutput } from "../commands/GetFileCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "../commands/GetFolderCommand";
import { GetMergeCommitCommandInput, GetMergeCommitCommandOutput } from "../commands/GetMergeCommitCommand";
import { GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput } from "../commands/GetMergeConflictsCommand";
import { GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput } from "../commands/GetMergeOptionsCommand";
import {
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
} from "../commands/GetPullRequestApprovalStatesCommand";
import { GetPullRequestCommandInput, GetPullRequestCommandOutput } from "../commands/GetPullRequestCommand";
import {
  GetPullRequestOverrideStateCommandInput,
  GetPullRequestOverrideStateCommandOutput,
} from "../commands/GetPullRequestOverrideStateCommand";
import { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "../commands/GetRepositoryCommand";
import {
  GetRepositoryTriggersCommandInput,
  GetRepositoryTriggersCommandOutput,
} from "../commands/GetRepositoryTriggersCommand";
import {
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "../commands/ListApprovalRuleTemplatesCommand";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "../commands/ListBranchesCommand";
import {
  ListFileCommitHistoryCommandInput,
  ListFileCommitHistoryCommandOutput,
} from "../commands/ListFileCommitHistoryCommand";
import { ListPullRequestsCommandInput, ListPullRequestsCommandOutput } from "../commands/ListPullRequestsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import {
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
} from "../commands/MergeBranchesByFastForwardCommand";
import {
  MergeBranchesBySquashCommandInput,
  MergeBranchesBySquashCommandOutput,
} from "../commands/MergeBranchesBySquashCommand";
import {
  MergeBranchesByThreeWayCommandInput,
  MergeBranchesByThreeWayCommandOutput,
} from "../commands/MergeBranchesByThreeWayCommand";
import {
  MergePullRequestByFastForwardCommandInput,
  MergePullRequestByFastForwardCommandOutput,
} from "../commands/MergePullRequestByFastForwardCommand";
import {
  MergePullRequestBySquashCommandInput,
  MergePullRequestBySquashCommandOutput,
} from "../commands/MergePullRequestBySquashCommand";
import {
  MergePullRequestByThreeWayCommandInput,
  MergePullRequestByThreeWayCommandOutput,
} from "../commands/MergePullRequestByThreeWayCommand";
import {
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
} from "../commands/OverridePullRequestApprovalRulesCommand";
import {
  PostCommentForComparedCommitCommandInput,
  PostCommentForComparedCommitCommandOutput,
} from "../commands/PostCommentForComparedCommitCommand";
import {
  PostCommentForPullRequestCommandInput,
  PostCommentForPullRequestCommandOutput,
} from "../commands/PostCommentForPullRequestCommand";
import { PostCommentReplyCommandInput, PostCommentReplyCommandOutput } from "../commands/PostCommentReplyCommand";
import { PutCommentReactionCommandInput, PutCommentReactionCommandOutput } from "../commands/PutCommentReactionCommand";
import { PutFileCommandInput, PutFileCommandOutput } from "../commands/PutFileCommand";
import {
  PutRepositoryTriggersCommandInput,
  PutRepositoryTriggersCommandOutput,
} from "../commands/PutRepositoryTriggersCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestRepositoryTriggersCommandInput,
  TestRepositoryTriggersCommandOutput,
} from "../commands/TestRepositoryTriggersCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
} from "../commands/UpdateApprovalRuleTemplateContentCommand";
import {
  UpdateApprovalRuleTemplateDescriptionCommandInput,
  UpdateApprovalRuleTemplateDescriptionCommandOutput,
} from "../commands/UpdateApprovalRuleTemplateDescriptionCommand";
import {
  UpdateApprovalRuleTemplateNameCommandInput,
  UpdateApprovalRuleTemplateNameCommandOutput,
} from "../commands/UpdateApprovalRuleTemplateNameCommand";
import { UpdateCommentCommandInput, UpdateCommentCommandOutput } from "../commands/UpdateCommentCommand";
import {
  UpdateDefaultBranchCommandInput,
  UpdateDefaultBranchCommandOutput,
} from "../commands/UpdateDefaultBranchCommand";
import {
  UpdatePullRequestApprovalRuleContentCommandInput,
  UpdatePullRequestApprovalRuleContentCommandOutput,
} from "../commands/UpdatePullRequestApprovalRuleContentCommand";
import {
  UpdatePullRequestApprovalStateCommandInput,
  UpdatePullRequestApprovalStateCommandOutput,
} from "../commands/UpdatePullRequestApprovalStateCommand";
import {
  UpdatePullRequestDescriptionCommandInput,
  UpdatePullRequestDescriptionCommandOutput,
} from "../commands/UpdatePullRequestDescriptionCommand";
import {
  UpdatePullRequestStatusCommandInput,
  UpdatePullRequestStatusCommandOutput,
} from "../commands/UpdatePullRequestStatusCommand";
import {
  UpdatePullRequestTitleCommandInput,
  UpdatePullRequestTitleCommandOutput,
} from "../commands/UpdatePullRequestTitleCommand";
import {
  UpdateRepositoryDescriptionCommandInput,
  UpdateRepositoryDescriptionCommandOutput,
} from "../commands/UpdateRepositoryDescriptionCommand";
import {
  UpdateRepositoryNameCommandInput,
  UpdateRepositoryNameCommandOutput,
} from "../commands/UpdateRepositoryNameCommand";
import { CodeCommitServiceException as __BaseException } from "../models/CodeCommitServiceException";
import {
  ActorDoesNotExistException,
  ApprovalRule,
  ApprovalRuleContentRequiredException,
  ApprovalRuleDoesNotExistException,
  ApprovalRuleNameAlreadyExistsException,
  ApprovalRuleNameRequiredException,
  ApprovalRuleTemplate,
  ApprovalRuleTemplateContentRequiredException,
  ApprovalRuleTemplateDoesNotExistException,
  ApprovalRuleTemplateInUseException,
  ApprovalRuleTemplateNameAlreadyExistsException,
  ApprovalRuleTemplateNameRequiredException,
  ApprovalStateRequiredException,
  AssociateApprovalRuleTemplateWithRepositoryInput,
  AuthorDoesNotExistException,
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchDescribeMergeConflictsInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  BatchGetCommitsInput,
  BatchGetRepositoriesInput,
  BatchGetRepositoriesOutput,
  BeforeCommitIdAndAfterCommitIdAreSameException,
  BlobIdDoesNotExistException,
  BlobIdRequiredException,
  BranchDoesNotExistException,
  BranchNameExistsException,
  BranchNameIsTagNameException,
  BranchNameRequiredException,
  CannotDeleteApprovalRuleFromTemplateException,
  CannotModifyApprovalRuleFromTemplateException,
  ClientRequestTokenRequiredException,
  Comment,
  CommentDeletedException,
  CommentDoesNotExistException,
  CommentIdRequiredException,
  CommentsForComparedCommit,
  CommentsForPullRequest,
  CommitDoesNotExistException,
  CommitIdDoesNotExistException,
  CommitIdRequiredException,
  CommitIdsLimitExceededException,
  CommitIdsListRequiredException,
  CommitMessageLengthExceededException,
  CommitRequiredException,
  ConcurrentReferenceUpdateException,
  ConflictResolution,
  CreateApprovalRuleTemplateInput,
  CreateApprovalRuleTemplateOutput,
  CreateBranchInput,
  CreateCommitInput,
  CreatePullRequestApprovalRuleInput,
  CreatePullRequestApprovalRuleOutput,
  CreatePullRequestInput,
  CreatePullRequestOutput,
  CreateRepositoryInput,
  CreateRepositoryOutput,
  CreateUnreferencedMergeCommitInput,
  DefaultBranchCannotBeDeletedException,
  DeleteApprovalRuleTemplateInput,
  DeleteBranchInput,
  DeleteCommentContentInput,
  DeleteCommentContentOutput,
  DeleteFileEntry,
  DeleteFileInput,
  DeletePullRequestApprovalRuleInput,
  DeleteRepositoryInput,
  DescribeMergeConflictsInput,
  DescribePullRequestEventsInput,
  DescribePullRequestEventsOutput,
  DirectoryNameConflictsWithFileNameException,
  DisassociateApprovalRuleTemplateFromRepositoryInput,
  EncryptionIntegrityChecksFailedException,
  EncryptionKeyAccessDeniedException,
  EncryptionKeyDisabledException,
  EncryptionKeyNotFoundException,
  EncryptionKeyUnavailableException,
  EvaluatePullRequestApprovalRulesInput,
  FileContentAndSourceFileSpecifiedException,
  FileContentSizeLimitExceededException,
  FileDoesNotExistException,
  FileEntryRequiredException,
  FileModeRequiredException,
  FileNameConflictsWithDirectoryNameException,
  FilePathConflictsWithSubmodulePathException,
  FileTooLargeException,
  FolderContentSizeLimitExceededException,
  FolderDoesNotExistException,
  GetApprovalRuleTemplateInput,
  GetApprovalRuleTemplateOutput,
  GetBlobInput,
  GetBlobOutput,
  GetBranchInput,
  GetCommentInput,
  GetCommentOutput,
  GetCommentReactionsInput,
  GetCommentsForComparedCommitInput,
  GetCommentsForComparedCommitOutput,
  GetCommentsForPullRequestInput,
  GetCommentsForPullRequestOutput,
  GetCommitInput,
  GetDifferencesInput,
  GetFileInput,
  GetFileOutput,
  GetFolderInput,
  GetMergeCommitInput,
  GetMergeConflictsInput,
  GetMergeOptionsInput,
  GetPullRequestApprovalStatesInput,
  GetPullRequestInput,
  GetPullRequestOutput,
  GetPullRequestOverrideStateInput,
  GetRepositoryInput,
  GetRepositoryOutput,
  GetRepositoryTriggersInput,
  IdempotencyParameterMismatchException,
  InvalidActorArnException,
  InvalidApprovalRuleContentException,
  InvalidApprovalRuleNameException,
  InvalidApprovalRuleTemplateContentException,
  InvalidApprovalRuleTemplateDescriptionException,
  InvalidApprovalRuleTemplateNameException,
  InvalidAuthorArnException,
  InvalidBlobIdException,
  InvalidBranchNameException,
  InvalidClientRequestTokenException,
  InvalidCommentIdException,
  InvalidCommitException,
  InvalidCommitIdException,
  InvalidConflictDetailLevelException,
  InvalidConflictResolutionException,
  InvalidConflictResolutionStrategyException,
  InvalidContinuationTokenException,
  InvalidDeletionParameterException,
  InvalidDescriptionException,
  InvalidDestinationCommitSpecifierException,
  InvalidEmailException,
  InvalidFileModeException,
  InvalidMaxConflictFilesException,
  InvalidMaxMergeHunksException,
  InvalidMaxResultsException,
  InvalidMergeOptionException,
  InvalidParentCommitIdException,
  InvalidPathException,
  InvalidPullRequestEventTypeException,
  InvalidPullRequestIdException,
  InvalidPullRequestStatusException,
  InvalidReactionUserArnException,
  InvalidReferenceNameException,
  InvalidReplacementContentException,
  InvalidReplacementTypeException,
  InvalidRepositoryDescriptionException,
  InvalidRepositoryNameException,
  InvalidRevisionIdException,
  InvalidSourceCommitSpecifierException,
  InvalidSystemTagUsageException,
  InvalidTagsMapException,
  InvalidTargetException,
  InvalidTargetsException,
  InvalidTitleException,
  ListApprovalRuleTemplatesInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ListBranchesInput,
  ListFileCommitHistoryRequest,
  ListPullRequestsInput,
  Location,
  ManualMergeRequiredException,
  MaximumConflictResolutionEntriesExceededException,
  MaximumFileContentToLoadExceededException,
  MaximumFileEntriesExceededException,
  MaximumItemsToCompareExceededException,
  MaximumOpenPullRequestsExceededException,
  MaximumRepositoryNamesExceededException,
  MaximumRuleTemplatesAssociatedWithRepositoryException,
  MergeOptionRequiredException,
  MultipleConflictResolutionEntriesException,
  MultipleRepositoriesInPullRequestException,
  NameLengthExceededException,
  NoChangeException,
  NumberOfRulesExceededException,
  NumberOfRuleTemplatesExceededException,
  ParentCommitDoesNotExistException,
  ParentCommitIdOutdatedException,
  ParentCommitIdRequiredException,
  PathDoesNotExistException,
  PathRequiredException,
  PullRequest,
  PullRequestAlreadyClosedException,
  PullRequestDoesNotExistException,
  PullRequestEvent,
  PullRequestIdRequiredException,
  PutFileEntry,
  PutFileEntryConflictException,
  ReferenceDoesNotExistException,
  ReferenceNameRequiredException,
  ReferenceTypeNotSupportedException,
  ReplaceContentEntry,
  ReplacementContentRequiredException,
  ReplacementTypeRequiredException,
  RepositoryDoesNotExistException,
  RepositoryLimitExceededException,
  RepositoryMetadata,
  RepositoryNameExistsException,
  RepositoryNameRequiredException,
  RepositoryNamesRequiredException,
  RepositoryNotAssociatedWithPullRequestException,
  RepositoryTrigger,
  RepositoryTriggerEventEnum,
  RestrictedSourceFileException,
  RevisionIdRequiredException,
  RevisionNotCurrentException,
  SamePathRequestException,
  SetFileModeEntry,
  SourceAndDestinationAreSameException,
  SourceFileOrContentRequiredException,
  SourceFileSpecifier,
  TagPolicyException,
  Target,
  TargetRequiredException,
  TargetsRequiredException,
  TipsDivergenceExceededException,
  TitleRequiredException,
  TooManyTagsException,
} from "../models/models_0";
import {
  CommentContentRequiredException,
  CommentContentSizeLimitExceededException,
  CommentNotCreatedByCallerException,
  FileContentRequiredException,
  InvalidApprovalStateException,
  InvalidFileLocationException,
  InvalidFilePositionException,
  InvalidOrderException,
  InvalidOverrideStatusException,
  InvalidPullRequestStatusUpdateException,
  InvalidReactionValueException,
  InvalidRelativeFileVersionEnumException,
  InvalidRepositoryTriggerBranchNameException,
  InvalidRepositoryTriggerCustomDataException,
  InvalidRepositoryTriggerDestinationArnException,
  InvalidRepositoryTriggerEventsException,
  InvalidRepositoryTriggerNameException,
  InvalidRepositoryTriggerRegionException,
  InvalidResourceArnException,
  InvalidRuleContentSha256Exception,
  InvalidSortByException,
  InvalidTagKeysListException,
  InvalidTargetBranchException,
  ListRepositoriesForApprovalRuleTemplateInput,
  ListRepositoriesInput,
  ListTagsForResourceInput,
  MaximumBranchesExceededException,
  MaximumNumberOfApprovalsExceededException,
  MaximumRepositoryTriggersExceededException,
  MergeBranchesByFastForwardInput,
  MergeBranchesBySquashInput,
  MergeBranchesByThreeWayInput,
  MergePullRequestByFastForwardInput,
  MergePullRequestByFastForwardOutput,
  MergePullRequestBySquashInput,
  MergePullRequestBySquashOutput,
  MergePullRequestByThreeWayInput,
  MergePullRequestByThreeWayOutput,
  OverrideAlreadySetException,
  OverridePullRequestApprovalRulesInput,
  OverrideStatusRequiredException,
  PostCommentForComparedCommitInput,
  PostCommentForComparedCommitOutput,
  PostCommentForPullRequestInput,
  PostCommentForPullRequestOutput,
  PostCommentReplyInput,
  PostCommentReplyOutput,
  PullRequestApprovalRulesNotSatisfiedException,
  PullRequestCannotBeApprovedByAuthorException,
  PullRequestStatusRequiredException,
  PutCommentReactionInput,
  PutFileInput,
  PutRepositoryTriggersInput,
  ReactionLimitExceededException,
  ReactionValueRequiredException,
  RepositoryTriggerBranchNameListRequiredException,
  RepositoryTriggerDestinationArnRequiredException,
  RepositoryTriggerEventsListRequiredException,
  RepositoryTriggerNameRequiredException,
  RepositoryTriggersListRequiredException,
  ResourceArnRequiredException,
  SameFileContentException,
  TagKeysListRequiredException,
  TagResourceInput,
  TagsMapRequiredException,
  TestRepositoryTriggersInput,
  TipOfSourceReferenceIsDifferentException,
  UntagResourceInput,
  UpdateApprovalRuleTemplateContentInput,
  UpdateApprovalRuleTemplateContentOutput,
  UpdateApprovalRuleTemplateDescriptionInput,
  UpdateApprovalRuleTemplateDescriptionOutput,
  UpdateApprovalRuleTemplateNameInput,
  UpdateApprovalRuleTemplateNameOutput,
  UpdateCommentInput,
  UpdateCommentOutput,
  UpdateDefaultBranchInput,
  UpdatePullRequestApprovalRuleContentInput,
  UpdatePullRequestApprovalRuleContentOutput,
  UpdatePullRequestApprovalStateInput,
  UpdatePullRequestDescriptionInput,
  UpdatePullRequestDescriptionOutput,
  UpdatePullRequestStatusInput,
  UpdatePullRequestStatusOutput,
  UpdatePullRequestTitleInput,
  UpdatePullRequestTitleOutput,
  UpdateRepositoryDescriptionInput,
  UpdateRepositoryNameInput,
} from "../models/models_1";

/**
 * serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand
 */
export const se_AssociateApprovalRuleTemplateWithRepositoryCommand = async (
  input: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateApprovalRuleTemplateWithRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand
 */
export const se_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchAssociateApprovalRuleTemplateWithRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDescribeMergeConflictsCommand
 */
export const se_BatchDescribeMergeConflictsCommand = async (
  input: BatchDescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDescribeMergeConflicts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand
 */
export const se_BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDisassociateApprovalRuleTemplateFromRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetCommitsCommand
 */
export const se_BatchGetCommitsCommand = async (
  input: BatchGetCommitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetCommits");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetRepositoriesCommand
 */
export const se_BatchGetRepositoriesCommand = async (
  input: BatchGetRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApprovalRuleTemplateCommand
 */
export const se_CreateApprovalRuleTemplateCommand = async (
  input: CreateApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApprovalRuleTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBranchCommand
 */
export const se_CreateBranchCommand = async (
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBranch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCommitCommand
 */
export const se_CreateCommitCommand = async (
  input: CreateCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCommit");
  let body: any;
  body = JSON.stringify(se_CreateCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePullRequestCommand
 */
export const se_CreatePullRequestCommand = async (
  input: CreatePullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePullRequest");
  let body: any;
  body = JSON.stringify(se_CreatePullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePullRequestApprovalRuleCommand
 */
export const se_CreatePullRequestApprovalRuleCommand = async (
  input: CreatePullRequestApprovalRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePullRequestApprovalRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUnreferencedMergeCommitCommand
 */
export const se_CreateUnreferencedMergeCommitCommand = async (
  input: CreateUnreferencedMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUnreferencedMergeCommit");
  let body: any;
  body = JSON.stringify(se_CreateUnreferencedMergeCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApprovalRuleTemplateCommand
 */
export const se_DeleteApprovalRuleTemplateCommand = async (
  input: DeleteApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApprovalRuleTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBranchCommand
 */
export const se_DeleteBranchCommand = async (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBranch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCommentContentCommand
 */
export const se_DeleteCommentContentCommand = async (
  input: DeleteCommentContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCommentContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFileCommand
 */
export const se_DeleteFileCommand = async (
  input: DeleteFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePullRequestApprovalRuleCommand
 */
export const se_DeletePullRequestApprovalRuleCommand = async (
  input: DeletePullRequestApprovalRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePullRequestApprovalRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMergeConflictsCommand
 */
export const se_DescribeMergeConflictsCommand = async (
  input: DescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMergeConflicts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePullRequestEventsCommand
 */
export const se_DescribePullRequestEventsCommand = async (
  input: DescribePullRequestEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePullRequestEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand
 */
export const se_DisassociateApprovalRuleTemplateFromRepositoryCommand = async (
  input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateApprovalRuleTemplateFromRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand
 */
export const se_EvaluatePullRequestApprovalRulesCommand = async (
  input: EvaluatePullRequestApprovalRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EvaluatePullRequestApprovalRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApprovalRuleTemplateCommand
 */
export const se_GetApprovalRuleTemplateCommand = async (
  input: GetApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApprovalRuleTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlobCommand
 */
export const se_GetBlobCommand = async (
  input: GetBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBlob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBranchCommand
 */
export const se_GetBranchCommand = async (
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBranch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentCommand
 */
export const se_GetCommentCommand = async (
  input: GetCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentReactionsCommand
 */
export const se_GetCommentReactionsCommand = async (
  input: GetCommentReactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCommentReactions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentsForComparedCommitCommand
 */
export const se_GetCommentsForComparedCommitCommand = async (
  input: GetCommentsForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCommentsForComparedCommit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentsForPullRequestCommand
 */
export const se_GetCommentsForPullRequestCommand = async (
  input: GetCommentsForPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCommentsForPullRequest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommitCommand
 */
export const se_GetCommitCommand = async (
  input: GetCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCommit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDifferencesCommand
 */
export const se_GetDifferencesCommand = async (
  input: GetDifferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDifferences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFileCommand
 */
export const se_GetFileCommand = async (
  input: GetFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFolderCommand
 */
export const se_GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetFolder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeCommitCommand
 */
export const se_GetMergeCommitCommand = async (
  input: GetMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMergeCommit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeConflictsCommand
 */
export const se_GetMergeConflictsCommand = async (
  input: GetMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMergeConflicts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeOptionsCommand
 */
export const se_GetMergeOptionsCommand = async (
  input: GetMergeOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMergeOptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestCommand
 */
export const se_GetPullRequestCommand = async (
  input: GetPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPullRequest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestApprovalStatesCommand
 */
export const se_GetPullRequestApprovalStatesCommand = async (
  input: GetPullRequestApprovalStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPullRequestApprovalStates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestOverrideStateCommand
 */
export const se_GetPullRequestOverrideStateCommand = async (
  input: GetPullRequestOverrideStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPullRequestOverrideState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryCommand
 */
export const se_GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryTriggersCommand
 */
export const se_GetRepositoryTriggersCommand = async (
  input: GetRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositoryTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApprovalRuleTemplatesCommand
 */
export const se_ListApprovalRuleTemplatesCommand = async (
  input: ListApprovalRuleTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApprovalRuleTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand
 */
export const se_ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociatedApprovalRuleTemplatesForRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBranchesCommand
 */
export const se_ListBranchesCommand = async (
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBranches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFileCommitHistoryCommand
 */
export const se_ListFileCommitHistoryCommand = async (
  input: ListFileCommitHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFileCommitHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPullRequestsCommand
 */
export const se_ListPullRequestsCommand = async (
  input: ListPullRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPullRequests");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand
 */
export const se_ListRepositoriesForApprovalRuleTemplateCommand = async (
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositoriesForApprovalRuleTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeBranchesByFastForwardCommand
 */
export const se_MergeBranchesByFastForwardCommand = async (
  input: MergeBranchesByFastForwardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergeBranchesByFastForward");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeBranchesBySquashCommand
 */
export const se_MergeBranchesBySquashCommand = async (
  input: MergeBranchesBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergeBranchesBySquash");
  let body: any;
  body = JSON.stringify(se_MergeBranchesBySquashInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeBranchesByThreeWayCommand
 */
export const se_MergeBranchesByThreeWayCommand = async (
  input: MergeBranchesByThreeWayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergeBranchesByThreeWay");
  let body: any;
  body = JSON.stringify(se_MergeBranchesByThreeWayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergePullRequestByFastForwardCommand
 */
export const se_MergePullRequestByFastForwardCommand = async (
  input: MergePullRequestByFastForwardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergePullRequestByFastForward");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergePullRequestBySquashCommand
 */
export const se_MergePullRequestBySquashCommand = async (
  input: MergePullRequestBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergePullRequestBySquash");
  let body: any;
  body = JSON.stringify(se_MergePullRequestBySquashInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergePullRequestByThreeWayCommand
 */
export const se_MergePullRequestByThreeWayCommand = async (
  input: MergePullRequestByThreeWayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergePullRequestByThreeWay");
  let body: any;
  body = JSON.stringify(se_MergePullRequestByThreeWayInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OverridePullRequestApprovalRulesCommand
 */
export const se_OverridePullRequestApprovalRulesCommand = async (
  input: OverridePullRequestApprovalRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("OverridePullRequestApprovalRules");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PostCommentForComparedCommitCommand
 */
export const se_PostCommentForComparedCommitCommand = async (
  input: PostCommentForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PostCommentForComparedCommit");
  let body: any;
  body = JSON.stringify(se_PostCommentForComparedCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PostCommentForPullRequestCommand
 */
export const se_PostCommentForPullRequestCommand = async (
  input: PostCommentForPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PostCommentForPullRequest");
  let body: any;
  body = JSON.stringify(se_PostCommentForPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PostCommentReplyCommand
 */
export const se_PostCommentReplyCommand = async (
  input: PostCommentReplyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PostCommentReply");
  let body: any;
  body = JSON.stringify(se_PostCommentReplyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutCommentReactionCommand
 */
export const se_PutCommentReactionCommand = async (
  input: PutCommentReactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutCommentReaction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutFileCommand
 */
export const se_PutFileCommand = async (
  input: PutFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutFile");
  let body: any;
  body = JSON.stringify(se_PutFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRepositoryTriggersCommand
 */
export const se_PutRepositoryTriggersCommand = async (
  input: PutRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRepositoryTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestRepositoryTriggersCommand
 */
export const se_TestRepositoryTriggersCommand = async (
  input: TestRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestRepositoryTriggers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand
 */
export const se_UpdateApprovalRuleTemplateContentCommand = async (
  input: UpdateApprovalRuleTemplateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApprovalRuleTemplateContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand
 */
export const se_UpdateApprovalRuleTemplateDescriptionCommand = async (
  input: UpdateApprovalRuleTemplateDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApprovalRuleTemplateDescription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand
 */
export const se_UpdateApprovalRuleTemplateNameCommand = async (
  input: UpdateApprovalRuleTemplateNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApprovalRuleTemplateName");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCommentCommand
 */
export const se_UpdateCommentCommand = async (
  input: UpdateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateComment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDefaultBranchCommand
 */
export const se_UpdateDefaultBranchCommand = async (
  input: UpdateDefaultBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDefaultBranch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand
 */
export const se_UpdatePullRequestApprovalRuleContentCommand = async (
  input: UpdatePullRequestApprovalRuleContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePullRequestApprovalRuleContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalStateCommand
 */
export const se_UpdatePullRequestApprovalStateCommand = async (
  input: UpdatePullRequestApprovalStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePullRequestApprovalState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestDescriptionCommand
 */
export const se_UpdatePullRequestDescriptionCommand = async (
  input: UpdatePullRequestDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePullRequestDescription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestStatusCommand
 */
export const se_UpdatePullRequestStatusCommand = async (
  input: UpdatePullRequestStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePullRequestStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestTitleCommand
 */
export const se_UpdatePullRequestTitleCommand = async (
  input: UpdatePullRequestTitleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePullRequestTitle");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRepositoryDescriptionCommand
 */
export const se_UpdateRepositoryDescriptionCommand = async (
  input: UpdateRepositoryDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRepositoryDescription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRepositoryNameCommand
 */
export const se_UpdateRepositoryNameCommand = async (
  input: UpdateRepositoryNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRepositoryName");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand
 */
export const de_AssociateApprovalRuleTemplateWithRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateApprovalRuleTemplateWithRepositoryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateApprovalRuleTemplateWithRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommandError
 */
const de_AssociateApprovalRuleTemplateWithRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumRuleTemplatesAssociatedWithRepositoryException":
    case "com.amazonaws.codecommit#MaximumRuleTemplatesAssociatedWithRepositoryException":
      throw await de_MaximumRuleTemplatesAssociatedWithRepositoryExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand
 */
export const de_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError
 */
const de_BatchAssociateApprovalRuleTemplateWithRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await de_MaximumRepositoryNamesExceededExceptionRes(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await de_RepositoryNamesRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDescribeMergeConflictsCommand
 */
export const de_BatchDescribeMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDescribeMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDescribeMergeConflictsCommandError
 */
const de_BatchDescribeMergeConflictsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeMergeConflictsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      throw await de_InvalidMaxConflictFilesExceptionRes(parsedOutput, context);
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      throw await de_InvalidMaxMergeHunksExceptionRes(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await de_InvalidMergeOptionExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await de_MergeOptionRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand
 */
export const de_BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError
 */
const de_BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await de_MaximumRepositoryNamesExceededExceptionRes(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await de_RepositoryNamesRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetCommitsCommand
 */
export const de_BatchGetCommitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCommitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetCommitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetCommitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetCommitsCommandError
 */
const de_BatchGetCommitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCommitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitIdsLimitExceededException":
    case "com.amazonaws.codecommit#CommitIdsLimitExceededException":
      throw await de_CommitIdsLimitExceededExceptionRes(parsedOutput, context);
    case "CommitIdsListRequiredException":
    case "com.amazonaws.codecommit#CommitIdsListRequiredException":
      throw await de_CommitIdsListRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetRepositoriesCommand
 */
export const de_BatchGetRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetRepositoriesOutput(data, context);
  const response: BatchGetRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetRepositoriesCommandError
 */
const de_BatchGetRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumRepositoryNamesExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryNamesExceededException":
      throw await de_MaximumRepositoryNamesExceededExceptionRes(parsedOutput, context);
    case "RepositoryNamesRequiredException":
    case "com.amazonaws.codecommit#RepositoryNamesRequiredException":
      throw await de_RepositoryNamesRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApprovalRuleTemplateCommand
 */
export const de_CreateApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApprovalRuleTemplateOutput(data, context);
  const response: CreateApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApprovalRuleTemplateCommandError
 */
const de_CreateApprovalRuleTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApprovalRuleTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
      throw await de_ApprovalRuleTemplateContentRequiredExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      throw await de_ApprovalRuleTemplateNameAlreadyExistsExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      throw await de_InvalidApprovalRuleTemplateContentExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      throw await de_InvalidApprovalRuleTemplateDescriptionExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "NumberOfRuleTemplatesExceededException":
    case "com.amazonaws.codecommit#NumberOfRuleTemplatesExceededException":
      throw await de_NumberOfRuleTemplatesExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBranchCommand
 */
export const de_CreateBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBranchCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBranchCommandError
 */
const de_CreateBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchNameExistsException":
    case "com.amazonaws.codecommit#BranchNameExistsException":
      throw await de_BranchNameExistsExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCommitCommand
 */
export const de_CreateCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCommitCommandError
 */
const de_CreateCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      throw await de_DirectoryNameConflictsWithFileNameExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentAndSourceFileSpecifiedException":
    case "com.amazonaws.codecommit#FileContentAndSourceFileSpecifiedException":
      throw await de_FileContentAndSourceFileSpecifiedExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await de_FileDoesNotExistExceptionRes(parsedOutput, context);
    case "FileEntryRequiredException":
    case "com.amazonaws.codecommit#FileEntryRequiredException":
      throw await de_FileEntryRequiredExceptionRes(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await de_FileModeRequiredExceptionRes(parsedOutput, context);
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      throw await de_FileNameConflictsWithDirectoryNameExceptionRes(parsedOutput, context);
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      throw await de_FilePathConflictsWithSubmodulePathExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      throw await de_InvalidDeletionParameterExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await de_InvalidParentCommitIdExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumFileEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumFileEntriesExceededException":
      throw await de_MaximumFileEntriesExceededExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "NoChangeException":
    case "com.amazonaws.codecommit#NoChangeException":
      throw await de_NoChangeExceptionRes(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await de_ParentCommitDoesNotExistExceptionRes(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await de_ParentCommitIdOutdatedExceptionRes(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await de_ParentCommitIdRequiredExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "PutFileEntryConflictException":
    case "com.amazonaws.codecommit#PutFileEntryConflictException":
      throw await de_PutFileEntryConflictExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RestrictedSourceFileException":
    case "com.amazonaws.codecommit#RestrictedSourceFileException":
      throw await de_RestrictedSourceFileExceptionRes(parsedOutput, context);
    case "SamePathRequestException":
    case "com.amazonaws.codecommit#SamePathRequestException":
      throw await de_SamePathRequestExceptionRes(parsedOutput, context);
    case "SourceFileOrContentRequiredException":
    case "com.amazonaws.codecommit#SourceFileOrContentRequiredException":
      throw await de_SourceFileOrContentRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePullRequestCommand
 */
export const de_CreatePullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePullRequestOutput(data, context);
  const response: CreatePullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePullRequestCommandError
 */
const de_CreatePullRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await de_ClientRequestTokenRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await de_IdempotencyParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await de_InvalidClientRequestTokenExceptionRes(parsedOutput, context);
    case "InvalidDescriptionException":
    case "com.amazonaws.codecommit#InvalidDescriptionException":
      throw await de_InvalidDescriptionExceptionRes(parsedOutput, context);
    case "InvalidReferenceNameException":
    case "com.amazonaws.codecommit#InvalidReferenceNameException":
      throw await de_InvalidReferenceNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidTargetException":
    case "com.amazonaws.codecommit#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "InvalidTargetsException":
    case "com.amazonaws.codecommit#InvalidTargetsException":
      throw await de_InvalidTargetsExceptionRes(parsedOutput, context);
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      throw await de_InvalidTitleExceptionRes(parsedOutput, context);
    case "MaximumOpenPullRequestsExceededException":
    case "com.amazonaws.codecommit#MaximumOpenPullRequestsExceededException":
      throw await de_MaximumOpenPullRequestsExceededExceptionRes(parsedOutput, context);
    case "MultipleRepositoriesInPullRequestException":
    case "com.amazonaws.codecommit#MultipleRepositoriesInPullRequestException":
      throw await de_MultipleRepositoriesInPullRequestExceptionRes(parsedOutput, context);
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      throw await de_ReferenceDoesNotExistExceptionRes(parsedOutput, context);
    case "ReferenceNameRequiredException":
    case "com.amazonaws.codecommit#ReferenceNameRequiredException":
      throw await de_ReferenceNameRequiredExceptionRes(parsedOutput, context);
    case "ReferenceTypeNotSupportedException":
    case "com.amazonaws.codecommit#ReferenceTypeNotSupportedException":
      throw await de_ReferenceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "SourceAndDestinationAreSameException":
    case "com.amazonaws.codecommit#SourceAndDestinationAreSameException":
      throw await de_SourceAndDestinationAreSameExceptionRes(parsedOutput, context);
    case "TargetRequiredException":
    case "com.amazonaws.codecommit#TargetRequiredException":
      throw await de_TargetRequiredExceptionRes(parsedOutput, context);
    case "TargetsRequiredException":
    case "com.amazonaws.codecommit#TargetsRequiredException":
      throw await de_TargetsRequiredExceptionRes(parsedOutput, context);
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      throw await de_TitleRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePullRequestApprovalRuleCommand
 */
export const de_CreatePullRequestApprovalRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestApprovalRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePullRequestApprovalRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePullRequestApprovalRuleOutput(data, context);
  const response: CreatePullRequestApprovalRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePullRequestApprovalRuleCommandError
 */
const de_CreatePullRequestApprovalRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePullRequestApprovalRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
      throw await de_ApprovalRuleContentRequiredExceptionRes(parsedOutput, context);
    case "ApprovalRuleNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleNameAlreadyExistsException":
      throw await de_ApprovalRuleNameAlreadyExistsExceptionRes(parsedOutput, context);
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      throw await de_ApprovalRuleNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      throw await de_InvalidApprovalRuleContentExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await de_InvalidApprovalRuleNameExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "NumberOfRulesExceededException":
    case "com.amazonaws.codecommit#NumberOfRulesExceededException":
      throw await de_NumberOfRulesExceededExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRepositoryCommand
 */
export const de_CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRepositoryOutput(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRepositoryCommandError
 */
const de_CreateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      throw await de_InvalidRepositoryDescriptionExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await de_InvalidSystemTagUsageExceptionRes(parsedOutput, context);
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      throw await de_InvalidTagsMapExceptionRes(parsedOutput, context);
    case "RepositoryLimitExceededException":
    case "com.amazonaws.codecommit#RepositoryLimitExceededException":
      throw await de_RepositoryLimitExceededExceptionRes(parsedOutput, context);
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      throw await de_RepositoryNameExistsExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUnreferencedMergeCommitCommand
 */
export const de_CreateUnreferencedMergeCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUnreferencedMergeCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUnreferencedMergeCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUnreferencedMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUnreferencedMergeCommitCommandError
 */
const de_CreateUnreferencedMergeCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUnreferencedMergeCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await de_FileModeRequiredExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await de_InvalidConflictResolutionExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await de_InvalidMergeOptionExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await de_InvalidReplacementContentExceptionRes(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await de_InvalidReplacementTypeExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await de_MaximumConflictResolutionEntriesExceededExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await de_MergeOptionRequiredExceptionRes(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await de_MultipleConflictResolutionEntriesExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await de_ReplacementContentRequiredExceptionRes(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await de_ReplacementTypeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApprovalRuleTemplateCommand
 */
export const de_DeleteApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApprovalRuleTemplateCommandError
 */
const de_DeleteApprovalRuleTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApprovalRuleTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateInUseException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateInUseException":
      throw await de_ApprovalRuleTemplateInUseExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBranchCommand
 */
export const de_DeleteBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBranchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBranchCommandError
 */
const de_DeleteBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "DefaultBranchCannotBeDeletedException":
    case "com.amazonaws.codecommit#DefaultBranchCannotBeDeletedException":
      throw await de_DefaultBranchCannotBeDeletedExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCommentContentCommand
 */
export const de_DeleteCommentContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCommentContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteCommentContentOutput(data, context);
  const response: DeleteCommentContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCommentContentCommandError
 */
const de_DeleteCommentContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCommentContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await de_CommentDeletedExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFileCommand
 */
export const de_DeleteFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFileCommandError
 */
const de_DeleteFileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await de_FileDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await de_InvalidParentCommitIdExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await de_ParentCommitDoesNotExistExceptionRes(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await de_ParentCommitIdOutdatedExceptionRes(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await de_ParentCommitIdRequiredExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePullRequestApprovalRuleCommand
 */
export const de_DeletePullRequestApprovalRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullRequestApprovalRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePullRequestApprovalRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePullRequestApprovalRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePullRequestApprovalRuleCommandError
 */
const de_DeletePullRequestApprovalRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePullRequestApprovalRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      throw await de_ApprovalRuleNameRequiredExceptionRes(parsedOutput, context);
    case "CannotDeleteApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotDeleteApprovalRuleFromTemplateException":
      throw await de_CannotDeleteApprovalRuleFromTemplateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await de_InvalidApprovalRuleNameExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRepositoryCommand
 */
export const de_DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRepositoryCommandError
 */
const de_DeleteRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMergeConflictsCommand
 */
export const de_DescribeMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMergeConflictsCommandError
 */
const de_DescribeMergeConflictsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMergeConflictsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await de_FileDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxMergeHunksException":
    case "com.amazonaws.codecommit#InvalidMaxMergeHunksException":
      throw await de_InvalidMaxMergeHunksExceptionRes(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await de_InvalidMergeOptionExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await de_MergeOptionRequiredExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePullRequestEventsCommand
 */
export const de_DescribePullRequestEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullRequestEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePullRequestEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePullRequestEventsOutput(data, context);
  const response: DescribePullRequestEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePullRequestEventsCommandError
 */
const de_DescribePullRequestEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePullRequestEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActorDoesNotExistException":
    case "com.amazonaws.codecommit#ActorDoesNotExistException":
      throw await de_ActorDoesNotExistExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidActorArnException":
    case "com.amazonaws.codecommit#InvalidActorArnException":
      throw await de_InvalidActorArnExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidPullRequestEventTypeException":
    case "com.amazonaws.codecommit#InvalidPullRequestEventTypeException":
      throw await de_InvalidPullRequestEventTypeExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand
 */
export const de_DisassociateApprovalRuleTemplateFromRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateApprovalRuleTemplateFromRepositoryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateApprovalRuleTemplateFromRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommandError
 */
const de_DisassociateApprovalRuleTemplateFromRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand
 */
export const de_EvaluatePullRequestApprovalRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluatePullRequestApprovalRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EvaluatePullRequestApprovalRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EvaluatePullRequestApprovalRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommandError
 */
const de_EvaluatePullRequestApprovalRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluatePullRequestApprovalRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await de_InvalidRevisionIdExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await de_RevisionIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await de_RevisionNotCurrentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetApprovalRuleTemplateCommand
 */
export const de_GetApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetApprovalRuleTemplateOutput(data, context);
  const response: GetApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetApprovalRuleTemplateCommandError
 */
const de_GetApprovalRuleTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApprovalRuleTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBlobCommand
 */
export const de_GetBlobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBlobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBlobOutput(data, context);
  const response: GetBlobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBlobCommandError
 */
const de_GetBlobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BlobIdDoesNotExistException":
    case "com.amazonaws.codecommit#BlobIdDoesNotExistException":
      throw await de_BlobIdDoesNotExistExceptionRes(parsedOutput, context);
    case "BlobIdRequiredException":
    case "com.amazonaws.codecommit#BlobIdRequiredException":
      throw await de_BlobIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      throw await de_FileTooLargeExceptionRes(parsedOutput, context);
    case "InvalidBlobIdException":
    case "com.amazonaws.codecommit#InvalidBlobIdException":
      throw await de_InvalidBlobIdExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetBranchCommand
 */
export const de_GetBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBranchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetBranchCommandError
 */
const de_GetBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommentCommand
 */
export const de_GetCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCommentOutput(data, context);
  const response: GetCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCommentCommandError
 */
const de_GetCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await de_CommentDeletedExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommentReactionsCommand
 */
export const de_GetCommentReactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentReactionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommentReactionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetCommentReactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCommentReactionsCommandError
 */
const de_GetCommentReactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentReactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await de_CommentDeletedExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidReactionUserArnException":
    case "com.amazonaws.codecommit#InvalidReactionUserArnException":
      throw await de_InvalidReactionUserArnExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommentsForComparedCommitCommand
 */
export const de_GetCommentsForComparedCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommentsForComparedCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCommentsForComparedCommitOutput(data, context);
  const response: GetCommentsForComparedCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCommentsForComparedCommitCommandError
 */
const de_GetCommentsForComparedCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForComparedCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommentsForPullRequestCommand
 */
export const de_GetCommentsForPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommentsForPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCommentsForPullRequestOutput(data, context);
  const response: GetCommentsForPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCommentsForPullRequestCommandError
 */
const de_GetCommentsForPullRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommentsForPullRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await de_RepositoryNotAssociatedWithPullRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCommitCommand
 */
export const de_GetCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCommitCommandError
 */
const de_GetCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitIdDoesNotExistException":
    case "com.amazonaws.codecommit#CommitIdDoesNotExistException":
      throw await de_CommitIdDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDifferencesCommand
 */
export const de_GetDifferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDifferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDifferencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDifferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDifferencesCommandError
 */
const de_GetDifferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDifferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await de_PathDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetFileCommand
 */
export const de_GetFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFileOutput(data, context);
  const response: GetFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFileCommandError
 */
const de_GetFileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileDoesNotExistException":
    case "com.amazonaws.codecommit#FileDoesNotExistException":
      throw await de_FileDoesNotExistExceptionRes(parsedOutput, context);
    case "FileTooLargeException":
    case "com.amazonaws.codecommit#FileTooLargeException":
      throw await de_FileTooLargeExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetFolderCommand
 */
export const de_GetFolderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFolderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetFolderCommandError
 */
const de_GetFolderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFolderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FolderDoesNotExistException":
    case "com.amazonaws.codecommit#FolderDoesNotExistException":
      throw await de_FolderDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMergeCommitCommand
 */
export const de_GetMergeCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMergeCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMergeCommitCommandError
 */
const de_GetMergeCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMergeConflictsCommand
 */
export const de_GetMergeConflictsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeConflictsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMergeConflictsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMergeConflictsCommandError
 */
const de_GetMergeConflictsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeConflictsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidDestinationCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidDestinationCommitSpecifierException":
      throw await de_InvalidDestinationCommitSpecifierExceptionRes(parsedOutput, context);
    case "InvalidMaxConflictFilesException":
    case "com.amazonaws.codecommit#InvalidMaxConflictFilesException":
      throw await de_InvalidMaxConflictFilesExceptionRes(parsedOutput, context);
    case "InvalidMergeOptionException":
    case "com.amazonaws.codecommit#InvalidMergeOptionException":
      throw await de_InvalidMergeOptionExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidSourceCommitSpecifierException":
    case "com.amazonaws.codecommit#InvalidSourceCommitSpecifierException":
      throw await de_InvalidSourceCommitSpecifierExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MergeOptionRequiredException":
    case "com.amazonaws.codecommit#MergeOptionRequiredException":
      throw await de_MergeOptionRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMergeOptionsCommand
 */
export const de_GetMergeOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMergeOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetMergeOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMergeOptionsCommandError
 */
const de_GetMergeOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMergeOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPullRequestCommand
 */
export const de_GetPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPullRequestOutput(data, context);
  const response: GetPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPullRequestCommandError
 */
const de_GetPullRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPullRequestApprovalStatesCommand
 */
export const de_GetPullRequestApprovalStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestApprovalStatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPullRequestApprovalStatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPullRequestApprovalStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPullRequestApprovalStatesCommandError
 */
const de_GetPullRequestApprovalStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestApprovalStatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await de_InvalidRevisionIdExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await de_RevisionIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPullRequestOverrideStateCommand
 */
export const de_GetPullRequestOverrideStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestOverrideStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPullRequestOverrideStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPullRequestOverrideStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPullRequestOverrideStateCommandError
 */
const de_GetPullRequestOverrideStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPullRequestOverrideStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await de_InvalidRevisionIdExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await de_RevisionIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRepositoryCommand
 */
export const de_GetRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRepositoryOutput(data, context);
  const response: GetRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRepositoryCommandError
 */
const de_GetRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetRepositoryTriggersCommand
 */
export const de_GetRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRepositoryTriggersCommandError
 */
const de_GetRepositoryTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApprovalRuleTemplatesCommand
 */
export const de_ListApprovalRuleTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovalRuleTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApprovalRuleTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApprovalRuleTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApprovalRuleTemplatesCommandError
 */
const de_ListApprovalRuleTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApprovalRuleTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand
 */
export const de_ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociatedApprovalRuleTemplatesForRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommandError
 */
const de_ListAssociatedApprovalRuleTemplatesForRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBranchesCommand
 */
export const de_ListBranchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBranchesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListBranchesCommandError
 */
const de_ListBranchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBranchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFileCommitHistoryCommand
 */
export const de_ListFileCommitHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileCommitHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFileCommitHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFileCommitHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFileCommitHistoryCommandError
 */
const de_ListFileCommitHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileCommitHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPullRequestsCommand
 */
export const de_ListPullRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPullRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPullRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPullRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPullRequestsCommandError
 */
const de_ListPullRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPullRequestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorDoesNotExistException":
    case "com.amazonaws.codecommit#AuthorDoesNotExistException":
      throw await de_AuthorDoesNotExistExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidAuthorArnException":
    case "com.amazonaws.codecommit#InvalidAuthorArnException":
      throw await de_InvalidAuthorArnExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      throw await de_InvalidPullRequestStatusExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRepositoriesCommand
 */
export const de_ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRepositoriesCommandError
 */
const de_ListRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidOrderException":
    case "com.amazonaws.codecommit#InvalidOrderException":
      throw await de_InvalidOrderExceptionRes(parsedOutput, context);
    case "InvalidSortByException":
    case "com.amazonaws.codecommit#InvalidSortByException":
      throw await de_InvalidSortByExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand
 */
export const de_ListRepositoriesForApprovalRuleTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRepositoriesForApprovalRuleTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositoriesForApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommandError
 */
const de_ListRepositoriesForApprovalRuleTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "InvalidContinuationTokenException":
    case "com.amazonaws.codecommit#InvalidContinuationTokenException":
      throw await de_InvalidContinuationTokenExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.codecommit#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await de_InvalidResourceArnExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergeBranchesByFastForwardCommand
 */
export const de_MergeBranchesByFastForwardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByFastForwardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergeBranchesByFastForwardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: MergeBranchesByFastForwardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergeBranchesByFastForwardCommandError
 */
const de_MergeBranchesByFastForwardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByFastForwardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await de_InvalidTargetBranchExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergeBranchesBySquashCommand
 */
export const de_MergeBranchesBySquashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesBySquashCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergeBranchesBySquashCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: MergeBranchesBySquashCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergeBranchesBySquashCommandError
 */
const de_MergeBranchesBySquashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesBySquashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await de_FileModeRequiredExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await de_InvalidConflictResolutionExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await de_InvalidReplacementContentExceptionRes(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await de_InvalidReplacementTypeExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await de_InvalidTargetBranchExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await de_MaximumConflictResolutionEntriesExceededExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await de_MultipleConflictResolutionEntriesExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await de_ReplacementContentRequiredExceptionRes(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await de_ReplacementTypeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergeBranchesByThreeWayCommand
 */
export const de_MergeBranchesByThreeWayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByThreeWayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergeBranchesByThreeWayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: MergeBranchesByThreeWayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergeBranchesByThreeWayCommandError
 */
const de_MergeBranchesByThreeWayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeBranchesByThreeWayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "CommitRequiredException":
    case "com.amazonaws.codecommit#CommitRequiredException":
      throw await de_CommitRequiredExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FileModeRequiredException":
    case "com.amazonaws.codecommit#FileModeRequiredException":
      throw await de_FileModeRequiredExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidCommitException":
    case "com.amazonaws.codecommit#InvalidCommitException":
      throw await de_InvalidCommitExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await de_InvalidConflictResolutionExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await de_InvalidReplacementContentExceptionRes(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await de_InvalidReplacementTypeExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidTargetBranchException":
    case "com.amazonaws.codecommit#InvalidTargetBranchException":
      throw await de_InvalidTargetBranchExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await de_MaximumConflictResolutionEntriesExceededExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await de_MultipleConflictResolutionEntriesExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await de_ReplacementContentRequiredExceptionRes(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await de_ReplacementTypeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergePullRequestByFastForwardCommand
 */
export const de_MergePullRequestByFastForwardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByFastForwardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergePullRequestByFastForwardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MergePullRequestByFastForwardOutput(data, context);
  const response: MergePullRequestByFastForwardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergePullRequestByFastForwardCommandError
 */
const de_MergePullRequestByFastForwardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByFastForwardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await de_PullRequestApprovalRulesNotSatisfiedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "ReferenceDoesNotExistException":
    case "com.amazonaws.codecommit#ReferenceDoesNotExistException":
      throw await de_ReferenceDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await de_RepositoryNotAssociatedWithPullRequestExceptionRes(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await de_TipOfSourceReferenceIsDifferentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergePullRequestBySquashCommand
 */
export const de_MergePullRequestBySquashCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestBySquashCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergePullRequestBySquashCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MergePullRequestBySquashOutput(data, context);
  const response: MergePullRequestBySquashCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergePullRequestBySquashCommandError
 */
const de_MergePullRequestBySquashCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestBySquashCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await de_InvalidConflictResolutionExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await de_InvalidReplacementContentExceptionRes(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await de_InvalidReplacementTypeExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await de_MaximumConflictResolutionEntriesExceededExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await de_MultipleConflictResolutionEntriesExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await de_PullRequestApprovalRulesNotSatisfiedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await de_ReplacementContentRequiredExceptionRes(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await de_ReplacementTypeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await de_RepositoryNotAssociatedWithPullRequestExceptionRes(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await de_TipOfSourceReferenceIsDifferentExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergePullRequestByThreeWayCommand
 */
export const de_MergePullRequestByThreeWayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByThreeWayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergePullRequestByThreeWayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MergePullRequestByThreeWayOutput(data, context);
  const response: MergePullRequestByThreeWayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1MergePullRequestByThreeWayCommandError
 */
const de_MergePullRequestByThreeWayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergePullRequestByThreeWayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "ConcurrentReferenceUpdateException":
    case "com.amazonaws.codecommit#ConcurrentReferenceUpdateException":
      throw await de_ConcurrentReferenceUpdateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidConflictDetailLevelException":
    case "com.amazonaws.codecommit#InvalidConflictDetailLevelException":
      throw await de_InvalidConflictDetailLevelExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionException":
      throw await de_InvalidConflictResolutionExceptionRes(parsedOutput, context);
    case "InvalidConflictResolutionStrategyException":
    case "com.amazonaws.codecommit#InvalidConflictResolutionStrategyException":
      throw await de_InvalidConflictResolutionStrategyExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidReplacementContentException":
    case "com.amazonaws.codecommit#InvalidReplacementContentException":
      throw await de_InvalidReplacementContentExceptionRes(parsedOutput, context);
    case "InvalidReplacementTypeException":
    case "com.amazonaws.codecommit#InvalidReplacementTypeException":
      throw await de_InvalidReplacementTypeExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "ManualMergeRequiredException":
    case "com.amazonaws.codecommit#ManualMergeRequiredException":
      throw await de_ManualMergeRequiredExceptionRes(parsedOutput, context);
    case "MaximumConflictResolutionEntriesExceededException":
    case "com.amazonaws.codecommit#MaximumConflictResolutionEntriesExceededException":
      throw await de_MaximumConflictResolutionEntriesExceededExceptionRes(parsedOutput, context);
    case "MaximumFileContentToLoadExceededException":
    case "com.amazonaws.codecommit#MaximumFileContentToLoadExceededException":
      throw await de_MaximumFileContentToLoadExceededExceptionRes(parsedOutput, context);
    case "MaximumItemsToCompareExceededException":
    case "com.amazonaws.codecommit#MaximumItemsToCompareExceededException":
      throw await de_MaximumItemsToCompareExceededExceptionRes(parsedOutput, context);
    case "MultipleConflictResolutionEntriesException":
    case "com.amazonaws.codecommit#MultipleConflictResolutionEntriesException":
      throw await de_MultipleConflictResolutionEntriesExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestApprovalRulesNotSatisfiedException":
    case "com.amazonaws.codecommit#PullRequestApprovalRulesNotSatisfiedException":
      throw await de_PullRequestApprovalRulesNotSatisfiedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "ReplacementContentRequiredException":
    case "com.amazonaws.codecommit#ReplacementContentRequiredException":
      throw await de_ReplacementContentRequiredExceptionRes(parsedOutput, context);
    case "ReplacementTypeRequiredException":
    case "com.amazonaws.codecommit#ReplacementTypeRequiredException":
      throw await de_ReplacementTypeRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await de_RepositoryNotAssociatedWithPullRequestExceptionRes(parsedOutput, context);
    case "TipOfSourceReferenceIsDifferentException":
    case "com.amazonaws.codecommit#TipOfSourceReferenceIsDifferentException":
      throw await de_TipOfSourceReferenceIsDifferentExceptionRes(parsedOutput, context);
    case "TipsDivergenceExceededException":
    case "com.amazonaws.codecommit#TipsDivergenceExceededException":
      throw await de_TipsDivergenceExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1OverridePullRequestApprovalRulesCommand
 */
export const de_OverridePullRequestApprovalRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OverridePullRequestApprovalRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OverridePullRequestApprovalRulesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: OverridePullRequestApprovalRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1OverridePullRequestApprovalRulesCommandError
 */
const de_OverridePullRequestApprovalRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OverridePullRequestApprovalRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidOverrideStatusException":
    case "com.amazonaws.codecommit#InvalidOverrideStatusException":
      throw await de_InvalidOverrideStatusExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await de_InvalidRevisionIdExceptionRes(parsedOutput, context);
    case "OverrideAlreadySetException":
    case "com.amazonaws.codecommit#OverrideAlreadySetException":
      throw await de_OverrideAlreadySetExceptionRes(parsedOutput, context);
    case "OverrideStatusRequiredException":
    case "com.amazonaws.codecommit#OverrideStatusRequiredException":
      throw await de_OverrideStatusRequiredExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await de_RevisionIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await de_RevisionNotCurrentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PostCommentForComparedCommitCommand
 */
export const de_PostCommentForComparedCommitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForComparedCommitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PostCommentForComparedCommitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PostCommentForComparedCommitOutput(data, context);
  const response: PostCommentForComparedCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PostCommentForComparedCommitCommandError
 */
const de_PostCommentForComparedCommitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForComparedCommitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BeforeCommitIdAndAfterCommitIdAreSameException":
    case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
      throw await de_BeforeCommitIdAndAfterCommitIdAreSameExceptionRes(parsedOutput, context);
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await de_ClientRequestTokenRequiredExceptionRes(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await de_CommentContentRequiredExceptionRes(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await de_CommentContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await de_IdempotencyParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await de_InvalidClientRequestTokenExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      throw await de_InvalidFileLocationExceptionRes(parsedOutput, context);
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      throw await de_InvalidFilePositionExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      throw await de_InvalidRelativeFileVersionEnumExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await de_PathDoesNotExistExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PostCommentForPullRequestCommand
 */
export const de_PostCommentForPullRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForPullRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PostCommentForPullRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PostCommentForPullRequestOutput(data, context);
  const response: PostCommentForPullRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PostCommentForPullRequestCommandError
 */
const de_PostCommentForPullRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentForPullRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BeforeCommitIdAndAfterCommitIdAreSameException":
    case "com.amazonaws.codecommit#BeforeCommitIdAndAfterCommitIdAreSameException":
      throw await de_BeforeCommitIdAndAfterCommitIdAreSameExceptionRes(parsedOutput, context);
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await de_ClientRequestTokenRequiredExceptionRes(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await de_CommentContentRequiredExceptionRes(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await de_CommentContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "CommitDoesNotExistException":
    case "com.amazonaws.codecommit#CommitDoesNotExistException":
      throw await de_CommitDoesNotExistExceptionRes(parsedOutput, context);
    case "CommitIdRequiredException":
    case "com.amazonaws.codecommit#CommitIdRequiredException":
      throw await de_CommitIdRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await de_IdempotencyParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await de_InvalidClientRequestTokenExceptionRes(parsedOutput, context);
    case "InvalidCommitIdException":
    case "com.amazonaws.codecommit#InvalidCommitIdException":
      throw await de_InvalidCommitIdExceptionRes(parsedOutput, context);
    case "InvalidFileLocationException":
    case "com.amazonaws.codecommit#InvalidFileLocationException":
      throw await de_InvalidFileLocationExceptionRes(parsedOutput, context);
    case "InvalidFilePositionException":
    case "com.amazonaws.codecommit#InvalidFilePositionException":
      throw await de_InvalidFilePositionExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRelativeFileVersionEnumException":
    case "com.amazonaws.codecommit#InvalidRelativeFileVersionEnumException":
      throw await de_InvalidRelativeFileVersionEnumExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "PathDoesNotExistException":
    case "com.amazonaws.codecommit#PathDoesNotExistException":
      throw await de_PathDoesNotExistExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryNotAssociatedWithPullRequestException":
    case "com.amazonaws.codecommit#RepositoryNotAssociatedWithPullRequestException":
      throw await de_RepositoryNotAssociatedWithPullRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PostCommentReplyCommand
 */
export const de_PostCommentReplyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentReplyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PostCommentReplyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PostCommentReplyOutput(data, context);
  const response: PostCommentReplyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PostCommentReplyCommandError
 */
const de_PostCommentReplyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostCommentReplyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientRequestTokenRequiredException":
    case "com.amazonaws.codecommit#ClientRequestTokenRequiredException":
      throw await de_ClientRequestTokenRequiredExceptionRes(parsedOutput, context);
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await de_CommentContentRequiredExceptionRes(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await de_CommentContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "IdempotencyParameterMismatchException":
    case "com.amazonaws.codecommit#IdempotencyParameterMismatchException":
      throw await de_IdempotencyParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientRequestTokenException":
    case "com.amazonaws.codecommit#InvalidClientRequestTokenException":
      throw await de_InvalidClientRequestTokenExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutCommentReactionCommand
 */
export const de_PutCommentReactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCommentReactionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutCommentReactionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutCommentReactionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutCommentReactionCommandError
 */
const de_PutCommentReactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCommentReactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await de_CommentDeletedExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    case "InvalidReactionValueException":
    case "com.amazonaws.codecommit#InvalidReactionValueException":
      throw await de_InvalidReactionValueExceptionRes(parsedOutput, context);
    case "ReactionLimitExceededException":
    case "com.amazonaws.codecommit#ReactionLimitExceededException":
      throw await de_ReactionLimitExceededExceptionRes(parsedOutput, context);
    case "ReactionValueRequiredException":
    case "com.amazonaws.codecommit#ReactionValueRequiredException":
      throw await de_ReactionValueRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutFileCommand
 */
export const de_PutFileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutFileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutFileCommandError
 */
const de_PutFileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameIsTagNameException":
    case "com.amazonaws.codecommit#BranchNameIsTagNameException":
      throw await de_BranchNameIsTagNameExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "CommitMessageLengthExceededException":
    case "com.amazonaws.codecommit#CommitMessageLengthExceededException":
      throw await de_CommitMessageLengthExceededExceptionRes(parsedOutput, context);
    case "DirectoryNameConflictsWithFileNameException":
    case "com.amazonaws.codecommit#DirectoryNameConflictsWithFileNameException":
      throw await de_DirectoryNameConflictsWithFileNameExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "FileContentRequiredException":
    case "com.amazonaws.codecommit#FileContentRequiredException":
      throw await de_FileContentRequiredExceptionRes(parsedOutput, context);
    case "FileContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FileContentSizeLimitExceededException":
      throw await de_FileContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "FileNameConflictsWithDirectoryNameException":
    case "com.amazonaws.codecommit#FileNameConflictsWithDirectoryNameException":
      throw await de_FileNameConflictsWithDirectoryNameExceptionRes(parsedOutput, context);
    case "FilePathConflictsWithSubmodulePathException":
    case "com.amazonaws.codecommit#FilePathConflictsWithSubmodulePathException":
      throw await de_FilePathConflictsWithSubmodulePathExceptionRes(parsedOutput, context);
    case "FolderContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#FolderContentSizeLimitExceededException":
      throw await de_FolderContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidDeletionParameterException":
    case "com.amazonaws.codecommit#InvalidDeletionParameterException":
      throw await de_InvalidDeletionParameterExceptionRes(parsedOutput, context);
    case "InvalidEmailException":
    case "com.amazonaws.codecommit#InvalidEmailException":
      throw await de_InvalidEmailExceptionRes(parsedOutput, context);
    case "InvalidFileModeException":
    case "com.amazonaws.codecommit#InvalidFileModeException":
      throw await de_InvalidFileModeExceptionRes(parsedOutput, context);
    case "InvalidParentCommitIdException":
    case "com.amazonaws.codecommit#InvalidParentCommitIdException":
      throw await de_InvalidParentCommitIdExceptionRes(parsedOutput, context);
    case "InvalidPathException":
    case "com.amazonaws.codecommit#InvalidPathException":
      throw await de_InvalidPathExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "NameLengthExceededException":
    case "com.amazonaws.codecommit#NameLengthExceededException":
      throw await de_NameLengthExceededExceptionRes(parsedOutput, context);
    case "ParentCommitDoesNotExistException":
    case "com.amazonaws.codecommit#ParentCommitDoesNotExistException":
      throw await de_ParentCommitDoesNotExistExceptionRes(parsedOutput, context);
    case "ParentCommitIdOutdatedException":
    case "com.amazonaws.codecommit#ParentCommitIdOutdatedException":
      throw await de_ParentCommitIdOutdatedExceptionRes(parsedOutput, context);
    case "ParentCommitIdRequiredException":
    case "com.amazonaws.codecommit#ParentCommitIdRequiredException":
      throw await de_ParentCommitIdRequiredExceptionRes(parsedOutput, context);
    case "PathRequiredException":
    case "com.amazonaws.codecommit#PathRequiredException":
      throw await de_PathRequiredExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "SameFileContentException":
    case "com.amazonaws.codecommit#SameFileContentException":
      throw await de_SameFileContentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRepositoryTriggersCommand
 */
export const de_PutRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutRepositoryTriggersCommandError
 */
const de_PutRepositoryTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      throw await de_InvalidRepositoryTriggerBranchNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      throw await de_InvalidRepositoryTriggerCustomDataExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      throw await de_InvalidRepositoryTriggerDestinationArnExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      throw await de_InvalidRepositoryTriggerEventsExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      throw await de_InvalidRepositoryTriggerNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      throw await de_InvalidRepositoryTriggerRegionExceptionRes(parsedOutput, context);
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      throw await de_MaximumBranchesExceededExceptionRes(parsedOutput, context);
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      throw await de_MaximumRepositoryTriggersExceededExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      throw await de_RepositoryTriggerBranchNameListRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      throw await de_RepositoryTriggerDestinationArnRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      throw await de_RepositoryTriggerEventsListRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      throw await de_RepositoryTriggerNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      throw await de_RepositoryTriggersListRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await de_InvalidResourceArnExceptionRes(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await de_InvalidSystemTagUsageExceptionRes(parsedOutput, context);
    case "InvalidTagsMapException":
    case "com.amazonaws.codecommit#InvalidTagsMapException":
      throw await de_InvalidTagsMapExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TagsMapRequiredException":
    case "com.amazonaws.codecommit#TagsMapRequiredException":
      throw await de_TagsMapRequiredExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TestRepositoryTriggersCommand
 */
export const de_TestRepositoryTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRepositoryTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestRepositoryTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TestRepositoryTriggersCommandError
 */
const de_TestRepositoryTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestRepositoryTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerBranchNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerBranchNameException":
      throw await de_InvalidRepositoryTriggerBranchNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerCustomDataException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerCustomDataException":
      throw await de_InvalidRepositoryTriggerCustomDataExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerDestinationArnException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerDestinationArnException":
      throw await de_InvalidRepositoryTriggerDestinationArnExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerEventsException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerEventsException":
      throw await de_InvalidRepositoryTriggerEventsExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerNameException":
      throw await de_InvalidRepositoryTriggerNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryTriggerRegionException":
    case "com.amazonaws.codecommit#InvalidRepositoryTriggerRegionException":
      throw await de_InvalidRepositoryTriggerRegionExceptionRes(parsedOutput, context);
    case "MaximumBranchesExceededException":
    case "com.amazonaws.codecommit#MaximumBranchesExceededException":
      throw await de_MaximumBranchesExceededExceptionRes(parsedOutput, context);
    case "MaximumRepositoryTriggersExceededException":
    case "com.amazonaws.codecommit#MaximumRepositoryTriggersExceededException":
      throw await de_MaximumRepositoryTriggersExceededExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerBranchNameListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerBranchNameListRequiredException":
      throw await de_RepositoryTriggerBranchNameListRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerDestinationArnRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerDestinationArnRequiredException":
      throw await de_RepositoryTriggerDestinationArnRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerEventsListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerEventsListRequiredException":
      throw await de_RepositoryTriggerEventsListRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggerNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggerNameRequiredException":
      throw await de_RepositoryTriggerNameRequiredExceptionRes(parsedOutput, context);
    case "RepositoryTriggersListRequiredException":
    case "com.amazonaws.codecommit#RepositoryTriggersListRequiredException":
      throw await de_RepositoryTriggersListRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "InvalidResourceArnException":
    case "com.amazonaws.codecommit#InvalidResourceArnException":
      throw await de_InvalidResourceArnExceptionRes(parsedOutput, context);
    case "InvalidSystemTagUsageException":
    case "com.amazonaws.codecommit#InvalidSystemTagUsageException":
      throw await de_InvalidSystemTagUsageExceptionRes(parsedOutput, context);
    case "InvalidTagKeysListException":
    case "com.amazonaws.codecommit#InvalidTagKeysListException":
      throw await de_InvalidTagKeysListExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codecommit#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    case "TagKeysListRequiredException":
    case "com.amazonaws.codecommit#TagKeysListRequiredException":
      throw await de_TagKeysListRequiredExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.codecommit#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.codecommit#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand
 */
export const de_UpdateApprovalRuleTemplateContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApprovalRuleTemplateContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApprovalRuleTemplateContentOutput(data, context);
  const response: UpdateApprovalRuleTemplateContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommandError
 */
const de_UpdateApprovalRuleTemplateContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateContentRequiredException":
      throw await de_ApprovalRuleTemplateContentRequiredExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateContentException":
      throw await de_InvalidApprovalRuleTemplateContentExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      throw await de_InvalidRuleContentSha256ExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand
 */
export const de_UpdateApprovalRuleTemplateDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApprovalRuleTemplateDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApprovalRuleTemplateDescriptionOutput(data, context);
  const response: UpdateApprovalRuleTemplateDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommandError
 */
const de_UpdateApprovalRuleTemplateDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateDescriptionException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateDescriptionException":
      throw await de_InvalidApprovalRuleTemplateDescriptionExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand
 */
export const de_UpdateApprovalRuleTemplateNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApprovalRuleTemplateNameCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApprovalRuleTemplateNameOutput(data, context);
  const response: UpdateApprovalRuleTemplateNameCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommandError
 */
const de_UpdateApprovalRuleTemplateNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApprovalRuleTemplateNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleTemplateDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateDoesNotExistException":
      throw await de_ApprovalRuleTemplateDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameAlreadyExistsException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameAlreadyExistsException":
      throw await de_ApprovalRuleTemplateNameAlreadyExistsExceptionRes(parsedOutput, context);
    case "ApprovalRuleTemplateNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleTemplateNameRequiredException":
      throw await de_ApprovalRuleTemplateNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleTemplateNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleTemplateNameException":
      throw await de_InvalidApprovalRuleTemplateNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCommentCommand
 */
export const de_UpdateCommentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCommentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCommentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCommentOutput(data, context);
  const response: UpdateCommentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCommentCommandError
 */
const de_UpdateCommentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCommentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CommentContentRequiredException":
    case "com.amazonaws.codecommit#CommentContentRequiredException":
      throw await de_CommentContentRequiredExceptionRes(parsedOutput, context);
    case "CommentContentSizeLimitExceededException":
    case "com.amazonaws.codecommit#CommentContentSizeLimitExceededException":
      throw await de_CommentContentSizeLimitExceededExceptionRes(parsedOutput, context);
    case "CommentDeletedException":
    case "com.amazonaws.codecommit#CommentDeletedException":
      throw await de_CommentDeletedExceptionRes(parsedOutput, context);
    case "CommentDoesNotExistException":
    case "com.amazonaws.codecommit#CommentDoesNotExistException":
      throw await de_CommentDoesNotExistExceptionRes(parsedOutput, context);
    case "CommentIdRequiredException":
    case "com.amazonaws.codecommit#CommentIdRequiredException":
      throw await de_CommentIdRequiredExceptionRes(parsedOutput, context);
    case "CommentNotCreatedByCallerException":
    case "com.amazonaws.codecommit#CommentNotCreatedByCallerException":
      throw await de_CommentNotCreatedByCallerExceptionRes(parsedOutput, context);
    case "InvalidCommentIdException":
    case "com.amazonaws.codecommit#InvalidCommentIdException":
      throw await de_InvalidCommentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDefaultBranchCommand
 */
export const de_UpdateDefaultBranchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultBranchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDefaultBranchCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDefaultBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDefaultBranchCommandError
 */
const de_UpdateDefaultBranchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultBranchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BranchDoesNotExistException":
    case "com.amazonaws.codecommit#BranchDoesNotExistException":
      throw await de_BranchDoesNotExistExceptionRes(parsedOutput, context);
    case "BranchNameRequiredException":
    case "com.amazonaws.codecommit#BranchNameRequiredException":
      throw await de_BranchNameRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidBranchNameException":
    case "com.amazonaws.codecommit#InvalidBranchNameException":
      throw await de_InvalidBranchNameExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand
 */
export const de_UpdatePullRequestApprovalRuleContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalRuleContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePullRequestApprovalRuleContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePullRequestApprovalRuleContentOutput(data, context);
  const response: UpdatePullRequestApprovalRuleContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommandError
 */
const de_UpdatePullRequestApprovalRuleContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalRuleContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalRuleContentRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleContentRequiredException":
      throw await de_ApprovalRuleContentRequiredExceptionRes(parsedOutput, context);
    case "ApprovalRuleDoesNotExistException":
    case "com.amazonaws.codecommit#ApprovalRuleDoesNotExistException":
      throw await de_ApprovalRuleDoesNotExistExceptionRes(parsedOutput, context);
    case "ApprovalRuleNameRequiredException":
    case "com.amazonaws.codecommit#ApprovalRuleNameRequiredException":
      throw await de_ApprovalRuleNameRequiredExceptionRes(parsedOutput, context);
    case "CannotModifyApprovalRuleFromTemplateException":
    case "com.amazonaws.codecommit#CannotModifyApprovalRuleFromTemplateException":
      throw await de_CannotModifyApprovalRuleFromTemplateExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleContentException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleContentException":
      throw await de_InvalidApprovalRuleContentExceptionRes(parsedOutput, context);
    case "InvalidApprovalRuleNameException":
    case "com.amazonaws.codecommit#InvalidApprovalRuleNameException":
      throw await de_InvalidApprovalRuleNameExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRuleContentSha256Exception":
    case "com.amazonaws.codecommit#InvalidRuleContentSha256Exception":
      throw await de_InvalidRuleContentSha256ExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalStateCommand
 */
export const de_UpdatePullRequestApprovalStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePullRequestApprovalStateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdatePullRequestApprovalStateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalStateCommandError
 */
const de_UpdatePullRequestApprovalStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestApprovalStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApprovalStateRequiredException":
    case "com.amazonaws.codecommit#ApprovalStateRequiredException":
      throw await de_ApprovalStateRequiredExceptionRes(parsedOutput, context);
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidApprovalStateException":
    case "com.amazonaws.codecommit#InvalidApprovalStateException":
      throw await de_InvalidApprovalStateExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidRevisionIdException":
    case "com.amazonaws.codecommit#InvalidRevisionIdException":
      throw await de_InvalidRevisionIdExceptionRes(parsedOutput, context);
    case "MaximumNumberOfApprovalsExceededException":
    case "com.amazonaws.codecommit#MaximumNumberOfApprovalsExceededException":
      throw await de_MaximumNumberOfApprovalsExceededExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestCannotBeApprovedByAuthorException":
    case "com.amazonaws.codecommit#PullRequestCannotBeApprovedByAuthorException":
      throw await de_PullRequestCannotBeApprovedByAuthorExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionIdRequiredException":
    case "com.amazonaws.codecommit#RevisionIdRequiredException":
      throw await de_RevisionIdRequiredExceptionRes(parsedOutput, context);
    case "RevisionNotCurrentException":
    case "com.amazonaws.codecommit#RevisionNotCurrentException":
      throw await de_RevisionNotCurrentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePullRequestDescriptionCommand
 */
export const de_UpdatePullRequestDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePullRequestDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePullRequestDescriptionOutput(data, context);
  const response: UpdatePullRequestDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePullRequestDescriptionCommandError
 */
const de_UpdatePullRequestDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidDescriptionException":
    case "com.amazonaws.codecommit#InvalidDescriptionException":
      throw await de_InvalidDescriptionExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePullRequestStatusCommand
 */
export const de_UpdatePullRequestStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePullRequestStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePullRequestStatusOutput(data, context);
  const response: UpdatePullRequestStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePullRequestStatusCommandError
 */
const de_UpdatePullRequestStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidPullRequestStatusException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusException":
      throw await de_InvalidPullRequestStatusExceptionRes(parsedOutput, context);
    case "InvalidPullRequestStatusUpdateException":
    case "com.amazonaws.codecommit#InvalidPullRequestStatusUpdateException":
      throw await de_InvalidPullRequestStatusUpdateExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "PullRequestStatusRequiredException":
    case "com.amazonaws.codecommit#PullRequestStatusRequiredException":
      throw await de_PullRequestStatusRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePullRequestTitleCommand
 */
export const de_UpdatePullRequestTitleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestTitleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePullRequestTitleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePullRequestTitleOutput(data, context);
  const response: UpdatePullRequestTitleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePullRequestTitleCommandError
 */
const de_UpdatePullRequestTitleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePullRequestTitleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPullRequestIdException":
    case "com.amazonaws.codecommit#InvalidPullRequestIdException":
      throw await de_InvalidPullRequestIdExceptionRes(parsedOutput, context);
    case "InvalidTitleException":
    case "com.amazonaws.codecommit#InvalidTitleException":
      throw await de_InvalidTitleExceptionRes(parsedOutput, context);
    case "PullRequestAlreadyClosedException":
    case "com.amazonaws.codecommit#PullRequestAlreadyClosedException":
      throw await de_PullRequestAlreadyClosedExceptionRes(parsedOutput, context);
    case "PullRequestDoesNotExistException":
    case "com.amazonaws.codecommit#PullRequestDoesNotExistException":
      throw await de_PullRequestDoesNotExistExceptionRes(parsedOutput, context);
    case "PullRequestIdRequiredException":
    case "com.amazonaws.codecommit#PullRequestIdRequiredException":
      throw await de_PullRequestIdRequiredExceptionRes(parsedOutput, context);
    case "TitleRequiredException":
    case "com.amazonaws.codecommit#TitleRequiredException":
      throw await de_TitleRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRepositoryDescriptionCommand
 */
export const de_UpdateRepositoryDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRepositoryDescriptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRepositoryDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRepositoryDescriptionCommandError
 */
const de_UpdateRepositoryDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionIntegrityChecksFailedException":
    case "com.amazonaws.codecommit#EncryptionIntegrityChecksFailedException":
      throw await de_EncryptionIntegrityChecksFailedExceptionRes(parsedOutput, context);
    case "EncryptionKeyAccessDeniedException":
    case "com.amazonaws.codecommit#EncryptionKeyAccessDeniedException":
      throw await de_EncryptionKeyAccessDeniedExceptionRes(parsedOutput, context);
    case "EncryptionKeyDisabledException":
    case "com.amazonaws.codecommit#EncryptionKeyDisabledException":
      throw await de_EncryptionKeyDisabledExceptionRes(parsedOutput, context);
    case "EncryptionKeyNotFoundException":
    case "com.amazonaws.codecommit#EncryptionKeyNotFoundException":
      throw await de_EncryptionKeyNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionKeyUnavailableException":
    case "com.amazonaws.codecommit#EncryptionKeyUnavailableException":
      throw await de_EncryptionKeyUnavailableExceptionRes(parsedOutput, context);
    case "InvalidRepositoryDescriptionException":
    case "com.amazonaws.codecommit#InvalidRepositoryDescriptionException":
      throw await de_InvalidRepositoryDescriptionExceptionRes(parsedOutput, context);
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRepositoryNameCommand
 */
export const de_UpdateRepositoryNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryNameCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRepositoryNameCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateRepositoryNameCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRepositoryNameCommandError
 */
const de_UpdateRepositoryNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRepositoryNameException":
    case "com.amazonaws.codecommit#InvalidRepositoryNameException":
      throw await de_InvalidRepositoryNameExceptionRes(parsedOutput, context);
    case "RepositoryDoesNotExistException":
    case "com.amazonaws.codecommit#RepositoryDoesNotExistException":
      throw await de_RepositoryDoesNotExistExceptionRes(parsedOutput, context);
    case "RepositoryNameExistsException":
    case "com.amazonaws.codecommit#RepositoryNameExistsException":
      throw await de_RepositoryNameExistsExceptionRes(parsedOutput, context);
    case "RepositoryNameRequiredException":
    case "com.amazonaws.codecommit#RepositoryNameRequiredException":
      throw await de_RepositoryNameRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ActorDoesNotExistExceptionRes
 */
const de_ActorDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActorDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleContentRequiredExceptionRes
 */
const de_ApprovalRuleContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleDoesNotExistExceptionRes
 */
const de_ApprovalRuleDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleNameAlreadyExistsExceptionRes
 */
const de_ApprovalRuleNameAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleNameAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleNameRequiredExceptionRes
 */
const de_ApprovalRuleNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateContentRequiredExceptionRes
 */
const de_ApprovalRuleTemplateContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleTemplateContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistExceptionRes
 */
const de_ApprovalRuleTemplateDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleTemplateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateInUseExceptionRes
 */
const de_ApprovalRuleTemplateInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleTemplateInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsExceptionRes
 */
const de_ApprovalRuleTemplateNameAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleTemplateNameAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateNameRequiredExceptionRes
 */
const de_ApprovalRuleTemplateNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalRuleTemplateNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalRuleTemplateNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApprovalStateRequiredExceptionRes
 */
const de_ApprovalStateRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApprovalStateRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ApprovalStateRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AuthorDoesNotExistExceptionRes
 */
const de_AuthorDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AuthorDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameExceptionRes
 */
const de_BeforeCommitIdAndAfterCommitIdAreSameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BeforeCommitIdAndAfterCommitIdAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BeforeCommitIdAndAfterCommitIdAreSameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BlobIdDoesNotExistExceptionRes
 */
const de_BlobIdDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BlobIdDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BlobIdRequiredExceptionRes
 */
const de_BlobIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BlobIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BlobIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BranchDoesNotExistExceptionRes
 */
const de_BranchDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BranchDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BranchNameExistsExceptionRes
 */
const de_BranchNameExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BranchNameExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BranchNameIsTagNameExceptionRes
 */
const de_BranchNameIsTagNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameIsTagNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BranchNameIsTagNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BranchNameRequiredExceptionRes
 */
const de_BranchNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BranchNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BranchNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateExceptionRes
 */
const de_CannotDeleteApprovalRuleFromTemplateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CannotDeleteApprovalRuleFromTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateExceptionRes
 */
const de_CannotModifyApprovalRuleFromTemplateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotModifyApprovalRuleFromTemplateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CannotModifyApprovalRuleFromTemplateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClientRequestTokenRequiredExceptionRes
 */
const de_ClientRequestTokenRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientRequestTokenRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ClientRequestTokenRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentContentRequiredExceptionRes
 */
const de_CommentContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentContentSizeLimitExceededExceptionRes
 */
const de_CommentContentSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentDeletedExceptionRes
 */
const de_CommentDeletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentDoesNotExistExceptionRes
 */
const de_CommentDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentIdRequiredExceptionRes
 */
const de_CommentIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommentNotCreatedByCallerExceptionRes
 */
const de_CommentNotCreatedByCallerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommentNotCreatedByCallerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommentNotCreatedByCallerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitDoesNotExistExceptionRes
 */
const de_CommitDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitIdDoesNotExistExceptionRes
 */
const de_CommitIdDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitIdDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitIdRequiredExceptionRes
 */
const de_CommitIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitIdsLimitExceededExceptionRes
 */
const de_CommitIdsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitIdsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitIdsListRequiredExceptionRes
 */
const de_CommitIdsListRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitIdsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitIdsListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitMessageLengthExceededExceptionRes
 */
const de_CommitMessageLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitMessageLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitMessageLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CommitRequiredExceptionRes
 */
const de_CommitRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CommitRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CommitRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentReferenceUpdateExceptionRes
 */
const de_ConcurrentReferenceUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentReferenceUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentReferenceUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DefaultBranchCannotBeDeletedExceptionRes
 */
const de_DefaultBranchCannotBeDeletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultBranchCannotBeDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DefaultBranchCannotBeDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryNameConflictsWithFileNameExceptionRes
 */
const de_DirectoryNameConflictsWithFileNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNameConflictsWithFileNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DirectoryNameConflictsWithFileNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionIntegrityChecksFailedExceptionRes
 */
const de_EncryptionIntegrityChecksFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionIntegrityChecksFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionIntegrityChecksFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionKeyAccessDeniedExceptionRes
 */
const de_EncryptionKeyAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionKeyAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionKeyDisabledExceptionRes
 */
const de_EncryptionKeyDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionKeyDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionKeyNotFoundExceptionRes
 */
const de_EncryptionKeyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionKeyUnavailableExceptionRes
 */
const de_EncryptionKeyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionKeyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionKeyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileContentAndSourceFileSpecifiedExceptionRes
 */
const de_FileContentAndSourceFileSpecifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentAndSourceFileSpecifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileContentAndSourceFileSpecifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileContentRequiredExceptionRes
 */
const de_FileContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileContentSizeLimitExceededExceptionRes
 */
const de_FileContentSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileDoesNotExistExceptionRes
 */
const de_FileDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileEntryRequiredExceptionRes
 */
const de_FileEntryRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileEntryRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileEntryRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileModeRequiredExceptionRes
 */
const de_FileModeRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileModeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileModeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileNameConflictsWithDirectoryNameExceptionRes
 */
const de_FileNameConflictsWithDirectoryNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileNameConflictsWithDirectoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileNameConflictsWithDirectoryNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FilePathConflictsWithSubmodulePathExceptionRes
 */
const de_FilePathConflictsWithSubmodulePathExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilePathConflictsWithSubmodulePathException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FilePathConflictsWithSubmodulePathException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileTooLargeExceptionRes
 */
const de_FileTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FolderContentSizeLimitExceededExceptionRes
 */
const de_FolderContentSizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderContentSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FolderContentSizeLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FolderDoesNotExistExceptionRes
 */
const de_FolderDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FolderDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FolderDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotencyParameterMismatchExceptionRes
 */
const de_IdempotencyParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IdempotencyParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidActorArnExceptionRes
 */
const de_InvalidActorArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidActorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidActorArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleContentExceptionRes
 */
const de_InvalidApprovalRuleContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalRuleContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleNameExceptionRes
 */
const de_InvalidApprovalRuleNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalRuleNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateContentExceptionRes
 */
const de_InvalidApprovalRuleTemplateContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalRuleTemplateContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionExceptionRes
 */
const de_InvalidApprovalRuleTemplateDescriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalRuleTemplateDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateNameExceptionRes
 */
const de_InvalidApprovalRuleTemplateNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalRuleTemplateNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalRuleTemplateNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApprovalStateExceptionRes
 */
const de_InvalidApprovalStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApprovalStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApprovalStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAuthorArnExceptionRes
 */
const de_InvalidAuthorArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidAuthorArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidBlobIdExceptionRes
 */
const de_InvalidBlobIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidBlobIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidBranchNameExceptionRes
 */
const de_InvalidBranchNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidBranchNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidClientRequestTokenExceptionRes
 */
const de_InvalidClientRequestTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientRequestTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidClientRequestTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCommentIdExceptionRes
 */
const de_InvalidCommentIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCommentIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCommitExceptionRes
 */
const de_InvalidCommitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCommitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCommitIdExceptionRes
 */
const de_InvalidCommitIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidCommitIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidConflictDetailLevelExceptionRes
 */
const de_InvalidConflictDetailLevelExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictDetailLevelException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidConflictDetailLevelException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidConflictResolutionExceptionRes
 */
const de_InvalidConflictResolutionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidConflictResolutionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidConflictResolutionStrategyExceptionRes
 */
const de_InvalidConflictResolutionStrategyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConflictResolutionStrategyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidConflictResolutionStrategyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidContinuationTokenExceptionRes
 */
const de_InvalidContinuationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidContinuationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidContinuationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeletionParameterExceptionRes
 */
const de_InvalidDeletionParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeletionParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDeletionParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDescriptionExceptionRes
 */
const de_InvalidDescriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDestinationCommitSpecifierExceptionRes
 */
const de_InvalidDestinationCommitSpecifierExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDestinationCommitSpecifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEmailExceptionRes
 */
const de_InvalidEmailExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEmailException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidEmailException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFileLocationExceptionRes
 */
const de_InvalidFileLocationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileLocationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFileLocationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFileModeExceptionRes
 */
const de_InvalidFileModeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFileModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFilePositionExceptionRes
 */
const de_InvalidFilePositionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilePositionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFilePositionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMaxConflictFilesExceptionRes
 */
const de_InvalidMaxConflictFilesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxConflictFilesException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMaxConflictFilesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMaxMergeHunksExceptionRes
 */
const de_InvalidMaxMergeHunksExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxMergeHunksException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMaxMergeHunksException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMaxResultsExceptionRes
 */
const de_InvalidMaxResultsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMaxResultsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMergeOptionExceptionRes
 */
const de_InvalidMergeOptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMergeOptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMergeOptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOrderExceptionRes
 */
const de_InvalidOrderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOrderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOverrideStatusExceptionRes
 */
const de_InvalidOverrideStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOverrideStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOverrideStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParentCommitIdExceptionRes
 */
const de_InvalidParentCommitIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParentCommitIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParentCommitIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPathExceptionRes
 */
const de_InvalidPathExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPathException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPathException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPullRequestEventTypeExceptionRes
 */
const de_InvalidPullRequestEventTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestEventTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPullRequestEventTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPullRequestIdExceptionRes
 */
const de_InvalidPullRequestIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPullRequestIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPullRequestStatusExceptionRes
 */
const de_InvalidPullRequestStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPullRequestStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPullRequestStatusUpdateExceptionRes
 */
const de_InvalidPullRequestStatusUpdateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPullRequestStatusUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPullRequestStatusUpdateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidReactionUserArnExceptionRes
 */
const de_InvalidReactionUserArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidReactionUserArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidReactionValueExceptionRes
 */
const de_InvalidReactionValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReactionValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidReactionValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidReferenceNameExceptionRes
 */
const de_InvalidReferenceNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReferenceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidReferenceNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRelativeFileVersionEnumExceptionRes
 */
const de_InvalidRelativeFileVersionEnumExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRelativeFileVersionEnumException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRelativeFileVersionEnumException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidReplacementContentExceptionRes
 */
const de_InvalidReplacementContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidReplacementContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidReplacementTypeExceptionRes
 */
const de_InvalidReplacementTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidReplacementTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidReplacementTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryDescriptionExceptionRes
 */
const de_InvalidRepositoryDescriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryDescriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryDescriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryNameExceptionRes
 */
const de_InvalidRepositoryNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerBranchNameExceptionRes
 */
const de_InvalidRepositoryTriggerBranchNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerBranchNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerBranchNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerCustomDataExceptionRes
 */
const de_InvalidRepositoryTriggerCustomDataExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerCustomDataException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerCustomDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnExceptionRes
 */
const de_InvalidRepositoryTriggerDestinationArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerDestinationArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerDestinationArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerEventsExceptionRes
 */
const de_InvalidRepositoryTriggerEventsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerEventsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerEventsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerNameExceptionRes
 */
const de_InvalidRepositoryTriggerNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerRegionExceptionRes
 */
const de_InvalidRepositoryTriggerRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRepositoryTriggerRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRepositoryTriggerRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceArnExceptionRes
 */
const de_InvalidResourceArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidResourceArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRevisionIdExceptionRes
 */
const de_InvalidRevisionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRuleContentSha256ExceptionRes
 */
const de_InvalidRuleContentSha256ExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuleContentSha256Exception> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRuleContentSha256Exception({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSortByExceptionRes
 */
const de_InvalidSortByExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSortByException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSourceCommitSpecifierExceptionRes
 */
const de_InvalidSourceCommitSpecifierExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceCommitSpecifierException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSourceCommitSpecifierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSystemTagUsageExceptionRes
 */
const de_InvalidSystemTagUsageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSystemTagUsageException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSystemTagUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagKeysListExceptionRes
 */
const de_InvalidTagKeysListExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagKeysListException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTagKeysListException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagsMapExceptionRes
 */
const de_InvalidTagsMapExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsMapException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTagsMapException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetBranchExceptionRes
 */
const de_InvalidTargetBranchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetBranchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTargetBranchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetExceptionRes
 */
const de_InvalidTargetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTargetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetsExceptionRes
 */
const de_InvalidTargetsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTargetsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTitleExceptionRes
 */
const de_InvalidTitleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTitleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTitleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ManualMergeRequiredExceptionRes
 */
const de_ManualMergeRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManualMergeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ManualMergeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumBranchesExceededExceptionRes
 */
const de_MaximumBranchesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumBranchesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumBranchesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumConflictResolutionEntriesExceededExceptionRes
 */
const de_MaximumConflictResolutionEntriesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumConflictResolutionEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumConflictResolutionEntriesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumFileContentToLoadExceededExceptionRes
 */
const de_MaximumFileContentToLoadExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileContentToLoadExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumFileContentToLoadExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumFileEntriesExceededExceptionRes
 */
const de_MaximumFileEntriesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumFileEntriesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumFileEntriesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumItemsToCompareExceededExceptionRes
 */
const de_MaximumItemsToCompareExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumItemsToCompareExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumItemsToCompareExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumNumberOfApprovalsExceededExceptionRes
 */
const de_MaximumNumberOfApprovalsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfApprovalsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumNumberOfApprovalsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumOpenPullRequestsExceededExceptionRes
 */
const de_MaximumOpenPullRequestsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumOpenPullRequestsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumOpenPullRequestsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumRepositoryNamesExceededExceptionRes
 */
const de_MaximumRepositoryNamesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryNamesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumRepositoryNamesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumRepositoryTriggersExceededExceptionRes
 */
const de_MaximumRepositoryTriggersExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRepositoryTriggersExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumRepositoryTriggersExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryExceptionRes
 */
const de_MaximumRuleTemplatesAssociatedWithRepositoryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumRuleTemplatesAssociatedWithRepositoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MaximumRuleTemplatesAssociatedWithRepositoryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MergeOptionRequiredExceptionRes
 */
const de_MergeOptionRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MergeOptionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MergeOptionRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MultipleConflictResolutionEntriesExceptionRes
 */
const de_MultipleConflictResolutionEntriesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleConflictResolutionEntriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MultipleConflictResolutionEntriesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MultipleRepositoriesInPullRequestExceptionRes
 */
const de_MultipleRepositoriesInPullRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleRepositoriesInPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MultipleRepositoriesInPullRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NameLengthExceededExceptionRes
 */
const de_NameLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NameLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoChangeExceptionRes
 */
const de_NoChangeExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NoChangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NoChangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NumberOfRulesExceededExceptionRes
 */
const de_NumberOfRulesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRulesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NumberOfRulesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NumberOfRuleTemplatesExceededExceptionRes
 */
const de_NumberOfRuleTemplatesExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NumberOfRuleTemplatesExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NumberOfRuleTemplatesExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OverrideAlreadySetExceptionRes
 */
const de_OverrideAlreadySetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideAlreadySetException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OverrideAlreadySetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OverrideStatusRequiredExceptionRes
 */
const de_OverrideStatusRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverrideStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OverrideStatusRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParentCommitDoesNotExistExceptionRes
 */
const de_ParentCommitDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ParentCommitDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParentCommitIdOutdatedExceptionRes
 */
const de_ParentCommitIdOutdatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdOutdatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ParentCommitIdOutdatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParentCommitIdRequiredExceptionRes
 */
const de_ParentCommitIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentCommitIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ParentCommitIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PathDoesNotExistExceptionRes
 */
const de_PathDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PathDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PathRequiredExceptionRes
 */
const de_PathRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PathRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PathRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestAlreadyClosedExceptionRes
 */
const de_PullRequestAlreadyClosedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestAlreadyClosedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestAlreadyClosedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedExceptionRes
 */
const de_PullRequestApprovalRulesNotSatisfiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestApprovalRulesNotSatisfiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestApprovalRulesNotSatisfiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorExceptionRes
 */
const de_PullRequestCannotBeApprovedByAuthorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestCannotBeApprovedByAuthorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestCannotBeApprovedByAuthorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestDoesNotExistExceptionRes
 */
const de_PullRequestDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestIdRequiredExceptionRes
 */
const de_PullRequestIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PullRequestStatusRequiredExceptionRes
 */
const de_PullRequestStatusRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PullRequestStatusRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PullRequestStatusRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PutFileEntryConflictExceptionRes
 */
const de_PutFileEntryConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PutFileEntryConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PutFileEntryConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReactionLimitExceededExceptionRes
 */
const de_ReactionLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReactionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReactionValueRequiredExceptionRes
 */
const de_ReactionValueRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReactionValueRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReactionValueRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReferenceDoesNotExistExceptionRes
 */
const de_ReferenceDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReferenceDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReferenceNameRequiredExceptionRes
 */
const de_ReferenceNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReferenceNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReferenceTypeNotSupportedExceptionRes
 */
const de_ReferenceTypeNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReferenceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReferenceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplacementContentRequiredExceptionRes
 */
const de_ReplacementContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReplacementContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplacementTypeRequiredExceptionRes
 */
const de_ReplacementTypeRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplacementTypeRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReplacementTypeRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryDoesNotExistExceptionRes
 */
const de_RepositoryDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryLimitExceededExceptionRes
 */
const de_RepositoryLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNameExistsExceptionRes
 */
const de_RepositoryNameExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryNameExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNameRequiredExceptionRes
 */
const de_RepositoryNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNamesRequiredExceptionRes
 */
const de_RepositoryNamesRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNamesRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryNamesRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestExceptionRes
 */
const de_RepositoryNotAssociatedWithPullRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryNotAssociatedWithPullRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryNotAssociatedWithPullRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredExceptionRes
 */
const de_RepositoryTriggerBranchNameListRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerBranchNameListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryTriggerBranchNameListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredExceptionRes
 */
const de_RepositoryTriggerDestinationArnRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerDestinationArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryTriggerDestinationArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryTriggerEventsListRequiredExceptionRes
 */
const de_RepositoryTriggerEventsListRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerEventsListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryTriggerEventsListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryTriggerNameRequiredExceptionRes
 */
const de_RepositoryTriggerNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggerNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryTriggerNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RepositoryTriggersListRequiredExceptionRes
 */
const de_RepositoryTriggersListRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RepositoryTriggersListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RepositoryTriggersListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceArnRequiredExceptionRes
 */
const de_ResourceArnRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RestrictedSourceFileExceptionRes
 */
const de_RestrictedSourceFileExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RestrictedSourceFileException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RestrictedSourceFileException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RevisionIdRequiredExceptionRes
 */
const de_RevisionIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RevisionIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RevisionNotCurrentExceptionRes
 */
const de_RevisionNotCurrentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionNotCurrentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RevisionNotCurrentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SameFileContentExceptionRes
 */
const de_SameFileContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SameFileContentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SameFileContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SamePathRequestExceptionRes
 */
const de_SamePathRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SamePathRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SamePathRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SourceAndDestinationAreSameExceptionRes
 */
const de_SourceAndDestinationAreSameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceAndDestinationAreSameException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SourceAndDestinationAreSameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SourceFileOrContentRequiredExceptionRes
 */
const de_SourceFileOrContentRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceFileOrContentRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SourceFileOrContentRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagKeysListRequiredExceptionRes
 */
const de_TagKeysListRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagKeysListRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagKeysListRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagPolicyExceptionRes
 */
const de_TagPolicyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagsMapRequiredExceptionRes
 */
const de_TagsMapRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsMapRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagsMapRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetRequiredExceptionRes
 */
const de_TargetRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TargetRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetsRequiredExceptionRes
 */
const de_TargetsRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetsRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TargetsRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TipOfSourceReferenceIsDifferentExceptionRes
 */
const de_TipOfSourceReferenceIsDifferentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipOfSourceReferenceIsDifferentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TipOfSourceReferenceIsDifferentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TipsDivergenceExceededExceptionRes
 */
const de_TipsDivergenceExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TipsDivergenceExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TipsDivergenceExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TitleRequiredExceptionRes
 */
const de_TitleRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TitleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TitleRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateApprovalRuleTemplateWithRepositoryInput omitted.

// se_BatchAssociateApprovalRuleTemplateWithRepositoriesInput omitted.

// se_BatchDescribeMergeConflictsInput omitted.

// se_BatchDisassociateApprovalRuleTemplateFromRepositoriesInput omitted.

// se_BatchGetCommitsInput omitted.

// se_BatchGetRepositoriesInput omitted.

// se_BranchNameList omitted.

// se_CommitIdsInputList omitted.

/**
 * serializeAws_json1_1ConflictResolution
 */
const se_ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return take(input, {
    deleteFiles: _json,
    replaceContents: (_) => se_ReplaceContentEntries(_, context),
    setFileModes: _json,
  });
};

// se_CreateApprovalRuleTemplateInput omitted.

// se_CreateBranchInput omitted.

/**
 * serializeAws_json1_1CreateCommitInput
 */
const se_CreateCommitInput = (input: CreateCommitInput, context: __SerdeContext): any => {
  return take(input, {
    authorName: [],
    branchName: [],
    commitMessage: [],
    deleteFiles: _json,
    email: [],
    keepEmptyFolders: [],
    parentCommitId: [],
    putFiles: (_) => se_PutFileEntries(_, context),
    repositoryName: [],
    setFileModes: _json,
  });
};

// se_CreatePullRequestApprovalRuleInput omitted.

/**
 * serializeAws_json1_1CreatePullRequestInput
 */
const se_CreatePullRequestInput = (input: CreatePullRequestInput, context: __SerdeContext): any => {
  return take(input, {
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    targets: _json,
    title: [],
  });
};

// se_CreateRepositoryInput omitted.

/**
 * serializeAws_json1_1CreateUnreferencedMergeCommitInput
 */
const se_CreateUnreferencedMergeCommitInput = (
  input: CreateUnreferencedMergeCommitInput,
  context: __SerdeContext
): any => {
  return take(input, {
    authorName: [],
    commitMessage: [],
    conflictDetailLevel: [],
    conflictResolution: (_) => se_ConflictResolution(_, context),
    conflictResolutionStrategy: [],
    destinationCommitSpecifier: [],
    email: [],
    keepEmptyFolders: [],
    mergeOption: [],
    repositoryName: [],
    sourceCommitSpecifier: [],
  });
};

// se_DeleteApprovalRuleTemplateInput omitted.

// se_DeleteBranchInput omitted.

// se_DeleteCommentContentInput omitted.

// se_DeleteFileEntries omitted.

// se_DeleteFileEntry omitted.

// se_DeleteFileInput omitted.

// se_DeletePullRequestApprovalRuleInput omitted.

// se_DeleteRepositoryInput omitted.

// se_DescribeMergeConflictsInput omitted.

// se_DescribePullRequestEventsInput omitted.

// se_DisassociateApprovalRuleTemplateFromRepositoryInput omitted.

// se_EvaluatePullRequestApprovalRulesInput omitted.

// se_FilePaths omitted.

// se_GetApprovalRuleTemplateInput omitted.

// se_GetBlobInput omitted.

// se_GetBranchInput omitted.

// se_GetCommentInput omitted.

// se_GetCommentReactionsInput omitted.

// se_GetCommentsForComparedCommitInput omitted.

// se_GetCommentsForPullRequestInput omitted.

// se_GetCommitInput omitted.

// se_GetDifferencesInput omitted.

// se_GetFileInput omitted.

// se_GetFolderInput omitted.

// se_GetMergeCommitInput omitted.

// se_GetMergeConflictsInput omitted.

// se_GetMergeOptionsInput omitted.

// se_GetPullRequestApprovalStatesInput omitted.

// se_GetPullRequestInput omitted.

// se_GetPullRequestOverrideStateInput omitted.

// se_GetRepositoryInput omitted.

// se_GetRepositoryTriggersInput omitted.

// se_ListApprovalRuleTemplatesInput omitted.

// se_ListAssociatedApprovalRuleTemplatesForRepositoryInput omitted.

// se_ListBranchesInput omitted.

// se_ListFileCommitHistoryRequest omitted.

// se_ListPullRequestsInput omitted.

// se_ListRepositoriesForApprovalRuleTemplateInput omitted.

// se_ListRepositoriesInput omitted.

// se_ListTagsForResourceInput omitted.

// se_Location omitted.

// se_MergeBranchesByFastForwardInput omitted.

/**
 * serializeAws_json1_1MergeBranchesBySquashInput
 */
const se_MergeBranchesBySquashInput = (input: MergeBranchesBySquashInput, context: __SerdeContext): any => {
  return take(input, {
    authorName: [],
    commitMessage: [],
    conflictDetailLevel: [],
    conflictResolution: (_) => se_ConflictResolution(_, context),
    conflictResolutionStrategy: [],
    destinationCommitSpecifier: [],
    email: [],
    keepEmptyFolders: [],
    repositoryName: [],
    sourceCommitSpecifier: [],
    targetBranch: [],
  });
};

/**
 * serializeAws_json1_1MergeBranchesByThreeWayInput
 */
const se_MergeBranchesByThreeWayInput = (input: MergeBranchesByThreeWayInput, context: __SerdeContext): any => {
  return take(input, {
    authorName: [],
    commitMessage: [],
    conflictDetailLevel: [],
    conflictResolution: (_) => se_ConflictResolution(_, context),
    conflictResolutionStrategy: [],
    destinationCommitSpecifier: [],
    email: [],
    keepEmptyFolders: [],
    repositoryName: [],
    sourceCommitSpecifier: [],
    targetBranch: [],
  });
};

// se_MergePullRequestByFastForwardInput omitted.

/**
 * serializeAws_json1_1MergePullRequestBySquashInput
 */
const se_MergePullRequestBySquashInput = (input: MergePullRequestBySquashInput, context: __SerdeContext): any => {
  return take(input, {
    authorName: [],
    commitMessage: [],
    conflictDetailLevel: [],
    conflictResolution: (_) => se_ConflictResolution(_, context),
    conflictResolutionStrategy: [],
    email: [],
    keepEmptyFolders: [],
    pullRequestId: [],
    repositoryName: [],
    sourceCommitId: [],
  });
};

/**
 * serializeAws_json1_1MergePullRequestByThreeWayInput
 */
const se_MergePullRequestByThreeWayInput = (input: MergePullRequestByThreeWayInput, context: __SerdeContext): any => {
  return take(input, {
    authorName: [],
    commitMessage: [],
    conflictDetailLevel: [],
    conflictResolution: (_) => se_ConflictResolution(_, context),
    conflictResolutionStrategy: [],
    email: [],
    keepEmptyFolders: [],
    pullRequestId: [],
    repositoryName: [],
    sourceCommitId: [],
  });
};

// se_OverridePullRequestApprovalRulesInput omitted.

/**
 * serializeAws_json1_1PostCommentForComparedCommitInput
 */
const se_PostCommentForComparedCommitInput = (
  input: PostCommentForComparedCommitInput,
  context: __SerdeContext
): any => {
  return take(input, {
    afterCommitId: [],
    beforeCommitId: [],
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    content: [],
    location: _json,
    repositoryName: [],
  });
};

/**
 * serializeAws_json1_1PostCommentForPullRequestInput
 */
const se_PostCommentForPullRequestInput = (input: PostCommentForPullRequestInput, context: __SerdeContext): any => {
  return take(input, {
    afterCommitId: [],
    beforeCommitId: [],
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    content: [],
    location: _json,
    pullRequestId: [],
    repositoryName: [],
  });
};

/**
 * serializeAws_json1_1PostCommentReplyInput
 */
const se_PostCommentReplyInput = (input: PostCommentReplyInput, context: __SerdeContext): any => {
  return take(input, {
    clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    content: [],
    inReplyTo: [],
  });
};

// se_PutCommentReactionInput omitted.

/**
 * serializeAws_json1_1PutFileEntries
 */
const se_PutFileEntries = (input: PutFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutFileEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1PutFileEntry
 */
const se_PutFileEntry = (input: PutFileEntry, context: __SerdeContext): any => {
  return take(input, {
    fileContent: context.base64Encoder,
    fileMode: [],
    filePath: [],
    sourceFile: _json,
  });
};

/**
 * serializeAws_json1_1PutFileInput
 */
const se_PutFileInput = (input: PutFileInput, context: __SerdeContext): any => {
  return take(input, {
    branchName: [],
    commitMessage: [],
    email: [],
    fileContent: context.base64Encoder,
    fileMode: [],
    filePath: [],
    name: [],
    parentCommitId: [],
    repositoryName: [],
  });
};

// se_PutRepositoryTriggersInput omitted.

/**
 * serializeAws_json1_1ReplaceContentEntries
 */
const se_ReplaceContentEntries = (input: ReplaceContentEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplaceContentEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1ReplaceContentEntry
 */
const se_ReplaceContentEntry = (input: ReplaceContentEntry, context: __SerdeContext): any => {
  return take(input, {
    content: context.base64Encoder,
    fileMode: [],
    filePath: [],
    replacementType: [],
  });
};

// se_RepositoryNameList omitted.

// se_RepositoryTrigger omitted.

// se_RepositoryTriggerEventList omitted.

// se_RepositoryTriggersList omitted.

// se_SetFileModeEntries omitted.

// se_SetFileModeEntry omitted.

// se_SourceFileSpecifier omitted.

// se_TagKeysList omitted.

// se_TagResourceInput omitted.

// se_TagsMap omitted.

// se_Target omitted.

// se_TargetList omitted.

// se_TestRepositoryTriggersInput omitted.

// se_UntagResourceInput omitted.

// se_UpdateApprovalRuleTemplateContentInput omitted.

// se_UpdateApprovalRuleTemplateDescriptionInput omitted.

// se_UpdateApprovalRuleTemplateNameInput omitted.

// se_UpdateCommentInput omitted.

// se_UpdateDefaultBranchInput omitted.

// se_UpdatePullRequestApprovalRuleContentInput omitted.

// se_UpdatePullRequestApprovalStateInput omitted.

// se_UpdatePullRequestDescriptionInput omitted.

// se_UpdatePullRequestStatusInput omitted.

// se_UpdatePullRequestTitleInput omitted.

// se_UpdateRepositoryDescriptionInput omitted.

// se_UpdateRepositoryNameInput omitted.

// de_ActorDoesNotExistException omitted.

// de_Approval omitted.

// de_ApprovalList omitted.

/**
 * deserializeAws_json1_1ApprovalRule
 */
const de_ApprovalRule = (output: any, context: __SerdeContext): ApprovalRule => {
  return take(output, {
    approvalRuleContent: __expectString,
    approvalRuleId: __expectString,
    approvalRuleName: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedUser: __expectString,
    originApprovalRuleTemplate: _json,
    ruleContentSha256: __expectString,
  }) as any;
};

// de_ApprovalRuleContentRequiredException omitted.

// de_ApprovalRuleDoesNotExistException omitted.

// de_ApprovalRuleEventMetadata omitted.

// de_ApprovalRuleNameAlreadyExistsException omitted.

// de_ApprovalRuleNameRequiredException omitted.

// de_ApprovalRuleOverriddenEventMetadata omitted.

/**
 * deserializeAws_json1_1ApprovalRulesList
 */
const de_ApprovalRulesList = (output: any, context: __SerdeContext): ApprovalRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApprovalRule(entry, context);
    });
  return retVal;
};

// de_ApprovalRulesNotSatisfiedList omitted.

// de_ApprovalRulesSatisfiedList omitted.

/**
 * deserializeAws_json1_1ApprovalRuleTemplate
 */
const de_ApprovalRuleTemplate = (output: any, context: __SerdeContext): ApprovalRuleTemplate => {
  return take(output, {
    approvalRuleTemplateContent: __expectString,
    approvalRuleTemplateDescription: __expectString,
    approvalRuleTemplateId: __expectString,
    approvalRuleTemplateName: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedUser: __expectString,
    ruleContentSha256: __expectString,
  }) as any;
};

// de_ApprovalRuleTemplateContentRequiredException omitted.

// de_ApprovalRuleTemplateDoesNotExistException omitted.

// de_ApprovalRuleTemplateInUseException omitted.

// de_ApprovalRuleTemplateNameAlreadyExistsException omitted.

// de_ApprovalRuleTemplateNameList omitted.

// de_ApprovalRuleTemplateNameRequiredException omitted.

// de_ApprovalStateChangedEventMetadata omitted.

// de_ApprovalStateRequiredException omitted.

// de_AuthorDoesNotExistException omitted.

// de_BatchAssociateApprovalRuleTemplateWithRepositoriesError omitted.

// de_BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList omitted.

// de_BatchAssociateApprovalRuleTemplateWithRepositoriesOutput omitted.

// de_BatchDescribeMergeConflictsError omitted.

// de_BatchDescribeMergeConflictsErrors omitted.

// de_BatchDescribeMergeConflictsOutput omitted.

// de_BatchDisassociateApprovalRuleTemplateFromRepositoriesError omitted.

// de_BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList omitted.

// de_BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput omitted.

// de_BatchGetCommitsError omitted.

// de_BatchGetCommitsErrorsList omitted.

// de_BatchGetCommitsOutput omitted.

/**
 * deserializeAws_json1_1BatchGetRepositoriesOutput
 */
const de_BatchGetRepositoriesOutput = (output: any, context: __SerdeContext): BatchGetRepositoriesOutput => {
  return take(output, {
    repositories: (_: any) => de_RepositoryMetadataList(_, context),
    repositoriesNotFound: _json,
  }) as any;
};

// de_BeforeCommitIdAndAfterCommitIdAreSameException omitted.

// de_BlobIdDoesNotExistException omitted.

// de_BlobIdRequiredException omitted.

// de_BlobMetadata omitted.

// de_BranchDoesNotExistException omitted.

// de_BranchInfo omitted.

// de_BranchNameExistsException omitted.

// de_BranchNameIsTagNameException omitted.

// de_BranchNameList omitted.

// de_BranchNameRequiredException omitted.

// de_CallerReactions omitted.

// de_CannotDeleteApprovalRuleFromTemplateException omitted.

// de_CannotModifyApprovalRuleFromTemplateException omitted.

// de_ClientRequestTokenRequiredException omitted.

/**
 * deserializeAws_json1_1Comment
 */
const de_Comment = (output: any, context: __SerdeContext): Comment => {
  return take(output, {
    authorArn: __expectString,
    callerReactions: _json,
    clientRequestToken: __expectString,
    commentId: __expectString,
    content: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deleted: __expectBoolean,
    inReplyTo: __expectString,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    reactionCounts: _json,
  }) as any;
};

// de_CommentContentRequiredException omitted.

// de_CommentContentSizeLimitExceededException omitted.

// de_CommentDeletedException omitted.

// de_CommentDoesNotExistException omitted.

// de_CommentIdRequiredException omitted.

// de_CommentNotCreatedByCallerException omitted.

/**
 * deserializeAws_json1_1Comments
 */
const de_Comments = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Comment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommentsForComparedCommit
 */
const de_CommentsForComparedCommit = (output: any, context: __SerdeContext): CommentsForComparedCommit => {
  return take(output, {
    afterBlobId: __expectString,
    afterCommitId: __expectString,
    beforeBlobId: __expectString,
    beforeCommitId: __expectString,
    comments: (_: any) => de_Comments(_, context),
    location: _json,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CommentsForComparedCommitData
 */
const de_CommentsForComparedCommitData = (output: any, context: __SerdeContext): CommentsForComparedCommit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommentsForComparedCommit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommentsForPullRequest
 */
const de_CommentsForPullRequest = (output: any, context: __SerdeContext): CommentsForPullRequest => {
  return take(output, {
    afterBlobId: __expectString,
    afterCommitId: __expectString,
    beforeBlobId: __expectString,
    beforeCommitId: __expectString,
    comments: (_: any) => de_Comments(_, context),
    location: _json,
    pullRequestId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CommentsForPullRequestData
 */
const de_CommentsForPullRequestData = (output: any, context: __SerdeContext): CommentsForPullRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CommentsForPullRequest(entry, context);
    });
  return retVal;
};

// de_Commit omitted.

// de_CommitDoesNotExistException omitted.

// de_CommitIdDoesNotExistException omitted.

// de_CommitIdRequiredException omitted.

// de_CommitIdsLimitExceededException omitted.

// de_CommitIdsListRequiredException omitted.

// de_CommitMessageLengthExceededException omitted.

// de_CommitObjectsList omitted.

// de_CommitRequiredException omitted.

// de_ConcurrentReferenceUpdateException omitted.

// de_Conflict omitted.

// de_ConflictMetadata omitted.

// de_ConflictMetadataList omitted.

// de_Conflicts omitted.

/**
 * deserializeAws_json1_1CreateApprovalRuleTemplateOutput
 */
const de_CreateApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateApprovalRuleTemplateOutput => {
  return take(output, {
    approvalRuleTemplate: (_: any) => de_ApprovalRuleTemplate(_, context),
  }) as any;
};

// de_CreateCommitOutput omitted.

/**
 * deserializeAws_json1_1CreatePullRequestApprovalRuleOutput
 */
const de_CreatePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestApprovalRuleOutput => {
  return take(output, {
    approvalRule: (_: any) => de_ApprovalRule(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreatePullRequestOutput
 */
const de_CreatePullRequestOutput = (output: any, context: __SerdeContext): CreatePullRequestOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRepositoryOutput
 */
const de_CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return take(output, {
    repositoryMetadata: (_: any) => de_RepositoryMetadata(_, context),
  }) as any;
};

// de_CreateUnreferencedMergeCommitOutput omitted.

// de_DefaultBranchCannotBeDeletedException omitted.

// de_DeleteApprovalRuleTemplateOutput omitted.

// de_DeleteBranchOutput omitted.

/**
 * deserializeAws_json1_1DeleteCommentContentOutput
 */
const de_DeleteCommentContentOutput = (output: any, context: __SerdeContext): DeleteCommentContentOutput => {
  return take(output, {
    comment: (_: any) => de_Comment(_, context),
  }) as any;
};

// de_DeleteFileOutput omitted.

// de_DeletePullRequestApprovalRuleOutput omitted.

// de_DeleteRepositoryOutput omitted.

// de_DescribeMergeConflictsOutput omitted.

/**
 * deserializeAws_json1_1DescribePullRequestEventsOutput
 */
const de_DescribePullRequestEventsOutput = (output: any, context: __SerdeContext): DescribePullRequestEventsOutput => {
  return take(output, {
    nextToken: __expectString,
    pullRequestEvents: (_: any) => de_PullRequestEventList(_, context),
  }) as any;
};

// de_Difference omitted.

// de_DifferenceList omitted.

// de_DirectoryNameConflictsWithFileNameException omitted.

// de_EncryptionIntegrityChecksFailedException omitted.

// de_EncryptionKeyAccessDeniedException omitted.

// de_EncryptionKeyDisabledException omitted.

// de_EncryptionKeyNotFoundException omitted.

// de_EncryptionKeyUnavailableException omitted.

// de_EvaluatePullRequestApprovalRulesOutput omitted.

// de_Evaluation omitted.

// de_File omitted.

// de_FileContentAndSourceFileSpecifiedException omitted.

// de_FileContentRequiredException omitted.

// de_FileContentSizeLimitExceededException omitted.

// de_FileDoesNotExistException omitted.

// de_FileEntryRequiredException omitted.

// de_FileList omitted.

// de_FileMetadata omitted.

// de_FileModeRequiredException omitted.

// de_FileModes omitted.

// de_FileNameConflictsWithDirectoryNameException omitted.

// de_FilePathConflictsWithSubmodulePathException omitted.

// de_FileSizes omitted.

// de_FilesMetadata omitted.

// de_FileTooLargeException omitted.

// de_FileVersion omitted.

// de_Folder omitted.

// de_FolderContentSizeLimitExceededException omitted.

// de_FolderDoesNotExistException omitted.

// de_FolderList omitted.

/**
 * deserializeAws_json1_1GetApprovalRuleTemplateOutput
 */
const de_GetApprovalRuleTemplateOutput = (output: any, context: __SerdeContext): GetApprovalRuleTemplateOutput => {
  return take(output, {
    approvalRuleTemplate: (_: any) => de_ApprovalRuleTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetBlobOutput
 */
const de_GetBlobOutput = (output: any, context: __SerdeContext): GetBlobOutput => {
  return take(output, {
    content: context.base64Decoder,
  }) as any;
};

// de_GetBranchOutput omitted.

/**
 * deserializeAws_json1_1GetCommentOutput
 */
const de_GetCommentOutput = (output: any, context: __SerdeContext): GetCommentOutput => {
  return take(output, {
    comment: (_: any) => de_Comment(_, context),
  }) as any;
};

// de_GetCommentReactionsOutput omitted.

/**
 * deserializeAws_json1_1GetCommentsForComparedCommitOutput
 */
const de_GetCommentsForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): GetCommentsForComparedCommitOutput => {
  return take(output, {
    commentsForComparedCommitData: (_: any) => de_CommentsForComparedCommitData(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCommentsForPullRequestOutput
 */
const de_GetCommentsForPullRequestOutput = (output: any, context: __SerdeContext): GetCommentsForPullRequestOutput => {
  return take(output, {
    commentsForPullRequestData: (_: any) => de_CommentsForPullRequestData(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_GetCommitOutput omitted.

// de_GetDifferencesOutput omitted.

/**
 * deserializeAws_json1_1GetFileOutput
 */
const de_GetFileOutput = (output: any, context: __SerdeContext): GetFileOutput => {
  return take(output, {
    blobId: __expectString,
    commitId: __expectString,
    fileContent: context.base64Decoder,
    fileMode: __expectString,
    filePath: __expectString,
    fileSize: __expectLong,
  }) as any;
};

// de_GetFolderOutput omitted.

// de_GetMergeCommitOutput omitted.

// de_GetMergeConflictsOutput omitted.

// de_GetMergeOptionsOutput omitted.

// de_GetPullRequestApprovalStatesOutput omitted.

/**
 * deserializeAws_json1_1GetPullRequestOutput
 */
const de_GetPullRequestOutput = (output: any, context: __SerdeContext): GetPullRequestOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

// de_GetPullRequestOverrideStateOutput omitted.

/**
 * deserializeAws_json1_1GetRepositoryOutput
 */
const de_GetRepositoryOutput = (output: any, context: __SerdeContext): GetRepositoryOutput => {
  return take(output, {
    repositoryMetadata: (_: any) => de_RepositoryMetadata(_, context),
  }) as any;
};

// de_GetRepositoryTriggersOutput omitted.

// de_IdempotencyParameterMismatchException omitted.

// de_InvalidActorArnException omitted.

// de_InvalidApprovalRuleContentException omitted.

// de_InvalidApprovalRuleNameException omitted.

// de_InvalidApprovalRuleTemplateContentException omitted.

// de_InvalidApprovalRuleTemplateDescriptionException omitted.

// de_InvalidApprovalRuleTemplateNameException omitted.

// de_InvalidApprovalStateException omitted.

// de_InvalidAuthorArnException omitted.

// de_InvalidBlobIdException omitted.

// de_InvalidBranchNameException omitted.

// de_InvalidClientRequestTokenException omitted.

// de_InvalidCommentIdException omitted.

// de_InvalidCommitException omitted.

// de_InvalidCommitIdException omitted.

// de_InvalidConflictDetailLevelException omitted.

// de_InvalidConflictResolutionException omitted.

// de_InvalidConflictResolutionStrategyException omitted.

// de_InvalidContinuationTokenException omitted.

// de_InvalidDeletionParameterException omitted.

// de_InvalidDescriptionException omitted.

// de_InvalidDestinationCommitSpecifierException omitted.

// de_InvalidEmailException omitted.

// de_InvalidFileLocationException omitted.

// de_InvalidFileModeException omitted.

// de_InvalidFilePositionException omitted.

// de_InvalidMaxConflictFilesException omitted.

// de_InvalidMaxMergeHunksException omitted.

// de_InvalidMaxResultsException omitted.

// de_InvalidMergeOptionException omitted.

// de_InvalidOrderException omitted.

// de_InvalidOverrideStatusException omitted.

// de_InvalidParentCommitIdException omitted.

// de_InvalidPathException omitted.

// de_InvalidPullRequestEventTypeException omitted.

// de_InvalidPullRequestIdException omitted.

// de_InvalidPullRequestStatusException omitted.

// de_InvalidPullRequestStatusUpdateException omitted.

// de_InvalidReactionUserArnException omitted.

// de_InvalidReactionValueException omitted.

// de_InvalidReferenceNameException omitted.

// de_InvalidRelativeFileVersionEnumException omitted.

// de_InvalidReplacementContentException omitted.

// de_InvalidReplacementTypeException omitted.

// de_InvalidRepositoryDescriptionException omitted.

// de_InvalidRepositoryNameException omitted.

// de_InvalidRepositoryTriggerBranchNameException omitted.

// de_InvalidRepositoryTriggerCustomDataException omitted.

// de_InvalidRepositoryTriggerDestinationArnException omitted.

// de_InvalidRepositoryTriggerEventsException omitted.

// de_InvalidRepositoryTriggerNameException omitted.

// de_InvalidRepositoryTriggerRegionException omitted.

// de_InvalidResourceArnException omitted.

// de_InvalidRevisionIdException omitted.

// de_InvalidRuleContentSha256Exception omitted.

// de_InvalidSortByException omitted.

// de_InvalidSourceCommitSpecifierException omitted.

// de_InvalidSystemTagUsageException omitted.

// de_InvalidTagKeysListException omitted.

// de_InvalidTagsMapException omitted.

// de_InvalidTargetBranchException omitted.

// de_InvalidTargetException omitted.

// de_InvalidTargetsException omitted.

// de_InvalidTitleException omitted.

// de_IsBinaryFile omitted.

// de_ListApprovalRuleTemplatesOutput omitted.

// de_ListAssociatedApprovalRuleTemplatesForRepositoryOutput omitted.

// de_ListBranchesOutput omitted.

// de_ListFileCommitHistoryResponse omitted.

// de_ListPullRequestsOutput omitted.

// de_ListRepositoriesForApprovalRuleTemplateOutput omitted.

// de_ListRepositoriesOutput omitted.

// de_ListTagsForResourceOutput omitted.

// de_Location omitted.

// de_ManualMergeRequiredException omitted.

// de_MaximumBranchesExceededException omitted.

// de_MaximumConflictResolutionEntriesExceededException omitted.

// de_MaximumFileContentToLoadExceededException omitted.

// de_MaximumFileEntriesExceededException omitted.

// de_MaximumItemsToCompareExceededException omitted.

// de_MaximumNumberOfApprovalsExceededException omitted.

// de_MaximumOpenPullRequestsExceededException omitted.

// de_MaximumRepositoryNamesExceededException omitted.

// de_MaximumRepositoryTriggersExceededException omitted.

// de_MaximumRuleTemplatesAssociatedWithRepositoryException omitted.

// de_MergeBranchesByFastForwardOutput omitted.

// de_MergeBranchesBySquashOutput omitted.

// de_MergeBranchesByThreeWayOutput omitted.

// de_MergeHunk omitted.

// de_MergeHunkDetail omitted.

// de_MergeHunks omitted.

// de_MergeMetadata omitted.

// de_MergeOperations omitted.

// de_MergeOptionRequiredException omitted.

// de_MergeOptions omitted.

/**
 * deserializeAws_json1_1MergePullRequestByFastForwardOutput
 */
const de_MergePullRequestByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByFastForwardOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MergePullRequestBySquashOutput
 */
const de_MergePullRequestBySquashOutput = (output: any, context: __SerdeContext): MergePullRequestBySquashOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MergePullRequestByThreeWayOutput
 */
const de_MergePullRequestByThreeWayOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByThreeWayOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

// de_MultipleConflictResolutionEntriesException omitted.

// de_MultipleRepositoriesInPullRequestException omitted.

// de_NameLengthExceededException omitted.

// de_NoChangeException omitted.

// de_NumberOfRulesExceededException omitted.

// de_NumberOfRuleTemplatesExceededException omitted.

// de_ObjectTypes omitted.

// de_OriginApprovalRuleTemplate omitted.

// de_OverrideAlreadySetException omitted.

// de_OverrideStatusRequiredException omitted.

// de_ParentCommitDoesNotExistException omitted.

// de_ParentCommitIdOutdatedException omitted.

// de_ParentCommitIdRequiredException omitted.

// de_ParentList omitted.

// de_PathDoesNotExistException omitted.

// de_PathRequiredException omitted.

/**
 * deserializeAws_json1_1PostCommentForComparedCommitOutput
 */
const de_PostCommentForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): PostCommentForComparedCommitOutput => {
  return take(output, {
    afterBlobId: __expectString,
    afterCommitId: __expectString,
    beforeBlobId: __expectString,
    beforeCommitId: __expectString,
    comment: (_: any) => de_Comment(_, context),
    location: _json,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PostCommentForPullRequestOutput
 */
const de_PostCommentForPullRequestOutput = (output: any, context: __SerdeContext): PostCommentForPullRequestOutput => {
  return take(output, {
    afterBlobId: __expectString,
    afterCommitId: __expectString,
    beforeBlobId: __expectString,
    beforeCommitId: __expectString,
    comment: (_: any) => de_Comment(_, context),
    location: _json,
    pullRequestId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PostCommentReplyOutput
 */
const de_PostCommentReplyOutput = (output: any, context: __SerdeContext): PostCommentReplyOutput => {
  return take(output, {
    comment: (_: any) => de_Comment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PullRequest
 */
const de_PullRequest = (output: any, context: __SerdeContext): PullRequest => {
  return take(output, {
    approvalRules: (_: any) => de_ApprovalRulesList(_, context),
    authorArn: __expectString,
    clientRequestToken: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastActivityDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pullRequestId: __expectString,
    pullRequestStatus: __expectString,
    pullRequestTargets: _json,
    revisionId: __expectString,
    title: __expectString,
  }) as any;
};

// de_PullRequestAlreadyClosedException omitted.

// de_PullRequestApprovalRulesNotSatisfiedException omitted.

// de_PullRequestCannotBeApprovedByAuthorException omitted.

// de_PullRequestCreatedEventMetadata omitted.

// de_PullRequestDoesNotExistException omitted.

/**
 * deserializeAws_json1_1PullRequestEvent
 */
const de_PullRequestEvent = (output: any, context: __SerdeContext): PullRequestEvent => {
  return take(output, {
    actorArn: __expectString,
    approvalRuleEventMetadata: _json,
    approvalRuleOverriddenEventMetadata: _json,
    approvalStateChangedEventMetadata: _json,
    eventDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pullRequestCreatedEventMetadata: _json,
    pullRequestEventType: __expectString,
    pullRequestId: __expectString,
    pullRequestMergedStateChangedEventMetadata: _json,
    pullRequestSourceReferenceUpdatedEventMetadata: _json,
    pullRequestStatusChangedEventMetadata: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PullRequestEventList
 */
const de_PullRequestEventList = (output: any, context: __SerdeContext): PullRequestEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PullRequestEvent(entry, context);
    });
  return retVal;
};

// de_PullRequestIdList omitted.

// de_PullRequestIdRequiredException omitted.

// de_PullRequestMergedStateChangedEventMetadata omitted.

// de_PullRequestSourceReferenceUpdatedEventMetadata omitted.

// de_PullRequestStatusChangedEventMetadata omitted.

// de_PullRequestStatusRequiredException omitted.

// de_PullRequestTarget omitted.

// de_PullRequestTargetList omitted.

// de_PutFileEntryConflictException omitted.

// de_PutFileOutput omitted.

// de_PutRepositoryTriggersOutput omitted.

// de_ReactionCountsMap omitted.

// de_ReactionForComment omitted.

// de_ReactionLimitExceededException omitted.

// de_ReactionsForCommentList omitted.

// de_ReactionUsersList omitted.

// de_ReactionValueFormats omitted.

// de_ReactionValueRequiredException omitted.

// de_ReferenceDoesNotExistException omitted.

// de_ReferenceNameRequiredException omitted.

// de_ReferenceTypeNotSupportedException omitted.

// de_ReplacementContentRequiredException omitted.

// de_ReplacementTypeRequiredException omitted.

// de_RepositoryDoesNotExistException omitted.

// de_RepositoryLimitExceededException omitted.

/**
 * deserializeAws_json1_1RepositoryMetadata
 */
const de_RepositoryMetadata = (output: any, context: __SerdeContext): RepositoryMetadata => {
  return take(output, {
    Arn: __expectString,
    accountId: __expectString,
    cloneUrlHttp: __expectString,
    cloneUrlSsh: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultBranch: __expectString,
    lastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    repositoryDescription: __expectString,
    repositoryId: __expectString,
    repositoryName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RepositoryMetadataList
 */
const de_RepositoryMetadataList = (output: any, context: __SerdeContext): RepositoryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositoryMetadata(entry, context);
    });
  return retVal;
};

// de_RepositoryNameExistsException omitted.

// de_RepositoryNameIdPair omitted.

// de_RepositoryNameIdPairList omitted.

// de_RepositoryNameList omitted.

// de_RepositoryNameRequiredException omitted.

// de_RepositoryNamesRequiredException omitted.

// de_RepositoryNotAssociatedWithPullRequestException omitted.

// de_RepositoryNotFoundList omitted.

// de_RepositoryTrigger omitted.

// de_RepositoryTriggerBranchNameListRequiredException omitted.

// de_RepositoryTriggerDestinationArnRequiredException omitted.

// de_RepositoryTriggerEventList omitted.

// de_RepositoryTriggerEventsListRequiredException omitted.

// de_RepositoryTriggerExecutionFailure omitted.

// de_RepositoryTriggerExecutionFailureList omitted.

// de_RepositoryTriggerNameList omitted.

// de_RepositoryTriggerNameRequiredException omitted.

// de_RepositoryTriggersList omitted.

// de_RepositoryTriggersListRequiredException omitted.

// de_ResourceArnRequiredException omitted.

// de_RestrictedSourceFileException omitted.

// de_RevisionChildren omitted.

// de_RevisionDag omitted.

// de_RevisionIdRequiredException omitted.

// de_RevisionNotCurrentException omitted.

// de_SameFileContentException omitted.

// de_SamePathRequestException omitted.

// de_SourceAndDestinationAreSameException omitted.

// de_SourceFileOrContentRequiredException omitted.

// de_SubModule omitted.

// de_SubModuleList omitted.

// de_SymbolicLink omitted.

// de_SymbolicLinkList omitted.

// de_TagKeysListRequiredException omitted.

// de_TagPolicyException omitted.

// de_TagsMap omitted.

// de_TagsMapRequiredException omitted.

// de_TargetRequiredException omitted.

// de_TargetsRequiredException omitted.

// de_TestRepositoryTriggersOutput omitted.

// de_TipOfSourceReferenceIsDifferentException omitted.

// de_TipsDivergenceExceededException omitted.

// de_TitleRequiredException omitted.

// de_TooManyTagsException omitted.

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput
 */
const de_UpdateApprovalRuleTemplateContentOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateContentOutput => {
  return take(output, {
    approvalRuleTemplate: (_: any) => de_ApprovalRuleTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput
 */
const de_UpdateApprovalRuleTemplateDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateDescriptionOutput => {
  return take(output, {
    approvalRuleTemplate: (_: any) => de_ApprovalRuleTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput
 */
const de_UpdateApprovalRuleTemplateNameOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateNameOutput => {
  return take(output, {
    approvalRuleTemplate: (_: any) => de_ApprovalRuleTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateCommentOutput
 */
const de_UpdateCommentOutput = (output: any, context: __SerdeContext): UpdateCommentOutput => {
  return take(output, {
    comment: (_: any) => de_Comment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput
 */
const de_UpdatePullRequestApprovalRuleContentOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestApprovalRuleContentOutput => {
  return take(output, {
    approvalRule: (_: any) => de_ApprovalRule(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestDescriptionOutput
 */
const de_UpdatePullRequestDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestDescriptionOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestStatusOutput
 */
const de_UpdatePullRequestStatusOutput = (output: any, context: __SerdeContext): UpdatePullRequestStatusOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestTitleOutput
 */
const de_UpdatePullRequestTitleOutput = (output: any, context: __SerdeContext): UpdatePullRequestTitleOutput => {
  return take(output, {
    pullRequest: (_: any) => de_PullRequest(_, context),
  }) as any;
};

// de_UserInfo omitted.

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CodeCommit_20150413.${operation}`,
  };
}

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
