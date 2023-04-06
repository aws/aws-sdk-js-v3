// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  Approval,
  ApprovalRule,
  ApprovalRuleContentRequiredException,
  ApprovalRuleDoesNotExistException,
  ApprovalRuleEventMetadata,
  ApprovalRuleNameAlreadyExistsException,
  ApprovalRuleNameRequiredException,
  ApprovalRuleOverriddenEventMetadata,
  ApprovalRuleTemplate,
  ApprovalRuleTemplateContentRequiredException,
  ApprovalRuleTemplateDoesNotExistException,
  ApprovalRuleTemplateInUseException,
  ApprovalRuleTemplateNameAlreadyExistsException,
  ApprovalRuleTemplateNameRequiredException,
  ApprovalStateChangedEventMetadata,
  ApprovalStateRequiredException,
  AssociateApprovalRuleTemplateWithRepositoryInput,
  AuthorDoesNotExistException,
  BatchAssociateApprovalRuleTemplateWithRepositoriesError,
  BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
  BatchDescribeMergeConflictsError,
  BatchDescribeMergeConflictsInput,
  BatchDescribeMergeConflictsOutput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesError,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput,
  BatchGetCommitsError,
  BatchGetCommitsInput,
  BatchGetCommitsOutput,
  BatchGetRepositoriesInput,
  BatchGetRepositoriesOutput,
  BeforeCommitIdAndAfterCommitIdAreSameException,
  BlobIdDoesNotExistException,
  BlobIdRequiredException,
  BlobMetadata,
  BranchDoesNotExistException,
  BranchInfo,
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
  Commit,
  CommitDoesNotExistException,
  CommitIdDoesNotExistException,
  CommitIdRequiredException,
  CommitIdsLimitExceededException,
  CommitIdsListRequiredException,
  CommitMessageLengthExceededException,
  CommitRequiredException,
  ConcurrentReferenceUpdateException,
  Conflict,
  ConflictMetadata,
  ConflictResolution,
  CreateApprovalRuleTemplateInput,
  CreateApprovalRuleTemplateOutput,
  CreateBranchInput,
  CreateCommitInput,
  CreateCommitOutput,
  CreatePullRequestApprovalRuleInput,
  CreatePullRequestApprovalRuleOutput,
  CreatePullRequestInput,
  CreatePullRequestOutput,
  CreateRepositoryInput,
  CreateRepositoryOutput,
  CreateUnreferencedMergeCommitInput,
  CreateUnreferencedMergeCommitOutput,
  DefaultBranchCannotBeDeletedException,
  DeleteApprovalRuleTemplateInput,
  DeleteApprovalRuleTemplateOutput,
  DeleteBranchInput,
  DeleteBranchOutput,
  DeleteCommentContentInput,
  DeleteCommentContentOutput,
  DeleteFileEntry,
  DeleteFileInput,
  DeleteFileOutput,
  DeletePullRequestApprovalRuleInput,
  DeletePullRequestApprovalRuleOutput,
  DeleteRepositoryInput,
  DeleteRepositoryOutput,
  DescribeMergeConflictsInput,
  DescribeMergeConflictsOutput,
  DescribePullRequestEventsInput,
  DescribePullRequestEventsOutput,
  Difference,
  DirectoryNameConflictsWithFileNameException,
  DisassociateApprovalRuleTemplateFromRepositoryInput,
  EncryptionIntegrityChecksFailedException,
  EncryptionKeyAccessDeniedException,
  EncryptionKeyDisabledException,
  EncryptionKeyNotFoundException,
  EncryptionKeyUnavailableException,
  EvaluatePullRequestApprovalRulesInput,
  EvaluatePullRequestApprovalRulesOutput,
  Evaluation,
  File,
  FileContentAndSourceFileSpecifiedException,
  FileContentSizeLimitExceededException,
  FileDoesNotExistException,
  FileEntryRequiredException,
  FileMetadata,
  FileModeRequiredException,
  FileModes,
  FileNameConflictsWithDirectoryNameException,
  FilePathConflictsWithSubmodulePathException,
  FileSizes,
  FileTooLargeException,
  Folder,
  FolderContentSizeLimitExceededException,
  FolderDoesNotExistException,
  GetApprovalRuleTemplateInput,
  GetApprovalRuleTemplateOutput,
  GetBlobInput,
  GetBlobOutput,
  GetBranchInput,
  GetBranchOutput,
  GetCommentInput,
  GetCommentOutput,
  GetCommentReactionsInput,
  GetCommentReactionsOutput,
  GetCommentsForComparedCommitInput,
  GetCommentsForComparedCommitOutput,
  GetCommentsForPullRequestInput,
  GetCommentsForPullRequestOutput,
  GetCommitInput,
  GetCommitOutput,
  GetDifferencesInput,
  GetDifferencesOutput,
  GetFileInput,
  GetFileOutput,
  GetFolderInput,
  GetFolderOutput,
  GetMergeCommitInput,
  GetMergeCommitOutput,
  GetMergeConflictsInput,
  GetMergeConflictsOutput,
  GetMergeOptionsInput,
  GetMergeOptionsOutput,
  GetPullRequestApprovalStatesInput,
  GetPullRequestApprovalStatesOutput,
  GetPullRequestInput,
  GetPullRequestOutput,
  GetPullRequestOverrideStateInput,
  GetPullRequestOverrideStateOutput,
  GetRepositoryInput,
  GetRepositoryOutput,
  GetRepositoryTriggersInput,
  GetRepositoryTriggersOutput,
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
  InvalidOrderException,
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
  InvalidSortByException,
  InvalidSourceCommitSpecifierException,
  InvalidSystemTagUsageException,
  InvalidTagsMapException,
  InvalidTargetException,
  InvalidTargetsException,
  InvalidTitleException,
  IsBinaryFile,
  ListApprovalRuleTemplatesInput,
  ListApprovalRuleTemplatesOutput,
  ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
  ListBranchesInput,
  ListBranchesOutput,
  ListPullRequestsInput,
  ListPullRequestsOutput,
  Location,
  ManualMergeRequiredException,
  MaximumConflictResolutionEntriesExceededException,
  MaximumFileContentToLoadExceededException,
  MaximumFileEntriesExceededException,
  MaximumItemsToCompareExceededException,
  MaximumOpenPullRequestsExceededException,
  MaximumRepositoryNamesExceededException,
  MaximumRuleTemplatesAssociatedWithRepositoryException,
  MergeHunk,
  MergeHunkDetail,
  MergeMetadata,
  MergeOperations,
  MergeOptionRequiredException,
  MergeOptionTypeEnum,
  MultipleConflictResolutionEntriesException,
  MultipleRepositoriesInPullRequestException,
  NameLengthExceededException,
  NoChangeException,
  NumberOfRulesExceededException,
  NumberOfRuleTemplatesExceededException,
  ObjectTypes,
  OriginApprovalRuleTemplate,
  ParentCommitDoesNotExistException,
  ParentCommitIdOutdatedException,
  ParentCommitIdRequiredException,
  PathDoesNotExistException,
  PathRequiredException,
  PullRequest,
  PullRequestAlreadyClosedException,
  PullRequestCreatedEventMetadata,
  PullRequestDoesNotExistException,
  PullRequestEvent,
  PullRequestIdRequiredException,
  PullRequestMergedStateChangedEventMetadata,
  PullRequestSourceReferenceUpdatedEventMetadata,
  PullRequestStatusChangedEventMetadata,
  PullRequestTarget,
  PutFileEntry,
  PutFileEntryConflictException,
  ReactionForComment,
  ReactionValueFormats,
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
  SubModule,
  SymbolicLink,
  TagPolicyException,
  Target,
  TargetRequiredException,
  TargetsRequiredException,
  TipsDivergenceExceededException,
  TitleRequiredException,
  TooManyTagsException,
  UserInfo,
} from "../models/models_0";
import {
  CommentContentRequiredException,
  CommentContentSizeLimitExceededException,
  CommentNotCreatedByCallerException,
  FileContentRequiredException,
  InvalidApprovalStateException,
  InvalidFileLocationException,
  InvalidFilePositionException,
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
  InvalidTagKeysListException,
  InvalidTargetBranchException,
  ListRepositoriesForApprovalRuleTemplateInput,
  ListRepositoriesForApprovalRuleTemplateOutput,
  ListRepositoriesInput,
  ListRepositoriesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  MaximumBranchesExceededException,
  MaximumNumberOfApprovalsExceededException,
  MaximumRepositoryTriggersExceededException,
  MergeBranchesByFastForwardInput,
  MergeBranchesByFastForwardOutput,
  MergeBranchesBySquashInput,
  MergeBranchesBySquashOutput,
  MergeBranchesByThreeWayInput,
  MergeBranchesByThreeWayOutput,
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
  PutFileOutput,
  PutRepositoryTriggersInput,
  PutRepositoryTriggersOutput,
  ReactionLimitExceededException,
  ReactionValueRequiredException,
  RepositoryNameIdPair,
  RepositoryTriggerBranchNameListRequiredException,
  RepositoryTriggerDestinationArnRequiredException,
  RepositoryTriggerEventsListRequiredException,
  RepositoryTriggerExecutionFailure,
  RepositoryTriggerNameRequiredException,
  RepositoryTriggersListRequiredException,
  ResourceArnRequiredException,
  SameFileContentException,
  TagKeysListRequiredException,
  TagResourceInput,
  TagsMapRequiredException,
  TestRepositoryTriggersInput,
  TestRepositoryTriggersOutput,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
  };
  let body: any;
  body = JSON.stringify(se_AssociateApprovalRuleTemplateWithRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand
 */
export const se_BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = async (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories",
  };
  let body: any;
  body = JSON.stringify(se_BatchAssociateApprovalRuleTemplateWithRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDescribeMergeConflictsCommand
 */
export const se_BatchDescribeMergeConflictsCommand = async (
  input: BatchDescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchDescribeMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(se_BatchDescribeMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand
 */
export const se_BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand = async (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories",
  };
  let body: any;
  body = JSON.stringify(se_BatchDisassociateApprovalRuleTemplateFromRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetCommitsCommand
 */
export const se_BatchGetCommitsCommand = async (
  input: BatchGetCommitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchGetCommits",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetCommitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetRepositoriesCommand
 */
export const se_BatchGetRepositoriesCommand = async (
  input: BatchGetRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.BatchGetRepositories",
  };
  let body: any;
  body = JSON.stringify(se_BatchGetRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApprovalRuleTemplateCommand
 */
export const se_CreateApprovalRuleTemplateCommand = async (
  input: CreateApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(se_CreateApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBranchCommand
 */
export const se_CreateBranchCommand = async (
  input: CreateBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateBranch",
  };
  let body: any;
  body = JSON.stringify(se_CreateBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCommitCommand
 */
export const se_CreateCommitCommand = async (
  input: CreateCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateCommit",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreatePullRequest",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreatePullRequestApprovalRule",
  };
  let body: any;
  body = JSON.stringify(se_CreatePullRequestApprovalRuleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(se_CreateRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUnreferencedMergeCommitCommand
 */
export const se_CreateUnreferencedMergeCommitCommand = async (
  input: CreateUnreferencedMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.CreateUnreferencedMergeCommit",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBranchCommand
 */
export const se_DeleteBranchCommand = async (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteBranch",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCommentContentCommand
 */
export const se_DeleteCommentContentCommand = async (
  input: DeleteCommentContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteCommentContent",
  };
  let body: any;
  body = JSON.stringify(se_DeleteCommentContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFileCommand
 */
export const se_DeleteFileCommand = async (
  input: DeleteFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteFile",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePullRequestApprovalRuleCommand
 */
export const se_DeletePullRequestApprovalRuleCommand = async (
  input: DeletePullRequestApprovalRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeletePullRequestApprovalRule",
  };
  let body: any;
  body = JSON.stringify(se_DeletePullRequestApprovalRuleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMergeConflictsCommand
 */
export const se_DescribeMergeConflictsCommand = async (
  input: DescribeMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DescribeMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePullRequestEventsCommand
 */
export const se_DescribePullRequestEventsCommand = async (
  input: DescribePullRequestEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DescribePullRequestEvents",
  };
  let body: any;
  body = JSON.stringify(se_DescribePullRequestEventsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand
 */
export const se_DisassociateApprovalRuleTemplateFromRepositoryCommand = async (
  input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateApprovalRuleTemplateFromRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand
 */
export const se_EvaluatePullRequestApprovalRulesCommand = async (
  input: EvaluatePullRequestApprovalRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.EvaluatePullRequestApprovalRules",
  };
  let body: any;
  body = JSON.stringify(se_EvaluatePullRequestApprovalRulesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApprovalRuleTemplateCommand
 */
export const se_GetApprovalRuleTemplateCommand = async (
  input: GetApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBlobCommand
 */
export const se_GetBlobCommand = async (
  input: GetBlobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetBlob",
  };
  let body: any;
  body = JSON.stringify(se_GetBlobInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBranchCommand
 */
export const se_GetBranchCommand = async (
  input: GetBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetBranch",
  };
  let body: any;
  body = JSON.stringify(se_GetBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentCommand
 */
export const se_GetCommentCommand = async (
  input: GetCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetComment",
  };
  let body: any;
  body = JSON.stringify(se_GetCommentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentReactionsCommand
 */
export const se_GetCommentReactionsCommand = async (
  input: GetCommentReactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentReactions",
  };
  let body: any;
  body = JSON.stringify(se_GetCommentReactionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentsForComparedCommitCommand
 */
export const se_GetCommentsForComparedCommitCommand = async (
  input: GetCommentsForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentsForComparedCommit",
  };
  let body: any;
  body = JSON.stringify(se_GetCommentsForComparedCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommentsForPullRequestCommand
 */
export const se_GetCommentsForPullRequestCommand = async (
  input: GetCommentsForPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommentsForPullRequest",
  };
  let body: any;
  body = JSON.stringify(se_GetCommentsForPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCommitCommand
 */
export const se_GetCommitCommand = async (
  input: GetCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetCommit",
  };
  let body: any;
  body = JSON.stringify(se_GetCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDifferencesCommand
 */
export const se_GetDifferencesCommand = async (
  input: GetDifferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetDifferences",
  };
  let body: any;
  body = JSON.stringify(se_GetDifferencesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFileCommand
 */
export const se_GetFileCommand = async (
  input: GetFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetFile",
  };
  let body: any;
  body = JSON.stringify(se_GetFileInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetFolderCommand
 */
export const se_GetFolderCommand = async (
  input: GetFolderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetFolder",
  };
  let body: any;
  body = JSON.stringify(se_GetFolderInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeCommitCommand
 */
export const se_GetMergeCommitCommand = async (
  input: GetMergeCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeCommit",
  };
  let body: any;
  body = JSON.stringify(se_GetMergeCommitInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeConflictsCommand
 */
export const se_GetMergeConflictsCommand = async (
  input: GetMergeConflictsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeConflicts",
  };
  let body: any;
  body = JSON.stringify(se_GetMergeConflictsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMergeOptionsCommand
 */
export const se_GetMergeOptionsCommand = async (
  input: GetMergeOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetMergeOptions",
  };
  let body: any;
  body = JSON.stringify(se_GetMergeOptionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestCommand
 */
export const se_GetPullRequestCommand = async (
  input: GetPullRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequest",
  };
  let body: any;
  body = JSON.stringify(se_GetPullRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestApprovalStatesCommand
 */
export const se_GetPullRequestApprovalStatesCommand = async (
  input: GetPullRequestApprovalStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequestApprovalStates",
  };
  let body: any;
  body = JSON.stringify(se_GetPullRequestApprovalStatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPullRequestOverrideStateCommand
 */
export const se_GetPullRequestOverrideStateCommand = async (
  input: GetPullRequestOverrideStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetPullRequestOverrideState",
  };
  let body: any;
  body = JSON.stringify(se_GetPullRequestOverrideStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryCommand
 */
export const se_GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetRepository",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRepositoryTriggersCommand
 */
export const se_GetRepositoryTriggersCommand = async (
  input: GetRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.GetRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApprovalRuleTemplatesCommand
 */
export const se_ListApprovalRuleTemplatesCommand = async (
  input: ListApprovalRuleTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListApprovalRuleTemplates",
  };
  let body: any;
  body = JSON.stringify(se_ListApprovalRuleTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand
 */
export const se_ListAssociatedApprovalRuleTemplatesForRepositoryCommand = async (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository",
  };
  let body: any;
  body = JSON.stringify(se_ListAssociatedApprovalRuleTemplatesForRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBranchesCommand
 */
export const se_ListBranchesCommand = async (
  input: ListBranchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListBranches",
  };
  let body: any;
  body = JSON.stringify(se_ListBranchesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPullRequestsCommand
 */
export const se_ListPullRequestsCommand = async (
  input: ListPullRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListPullRequests",
  };
  let body: any;
  body = JSON.stringify(se_ListPullRequestsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListRepositories",
  };
  let body: any;
  body = JSON.stringify(se_ListRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand
 */
export const se_ListRepositoriesForApprovalRuleTemplateCommand = async (
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate",
  };
  let body: any;
  body = JSON.stringify(se_ListRepositoriesForApprovalRuleTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeBranchesByFastForwardCommand
 */
export const se_MergeBranchesByFastForwardCommand = async (
  input: MergeBranchesByFastForwardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesByFastForward",
  };
  let body: any;
  body = JSON.stringify(se_MergeBranchesByFastForwardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeBranchesBySquashCommand
 */
export const se_MergeBranchesBySquashCommand = async (
  input: MergeBranchesBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesBySquash",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergeBranchesByThreeWay",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestByFastForward",
  };
  let body: any;
  body = JSON.stringify(se_MergePullRequestByFastForwardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergePullRequestBySquashCommand
 */
export const se_MergePullRequestBySquashCommand = async (
  input: MergePullRequestBySquashCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestBySquash",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.MergePullRequestByThreeWay",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.OverridePullRequestApprovalRules",
  };
  let body: any;
  body = JSON.stringify(se_OverridePullRequestApprovalRulesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PostCommentForComparedCommitCommand
 */
export const se_PostCommentForComparedCommitCommand = async (
  input: PostCommentForComparedCommitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentForComparedCommit",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentForPullRequest",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PostCommentReply",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutCommentReaction",
  };
  let body: any;
  body = JSON.stringify(se_PutCommentReactionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutFileCommand
 */
export const se_PutFileCommand = async (
  input: PutFileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutFile",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.PutRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(se_PutRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestRepositoryTriggersCommand
 */
export const se_TestRepositoryTriggersCommand = async (
  input: TestRepositoryTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.TestRepositoryTriggers",
  };
  let body: any;
  body = JSON.stringify(se_TestRepositoryTriggersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand
 */
export const se_UpdateApprovalRuleTemplateContentCommand = async (
  input: UpdateApprovalRuleTemplateContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateContent",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApprovalRuleTemplateContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand
 */
export const se_UpdateApprovalRuleTemplateDescriptionCommand = async (
  input: UpdateApprovalRuleTemplateDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateDescription",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApprovalRuleTemplateDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand
 */
export const se_UpdateApprovalRuleTemplateNameCommand = async (
  input: UpdateApprovalRuleTemplateNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateApprovalRuleTemplateName",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApprovalRuleTemplateNameInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCommentCommand
 */
export const se_UpdateCommentCommand = async (
  input: UpdateCommentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateComment",
  };
  let body: any;
  body = JSON.stringify(se_UpdateCommentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDefaultBranchCommand
 */
export const se_UpdateDefaultBranchCommand = async (
  input: UpdateDefaultBranchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateDefaultBranch",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDefaultBranchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand
 */
export const se_UpdatePullRequestApprovalRuleContentCommand = async (
  input: UpdatePullRequestApprovalRuleContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalRuleContent",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePullRequestApprovalRuleContentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalStateCommand
 */
export const se_UpdatePullRequestApprovalStateCommand = async (
  input: UpdatePullRequestApprovalStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestApprovalState",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePullRequestApprovalStateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestDescriptionCommand
 */
export const se_UpdatePullRequestDescriptionCommand = async (
  input: UpdatePullRequestDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestDescription",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePullRequestDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestStatusCommand
 */
export const se_UpdatePullRequestStatusCommand = async (
  input: UpdatePullRequestStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePullRequestStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePullRequestTitleCommand
 */
export const se_UpdatePullRequestTitleCommand = async (
  input: UpdatePullRequestTitleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdatePullRequestTitle",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePullRequestTitleInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRepositoryDescriptionCommand
 */
export const se_UpdateRepositoryDescriptionCommand = async (
  input: UpdateRepositoryDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateRepositoryDescription",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRepositoryDescriptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRepositoryNameCommand
 */
export const se_UpdateRepositoryNameCommand = async (
  input: UpdateRepositoryNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeCommit_20150413.UpdateRepositoryName",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRepositoryNameInput(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchAssociateApprovalRuleTemplateWithRepositoriesOutput(data, context);
  const response: BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchDescribeMergeConflictsOutput(data, context);
  const response: BatchDescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(data, context);
  const response: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchGetCommitsOutput(data, context);
  const response: BatchGetCommitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateCommitOutput(data, context);
  const response: CreateCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateUnreferencedMergeCommitOutput(data, context);
  const response: CreateUnreferencedMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApprovalRuleTemplateOutput(data, context);
  const response: DeleteApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteBranchOutput(data, context);
  const response: DeleteBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFileOutput(data, context);
  const response: DeleteFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeletePullRequestApprovalRuleOutput(data, context);
  const response: DeletePullRequestApprovalRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRepositoryOutput(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeMergeConflictsOutput(data, context);
  const response: DescribeMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_EvaluatePullRequestApprovalRulesOutput(data, context);
  const response: EvaluatePullRequestApprovalRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetBranchOutput(data, context);
  const response: GetBranchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetCommentReactionsOutput(data, context);
  const response: GetCommentReactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetCommitOutput(data, context);
  const response: GetCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetDifferencesOutput(data, context);
  const response: GetDifferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetFolderOutput(data, context);
  const response: GetFolderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetMergeCommitOutput(data, context);
  const response: GetMergeCommitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetMergeConflictsOutput(data, context);
  const response: GetMergeConflictsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetMergeOptionsOutput(data, context);
  const response: GetMergeOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetPullRequestApprovalStatesOutput(data, context);
  const response: GetPullRequestApprovalStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetPullRequestOverrideStateOutput(data, context);
  const response: GetPullRequestOverrideStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetRepositoryTriggersOutput(data, context);
  const response: GetRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListApprovalRuleTemplatesOutput(data, context);
  const response: ListApprovalRuleTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAssociatedApprovalRuleTemplatesForRepositoryOutput(data, context);
  const response: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListBranchesOutput(data, context);
  const response: ListBranchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListPullRequestsOutput(data, context);
  const response: ListPullRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListRepositoriesOutput(data, context);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListRepositoriesForApprovalRuleTemplateOutput(data, context);
  const response: ListRepositoriesForApprovalRuleTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_MergeBranchesByFastForwardOutput(data, context);
  const response: MergeBranchesByFastForwardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_MergeBranchesBySquashOutput(data, context);
  const response: MergeBranchesBySquashCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_MergeBranchesByThreeWayOutput(data, context);
  const response: MergeBranchesByThreeWayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutFileOutput(data, context);
  const response: PutFileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutRepositoryTriggersOutput(data, context);
  const response: PutRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TestRepositoryTriggersOutput(data, context);
  const response: TestRepositoryTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_ActorDoesNotExistException(body, context);
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
  const deserialized: any = de_ApprovalRuleContentRequiredException(body, context);
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
  const deserialized: any = de_ApprovalRuleDoesNotExistException(body, context);
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
  const deserialized: any = de_ApprovalRuleNameAlreadyExistsException(body, context);
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
  const deserialized: any = de_ApprovalRuleNameRequiredException(body, context);
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
  const deserialized: any = de_ApprovalRuleTemplateContentRequiredException(body, context);
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
  const deserialized: any = de_ApprovalRuleTemplateDoesNotExistException(body, context);
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
  const deserialized: any = de_ApprovalRuleTemplateInUseException(body, context);
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
  const deserialized: any = de_ApprovalRuleTemplateNameAlreadyExistsException(body, context);
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
  const deserialized: any = de_ApprovalRuleTemplateNameRequiredException(body, context);
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
  const deserialized: any = de_ApprovalStateRequiredException(body, context);
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
  const deserialized: any = de_AuthorDoesNotExistException(body, context);
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
  const deserialized: any = de_BeforeCommitIdAndAfterCommitIdAreSameException(body, context);
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
  const deserialized: any = de_BlobIdDoesNotExistException(body, context);
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
  const deserialized: any = de_BlobIdRequiredException(body, context);
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
  const deserialized: any = de_BranchDoesNotExistException(body, context);
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
  const deserialized: any = de_BranchNameExistsException(body, context);
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
  const deserialized: any = de_BranchNameIsTagNameException(body, context);
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
  const deserialized: any = de_BranchNameRequiredException(body, context);
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
  const deserialized: any = de_CannotDeleteApprovalRuleFromTemplateException(body, context);
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
  const deserialized: any = de_CannotModifyApprovalRuleFromTemplateException(body, context);
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
  const deserialized: any = de_ClientRequestTokenRequiredException(body, context);
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
  const deserialized: any = de_CommentContentRequiredException(body, context);
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
  const deserialized: any = de_CommentContentSizeLimitExceededException(body, context);
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
  const deserialized: any = de_CommentDeletedException(body, context);
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
  const deserialized: any = de_CommentDoesNotExistException(body, context);
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
  const deserialized: any = de_CommentIdRequiredException(body, context);
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
  const deserialized: any = de_CommentNotCreatedByCallerException(body, context);
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
  const deserialized: any = de_CommitDoesNotExistException(body, context);
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
  const deserialized: any = de_CommitIdDoesNotExistException(body, context);
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
  const deserialized: any = de_CommitIdRequiredException(body, context);
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
  const deserialized: any = de_CommitIdsLimitExceededException(body, context);
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
  const deserialized: any = de_CommitIdsListRequiredException(body, context);
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
  const deserialized: any = de_CommitMessageLengthExceededException(body, context);
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
  const deserialized: any = de_CommitRequiredException(body, context);
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
  const deserialized: any = de_ConcurrentReferenceUpdateException(body, context);
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
  const deserialized: any = de_DefaultBranchCannotBeDeletedException(body, context);
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
  const deserialized: any = de_DirectoryNameConflictsWithFileNameException(body, context);
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
  const deserialized: any = de_EncryptionIntegrityChecksFailedException(body, context);
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
  const deserialized: any = de_EncryptionKeyAccessDeniedException(body, context);
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
  const deserialized: any = de_EncryptionKeyDisabledException(body, context);
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
  const deserialized: any = de_EncryptionKeyNotFoundException(body, context);
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
  const deserialized: any = de_EncryptionKeyUnavailableException(body, context);
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
  const deserialized: any = de_FileContentAndSourceFileSpecifiedException(body, context);
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
  const deserialized: any = de_FileContentRequiredException(body, context);
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
  const deserialized: any = de_FileContentSizeLimitExceededException(body, context);
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
  const deserialized: any = de_FileDoesNotExistException(body, context);
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
  const deserialized: any = de_FileEntryRequiredException(body, context);
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
  const deserialized: any = de_FileModeRequiredException(body, context);
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
  const deserialized: any = de_FileNameConflictsWithDirectoryNameException(body, context);
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
  const deserialized: any = de_FilePathConflictsWithSubmodulePathException(body, context);
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
  const deserialized: any = de_FileTooLargeException(body, context);
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
  const deserialized: any = de_FolderContentSizeLimitExceededException(body, context);
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
  const deserialized: any = de_FolderDoesNotExistException(body, context);
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
  const deserialized: any = de_IdempotencyParameterMismatchException(body, context);
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
  const deserialized: any = de_InvalidActorArnException(body, context);
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
  const deserialized: any = de_InvalidApprovalRuleContentException(body, context);
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
  const deserialized: any = de_InvalidApprovalRuleNameException(body, context);
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
  const deserialized: any = de_InvalidApprovalRuleTemplateContentException(body, context);
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
  const deserialized: any = de_InvalidApprovalRuleTemplateDescriptionException(body, context);
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
  const deserialized: any = de_InvalidApprovalRuleTemplateNameException(body, context);
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
  const deserialized: any = de_InvalidApprovalStateException(body, context);
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
  const deserialized: any = de_InvalidAuthorArnException(body, context);
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
  const deserialized: any = de_InvalidBlobIdException(body, context);
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
  const deserialized: any = de_InvalidBranchNameException(body, context);
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
  const deserialized: any = de_InvalidClientRequestTokenException(body, context);
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
  const deserialized: any = de_InvalidCommentIdException(body, context);
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
  const deserialized: any = de_InvalidCommitException(body, context);
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
  const deserialized: any = de_InvalidCommitIdException(body, context);
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
  const deserialized: any = de_InvalidConflictDetailLevelException(body, context);
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
  const deserialized: any = de_InvalidConflictResolutionException(body, context);
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
  const deserialized: any = de_InvalidConflictResolutionStrategyException(body, context);
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
  const deserialized: any = de_InvalidContinuationTokenException(body, context);
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
  const deserialized: any = de_InvalidDeletionParameterException(body, context);
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
  const deserialized: any = de_InvalidDescriptionException(body, context);
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
  const deserialized: any = de_InvalidDestinationCommitSpecifierException(body, context);
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
  const deserialized: any = de_InvalidEmailException(body, context);
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
  const deserialized: any = de_InvalidFileLocationException(body, context);
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
  const deserialized: any = de_InvalidFileModeException(body, context);
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
  const deserialized: any = de_InvalidFilePositionException(body, context);
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
  const deserialized: any = de_InvalidMaxConflictFilesException(body, context);
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
  const deserialized: any = de_InvalidMaxMergeHunksException(body, context);
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
  const deserialized: any = de_InvalidMaxResultsException(body, context);
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
  const deserialized: any = de_InvalidMergeOptionException(body, context);
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
  const deserialized: any = de_InvalidOrderException(body, context);
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
  const deserialized: any = de_InvalidOverrideStatusException(body, context);
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
  const deserialized: any = de_InvalidParentCommitIdException(body, context);
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
  const deserialized: any = de_InvalidPathException(body, context);
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
  const deserialized: any = de_InvalidPullRequestEventTypeException(body, context);
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
  const deserialized: any = de_InvalidPullRequestIdException(body, context);
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
  const deserialized: any = de_InvalidPullRequestStatusException(body, context);
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
  const deserialized: any = de_InvalidPullRequestStatusUpdateException(body, context);
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
  const deserialized: any = de_InvalidReactionUserArnException(body, context);
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
  const deserialized: any = de_InvalidReactionValueException(body, context);
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
  const deserialized: any = de_InvalidReferenceNameException(body, context);
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
  const deserialized: any = de_InvalidRelativeFileVersionEnumException(body, context);
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
  const deserialized: any = de_InvalidReplacementContentException(body, context);
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
  const deserialized: any = de_InvalidReplacementTypeException(body, context);
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
  const deserialized: any = de_InvalidRepositoryDescriptionException(body, context);
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
  const deserialized: any = de_InvalidRepositoryNameException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerBranchNameException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerCustomDataException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerDestinationArnException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerEventsException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerNameException(body, context);
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
  const deserialized: any = de_InvalidRepositoryTriggerRegionException(body, context);
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
  const deserialized: any = de_InvalidResourceArnException(body, context);
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
  const deserialized: any = de_InvalidRevisionIdException(body, context);
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
  const deserialized: any = de_InvalidRuleContentSha256Exception(body, context);
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
  const deserialized: any = de_InvalidSortByException(body, context);
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
  const deserialized: any = de_InvalidSourceCommitSpecifierException(body, context);
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
  const deserialized: any = de_InvalidSystemTagUsageException(body, context);
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
  const deserialized: any = de_InvalidTagKeysListException(body, context);
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
  const deserialized: any = de_InvalidTagsMapException(body, context);
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
  const deserialized: any = de_InvalidTargetBranchException(body, context);
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
  const deserialized: any = de_InvalidTargetException(body, context);
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
  const deserialized: any = de_InvalidTargetsException(body, context);
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
  const deserialized: any = de_InvalidTitleException(body, context);
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
  const deserialized: any = de_ManualMergeRequiredException(body, context);
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
  const deserialized: any = de_MaximumBranchesExceededException(body, context);
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
  const deserialized: any = de_MaximumConflictResolutionEntriesExceededException(body, context);
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
  const deserialized: any = de_MaximumFileContentToLoadExceededException(body, context);
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
  const deserialized: any = de_MaximumFileEntriesExceededException(body, context);
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
  const deserialized: any = de_MaximumItemsToCompareExceededException(body, context);
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
  const deserialized: any = de_MaximumNumberOfApprovalsExceededException(body, context);
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
  const deserialized: any = de_MaximumOpenPullRequestsExceededException(body, context);
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
  const deserialized: any = de_MaximumRepositoryNamesExceededException(body, context);
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
  const deserialized: any = de_MaximumRepositoryTriggersExceededException(body, context);
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
  const deserialized: any = de_MaximumRuleTemplatesAssociatedWithRepositoryException(body, context);
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
  const deserialized: any = de_MergeOptionRequiredException(body, context);
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
  const deserialized: any = de_MultipleConflictResolutionEntriesException(body, context);
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
  const deserialized: any = de_MultipleRepositoriesInPullRequestException(body, context);
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
  const deserialized: any = de_NameLengthExceededException(body, context);
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
  const deserialized: any = de_NoChangeException(body, context);
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
  const deserialized: any = de_NumberOfRulesExceededException(body, context);
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
  const deserialized: any = de_NumberOfRuleTemplatesExceededException(body, context);
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
  const deserialized: any = de_OverrideAlreadySetException(body, context);
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
  const deserialized: any = de_OverrideStatusRequiredException(body, context);
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
  const deserialized: any = de_ParentCommitDoesNotExistException(body, context);
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
  const deserialized: any = de_ParentCommitIdOutdatedException(body, context);
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
  const deserialized: any = de_ParentCommitIdRequiredException(body, context);
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
  const deserialized: any = de_PathDoesNotExistException(body, context);
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
  const deserialized: any = de_PathRequiredException(body, context);
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
  const deserialized: any = de_PullRequestAlreadyClosedException(body, context);
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
  const deserialized: any = de_PullRequestApprovalRulesNotSatisfiedException(body, context);
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
  const deserialized: any = de_PullRequestCannotBeApprovedByAuthorException(body, context);
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
  const deserialized: any = de_PullRequestDoesNotExistException(body, context);
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
  const deserialized: any = de_PullRequestIdRequiredException(body, context);
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
  const deserialized: any = de_PullRequestStatusRequiredException(body, context);
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
  const deserialized: any = de_PutFileEntryConflictException(body, context);
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
  const deserialized: any = de_ReactionLimitExceededException(body, context);
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
  const deserialized: any = de_ReactionValueRequiredException(body, context);
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
  const deserialized: any = de_ReferenceDoesNotExistException(body, context);
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
  const deserialized: any = de_ReferenceNameRequiredException(body, context);
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
  const deserialized: any = de_ReferenceTypeNotSupportedException(body, context);
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
  const deserialized: any = de_ReplacementContentRequiredException(body, context);
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
  const deserialized: any = de_ReplacementTypeRequiredException(body, context);
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
  const deserialized: any = de_RepositoryDoesNotExistException(body, context);
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
  const deserialized: any = de_RepositoryLimitExceededException(body, context);
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
  const deserialized: any = de_RepositoryNameExistsException(body, context);
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
  const deserialized: any = de_RepositoryNameRequiredException(body, context);
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
  const deserialized: any = de_RepositoryNamesRequiredException(body, context);
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
  const deserialized: any = de_RepositoryNotAssociatedWithPullRequestException(body, context);
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
  const deserialized: any = de_RepositoryTriggerBranchNameListRequiredException(body, context);
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
  const deserialized: any = de_RepositoryTriggerDestinationArnRequiredException(body, context);
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
  const deserialized: any = de_RepositoryTriggerEventsListRequiredException(body, context);
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
  const deserialized: any = de_RepositoryTriggerNameRequiredException(body, context);
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
  const deserialized: any = de_RepositoryTriggersListRequiredException(body, context);
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
  const deserialized: any = de_ResourceArnRequiredException(body, context);
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
  const deserialized: any = de_RestrictedSourceFileException(body, context);
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
  const deserialized: any = de_RevisionIdRequiredException(body, context);
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
  const deserialized: any = de_RevisionNotCurrentException(body, context);
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
  const deserialized: any = de_SameFileContentException(body, context);
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
  const deserialized: any = de_SamePathRequestException(body, context);
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
  const deserialized: any = de_SourceAndDestinationAreSameException(body, context);
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
  const deserialized: any = de_SourceFileOrContentRequiredException(body, context);
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
  const deserialized: any = de_TagKeysListRequiredException(body, context);
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
  const deserialized: any = de_TagPolicyException(body, context);
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
  const deserialized: any = de_TagsMapRequiredException(body, context);
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
  const deserialized: any = de_TargetRequiredException(body, context);
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
  const deserialized: any = de_TargetsRequiredException(body, context);
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
  const deserialized: any = de_TipOfSourceReferenceIsDifferentException(body, context);
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
  const deserialized: any = de_TipsDivergenceExceededException(body, context);
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
  const deserialized: any = de_TitleRequiredException(body, context);
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
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryInput
 */
const se_AssociateApprovalRuleTemplateWithRepositoryInput = (
  input: AssociateApprovalRuleTemplateWithRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesInput
 */
const se_BatchAssociateApprovalRuleTemplateWithRepositoriesInput = (
  input: BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames != null && { repositoryNames: se_RepositoryNameList(input.repositoryNames, context) }),
  };
};

/**
 * serializeAws_json1_1BatchDescribeMergeConflictsInput
 */
const se_BatchDescribeMergeConflictsInput = (input: BatchDescribeMergeConflictsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.filePaths != null && { filePaths: se_FilePaths(input.filePaths, context) }),
    ...(input.maxConflictFiles != null && { maxConflictFiles: input.maxConflictFiles }),
    ...(input.maxMergeHunks != null && { maxMergeHunks: input.maxMergeHunks }),
    ...(input.mergeOption != null && { mergeOption: input.mergeOption }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
 */
const se_BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = (
  input: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryNames != null && { repositoryNames: se_RepositoryNameList(input.repositoryNames, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetCommitsInput
 */
const se_BatchGetCommitsInput = (input: BatchGetCommitsInput, context: __SerdeContext): any => {
  return {
    ...(input.commitIds != null && { commitIds: se_CommitIdsInputList(input.commitIds, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1BatchGetRepositoriesInput
 */
const se_BatchGetRepositoriesInput = (input: BatchGetRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryNames != null && { repositoryNames: se_RepositoryNameList(input.repositoryNames, context) }),
  };
};

/**
 * serializeAws_json1_1BranchNameList
 */
const se_BranchNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CommitIdsInputList
 */
const se_CommitIdsInputList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConflictResolution
 */
const se_ConflictResolution = (input: ConflictResolution, context: __SerdeContext): any => {
  return {
    ...(input.deleteFiles != null && { deleteFiles: se_DeleteFileEntries(input.deleteFiles, context) }),
    ...(input.replaceContents != null && { replaceContents: se_ReplaceContentEntries(input.replaceContents, context) }),
    ...(input.setFileModes != null && { setFileModes: se_SetFileModeEntries(input.setFileModes, context) }),
  };
};

/**
 * serializeAws_json1_1CreateApprovalRuleTemplateInput
 */
const se_CreateApprovalRuleTemplateInput = (input: CreateApprovalRuleTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.approvalRuleTemplateContent != null && {
      approvalRuleTemplateContent: input.approvalRuleTemplateContent,
    }),
    ...(input.approvalRuleTemplateDescription != null && {
      approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
    }),
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

/**
 * serializeAws_json1_1CreateBranchInput
 */
const se_CreateBranchInput = (input: CreateBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1CreateCommitInput
 */
const se_CreateCommitInput = (input: CreateCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.deleteFiles != null && { deleteFiles: se_DeleteFileEntries(input.deleteFiles, context) }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.parentCommitId != null && { parentCommitId: input.parentCommitId }),
    ...(input.putFiles != null && { putFiles: se_PutFileEntries(input.putFiles, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.setFileModes != null && { setFileModes: se_SetFileModeEntries(input.setFileModes, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePullRequestApprovalRuleInput
 */
const se_CreatePullRequestApprovalRuleInput = (
  input: CreatePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleContent != null && { approvalRuleContent: input.approvalRuleContent }),
    ...(input.approvalRuleName != null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1CreatePullRequestInput
 */
const se_CreatePullRequestInput = (input: CreatePullRequestInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.targets != null && { targets: se_TargetList(input.targets, context) }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_json1_1CreateRepositoryInput
 */
const se_CreateRepositoryInput = (input: CreateRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryDescription != null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUnreferencedMergeCommitInput
 */
const se_CreateUnreferencedMergeCommitInput = (
  input: CreateUnreferencedMergeCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: se_ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.mergeOption != null && { mergeOption: input.mergeOption }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1DeleteApprovalRuleTemplateInput
 */
const se_DeleteApprovalRuleTemplateInput = (input: DeleteApprovalRuleTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

/**
 * serializeAws_json1_1DeleteBranchInput
 */
const se_DeleteBranchInput = (input: DeleteBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DeleteCommentContentInput
 */
const se_DeleteCommentContentInput = (input: DeleteCommentContentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
  };
};

/**
 * serializeAws_json1_1DeleteFileEntries
 */
const se_DeleteFileEntries = (input: DeleteFileEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeleteFileEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1DeleteFileEntry
 */
const se_DeleteFileEntry = (input: DeleteFileEntry, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
  };
};

/**
 * serializeAws_json1_1DeleteFileInput
 */
const se_DeleteFileInput = (input: DeleteFileInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.email != null && { email: input.email }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.name != null && { name: input.name }),
    ...(input.parentCommitId != null && { parentCommitId: input.parentCommitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DeletePullRequestApprovalRuleInput
 */
const se_DeletePullRequestApprovalRuleInput = (
  input: DeletePullRequestApprovalRuleInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleName != null && { approvalRuleName: input.approvalRuleName }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1DeleteRepositoryInput
 */
const se_DeleteRepositoryInput = (input: DeleteRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1DescribeMergeConflictsInput
 */
const se_DescribeMergeConflictsInput = (input: DescribeMergeConflictsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.maxMergeHunks != null && { maxMergeHunks: input.maxMergeHunks }),
    ...(input.mergeOption != null && { mergeOption: input.mergeOption }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1DescribePullRequestEventsInput
 */
const se_DescribePullRequestEventsInput = (input: DescribePullRequestEventsInput, context: __SerdeContext): any => {
  return {
    ...(input.actorArn != null && { actorArn: input.actorArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestEventType != null && { pullRequestEventType: input.pullRequestEventType }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryInput
 */
const se_DisassociateApprovalRuleTemplateFromRepositoryInput = (
  input: DisassociateApprovalRuleTemplateFromRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1EvaluatePullRequestApprovalRulesInput
 */
const se_EvaluatePullRequestApprovalRulesInput = (
  input: EvaluatePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1FilePaths
 */
const se_FilePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetApprovalRuleTemplateInput
 */
const se_GetApprovalRuleTemplateInput = (input: GetApprovalRuleTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

/**
 * serializeAws_json1_1GetBlobInput
 */
const se_GetBlobInput = (input: GetBlobInput, context: __SerdeContext): any => {
  return {
    ...(input.blobId != null && { blobId: input.blobId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetBranchInput
 */
const se_GetBranchInput = (input: GetBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetCommentInput
 */
const se_GetCommentInput = (input: GetCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
  };
};

/**
 * serializeAws_json1_1GetCommentReactionsInput
 */
const se_GetCommentReactionsInput = (input: GetCommentReactionsInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.reactionUserArn != null && { reactionUserArn: input.reactionUserArn }),
  };
};

/**
 * serializeAws_json1_1GetCommentsForComparedCommitInput
 */
const se_GetCommentsForComparedCommitInput = (
  input: GetCommentsForComparedCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetCommentsForPullRequestInput
 */
const se_GetCommentsForPullRequestInput = (input: GetCommentsForPullRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetCommitInput
 */
const se_GetCommitInput = (input: GetCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetDifferencesInput
 */
const se_GetDifferencesInput = (input: GetDifferencesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.afterCommitSpecifier != null && { afterCommitSpecifier: input.afterCommitSpecifier }),
    ...(input.afterPath != null && { afterPath: input.afterPath }),
    ...(input.beforeCommitSpecifier != null && { beforeCommitSpecifier: input.beforeCommitSpecifier }),
    ...(input.beforePath != null && { beforePath: input.beforePath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetFileInput
 */
const se_GetFileInput = (input: GetFileInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier != null && { commitSpecifier: input.commitSpecifier }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetFolderInput
 */
const se_GetFolderInput = (input: GetFolderInput, context: __SerdeContext): any => {
  return {
    ...(input.commitSpecifier != null && { commitSpecifier: input.commitSpecifier }),
    ...(input.folderPath != null && { folderPath: input.folderPath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetMergeCommitInput
 */
const se_GetMergeCommitInput = (input: GetMergeCommitInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1GetMergeConflictsInput
 */
const se_GetMergeConflictsInput = (input: GetMergeConflictsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.maxConflictFiles != null && { maxConflictFiles: input.maxConflictFiles }),
    ...(input.mergeOption != null && { mergeOption: input.mergeOption }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1GetMergeOptionsInput
 */
const se_GetMergeOptionsInput = (input: GetMergeOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
  };
};

/**
 * serializeAws_json1_1GetPullRequestApprovalStatesInput
 */
const se_GetPullRequestApprovalStatesInput = (
  input: GetPullRequestApprovalStatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1GetPullRequestInput
 */
const se_GetPullRequestInput = (input: GetPullRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1GetPullRequestOverrideStateInput
 */
const se_GetPullRequestOverrideStateInput = (input: GetPullRequestOverrideStateInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1GetRepositoryInput
 */
const se_GetRepositoryInput = (input: GetRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1GetRepositoryTriggersInput
 */
const se_GetRepositoryTriggersInput = (input: GetRepositoryTriggersInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1ListApprovalRuleTemplatesInput
 */
const se_ListApprovalRuleTemplatesInput = (input: ListApprovalRuleTemplatesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryInput
 */
const se_ListAssociatedApprovalRuleTemplatesForRepositoryInput = (
  input: ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1ListBranchesInput
 */
const se_ListBranchesInput = (input: ListBranchesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1ListPullRequestsInput
 */
const se_ListPullRequestsInput = (input: ListPullRequestsInput, context: __SerdeContext): any => {
  return {
    ...(input.authorArn != null && { authorArn: input.authorArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.pullRequestStatus != null && { pullRequestStatus: input.pullRequestStatus }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateInput
 */
const se_ListRepositoriesForApprovalRuleTemplateInput = (
  input: ListRepositoriesForApprovalRuleTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListRepositoriesInput
 */
const se_ListRepositoriesInput = (input: ListRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.order != null && { order: input.order }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1Location
 */
const se_Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.filePosition != null && { filePosition: input.filePosition }),
    ...(input.relativeFileVersion != null && { relativeFileVersion: input.relativeFileVersion }),
  };
};

/**
 * serializeAws_json1_1MergeBranchesByFastForwardInput
 */
const se_MergeBranchesByFastForwardInput = (input: MergeBranchesByFastForwardInput, context: __SerdeContext): any => {
  return {
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch != null && { targetBranch: input.targetBranch }),
  };
};

/**
 * serializeAws_json1_1MergeBranchesBySquashInput
 */
const se_MergeBranchesBySquashInput = (input: MergeBranchesBySquashInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: se_ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch != null && { targetBranch: input.targetBranch }),
  };
};

/**
 * serializeAws_json1_1MergeBranchesByThreeWayInput
 */
const se_MergeBranchesByThreeWayInput = (input: MergeBranchesByThreeWayInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: se_ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.destinationCommitSpecifier != null && { destinationCommitSpecifier: input.destinationCommitSpecifier }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitSpecifier != null && { sourceCommitSpecifier: input.sourceCommitSpecifier }),
    ...(input.targetBranch != null && { targetBranch: input.targetBranch }),
  };
};

/**
 * serializeAws_json1_1MergePullRequestByFastForwardInput
 */
const se_MergePullRequestByFastForwardInput = (
  input: MergePullRequestByFastForwardInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

/**
 * serializeAws_json1_1MergePullRequestBySquashInput
 */
const se_MergePullRequestBySquashInput = (input: MergePullRequestBySquashInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: se_ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

/**
 * serializeAws_json1_1MergePullRequestByThreeWayInput
 */
const se_MergePullRequestByThreeWayInput = (input: MergePullRequestByThreeWayInput, context: __SerdeContext): any => {
  return {
    ...(input.authorName != null && { authorName: input.authorName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.conflictDetailLevel != null && { conflictDetailLevel: input.conflictDetailLevel }),
    ...(input.conflictResolution != null && {
      conflictResolution: se_ConflictResolution(input.conflictResolution, context),
    }),
    ...(input.conflictResolutionStrategy != null && { conflictResolutionStrategy: input.conflictResolutionStrategy }),
    ...(input.email != null && { email: input.email }),
    ...(input.keepEmptyFolders != null && { keepEmptyFolders: input.keepEmptyFolders }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceCommitId != null && { sourceCommitId: input.sourceCommitId }),
  };
};

/**
 * serializeAws_json1_1OverridePullRequestApprovalRulesInput
 */
const se_OverridePullRequestApprovalRulesInput = (
  input: OverridePullRequestApprovalRulesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.overrideStatus != null && { overrideStatus: input.overrideStatus }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1PostCommentForComparedCommitInput
 */
const se_PostCommentForComparedCommitInput = (
  input: PostCommentForComparedCommitInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.location != null && { location: se_Location(input.location, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PostCommentForPullRequestInput
 */
const se_PostCommentForPullRequestInput = (input: PostCommentForPullRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.afterCommitId != null && { afterCommitId: input.afterCommitId }),
    ...(input.beforeCommitId != null && { beforeCommitId: input.beforeCommitId }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.location != null && { location: se_Location(input.location, context) }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PostCommentReplyInput
 */
const se_PostCommentReplyInput = (input: PostCommentReplyInput, context: __SerdeContext): any => {
  return {
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.content != null && { content: input.content }),
    ...(input.inReplyTo != null && { inReplyTo: input.inReplyTo }),
  };
};

/**
 * serializeAws_json1_1PutCommentReactionInput
 */
const se_PutCommentReactionInput = (input: PutCommentReactionInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.reactionValue != null && { reactionValue: input.reactionValue }),
  };
};

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
  return {
    ...(input.fileContent != null && { fileContent: context.base64Encoder(input.fileContent) }),
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.sourceFile != null && { sourceFile: se_SourceFileSpecifier(input.sourceFile, context) }),
  };
};

/**
 * serializeAws_json1_1PutFileInput
 */
const se_PutFileInput = (input: PutFileInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.commitMessage != null && { commitMessage: input.commitMessage }),
    ...(input.email != null && { email: input.email }),
    ...(input.fileContent != null && { fileContent: context.base64Encoder(input.fileContent) }),
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.name != null && { name: input.name }),
    ...(input.parentCommitId != null && { parentCommitId: input.parentCommitId }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1PutRepositoryTriggersInput
 */
const se_PutRepositoryTriggersInput = (input: PutRepositoryTriggersInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.triggers != null && { triggers: se_RepositoryTriggersList(input.triggers, context) }),
  };
};

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
  return {
    ...(input.content != null && { content: context.base64Encoder(input.content) }),
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.replacementType != null && { replacementType: input.replacementType }),
  };
};

/**
 * serializeAws_json1_1RepositoryNameList
 */
const se_RepositoryNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RepositoryTrigger
 */
const se_RepositoryTrigger = (input: RepositoryTrigger, context: __SerdeContext): any => {
  return {
    ...(input.branches != null && { branches: se_BranchNameList(input.branches, context) }),
    ...(input.customData != null && { customData: input.customData }),
    ...(input.destinationArn != null && { destinationArn: input.destinationArn }),
    ...(input.events != null && { events: se_RepositoryTriggerEventList(input.events, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1RepositoryTriggerEventList
 */
const se_RepositoryTriggerEventList = (
  input: (RepositoryTriggerEventEnum | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RepositoryTriggersList
 */
const se_RepositoryTriggersList = (input: RepositoryTrigger[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RepositoryTrigger(entry, context);
    });
};

/**
 * serializeAws_json1_1SetFileModeEntries
 */
const se_SetFileModeEntries = (input: SetFileModeEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SetFileModeEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1SetFileModeEntry
 */
const se_SetFileModeEntry = (input: SetFileModeEntry, context: __SerdeContext): any => {
  return {
    ...(input.fileMode != null && { fileMode: input.fileMode }),
    ...(input.filePath != null && { filePath: input.filePath }),
  };
};

/**
 * serializeAws_json1_1SourceFileSpecifier
 */
const se_SourceFileSpecifier = (input: SourceFileSpecifier, context: __SerdeContext): any => {
  return {
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.isMove != null && { isMove: input.isMove }),
  };
};

/**
 * serializeAws_json1_1TagKeysList
 */
const se_TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.destinationReference != null && { destinationReference: input.destinationReference }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.sourceReference != null && { sourceReference: input.sourceReference }),
  };
};

/**
 * serializeAws_json1_1TargetList
 */
const se_TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Target(entry, context);
    });
};

/**
 * serializeAws_json1_1TestRepositoryTriggersInput
 */
const se_TestRepositoryTriggersInput = (input: TestRepositoryTriggersInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.triggers != null && { triggers: se_RepositoryTriggersList(input.triggers, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeysList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateContentInput
 */
const se_UpdateApprovalRuleTemplateContentInput = (
  input: UpdateApprovalRuleTemplateContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
    ...(input.existingRuleContentSha256 != null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
    ...(input.newRuleContent != null && { newRuleContent: input.newRuleContent }),
  };
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionInput
 */
const se_UpdateApprovalRuleTemplateDescriptionInput = (
  input: UpdateApprovalRuleTemplateDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleTemplateDescription != null && {
      approvalRuleTemplateDescription: input.approvalRuleTemplateDescription,
    }),
    ...(input.approvalRuleTemplateName != null && { approvalRuleTemplateName: input.approvalRuleTemplateName }),
  };
};

/**
 * serializeAws_json1_1UpdateApprovalRuleTemplateNameInput
 */
const se_UpdateApprovalRuleTemplateNameInput = (
  input: UpdateApprovalRuleTemplateNameInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.newApprovalRuleTemplateName != null && {
      newApprovalRuleTemplateName: input.newApprovalRuleTemplateName,
    }),
    ...(input.oldApprovalRuleTemplateName != null && {
      oldApprovalRuleTemplateName: input.oldApprovalRuleTemplateName,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateCommentInput
 */
const se_UpdateCommentInput = (input: UpdateCommentInput, context: __SerdeContext): any => {
  return {
    ...(input.commentId != null && { commentId: input.commentId }),
    ...(input.content != null && { content: input.content }),
  };
};

/**
 * serializeAws_json1_1UpdateDefaultBranchInput
 */
const se_UpdateDefaultBranchInput = (input: UpdateDefaultBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.defaultBranchName != null && { defaultBranchName: input.defaultBranchName }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalRuleContentInput
 */
const se_UpdatePullRequestApprovalRuleContentInput = (
  input: UpdatePullRequestApprovalRuleContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalRuleName != null && { approvalRuleName: input.approvalRuleName }),
    ...(input.existingRuleContentSha256 != null && { existingRuleContentSha256: input.existingRuleContentSha256 }),
    ...(input.newRuleContent != null && { newRuleContent: input.newRuleContent }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1UpdatePullRequestApprovalStateInput
 */
const se_UpdatePullRequestApprovalStateInput = (
  input: UpdatePullRequestApprovalStateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.approvalState != null && { approvalState: input.approvalState }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  };
};

/**
 * serializeAws_json1_1UpdatePullRequestDescriptionInput
 */
const se_UpdatePullRequestDescriptionInput = (
  input: UpdatePullRequestDescriptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
  };
};

/**
 * serializeAws_json1_1UpdatePullRequestStatusInput
 */
const se_UpdatePullRequestStatusInput = (input: UpdatePullRequestStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.pullRequestStatus != null && { pullRequestStatus: input.pullRequestStatus }),
  };
};

/**
 * serializeAws_json1_1UpdatePullRequestTitleInput
 */
const se_UpdatePullRequestTitleInput = (input: UpdatePullRequestTitleInput, context: __SerdeContext): any => {
  return {
    ...(input.pullRequestId != null && { pullRequestId: input.pullRequestId }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_json1_1UpdateRepositoryDescriptionInput
 */
const se_UpdateRepositoryDescriptionInput = (input: UpdateRepositoryDescriptionInput, context: __SerdeContext): any => {
  return {
    ...(input.repositoryDescription != null && { repositoryDescription: input.repositoryDescription }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_json1_1UpdateRepositoryNameInput
 */
const se_UpdateRepositoryNameInput = (input: UpdateRepositoryNameInput, context: __SerdeContext): any => {
  return {
    ...(input.newName != null && { newName: input.newName }),
    ...(input.oldName != null && { oldName: input.oldName }),
  };
};

/**
 * deserializeAws_json1_1ActorDoesNotExistException
 */
const de_ActorDoesNotExistException = (output: any, context: __SerdeContext): ActorDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Approval
 */
const de_Approval = (output: any, context: __SerdeContext): Approval => {
  return {
    approvalState: __expectString(output.approvalState),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalList
 */
const de_ApprovalList = (output: any, context: __SerdeContext): Approval[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Approval(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalRule
 */
const de_ApprovalRule = (output: any, context: __SerdeContext): ApprovalRule => {
  return {
    approvalRuleContent: __expectString(output.approvalRuleContent),
    approvalRuleId: __expectString(output.approvalRuleId),
    approvalRuleName: __expectString(output.approvalRuleName),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    lastModifiedDate:
      output.lastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    lastModifiedUser: __expectString(output.lastModifiedUser),
    originApprovalRuleTemplate:
      output.originApprovalRuleTemplate != null
        ? de_OriginApprovalRuleTemplate(output.originApprovalRuleTemplate, context)
        : undefined,
    ruleContentSha256: __expectString(output.ruleContentSha256),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleContentRequiredException
 */
const de_ApprovalRuleContentRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleDoesNotExistException
 */
const de_ApprovalRuleDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleEventMetadata
 */
const de_ApprovalRuleEventMetadata = (output: any, context: __SerdeContext): ApprovalRuleEventMetadata => {
  return {
    approvalRuleContent: __expectString(output.approvalRuleContent),
    approvalRuleId: __expectString(output.approvalRuleId),
    approvalRuleName: __expectString(output.approvalRuleName),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleNameAlreadyExistsException
 */
const de_ApprovalRuleNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleNameAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleNameRequiredException
 */
const de_ApprovalRuleNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleOverriddenEventMetadata
 */
const de_ApprovalRuleOverriddenEventMetadata = (
  output: any,
  context: __SerdeContext
): ApprovalRuleOverriddenEventMetadata => {
  return {
    overrideStatus: __expectString(output.overrideStatus),
    revisionId: __expectString(output.revisionId),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRulesList
 */
const de_ApprovalRulesList = (output: any, context: __SerdeContext): ApprovalRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApprovalRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalRulesNotSatisfiedList
 */
const de_ApprovalRulesNotSatisfiedList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalRulesSatisfiedList
 */
const de_ApprovalRulesSatisfiedList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplate
 */
const de_ApprovalRuleTemplate = (output: any, context: __SerdeContext): ApprovalRuleTemplate => {
  return {
    approvalRuleTemplateContent: __expectString(output.approvalRuleTemplateContent),
    approvalRuleTemplateDescription: __expectString(output.approvalRuleTemplateDescription),
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
    approvalRuleTemplateName: __expectString(output.approvalRuleTemplateName),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    lastModifiedDate:
      output.lastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    lastModifiedUser: __expectString(output.lastModifiedUser),
    ruleContentSha256: __expectString(output.ruleContentSha256),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateContentRequiredException
 */
const de_ApprovalRuleTemplateContentRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateDoesNotExistException
 */
const de_ApprovalRuleTemplateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateInUseException
 */
const de_ApprovalRuleTemplateInUseException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateNameAlreadyExistsException
 */
const de_ApprovalRuleTemplateNameAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateNameAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateNameList
 */
const de_ApprovalRuleTemplateNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApprovalRuleTemplateNameRequiredException
 */
const de_ApprovalRuleTemplateNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApprovalRuleTemplateNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalStateChangedEventMetadata
 */
const de_ApprovalStateChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): ApprovalStateChangedEventMetadata => {
  return {
    approvalStatus: __expectString(output.approvalStatus),
    revisionId: __expectString(output.revisionId),
  } as any;
};

/**
 * deserializeAws_json1_1ApprovalStateRequiredException
 */
const de_ApprovalStateRequiredException = (output: any, context: __SerdeContext): ApprovalStateRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AuthorDoesNotExistException
 */
const de_AuthorDoesNotExistException = (output: any, context: __SerdeContext): AuthorDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesError
 */
const de_BatchAssociateApprovalRuleTemplateWithRepositoriesError = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList
 */
const de_BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchAssociateApprovalRuleTemplateWithRepositoriesError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
 */
const de_BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchAssociateApprovalRuleTemplateWithRepositoriesOutput => {
  return {
    associatedRepositoryNames:
      output.associatedRepositoryNames != null
        ? de_RepositoryNameList(output.associatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors != null
        ? de_BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList(output.errors, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDescribeMergeConflictsError
 */
const de_BatchDescribeMergeConflictsError = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsError => {
  return {
    exceptionName: __expectString(output.exceptionName),
    filePath: __expectString(output.filePath),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDescribeMergeConflictsErrors
 */
const de_BatchDescribeMergeConflictsErrors = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDescribeMergeConflictsError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDescribeMergeConflictsOutput
 */
const de_BatchDescribeMergeConflictsOutput = (
  output: any,
  context: __SerdeContext
): BatchDescribeMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflicts: output.conflicts != null ? de_Conflicts(output.conflicts, context) : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    errors: output.errors != null ? de_BatchDescribeMergeConflictsErrors(output.errors, context) : undefined,
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesError
 */
const de_BatchDisassociateApprovalRuleTemplateFromRepositoriesError = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList
 */
const de_BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDisassociateApprovalRuleTemplateFromRepositoriesError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
 */
const de_BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = (
  output: any,
  context: __SerdeContext
): BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput => {
  return {
    disassociatedRepositoryNames:
      output.disassociatedRepositoryNames != null
        ? de_RepositoryNameList(output.disassociatedRepositoryNames, context)
        : undefined,
    errors:
      output.errors != null
        ? de_BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList(output.errors, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetCommitsError
 */
const de_BatchGetCommitsError = (output: any, context: __SerdeContext): BatchGetCommitsError => {
  return {
    commitId: __expectString(output.commitId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetCommitsErrorsList
 */
const de_BatchGetCommitsErrorsList = (output: any, context: __SerdeContext): BatchGetCommitsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetCommitsError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchGetCommitsOutput
 */
const de_BatchGetCommitsOutput = (output: any, context: __SerdeContext): BatchGetCommitsOutput => {
  return {
    commits: output.commits != null ? de_CommitObjectsList(output.commits, context) : undefined,
    errors: output.errors != null ? de_BatchGetCommitsErrorsList(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetRepositoriesOutput
 */
const de_BatchGetRepositoriesOutput = (output: any, context: __SerdeContext): BatchGetRepositoriesOutput => {
  return {
    repositories: output.repositories != null ? de_RepositoryMetadataList(output.repositories, context) : undefined,
    repositoriesNotFound:
      output.repositoriesNotFound != null ? de_RepositoryNotFoundList(output.repositoriesNotFound, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BeforeCommitIdAndAfterCommitIdAreSameException
 */
const de_BeforeCommitIdAndAfterCommitIdAreSameException = (
  output: any,
  context: __SerdeContext
): BeforeCommitIdAndAfterCommitIdAreSameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BlobIdDoesNotExistException
 */
const de_BlobIdDoesNotExistException = (output: any, context: __SerdeContext): BlobIdDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BlobIdRequiredException
 */
const de_BlobIdRequiredException = (output: any, context: __SerdeContext): BlobIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BlobMetadata
 */
const de_BlobMetadata = (output: any, context: __SerdeContext): BlobMetadata => {
  return {
    blobId: __expectString(output.blobId),
    mode: __expectString(output.mode),
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_json1_1BranchDoesNotExistException
 */
const de_BranchDoesNotExistException = (output: any, context: __SerdeContext): BranchDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BranchInfo
 */
const de_BranchInfo = (output: any, context: __SerdeContext): BranchInfo => {
  return {
    branchName: __expectString(output.branchName),
    commitId: __expectString(output.commitId),
  } as any;
};

/**
 * deserializeAws_json1_1BranchNameExistsException
 */
const de_BranchNameExistsException = (output: any, context: __SerdeContext): BranchNameExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BranchNameIsTagNameException
 */
const de_BranchNameIsTagNameException = (output: any, context: __SerdeContext): BranchNameIsTagNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BranchNameList
 */
const de_BranchNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BranchNameRequiredException
 */
const de_BranchNameRequiredException = (output: any, context: __SerdeContext): BranchNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CallerReactions
 */
const de_CallerReactions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CannotDeleteApprovalRuleFromTemplateException
 */
const de_CannotDeleteApprovalRuleFromTemplateException = (
  output: any,
  context: __SerdeContext
): CannotDeleteApprovalRuleFromTemplateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CannotModifyApprovalRuleFromTemplateException
 */
const de_CannotModifyApprovalRuleFromTemplateException = (
  output: any,
  context: __SerdeContext
): CannotModifyApprovalRuleFromTemplateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ClientRequestTokenRequiredException
 */
const de_ClientRequestTokenRequiredException = (
  output: any,
  context: __SerdeContext
): ClientRequestTokenRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Comment
 */
const de_Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    authorArn: __expectString(output.authorArn),
    callerReactions: output.callerReactions != null ? de_CallerReactions(output.callerReactions, context) : undefined,
    clientRequestToken: __expectString(output.clientRequestToken),
    commentId: __expectString(output.commentId),
    content: __expectString(output.content),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    deleted: __expectBoolean(output.deleted),
    inReplyTo: __expectString(output.inReplyTo),
    lastModifiedDate:
      output.lastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    reactionCounts: output.reactionCounts != null ? de_ReactionCountsMap(output.reactionCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CommentContentRequiredException
 */
const de_CommentContentRequiredException = (output: any, context: __SerdeContext): CommentContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommentContentSizeLimitExceededException
 */
const de_CommentContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): CommentContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommentDeletedException
 */
const de_CommentDeletedException = (output: any, context: __SerdeContext): CommentDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommentDoesNotExistException
 */
const de_CommentDoesNotExistException = (output: any, context: __SerdeContext): CommentDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommentIdRequiredException
 */
const de_CommentIdRequiredException = (output: any, context: __SerdeContext): CommentIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommentNotCreatedByCallerException
 */
const de_CommentNotCreatedByCallerException = (
  output: any,
  context: __SerdeContext
): CommentNotCreatedByCallerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Comments
 */
const de_Comments = (output: any, context: __SerdeContext): Comment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Comment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommentsForComparedCommit
 */
const de_CommentsForComparedCommit = (output: any, context: __SerdeContext): CommentsForComparedCommit => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comments: output.comments != null ? de_Comments(output.comments, context) : undefined,
    location: output.location != null ? de_Location(output.location, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1CommentsForComparedCommitData
 */
const de_CommentsForComparedCommitData = (output: any, context: __SerdeContext): CommentsForComparedCommit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CommentsForComparedCommit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommentsForPullRequest
 */
const de_CommentsForPullRequest = (output: any, context: __SerdeContext): CommentsForPullRequest => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comments: output.comments != null ? de_Comments(output.comments, context) : undefined,
    location: output.location != null ? de_Location(output.location, context) : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1CommentsForPullRequestData
 */
const de_CommentsForPullRequestData = (output: any, context: __SerdeContext): CommentsForPullRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CommentsForPullRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Commit
 */
const de_Commit = (output: any, context: __SerdeContext): Commit => {
  return {
    additionalData: __expectString(output.additionalData),
    author: output.author != null ? de_UserInfo(output.author, context) : undefined,
    commitId: __expectString(output.commitId),
    committer: output.committer != null ? de_UserInfo(output.committer, context) : undefined,
    message: __expectString(output.message),
    parents: output.parents != null ? de_ParentList(output.parents, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1CommitDoesNotExistException
 */
const de_CommitDoesNotExistException = (output: any, context: __SerdeContext): CommitDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitIdDoesNotExistException
 */
const de_CommitIdDoesNotExistException = (output: any, context: __SerdeContext): CommitIdDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitIdRequiredException
 */
const de_CommitIdRequiredException = (output: any, context: __SerdeContext): CommitIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitIdsLimitExceededException
 */
const de_CommitIdsLimitExceededException = (output: any, context: __SerdeContext): CommitIdsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitIdsListRequiredException
 */
const de_CommitIdsListRequiredException = (output: any, context: __SerdeContext): CommitIdsListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitMessageLengthExceededException
 */
const de_CommitMessageLengthExceededException = (
  output: any,
  context: __SerdeContext
): CommitMessageLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CommitObjectsList
 */
const de_CommitObjectsList = (output: any, context: __SerdeContext): Commit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Commit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CommitRequiredException
 */
const de_CommitRequiredException = (output: any, context: __SerdeContext): CommitRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentReferenceUpdateException
 */
const de_ConcurrentReferenceUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentReferenceUpdateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Conflict
 */
const de_Conflict = (output: any, context: __SerdeContext): Conflict => {
  return {
    conflictMetadata:
      output.conflictMetadata != null ? de_ConflictMetadata(output.conflictMetadata, context) : undefined,
    mergeHunks: output.mergeHunks != null ? de_MergeHunks(output.mergeHunks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConflictMetadata
 */
const de_ConflictMetadata = (output: any, context: __SerdeContext): ConflictMetadata => {
  return {
    contentConflict: __expectBoolean(output.contentConflict),
    fileModeConflict: __expectBoolean(output.fileModeConflict),
    fileModes: output.fileModes != null ? de_FileModes(output.fileModes, context) : undefined,
    filePath: __expectString(output.filePath),
    fileSizes: output.fileSizes != null ? de_FileSizes(output.fileSizes, context) : undefined,
    isBinaryFile: output.isBinaryFile != null ? de_IsBinaryFile(output.isBinaryFile, context) : undefined,
    mergeOperations: output.mergeOperations != null ? de_MergeOperations(output.mergeOperations, context) : undefined,
    numberOfConflicts: __expectInt32(output.numberOfConflicts),
    objectTypeConflict: __expectBoolean(output.objectTypeConflict),
    objectTypes: output.objectTypes != null ? de_ObjectTypes(output.objectTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConflictMetadataList
 */
const de_ConflictMetadataList = (output: any, context: __SerdeContext): ConflictMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConflictMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Conflicts
 */
const de_Conflicts = (output: any, context: __SerdeContext): Conflict[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Conflict(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateApprovalRuleTemplateOutput
 */
const de_CreateApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null ? de_ApprovalRuleTemplate(output.approvalRuleTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateCommitOutput
 */
const de_CreateCommitOutput = (output: any, context: __SerdeContext): CreateCommitOutput => {
  return {
    commitId: __expectString(output.commitId),
    filesAdded: output.filesAdded != null ? de_FilesMetadata(output.filesAdded, context) : undefined,
    filesDeleted: output.filesDeleted != null ? de_FilesMetadata(output.filesDeleted, context) : undefined,
    filesUpdated: output.filesUpdated != null ? de_FilesMetadata(output.filesUpdated, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePullRequestApprovalRuleOutput
 */
const de_CreatePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): CreatePullRequestApprovalRuleOutput => {
  return {
    approvalRule: output.approvalRule != null ? de_ApprovalRule(output.approvalRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePullRequestOutput
 */
const de_CreatePullRequestOutput = (output: any, context: __SerdeContext): CreatePullRequestOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRepositoryOutput
 */
const de_CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return {
    repositoryMetadata:
      output.repositoryMetadata != null ? de_RepositoryMetadata(output.repositoryMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUnreferencedMergeCommitOutput
 */
const de_CreateUnreferencedMergeCommitOutput = (
  output: any,
  context: __SerdeContext
): CreateUnreferencedMergeCommitOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultBranchCannotBeDeletedException
 */
const de_DefaultBranchCannotBeDeletedException = (
  output: any,
  context: __SerdeContext
): DefaultBranchCannotBeDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApprovalRuleTemplateOutput
 */
const de_DeleteApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): DeleteApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBranchOutput
 */
const de_DeleteBranchOutput = (output: any, context: __SerdeContext): DeleteBranchOutput => {
  return {
    deletedBranch: output.deletedBranch != null ? de_BranchInfo(output.deletedBranch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteCommentContentOutput
 */
const de_DeleteCommentContentOutput = (output: any, context: __SerdeContext): DeleteCommentContentOutput => {
  return {
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileOutput
 */
const de_DeleteFileOutput = (output: any, context: __SerdeContext): DeleteFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    filePath: __expectString(output.filePath),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1DeletePullRequestApprovalRuleOutput
 */
const de_DeletePullRequestApprovalRuleOutput = (
  output: any,
  context: __SerdeContext
): DeletePullRequestApprovalRuleOutput => {
  return {
    approvalRuleId: __expectString(output.approvalRuleId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRepositoryOutput
 */
const de_DeleteRepositoryOutput = (output: any, context: __SerdeContext): DeleteRepositoryOutput => {
  return {
    repositoryId: __expectString(output.repositoryId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMergeConflictsOutput
 */
const de_DescribeMergeConflictsOutput = (output: any, context: __SerdeContext): DescribeMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflictMetadata:
      output.conflictMetadata != null ? de_ConflictMetadata(output.conflictMetadata, context) : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeHunks: output.mergeHunks != null ? de_MergeHunks(output.mergeHunks, context) : undefined,
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePullRequestEventsOutput
 */
const de_DescribePullRequestEventsOutput = (output: any, context: __SerdeContext): DescribePullRequestEventsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pullRequestEvents:
      output.pullRequestEvents != null ? de_PullRequestEventList(output.pullRequestEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Difference
 */
const de_Difference = (output: any, context: __SerdeContext): Difference => {
  return {
    afterBlob: output.afterBlob != null ? de_BlobMetadata(output.afterBlob, context) : undefined,
    beforeBlob: output.beforeBlob != null ? de_BlobMetadata(output.beforeBlob, context) : undefined,
    changeType: __expectString(output.changeType),
  } as any;
};

/**
 * deserializeAws_json1_1DifferenceList
 */
const de_DifferenceList = (output: any, context: __SerdeContext): Difference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Difference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectoryNameConflictsWithFileNameException
 */
const de_DirectoryNameConflictsWithFileNameException = (
  output: any,
  context: __SerdeContext
): DirectoryNameConflictsWithFileNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionIntegrityChecksFailedException
 */
const de_EncryptionIntegrityChecksFailedException = (
  output: any,
  context: __SerdeContext
): EncryptionIntegrityChecksFailedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKeyAccessDeniedException
 */
const de_EncryptionKeyAccessDeniedException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKeyDisabledException
 */
const de_EncryptionKeyDisabledException = (output: any, context: __SerdeContext): EncryptionKeyDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKeyNotFoundException
 */
const de_EncryptionKeyNotFoundException = (output: any, context: __SerdeContext): EncryptionKeyNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionKeyUnavailableException
 */
const de_EncryptionKeyUnavailableException = (
  output: any,
  context: __SerdeContext
): EncryptionKeyUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluatePullRequestApprovalRulesOutput
 */
const de_EvaluatePullRequestApprovalRulesOutput = (
  output: any,
  context: __SerdeContext
): EvaluatePullRequestApprovalRulesOutput => {
  return {
    evaluation: output.evaluation != null ? de_Evaluation(output.evaluation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return {
    approvalRulesNotSatisfied:
      output.approvalRulesNotSatisfied != null
        ? de_ApprovalRulesNotSatisfiedList(output.approvalRulesNotSatisfied, context)
        : undefined,
    approvalRulesSatisfied:
      output.approvalRulesSatisfied != null
        ? de_ApprovalRulesSatisfiedList(output.approvalRulesSatisfied, context)
        : undefined,
    approved: __expectBoolean(output.approved),
    overridden: __expectBoolean(output.overridden),
  } as any;
};

/**
 * deserializeAws_json1_1File
 */
const de_File = (output: any, context: __SerdeContext): File => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
    relativePath: __expectString(output.relativePath),
  } as any;
};

/**
 * deserializeAws_json1_1FileContentAndSourceFileSpecifiedException
 */
const de_FileContentAndSourceFileSpecifiedException = (
  output: any,
  context: __SerdeContext
): FileContentAndSourceFileSpecifiedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileContentRequiredException
 */
const de_FileContentRequiredException = (output: any, context: __SerdeContext): FileContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileContentSizeLimitExceededException
 */
const de_FileContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): FileContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileDoesNotExistException
 */
const de_FileDoesNotExistException = (output: any, context: __SerdeContext): FileDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileEntryRequiredException
 */
const de_FileEntryRequiredException = (output: any, context: __SerdeContext): FileEntryRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileList
 */
const de_FileList = (output: any, context: __SerdeContext): File[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_File(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileMetadata
 */
const de_FileMetadata = (output: any, context: __SerdeContext): FileMetadata => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
  } as any;
};

/**
 * deserializeAws_json1_1FileModeRequiredException
 */
const de_FileModeRequiredException = (output: any, context: __SerdeContext): FileModeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileModes
 */
const de_FileModes = (output: any, context: __SerdeContext): FileModes => {
  return {
    base: __expectString(output.base),
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_json1_1FileNameConflictsWithDirectoryNameException
 */
const de_FileNameConflictsWithDirectoryNameException = (
  output: any,
  context: __SerdeContext
): FileNameConflictsWithDirectoryNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FilePathConflictsWithSubmodulePathException
 */
const de_FilePathConflictsWithSubmodulePathException = (
  output: any,
  context: __SerdeContext
): FilePathConflictsWithSubmodulePathException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FileSizes
 */
const de_FileSizes = (output: any, context: __SerdeContext): FileSizes => {
  return {
    base: __expectLong(output.base),
    destination: __expectLong(output.destination),
    source: __expectLong(output.source),
  } as any;
};

/**
 * deserializeAws_json1_1FilesMetadata
 */
const de_FilesMetadata = (output: any, context: __SerdeContext): FileMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileTooLargeException
 */
const de_FileTooLargeException = (output: any, context: __SerdeContext): FileTooLargeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Folder
 */
const de_Folder = (output: any, context: __SerdeContext): Folder => {
  return {
    absolutePath: __expectString(output.absolutePath),
    relativePath: __expectString(output.relativePath),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1FolderContentSizeLimitExceededException
 */
const de_FolderContentSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): FolderContentSizeLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FolderDoesNotExistException
 */
const de_FolderDoesNotExistException = (output: any, context: __SerdeContext): FolderDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1FolderList
 */
const de_FolderList = (output: any, context: __SerdeContext): Folder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Folder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetApprovalRuleTemplateOutput
 */
const de_GetApprovalRuleTemplateOutput = (output: any, context: __SerdeContext): GetApprovalRuleTemplateOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null ? de_ApprovalRuleTemplate(output.approvalRuleTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetBlobOutput
 */
const de_GetBlobOutput = (output: any, context: __SerdeContext): GetBlobOutput => {
  return {
    content: output.content != null ? context.base64Decoder(output.content) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetBranchOutput
 */
const de_GetBranchOutput = (output: any, context: __SerdeContext): GetBranchOutput => {
  return {
    branch: output.branch != null ? de_BranchInfo(output.branch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCommentOutput
 */
const de_GetCommentOutput = (output: any, context: __SerdeContext): GetCommentOutput => {
  return {
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCommentReactionsOutput
 */
const de_GetCommentReactionsOutput = (output: any, context: __SerdeContext): GetCommentReactionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    reactionsForComment:
      output.reactionsForComment != null ? de_ReactionsForCommentList(output.reactionsForComment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCommentsForComparedCommitOutput
 */
const de_GetCommentsForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): GetCommentsForComparedCommitOutput => {
  return {
    commentsForComparedCommitData:
      output.commentsForComparedCommitData != null
        ? de_CommentsForComparedCommitData(output.commentsForComparedCommitData, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetCommentsForPullRequestOutput
 */
const de_GetCommentsForPullRequestOutput = (output: any, context: __SerdeContext): GetCommentsForPullRequestOutput => {
  return {
    commentsForPullRequestData:
      output.commentsForPullRequestData != null
        ? de_CommentsForPullRequestData(output.commentsForPullRequestData, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetCommitOutput
 */
const de_GetCommitOutput = (output: any, context: __SerdeContext): GetCommitOutput => {
  return {
    commit: output.commit != null ? de_Commit(output.commit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDifferencesOutput
 */
const de_GetDifferencesOutput = (output: any, context: __SerdeContext): GetDifferencesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    differences: output.differences != null ? de_DifferenceList(output.differences, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetFileOutput
 */
const de_GetFileOutput = (output: any, context: __SerdeContext): GetFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    fileContent: output.fileContent != null ? context.base64Decoder(output.fileContent) : undefined,
    fileMode: __expectString(output.fileMode),
    filePath: __expectString(output.filePath),
    fileSize: __expectLong(output.fileSize),
  } as any;
};

/**
 * deserializeAws_json1_1GetFolderOutput
 */
const de_GetFolderOutput = (output: any, context: __SerdeContext): GetFolderOutput => {
  return {
    commitId: __expectString(output.commitId),
    files: output.files != null ? de_FileList(output.files, context) : undefined,
    folderPath: __expectString(output.folderPath),
    subFolders: output.subFolders != null ? de_FolderList(output.subFolders, context) : undefined,
    subModules: output.subModules != null ? de_SubModuleList(output.subModules, context) : undefined,
    symbolicLinks: output.symbolicLinks != null ? de_SymbolicLinkList(output.symbolicLinks, context) : undefined,
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMergeCommitOutput
 */
const de_GetMergeCommitOutput = (output: any, context: __SerdeContext): GetMergeCommitOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    destinationCommitId: __expectString(output.destinationCommitId),
    mergedCommitId: __expectString(output.mergedCommitId),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMergeConflictsOutput
 */
const de_GetMergeConflictsOutput = (output: any, context: __SerdeContext): GetMergeConflictsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    conflictMetadataList:
      output.conflictMetadataList != null ? de_ConflictMetadataList(output.conflictMetadataList, context) : undefined,
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeable: __expectBoolean(output.mergeable),
    nextToken: __expectString(output.nextToken),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1GetMergeOptionsOutput
 */
const de_GetMergeOptionsOutput = (output: any, context: __SerdeContext): GetMergeOptionsOutput => {
  return {
    baseCommitId: __expectString(output.baseCommitId),
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeOptions: output.mergeOptions != null ? de_MergeOptions(output.mergeOptions, context) : undefined,
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1GetPullRequestApprovalStatesOutput
 */
const de_GetPullRequestApprovalStatesOutput = (
  output: any,
  context: __SerdeContext
): GetPullRequestApprovalStatesOutput => {
  return {
    approvals: output.approvals != null ? de_ApprovalList(output.approvals, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPullRequestOutput
 */
const de_GetPullRequestOutput = (output: any, context: __SerdeContext): GetPullRequestOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPullRequestOverrideStateOutput
 */
const de_GetPullRequestOverrideStateOutput = (
  output: any,
  context: __SerdeContext
): GetPullRequestOverrideStateOutput => {
  return {
    overridden: __expectBoolean(output.overridden),
    overrider: __expectString(output.overrider),
  } as any;
};

/**
 * deserializeAws_json1_1GetRepositoryOutput
 */
const de_GetRepositoryOutput = (output: any, context: __SerdeContext): GetRepositoryOutput => {
  return {
    repositoryMetadata:
      output.repositoryMetadata != null ? de_RepositoryMetadata(output.repositoryMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRepositoryTriggersOutput
 */
const de_GetRepositoryTriggersOutput = (output: any, context: __SerdeContext): GetRepositoryTriggersOutput => {
  return {
    configurationId: __expectString(output.configurationId),
    triggers: output.triggers != null ? de_RepositoryTriggersList(output.triggers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdempotencyParameterMismatchException
 */
const de_IdempotencyParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotencyParameterMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidActorArnException
 */
const de_InvalidActorArnException = (output: any, context: __SerdeContext): InvalidActorArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleContentException
 */
const de_InvalidApprovalRuleContentException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleNameException
 */
const de_InvalidApprovalRuleNameException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateContentException
 */
const de_InvalidApprovalRuleTemplateContentException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateDescriptionException
 */
const de_InvalidApprovalRuleTemplateDescriptionException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalRuleTemplateNameException
 */
const de_InvalidApprovalRuleTemplateNameException = (
  output: any,
  context: __SerdeContext
): InvalidApprovalRuleTemplateNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApprovalStateException
 */
const de_InvalidApprovalStateException = (output: any, context: __SerdeContext): InvalidApprovalStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAuthorArnException
 */
const de_InvalidAuthorArnException = (output: any, context: __SerdeContext): InvalidAuthorArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidBlobIdException
 */
const de_InvalidBlobIdException = (output: any, context: __SerdeContext): InvalidBlobIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidBranchNameException
 */
const de_InvalidBranchNameException = (output: any, context: __SerdeContext): InvalidBranchNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidClientRequestTokenException
 */
const de_InvalidClientRequestTokenException = (
  output: any,
  context: __SerdeContext
): InvalidClientRequestTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCommentIdException
 */
const de_InvalidCommentIdException = (output: any, context: __SerdeContext): InvalidCommentIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCommitException
 */
const de_InvalidCommitException = (output: any, context: __SerdeContext): InvalidCommitException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCommitIdException
 */
const de_InvalidCommitIdException = (output: any, context: __SerdeContext): InvalidCommitIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidConflictDetailLevelException
 */
const de_InvalidConflictDetailLevelException = (
  output: any,
  context: __SerdeContext
): InvalidConflictDetailLevelException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidConflictResolutionException
 */
const de_InvalidConflictResolutionException = (
  output: any,
  context: __SerdeContext
): InvalidConflictResolutionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidConflictResolutionStrategyException
 */
const de_InvalidConflictResolutionStrategyException = (
  output: any,
  context: __SerdeContext
): InvalidConflictResolutionStrategyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidContinuationTokenException
 */
const de_InvalidContinuationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidContinuationTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeletionParameterException
 */
const de_InvalidDeletionParameterException = (
  output: any,
  context: __SerdeContext
): InvalidDeletionParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDescriptionException
 */
const de_InvalidDescriptionException = (output: any, context: __SerdeContext): InvalidDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDestinationCommitSpecifierException
 */
const de_InvalidDestinationCommitSpecifierException = (
  output: any,
  context: __SerdeContext
): InvalidDestinationCommitSpecifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEmailException
 */
const de_InvalidEmailException = (output: any, context: __SerdeContext): InvalidEmailException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFileLocationException
 */
const de_InvalidFileLocationException = (output: any, context: __SerdeContext): InvalidFileLocationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFileModeException
 */
const de_InvalidFileModeException = (output: any, context: __SerdeContext): InvalidFileModeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFilePositionException
 */
const de_InvalidFilePositionException = (output: any, context: __SerdeContext): InvalidFilePositionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMaxConflictFilesException
 */
const de_InvalidMaxConflictFilesException = (
  output: any,
  context: __SerdeContext
): InvalidMaxConflictFilesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMaxMergeHunksException
 */
const de_InvalidMaxMergeHunksException = (output: any, context: __SerdeContext): InvalidMaxMergeHunksException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMaxResultsException
 */
const de_InvalidMaxResultsException = (output: any, context: __SerdeContext): InvalidMaxResultsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMergeOptionException
 */
const de_InvalidMergeOptionException = (output: any, context: __SerdeContext): InvalidMergeOptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOrderException
 */
const de_InvalidOrderException = (output: any, context: __SerdeContext): InvalidOrderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOverrideStatusException
 */
const de_InvalidOverrideStatusException = (output: any, context: __SerdeContext): InvalidOverrideStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParentCommitIdException
 */
const de_InvalidParentCommitIdException = (output: any, context: __SerdeContext): InvalidParentCommitIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPathException
 */
const de_InvalidPathException = (output: any, context: __SerdeContext): InvalidPathException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPullRequestEventTypeException
 */
const de_InvalidPullRequestEventTypeException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestEventTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPullRequestIdException
 */
const de_InvalidPullRequestIdException = (output: any, context: __SerdeContext): InvalidPullRequestIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPullRequestStatusException
 */
const de_InvalidPullRequestStatusException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPullRequestStatusUpdateException
 */
const de_InvalidPullRequestStatusUpdateException = (
  output: any,
  context: __SerdeContext
): InvalidPullRequestStatusUpdateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidReactionUserArnException
 */
const de_InvalidReactionUserArnException = (output: any, context: __SerdeContext): InvalidReactionUserArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidReactionValueException
 */
const de_InvalidReactionValueException = (output: any, context: __SerdeContext): InvalidReactionValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidReferenceNameException
 */
const de_InvalidReferenceNameException = (output: any, context: __SerdeContext): InvalidReferenceNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRelativeFileVersionEnumException
 */
const de_InvalidRelativeFileVersionEnumException = (
  output: any,
  context: __SerdeContext
): InvalidRelativeFileVersionEnumException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidReplacementContentException
 */
const de_InvalidReplacementContentException = (
  output: any,
  context: __SerdeContext
): InvalidReplacementContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidReplacementTypeException
 */
const de_InvalidReplacementTypeException = (output: any, context: __SerdeContext): InvalidReplacementTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryDescriptionException
 */
const de_InvalidRepositoryDescriptionException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryDescriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryNameException
 */
const de_InvalidRepositoryNameException = (output: any, context: __SerdeContext): InvalidRepositoryNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerBranchNameException
 */
const de_InvalidRepositoryTriggerBranchNameException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerBranchNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerCustomDataException
 */
const de_InvalidRepositoryTriggerCustomDataException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerCustomDataException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerDestinationArnException
 */
const de_InvalidRepositoryTriggerDestinationArnException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerDestinationArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerEventsException
 */
const de_InvalidRepositoryTriggerEventsException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerEventsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerNameException
 */
const de_InvalidRepositoryTriggerNameException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRepositoryTriggerRegionException
 */
const de_InvalidRepositoryTriggerRegionException = (
  output: any,
  context: __SerdeContext
): InvalidRepositoryTriggerRegionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceArnException
 */
const de_InvalidResourceArnException = (output: any, context: __SerdeContext): InvalidResourceArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRevisionIdException
 */
const de_InvalidRevisionIdException = (output: any, context: __SerdeContext): InvalidRevisionIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRuleContentSha256Exception
 */
const de_InvalidRuleContentSha256Exception = (
  output: any,
  context: __SerdeContext
): InvalidRuleContentSha256Exception => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSortByException
 */
const de_InvalidSortByException = (output: any, context: __SerdeContext): InvalidSortByException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSourceCommitSpecifierException
 */
const de_InvalidSourceCommitSpecifierException = (
  output: any,
  context: __SerdeContext
): InvalidSourceCommitSpecifierException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSystemTagUsageException
 */
const de_InvalidSystemTagUsageException = (output: any, context: __SerdeContext): InvalidSystemTagUsageException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagKeysListException
 */
const de_InvalidTagKeysListException = (output: any, context: __SerdeContext): InvalidTagKeysListException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagsMapException
 */
const de_InvalidTagsMapException = (output: any, context: __SerdeContext): InvalidTagsMapException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetBranchException
 */
const de_InvalidTargetBranchException = (output: any, context: __SerdeContext): InvalidTargetBranchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetException
 */
const de_InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetsException
 */
const de_InvalidTargetsException = (output: any, context: __SerdeContext): InvalidTargetsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTitleException
 */
const de_InvalidTitleException = (output: any, context: __SerdeContext): InvalidTitleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IsBinaryFile
 */
const de_IsBinaryFile = (output: any, context: __SerdeContext): IsBinaryFile => {
  return {
    base: __expectBoolean(output.base),
    destination: __expectBoolean(output.destination),
    source: __expectBoolean(output.source),
  } as any;
};

/**
 * deserializeAws_json1_1ListApprovalRuleTemplatesOutput
 */
const de_ListApprovalRuleTemplatesOutput = (output: any, context: __SerdeContext): ListApprovalRuleTemplatesOutput => {
  return {
    approvalRuleTemplateNames:
      output.approvalRuleTemplateNames != null
        ? de_ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryOutput
 */
const de_ListAssociatedApprovalRuleTemplatesForRepositoryOutput = (
  output: any,
  context: __SerdeContext
): ListAssociatedApprovalRuleTemplatesForRepositoryOutput => {
  return {
    approvalRuleTemplateNames:
      output.approvalRuleTemplateNames != null
        ? de_ApprovalRuleTemplateNameList(output.approvalRuleTemplateNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBranchesOutput
 */
const de_ListBranchesOutput = (output: any, context: __SerdeContext): ListBranchesOutput => {
  return {
    branches: output.branches != null ? de_BranchNameList(output.branches, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPullRequestsOutput
 */
const de_ListPullRequestsOutput = (output: any, context: __SerdeContext): ListPullRequestsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    pullRequestIds: output.pullRequestIds != null ? de_PullRequestIdList(output.pullRequestIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateOutput
 */
const de_ListRepositoriesForApprovalRuleTemplateOutput = (
  output: any,
  context: __SerdeContext
): ListRepositoriesForApprovalRuleTemplateOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositoryNames:
      output.repositoryNames != null ? de_RepositoryNameList(output.repositoryNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRepositoriesOutput
 */
const de_ListRepositoriesOutput = (output: any, context: __SerdeContext): ListRepositoriesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories: output.repositories != null ? de_RepositoryNameIdPairList(output.repositories, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return {
    filePath: __expectString(output.filePath),
    filePosition: __expectLong(output.filePosition),
    relativeFileVersion: __expectString(output.relativeFileVersion),
  } as any;
};

/**
 * deserializeAws_json1_1ManualMergeRequiredException
 */
const de_ManualMergeRequiredException = (output: any, context: __SerdeContext): ManualMergeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumBranchesExceededException
 */
const de_MaximumBranchesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumBranchesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumConflictResolutionEntriesExceededException
 */
const de_MaximumConflictResolutionEntriesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumConflictResolutionEntriesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumFileContentToLoadExceededException
 */
const de_MaximumFileContentToLoadExceededException = (
  output: any,
  context: __SerdeContext
): MaximumFileContentToLoadExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumFileEntriesExceededException
 */
const de_MaximumFileEntriesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumFileEntriesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumItemsToCompareExceededException
 */
const de_MaximumItemsToCompareExceededException = (
  output: any,
  context: __SerdeContext
): MaximumItemsToCompareExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumNumberOfApprovalsExceededException
 */
const de_MaximumNumberOfApprovalsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumNumberOfApprovalsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumOpenPullRequestsExceededException
 */
const de_MaximumOpenPullRequestsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumOpenPullRequestsExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumRepositoryNamesExceededException
 */
const de_MaximumRepositoryNamesExceededException = (
  output: any,
  context: __SerdeContext
): MaximumRepositoryNamesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumRepositoryTriggersExceededException
 */
const de_MaximumRepositoryTriggersExceededException = (
  output: any,
  context: __SerdeContext
): MaximumRepositoryTriggersExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumRuleTemplatesAssociatedWithRepositoryException
 */
const de_MaximumRuleTemplatesAssociatedWithRepositoryException = (
  output: any,
  context: __SerdeContext
): MaximumRuleTemplatesAssociatedWithRepositoryException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MergeBranchesByFastForwardOutput
 */
const de_MergeBranchesByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergeBranchesByFastForwardOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1MergeBranchesBySquashOutput
 */
const de_MergeBranchesBySquashOutput = (output: any, context: __SerdeContext): MergeBranchesBySquashOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1MergeBranchesByThreeWayOutput
 */
const de_MergeBranchesByThreeWayOutput = (output: any, context: __SerdeContext): MergeBranchesByThreeWayOutput => {
  return {
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1MergeHunk
 */
const de_MergeHunk = (output: any, context: __SerdeContext): MergeHunk => {
  return {
    base: output.base != null ? de_MergeHunkDetail(output.base, context) : undefined,
    destination: output.destination != null ? de_MergeHunkDetail(output.destination, context) : undefined,
    isConflict: __expectBoolean(output.isConflict),
    source: output.source != null ? de_MergeHunkDetail(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MergeHunkDetail
 */
const de_MergeHunkDetail = (output: any, context: __SerdeContext): MergeHunkDetail => {
  return {
    endLine: __expectInt32(output.endLine),
    hunkContent: __expectString(output.hunkContent),
    startLine: __expectInt32(output.startLine),
  } as any;
};

/**
 * deserializeAws_json1_1MergeHunks
 */
const de_MergeHunks = (output: any, context: __SerdeContext): MergeHunk[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MergeHunk(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MergeMetadata
 */
const de_MergeMetadata = (output: any, context: __SerdeContext): MergeMetadata => {
  return {
    isMerged: __expectBoolean(output.isMerged),
    mergeCommitId: __expectString(output.mergeCommitId),
    mergeOption: __expectString(output.mergeOption),
    mergedBy: __expectString(output.mergedBy),
  } as any;
};

/**
 * deserializeAws_json1_1MergeOperations
 */
const de_MergeOperations = (output: any, context: __SerdeContext): MergeOperations => {
  return {
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_json1_1MergeOptionRequiredException
 */
const de_MergeOptionRequiredException = (output: any, context: __SerdeContext): MergeOptionRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MergeOptions
 */
const de_MergeOptions = (output: any, context: __SerdeContext): (MergeOptionTypeEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MergePullRequestByFastForwardOutput
 */
const de_MergePullRequestByFastForwardOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByFastForwardOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MergePullRequestBySquashOutput
 */
const de_MergePullRequestBySquashOutput = (output: any, context: __SerdeContext): MergePullRequestBySquashOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MergePullRequestByThreeWayOutput
 */
const de_MergePullRequestByThreeWayOutput = (
  output: any,
  context: __SerdeContext
): MergePullRequestByThreeWayOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MultipleConflictResolutionEntriesException
 */
const de_MultipleConflictResolutionEntriesException = (
  output: any,
  context: __SerdeContext
): MultipleConflictResolutionEntriesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MultipleRepositoriesInPullRequestException
 */
const de_MultipleRepositoriesInPullRequestException = (
  output: any,
  context: __SerdeContext
): MultipleRepositoriesInPullRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NameLengthExceededException
 */
const de_NameLengthExceededException = (output: any, context: __SerdeContext): NameLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoChangeException
 */
const de_NoChangeException = (output: any, context: __SerdeContext): NoChangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NumberOfRulesExceededException
 */
const de_NumberOfRulesExceededException = (output: any, context: __SerdeContext): NumberOfRulesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NumberOfRuleTemplatesExceededException
 */
const de_NumberOfRuleTemplatesExceededException = (
  output: any,
  context: __SerdeContext
): NumberOfRuleTemplatesExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ObjectTypes
 */
const de_ObjectTypes = (output: any, context: __SerdeContext): ObjectTypes => {
  return {
    base: __expectString(output.base),
    destination: __expectString(output.destination),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_json1_1OriginApprovalRuleTemplate
 */
const de_OriginApprovalRuleTemplate = (output: any, context: __SerdeContext): OriginApprovalRuleTemplate => {
  return {
    approvalRuleTemplateId: __expectString(output.approvalRuleTemplateId),
    approvalRuleTemplateName: __expectString(output.approvalRuleTemplateName),
  } as any;
};

/**
 * deserializeAws_json1_1OverrideAlreadySetException
 */
const de_OverrideAlreadySetException = (output: any, context: __SerdeContext): OverrideAlreadySetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OverrideStatusRequiredException
 */
const de_OverrideStatusRequiredException = (output: any, context: __SerdeContext): OverrideStatusRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParentCommitDoesNotExistException
 */
const de_ParentCommitDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ParentCommitDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParentCommitIdOutdatedException
 */
const de_ParentCommitIdOutdatedException = (output: any, context: __SerdeContext): ParentCommitIdOutdatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParentCommitIdRequiredException
 */
const de_ParentCommitIdRequiredException = (output: any, context: __SerdeContext): ParentCommitIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ParentList
 */
const de_ParentList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PathDoesNotExistException
 */
const de_PathDoesNotExistException = (output: any, context: __SerdeContext): PathDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PathRequiredException
 */
const de_PathRequiredException = (output: any, context: __SerdeContext): PathRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PostCommentForComparedCommitOutput
 */
const de_PostCommentForComparedCommitOutput = (
  output: any,
  context: __SerdeContext
): PostCommentForComparedCommitOutput => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
    location: output.location != null ? de_Location(output.location, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PostCommentForPullRequestOutput
 */
const de_PostCommentForPullRequestOutput = (output: any, context: __SerdeContext): PostCommentForPullRequestOutput => {
  return {
    afterBlobId: __expectString(output.afterBlobId),
    afterCommitId: __expectString(output.afterCommitId),
    beforeBlobId: __expectString(output.beforeBlobId),
    beforeCommitId: __expectString(output.beforeCommitId),
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
    location: output.location != null ? de_Location(output.location, context) : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PostCommentReplyOutput
 */
const de_PostCommentReplyOutput = (output: any, context: __SerdeContext): PostCommentReplyOutput => {
  return {
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PullRequest
 */
const de_PullRequest = (output: any, context: __SerdeContext): PullRequest => {
  return {
    approvalRules: output.approvalRules != null ? de_ApprovalRulesList(output.approvalRules, context) : undefined,
    authorArn: __expectString(output.authorArn),
    clientRequestToken: __expectString(output.clientRequestToken),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    lastActivityDate:
      output.lastActivityDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastActivityDate)))
        : undefined,
    pullRequestId: __expectString(output.pullRequestId),
    pullRequestStatus: __expectString(output.pullRequestStatus),
    pullRequestTargets:
      output.pullRequestTargets != null ? de_PullRequestTargetList(output.pullRequestTargets, context) : undefined,
    revisionId: __expectString(output.revisionId),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestAlreadyClosedException
 */
const de_PullRequestAlreadyClosedException = (
  output: any,
  context: __SerdeContext
): PullRequestAlreadyClosedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestApprovalRulesNotSatisfiedException
 */
const de_PullRequestApprovalRulesNotSatisfiedException = (
  output: any,
  context: __SerdeContext
): PullRequestApprovalRulesNotSatisfiedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestCannotBeApprovedByAuthorException
 */
const de_PullRequestCannotBeApprovedByAuthorException = (
  output: any,
  context: __SerdeContext
): PullRequestCannotBeApprovedByAuthorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestCreatedEventMetadata
 */
const de_PullRequestCreatedEventMetadata = (output: any, context: __SerdeContext): PullRequestCreatedEventMetadata => {
  return {
    destinationCommitId: __expectString(output.destinationCommitId),
    mergeBase: __expectString(output.mergeBase),
    repositoryName: __expectString(output.repositoryName),
    sourceCommitId: __expectString(output.sourceCommitId),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestDoesNotExistException
 */
const de_PullRequestDoesNotExistException = (
  output: any,
  context: __SerdeContext
): PullRequestDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestEvent
 */
const de_PullRequestEvent = (output: any, context: __SerdeContext): PullRequestEvent => {
  return {
    actorArn: __expectString(output.actorArn),
    approvalRuleEventMetadata:
      output.approvalRuleEventMetadata != null
        ? de_ApprovalRuleEventMetadata(output.approvalRuleEventMetadata, context)
        : undefined,
    approvalRuleOverriddenEventMetadata:
      output.approvalRuleOverriddenEventMetadata != null
        ? de_ApprovalRuleOverriddenEventMetadata(output.approvalRuleOverriddenEventMetadata, context)
        : undefined,
    approvalStateChangedEventMetadata:
      output.approvalStateChangedEventMetadata != null
        ? de_ApprovalStateChangedEventMetadata(output.approvalStateChangedEventMetadata, context)
        : undefined,
    eventDate:
      output.eventDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate))) : undefined,
    pullRequestCreatedEventMetadata:
      output.pullRequestCreatedEventMetadata != null
        ? de_PullRequestCreatedEventMetadata(output.pullRequestCreatedEventMetadata, context)
        : undefined,
    pullRequestEventType: __expectString(output.pullRequestEventType),
    pullRequestId: __expectString(output.pullRequestId),
    pullRequestMergedStateChangedEventMetadata:
      output.pullRequestMergedStateChangedEventMetadata != null
        ? de_PullRequestMergedStateChangedEventMetadata(output.pullRequestMergedStateChangedEventMetadata, context)
        : undefined,
    pullRequestSourceReferenceUpdatedEventMetadata:
      output.pullRequestSourceReferenceUpdatedEventMetadata != null
        ? de_PullRequestSourceReferenceUpdatedEventMetadata(
            output.pullRequestSourceReferenceUpdatedEventMetadata,
            context
          )
        : undefined,
    pullRequestStatusChangedEventMetadata:
      output.pullRequestStatusChangedEventMetadata != null
        ? de_PullRequestStatusChangedEventMetadata(output.pullRequestStatusChangedEventMetadata, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestEventList
 */
const de_PullRequestEventList = (output: any, context: __SerdeContext): PullRequestEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PullRequestEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PullRequestIdList
 */
const de_PullRequestIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PullRequestIdRequiredException
 */
const de_PullRequestIdRequiredException = (output: any, context: __SerdeContext): PullRequestIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestMergedStateChangedEventMetadata
 */
const de_PullRequestMergedStateChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestMergedStateChangedEventMetadata => {
  return {
    destinationReference: __expectString(output.destinationReference),
    mergeMetadata: output.mergeMetadata != null ? de_MergeMetadata(output.mergeMetadata, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestSourceReferenceUpdatedEventMetadata
 */
const de_PullRequestSourceReferenceUpdatedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestSourceReferenceUpdatedEventMetadata => {
  return {
    afterCommitId: __expectString(output.afterCommitId),
    beforeCommitId: __expectString(output.beforeCommitId),
    mergeBase: __expectString(output.mergeBase),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestStatusChangedEventMetadata
 */
const de_PullRequestStatusChangedEventMetadata = (
  output: any,
  context: __SerdeContext
): PullRequestStatusChangedEventMetadata => {
  return {
    pullRequestStatus: __expectString(output.pullRequestStatus),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestStatusRequiredException
 */
const de_PullRequestStatusRequiredException = (
  output: any,
  context: __SerdeContext
): PullRequestStatusRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestTarget
 */
const de_PullRequestTarget = (output: any, context: __SerdeContext): PullRequestTarget => {
  return {
    destinationCommit: __expectString(output.destinationCommit),
    destinationReference: __expectString(output.destinationReference),
    mergeBase: __expectString(output.mergeBase),
    mergeMetadata: output.mergeMetadata != null ? de_MergeMetadata(output.mergeMetadata, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
    sourceCommit: __expectString(output.sourceCommit),
    sourceReference: __expectString(output.sourceReference),
  } as any;
};

/**
 * deserializeAws_json1_1PullRequestTargetList
 */
const de_PullRequestTargetList = (output: any, context: __SerdeContext): PullRequestTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PullRequestTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutFileEntryConflictException
 */
const de_PutFileEntryConflictException = (output: any, context: __SerdeContext): PutFileEntryConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PutFileOutput
 */
const de_PutFileOutput = (output: any, context: __SerdeContext): PutFileOutput => {
  return {
    blobId: __expectString(output.blobId),
    commitId: __expectString(output.commitId),
    treeId: __expectString(output.treeId),
  } as any;
};

/**
 * deserializeAws_json1_1PutRepositoryTriggersOutput
 */
const de_PutRepositoryTriggersOutput = (output: any, context: __SerdeContext): PutRepositoryTriggersOutput => {
  return {
    configurationId: __expectString(output.configurationId),
  } as any;
};

/**
 * deserializeAws_json1_1ReactionCountsMap
 */
const de_ReactionCountsMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ReactionForComment
 */
const de_ReactionForComment = (output: any, context: __SerdeContext): ReactionForComment => {
  return {
    reaction: output.reaction != null ? de_ReactionValueFormats(output.reaction, context) : undefined,
    reactionUsers: output.reactionUsers != null ? de_ReactionUsersList(output.reactionUsers, context) : undefined,
    reactionsFromDeletedUsersCount: __expectInt32(output.reactionsFromDeletedUsersCount),
  } as any;
};

/**
 * deserializeAws_json1_1ReactionLimitExceededException
 */
const de_ReactionLimitExceededException = (output: any, context: __SerdeContext): ReactionLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReactionsForCommentList
 */
const de_ReactionsForCommentList = (output: any, context: __SerdeContext): ReactionForComment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReactionForComment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReactionUsersList
 */
const de_ReactionUsersList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReactionValueFormats
 */
const de_ReactionValueFormats = (output: any, context: __SerdeContext): ReactionValueFormats => {
  return {
    emoji: __expectString(output.emoji),
    shortCode: __expectString(output.shortCode),
    unicode: __expectString(output.unicode),
  } as any;
};

/**
 * deserializeAws_json1_1ReactionValueRequiredException
 */
const de_ReactionValueRequiredException = (output: any, context: __SerdeContext): ReactionValueRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReferenceDoesNotExistException
 */
const de_ReferenceDoesNotExistException = (output: any, context: __SerdeContext): ReferenceDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReferenceNameRequiredException
 */
const de_ReferenceNameRequiredException = (output: any, context: __SerdeContext): ReferenceNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReferenceTypeNotSupportedException
 */
const de_ReferenceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ReferenceTypeNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplacementContentRequiredException
 */
const de_ReplacementContentRequiredException = (
  output: any,
  context: __SerdeContext
): ReplacementContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplacementTypeRequiredException
 */
const de_ReplacementTypeRequiredException = (
  output: any,
  context: __SerdeContext
): ReplacementTypeRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryDoesNotExistException
 */
const de_RepositoryDoesNotExistException = (output: any, context: __SerdeContext): RepositoryDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryLimitExceededException
 */
const de_RepositoryLimitExceededException = (
  output: any,
  context: __SerdeContext
): RepositoryLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryMetadata
 */
const de_RepositoryMetadata = (output: any, context: __SerdeContext): RepositoryMetadata => {
  return {
    Arn: __expectString(output.Arn),
    accountId: __expectString(output.accountId),
    cloneUrlHttp: __expectString(output.cloneUrlHttp),
    cloneUrlSsh: __expectString(output.cloneUrlSsh),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    defaultBranch: __expectString(output.defaultBranch),
    lastModifiedDate:
      output.lastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedDate)))
        : undefined,
    repositoryDescription: __expectString(output.repositoryDescription),
    repositoryId: __expectString(output.repositoryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryMetadataList
 */
const de_RepositoryMetadataList = (output: any, context: __SerdeContext): RepositoryMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryNameExistsException
 */
const de_RepositoryNameExistsException = (output: any, context: __SerdeContext): RepositoryNameExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNameIdPair
 */
const de_RepositoryNameIdPair = (output: any, context: __SerdeContext): RepositoryNameIdPair => {
  return {
    repositoryId: __expectString(output.repositoryId),
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNameIdPairList
 */
const de_RepositoryNameIdPairList = (output: any, context: __SerdeContext): RepositoryNameIdPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryNameIdPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryNameList
 */
const de_RepositoryNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryNameRequiredException
 */
const de_RepositoryNameRequiredException = (output: any, context: __SerdeContext): RepositoryNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNamesRequiredException
 */
const de_RepositoryNamesRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryNamesRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNotAssociatedWithPullRequestException
 */
const de_RepositoryNotAssociatedWithPullRequestException = (
  output: any,
  context: __SerdeContext
): RepositoryNotAssociatedWithPullRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNotFoundList
 */
const de_RepositoryNotFoundList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryTrigger
 */
const de_RepositoryTrigger = (output: any, context: __SerdeContext): RepositoryTrigger => {
  return {
    branches: output.branches != null ? de_BranchNameList(output.branches, context) : undefined,
    customData: __expectString(output.customData),
    destinationArn: __expectString(output.destinationArn),
    events: output.events != null ? de_RepositoryTriggerEventList(output.events, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggerBranchNameListRequiredException
 */
const de_RepositoryTriggerBranchNameListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerBranchNameListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggerDestinationArnRequiredException
 */
const de_RepositoryTriggerDestinationArnRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerDestinationArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggerEventList
 */
const de_RepositoryTriggerEventList = (
  output: any,
  context: __SerdeContext
): (RepositoryTriggerEventEnum | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryTriggerEventsListRequiredException
 */
const de_RepositoryTriggerEventsListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerEventsListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggerExecutionFailure
 */
const de_RepositoryTriggerExecutionFailure = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerExecutionFailure => {
  return {
    failureMessage: __expectString(output.failureMessage),
    trigger: __expectString(output.trigger),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggerExecutionFailureList
 */
const de_RepositoryTriggerExecutionFailureList = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerExecutionFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryTriggerExecutionFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryTriggerNameList
 */
const de_RepositoryTriggerNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryTriggerNameRequiredException
 */
const de_RepositoryTriggerNameRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggerNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryTriggersList
 */
const de_RepositoryTriggersList = (output: any, context: __SerdeContext): RepositoryTrigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositoryTrigger(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RepositoryTriggersListRequiredException
 */
const de_RepositoryTriggersListRequiredException = (
  output: any,
  context: __SerdeContext
): RepositoryTriggersListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceArnRequiredException
 */
const de_ResourceArnRequiredException = (output: any, context: __SerdeContext): ResourceArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RestrictedSourceFileException
 */
const de_RestrictedSourceFileException = (output: any, context: __SerdeContext): RestrictedSourceFileException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RevisionIdRequiredException
 */
const de_RevisionIdRequiredException = (output: any, context: __SerdeContext): RevisionIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RevisionNotCurrentException
 */
const de_RevisionNotCurrentException = (output: any, context: __SerdeContext): RevisionNotCurrentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SameFileContentException
 */
const de_SameFileContentException = (output: any, context: __SerdeContext): SameFileContentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SamePathRequestException
 */
const de_SamePathRequestException = (output: any, context: __SerdeContext): SamePathRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SourceAndDestinationAreSameException
 */
const de_SourceAndDestinationAreSameException = (
  output: any,
  context: __SerdeContext
): SourceAndDestinationAreSameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SourceFileOrContentRequiredException
 */
const de_SourceFileOrContentRequiredException = (
  output: any,
  context: __SerdeContext
): SourceFileOrContentRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SubModule
 */
const de_SubModule = (output: any, context: __SerdeContext): SubModule => {
  return {
    absolutePath: __expectString(output.absolutePath),
    commitId: __expectString(output.commitId),
    relativePath: __expectString(output.relativePath),
  } as any;
};

/**
 * deserializeAws_json1_1SubModuleList
 */
const de_SubModuleList = (output: any, context: __SerdeContext): SubModule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubModule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SymbolicLink
 */
const de_SymbolicLink = (output: any, context: __SerdeContext): SymbolicLink => {
  return {
    absolutePath: __expectString(output.absolutePath),
    blobId: __expectString(output.blobId),
    fileMode: __expectString(output.fileMode),
    relativePath: __expectString(output.relativePath),
  } as any;
};

/**
 * deserializeAws_json1_1SymbolicLinkList
 */
const de_SymbolicLinkList = (output: any, context: __SerdeContext): SymbolicLink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SymbolicLink(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagKeysListRequiredException
 */
const de_TagKeysListRequiredException = (output: any, context: __SerdeContext): TagKeysListRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagPolicyException
 */
const de_TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TagsMapRequiredException
 */
const de_TagsMapRequiredException = (output: any, context: __SerdeContext): TagsMapRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetRequiredException
 */
const de_TargetRequiredException = (output: any, context: __SerdeContext): TargetRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetsRequiredException
 */
const de_TargetsRequiredException = (output: any, context: __SerdeContext): TargetsRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TestRepositoryTriggersOutput
 */
const de_TestRepositoryTriggersOutput = (output: any, context: __SerdeContext): TestRepositoryTriggersOutput => {
  return {
    failedExecutions:
      output.failedExecutions != null
        ? de_RepositoryTriggerExecutionFailureList(output.failedExecutions, context)
        : undefined,
    successfulExecutions:
      output.successfulExecutions != null
        ? de_RepositoryTriggerNameList(output.successfulExecutions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TipOfSourceReferenceIsDifferentException
 */
const de_TipOfSourceReferenceIsDifferentException = (
  output: any,
  context: __SerdeContext
): TipOfSourceReferenceIsDifferentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TipsDivergenceExceededException
 */
const de_TipsDivergenceExceededException = (output: any, context: __SerdeContext): TipsDivergenceExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TitleRequiredException
 */
const de_TitleRequiredException = (output: any, context: __SerdeContext): TitleRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateContentOutput
 */
const de_UpdateApprovalRuleTemplateContentOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateContentOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null ? de_ApprovalRuleTemplate(output.approvalRuleTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionOutput
 */
const de_UpdateApprovalRuleTemplateDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateDescriptionOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null ? de_ApprovalRuleTemplate(output.approvalRuleTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateApprovalRuleTemplateNameOutput
 */
const de_UpdateApprovalRuleTemplateNameOutput = (
  output: any,
  context: __SerdeContext
): UpdateApprovalRuleTemplateNameOutput => {
  return {
    approvalRuleTemplate:
      output.approvalRuleTemplate != null ? de_ApprovalRuleTemplate(output.approvalRuleTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCommentOutput
 */
const de_UpdateCommentOutput = (output: any, context: __SerdeContext): UpdateCommentOutput => {
  return {
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestApprovalRuleContentOutput
 */
const de_UpdatePullRequestApprovalRuleContentOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestApprovalRuleContentOutput => {
  return {
    approvalRule: output.approvalRule != null ? de_ApprovalRule(output.approvalRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestDescriptionOutput
 */
const de_UpdatePullRequestDescriptionOutput = (
  output: any,
  context: __SerdeContext
): UpdatePullRequestDescriptionOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestStatusOutput
 */
const de_UpdatePullRequestStatusOutput = (output: any, context: __SerdeContext): UpdatePullRequestStatusOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePullRequestTitleOutput
 */
const de_UpdatePullRequestTitleOutput = (output: any, context: __SerdeContext): UpdatePullRequestTitleOutput => {
  return {
    pullRequest: output.pullRequest != null ? de_PullRequest(output.pullRequest, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserInfo
 */
const de_UserInfo = (output: any, context: __SerdeContext): UserInfo => {
  return {
    date: __expectString(output.date),
    email: __expectString(output.email),
    name: __expectString(output.name),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
